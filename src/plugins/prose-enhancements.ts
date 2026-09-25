// Sätteri hast plugin (Astro 7's default Markdown processor, also used for MDX).
// Minimal shapes so we don't depend on satteri's or hast's types directly.
type Element = {
    type: 'element'
    tagName: string
    properties: Record<string, unknown>
    children: Array<Element | { type: 'text'; value: string }>
}
type Context = {
    data: Record<string, unknown>
    appendChild(node: Element, child: Element): void
    replaceNode(node: Element, next: Element): void
    setProperty(node: Element, key: string, value: unknown): void
    textContent(node: Element): string
}

// Same algorithm as github-slugger (what Astro uses), so ids match Astro's own.
function slug(text: string, seen: Map<string, number>) {
    const base = text.toLowerCase().replace(/[^\p{L}\p{M}\p{N}\p{Pc} -]/gu, '').replace(/ /g, '-')
    let result = base
    let count = seen.get(base) ?? 0
    while (seen.has(result)) result = `${base}-${++count}`
    seen.set(base, count)
    seen.set(result, 0)
    return result
}

/**
 * - Appends a "#" link to h2–h4 so sections can be shared.
 * - Turns a paragraph holding only a titled image into <figure> with the title as <figcaption>.
 */
export const proseEnhancements = {
    name: 'prose-enhancements',
    before(_root: unknown, ctx: Context) {
        ctx.data.headingSlugs = new Map<string, number>()
    },
    element: [
        {
            filter: ['h2', 'h3', 'h4'],
            visit(node: Element, ctx: Context) {
                // Heading ids are assigned after user plugins run, so set them here; Astro keeps existing ids.
                const id = (node.properties.id as string | undefined) ??
                    slug(ctx.textContent(node), ctx.data.headingSlugs as Map<string, number>)
                ctx.setProperty(node, 'id', id)
                ctx.appendChild(node, {
                    type: 'element',
                    tagName: 'a',
                    properties: { href: `#${id}`, className: ['heading-anchor'], ariaLabel: 'Link to this section' },
                    children: [{ type: 'text', value: '#' }],
                })
            },
        },
        {
            filter: ['p'],
            visit(node: Element, ctx: Context) {
                const content = node.children.filter((c) => !(c.type === 'text' && !c.value.trim()))
                const img = content[0]
                if (content.length !== 1 || img.type !== 'element' || img.tagName !== 'img' || !img.properties.title) return
                const { title, ...properties } = img.properties
                ctx.replaceNode(node, {
                    type: 'element',
                    tagName: 'figure',
                    properties: {},
                    children: [
                        { ...img, properties },
                        { type: 'element', tagName: 'figcaption', properties: {}, children: [{ type: 'text', value: String(title) }] },
                    ],
                })
            },
        },
    ],
}

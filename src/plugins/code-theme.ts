// Syntax theme built from the site palette: Tailwind neutrals for structure,
// the amber --color-accent (global.css) for literals. Keep the two in sync.
const neutral = {
    50: '#fafafa',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    950: '#0a0a0a',
}
const accent = '#f5b544'
const accentSoft = '#f2d39b'

export const codeTheme = {
    name: 'kamm3r',
    type: 'dark' as const,
    colors: {
        'editor.background': neutral[950],
        'editor.foreground': neutral[300],
    },
    tokenColors: [
        {
            scope: ['comment', 'punctuation.definition.comment'],
            settings: { foreground: neutral[500], fontStyle: 'italic' },
        },
        {
            scope: ['keyword', 'storage', 'storage.type', 'keyword.operator.new', 'keyword.control'],
            settings: { foreground: neutral[400] },
        },
        {
            scope: ['keyword.operator', 'punctuation', 'meta.brace', 'punctuation.separator', 'punctuation.terminator'],
            settings: { foreground: neutral[500] },
        },
        {
            scope: ['string', 'string.template', 'punctuation.definition.string'],
            settings: { foreground: accentSoft },
        },
        {
            scope: ['constant.numeric', 'constant.language', 'constant.character', 'constant.other'],
            settings: { foreground: accent },
        },
        {
            scope: ['entity.name.function', 'support.function', 'meta.function-call entity.name.function'],
            settings: { foreground: neutral[50] },
        },
        {
            scope: ['entity.name.type', 'entity.name.class', 'support.class', 'support.type', 'entity.other.inherited-class'],
            settings: { foreground: neutral[200], fontStyle: 'bold' },
        },
        {
            scope: ['variable', 'variable.other', 'variable.parameter', 'meta.object-literal.key', 'support.variable.property'],
            settings: { foreground: neutral[300] },
        },
        {
            scope: ['entity.name.tag', 'entity.other.attribute-name'],
            settings: { foreground: neutral[200] },
        },
        {
            scope: ['markup.inserted'],
            settings: { foreground: accent },
        },
        {
            scope: ['markup.deleted'],
            settings: { foreground: neutral[500], fontStyle: 'strikethrough' },
        },
    ],
}

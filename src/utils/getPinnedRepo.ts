//import { type Output, object, array,parse, string } from 'valibot'
import { z } from 'zod'

const pinnedRepo = z.object({
    repo: z.string(),
    link: z.string(),
    description: z.string()
})
export type Repo = z.infer<typeof pinnedRepo>

export async function getPinnedRepos(number: 1 | 2 | 3 | 4 | 5 | 6): Promise<Repo[]> {
    const res = await fetch("https://gh-pinned.vercel.app/api/user/kamm3r").then((res) => res.json())

    const repos = pinnedRepo.array().parse(res)

    return repos.slice(0, number)
}

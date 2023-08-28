import { z } from "zod";

const repoSchema = z.object({
  name: z.string(),
  link: z.string(),
  description: z.string(),
});

export type Repo = z.infer<typeof repoSchema>;

export async function getPinnedRepos(
  number: 1 | 2 | 3 | 4 | 5 | 6
): Promise<Repo[]> {
  const res = await fetch("https://pinned.thrzl.xyz/kamm3r").then(
    (res) => res.json()
  );

  const repos = repoSchema.array().parse(res);

  return repos.slice(0, number);
}

import { z } from "zod";

const projectSchema = z.object({
  name: z.string(),
  link: z.string(),
  description: z.string(),
});

export type Project = z.infer<typeof projectSchema>;

export async function getPinnedRepos(
  number: 1 | 2 | 3 | 4 | 5 | 6
): Promise<Project[]> {
  const res = await fetch("https://pinned.thrzl.xyz/kamm3r").then(
    (res) => res.json()
  );

  const projects = projectSchema.array().parse(res);

  return projects.slice(0, number);
}
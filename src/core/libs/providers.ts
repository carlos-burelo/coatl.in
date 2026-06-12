import { getCollection } from "astro:content";

export function toSlug(id: string) {
    return id.replace(/\/index\.(md|mdx)$/, "").replace(/\.(md|mdx)$/, "");
}

export async function getSnippets() {
    const entries = await getCollection("snippets");
    return entries.map((entry) => ({
        params: { slug: toSlug(entry.id) },
        props: { entry },
    }));
}

export async function getPosts() {
    const entries = await getCollection("blog");
    return entries
        .sort((a, b) => b.data.createdAt.getTime() - a.data.createdAt.getTime())
        .map((entry) => ({
            params: { slug: toSlug(entry.id) },
            props: { entry },
        }));
}

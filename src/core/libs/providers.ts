import { getCollection } from "astro:content";

export async function getSnippets() {
    const blogEntries = await getCollection("snippets");
    const entries = blogEntries.map((entry) => ({
        params: { slug: entry.slug },
        props: { entry },
    }));
    return entries
}

export async function getPosts() {
    const blogEntries = await getCollection("blog");
    const entries = blogEntries.map((entry) => ({
        params: { slug: entry.slug },
        props: { entry },
    }));

    return entries.sort((a, b) => {
        return a.props.entry.data.createdAt < b.props.entry.data.createdAt ? 1 : -1;
    });
}


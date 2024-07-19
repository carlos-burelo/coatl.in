import type { MarkdownHeading } from "astro";
import type { CollectionEntry } from "astro:content";

export declare global {
    type Post = CollectionEntry<'blog'>
    type Snippet = CollectionEntry<'snippets'>
    type Project = CollectionEntry<'works'>
    type Heading = MarkdownHeading
}
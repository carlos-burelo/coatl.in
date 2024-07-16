export type { CollectionEntry } from 'astro:content'

export declare global {
    export interface Post$ {
        post: CollectionEntry<'blog'>
    }

    export interface Experience$ {
        title: string
        summary: string
        date: string
        role: string
    }

    export type Snippet$ = CollectionEntry<'snippets'>

    export interface Icon$ {
        name: string
    }

    export interface Modal$ {
        id: string
    }

    export interface NavLink$ {
        href: string
        text: string
        icon: string
        target: string
    }

    export interface SearchBar$ {
        items: unknown[]
        path: string
    }

}
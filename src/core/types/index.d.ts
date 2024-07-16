import { CollectionEntry } from 'astro:content'

export interface Post$ {
    post: CollectionEntry<'blog'>
}

export interface Experience$ {
    title: string
    summary: string
    date: string
    role: string
}

export interface Icon$ {
    name: string
}
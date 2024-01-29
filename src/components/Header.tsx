import React from 'react'
import { createClient } from "@/prismicio";
import Link from "next/link";
import { PrismicNextLink } from '@prismicio/next';
import NavBar from '@/components/NavBar';

export default async function Header() {
    const client = createClient();
    const settings = await client.getSingle("settings");
    return(
        <header className='top-0 z-50 max-w-9xl md:sticky'>
            {/* do md sticky to keep bar scrolling */}
            <NavBar settings={settings} />
        </header>
    )
}
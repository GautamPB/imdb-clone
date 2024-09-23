import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import { getGenres } from '@/lib/apiCall'

export const metadata: Metadata = {
    title: 'IMDb',
    description: 'IMDb clone created using NextJS',
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className="bg-black text-white">
                <Header />
                {children}
            </body>
        </html>
    )
}

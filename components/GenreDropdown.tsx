import { Genre, Genres } from '@/typings'
import { ChevronDown } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import { ScrollArea } from './ui/scroll-area'

const GenreDropdown = async () => {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en'

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        },

        next: {
            revalidate: 60 * 60 * 24,
        },
    }

    const results = await fetch(url, options)
    const genreResults = (await results.json()) as Genres

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="bg-white text-black p-2 rounded-sm flex items-center outline-none border-none space-x-2">
                <h1>Genre</h1>
                <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <ScrollArea className="h-72">
                    {genreResults?.genres?.map((genre: Genre) => (
                        <Link
                            key={genre.id}
                            href={`/genre/${genre.id}?genre=${genre.name}`}
                        >
                            <DropdownMenuItem className="cursor-pointer">
                                {genre.name}
                            </DropdownMenuItem>
                        </Link>
                    ))}
                </ScrollArea>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default GenreDropdown

import { Genre } from '@/typings'
import Link from 'next/link'

const GenreCard = ({ genre }: { genre: Genre }) => {
    return (
        <Link
            href={`/genre/${genre.id}?genre=${genre.name}`}
            className="bg-[#1A1A1A] rounded-sm cursor-pointer hover:scale-105 ease-out transition duration-200"
        >
            <div className="w-[20rem] h-[10rem] flex items-center justify-center">
                <h1 className="font-bold text-2xl">{genre.name}</h1>
            </div>
        </Link>
    )
}

export default GenreCard

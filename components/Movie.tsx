import Image from 'next/image'
import getImagePath from '@/lib/getImagePath'
import { MovieType } from '@/typings'
import { InfoIcon } from 'lucide-react'

const Movie = ({ movie }: { movie: MovieType }) => {
    return (
        <div className="flex flex-col min-w-[12rem] cursor-pointer bg-[#1A1A1A] rounded-sm">
            <Image
                className="h-[18rem] object-contain"
                src={getImagePath(movie?.poster_path, true)}
                alt="posterPath"
                width={1920}
                height={1080}
            />

            <div className="py-4 px-2">
                <h1 className="text-gray-400 my-2">
                    ⭐ {Math.round(movie.vote_average * 10) / 10}
                </h1>

                <h1 className="hover:underline inline-block truncate w-full">
                    {movie.title}
                </h1>

                <div className="flex rounded-md justify-center items-center mt-8 space-x-4 bg-[#2F343B] p-2">
                    <InfoIcon />
                    <h1 className="text-[#4B7BB9]">Know more</h1>
                </div>
            </div>
        </div>
    )
}

export default Movie

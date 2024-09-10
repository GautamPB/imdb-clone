import { Media } from '@/typings'
import Image from 'next/image'
import getImagePath from '@/lib/getImagePath'

type Props = {
    movie: Media
}

const NextCard = ({ movie }: Props) => {
    return (
        <div className="bg-[#121212] p-2 flex items-start space-x-4">
            <Image
                className="w-16"
                src={getImagePath(movie.poster_path)}
                alt=""
                width={1920}
                height={1080}
            />

            <div className="flex flex-col space-y-2">
                <div className="line-clamp-1 font-bold">
                    <h1>{movie.title}</h1>
                </div>
                <h2 className="text-sm">
                    ⭐️ {Math.round(movie.vote_average * 10) / 10}
                </h2>
                <p className="text-sm text-gray-400">
                    ♡ {Math.round(movie.popularity)}
                </p>
            </div>
        </div>
    )
}

export default NextCard

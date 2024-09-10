import getImagePath from '@/lib/getImagePath'
import { Media } from '@/typings'
import Image from 'next/image'

const CarouselCard = ({ movie }: { movie: Media }) => {
    const dateTimeFormatter = new Intl.DateTimeFormat('en-US', {
        dateStyle: 'medium',
    })

    return (
        <div className="w-[100vw] h-full lg:w-[70vw] relative">
            <Image
                className="h-full w-full object-cover"
                src={getImagePath(movie.backdrop_path, true)}
                alt=""
                width={1920}
                height={1080}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/90 to-black/90" />

            <div className="p-2 absolute w-full bottom-0 font-bold flex items-start space-x-4">
                <Image
                    className="w-[5rem] md:w-[10rem] lg:w-[15rem]"
                    src={getImagePath(movie.poster_path, true)}
                    alt="posterPath"
                    width={1920}
                    height={1080}
                />

                <div className="w-full space-y-6">
                    <h1 className="text-xl md:text-3xl lg:text-4xl">
                        {movie.title}
                    </h1>

                    <div className="flex items-end space-x-2 text-lg md:text-2xl lg:text-2xl">
                        <h2>⭐️ {Math.round(movie.vote_average * 10) / 10}</h2>

                        <h2 className="text-gray-300">
                            {dateTimeFormatter.format(
                                new Date(movie.release_date)
                            )}
                        </h2>
                    </div>

                    <div className="line-clamp-3">
                        <p className="hidden md:block">{movie.overview}</p>
                    </div>

                    <div className="flex items-center space-x-4 text-gray-400">
                        <p>Ratings: {movie.vote_count}</p>
                        <p>♡ {Math.round(movie.popularity)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselCard

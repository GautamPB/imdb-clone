import getImagePath from '@/lib/getImagePath'
import { Media } from '@/typings'
import Image from 'next/image'

const CarouselCard = ({ movie }: { movie: Media }) => {
    return (
        <div className="w-[100vw] h-full md:w-[70vw] relative">
            <Image
                className="h-full w-full object-contain"
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

                <div className="w-full space-y-4">
                    <h1 className="text-lg md:text-2xl lg:text-3xl">
                        {movie.title}
                    </h1>

                    <p className="hidden md:block hover:line-clamp-3">
                        {movie.overview}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CarouselCard

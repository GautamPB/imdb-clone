'use client'

import { Media } from '@/typings'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'
import CarouselCard from './CarouselCard'
import NextCard from './NextCard'

Autoplay.globalOptions = { delay: 8000 }

type Props = {
    movies: Media[]
}

const Carousel = ({ movies }: Props) => {
    const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
        Fade(),
        Autoplay(),
    ])

    return (
        <div ref={emblaRef} className="w-full flex space-x-2 items-start">
            {/* carousel container */}
            <div className="flex overflow-x-scroll lg:w-[70vw] w-full h-full scrollbar-hide">
                {movies?.map((movie: Media) => (
                    <div className="w-full h-full flex items-start">
                        <CarouselCard movie={movie} key={movie.id} />
                    </div>
                ))}
            </div>

            <div className="hidden h-full lg:flex grow flex-col space-y-4">
                <h1 className="text-[#F5C518] font-bold text-lg">Up next</h1>

                <div className="overflow-y-scroll w-full h-full space-y-2 flex-col flex scrollbar-hide">
                    {movies?.map((movie: Media) => (
                        <NextCard movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel

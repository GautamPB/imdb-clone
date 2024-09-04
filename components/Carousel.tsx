'use client'

import { Media } from '@/typings'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'
import CarouselCard from './CarouselCard'

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
        <div
            ref={emblaRef}
            className="w-full h-full flex space-x-2 items-start"
        >
            {/* carousel container */}
            <div className="flex overflow-x-scroll md:w-[70vw] md:h-1/2 w-full h-full scrollbar-hide">
                {movies?.map((movie: Media) => (
                    <div className="w-full h-full flex items-start">
                        <CarouselCard movie={movie} key={movie.id} />
                    </div>
                ))}
            </div>

            <div className="hidden lg:flex flex-col">
                <h1 className="text-[#F5C518]">Up next</h1>
            </div>
        </div>
    )
}

export default Carousel

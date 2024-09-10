import {
    getGenres,
    getPopularCelebrities,
    getTrending,
    getTrendingTV,
} from '@/lib/apiCall'
import Movie from '@/components/Movie'
import { Actor, Genre, Media } from '@/typings'
import ActorCard from '@/components/ActorCard'
import GenreCard from '@/components/GenreCard'
import CarouselWrapper from '@/components/CarouselWrapper'

export default async function Home() {
    const trendingMovies = await getTrending()

    const popularCast = await getPopularCelebrities()

    const genres = await getGenres()

    const trendingTV = await getTrendingTV()

    return (
        <div className="px-2 md:px-8 w-full h-full">
            <div className="flex grow-1 max-h-[35rem]">
                <CarouselWrapper />
            </div>

            <div className="mt-2">
                <h1 className="text-[#F5C518] font-bold text-4xl mt-8 mb-4">
                    Featured today
                </h1>

                {/* Trending Movies */}
                <div>
                    <div className="mb-8">
                        <div>
                            <h3 className="border-l-4 pl-2 border-[#F5C518] font-semibold text-2xl">
                                Top picks
                            </h3>
                        </div>
                        <p className="text-gray-400 my-2">
                            Trending movies for you
                        </p>
                    </div>
                    <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
                        {trendingMovies?.results.map((movie: Media) => (
                            <Movie media={movie} key={movie.id} />
                        ))}
                    </div>
                </div>

                {/* Trending Movies */}
                <div className="mt-16">
                    <div className="mb-8">
                        <div>
                            <h3 className="border-l-4 pl-2 border-[#F5C518] font-semibold text-2xl">
                                Most popular celebrities
                            </h3>
                        </div>
                    </div>
                    <div className="flex space-x-12 overflow-x-scroll scrollbar-hide">
                        {popularCast?.results.map(
                            (actor: Actor, index: number) => (
                                <ActorCard
                                    actor={actor}
                                    key={actor.id}
                                    rank={index + 1}
                                />
                            )
                        )}
                    </div>
                </div>

                {/* Popular Genres */}
                <div className="mt-16">
                    <div className="mb-8">
                        <div>
                            <h3 className="border-l-4 pl-2 border-[#F5C518] font-semibold text-2xl">
                                Popular interests
                            </h3>
                        </div>
                    </div>
                    <div className="flex space-x-12 overflow-x-scroll scrollbar-hide">
                        {genres?.map((genre: Genre) => (
                            <GenreCard genre={genre} key={genre.id} />
                        ))}
                    </div>
                </div>

                {/* Trending TV Shows */}
                <div className="mt-16">
                    <div className="mb-8">
                        <div>
                            <h3 className="border-l-4 pl-2 border-[#F5C518] font-semibold text-2xl">
                                Trending TV Shows
                            </h3>
                        </div>
                    </div>
                    <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
                        {trendingTV?.results.map((tv: Media) => (
                            <Movie media={tv} key={tv.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

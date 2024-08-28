import { getPopularCelebrities, getTrending } from '@/lib/apiCall'
import Movie from '@/components/Movie'
import { Actor, MovieType } from '@/typings'
import ActorCard from '@/components/ActorCard'

export default async function Home() {
    const trendingMovies = await getTrending()

    const popularCast = await getPopularCelebrities()

    return (
        <div className="px-2 md:px-8">
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
                        {trendingMovies?.results.map((movie: MovieType) => (
                            <Movie movie={movie} key={movie.id} />
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
            </div>
        </div>
    )
}

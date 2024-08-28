'use client'

import { getInTheatres, getTrending } from '@/lib/apiCall'
import Movie from '@/components/Movie'

export default function Home() {
    const inTheatres = getInTheatres()

    const trendingMovies = getTrending()

    console.log(inTheatres)

    return (
        <div className="px-2 md:px-8">
            <div className="mt-2">
                <h1>Welcome to IMDb</h1>
            </div>
        </div>
    )
}

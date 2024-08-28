import { Movie } from '@/typings'

export async function fetchFromTMDB(url: URL) {
    url.searchParams.set('include_adult', 'false')
    url.searchParams.set('include_video', 'true')
    url.searchParams.set('language', 'en-US')
    url.searchParams.set('language', 'en-US')
    url.searchParams.set('page', '1')
    url.searchParams.set('sort_by', 'popularity.desc')

    const options: RequestInit = {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        },

        next: {
            revalidate: 60 * 60 * 24,
        },
    }

    const response = await fetch(url, options)
    const data = await response.json()

    return data
}

export async function getInTheatres() {
    const url = new URL('https://api.themoviedb.org/3/movie/now_playing')

    const data = await fetchFromTMDB(url)

    return data
}

export async function getTrending() {
    const url = new URL('https://api.themoviedb.org/3/discover/movie')

    const data = await fetchFromTMDB(url)

    return data
}

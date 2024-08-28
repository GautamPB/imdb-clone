export type Genre = {
    id: number
    name: string
}

export type Genres = {
    genres: Genre[]
}

export type MovieType = {
    adult: boolean
    backdrop_path: string
    genre_ids: [number]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export type Actor = {
    id: number
    name: string
    original_name: string
    media_type: string
    adult: boolean
    popularity: number
    gender: number
    known_for_department: string
    profile_path: string
}

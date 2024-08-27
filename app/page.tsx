import { getInTheatres } from '@/lib/apiCall'

export default function Home() {
    const inTheatres = getInTheatres()

    console.log(inTheatres)

    return (
        <div className="px-2 md:px-8">
            <div className="mt-2">
                <h1>Welcome to IMDb</h1>
            </div>
        </div>
    )
}

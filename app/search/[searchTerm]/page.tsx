import { notFound } from 'next/navigation'

type Props = {
    params: {
        searchTerm: string
    }
}

const Search = ({ params: { searchTerm } }: Props) => {
    const termToUse = decodeURI(searchTerm)

    if (!termToUse) {
        return notFound()
    }

    return (
        <div>
            <h1>Search Results for {termToUse}</h1>
        </div>
    )
}

export default Search

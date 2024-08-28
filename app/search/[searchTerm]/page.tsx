import { notFound } from 'next/navigation'

type Props = {
    params: {
        searchTerm: string
    }
    searchParams: {
        category: string
    }
}

const Search = ({
    params: { searchTerm },
    searchParams: { category },
}: Props) => {
    const termToUse = decodeURI(searchTerm)

    console.log(searchTerm, category)

    if (!termToUse) {
        return notFound()
    }

    return (
        <div className="px-2 md:px-8 mt-2">
            <h1>
                Search Results for {termToUse}, {category}
            </h1>
        </div>
    )
}

export default Search

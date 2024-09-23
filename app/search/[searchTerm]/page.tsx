/* eslint-disable react/no-unescaped-entities */
import { notFound } from 'next/navigation'
import { getSearchResults } from '@/lib/apiCall'
import { Actor, Media } from '@/typings'
import ActorSearch from '@/components/ActorSearch'
import MediaSearch from '@/components/MediaSearch'

type Props = {
    params: {
        searchTerm: string
    }
    searchParams: {
        category: string
    }
}

const Search = async ({
    params: { searchTerm },
    searchParams: { category },
}: Props) => {
    const termToUse = decodeURI(searchTerm)

    const searchResults = await getSearchResults(termToUse, category)

    console.log(searchResults)

    if (!termToUse) {
        return notFound()
    }

    return (
        <div className="px-2 md:px-8 mt-10">
            <h1 className="font-bold text-3xl">
                Search Results for "{termToUse}"
            </h1>

            {/* search results */}
            <div className="mt-16 w-full">
                <h1 className="font-bold text-2xl border-l-4 border-[#F5C518] pl-2">
                    Titles
                </h1>

                <div className="border border-gray-800 mt-4 flex flex-col w-full">
                    {searchResults?.results?.map((search: any) => {
                        if (
                            search.media_type === 'person' ||
                            category.toLowerCase() === 'person'
                        ) {
                            return (
                                <ActorSearch actor={search} key={search.id} />
                            )
                        } else {
                            return (
                                <MediaSearch media={search} key={search.id} />
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Search

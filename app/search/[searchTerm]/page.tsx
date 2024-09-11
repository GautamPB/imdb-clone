import { notFound } from 'next/navigation'
import { getSearchResults } from '@/lib/apiCall'
import { Actor, Media } from '@/typings'
import SearchCard from '@/components/MediaSearch'
import ActorSearch from '@/components/ActorSearch'

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

                <div className="w-full border border-gray-800 mt-4 flex flex-col w-full">
                    {category.toLowerCase() !== 'person'
                        ? searchResults?.results
                              ?.filter(
                                  (search: any) =>
                                      search.media_type !== 'person'
                              )
                              .map((media: Media) => (
                                  <SearchCard media={media} key={media.id} />
                              ))
                        : searchResults?.results
                              ?.filter(
                                  (search: any) =>
                                      search.media_type === 'person'
                              )
                              .map((actor: Actor) => (
                                  <ActorSearch actor={actor} key={actor.id} />
                              ))}
                </div>
            </div>
        </div>
    )
}

export default Search

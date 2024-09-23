import { Media } from '@/typings'
import Image from 'next/image'
import getImagePath from '@/lib/getImagePath'

const MediaSearch = ({ media }: { media: Media }) => {
    return (
        <div className="flex p-2 items-start space-x-2 cursor-pointer border-b border-gray-600 hover:bg-[#1A1A1A] transition duration-200 ease-out group">
            <div>
                <Image
                    className="w-24"
                    src={getImagePath(media.poster_path)}
                    alt="posterPath"
                    width={1920}
                    height={1080}
                />
            </div>

            <div>
                <div className="line-clamp-1 text-lg font-bold group-hover:text-gray-400">
                    <h1>{media.title ? media.title : media.name}</h1>

                    <h2>{media.vote_average}</h2>
                </div>
            </div>
        </div>
    )
}

export default MediaSearch

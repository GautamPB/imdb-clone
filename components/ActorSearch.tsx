import { Actor } from '@/typings'
import getImagePath from '@/lib/getImagePath'
import Image from 'next/image'

const ActorSearch = ({ actor }: { actor: Actor }) => {
    return (
        <div className="flex items-start space-x-2 group border-b p-2 border-gray-600">
            <Image
                className="w-24 h-24 object-cover rounded-full"
                src={getImagePath(actor.profile_path)}
                alt=""
                width={1920}
                height={1080}
            />

            <div className="space-y-2">
                <h1 className="font-bold text-lg group-hover:text-gray-400">
                    {actor.name}
                </h1>

                <h2 className="group-hover:text-gray-400">
                    Department: {actor.known_for_department}
                </h2>
            </div>
        </div>
    )
}

export default ActorSearch

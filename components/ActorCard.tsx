import { Actor } from '@/typings'
import Image from 'next/image'
import getImagePath from '@/lib/getImagePath'

type Props = {
    actor: Actor
    rank: number
}

const ActorCard = ({ actor, rank }: Props) => {
    return (
        <div className="min-w-[10rem] cursor-pointer group relative flex flex-col items-center space-y-4">
            <div className="w-40 h-40 relative">
                <div className="bg-[#1a1c29]/60 w-full h-full absolute top-0 hidden group-hover:block rounded-full" />
                <Image
                    className="w-full h-full rounded-full object-cover"
                    src={getImagePath(actor.profile_path)}
                    alt="actorName"
                    width={1920}
                    height={1080}
                />
            </div>

            <h1 className="inline-block hover:underline mt-2 group-hover:text-gray-400">
                {rank}. {actor.original_name}
            </h1>
        </div>
    )
}

export default ActorCard

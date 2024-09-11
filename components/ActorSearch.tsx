import { Actor } from '@/typings'

const ActorSearch = ({ actor }: { actor: Actor }) => {
    return (
        <div>
            <h1>{actor.name}</h1>
        </div>
    )
}

export default ActorSearch

type Props = {
    params: {
        id: string
    }
    searchParams: {
        genre: string
    }
}

const Genre = ({ params: { id }, searchParams: { genre } }: Props) => {
    return (
        <div className="px-2 md:px-8 mt-10">
            <h1 className="text-4xl font-bold">Genre "{genre}"</h1>

            {/* genre results */}
            <div>
                <div>Titles</div>
            </div>
        </div>
    )
}

export default Genre

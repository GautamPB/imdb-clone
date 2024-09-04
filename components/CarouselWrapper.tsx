import { getInTheatres } from '@/lib/apiCall'
import Carousel from './Carousel'

const CarouselWrapper = async () => {
    const inTheatres = await getInTheatres()

    return <Carousel movies={inTheatres?.results} />
}

export default CarouselWrapper

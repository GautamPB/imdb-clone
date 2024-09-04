import Image from 'next/image'
import SearchForm from '@/components/SearchForm'
import Link from 'next/link'

const Header = () => {
    return (
        <div className="w-full flex items-center space-x-4 text-white p-4 bg-[#121212] px-2 md:px-8">
            <Link href="/">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1150px-IMDB_Logo_2016.svg.png"
                    alt="IMDb logo"
                    width={60}
                    height={30}
                />
            </Link>

            <SearchForm />
        </div>
    )
}

export default Header

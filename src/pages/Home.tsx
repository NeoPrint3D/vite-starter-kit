import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Home page" />
            </Helmet>
            <div className="flex flex-col justify-center items-center min-h-screen">
                <h1 className='text-5xl text-center text-white font-black'>Welcome to the vite fire tailwind starter kit</h1>
                <Link to='/about' className='text-2xl underline text-blue-500 hover:text-blue-600 mt-5'>
                    Go to the about page
                </Link>
            </div>

        </>
    )
}
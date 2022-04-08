import { Helmet } from 'react-helmet';


export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Home page" />
            </Helmet>
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-orange-400 to-yellow-200 ">
                <h1 className='text-6xl text-center text-red-500 font-black'>Welcome to the vite fire tailwind starter kit</h1>
            </div>
        </>
    )
}
import { Helmet } from 'react-helmet';


export default function Home() {


    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="bg-white min-h-screen">
                <h1>Home</h1>
            </div>
        </>
    )
}
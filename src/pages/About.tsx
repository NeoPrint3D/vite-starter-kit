import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <>
            <Helmet>
                <title>About</title>
                <meta name="description" content="About page" />
            </Helmet>
            <div className="min-h-page flex justify-center items-center">
                <h1 className="text-3xl text-white">This is the about page</h1>
                
            </div>
        </>
    );
}
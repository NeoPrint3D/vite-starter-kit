import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();


    return (
        <header className={`flex h-20  w-full items-center              ${location.pathname === "/" ? "bg-transparent absolute" : " bg-white/30 backdrop-blur-3xl  relative"}`}>
            <div className="grid grid-cols-2 w-full">
                <Link to="/" className="flex items-center ml-4 text-white text-3xl font-mono">
                    Vite Template
                </Link>
                <div className="flex gap-5 justify-end items-center mr-4">
                    <Link to="/" className="text-white text-xl font-mono">
                        Home
                    </Link>
                    <Link to="/about" className="text-white text-xl font-mono">
                        About
                    </Link>
                </div>
            </div>
        </header>
    );
}
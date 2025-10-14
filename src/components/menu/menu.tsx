import { useEffect,useState } from "react";

const nav = [
    { name: "Inicio", href: "/" },
    { name: "Sobre Mi", href: "/about" },
    { name: "Proyectos", href: "/services" },
    { name: "Contactame", href: "/contact" },
    ];

export default function Menu() {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
            
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };    
    }, []);

    return (
        <header className={`fixed left-2/7 w-[45%] rounded-2xl z-10 top-1.5 ${scroll ? ' bg-gray-700 shadow-lg backdrop-blur-lg transition duration-300' : 'bg-transparent transition duration-300'}`}>
            <nav >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center h-16">
                        <div className="flex items-center ">
                            <div className="flex-shrink-0"> 
                                <a href="/" className=" text-black font-bold text-xl"> Josue;Dev</a>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {nav.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={`text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-semibold ${scroll ? 'text-white' : 'bg-transparent transition duration-300'}`}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )


}
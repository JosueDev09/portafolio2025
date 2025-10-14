import { useEffect,useState } from "react";

const nav = [
    { 
        name: "Inicio", 
        href: "/", 
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        )
    },
    { 
        name: "Sobre Mi", 
        href: "/about", 
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        )
    },
    { 
        name: "Proyectos", 
        href: "/services", 
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        )
    },
    { 
        name: "Contacto", 
        href: "/contact", 
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
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
        <>
            {/* Desktop Header */}
        <header
            className={`hidden md:flex fixed left-1/4 w-[45%] items-center justify-center rounded-2xl z-50 px-6 py-3
                transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]
                ${
                scroll
                    ? "top-3 bg-[linear-gradient(to_bottom,rgba(11,11,13,0.8)_0%,rgba(14,15,20,0.8)_25%,rgba(15,21,36,0.8)_50%,rgba(12,28,53,0.8)_75%,rgba(10,32,72,0.8)_100%)] backdrop-blur-[20px] border border-transparent hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(0,174,255,0.25)] hover:border-cyan-400/20"
                    : "top-6 bg-transparent border border-transparent"
                }`}
            >
                    <nav className="flex items-center justify-center w-full" >
                        {/* Logo Desktop */}
                        <div className="flex-shrink-0 mr-10">
                        <a
                            href="/"
                            className={`font-bold text-xl ${
                            scroll ? "text-white" : "text-white"
                            }`}
                        >
                            Josue ; Dev
                        </a>
                        </div>

                        {/* Desktop Navigation */}
                      <div className="flex items-center space-x-6">
                            {nav.map((item) => (
                                <a
                                key={item.name}
                                href={item.href}
                                className={`relative px-4 py-2 rounded-xl text-lg font-semibold tracking-wide text-white/90
                                    transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]
                                    hover:text-white hover:scale-[1.05]
                                    hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]
                                    before:absolute before:inset-0 before:rounded-xl
                                    before:bg-[rgba(255,255,255,0.08)] before:backdrop-blur-[12px]
                                    before:opacity-0 hover:before:opacity-100
                                    before:transition-all before:duration-500 before:ease-[cubic-bezier(0.25,0.8,0.25,1)]
                                    ${scroll ? "text-white" : "text-white"}`}
                                >
                                <span className="relative z-10">{item.name}</span>
                                </a>
                            ))}
                            </div>

                    </nav>
                    </header>


            {/* Mobile Header - Solo Logo */}
            <header className="md:hidden fixed left-2 right-2 w-auto rounded-2xl z-50 top-1.5 px-4 py-3 bg-transparent">
                <div className="flex justify-center">
                    <a href="/" className="text-black font-bold text-lg"> 
                        Josue;Dev
                    </a>
                </div>
            </header>

            {/* Mobile Bottom Tab Bar */}
            <nav className="md:hidden fixed bottom-4 left-4 right-4 z-50">
                <div className="bg-gray-800/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700/50">
                    <div className="flex justify-around items-center py-3">
                        {nav.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="flex flex-col items-center space-y-1 px-3 py-2 rounded-xl transition-all duration-300 hover:bg-gray-700/50 active:scale-95"
                            >
                                <div className="text-gray-300 hover:text-white transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <span className="text-xs text-gray-300 hover:text-white transition-colors duration-300 font-medium">
                                    {item.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </>

    )


}
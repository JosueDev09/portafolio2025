import { useEffect } from "react";


export default function About() {


    return (
        <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center">Sobre Mi</h1>
                <p className="text-lg mb-4">
                    ¡Hola! Soy Josue, un desarrollador web apasionado por crear experiencias digitales atractivas y funcionales. Con experiencia en HTML, CSS, JavaScript y frameworks modernos como React y Vue, me especializo en construir sitios web responsivos y aplicaciones web dinámicas.
                </p>
                <p className="text-lg mb-4">
                    Me encanta aprender nuevas tecnologías y mejorar mis habilidades constantemente. Disfruto trabajando en equipo y colaborando en proyectos que desafían mis capacidades técnicas.
                </p>
                <p className="text-lg">
                    Cuando no estoy codificando, me gusta explorar la naturaleza, leer libros de tecnología y jugar videojuegos. Estoy emocionado por las oportunidades futuras y siempre abierto a nuevos desafíos en el mundo del desarrollo web.
                </p>
            </div>
        </section>
    )

}
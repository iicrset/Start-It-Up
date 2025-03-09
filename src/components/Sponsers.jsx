import { sponsors } from '../Data/sponsors.js';
import { useState } from 'react';

export function Sponsers() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    return (
        <section className="bg-gray-100 px-4 py-20 overflow-hidden">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Our Sponsors
                </h2>
            </div>
            {/* Associate Sponsors */}
            <div className="mt-16">
                <h3 className="text-center text-2xl font-semibold text-gray-800 mb-10">
                    Associate Sponsor
                </h3>
                <div className="flex justify-center items-center">
                    {sponsors.associate.map((sponsor, index) => (
                        <a
                            key={index}
                            href={sponsor.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer"
                            aria-label={`Visit ${sponsor.name} website`}
                        >
                            <div
                                className="relative p-6 rounded-xl transition-all duration-300 group"
                                onMouseMove={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    setMousePosition({
                                        x: e.clientX - rect.left,
                                        y: e.clientY - rect.top
                                    });
                                }}
                            >
                                <div className="absolute inset-0">
                                    <div className="absolute -inset-0.5 rounded-xl border-2 border-orange-500 opacity-0 group-hover:opacity-100 [clip-path:polygon(0%_0%,100%_0%,100%_20%,0%_20%)] group-hover:[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] transition-all duration-700"></div>
                                </div>
                                <img
                                    src={sponsor.image}
                                    alt={sponsor.alt}
                                    className={`${sponsor.height} transition-opacity duration-300 group-hover:opacity-50`}
                                />
                                <div
                                    className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    style={{
                                        left: `${mousePosition.x}px`,
                                        top: `${mousePosition.y}px`,
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                >
                                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                                        Visit Link
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Community Sponsors */}
            <div className="mt-16">
                <h3 className="text-center text-2xl font-semibold text-gray-800 mb-10">
                    Community Sponsors
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-[100px]">
                    {sponsors.community.map((sponsor, index) => (
                        <a
                            key={index}
                            href={sponsor.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer"
                            aria-label={`Visit ${sponsor.name} website`}
                        >
                            <div
                                className="relative p-6 rounded-xl transition-all duration-300 group"
                                onMouseMove={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    setMousePosition({
                                        x: e.clientX - rect.left,
                                        y: e.clientY - rect.top
                                    });
                                }}
                            >
                                <div className="absolute inset-0">
                                    <div className="absolute -inset-0.5 rounded-xl border-2 border-orange-500 opacity-0 group-hover:opacity-100 [clip-path:polygon(0%_0%,100%_0%,100%_20%,0%_20%)] group-hover:[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] transition-all duration-700"></div>
                                </div>
                                <img
                                    src={sponsor.image}
                                    alt={sponsor.alt}
                                    className={`${sponsor.height} transition-opacity duration-300 group-hover:opacity-50`}
                                />
                                <div
                                    className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    style={{
                                        left: `${mousePosition.x}px`,
                                        top: `${mousePosition.y}px`,
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                >
                                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                                        Visit Link
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

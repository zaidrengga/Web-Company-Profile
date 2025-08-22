'use client'

import { Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const menu = [
    { path: "#home", label: "Home" },
    { path: "#about", label: "About" },
    { path: "#services", label: "Services" },
    { path: "#portfolio", label: "Portfolio" },
    { path: "#blog", label: "Blog" },
    { path: "#contact", label: "Contact" },
]

const AppNavbar = () => {
    const [active, setActive] = useState<string>("home")
    const underlineRefs = useRef<Record<string, HTMLSpanElement | null>>({})

    // Scroll spy → update active link
    useEffect(() => {
        const handleScroll = () => {
            let current = "home"
            menu.forEach((item) => {
                const section = document.querySelector(item.path)
                if (section) {
                    const rect = section.getBoundingClientRect()
                    if (rect.top <= 80 && rect.bottom >= 80) {
                        current = item.path.replace("#", "")
                    }
                }
            })
            setActive(current)
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll()
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // GSAP animasi underline ketika active berubah
    useGSAP(() => {
        Object.keys(underlineRefs.current).forEach((key) => {
            const el = underlineRefs.current[key]
            if (!el) return

            if (key === active) {
                gsap.to(el, {
                    scaleX: 1,
                    duration: 0.4,
                    ease: "power3.out",
                })
            } else {
                gsap.to(el, {
                    scaleX: 0,
                    duration: 0.3,
                    ease: "power3.inOut",
                })
            }
        })
    }, [active])

    const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault()
        const target = document.querySelector(targetId)
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }

    return (
        <header className="fixed top-0 left-0 right-0 w-full z-50">
            <nav className="w-full flex justify-between items-center py-0.5 md:px-10 px-4 backdrop-blur-2xl">
                {/* Logo */}
                <div className="flex items-center min-w-24">
                    <span className="text-2xl font-bold text-indigo-500">
                        Lumino<span className="text-white">Tech</span>
                    </span>
                </div>

                {/* Menu */}
                <ul className="justify-center space-x-6 md:flex hidden relative">
                    {menu.map((item) => (
                        <li key={item.path} className="relative">
                            <Link href={item.path} onClick={(e) => handleScrollClick(e, item.path)}>
                                <span className="text-white hover:text-indigo-400 transition-colors relative">
                                    {item.label}
                                    {/* underline element */}
                                    <span
                                        ref={(el) => {
                                            underlineRefs.current[item.path.replace("#", "")] = el
                                        }}
                                        className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-indigo-500 to-purple-500 origin-left scale-x-0"
                                    />
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Social */}
                <div className="flex items-center justify-between min-w-24 text-white">
                    <Instagram className="w-6 h-6" />
                    <Twitter className="w-6 h-6" />
                    <Facebook className="w-6 h-6" />
                </div>
            </nav>
        </header>
    )
}

export default AppNavbar

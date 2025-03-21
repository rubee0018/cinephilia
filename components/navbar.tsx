"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FINE%20ARTS%20LOGO2-pt9aCoHKcdrkgZBFf6C6fkxM979Fe2.png"
              alt="Fine Arts Logo"
              width={60}
              height={60}
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold text-red-600">CINEPHILIA</span>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-white p-2 rounded-full hover:bg-red-600/20 transition-colors duration-300">
                <Menu size={24} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-black/95 border border-red-900/30">
              <DropdownMenuItem className="text-white hover:bg-red-600/20 focus:bg-red-600/20">
                <Link href="/" className="w-full">
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-red-600/20 focus:bg-red-600/20">
                <Link href="/#about" className="w-full">
                  About
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-red-600/20 focus:bg-red-600/20">
                <Link href="/#events" className="w-full">
                  Events
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-red-600/20 focus:bg-red-600/20">
                <Link
                  href="https://www.instagram.com/cinephilia_2k25/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center"
                >
                  <InstagramIcon className="mr-2" /> Instagram
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

function InstagramIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  )
}


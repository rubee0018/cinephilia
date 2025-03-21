"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-md border-t border-red-900/30 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-red-600 mb-6">CINEPHILIA</h3>
            <p className="text-xl text-gray-400 mb-6">
              National Film Festival 2025
              <br />
              27th & 28th March 2025
              <br />
              Held by Students Of Fine Arts
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-semibold text-white mb-6">Contact Us</h4>
            <p className="text-lg text-gray-400 mb-6">
              Email:{" "}
              <a href="mailto:cinephiliakl@gmail.com" className="hover:text-red-600 transition-colors duration-300">
                cinephiliakl@gmail.com
              </a>
            </p>

            <Link
              href="https://www.instagram.com/cinephilia_2k25/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 text-white hover:text-red-600 transition-colors duration-300 text-lg"
            >
              <InstagramIcon />
              <span>@cinephilia_2k25</span>
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-lg">&copy; {new Date().getFullYear()} Cinephilia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  )
}


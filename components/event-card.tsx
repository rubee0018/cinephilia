"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

interface EventDetails {
  title: string
  sections: {
    subtitle: string
    content: string[]
  }[]
}

interface EventCardProps {
  title: string
  description: string
  details: EventDetails
  tag?: string
  registerAction: "contact" | "academics" | "forms"
}

export default function EventCard({ title, description, details, tag, registerAction }: EventCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showRegisterInfo, setShowRegisterInfo] = useState(false)

  const handleRegisterClick = () => {
    if (registerAction === "contact") {
      setShowRegisterInfo(true)
    } else if (registerAction === "academics") {
      window.open("https://academics.klef.in/login", "_blank")
    } else if (registerAction === "forms") {
      window.open("https://forms.gle/aqixhmCrVbaJtd4y7", "_blank")
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-black to-red-950/30 rounded-xl overflow-hidden border border-red-900/20 group p-6"
      >
        {tag && <span className="inline-block bg-red-600 text-white text-sm px-3 py-1 rounded-full mb-4">{tag}</span>}
        <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>
        <div className="flex space-x-4">
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 bg-transparent hover:bg-red-600/20 border border-red-600 text-red-600 rounded-md transition-colors duration-300"
          >
            Learn More
          </button>
          <button
            onClick={handleRegisterClick}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors duration-300"
          >
            Register Now
          </button>
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-black/95 border border-red-900/30 text-white max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-red-600">{details.title}</DialogTitle>
            <button onClick={() => setIsOpen(false)} className="absolute right-4 top-4 text-gray-400 hover:text-white">
              <X size={20} />
            </button>
          </DialogHeader>
          <div className="mt-6 space-y-6">
            {details.sections.map((section, index) => (
              <div key={index} className="space-y-3">
                {section.subtitle && <h3 className="text-xl font-semibold text-red-500">{section.subtitle}</h3>}
                <div className="space-y-2">
                  {section.content.map((line, i) => (
                    <p key={i} className="text-gray-300">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <button
              onClick={handleRegisterClick}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors duration-300"
            >
              Register Now
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showRegisterInfo} onOpenChange={setShowRegisterInfo}>
        <DialogContent className="bg-black/95 border border-red-900/30 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-red-600">Registration Information</DialogTitle>
            <button
              onClick={() => setShowRegisterInfo(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </DialogHeader>
          <div className="mt-6">
            <p className="text-xl text-center">For more registration details contact:</p>
            <p className="text-2xl font-bold text-center mt-4 text-red-500">+91 7013326068</p>
          </div>
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowRegisterInfo(false)}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}


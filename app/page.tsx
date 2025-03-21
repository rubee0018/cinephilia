"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LiquidBackground from "@/components/liquid-background"
import EventCard from "@/components/event-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <LiquidBackground />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center px-4">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black z-10" />
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ duration: 1.5 }}
              className="w-full h-full"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ii-58t4CooP2rWE1VF9jt4tMyOPVkF2fV.png"
                alt="The Horse in Motion by Eadweard Muybridge"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>

          <div className="container mx-auto z-10 text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-7xl md:text-9xl font-bold mb-4 text-red-600 tracking-tighter">CINEPHILIA</h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl mb-8 text-white/90"
              >
                A National Film Festival Held By Students of Fine Arts
              </motion.p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-1 bg-red-600 w-48 md:w-96 mx-auto mb-8"
              />
              <h2 className="text-2xl md:text-4xl mb-8 tracking-wide">NATIONAL FILM FESTIVAL 2025</h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-xl md:text-2xl mb-8 text-white/80"
              >
                27th & 28th March 2025
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}>
                <Link
                  href="#events"
                  className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-full text-xl transition-all duration-300 inline-block hover:scale-105"
                >
                  Explore Events
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-red-600">About Cinephilia</h2>
              <div className="h-1 bg-red-600 w-32 mx-auto mb-12" />
              <div className="max-w-4xl mx-auto space-y-8">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  Join us for Cinephilia, a thrilling festival dedicated to the world of filmmaking, photography,
                  animation, and gaming! This event brings together passionate creators to showcase their talents
                  through various contests and fun activities.
                </p>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  Cinephilia, a two-day national-level film festival, stands as a testament to the unwavering passion
                  and love for cinema. Organized by the Students Of BSc Animation And Gaming, Department of Fine Arts at
                  KL University, this event transcends the boundaries of conventional film screenings, offering a
                  platform for cinephiles, filmmakers, and enthusiasts to come together and celebrate the art of
                  storytelling through moving images. The festival will take place in March, promising an unforgettable
                  experience for all participants.
                </p>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  Whether you're a budding filmmaker, photographer, gamer, or animator, Cinephilia is the perfect
                  platform to network, learn, and have fun. Don't miss out on this creative Extravaganza!
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="py-32 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-red-600">Events</h2>
              <div className="h-1 bg-red-600 w-32 mx-auto mb-12" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <EventCard
                title="Gaming Tournament"
                description="Compete in Free Fire and PUBG tournaments to prove your gaming skills."
                tag="On-campus Event"
                registerAction="contact"
                details={{
                  title: "Gaming Tournament",
                  sections: [
                    {
                      subtitle: "Free Fire Tournament",
                      content: [
                        "• Format: Solo",
                        "• Rules:",
                        "  ○ Standard Battle Royale rules apply.",
                        "  ○ Players must bring their own devices.",
                        "  ○ Internet connectivity is the responsibility of participants.",
                        "  ○ Any hacking or cheating results in immediate disqualification.",
                        "• Judging: Last team standing (Bo3 Format)",
                      ],
                    },
                    {
                      subtitle: "PUBG Tournament",
                      content: [
                        "• Format: Solo",
                        "• Rules:",
                        "  ○ Standard PUBG mobile tournament rules apply.",
                        "  ○ Any third-party software used will result in a ban.",
                        "  ○ The decision of the referees is final.",
                        "• Judging: Points-based system (Kills + Survival Time)",
                      ],
                    },
                  ],
                }}
              />

              <EventCard
                title="Film Hackathon Contest"
                description="Create a short film or concept video in 12 hours based on a given theme."
                tag="On-campus Event"
                registerAction="academics"
                details={{
                  title: "Film Hackathon Contest",
                  sections: [
                    {
                      subtitle: "",
                      content: [
                        "• Team Size: 5 members",
                        "• Duration: 12 hours",
                        "• Task: Create a short film or concept video based on a given theme",
                        "• Rules:",
                        "  ○ Original content only",
                        "  ○ No copyright-infringing material",
                        "  ○ Teams must submit raw and final edits",
                        "  ○ Use of AI-generated content must be disclosed",
                        "• Judging Criteria: Storytelling, Execution, Technical Quality, Innovation",
                      ],
                    },
                  ],
                }}
              />

              <EventCard
                title="Short Film Contest"
                description="Submit your short film of 5-30 minutes on any theme or genre."
                registerAction="forms"
                details={{
                  title: "Short Film Contest",
                  sections: [
                    {
                      subtitle: "",
                      content: [
                        "• Theme: Open theme, any genre, 2D, 3D animation",
                        "• Eligibility: Open to individuals or teams nationwide",
                        "• Duration: Short film must be between 5-30 mins",
                        "• Language: Films can be in any language but must include subtitles",
                        "• Formats: Submissions must be in MP4 with a resolution of 1080p or higher",
                        "• Registration: Google Form",
                        "• Deadline: 23rd March 2025 (5 days before event)",
                        "• Awards: Best 2 Short Films",
                      ],
                    },
                  ],
                }}
              />

              <EventCard
                title="Photography Contest"
                description="Capture a story in a frame and showcase your photography skills."
                registerAction="forms"
                details={{
                  title: "Photography Contest",
                  sections: [
                    {
                      subtitle: "",
                      content: [
                        "• Theme: Story in a Frame",
                        "• File Size: Not less than 2 MB",
                        "• Editing: Basic editing like cropping, color correction is allowed",
                        "• Originality: Photo must be original, taken by the participants",
                        "• File Format: Photo must be submitted in JPEG/PNG format, with a resolution of at least 300DPI or 1920x1080 pixels",
                        "• Submission Deadline: 23rd March 2025 (5 days before event)",
                        "• Watermarks: Submissions must not include watermarks, logos or any identifiable marks",
                        "• Awards: Best 3 Photographs",
                      ],
                    },
                  ],
                }}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}


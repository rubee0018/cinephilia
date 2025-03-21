"use client"

import { useEffect, useRef } from "react"

export default function LiquidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Enhanced liquid animation parameters
    const particles: Particle[] = []
    const particleCount = 25 // Increased count
    const colors = ["#ff0000", "#cc0000", "#990000", "#660000", "#330000"]
    let time = 0

    class Particle {
      x: number
      y: number
      radius: number
      color: string
      initialX: number
      initialY: number
      angle: number
      speed: number
      amplitude: number
      frequency: number
      phase: number

      constructor() {
        this.initialX = Math.random() * width
        this.initialY = Math.random() * height
        this.x = this.initialX
        this.y = this.initialY
        this.radius = Math.random() * 250 + 100 // Larger radius
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.angle = Math.random() * Math.PI * 2
        this.speed = Math.random() * 0.003 + 0.001
        this.amplitude = Math.random() * 150 + 50
        this.frequency = Math.random() * 0.02 + 0.01
        this.phase = Math.random() * Math.PI * 2
      }

      update() {
        // Create more complex fluid motion with multiple sine/cosine waves
        const wave1 = Math.sin(this.angle + time * this.speed) * this.amplitude
        const wave2 = Math.cos(this.angle * 0.5 + time * this.speed * 0.7) * (this.amplitude * 0.5)
        const wave3 = Math.sin(this.phase + time * this.frequency) * (this.amplitude * 0.3)

        this.x = this.initialX + wave1 + wave2
        this.y = this.initialY + wave2 + wave3

        // Wrap around screen edges with smooth transition
        if (this.x < -this.radius) this.x = width + this.radius
        if (this.x > width + this.radius) this.x = -this.radius
        if (this.y < -this.radius) this.y = height + this.radius
        if (this.y > height + this.radius) this.y = -this.radius
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()

        // Create gradient for more organic look
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius)
        gradient.addColorStop(0, `${this.color}33`) // More transparent at center
        gradient.addColorStop(0.5, `${this.color}15`)
        gradient.addColorStop(1, `${this.color}00`) // Fully transparent at edges

        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop with improved fluid motion
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.03)" // Slower fade for more persistent trails
      ctx.fillRect(0, 0, width, height)

      time += 1

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Add occasional "pulse" effect
      if (Math.random() < 0.01) {
        const pulseParticle = particles[Math.floor(Math.random() * particles.length)]
        pulseParticle.amplitude *= 1.2
        setTimeout(() => {
          pulseParticle.amplitude /= 1.2
        }, 500)
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}


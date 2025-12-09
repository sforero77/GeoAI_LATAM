'use client'

import { useEffect, useRef } from 'react'

export default function NetworkParticles({
  particleCount = 100,
  particleColor = 'rgba(16, 185, 129, 0.6)', // geo-green
  lineColor = 'rgba(6, 182, 212, 0.3)', // geo-cyan
  particleSize = 2,
  linkDistance = 150,
  speed = 0.5,
  className = ''
}) {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const animationFrameRef = useRef(null)
  const mouseRef = useRef({ x: null, y: null, radius: 150 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight

    // Determine optimal particle count based on screen size
    const getOptimalParticleCount = () => {
      if (particleCount !== undefined && particleCount !== 100) return particleCount

      const screenWidth = window.innerWidth
      if (screenWidth < 640) return 25 // mobile: reduce significantly for performance
      if (screenWidth < 1024) return 45 // tablet: moderate amount
      return 80 // desktop: full effect
    }

    let currentParticleCount = getOptimalParticleCount()

    // Set canvas size
    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height

      // Recalculate particle count on resize
      const newCount = getOptimalParticleCount()
      if (newCount !== currentParticleCount) {
        currentParticleCount = newCount
        initParticles()
      }
    }
    resizeCanvas()

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.vx = (Math.random() - 0.5) * speed
        this.vy = (Math.random() - 0.5) * speed
        this.radius = particleSize
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1
        if (this.y < 0 || this.y > height) this.vy *= -1

        // Keep within bounds
        this.x = Math.max(0, Math.min(width, this.x))
        this.y = Math.max(0, Math.min(height, this.y))
      }

      draw() {
        ctx.fillStyle = particleColor
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < currentParticleCount; i++) {
        particlesRef.current.push(new Particle())
      }
    }
    initParticles()

    // Draw lines between close particles
    const drawLines = () => {
      const particles = particlesRef.current

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < linkDistance) {
            const opacity = (1 - distance / linkDistance) * 0.5
            ctx.strokeStyle = lineColor.replace(/[\d.]+\)$/g, `${opacity})`)
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }

        // Connect to mouse if nearby
        if (mouseRef.current.x !== null) {
          const dx = particles[i].x - mouseRef.current.x
          const dy = particles[i].y - mouseRef.current.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < mouseRef.current.radius) {
            const opacity = (1 - distance / mouseRef.current.radius) * 0.8
            ctx.strokeStyle = lineColor.replace(/[\d.]+\)$/g, `${opacity})`)
            ctx.lineWidth = 2
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      particlesRef.current.forEach(particle => {
        particle.update()
        particle.draw()
      })

      drawLines()

      animationFrameRef.current = requestAnimationFrame(animate)
    }
    animate()

    // Mouse move event
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouseRef.current.x = null
      mouseRef.current.y = null
    }

    // Window resize event
    window.addEventListener('resize', () => {
      resizeCanvas()
      initParticles()
    })
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [particleCount, particleColor, lineColor, particleSize, linkDistance, speed])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  )
}

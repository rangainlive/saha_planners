import { useState, useEffect, useRef } from 'react'

export default function CountUp({ to, suffix = '', duration = 2200 }) {
  const [count, setCount] = useState(0)
  const ref     = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick  = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased    = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * to))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [to, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

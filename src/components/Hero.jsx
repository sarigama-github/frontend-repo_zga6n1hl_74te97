import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-5xl">
          <h1 className="leading-[0.9] text-white font-extrabold uppercase tracking-[-0.02em] text-[12vw] md:text-[9vw] lg:text-[8vw]">
            BOLD. BLACK. WHITE.
          </h1>
          <p className="mt-6 text-white/70 max-w-xl text-sm md:text-base tracking-wider uppercase">
            Designer portfolio — minimal, futuristic, high contrast.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black"></div>
    </section>
  )
}

export default Hero

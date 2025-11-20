function About() {
  return (
    <section id="about" className="relative bg-black text-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-widest">ABOUT</h2>
        <p className="mt-8 text-white/70 leading-relaxed max-w-3xl text-sm md:text-base tracking-wide">
          I'm a multidisciplinary designer crafting bold, monochrome experiences that blend clarity with emotion. 
          My focus: minimal interfaces, expressive typography, and motion that feels inevitable.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <p className="text-xs tracking-[0.3em] uppercase text-white/60">Focus</p>
            <p className="mt-3 text-lg font-semibold tracking-widest uppercase">Product & Visual</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <p className="text-xs tracking-[0.3em] uppercase text-white/60">Tools</p>
            <p className="mt-3 text-lg font-semibold tracking-widest uppercase">Figma, After Effects</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <p className="text-xs tracking-[0.3em] uppercase text-white/60">Location</p>
            <p className="mt-3 text-lg font-semibold tracking-widest uppercase">Remote • Worldwide</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

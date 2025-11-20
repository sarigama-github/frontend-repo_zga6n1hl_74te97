function WorkCard({ title, subtitle, image }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <img src={image} alt="" className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 p-6">
        <h3 className="text-white text-xl md:text-2xl font-semibold tracking-widest uppercase">{title}</h3>
        <p className="text-white/70 text-xs tracking-[0.25em] uppercase">{subtitle}</p>
      </div>
    </div>
  )
}

function Work() {
  const projects = [
    { title: 'NEON DASHBOARD', subtitle: 'Product UI • 2024', image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop' },
    { title: 'ARCHITECT STUDIO', subtitle: 'Brand • 2024', image: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=1200&auto=format&fit=crop' },
    { title: 'MOTION STUDY', subtitle: 'Interaction • 2025', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop' },
  ]

  return (
    <section id="work" className="relative bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-widest">SELECTED WORK</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <WorkCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work

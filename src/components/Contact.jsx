function Contact() {
  return (
    <section id="contact" className="relative bg-black text-white py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-widest">LET'S WORK</h2>
        <p className="mt-6 text-white/70 max-w-xl mx-auto text-sm md:text-base tracking-widest uppercase">
          Open to select collaborations in 2025.
        </p>

        <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-4">
          <a href="mailto:hello@alex.design" className="text-white font-semibold tracking-[0.3em] uppercase">hello@alex.design</a>
        </div>

        <p className="mt-6 text-xs text-white/50 tracking-[0.25em] uppercase">© 2025 Alex Design</p>
      </div>
    </section>
  )
}

export default Contact

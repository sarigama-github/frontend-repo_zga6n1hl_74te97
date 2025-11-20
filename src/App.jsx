import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App

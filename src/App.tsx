import About from "./pages/Home/sections/About/About"
import Hero from "./pages/Home/sections/Hero/Hero"
import Navbar from "./components/NavBar/NavBar"
import Projects from "../src/pages/Home/sections/Projects/Projects"
// import Footer from "./components/Footer/Footer"

const App: React.FC = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <Footer /> */}
    </>
  )
}

export default App
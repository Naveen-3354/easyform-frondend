import Hero from "../../components/hero/Hero"
import Navbar from "../../components/navbar/Navbar"
import "./Home.scss"

const Home = () => {
  return (
    <div className="Home">
        <Navbar/>
        <Hero />
    </div>
  )
}

export default Home
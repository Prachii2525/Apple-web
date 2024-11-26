import Navbar from './components/Navbar';
import Highlights from './components/Highlights';
import Hero from './components/Hero';
import model from './components/model';



const App = () => {
  

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <model />
    </main>
  )
}

export default App

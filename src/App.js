import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import Services from './pages/Services'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Careers from './pages/Careers'

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Services />
      <Careers />
      <Contacts />

      <footer>Evangelista Consulting &copy; 2022</footer>
    </div>
  )
}

export default App;

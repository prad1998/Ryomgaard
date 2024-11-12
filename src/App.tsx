
import './App.css'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import HeaderMenu from './components/header/HeaderMenu'
import Home from './components/home/HomeView'
import Menu from './components/menu/Menu'

function App() {
    return (
        <>
          <HeaderMenu />


    <div id="home">
          <Home></Home>
      </div>

     <div id="about">
        <About />
     </div>

     <div id="menu">
        <Menu />
     </div>

          <Footer />

        </>
    )
}

export default App

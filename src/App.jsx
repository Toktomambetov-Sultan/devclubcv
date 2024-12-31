import './App.css'
import Header from 'pages/Header'
import GeneralPurpose from 'pages/GeneralPurpose'
import Projects from 'pages/Projects'
import backImage from "assets/licensed-image.jpeg"

function App() {

  return (
    <>
      <Header />
      <div style={{
        backgroundImage: `url(${backImage})`
      }}>

        <GeneralPurpose />
        <Projects />
      </div>
    </>
  )
}

export default App

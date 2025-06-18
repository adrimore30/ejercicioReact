import {Header}from './components/Header/Header'
import {Footer} from './components/Footer/Footer'
import {Sidebar}from './components/Sidebar/Sidebar'
import {Section}from './components/section/Sectionn'

function App() {

  return (
    <>
    <Header title="creando y usando props" show={false}>
      <h2>aqui estoy subtitulando el header mediante el prop</h2>
       </Header>
       <Sidebar/>
      <Section/>
      <Footer/>
    </>
  )
}

export default App

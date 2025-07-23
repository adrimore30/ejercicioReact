import './App.css';
import {Header}from './components/Header/Header'
import {Footer} from './components/Footer/Footer'
import {Sidebar}from './components/Sidebar/Sidebar'

import {UserSearch} from './components/uuserSearch/UserSearch'

function App() {

  return (
    <>
    <Header/>
      <Sidebar/>
       <div className="main-content">
      <UserSearch />
      
      </div>
      <Footer/>
    </>
  )
}

export default App

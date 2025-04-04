
import Header from './Components/Header'
import Footer from './Components/Footer'
import Stack from './Components/Stack'
import Card from './Components/Card'
// import Projects from './Components/Projects'
import Contact from './Components/Contact '
import Burger from './Components/Burger'
import NewProjects from './Components/New-projects'

function App() {
  return (
    <div id ='content'>
      <Burger/>
      <Header/>
      <Card/>
      <Stack/>
      <NewProjects/>
      <Contact/>
      <Footer/>
    </div>
  )
};
export default App

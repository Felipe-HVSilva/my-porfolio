import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { GlobalStyle } from './styles/global'


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Projects />
    </>
  )
}

export default App

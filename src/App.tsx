import Header from "./components/Header"
import Footer from "./components/Footer"
import { Container } from "react-bootstrap"

import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>Welcome to Proshop</h1>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App

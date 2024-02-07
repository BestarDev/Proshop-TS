import Header from "./components/Header"
import Footer from "./components/Footer"
import { Container } from "react-bootstrap"
import { Outlet } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App

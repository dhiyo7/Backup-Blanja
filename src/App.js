import Navbar from "../src/Components/Navbar";
import Home from "../src/Pages/Home";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
        <Home />
      </Container>
    </div>
  );
}

export default App;

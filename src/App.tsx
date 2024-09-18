import Player from "./components/Player.tsx";
import Container from "./components/Container.tsx";

function App() {
  return (
    <>
       <Container>
           <Player name={"Alex"} symbol={"x"}/>
           <Player name={"Nick"} symbol={"0"}/>
       </Container>
    </>
  )
}

export default App;

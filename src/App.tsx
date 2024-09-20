import Player from "./components/Player.tsx";
import Container from "./components/Container.tsx";

function App() {
  return (
       <Container>
           <ul id={"players"}>
               <Player name={"Alex"} symbol={"x"}/>
               <Player name={"Nick"} symbol={"0"}/>
           </ul>
       </Container>
  )
}

export default App;

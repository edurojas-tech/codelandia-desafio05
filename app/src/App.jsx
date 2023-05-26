import "./App.css";
import NavBar from "./navbar/component";
import Hero from "./hero/component";
import Ghosts from "./assets/ghosts.svg"

function App() {
  return (
    <>
      <div className="app">
        <NavBar />
        <Hero
          title="HAYAO MIYAZAKI"
          subtitle="A VIAGEM DE CHIHIRO"
          description="Chihiro chega a um mundo mágico dominado por uma bruxa. 
          Aqueles que a desobedecem são transformados em animais."
          btnPlay="Assistir agora"
          btnTrailer="Assista o trailer"
          imagem={Ghosts}
        />
      </div>
    </>
  );
}

export default App;

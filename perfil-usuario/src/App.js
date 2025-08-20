import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cartao from './components/Cartao';

function App() {
  return (
    <div className="App">
         <h1> Exercicio componentes</h1>
          <Header/>
          <Cartao
           imagem= "https://abcinecursos.org.br/wp-content/uploads/2024/06/ATE-ONDE-ELA-VAI.webp"
           nome="ATÉ ONDE ELA VAI"
           descrição= "Durante a infância, Bárbara teve experiências paranormais bem estranhas, ouvindo vozes e vendo vultos. Já adulta, o medo ainda é um fator presente, pois tem pavor que os episódios sofridos quando criança retornem para sua vida."
          />
          <Footer/>
          
    </div>
  );
}

export default App;

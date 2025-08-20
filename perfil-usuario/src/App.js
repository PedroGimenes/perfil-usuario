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
           imagem= "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/607610a4-2f53-4578-8b39-8984af0ed614/dgxmyyr-88f48427-b98e-49b6-a801-6be9ee2df2c5.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYwNzYxMGE0LTJmNTMtNDU3OC04YjM5LTg5ODRhZjBlZDYxNFwvZGd4bXl5ci04OGY0ODQyNy1iOThlLTQ5YjYtYTgwMS02YmU5ZWUyZGYyYzUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XQbFeM4caTCAWPadYARvcUwHgB6oyJQ8AzQUXcBEbHA"
           nome="Palhaço"
           descrição= "Um palhaço é um artista cômico que utiliza técnicas teatrais, como maquiagem, figurino e improvisação, para entreter e provocar risos. Eles podem atuar em circos, festas, hospitais e outros ambientes, adaptando suas performances para diferentes públicos."
          />
          <Footer/>
          
    </div>
  );
}

export default App;

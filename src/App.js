
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className='container'>
        <header className="App-header">
       
        </header>
        <main>
          <Dictionary defaultKeyword="poetry"/>
        </main>
        <footer className='small text-start py-2'>Coded by Filipa Paes de Faria</footer>
      </div>
    </div>
  );
}

export default App;

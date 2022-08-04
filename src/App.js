
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className='container'>
        <header className="App-header">
          <p className='text-center my-3'>Dictionary</p>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className='small text-center py-3'>Coded by Filipa Paes de Faria</footer>
      </div>
    </div>
  );
}

export default App;

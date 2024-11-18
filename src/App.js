import ContextDados from './api/SearchData'
import BarraPesquisa from './Parts/BarraPesquisa'


function App() {
  return (
    <ContextDados>
    <div className="App">
      <header className="App-header">
       <div className= "MainBox">
        <h1 className= "Title">Rhymes API</h1>
        <BarraPesquisa/>
       </div>
      </header>
      <script src = '../src/main.js'> </script>
    </div>
    </ContextDados>
  );
}

export default App;

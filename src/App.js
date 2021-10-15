import './App.css';
import CharactersList from './components/CharactersList';
import CharactersContainer from './containers/CharactersContainer';

function App() {
  return (
    <div className="App">
    <img src="logo.png" width="400"/>
    <h1 className="heading">Character Selector</h1>
    <CharactersContainer/>
    </div>
  );
}

export default App;

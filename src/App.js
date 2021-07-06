import './App.css';
import Title from './components/Title'
import List from './components/List'

function App() {
  const message = "Meu segundo projeto React do zero!"
  return (
    <div className="App">
      <Title messageTitle={message} />
      <List/>
    </div>
  );
}

export default App;

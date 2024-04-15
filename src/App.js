import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  const hallo=()=>{
    alert("ok")
  }
  console.log("I am sahid")
  return (
    <div className="App">
      <div>
        <h1>This is My First Project</h1>
        <Button as="a" variant="success" onClick={hallo}>
        Button as link
      </Button>
      </div>
    </div>
  );
}

export default App;

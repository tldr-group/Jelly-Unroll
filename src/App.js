import './App.css';
import InputContainer from './components/inputBox/inputContainer/inputContainer';
import OutputContainer from './components/outputBox/outputContainer/outputContainer';

function App() {
  return (
    <div className="App">
    <div class="container">
  <div class="row">
    <div class="col-sm">
    <InputContainer/> 
    </div>
    <div class="col-sm">
    <OutputContainer/> 
    </div>
    <div class="col-sm">
    <InputContainer/> 
    </div>
  </div>
</div>
</div>
  );
}

export default App;

import './App.css';
import InputBox from './components/inputBox/inputBox';
import InputContainer from './components/inputBox/inputContainer/inputContainer';
import OutputBox from './components/outputBox/outputBox';
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

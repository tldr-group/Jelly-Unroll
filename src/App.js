import './App.css';
import InputContainer from './components/inputBox/inputContainer/inputContainer';
import OutputContainer from './components/outputBox/outputContainer/outputContainer';
import TopBar from './components/topBar/topBar'
import Store from './Store'
function App() {
  return (
    <div className="App">
      <Store>
      <TopBar />
  <div class="row-1">
    <InputContainer/> 
    </div>
    <div class="row-2">
    <OutputContainer/> 
    </div>
</Store>
</div>
  );
}

export default App;

import logo from "./logo.svg";
import { Button } from "antd";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hello world!</h1>
        <Button type="primary">Button</Button>
      </header>
    </div>
  );
}

export default App;

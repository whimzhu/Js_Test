import "./App.css";
import Count from "./container/Count";
import Person from "./container/Person";

function App() {
  return (
    <div className="App">
      <Count></Count>
      <hr style={{ margin: "40px 0" }} />
      <Person></Person>
    </div>
  );
}

export default App;

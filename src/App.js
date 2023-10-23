import "./App.css";
import SeatingLayout from "./components/SeatingLayout";
import Selection from "./components/Selection";

function App() {
  return (
    <div className="p-3 flex flex-row items-center justify-between">
      <SeatingLayout />
      <Selection />
    </div>
  );
}

export default App;

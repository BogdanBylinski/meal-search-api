import { BrowserRouter } from "react-router-dom";
import Category from "./Components/Category";
import Search from "./Components/Search";
import Pages from "./Pages/Pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Search></Search>
      <Category></Category>
      <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;

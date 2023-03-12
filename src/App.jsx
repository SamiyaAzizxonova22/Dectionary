import Navbar from "./components/Navbar";
import Info from "./components/Info";
import SearchError from "./components/SearchError";

function App() {
  return (
    <div className=" max-w-5xl mx-auto py-3 px-3">
      <Navbar />
      <Info />
      {/* <SearchError /> */}
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Info from "./components/Info";
import SearchError from "./components/SearchError";
import { ThemeProvider } from "next-themes";
import './App.css'

function App() {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <div className="dark:bg-[#050505]">
        <div className="max-w-5xl mx-auto py-3 px-3">
          <Navbar />
          <Info />
          {/* <SearchError /> */}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

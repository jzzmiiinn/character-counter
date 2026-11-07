import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";

function App() {
  return (
    <div className="min-h-screen px-4 py-8 md:px-40 md:py-2">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;

import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { useCounterStore } from "./store/counterStore";

function App() {
  const theme = useCounterStore((state) => state.theme);

  return (
    <div
      className={`${theme} min-h-screen bg-white text-[#1A1A1D] transition-colors dark:bg-[#1A1A1D] dark:text-white px-4 py-8 md:px-40 md:py-2`}
    >
      <Header />
      <MainContent />
    </div>
  );
}

export default App;

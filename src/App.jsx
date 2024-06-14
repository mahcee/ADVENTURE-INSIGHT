import Router from "./components/Router";
import AdventureContextProvider from "./context/state";
function App() {
  return (
    <AdventureContextProvider>
      <Router />
}

export default App;

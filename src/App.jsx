import "./App.css";
import { Header } from "./components/Header/Header";
import { Profile } from "./components/Profile/Profile";

function App() {
  return (
    <div>
      <Header />
      <main role="main">
        <Profile />
      </main>
    </div>
  );
}

export default App;

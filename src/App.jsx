import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Profile />
        {/* Additional sections like Skills, Projects, and Contact will be added here */}
      </main>
    </div>
  );
}

export default App;

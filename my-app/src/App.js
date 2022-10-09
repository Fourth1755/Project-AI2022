import logo from './logo.svg';
import './App.css';
import GameCenter from './component/GameCenter';
import SideBar from './component/SideBar';
import ProfileAI from './component/ProfileAI';
function App() {
  return (
    <div className='app-container'>
      <ProfileAI/>
      <GameCenter/>
      <SideBar/>
    </div>
  );
}

export default App;

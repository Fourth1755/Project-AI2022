import logo from './logo.svg';
import './App.css';
import GameCenter from './component/GameCenter';
import SideBar from './component/SideBar';
import ProfileAI from './component/ProfileAI';
import TextBox from './component/TextBox';
import {useEffect, useState} from 'react'
function App() {
  const [textbox,setTextbox]=useState("ถ้าคิดว่าเอาชนะได้ก็ลองดู")
  const onCheckboxClick=(text)=>{
    console.log(text)
    setTextbox(text)
  }
  return (
      <div className='app-container'>
      <GameCenter onCheckboxClick={onCheckboxClick}/>
      <TextBox text={textbox}/>
    </div>
  );
}

export default App;

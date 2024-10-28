import './App.css';
import Home from './components/Home/Home';
import SideBar from './components/SideBar/SideBar';

export default function App(){
  return(
    <div className='app-main'>
      <SideBar />
      <Home />
    </div>
  )
}
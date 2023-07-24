
import './App.css';
import SideNav from './components/sideNav';
import Header from './components/header';
import Main from './components/main';
import NewComponent from './components/newComponent';
import { useState } from 'react';

function App() {
  const [newComponent, setNewComponent] = useState(false);
  
  return (
    <div>
      <SideNav />{
        !newComponent ? <> <Header setNewComponent={setNewComponent} />
          <Main /></> : <NewComponent />
      }
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import { CustomizedMenus } from './components/Menu';
import InfoBoxComponent from './components/InfoBox';
import HtmlDataComponent from './components/HtmlData';
import Divider from '@mui/material/Divider';


function App() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<any | null>(null);
  const [itemId, setItemId] = useState<string>('');

  return (
    <div className="App">
      <header className="header">
        GETTER APP
      </header>
      <main className='main'>
        <div className="container">
          <CustomizedMenus 
            setItemId={setItemId}
            open={open} 
            setOpen={setOpen} 
            data={data} setData={setData}></CustomizedMenus>
          <InfoBoxComponent itemId={itemId}></InfoBoxComponent>
        </div>
        <Divider></Divider>
        <HtmlDataComponent></HtmlDataComponent>
      </main>
    </div>
  );
}

export default App;

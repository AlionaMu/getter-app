import { useState } from 'react';
import './App.css';
import DataList from './components/DataList';
import ButtonComponent from './components/Button';
import { Collapse } from '@mui/material';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <header className="header">
        GETTER APP
      </header>
      <ButtonComponent open={open} setOpen={setOpen}></ButtonComponent>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <DataList></DataList>
      </Collapse>
    </div>
  );
}

export default App;

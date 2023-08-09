import { useState } from 'react';
import './App.css';
import DataList from './components/DataList';
import ButtonComponent from './components/Button';
import { Collapse } from '@mui/material';

function App() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState('no data');
  return (
    <div className="App">
      <header className="header">
        GETTER APP
      </header>
      <ButtonComponent open={open} setOpen={setOpen} setData={setData}></ButtonComponent>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <DataList data={data} ></DataList>
      </Collapse>
    </div>
  );
}

export default App;

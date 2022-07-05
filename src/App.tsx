import { useState } from 'react';
import './style/App.css';
import Container from "./components/Container";
import Table from './components/Table';
import Button from './components/Button';
import ModalWindow from './components/ModalWindow';


function App() {
  const [openForm, setOpenForm] = useState<boolean>(false);


  const toggle = (value: boolean) => {
    setOpenForm((prevState) => {
      return prevState === value ? !prevState : value
    });
  };


  return (
      <Container>
        <div className='header'><Button onHandleClick={()=>toggle(true)} classBtn={'fill'} title={"Add"}/></div>
        <Table />
      {openForm && <ModalWindow onClose={toggle} />}
      </Container>

  );
}

export default App;

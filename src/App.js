import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import ContactContainer from './components/container/contact_container';
import Ejemplo1 from './hooks/Ejemplo1';
import { Ejemplo2 } from './hooks/Ejemplo2';
import { ComponenteConContexto } from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import { AllCycles } from './hooks/lifecycle/AllCycles';
import { useState } from 'react';

function App() {
  const [status, setStatus] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TaskListComponent/> */}
        {/* <ContactContainer/> */}
        {/* <ComponenteConContexto/> */}
        {/* <Ejemplo4>
          <p>Children1</p>
          <p>Children2</p>
          <p>Children3</p>
        </Ejemplo4> */}
        {status?<AllCycles/>:<></>}
        <button onClick={()=>{setStatus(!status)}}>Toggle</button>
  
      </header>
    </div>
  );
}

export default App;

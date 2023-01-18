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
import { Father } from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function App() {
  const [status, setStatus] = useState(false)
  const location = useLocation();
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
        {/* {status?<AllCycles/>:<></>}
        <button onClick={()=>{setStatus(!status)}}>Toggle</button> */}
        {/* <Father/> */}
        {/* <OptionalRender/> */}
        {/* <button onClick={()=>navigate(-1)}>Go back</button> */}
        <Outlet />

  
      </header>
    </div>
  );
}

export default App;

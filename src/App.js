import logo from './logo.svg';
import './App.css';
import Greeting  from './Components/pure/greeting';
import TaskListComponent from './Components/container/task.list';
import { ContactListComponent } from './Components/container/contact.list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente propio*/}
        {/*<Greeting name="Fabian"></Greeting>*/}
       {/**<TaskListComponent></TaskListComponent> */} 
       <ContactListComponent></ContactListComponent>
      </header>
    </div>
  );
}

export default App;

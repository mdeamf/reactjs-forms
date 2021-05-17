import './App.css';
import { ControlledFunctionalForm } from './components/ControlledFunctionalForm';
import { ControlledClassForm } from './components/ControlledClassForm';
import { ReactHookForm } from './components/ReactHookForm';

function App() {
  return (
    <div className="App">
      {/* <ControlledFunctionalForm/> */}

      {/* <ControlledClassForm /> */}

      <ReactHookForm />
    </div>
  );
}

export default App;

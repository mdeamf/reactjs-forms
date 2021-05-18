import './App.css';
import { ControlledFunctionalForm } from './components/ControlledFunctionalForm';
import { ControlledClassForm } from './components/ControlledClassForm';
import { ReactHookForm } from './components/ReactHookForm';
import { FormikForm } from './components/FormikForm';

function App() {
  return (
    <div className="App">
      {/* <ControlledFunctionalForm/> */}

      {/* <ControlledClassForm /> */}

      {/* <ReactHookForm /> */}

      <FormikForm />
    </div>
  );
}

export default App;

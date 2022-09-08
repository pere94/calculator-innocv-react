import {useInitialState} from './hooks/useInitialState';
import {AppContext} from './context/AppContext';
import './App.css';

import { InputData } from "./components/InputData/InputData";

import { OperationTopGroup1 } from "./templates/OperationTopGroup1/OperationTopGroup1";
import { NumberGroup } from "./templates/NumberGroup/NumberGroup";
import { OperationRightGroup } from "./templates/OperationRightGroup/OperationRightGroup";

function App() {
  const initialState = useInitialState(AppContext);

  return (
    <AppContext.Provider value={initialState}>
      <div className="App">
        <InputData />
        <div className="container__buttons">
          <div className="container__buttons_left">
            <OperationTopGroup1 />
            <NumberGroup />
          </div>
          <div className="container__buttons_right">
            <OperationRightGroup />  
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;

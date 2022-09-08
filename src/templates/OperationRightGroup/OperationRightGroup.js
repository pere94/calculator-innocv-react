import React from 'react';
import { GrFormSubtract } from 'react-icons/gr';
import { GrFormAdd } from 'react-icons/gr';
import { FaEquals } from 'react-icons/fa';
import './OperationRightGroup.css';

import { BasicButton } from "../../components/BasicButton/BasicButton";

import { AppContext } from '../../context/AppContext';
import { CalculatorOperations } from "../../utilities/operationsFunctions";

function OperationRightGroup() {
    const {inputData, setCharacter, saveData} = React.useContext(AppContext);

    const saveInputData = (data) => {
        const result = CalculatorOperations(data);
        if (!isNaN(result)) {
            saveData(result);
        } else {
            saveData('!Error');
        }
    };
    
  return (
    <div className="OperationRightGroup">
        
        <BasicButton 
            textButton="÷"
            actionClick={() => setCharacter(' /')}
            />
        <BasicButton 
            textButton='X'
            actionClick={() => setCharacter(' *')}
            />
        <BasicButton 
            textButton={<GrFormSubtract className="OperationRightGroup_icon"/>}
            actionClick={() => setCharacter(' -')}
            />
        <BasicButton 
            textButton={<GrFormAdd className="OperationRightGroup_icon"/>}
            actionClick={() => setCharacter(' +')}
            />
        <BasicButton 
            textButton={<FaEquals className="OperationRightGroup_icon"/>}
            withButton = '70px'
            heightButton = '70px'
            backgroundColor='rgba(0, 0, 0, 0.3)'
            actionClick={() => saveInputData(inputData)}
        />
        
    </div>
  );
}

export {OperationRightGroup};
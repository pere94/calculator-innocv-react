import React from "react";
import { AppContext } from "../../context/AppContext";
import "./OperationTopGroup1.css";
import { FiDelete } from 'react-icons/fi';

import { BasicButton } from "../../components/BasicButton/BasicButton";

function OperationTopGroup1() {
    const { 
        setCharacter, 
        deleteLastCharacter, 
        deleteAllCharacter 
    } = React.useContext(AppContext);

    return (
        <div className="OperationTopGroup1">
            <BasicButton 
              textButton="C" 
              withButton = '105px'
              actionClick={deleteAllCharacter} 
            />
            <BasicButton
                textButton="%"
                actionClick={() => setCharacter('%')}
            />
            <BasicButton 
              textButton={<FiDelete className="OperationRightGroup_icon"/>}
              withButton = '60px'
              heightButton = '60px'
              actionClick={deleteLastCharacter}
            />
        </div>
    );
}

export { OperationTopGroup1 };

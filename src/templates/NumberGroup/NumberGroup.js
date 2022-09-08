import React from 'react';
import { AppContext } from '../../context/AppContext';
import './NumberGroup.css';

import { BasicButton } from "../../components/BasicButton/BasicButton";

function NumberGroup() {

  const {setCharacter, changeValuesign} = React.useContext(AppContext);

  return (
    <div className="NumberGroup">
      <BasicButton 
        textButton="1"
        actionClick={() => setCharacter('1')}
      />
      <BasicButton 
        textButton="2"
        actionClick={() => setCharacter('2')}
      />
      <BasicButton 
        textButton="3"
        actionClick={() => setCharacter('3')}
      />
      <BasicButton 
        textButton="4"
        actionClick={() => setCharacter('4')}
      />
      <BasicButton 
        textButton="5"
        actionClick={() => setCharacter('5')}
      />
      <BasicButton 
        textButton="6"
        actionClick={() => setCharacter('6')}
      />
      <BasicButton 
        textButton="7"
        actionClick={() => setCharacter('7')}
      />
      <BasicButton 
        textButton="8"
        actionClick={() => setCharacter('8')}
      />
      <BasicButton 
        textButton="9"
        actionClick={() => setCharacter('9')}
      />
      <BasicButton 
        textButton="+/-"
        actionClick={changeValuesign}
      />
      <BasicButton 
        textButton="0"
        actionClick={() => setCharacter('0')}
      />
      <BasicButton 
        textButton="."
        actionClick={() => setCharacter('.')}
      />
    </div>
  );
}

export {NumberGroup};
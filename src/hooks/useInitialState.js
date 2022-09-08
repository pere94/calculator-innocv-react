import React from 'react';


function useInitialState() {
    const [inputData, setInputData] = React.useState('');


    const saveData = (text) => {
        setInputData(text);
    };

    const setCharacter = (character) => {
        let currentData = inputData;
        setInputData(currentData.toString().concat(character));
    };

    const setCharacterBefore = (character) => {
        let currentData = inputData;
        setInputData(character.concat(currentData.toString()));
    };

    const deleteLastCharacter = () => {
        let currentData = inputData;
        setInputData(currentData.toString().substring(0, currentData.length - 1));
    };

    const deleteAllCharacter = () => {
        setInputData('');
    };

    const changeValuesign = () => {
        let currentData = inputData;
        if(currentData.toString().includes('-')) {
            setInputData(currentData.toString().replace('-',''));
        } 
        else {            
            setInputData('-'.concat(currentData.toString()));
        }
    };


    return {
        inputData,
        saveData,
        setCharacter,
        deleteLastCharacter,
        setCharacterBefore,
        deleteAllCharacter,
        changeValuesign,
    };
}

export {useInitialState};
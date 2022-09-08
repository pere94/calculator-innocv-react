
function CalculatorOperations(dataInput) {
    let result = 0;

    if (dataInput.includes('*')) {
        if (dataInput.includes('%')) {
            const data = dataInput.trim().split('*');
            result = parseFloat(data[0]) * parseFloat(data[1].replace('%', '')) / 100;

        } else {
            const data = dataInput.trim().split('*');
            result = parseFloat(data[0]) * parseFloat(data[1]);
        }
    }
    
    else if (dataInput.includes('/')) {
        const data = dataInput.trim().split('/');
        result = parseFloat(data[0]) / parseFloat(data[1]);
    }

    else if (
            dataInput.includes('+')
            && !dataInput.includes('*')
            && !dataInput.includes('/')
        ) {

        const data = dataInput.trim().split('+');
        result = parseFloat(data[0]) + parseFloat(data[1]);
    } 

    else if (
            dataInput.includes('-') 
            && !dataInput.includes('*')
            && !dataInput.includes('/')
        ) {

        const data = dataInput.trim().split('-');
        result = parseFloat(data[0]) - parseFloat(data[1]);
    }

    return result;
}

export {CalculatorOperations}
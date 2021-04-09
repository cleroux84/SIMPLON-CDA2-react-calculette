
export const calculate =() => {
    return {
        type: 'CALCULATE',
    }
}

export const updateInput1 = (value)=> {
    return{
     type: 'UPDATE_INPUT_1',
     value: value   
    }   
}

export const updateInput2 = (value)=>{
    return{
     type: 'UPDATE_INPUT_2',
     value: value   
    }   
}

export const changeOperator = (value)=>{
    return {
     type: 'CHANGE_OPERATOR',
     value:value
    }
}

export const generateNumber = ()=>{
    return {
        type: 'GENERATE_NUMBER',
    }

}

export const updateLoader = (value)=>{
    return {
        type: 'UPDATE_LOADER',
        value: value
    }
}


export const updateInput1Withthunk = () => {
    return  async (dispatch) => {
        dispatch(updateLoader(true));
        const response = await fetch ('http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1');
        const number = await response.json();
        dispatch(updateLoader(false));
        dispatch(updateInput1(number));
    }
}



const initialState=0;
const changeTheNumber=(state=initialState,action)=>
{
    switch(action.type)
    {
        case "INCREMENT":return state+1;
        case "DECREMENT":return state-1;
        default: return state;  
    }
}

// const changeTheNumber=(state = {}, action)=>
// {
//     switch (action.type) {
//         case 'INCREMENT':
//           return { ...state, count: state.count + 1 };
//         case 'DECREMENT':
//           return { ...state, count: state.count - 1 };
//         default:
//           return state;
//       }
// }

export default changeTheNumber;     
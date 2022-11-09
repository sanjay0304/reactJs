import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name:'counter',
    initialState:{
        count:0,
        login:true
    },
    reducers:{
        increment:(state)=>{
            state.count+=1;          
        },
        decrement:(state)=>{
            if(!state.count<=0)
            state.count-=1;
        },
        incrementByPayload:(state,actions)=>{
            state.count+=actions.payload;
        }
    }
});
export const {increment,decrement,incrementByPayload} = counterSlice.actions;

export default counterSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { Live_Chat_Count } from "./constant";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        message :[]
    },
    reducers:{
        addMessage:(state, action)=>{
            state.message.splice(Live_Chat_Count,1); // remove one message after 10 message
          state.message.unshift(action.payload);
        }
    }
});

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'http://localhost:3001';

export const profileUser = createAsyncThunk(
    'user/profile',
    async (_, {rejectWithValue}) => {
        try {
           
            const config = {
                headers : 
                {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("userToken")
                    
                    
                },
                
                
                
            }
        
            const {data} = await axios.post
            (
                `${apiUrl}/api/v1/user/profile`,
                config
            )
            
            console.log("data user", data)
            return data;
            
        } catch (error) {
            // return custom message from API if present
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message)
            }
            
        }
    }
)
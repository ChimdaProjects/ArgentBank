import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'http://localhost:3001';

export const profileUser = createAsyncThunk(
    'user/profile',
    async (_, {rejectWithValue}) => {
        try {
           
           
            const token = localStorage.getItem("userToken");
            console.log("token", token);
            const {data} = await axios.post
            (
                `${apiUrl}/api/v1/user/profile`,
                {},
                {
                    headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'

                    }
                ,
                
                }
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
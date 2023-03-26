import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'http://localhost:3001';

export const loginUser = createAsyncThunk(
    'auth/login',
    async ({ email, password}, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( { email, password } )
            }
        
            const {data} = await axios.post
            (
                `${apiUrl}/api/v1/user/login`,
                { email, password },
                config
            )
            console.log("data", data);
            // user's token in local storage
            localStorage.setItem('userToken', data.body.token);
            
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


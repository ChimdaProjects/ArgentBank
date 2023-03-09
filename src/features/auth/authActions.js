import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'http://localhost:3001';

export const loginUser = createAsyncThunk(
    'auth/login',
    async ({ email, password, firstName, lastName }, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        
    
            await axios.post(
                `${apiUrl}/login`,
                { email, password, firstName, lastName},
                config
            )
        } catch (error) {
            // return custom message from backend if present
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
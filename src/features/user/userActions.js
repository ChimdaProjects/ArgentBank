import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'http://localhost:3001';

/**
 * This function fetches data of user (firstname, lastname)
 */
export const profileUser = createAsyncThunk(
    'user/profile',
    async (_, {rejectWithValue}) => {
        try {
 
            const token = localStorage.getItem("userToken"); 
            const { data } = await axios.post
            (
                `${apiUrl}/api/v1/user/profile`,
                {},
                {
                    headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                    }
                }
            )
            
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

export const profileUserEdit = createAsyncThunk(
    'user/profileEdit',
    async ({ firstName, lastName }, { rejectWithValue }) => {
        try {
 
            const token = localStorage.getItem("userToken");
            const {data} = await axios.put
            (
                `${apiUrl}/api/v1/user/profile`,
                { firstName, lastName },
                {
                    headers: 
                    {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                    }
                }
            )
            
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
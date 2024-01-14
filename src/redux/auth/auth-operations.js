import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  login,
  register,
  logout,
  current,
  adviceForLoginUser,
} from '../../service/apiAxios';

const token = {
  set(token) {
    localStorage.setItem('AUTH_TOKEN', token);
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.Authorization = '';
    localStorage.removeItem('AUTH_TOKEN');
  },
};

const actionRegister = createAsyncThunk(
  'auth/register',
  async (payload, thunkAPI) => {
    try {
      const response = await register(payload);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const actionLogin = createAsyncThunk(
  'auth/login',
  async (payload, thunkAPI) => {
    try {
      const response = await login(payload);

      // Log the entire response for debugging
      console.log('Login Response:', response);

      // Log the content of response.data
      console.log('Response Data:', response.data);

      if (
        response.data &&
        response.data.status === 'success' &&
        response.data.code === 200
      ) {
        const { token, user } = response.data.data;

        localStorage.setItem('AUTH_TOKEN', token);

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        return { status: 'success', user };
      } else {
        console.log('Login failed. Response data:', response.data);
        return { status: 'failed', error: 'Invalid credentials' };
      }
    } catch (error) {
      console.error('Error in actionLogin:', error);

      console.error('Error Response:', error.response?.data);

      return thunkAPI.rejectWithValue(
        error.response?.data || 'Internal Server Error'
      );
    }
  }
);

const actionLogout = createAsyncThunk('auth/loout', async (_, thunkAPI) => {
  try {
    await logout();
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const actionCurrent = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await current();
      return data.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getUsersAdvice = createAsyncThunk(
  'auth/adviceForLoginUsers',
  async (credentials, thunkAPI) => {
    try {
      const response = await adviceForLoginUser(credentials);
      console.log('Response:', response);

      if (response && response.data && response.data.user) {
        return response.data.user;
      } else {
        return thunkAPI.rejectWithValue('Unexpected response format');
      }
    } catch (error) {
      console.log('Error:', error.message);

      return thunkAPI.rejectWithValue('Error fetching user advice');
    }
  }
);
export const authOperations = {
  actionRegister,
  actionCurrent,
  actionLogin,
  actionLogout,
  getUsersAdvice,
};

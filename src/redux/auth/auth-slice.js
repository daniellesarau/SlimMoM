import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from './auth-operations';

const initialState = {
  user: {
    name: null,
    email: null,
    userInfo: null,
    userDailyCalorieIntake: null,
    userNotRecommendedProducts: [],
  },
  token: null,
  isLoggedIn: false,
  isFetchingUser: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: state => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(authOperations.actionRegister.pending, state => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(authOperations.actionRegister.fulfilled, state => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(authOperations.actionRegister.rejected, state => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });

    builder
      .addCase(authOperations.actionLogin.pending, state => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(authOperations.actionLogin.fulfilled, (state, action) => {
        const { status, user } = action.payload;
        if (status === 'success') {
          state.isLoading = false;
          state.user = user;
          state.token = user.token;
          state.isLoggedIn = true;
          state.isSuccess = true;
          state.isError = false;
        } else {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
        }
      })
      .addCase(authOperations.actionLogin.rejected, state => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });

    // Current user
    builder
      .addCase(authOperations.actionCurrent.pending, state => {
        state.isLoading = true;
        state.isFetchingUser = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(authOperations.actionCurrent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isFetchingUser = false;
        state.isLoggedIn = true;
        state.isSuccess = true;
        state.isError = false;
      })
      .addCase(authOperations.actionCurrent.rejected, state => {
        state.isLoading = false;
        state.isError = true;
        state.isFetchingUser = false;
        state.isSuccess = false;
      });

    // Logout
    builder
      .addCase(authOperations.actionLogout.pending, state => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(authOperations.actionLogout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoading = false;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.actionLogout.rejected, state => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });

    // Get Users Advice
    builder
      .addCase(authOperations.getUsersAdvice.pending, state => {
        state.isLoading = true;
      })
      .addCase(authOperations.getUsersAdvice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.userInfo = action.payload.userInfo;
        state.user.userDailyCalorieIntake =
          action.payload.userDailyCalorieIntake;
        state.user.userNotRecommendedProducts = [
          ...action.payload.userNotRecommendedProducts,
        ];
      })
      .addCase(authOperations.getUsersAdvice.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const { setToken, reset } = authSlice.actions;

export default authSlice.reducer;

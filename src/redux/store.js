// import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './rootReducer';
// import { setupListeners } from '@reduxjs/toolkit/query';

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: getDefaultMiddleware => [...getDefaultMiddleware()],
// });

// setupListeners(store.dispatch);
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { setupListeners } from '@reduxjs/toolkit/query';

// Middleware for handling authentication token
const authMiddleware = store => next => action => {
  if (action.type === 'auth/login/fulfilled') {
    const { token } = action.payload;

    // Assuming token is a string, update accordingly
    localStorage.setItem('AUTH_TOKEN', token);
  }

  return next(action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    authMiddleware,
  ],
});

setupListeners(store.dispatch);

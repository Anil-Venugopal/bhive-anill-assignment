import { configureStore } from '@reduxjs/toolkit';
import workspaceReducer from './workSpaceSlice';

export const store = configureStore({
  reducer: {
    workspace: workspaceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }), // Disable serializableCheck if needed
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

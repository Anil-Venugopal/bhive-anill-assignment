import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { fetchWorkSpacesAPI } from '../api/api';

// Define TypeScript interfaces for strong typing
interface Workspace {
  id: string;
  name: string;
  images: string[];
  google_maps_url: string;
  day_pass_price: number;
  day_pass_discounts_percentage: { [key: number]: { value: number } };
}

interface WorkspaceState {
  data: Workspace[];
  loading: boolean;
  error: string | null;
}

// Initial state with proper default values
const initialState: WorkspaceState = {
  data: [],
  loading: false,
  error: null,
};

// Async thunk to fetch workspaces
export const fetchWorkSpaces = createAsyncThunk<
  Workspace[], // Expected return type
  void,
  { rejectValue: string } // Ensuring error is a string
>(
  'workspace/fetchWorkSpaces',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchWorkSpacesAPI();
      
      if (!Array.isArray(data)) {
        return rejectWithValue('Invalid response format');
      }
      
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Unknown error occurred');
    }
  }
);

// Redux slice
const workspaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    clearWorkSpaces: (state) => {
      state.data = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkSpaces.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWorkSpaces.fulfilled, (state, action: PayloadAction<Workspace[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWorkSpaces.rejected, (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === 'string' ? action.payload : 'Failed to fetch workspaces';
      });
  },
});

// Export actions and reducer
export const { clearWorkSpaces } = workspaceSlice.actions;
export default workspaceSlice.reducer;

// Selectors
export const selectWorkSpaces = (state: RootState) => state.workspace.data;
export const selectLoading = (state: RootState) => state.workspace.loading;
export const selectError = (state: RootState) => state.workspace.error;

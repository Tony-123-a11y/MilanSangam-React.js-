import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUser } from '../services/api.service';

// Async thunk to fetch user and profile data
export const fetchUser = createAsyncThunk(
  'user/fetchUserDetails',
  async (_, thunkAPI) => {
    try {
      const res = await getUser();
      // console.log("getUser", res.data);
      return {
        user: res.data.user,
        profileData: res.data.profileData,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Initial state
const initialState = {
  isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')) || false,
  user: null,
  profileData: null,
  token: localStorage.getItem('token') || null,
  loading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loggedInUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      localStorage.setItem('token', token);
      localStorage.setItem('isAuthenticated', true);
    },
    logOutUser: (state) => {
      state.user = null;
      state.token = null;
      state.profileData = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
      localStorage.removeItem('isAuthenticated');
    },
    updateLoader: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      //   console.log('Fetching user...');
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.profileData = action.payload.profileData;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.profileData = null;
        state.isAuthenticated = false;
        console.error('Failed to fetch user:', action.payload || 'Unknown error');
      });
  },
});

export const { loggedInUser, logOutUser, updateLoader } = userSlice.actions;
export default userSlice.reducer;

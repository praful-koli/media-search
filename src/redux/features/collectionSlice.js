import { createSlice } from "@reduxjs/toolkit";
import { addCollectionToLocalStorage, getCollectionDataLocalStorage, removeAllItemFromLocalStorage, removeItemFromLocalStorage } from "../../localstroage/collection";

const initialState = getCollectionDataLocalStorage();

export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection: (state, action) => {
      state.push(action.payload);
      addCollectionToLocalStorage(action.payload)
    },

    removeCollection: (state, action) => {
      removeItemFromLocalStorage(action.payload)
      return state.filter(item => item.id !== action.payload);
    },
    clearCollection: () => {
      removeAllItemFromLocalStorage()
      return []
    },
  },
});

export const { addCollection, removeCollection ,clearCollection} = collectionSlice.actions
export default collectionSlice.reducer;

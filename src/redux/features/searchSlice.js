import { createSlice } from "@reduxjs/toolkit";
// import { fetchPhoto } from "../../api/mediaApi";


const initialState = {

    query : '',
    activeTab : 'photos',
    results: [],
    loading : false,
    error : null,

}

export const searchSlice = createSlice ({
    name : "search" ,
    initialState,
    reducers :{
        setQuery : (state,action) => {
              state.query = action.payload;
        },
        setActiveTab : (state,action) => {
              state.activeTab = action.payload;
        },
        
        setResults : (state , action) => {
              state.results = action.payload;            
              state.loading = false
        },
        
        setLoading : (state ) => {
              state.loading = true;
              state.error  = null;
        },

        setError : (state , action) => {
              state.error = action.payload;
              state.loading = false
        },

        clearResults : ( state) => {
            state.results = []
        }
    },
    
    // extraReducers : (builder) =>  {
    //     builder.addCase(fetchPhoto.pending , (state, action) => {
    //           state.loading = true
    //     })
    //     builder.addCase(fetchPhoto.fulfilled , (state, action) => {
    //           state.loading = false
    //           state.results = action.payload;
    //     })
    //     builder.addCase(fetchPhoto.rejected , (state, action) => {
    //           state.error = action.payload
    //           state.loading = false;
    //     })
    // }

})


export const {setQuery,setActiveTab,setResults,setLoading,setError} = searchSlice.actions;
export default  searchSlice.reducer;
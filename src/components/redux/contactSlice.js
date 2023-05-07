// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactApi = createApi({
//   reducerPath: 'contacts',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://64553acba74f994b3355ae6a.mockapi.io',
//   }),
//   endpoints: builder => ({
//     getContacts: builder.query({
//       query: () => `/contacts`,
//       providesTags: ['Contact'],
//     }),
//   }),
// });

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const { useGetContactsQuery } = contactApi;

import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myContactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    filter: '',
    items: [],
  },
  reducers: {
    updateFilter(state, action) {
      state.filter = action.payload;
    },
    setContacts(state, action) {
      state.items = action.payload;
    },
  },
});

export const { updateFilter, setContacts } = myContactsSlice.actions;

export default myContactsSlice.reducer;

export const contactsAPI = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64553acba74f994b3355ae6a.mockapi.io/',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getContact: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsAPI;

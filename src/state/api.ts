import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main", //name of the reducer
  tagTypes: ["Kpis"], // kpi(key peformance indicators) used to keep information, name for each api data
  endpoints: (build) => ({
    getKpis: build.query<void, void>({
        query: () => "kpi/kpis/", //api call to this uri
        providesTags: ["Kpis"] 
    })
  }), //where we actually create api calls
});

export const { useGetKpisQuery} = api;
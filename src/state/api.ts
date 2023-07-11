import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, GetProductsResponse } from "./types";

export const api = createApi({ //defines an "service", listing base url and endpoints we want to itneract with
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main", //name of the reducer
  tagTypes: ["Kpis", "Products"], // kpi(key peformance indicators) used to keep information, name for each api data
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
        query: () => "kpi/kpis/", //api call to this uri
        providesTags: ["Kpis"] 
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => "product/products", //api call to this uri
      providesTags: ["Products"] 
  }),
  }), //where we actually create api calls
});

//auto-generated base don defined edpoints, hooks for usage in functional components
export const { useGetKpisQuery, useGetProductsQuery} = api;
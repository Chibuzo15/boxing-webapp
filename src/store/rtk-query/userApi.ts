import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReauth } from "./customBaseQuery";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  tagTypes: [],
  endpoints: (builder) => ({
    getTrendingTopics: builder.query({
      query: () => "trending-topics",
    }),
    getNewsFeed: builder.query({
      query: () => {
        return {
          url: "news-feed",
        };
      },
    }),
  }),
});

export const { useGetTrendingTopicsQuery, useGetNewsFeedQuery } = userApi;

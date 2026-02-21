import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: "include",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ["Matches", "Interest", "Shortlist"],

  endpoints: (builder) => ({
    // ✅ GET MATCHES
    getMatches: builder.query({
      query: (userId) => `matchprofile/matchuser/${userId}`,
      providesTags: ["Matches"],
    }),

    // ✅ SEND INTEREST
    sendInterest: builder.mutation({
      query: (body) => ({
        url: "interest/send",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Interest", "Matches"],
    }),

    // ✅ WITHDRAW INTEREST
    withdrawInterest: builder.mutation({
      query: (body) => ({
        url: "interest/withdraw",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Interest"],
    }),

    // ✅ ACCEPT INTEREST
    acceptInterest: builder.mutation({
      query: (body) => ({
        url: "interest/accept",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Interest"],
    }),

    // ✅ REJECT INTEREST
    rejectInterest: builder.mutation({
      query: (body) => ({
        url: "interest/reject",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Interest"],
    }),

    // ✅ GET SENT INTERESTS
    getSentInterests: builder.query({
      query: (userId) => `interest/sent/${userId}`,
      providesTags: (result) =>
        result?.data?.map((item) => ({ type: "Interest", id: item._id })) || [
          "Interest",
        ],
    }),

    //  GET RECEIVED INTERESTS
    getReceivedInterests: builder.query({
      query: (userId) => `interest/received/${userId}`,
      providesTags: (result) =>
        result?.data?.map((item) => ({ type: "Interest", id: item._id })) || [
          "Interest",
        ],
    }),

    //  SHORTLIST PROFILE
    shortListProfile: builder.mutation({
      query: (targetUserId) => ({
        url: `shortlist/${targetUserId}`,
        method: "POST",
      }),
      invalidatesTags: [
        { type: "Shortlist", id: "LIST" },
        { type: "Matches", id: "LIST" },
      ],
    }),

    //  GET ALL SHORTLISTED PROFILES
    getAllShortlistedProfiles: builder.query({
      query: () => "shortlist",

      providesTags: (result) =>
        result?.profiles
          ? [
              ...result.profiles.map((profile) => ({
                type: "Shortlist",
                id: profile._id,
              })),
              { type: "Shortlist", id: "LIST" },
            ]
          : [{ type: "Shortlist", id: "LIST" }],
    }),

    //  REMOVE FROM SHORTLIST
    removeShortList: builder.mutation({
      query: (targetUserId) => ({
        url: `shortlist/${targetUserId}`,
        method: "DELETE",
      }),
      invalidatesTags: [
        { type: "Shortlist", id: "LIST" },
        { type: "Matches", id: "LIST" },
      ],
    }),
    // ✅ GET ACCEPTED PROFILES
    getAcceptedProfiles: builder.query({
      query: (userId) => `profile-status/accepted/${userId}`,
      providesTags: ["Interest"],
    }),

    // ✅ GET REJECTED PROFILES
    getRejectedProfiles: builder.query({
      query: (userId) => `profile-status/rejected/${userId}`,
      providesTags: ["Interest"],
    }),
  }),
});

// ✅ EXPORT HOOKS
export const {
  useGetMatchesQuery,
  useSendInterestMutation,
  useWithdrawInterestMutation,
  useAcceptInterestMutation,
  useRejectInterestMutation,
  useGetSentInterestsQuery,
  useGetReceivedInterestsQuery,
  useGetAcceptedProfilesQuery,
  useGetRejectedProfilesQuery,
  useShortListProfileMutation,
  useRemoveShortListMutation,
  useGetAllShortlistedProfilesQuery,
} = apiSlice;

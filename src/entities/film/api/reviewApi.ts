import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IReview, IReviewsConteinter } from '../model/types'



export const reviewsApi = createApi({
    reducerPath: "reviewsApi",
    tagTypes: ['reviews'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://66acf853f009b9d5c733ffd5.mockapi.io/' }),
    endpoints: (builder) => ({
        getReviews: builder.query<IReviewsConteinter, string>({
            query: (id) => `reviews/${id}`,
            providesTags: result => ['reviews']
        }),
        addreviewsFetch: builder.mutation<IReviewsConteinter, IReviewsConteinter>({
            query: (data) => ({
                url: `reviews/${data.id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ['reviews']
        })
    }),
})
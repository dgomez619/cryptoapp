import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
console.log("here")

const cryptoApiHeaders = {
        'X-RapidAPI-Key': 'c00c7abe56msh30f4870178b91b9p1f633bjsn2eaa34387740',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
console.log("here")

const baseUrl = 'https://coinranking1.p.rapidapi.com/';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath :   'cryptoApi',
    baseQuery   :   fetchBaseQuery({ baseUrl }), 
    endpoints   :   (builder) => ({
        getCryptos  : builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timeperiod}) => createRequest(`/coin/${coinId}/history?timeperiod=${timeperiod}`),
        })

    })
});

export const  {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
} = cryptoApi;


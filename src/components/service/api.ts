import axios, { Method } from 'axios'

type AxiosProps = {
   endpoint: string,
   method?: Method | undefined,
   params?: object,
   data?: object,
   headers?: object,
}

export const request = async ({
   method,
   headers,
   endpoint,
   data,
   params,
}: AxiosProps) => {

   const baseUrl = "http://192.168.0.106:3000"
   const config = {
      method: method || 'get',
      baseURL: `${baseUrl}/${endpoint}`,
      data: data || null,
      params: params || null,
      timeout: 120000,
      headers: {
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*',
         ...headers
      }
   }

   let result = await axios(config)
   console.log(result)
   return result
}
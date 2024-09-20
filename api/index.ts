import httpRequest from '@/composables/http'
export const test = (params:any)=>{
    return httpRequest.get("/v1/article/",params,{
        lazy:false

    })
}

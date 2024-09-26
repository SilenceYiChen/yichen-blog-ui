// import httpRequest from '@/composables/http'
import http from "~/composables/http";

export const queryArticleList = (params:any)=>{
    return http.get("/frontend/article/list",params)
}

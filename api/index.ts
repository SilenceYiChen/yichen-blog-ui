// import httpRequest from '@/composables/http'
import {useHttpGet} from "~/composables/http";

export const queryArticleList = (params:any)=>{
    return useHttpGet("/frontend/article/list","/frontend/article/list",{params})
}

import {ref} from 'vue'
const fetchConfig = {
    baseURL:"/qcy-blog",
}
export const getUUID = ()=>{
    var s = [];
    var hexDigits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
    }
    s[14] = "4"
    // @ts-ignore
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)
    s[8] = s[13] = s[18] = s[23] = "-"
    let uuid = s.join("")
    return uuid
}
//请求体封装
function useGetFetchOptions(options = {} ){
// @ts-ignore
    options.baseURL = options.baseURL ?? fetchConfig.baseURL
    // @ts-ignore
    options.initialCache = options.initialCache ?? false
    // @ts-ignore
    options.lazy = options.lazy ?? false
    // @ts-ignore
    options['key'] = getUUID()
    // 用户登录，默认传token


    return options
}
//http请求封装
 function useHttp(url:string,options = {}){


    return new Promise(async (resolve) => {
        useFetch(url, {
            ...useGetFetchOptions(options),
            onResponse:({response})=>{
                resolve(response._data)
            }
        })


    })


}

// GET请求
function useHttpGet(url:string,options = {}){
    // @ts-ignore
    options.method = "GET"
    return useHttp(url,options)
}

// POST请求
function useHttpPost(url:string,options = {}){
    // @ts-ignore
    options.method = "POST"
    return useHttp(url,options)
}
export default {
    get:(url:string,params:any,options={})=>{
        return useHttpGet(url,{query:params,...options})
    },
    post:(url:string,data:any,options:any)=>{
        return useHttpPost(url,{
            body:data,
            ...options
        })
    }
}

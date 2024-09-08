import {ref} from 'vue'
export const fetchConfig = {
    baseURL:"http://www.qcycloud.com/shiyi",
    // baseURL:"http://localhost:8800/shiyi/",
    // baseURL:'/api',
    // headers:{
    //     appid:"bd9d01ecc75dbbaaefce"
    // },
}

//请求体封装
function useGetFetchOptions(options = {}){
// @ts-ignore
    options.baseURL = options.baseURL ?? fetchConfig.baseURL
    // @ts-ignore
    /*options.headers = options.headers ?? {
        appid:fetchConfig.headers.appid
    }*/
    // @ts-ignore
    options.initialCache = options.initialCache ?? false
    // @ts-ignore
    options.lazy = options.lazy ?? false

    // 用户登录，默认传token
    const token = useCookie("token")

    if(token.value){
        // @ts-ignore
        options.headers.token = token.value
    }

    return options
}
export const getuuid = ()=>{
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
//http请求封装
export async function useHttp(key:string,url:string,options = {}){
    options = useGetFetchOptions(options)
    // @ts-ignore
    options.key = key;
    let response = null;
    let res:any = await useFetch(url,{
        ...options,
        // server:false,
    })
    console.log(res)
    // 客户端错误处理
    if(process.client && res.error.value||res.data.value.code!=200){
        const msg = res.error.value?.data?.data
        // @ts-ignore
        if(!options.lazy){
            console.log('服务端错误')
        }
    }

    return res

}

// GET请求
export function useHttpGet(key:string,url:string,options = {}){
    // @ts-ignore
    options.method = "GET"
    return useHttp(key,url,options)
}

// POST请求
export function useHttpPost(key:string,url:string,options = {}){
    // @ts-ignore
    options.method = "POST"
    return useHttp(key,url,options)
}

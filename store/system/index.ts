import {defineStore} from 'pinia'
import {ref,reactive} from  'vue'
// @ts-ignore
export const useSystemStore = defineStore('useSystemStore', ()=>{
    const drawer = ref<Boolean>(false);//开启或关闭侧边导航
    const loginFlag = ref<Boolean>(false)//是否已登录
    const routerPath = ref('/'); //当前页面路径
    const webSiteInfo =ref<any>({})
    const setDrawer = (value:Boolean)=>{
        console.log(value)
        drawer.value = value;
    }
    const setLoginFlag =(value:Boolean)=> {
        loginFlag.value = value
    }
    const setRouterPath =(value:string)=> {
        routerPath.value = value;

    }
    const setWebSiteInfo =(obj:any)=> {
        if (!obj) return;
        webSiteInfo.value = obj;

    }
    return {
        drawer,
        routerPath,
        setDrawer,
        setLoginFlag,
        setRouterPath,
        webSiteInfo,
        setWebSiteInfo
    }
},{
    //@ts-ignore
    persist:process.client
})

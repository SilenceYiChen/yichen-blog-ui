import {useSystemStore} from '@/stores'
export default defineNuxtPlugin(() => {
    // 全局路由中间件
    addRouteMiddleware('global-middleware', (to, from) => {
            console.log('global middleware that runs on every route change');
            // console.log(to,from)
            const systemStore = useSystemStore();
            systemStore.setRouterPath(to.path)
        },
        { global: true }
    )
})

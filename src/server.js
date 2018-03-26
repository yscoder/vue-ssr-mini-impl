import { createApp } from './app'

export default context => {
    return new Promise((resolve, reject) => {
        const { app, router } = createApp()
        // 设置服务器端 router 的位置
        router.push(context.url)
        router.onReady(() => {
            const matched = router.getMatchedComponents()
            // 匹配不到的路由，返回 404
            if (!matched.length) {
                return reject({ code: 404 })
            }
            resolve(app)
        }, reject)
    })
}

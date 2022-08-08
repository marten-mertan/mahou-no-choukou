export default defineNuxtRouteMiddleware((context) => {
    const path = context.hash.replace('#!', '')
    if (path.length) {
        return navigateTo({ path: path })
    }
})

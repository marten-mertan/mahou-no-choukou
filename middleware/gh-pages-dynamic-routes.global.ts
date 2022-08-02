export default defineNuxtRouteMiddleware((to) => {
	const path = to.hash.replace('#!', '');
	if (path.length) {
		return path;
	}
})

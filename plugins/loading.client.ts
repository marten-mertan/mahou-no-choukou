// import { defineNuxtPlugin } from '#imports';

export default defineNuxtPlugin(() => {
    const app = useNuxtApp();

    app.hook('page:start', (context) => {
        console.log('Page started!');
    });
    app.hook('page:finish', (context) => {
        console.log('Page finished!');
    });
});

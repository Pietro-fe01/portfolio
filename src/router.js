import { createRouter, createWebHistory } from "vue-router";

// Pages
import HomePage from "./pages/HomePage.vue";
import Page404 from "./pages/Page404.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
        path: "/",
        name: "homepage",
        component: HomePage,
        },
        {
        path: "/:pathMatch(.*)*",
        name: "page-404",
        component: Page404,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }

        if (to.hash) {
            return {
                el: to.hash,
                top: 110,
                behavior: "smooth",
            };
        }

        return {
            top: 0,
        };
    },
});

export { router };

import { createRouter, createWebHistory } from "vue-router";

import About from "@/components/About";
import Photos from "@/components/Photos.vue";
import Theoretical from "./components/Theoretical.vue";
import PhotoDetaild from "./components/PhotoDetaild.vue";
import PhotoTemplate from "./components/PhotoTemplate.vue";
import SignIn from "@/components/FullScreenSignIn";
import auth from "@/auth";


const Router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Photos,
            meta: {
                needAuthentification: true
            }
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/photo/:id",
            component: PhotoDetaild,
            props: true
        },
        {
            path: "/photo/:id/edit",
            component: EditForm,
            props: true,
            meta: {
                needAuthentification: true
            }
        },
        {
            path: "/photo/new",
            component: NewForm,
            meta: {
                needAuthentification: true
            }
        },
        {
            path: "/signin",
            component: SignIn
        },

        {
            path:"/Theoretical",
            component: Theoretical
        },
        {
            path:"/PhotoDetaild",
            component: PhotoDetaild
        },
        {
            path:"/PhotoTemplate",
            component: PhotoTemplate
        },
    ]
});

Router.beforeEach(async (to, from, next) => {
    if (to.meta && to.meta.needAuthentification) {       
        if (await auth.ckeckSignInStatus())
            next();
        else
            next("/signin");
    } else
        next();
});

export default Router;
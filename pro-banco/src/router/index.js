import { createRouter, createWebHistory } from "vue-router";
import Home from "@/view/Home.vue";
import Insertar from "@/view/Insertar.vue";
import Consultar from "@/view/Consultar.vue";
import Actualizar from "@/view/Actualizar.vue";
import Eliminar from "@/view/Eliminar.vue";

const routes= [
    {
        path:'/',
        name:'home',
        component:Home
    },

    {
        path:'/insertar',
        name:'insertar',
        component: Insertar

    },
    {
        path:'/consultar',
        name:'consultar',
        component:Consultar
    },
    {
        path:'/actualizar',
        name:'actualizar',
        component:Actualizar

    },
    {
        path:'/eliminar',
        name:'eliminar',
        component:Eliminar
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router
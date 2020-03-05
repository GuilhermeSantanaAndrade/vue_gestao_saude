import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/clientes",
    name: "ClientesConsultar",
    component: () => import("../views/ClienteConsulta.vue")
  },
  {
    path: "/clientes/inserir",
    name: "ClienteInserir",
    component: () => import("../views/Cliente.vue")
  },
  {
    path: "/clientes/:id/alterar",
    name: "ClienteAlterar",
    component: () => import("../views/Cliente.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

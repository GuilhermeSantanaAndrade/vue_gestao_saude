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
    name: "Clientes",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ClienteConsulta.vue")
  },
  {
    path: "/clientes/inserir",
    name: "ClientesInserir",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cliente.vue")
  },
  {
    path: "/clientes/:id/alterar",
    name: "ClientesAlterar",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cliente.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

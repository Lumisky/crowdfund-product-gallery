import ProjectList from "./components/ProjectList.vue";
import ImagesList from "./components/ImagesList.vue";
import NotFound from "./components/NotFound.vue";

export const routes = [
  { path: "/", redirect: "mastercraft-bamboo-monitor-riser" },
  { path: "/mastercraft-bamboo-monitor-riser", component: ProjectList },
  { path: "/gallery", component: ImagesList },
  { path: "/:notFound(.*)", component: NotFound },
];

import { createRouter, createWebHistory } from 'vue-router';
import type { RouteLocationNormalized, RouteLocationNormalizedLoaded, NavigationGuardNext } from 'vue-router';
import { RouteName } from '@/router/types';
import Homepage from '@/views/Home.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  strict: true,
  routes: [
    {
      path: '/',
      component: Homepage,
      name: RouteName.Homepage,
      meta: { guardNotLogged: true },
    },
  ],
  scrollBehavior(to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, savedPosition) {
    if (to.matched.some((m) => m.meta.disableScroll)) {
      return;
    }
    if (savedPosition) {
      return savedPosition;
    }
    return {
      top: 0,
      behavior: 'smooth',
    };
  },
});

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  next();
});

export default router;

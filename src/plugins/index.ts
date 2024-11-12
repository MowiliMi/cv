import type { App } from 'vue';
import type { Router } from 'vue-router';

import { useHead } from '@/plugins/module/vueHead';

export default (arg: { app: App; router: Router }) => {
  const { app, router } = arg;
  useHead(app);
};

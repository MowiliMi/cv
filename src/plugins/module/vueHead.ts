import type { App } from 'vue';
import { createHead } from '@vueuse/head';

const head = createHead();

export const useHead = (app: App) => app.use(head);

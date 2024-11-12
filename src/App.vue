<template>
  <div class="app">
    <RouterView />
    <ToTop />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ToTop from '@/components/ToTop.vue';

export default defineComponent({
  name: 'App',
  components: {
    ToTop,
  },
});
</script>

<style lang="scss" scoped>
@use '@/assets/stylesheets/variables' as *;

.app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
</style>

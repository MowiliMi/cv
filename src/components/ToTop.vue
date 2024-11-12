<template>
  <div
    :class="['top']"
    @click="scroll"
  >
    {{ '^' }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ToTop',
  setup() {
    const scroll = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return {
      scroll,
    };
  },
});
</script>

<style lang="scss" scoped>
@use '@/assets/stylesheets/variables' as *;
@use '@/assets/stylesheets/utils/breakpoints' as *;

.top {
  position: fixed;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: $dark-background;
  color: $color-black;
  box-shadow: $box-shadow-primary;
  border-radius: 50%;
  font-weight: 700;
  font-size: 2.5rem;
  color: $color-white;
  width: 3rem;
  height: 3rem;
  right: 1.5rem;
  bottom: 1.5rem;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
}
</style>

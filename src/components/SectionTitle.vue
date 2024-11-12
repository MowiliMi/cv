<template>
  <div class="section-title">
    {{ title }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  name: 'SectionTitle',
  props: {
    title: {
      type: String as PropType<String>,
      default: null,
    },
  },
});
</script>

<style lang="scss" scoped>
@use '@/assets/stylesheets/variables' as *;
@use '@/assets/stylesheets/utils/breakpoints' as *;

.section-title {
  position: relative;
  font-size: 1.2rem;
  font-weight: 700;
  background-color: $dark-background;
  color: $color-white;
  display: inline-block;
  border-radius: $radius-primary;
  padding: 0.2rem 2rem;

  @include breakpoint-tablet {
    font-size: 2rem;
  }

  &:before,
  &:after {
    position: absolute;
    color: $color-secondary;
  }

  &:before {
    content: '{';
    left: 0;
  }

  &::after {
    content: '}';
    right: 0;
  }
}
</style>

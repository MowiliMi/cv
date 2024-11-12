<template>
  <div
    v-if="items"
    class="bio"
  >
    <div class="bio__block">
      <div class="bio__block-photo" />
      <div class="bio__block-text">
        <h1 class="name">
          {{ items.name }}
        </h1>
        <h2 class="specialization">
          {{ items.specialization }}
        </h2>
      </div>
    </div>
    <div
      class="bio__description"
      v-html="items.description"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  name: 'HeaderBio',
  props: {
    items: {
      type: Object as PropType<{ name: string; specialization: string; description: string }>,
      default: () => ({}),
    },
  },
});
</script>

<style lang="scss" scoped>
@use '@/assets/stylesheets/variables' as *;

.bio {
  display: grid;
  z-index: 1;
  width: fit-content;

  &__block {
    display: grid;
    grid-template-columns: 8rem 1fr;
    grid-column-gap: 1.5rem;
    align-items: center;
    margin-bottom: 1.5rem;

    &-photo {
      position: relative;
      background: url('@/assets/images/me.webp') center/cover;
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
      border: 0.3rem solid $color-white;
    }

    &-text {
      display: grid;
      grid-template-columns: 1fr;

      div {
        height: fit-content;
      }

      .name {
        font-size: 2.8rem;
        line-height: 3.2rem;
        font-weight: 700;
        height: fit-content;
        margin: 0;
        padding: 0;
      }

      .specialization {
        position: relative;
        margin: 0;
        padding: 0;
        font-size: 2rem;
        color: $color-secondary;
        line-height: 3.2rem;
        width: fit-content;
      }
    }
  }

  &__description {
    font-size: 0.9rem;
    line-height: 1.6rem;
  }
}
</style>

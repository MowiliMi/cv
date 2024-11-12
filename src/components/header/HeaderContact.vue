<template>
  <div
    v-if="items?.length"
    class="contact"
  >
    <div
      class="name"
      v-for="(item, index) of items"
      :key="index"
    >
      <a
        :href="url(item)"
        :target="target(item)"
      >
        {{ item.name }}
      </a>
      <div class="icon">
        <component :is="item.icon" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export type Item = {
  name: string;
  link?: string;
  type: 'email' | 'phone' | 'link';
  icon: string;
};

export default defineComponent({
  name: 'HeaderContact',
  props: {
    items: { type: Array as PropType<Item[]>, default: () => [] },
  },
  setup() {
    const url = (item: Item) => {
      if (item.type === 'email') {
        return `mailto:${item.name}`;
      } else if (item.type === 'phone') {
        return `tel:${item.name.replace(/\s/g, '')}`;
      }

      return item.link;
    };

    const target = (item: Item) => {
      if (item.type === 'email' || item.type === 'phone') {
        return '_self';
      }

      return '_blank';
    };

    return {
      url,
      target,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'sass:color';

@use '@/assets/stylesheets/variables' as *;

.contact {
  display: grid;
  height: fit-content;
  grid-row-gap: 1rem;
  z-index: 1;

  .name {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: flex-end;
    align-items: center;
    grid-column-gap: 1.5rem;
    font-size: 1.2rem;
    line-height: 1.4rem;
    text-align: right;
    color: $color-white;
    text-decoration: none;

    a {
      display: inline;
      color: $color-white;
      text-decoration: none;

      &:hover {
        text-decoration: none;
        color: color.adjust($color-white, $lightness: -20%);
      }
    }
  }

  .icon {
    display: grid;
    width: 2.3rem;
    height: 2.3rem;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    border: 0.2rem solid $color-secondary;

    svg {
      display: block;
      width: 1.2rem;
      fill: $color-secondary;
    }
  }
}
</style>

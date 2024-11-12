<template>
  <div class="skills">
    <div
      class="skills__item"
      v-for="(item, index) of items"
      :key="index"
    >
      <SectionTitle :title="item.name" />
      <ul>
        <li
          v-for="(skill, indexSkill) of item.items"
          :key="indexSkill"
        >
          {{ skill }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import SectionTitle from '@/components/SectionTitle.vue';

export default defineComponent({
  name: 'AppSkills',
  components: {
    SectionTitle,
  },
  setup() {
    const { tm } = useI18n();
    const items = tm('skills');

    return {
      items,
    };
  },
});
</script>

<style lang="scss" scoped>
@use '@/assets/stylesheets/variables' as *;

.skills {
  display: grid;
  height: fit-content;
  gap: 1rem;

  &__item {
    background-color: $color-white;
    border-radius: $radius-primary;
  }
}
</style>

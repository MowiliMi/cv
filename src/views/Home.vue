<template>
  <div class="home">
    <div class="container container--content">
      <AppHeader />
      <div class="content">
        <AppSkills />
        <AppExperience />
      </div>
      <AppFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAppMeta } from '@/composables/useAppMeta';
import AppHeader from '@/components/header/Header.vue';
import AppExperience from '@/components/Experience.vue';
import AppSkills from '@/components/Skills.vue';
import AppFooter from '@/components/Footer.vue';

export default defineComponent({
  name: 'AppHomepage',
  components: {
    AppHeader,
    AppExperience,
    AppSkills,
    AppFooter,
  },
  setup() {
    useAppMeta({});
  },
});
</script>

<style lang="scss" scoped>
@use '@/assets/stylesheets/utils/breakpoints' as *;

.home {
  .content {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 1.5rem;

    @include breakpoint-desktop {
      grid-template-columns: 45rem 1fr;
    }
  }
}
</style>

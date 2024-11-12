<template>
  <div class="footer">
    {{ t('footer.check') }}
    <span class="code">{{ t('footer.source') }}</span>
    <a
      class="href"
      :href="url"
      target="_blank"
      >({{ url }})</a
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'AppFooter',

  setup() {
    const { t } = useI18n();
    const url = 'https://github.com/MowiliMi/cv';

    return {
      t,
      url,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'sass:color';

@use '@/assets/stylesheets/variables' as *;

.footer {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(3, auto);
  grid-column-gap: 0.5rem;
  padding: 5rem 2rem;

  .code {
    font-weight: 700;
    color: $color-secondary;
  }

  a {
    color: $color-black;
    text-decoration: none;

    &:hover {
      color: color.adjust($color-black, $lightness: 20%);
    }
  }
}
</style>

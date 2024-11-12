<template>
  <div class="header">
    <HeaderBio :items="bioItems" />
    <HeaderContact :items="contactItems" />
    <div class="me" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import HeaderContact, { type Item } from '@/components/header/HeaderContact.vue';
import HeaderBio from '@/components/header/HeaderBio.vue';
import IconEmail from '@/assets/icons/mail.svg';
import IconPhone from '@/assets/icons/call.svg';
import IconPlace from '@/assets/icons/location_on.svg';
import IconLink from '@/assets/icons/link.svg';

export default defineComponent({
  name: 'AppHeader',
  components: {
    HeaderBio,
    HeaderContact,
  },
  setup() {
    const { t } = useI18n();

    const bioItems = {
      name: t('header.title'),
      specialization: t('header.specialization'),
      description: t('header.description'),
    };

    const contactItems: Item[] = [
      { name: t('header.email'), type: 'email', icon: IconEmail },
      { name: t('header.phone'), type: 'phone', icon: IconPhone },
      { name: t('header.place'), type: 'link', link: 'https://maps.app.goo.gl/CShTcQ8LBHDrv3kf9', icon: IconPlace },
      { name: t('header.github'), type: 'link', link: 'https://github.com/MowiliMi', icon: IconLink },
    ];

    return {
      bioItems,
      contactItems,
    };
  },
});
</script>

<style lang="scss" scoped>
@use '@/assets/stylesheets/variables' as *;
@use '@/assets/stylesheets/utils/container' as *;

.header {
  position: relative;
  display: grid;
  background-color: $dark-background;
  border-radius: 0.5rem;
  padding: 1.5rem;
  grid-template-columns: 1fr 1fr;
  color: $color-white;
  z-index: 1;
  margin-bottom: 3rem;
  margin-top: 1rem;

  &:before {
    position: absolute;
    background: url('@/assets/images/header-bg.webp') center/cover no-repeat;
    content: '';
    width: 100%;
    height: 100%;
    opacity: 0.1;
  }
}
</style>

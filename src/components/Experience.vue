<template>
  <div class="experience">
    <SectionTitle :title="t('experienceName')" />
    <div class="experience__items">
      <ul>
        <li
          v-for="(item, index) of items"
          :key="index"
          :class="[{ 'is-last': index + 1 === items.length }]"
        >
          <div class="name">
            {{ item.name }}
            <span class="name__date">{{ item.date }}</span>
          </div>
          <div class="description">
            <span>
              {{ item.position }}
            </span>
            {{ item.description }}
          </div>
          <div class="tags">
            <span
              v-for="(tag, index) of item.tags"
              :key="index"
            >
              {{ tag }}
            </span>
          </div>
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
  name: 'AppExperience',
  components: {
    SectionTitle,
  },
  setup() {
    const { t, tm } = useI18n();

    const items = tm('experience');

    return {
      t,
      items,
    };
  },
});
</script>

<style lang="scss" scoped>
@use '@/assets/stylesheets/variables' as *;
@use '@/assets/stylesheets/utils/breakpoints' as *;

.experience {
  &__items {
    ul {
      position: relative;
      margin: 0 0 0 1rem;
      padding: 1.5rem 0 0 0;

      &:before {
        background-color: $color-secondary;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 0.4rem;
        content: ' ';
        margin-left: -1px;
      }

      li {
        position: relative;
        padding: 1.5rem 0 1rem 1.5rem;
        list-style: none;
        margin-bottom: 1rem;

        &:before {
          position: absolute;
          content: '';
          left: -0.3rem;
          top: 2.2rem;
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background-color: $dark-background;
        }

        &.is-last .name {
          &__date {
            right: -4.5rem;
          }
        }

        .name {
          position: relative;
          display: inline-block;
          margin-bottom: 0.8rem;

          font-size: 0.9rem;
          font-weight: 700;
          background-color: $dark-background;
          border-radius: $radius-primary;
          padding: 0.2rem 0.5rem;
          color: $color-white;

          @include breakpoint-tablet {
            font-size: 1rem;
          }

          @include breakpoint-desktop {
            font-size: 1.2rem;
          }

          &__date {
            position: absolute;
            font-size: $font-size-primary;
            font-size: 1rem;
            font-weight: 700;
            color: $color-black;
            opacity: 0.5;
            right: -9.5rem;
            top: 0.45rem;
            display: none;

            @include breakpoint-desktop {
              display: block;
            }
          }
        }

        .description {
          margin-bottom: 0.5rem;

          span {
            display: inline-block;
            border-radius: $radius-primary;
            font-weight: 700;

            &:after {
              content: '+';
              margin-left: 0.5rem;
              opacity: 0.5;
            }
          }
        }

        .tags {
          span {
            display: inline-block;
            border-radius: $radius-primary;
            color: rgba($color-black, 0.8);
            margin-right: 0.8rem;

            &:after {
              content: ',';
              position: absolute;
            }

            &:last-child:after {
              content: '';
            }
          }
        }
      }
    }
  }
}
</style>

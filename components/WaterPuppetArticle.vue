<template>
  <article class="water-puppet">
    <div class="water-puppet_title">
      <AppTitle :level="3" :title="title" class="tesst" />
    </div>
    <div class="water-puppet_bg">
      <AppVideo :video="video" />
    </div>
    <div class="water-puppet_description">
      <p>{{ description }}</p>
      <div>
        <AppButtonNavigation @click="toggle" />
      </div>
    </div>
    <transition>
      <slot v-if="isOpen" />
    </transition>
  </article>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: 'default'
    },
    description: {
      type: String,
      default: 'default'
    },
    video: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      isOpen: false

    };
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen;
    }
  }

};
</script>

<style lang="scss" scoped>
.water-puppet {
    margin: 2rem 0;
    position: relative;
    &_title {
        max-width: 90%;
        margin: 0 auto;
        display: flex;
        align-items: center;

        .underline{
          margin-left: 0;
        }
    }

    h1 {
        font-size: 1.875rem;
        font-weight: 700;
    }

    .title-icon {
        padding-left: 1rem;
    }

    &_bg {
        padding-top: 1.25rem;
        img {
            width: 100%;
        }
    }

    &_description {
        max-width: 90%;
        margin: 0 auto;
        padding-top: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            flex: 8;
            font-size: 1.125rem;
            font-weight: 300;
            line-height: 140%;
            margin-right: 1rem;
        }

        div {
            flex: 3;
        }
    }
}
</style>

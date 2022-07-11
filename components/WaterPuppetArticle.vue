<template>
  <article class="water-puppet">
    <div class="water-puppet_title">
      <h1>{{ title }}</h1>
      <img src="images/icon-art-work.png" alt="" width="52px" height="19px" class="title-icon">
    </div>
    <div class="water-puppet_bg">
      <img :src="background" alt="hinh-roi-nuoc">
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
    background: {
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
        padding-top: 1.25rem;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            flex: 7;
            font-size: 1rem;
            font-weight: 300;
            text-align: justify;
            line-height: 140%;
            margin-right: 1rem;
        }

        div {
            flex: 3;
        }
    }
}
</style>

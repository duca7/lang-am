<template>
  <article>
    <slot />
    <div>
      <p class="name">
        {{ firstName }}
      </p>
      <p class="name last-name">
        <img src="/icons/nhanh-sen.svg" alt="icon-nhanh-sen">
        {{ lastName }}
      </p>
      <div class="desc">
        <p>
          {{ description }}
        </p>
      </div>
    </div>
  </article>
</template>

<script>

export default {
  props: {
    firstName: {
      type: String,
      default: 'default'
    },
    lastName: {
      type: String,
      default: 'default'
    },
    description: {
      type: String,
      default: 'default'
    }
  }

};
</script>

<style lang="scss" scoped>
article{
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    gap:0.5rem;
    padding-top: 1rem;
    .name{
        font-size: 1.5rem;
        font-weight: 500;
    }

    .last-name{
        padding-top: 0.5rem;
    }
    .desc{
        float: right;
        width: 60%;
            p{
                font-size: 0.8rem;
                font-weight: 300;
                padding-top: 1rem;
                line-height: 140%;
            }
    }

}

</style>

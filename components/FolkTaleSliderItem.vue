<template>
  <img class="show-image" :alt="item.displayName" :src="item.displayImage">
  <p class="show-name">
    {{ item.displayName }}
  </p>
  <div class="show-info">
    <p class="show-date">
      {{ item.date }}
    </p>
    <span class="show-rate">{{ item.rate }}<img src="/icons/rating.svg">
    </span>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      require: true
    }
  }
};
</script>

<style lang="scss">
.show {
  &-image {
    max-height: 150px;
  }

  &-name {
    font-size: 1.2rem;
    margin-top: 0.5rem;
    font-weight: bold;
  }

  &-info {
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.3em;
  }

  &-date {
    font-family: "Montserrat", sans-serif;
  }

  &-rate {
    vertical-align: baseline;
    font-family: "MTD Valky Bold", "Raleway", sans-serif;
  }
}
</style>

<template>
  <div>
    <img class="image" :alt="item.displayName" :src="item.displayImage">
    <div class="show-box">
      <p class="name">
        {{ item.displayName }}
      </p>
      <p class="date">
        {{ item.date }}
      </p>
      <span class="rate">{{ item.rate }}<AppStartIcon /></span>
    </div>
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
.image {
  --ratio: 150px;
  width: var(--ratio);
  height: var(--ratio);
  object-fit: cover;
}

.show-box {
  --font-size: 0.9em;
  display: grid;
  grid-template-columns: 1fr 2rem;
  row-gap: 0.3rem;
  margin-top: 0.3rem;

  .name {
    font-size: 1.2rem;
    margin-top: 0.5rem;
    font-weight: bold;
    grid-column: span 2;
  }

  .date {
    font-family: "Montserrat", sans-serif;
    font-size: var(--font-size);
  }

  .rate {
    vertical-align: baseline;
    line-height: 1.2rem;
    font-size: var(--font-size);
    font-family: "MTD Valky Bold", "Raleway", sans-serif;
  }
}
</style>

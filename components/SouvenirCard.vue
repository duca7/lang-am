<template>
  <div class="souvenir-card">
    <img
      class="souvenir-card__img"
      :src="props.item.url"
      :style="{ '--color': props?.item.bgc }"
    >
    <span class="souvenir-card__name">{{ props.item.name }}</span>
    <span class="souvenir-card__price">{{ price }}</span>
    <AppAddIcon class="souvenir-card__add-icon" @click="$emit('add',item)" />
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    require: true
  }
});

const price = ref(props.item.price + '.000đ');
</script>

<style lang="scss">
.souvenir-card {
  display: grid;
  grid-template-columns: 1fr 30px;
  align-items: flex-end;
  margin-bottom: var(--space-sm);

  &.md {
    .souvenir-card__img {
      width: 100%;
      height: 260px;
    }
  }

  &__img {
    --color: #0f0f0f;

    width: 100%;
    object-fit: contain;
    grid-column: span 2;
    height: 200px;
    background: var(--color);
    // border: 1px solid var(--color);
  }

  &__name {
    margin: 0.5rem 0 0.4rem;
    font-size: 1.3rem;
    font-weight: 500;
    grid-column: span 2;
  }

  &__price {
    font-family: "MTD Valky Bold";
    font-weight: 700;
    padding-top: var(--space-xsm);
  }
}
</style>

<template>
  <div class="category">
    <AppTitle :level="2" :title="title" />
    <div class="category-slider">
      <div v-for="item in sliderData" :key="item.displayName" class="category-item">
        <FolkTaleSliderItem :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: String
  },

  setup (props) {
    const { data, title } = useFolkTaleSlider(props.category);

    return { title, sliderData: data };
  }
};
</script>

<style lang="scss">
.category {
  margin-top: 2em;

  &-slider{
    display: flex;
    overflow-y: scroll;
    min-height: 220px;
    margin-top:1em;
  }

  &-item:not(.category-item:last-child) {
    margin-right: 1rem;
  }
}
</style>

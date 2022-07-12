<template>
  <div class="category">
    <div class="category-title">
      <AppTitle :level="2" :title="title" />
      <AppArrowLeftIcon />
    </div>
    <div ref="slider" class="category-slider" @scroll="trackScroll">
      <FolkTaleSliderItem v-for="item in shows" :key="item.displayName" :item="item" class="category-item" @click="navigate(item.slug)" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: String
  },

  setup (props) {
    const { findByCategory, getShowCategory } = useShows();
    const router = useRouter();
    const title = getShowCategory(props.category);
    const shows = findByCategory(props.category);

    return { title, shows, router };
  },

  methods: {
    navigate (slug) {
      this.router.push(`/tro-tich/${slug}`);
    }
  }

};
</script>

<style lang="scss">
.category {
  margin-top: 2em;

  &-title{
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title{
      flex:1
    }
  }

  &-slider{
    display: flex;
    overflow-y: scroll;
    min-height: 220px;
    margin-top:1em;
  }

  &-item {
    text-decoration: none;
    color:inherit;
    display: inline-block;

    &:not(.category-item:last-child){
      margin-right: 1rem;
    }
  }
}
</style>

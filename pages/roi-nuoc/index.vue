<template>
  <div class="main">
    <AppTitle :level="1" title="Rối Nước" :class="title">
      Là một loại hình nghệ thuật sân khấu độc đáo, ra đời từ nền văn hóa lúa nước.
    </AppTitle>

    <WaterPuppetArticle
      v-for="article in articleData"
      :key="article.id"
      :title="article.title"
      :description="article.description"
      :background="article.background"
    />
    <AppButtonBottomRight />
    <div class="overlay" />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    const articleData = ref([
      {
        title: 'Giới Thiệu',
        description:
                    'Múa rối nước (hay còn gọi là trò rối nước) được coi là nét văn hóa phi vật thể dân gian đặc sắc của dân tộc Việt Nam.',
        background: 'images/ngu-ong.png'
      },
      {
        title: 'Giới Thiệu',
        description:
                    'Trong biểu diễn rối nước không chỉ có con rối mà lời ca của nghệ sĩ và cách diễn rối của nghệ nhân quan trọng không kém. ',
        background: 'images/ho-guom.png'
      }
    ]);

    return {
      articleData
    };
  }
};
</script>

<style lang="scss" scoped>
.app-title{
  margin-top: 2.063rem;
}
.main {
    width: 100%;
    position: relative;
    .overlay{
    background-color: #000;
    background-image: url('images/la-sen-lon.png');
    background-position: 65% 0;
    background-repeat: no-repeat;
    background-size: auto 100%;
    height: 90%;
    left: 0;
    opacity: .3;
    position: absolute;
    top: 20%;
    width: 100%;
    z-index: -1;
  }
}

.title{
  max-width: 90%;
  margin: 0 auto;
}

.desc{
  max-width: 90%;
  margin: 0 auto;
  padding-top: 0.6rem;
}
</style>

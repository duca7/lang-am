<template>
  <div class="main">
    <AppTitle :level="1" title="Rối Nước">
      Là một loại hình nghệ thuật sân khấu độc đáo, ra đời từ nền văn hóa lúa nước.
    </AppTitle>

    <WaterPuppetArticle v-for="article in articleData" :key="article.id" :title="article.title" :description="article.description" :background="article.background" />
    <AppButtonBottomRight />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    const articleData = ref([
      {
        title: 'Giới Thiệu',
        description: 'Múa rối nước (hay còn gọi là trò rối nước) được coi là nét văn hóa phi vật thể dân gian đặc sắc của dân tộc Việt Nam.',
        background: 'images/ngu-ong.png'
      },
      {
        title: 'Giới Thiệu',
        description: 'Trong biểu diễn rối nước không chỉ có con rối mà lời ca của nghệ sĩ và cách diễn rối của nghệ nhân quan trọng không kém. ',
        background: 'images/ho-guom.png'
      }

    ]);

    return {
      articleData
    };
  }
};
</script>

<style lang="scss">
  .main {
    width: 100%;
  }
</style>

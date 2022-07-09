<template>
  <main class="water-puppet container">
    <AppTitle :level="1" title="Rối Nước">
      Là một loại hình nghệ thuật sân khấu độc đáo, ra đời từ nền văn hóa lúa
      nước.
    </AppTitle>

    <WaterPuppetArticle
      v-for="article in articleData"
      :key="article.id"
      :title="article.title"
      :description="article.description"
      :background="article.background"
    />

    <WatterPuppetActivity />
    <div>
      <AppButtonRed class="btn-bottom feedback">
        <img src="icons/gio.svg" alt="cai-gio-bat-ca">
        Đặt vé
      </AppButtonRed>
    </div>

    <div class="overlay" />
  </main>
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
        title: 'Biểu Diễn',
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
.water-puppet {
  width: 100%;
  position: relative;

  .title,.desc {
    padding: 0 1rem;
  }

  .btn-bottom {
    position: fixed;
    bottom: 0px;
    right: 0px;
    z-index: 1;
}

.feedback {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $primary-dark-red-100;
    color: white;
    width: 170px;
    height: 55px;
    border-top-left-radius: 20px;
    border: none;
    font-size: 1.25rem;
    font-weight: 400;
    img {
        padding-right: 1rem;
    }
}
  .overlay {
    @include overlay("images/la-sen-lon.png");
  }
}

</style>

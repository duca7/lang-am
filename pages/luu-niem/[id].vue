<template>
  <div id="souvenir-item" class="container" @>
    <div class="image">
      <img :src="souvenir.url">
      <div class="blur" />
    </div>

    <main class="section">
      <p class="meta">
        {{ 21 }} lượt mua <span class="separator">|</span>
        <AppStartIcon
          v-for="star in stars"
          :key="star"
          :star="star"
          class="star-icon"
        />
        {{ 8.5 }}
      </p>
      <AppHeartIcon />
    </main>

    <div class="section info">
      <strong>{{ souvenir.name }} </strong>
      <span>{{ souvenir.price }}.000đ</span>
    </div>

    <p class="desc">
      Sau vụ lúa trên đồng nhiều cá, tôm, ếch….câu cá là một trong những hoạt
      động mưu sinh thường nhật và cũng là một thú vui thư giãn của người nông
      dân Việt Nam..
    </p>

    <AppButtonRed size="large" class="button-buy" @click="toInfo">
      <AppCartIcon />
      <span>Mua ngay</span>
    </AppButtonRed>

    <AppModal>
      <p>asdasdas</p>
    </AppModal>
  </div>
</template>

<script setup>
const stars = [1, 2, 3, 4, 5];
const { findBySlug } = useSouvenir();
const route = useRoute();
const souvenir = findBySlug(route.params.id);
</script>

<style lang="scss">
#souvenir-item {
  --space-xsm: 0.5rem;
  --space-sm: 1rem;
  --space-md: 2rem;
  --space-lg: 3rem;

  padding-left: var(--space-sm);
  padding-right: var(--space-sm);

  .section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .image {
    width: 100%;
    height: 65vh;
    position: relative;
    // margin: 0 calc(-1 * var(--space-sm));

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .blur {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 10%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.7567401960784313) 28%,
      rgba(0, 0, 0, 0.4206057422969187) 47%,
      rgba(0, 0, 0, 0) 100%
    );
    width: 100%;
  }

  .meta {
    font-family: "Montserrat";
    font-weight: 500;
  }

  .star-icon {
    margin: 0 4px;
  }

  .separator {
    margin: 0 var(--space-xsm);
  }

  .button-buy {
    margin: 2rem auto;
  }

  .info {
    font-weight: 500;
    font-size: 1.5rem;
    margin-top: var(--space-sm);
    margin-bottom: var(--space-xsm);

    // strong {
    // }
    span {
      font-family: "Montserrat";
    }
  }
}
</style>

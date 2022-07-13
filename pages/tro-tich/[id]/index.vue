<template>
  <div class="container">
    <main class="show" :style="backgroundStyle">
      <div class="heading">
        <div class="info">
          <h2 class="name">
            {{ show.displayName }}
          </h2>
          <span class="rate font-mtd">
            <AppStartIcon
              v-for="star in stars"
              :key="star"
              :star="star"
              class="star"
            />
            {{ show.rate }}</span>
        </div>
        <button><AppSocialIcon />Đánh giá</button>
        <button><AppMediaIcon />Trích đoạn</button>
      </div>
      <p class="desc">
        Sau vụ lúa trên đồng nhiều cá, tôm, ếch….câu cá là một trong những hoạt
        động mưu sinh thường nhật và cũng là một thú vui thư giãn của người nông
        dân Việt Nam..
      </p>
      <AppButtonRed size="large" class="ticketing" @click="toInfo">
        <AppCartIcon />
        <span>Mua vé</span>
      </AppButtonRed>
    </main>
    <div class="related-show">
      <p class="caption">
        Những trò tích cùng chủ đề
      </p>
      <div class="list">
        <FolkTaleSliderItem
          v-for="item in shows"
          :key="item.slug"
          :item="item"
          class="item"
          @click="navigate(item.slug)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { take, findBySlug } = useShows();
const router = useRouter();
const route = useRoute();

const shows = take(6);
const show = findBySlug(route.params.id);
const stars = [1, 2, 3, 4, 5];

function toInfo () {
  router.push(`${route.path}/info`);
}

function navigate (slug) {
  this.router.push(`/tro-tich/${slug}`);
}

const gradient = 'linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(23, 1, 1, 0) 25%)';
const backgroundStyle = {
  background: `${gradient}, url(${show.displayImage}) no-repeat top`,
  backgroundSize: 'auto 85%'
};
</script>

<style lang="scss">
.show {
  background-size: auto 85%;
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1em;
  font-size: 1rem;

  svg {
    margin-right: 0.4rem;
  }

  .heading {
    display: flex;
    align-items: center;
    width: 100%;

    .info {
      flex: 1;
    }

    button {
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      min-width: 100px;
      border: 0.5px solid #fff;
      color: #fff;
      border-radius: 5px;
      font-weight:700;
      background: transparent;
      margin-left: 0.5em;
    }
  }

  p {
    line-height: 1.3rem;
    margin-top: 1rem;
  }
  .ticketing {
    margin-top: 1rem;
  }
}

.related-show {
  padding: 3rem 1rem;
  .caption {
    margin-bottom: 1.5rem;
  }
  .list {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(3, 1fr);

    .item {
      .image {
        --ratio: 120px;
        width: 100%;
      }
      .show-box {
        --font-size: 0.7rem;

        .name {
          font-size: 1rem;
          grid-column: initial;
        }

        .date {
          grid-column: span 2;
        }

        .rate {
          grid-column: 2 / 3;
          grid-row: 1 /2;
          align-self: flex-end;
          line-height: 1rem;
        }
      }
    }
  }
}
</style>

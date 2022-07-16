<template>
  <main class="home">
    <AppVideo video="/video/chu-teu.mp4" />
    <article>
      <h1>Góc nhìn mới theo dòng chảy văn hóa mới.</h1>
      <div class="description">
        <p class="description_content">
          Từ nghệ thuật dân gian, Rối Nước trở thành truyền thống, sáng tạo của người Việt.
        </p>
        <div>
          <NuxtLink to="/roi-nuoc" class="btn-button">
            <AppButtonNavigation />
          </NuxtLink>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
.home {
    .main-image {
        background-size: auto 100%;
        background-repeat: no-repeat;
        height: 65vh;
        width: 100%;
        background-image: url('/images/chu-teu.jpeg');
    }

    .btn-button{
      text-decoration: none;
      width: 100px;
    }

    article {
        max-width: 90%;
        margin: 0 auto;
        padding-top: 2rem;

        h1 {
            font-size: 1.875rem;
            line-height: 140%;
        }

        .description {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 1.125rem;

            .description_content {
                flex: 8;
                font-size: 1.25rem;
                font-weight: 400;
                line-height: 140%;
                right: 1rem;
            }

            div {
                flex: 2;
            }
        }
    }
}
</style>

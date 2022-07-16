<template>
  <main class="home">
    <div class="main-image" />

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
            padding: 1rem 0;
            display: flex;
            justify-content: center;
            align-items: center;

            .description_content {
                flex: 7;
                font-size: 1.1rem;
                font-weight: 300;
                line-height: 140%;
                margin-right: 1rem;
            }

            div {
                flex: 3;
            }
        }
    }
}
</style>

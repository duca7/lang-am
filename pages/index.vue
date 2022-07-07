<template>
  <main class="home container">
    <div class="main-image"></div>
    <article>
      <h1>Góc nhìn mới theo dòng chảy văn hóa mới.</h1>
      <div class="description">
        <p>
          Từ nghệ thuật dân gian, Rối Nước trở thành truyền thống, sáng tạo của
          người Việt.
        </p>
        <div>
          <AppButtonNavigation />
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
    background-image: url("images/chu-teu.jpeg");
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
      padding-top: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        flex: 7;
        font-size: 1.1rem;
        font-weight: 300;
        text-align: justify;
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

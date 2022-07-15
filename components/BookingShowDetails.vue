<template>
  <section>
    <AppTitle :level="1" title="Đời thường" />
    <div class="info-show">
      <div class="info-show_date">
        <AppCalendar />
        <p>10 - tháng 8 - 2022</p>
      </div>
      <p class="info-show_desc">
        Những họat động hằng ngày của người dân Việt xưa được các trò tích tái hiện lại chân thật trên sân khấu Rồng Vàng.
      </p>
      <div class="price">
        <p>100.000 vnđ <span> | </span> <span>Chỉ còn một số vé cuối</span></p>
      </div>

      <AppButtonRed size="medium">
        <AppCartIcon />
        <span>Mua vé</span>
      </AppButtonRed>
    </div>

    <div class="card">
      <h1 class="card-number">
        01
      </h1>
      <img src="/images/teu-giao.png" alt="" width="100%">

      <AppTitle :level="3" title="Tễu gião" />
      <p class="card-desc">
        “Tễu” nghĩa là “tiếng cười” theo tiếng Nôm. Chú Tễu là đại diện cho hình ảnh anh nông dân thông minh, hóm hỉnh, ứng đối trong các lễ hội của làng quê Việt xưa. Trước mỗi một chương trình trình diễn rối nước, anh Tễu sẽ là nhân vật dẫn chuyện và đem lại không khí vui tươi, nhộn nhịp để bắt đầu buổi trình diễn.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  section{
    width: 100%;

    .title{
      padding: 1rem;
    }

    .info-show{
      padding: 1rem;
      &_date{
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        color: #b50003;
        font-weight: 600;
        p{
          padding-left: 1rem;
        }
      }
      &_desc{
        font-size: 1.1rem;
        line-height: 140%;
        font-weight: 400;
        padding-top: 0.5rem;
      }
    }

    .price{
      font-size: 1rem;
      font-weight: 500;
      padding-top: 0.5rem;

      span{
        font-weight: 300;
      }
    }
    .app-button{
        margin-top: 1rem;
    }

    .card{
        padding-top: 1rem;
        position: relative;
        .card-number{
            font-size: 100px;
            font-family: 'MTD Valky Bold';
            font-weight: 800;
            padding-left: 1rem;
            color: $primary-dark-red-900;
            font-size: 8rem;
            -webkit-text-fill-color: #000; /* Will override color (regardless of order) */
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: $primary-dark-red-900;
        }

        .card-desc{
            padding:0 1rem;
            line-height: 140%;
            font-size: 1.125rem;
            font-weight: 300;
        }
    }

    img{
        width: 100%;
        height: auto;
        aspect-ratio: auto;
    }
  }
</style>

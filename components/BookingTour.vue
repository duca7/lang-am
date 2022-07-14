<template>
  <section>
    <AppTitle :level="3" title="Book tour" />
    <article>
      <img src="/images/tour-sg-1.png" alt="tour-sg-1" width="100%">
      <div class="tour-title">
        <h3>Di sản trăm năm</h3>
        <AppBookLotusRed class="lotus-left" />
      </div>
      <p class="content">
        Khám phá nét đẹp văn hoá qua nghệ thuật múa rối nước cùng với những công trình kiến trúc và nét sinh hoạt xưa cũ của Sài Gòn .
      </p>
      <AppButtonRed>
        <AppBookTicket class="ticket-book" />
        Đặt tour
      </AppButtonRed>
    </article>
    <article>
      <img src="/images/tour-sg-2.png" alt="tour-sg-2" width="100%">
      <div class="tour-title title-right">
        <AppBookLotusRedReverse class="lotus-right" />
        <h3>Nét đẹp muôn thuở</h3>
      </div>
      <p class="content content-right">
        Đền chùa, nhà thờ, dinh thự và các công trình kiến trúc khác ở đây được công nhận là các Di tích mang tính nghệ thuật Quốc gia.
      </p>
      <AppButtonRed class="btn-right">
        <AppBookTicket class="ticket-book" />
        Đặt tour
      </AppButtonRed>
    </article>
    <article>
      <img src="/images/tour-sg-3.png" alt="tour-sg-3" width="100%">
      <div class="tour-title">
        <h3>Rong ca chiều thứ 7</h3>
        <AppBookLotusRed class="lotus-left" />
      </div>
      <p class="content">
        Nét đẹp lịch sử Sài Gòn qua các công trình di sản độc đáo. Cùng thưởng thức những món ăn, mang nét văn hóa cũ nơi đây.
      </p>
      <AppButtonRed>
        <AppBookTicket class="ticket-book" />
        Đặt tour
      </AppButtonRed>
    </article>
    <article>
      <img src="/images/tour-sg-4.png" alt="tour-sg-4" width="100%">
      <div class="tour-title title-right">
        <AppBookLotusRedReverse class="lotus-right" />
        <h3>Dấu chân biệt động</h3>
      </div>
      <p class="content content-right">
        Tìm về những địa danh mang dấu ấn lịch sử và cùng khám phá những câu chuyện lịch sử bên trong các địa danh vô cùng thú vị.
      </p>
      <AppButtonRed class="btn-right">
        <AppBookTicket class="ticket-book" />
        Đặt tour
      </AppButtonRed>
    </article>
  </section>
</template>

<style lang="scss" scoped>
section{
    padding: 1rem;
    article{
        padding-top: 1.5rem;

        .tour-title{
            display: flex;
            align-items: center;
            padding-top: 1rem;

            h3{
                font-size: 1.875rem;
                color: $primary-dark-red-700;
            }
        }

        .lotus-left{
            margin-left: 0.5rem;
        }

        .lotus-right{
            margin-right: 0.5rem;
        }
        .title-right{
            justify-content: flex-end;
        }

        .content-right{
            text-align: right;
        }

        .content{
            font-size: 1.1rem;
            font-weight: 300;
            line-height: 140%;
            padding-top: 1rem;
        }

        .app-button{
            margin-top: 1rem;
            .ticket-book{
                margin-right: 0.3rem;
            }
        }

        .btn-right{
            float: right;
        }
    }
}
</style>

<template>
  <section>
    <AppTitle :level="3" title="Các hình thức mua" />
    <div v-for="types in buyTypes" :key="types.day" class="buy-ticket">
      <div class="straight-line" />
      <div class="content">
        <p class="type-buy">
          {{ types.title }}
        </p>
        <p class="desc-buy">
          {{ types.content }}
        </p>
      </div>
    </div>
    <div class="overlay" />
  </section>
</template>

<script setup>
const buyTypes = [
  {
    title: 'Mua online',
    content: 'Bạn có thể mua vé cho tất cả buổi biểu diễn của chúng tôi trên trang web này bằng cách'
  },
  {
    title: 'Mua qua điện thoại',
    content: 'Gọi vào số 028 38 404027 (T2 - T6, 8h30-19). Vé  được thanh toán bằng thẻ tín dụng và sau khi mua, bạn nhận được e-mail để in tại nhà.'
  },
  {
    title: 'Mua tại quầy',
    content: 'Bạn có thể đến địa chỉ 55B Nguyễn Thị Minh Khai, Bến Thành, Quận 1, Tp. Hồ Chí Minh để mua tại quầy vé của chúng tôi.'
  },
  {
    title: 'Mua qua đại lý',
    content: 'Chúng tôi không khuyến khích khán giả mua vé cho buổi diễn của chúng tôi thông qua các nhà bán lẻ không được ủy quyền.'
  }

];
</script>

<style lang="scss" scoped>
    section{
        padding: 4rem 1rem;
        width: 100%;
        position: relative;

        .buy-ticket{
            display: grid;
            grid-template-columns: 20px 1fr;
            padding: 1rem 0;

            .straight-line{
                width: 10px;
                height: 50px;
                background: $primary-dark-red-400;
            }
            .content{
                .type-buy{
                    font-size: 1.5rem;
                    font-weight: 300;
                }
                .desc-buy{
                    font-size: 1rem;
                    line-height: 140%;
                    padding-top: 0.5rem;
                }
            }

        }
        .overlay{
                @include overlay("/images/la-sen-ngang-lon.png");
                top: 25%;
                opacity: 0.3;
            }

    }
</style>

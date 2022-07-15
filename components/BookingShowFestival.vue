<template>
  <section>
    <AppTitle :level="1" title="Lễ Hội" />
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
    <BookingShowDetails
      v-for="life in lifeShows"
      :key="life.numberText"
      :number="life.numberText"
      :background="life.background"
      :card="life.cardTitle"
      :content="life.cardContent"
    />
  </section>
</template>

<script setup>
const lifeShows = [
  {
    numberText: '01',
    background: '/images/tam-co-tien.png',
    cardTitle: 'Bát Tiên',
    cardContent: 'Điệu múa tiên liên quan đến thuyết Rồng-Tiên, được coi là tổ tiên của người Việt. Điệu múa với sự xuất hiện của 8 cô Tiên cùng chung một điệu múa. Nét uyển chuyển, nhịp nhành thể hiễn qua từng động tác phản ánh ý nguyện về một cuộc sống thanh bình của người dân Việt Nam.'
  },
  {
    numberText: '02',
    background: '/images/cheo-thuyen.png',
    cardTitle: 'Đua thuyền',
    cardContent: 'Đua thuyền là một trong những hoạt động vui chơi trong mỗi dịp lễ hội của Việt Nam ngày trước. Ngoài ra dịp lễ hội còn có những hoạt động khác như: đấu vật. trọi châu, đá gà....'
  },
  {
    numberText: '03',
    background: '/images/vua-quang-trung.png',
    cardTitle: 'Lê Lợi trả gươm',
    cardContent: 'Lê Lợi là một vị anh hùng dân tộc. Truyền thuyết kể rằng, Lê Lợi được trao tặng một thanh gươm báu từ một vị thần. Sau chiến thắng với giặc ngoại xâm, một ngày kia vua Lê Lợi đang du thuyền trên hồ tại Hà Nội, thần Kim Quy nổi lên yêu cầu thu hồi thanh gươm báu. Từ đó về sau, hồ có tên là hồ Hoàn Kiếm.'
  }
];
</script>

<style lang="scss" scoped>
section{
    width: 100%;

    .title{
      padding: 2rem 1rem 1rem 1rem;
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
  }
</style>

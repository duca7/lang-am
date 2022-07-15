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
    background: '/images/teu-giao.png',
    cardTitle: 'Tễu gião',
    cardContent: '“Tễu” nghĩa là “tiếng cười” theo tiếng Nôm. Chú Tễu là đại diện cho hình ảnh anh nông dân thông minh, hóm hỉnh, ứng đối trong các lễ hội của làng quê Việt xưa. Trước mỗi một chương trình trình diễn rối nước, anh Tễu sẽ là nhân vật dẫn chuyện và đem lại không khí vui tươi, nhộn nhịp để bắt đầu buổi trình diễn. '
  },
  {
    numberText: '02',
    background: '/images/ong-cau-ca.png',
    cardTitle: 'Câu Cá',
    cardContent: 'Sau vụ lúa trên đồng ruộng với rất nhiều cá, tôm, cua, ốc, ếch….câu cá là một trong những hoạt động mưu sinh thường nhật và cũng là một thú vui thư giãn sau khi thu hoạch mùa màng bội thu của người nông dân Việt Nam.'
  },
  {
    numberText: '03',
    background: '/images/cau-be-cuoi-trau.png',
    cardTitle: 'Cầy ruộng, cấy lúa',
    cardContent: 'Hình ảnh những người nông dân trên cánh đồng quê vào mùa vụ. Với những công việc cày bừa, cấy hái quen thuộc, cùng với hình ảnh chú mục đồng thổi sáo vui vẻ trên lưng trâu càng tái hiện rõ nét hơn về người nông dân Việt Nam hiện lên với tinh thần cần mẫn,khẩn trương và lạc quan, vui vẻ.'
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

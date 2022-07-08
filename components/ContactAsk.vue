<template>
  <div class="ask">
    <div class="overlay">
      <AppTitle :level="2" title="Hỏi đáp" />
      <p class="ask-title">
        Câu hỏi thường gặp
      </p>
      <div v-for="question in questionData" :key="question.id" class="ask-list">
        <div class="ask-number">
          {{ question.number }}
        </div>
        <div class="ask-question">
          <p>{{ question.title }}</p>
          <span>{{ question.content }}</span>
        </div>
      </div>
      <p class="ask-title">
        Câu hỏi của bạn
      </p>
      <form>
        <input placeholder="Họ tên" type="text">
        <input placeholder="Email" type="email">
        <input placeholder="Phone" type="text">
        <input placeholder="Câu hỏi" type="text">
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    const questionData = ref([
      {
        number: '01',
        title: 'Có cho trẻ dưới 2 tuổi xem không ?',
        content: 'Trẻ em dưới hai tuổi được cho vào nhà hát để xem chung với ba mẹ và các anh chị vì các vở diễn đều mang tính giáo dục cao cho các bé.'
      },
      {
        number: '02',
        title: 'Có đem thức ăn vào nhà hát không?',
        content: 'Vui lòng không mang thức ăn vào nhà hát tránh làm vương vãi đồ ăn thức uống ảnh hưởng tới các khách hàng khác trong qua trình biểu diễn.'
      },
      {
        number: '03',
        title: 'Có đem thú cưng vào được không?  ',
        content: 'Vui lòng không mang thú cưng khi đi xem rối nước tránh làm ảnh hưởng tới người xem khác và ảnh hưởng tiếng ồn cho buổi biểu diễn.'
      }
    ]);

    return {
      questionData
    };
  }
};
</script>

<style lang="scss">
    .ask{
        width: 100%;
        height: 100vh;
        position: relative;
        background-color: #000;
        padding: 2rem 2rem 1rem 2rem;
    };

    .ask::before{
        content: ' ';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        opacity: 0.3;
        background: url("images/con-rua-ngam-kiem.png")  no-repeat center center;
        background-size: cover;
    }
    .overlay{
        position: relative;
        width: 100%;
        height: 600px;

        .ask-title{
            font-size: 1.5rem;
            font-weight: 500;
            padding-top: 2rem;
        }
    }

    .ask-list{
        display: flex;
        padding-top: 2rem;
            .ask-number{
                flex: 2;
                font-size: 1.5rem;
                font-family: 'MTD Valky Bold'
            }

            .ask-question{
                flex: 10;
                p{
                    font-size: 1rem;
                    font-weight: 600;
                }

                span{
                    display: block;
                    font-size: 0.8rem;
                    font-weight: 300;
                    padding-top: 0.3rem;
                    line-height: 140%;
                    text-align: justify;
                }
            }
        }

    input {
        width: 100%;
        margin-top: 20px;
        padding-top: 30px;
        background: none;
        outline: 0;
        border-width: 0 0 2px;
        border-color: #797979;
        color: #797979;
        font-size: 1rem;
        font-weight: 600;
    }

    input:focus {
    border-color: #000
    }
</style>

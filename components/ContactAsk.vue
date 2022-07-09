<template>
  <section class="ask">
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
      <div class="btn-form">
        <img src="images/dinh-kem.png" alt="dinh-kem">
        <button>
          <img src="icons/icon-bird.svg" alt="icon-bird">
          Gửi
        </button>
      </div>
    </form>
    <div class="overlay" />
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    const questionData = ref([
      {
        number: '01',
        title: 'Có cho trẻ dưới 2 tuổi xem không?',
        content:
          'Trẻ em dưới hai tuổi được cho vào nhà hát để xem chung với ba mẹ và các anh chị vì các vở diễn đều mang tính giáo dục cao cho các bé.'
      },
      {
        number: '02',
        title: 'Có đem thức ăn vào nhà hát không?',
        content:
          'Vui lòng không mang thức ăn vào nhà hát tránh làm vương vãi đồ ăn thức uống ảnh hưởng tới các khách hàng khác trong qua trình biểu diễn.'
      },
      {
        number: '03',
        title: 'Có đem thú cưng vào được không?  ',
        content:
          'Vui lòng không mang thú cưng khi đi xem rối nước tránh làm ảnh hưởng tới người xem khác và ảnh hưởng tiếng ồn cho buổi biểu diễn.'
      }
    ]);

    return {
      questionData
    };
  }
};
</script>

<style lang="scss" scoped>
.ask {
  position: relative;
  // width: 100%;
  padding: 2rem 2rem 1rem 2rem;

  &-title {
    font-size: 1.5rem;
    font-weight: 500;
    padding-top: 2rem;
  }

  &-number {
    flex: 2;
    font-size: 1.5rem;
    font-family: "MTD Valky Bold";
  }

  &-question {
    flex: 10;
    p {
      font-size: 1rem;
      font-weight: 600;
    }

    span {
      display: block;
      font-size: 0.8rem;
      font-weight: 300;
      padding-top: 0.3rem;
      line-height: 140%;
      text-align: justify;
    }
  }

  &-list {
    display: flex;
    padding-top: 2rem;
  }
  .overlay {
    @include overlay("/images/con-rua-ngam-kiem.png");
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
  border-color: #fff;
}

button {
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $primary-dark-red-100;
  color: white;
  border: none;

  img {
    padding-right: 0.4rem;
  }
}

.btn-form {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
}
</style>

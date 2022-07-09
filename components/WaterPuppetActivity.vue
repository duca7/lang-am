<template>
  <section class="activity">
    <div>
      <p class="title">
        Cách hoạt động
      </p>
      <div class="main">
        <article
          v-for="activity in activityData"
          :key="activity.id"
          class="content"
        >
          <img :src="activity.iconImg" alt="icon-activity">
          <p class="content_title">
            {{ activity.title }}
          </p>
          <p class="content_des">
            {{ activity.content }}
          </p>
        </article>
      </div>
    </div>
    <div class="sound">
      <p class="title">
        Âm thanh
      </p>
      <div class="instruments">
        <p class="instruments_title">
          Nhạc cụ
        </p>
        <div class="instruments_items">
          <span class="cricle" />
          <hr>
        </div>
        <p class="instruments_content">
          Bộ gõ sử dụng trong múa rối nước là: trống cái, trống con, trống cơm,
          mõ, thanh la, não bạt. Khán giả đến với Rối Nước không chỉ xem những
          con rối chuyển động tài tình trên mặt nước, mà còn được thưởng thức
          không khí biểu diễn náo nhiệt, sôi động từ âm nhạc của bộ gõ.
        </p>
      </div>
      <div class="instruments">
        <p class="instruments_title">
          Công cụ
        </p>
        <div class="instruments_items">
          <span class="cricle big-cricle" />
          <hr>
        </div>
        <p class="instruments_content">
          Âm nhạc là công cụ đắc lực trong việc thể hiện tâm tư, tình cảm của
          con rối vô tri mà lời thoại không thể chuyển tải hết. Nhờ có âm nhạc,
          quân rối dưới sự điều khiển của các nghệ nhân sau buồng trò càng trở
          nên sống động, linh hoạt, tăng tính hấp dẫn cho các tiết mục trĩnh
          diễn.
        </p>
      </div>
      <div class="instruments">
        <p class="instruments_title">
          Ngôn ngữ
        </p>
        <div class="instruments_items">
          <span class="cricle" />
          <hr>
        </div>
        <p class="instruments_content">
          Ngôn ngữ, cách thể hiện của sân khấu chèo và quan họ được áp dụng
          triệt để vào nghệ thuật biểu diễn múa rối nước. Cách độc thoại rối
          trên sân khấu không đơn thuần là những lời thoại mà đã được thể hiện
          bằng cách nói có vần, có điệu của nghệ thuật sân khấu truyền thống
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    const activityData = ref([
      {
        iconImg: 'icons/icon-mat-nuoc.svg',
        title: 'Dùng mặt nước làm sân khấu',
        content:
          'Buồng trò (nhà rối / thủy đình) thường được dựng lên giữa ao, hồ với kiến trúc cân đối tượng trưng cho mái đình của vùng nông thôn Việt Nam.'
      },
      {
        iconImg: 'icons/icon-go.svg',
        title: 'Những con rối được làm bằng gỗ',
        content:
          'Phần thân rối là phần nổi lên mặt nước thể hiện nhân vật, còn phần đế là phần chìm dưới mặt nước giữ cho rối nổi bên trên và là nơi lắp máy điều khiển cho quân rối cử động.'
      },
      {
        iconImg: 'icons/icon-nghe-nhan.svg',
        title: 'Người nghệ nhân rối nước',
        content:
          'Họ đứng trong buồng trò điều khiển con rối, thao tác cây sào, thừng, vọt... hoặc giật con rối bằng hệ thống dây bố trí ở bên ngoài hoặc dưới nước. '
      },
      {
        iconImg: 'icons/icon-cay-tre.svg',
        title: 'Phông che được làm bằng tre nứa',
        content:
          'Tạo sân khấu biểu diễn múa rối nước y như ban thờ lớn ở Đình, chùa của người Việt, xung quanh trang trí cờ, quạt, voi, lọng, cổng hàng mã...'
      }
    ]);

    return {
      activityData
    };
  }
};
</script>

<style lang="scss" scoped>
.activity {
  padding: 0 1rem 2rem;
  margin-top: 2rem;
  .title {
    font-size: 1.5rem;
    font-weight: 500;
  }
  .main {
    margin-top: 1rem;
    .content {
      text-align: center;
      padding-top: 1.5rem;
      img {
        width: 120px;
        height: 55px;
      }
      &_title {
        padding-top: 1rem;
        font-size: 1.2rem;
        font-weight: 600;
      }
      &_des {
        padding-top: 1rem;
        font-size: 1rem;
        font-weight: 300;
        line-height: 140%;
      }
    }
  }

  .sound {
    margin-top: 2rem;

    .instruments {
      padding-top: 1rem;
      &_title {
        font-size: 1.25rem;
        font-weight: 600;
        padding-left: 3.5rem;
      }

      &_items {
        display: flex;
        align-items: center;
        .cricle {
          display: block;
          width: 20px;
          height: 20px;
          border: 1px solid $primary-dark-red-100;
          border-radius: 50%;
        }

        .big-cricle {
          width: 40px;
          height: 40px;
        }

        hr {
          width: 100%;
          height: 1px;
          background-color: $primary-dark-red-100;
          border: none;
        }
      }
      &_content {
        font-size: 1.1rem;
        font-weight: 200;
        line-height: 140%;
        padding-left: 3.5rem;
        text-align: justify;
      }
    }
  }
}
</style>

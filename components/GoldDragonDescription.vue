<template>
  <section>
    <article>
      <p class="title">
        Thành lập
      </p>
      <img src="/images/thanh-lap.png" alt="thanh-lap">
      <p class="content">
        Nuôi hoài bão xây dựng một nhà hát múa rối nước hiện đại tại TPHCM, Công ty TNHH Sân khấu Nghệ thuật Thái Dương TPHCM và Cung Văn hóa Lao động đã chính thức khởi công xây dựng và đưa Nhà hát Múa rối nước Rồng Vàng vào hoạt động từ tháng 8 2007.
      </p>
    </article>
    <article class="scale">
      <p class="title">
        Quy mô
      </p>
      <img src="/images/quy-mo.png" alt="quy-mo">
      <div v-for="scale in scales" :key="scale.id" class="description">
        <div class="number">
          <span class="jamb" />
          <h6> {{ scale.number }}</h6>
        </div>
        <p class="info info-bold">
          {{ scale.infoBold }}
        </p>
        <p class="info">
          {{ scale.info }}
        </p>
      </div>
      <div class="overlay" />
    </article>
    <article>
      <p class="title">
        Giám Đốc
      </p>
      <div class="manager">
        <div class="full-name">
          <p class="name">
            Huỳnh
          </p>
          <p class="name last-name">
            <img src="/icons/nhanh-sen.svg" alt="icon-nhanh-sen">
            Anh Tuấn
          </p>
          <div class="desc">
            <p>
              Người sáng lập ra Nhà hát Rồng Vàng.
            </p>
          </div>
        </div>
      </div>
      <div class="manager-content">
        <p class="info info-bold">
          "Nghệ thuật cho mình nhận lại rất nhiều"
        </p>
        <p class="info">
          Huỳnh Anh Tuấn là ông bầu nổi tiếng mát tay của giới sân khấu Sài Gòn . Đam mê nghệ thuật nhiều thập niên trước, từ nghề giáo ông chuyển sang làm sân khấu, ông lập đội rối Nụ Cười đi lưu diễn khắp nơi, sau này ông cho ra đời nhà hát Rối nước Rồng Vàng, Nhà hát Nón Lá, sân khấu Rex Sen Vàng...
        </p>
      </div>
    </article>
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    const scales = ref([
      {
        number: '750.000.000',
        infoBold: 'Đầu tư cho sân khấu thủy đình',
        info: 'Một bể nước được đào sâu ngay sân khấu, khán phòng được thiết kế lại hệ thống âm thanh, ánh sáng, hệ thống kỹ xảo và sàn gỗ để dàn nhạc cụ dân tộc biểu diễn.Sảnh trước cũng được cải tạo thành kiến trúc mang đậm nét dân gian Việt.'
      },
      {
        number: '10',
        infoBold: 'Điểm diễn trong năm 2007',
        info: 'Múa rối nước với thương hiệu Rồng Vàng đã được triển khai tại 10 điểm diễn. Ngoài 4 điểm diễn tại quận 8, Nhà Bè, Củ Chi, Gò Vấp, chiến lược xây dựng thương hiệu này là phối hợp với các nhà thiếu nhi các tỉnh, thành: An Giang, Kiên Giang, Đồng Nai, Bình Dương, Đà Nẵng, Bình Thuận...'
      },
      {
        number: '200.000',
        infoBold: 'Khán giả được nhà hát phục vụ mỗi năm.',
        info: 'Mỗi ngày ở đây đều có từng hàng xe chở khách du lịch đổ xuống địa điểm này để du khách thưởng thức nghệ thuật múa rối nước truyền thống.'
      },
      {
        number: '200',
        infoBold: 'Hơn 200 ghế ngồi cho khán giả.',
        info: 'Khán phòng cũ được cân lại nền, bố trí lại 200 ghế ngồi khang trang; sàn diễn gỗ được sửa thành một hồ nước sâu 1,2m với thiết kế, cảnh trí... theo đúng môtip sân khấu thủy đình của loại hình rối nước. Sảnh trước nhà hát cũng được cải tạo thành kiến trúc mang đậm nét dân gian Việt.'
      }
    ]);

    return {
      scales
    };
  }
};
</script>

<style lang="scss" scoped>
section{
    padding-top:2rem;
    article{
      width: 100%;
    }
    img{
      width: 100%;
      height: auto;
      aspect-ratio: auto;
    }
     .title{
        font-size: 1.5rem;
        padding: 1rem 1rem;
        font-weight: 500;
    }
    .content{
        font-size: 1rem;
        font-weight: 300;
        line-height: 140%;
        text-align: justify;
        padding: 1rem 1rem;
    }
    .jamb{
        display: block;
        width: 4px;
        height: 50px;
        margin-right:0.5rem ;
        background-color: $primary-dark-red-500;
    }
    .description{
        padding: 1rem 1rem;
        .number{
            display: flex;
            align-items: flex-end;
            h6{
              font-size: 1.8rem;
              font-family: MTD Valky Bold;
            }
        }
    }
    .info{
      font-size:1.125rem;
      line-height: 140%;
      font-weight: 300;
      margin-top: 0.5rem;
    }
    .info-bold{
      font-weight: 600;
      margin-top: 1rem;
    }
    .scale{
      position: relative;
      .overlay{
        @include overlay('/images/bat-tien.png')
      }
    }

    .manager{
      position: relative;
      background: url('/images/giam-doc.png') no-repeat;
      padding: 1rem;
      width: 100%;
      height: 45vh;
      background-position-x: 90%;
      .full-name{
        position: absolute;
        top:50%;
        z-index: 1;
        width: 60%;
         .name{
          font-size: 1.875rem;
          font-family: MTD Valky Bold;
          }

        .last-name{
            padding-top: 0.5rem;
        }
        .desc{
            float: right;
            width: 70%;
                p{
                  font-size: 1rem;
                    font-weight: 300;
                    padding-top: 1rem;
                    line-height: 140%;
                    text-align: right;
                }
              }
          }
      .manager-avatar{
        position: relative;
        left: 30%;
      }
    }

    .manager-content{
      padding: 0rem 1rem;
    }
}
</style>

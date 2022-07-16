<template>
  <div class="gold-dragon">
    <AppTitle :level="2" title="Nghệ nhân" />
    <div class="card-artist">
      <img src="/images/kim-thoa.png" alt="avatar">
      <div>
        <p class="name">
          Hoàng
        </p>
        <p class="name last-name">
          <img src="/icons/nhanh-sen.svg" alt="icon-nhanh-sen">
          Kim Thoa
        </p>
        <div class="desc text-right">
          <p>Nghệ sĩ ưu tú 20 năm tuổi nghề </p>
        </div>
      </div>
    </div>
    <div class="card-artist">
      <img src="/images/tien-dung.png" alt="avatar" class="avt-right">
      <div>
        <p class="name">
          Nguyễn
        </p>
        <p class="name last-name">
          <img src="/icons/nhanh-sen.svg" alt="icon-nhanh-sen">
          Tiến Dũng
        </p>
        <div class="desc text-left">
          <p>Nghệ sĩ ưu tú 20 năm tuổi nghề </p>
        </div>
      </div>
    </div>
    <div class="card-artist">
      <img src="/images/thi-huyen.png" alt="avatar">
      <div>
        <p class="name">
          Cao
        </p>
        <p class="name last-name">
          <img src="/icons/nhanh-sen.svg" alt="icon-nhanh-sen">
          Thị Huyền
        </p>
        <div class="desc text-right">
          <p>Nghệ sĩ ưu tú 20 năm tuổi nghề </p>
        </div>
      </div>
    </div>
    <div class="card-artist">
      <img src="/images/duy-bien.png" alt="avatar" class="avt-right">
      <div>
        <p class="name">
          Nguyễn
        </p>
        <p class="name last-name">
          <img src="/icons/nhanh-sen.svg" alt="icon-nhanh-sen">
          Duy Biên
        </p>
        <div class="desc text-left">
          <p>Nghệ sĩ ưu tú 20 năm tuổi nghề </p>
        </div>
      </div>
    </div>
    <div class="card-artist">
      <img src="/images/thuy-tran.png" alt="avatar">
      <div>
        <p class="name">
          Nguyễn
        </p>
        <p class="name last-name">
          <img src="/icons/nhanh-sen.svg" alt="icon-nhanh-sen">
          Thuỳ Trang
        </p>
        <div class="desc text-right">
          <p>Nghệ sĩ ưu tú 20 năm tuổi nghề </p>
        </div>
      </div>
    </div>
    <div class="card-artist">
      <img src="/images/minh-loi.png" alt="avatar" class="avt-right">
      <div>
        <p class="name">
          Vương
        </p>
        <p class="name last-name">
          <img src="/icons/nhanh-sen.svg" alt="icon-nhanh-sen">
          Minh Lợi
        </p>
        <div class="desc text-left">
          <p>Nghệ sĩ ưu tú 20 năm tuổi nghề </p>
        </div>
      </div>
    </div>
  </div>
</template>
<div class="overlay" />

<style lang="scss">
.card-artist{
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    gap:0.5rem;
    padding-top: 1rem;
    .avt-right{
      order: 2;
    }
    .name{
        font-size: 1.5rem;
        font-weight: 500;
    }

    .last-name{
        padding-top: 0.5rem;
    }
     .text-left{
              float: left;
               text-align: left;
            }
             .text-right{
              float: right;
               text-align: right;
            }
    .desc{
        width: 60%;
            p{
                font-size: 0.8rem;
                font-weight: 300;
                padding-top: 1rem;
                line-height: 140%;

            }

    }

}
.gold-dragon{
  padding: 1rem;
  position: relative;
  .avatar{
    order: 2;
  }
.overlay{
  content: '';
  z-index: -1;
  position: absolute;
  background-image: url('/images/la-sen-ngang.png');
  background-repeat: no-repeat;
  top:2%;
  right: 0;
  width: 250px;
  height: 250px;
  opacity: 0.3;
  }
}
</style>

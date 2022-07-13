<template>
  <div class="gold-dragon">
    <AppTitle :level="2" title="Nghệ nhân" />
    <GoldDragonArtistArticle first-name="Hoàng" last-name="Kim Thoa" description=" Nghệ sĩ ưu tú 20 năm tuổi nghề">
      <img src="/images/kim-thoa.png" alt="avatar">
    </GoldDragonArtistArticle>
    <GoldDragonArtistArticle first-name="Nguyễn" last-name="Tiến Dũng" description=" Nghệ sĩ ưu tú 20 năm tuổi nghề">
      <img src="/images/tien-dung.png" alt="avatar" class="avatar">
    </GoldDragonArtistArticle>
    <GoldDragonArtistArticle first-name="Cao" last-name="Thị Huyền" description=" Nghệ sĩ ưu tú 20 năm tuổi nghề">
      <img src="/images/thi-huyen.png" alt="avatar">
    </GoldDragonArtistArticle>
    <GoldDragonArtistArticle first-name="Nguyễn" last-name="Duy Biên" description=" Nghệ sĩ ưu tú 20 năm tuổi nghề">
      <img src="/images/duy-bien.png" alt="avatar" class="avatar">
    </GoldDragonArtistArticle>
    <GoldDragonArtistArticle first-name="Nguyễn" last-name="Thuỳ Trang" description=" Nghệ sĩ ưu tú 20 năm tuổi nghề">
      <img src="/images/thuy-tran.png" alt="avatar">
    </GoldDragonArtistArticle>
    <GoldDragonArtistArticle first-name="Vương" last-name="Minh Lợi" description=" Nghệ sĩ ưu tú 20 năm tuổi nghề">
      <img src="/images/minh-loi.png" alt="avatar" class="avatar">
    </GoldDragonArtistArticle>
    <div class="overlay" />
  </div>
</template>

<style lang="scss">
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
  opacity: 0.6;
  }
}
</style>

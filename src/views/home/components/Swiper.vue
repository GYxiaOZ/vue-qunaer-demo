<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item">
        <img class="swiper-img" :src="item" alt="image">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay:true
      },
      swiperList: [
        'http://img1.qunarzz.com/qs/1809/64/62160a38d119c202.jpg',
        'http://img1.qunarzz.com/qs/1810/25/44fe8c8edc136402.jpg',
        'http://img1.qunarzz.com/qs/1811/3f/85a00499e2e0802.jpg',
        'http://img1.qunarzz.com/qs/1809/be/b9098e1abc8a1002.jpg',
        'http://img1.qunarzz.com/qs/1810/67/218777193a1ab202.jpg',
        'http://img1.qunarzz.com/qs/1811/c7/0cf33c74b936c802.jpg'
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 25.6%;

  // background: #eee;
  .swiper-img {
    width: 100%;
  }
}
</style>



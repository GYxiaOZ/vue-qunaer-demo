<template>
  <div class="icons">
      <swiper>
        <swiper-slide v-for="(page,index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.name">
            <div class="icon-img-wrap">
              <img class="icon-img" :src="item.imgUrl" alt="image"> 
            </div>
            <p class="icon-desc">{{item.title}}</p>
          </div>
        </swiper-slide>
        
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>  
</template>

<script>
export default {
  name: 'HomeIcons',
  data() {
    return {
      swiperOption: {},
      iconList: [
        {
          title: '景点门票',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        },
        {
          title: '游乐场',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png'
        },
        {
          title: '重庆必游',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png'
        },
        {
          title: '打卡圣地',
          imgUrl:
            'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png'
        },
        {
          title: '一日游',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
        },
        {
          title: '两江夜游',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png'
        },
        {
          title: '神秘武隆',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png'
        },
        {
          title: '泡温泉',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png'
        },
        {
          title: '稻城亚丁',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1805/57/1e29afd06f881102.png'
        },
        {
          title: '全部玩乐',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png'
        }
      ]
    }
  },
  computed: {
    pages() {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if(!pages[page]){
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
}

.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;

  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;

    .icon-img-wrap {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      padding: 0.1rem;
      box-sizing: border-box;

      .icon-img {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }

    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      color: $darkTextColor;
      text-align: center;
      ellipsis()
    }
  }
}
</style>



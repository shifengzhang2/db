<template>
  <!-- <van-nav-bar title="首页" fixed placeholder :border="false" /> -->
  <div class="container" v-if="!state.setState">
    <div class="search-box">
      <van-button @click="goSearch">
        <van-icon name="search" />搜索
      </van-button>
    </div>
    <div class="list">
      <ul>
        <li
          v-for="items in state.homeList"
          :key="items.id"
          @click="goFilmInfo(items)"
        >
          <div class="img">
            <van-image height="120" :src="items.cover" />
          </div>
          <div class="title">{{ items.title }}</div>
          <div class="rate">
            <van-rate
              color="#ffac2d"
              v-model="items.rate"
              readonly
              allow-half
            />
            <div class="text">{{ items.rate }}星</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <TabBar></TabBar>
  <FilmInfo :obj="state.obj" v-if="state.setState" @back="back"></FilmInfo>
</template>
<script setup>
import TabBar from "@/components/TabBar/TabBar.vue";
import FilmInfo from "@/views/FilmInfo/FilmInfo.vue";
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const store = useStore();

const router = useRouter();
const state = reactive({
  images: [
    {
      rate: 4,
      cover_x: 1984,
      title: "疯狂元素城",
      url: "https:\/\/movie.douban.com\/subject\/35901878\/",
      playable: false,
      cover:
        "https://img2.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2891542432.jpg",
      id: "35901878",
      cover_y: 2835,
      is_new: false,
    },
    {
      rate: 5,
      cover_x: 1080,
      title: "小行星城",
      url: "https:\/\/movie.douban.com\/subject\/35209746\/",
      playable: false,
      cover:
        "https://img2.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2891847821.jpg",
      id: "35209746",
      cover_y: 1600,
      is_new: false,
    },
    {
      rate: 3,
      cover_x: 800,
      title: "卧室",
      url: "https:\/\/movie.douban.com\/subject\/35732513\/",
      playable: false,
      cover:
        "https://img2.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2890156881.jpg",
      id: "35732513",
      cover_y: 1131,
      is_new: true,
    },
    {
      rate: 4,
      cover_x: 972,
      title: "过往人生",
      url: "https:\/\/movie.douban.com\/subject\/34963356\/",
      playable: false,
      cover:
        "https://img2.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2889659282.jpg",
      id: "34963356",
      cover_y: 1440,
      is_new: false,
    },
  ],
  homeList: [
    {
      rate: 3,
      cover_x: 800,
      title: "卧室",
      url: "https:\/\/movie.douban.com\/subject\/35732513\/",
      playable: false,
      cover:
        "https://img2.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2890156881.jpg",
      id: "35732513",
      cover_y: 1131,
      is_new: true,
      item: {
        mName: "卧室 La Maison",
        mYear: "2022",
        mInfo:
          "The story of La Maison revolves around 27-year-old Emma, a French woman who heads off to live in Berlin and decides to spend some time in a brothel so as to learn about and understand sex workers – women who are paid to be women and that alone, and who are set to form the focus of her new novel. In gonzo journalism style, Emma becomes one of them and ultimately remains with them for two years, despite only intending to stay for several weeks. Was writing her book simply a pretext for Emma to live out the type of fantasy that’s hard to admit to in our society? From one bedchamber to another and from one woman to the next, the film guides us through a “forbidden” world.",
        mAddr: "法国",
        mClass: "剧情",
        mLong: "89分钟",
        mImg: "https://img2.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2890156881.jpg",
        shadowManList: [
          {
            mmImg:
              "https://public-75012.picgzc.qpic.cn/ehEkPbBg4m4Nhz-A-NVthgS4cshobQTX",
            mmName: "安妮莎·博纳丰",
            mmRole: "导演",
          },
          {
            mmImg:
              "https://public-75012.picgzc.qpic.cn/t2oCkUPKdkwcgLsOW9U3FEOdX3Wxmps-",
            mmName: "安娜·吉拉多特",
            mmRole: "饰 Emma",
          },
          {
            mmImg:
              "https://public-75012.picgzc.qpic.cn/LQauH6_9OV-v5Ck2Vh_9GU_y2Rv3d-jM",
            mmName: "奥雷·阿蒂卡",
            mmRole: "饰 Delilah",
          },
          {
            mmImg:
              "https://public-75012.picgzc.qpic.cn/-Ja85uxXe7t2Uz9ogp08qWqBhKhj32ej",
            mmName: "萝西·德·帕尔马",
            mmRole: "饰 Brigida",
          },
        ],
      },
    },
    {
      rate: 4,
      cover_x: 972,
      title: "过往人生",
      url: "https:\/\/movie.douban.com\/subject\/34963356\/",
      playable: false,
      cover:
        "https://img2.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2889659282.jpg",
      id: "34963356",
      cover_y: 1440,
      is_new: false,
    },

    {
      rate: 4,
      cover_x: 1984,
      title: "疯狂元素城",
      url: "https:\/\/movie.douban.com\/subject\/35901878\/",
      playable: false,
      cover:
        "https://img2.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2891542432.jpg",
      id: "35901878",
      cover_y: 2835,
      is_new: false,
    },

    {
      rate: 5,
      cover_x: 1080,
      title: "小行星城",
      url: "https:\/\/movie.douban.com\/subject\/35209746\/",
      playable: false,
      cover:
        "https://img2.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2891847821.jpg",
      id: "35209746",
      cover_y: 1600,
      is_new: false,
    },

    {
      rate: 5,
      cover_x: 2867,
      title: "祭屋出租",
      url: "https:\/\/movie.douban.com\/subject\/36244313\/",
      playable: false,
      cover:
        "https://img2.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2889066541.jpg",
      id: "36244313",
      cover_y: 4096,
      is_new: false,
    },

    {
      rate: 2,
      cover_x: 2000,
      title: "闪电侠",
      url: "https:\/\/movie.douban.com\/subject\/3011317\/",
      playable: true,
      cover:
        "https://img2.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2892365111.jpg",
      id: "3011317",
      cover_y: 2964,
      is_new: false,
    },

    {
      rate: 2,
      cover_x: 2480,
      title: "红色天空",
      url: "https:\/\/movie.douban.com\/subject\/35221425\/",
      playable: false,
      cover:
        "https://img2.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2888522083.jpg",
      id: "35221425",
      cover_y: 3508,
      is_new: false,
    },

    {
      rate: 5,
      cover_x: 750,
      title: "死亡护理师",
      url: "https:\/\/movie.douban.com\/subject\/34982427\/",
      playable: false,
      cover:
        "https://img2.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2881259602.jpg",
      id: "34982427",
      cover_y: 1060,
      is_new: false,
    },
    {
      rate: 5,
      cover_x: 3000,
      title: "小角色",
      url: "https:\/\/movie.douban.com\/subject\/36507957\/",
      playable: false,
      cover:
        "https://img2.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2896638802.jpg",
      id: "36507957",
      cover_y: 4500,
      is_new: true,
    },

    {
      rate: 5,
      cover_x: 1500,
      title: "惊天营救2",
      url: "https:\/\/movie.douban.com\/subject\/35056376\/",
      playable: false,
      cover:
        "https://img2.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2892063382.jpg",
      id: "35056376",
      cover_y: 2222,
      is_new: false,
    },

    {
      rate: 5,
      cover_x: 8784,
      title: "铃芽之旅",
      url: "https:\/\/movie.douban.com\/subject\/35371261\/",
      playable: false,
      cover:
        "https://img2.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2887641712.jpg",
      id: "35371261",
      cover_y: 12402,
      is_new: false,
    },
    {
      rate: 5,
      cover_x: 2362,
      title: "蛛网男孩",
      url: "https:\/\/movie.douban.com\/subject\/34955229\/",
      playable: false,
      cover:
        "https://img2.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2893307133.jpg",
      id: "34955229",
      cover_y: 3489,
      is_new: false,
    },
  ],
  obj: {},
  setState: false,
});
onMounted(async () => {
  console.log(store, "store");
});
const goFilmInfo = (item) => {
  state.obj = {};
  state.obj = item.item;
  state.setState = true;
};
const goSearch = () => {
  router.push("/search");
};
const back = () => {
  state.obj = {};
  state.setState = false;
};
</script>
<style lang="scss" scoped>
.container {
  padding-bottom: 16vw;
  .search-box {
    z-index: 150;
    position: fixed;
    padding: 2.667vw;
    width: 100%;
    background-color: #42bd56;
    button {
      width: 95%;
      height: 8vw;
      border-radius: 1.333vw;
      color: #999;
    }
  }
  .list {
    margin-bottom: 2.667vw;
    padding: 0 4.267vw;
    padding-top: 10vh;
    ul {
      // overflow: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      & li:nth-child(1) {
        margin-left: 0;
      }
      &::-webkit-scrollbar {
        display: none;
      }
      li {
        // margin-left: 4.267vw;
        position: relative;
        .img {
          ::v-deep .van-image__img {
            border-radius: 1.333vw;
          }
        }
        .title {
          width: 24vw;
          font-size: 3.733vw;
          font-weight: 700;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .rate {
          .van-rate {
            width: 37.333vw;
            position: absolute;
            transform: scale(0.5);
            bottom: -0.533vw;
            left: -9.6vw;
          }
          .text {
            font-size: 3.733vw;
            margin-left: 16.533vw;
          }
        }
      }
    }
  }
}
</style>

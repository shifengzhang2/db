<template>
  <van-nav-bar title="首页" fixed placeholder :border="false" />
  <div class="container">
    <div class="search-box">
      <van-button @click="goSearch">
        <van-icon name="search" />搜索
      </van-button>
    </div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="image in state.images" :key="id">
        <img style="height: 120px" :src="image.cover" alt="" />
      </van-swipe-item>
    </van-swipe>
    <div class="list">
      <ul>
        <li
          v-for="items in state.homeList"
          :key="items.id"
          @click="goFilmInfo(items.id)"
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
            <div class="text">{{ items.rate }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <TabBar></TabBar>
</template>
<script setup>
import TabBar from "@/components/TabBar/TabBar.vue";
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";

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
      rate: 1,
      cover_x: 1448,
      title: "关于我和鬼变成家人的那件事",
      url: "https:\/\/movie.douban.com\/subject\/35698284\/",
      playable: false,
      cover:
        "https://img9.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2881995796.jpg",
      id: "35698284",
      cover_y: 2048,
      is_new: false,
    },
    {
      rate: 2,
      cover_x: 1382,
      title: "星条红与皇室蓝",
      url: "https:\/\/movie.douban.com\/subject\/33406097\/",
      playable: false,
      cover:
        "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2896539228.jpg",
      id: "33406097",
      cover_y: 2048,
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
    {
      rate: 2,
      cover_x: 2024,
      title: "不要见怪",
      url: "https:\/\/movie.douban.com\/subject\/35733431\/",
      playable: false,
      cover:
        "https://img9.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2891129316.jpg",
      id: "35733431",
      cover_y: 3000,
      is_new: false,
    },
    {
      rate: 3,
      cover_x: 3544,
      title: "消失的她",
      url: "https:\/\/movie.douban.com\/subject\/35660795\/",
      playable: true,
      cover:
        "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2893270877.jpg",
      id: "35660795",
      cover_y: 4961,
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
      rate: 4,
      cover_x: 3000,
      title: "芭比",
      url: "https:\/\/movie.douban.com\/subject\/4058939\/",
      playable: false,
      cover:
        "https://img9.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2895679456.jpg",
      id: "4058939",
      cover_y: 4376,
      is_new: false,
    },
    {
      rate: 5,
      cover_x: 1984,
      title: "巨齿鲨2：深渊",
      url: "https:\/\/movie.douban.com\/subject\/34882958\/",
      playable: false,
      cover:
        "https://img9.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2893737765.jpg",
      id: "34882958",
      cover_y: 2778,
      is_new: false,
    },
    {
      rate: 2,
      cover_x: 1141,
      title: "命案",
      url: "https:\/\/movie.douban.com\/subject\/35524438\/",
      playable: false,
      cover:
        "https://img9.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2890179685.jpg",
      id: "35524438",
      cover_y: 1600,
      is_new: false,
    },
    {
      rate: 3,
      cover_x: 1441,
      title: "疫起",
      url: "https:\/\/movie.douban.com\/subject\/35211920\/",
      playable: false,
      cover:
        "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2889446349.jpg",
      id: "35211920",
      cover_y: 2048,
      is_new: false,
    },
    {
      rate: 4,
      cover_x: 1280,
      title: "谍之心",
      url: "https:\/\/movie.douban.com\/subject\/35274674\/",
      playable: false,
      cover:
        "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2893485360.jpg",
      id: "35274674",
      cover_y: 1920,
      is_new: false,
    },
    {
      rate: 4,
      cover_x: 2126,
      title: "我爱你！",
      url: "https:\/\/movie.douban.com\/subject\/35818074\/",
      playable: true,
      cover:
        "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2888042597.jpg",
      id: "35818074",
      cover_y: 2976,
      is_new: false,
    },
    {
      rate: 3,
      cover_x: 2000,
      title: "扫毒3：人在天涯",
      url: "https:\/\/movie.douban.com\/subject\/35013359\/",
      playable: true,
      cover:
        "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2892914259.jpg",
      id: "35013359",
      cover_y: 2838,
      is_new: false,
    },
    {
      rate: 2,
      cover_x: 2000,
      title: "蜘蛛侠：纵横宇宙",
      url: "https:\/\/movie.douban.com\/subject\/30391186\/",
      playable: true,
      cover:
        "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2892315297.jpg",
      id: "30391186",
      cover_y: 2963,
      is_new: false,
    },
    {
      rate: 1,
      cover_x: 1500,
      title: "美猴王",
      url: "https:\/\/movie.douban.com\/subject\/35468737\/",
      playable: false,
      cover:
        "https://img9.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2892142845.jpg",
      id: "35468737",
      cover_y: 2222,
      is_new: true,
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
      cover_x: 1080,
      title: "金牌保镖",
      url: "https:\/\/movie.douban.com\/subject\/35744460\/",
      playable: true,
      cover:
        "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2896690010.jpg",
      id: "35744460",
      cover_y: 1921,
      is_new: false,
    },
    {
      rate: 2,
      cover_x: 1080,
      title: "东北警察故事2",
      url: "https:\/\/movie.douban.com\/subject\/35813934\/",
      playable: true,
      cover:
        "https://img9.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2894037985.jpg",
      id: "35813934",
      cover_y: 1920,
      is_new: false,
    },
    {
      rate: 3,
      cover_x: 1280,
      title: "潜伏5：红门",
      url: "https:\/\/movie.douban.com\/subject\/34902394\/",
      playable: false,
      cover:
        "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2890895109.jpg",
      id: "34902394",
      cover_y: 1921,
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
      rate: 5,
      cover_x: 2898,
      title: "美丽的他电影版",
      url: "https:\/\/movie.douban.com\/subject\/35907236\/",
      playable: false,
      cover:
        "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2886313158.jpg",
      id: "35907236",
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
      cover_x: 2215,
      title: "极寒之城",
      url: "https:\/\/movie.douban.com\/subject\/30450557\/",
      playable: true,
      cover:
        "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2892959059.jpg",
      id: "30450557",
      cover_y: 3101,
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
      rate: 2,
      cover_x: 2000,
      title: "银河护卫队3",
      url: "https:\/\/movie.douban.com\/subject\/26258779\/",
      playable: true,
      cover:
        "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2896590127.jpg",
      id: "26258779",
      cover_y: 3000,
      is_new: false,
    },
    {
      rate: 4,
      cover_x: 3000,
      title: "速度与激情10",
      url: "https:\/\/movie.douban.com\/subject\/26631790\/",
      playable: true,
      cover:
        "https://img9.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2890967604.jpg",
      id: "26631790",
      cover_y: 4500,
      is_new: false,
    },
    {
      rate: 5,
      cover_x: 2042,
      title: "温柔壳",
      url: "https:\/\/movie.douban.com\/subject\/34853941\/",
      playable: true,
      cover:
        "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2886363800.jpg",
      id: "34853941",
      cover_y: 3005,
      is_new: false,
    },
    {
      rate: 5,
      cover_x: 750,
      title: "MONDAYS \/ 如果不让上司注意到这个时间循环就无法结束",
      url: "https:\/\/movie.douban.com\/subject\/36008597\/",
      playable: false,
      cover:
        "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2876546519.jpg",
      id: "36008597",
      cover_y: 1058,
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
      cover_x: 1944,
      title: "我的错误",
      url: "https:\/\/movie.douban.com\/subject\/36168684\/",
      playable: false,
      cover:
        "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2890770708.jpg",
      id: "36168684",
      cover_y: 2880,
      is_new: false,
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
      cover_x: 2025,
      title: "兜风",
      url: "https:\/\/movie.douban.com\/subject\/35897468\/",
      playable: false,
      cover:
        "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2889392248.jpg",
      id: "35897468",
      cover_y: 3000,
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
      cover_x: 3000,
      title: "毒舌律师",
      url: "https:\/\/movie.douban.com\/subject\/35914259\/",
      playable: true,
      cover:
        "https://img9.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2886619074.jpg",
      id: "35914259",
      cover_y: 4280,
      is_new: false,
    },
    {
      rate: 2,
      cover_x: 847,
      title: "#窨井盖",
      url: "https:\/\/movie.douban.com\/subject\/35902715\/",
      playable: false,
      cover:
        "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2879152500.jpg",
      id: "35902715",
      cover_y: 1193,
      is_new: false,
    },
    {
      rate: 6,
      cover_x: 2000,
      title: "生无可恋的奥托",
      url: "https:\/\/movie.douban.com\/subject\/27150277\/",
      playable: true,
      cover:
        "https://img2.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2888752193.jpg",
      id: "27150277",
      cover_y: 2964,
      is_new: false,
    },
    {
      rate: 5,
      cover_x: 5000,
      title: "巴比伦",
      url: "https:\/\/movie.douban.com\/subject\/34467461\/",
      playable: false,
      cover:
        "https://img9.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2889092995.jpg",
      id: "34467461",
      cover_y: 7407,
      is_new: false,
    },
    {
      rate: 5,
      cover_x: 2025,
      title: "变形金刚：超能勇士崛起",
      url: "https:\/\/movie.douban.com\/subject\/26634250\/",
      playable: false,
      cover:
        "https://img9.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2892024245.jpg",
      id: "26634250",
      cover_y: 3000,
      is_new: false,
    },
    {
      rate: 5,
      cover_x: 2500,
      title: "博很恐惧",
      url: "https:\/\/movie.douban.com\/subject\/35381711\/",
      playable: false,
      cover:
        "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2886073087.jpg",
      id: "35381711",
      cover_y: 3704,
      is_new: false,
    },
    {
      rate: 5,
      cover_x: 2858,
      title: "请别相信她",
      url: "https:\/\/movie.douban.com\/subject\/35295017\/",
      playable: true,
      cover:
        "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2892285438.jpg",
      id: "35295017",
      cover_y: 4000,
      is_new: false,
    },
    {
      rate: 5,
      cover_x: 2000,
      title: "龙与地下城：侠盗荣耀",
      url: "https:\/\/movie.douban.com\/subject\/26584673\/",
      playable: true,
      cover:
        "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2888874787.jpg",
      id: "26584673",
      cover_y: 2963,
      is_new: false,
    },
    {
      rate: 5,
      cover_x: 4051,
      title: "疾速追杀4",
      url: "https:\/\/movie.douban.com\/subject\/33455421\/",
      playable: false,
      cover:
        "https://img9.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2884692335.jpg",
      id: "33455421",
      cover_y: 6001,
      is_new: false,
    },
    {
      rate: 5,
      cover_x: 2864,
      title: "犯罪都市3",
      url: "https:\/\/movie.douban.com\/subject\/35807273\/",
      playable: false,
      cover:
        "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2892046070.jpg",
      id: "35807273",
      cover_y: 4096,
      is_new: false,
    },
    {
      rate: 5,
      cover_x: 2139,
      title: "哆啦A梦：大雄与天空的理想乡",
      url: "https:\/\/movie.douban.com\/subject\/35967711\/",
      playable: false,
      cover:
        "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2891257290.jpg",
      id: "35967711",
      cover_y: 3000,
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
    {
      rate: 5,
      cover_x: 2150,
      title: "利己主义",
      url: "https:\/\/movie.douban.com\/subject\/35964279\/",
      playable: false,
      cover:
        "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2885371159.jpg",
      id: "35964279",
      cover_y: 3036,
      is_new: false,
    },
    {
      rate: 5,
      cover_x: 1456,
      title: "流水落花",
      url: "https:\/\/movie.douban.com\/subject\/34889288\/",
      playable: false,
      cover:
        "https://img9.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2883765354.jpg",
      id: "34889288",
      cover_y: 2048,
      is_new: false,
    },
    {
      rate: 2,
      cover_x: 2835,
      title: "艾特熊和赛娜鼠2",
      url: "https:\/\/movie.douban.com\/subject\/27068117\/",
      playable: false,
      cover:
        "https://img9.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2874235354.jpg",
      id: "27068117",
      cover_y: 3850,
      is_new: false,
    },
  ],
});
onMounted(async () => {});
const goFilmInfo = (value) => {
  // console.log(value)
  router.push({ name: "FilmInfo", query: { mId: value } });
};
const goSearch = () => {
  router.push("/search");
};
const goinfoList = (value) => {
  router.push({
    name: "InfoList",
    query: { tId: value.tId, tName: value.tName },
  });
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
  .my-swipe .van-swipe-item {
    padding-top: 10vh;
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .list {
    margin-bottom: 2.667vw;
    padding: 0 4.267vw;
    // padding-top: 10vh;
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

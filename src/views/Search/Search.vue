<template>
  <div v-if="!state.setState">
    <van-nav-bar
      title="搜索"
      fixed
      placeholder
      :border="false"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="container">
      <div class="search-box">
        <van-search placeholder="搜索" @blur="search" v-model="state.value" />
      </div>
      <div v-if="state.list.length > 0" class="list">
        <!-- <van-list
        :immediate-check="false"
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
      > -->
        <div class="list-item" v-for="item in state.list" :key="item.mId">
          <div class="img" @click="goFilmInfo(item)">
            <van-image width="60" height="76" :src="item.cover" />
          </div>
          <div class="right">
            <div class="title">
              {{ item.title }}&nbsp;&nbsp;<span>({{ item.mYear }})</span>
            </div>
            <div class="rate">
              <van-rate
                color="#ffac2d"
                v-model="item.rate"
                readonly
                allow-half
              />
              <div class="text">{{ item.rate }}星</div>
            </div>
            <div class="info">
              <div class="label">{{ item.mClass }}</div>
              <div class="des">{{ item.mAddr }}</div>
            </div>
          </div>
        </div>
        <!-- </van-list> -->
      </div>
    </div>
  </div>
  <FilmInfo :obj="state.obj" v-if="state.setState" @back="back"></FilmInfo>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import FilmInfo from "@/views/FilmInfo/FilmInfo.vue";
const route = useRoute();
const router = useRouter();
const state = reactive({
  obj: {},
  value: "",
  list: [],
  setState: false,
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
      mYear: "2022",
      mAddr: "法国",
      mClass: "剧情",
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
      cover_x: 1984,
      title: "疯狂元素城",
      url: "https:\/\/movie.douban.com\/subject\/35901878\/",
      playable: false,
      cover:
        "https://img2.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2891542432.jpg",
      id: "35901878",
      cover_y: 2835,
      is_new: false,
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
  ],
});
const onClickLeft = () => {
  history.back();
};
const search = () => {
  state.list = [];
  state.homeList.forEach((el) => {
    if (state.value === el.title) {
      state.list.push(el);
    }
  });
};
const goFilmInfo = (item) => {
  state.obj = {};
  state.obj = item.item;
  state.setState = true;
};
const back = () => {
  state.obj = {};
  state.setState = false;
};
</script>
<style lang="scss" scoped>
.container {
  font-size: 3.733vw;
  .search-box {
    padding: 2.667vw;
    background-color: #42bd56;
    ::v-deep .van-search {
      overflow: hidden;
      border-radius: 1.333vw;
      padding: 0;
      .van-search__content {
        background-color: #fff;
      }
    }
  }
  .top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 4.267vw;
    margin-top: 2.667vw;
    .img {
      position: relative;
      height: 16vw;

      border-radius: 1.333vw;
      overflow: hidden;
      ::v-deep .van-image__img {
        border-radius: 1.333vw;
      }
      .label {
        position: absolute;
        top: 11.2vw;
        left: -0.8vw;
        color: #fff;
        width: 9.067vw;
        height: 5.333vw;
        font-size: 3.2vw;
        text-align: center;
        line-height: 5.333vw;
        background-color: rgba(0, 0, 0, 0.4);
        transform: scale(0.8);
        border-radius: 1.333vw;
      }
    }

    .box {
      margin-bottom: 2.667vw;
      width: 43%;
      height: 16vw;
      border-radius: 1.333vw;
      display: flex;
      align-items: center;
      background-color: #f7f7f7;
      padding: 2.133vw 2.667vw;

      .right {
        margin-left: 1.6vw;
        flex: 1;
        font-size: 3.733vw;
        .title {
          overflow: hidden;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
      }
      .people {
        font-size: 3.2vw;
        color: #b2b2b2;
      }
    }
  }
  .list {
    padding: 0 3.733vw;
  }
  .list-item {
    position: relative;
    display: flex;
    height: 26.667vw;
    align-items: center;
    ::v-deep .van-image__img {
      border-radius: 1.333vw;
    }
    .right {
      padding: 3.733vw 0;
      margin-left: 2.667vw;
      height: 100%;
      width: 100%;
      box-sizing: border-box;

      border-bottom: 0.267vw solid #999;
      .title {
        font-size: 3.733vw;
        font-weight: 700;
        span {
          color: #999;
          font-weight: 500;
        }
      }
    }
    .rate {
      .van-rate {
        width: 37.333vw;
        position: absolute;
        transform: scale(0.5);
        bottom: 13.333vw;
        left: 9.067vw;
      }
      .text {
        font-size: 3.733vw;
        margin-left: 16.533vw;
      }
    }
    .info {
      color: #999;
      position: relative;
      .label {
        background-color: #f2f2f2;
        padding: 0 0.533vw;
        color: #494949;
        display: inline;
        margin-right: 1.6vw;
      }
      .des {
        display: inline;
      }
    }
  }
}
</style>

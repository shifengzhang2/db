<template>
  <van-nav-bar title="影院" fixed placeholder :border="false" />
  <div class="container">
    <div class="container-card">
      <div class="container-card-left">
        <img
          src="https://axhub.im/ax9/aeb3641f0e953d73/images/%E5%BD%B1%E9%99%A2%E9%A6%96%E9%A1%B5/p0.png"
          alt=""
          class="picture"
        />
      </div>
      <div class="container-card-right">
        <div class="container-card-right-title">中影德金影城（客村丽影店）</div>
        <div class="container-card-right-desc">
          <van-rate
            v-model="state.value"
            :size="20"
            color="#ffd21e"
            void-icon="star"
            void-color="#eee"
          />
          &nbsp;
          <span>424条</span>
          &nbsp;
          <span>￥54/人</span>
        </div>
        <div class="container-card-right-position">
          <span class="container-card-right-position-title"
            >广州市海珠区新港中路356号丽影广场B区5楼 (地铁客村D出口)</span
          >
          &nbsp;
          <span class="container-card-right-position-distance">1.5km</span>
        </div>
      </div>
    </div>
  </div>
  <TabBar></TabBar>
</template>
<script setup>
import TabBar from "@/components/TabBar/TabBar.vue";
import { ref, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getRankingList } from "@/api/ranking.js";
const router = useRouter();
const state = reactive({
  list: [],
  value: 5,
});
onMounted(async () => {
  const { data } = await getRankingList();
  data.forEach((item) => {
    item.info.forEach((items) => {
      items.cmScore = parseFloat(items.mScore / 2);
    });
  });
  state.list = data;
  console.log(state.list);
});
const goFilmInfo = (value) => {
  router.push({ name: "FilmInfo", query: { mId: value } });
};
</script>
<style lang="scss" scoped>
::v-deep .van-nav-bar {
  background-color: #fff;
  .van-nav-bar__title {
    color: black;
  }
}
.container {
  padding: 0 4.267vw;
  padding-bottom: 16vw;
  &-card {
    display: flex;
    &-left {
      margin-right: 10px;
      .picture {
        width: 87px;
      }
    }
    &-right {
      &-title {
        font-size: 16px;
        color: #313131;
        font-weight: 700;
      }
      &-desc {
        margin: 2px 0;
        font-size: 12px;
        color: #000000;
      }
      &-position {
        display: flex;
        &-title {
          font-size: 12px;
        }
        &-distance {
          font-size: 12px;
        }
      }
    }
  }
}
</style>

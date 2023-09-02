<template>
  <van-nav-bar
    :title="props.obj.mName"
    fixed
    placeholder
    :border="false"
    left-arrow
    @click-left="onClickLeft"
  />
  <div class="container">
    <div class="top">
      <div class="img">
        <van-image width="110" height="140" :src="props.obj.mImg" />
      </div>
      <div class="info">
        <div class="title">{{ props.obj.mName }}({{ props.obj.mYear }})</div>
        <div class="label">
          <div>No.5</div>
          <div>一周口碑电影榜</div>
        </div>
        <div class="des">
          {{ props.obj.mAddr }}&nbsp;/&nbsp;{{
            props.obj.mClass
          }}&nbsp;/&nbsp;片长 {{ props.obj.mLong }}
        </div>
        <div class="btn">
          <van-button
            type="primary"
            @click="state.isWannaSee = !state.isWannaSee"
          >
            <span
              class="iconfont icon-aixin"
              :class="state.isWannaSee ? 'active' : ''"
            ></span>
            想看</van-button
          >
          <van-button @click="state.isYes = !state.isYes" type="primary">
            <span
              class="iconfont icon-shoucang"
              :class="state.isYes ? 'active' : ''"
            ></span
            >看过
          </van-button>
        </div>
      </div>
    </div>
    <!-- 简介 -->
    <div class="introduction">
      <div class="title">简介</div>
      <div class="main" :class="{ closed: status }">
        {{ props.obj.mInfo }}
      </div>
      <div class="open" @click="opends">
        {{ status === true ? "展开" : "收起" }}
      </div>
    </div>
    <!-- 影人 -->
    <div class="shadowman">
      <div class="title">影人</div>
      <ul>
        <li v-for="item in props.obj.shadowManList" :key="item.id">
          <div class="img">
            <img width="90" height="120" :src="item.mmImg" alt="" />
          </div>
          <div class="name">{{ item.mmName }}</div>
          <div class="position">{{ item.mmRole }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import { searchInfo, getMoveManList } from "@/api/filminfo";
import { useRoute } from "vue-router";
const props = defineProps({
  obj: Object,
});
const emit = defineEmits(["back"]);
const route = useRoute();
const status = ref(true);
const state = reactive({
  isWannaSee: false,
  isYes: false,
});
const opends = () => {
  status.value = !status.value;
};
const onClickLeft = () => {
  emit("back");
};
</script>

<style lang="scss" scoped>
//样式穿透
::v-deep .van-nav-bar {
  background-color: #f9f5f4;
  .van-nav-bar__title {
    color: #333 !important;
  }
  .van-nav-bar__left {
    i {
      color: #333 !important;
    }
  }
}
.container {
  background-color: #f9f5f4;
  height: 100%;
  padding-bottom: 4.667vw;
  .top {
    display: flex;
    padding: 0 4.267vw;
    margin-bottom: 6vw;
    .img {
      height: 37.333vw;
      ::v-deep .van-image__img {
        border-radius: 1.333vw;
      }
    }
    .info {
      margin-left: 4vw;
      .title {
        font-size: 5.867vw;
        font-weight: 700;
      }
      .label {
        margin-top: 1.067vw;
        display: flex;
        & > :nth-child(1) {
          background-color: #ffe5bf;
          color: #b65f43;
          padding: 0.533vw 1.6vw;
          font-size: 3.733vw;
          border-top-left-radius: 1.333vw;
          border-bottom-left-radius: 1.333vw;
        }
        & > :nth-child(2) {
          background-color: #ffc673;
          color: #9d5f00;
          padding: 0.533vw 1.6vw;
          font-size: 3.733vw;
          border-top-right-radius: 1.333vw;
          border-bottom-right-radius: 1.333vw;
        }
      }
      .des {
        color: #818181;
        font-size: 3.2vw;
        margin-top: 2.667vw;
      }
      .btn {
        margin-top: 4.8vw;
        display: flex;
        button {
          width: 26.667vw;
          height: 9.333vw;
          border-radius: 1.333vw;
          margin-left: 2.667vw;
          color: #4c4c4c;
          font-size: 4.267vw;
          background-color: #fff;
          border: none;
        }
        & > :nth-child(1) {
          margin: 0;
        }
        .active {
          color: #ffac2d;
        }
      }
    }
  }
  .introduction {
    padding: 0 4.267vw;
    .title {
      font-size: 4.8vw;
      font-weight: 700;
      padding-bottom: 2.667vw;
    }
    .main {
      line-height: 7.2vw;
      // 收起的样式
      &.closed {
        height: 29.6vw;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4; // 想要超出三行显示 就把这里改成3就好了
      }
    }
    .open {
      text-align: right;
      color: #c0c0c0;
    }
  }
  .shadowman {
    padding: 0 4.267vw;
    padding-bottom: 8vw;
    .title {
      font-size: 4.8vw;
      font-weight: 700;
      padding-bottom: 2.667vw;
    }
    ul {
      display: flex;
      overflow: auto;
      & > :nth-child(1) {
        margin: 0;
      }
      &::-webkit-scrollbar {
        display: none;
      }
      li {
        margin-left: 4.267vw;

        .img {
          height: 32vw;
          ::v-deep .van-image__img {
            border-radius: 1.333vw;
          }
        }
        .name {
          margin-top: 3.733vw;
          color: #191919;
          font-size: 3.733vw;
        }
        .position {
          color: #818181;
          font-size: 3.467vw;
          margin-top: 1.333vw;
        }
      }
    }
  }
}
</style>

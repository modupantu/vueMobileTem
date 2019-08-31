<template>
  <div class="home">
    <div>
      <header></header>
      <div class="bannerBox">banner</div>
      <div class="content">neirong</div>
      <div class="btn">button</div>
    </div>
    <!-- alert -->
    <div v-if="alertBoxFlag" class="alertBox">
      <div class="loginBox" v-if="loginFlag">
        <div>立即领取40000元优惠</div>
        <input
          class="tel"
          placeholder="请输入手机号"
          type="number"
          v-model="tel"
          @keydown="telKeydown($event)"
        />
      </div>
      <div class="collectFailBox"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "index.less";
</style>
<script src="./index.js"></script>

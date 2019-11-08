<template>
  <div>
    序列图：
    <img class="anim-img" src="/fire.png" alt="anim" />
    动画：
    <div class="anim"></div>
  </div>
</template>

<style>
.anim-img {
  margin-bottom: 20px;
}
.anim {
  width: 149px;
  height: 185px;
  background: url(/fire.png);
  animation: rotate 3s steps(31) infinite;
}
@keyframes rotate {
  100% {
    background-position: -4619px 0;
  }
}
</style>

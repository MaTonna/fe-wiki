<template>
  <div>
    <div class="parent">
      <span class="child-left">一等奖</span>
      <div class="child-right">
        <p>小明</p>
        <p>小红</p>
        <p>小丽</p>
      </div>
    </div>
  </div>
</template>

<style>
.parent {
  display: table;
  margin: 0 auto;
}
.child-left,
.child-right {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  border: 1px solid #ccc;
}
.child-left {
  width: 80px;
  border-right: 0;
}
.child-right {
  width: 120px;
}
</style>

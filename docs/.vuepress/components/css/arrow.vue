<template>
  <div>
    <table>
      <thead>
        <th class="rank-up">排名向上箭头</th>
        <th class="rank-down">排名向下箭头</th>
        <th class="triangle">排序箭头</th>
      </thead>
    </table>
  </div>
</template>

<style lang="stylus">
.rank-up {
  &::after {
    content: "\2191";  //unicode在css写法需要把u去除
    color: red;
  }
}

.rank-down {
  &::after {
    content: '\2193';
    color: green;
  }
}

.triangle {
  position: relative;

  &::before, &::after {
    content: '';
    position: absolute;
    right: calc(5%);
    width: 0;
    height: 0;
  }

  &::before {
    top: calc(50% - 5px);
    border-style: solid;
    border-width: 0 4px 4px 4px;
    border-color: transparent transparent #000 transparent;
  }

  &::after {
    bottom: calc(50% - 5px);
    border-style: solid;
    border-width: 4px 4px 0 4px;
    border-color: #000 transparent transparent transparent;
  }
}
</style>

<template>
  <div>
    <ol class="table-list">
      <li class="list-item" v-for="n in 6">item{{n}}</li>
    </ol>
  </div>
</template>

<style>
.table-list {
  width: 300px;
}
.list-item {
  display: inline-block;
  margin: -1px 0 0 -1px;
  width: 149px;
  height: 150px;
  line-height: 150px;
  text-align: center;
  list-style: none;
  border: 1px solid #ccc;
}
</style>

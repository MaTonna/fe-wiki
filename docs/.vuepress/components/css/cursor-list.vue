<template>
  <ol>
    <li
      class="cursor"
      v-for="cursor in cursorList"
      :style="{'cursor':cursor}"
    >{{cursor}}</li>
  </ol>
</template>

<style>
.cursor {
  display: inline-block;
  margin: 15px;
  width: 100px;
  height: 100px;
  line-height: 95px;
  text-align: center;
  background: #f0f0f0;
  border: 1px solid #999;
  list-style: none;
  border-radius: 50%;
}
</style>


<script>
export default {
  data() {
    return {
      cursorList: [
        "auto",
        "default",
        "none",
        "context-menu",
        "help",
        "pointer",
        "progress",
        "wait",
        "cell",
        "crosshair",
        "text",
        "vertical-text",
        "alias",
        "copy",
        "move",
        "no-drop",
        "not-allowed",
        "all-scroll",
        "col-resize",
        "row-resize",
        "n-resize",
        "e-resize",
        "s-resize",
        "w-resize",
        "ns-resize",
        "ew-resize",
        "ne-resize",
        "nw-resize",
        "se-resize",
        "sw-resize",
        "nesw-resize",
        "nwse-resize"
      ]
    };
  }
};
</script>

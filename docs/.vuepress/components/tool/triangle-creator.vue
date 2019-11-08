<template>
  <div>
    <div class="triangle-wrap" @click="changeDirection">
      <i class="triangle-top"></i>
      <i class="triangle-left"></i>
      <i class="triangle-right"></i>
      <i class="triangle-bottom"></i>
      <i class="triangle-left-top"></i>
      <i class="triangle-right-top"></i>
      <i class="triangle-left-bottom"></i>
      <i class="triangle-right-bottom"></i>
    </div>
    {{directionMemoMap[currentDirection]}}
    <pre>
    <code class="language-css" v-html="this.codeHtml"></code>
    </pre>
  </div>
</template>

<style>
.triangle-wrap {
  display: inline-block;
  position: relative;
  margin: 20px 10px 0 0;
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  cursor: pointer;
}
.triangle-top {
  position: absolute;
  left: 25px;
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 25px 25px 25px;
  border-color: transparent transparent #3eaf7c transparent;
  z-index: 5;
}
.triangle-left {
  position: absolute;
  top: 25px;
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 25px 25px 25px 0;
  border-color: transparent #3eaf7c transparent transparent;
  z-index: 5;
}
.triangle-right {
  position: absolute;
  top: 25px;
  right: 0;
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 25px 0 25px 25px;
  border-color: transparent transparent transparent #3eaf7c;
  z-index: 5;
}
.triangle-bottom {
  position: absolute;
  left: 25px;
  bottom: 0;
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 25px 25px 0 25px;
  border-color: #3eaf7c transparent transparent transparent;
  z-index: 5;
}
.triangle-left-top {
  position: absolute;
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 50px 50px 0 0;
  border-color: #314255 transparent transparent transparent;
}
.triangle-right-top {
  position: absolute;
  right: 0;
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 50px 50px 0;
  border-color: transparent #314255 transparent transparent;
}
.triangle-left-bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 50px 0 0 50px;
  border-color: transparent transparent transparent #314255;
}
.triangle-right-bottom {
  position: absolute;
  right: 0;
  bottom: 0;
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 50px 50px;
  border-color: transparent transparent #314255 transparent;
}
</style>

<script>
export default {
  created() {
    import("prismjs/prism").then(Prism => {
      this.Prism = Prism;
      this.codeHtml = this.Prism.highlight(
        this.codeMap["triangle-top"],
        this.Prism.languages.css,
        "css"
      );
    });
  },
  data() {
    return {
      codeMap: {
        "triangle-top":
          "\nwidth: 0;\nheight: 0;\nborder-style: solid;\nborder-width: 0 25px 25px 25px;\nborder-color: transparent transparent #3eaf7c transparent;",
        "triangle-left":
          "\nwidth: 0;\nheight: 0;\nborder-style: solid;\nborder-width: 25px 25px 25px 0;\nborder-color: transparent #3eaf7c transparent transparent;",
        "triangle-bottom":
          "\nwidth: 0;\nheight: 0;\nborder-style: solid;\nborder-width: 25px 25px 0 25px;\nborder-color: #3eaf7c transparent transparent transparent;",
        "triangle-right":
          "\nwidth: 0;\nheight: 0;\nborder-style: solid;\nborder-width: 25px 0 25px 25px;\nborder-color: transparent transparent transparent #3eaf7c",
        "triangle-left-top":
          "\nwidth: 0;\nheight: 0;\nborder-style: solid;\nborder-width: 50px 50px 0 0;\nborder-color: #314255 transparent transparent transparent;",
        "triangle-left-bottom":
          "\nwidth: 0;\nheight: 0;\nborder-style: solid;\nborder-width: 50px 0 0 50px;\nborder-color: transparent transparent transparent #314255;",
        "triangle-right-bottom":
          "\nwidth: 0;\nheight: 0;\nborder-style: solid;\nborder-width: 0 0 50px 50px;\nborder-color: transparent transparent #314255 transparent;",
        "triangle-right-top":
          "\nwidth: 0;\nheight: 0;\nborder-style: solid;\nborder-width: 0 50px 50px 0;\nborder-color: transparent #314255 transparent transparent;"
      },
      directionMemoMap: {
        "triangle-top": "向上",
        "triangle-left": "向左",
        "triangle-bottom": "向下",
        "triangle-right": "向右",
        "triangle-left-top": "左上",
        "triangle-left-bottom": "左下",
        "triangle-right-bottom": "右下",
        "triangle-right-top": "右上"
      },
      currentDirection: "triangle-top",
      codeHtml: ""
    };
  },
  methods: {
    changeDirection(e) {
      this.currentDirection = e.target.getAttribute("class");
      const code = this.codeMap[this.currentDirection];
      if (code) {
        this.codeHtml = this.Prism.highlight(
          code,
          this.Prism.languages.css,
          "css"
        );
      }
    }
  }
};
</script>
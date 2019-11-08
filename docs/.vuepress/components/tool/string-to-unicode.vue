<template>
  <div>
    <p>格式：\u2198 => ↘，点击unicode转字符串按钮</p>
    <p>格式：↘ => \u2198，点击字符串转unicode</p>
    <input type="text" class="input" v-model="input" />
    <button class="button" @click="strToUnicode">字符串转unicode</button>
    <button class="button" @click="unicodeToStr">unicode转字符串</button>
    <p class="result">{{result}}</p>
    <a
      href="https://blog.csdn.net/zx562602419/article/details/81020342"
      target="_blank"
    >常用的HTML和CSS content属性特殊字符归纳</a>
  </div>
</template>

<style>
.input {
  padding: 0 8px;
  width: 200px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: 0;
}
.button {
  margin-left: 5px;
  padding: 0 20px;
  height: 30px;
  background: #3eaf7c;
  border: 0;
  color: #fff;
  border-radius: 3px;
  outline: 0;
}
.result {
  color: #3eaf7c;
  font-weight: bold;
  font-size: 18px;
}
</style>

<script>
export default {
  data() {
    return {
      input: "",
      result: ""
    };
  },
  methods: {
    strToUnicode() {
      let str = this.input;
      let unid = "\\u";
      for (let i = 0, len = str.length; i < len; i++) {
        if (i < len - 1) {
          unid += str.charCodeAt(i).toString(16) + "\\u";
        } else if (i === len - 1) {
          unid += str.charCodeAt(i).toString(16);
        }
      }
      this.result = unid;
    },
    unicodeToStr() {
      const unicode = this.input;
      let result = [];
      const strArr = unicode.split("\\u");
      if (strArr[0] === unicode) {
        this.result = unicode;
        return;
      }
      for (var i = 0, len = strArr.length; i < len; i++) {
        if (strArr[i]) {
          result.push(String.fromCharCode(parseInt(strArr[i], 16)));
        }
      }
      this.result = result.join("");
    }
  }
};
</script>

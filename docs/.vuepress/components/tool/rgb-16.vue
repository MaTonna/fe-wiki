<template>
  <div>
    <h3>十六进制转RGB</h3>
    <p>格式：#FF0000 => 255,0,0</p>
    <input type="text" class="input" v-model="input16" />
    <button class="button" @click="transfer16ToRGB">转换</button>
    <p class="result" :style="{'color':rgbResult}">{{rgbResult}}</p>
    <hr />
    <h3>RGB转16进制</h3>
    <p>格式：255,0,0 => #FF0000</p>
    <input type="text" class="input input-short" v-model="inputR" />
    <input type="text" class="input input-short" v-model="inputG" />
    <input type="text" class="input input-short" v-model="inputB" />
    <button class="button" @click="transferRGBTo16">转换</button>
    <p class="result" :style="{'color':hexResult}">{{hexResult}}</p>
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
.input-short {
  width: 52px;
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
      input16: "",
      rgbResult: "",
      inputR: "",
      inputG: "",
      inputB: "",
      hexResult: ""
    };
  },
  methods: {
    transfer16ToRGB() {
      const str = this.input16;
      let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      let sColor = str.toLowerCase();
      if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
          let sColorNew = "#";
          for (let i = 1; i < 4; i += 1) {
            sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
          }
          sColor = sColorNew;
        }
        let sColorChange = [];
        for (let i = 1; i < 7; i += 2) {
          sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
        }
        this.rgbResult = "rgb(" + sColorChange.join(",") + ")";
      } else {
        this.rgbResult = "格式错误";
      }
    },
    transferRGBTo16() {
      const checkRGB = this.checkRGB;
      if (
        !checkRGB(this.inputR) ||
        !checkRGB(this.inputG) ||
        !checkRGB(this.inputB)
      ) {
        this.hexResult = "格式错误";
      } else {
        this.hexResult = `#${this.formatRGB(this.inputR)}${this.formatRGB(
          this.inputG
        )}${this.formatRGB(this.inputB)}`;
      }
    },
    checkRGB(rgb) {
      return rgb && !isNaN(rgb) && rgb <= 255;
    },
    formatRGB(rgb) {
      let result = Number(rgb).toString(16);
      if (result.length === 1) {
        result = result.toString().padStart(2, "0");
      }
      return result.toLocaleUpperCase();
    }
  }
};
</script>

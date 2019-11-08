### postcss 适配方案

#### 安装

> PostCSS:处理 CSS 的 webpack 的加载器

> autoprefixer ：自动添加兼容前缀

> postcss-px-to-viewport : 将 px 单位转换为视口单位的 (vw, vh, vmin, vmax) 的 PostCSS 插件. 进行页面适配

```js
npm -D postcss-loader  autoprefixer
npm -S  postcss-px-to-viewport
```

#### webpack module 配置

```js
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
```

#### postcss-px-to-viewport

> 配置

```js
{
  unitToConvert: 'px',
  viewportWidth: 320,
  unitPrecision: 5,
  propList: ['*'],
  viewportUnit: 'vw',
  fontViewportUnit: 'vw',
  selectorBlackList: [],
  minPixelValue: 1,
  mediaQuery: false,
  replace: true,
  exclude: [],
  landscape: false,
  landscapeUnit: 'vw',
  landscapeWidth: 568
}
```

- unitToConvert (String) 需要转换的单位，默认为"px"
- viewportWidth (Number) 设计稿的视口宽度
- unitPrecision (Number) 单位转换后保留的精度
- propList (Array) 能转化为 vw 的属性列表
  - 传入特定的 CSS 属性；
  - 可以传入通配符""去匹配所有属性，例如：['']；
  - 在属性的前或后添加"\*",可以匹配特定的属性. (例如['position'] 会匹配 + + background-position-y)
  - 在特定属性前加 "!"，将不转换该属性的单位 . 例如: ['*', '!letter-spacing']，将不转换 letter-spacing
  - "!" 和 ""可以组合使用， 例如: ['', '!font*']，将不转换 font-size 以及 font-weight 等属性

* viewportUnit (String) 希望使用的视口单位
* fontViewportUnit (String) 字体使用的视口单位
* selectorBlackList (Array) 需要忽略的 CSS 选择器，不会转为视口单位，使用原有的 px 等单位。
  - 如果传入的值为字符串的话，只要选择器中含有传入值就会被匹配
  - 例如 selectorBlackList 为 ['body'] 的话， 那么 .body-class 就会被忽略
  - 如果传入的值为正则表达式的话，那么就会依据 CSS 选择器是否匹配该正则
  - 例如 selectorBlackList 为 [/^body$/] , 那么 body 会被忽略，而 .body 不会
* minPixelValue (Number) 设置最小的转换数值，如果为 1 的话，只有大于 1 的值会被转换
* mediaQuery (Boolean) 媒体查询里的单位是否需要转换单位
* replace (Boolean) 是否直接更换属性值，而不添加备用属性
* exclude (Array or Regexp) 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
  - 如果值是一个正则表达式，那么匹配这个正则的文件会被忽略
  - 如果传入的值是一个数组，那么数组里的值必须为正则
* landscape (Boolean) 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
* landscapeUnit (String) 横屏时使用的单位
* landscapeWidth (Number) 横屏时使用的视口宽度

> 输入

```css
.class {
  margin: -10px 0.5vh;
  padding: 5vmin 9.5px 1px;
  border: 3px solid black;
  border-bottom-width: 1px;
  font-size: 14px;
  line-height: 20px;
}

.class2 {
  border: 1px solid black;
  margin-bottom: 1px;
  font-size: 20px;
  line-height: 30px;
}

@media (min-width: 750px) {
  .class3 {
    font-size: 16px;
    line-height: 22px;
  }
}
```

> 输出

```css
.class {
  margin: -3.125vw 0.5vh;
  padding: 5vmin 2.96875vw 1px;
  border: 0.9375vw solid black;
  border-bottom-width: 1px;
  font-size: 4.375vw;
  line-height: 6.25vw;
}

.class2 {
  border: 1px solid black;
  margin-bottom: 1px;
  font-size: 6.25vw;
  line-height: 9.375vw;
}

@media (min-width: 750px) {
  .class3 {
    font-size: 16px;
    line-height: 22px;
  }
}
```

#### postcss.config.js 配置使用

> 挺多相关插件都可以配合使用

> 例如 kk 体育资料库 H5

```js
module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 3,
      viewportUnit: "vw",
      selectorBlackList: [".ignore", ".hairlines"],
      minPixelValue: 1,
      mediaQuery: false,
      exclude: [/analyze/]
    }
  }
};
```

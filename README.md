## kk 前端百科

&#160; &#160; &#160; &#160;为了提升工作效率，利用空闲时间列出工作中常用的 css、js 方法或技巧。

### 启用

主要使用了 vuepress+ prismjs 进行文档开发，clone 项目后执行以下命令即可在本地运行，默认在 80 端口，80 端口占用则使用 8082 端口：

```
npm i vuepress -g

npm i

npm run dev
```

注：修改 config.js 的配置需要重启，如果嫌每次重启麻烦的，可以不运行 dev，而是：

```
npm install -g nodemon

npm run start
```

编写前需要 git pull 拉去代码，避免冲突。

提交时提交源文件，然后通知 wiki 负责人构建后重新部署到内网http://kkfe-wiki.biz.cloud.net/上，不可删除项目里的.rancher-pipeline.yml Dockerfile deployment.yaml 三个文件！！否则无法部署！！

### 文件夹分类

- docs
  - .vuepress
    - components 放入 vue 组件
      - css css 分类下的组件
    - public 放入图片
    - config.js 配置文件，在这里新增导航
  - PROJECT 关于项目的文档
  - TOOLS 关于工具类的文档
    - CSS
    - JS
    - LINK 链接
    - SOLUTION 解决方案
    - TOOL 工具

### 具体使用说明

1. 在 docs 文件下创建 md 文件
2. 在.vuepress 的 config.js 下配置分类和文档

&#160; &#160; &#160; &#160;在某个分类的 children 下添加路径，如果想在 config.js 中直接设置 md 的 title(侧边栏链接名)，可以设置为[link, text] 的数组，如['CSS/滚动条样式', '滚动条样式']，在 md 文档中就不用设置 title。

3. 在.md 文件中加入 title，即为在左侧导航栏的名称

注：

&#160; &#160; &#160; &#160;如需使用 vue 组件，在.vuepress/components 文件夹下创建.vue 文件，在.md 文件中直接使用.vue 文件的名字即可，如果 components 有子文件夹，使用为<子文件夹名-组件名/>

&#160; &#160; &#160; &#160;vuepress 自带 stylus 预处理器，可以直接使用

```html
<style lang="stylus"></style>
```

&#160; &#160; &#160; &#160;如需有动态 demo 生成代码，在.vue 组件中引用 prismjs，参照如下事例：

```javascript
mounted() {
	import('prismjs/prism').then(Prism => {
		this.Prism = Prism;
		// 初始化要展示的代码、语言，在需要改变代码展示的时候也同样调用下面的代码
		// 在templete中{{code}}会更新代码
		this.code = this.Prism.highlight('代码字符串', this.Prism.languages.css, 'css');
	});
}
```

&#160; &#160; &#160; &#160;对应的 templete 代码：

```html
<pre>
	<code v-html="this.code"></code>
</pre>
```

&#160; &#160; &#160; &#160;更多使用见：
[https://vuepress.vuejs.org/zh/guide/using-vue.html](https://vuepress.vuejs.org/zh/guide/using-vue.html)

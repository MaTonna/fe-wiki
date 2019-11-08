<template>
  <div>
    <ol
      class="flex-wrap"
      :style="{
				'flex-direction': flexDirection,
				'flex-wrap': flexWrap,
				'justify-content': justifyContent,
				'align-items': alignItems
			}"
    >
      <li
        :class="['flex-item', 'item'+n]"
        v-for="n in 5"
        :style="n===2?{
						'order':order,
						'flex-grow':flexGrow,
						'flex-shrink':flexShrink,
						'flex-basis':flexBasis,
						'align-self':alignSelf
					}:{}"
      >item{{n}}</li>
    </ol>

    <p>
      父容器属性：(事例未给子元素设置高度)
      <span @click="containerFold" class="fold">{{containerIsFold?'收起':'展开'}}</span>
    </p>

    <pre v-show="containerIsFold">
    <code class="language-css" v-html="this.flexWrapHtml"></code>
    </pre>

    <ol class="container-wrap" v-show="containerIsFold">
      <li class="attr-line" v-for="attr in attrLists">
        <p class="attr-memo">{{attr.memo}}</p>
        <span
          @click="changeAttr(attr.vName, attrVal.name)"
          class="item-span"
          v-for="attrVal in attr.attrList"
        >
          <input type="radio" :name="attr.name" :id="attr.name+attrVal.name" />
          <label :for="attr.name+attrVal.name">{{attrVal.name}} {{attrVal.memo}}</label>
        </span>
      </li>
    </ol>

    <p>
      子元素属性：(以第三个子元素为例)
      <span @click="itemsFold" class="fold">{{itemsIsFold?'收起':'展开'}}</span>
    </p>

    <pre v-show="itemsIsFold">
    <code class="language-css" v-html="flexItemHtml"></code>
    </pre>

    <ol class="container-wrap" v-show="itemsIsFold">
      <li class="attr-line" v-for="attr in itemsAttrLists">
        <p class="attr-memo">{{attr.memo}}</p>
        <span
          @click="changeItemAttr(attr.vName, attrVal.name)"
          class="item-span"
          v-for="attrVal in attr.attrList"
        >
          <input type="radio" :name="attr.name" :id="attr.name+attrVal.name" />
          <label :for="attr.name+attrVal.name">{{attrVal.name}} {{attrVal.memo}}</label>
        </span>
      </li>
    </ol>
  </div>
</template>

<style>
::-webkit-scrollbar-track-piece {
  background: #f1f1f1;
}
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background: #ddd;
  border-radius: 4px;
}
.flex-wrap {
  display: flex;
  padding: 0;
  border: 1px solid #ddd;
  height: 100px;
}
.flex-item {
  text-align: center;
  color: #fff;
  list-style: none;
}
.item1 {
  width: 100px;
  background: #ff5722;
}
.item2 {
  width: 200px;
  background: #9370db;
}
.item3 {
  width: 150px;
  background: #87ceeb;
}
.item4 {
  width: 120px;
  background: #3eaf7c;
}
.item5 {
  width: 100px;
  background: #ffc60b;
}
.attr-line {
  margin-bottom: 20px;
}
.item-span {
  display: inline-block;
  width: 300px;
}
.item-span label {
  cursor: pointer;
}
.container-wrap {
  height: 400px;
  overflow: auto;
}
.fold {
  cursor: pointer;
  margin-left: 10px;
  color: #3eaf7c;
}
.attr-memo {
  font-weight: bold;
}
</style>

<script>
export default {
  data() {
    return {
      flexWrapHtml: "",
      flexItemHtml: "",
      flexDirection: "row",
      flexWrap: "nowrap",
      justifyContent: "flex-start",
      alignItems: "stretch",
      alignContent: "stretch",
      order: 0,
      flexGrow: "0",
      flexShrink: 1,
      flexBasis: "auto",
      alignSelf: "stretch",
      containerIsFold: true,
      itemsIsFold: true,
      attrLists: [
        {
          name: "flex-direction",
          vName: "flexDirection",
          memo: "flex-direction：主轴的方向，即子元素的排列方向",
          attrList: [
            {
              name: "row",
              memo: "默认值，从左到右"
            },
            {
              name: "row-reverse",
              memo: "从右到左"
            },
            {
              name: "column",
              memo: "从上到下"
            },
            {
              name: "column-reverse",
              memo: "从下到上"
            }
          ]
        },
        {
          name: "flex-wrap",
          vName: "flexWrap",
          memo: "flex-wrap：轴线排不下的换行方式",
          attrList: [
            {
              name: "nowrap",
              memo: "默认值，不换行"
            },
            {
              name: "wrap",
              memo: "换行，第一行在上面"
            },
            {
              name: "wrap-reverse",
              memo: "换行，第一行在下面"
            }
          ]
        },
        {
          name: "justify-content",
          vName: "justifyContent",
          memo: "justify-content：子元素在主轴上的对齐方式",
          attrList: [
            {
              name: "flex-start",
              memo: "默认值，左对齐"
            },
            {
              name: "flex-end",
              memo: "右对齐"
            },
            {
              name: "center",
              memo: "居中"
            },
            {
              name: "space-between",
              memo: "两端对齐"
            },
            {
              name: "space-around",
              memo: "子元素两侧间隔相等"
            }
          ]
        },
        {
          name: "align-items",
          vName: "alignItems",
          memo: "align-items：子元素在交叉轴（垂直方向）的对齐方式",
          attrList: [
            {
              name: "stretch",
              memo: "默认值，占满整个容器高度"
            },
            {
              name: "flex-start",
              memo: "交叉轴起点对齐"
            },
            {
              name: "flex-end",
              memo: "交叉轴终点对齐"
            },
            {
              name: "center",
              memo: "交叉轴中点对齐"
            },
            {
              name: "baseline",
              memo: "子元素第一行文字的基线对齐"
            }
          ]
        },
        {
          name: "align-content",
          vName: "alignContent",
          memo: "align-content：多轴线的对齐方式，一根轴线的情况该属性不起作用",
          attrList: [
            {
              name: "stretch",
              memo: "默认值，轴线占满交叉轴"
            },
            {
              name: "flex-start",
              memo: "与交叉轴的起点对齐"
            },
            {
              name: "flex-end",
              memo: "与交叉轴的终点对齐"
            },
            {
              name: "center",
              memo: "与交叉轴的中点对齐"
            },
            {
              name: "space-between",
              memo: "与交叉轴的两端对齐"
            },
            {
              name: "space-around",
              memo: "轴线两端间隔相等"
            }
          ]
        }
      ],
      itemsAttrLists: [
        {
          name: "order",
          vName: "order",
          memo: "order：子元素的排列顺序，数值越小越靠前，默认为0",
          attrList: [
            {
              name: "0"
            },
            {
              name: "1"
            }
          ]
        },
        {
          name: "flex-grow",
          vName: "flexGrow",
          memo: "flex-grow：子元素放大比例，默认为0",
          attrList: [
            {
              name: "0"
            },
            {
              name: "1"
            },
            {
              name: "2"
            },
            {
              name: "3"
            }
          ]
        },
        {
          name: "flex-shrink",
          vName: "flexShrink",
          memo: "flex-shrink：项目的缩小比例，默认为1",
          attrList: [
            {
              name: 1
            },
            {
              name: 0
            }
          ]
        },
        {
          name: "flex-basis",
          vName: "flexBasis",
          memo: "flex-basis：项目将占据的固定空间",
          attrList: [
            {
              name: "100px"
            },
            {
              name: "200px"
            }
          ]
        },
        {
          name: "align-self",
          vName: "alignSelf",
          memo: "align-self：单个项目不一样的对其方式",
          attrList: [
            {
              name: "stretch",
              memo: "默认值，占满整个容器高度"
            },
            {
              name: "flex-start",
              memo: "交叉轴起点对齐"
            },
            {
              name: "flex-end",
              memo: "交叉轴终点对齐"
            },
            {
              name: "center",
              memo: "交叉轴中点对齐"
            },
            {
              name: "baseline",
              memo: "子元素第一行文字的基线对齐"
            }
          ]
        }
      ]
    };
  },
  created() {
    const code = this.getCode();
    const itemCode = this.getItemCode();
    import("prismjs/prism").then(Prism => {
      this.Prism = Prism;
      this.flexWrapHtml = this.Prism.highlight(
        code,
        this.Prism.languages.css,
        "css"
      );

      this.flexItemHtml = this.Prism.highlight(
        itemCode,
        this.Prism.languages.css,
        "css"
      );
    });
  },
  methods: {
    changeAttr(attr, dir) {
      this[attr] = dir;
      const code = this.getCode();
      this.flexWrapHtml = this.Prism.highlight(
        code,
        this.Prism.languages.css,
        "css"
      );
		},
		changeItemAttr(attr, dir) {
      this[attr] = dir;
      const code = this.getItemCode();
      this.flexItemHtml = this.Prism.highlight(
        code,
        this.Prism.languages.css,
        "css"
      );
		},
    getCode() {
      return `\nflex-direction: ${this.flexDirection};\nflex-wrap: ${this.flexWrap};\njustify-content: ${this.justifyContent};\nalign-content:${this.alignItems};\nalign-content:${this.alignContent};`;
    },
    getItemCode() {
      return `\norder: ${this.order};\nflex-grow: ${this.flexGrow};\nflex-shrink: ${this.flexShrink};\nflex-basis: ${this.flexBasis};\nalign-self: ${this.alignSelf};`;
    },
    containerFold() {
      this.containerIsFold = !this.containerIsFold;
    },
    itemsFold() {
      this.itemsIsFold = !this.itemsIsFold;
    }
  }
};
</script>

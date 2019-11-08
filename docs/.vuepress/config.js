module.exports = {
  title: "KK-FE-WIKI",
  base: "/",
  dest: "public",
  head: [
    [
      "link",
      {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }
    ]
  ],
  themeConfig: {
    nav: [
      {
        text: "工具",
        link: "/TOOLS/CSS/滚动条样式"
      },
      {
        text: "项目",
        link: "/PROJECT/COMMON/common"
      }
    ],
    sidebarDepth: 1,
    sidebar: {
      "/PROJECT/": [
        {
          title: "common",
          children: ["COMMON/common"]
        }
      ],
      "/TOOLS/": [
        {
          title: "CSS",
          children: [
            "CSS/滚动条样式",
            "CSS/文字超出显示省略号",
            "CSS/手型cursor",
            "CSS/flex布局",
            "CSS/表格边框1px",
            "CSS/序列图制作动画",
            "CSS/表格表头和第一列固定",
            "CSS/美化radio",
            "CSS/字符排名箭头",
            {
              title: "基础布局",
              children: ["CSS/两列布局-垂直居中"]
            }
          ]
        },
        {
          title: "JS",
          children: [
            "JS/setTimeout模拟setInterval",
            "JS/节流与防抖",
            "JS/浏览器平台识别",
            ["JS/封装cookie操作", "封装cookie操作"],
            ["JS/localStorage封装", "localStorage封装"],
            ["JS/完整axios封装含token", "完整axios封装含token"]
          ]
        },
        {
          title: "HTML",
          children: [["HTML/mate标签设置", "mate标签设置"]]
        },
        {
          title: "工具",
          children: [
            "TOOL/css三角形生成器",
            "TOOL/RGB与十六进制颜色转换",
            "TOOL/字符串转unicode"
          ]
        },
        {
          title: "解决方案",
          children: [
            "SOLUTION/rem适配方案",
            ["SOLUTION/postcss适配方案", "postcss适配方案."],
            ["SOLUTION/与移动端的交互", "与移动端的交互"],
            ["SOLUTION/H5在IOS上的奇怪问题汇总", "H5在IOS上的奇怪问题汇总"],
          ]
        },
        {
          title: "链接",
          children: ["LINK/常用链接"]
        }
      ]
    }
  }
};

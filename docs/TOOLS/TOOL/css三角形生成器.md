---
title: css三角形生成器
---

原理：使用 border 的特性模拟三角形，例如制作一个箭头朝上的三角形，border-width 的 top 项就是 0，即 border-width: 0 25px 25px 25px，这时对应的方向，水平的边（bottom 项）的 border-color 就是三角形的颜色，即 border-color: transparent transparent #3eaf7c transparent。

点击三角形可获取对应的 css
<ClientOnly>
<tool-triangle-creator></tool-triangle-creator>
</ClientOnly>

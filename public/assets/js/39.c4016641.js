(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{239:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("原理：1rem = body 的 px 的倍数，在 css 中就以设计稿 px/100 的 rem 来写。\n按照 iPhone 6 的 375 宽度来计算，根节点的 font-size 设置为 50px。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" win")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" docEl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tresizeEvt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'orientationchange'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" window "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'orientationchange'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'resize'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//750 为设计稿宽度  适配rem")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("recalc")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" clientWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" docEl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("clientWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\tclientWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" clientWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1080")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" clientWidth "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\tdocEl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("clientWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("750")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addEventListener"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\twin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resizeEvt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" recalc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tdoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DOMContentLoaded'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" recalc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("并且在 common.css 中设置 body，以保证在 PC 端显示稍显正常")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 320px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 640px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{550:function(v,_,t){"use strict";t.r(_);var a=t(5),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("Boxx"),v._v(" "),t("h2",{attrs:{id:"移动指令-m"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移动指令-m"}},[v._v("#")]),v._v(" 移动指令 - M")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("M x,y")]),v._v("："),t("code",[v._v("x,y")]),v._v("是绝对值")]),v._v(" "),t("li",[t("code",[v._v("m x,y")]),v._v("："),t("code",[v._v("x,y")]),v._v("是相对于上一个点的偏移量，如果是"),t("code",[v._v("(0,0)")]),v._v("，则表示不存在偏移")])]),v._v(" "),t("h2",{attrs:{id:"绘制指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#绘制指令"}},[v._v("#")]),v._v(" 绘制指令")]),v._v(" "),t("ul",[t("li",[v._v("通过使用一个大写或小写字母输入各命令。大写字母表示绝对值、小写字母表示相对值")]),v._v(" "),t("li",[v._v("线段的控制点是相对于上一线段的终点而言的")]),v._v(" "),t("li",[v._v("依次输入多个同一类型的命令时，可省略重复的命令项。例如："),t("code",[v._v("L 100,200 300,400")]),v._v("等同于"),t("code",[v._v("L 100,200 L300,400")])])]),v._v(" "),t("h3",{attrs:{id:"直线-l"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#直线-l"}},[v._v("#")]),v._v(" 直线 - L")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("L x,y")]),v._v(" 或 "),t("code",[v._v("L x y")])]),v._v(" "),t("li",[t("code",[v._v("l x,y")]),v._v(" 或 "),t("code",[v._v("l x y")])])]),v._v(" "),t("h3",{attrs:{id:"水平直线-h"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#水平直线-h"}},[v._v("#")]),v._v(" 水平直线 - H")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("H x")])]),v._v(" "),t("li",[t("code",[v._v("h x")])])]),v._v(" "),t("p",[v._v("绘制从当前点到指定 x 坐标的直线")]),v._v(" "),t("p",[v._v("x 为 System.Double 类型的值")]),v._v(" "),t("h3",{attrs:{id:"垂直直线-v"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垂直直线-v"}},[v._v("#")]),v._v(" 垂直直线 - V")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("V y")])]),v._v(" "),t("li",[t("code",[v._v("v y")])])]),v._v(" "),t("p",[v._v("绘制从当前点到指定 y 坐标的直线")]),v._v(" "),t("p",[v._v("y 为 System.Double 类型的值")]),v._v(" "),t("h3",{attrs:{id:"三次方程式贝塞尔曲线-c"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三次方程式贝塞尔曲线-c"}},[v._v("#")]),v._v(" 三次方程式贝塞尔曲线 - C")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("C 第一控制点 第二控制点 结束点")])]),v._v(" "),t("li",[t("code",[v._v("c 第一控制点 第二控制点 结束点")])])]),v._v(" "),t("p",[v._v("通过指定两个控制点来绘制由当前点到指定结束点间的三次方程贝塞尔曲线")]),v._v(" "),t("p",[v._v("例如："),t("code",[v._v("C 100,200 200,400 300,200")]),v._v(" 或 "),t("code",[v._v("c 100,200 200,400 300,200")]),v._v("，其中，点(100,200)为第一控制点，点(200,400)为第二控制点，点(300,200)为结束点")]),v._v(" "),t("h3",{attrs:{id:"二次方程式贝塞尔曲线-q"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二次方程式贝塞尔曲线-q"}},[v._v("#")]),v._v(" 二次方程式贝塞尔曲线 - Q")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("Q 控制点 结束点")])]),v._v(" "),t("li",[t("code",[v._v("q 控制点 结束点")])])]),v._v(" "),t("p",[v._v("通过指定一个控制点来绘制由当前点到指定结束点间的二次方程贝塞尔曲线")]),v._v(" "),t("p",[v._v("例如："),t("code",[v._v("Q 100,200 300,200")]),v._v(" 或 "),t("code",[v._v("q 100,200 300,200")]),v._v("，其中，点(100,200)为控制点，点(300,200)为结束点")]),v._v(" "),t("h3",{attrs:{id:"平滑三次方程式贝塞尔曲线-s"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#平滑三次方程式贝塞尔曲线-s"}},[v._v("#")]),v._v(" 平滑三次方程式贝塞尔曲线 - S")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("S 控制点 结束点")])]),v._v(" "),t("li",[t("code",[v._v("s 控制点 结束点")])])]),v._v(" "),t("p",[v._v("通过一个指定点来“平滑地”控制当前点到指定点的贝塞尔曲线")]),v._v(" "),t("p",[v._v("例如："),t("code",[v._v("S 100,200 300,200")]),v._v(" 或 "),t("code",[v._v("s 100,200 300,200")]),v._v("，其中，点(100,200)为控制点，点(300,200)为结束点")]),v._v(" "),t("h3",{attrs:{id:"平滑二次方程式贝塞尔曲线-t"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#平滑二次方程式贝塞尔曲线-t"}},[v._v("#")]),v._v(" 平滑二次方程式贝塞尔曲线 - T")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("T 控制点 结束点")])]),v._v(" "),t("li",[t("code",[v._v("t 控制点 结束点")])])]),v._v(" "),t("p",[v._v("与平滑三次方程式贝塞尔曲线类似。在当前点与指定的终点之间创建一条二次贝塞尔曲线。控制点假定为前一个命令的控制点相对于当前点的反射。如果前一个命令不存在，或者前一个命令不是二次贝塞尔曲线命令或平滑二次贝塞尔曲线命令，则此控制点就是当前点")]),v._v(" "),t("h3",{attrs:{id:"椭圆圆弧-a"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#椭圆圆弧-a"}},[v._v("#")]),v._v(" 椭圆圆弧 - A")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("A 尺寸 圆弧旋转角度 优势弧的标记 正负角度标记 结束点")])]),v._v(" "),t("li",[t("code",[v._v("a 尺寸 圆弧旋转角度 优势弧的标记 正负角度标记 结束点")])])]),v._v(" "),t("p",[v._v("在当前点与指定结束点间绘制圆弧，例如："),t("code",[v._v("A 5,5 0 0 1 10,10")])]),v._v(" "),t("ul",[t("li",[v._v("尺寸：System.Windows.Size 类型，指定椭圆圆弧 X，Y 方向上的半径值")]),v._v(" "),t("li",[v._v("旋转角度：System.Double 类型")]),v._v(" "),t("li",[v._v("圆弧旋转角度值：椭圆圆弧的旋转角度值")]),v._v(" "),t("li",[v._v("优势弧的标记：是否为优势弧，如果弧的角度大于等于180°，则设为1，否在为0")]),v._v(" "),t("li",[v._v("正负角度标记：当正角方向绘制时设为1，否则为0")]),v._v(" "),t("li",[v._v("结束点：System.Windows.Point 类型")])]),v._v(" "),t("h2",{attrs:{id:"关闭指令-z"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关闭指令-z"}},[v._v("#")]),v._v(" 关闭指令 - Z")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("Z")])]),v._v(" "),t("li",[t("code",[v._v("z")])])]),v._v(" "),t("p",[v._v("用以将图形首、尾点用直线连接，形成一个封闭的区域")]),v._v(" "),t("h2",{attrs:{id:"填充规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#填充规则"}},[v._v("#")]),v._v(" 填充规则")]),v._v(" "),t("p",[v._v("确定一个点是否位于填充区域内的规则方法")]),v._v(" "),t("p",[v._v("如果省略此命令，则路径使用默认行为(EvenOdd)")]),v._v(" "),t("p",[v._v("如果指定此命令，则必须将其置于最前面")]),v._v(" "),t("h3",{attrs:{id:"evenodd-f0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#evenodd-f0"}},[v._v("#")]),v._v(" EvenOdd - F0")]),v._v(" "),t("p",[v._v("从该点沿任意方向画一条无限长的射线，然后计算该射线在给定形状中因交叉而形成的路径段数。如果该数是奇数，则点在内部；如果为偶数，则点在外部")]),v._v(" "),t("h3",{attrs:{id:"nonzero-f1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nonzero-f1"}},[v._v("#")]),v._v(" Nonzero - F1")]),v._v(" "),t("p",[v._v("从该店沿任意方向画一条无限长的射线，然后检查形状与该射线的交点。从 0 开始计数，每当线段从左向右穿过该射线时加 1，而每当路径段从右向左穿过该射线时减 1。计算交点的数目后，如果结果为 0，则说明该点位于路径外部；否则位于路径内部")])],1)}),[],!1,null,null,null);_.default=e.exports}}]);
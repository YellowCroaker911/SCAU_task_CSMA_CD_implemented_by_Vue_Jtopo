import { EventTarget as hx, Position as u, ColorKeywords as Ix, LinkHelper as p0, getClass as xx, Link as P, Node as Q, PositionInvertMap as yx, CircleNode as sx, DefaultZIndexs as Q0, Cursor as O, AutoFoldLink as X, isHorizontal as $0, CurveLink as mx, BezierLink as wx, Style as Cx, assertNotNull as ix, EndpointSegment as ux, EndpointFixedName as px, EndpointFunction as vx, getNearestPointOnObjectsOBB as kx, getNearestAnchorOnObjects as Sx, DisplayObject as _x, LayerLocalDeep as ex, PopupMenu as Lx, EventNames as u0, StageMode as Tx, ResourceLoader as ax, InputTextfield as Ax, Tooltip as Px } from "@jtopo/core";
const M = i0;
function i0(n, e) {
  const x = _0();
  return i0 = function(t, s) {
    return t = t - 208, x[t];
  }, i0(n, e);
}
(function(n, e) {
  const x = i0, t = n();
  for (; []; )
    try {
      if (parseInt(x(212)) / 1 * (parseInt(x(235)) / 2) + -parseInt(x(217)) / 3 + parseInt(x(218)) / 4 + parseInt(x(232)) / 5 * (parseInt(x(223)) / 6) + -parseInt(x(230)) / 7 * (-parseInt(x(227)) / 8) + parseInt(x(237)) / 9 + -parseInt(x(226)) / 10 * (parseInt(x(245)) / 11) === e)
        break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(_0, 142714);
class fe extends hx {
  constructor(e) {
    const x = i0;
    super(), this.stage = e, this[x(225)], this[x(228)](), this[x(222)]();
  }
  [M(228)]() {
    const e = M;
    let x = document[e(224)](e(214));
    return x[e(236)][e(211)](e(213)), this[e(220)][e(240)][e(241)](x), this[e(225)] = x, this;
  }
  [M(222)]() {
    const e = M;
    return this.domElement[e(229)][e(238)] = e(239), this;
  }
  [M(233)]() {
    const e = M;
    return this[e(225)].style[e(238)] = e(216), this;
  }
  [M(221)]() {
    return this[M(210)];
  }
  [M(243)](e) {
    const x = M;
    let t = this;
    return e[x(209)][x(231)](function(s) {
      const i = x;
      let r = document.createElement("div");
      r[i(236)][i(211)](i(244)), r[i(219)] = s[i(234)], r[i(208)](i(242), !![]), r[i(215)] = function(a) {
        const o = i;
        t[o(210)] = s;
      }, t[i(225)].appendChild(r);
    }), this;
  }
}
function _0() {
  const n = ["initDom", "style", "203roNDqg", "forEach", "5YBxltT", "show", "iconHtml", "198754pxJzAB", "classList", "907344KwAsJs", "display", "none", "layersContainer", "appendChild", "draggable", "setConfig", "item", "2856579sbRDqE", "setAttribute", "items", "dargItem", "add", "2gUujYA", "jtopo_iconsPanel", "div", "ondragstart", "block", "719022nyQGMj", "761244Yjbxgf", "innerHTML", "stage", "getDragItem", "hide", "594930KbbXDp", "createElement", "domElement", "10aWXFsR", "14632tUwtLo"];
  return _0 = function() {
    return n;
  }, _0();
}
(function(n, e) {
  const x = b0, t = n();
  for (; []; )
    try {
      if (parseInt(x(258)) / 1 + -parseInt(x(278)) / 2 * (-parseInt(x(283)) / 3) + -parseInt(x(287)) / 4 + parseInt(x(275)) / 5 + -parseInt(x(284)) / 6 * (-parseInt(x(281)) / 7) + -parseInt(x(268)) / 8 * (-parseInt(x(263)) / 9) + -parseInt(x(264)) / 10 === e)
        break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(g0, 977839);
function b0(n, e) {
  const x = g0();
  return b0 = function(t, s) {
    return t = t - 252, x[t];
  }, b0(n, e);
}
function Ex(n, e) {
  const x = b0;
  ["id", x(261), "name", "x", "y", x(288), x(270), x(289), x(254), x(279), x(255)].filter((r) => r != x(265))[x(271)]((r) => {
    n[r] = e[r];
  }), n[x(276)](e[x(285)].target, e.begin), n[x(277)](e[x(262)][x(274)], e[x(262)]), n.removeAllChild(), n[x(269)](e[x(252)]);
  const s = e[x(259)];
  s && (s.replaceChild(e, n), s[x(282)](), s[x(280)](!![])), n[x(290)]();
  let i = n[x(266)]().length;
  n.children[x(271)]((r) => {
    const a = x;
    r[a(273)][0] + 1 >= i && (r[a(273)][0] = 0), r[a(260)] == a(267) ? n[a(256)] = r : r[a(260)] == a(253) ? (n.beginArrow = r, r[a(261)] = n[a(261)]) : r[a(260)] == a(272) && (n[a(286)] = r, r.style = n[a(261)]);
  }), e.inLinks && e[x(257)][x(271)]((r) => {
    let o = r[x(262)];
    o.target = r;
  }), e.outLinks && e.outLinks[x(271)]((r) => {
    const a = x;
    let o = r[a(285)];
    o[a(274)] = r;
  });
}
function g0() {
  const n = ["setBegin", "setEnd", "1270882TFUpch", "textOffsetX", "updateChildrenDeep", "63uGkauL", "updatezIndex", "3OJUWgn", "81378SDEutr", "begin", "endArrow", "495400YMZvVg", "frozen", "draggable", "updatePoints", "children", "_#beginArrow", "userData", "textOffsetY", "label", "inLinks", "1574107eWUbGJ", "parent", "name", "style", "end", "3894327YziUXg", "24666940qIxOdF", "className", "getSegmentPoints", "_#label", "8TEvczp", "addChilds", "editable", "forEach", "_#endArrow", "origin", "target", "4020325SsotAi"];
  return g0 = function() {
    return n;
  }, g0();
}
function I0() {
  const n = ["string", "connectable", "forEach", "endArrow", "linkCtrlBox", "nodeCtrlBox", "frozen", "140073dTDUSI", "left", "圆角大小", "文本对齐", "setFolderValues", "bottom", "height", "末端样式", "__folders", "object", "Link", "draggable", "property", "zIndex", "textOffsetX", "replace", "editor", "lineDash", "左上角", "fontSize", "top", "className", "endOffset", "setCurrentObject", "dat", "selectedGroup", "borderRadius", "10,1", "resizeTo", "可拖拽", "gui", "textPosition", "basic", "8gLhemn", "textBaseline", "editable", "开始箭头大小", "bold", "结束箭头大小", "右下角", "addColor", "px ", "beginArrowSize", "style", "AutoFoldLink", "position", "getCtroller", "text", "none", "getFolder", "addFolder", "middle", "center", "186126dUavsn", "#000000", "圆弧方向", "setBeginArrow", "setValue", "边的条数", "normal", "visible", "italic", "color", "1036581TYoOqW", "字体名称", "lineCap", "imageSrc", "toLowerCase", "连线属性", "parentId", "newFolder", "Color", "__controllers", "可被编辑", "inputSystem", "arial", "图片路径", "整体透明度", "domElement", "基础属性", "1156800bzXBzW", "butt", "removeAll", "width", "592880jiLRwK", "borderWidth", "setEndArrow", "textAlign", "backgroundColor", "direction", "close", "节点属性", "CurveLink", "keys", "stage", "font", "update", "textOffsetY", "onChange", "endArrowSize", "可连线", "576738wSRLoU", "fontFamily", "左下角", "name", "beginArrow", "absolute", "右上角", "GUI", "createArrow", "showProperty", "label", "display", "rotation", "Arial", "open", "1,1", "init", "296001grJeJN", "square", "onFinishChange", "edges", "1,0", "show", "fontWeight", "绘制重叠部分", "isLink", "ArcLink", "attachTo", "1,10", "block", "folders", "add", "indexOf", "remove", "getValue", "isNode", "find", "hide", "getCtrollerValue", "开始偏移", "-15px", "right", "round"];
  return I0 = function() {
    return n;
  }, I0();
}
function r0(n, e) {
  const x = I0();
  return r0 = function(t, s) {
    return t = t - 377, x[t];
  }, r0(n, e);
}
const y = r0;
(function(n, e) {
  const x = r0, t = n();
  for (; []; )
    try {
      if (-parseInt(x(512)) / 1 + parseInt(x(495)) / 2 + -parseInt(x(394)) / 3 * (-parseInt(x(427)) / 4) + parseInt(x(478)) / 5 + -parseInt(x(447)) / 6 + parseInt(x(457)) / 7 + -parseInt(x(474)) / 8 === e)
        break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(I0, 176788);
class he {
  constructor(e, x) {
    const t = r0;
    this[t(410)] = e, this[t(418)] = x, this.gui = new x[t(502)](), this[t(403)], this[t(525)] = {};
  }
  [y(417)](e) {
    const x = y, t = this.editor, s = this.editor[x(488)];
    s[x(468)].pickedObject = e, s[x(419)][x(476)]()[x(526)](e), e[x(520)] ? t[x(391)][x(522)](e) : e.isNode && t[x(392)][x(522)](e), t[x(490)](), this[x(504)](e);
  }
  [y(504)](e) {
    const x = y;
    if (e == null)
      return;
    this[x(426)] = { id: e.id, name: "", parentId: e[x(463)], x: 1, y: 1, imageSrc: "", width: 1, height: 1, text: "", zIndex: 1, beginArrowSize: 0, endArrowSize: 0, beginOffset: 0, endOffset: 0, edges: 3, rotation: 0, className: x(438), direction: 1, frozen: ![], draggable: !![], editable: !![], connectable: !![] }, e.isLink && (e.beginArrow && e.beginArrow.visible && (this[x(426)][x(436)] = e.beginArrow[x(477)]), e[x(390)] && e[x(390)][x(454)] && (this.basic[x(493)] = e.endArrow[x(477)])), this[x(437)] = { lineDash: null, backgroundColor: null, textPosition: u.center, textAlign: "", borderRadius: 0, textBaseline: "", borderColor: null, color: x(448), borderWidth: 1, fontWeight: x(431), fontSize: "12", fontFamily: x(469), lineCap: x(475), globalAlpha: 1, textOffsetX: 0, textOffsetY: 0 };
    const t = this.basic, s = this[x(437)];
    Object[x(487)](t)[x(389)](function(o) {
      if (e[o] != null) {
        let d = e[o];
        o == "rotation" && (d = d * (180 / Math.PI)), t[o] = d;
      }
    }), Object[x(487)](s)[x(389)](function(o) {
      const d = x;
      let c = e[d(437)][o];
      if (e[d(437)][o] != null && (s[o] = c), o[d(527)](d(465)) != -1 && c && c[d(461)]) {
        let l = Ix[c[d(461)]()];
        l && (s[o] = l);
      }
    }), this[x(403)] == null && (this.object = e, this[x(511)]()), this.object = e;
    let i = e[x(437)][x(479)];
    i == null && (i = 1), s[x(479)] = i;
    let r = e[x(437)].font;
    r == null && (r = "normal 10px arial");
    const a = r.split(" ");
    s[x(518)] = a[0], s[x(413)] = a[1][x(409)]("px", ""), s[x(496)] = a[2], this[x(398)](t, s), e[x(379)] && this.getFolder(x(485)) != null ? (this[x(443)]("节点属性")[x(517)](), this.getFolder(x(462))[x(381)]()) : this[x(443)](x(462)) != null && (this[x(443)](x(462)).show(), this[x(443)](x(485))[x(381)]());
  }
  [y(464)](e) {
    const x = y, t = this[x(424)][x(444)](e);
    return this.folders[e] = t, t;
  }
  getFolder(e) {
    return this[y(525)][e];
  }
  [y(382)](e, x) {
    const t = y;
    return this.getCtroller(e, x)[t(378)]();
  }
  [y(440)](e, x) {
    const t = y;
    return this[t(443)](e)[t(466)][t(380)]((i) => i[t(406)] == x);
  }
  [y(398)](e, x) {
    const t = y;
    Object.keys(this[t(424)][t(402)]).forEach((i) => {
      const r = t;
      this.gui[r(402)][i].__controllers[r(389)](function(d) {
        const c = r;
        let l = d.property;
        e[l] != null ? d[c(451)](e[l]) : x[l] != null && d[c(451)](x[l]);
      });
    });
  }
  [y(511)]() {
    const e = y, x = this, t = this.editor, s = t.stage, i = t.currentLayer, r = this[e(426)], a = this[e(437)], o = [e(412), "顶部", e(501), "右边", "中心", "右边", e(497), "底部", e(433)], d = ["lt", "ct", "rt", "lm", e(446), "rm", "lb", "cb", "rb"], c = {};
    o.forEach(function(h, m) {
      c[h] = d[m];
    });
    let l = { 居中: "center", 左: e(395), 右: e(385) }, p = { 顶部: e(414), 中心: e(445), 底部: e(399) }, _ = { 正常: e(453), 加粗: e(431), 斜体: e(455) }, S = { 直线: e(404), 自动折线: e(438), 圆弧: e(521), 曲线: e(486), 贝塞尔曲线: "BezierLink" }, z = { 顺时针: -1, 逆时针: 1 }, A = { 实线: e(516), "虚线1,1": e(510), "虚线2,2": "2,2", "虚线3,3": "3,3", "虚线7,3": "7,3", "虚线3,7": "3,7", "虚线10,1": e(421), "虚线1,10": e(523) }, U = [e(508), "宋体", "Georgia", "Verdana", "仿宋", "隶书"], E = { 默认: e(475), 圆形: e(386), 矩形: e(513) };
    e(519);
    function b() {
      const h = e;
      let m = this[h(406)], I = this[h(378)]();
      m == "zIndex" ? i.updatezIndex() : m == h(507) && (I = I * (Math.PI / 180));
      let g = x[h(403)];
      if (g[h(520)]) {
        if (m == h(436))
          if (I != 0) {
            let k = g[h(499)];
            k == null ? (k = p0[h(503)](), g[h(450)](k)) : k[h(422)](I, I), k[h(517)]();
          } else
            g[h(499)] && g.beginArrow.hide();
        else if (m == h(493))
          if (I != 0) {
            let k = g[h(390)];
            k == null ? (k = p0.createArrow(), g[h(480)](k)) : k[h(422)](I, I), k[h(517)]();
          } else
            g[h(390)] && g[h(390)][h(381)]();
        else if (m == h(415)) {
          let k = I;
          if (g[h(415)] !== k) {
            let Z0 = xx(k), rx = new Z0();
            Ex(rx, g), g = rx, x[h(417)](g);
          }
        }
      }
      m != h(415) && (g[m] = I), g[h(460)] != null && (g[h(437)][h(482)] = null), t[h(490)]();
    }
    function H() {
      const h = e;
      let m = this.property, I = this[h(378)](), g = x[h(403)], k = g[h(437)];
      if (m == h(496) || m == h(518) || m == h(413)) {
        let Z0 = x[h(382)]("文本", h(518)) + " " + x.getCtrollerValue("文本", h(413)) + h(435) + x[h(382)]("文本", "fontFamily");
        m = h(489), I = Z0;
      } else
        m == h(411) ? I == null || I == "" ? I = null : typeof I == h(387) && (I = I.split(",")) : m == h(482) && x[h(403)][h(520)] && (I = null);
      g instanceof P && m[h(527)]("font") != -1 && g[h(505)] != null && (g[h(505)][h(437)][m] = I), k[m] = I, g[h(460)] != null && (g[h(437)][h(482)] = null), t[h(490)]();
    }
    const B = this[e(464)](e(473));
    B[e(526)](r, "id")[e(514)](b).name("ID"), B.add(r, "name")[e(514)](b)[e(498)](e(498)), B[e(526)](r, e(441)).onFinishChange(b)[e(498)]("文字"), B[e(526)](r, e(407), 0, 1e3, 1)[e(492)](b)[e(498)]("层级"), B[e(526)](r, e(393), ![])[e(492)](b)[e(498)]("锁定子元素"), B[e(526)](r, e(405), !![])[e(492)](b).name(e(423)), B.add(r, e(429), !![])[e(492)](b)[e(498)](e(467)), B[e(526)](r, e(388), !![]).onChange(b)[e(498)](e(494)), B.add(a, e(479), 0, 100)[e(492)](H)[e(498)]("边框/线宽度"), B[e(526)](a, e(411), A)[e(492)](H).name("虚实"), B[e(526)](a, "globalAlpha", 0, 1, 0.1)[e(492)](H)[e(498)](e(471)), B.open();
    const F = this[e(464)](e(485));
    F[e(526)](r, "imageSrc")[e(514)](b)[e(498)](e(470)), F[e(526)](r, "x")[e(514)](b), F[e(526)](r, "y")[e(514)](b), F[e(526)](r, e(477), 1).onFinishChange(b)[e(498)]("宽度"), F[e(526)](r, e(400), 1).onFinishChange(b)[e(498)]("高度"), F[e(526)](r, e(507), -360, 360, 1)[e(492)](b)[e(498)]("旋转度数"), F[e(526)](a, e(420))[e(492)](H).name(e(396)), F.add(r, e(515), 3, 24)[e(492)](b)[e(498)](e(452)), F.open();
    const K = this.newFolder(e(462));
    K[e(526)](r, e(415), S)[e(492)](b).name("线型"), K.add(r, e(483), z)[e(492)](b)[e(498)](e(449)), K[e(526)](r, e(436), 0, 50)[e(492)](b).name(e(430)), K[e(526)](r, e(493), 0, 50).onChange(b)[e(498)](e(432)), K[e(526)](r, "beginOffset", -30, 30)[e(492)](b)[e(498)](e(383)), K.add(r, e(416), -30, 30).onChange(b)[e(498)]("结束偏移"), K[e(526)](a, e(459), E)[e(492)](H).name(e(401)), K[e(509)]();
    const G = this[e(464)]("文本");
    G[e(526)](a, e(496), U).onChange(H)[e(498)](e(458)), G[e(526)](a, e(413), 1, 1e3)[e(492)](H)[e(498)]("大小"), G[e(526)](a, e(518), _)[e(492)](H)[e(498)]("字体重量"), G[e(434)](a, e(456)).onChange(H)[e(498)]("颜色"), G.add(a, e(425), c)[e(492)](H)[e(498)]("文本位置"), G.add(a, e(481), l)[e(492)](H)[e(498)](e(397)), G.add(a, e(428), p)[e(492)](H).name("基线对齐"), G.add(a, e(408))[e(492)](b).name("水平偏移量"), G[e(526)](a, e(491)).onChange(b).name("垂直偏移量");
    let J = this[e(424)][e(472)];
    J[e(377)](), s.layersContainer.appendChild(J), J.style[e(439)] = e(500), J.style[e(385)] = e(384), J[e(437)][e(414)] = "0px", J.style[e(407)] = 1e3;
  }
  open() {
    this[y(424)].open();
  }
  [y(484)]() {
    const e = y;
    this[e(424)][e(484)]();
  }
  hide() {
    const e = y;
    this[e(424)][e(472)].style[e(506)] = e(442);
  }
  [y(517)]() {
    const e = y;
    this.gui[e(472)][e(437)].display = e(524);
  }
}
function a0(n, e) {
  const x = y0();
  return a0 = function(t, s) {
    return t = t - 147, x[t];
  }, a0(n, e);
}
const W = a0;
(function(n, e) {
  const x = a0, t = n();
  for (; []; )
    try {
      if (-parseInt(x(153)) / 1 + -parseInt(x(178)) / 2 * (parseInt(x(154)) / 3) + parseInt(x(182)) / 4 + -parseInt(x(172)) / 5 * (-parseInt(x(177)) / 6) + -parseInt(x(175)) / 7 * (-parseInt(x(181)) / 8) + parseInt(x(159)) / 9 + -parseInt(x(147)) / 10 === e)
        break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(y0, 920402);
function y0() {
  const n = ["transformPoint", "1px solid black", "pickedObject", "preventDefault", "resizeTo", "name", "selectedGroup.length is 0!", "translateWith", "inputSystem", "n-resize", "length", "mouseenterHandler", "10BBUhNb", "dragBegin", "mousedownHandler", "100849LGVOCj", "mouseoutHandler", "1929636sRTapq", "26266nagTSv", "css", "selectedGroup", "312tlbCqZ", "2723032DRDpAs", "resizeWith", "positionToLocalPoint", "sw-resize", "updateSize", "19607540TFlTtK", "editor", "stage", "mousedragHandler", "getNoChildrensObjects", "nodeCtrlBox", "9224pfqlMJ", "15MLvOAb", "w-resize", "ne-resize", "adjustFixedDirection", "nw-resize", "9631818TasJpY"];
  return y0 = function() {
    return n;
  }, y0();
}
class Hx extends Q {
  constructor(e, x) {
    const t = a0;
    super(), this.isNodeResizePoint = !![], this[t(173)] = ![], this.nodeCtrlBox = e, this[t(148)] = e.editor, this.stage = this.editor[t(149)], this[t(180)] = this[t(149)][t(180)], this[t(164)](12, 12), this[t(179)]({ border: t(161), backgroundColor: "orange" }), this.name = x;
  }
  [W(171)]() {
  }
  mousemoveHandler() {
    const e = W;
    let x, t = this.name;
    t == u.lt ? x = e(158) : t == u.ct ? x = e(169) : t == u.rt ? x = e(156) : t == u.lm ? x = e(155) : t == u.rm ? x = "e-resize" : t == u.lb ? x = e(185) : t == u.cb ? x = "s-resize" : t == u.rb && (x = "se-resize"), this.editor[e(149)].setCursor(x);
  }
  [W(176)](e) {
  }
  [W(174)](e) {
    e.preventDefault();
  }
  mouseupHandler(e) {
    e[W(163)]();
  }
  [W(150)](e) {
    const x = W;
    e[x(163)]();
    let t = this[x(152)], s = t[x(148)], i = s[x(149)], r = this[x(165)];
    if (this[x(180)][x(151)]()[x(170)] == 0)
      throw new Error(x(166));
    let d = i[x(168)][x(162)], c = d.stageToLocalXY(e.x, e.y), l = d[x(184)](r), p = c.x - l.x, _ = c.y - l.y;
    r == u.lt ? (p = -p, _ = -_) : r == u.ct ? (p = 0, _ = -_) : r == u.rt ? _ = -_ : r == u.lm ? (p = -p, _ = 0) : r == u.rm ? _ = 0 : r == u.lb ? p = -p : r == u.cb ? p = 0 : r == u.rb, this[x(157)](d, { dx: p, dy: _ }, r);
  }
  [W(157)](e, x, t) {
    const s = W;
    let i = yx[t], r = e[s(184)](i);
    r = e[s(160)](r), e[s(183)](x.dx, x.dy);
    let a = e[s(184)](i);
    a = e[s(160)](a);
    let o = r.x - a.x, d = r.y - a.y;
    e[s(167)](o, d), this[s(152)][s(186)]();
  }
}
function m0() {
  const n = ["5700520HPvvUl", "mousemoveHandler", "css", "mousedownHandler", "center", "4478677aLulcf", "name", "rotation", "1223210ciEBlG", "3MYGwCJ", "resizeTo", "mousedragHandler", "preventDefault", "mouseupHandler", "length", "editor", "move", "positionToLocalPoint", "rotate", "inputSystem", "getStageTransform", "selectedGroup.length is 0!", "stage", "1234702kXUuwA", "black", "parent", "50929YjhYyp", "mouseInitAngle", "4QDmKfX", "orange", "255792ftLGJO", "auto", "updateSize", "getNoChildrensObjects", "selectedGroup", "point", "pickedObject", "elementInitAngle", "7373358DwqoyU"];
  return m0 = function() {
    return n;
  }, m0();
}
const R = Z;
(function(n, e) {
  const x = Z, t = n();
  for (; []; )
    try {
      if (parseInt(x(221)) / 1 + -parseInt(x(218)) / 2 * (parseInt(x(204)) / 3) + -parseInt(x(184)) / 4 * (-parseInt(x(203)) / 5) + -parseInt(x(186)) / 6 + parseInt(x(200)) / 7 + -parseInt(x(195)) / 8 + parseInt(x(194)) / 9 === e)
        break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(m0, 382096);
function ox(n, e) {
  const x = Z;
  let t = e[x(214)], s = n[x(212)](x(199));
  return s = n[x(215)]()[x(191)](s), Math.atan2(t.y - s.y, t.x - s.x);
}
class Bx extends sx {
  constructor(e, x) {
    const t = Z;
    super(), this.isNodeRotatePoint = !![], this.nodeCtrlBox = e, this[t(210)] = e[t(210)], this[t(217)] = this[t(210)][t(217)], this[t(190)] = this[t(217)][t(190)], this[t(197)]({ lineWidth: 1, strokeStyle: t(219), fillStyle: t(185) }), this[t(205)](14, 14), this[t(201)] = x;
  }
  [R(196)]() {
    const e = R;
    this[e(217)].setCursor(e(211));
  }
  [R(198)](e) {
    const x = R;
    e[x(207)]();
    let t = this[x(217)];
    if (this[x(190)][x(189)]()[x(209)] == 0)
      throw new Error(x(216));
    let i = t.inputSystem.pickedObject;
    this[x(193)] = i[x(202)], this[x(183)] = ox(i, t);
  }
  [R(208)](e) {
    const x = R;
    this[x(217)].setCursor(x(187)), e[x(207)]();
  }
  [R(206)](e) {
    const x = R;
    e.preventDefault();
    let t = this[x(220)], s = t.editor, i = s[x(217)];
    if (s[x(217)][x(190)][x(189)]()[x(209)] == 0)
      throw new Error(x(216));
    let o = i[x(214)][x(192)], d = ox(o, i) - this[x(183)];
    o[x(213)](this[x(193)] + d), t[x(188)]();
  }
}
function Z(n, e) {
  const x = m0();
  return Z = function(t, s) {
    return t = t - 183, x[t];
  }, Z(n, e);
}
const L = o0;
(function(n, e) {
  const x = o0, t = n();
  for (; []; )
    try {
      if (-parseInt(x(229)) / 1 + parseInt(x(224)) / 2 + -parseInt(x(230)) / 3 + -parseInt(x(249)) / 4 + parseInt(x(254)) / 5 + -parseInt(x(259)) / 6 * (parseInt(x(252)) / 7) + parseInt(x(256)) / 8 * (parseInt(x(258)) / 9) === e)
        break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(w0, 173183);
function o0(n, e) {
  const x = w0();
  return o0 = function(t, s) {
    return t = t - 224, x[t];
  }, o0(n, e);
}
class Ox extends Q {
  constructor(e, x = 0, t = 0, s = 1, i = 1) {
    const r = o0;
    super(null, x, t, s, i), this[r(237)] = Q0[r(245)], this.editor = e, this[r(234)] = ![];
  }
  [L(226)](e) {
  }
  [L(235)](e) {
  }
  [L(231)](e) {
    const x = L;
    this[x(232)]();
    let t = e[x(242)](), s = this;
    t.forEach((i) => {
      const r = x;
      if (s[r(233)](i), i == "rotate") {
        let a = function() {
          return s.positionToLocalPoint(u.ct);
        }, o = s[r(233)](r(244)), d = new P(null, o, a);
        d[r(247)]({ strokeStyle: r(236) }), d[r(234)] = ![], s[r(248)](d);
      }
    });
  }
  [L(233)](e) {
    const x = L;
    let t;
    return e == x(244) ? t = new Bx(this, e) : t = new Hx(this, e), this[x(248)](t), t;
  }
  [L(262)](e) {
    const x = L;
    if (e[x(246)] != !![])
      throw new Error(x(261));
    this[x(260)] !== null && this[x(231)](e), this.currNode = e, this[x(238)](), this.show();
  }
  [L(238)]() {
    const e = L;
    let x = this[e(260)];
    if (x == null || x[e(240)] == ![] || x[e(251)] == null) {
      this[e(260)] = null, this[e(255)]();
      return;
    }
    this[e(227)](x), this[e(243)]();
  }
  [L(243)]() {
    const e = L;
    let x = this.getChildren();
    for (var t = 0; t < x.length; t++) {
      let s = x[t];
      if (s instanceof P)
        continue;
      let i;
      s.name == e(244) ? (i = this[e(253)](u.ct), i.y -= 30) : i = this.positionToLocalPoint(s[e(225)]), s instanceof Q && s[e(239)](i.x, i.y);
    }
  }
  [L(227)](e) {
    const x = L;
    let t = e[x(250)](), s = t[x(257)](e[x(253)](u[x(228)])), i = t[x(257)](e[x(253)](u.rm)), r = Math[x(241)](i.y - s.y, i.x - s.x);
    t.rotate(-r);
    let a = t.point(e[x(253)](u.center)), o = t[x(257)](e[x(253)](u.rb)), d = (o.x - a.x) * 2, c = (o.y - a.y) * 2;
    this.resizeTo(d, c), this[x(244)](r), this[x(239)](s.x, s.y);
  }
}
function w0() {
  const n = ["attach not Node or not editable", "attachTo", "26896rMTGhi", "name", "mouseoutStageHandler", "viewClone", "center", "164865KvRvlL", "543870WTkXKj", "initCtrlPoint", "removeAllChild", "createCtrlPoint", "mouseEnabled", "mouseenterStageHandler", "gray", "zIndex", "updateSize", "translateTo", "isSelected", "atan2", "getCtrlPoints", "initPoints", "rotate", "NodeCtrlBox", "editable", "css", "addChild", "535260WQYISl", "getStageTransform", "parent", "10843gueEGO", "positionToLocalPoint", "110400oMHsBG", "hide", "32RMYXfM", "point", "1929870gEdwwW", "930rWKNre", "currNode"];
  return w0 = function() {
    return n;
  }, w0();
}
const N = c0;
(function(n, e) {
  const x = c0, t = n();
  for (; []; )
    try {
      if (-parseInt(x(174)) / 1 + parseInt(x(141)) / 2 * (-parseInt(x(197)) / 3) + parseInt(x(198)) / 4 * (-parseInt(x(147)) / 5) + parseInt(x(180)) / 6 * (parseInt(x(169)) / 7) + parseInt(x(189)) / 8 + parseInt(x(187)) / 9 * (-parseInt(x(151)) / 10) + parseInt(x(146)) / 11 === e)
        break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(C0, 639565);
class jx extends sx {
  constructor(e) {
    const x = c0;
    super(), this[x(191)] = !![], this.fillColor = x(149), this[x(160)](7), this[x(138)] = e, this[x(157)] = this.linkCtrlBox[x(157)];
    let t = this;
    this[x(196)]({ lineWidth: 1, strokeStyle: x(142), fillStyle: t[x(158)] });
  }
  [N(186)]() {
    const e = N;
    this[e(196)]({ strokeStyle: e(143), fillStyle: e(143) });
  }
  unActive() {
    const e = N;
    let x = this[e(158)];
    this[e(196)]({ strokeStyle: e(190), fillStyle: x });
  }
  [N(161)]() {
    const e = N;
    this[e(157)][e(192)][e(163)](), this.editor[e(168)][e(175)](O[e(155)]);
    let x = this[e(203)], t = x[e(203)], s = t.stage, i = x.attachedLink;
    if (i instanceof X) {
      let r, a = i[e(150)][0], o = i[e(150)][1], d = i.points[4], c = i[e(150)][5];
      this[e(172)] == u[e(185)] ? $0(i[e(179)](0, 0.5)) ? r = o.x > a.x ? O[e(193)] : O.e_resize : r = o.y > a.y ? O[e(199)] : O[e(170)] : this[e(172)] == u.fold2 ? $0(i.getK(4, 0.5)) ? r = d.x > c.x ? O.w_resize : O[e(156)] : r = d.y > c.y ? O.s_resize : O[e(170)] : this[e(172)] == u[e(201)] && ($0(i.getK(2, 0.5)) ? r = O[e(199)] : r = O[e(156)]), r && s[e(175)](r);
    }
  }
  [N(159)](e) {
    const x = N;
    this[x(157)][x(168)][x(175)](O[x(152)]), this[x(164)] = null, e.preventDefault();
  }
  [N(177)](e) {
    const x = N;
    e[x(195)]();
    let t = this[x(203)], s = t[x(203)], i = s[x(168)];
    const r = i.editor;
    let a = t.attachedLink;
    r.anchorBox[x(163)]();
    const o = this[x(172)];
    let d = a[x(173)](i[x(178)].x, i[x(178)].y);
    if (e.isDragStart && this.active(), o == u[x(181)]) {
      let c = a[x(162)]();
      c.x += d.x - c.x, c.y += d.y - c.y, a instanceof X && a.resetOffset(), a[x(145)](c), this[x(164)] = r.anchorBox[x(188)](a, null, null);
    } else if (o == u[x(171)]) {
      let c = a[x(176)]();
      c.x += d.x - c.x, c.y += d.y - c.y, a instanceof X && a[x(183)](), a[x(154)](c), this[x(164)] = r[x(192)].getConnectInfo(a, null, null);
    }
    if (a instanceof mx)
      this.name == u.ctrlPoint && (a.ctrlPoint == null ? a[x(182)] = a[x(165)](o) : (a[x(182)].x += d.x - a[x(182)].x, a[x(182)].y += d.y - a[x(182)].y));
    else if (a instanceof wx)
      o == u.ctrlPoint1 ? a[x(202)] == null ? a[x(202)] = a[x(165)](o) : (a[x(202)].x += d.x - a[x(202)].x, a[x(202)].y += d.y - a[x(202)].y) : o == u.ctrlPoint2 && (a[x(184)] == null ? a.ctrlPoint2 = a[x(165)](o) : (a.ctrlPoint2.x += d.x - a[x(184)].x, a[x(184)].y += d.y - a.ctrlPoint2.y));
    else if (a instanceof X) {
      if (o == u[x(185)]) {
        let c = a.positionToLocalPoint(u[x(185)]);
        const l = d.x - c.x, p = d.y - c.y;
        a[x(200)](l, p);
      } else if (o == u[x(153)]) {
        let c = a[x(165)](u[x(153)]);
        const l = d.x - c.x, p = d.y - c.y;
        a[x(167)](l, p);
      } else if (o == u[x(201)]) {
        let c = a.positionToLocalPoint(u[x(201)]);
        const l = d.x - c.x, p = d.y - c.y;
        a[x(148)](l, p);
      }
    }
  }
  [N(166)](e) {
    const x = N;
    e[x(195)](), this[x(140)]();
    let t = this[x(203)], s = t.attachedLink;
    if (this.canConnectEndpoint != null) {
      let i = this[x(164)], r = i.target;
      if (r[x(139)]) {
        let a = r;
        a[x(171)][x(194)] !== s && a[x(181)][x(194)] !== s && (this[x(172)] == u.begin ? s[x(145)](a, i) : this.name == u.end && s[x(154)](a, i), s[x(144)]());
      } else
        this[x(172)] == u[x(181)] ? s[x(145)](r, i) : this[x(172)] == u.end && s.setEnd(r, i), s.upgradeParent();
      this.canConnectEndpoint = null;
    }
  }
}
function C0() {
  const n = ["name", "stageToLocalXY", "211016SxjNJN", "setCursor", "getEndPoint", "mousedragHandler", "inputSystem", "getK", "431352dsRjHg", "begin", "ctrlPoint", "resetOffset", "ctrlPoint2", "fold1", "active", "79902JPjKlt", "getConnectInfo", "9304072NaTFEz", "rgba(0,0,0,0.9)", "isConnectPoint", "anchorBox", "w_resize", "target", "preventDefault", "css", "3nBeyPb", "4imwPfU", "s_resize", "setFold1Offset", "center", "ctrlPoint1", "parent", "linkCtrlBox", "isLink", "unActive", "240052sgrIdk", "gray", "rgba(0,0,0,0.1)", "upgradeParent", "setBegin", "4746555mqjevp", "2058515rTSMjQ", "setCenterOffset", "pink", "points", "320VfnBxm", "corosshair", "fold2", "setEnd", "move", "e_resize", "editor", "fillColor", "mousedownHandler", "setRadius", "mousemoveHandler", "getBeginPoint", "hide", "canConnectEndpoint", "positionToLocalPoint", "mouseupHandler", "setFold2Offset", "stage", "7ULFmDe", "n_resize", "end"];
  return C0 = function() {
    return n;
  }, C0();
}
function c0(n, e) {
  const x = C0();
  return c0 = function(t, s) {
    return t = t - 138, x[t];
  }, c0(n, e);
}
const T = $;
(function(n, e) {
  const x = $, t = n();
  for (; []; )
    try {
      if (-parseInt(x(514)) / 1 * (-parseInt(x(473)) / 2) + -parseInt(x(506)) / 3 * (parseInt(x(474)) / 4) + parseInt(x(491)) / 5 * (-parseInt(x(500)) / 6) + -parseInt(x(523)) / 7 * (-parseInt(x(497)) / 8) + -parseInt(x(467)) / 9 + parseInt(x(503)) / 10 + parseInt(x(487)) / 11 * (parseInt(x(480)) / 12) === e)
        break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(v0, 781534);
function v0() {
  const n = ["translateTo", "45010OufXMA", "Link", "updateCtrlPoints", "pickedObject", "12970809dbAFCR", "setEnd", "begin", "point", "setBegin", "zIndex", "434gWZtYE", "76vVGIdn", "object", "createNodeResizePoint", "length", "hideAllPoint", "isLink", "12fseZHF", "fillColor", "positionToLocalPoint", "addChild", "show", "updateSize", "ctrlPoint2", "29591881pkjJTj", "updateFllow", "name", "stage", "200290yIpIYl", "ctrlPointStyle", "init", "css", "ctrlPoint1", "attachTo", "104Ujedhi", "inputSystem", "background", "222KiBDcT", "gray", "orange", "334300HVTmDg", "join", "draw", "52977DTiYXE", "getAnchorPoints", "hide", "ctrlPoint", "removeAllChild", "center", "visible", "getStageTransform", "5683pQEFda", "isNode", "anchorNameStr", "end", "isPoint", "editor", "ctrlPointInfo", "attachedLink"];
  return v0 = function() {
    return n;
  }, v0();
}
function $(n, e) {
  const x = v0();
  return $ = function(t, s) {
    return t = t - 467, x[t];
  }, $(n, e);
}
class zx extends Q {
  constructor(e) {
    const x = $;
    super(), this.ctrlPointInfo = {}, this[x(472)] = Q0.LinkCtrlBox, this[x(519)] = e, this[x(492)] = new Cx({}), this.init();
  }
  mouseoutStageHandler(e) {
  }
  mouseenterStageHandler(e) {
  }
  createNodeResizePoint(e) {
    const x = $;
    let t = new jx(this);
    return t[x(489)] = e, this[x(483)](t), t;
  }
  [T(493)]() {
    const e = T;
    this[e(520)] = {};
  }
  [T(505)](e) {
    const x = T;
    this[x(512)] != ![] && this[x(485)]();
  }
  [T(485)]() {
    const e = T, x = this.editor[e(490)][e(498)][e(526)];
    this[e(521)] ? this.attachedLink.parent == null || x == null || this[e(521)] != x ? (this[e(521)] = null, this[e(508)]()) : this.attachTo(this[e(521)]) : this[e(508)]();
  }
  [T(525)](e) {
    const x = T;
    this[x(521)] = e;
    let t = e.getAnchorPoints();
    this[x(516)] = t[x(504)](",");
    for (let s = 0; s < t[x(477)]; s++) {
      let i = t[s], r = this.ctrlPointInfo[i];
      if (r == null) {
        if (r = this[x(476)](i), i != u.begin && i != u.end && (r[x(481)] = this[x(492)][x(499)], r[x(494)]({ strokeStyle: x(501), fillStyle: x(502) }), r.isConnectPoint = ![]), i == x(495)) {
          let a = new P();
          a[x(494)]({ lineDash: [2, 2] }), a[x(471)](r, x(511));
          let o = this[x(520)][x(469)];
          a[x(468)](o, x(511)), this[x(483)](a), this[x(520)][i + x(524)] = a;
        } else if (i == x(486)) {
          let a = new P();
          a[x(494)]({ lineDash: [2, 2] }), a.setBegin(r, "center");
          let o = this[x(520)][x(517)];
          a[x(468)](o, x(511)), this[x(483)](a), this[x(520)][i + x(524)] = a;
        } else if (i == x(509)) {
          let a = new P();
          a.css({ lineDash: [2, 2] }), a.setBegin(r, x(511));
          let o = this[x(520)].begin;
          a[x(468)](o, x(511)), this[x(483)](a), this[x(520)][i + x(524)] = a;
        }
        this[x(520)][i] = r;
      }
    }
  }
  [T(478)]() {
    let e = this.ctrlPointInfo;
    for (var x in e)
      e[x].hide();
  }
  updateFllow() {
    const e = T, x = this[e(521)];
    let t = x[e(513)](), s = x[e(507)]();
    this[e(478)]();
    for (let i = 0; i < s[e(477)]; i++) {
      const r = s[i];
      let a = this[e(520)][r], o = x[e(482)](r);
      ix(o, x, r);
      let d = t[e(470)](o);
      a[e(522)](d.x, d.y), a[e(484)]();
      let c = this[e(520)][r + e(524)];
      c && c[e(484)]();
    }
  }
  [T(496)](e) {
    const x = T;
    if (e.parent != null) {
      if (this[x(521)] === e) {
        e instanceof X && e.getAnchorPoints()[x(504)](",") != this.anchorNameStr && this[x(525)](e), this[x(488)](), this[x(484)]();
        return;
      }
      this[x(520)] = {}, this[x(510)](), this[x(525)](e), this[x(488)](), this[x(484)]();
    }
  }
  [T(518)](e) {
    const x = T;
    return e[x(515)] || e[x(479)] ? ![] : typeof e == x(475) && e.x != null && e.y != null;
  }
}
function l0(n, e) {
  const x = k0();
  return l0 = function(t, s) {
    return t = t - 288, x[t];
  }, l0(n, e);
}
const v = l0;
(function(n, e) {
  const x = l0, t = n();
  for (; []; )
    try {
      if (-parseInt(x(323)) / 1 * (parseInt(x(297)) / 2) + parseInt(x(289)) / 3 + -parseInt(x(304)) / 4 * (parseInt(x(300)) / 5) + parseInt(x(309)) / 6 * (-parseInt(x(294)) / 7) + -parseInt(x(332)) / 8 + parseInt(x(311)) / 9 + parseInt(x(327)) / 10 === e)
        break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(k0, 570167);
function k0() {
  const n = ["showTip", "16nQtbcA", "name", "min", "resizeTo", "css", "59310QGRysp", "link", "549216eXRKfM", "strokeAndFill", "setCursor", "setIntersect", "end", "newLink", "width", "buttons", "red", "preventDefault", "parent", "mousedragHandler", "220oDaRzY", "intersect", "editor", "endpoint", "12410570pZFwSn", "stage", "unactive", "intersectNode", "anchorBox", "721512rteAcy", "beginPath", "record", "mouseupHandler", "endAngle", "inputSystem", "gray", "upgradeParent", "mousedownHandler", "auto", "mouseoutHandler", "画线开始", "mouseEnabled", "3001902QLgkIc", "isDragStart", "draw", "crosshair", "active", "721hauovE", "closePath", "getConnectInfo", "3004AkTYjk", "assert", "setEnd", "367205cnSlOW", "isActive", "height"];
  return k0 = function() {
    return n;
  }, k0();
}
class tx extends sx {
  constructor(e, x = 0, t = 0, s = 1, i = 1) {
    const r = l0;
    super(null, x, t, s, i), this[r(301)] = ![], this.anchorBox = e, this[r(325)] = e[r(325)], this[r(328)] = this[r(325)][r(328)], this[r(307)](15, 15), this[r(329)](), this[r(308)]({ lineWidth: 1, strokeStyle: r(338) });
  }
  [v(314)](e) {
    const x = v;
    this[x(324)] = e;
  }
  mouseenterHandler(e) {
    this[v(293)]();
  }
  [v(342)](e) {
    this[v(329)]();
  }
  [v(340)](e) {
    const x = v;
    e.preventDefault(), this[x(325)][x(303)](x(343)), this[x(325)][x(328)][x(313)](x(292)), this.link = null;
  }
  [v(322)](e) {
    const x = v;
    if (e[x(318)] == 2)
      return;
    e[x(320)](), this.editor[x(328)][x(313)](x(341));
    const t = this.editor, s = t[x(328)];
    this.hide();
    const i = this[x(331)].target;
    if (e[x(290)]) {
      let r = function() {
        const d = x;
        return o[d(321)].stageToLocalXY(s[d(337)].x, s.inputSystem.y);
      };
      console[x(298)](this.link == null, this[x(310)]);
      let a;
      if (this[x(305)] == x(330)) {
        let d = this[x(331)][x(324)];
        a = new ux(i, d.rate, d.segIndex);
      } else
        a = new px(i, this[x(305)]);
      this[x(325)][x(334)]("划线");
      const o = t[x(316)](null, i, null, a);
      o[x(288)] = ![], this[x(310)] = o, o[x(299)](r);
      return;
    }
    ix(this[x(310)][x(315)], this[x(310)]), this.endpoint = this[x(331)][x(296)](this[x(310)], i, this[x(310)].end.target);
  }
  [v(335)](e) {
    const x = v;
    if (e.isDragEnd != ![]) {
      if (this.show(), this[x(325)].update(), this.editor.stage[x(313)](x(341)), this[x(310)] != null) {
        let t, s;
        if (this[x(326)] != null)
          this[x(310)].mouseEnabled = !![], t = this[x(326)], s = this.endpoint;
        else {
          let i = this[x(310)][x(315)];
          i instanceof vx && (t = i.fn(), this[x(310)][x(288)] = !![]);
        }
        t && (this[x(310)][x(299)](t, s), this[x(310)][x(339)](), this[x(325)].recordEnd("划线"));
      }
      this[x(310)] = null;
    }
  }
  [v(291)](e) {
    const x = v;
    this.radius = Math[x(306)](this.width * 0.5, this[x(302)] * 0.5), e[x(333)]();
    let t = this[x(317)] / 2, s = this[x(302)] / 2;
    e.arc(t, s, this.radius, this.beginAngle, this[x(336)]), e[x(295)](), this[x(312)](e), this.mousePickupPath(e);
  }
  [v(293)]() {
    const e = v;
    this.isActive = !![], this[e(308)]({ fillStyle: e(319) });
  }
  [v(329)]() {
    const e = v;
    this[e(301)] = ![], this.css({ strokeStyle: e(338), fillStyle: "rgba(255,255,255,0.6)" });
  }
}
function S0() {
  const n = ["keyboard", "point", "update", "intersectNode", "anchorName", "nodeDist", "setTarget", "stage", "length", "inputSystem", "editor", "show", "439395NKjaKH", "ctrlIntersectNode", "_findChildren", "rate", "intersect", "translateTo", "setIntersect", "mouseoutStageHandler", "5061763smqtCd", "2332FptgpC", "getAnchorPointBy", "unactive", "874746usvTjp", "231oozrnw", "anchorDist", "getConnectInfo", "isKeydown", "mouseenterStageHandler", "32274400STCRxs", "none", "object", "getObjectsIntersect", "connectable", "fold2", "11198ayZGJy", "11119984LNSVEt", "name", "target", "currentLayer", "114DjjOig", "activePoint", "clearTarget", "anchorBox", "children", "forEach", "Control", "189clNBTy", "createAnchorPoint", "removeAllChild", "active", "hide"];
  return S0 = function() {
    return n;
  }, S0();
}
const C = d0;
(function(n, e) {
  const x = d0, t = n();
  for (; []; )
    try {
      if (-parseInt(x(186)) / 1 * (-parseInt(x(197)) / 2) + parseInt(x(209)) / 3 * (parseInt(x(182)) / 4) + parseInt(x(226)) / 5 * (-parseInt(x(202)) / 6) + -parseInt(x(181)) / 7 + -parseInt(x(198)) / 8 + parseInt(x(185)) / 9 + parseInt(x(191)) / 10 === e)
        break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(S0, 871924);
function d0(n, e) {
  const x = S0();
  return d0 = function(t, s) {
    return t = t - 180, x[t];
  }, d0(n, e);
}
class Nx extends Q {
  constructor(e, x = 0, t = 0, s = 1, i = 1) {
    const r = d0;
    super(null, x, t, s, i), this[r(187)] = 10, this[r(219)] = 10, this[r(224)] = e;
  }
  [C(180)](e) {
  }
  [C(190)](e) {
  }
  clearTarget() {
    const e = C;
    this.target = null, this.removeAllChild(), this[e(213)]();
  }
  [C(220)](e, x) {
    const t = C;
    if (this[t(200)] !== e) {
      if (this[t(200)] = e, this[t(211)](), e != null) {
        let i = e.getAnchorPoints();
        for (var s = 0; s < i.length; s++) {
          let r = i[s];
          e instanceof X && (r == "fold1" || r == t(196)) || this.createAnchorPoint(r);
        }
        this[t(227)] = this[t(210)](t(217)), this[t(227)][t(213)]();
      }
      this[t(216)]();
    }
    this[t(203)](x);
  }
  [C(203)](e) {
    const x = C;
    this[x(206)][x(207)]((s) => {
      const i = x;
      s[i(199)] == e ? s[i(212)]() : s[i(184)]();
    }), this[x(227)][x(213)](), this.show();
  }
  [C(232)](e) {
    const x = C;
    if (this[x(230)] = e, e == null) {
      this.ctrlIntersectNode.hide();
      return;
    }
    let t = e[x(229)], s = e.segIndex;
    const i = this[x(200)];
    let r = i.getLocalPoint(t, s), o = i.getStageTransform()[x(215)](r);
    this.ctrlIntersectNode.translateTo(o.x, o.y), this[x(227)][x(225)]();
  }
  [C(216)]() {
    const e = C;
    if (this[e(200)] == null) {
      this.hide();
      return;
    }
    const x = this[e(200)], t = x.getStageTransform(), s = this.children;
    for (let i = 0; i < s[e(222)]; i++) {
      const r = s[i];
      if (r[e(199)] != e(217)) {
        let a = x.positionToLocalPoint(r[e(199)]), o = t[e(215)](a);
        r[e(231)](o.x, o.y);
      }
    }
  }
  [C(210)](e) {
    const x = C, t = new tx(this);
    return t.name = e, t[x(205)] = this, this.addChild(t), t;
  }
  [C(183)](e, x) {
    const t = C, s = this[t(206)];
    for (let i = 0; i < s[t(222)]; i++)
      if (s[i][t(199)] == x)
        return s[i];
    return null;
  }
  getObjectsIntersect(e) {
    const x = C;
    let t = this[x(224)][x(221)], s = { x: t[x(223)].x, y: t[x(223)].y };
    return kx(s, e, this.nodeDist);
  }
  [C(188)](e, x, t) {
    const s = C, i = this[s(224)], r = this, a = i[s(221)], o = { x: a.inputSystem.x, y: a[s(223)].y }, d = i[s(201)], c = i[s(214)][s(189)](s(208)), l = (E) => E !== e && E !== t && E.mouseEnabled && E[s(195)], p = d[s(228)](s(192), l, !![]), _ = Sx(o, p, this[s(187)]);
    let S = null, z, A, U;
    if (_ != null)
      A = _[s(193)], U = _[s(218)], z = new px(A, U), r[s(220)](A, U);
    else if (c) {
      const E = this[s(194)](p);
      E != null ? (A = E[s(193)], r.setTarget(A, U), z = new ux(A, E[s(229)], E.segIndex), this[s(232)](E)) : r[s(204)]();
    } else
      r[s(204)]();
    return A != null && A !== e && A !== t && (S = z), S;
  }
}
const w = x0;
function L0() {
  const n = ["redo", "redoHistory", "editor", "type", "3966FlCgTe", "cut", "undo", "10YLgxYd", "1241388eXxOxE", "227576gMsTFQ", "尺寸修改", "连线调整", "位置改变", "undoHistory", "剪切粘贴", "添加图元", "pop", "239223cTHqdZ", "281607QYCXdz", "copy", "undoFn", "push", "length", "458540LvZazv", "redoFn", "13670YwBMAv", "1827xDVfju", "4mXztKl"];
  return L0 = function() {
    return n;
  }, L0();
}
(function(n, e) {
  const x = x0, t = n();
  for (; []; )
    try {
      if (parseInt(x(235)) / 1 + parseInt(x(212)) / 2 + parseInt(x(234)) / 3 * (-parseInt(x(216)) / 4) + parseInt(x(214)) / 5 + parseInt(x(221)) / 6 * (-parseInt(x(215)) / 7) + parseInt(x(226)) / 8 + -parseInt(x(225)) / 9 * (parseInt(x(224)) / 10) === e)
        break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(L0, 151864);
const Dx = { cut: w(222), copy: w(236), delete: "删除", modify: "修改", addChild: w(232), pasteCopy: "辅助粘贴", pasteCut: w(231), resize: w(227), rotate: "旋转", dragNodeOrLink: w(229), modifyLink: w(228) };
function x0(n, e) {
  const x = L0();
  return x0 = function(t, s) {
    return t = t - 210, x[t];
  }, x0(n, e);
}
class Mx {
  constructor(e, x, t) {
    const s = w;
    this[s(220)] = e, this.undoFn = t, this[s(213)] = x;
  }
  [w(217)]() {
    this[w(213)]();
  }
  [w(223)]() {
    this[w(237)]();
  }
}
class Fx extends EventTarget {
  constructor(e) {
    const x = w;
    super(), this[x(219)] = e, this[x(230)] = [], this.redoHistory = [];
  }
  [w(210)](e, x, t) {
    const s = w;
    let i = new Mx(e, x, t);
    return i.editor = this.editor, this[s(218)][s(211)] = 0, this.undoHistory.push(i), i;
  }
  [w(223)]() {
    const e = w;
    if (this[e(230)][e(211)] == 0)
      return null;
    let x = this.undoHistory[e(233)]();
    return x.undo(), this[e(218)][e(210)](x), x;
  }
  [w(217)]() {
    const e = w;
    if (this[e(218)][e(211)] == 0)
      return null;
    let x = this[e(218)][e(233)]();
    return x[e(217)](), this[e(230)].push(x), x;
  }
  undoAll(e = 500) {
    let x = this;
    function t() {
      const s = x0;
      let i = x[s(223)]();
      x[s(219)].update(), i != null && setTimeout(t, e);
    }
    t();
  }
  redoAll(e = 500) {
    let x = this;
    function t() {
      const s = x0;
      x[s(219)].update(), x[s(217)]() != null && setTimeout(t, e);
    }
    t();
  }
}
function T0() {
  var n = ["18GHHbYP", "copy", "1624086TUrhnr", "1523669YGbJJR", "3NclMJu", "5545535WdnxuZ", "cut", "cutPut", "isFirstCutPaste", "take", "7521104diAlrl", "3127724aUfuwl", "103602tkrIJg", "source", "type", "1943494ZFjiqD"];
  return T0 = function() {
    return n;
  }, T0();
}
var n0 = e0;
function e0(n, e) {
  var x = T0();
  return e0 = function(t, s) {
    t = t - 113;
    var i = x[t];
    return i;
  }, e0(n, e);
}
(function(n, e) {
  for (var x = e0, t = n(); []; )
    try {
      var s = -parseInt(x(120)) / 1 + parseInt(x(113)) / 2 + parseInt(x(121)) / 3 * (-parseInt(x(128)) / 4) + parseInt(x(122)) / 5 + parseInt(x(117)) / 6 * (parseInt(x(116)) / 7) + parseInt(x(127)) / 8 + parseInt(x(119)) / 9;
      if (s === e)
        break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(T0, 808826);
class cx {
  constructor() {
    var e = e0;
    this[e(126)] = 0;
  }
  copyPut(e) {
    var x = e0;
    this[x(126)] = 0, this[x(115)] = x(118), this[x(114)] = e;
  }
  [n0(124)](e) {
    var x = n0;
    this[x(126)] = -1, this.type = "cut", this[x(114)] = e;
  }
  takeSource() {
    var e = n0;
    return this[e(126)]++, this[e(114)];
  }
  [n0(125)]() {
    var e = n0;
    return this[e(115)] == Dx[e(123)] && this[e(126)] == 0;
  }
}
function q(n, e) {
  const x = A0();
  return q = function(t, s) {
    return t = t - 374, x[t];
  }, q(n, e);
}
(function(n, e) {
  const x = q, t = n();
  for (; []; )
    try {
      if (-parseInt(x(387)) / 1 * (-parseInt(x(388)) / 2) + parseInt(x(381)) / 3 * (-parseInt(x(386)) / 4) + -parseInt(x(389)) / 5 * (-parseInt(x(374)) / 6) + -parseInt(x(377)) / 7 + parseInt(x(376)) / 8 + parseInt(x(380)) / 9 * (parseInt(x(385)) / 10) + -parseInt(x(375)) / 11 * (parseInt(x(379)) / 12) === e)
        break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(A0, 190928);
const lx = { getItem: function(n) {
  return localStorage.getItem(n);
}, setItem: function(n, e) {
  localStorage.setItem(n, e);
}, saveWithVersion(n, e) {
  const x = q;
  n += Date[x(378)](), this[x(382)](n, e);
}, getAllVersions(n) {
  const e = q;
  return Object[e(390)](localStorage).filter((t) => t[e(383)](n))[e(391)]();
}, getLastVersion(n, e) {
  const x = q;
  let t = this.getAllVersions(n)[x(384)]();
  if (t[x(392)] == 0)
    return;
  e == null && (e = 0), e + 1 >= t[x(392)] && (e = t[x(392)] - 1);
  let s = t[e];
  return this.getItem(s);
} };
function A0() {
  const n = ["241702dbVfrd", "703445Lqtbkb", "keys", "sort", "length", "12kyAHds", "4774gqqfBH", "1013704uepVdo", "750638EWVDzV", "now", "16860rdtBhN", "81dKZPQl", "3oKeaCf", "setItem", "startsWith", "reverse", "386230uoxaWW", "357872wqMcep", "2kEbrmy"];
  return A0 = function() {
    return n;
  }, A0();
}
function P0(n, e) {
  const x = E0();
  return P0 = function(t, s) {
    return t = t - 383, x[t];
  }, P0(n, e);
}
(function(n, e) {
  const x = P0, t = n();
  for (; []; )
    try {
      if (parseInt(x(390)) / 1 * (-parseInt(x(395)) / 2) + -parseInt(x(393)) / 3 * (-parseInt(x(398)) / 4) + -parseInt(x(392)) / 5 * (parseInt(x(389)) / 6) + parseInt(x(400)) / 7 * (-parseInt(x(387)) / 8) + -parseInt(x(403)) / 9 * (-parseInt(x(407)) / 10) + -parseInt(x(386)) / 11 + parseInt(x(397)) / 12 === e)
        break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(E0, 628481);
function E0() {
  const n = ["objects", "filter", "slice", "10TxElEU", "preventDefault", "选编组-", "showOpTooltip", "centerBy", "pickedObject", "8629533itvaoT", "6939472lbxyIW", "inputSystem", "1898838MslpeU", "195wjTLtj", "KeysConfig", "10UATuZD", "15gvmsdU", "selectedGroup", "9168HpHiqH", "parent", "35284332lxoQQz", "346568MDMDHc", "stage", "7VRunyK", "keyboard", "bindKey", "3903057awVxLp"];
  return E0 = function() {
    return n;
  }, E0();
}
function Gx(n, e, x) {
  const t = P0, s = n[t(401)], i = n[t(391)].CreateGroup;
  let r = {};
  function a(c) {
    const l = t;
    r[c] = n[l(399)][l(394)][l(404)][l(406)](), n[l(383)]("编组-" + c);
  }
  function o(c) {
    const l = t;
    let p = r[c];
    if (p)
      return p = p[l(405)]((_) => _[l(396)] !== null), p.length > 0 && (n[l(383)](l(409) + c), n[l(399)][l(394)].removeAll().addAll(p), n.stage[l(388)][l(385)] = p[0]), p;
  }
  function d(c) {
    const l = t;
    o(c) && x[l(384)](e.selectedGroup[l(404)]);
  }
  for (let c = 0; c <= 9; c++)
    s[t(402)](i + "+" + c, function(l) {
      l[t(408)](), a(c);
    }), s.bindKey("" + c, function(l) {
      l[t(408)](), o(c);
    }), s.bindKey("" + c + "+" + c, function(l) {
      l[t(408)](), d(c);
    });
}
(function(n, e) {
  const x = H0, t = n();
  for (; []; )
    try {
      if (parseInt(x(311)) / 1 + -parseInt(x(269)) / 2 * (-parseInt(x(304)) / 3) + parseInt(x(303)) / 4 + -parseInt(x(276)) / 5 * (parseInt(x(281)) / 6) + -parseInt(x(308)) / 7 + parseInt(x(297)) / 8 * (parseInt(x(268)) / 9) + parseInt(x(271)) / 10 === e)
        break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(B0, 937657);
function H0(n, e) {
  const x = B0();
  return H0 = function(t, s) {
    return t = t - 264, x[t];
  }, H0(n, e);
}
function B0() {
  const n = ["Move_down", "isNode", "KeysConfig", "Save", "undoHandler", "pasteHandler", "filter", "16LDVTGa", "doGridLayout", "粘贴样式", "Layout_grid", "Move_left", "openLasted", "5145912LmXidN", "21Jfsunf", "Layout_tree", "getNoChildrensObjects", "Paste", "9567222GHKCPl", "Select_invert", "update", "1616076hhCFPG", "bindKey", "Copy_style", "copyHandler", "redoHandler", "selectedGroup", "forEach", "showOpTooltip", "2160450DxxmGP", "40762UJIFww", "keyboard", "929150xyWyRQ", "notContains", "stylePasteHandler", "Undo", "deleteHandler", "177545sltHAF", "复制样式", "Move_up", "Select_all", "styleCopyHandler", "222WfjuaB", "stage", "doTreeLayout", "select", "displayList", "Open", "Move_right", "currentLayer", "Copy"];
  return B0 = function() {
    return n;
  }, B0();
}
function Wx(n) {
  const e = H0, x = n[e(282)], t = n[e(288)];
  let s = n[e(270)];
  const i = n[e(292)];
  function r(a, o, d) {
    const c = e;
    a[c(266)]((l) => {
      s[c(312)](l, function(_) {
        o(_);
      }, d);
    });
  }
  r(i.Delete, (a) => n[e(275)](a)), r(i.Cut, (a) => n.cutHandler(a)), r(i[e(289)], (a) => {
    const o = e;
    n[o(267)]("复制"), n[o(314)](a);
  }), r(i[e(307)], (a) => n[e(295)](a)), r(i[e(274)], (a) => {
    const o = e;
    n[o(267)]("撤销"), n[o(294)](a);
  }), r(i.Redo, (a) => {
    const o = e;
    n.showOpTooltip("重做"), n[o(264)](a);
  }), r(i[e(279)], (a) => {
    const o = e;
    n.showOpTooltip("全选"), x[o(284)](t.getAllVisiable());
  }), r(i[e(309)], (a) => {
    const o = e;
    n.showOpTooltip("反选");
    let d = x[o(265)][o(306)]();
    x[o(284)](t[o(285)].filter((c) => d[o(272)](c)));
  }), r(i[e(293)], (a) => {
    n[e(267)]("保存"), n.saveHandler(a);
  }, ![]), r(i[e(286)], (a) => {
    const o = e;
    n[o(267)]("打开"), n[o(302)](a);
  }, ![]), r(i[e(313)], (a) => {
    const o = e;
    n[o(267)](o(277)), n[o(280)](a);
  }, ![]), r(i.paste_Style, (a) => {
    const o = e;
    n.showOpTooltip(o(299)), n[o(273)](a);
  }, ![]), r(i[e(301)], (a) => {
    const o = e;
    x[o(265)][o(306)]()[o(296)]((c) => c.isNode)[o(266)]((c) => {
      c.x -= 1;
    });
  }), r(i[e(287)], (a) => {
    const o = e;
    x[o(265)][o(306)]().filter((c) => c.isNode).forEach((c) => {
      c.x += 1;
    });
  }), r(i[e(278)], (a) => {
    const o = e;
    x[o(265)][o(306)]()[o(296)]((c) => c[o(291)])[o(266)]((c) => {
      c.y -= 1;
    });
  }), r(i[e(290)], (a) => {
    const o = e;
    x[o(265)][o(306)]()[o(296)]((c) => c[o(291)]).forEach((c) => {
      c.y += 1;
    });
  }), r(i[e(305)], (a) => {
    n[e(283)]();
  }), r(i[e(300)], (a) => {
    n[e(298)]();
  }), Gx(n, x, t), s.on("keydown", function() {
    n[e(310)]();
  }), s.on("keyup", function() {
    n[e(310)]();
  });
}
(function(n, e) {
  const x = f0, t = n();
  for (; []; )
    try {
      if (-parseInt(x(430)) / 1 * (-parseInt(x(418)) / 2) + -parseInt(x(420)) / 3 * (-parseInt(x(414)) / 4) + -parseInt(x(422)) / 5 + -parseInt(x(424)) / 6 * (-parseInt(x(413)) / 7) + parseInt(x(432)) / 8 + parseInt(x(409)) / 9 + -parseInt(x(428)) / 10 * (parseInt(x(410)) / 11) === e)
        break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(O0, 245227);
function f0(n, e) {
  const x = O0();
  return f0 = function(t, s) {
    return t = t - 407, x[t];
  }, f0(n, e);
}
function O0() {
  const n = ["currentLayer", "52033QaMxpJ", "length", "2782640RNXzAN", "getPaintedAABBInLayer", "parent", "3223683QvBUVF", "3487IxfJpo", "visible", "isSelected", "491302chdlNK", "52KcLxSw", "addChild", "isLink", "filter", "18QqlQKG", "isIntersectRect", "69345QnNWYe", "getAllVisiable", "930145HEyfBv", "isAncestors", "30ToflWE", "mouseEnabled", "isNode", "isOutOfParent", "43990pEsSog"];
  return O0 = function() {
    return n;
  }, O0();
}
function dx(n, e) {
  const x = f0;
  let t = n[x(429)], s = n[x(429)][x(421)]()[x(417)]((a) => {
    const o = x;
    return a[o(411)] && a[o(426)] && a[o(412)] != !![] && a[o(425)];
  }), i = e.filter((a) => {
    const o = x;
    return a[o(427)]() || a[o(408)] === t;
  }), r;
  for (let a = 0; a < i[x(431)]; a++) {
    let o = i[a];
    if (r = Kx(o, s), r != null)
      break;
  }
  return r == null && (r = t, i = i[x(417)]((a) => a.parent !== t)), console.assert(r[x(416)] != !![], !![], r), { parent: r, objects: i };
}
function Kx(n, e) {
  const x = f0, t = n[x(407)](), s = e.filter((i) => {
    const r = x;
    return i === n.parent || i === n ? ![] : n[r(423)](i) ? ![] : !![];
  });
  for (let i = s.length - 1; i >= 0; i--) {
    const r = s[i];
    if (r[x(407)]()[x(419)](t))
      return r;
  }
  return null;
}
function j0() {
  const n = ["184160MVLAMQ", "2222952hCitEk", "isAlone", "stage", "12939165QAfFoU", "11124ORRuXM", "isNode", "getBottom", "右对齐", "getRight", "translateWith", "2865kiUyRW", "selectedGroup", "getAABB", "getNoChildrensObjects", "length", "3xtRnwS", "110KNEPIq", "2353180kJABow", "filter", "71848LUpBVS", "612310aYEDjW", "21bdkBsb"];
  return j0 = function() {
    return n;
  }, j0();
}
(function(n, e) {
  const x = z0, t = n();
  for (; []; )
    try {
      if (-parseInt(x(401)) / 1 + parseInt(x(404)) / 2 * (parseInt(x(396)) / 3) + parseInt(x(403)) / 4 + -parseInt(x(391)) / 5 * (-parseInt(x(385)) / 6) + -parseInt(x(402)) / 7 * (-parseInt(x(400)) / 8) + parseInt(x(384)) / 9 + parseInt(x(398)) / 10 * (-parseInt(x(397)) / 11) === e)
        break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(j0, 718996);
function z0(n, e) {
  const x = j0();
  return z0 = function(t, s) {
    return t = t - 383, x[t];
  }, z0(n, e);
}
function Rx(n, e) {
  const x = z0;
  let t = e[x(383)][x(392)][x(394)]();
  if (t = t[x(399)]((i) => i[x(386)] || i[x(405)]()), t[x(395)] == 0)
    return;
  let s = _x.getAABB(t, ![], ex);
  for (let i = 0; i < t.length; i++) {
    let r = t[i], a = r[x(393)](![], ex);
    n == "左对齐" ? r[x(390)](s.x - a.x, 0) : n == x(388) ? r[x(390)](s[x(389)]() - a[x(389)](), 0) : n == "顶部对齐" ? r.translateWith(0, s.y - a.y) : n == "底部对齐" && r[x(390)](0, s.getBottom() - a[x(387)]());
  }
}
function N0(n, e) {
  const x = D0();
  return N0 = function(t, s) {
    return t = t - 218, x[t];
  }, N0(n, e);
}
const bx = N0;
function D0() {
  const n = ["5632272tWQyAz", "3794CpOnIT", "1239684sCeNIb", "zIndex", "右对齐", "458640TbJoCS", "移至顶部", "updatezIndex", "14813150sBtSjg", "233YazpqF", "addEventListener", "cutHandler", "stage", "上移一层", `
<div class="header">编辑</div>
<a>剪切</a>
<a>复制</a>
<a>粘贴</a>
<a>删除</a> 
<hr></hr>
<div class="header">前后</div>
<a>上移一层</a>
<a>下移一层</a>
<a>移至顶部</a>
<a>移至底部</a>
<div class="header">对齐</div>
<a>左对齐</a>
<a>右对齐</a>
<a>顶部对齐</a>
<a>底部对齐</a>
`, "左对齐", "deleteHandler", "上下等距", "下移一层", "update", "52251nXKmAG", "92WrkbEu", "1082260HmWETX", "pasteHandler", "底部对齐", "alignHandler", "item", "21UeEhZO", "parent", "左右等距"];
  return D0 = function() {
    return n;
  }, D0();
}
(function(n, e) {
  const x = N0, t = n();
  for (; []; )
    try {
      if (-parseInt(x(242)) / 1 * (parseInt(x(234)) / 2) + -parseInt(x(223)) / 3 * (-parseInt(x(224)) / 4) + parseInt(x(225)) / 5 + parseInt(x(235)) / 6 * (-parseInt(x(230)) / 7) + parseInt(x(238)) / 8 + -parseInt(x(233)) / 9 + parseInt(x(241)) / 10 === e)
        break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(D0, 468037);
let Yx = bx(247);
function Ux(n) {
  const e = bx, x = n[e(245)];
  let t = new Lx(x, Yx);
  return t[e(243)]("select", function(s) {
    const i = e, r = s[i(229)];
    let a = x.inputSystem.pickedObject;
    r == "剪切" ? n[i(244)]() : r == "复制" ? n.copyHandler() : r == "粘贴" ? n[i(226)]() : r == "删除" && n[i(219)](), a != null && (r == i(246) ? a[i(236)]++ : r == i(221) ? a.zIndex-- : r == i(239) ? a.zIndex = 1e3 : r == "移至底部" ? a[i(236)] = 0 : r == i(218) ? n[i(228)]("左对齐") : r == i(237) ? n[i(228)]("右对齐") : r == "顶部对齐" ? n.alignHandler("顶部对齐") : r == i(227) ? n[i(228)](i(227)) : r == i(232) ? n.alignHandler("左右等距") : r == i(220) && n[i(228)](i(220)), a[i(236)] < 0 ? a[i(236)] = 0 : a[i(236)] > 1e3 && (a[i(236)] = 1e3), a[i(231)] != null && a[i(231)][i(240)](), n[i(222)]());
  }), t;
}
function M0() {
  const n = ["width", "1317618gmViDl", "337063NZxdDI", "mouseEnabled", "165381fFZxvh", "10143FaIKFs", "5pjWimx", "handlerLayer", "#c8c8c8", "height", "setBegin", "guildlineS", "addChild", "setEnd", "72XYJKAF", "show", "1264336GTICfi", "hide", "2270OZyANb", "605350SCapdQ", "guildlineW", "9837obCbPK"];
  return M0 = function() {
    return n;
  }, M0();
}
(function(n, e) {
  const x = t0, t = n();
  for (; []; )
    try {
      if (-parseInt(x(352)) / 1 + -parseInt(x(369)) / 2 + parseInt(x(354)) / 3 + parseInt(x(366)) / 4 + parseInt(x(356)) / 5 * (parseInt(x(351)) / 6) + parseInt(x(355)) / 7 * (-parseInt(x(364)) / 8) + -parseInt(x(349)) / 9 * (-parseInt(x(368)) / 10) === e)
        break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(M0, 186146);
function Vx(n) {
  const e = t0, x = new P();
  x.mouseEnabled = ![], x.css({ strokeStyle: e(358), lineDash: [1, 1] }), x[e(367)](), n.guildlineW = x, n[e(357)][e(362)](n[e(348)]);
  const t = new P();
  x[e(353)] = ![], t.css({ strokeStyle: e(358), lineDash: [1, 1] }), t[e(367)](), n.guildlineS = t, n[e(357)][e(362)](n[e(361)]);
}
function t0(n, e) {
  const x = M0();
  return t0 = function(t, s) {
    return t = t - 348, x[t];
  }, t0(n, e);
}
function Jx(n, e) {
  const x = t0, t = n.stage, s = n[x(348)], i = n[x(361)];
  s[x(360)]({ x: 0, y: e.y }), s[x(363)]({ x: t[x(350)], y: e.y }), s[x(365)](), i[x(360)]({ x: e.x, y: 0 }), i[x(363)]({ x: e.x, y: t[x(359)] }), i[x(365)]();
}
function Xx(n) {
  const e = t0;
  n.guildlineW[e(367)](), n[e(361)][e(367)]();
}
(function(n, e) {
  const x = Y, t = n();
  for (; []; )
    try {
      if (-parseInt(x(313)) / 1 * (-parseInt(x(304)) / 2) + parseInt(x(321)) / 3 + -parseInt(x(328)) / 4 + parseInt(x(333)) / 5 + parseInt(x(338)) / 6 + parseInt(x(330)) / 7 * (-parseInt(x(299)) / 8) + parseInt(x(294)) / 9 * (-parseInt(x(316)) / 10) === e)
        break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(F0, 638769);
function Y(n, e) {
  const x = F0();
  return Y = function(t, s) {
    return t = t - 292, x[t];
  }, Y(n, e);
}
function F0() {
  const n = ["className", "8erXZye", "currentLayer", "length", "stageToLocalXY", "css", "4326lsXybX", "clipBoard", "resizeTo", "endArrow", "concat", "copyPut", "afterDeleteHandler", "width", "getAABB", "417Lsetjx", "takeSource", "hideCtrlBox", "70DsvtcE", "height", "removeAll", "pojoToObjects", "forEach", "3652503uSVTUT", "clearTarget", "selectedGroup", "addChild", "recordEnd", "anchorBox", "pickedObject", "3371180jGeWYS", "stage", "2843204jXZqQB", "visible", "style", "2819705DvlwVy", "record", "parent", "beginArrow", "inputSystem", "1996884fKFPkI", "cutPut", "removeChild", "getNoChildrensObjects", "copyToPojo", "1450917bChbTS", "map", "getCenter", "serializerSystem"];
  return F0 = function() {
    return n;
  }, F0();
}
function qx(n) {
  const e = Y;
  let x = n[e(329)], t = [][e(308)](x[e(323)].getNoChildrensObjects());
  if (t.length == 0)
    return;
  let s = t[e(295)]((i) => i[e(335)]);
  n[e(305)][e(309)]([t, s]);
}
function Qx(n) {
  const e = Y;
  let x = n[e(329)], t = [][e(308)](x[e(323)][e(292)]());
  if (t[e(301)] == 0)
    return;
  let s = t[e(295)]((i) => i.parent);
  n[e(305)][e(339)]([t, s]), n[e(334)]("剪切"), t[e(320)]((i, r) => {
    s[r].removeChild(i), p0.disconnect(i, t);
  }), n[e(325)]("剪切"), x.inputSystem[e(327)] = null, n[e(315)](), n[e(326)][e(322)]();
}
function Zx(n) {
  const e = Y;
  let x = n.clipBoard[e(314)]();
  if (x == null)
    return;
  let t = n[e(300)], s = n[e(329)], i = x[0], r = x[1], a = _x[e(312)](i, ![], ex), o = a[e(296)](), d = t[e(302)](s[e(337)].x, s.inputSystem.y), c = d.x - o.x, l = d.y - o.y;
  n[e(334)]("粘贴");
  let p = i, _ = s.serializerSystem[e(293)](i);
  p = s[e(297)][e(319)](_), p[e(320)]((S, z) => {
    S.translateWith(c, l);
  }), p.forEach((S, z) => {
    const A = e;
    r[z][A(324)](S);
  }), n[e(325)]("粘贴");
}
function $x(n) {
  const e = Y;
  let x = n.stage, t = x[e(323)][e(292)]();
  t && (x[e(323)][e(318)](), n[e(334)]("删除"), t[e(320)](function(s) {
    const i = e;
    p0.disconnect(s), s[i(335)][i(340)](s), n[i(310)](s);
  }), n[e(325)]("删除"));
}
function xe(n, e) {
  const x = Y;
  n === e || n.className !== e[x(298)] || !(n instanceof Node && e instanceof Node || n instanceof P && e instanceof P) || (n[x(303)](e[x(332)]), n instanceof P && e instanceof P && (n[x(336)][x(331)] = e[x(336)][x(331)], n[x(307)][x(331)] = e[x(307)].visible, n[x(336)][x(306)](e[x(336)][x(311)], e[x(336)][x(317)]), n.endArrow.resizeTo(e[x(307)][x(311)], e[x(307)][x(317)])));
}
(function(n, e) {
  const x = G0, t = n();
  for (; []; )
    try {
      if (parseInt(x(260)) / 1 + parseInt(x(268)) / 2 * (-parseInt(x(238)) / 3) + -parseInt(x(233)) / 4 + parseInt(x(246)) / 5 + parseInt(x(236)) / 6 * (-parseInt(x(266)) / 7) + -parseInt(x(264)) / 8 * (parseInt(x(241)) / 9) + parseInt(x(255)) / 10 === e)
        break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(W0, 393701);
function G0(n, e) {
  const x = W0();
  return G0 = function(t, s) {
    return t = t - 233, x[t];
  }, G0(n, e);
}
function W0() {
  const n = ["preventDefault", "297JPLtPd", "nodeCtrlBox", "hide", "getNoChildrensObjects", "mouseup", "2421095CzRchO", "update", "defaultPrevented", "activeBox", "stage", "selectedGroupDragEndHandler", "selectedGroupDragHandler", "event", "selectedGroup", "3267160YpYnhl", "drop", "isDragEnd", "groupdrag", "groupdragend", "605415JfBcKb", "dispatchEvent", "addChild", "showAt", "22392WSkjod", "inputSystem", "1921759bEnhoD", "popupMenu", "2606PjBGpa", "dragover", "2268564PLnOqI", "button", "anchorBox", "6YLBLUX", "handlerLayer", "204SBHlEI", "removeChild"];
  return W0 = function() {
    return n;
  }, W0();
}
function ee(n) {
  const e = G0;
  let x = n[e(250)], t = x[e(265)], s = n[e(237)], i = n[e(242)], r = n.linkCtrlBox, a = n[e(249)], o = n[e(235)], d = parseInt("1719720000000");
  Date.now() > d || (x.on(u0.modeChange, function(c) {
    const l = e;
    c.newMode == Tx.edit ? (s[l(262)](i), s[l(262)](r), s[l(262)](o), s[l(262)](a)) : (s[l(239)](i), s.removeChild(r), s.removeChild(o), s[l(239)](a)), x[l(247)]();
  }), t.on(e(269), function(c) {
    const l = e;
    c[l(240)](), n[l(261)](t);
  }), t.on(e(256), function() {
    const c = e;
    t[c(253)][c(248)] || n[c(261)](t);
  }), t.on("mousedown", function(c) {
    const l = e;
    t[l(253)][l(248)] || n[l(267)][l(243)]();
  }), t.on(e(245), function(c) {
    const l = e;
    t[l(234)] == 2 ? !t[l(257)] && n[l(267)][l(263)](t.x, t.y) : n[l(267)][l(243)]();
  }), x[e(254)].on(u0[e(258)], function(c) {
    const l = e;
    n[l(252)](c, x.selectedGroup[l(244)]());
  }), x[e(254)].on(u0[e(259)], function(c) {
    const l = e;
    n[l(251)](c, x[l(254)][l(244)]());
  }));
}
const s0 = h0;
(function(n, e) {
  const x = h0, t = n();
  for (; []; )
    try {
      if (parseInt(x(521)) / 1 * (parseInt(x(510)) / 2) + parseInt(x(519)) / 3 * (parseInt(x(507)) / 4) + parseInt(x(500)) / 5 * (-parseInt(x(513)) / 6) + -parseInt(x(524)) / 7 + parseInt(x(518)) / 8 + -parseInt(x(516)) / 9 + -parseInt(x(514)) / 10 === e)
        break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(K0, 179564);
function K0() {
  const n = ["12EMjgBt", "translateTo", "css", "302DrAihr", "show", "atan2", "21054xxcUeF", "1371130vugOOL", "attachTo", "1990026eAYorH", "3px solid orange", "1247512bHMAkH", "302721TotEnu", "zIndex", "2193fqpCFk", "resizeTo", "hide", "757001vOGaBT", "attach not Node", "viewClone", "updateSize", "isLink", "205gmUdro", "mouseEnabled", "NodeCtrlBox", "editor", "currObject", "rotate", "point"];
  return K0 = function() {
    return n;
  }, K0();
}
function h0(n, e) {
  const x = K0();
  return h0 = function(t, s) {
    return t = t - 498, x[t];
  }, h0(n, e);
}
class te extends Q {
  constructor(e, x = 0, t = 0, s = 1, i = 1) {
    const r = h0;
    super(null, x, t, s, i), this[r(520)] = Q0[r(502)], this[r(503)] = e, this[r(509)]({ border: r(517), lineDash: [5, 3] }), this[r(501)] = ![], this[r(504)];
  }
  [s0(515)](e) {
    const x = s0;
    if (e == null || e.editable != !![]) {
      this[x(504)] = null, this[x(523)]();
      return;
    }
    if (e[x(499)])
      throw new Error(x(525));
    this.currObject = e, this[x(498)](), this[x(511)]();
  }
  updateSize() {
    this[s0(504)] != null && this.viewClone(this.currObject);
  }
  [s0(526)](e) {
    const x = s0;
    let t = e.getStageTransform(), s = t[x(506)](e.positionToLocalPoint(u.center)), i = t[x(506)](e.positionToLocalPoint(u.rm)), r = Math[x(512)](i.y - s.y, i.x - s.x);
    t[x(505)](-r);
    let a = t.point(e.positionToLocalPoint(u.center)), o = t[x(506)](e.positionToLocalPoint(u.rb)), d = (o.x - a.x) * 2, c = (o.y - a.y) * 2, l = 4;
    this[x(522)](d + l * 2, c + l * 2), this[x(505)](r), this[x(508)](s.x, s.y);
  }
}
const j = R0;
function R0(n, e) {
  const x = Y0();
  return R0 = function(t, s) {
    return t = t - 250, x[t];
  }, R0(n, e);
}
(function(n, e) {
  const x = R0, t = n();
  for (; []; )
    try {
      if (-parseInt(x(270)) / 1 + -parseInt(x(260)) / 2 + parseInt(x(251)) / 3 + parseInt(x(268)) / 4 + -parseInt(x(269)) / 5 + -parseInt(x(255)) / 6 * (parseInt(x(254)) / 7) + parseInt(x(264)) / 8 * (parseInt(x(261)) / 9) === e)
        break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Y0, 538068);
function Y0() {
  const n = ["Shift+v", "MAC OS", "2165708BndTlt", "4900990Cdtygb", "751651oHAivM", "Shift+c", "1584186LcENbK", "indexOf", "ArrowLeft", "28ShmpIc", "987516Wusrvj", "Shift", "ArrowDown", "Meta", "Delete", "11418JtbaVu", "16780329WttWGt", "userAgent", "toUpperCase", "8AqbgRc", "+shift+z"];
  return Y0 = function() {
    return n;
  }, Y0();
}
const ne = navigator[j(262)][j(263)]()[j(252)](j(267)) != -1, D = ne ? j(258) : "Control", gx = { CtrlOrCmd: D, CreateGroup: D, DropTo_leader: j(256), Delete: [j(259), "Meta+Backspace"], Select_all: [D + "+a"], Select_invert: [D + "+i"], Cut: [D + "+x"], Copy: [D + "+c"], Paste: [D + "+v"], Save: [D + "+s"], Open: [D + "+o"], Undo: [D + "+z"], Redo: [D + j(265)], Copy_style: [j(250)], paste_Style: [j(266)], Move_up: ["ArrowUp"], Move_down: [j(257)], Move_left: [j(253)], Move_right: ["ArrowRight"], Layout_tree: ["t"], Layout_grid: ["g"] };
(function(n, e) {
  for (var x = U0, t = n(); []; )
    try {
      var s = parseInt(x(392)) / 1 * (parseInt(x(391)) / 2) + -parseInt(x(388)) / 3 + -parseInt(x(389)) / 4 * (-parseInt(x(394)) / 5) + parseInt(x(395)) / 6 * (parseInt(x(387)) / 7) + parseInt(x(390)) / 8 * (parseInt(x(396)) / 9) + -parseInt(x(393)) / 10 + -parseInt(x(399)) / 11 * (-parseInt(x(397)) / 12);
      if (s === e)
        break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(V0, 216003);
function U0(n, e) {
  var x = V0();
  return U0 = function(t, s) {
    t = t - 387;
    var i = x[t];
    return i;
  }, U0(n, e);
}
function V0() {
  var n = ["1355202pQVrmj", "153423LMRTlm", "1572dSmJVP", "type", "31471JSyuWz", "7LxIAqH", "1108653jkARjm", "2872TyxAWz", "24BxWcjY", "10IRdWVu", "25028hJTANP", "3285230ZiQryS", "955ankFSQ"];
  return V0 = function() {
    return n;
  }, V0();
}
class V {
  constructor(e) {
    var x = U0;
    this[x(398)] = e;
  }
}
const f = J0;
(function(n, e) {
  const x = J0, t = n();
  for (; []; )
    try {
      if (-parseInt(x(303)) / 1 + -parseInt(x(349)) / 2 + parseInt(x(305)) / 3 + -parseInt(x(382)) / 4 * (-parseInt(x(297)) / 5) + -parseInt(x(333)) / 6 + -parseInt(x(343)) / 7 * (parseInt(x(287)) / 8) + -parseInt(x(293)) / 9 * (-parseInt(x(309)) / 10) === e)
        break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(X0, 224456);
function J0(n, e) {
  const x = X0();
  return J0 = function(t, s) {
    return t = t - 236, x[t];
  }, J0(n, e);
}
const se = ax.w != null ? ax.w[f(386)](3) : "1";
let ie = new V(f(308)), ue = new V(f(381)), re = new V("cut"), ae = new V(f(259)), oe = new V(f(325)), fx = new V(f(367)), ce = new V(f(292));
function X0() {
  const n = ["editor", "cssClipBoard", "defaultPrevented", "record", "setCursor", "hide", "setTarget", "undo", "save", "19868RIVSRm", "recordEnd", "对象拖拽", "log", "charAt", "保存成功", "mousemoveHandler", "anchorBox", "assign", "debug", "EditorNewLink", "selectedGroup", "mouseenterHandler", "copyPut", "sendKey", "preventDefault", "nodeCtrlBox", "alignHandler", "newLink", "objects", "push", "record和recordEnd没有成对出现", "translateToCenter", "zIndex", "connectable", "isDragStart", "onLinkCreate", "Node", "unknow classname:", "_obb", "isMouseOn", "auto", "isKeydown", "popupMenu", "20px", "removeAllChild", "linkCtrlBox", "indexOf", "Shift", "Control", "setHtml", "zoomAfter", "textInputMode", "copy", "serializerSystem", "fadeOut", "defineKeys", "selectedGroupDragEndHandler", "upgradeLinks", "style", "mouseOverTarget", "undoHandler", "redoHandler", "控制点", "saveHandler", "update", "mousedownHandler", "stage", "addLink", "updateSize", "css", "visible", "restore", "mousedragHandler", "hideCtrlBox", "hideGuidLine", "round", "copyHandler", "getCurrentLayer", "changeParent", "forEach", "583496FiSPtG", "pasteHandler", "DropTo_leader", "recordName", "button", "delete", "666gonyvV", "dispatchEvent", "getState", "buttons", "305FrYqDX", "activeBox", "crosshair", "setItem", "msg", "mouseenterStageHandler", "321944DwkYFs", "lastLayerState", "293187tCPrEK", "inputSystem", "paddingRight", "open", "113590KxrNUz", "inputTextfield", "parent", "pickedObject", "KeysConfig", "move", "view", "mode", "mouseOvertarget's parent is null", "粘贴样式", "LinkClassName", "opTooltip", "updatezIndex", "showGuildLine", "paddingLeft", "getItem", "paste", "mouseoutHandler", "handlerLayer", "currObject", "toStageAABB", "length", "fillByJson", "pickUpChild", "1260252okVaXp", "topo_last_doc", "target", "showOpTooltip", "cutHandler", "toJson", "mouseoutStageHandler", "addNewInstance", "getNoChildrensObjects", "domElement", "28SPIPDJ", "getObjectsIntersect", "currentLayer", "keyboard", "recordInterrupt", "redoUndoSys", "386184gpPkYV", "keys", "height", "clipBoard", "openJson", "mouseX", "setIntersect", "Link", "recordName error", "addChild", "dblclickHandler", "attachTo", "redo", "AutoFoldLink", "warn", "controlTarget", "isNode", "stylePasteHandler", "create", "editable", "event", "setMode", "enterTextInputMode", "function"];
  return X0 = function() {
    return n;
  }, X0();
}
class le extends hx {
  constructor(e) {
    const x = f;
    super(), this[x(313)] = gx, this[x(258)] = ![], this[x(319)] = x(362), this[x(273)] = e, e[x(373)] = this, this.currentLayer = this[x(284)](), this[x(327)] = e[x(327)], this.selectedGroup = this[x(273)].selectedGroup, this[x(346)] = e.keyboard, this[x(352)] = new cx(), this[x(374)] = new cx(), this[x(398)] = new Ox(this), this[x(252)] = new zx(this), this[x(389)] = new Nx(this), this[x(298)] = new te(this), this[x(249)] = Ux(this), ee(this), Wx(this), this[x(280)](), this[x(273)].inputSystem[x(312)] = null;
    let t = this;
    this[x(273)].on(u0[x(257)], function() {
      const s = x;
      t[s(271)](), t[s(389)].update();
    }), this.controlTarget = null, this[x(266)] = null, this[x(310)] = new Ax(this), this[x(348)] = new Fx(this), Vx(this), this[x(320)] = new Px(e), this.opTooltip[x(342)][x(265)][x(323)] = "20px", this.opTooltip[x(342)][x(265)][x(307)] = x(250);
  }
  [f(284)]() {
    const e = f;
    return this[e(273)][e(284)]();
  }
  [f(262)](e) {
    const x = f;
    Object[x(390)](this[x(313)], e);
  }
  [f(336)](e) {
    const x = f;
    this[x(320)][x(256)](e), this[x(320)].showAt(this[x(273)].width * 0.5, this[x(273)][x(351)] * 0.5), this[x(320)][x(261)](80);
  }
  [f(322)](e) {
    Jx(this, e);
  }
  [f(281)]() {
    Xx(this);
  }
  [f(371)]() {
    const e = f;
    this[e(258)] = !![];
  }
  leaveTextInputMode() {
    const e = f;
    this[e(258)] = ![];
  }
  [f(270)](e) {
    const x = f;
    let t = this[x(273)].serializerSystem[x(338)]([this.currentLayer]);
    lx[x(300)](x(334), t), console[x(385)](x(387), t);
  }
  openLasted() {
    const e = f, x = this[e(345)], t = lx[e(324)](e(334));
    t != null && (console[e(391)]("加载", t), x[e(251)](), this.stage[e(260)][e(331)](x, t));
  }
  [f(267)]() {
    const e = f;
    this[e(348)][e(380)]();
  }
  [f(268)]() {
    const e = f;
    this[e(348)][e(361)]();
  }
  [f(283)]() {
    qx(this), this.dispatchEvent(ae);
  }
  [f(337)]() {
    const e = f;
    Qx(this), this[e(294)](re);
  }
  [f(288)]() {
    const e = f;
    Zx(this), this[e(294)](oe);
  }
  deleteHandler() {
    const e = f;
    $x(this), this[e(294)](ce);
  }
  styleCopyHandler() {
    const e = f;
    let x = this[e(273)][e(306)][e(312)];
    x == null && (!this[e(273)][e(393)].isEmpty() && (x = this[e(273)].selectedGroup[e(401)][0]), x == null) || this[e(374)][e(395)](x);
  }
  [f(366)]() {
    const e = f;
    let x = this[e(374)].takeSource();
    if (x == null)
      return;
    let t = this.stage[e(393)].objects;
    this[e(376)]("粘贴样式"), t[e(286)]((s) => {
      xe(s, x);
    }), this[e(383)](e(318));
  }
  [f(399)](e) {
    const x = f;
    Rx(e, this), this[x(271)]();
  }
  [f(280)]() {
    const e = f;
    this[e(252)][e(378)](), this[e(398)][e(378)]();
  }
  [f(359)](e) {
    const x = f;
    this.stage[x(306)];
  }
  mousewheelHandler(e) {
  }
  [f(272)](e) {
    const x = f, t = this[x(273)][x(306)];
    let s = this.handlerLayer, i = this.nodeCtrlBox, r = this[x(252)];
    if (this[x(364)] = s.pickUpChild(), this.anchorBox[x(378)](), this[x(364)] != null) {
      this[x(364)].mousedownHandler(t), t[x(397)](), this[x(271)]();
      return;
    }
    r[x(378)](), i.hide(), this[x(271)]();
  }
  mouseupHandler(e) {
    const x = f, t = this[x(273)][x(306)];
    this[x(281)]();
    let s = this.stage, i = this[x(398)], r = this[x(252)], a = this[x(364)];
    if (a != null) {
      t.isDragEnd && !(a instanceof tx) && this.recordEnd(x(269)), a.mouseupHandler(t), t[x(397)](), this[x(271)]();
      return;
    }
    if (t[x(291)] == 2)
      return;
    let o = s[x(306)][x(312)];
    o != null ? o[x(368)] && (o instanceof P ? r[x(360)](o) : (this[x(389)].setTarget(o), i.attachTo(o))) : (this.anchorBox[x(378)](), i[x(378)](), r[x(378)]());
    {
      if (this[x(298)][x(328)] != null) {
        let c = this[x(393)][x(341)](), l = dx(this, c), p = l[x(311)];
        l.objects[x(286)]((S) => {
          const z = x;
          S[z(285)](p), S[z(264)]();
        });
      }
      this[x(298)][x(360)](null);
    }
    this[x(271)]();
  }
  [f(279)](e) {
    const x = f, t = this[x(273)][x(306)];
    if (t[x(296)] == 2)
      return;
    this[x(346)].isKeydown(x(254)) && this[x(273)][x(377)](x(299)), this[x(322)](t);
    let s = this[x(364)];
    if (s != null) {
      if (t[x(241)] && !(s instanceof tx) && this[x(376)](x(269)), s.mousedragHandler(t), this[x(271)](), t[x(369)][x(375)] == !![])
        return;
      t.preventDefault();
    }
    this[x(298)][x(378)]();
    const i = this[x(313)][x(289)];
    if (this[x(273)].inputSystem[x(312)] && this.keyboard[x(248)](i)) {
      let r = this.selectedGroup[x(341)](), a = dx(this, r), o = a[x(311)];
      o != null && o[x(368)] && this[x(298)][x(360)](o);
    }
  }
  [f(388)](e) {
    const x = f;
    let t = this[x(273)];
    const s = t[x(327)];
    let i = this[x(345)];
    t[x(377)](x(247));
    let r = s[x(332)]();
    if (r !== this[x(266)] && (this[x(266)] != null && this[x(266)][x(326)](e), r != null && r[x(394)](e)), this[x(266)] = r, r != null) {
      const o = r.parent;
      ix(o, x(317)), r[x(388)](e), e.preventDefault();
      return;
    }
    let a = i[x(332)]();
    if (a != null && (this[x(273)][x(377)](x(314)), a[x(365)] && a[x(240)] && this[x(389)][x(379)](a), this.keyboard[x(248)](x(255)) && a[x(240)])) {
      this[x(389)][x(379)](a);
      const d = this.anchorBox[x(344)]([a]);
      d != null && this[x(389)][x(355)](d);
    }
    this[x(271)]();
  }
  selectedGroupDragHandler(e, x) {
    const t = f;
    if (this[t(273)][t(306)][t(241)] && this[t(376)](t(384)), x[t(330)] == 1) {
      const s = x[0], i = this[t(345)][t(329)](s[t(245)].aabb), r = i.getCenter();
      this[t(322)](r);
    }
  }
  [f(263)](e, x) {
    const t = f;
    if (!this.stage[t(306)][t(246)]) {
      this.recordInterrupt();
      return;
    }
    x[t(286)]((s) => {
      const i = t;
      s.isNode && (s.x = Math[i(282)](s.x), s.y = Math[i(282)](s.y));
    }), this[t(383)](t(384));
  }
  [f(347)]() {
    const e = f;
    this[e(290)] = null, this[e(304)] = null;
  }
  [f(376)](e) {
    const x = f;
    let t = this[x(345)], s = t[x(273)][x(260)];
    this[x(290)] != null && console[x(363)](x(237), this[x(290)] + ":" + e), this.recordName = e, this.lastLayerState = s[x(295)](this[x(345)]);
  }
  recordEnd(e) {
    const x = f;
    if (e != this[x(290)])
      throw console[x(363)](this[x(290)], e), new Error(x(357));
    this.recordName = null;
    let t = this[x(345)], s = t[x(273)].serializerSystem, i = this[x(304)], r = s[x(295)](t);
    this[x(348)][x(236)](e, function() {
      s[x(278)](t, r);
    }, function() {
      s[x(278)](t, i);
    });
  }
  [f(394)](e) {
    const x = f;
    this[x(252)][x(302)](e), this[x(398)].mouseenterStageHandler(e), this[x(389)][x(302)](e);
  }
  [f(326)](e) {
    const x = f;
    this[x(252)][x(339)](e), this[x(398)][x(339)](e), this[x(389)][x(339)](e);
  }
  [f(242)](e) {
  }
  [f(400)](e, x, t, s) {
    const i = f;
    let r = this, a = xx(this[i(319)]);
    const o = new a(e, x, t, s), d = Object.assign({}, r.newLinkProperties);
    d[i(276)] && (o[i(276)](d[i(276)]), delete d[i(276)]), Object[i(350)](d)[i(286)]((p) => {
      const _ = i;
      let S = d[p];
      typeof S == _(372) ? o[p] = S() : o[p] = S;
    });
    let l = x[i(365)] || x.isLink ? x[i(311)] : this[i(345)];
    return o[i(239)] = Q0[i(392)], l.addChild(o), this[i(242)](o), o;
  }
  afterDeleteHandler(e) {
    const x = f;
    if (se != "1")
      return null;
    this[x(336)]("删除"), e === this[x(389)][x(335)] && this[x(389)][x(378)]();
  }
  [f(340)](e) {
    this.getCurrentLayer().addChild(e);
  }
  [f(274)](e) {
    const x = f;
    this[x(345)][x(358)](e);
  }
  update() {
    const e = f;
    this[e(298)][e(277)] && this[e(298)].updateSize(), this[e(398)].visible && this.nodeCtrlBox[e(275)](), this.anchorBox[e(271)](), this[e(273)].update();
  }
  [f(321)]() {
    const e = f;
    this[e(345)][e(321)]();
  }
  [f(338)]() {
    const e = f;
    return this.stage[e(260)][e(338)](this.currentLayer);
  }
  [f(353)](e) {
    const x = f;
    this.currentLayer[x(353)](e), this[x(273)][x(238)](), this[x(294)](ie);
  }
  showTip(e, x = "") {
    const t = f;
    let s = new Event(t(385));
    s[t(301)] = e + x, this.dispatchEvent(s);
  }
  [f(367)](e) {
    const x = f;
    let t = { x: this.currentLayer[x(354)], y: this.currentLayer.mouseY }, s = t.x, i = t.y, r = xx(e);
    if (e[x(253)](x(243)) != -1) {
      let a = new r(null, s, i, 64, 64);
      return this[x(340)](a), this[x(294)](fx), a;
    }
    if (e[x(253)]("Link") != -1) {
      this[x(273)][x(279)][x(316)] && this[x(273)][x(370)](x(315));
      let a = new r(null, { x: s - 40, y: i }, { x: s + 40, y: i + (e == x(356) ? 0 : 80) });
      return this[x(340)](a), this.dispatchEvent(fx), a;
    }
    throw new Error(x(244) + e);
  }
  [f(396)](e, x) {
    const t = f;
    this[t(346)][t(396)](e, x);
  }
}
le[f(313)] = gx;
(function(n, e) {
  for (var x = nx, t = n(); []; )
    try {
      var s = -parseInt(x(318)) / 1 + -parseInt(x(320)) / 2 * (parseInt(x(323)) / 3) + parseInt(x(315)) / 4 * (-parseInt(x(313)) / 5) + parseInt(x(314)) / 6 + -parseInt(x(321)) / 7 * (-parseInt(x(322)) / 8) + parseInt(x(324)) / 9 * (parseInt(x(317)) / 10) + -parseInt(x(319)) / 11 * (-parseInt(x(316)) / 12);
      if (s === e)
        break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(q0, 511604);
function nx(n, e) {
  var x = q0();
  return nx = function(t, s) {
    t = t - 313;
    var i = x[t];
    return i;
  }, nx(n, e);
}
function q0() {
  var n = ["579MKDKZm", "2628dqiEZi", "10gUvIRE", "4510314mHpilw", "1654060Anepum", "9221568ANLExZ", "24210sCqbqC", "754829jVbOFL", "11aPERIq", "6584kzlmwh", "2023aTeeMQ", "13888NegQdv"];
  return q0 = function() {
    return n;
  }, q0();
}
export {
  le as Editor,
  fe as IconsPanel,
  he as PropertiesPanel,
  ae as copyEvent,
  fx as createEvent,
  re as cutEvent,
  ce as deleteEvent,
  ie as openEvent,
  oe as pasteEvent,
  ue as saveEvent
};

const wt = At;
(function(n, x) {
  const t = At, e = n();
  for (; []; )
    try {
      if (parseInt(t(260)) / 1 * (parseInt(t(259)) / 2) + parseInt(t(274)) / 3 * (parseInt(t(261)) / 4) + parseInt(t(263)) / 5 + parseInt(t(269)) / 6 + parseInt(t(276)) / 7 + -parseInt(t(273)) / 8 * (parseInt(t(275)) / 9) + parseInt(t(266)) / 10 * (-parseInt(t(270)) / 11) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Xx, 609589);
function ir(n, x, t) {
  return n[0] = x[0] + t[0], n[1] = x[1] + t[1], n;
}
function gi(n, x, t) {
  return n[0] = x[0] * t, n[1] = x[1] * t, n;
}
function rr(n, x, t) {
  return n[0] = x[0] * t, n[1] = x[1] * t, n;
}
function ar(n, x) {
  return n[0] = -x[0], n[1] = -x[1], n;
}
function Xx() {
  const n = ["22OYScLq", "normalize", "dot", "8SpjrAG", "1142121CsyoPf", "8416638Fqgrui", "1394260FGxoHK", "44054cfyhQG", "41PZOHGH", "8rGPSUy", "sqrt", "2415620ZeggcX", "multiplyC", "add", "7956430sChUNO", "negate", "len", "4735392JWAJlP"];
  return Xx = function() {
    return n;
  }, Xx();
}
function or(n, x) {
  let e = Math[At(262)](x[0] * x[0] + x[1] * x[1]);
  return e == 0 ? (n[0] = 0, n[0] = 0, n) : (n[0] = x[0] / e, n[1] = x[1] / e, n);
}
function cr(n) {
  return Math[At(262)](n[0] * n[0] + n[1] * n[1]);
}
function _i(n, x) {
  return n[0] * x[0] + n[1] * x[1];
}
function hr(n, x, t) {
  let e = _i(x, t);
  return gi(n, t, e), n;
}
class R {
}
function At(n, x) {
  const t = Xx();
  return At = function(e, s) {
    return e = e - 259, t[e];
  }, At(n, x);
}
R[wt(264)] = gi, R.scale = rr, R[wt(268)] = cr, R[wt(267)] = ar, R[wt(265)] = ir, R[wt(271)] = or, R[wt(272)] = _i, R.projection = hr;
const n0 = Dt;
(function(n, x) {
  const t = Dt, e = n();
  for (; []; )
    try {
      if (parseInt(t(360)) / 1 * (-parseInt(t(348)) / 2) + -parseInt(t(362)) / 3 * (parseInt(t(345)) / 4) + -parseInt(t(352)) / 5 * (parseInt(t(342)) / 6) + parseInt(t(354)) / 7 + parseInt(t(363)) / 8 + -parseInt(t(358)) / 9 + parseInt(t(373)) / 10 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Yx, 876348);
function Dt(n, x) {
  const t = Yx();
  return Dt = function(e, s) {
    return e = e - 338, t[e];
  }, Dt(n, x);
}
function Yx() {
  const n = ["scale", "extend", "mergePoints", "sqrt", "6xLiXTB", "push", "sin", "53048gfZvRg", "getAngle", "between", "58zCxIlb", "concat", "points.length < 2", "abs", "7768015jyyrHF", "countPointsDistance", "8335432XNxmrN", "forward", "atan2", "createPoints", "332172mmFXEu", "betweenPoints", "38991xFfyoQ", "rotate", "171fsyvYV", "11041704KKLOUT", "middle", "length", "keys", "createPoints2", "distance", "normalize", "log", "distancePoint", "cos", "17825430eYTwsl"];
  return Yx = function() {
    return n;
  }, Yx();
}
class D {
  constructor(x = 0, t = 0) {
    this.x = x, this.y = t;
  }
  toPojo() {
    return { x: this.x, y: this.y };
  }
  static isLikePoint(x) {
    const t = Dt;
    return x instanceof D ? !![] : Object[t(366)](x)[t(365)] == 2 && x.x != null && x.y != null;
  }
  static looksSame(x, t, e) {
    const s = Dt;
    if (x === t)
      return !![];
    let i = Math[s(351)](t.x - x.x), r = Math.abs(t.y - x.y);
    return e == null && (e = 0.01), i < e && r < e;
  }
  static [n0(364)](x, t) {
    return { x: (t.x + x.x) / 2, y: (t.y + x.y) / 2 };
  }
  static [n0(346)](x, t) {
    return Math[n0(356)](t.y - x.y, t.x - x.x);
  }
  static [n0(361)](x, t, e, s, i) {
    const r = n0;
    return { x: (x - e) * Math[r(372)](i) - (t - s) * Math.sin(i) + e, y: (x - e) * Math[r(344)](i) + (t - s) * Math[r(372)](i) + s };
  }
  static rotatePoint(x, t, e) {
    const s = n0;
    return { x: (x.x - t.x) * Math[s(372)](e) - (x.y - t.y) * Math[s(344)](e) + t.x, y: (x.x - t.x) * Math[s(344)](e) + (x.y - t.y) * Math[s(372)](e) + t.y };
  }
  static [n0(368)](x, t, e, s) {
    const i = n0;
    let r = e - x, a = s - t;
    return Math[i(341)](r * r + a * a);
  }
  static [n0(371)](x, t) {
    const e = n0;
    let s = t.x - x.x, i = t.y - x.y;
    return Math[e(341)](s * s + i * i);
  }
  static [n0(340)](x) {
    const t = n0;
    let e = [x[0]];
    for (let s = 1; s < x[t(365)] - 1; s++) {
      let i = e[e[t(365)] - 1], r = x[s], a = x[s + 1];
      if (r.x === a.x && r.y === a.y)
        continue;
      let o = R.normalize([], [r.x - i.x, r.y - i.y]), c = R[t(369)]([], [a.x - r.x, a.y - r.y]);
      Math[t(351)](o[0] - c[0]) < 0.01 && Math[t(351)](o[1] - c[1]) < 0.01 || e[t(343)](r);
    }
    return e.push(x[x[t(365)] - 1]), e;
  }
  static [n0(339)](x, t, e) {
    const s = n0, i = [t.x - x.x, t.y - x.y];
    return R[s(369)](i, i), R[s(338)](i, i, e), { x: x.x + i[0], y: x.y + i[1] };
  }
  static [n0(355)](x, t, e) {
    const s = n0;
    let i = Math[s(356)](t.y - x.y, t.x - x.x);
    return { x: x.x + e * Math[s(372)](i), y: x.y + e * Math.sin(i) };
  }
  static offsetWithAngle(x, t, e) {
    const s = n0;
    return typeof e == "number" && (e = { x: Math[s(372)](t) * e, y: Math[s(344)](t) * e }), { x: x.x + e.x, y: x.y + e.y };
  }
  static createPoints(x, t, e = 1, s = ![]) {
    const i = s ? [x] : [], r = s ? e - 1 : e;
    let a = x;
    for (var o = 0; o < r; o++) {
      const c = { x: a.x + t[0], y: a.y + t[1] };
      i.push(c), a = c;
    }
    return i;
  }
  static [n0(367)](x, t, e) {
    const s = n0;
    if (e == 0)
      return [];
    const i = [-t[0], -t[1]];
    if (e % 2 == 0) {
      const o = [t[0] / 2, t[1] / 2], c = { x: x.x - o[0], y: x.y - o[1] }, h = { x: x.x + o[0], y: x.y + o[1] }, l = D.createPoints(c, i, e / 2, !![]), d = D[s(357)](h, t, e / 2, !![]);
      return l[s(349)](d);
    }
    const r = D[s(357)](x, i, (e - 1) / 2 + 1, !![]), a = D[s(357)](x, t, (e - 1) / 2, ![]);
    return r[s(349)](a);
  }
  static between(x, t, e, s = 0) {
    const i = n0;
    let r = (1 - e) * x.x, a = (1 - e) * x.y, o = e * t.x, c = e * t.y, h = { x: r + o, y: a + c };
    if (s != null && s != 0) {
      let l = Math[i(356)](t.y - x.y, t.x - x.x);
      h = { x: h.x + s * Math[i(372)](l), y: h.y + s * Math[i(344)](l) };
    }
    return h;
  }
  static [n0(353)](x) {
    const t = n0;
    let e = x[t(365)];
    if (e < 2)
      throw new Error(t(350));
    let s = x[0], i = x[e - 1];
    if (x[t(365)] == 2)
      return D[t(371)](s, i);
    let r = 0;
    for (var a = 1; a < e; a++)
      r += D.distancePoint(x[a - 1], x[a]);
    return r;
  }
  static [n0(359)](x, t, e) {
    const s = n0;
    let i = x.length;
    if (x[s(365)] < 2)
      throw new Error("points.length < 2");
    let r = x[0], a = x[x.length - 1];
    if (x.length == 2)
      return D[s(347)](r, a, t, e);
    if (t < 0)
      return D.between(x[0], x[1], t, e);
    if (t > 1)
      return D[s(347)](x[x[s(365)] - 2], x[x[s(365)] - 1], t, e);
    let o = D[s(353)](x), c = o * t, h = 0;
    for (var l = 1; l < i; l++) {
      let d = D[s(371)](x[l - 1], x[l]);
      if (c >= h && c <= h + d) {
        let y = c - h, g = y / d;
        return D[s(347)](x[l - 1], x[l], g, e);
      }
      h += d;
    }
    throw console[s(370)](x, t), new Error("assert error betweenPoints");
  }
}
function qx(n, x) {
  const t = Vx();
  return qx = function(e, s) {
    return e = e - 182, t[e];
  }, qx(n, x);
}
const o0 = qx;
function Vx() {
  const n = ["rotateTarget", "getTranslation", "80217RjyHtQ", "cos", "usedList", "pop", "allocationCount", "rotate", "matrixSize", "splice", "compact", "freeCount", "identity", "5856284IofqaH", "compactThreshold", "translate", "1764065mIKMFq", "Failed to expand buffer", "indexOf", "67320AnDKav", "setAbsolutePosition", "matrix", "byteLength", "2XHAvxl", "902929AtdOnm", "scale", "getMatrix", "4030128tAmSZU", "buffer", "freeList", "18wugKOi", "index", "1920FEklqD", "1489920uEOyPC", "expand", "allocate", "length", "point", "792NdmUTf", "transform", "push", "sort", "sin", "getScale", "getRotation", "translateTo", "copy"];
  return Vx = function() {
    return n;
  }, Vx();
}
(function(n, x) {
  const t = qx, e = n();
  for (; []; )
    try {
      if (parseInt(t(199)) / 1 * (parseInt(t(198)) / 2) + parseInt(t(208)) / 3 + -parseInt(t(202)) / 4 + parseInt(t(191)) / 5 * (-parseInt(t(205)) / 6) + -parseInt(t(188)) / 7 + parseInt(t(213)) / 8 * (parseInt(t(224)) / 9) + parseInt(t(207)) / 10 * (parseInt(t(194)) / 11) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Vx, 554413);
class rs {
  constructor(x) {
    this.m = x && x.slice() || [1, 0, 0, 1, 0, 0];
  }
  copy() {
    return new rs(this.m);
  }
  [o0(187)]() {
    this.m = [1, 0, 0, 1, 0, 0];
  }
  [o0(214)](x, t, e, s, i, r) {
    this.m[0] = x, this.m[1] = t, this.m[2] = e, this.m[3] = s, this.m[4] = i, this.m[5] = r;
  }
  point(x) {
    let t = this.m;
    return { x: t[0] * x.x + t[2] * x.y + t[4], y: t[3] * x.y + t[1] * x.x + t[5] };
  }
  vec(x, t) {
    let e = this.m;
    return { x: e[0] * x + e[2] * t, y: e[3] * t + e[1] * x };
  }
  points(x) {
    const t = o0;
    let e = [];
    for (var s = 0; s < x[t(211)]; s++) {
      let i = x[s];
      e[t(215)](this[t(212)](i));
    }
    return e;
  }
  translate(x, t) {
    return this.m[4] += this.m[0] * x + this.m[2] * t, this.m[5] += this.m[1] * x + this.m[3] * t, this;
  }
  translateTo(x, t) {
    return this.m[4] = x, this.m[5] = t, this;
  }
  [o0(200)](x, t) {
    return this.m[0] *= x, this.m[1] *= x, this.m[2] *= t, this.m[3] *= t, this;
  }
  [o0(218)]() {
    return { x: this.m[0], y: this.m[3] };
  }
  [o0(182)](x) {
    const t = o0;
    let e = Math[t(225)](x), s = Math[t(217)](x), i = this.m[0] * e + this.m[2] * s, r = this.m[1] * e + this.m[3] * s, a = this.m[0] * -s + this.m[2] * e, o = this.m[1] * -s + this.m[3] * e;
    return this.m[0] = i, this.m[1] = r, this.m[2] = a, this.m[3] = o, this;
  }
  [o0(222)](x, t, e) {
    const s = o0;
    this[s(190)](t, e), this[s(182)](x), this[s(190)](-t, -e);
  }
  [o0(223)]() {
    return { x: this.m[4], y: this.m[5] };
  }
  [o0(219)]() {
    const x = o0;
    let t = this[x(221)]();
    t[x(220)](0, 0);
    let e = t[x(212)]({ x: 0, y: 0 });
    return Math.atan2(e.y, e.x);
  }
  multiply(x) {
    let t = this.m[0] * x.m[0] + this.m[2] * x.m[1], e = this.m[1] * x.m[0] + this.m[3] * x.m[1], s = this.m[0] * x.m[2] + this.m[2] * x.m[3], i = this.m[1] * x.m[2] + this.m[3] * x.m[3], r = this.m[0] * x.m[4] + this.m[2] * x.m[5] + this.m[4], a = this.m[1] * x.m[4] + this.m[3] * x.m[5] + this.m[5];
    return this.m[0] = t, this.m[1] = e, this.m[2] = s, this.m[3] = i, this.m[4] = r, this.m[5] = a, this;
  }
  invert() {
    let x = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), t = this.m[3] * x, e = -this.m[1] * x, s = -this.m[2] * x, i = this.m[0] * x, r = x * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), a = x * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
    return this.m[0] = t, this.m[1] = e, this.m[2] = s, this.m[3] = i, this.m[4] = r, this.m[5] = a, this;
  }
  [o0(201)]() {
    return this.m;
  }
  [o0(195)](x, t) {
    let e = this.m[0], s = this.m[1], i = this.m[2], r = this.m[3], a = this.m[4], o = this.m[5], c = (e * (t - o) - s * (x - a)) / (e * r - s * i), h = (x - a - i * c) / e;
    return this.translate(h, c);
  }
}
class oo {
  constructor(x, t, e) {
    const s = o0;
    this.buffer = new ArrayBuffer(x), this.matrixSize = t, this[s(204)] = [0], this[s(226)] = [], this[s(189)] = e, this[s(228)] = 0, this[s(186)] = 0;
  }
  [o0(210)]() {
    const x = o0;
    if (this[x(204)][x(211)] === 0 && !this[x(209)]())
      throw new Error(x(192));
    const t = this[x(204)][x(227)](), e = new Float32Array(this[x(203)], t, this[x(183)]);
    return this[x(226)].push({ index: t, matrix: e }), this[x(228)]++, this.allocationCount - this[x(186)] > this[x(189)] && this.compact(), e;
  }
  free(x) {
    const t = o0, e = x.byteOffset, s = this.usedList.find((i) => i[t(206)] === e);
    s && (this.usedList[t(184)](this[t(226)][t(193)](s), 1), this[t(204)].push(e), this[t(186)]++, this[t(228)] - this[t(186)] > this.compactThreshold && this[t(185)]());
  }
  compact() {
    const x = o0;
    this[x(226)][x(216)]((s, i) => s.index - i[x(206)]), this[x(204)] = [];
    let t = 0;
    for (const s of this[x(226)])
      s[x(206)] - t > 0 && this[x(204)].push(t), t = s.index + s[x(196)][x(197)];
    this[x(203)][x(197)] - t > 0 && this[x(204)][x(215)](t), this[x(228)] = this[x(226)][x(211)], this[x(186)] = this[x(204)][x(211)];
  }
  [o0(209)]() {
    const x = o0, t = new ArrayBuffer(this[x(203)].byteLength * 2);
    if (!t)
      return ![];
    const e = new Uint8Array(t), s = new Uint8Array(this[x(203)]);
    e.set(s), this.buffer = t;
    const i = this.freeList[this[x(204)][x(211)] - 1];
    for (let r = this[x(203)][x(197)] - this.matrixSize; r >= i; r -= this.matrixSize)
      this[x(204)][x(215)](r);
    return !![];
  }
}
const Q = Tt;
(function(n, x) {
  const t = Tt, e = n();
  for (; []; )
    try {
      if (-parseInt(t(163)) / 1 + parseInt(t(153)) / 2 * (parseInt(t(144)) / 3) + parseInt(t(167)) / 4 + -parseInt(t(166)) / 5 + -parseInt(t(151)) / 6 + -parseInt(t(165)) / 7 + parseInt(t(143)) / 8 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Kx, 233373);
function Tt(n, x) {
  const t = Kx();
  return Tt = function(e, s) {
    return e = e - 133, t[e];
  }, Tt(n, x);
}
class K {
  constructor(x = 0, t = 0, e = 0, s = 0) {
    const i = Tt;
    this.x = 0, this.y = 0, this[i(156)] = 0, this[i(152)] = 0, this.x = x, this.y = t, this[i(156)] = e, this.height = s;
  }
  setTo(x = 0, t = 0, e = 0, s = 0) {
    const i = Tt;
    this.x = x, this.y = t, this[i(156)] = e, this[i(152)] = s;
  }
  [Q(164)]() {
    return this;
  }
  [Q(161)]() {
    const x = Q;
    return new K(this.x, this.y, this[x(156)], this[x(152)]);
  }
  [Q(148)]() {
    const x = Q;
    return x(155) + this.x + x(141) + this.y + x(162) + this[x(156)] + x(137) + this[x(152)] + "]";
  }
  [Q(146)](x) {
    const t = Q;
    return x.x == this.x && x.y == this.y && x[t(156)] == this[t(156)] && x[t(152)] == this[t(152)];
  }
  [Q(134)](x) {
    const t = Q;
    return x.x > this.x && x[t(150)]() < this[t(150)]() && x.y > this.y && x[t(140)]() < this[t(140)]() ? !![] : ![];
  }
  [Q(135)](x, t) {
    const e = Q;
    return x >= this.x && x <= this.x + this[e(156)] && t >= this.y && t <= this.y + this[e(152)];
  }
  [Q(142)](x) {
    const t = Q;
    return x.x > this[t(150)]() || x.y > this.getBottom() ? ![] : x.getRight() < this.x || x[t(140)]() < this.y ? ![] : !![];
  }
  getRight() {
    const x = Q;
    return this.x + this[x(156)];
  }
  [Q(140)]() {
    return this.y + this.height;
  }
  [Q(139)]() {
    const x = Q;
    return this.x === 0 && this.y === 0 && this[x(156)] === 0 && this[x(152)] === 0;
  }
  [Q(136)]() {
    this[Q(158)](0, 0, 0, 0);
  }
  [Q(138)]() {
    const x = Q;
    return { x: this.x + this[x(156)] / 2, y: this.y + this[x(152)] / 2 };
  }
  static union(x, t) {
    const e = Q;
    let s = Math.min(x.x, t.x), i = Math[e(160)](x.y, t.y), r = Math[e(145)](x[e(150)](), t.getRight()), a = Math.max(x[e(140)](), t.getBottom());
    return x[e(158)](s, i, r - s, a - i), x;
  }
  static normal(x, t) {
    const e = Q;
    let s = t.x - x.x, i = t.y - x.y;
    return Math.abs(s) > Math[e(159)](i) ? [Math.sign(s), 0] : [0, Math[e(133)](i)];
  }
}
class xx {
  constructor(x) {
    const t = Q;
    this[t(154)] = x, this[t(157)] = xx[t(149)](x);
  }
  [Q(135)](x, t) {
    const e = Q;
    return this[e(157)][e(135)](x, t) == ![] ? ![] : !![];
  }
  static toAABB(x) {
    const t = Q;
    let e = x[0], s = { x: e.x, y: e.y }, i = { x: e.x, y: e.y }, r = { x: e.x, y: e.y }, a = { x: e.x, y: e.y };
    for (let o = 1; o < x[t(147)]; o++) {
      let c = x[o];
      c.x < s.x && (s.x = c.x), c.x > i.x && (i.x = c.x), c.y < r.y && (r.y = c.y), c.y > a.y && (a.y = c.y);
    }
    return new K(s.x, r.y, i.x - s.x, a.y - r.y);
  }
}
function Kx() {
  const n = ["toString", "toAABB", "getRight", "2183556SiwVgU", "height", "831444llLpnY", "points", "[x: ", "width", "aabb", "setTo", "abs", "min", "clone", " width:", "381464ZkyyjE", "getRect", "2917754fQTjUW", "337885fEpsKI", "1571920aGMjyE", "sign", "containsRect", "contains", "setToEmpty", " height:", "getCenter", "isEmpty", "getBottom", " y:", "isIntersectRect", "5235680Ixprny", "3bHtCnG", "max", "equals", "length"];
  return Kx = function() {
    return n;
  }, Kx();
}
(function(n, x) {
  for (var t = gs, e = n(); []; )
    try {
      var s = -parseInt(t(501)) / 1 + -parseInt(t(505)) / 2 * (parseInt(t(504)) / 3) + -parseInt(t(506)) / 4 * (-parseInt(t(503)) / 5) + -parseInt(t(510)) / 6 + parseInt(t(500)) / 7 * (-parseInt(t(502)) / 8) + -parseInt(t(507)) / 9 * (-parseInt(t(509)) / 10) + parseInt(t(508)) / 11;
      if (s === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Ux, 833265);
function Ux() {
  var n = ["585axvxXu", "66321TrJwau", "146aMZuJL", "39692pwgvKO", "446652lwWJBm", "36983045vZScNw", "50gLmYSE", "8154324qHqgBV", "280veDFwx", "132736ZxLiVv", "166472AQUfqg"];
  return Ux = function() {
    return n;
  }, Ux();
}
function gs(n, x) {
  var t = Ux();
  return gs = function(e, s) {
    e = e - 500;
    var i = t[e];
    return i;
  }, gs(n, x);
}
(function(n, x) {
  for (var t = _s, e = n(); []; )
    try {
      var s = -parseInt(t(404)) / 1 + parseInt(t(406)) / 2 + -parseInt(t(402)) / 3 * (-parseInt(t(409)) / 4) + -parseInt(t(403)) / 5 + -parseInt(t(401)) / 6 + parseInt(t(405)) / 7 + -parseInt(t(407)) / 8 * (-parseInt(t(408)) / 9);
      if (s === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Gx, 812528);
function _s(n, x) {
  var t = Gx();
  return _s = function(e, s) {
    e = e - 401;
    var i = t[e];
    return i;
  }, _s(n, x);
}
function Gx() {
  var n = ["3846459NEPpdr", "4726470szSfdr", "1159476vLtcqo", "8553034VrwayF", "1675090KNqjhl", "203408ZibyiV", "225YOSKyB", "4vgfCmb", "6359472YVtffw"];
  return Gx = function() {
    return n;
  }, Gx();
}
const ut = ex;
(function(n, x) {
  const t = ex, e = n();
  for (; []; )
    try {
      if (-parseInt(t(460)) / 1 * (parseInt(t(463)) / 2) + parseInt(t(467)) / 3 * (-parseInt(t(461)) / 4) + -parseInt(t(469)) / 5 * (parseInt(t(470)) / 6) + parseInt(t(464)) / 7 + -parseInt(t(462)) / 8 + parseInt(t(474)) / 9 * (-parseInt(t(459)) / 10) + -parseInt(t(473)) / 11 * (-parseInt(t(475)) / 12) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Jx, 252261);
function ex(n, x) {
  const t = Jx();
  return ex = function(e, s) {
    return e = e - 458, t[e];
  }, ex(n, x);
}
function Jx() {
  const n = ["addEventListener", "type", "30FXvhju", "202311EHpeEs", "693820pdJrKW", "3368344mhsRkQ", "4euPJwa", "1299459JccVzK", "listeners", "length", "6Rylpwc", "hasListener", "4995RZTHIF", "504JEChhi", "push", "removeEventListener", "7631041WpKyuh", "193041zdImTE", "24VdjyHn"];
  return Jx = function() {
    return n;
  }, Jx();
}
class U0 {
  constructor() {
    const x = ex;
    this[x(465)] = {};
  }
  [ut(468)](x) {
    return x in this.listeners;
  }
  [ut(476)](x, t) {
    const e = ut;
    !(x in this[e(465)]) && (this[e(465)][x] = []), this.listeners[x][e(471)](t);
  }
  [ut(472)](x, t) {
    const e = ut;
    if (!(x in this.listeners))
      return;
    let s = this[e(465)][x];
    for (var i = 0, r = s.length; i < r; i++)
      if (s[i] === t)
        return s.splice(i, 1), this[e(472)](x, t);
  }
  dispatchEvent(x) {
    const t = ut;
    if (!(x[t(458)] in this[t(465)]))
      return;
    let e = this[t(465)][x.type];
    for (var s = 0, i = e[t(466)]; s < i; s++)
      e[s].call(this, x);
  }
  on(x, t) {
    return this[ut(476)](x, t);
  }
}
const Y = Qx;
(function(n, x) {
  const t = Qx, e = n();
  for (; []; )
    try {
      if (-parseInt(t(151)) / 1 + -parseInt(t(144)) / 2 * (parseInt(t(145)) / 3) + parseInt(t(155)) / 4 * (parseInt(t(179)) / 5) + -parseInt(t(168)) / 6 + -parseInt(t(162)) / 7 * (-parseInt(t(165)) / 8) + parseInt(t(156)) / 9 * (parseInt(t(181)) / 10) + -parseInt(t(178)) / 11 * (parseInt(t(139)) / 12) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})($x, 325957);
const k0 = { DefaultFont: Y(153) }, ms = 2 * Math.PI, Zx = Y(167), M0 = { drag: Y(166), edit: "edit", normal: Y(161), select: Y(171), view: Y(169) }, lr = { move: Y(146), corosshair: Y(158), s_resize: "s-resize", n_resize: Y(159), w_resize: Y(140), e_resize: Y(173) }, Ft = { horizontal: "horizontal", vertical: Y(176) }, S = { lt: "lt", ct: "ct", rt: "rt", lm: "lm", center: "center", rm: "rm", lb: "lb", cb: "cb", rb: "rb", nearest: Y(163), begin: Y(154), end: Y(170), ctrlPoint: Y(174), ctrlPoint1: Y(149), ctrlPoint2: Y(141), fold1: Y(152), fold2: Y(143), mid: Y(148), mid1: Y(157), mid2: "mid2", up: "up", down: Y(172), left: Y(150), right: Y(177) }, ur = { lt: S.rb, ct: S.cb, rt: S.lb, rm: S.lm, rb: S.lt, cb: S.ct, lb: S.rt, lm: S.rm }, Mx = { HandlerLayerCanvas: 99, FullWindowDom: 1e3, Link: 1, Node: 2, EditorNewLink: 3, IntersectPoint: 999, NodeCtrlBox: 1e3, LinkCtrlBox: 1001 }, Fs = !![];
function X0(n, ...x) {
  Fs != ![] && console.assert(n != null, x);
}
function fr(n, x, ...t) {
  Fs != ![] && console.assert(n == x, t);
}
function mi(n, ...x) {
  const t = Y;
  Fs != ![] && console[t(180)](n, x);
}
const Bt = 0, W0 = 1, O0 = { zoom: "zoom", resize: Y(160), zoomAfter: Y(175), fullWindow: "fullWindow", modeChange: "modeChange", groupdrag: Y(164), groupdragend: Y(147), selectObject: Y(142) };
function Qx(n, x) {
  const t = $x();
  return Qx = function(e, s) {
    return e = e - 139, t[e];
  }, Qx(n, x);
}
function $x() {
  const n = ["fold1", "10px sans-serif", "begin", "371568NcDlEp", "645327AfGLaS", "mid1", "corosshair", "n-resize", "resize", "normal", "14OojsrL", "nearest", "groupdrag", "2392816FSCcce", "drag", "2.0.1", "404220QDzyNy", "view", "end", "select", "down", "e-resize", "ctrlPoint", "zoomAfter", "vertical", "right", "88649WYZIxD", "20znoyri", "assert", "90YHrlYu", "1500zrpUjU", "w-resize", "ctrlPoint2", "selectObject", "fold2", "586onUnYG", "1299iSehfj", "move", "groupdragend", "mid", "ctrlPoint1", "left", "87528xZMTnw"];
  return $x = function() {
    return n;
  }, $x();
}
function v(n) {
  return (x, t) => {
    x[t] = n;
  };
}
const g0 = nx;
(function(n, x) {
  const t = nx, e = n();
  for (; []; )
    try {
      if (-parseInt(t(191)) / 1 + -parseInt(t(173)) / 2 + -parseInt(t(200)) / 3 + -parseInt(t(189)) / 4 * (parseInt(t(199)) / 5) + parseInt(t(190)) / 6 * (parseInt(t(180)) / 7) + -parseInt(t(181)) / 8 * (parseInt(t(187)) / 9) + parseInt(t(197)) / 10 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(te, 966475);
function te() {
  const n = ["forEach", "indexOf", "slice", "70183230NXcWKI", "rotateNormaledPoints", "15rfhGNS", "2659323XhduAT", "map", "getPointsRect", "max", "notContains", "3568600BlyaDO", "setTo", "removeAt", "remove", "min", "getPointsNormalization", "splice", "14595AykEsi", "2392nAgRUp", "MAX_SAFE_INTEGER", "length", "getMinMax", "height", "union", "44397tcCDcu", "getRectsNormalization", "1237816BvQBrK", "834Bkckhz", "1267593sYEehS", "push", "width"];
  return te = function() {
    return n;
  }, te();
}
class J {
  static hasChild(x, t) {
    return x[nx(195)](t) != -1;
  }
  static [g0(172)](x, t) {
    return x.indexOf(t) == -1;
  }
  static addAll(x, t) {
    const e = g0;
    for (var s = 0; s < t[e(183)]; s++)
      x[e(192)](t[s]);
    return x;
  }
  static [g0(175)](x, t) {
    return x[g0(179)](t, 1);
  }
  static [g0(176)](x, t) {
    const e = g0;
    let s = x[e(195)](t);
    return s == -1 ? -1 : (x[e(179)](s, 1), s);
  }
  static [g0(202)](x) {
    const t = g0;
    let e = Number[t(182)], s = Number[t(182)], i = Number.MIN_SAFE_INTEGER, r = Number.MIN_SAFE_INTEGER;
    return x[t(194)](function(a) {
      a.x < e && (e = a.x), a.y < s && (s = a.y), a.x > i && (i = a.x), a.y > r && (r = a.y);
    }), new K(e, s, i - e, r - s);
  }
  static [g0(188)](x, t) {
    const e = g0;
    let s = new K();
    s[e(174)](x[0].x, x[0].y, x[0].width, x[0].height);
    for (let h = 1; h < x[e(183)]; h++)
      K[e(186)](s, x[h]);
    let i = s.width, r = s[e(185)], a = s.x, o = s.y;
    return x.map((h) => {
      const l = e;
      let d = h[l(193)] / i, y = h[l(185)] / r, g = (h.x - a) / i, p = (h.y - o) / r, k = d * t[l(193)], I = y * t[l(185)], L = t.x + g * t[l(193)], P = t.y + p * t[l(185)];
      return new K(L, P, k, I);
    });
  }
  static getMinMax(x) {
    const t = g0;
    let e = { x: x[0].x, y: x[0].y }, s = { x: x[0].x, y: x[0].y };
    for (let i = 1; i < x.length; i++) {
      let r = x[i];
      e.x = Math[t(177)](e.x, r.x), e.y = Math[t(177)](e.y, r.y), s.x = Math.max(s.x, r.x), s.y = Math.max(s.y, r.y);
    }
    return { min: e, max: s };
  }
  static [g0(178)](x, t = -0.5, e = -0.5, s = !![]) {
    const i = g0;
    let r = J[i(184)](x), a = r[i(177)], o = r[i(171)], c = o.x - a.x, h = o.y - a.y;
    if (c == h || s == ![])
      return x[i(201)]((g) => ({ x: (g.x - a.x) / c + t, y: (g.y - a.y) / h + e }));
    if (c > h) {
      let y = (c - h) * 0.5;
      return h = c, x.map((p) => ({ x: (p.x - a.x) / c + t, y: (p.y + y - a.y) / h + e }));
    }
    let l = (h - c) * 0.5;
    return c = h, x[i(201)]((y) => ({ x: (y.x + l - a.x) / c + t, y: (y.y - a.y) / h + e }));
  }
  static [g0(198)](x, t, e = 0, s = 0) {
    const i = g0;
    if (t == 0 || t % 6.283185307179586 == 0)
      return x[i(196)]();
    let r = x[i(201)]((a) => D.rotate(a.x, a.y, e, s, t));
    return J[i(178)](r);
  }
}
function nx(n, x) {
  const t = te();
  return nx = function(e, s) {
    return e = e - 171, t[e];
  }, nx(n, x);
}
const Ks = xe;
(function(n, x) {
  const t = xe, e = n();
  for (; []; )
    try {
      if (parseInt(t(403)) / 1 * (-parseInt(t(402)) / 2) + -parseInt(t(387)) / 3 * (-parseInt(t(384)) / 4) + -parseInt(t(394)) / 5 + parseInt(t(401)) / 6 * (parseInt(t(396)) / 7) + parseInt(t(392)) / 8 * (parseInt(t(389)) / 9) + parseInt(t(399)) / 10 + -parseInt(t(398)) / 11 * (parseInt(t(395)) / 12) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ee, 917023);
var vt = {};
class dr extends U0 {
  clearCache() {
    vt = {};
  }
  [Ks(386)](x, t) {
    const e = Ks;
    let s = this;
    s[e(400)] = x;
    function i(a) {
      const o = e;
      t(a), s[o(383)] = !![];
    }
    let r = vt[x];
    if (r != null && !Array[e(390)](r)) {
      i(r);
      return;
    }
    if (x.isHtmlImage == !![]) {
      x[e(388)]()[e(382)](i), s[e(393)]({ type: e(391), resource: r });
      return;
    }
    if (t != null) {
      let a = vt[x];
      a == null && (a = [], vt[x] = a), Array[e(390)](a) && a.push(t);
    }
    setTimeout(function() {
      const a = e;
      let o = new Image();
      o[a(385)] = x, o.onload = function() {
        const c = a;
        let h = vt[x];
        Array.isArray(h) && h[c(397)]((l) => l(o)), vt[x] = o, s[c(393)]({ type: c(391), resource: o });
      };
    }, 1);
  }
}
var Y0 = new dr();
function xe(n, x) {
  const t = ee();
  return xe = function(e, s) {
    return e = e - 382, t[e];
  }, xe(n, x);
}
function ee() {
  const n = ["dispatchEvent", "8193805tpEObc", "852yUUmzY", "2324lqFWlg", "forEach", "111199ijRfvK", "5872290dxbcYV", "lastResource", "18774AhePyV", "840374hFrvxV", "1eWfCDY", "then", "hasLoaded", "123148gDcAxH", "src", "loadImage", "177ZuhKbh", "getCanvas", "753660rsXDHS", "isArray", "loaded", "24BGhCqF"];
  return ee = function() {
    return n;
  }, ee();
}
function ne() {
  const n = ["19340431uMVYlr", "length", "concat", "97053dFWPSo", "56DPVzPn", "function", "376515qUYOGO", "514122uPzMwT", "299964zvgEsb", "40oLKKnE", "8GYRahe", "12sqjFiR", "6788190PxNptE", "24VITVRM", "class not exist name:", "prototype", "defineProperties", "className", "6693282LqtifS"];
  return ne = function() {
    return n;
  }, ne();
}
(function(n, x) {
  const t = jt, e = n();
  for (; []; )
    try {
      if (-parseInt(t(306)) / 1 * (parseInt(t(313)) / 2) + parseInt(t(309)) / 3 * (parseInt(t(316)) / 4) + parseInt(t(312)) / 5 * (parseInt(t(310)) / 6) + parseInt(t(311)) / 7 * (-parseInt(t(307)) / 8) + parseInt(t(302)) / 9 + parseInt(t(315)) / 10 + -parseInt(t(303)) / 11 * (parseInt(t(314)) / 12) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ne, 414646);
function jt(n, x) {
  const t = ne();
  return jt = function(e, s) {
    return e = e - 298, t[e];
  }, jt(n, x);
}
function pr(n, x, t) {
  return typeof n == jt(308) ? Us(n.name, n, x) : Us(n, x, t);
}
function Us(n, x, t) {
  const e = jt;
  if (k0[n] != null)
    throw new Error("class already reg, name:" + n);
  const s = x[e(299)];
  t != null && t[e(304)] > 0 && (s.serializers = s.serializers[e(305)](t)), Object[e(300)](s, { className: { writable: !![] } }), s[e(301)] = n, Object[e(300)](s, { className: { writable: ![] } }), k0[n] = x;
}
function Bs(n) {
  const x = jt;
  let t = k0[n];
  if (t == null)
    throw new Error(x(298) + n);
  return t;
}
function se() {
  const n = ["910AtDWVh", "1738666FzngzP", "4OROQyj", "31576xrNqYy", "compare", "back", "24lNkTCy", "312760cCVoov", "30041vaHepX", "resetTo", "next", "1485XPLsAQ", "1211055GPkHSp", "746260ftEEBq", "getMax", "413949aPwxbB"];
  return se = function() {
    return n;
  }, se();
}
const Vt = ie;
function ie(n, x) {
  const t = se();
  return ie = function(e, s) {
    return e = e - 381, t[e];
  }, ie(n, x);
}
(function(n, x) {
  const t = ie, e = n();
  for (; []; )
    try {
      if (-parseInt(t(383)) / 1 + parseInt(t(385)) / 2 + -parseInt(t(396)) / 3 + parseInt(t(386)) / 4 * (-parseInt(t(381)) / 5) + -parseInt(t(390)) / 6 * (parseInt(t(391)) / 7) + parseInt(t(387)) / 8 * (parseInt(t(395)) / 9) + -parseInt(t(384)) / 10 * (-parseInt(t(392)) / 11) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(se, 623503);
let Kt = 0, D0 = {};
D0[Vt(394)] = function() {
  return ++Kt;
}, D0[Vt(389)] = function() {
  return --Kt;
}, D0[Vt(382)] = function() {
  return Kt;
}, D0.resetTo = function(n) {
  Kt = n;
}, D0[Vt(388)] = function(n) {
  const x = Vt;
  n != null && n > Kt && D0[x(393)](n + 1);
};
const O = ix;
(function(n, x) {
  const t = ix, e = n();
  for (; []; )
    try {
      if (parseInt(t(181)) / 1 + -parseInt(t(153)) / 2 * (parseInt(t(163)) / 3) + parseInt(t(161)) / 4 * (-parseInt(t(158)) / 5) + parseInt(t(195)) / 6 * (-parseInt(t(198)) / 7) + parseInt(t(182)) / 8 * (-parseInt(t(150)) / 9) + parseInt(t(169)) / 10 + parseInt(t(184)) / 11 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(re, 956334);
var br = Object[O(197)], yr = Object.getOwnPropertyDescriptor, sx = (n, x, t, e) => {
  const s = O;
  for (var i = e > 1 ? void 0 : e ? yr(x, t) : x, r = n[s(156)] - 1, a; r >= 0; r--)
    (a = n[r]) && (i = (e ? a(x, t, i) : a(i)) || i);
  return e && i && br(x, t, i), i;
};
function ix(n, x) {
  const t = re();
  return ix = function(e, s) {
    return e = e - 147, t[e];
  }, ix(n, x);
}
function re() {
  const n = ["dirty", "defineProperty", "84rLdvHM", "step", "Triangle", "atan2", "RectShape", "className", "61137xJhrcN", "lineTo", "closePath", "4ZIKMLQ", "sin", "pointToSize", "length", "nearest", "5uQucpR", "cos", "circle", "1881556NWeGlL", "tip", "2470383ChEVAy", "Polygon", "outerGrid", "parallelogram", "Arrow", "push", "12431970szJJMl", "Scale", "Rect", "points", "rect", "fromPoints", "center is zero vector", "draw", "Damond", "getPointsNormalization", "isClosed", "toPojo", "1512794iDpmQn", "1608jreLiv", "begin", "22947265wBmdBO", "prototype", "map", "rotate", "forEach", "moveTo", "Rotate", "end", "polygon", "pointCount", "ArrowShape", "201534dbnyYT"];
  return re = function() {
    return n;
  }, re();
}
const L0 = class {
  constructor(n) {
    const x = O;
    this[x(179)] = !![], this[x(172)] = n;
  }
  [O(180)]() {
    const n = O;
    let x = { className: this[n(149)] };
    return x.points = this[n(172)], x[n(179)] = this[n(179)], x;
  }
  static fromPojo(n) {
    const x = O;
    let t = Bs(n[x(149)]), e = new t(n.points);
    return e[x(179)] = n.isClosed, e;
  }
  static fromPoints(n, x = !![]) {
    let e = J[O(178)](n, -0.5, -0.5, x);
    return new L0(e);
  }
  draw(n, x) {
    const t = O;
    x.moveTo(n[0].x, n[0].y);
    let e = n[0];
    for (let s = 1; s < n.length; s++) {
      if (n[s].x === e.x && n[s].y === e.y) {
        e = n[s];
        continue;
      }
      x[t(151)](n[s].x, n[s].y), e = n[s];
    }
    this[t(179)] && x[t(152)]();
  }
  [O(187)](n) {
    const x = O;
    return this[x(172)] = J.rotateNormaledPoints(this[x(172)], n), this.dirty = !![], this;
  }
  scale(n, x) {
    const t = O;
    return this[t(172)][t(188)]((e) => {
      e.x *= n, e.y *= x;
    }), this.points = J[t(178)](this[t(172)]), this[t(196)] = !![], this;
  }
  static [O(170)](n, x) {
    return function(t) {
      return t.x *= n, t.y *= x, t;
    };
  }
  static [O(190)](n) {
    return function(x) {
      const t = ix;
      let e = Math[t(147)](x.y, x.x), s = e + n, i = D.distance(x.x, x.y, 0, 0);
      return x.x = i * Math[t(159)](s), x.y = i * Math.sin(s), x;
    };
  }
  skew(n, x) {
    const t = O;
    return this.points[t(188)]((e) => {
      let s = e.x, i = e.y;
      e.x = s + i * x, e.y = i + s * n;
    }), this[t(172)] = J.getPointsNormalization(this[t(172)]), this[t(196)] = !![], this;
  }
  static [O(155)](n, x, t, e = ![]) {
    const s = O;
    return e == !![] && x != t && (x > t ? x = t : t = x), n.points[s(186)]((r) => ({ x: r.x * x, y: r.y * t }));
  }
  static [O(192)](n = 3, x = 0) {
    const t = O;
    let e = [], s = 2 * Math.PI / n;
    for (var i = 0; i < n; i++) {
      let a = Math.cos(x + i * s), o = Math[t(154)](x + i * s);
      e[t(168)]({ x: a, y: o });
    }
    return L0.fromPoints(e);
  }
  static [O(166)](n = 0.2) {
    const x = O;
    let t = [{ x: n, y: 0 }, { x: 1, y: 0 }, { x: 1 - n, y: 1 }, { x: 0, y: 1 }];
    return L0[x(174)](t);
  }
  static cos(n) {
    const x = O;
    n[x(183)] = n[x(183)] | 0, n[x(191)] = n[x(191)] | ms;
    let t = [];
    if (n[x(193)] == null) {
      n[x(199)] = n[x(199)] | 0.2;
      for (let e = n.begin; e <= n[x(191)]; e += n[x(199)]) {
        let s = e;
        t.push({ x: s, y: Math[x(159)](s) });
      }
    } else {
      n[x(199)] = (n.end - n[x(183)]) / n.pointCount;
      for (let e = 0; e < n[x(193)]; e++) {
        let s = (e + 1) * n[x(199)];
        t.push({ x: s, y: Math[x(159)](s) });
      }
    }
    return L0[x(174)](t);
  }
  static [O(160)](n) {
    const x = O;
    n[x(183)] = n[x(183)] || 0, n[x(191)] = n[x(191)] || ms;
    let t = [];
    if (n[x(193)] == null) {
      n[x(199)] = n[x(199)] | 0.2;
      for (let e = n.begin; e <= n[x(191)]; e += n[x(199)]) {
        let s = e;
        t[x(168)]({ x: Math[x(154)](s), y: Math[x(159)](s) });
      }
    } else {
      let e = (n.end - n[x(183)]) / n.pointCount;
      for (let s = 0; s < n[x(193)]; s++) {
        let i = s * e;
        t[x(168)]({ x: Math[x(154)](i), y: Math[x(159)](i) });
      }
    }
    return L0.fromPoints(t);
  }
  static fn(n) {
    let x = n();
    return L0.fromPoints(x);
  }
  static outerGrid(n, x) {
    const t = O;
    let e = [], s = 1 / (x - 1), i = 1 / (n - 1);
    for (let r = 0; r < n; r++)
      for (let a = 0; a < x; a++) {
        let o = { y: r * i - 0.5, x: a * s - 0.5 };
        e[t(168)](o);
      }
    return L0[t(174)](e);
  }
  static innerGrid(n, x) {
    const t = O;
    let e = [], s = 1 / x, i = 1 / n, r = s * 0.5, a = i * 0.5;
    for (let o = 0; o < n; o++)
      for (let c = 0; c < x; c++) {
        let h = { y: r + o * i - 0.5, x: a + c * s - 0.5 };
        e[t(168)](h);
      }
    return L0[t(174)](e);
  }
};
let e0 = L0;
e0[O(177)] = (() => {
  const n = O;
  let x = [{ x: 0, y: 0.5 }, { x: 0.5, y: 0 }, { x: 1, y: 0.5 }, { x: 0.5, y: 1 }];
  return L0[n(174)](x);
})(), e0[O(200)] = (() => {
  const n = O;
  let x = [{ x: 0, y: 0 }, { x: 1, y: 0.5 }, { x: 0, y: 1 }];
  return L0[n(174)](x);
})(), e0[O(162)] = (() => {
  const n = O;
  let x = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 0.8 }, { x: 0.8, y: 0.8 }, { x: 0.5, y: 1 }, { x: 0.2, y: 0.8 }, { x: 0, y: 0.8 }, { x: 0, y: 0 }];
  return L0[n(174)](x);
})(), sx([v("Shape")], e0[O(185)], O(149), 2), sx([v(![])], e0.prototype, O(196), 2), e0[O(164)] = e0[O(192)];
class Jt extends e0 {
  constructor(x = [{ x: -0.5, y: -0.5 }, { x: 0.5, y: 0 }, { x: -0.5, y: 0.5 }, { x: -0.5, y: 0 }]) {
    super(x);
  }
  draw(x, t) {
    const e = O;
    t[e(189)](x[0].x, x[0].y), t[e(151)](x[1].x, x[1].y), t[e(151)](x[2].x, x[2].y), t[e(189)](x[3].x - 1, x[3].y), t[e(151)](x[1].x - 1, x[1].y);
  }
}
sx([v(O(194))], Jt[O(185)], O(149), 2), sx([v(![])], Jt[O(185)], O(179), 2), k0.ArrowShape = Jt, e0[O(167)] = new Jt(), e0.ArrowShape = e0[O(167)];
class Tx extends e0 {
  constructor(x = [{ x: -0.5, y: -0.5 }, { x: 0.5, y: -0.5 }, { x: 0.5, y: 0.5 }, { x: -0.5, y: 0.5 }]) {
    super(x);
  }
  [O(176)](x, t) {
    const e = O;
    let s = x[0], i = x[2];
    t[e(173)](s.x, s.y, i.x - s.x, i.y - s.y);
  }
}
sx([v(O(148))], Tx[O(185)], "className", 2), k0[O(148)] = Tx, e0[O(171)] = new Tx(), e0.RectShape = e0[O(171)];
const gr = e0[O(165)](3, 3).points, _r = [S.lt, S.ct, S.rt, S.lm, S.center, S.rm, S.lb, S.cb, S.rb], at = {};
_r[O(188)]((n, x) => {
  at[n] = gr[x];
}), at[S[O(157)]] = function() {
  return this[O(157)];
};
function js(n) {
  const x = O;
  if (n == "center")
    throw new Error(x(175));
  let t = at[n];
  return R.normalize([], [t.x, t.y]);
}
function Ii(n) {
  const x = O;
  let t = at[n];
  return Math[x(147)](t.y, t.x);
}
(function(n, x) {
  const t = xt, e = n();
  for (; []; )
    try {
      if (parseInt(t(511)) / 1 + -parseInt(t(498)) / 2 + parseInt(t(477)) / 3 + -parseInt(t(481)) / 4 + -parseInt(t(483)) / 5 + parseInt(t(512)) / 6 + -parseInt(t(489)) / 7 * (-parseInt(t(494)) / 8) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ae, 521600);
function xt(n, x) {
  const t = ae();
  return xt = function(e, s) {
    return e = e - 474, t[e];
  }, xt(n, x);
}
function ae() {
  const n = ["7RHlwxz", "map", "end", "Roots", "next", "9484064MvGkHV", "getPrototypeOf", "shape", "Styles", "1750588KOaUfT", "Resources", "className", "setShape", "parent", "push", "beginArrow", "endArrow", "style", "unkown class name: ", "找不到link的端点对象，序列化时有错误:", "removeAllChild", "length", "993346kmGbIT", "3017610EVuKRH", "forEach", "assign", "addChild", "1381029RtJaXs", "label", "isDisplayObjectId", "isLink", "2983108sDJCMr", "hasOwnProperty", "4997305tCJMCu", "begin", "serializers", "target", "image", "fromPojo"];
  return ae = function() {
    return n;
  }, ae();
}
function hs(n, x) {
  const t = xt;
  let e = {}, s = {}, i = {}, r = {}, a = n[t(492)] || [0], o = n.DisplayObjects, c = n[t(497)], h = n.Shapes;
  n[t(499)][t(474)](function(I, L) {
    r[L] = I.src;
  }), c.forEach(function(I, L) {
    let z = I0[t(488)](I);
    s[L] = z;
  }), h[t(474)](function(I, L) {
    let z = e0[t(488)](I);
    i[L] = z;
  });
  let d = [];
  function y(I, L) {
    const P = t;
    let z;
    if (x && (z = x[I.id]), z == null && (z = as(I[P(500)])), L < a[P(510)] && d[P(503)](z), mr(I, z), I[P(487)] != null) {
      let N = r[I[P(487)]];
      z.imageSrc = N;
    }
    if (I[P(506)] != null) {
      let N = s[I.style];
      z[P(506)] = N;
    }
    if (I[P(496)] != null) {
      let N = i[I[P(496)]];
      z[P(501)](N);
    }
    return e[L] = z, z;
  }
  let g = o[t(490)](y);
  g[t(474)]((I) => {
    I[t(509)]();
  }), o[t(474)]((I, L) => {
    const P = t;
    let z = g[L];
    if (I[P(502)] != null) {
      let N = e[I[P(502)]];
      X0(N), N[P(476)](z);
    }
  });
  let p = o.filter((I) => I[t(480)]), k = g.filter((I) => I[t(480)]);
  return p[t(474)](function(I, L) {
    let P = k[L];
    wr(P, I, e), Ir(P, I, e);
  }), d;
}
function mr(n, x) {
  const t = xt;
  let e = x[t(485)], s = Object[t(495)](x);
  return e[t(474)]((i) => {
    const r = t;
    if (n[r(482)](i)) {
      let a = n[i];
      a != null && a[r(500)] != null && (a = as(a[r(500)], a)), x[i] = a;
    } else
      s[r(482)](i) && (x[i] = s[i]);
  }), x.id == null && (x.id = D0[t(493)]()), x;
}
function Gs(n, x) {
  const t = xt;
  let e = n.target, s = as(n[t(500)], n);
  if (s[t(479)]() && (s[t(486)] = x[e], s[t(486)] == null))
    throw new Error(t(508) + e);
  return X0(s, n), s;
}
function Ir(n, x, t) {
  const e = xt, s = Gs(x[e(484)], t);
  n.setBegin(s);
  const i = Gs(x[e(491)], t);
  n.setEnd(i);
}
function wr(n, x, t) {
  const e = xt;
  if (x.label != null) {
    let s = t[x[e(478)]];
    n[e(478)] = s;
  }
  if (x[e(504)] != null) {
    let s = t[x[e(504)]];
    n[e(504)] = s;
  }
  if (x[e(505)] != null) {
    let s = t[x[e(505)]];
    n[e(505)] = s;
  }
}
function as(n, x) {
  const t = xt;
  let e;
  try {
    let s = Bs(n);
    e = new s(), x && Object[t(475)](e, x);
  } catch {
    throw new Error(t(507) + n);
  }
  return e;
}
const d0 = rx;
(function(n, x) {
  const t = rx, e = n();
  for (; []; )
    try {
      if (parseInt(t(474)) / 1 + -parseInt(t(466)) / 2 + parseInt(t(469)) / 3 + -parseInt(t(445)) / 4 + -parseInt(t(447)) / 5 * (parseInt(t(449)) / 6) + parseInt(t(456)) / 7 + parseInt(t(440)) / 8 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(oe, 822511);
function oe() {
  const n = ["502060kPUvFK", "getPrototypeOf", "30mEmcvx", "pojoToObjects", "DisplayObjects", "toIdMap", "forEach", "fromPojo", "compare", "106617HLeCul", "serializers", "numberFixed", "componentToObjects", "translateWith", "getState", "copyToPojo", "get", "styleSystem", "dirty", "279648hCLsRr", "objectsToComponent", "fillByJson", "4694997FsSRcv", "stage", "getEmptyInstance", "json version :", "style", "641154XBikIO", "Layer", "parse", "assign", "toPojo", "length", "3992968FpGJzX", "_restoreBackground", "restore", "version", "warn", "5024440VqfgkL", "getProtoDefaultProperties"];
  return oe = function() {
    return n;
  }, oe();
}
let vr = /* @__PURE__ */ new Map();
function rx(n, x) {
  const t = oe();
  return rx = function(e, s) {
    return e = e - 439, t[e];
  }, rx(n, x);
}
const Is = class {
  constructor() {
  }
  setNumberFixed(n) {
    const x = rx;
    Is[x(458)] = n;
  }
  [d0(478)](n) {
    return ls(n);
  }
  toJson(n) {
    n instanceof T && (n = [n]);
    let x = this.toPojo(n);
    return JSON.stringify(x);
  }
  [d0(450)](n, x) {
    return hs(n, x);
  }
  [d0(462)](n) {
    const x = d0;
    let t = ls(n);
    return t[x(451)].forEach((e) => {
      e.id = void 0;
    }), t;
  }
  static [d0(471)](n) {
    let t = vr[d0(463)](n);
    return t == null && (t = as(n)), t;
  }
  static [d0(446)](n) {
    const x = d0;
    let t = n[x(457)], e = Object[x(448)](n), s = {};
    for (var i = 0; i < t[x(439)]; i++) {
      let r = t[i], a = e[r], o = n[r];
      o === a && (s[r] = o);
    }
    return s;
  }
  [d0(459)](n) {
    const x = d0;
    let t = JSON[x(476)](n);
    return t[x(451)][x(453)]((i) => {
      delete i.id;
    }), hs(t);
  }
  [d0(467)](n) {
    let x = this.copyToPojo(n);
    return JSON.stringify(x);
  }
  [d0(461)](n) {
    const x = d0;
    let t = ls([n]), e = Is[x(446)](n);
    return Object[x(477)](e, t), e;
  }
  [d0(468)](n, x) {
    const t = d0;
    let e = JSON[t(476)](x);
    n[t(470)][t(464)][t(454)](e.CustomStyle);
    let s = e.DisplayObjects;
    e[t(443)] != Zx && console[t(444)](t(472), e[t(443)], "jtopo version:", Zx);
    let i = s[0];
    if (i.className == t(475)) {
      const r = e.Styles[i[t(473)]];
      n[t(441)](r), n.id = i.id;
    }
    return s.forEach((r) => D0[t(455)](r.id)), this.restore(n, e), n[t(465)] = !![], n[t(460)](0, 0), this;
  }
  [d0(442)](n, x) {
    const t = d0;
    if (n[t(465)] = !![], x != null) {
      let e = n[t(452)]();
      hs(x, e);
    }
    return x;
  }
};
let Ot = Is;
Ot.numberFixed = 6;
const V = he;
function ce() {
  const n = ["toPojo", "normal", "528267AnaqSH", "isLikePoint", "isDisplayObjectTarget", "function", "getLocalPoint", "getPositionNormal", "assign", "14355fMdpzj", "EndpointFixedPoint", "prototype", "segIndex", "positionToLocalPoint", "getVec", "getAngle", "503658WqclGP", "2MvyEAd", "1206118CXZpwa", "target", "231752xdDHDL", "name", "length", "className", "5664400UIOxxD", "45vHGQzu", "ShapeNode", "getOwnPropertyDescriptor", "EndpointFixedName", "EndpointNearest", "defineProperty", "423dxqbUM", "log", "target is null", "normalize", "45708vMdtaC", "16xoSoyJ", "points", "error arguments", "isNode", "EndpointFunction", "8430590jsnoRq", "EndpointSegment", "isNodeTarget"];
  return ce = function() {
    return n;
  }, ce();
}
(function(n, x) {
  const t = he, e = n();
  for (; []; )
    try {
      if (-parseInt(t(174)) / 1 * (parseInt(t(173)) / 2) + parseInt(t(202)) / 3 * (-parseInt(t(192)) / 4) + parseInt(t(181)) / 5 * (-parseInt(t(172)) / 6) + -parseInt(t(180)) / 7 + parseInt(t(176)) / 8 * (-parseInt(t(187)) / 9) + parseInt(t(197)) / 10 + parseInt(t(165)) / 11 * (parseInt(t(191)) / 12) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ce, 977100);
var kr = Object[V(186)], Pr = Object[V(183)], Er = (n, x, t, e) => {
  const s = V;
  for (var i = e > 1 ? void 0 : e ? Pr(x, t) : x, r = n[s(178)] - 1, a; r >= 0; r--)
    (a = n[r]) && (i = (e ? a(x, t, i) : a(i)) || i);
  return e && i && kr(x, t, i), i;
};
class et {
  [V(204)]() {
    return this.target instanceof T;
  }
  [V(199)]() {
    const x = V;
    return this instanceof T0 || this instanceof ot || this instanceof yt ? this[x(175)][x(195)] : ![];
  }
  isDisplayObjectId() {
    const x = V;
    return this instanceof T0 || this instanceof ot || this instanceof yt ? this.target != null && typeof this[x(175)] == "number" : ![];
  }
  [V(200)]() {
    const x = V;
    let t = this.className, e = Object[x(164)]({ className: t }, this);
    return this[x(175)] == null && delete e[x(175)], e;
  }
}
Er([v("Endpoint")], et.prototype, "className", 2);
function he(n, x) {
  const t = ce();
  return he = function(e, s) {
    return e = e - 163, t[e];
  }, he(n, x);
}
class ot extends et {
  constructor(x, t, e = 0) {
    const s = V;
    super(), this[s(175)] = x, this.t = t, this[s(168)] = e;
  }
}
ot.prototype.className = V(198);
class T0 extends et {
  constructor(x, t) {
    const e = V;
    super(), this[e(175)] = x, this[e(177)] = t;
  }
  [V(171)]() {
    return Ii(this.name) + Math.PI;
  }
  [V(170)]() {
    const x = V;
    return this[x(175)][x(195)] ? js(this[x(177)]) : [0, 0];
  }
}
T0[V(167)].className = V(184);
class yt extends et {
  constructor(x) {
    const t = V;
    super(), this[t(175)] = x;
  }
  [V(171)](x) {
    const t = V;
    let e = 0;
    if (this[t(175)][t(195)]) {
      let s = this[t(175)];
      e = Math.atan2(x.y - s.y, x.x - s.x);
    }
    return e;
  }
}
yt[V(167)].className = V(185);
class ct extends et {
  constructor(x, t) {
    super(), this.x = x, this.y = t;
  }
}
ct[V(167)][V(179)] = V(166);
class Ax extends et {
  constructor(x) {
    super(), this.fn = x;
  }
}
Ax[V(167)][V(179)] = V(196);
function ws(n, x) {
  const t = V;
  if (n == null)
    throw new Error(t(189));
  if (n instanceof et)
    return n;
  if (x instanceof et)
    return x;
  if (n instanceof T)
    return x == S.nearest ? new yt(n) : new T0(n, x || S.center);
  if (D[t(203)](n)) {
    let e = n;
    return new ct(e.x, e.y);
  } else {
    if (typeof n == t(205))
      return new Ax(n);
    throw console[t(188)](n, x), new Error(t(194));
  }
}
const Sr = { lm: [-1, 0], ct: [0, -1], rm: [1, 0], cb: [0, 1] };
function vs(n) {
  const x = V;
  if (n == null)
    return;
  let t = n[x(175)];
  if (typeof t != x(205)) {
    if (n instanceof T0)
      return t.className == x(182) ? t[x(163)](n[x(177)]) : Sr[n[x(177)]];
    if (n instanceof ot) {
      let e = n[x(168)], s = n.t;
      if (t.className == x(182)) {
        let i = t[x(169)](S.center), r = t[x(206)](s, e);
        return K[x(201)](i, r);
      } else if (t instanceof Node) {
        if (e == 0)
          return [0, -1];
        if (e == 1)
          return [1, 0];
        if (e == 2)
          return [0, 1];
        if (e == 3)
          return [-1, 0];
        throw new Error("unkow segIndex:" + e);
      }
      if (t.isAutoFoldLink) {
        let i = t.points[e], r = t[x(193)][e + 1], a = [r.x - i.x, r.y - i.y];
        return R[x(190)]([], a);
      }
    }
  }
}
(function(n, x) {
  const t = q0, e = n();
  for (; []; )
    try {
      if (-parseInt(t(167)) / 1 + parseInt(t(138)) / 2 + -parseInt(t(177)) / 3 + -parseInt(t(173)) / 4 * (parseInt(t(139)) / 5) + -parseInt(t(168)) / 6 + -parseInt(t(160)) / 7 + -parseInt(t(129)) / 8 * (-parseInt(t(116)) / 9) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(le, 968442);
function Or(n) {
  const x = q0;
  let t = T.flatten(n[0].children);
  for (let l = 1; l < n.length; l++) {
    let d = T[x(123)](n[l][x(141)], (y) => y[x(117)]);
    t = t[x(122)](d);
  }
  let e = n[x(122)](t), s = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), a = [], o = [], c = /* @__PURE__ */ new Map(), h = [];
  return e[x(136)]((l, d) => {
    const y = x;
    let g = l[y(143)];
    if (i[y(170)](g) == null) {
      let I = a.length;
      i[y(140)](g, I), a[y(172)](g[y(133)]());
    }
    let p = l[y(130)];
    p != null && c[p] == null && (h[y(172)]({ type: y(144), src: p }), c[p] = h.length - 1);
    let k = l[y(150)];
    if (l[y(151)] && r[y(170)](k) == null) {
      let I = o[y(131)];
      r.set(k, I), o.push(k[y(133)]());
    }
    s[y(140)](l, d);
  }), { objects: e, objIndexMap: s, styleIndexMap: i, styles: a, resourcesIndexMap: c, resources: h, shapeIndexMap: r, shapes: o };
}
function ls(n) {
  const x = q0, t = {};
  t[x(121)] = Zx;
  const e = Or(n);
  let s = e[x(125)], i = e[x(157)], r = e.styleIndexMap, a = e[x(135)], o = e[x(153)];
  return t[x(120)] = n[x(171)]((c, h) => h), t[x(162)] = e[x(126)], t.Shapes = e[x(163)], t[x(147)] = e[x(132)], t[x(119)] = s[x(171)](function(c) {
    return Cr(c, i, r, o, a);
  }), t;
}
function Cr(n, x, t, e, s) {
  const i = q0;
  let r = {};
  if (n[i(159)])
    r[i(159)] = !![];
  else if (n[i(151)])
    r.isNode = !![];
  else if (n[i(176)])
    r.isLink = !![];
  else
    throw console[i(134)](n), new Error(i(155));
  Lr(r, n);
  let a = x[i(170)](n[i(114)]);
  if (a != null && (r[i(114)] = a), n.isLink == !![]) {
    let h = n[i(158)], l = n[i(115)];
    r.begin = Js(n, h, i(158), x), r[i(115)] = Js(n, l, i(115), x), n[i(146)] != null && (r.label = x.get(n[i(146)])), n[i(128)] != null && (r[i(128)] = x[i(170)](n[i(128)])), n[i(149)] != null && (r[i(149)] = x.get(n[i(149)]));
  }
  let o = t.get(n[i(143)]);
  X0(o), r[i(143)] = o;
  let c = e[n[i(130)]];
  if (c != null && (r[i(154)] = c), n[i(151)]) {
    let h = s[i(170)](n[i(150)]);
    X0(h), r[i(150)] = h;
  }
  return r;
}
function Js(n, x, t, e) {
  const s = q0;
  let i = x[s(133)]();
  if (x[s(124)] instanceof T) {
    let r = e.get(x[s(124)]);
    if (r == null) {
      let a = t == s(158) ? n[s(175)]() : n[s(178)]();
      i[s(127)] = ct[s(148)][s(127)], i.x = a.x, i.y = a.y, delete i[s(124)];
    } else
      i[s(124)] = r;
  } else if (x instanceof Ax) {
    let r = x.fn();
    i[s(127)] = ct[s(148)][s(127)], i.x = r.x, i.y = r.y, delete i[s(124)];
  }
  return i;
}
function Lr(n, x) {
  const t = x.serializers;
  return wi(n, x, t);
}
function wi(n, x, t) {
  const e = q0;
  let s = Ot[e(161)](x[e(127)]);
  for (var i = 0; i < t[e(131)]; i++) {
    let r = t[i], a = x[r];
    if (r == "className") {
      n[r] = a;
      continue;
    }
    if (a !== s[r]) {
      if (Array[e(164)](a) && Array[e(164)](s[r])) {
        let o = s[r];
        if (!Ar(o, a))
          n[r] = a;
        else
          continue;
      }
      if (r == e(152) && a != null) {
        a = JSON[e(174)](JSON[e(156)](a)), n[r] = a;
        continue;
      }
      if (a == null) {
        n[r] = a;
        continue;
      }
      typeof a == e(118) && Ot[e(137)] != null && (a = Mr(a, Ot[e(137)])), a[e(133)] != null ? a = a[e(133)]() : D[e(145)](a) && (a = new D(a.x, a.y)), n[r] = a;
    }
  }
}
function q0(n, x) {
  const t = le();
  return q0 = function(e, s) {
    return e = e - 114, t[e];
  }, q0(n, x);
}
function le() {
  const n = ["objIndexMap", "begin", "isLayer", "5753230FBXRBs", "getEmptyInstance", "Styles", "shapes", "isArray", "indexOf", "toString", "1250324WXIIjY", "8974560IrFugA", "isInteger", "get", "map", "push", "2122552GYLXwj", "parse", "getBeginPoint", "isLink", "3186201lkiSxC", "getEndPoint", "parent", "end", "39950649mgqDla", "serializeable", "number", "DisplayObjects", "Roots", "version", "concat", "flatten", "target", "objects", "styles", "className", "beginArrow", "8XCWPuE", "imageSrc", "length", "resources", "toPojo", "log", "shapeIndexMap", "forEach", "numberFixed", "3380320MRTsNF", "5YkntHD", "set", "children", "toFixed", "style", "img", "isLikePoint", "label", "Resources", "prototype", "endArrow", "shape", "isNode", "userData", "resourcesIndexMap", "image", "unkonw object type:", "stringify"];
  return le = function() {
    return n;
  }, le();
}
function Mr(n, x) {
  const t = q0;
  if (Number[t(169)](n))
    return n;
  let e = n[t(166)]();
  return e[t(131)] - e[t(165)](".") - 1 > x && (n = n[t(142)](x), n = parseFloat(n)), n;
}
function Ar(n, x) {
  const t = q0;
  if (n === x)
    return !![];
  if (n[t(131)] != x[t(131)])
    return ![];
  for (let e = 0; e < n[t(131)]; e++)
    if (n[e] != x[e])
      return ![];
  return !![];
}
const ue = de;
(function(n, x) {
  const t = de, e = n();
  for (; []; )
    try {
      if (parseInt(t(147)) / 1 * (parseInt(t(133)) / 2) + parseInt(t(146)) / 3 * (-parseInt(t(135)) / 4) + parseInt(t(136)) / 5 + -parseInt(t(134)) / 6 * (parseInt(t(144)) / 7) + parseInt(t(140)) / 8 * (parseInt(t(143)) / 9) + parseInt(t(137)) / 10 + parseInt(t(130)) / 11 * (-parseInt(t(131)) / 12) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(fe, 830198);
function fe() {
  const n = ["2298411nHLzjA", "14RpVLvn", "measureText", "69UqcJbM", "3VGIxow", "canvas", "actualBoundingBoxRight", "createElement", "11gyRQzy", "8736204mjvFsb", "width", "417166ZdUFhD", "323838jvavVY", "157052VEYQOp", "568755ngHBcj", "8081940nNqeFe", "font", "actualBoundingBoxAscent", "32oVneDF", "length", "actualBoundingBoxLeft"];
  return fe = function() {
    return n;
  }, fe();
}
const Dr = document[ue(129)](ue(148)), $t = Dr.getContext("2d");
function Tr(n, x) {
  const t = ue;
  $t[t(138)] = x;
  const e = $t[t(145)](n), s = e[t(139)] + e.actualBoundingBoxDescent;
  return { width: e[t(128)] + e[t(142)], height: s };
}
function de(n, x) {
  const t = fe();
  return de = function(e, s) {
    return e = e - 128, t[e];
  }, de(n, x);
}
function Fr(n, x) {
  const t = ue;
  $t.font = x;
  let e = $t[t(145)](n[0]);
  for (let r = 0; r < n[t(141)]; r++) {
    let a = $t[t(145)](n[r]);
    a[t(132)] > e[t(132)] && (e = a);
  }
  const s = e[t(139)] + e.actualBoundingBoxDescent;
  return { width: e[t(128)] + e[t(142)], height: s };
}
const E = pe;
(function(n, x) {
  const t = pe, e = n();
  for (; []; )
    try {
      if (-parseInt(t(105)) / 1 * (parseInt(t(198)) / 2) + parseInt(t(227)) / 3 + parseInt(t(172)) / 4 + -parseInt(t(189)) / 5 + parseInt(t(124)) / 6 + -parseInt(t(188)) / 7 * (parseInt(t(225)) / 8) + parseInt(t(232)) / 9 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(be, 503770);
var Br = Object[E(199)], jr = Object[E(180)], zr = (n, x, t, e) => {
  const s = E;
  for (var i = e > 1 ? void 0 : e ? jr(x, t) : x, r = n[s(162)] - 1, a; r >= 0; r--)
    (a = n[r]) && (i = (e ? a(x, t, i) : a(i)) || i);
  return e && i && Br(x, t, i), i;
};
function pe(n, x) {
  const t = be();
  return pe = function(e, s) {
    return e = e - 103, t[e];
  }, pe(n, x);
}
let Zs = document[E(157)]("my");
function us(n) {
  const x = E;
  return typeof n == x(104) ? n : typeof n == x(110) && n.endsWith("px") ? parseFloat(n[x(193)](0, n[x(162)] - 2)) : n;
}
const vi = class {
  constructor(n) {
    const x = E;
    this[x(235)] = !![], this[x(219)] = {}, this[x(176)] = [], n != null && Object[x(191)](this, n);
  }
  [E(139)]() {
    const n = E;
    return this.dirty ? !![] : this[n(235)];
  }
  getChanged() {
    return [];
  }
  updateState() {
    const n = E;
    if (this[n(139)]()) {
      let x = this[n(109)]();
      for (let t = 0; t < x[n(162)]; t++) {
        let e = x[t];
        this._preState[e] = this[e];
      }
      return !![];
    }
    return ![];
  }
  [E(142)]() {
    const n = E;
    let x = Object.keys(this), t = this;
    x[n(120)]((e) => t[e] = Wr[e]);
  }
  [E(133)]() {
    const n = E;
    let x = {}, t = ["_preState", "dirty", n(176)], e = Object[n(154)](this)[n(155)]((s) => t.indexOf(s) == -1);
    return wi(x, this, e), delete x[n(197)], x;
  }
  [E(170)](n) {
    n != null && Object.assign(this, n);
  }
  merge(n, x) {
    const t = E;
    let e = Object[t(154)](n);
    for (let s = 0; s < e[t(162)]; s++) {
      let i = e[s], r = n[i];
      x != null && (i == t(182) ? (r = us(r), x[t(182)] = r) : i == t(179) && (r = us(r), x[t(179)] = r), i == t(159) && (r = us(r), x[t(159)] = r, x[t(116)]())), this[i] = r;
    }
  }
  set(n, x) {
    this[n] = x;
  }
  [E(146)](n, x, t) {
    const e = E;
    let s = this[e(152)] || 0, i = s, r = s, a = n, o = x;
    if (this[e(164)] != null ? a = this.backgroundWidth : this[e(136)] != null ? a = n * this[e(136)] : this._backgroundImageObject != null && (a = this[e(197)].width), this[e(115)] != null ? o = this[e(115)] : this[e(114)] != null ? o = x * this[e(114)] : this[e(197)] != null && (o = this[e(197)][e(179)]), this.backgroundPositionXName != null) {
      let h = this[e(173)];
      h == e(123) ? i += n * 0.5 - a * 0.5 : h == e(226) || h == e(224) && (i += n - a);
    } else
      this.backgroundPositionX != null ? i += this[e(183)] : this[e(166)] != null && (i += n * this[e(166)]);
    if (this[e(151)] != null) {
      let h = this[e(151)];
      h == e(123) ? r += x * 0.5 - o * 0.5 : h == "top" || h == e(161) && (r += x - o);
    } else
      this.backgroundPositionY != null ? r += this[e(132)] : this[e(200)] != null && (r += x * this[e(200)]);
    return this[e(186)] == "no-repeat", { x: i, y: r, width: a, height: o };
  }
  [E(143)](n) {
    const x = E, t = this;
    t[x(218)] != null && (n[x(218)] = t[x(218)]), t.textAlign != null && (n[x(160)] = t.textAlign), t[x(145)] != null && (n[x(145)] = t[x(145)]), t[x(194)] != null && (n[x(194)] = t.fillStyle), t[x(216)] != null && (n[x(216)] = t[x(216)]), t[x(231)] != null && (n.lineCap = t.lineCap), t[x(113)] != null && (n[x(113)] = t[x(113)]), t[x(126)] != null && (n.lineWidth = t.lineWidth), t[x(117)] != null && (n[x(117)] = t[x(117)]), t[x(195)] != null ? n[x(119)](t.lineDash) : n[x(119)]([]), t[x(171)] != null && (n[x(171)] = t[x(171)]), t[x(148)] != null && (n[x(148)] = t[x(148)]), t.shadowBlur != null && (n[x(149)] = t.shadowBlur), t[x(196)] != null && (n[x(196)] = t.shadowColor), t[x(178)] != null && (n[x(178)] = t.shadowOffsetX), t.shadowOffsetY != null && (n[x(230)] = t[x(230)]), t.globalCompositeOperation != null && (n[x(220)] = t.globalCompositeOperation);
  }
  [E(212)]() {
    const n = E;
    return (this[n(152)] || 0) * 2 + (this.padding || 0) * 2 + (this[n(126)] || 0);
  }
  static [E(150)](n) {
    const x = E;
    let t = new vi(n);
    return n._backgroundImage != null && (t[x(211)] = n[x(233)]), t;
  }
  static [E(214)](n, x, t) {
    const e = E;
    let s;
    t == 1 ? s = Tr(n, x[e(218)]) : s = Fr(n, x[e(218)]);
    let i = s.width, r = s[e(179)];
    if (x[e(184)] != null)
      r = x[e(184)];
    else {
      let o = x.font || e(223), c = o[e(137)](/.*?(\d+)px.*/);
      c != null && (r = parseInt(c[1]));
    }
    let a = r * t;
    return { width: i, height: a, lineHeight: r };
  }
};
let I0 = vi;
zr([v("Style")], I0[E(141)], E(202), 2), Object.defineProperties(I0[E(141)], { border: { get() {
  return this[E(215)];
}, set(n) {
  const x = E;
  if (this[x(235)] = !![], n != null) {
    this[x(144)] = void 0, this.borderWidth = void 0, this[x(210)] = void 0;
    let t = n[x(167)]()[x(203)](/\s+/ig, " ")[x(192)](" ");
    for (let e = 0; e < t[x(162)]; e++) {
      let s = t[e];
      Nr(s) ? this.borderStyle = s : s.endsWith("px") ? this.borderWidth = parseFloat(s[x(193)](0, s[x(162)] - 2)) : this[x(210)] = s;
    }
  }
  this[x(215)] = n;
} }, backgroundImage: { get() {
  return this[E(233)];
}, set(n) {
  const x = E;
  if (this[x(235)] = !![], this._backgroundImage = n, n != null && (n = n[x(234)](), n[x(129)](x(208)))) {
    this[x(197)] = void 0;
    let t = n[x(203)](/\s+/ig, " ");
    t = t[x(193)](5, t[x(162)] - 2), this._backgroundImage = t;
    let e = this;
    Y0[x(153)](t, function(s) {
      e._backgroundImageObject = s;
    });
  }
} }, backgroundSize: { get() {
  return this[E(206)];
}, set(n) {
  const x = E;
  if (this[x(235)] = !![], this[x(206)] = n, n != null && n != x(165)) {
    let t = Qs(n), e = t[0], s = t[1];
    e != null && (e[x(169)] == x(104) ? this.backgroundWidth = e[x(127)] : this[x(136)] = e[x(127)]), s != null && (s.type == "number" ? this.backgroundHeight = s[x(127)] : this[x(114)] = s.value);
  }
} }, backgroundPosition: { get() {
  return this._backgroundPosition;
}, set(n) {
  const x = E;
  if (this.dirty = !![], this[x(187)] = n, this.backgroundPositionXName = void 0, this[x(151)] = void 0, this[x(183)] = void 0, this[x(132)] = void 0, this.backgroundPositionXRate = void 0, this[x(200)] = void 0, n != null && n != x(165)) {
    let t = Qs(n), e = t[0], s = t[1];
    e != null && (e[x(169)] == x(104) ? this[x(183)] = e[x(127)] : e[x(169)] == x(204) ? this.backgroundPositionXRate = e.value : this[x(151)] = e[x(127)]), s != null && (s[x(169)] == x(104) ? this[x(132)] = s[x(127)] : s.type == "rate" ? this[x(200)] = s.value : this.backgroundPositionXName = s[x(127)]);
  }
} }, background: { get() {
  return this._background;
}, set(n) {
  const x = E;
  if (this.dirty = !![], this[x(164)] = null, this.backgroundHeight = null, this.backgroundWidthRate = null, this[x(114)] = null, this.backgroundPositionX = null, this.backgroundPositionY = null, this[x(166)] = null, this[x(200)] = null, this[x(233)] = null, this[x(211)] = null, n != null) {
    Zs[x(168)][x(138)] = n;
    let t = Zs[x(168)];
    this[x(128)] = t[x(128)], this[x(186)] = t[x(186)], this[x(211)] = t[x(211)], this[x(207)] = t[x(207)], this[x(174)] = t[x(174)];
  }
  this[x(217)] = n;
} } });
function Qs(n) {
  const x = E;
  let t = n[x(192)](" "), e = [];
  for (let s = 0; s < t[x(162)]; s++) {
    let i = t[s];
    if (i[x(162)] == 0)
      continue;
    if (i[x(237)]("px")) {
      let a = parseFloat(i.substring(0, i[x(162)] - 2));
      e[x(209)]({ type: x(104), value: a });
    } else if (i[x(237)]("%")) {
      let a = parseFloat(i[x(193)](0, i[x(162)] - 1)) / 100;
      e.push({ type: x(204), value: a });
    } else
      typeof i == x(110) && e.push({ type: x(110), value: i });
  }
  return e;
}
function Nr(n) {
  const x = E;
  return x(190)[x(107)](n) != -1;
}
Y0.w != E(140) && (Y0.w = "119119119046106116111112111046099111109");
class Rr {
  constructor(x, t, e, s) {
    const i = E;
    this[i(177)] = 0, this[i(175)] = 0, this[i(222)] = 0, this[i(103)] = 0, this.cache = ![], this.colors = [], this.startX = x, this[i(175)] = t, this[i(222)] = e, this[i(103)] = s, this[i(108)] = ![];
  }
  [E(121)](x, t) {
    const e = E;
    this[e(201)] == null && (this[e(201)] = []), this[e(201)][e(209)]([x, t]);
  }
  [E(229)](x) {
    const t = E;
    let e = x[t(181)](this.startX, this[t(175)], this[t(222)], this.stopY);
    if (this[t(201)] != null)
      for (var s = 0; s < this[t(201)].length; s++) {
        let i = this.colors[s];
        e[t(121)](i[0], i[1]);
      }
    return e;
  }
}
class Hr {
  constructor(x, t, e, s, i, r) {
    const a = E;
    this[a(131)] = 0, this[a(147)] = 0, this.radiusStart = 0, this.xStop = 0, this[a(221)] = 0, this.radiusEnd = 0, this[a(201)] = [], this[a(131)] = x, this[a(147)] = t, this[a(125)] = e, this.xStop = s, this[a(221)] = i, this[a(205)] = r;
  }
  [E(121)](x, t) {
    const e = E;
    this.colors == null && (this.colors = []), this.colors[e(209)]([x, t]);
  }
  [E(229)](x) {
    const t = E;
    let e = x.createRadialGradient(this[t(131)], this[t(147)], this.radiusStart, this.xStop, this.yStop, this.radiusEnd);
    if (this[t(201)] != null)
      for (var s = 0; s < this[t(201)][t(162)]; s++) {
        let i = this.colors[s];
        e[t(121)](i[0], i[1]);
      }
    return e;
  }
}
let Wr = new I0();
class Xr {
  constructor(x, t) {
    const e = E;
    let s = this;
    this[e(106)] = x, typeof x == e(110) && (this.image = new Image(), this[e(106)][e(228)] = x, Y0.loadImage(x, function(i) {
      const r = e;
      s[r(106)] = i;
    })), this[e(112)] = t || e(156);
  }
  [E(229)](x) {
    const t = E;
    return this[t(185)] == null && (this[t(185)] = x[t(111)](this[t(106)], this[t(112)])), this.pattern;
  }
}
let Fx = E(213);
Fx += ",miterLimit,font,textAlign,textBaseline,lineDash,lineDashOffset,textPosition,color", Fx += ",lineCap,lineWidth,lineHeight,padding,borderStyle,borderColor,borderRadius,backgroundColor", Fx += ",textOffsetX,textOffsetY";
let tx = Fx[E(192)](",");
function be() {
  const n = ["backgroundPositionYRate", "colors", "className", "replace", "rate", "radiusEnd", "_backgroundSize", "backgroundPosition", "url(", "push", "borderColor", "backgroundImage", "calcGap", "borderWidth,globalAlpha,globalCompositeOperation,fillStyle,strokeStyle,shadowBlur,shadowColor,shadowOffsetX", "measureText", "_border", "strokeStyle", "_background", "font", "_preState", "globalCompositeOperation", "yStop", "stopX", "10px sans-serif", "right", "8003584yqzRsZ", "left", "694494oCdxRw", "src", "getGradient", "shadowOffsetY", "lineCap", "2772504mGRAVj", "_backgroundImage", "trim", "dirty", '){ this._changed.push("', "endsWith", "stopY", "number", "1292btZIQd", "image", "indexOf", "cache", "getChanged", "string", "createPattern", "repetition", "lineJoin", "backgroundHeightRate", "backgroundHeight", "updatezIndex", "miterLimit", "if(this.", "setLineDash", "forEach", "addColorStop", '");}', "center", "3411792SyexQM", "radiusStart", "lineWidth", "value", "backgroundColor", "startsWith", "this._changed = [];", "xStart", "backgroundPositionY", "toPojo", `
    let state = this._preState;
    `, " === state.", "backgroundWidthRate", "match", "background", "isDirty", "cacheImg", "prototype", "reset", "applyTo", "borderStyle", "textBaseline", "getBackgroundRect", "yStart", "globalAlpha", "shadowBlur", "fromPojo", "backgroundPositionYName", "borderWidth", "loadImage", "keys", "filter", "no-repeat", "createElement", "top", "zIndex", "textAlign", "bottom", "length", "this.", "backgroundWidth", "initial", "backgroundPositionXRate", "toLowerCase", "style", "type", "setStyles", "lineDashOffset", "3746972NaJSgb", "backgroundPositionXName", "backgroundSize", "startY", "_changed", "startX", "shadowOffsetX", "height", "getOwnPropertyDescriptor", "createLinearGradient", "width", "backgroundPositionX", "lineHeight", "pattern", "backgroundRepeat", "_backgroundPosition", "7wvOikm", "2419315wTdvtk", "none,hidden,dotted,dashed,solid,doubble,groove,ridge,inseet,outset,inherit", "assign", "split", "substring", "fillStyle", "lineDash", "shadowColor", "_backgroundImageObject", "88KUayAh", "defineProperty"];
  return be = function() {
    return n;
  }, be();
}
{
  let n = "";
  for (let t = 0; t < tx[E(162)]; t++) {
    let e = tx[t];
    n += E(163) + e + E(135) + e, t + 1 < tx[E(162)] && (n += "&&");
  }
  let x = `
    if(this.dirty){
        return true;
    }
    let state = this._preState;

    let noChange = ` + n + `;

    if(!noChange){
        this.dirty = true;
    }
    return this.dirty;
`;
  I0[E(141)][E(139)] = new Function("", x);
}
{
  let n = E(130);
  for (let t = 0; t < tx[E(162)]; t++) {
    let e = tx[t];
    n += E(118) + e + " != state." + e + E(236) + e + E(122);
  }
  let x = E(134) + n + `
    return this._changed;
`;
  I0[E(141)][E(109)] = new Function("", x);
}
(function(n, x) {
  const t = ax, e = n();
  for (; []; )
    try {
      if (-parseInt(t(426)) / 1 * (-parseInt(t(434)) / 2) + parseInt(t(423)) / 3 * (parseInt(t(435)) / 4) + parseInt(t(430)) / 5 * (parseInt(t(436)) / 6) + parseInt(t(429)) / 7 * (parseInt(t(433)) / 8) + parseInt(t(428)) / 9 + -parseInt(t(437)) / 10 + -parseInt(t(432)) / 11 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ye, 115855);
let Ut;
function ki(n) {
  const x = ax;
  let t = new KeyboardEvent(n[x(427)], n), e = t[x(422)];
  if (t[x(422)] = function() {
    const s = x;
    n.preventDefault(), e[s(425)](this);
  }, t[x(431)] = Ut, Ut) {
    const s = n.key == Ut[x(438)];
    let i = t[x(424)] - Ut[x(424)];
    s && i < 400 && (t.isDouble = !![]);
  }
  return Ut = t, t;
}
function ax(n, x) {
  const t = ye();
  return ax = function(e, s) {
    return e = e - 422, t[e];
  }, ax(n, x);
}
function Yr(n, x) {
  const t = ax;
  let e = {};
  x instanceof WheelEvent ? e = new WheelEvent(n, x) : window[t(439)] && x instanceof window[t(439)] ? e = new DragEvent(n, x) : x instanceof MouseEvent ? e = new MouseEvent(n, x) : x instanceof TouchEvent && (e = new TouchEvent(n, x));
  let s = e[t(422)];
  return e.preventDefault = function() {
    const i = t;
    x[i(422)](), s[i(425)](this);
  }, e.raw = x, e;
}
let P0 = class {
  constructor(x) {
    this.type = x;
  }
};
class Pi {
  constructor(x) {
    this.type = x;
  }
}
function ye() {
  const n = ["264364QEFeJy", "47304VrgxCs", "1405800TzMcnl", "key", "DragEvent", "preventDefault", "3RgPgoR", "time", "call", "37BovHjL", "type", "133893HZsllj", "875nocoky", "10cHReoX", "previous", "278520NLvbqg", "11576tvWVNM", "224nrlWtp"];
  return ye = function() {
    return n;
  }, ye();
}
const u = ox;
(function(n, x) {
  const t = ox, e = n();
  for (; []; )
    try {
      if (-parseInt(t(420)) / 1 + -parseInt(t(380)) / 2 * (-parseInt(t(486)) / 3) + -parseInt(t(471)) / 4 * (parseInt(t(473)) / 5) + -parseInt(t(416)) / 6 + parseInt(t(318)) / 7 + parseInt(t(320)) / 8 + parseInt(t(463)) / 9 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ge, 787526);
var qr = Object.defineProperty, Vr = Object.getOwnPropertyDescriptor, t0 = (n, x, t, e) => {
  const s = ox;
  for (var i = e > 1 ? void 0 : e ? Vr(x, t) : x, r = n[s(441)] - 1, a; r >= 0; r--)
    (a = n[r]) && (i = (e ? a(x, t, i) : a(i)) || i);
  return e && i && qr(x, t, i), i;
};
function ge() {
  const n = ["getStyle", "invert", "getK", "removeOutLink", "vec", "zIndex", "互为子节点了2", "selectedHandler", "removeAt", "getLayerTransform", "next", "dontNeedPickup", "mouseenter", "toLayerXY", "visible", "notContains", "isVisible", "getTopFrozenParent", "updateChildrenDeep", "dblclickHandler", "pickType", "getPaintedAABBInLayer", "rotation", "mousePickupPath", "replaceChild", "parent", "toStageXY", "upgradeLinks", "setStyles", "upgradeParent", "forEach", "indexOf", "transform", "clearCss", "getAABB", "isMouseInPath", "touchmove", "startsWith", "name", "setUserData", "isOutOfParent", "reset", "removeAllChild", "addInLink", "point", "selectedStyle", "draggable", "touchmoveHandler", "paintSelected", "editable", "isLink", "aabb", "touchstart", "1514eojayl", "getPositionNames", "_isOutOfViewport", "_pickRadius", "getAncestors", "dirty", "minDeep is required.", "outLinks", "concat", "serializeable", "stageToLocalXY", "keys", "prototype", "map", "mousedragHandler", "listeners", "click", "classList", "getPoint", "getTransform", "touchendHandler", "mousedownHandler", "getRoot", "union", "addOutLink", "_OBBPoints", "添加自己为子节点了2", "segIndex out of bounds.", "merge", "getChildren", "definePosition", "removeInLink", "mouseEnabled", "log", "connectable", "match", "5873946ZfAnUq", "clickHandler", "mouseupHandler", "mousemoveHandler", "1500134xNmiiF", "paintChildrenWhenOutOfViewport", "depth", "getUserData", "scaleX", "render", "atan2", "children", "rect", "getNoChildrensObjects", "isSelected", "isIntersectRect", "remove", "getCS", "flatten", "isPointOn", "querySelectorAll", "getLinks", "_findChildren", "betweenPoints", "inLinks", "length", "mousedown", "skewX", "clone", "reverse", "scaleY", "set", "_obb", "hasChild", "互为子节点了", "lineWidth", "dispatchEvent", "mousedragEndHandler", "mouseoverHandler", "serializers", "getChildrenAABB", "pickUp", "toObjectLocalXY", "painted", "skewY", "getAllNodes", "getOBB", "19661724gSepLb", "frozen", "toIdMap", "_destory", "mouseout", "positions", "hasChildren", "className", "1816hwGbCN", "removeClass", "3135knBFIt", "updatezIndex", "getTransformByDeep", "getLocalPoint", "height", "function", "addClass", "sort", "querySelector", "destroyed", "isMouseInStroke", "hasListener", "userData", "1845EuKLyp", "mousedragend", "getSegmentPoints", "_style", "touchend", "mousemove", "definePosition arguments error.", "DisplayObject", "push", "mousePickupStroke", "isNode", "removeFromParent", "重复添加", "deep", "addChilds", "string", "origin", "getStageTransform", "5208973XXqOqW", "css", "1255832SnzuIn", "removeChild", "style", "isAncestors", "filter", "link", "selected"];
  return ge = function() {
    return n;
  }, ge();
}
let Ei = new P0(u(379)), Si = new P0(u(363)), Oi = new P0(u(490)), Ci = new P0(u(442)), Li = new P0("mouseup"), Kr = new P0(u(491)), Mi = new P0(u(396)), Ai = new P0("dblclick"), Di = new P0(u(339)), Ti = new P0(u(467)), ks = new P0(u(487)), Fi = new P0(u(326)), Bi = new P0("unselected"), ji = new Pi("remove");
const Zt = class extends U0 {
  constructor() {
    const n = u;
    super(), this.id = 0, this[n(421)] = !![], this[n(382)] = ![], this.id = D0[n(337)](), this[n(427)] = [], this[n(359)] = new rs(), this.style = new I0(), this[n(489)] = new I0(), this[n(397)] = [], this[n(316)] = [0, 0], this.positions = {}, this[n(440)] = [], this.outLinks = [];
  }
  getAABB(n, x) {
    const t = u;
    if (x == null)
      throw new Error(t(386));
    let e = this[t(448)];
    (e == null || x != W0) && (this._obb = this.getOBB(x), e = this[t(448)]);
    let s = e.aabb[t(444)]();
    if (n && this[t(469)]()) {
      const r = this[t(456)](n, x);
      K[t(403)](s, r);
    }
    let i = this[t(489)][t(451)] || 0;
    return i != 0 && (s.x -= i * 0.5, s.y -= i * 0.5, s.width += i, s[t(477)] += i), s;
  }
  [u(394)](n) {
    const x = u;
    if (this.dispatchEvent(ks), this.mouseEnabled == ![] || this.draggable == ![])
      return;
    let t = this.parent[x(317)]()[x(328)](), e = t[x(331)](n.dx, n.dy);
    this.translateWith(e.x, e.y);
  }
  setOrigin(n, x) {
    const t = u;
    return this[t(316)][0] = n, this.origin[1] = x, this;
  }
  getAllVisiable() {
    throw new Error("getAllVisiable() not implements");
  }
  transformPoint(n) {
    const x = u;
    return this[x(399)]()[x(371)](n);
  }
  getTransform() {
    const n = u;
    return k0.getCS(this)[n(399)](this);
  }
  [u(327)](n) {
    return this[u(322)][n];
  }
  [u(355)](n) {
    return this[u(319)](n);
  }
  [u(343)]() {
    return this[u(341)];
  }
  [u(319)](n, x) {
    const t = u;
    if (typeof n == t(315) && x != null) {
      let e = n;
      n = {}, n[e] = x;
    }
    return this[t(322)][t(408)](n, this), this[t(322)][t(385)] = !![], this;
  }
  [u(360)]() {
    const n = u;
    this[n(322)][n(368)](), this[n(322)][n(385)] = !![];
  }
  [u(479)](n) {
    const x = u;
    J.remove(this.classList, n), this[x(397)][x(494)](n), this.style[x(385)] = !![];
  }
  [u(472)](n) {
    const x = u;
    J[x(432)](this[x(397)], n), this.style[x(385)] = !![];
  }
  getTransformByDeep(n) {
    const x = u;
    return k0[x(433)](this)[x(475)](this, n);
  }
  [u(336)]() {
    return this[u(475)](W0);
  }
  [u(317)]() {
    return this[u(475)](Bt);
  }
  show() {
    const n = u;
    return this[n(385)] = !![], this[n(341)] = !![], this;
  }
  hide() {
    const n = u;
    return this[n(385)] = !![], this[n(341)] = ![], this;
  }
  [u(350)](n, x) {
    const t = u, e = n[t(425)];
    if (this[t(435)] = ![], !e[t(338)](this)) {
      if (this[t(347)] == t(428)) {
        this[t(435)] = !![];
        return;
      }
      this.isPointOn = e[t(362)](x);
    }
  }
  [u(495)](n, x) {
    const t = u;
    this[t(435)] = ![];
    const e = n[t(425)];
    e[t(338)](this) || (x == null && (x = this[t(383)]), this[t(435)] = e[t(483)](x, null));
  }
  [u(366)](n) {
    const x = u;
    return this[x(485)] = n, this;
  }
  [u(423)]() {
    return this.userData;
  }
  removeUserData() {
    const n = u;
    return this[n(485)] = void 0, this;
  }
  [u(410)](n, x) {
    const t = u;
    if (n == null || x == null)
      throw new Error(t(492));
    this[t(468)][n] = x;
  }
  [u(381)]() {
    return Object[u(391)](this.positions);
  }
  [u(398)](n, x) {
    return this[u(476)](n, x);
  }
  getLocalPoint(n, x, t) {
    const e = u;
    let s = this[e(488)](), i = s.length - 1;
    if (x != null) {
      if (x >= i)
        throw console[e(413)](this), console.log(x, i), new Error(e(407));
      s = [s[x], s[x + 1]];
    }
    return D[e(439)](s, n, t);
  }
  _findChildren(n, x, t = ![]) {
    const e = u;
    let s = this, i = s[e(427)], r = [], a = typeof x == e(478);
    for (var o = 0; o < i[e(441)]; o++) {
      let c = i[o];
      if (a ? x(c) && r[e(494)](c) : c[n] == x && r.push(c), t) {
        let h = c[e(438)](n, x, t);
        r = r.concat(h);
      }
    }
    return r;
  }
  [u(436)](n) {
    const x = u;
    let t, e, s = n, i, r = n[x(415)](/(.*)\s*(\[.*\])/);
    if (r && (s = r[1], i = r[2]), s[x(364)](".") ? e = (a) => a[x(397)].indexOf(s) != -1 : s[x(364)]("#") ? e = (a) => a.id == s.substring(1) : s != "" && (e = (a) => a[x(470)] == s), i != null && (t = i[x(415)](/\[\s*(.*?)\s*([>|<|=]{1,2})\s*['"]{0,1}(.*?)['"]{0,1}]$/)) != null) {
      let a = t[1], o = t[2], c = t[3], h = (d) => "" + d[a] == c;
      o == ">" ? h = (d) => d[a] > parseInt(c) : o == ">=" ? h = (d) => d[a] >= parseInt(c) : o == "<" ? h = (d) => d[a] < parseInt(c) : o == "<=" && (h = (d) => d[a] <= parseInt(c));
      let l = h;
      return e != null && (l = (d) => e(d) && h(d)), this[x(438)](a, l, !![]);
    }
    return this._findChildren(s, e, !![]);
  }
  [u(481)](n) {
    return this[u(436)](n)[0];
  }
  [u(461)]() {
    const n = u;
    return this[n(438)](n(496), !![], !![]);
  }
  getAllLinks() {
    const n = u;
    return this._findChildren(n(377), !![], !![]);
  }
  touchstartHandler(n) {
    const x = u;
    this[x(412)] == !![] && this[x(452)](Ei);
  }
  [u(400)](n) {
    this[u(412)] == !![] && this.dispatchEvent(Oi);
  }
  [u(374)](n) {
    const x = u;
    this[x(412)] == !![] && this[x(452)](Si);
  }
  [u(401)](n) {
    const x = u;
    this.mouseEnabled == !![] && this[x(452)](Ci);
  }
  [u(418)](n) {
    const x = u;
    this[x(412)] == !![] && this[x(452)](Li);
  }
  [u(454)](n) {
    const x = u;
    this[x(412)] == !![] && this[x(452)](n);
  }
  [u(419)](n) {
    this[u(412)] == !![] && this.dispatchEvent(n);
  }
  mouseenterHandler(n) {
    const x = u;
    this[x(412)] == !![] && this[x(452)](Di);
  }
  mouseoutHandler(n) {
    const x = u;
    this[x(412)] == !![] && this[x(452)](Ti);
  }
  [u(453)](n) {
    const x = u;
    this.mouseEnabled == !![] && this[x(452)](ks);
  }
  [u(417)](n) {
    this[u(412)] == !![] && this.dispatchEvent(Mi);
  }
  [u(346)](n) {
    const x = u;
    this[x(412)] == !![] && this[x(452)](Ai);
  }
  [u(334)]() {
    const n = u;
    this[n(412)] == !![] && (this[n(430)] = !![], this[n(452)](Fi));
  }
  unselectedHandler() {
    const n = u;
    this[n(430)] = ![], this[n(412)] == !![] && this[n(452)](Bi);
  }
  pickUp(n, x) {
    const t = u;
    let e = this.pickUpChild(n);
    if (e == null && this[t(435)] && this[t(341)] && (this.mouseEnabled == ![] && x != !![] || (e = this)), e != null) {
      let s = e[t(344)]();
      s != null && (e = s);
    }
    return e;
  }
  pickUpChild(n, x = ![]) {
    const t = u, e = this;
    let s = e[t(427)];
    if (this.visible == ![])
      return null;
    for (var i = s.length - 1; i >= 0; i--) {
      let r = s[i];
      if (r[t(459)] == ![] && r[t(427)].length > 0 && e.paintChildrenWhenOutOfViewport == ![])
        continue;
      let a = r[t(457)](n, x);
      if (a != null)
        return a;
    }
    return null;
  }
  addChild(n) {
    const x = u;
    return Ur(this, n), this[x(385)] = !![], this;
  }
  setzIndex(n) {
    const x = u;
    this[x(332)] = n, this[x(352)] && this[x(352)].updatezIndex(), this.dirty = !![];
  }
  [u(474)]() {
    const n = u;
    this[n(427)][n(480)](function(x, t) {
      const e = n;
      return x[e(332)] - t[e(332)];
    }), this[n(385)] = !![];
  }
  [u(345)](n = ![]) {
    const x = u;
    if (this[x(427)][x(441)] > 0) {
      const t = this[x(427)];
      for (let e = 0; e < t[x(441)]; e++) {
        const s = t[e];
        s.deep = this.deep + 1, s.children[x(441)] > 0 && s.updateChildrenDeep(n);
      }
    }
  }
  getChildren() {
    return this[u(427)];
  }
  hasChild(n) {
    return this[u(427)].indexOf(n) != -1;
  }
  [u(469)]() {
    const n = u;
    return this[n(427)][n(441)] > 0;
  }
  [u(311)]() {
    const n = u;
    return this.parent && (this.dispatchEvent(ji), this[n(352)][n(321)](this)), this[n(385)] = !![], this;
  }
  [u(432)]() {
    return this.removeFromParent();
  }
  [u(314)](n) {
    const x = u;
    this.dirty = !![];
    for (var t = 0; t < n.length; t++) {
      let e = n[t];
      e[x(352)] = this, e[x(313)] = this[x(313)] + 1, this[x(427)][x(494)](e), e[x(469)]() && e.updateChildrenDeep(!![]);
    }
    this[x(474)]();
  }
  [u(321)](n) {
    const x = u;
    this[x(385)] = !![];
    let t = this[x(427)][x(358)](n);
    return t == -1 ? this : (J[x(335)](this[x(427)], t), n[x(352)] = null, this);
  }
  removeChilds(n) {
    const x = u;
    for (var t of n)
      this[x(321)](t);
    return this;
  }
  [u(369)]() {
    const n = u;
    return this[n(385)] = !![], this[n(427)][n(357)](function(x) {
      const t = n;
      x[t(352)] = null;
    }), this.children[n(441)] = 0, this[n(385)] = !![], this;
  }
  [u(351)](n, x) {
    const t = u, e = this.children.indexOf(n);
    if (e == -1)
      throw new Error("replace child not found");
    this[t(427)][e] = x, n.parent = null, x[t(352)] = this;
  }
  [u(348)]() {
    const n = u;
    return this._obb[n(378)];
  }
  getChildrenAABB(n, x) {
    return zi(this, n, x);
  }
  [u(402)]() {
    const n = u;
    let x = this;
    for (; x.parent != null; )
      x = x[n(352)];
    return x;
  }
  [u(390)](n, x) {
    const t = u;
    return this[t(317)]().invert()[t(371)]({ x: n, y: x });
  }
  toStageXY(n, x) {
    const t = u;
    return this.getStageTransform()[t(371)]({ x: n, y: x });
  }
  [u(340)](n, x) {
    const t = u;
    return this[t(336)]()[t(371)]({ x: n, y: x });
  }
  [u(458)](n, x, t) {
    const e = u;
    let s = this[e(353)](n, x);
    return t[e(390)](s.x, s.y);
  }
  [u(370)](n) {
    const x = u;
    if (this.dirty = !![], this[x(440)] == null && (this.inLinks = []), this[x(440)][x(494)](n), this.hasListener(x(370))) {
      let t = new Event(x(370));
      t[x(325)] = n, this[x(452)](t);
    }
  }
  [u(404)](n) {
    const x = u;
    if (this.dirty = !![], this[x(387)][x(494)](n), this.hasListener("addOutLink")) {
      let t = new Event("addOutLink");
      t[x(325)] = n, this[x(452)](t);
    }
  }
  removeInLink(n) {
    const x = u;
    if (this[x(385)] = !![], J.remove(this[x(440)], n), this[x(484)](x(411))) {
      let t = new Event(x(411));
      t[x(325)] = n, this[x(452)](t);
    }
  }
  [u(330)](n) {
    const x = u;
    if (this[x(385)] = !![], this.outLinks != null && J[x(432)](this.outLinks, n), this[x(484)]("removeOutLink")) {
      let t = new Event(x(330));
      t.link = n, this[x(452)](t);
    }
  }
  [u(437)]() {
    const n = u;
    let x = [];
    return this.inLinks && (x = x[n(388)](this[n(440)])), this[n(387)] && (x = x[n(388)](this[n(387)])), x;
  }
  [u(462)](n = W0) {
    const x = u;
    let t = this[x(405)]();
    return this[x(313)] < n ? new xx(t) : (t = this[x(475)](n).points(t), new xx(t));
  }
  [u(329)](n, x) {
    const t = u;
    let e = this[t(398)](x - 1e-4, n), s = this.getPoint(x + 1e-4, n), i = s.x - e.x, r = s.y - e.y;
    return Math[t(426)](r, i);
  }
  [u(354)]() {
    const n = u;
    return this.getLinks()[n(393)]((t) => {
      t[n(356)]();
    })[n(324)]((t) => t != null);
  }
  [u(367)]() {
    const n = u;
    let x = this, t = x[n(352)];
    if (t != null) {
      const e = x[n(361)](![], W0);
      return !t.getAABB(![], W0)[n(431)](e);
    }
    return ![];
  }
  [u(344)]() {
    const n = u;
    let x = this.getAncestors();
    for (let t = 0; t < x[n(441)]; t++)
      if (x[t][n(464)])
        return x[t];
    return null;
  }
  [u(384)]() {
    const n = u;
    if (this[n(352)] == null)
      return [];
    let x = this, t = [];
    for (; x.parent != null; )
      t[n(494)](x[n(352)]), x = x.parent;
    return t[n(445)]();
  }
  [u(323)](n) {
    const x = u;
    if (this === n[x(352)])
      return !![];
    let t = n[x(384)]();
    return J[x(449)](t, this);
  }
  [u(465)]() {
    const n = u;
    let x = Zt[n(434)](this.children), t = /* @__PURE__ */ new Map();
    return x[n(357)]((e) => {
      t[n(447)](e.id, e);
    }), t[this.id] = this, t;
  }
  [u(466)]() {
    const n = u;
    this.destroyed = !![], this[n(352)] && this[n(352)][n(321)](this), this[n(395)] = void 0, this[n(322)] = void 0, this.children = void 0, this[n(359)] = void 0, this.positions = void 0, this[n(448)][n(378)] = void 0, this[n(316)] = void 0, this.userData = void 0, this[n(440)] = void 0, this[n(387)] = void 0;
  }
  static [u(434)](n, x) {
    const t = u;
    let e = [];
    for (var s = 0; s < n.length; s++) {
      let i = n[s];
      if ((x == null || x(i) == !![]) && (e[t(494)](i), i.children && i[t(427)][t(441)] > 0)) {
        let r = Zt[t(434)](i[t(427)], x);
        e = e[t(388)](r);
      }
    }
    return e;
  }
  static [u(429)](n) {
    const x = u;
    let t = Zt[x(434)](n);
    return t = Zt[x(434)](n, (e) => {
      const s = x;
      return J[s(342)](t, e[s(352)]);
    }), t;
  }
  static [u(361)](n, x = ![], t) {
    const e = u;
    let s = n[0][e(361)](x, t).clone();
    for (let i = 1; i < n[e(441)]; i++)
      s = K.union(s, n[i][e(361)](x, t));
    return s;
  }
};
let T = Zt;
t0([v(u(493))], T[u(392)], u(470), 2), t0([v("rect")], T.prototype, u(347), 2), t0([v(null)], T.prototype, u(375), 2), t0([v(![])], T[u(392)], "painted", 2), t0([v(![])], T[u(392)], "isPointOn", 2), t0([v(!![])], T[u(392)], u(385), 2), t0([v(null)], T[u(392)], u(383), 2), t0([v(![])], T[u(392)], u(482), 2), t0([v([u(470), "id", u(365), "zIndex", u(464), "editable", u(372), u(412), u(414), "userData", "showSelected", u(373), u(341), u(316), u(397)])], T[u(392)], u(455), 2), t0([v(0)], T[u(392)], u(332), 2), t0([v(0)], T[u(392)], u(422), 2), t0([v(![])], T[u(392)], u(464), 2), t0([v(1)], T[u(392)], u(424), 2), t0([v(1)], T.prototype, u(446), 2), t0([v(0)], T[u(392)], u(443), 2), t0([v(0)], T[u(392)], u(460), 2), t0([v(0)], T[u(392)], u(313), 2), t0([v(0)], T.prototype, u(349), 2), t0([v(!![])], T.prototype, u(341), 2), t0([v(!![])], T[u(392)], "showSelected", 2), t0([v(!![])], T[u(392)], u(389), 2), t0([v(!![])], T[u(392)], u(414), 2), t0([v(!![])], T.prototype, u(412), 2), t0([v(!![])], T[u(392)], u(373), 2), t0([v(![])], T[u(392)], u(430), 2), t0([v(!![])], T[u(392)], u(376), 2);
function zi(n, x, t) {
  const e = u;
  let s = new K(0, 0, 0, 0);
  if (n[e(469)]()) {
    let r = n[e(409)]();
    s = r[0][e(361)](x, t);
    for (var i = 1; i < r[e(441)]; i++) {
      let o = r[i], c = o.getAABB(x, t);
      K[e(403)](s, c);
    }
  }
  return s;
}
function Ur(n, x) {
  const t = u;
  if (n === x)
    throw console.log(n), new Error(t(406));
  if (J[t(449)](n[t(384)](), x) && (console[t(413)](t(450)), console[t(413)](n, x)), n[t(352)] === x && (console[t(413)](t(333)), console[t(413)](n, x)), n[t(385)] = !![], x.parent = n, x[t(313)] = n[t(313)] + 1, n[t(427)].indexOf(x) != -1)
    throw console[t(413)](n, x), new Error(t(312));
  return n.children[t(494)](x), x[t(427)][t(441)] > 0 && x[t(345)](!![]), n[t(474)](), n;
}
function ox(n, x) {
  const t = ge();
  return ox = function(e, s) {
    return e = e - 311, t[e];
  }, ox(n, x);
}
(function(n, x) {
  const t = _e, e = n();
  for (; []; )
    try {
      if (-parseInt(t(410)) / 1 * (parseInt(t(407)) / 2) + -parseInt(t(413)) / 3 * (parseInt(t(418)) / 4) + -parseInt(t(412)) / 5 + parseInt(t(417)) / 6 * (-parseInt(t(402)) / 7) + -parseInt(t(421)) / 8 + parseInt(t(404)) / 9 + parseInt(t(420)) / 10 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(me, 190519);
function _e(n, x) {
  const t = me();
  return _e = function(e, s) {
    return e = e - 400, t[e];
  }, _e(n, x);
}
function Gr(n, x, t, e, s) {
  const i = _e;
  let r = n[i(403)] * n[i(416)], a = n[i(419)] * n.scaleY, o = r * x - r, c = a * t - a;
  if (e != null && s != null) {
    let h = { x: n[i(403)] * 0.5, y: n[i(419)] * 0.5 }, l = n[i(401)](h.x, h.y), d = (e - l.x) / 2, y = (s - l.y) / 2;
    x >= 1 ? (o += d, c += y) : (o -= d * x, c -= y * t);
  }
  n[i(400)](-(o / 2), -(c / 2)), n[i(411)](x, t);
}
function me() {
  const n = ["scaleBy", "1280375PqMHLZ", "318lpxpsh", "resizeTo", "getChildren", "scaleX", "382476lnYYLa", "9232FiQOuI", "height", "8091780vzLIIo", "1703096GTfIRY", "translateWith", "toStageXY", "7QtDStg", "width", "3117807QDbFis", "MIN_SAFE_INTEGER", "hasChildren", "4876SYaset", "MAX_SAFE_INTEGER", "length", "77NOXFas"];
  return me = function() {
    return n;
  }, me();
}
function zt(n, x) {
  var t = Ie();
  return zt = function(e, s) {
    e = e - 323;
    var i = t[e];
    return i;
  }, zt(n, x);
}
var $s = zt;
(function(n, x) {
  for (var t = zt, e = n(); []; )
    try {
      var s = parseInt(t(344)) / 1 * (-parseInt(t(342)) / 2) + -parseInt(t(345)) / 3 + parseInt(t(332)) / 4 * (-parseInt(t(336)) / 5) + -parseInt(t(331)) / 6 * (parseInt(t(326)) / 7) + parseInt(t(334)) / 8 + -parseInt(t(327)) / 9 * (-parseInt(t(329)) / 10) + parseInt(t(339)) / 11 * (parseInt(t(328)) / 12);
      if (s === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Ie, 758845);
class Jr {
  constructor() {
    var x = zt;
    this[x(341)] = ![], this[x(323)] = 1, this[x(330)] = new I0({ strokeStyle: x(338), fillStyle: x(324), textAlign: x(343), textBaseline: x(335), lineWidth: 1 }), this[x(333)] = new I0({ strokeStyle: x(325), fillStyle: "rgba(0,255,0, 0.9)", textBaseline: x(340), lineWidth: 1 });
  }
  show() {
    var x = zt;
    this[x(341)] = !![];
  }
  [$s(337)]() {
    var x = $s;
    this[x(341)] = ![];
  }
}
function Ie() {
  var n = ["225154reKXzF", "right", "11bXijjD", "573993GVeKCD", "lineDashScale", "rgba(255,0,0,0.9)", "rgba(0,255,0, 0.4)", "7bKPdXb", "572598kLHsvh", "11080008RjDvMx", "50cCsLOb", "styleX", "4788354bwMswC", "8HUIvMF", "styleY", "7298432Yaozkf", "top", "226250MkZjut", "hide", "rgba(255,0,0,0.3)", "22BIufkN", "bottom", "visible"];
  return Ie = function() {
    return n;
  }, Ie();
}
const fs = ve;
(function(n, x) {
  const t = ve, e = n();
  for (; []; )
    try {
      if (-parseInt(t(286)) / 1 * (-parseInt(t(295)) / 2) + -parseInt(t(287)) / 3 * (-parseInt(t(285)) / 4) + parseInt(t(293)) / 5 * (-parseInt(t(282)) / 6) + -parseInt(t(291)) / 7 * (parseInt(t(290)) / 8) + -parseInt(t(292)) / 9 * (-parseInt(t(280)) / 10) + -parseInt(t(284)) / 11 + parseInt(t(294)) / 12 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(we, 237797);
function we() {
  const n = ["88005kDRHjG", "1618860cmJZXm", "32070cvjlPJ", "setItem", "28470whLQoI", "getItem", "6ILIAUv", "_jtopo_debug_mode", "4201714woKpHr", "1869236GirITh", "23HgCWMY", "3Xljpsc", "true", "isDebug", "8xidyaG", "2654393IxKzpy", "144xiXohR"];
  return we = function() {
    return n;
  }, we();
}
function ve(n, x) {
  const t = we();
  return ve = function(e, s) {
    return e = e - 280, t[e];
  }, ve(n, x);
}
let gt = { isDebug: localStorage[fs(281)](fs(283)) == "true", showFPS: ![], paintAABB: ![], debugInfo: null, debugMode: function() {
  const n = fs;
  let x = localStorage.getItem("_jtopo_debug_mode") == n(288), t = !x;
  localStorage[n(296)](n(283), "" + t), gt[n(289)] = t;
} };
function ke(n, x) {
  var t = Pe();
  return ke = function(e, s) {
    e = e - 151;
    var i = t[e];
    return i;
  }, ke(n, x);
}
(function(n, x) {
  for (var t = ke, e = n(); []; )
    try {
      var s = -parseInt(t(163)) / 1 + parseInt(t(162)) / 2 * (-parseInt(t(154)) / 3) + -parseInt(t(157)) / 4 * (-parseInt(t(161)) / 5) + -parseInt(t(152)) / 6 * (-parseInt(t(156)) / 7) + -parseInt(t(153)) / 8 + parseInt(t(155)) / 9 * (parseInt(t(158)) / 10) + -parseInt(t(160)) / 11;
      if (s === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Pe, 141566);
function Pe() {
  var n = ["35584XzMdVe", "1080TGUaKy", "writable", "2314653LTPyRa", "150sSgNWn", "203002qxrHvj", "123202IiMFXy", "enumerable", "747702IKbpuD", "749288ikZDFM", "3zzWaDt", "23238rQHSsa", "7qnHFgp"];
  return Pe = function() {
    return n;
  }, Pe();
}
function G0(n, x) {
  for (var t in x) {
    let e = x[t];
    Zr(n, t, e);
  }
}
function Zr(n, x, t) {
  var e = ke;
  t[e(159)] == null && (t[e(159)] = !![]), t[e(151)] == null && (t[e(151)] = !![]), Object.defineProperty(n, x, t);
}
(function(n, x) {
  for (var t = Ee, e = n(); []; )
    try {
      var s = -parseInt(t(176)) / 1 + -parseInt(t(188)) / 2 * (parseInt(t(185)) / 3) + -parseInt(t(180)) / 4 * (-parseInt(t(181)) / 5) + -parseInt(t(183)) / 6 * (-parseInt(t(177)) / 7) + parseInt(t(179)) / 8 * (parseInt(t(184)) / 9) + -parseInt(t(187)) / 10 * (-parseInt(t(186)) / 11) + -parseInt(t(182)) / 12;
      if (s === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Se, 211511);
function Ee(n, x) {
  var t = Se();
  return Ee = function(e, s) {
    e = e - 176;
    var i = t[e];
    return i;
  }, Ee(n, x);
}
class os {
  constructor(x) {
    var t = Ee;
    this[t(178)] = 0, this.x = x.x, this.y = x.y;
  }
}
function Se() {
  var n = ["1083741RmZwBu", "44dzzobo", "357020DPnUkK", "2jKXUSW", "111224MrIwIa", "518119wKPzxP", "length", "88uquZtN", "269236MxWBTN", "5NOnpTY", "1755708aSGsXz", "18EKhlBe", "325737UwMPyg"];
  return Se = function() {
    return n;
  }, Se();
}
function p0(n, x) {
  const t = Oe();
  return p0 = function(e, s) {
    return e = e - 192, t[e];
  }, p0(n, x);
}
(function(n, x) {
  const t = p0, e = n();
  for (; []; )
    try {
      if (parseInt(t(217)) / 1 + -parseInt(t(207)) / 2 * (-parseInt(t(201)) / 3) + parseInt(t(227)) / 4 * (-parseInt(t(210)) / 5) + -parseInt(t(221)) / 6 + parseInt(t(219)) / 7 + parseInt(t(208)) / 8 + parseInt(t(205)) / 9 * (parseInt(t(213)) / 10) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Oe, 897180);
function Qr(n, x, t, e) {
  const s = p0, i = n.x, r = x.x, a = n.y, o = x.y, c = [r - i, o - a];
  R[s(195)](c, c);
  const h = [-c[1] * e, c[0] * e], l = D[s(222)](n, h, t), d = D[s(222)](x, h, t);
  return [l, d];
}
function $r(n, x, t) {
  const e = p0, s = n.x, i = x.x, r = n.y, a = x.y, o = [i - s, a - r];
  R.normalize(o, o);
  const c = [-o[1] * t, o[0] * t], h = D[e(222)](n, c, 1), l = D.createPoints2(x, c, 1);
  return [h[0], l[0]];
}
function t1(n, x, t) {
  const e = p0, s = [n.x - x.x, n.y - x.y], i = [t.x - x.x, t.y - x.y], r = R[e(195)]([], i), a = R[e(200)](s, r), o = R[e(224)]([], r, a);
  return o[e(203)] = a, o;
}
function Oe() {
  const n = ["points", "2721420xgJzww", "createPoints2", "getOBB", "multiplyC", "getTransformByDeep", "segIndex", "244SNzXiU", "toFixed", "isNode", "distancePoint", "dist", "rate", "length", "error segIndex:", "normalize", "positionToLocalPoint", "number of points is less than 2", "segLen", "push", "dot", "1263EdRsDY", "abs", "projectionLen", "point", "36oOfPkr", "getBeginPoint", "8382Yxoqln", "200576upOxYb", "object", "129005gyHxZD", "seg", "MAX_SAFE_INTEGER", "51980VfyGkV", "isLink", "concat", "end", "39023gMZRHE", "len", "7527191ZPCNVP"];
  return Oe = function() {
    return n;
  }, Oe();
}
function x1(n, x, t) {
  const e = p0, s = t1(n, x, t), i = [t.x - x.x, t.y - x.y], r = R[e(218)](i), a = s[e(203)] / r, o = new os();
  return o.x = x.x + s[0], o.y = x.y + s[1], o[e(198)] = r, o[e(203)] = s[e(203)], o.rate = a, o;
}
function e1(n, x, t) {
  const e = p0, s = [n.x - x.x, n.y - x.y], i = [t.x - x.x, t.y - x.y], r = R[e(195)]([], i), a = R[e(218)](i);
  let o;
  const c = R[e(200)](s, r);
  if (c > a)
    o = t;
  else if (c < 0)
    o = x;
  else {
    let l = R[e(224)]([], r, c);
    o = { x: x.x + l[0], y: x.y + l[1] };
  }
  let h = new os(o);
  return h.segLen = a, h.projectionLen = c, h[e(192)] = c / a, h;
}
function zs(n, x) {
  const t = p0;
  if (x[t(193)] < 2)
    throw new Error(t(197));
  let e = new os(x[0]), s = Number[t(212)];
  for (let i = 0; i < x[t(193)] - 1; i++) {
    const r = x[i], a = x[i + 1], o = e1(n, r, a), c = D.distancePoint(o, n);
    c < s && (e = o, e[t(211)] = [r, a], e[t(231)] = c, e[t(226)] = i, s = c);
  }
  return e;
}
function Ce(n, x, t, e, s = ![]) {
  const i = p0, r = [x.x - n.x, x.y - n.y], a = [e.x - t.x, e.y - t.y], o = R[i(195)]([], [-r[1], r[0]]), c = R.normalize([], [-a[1], a[0]]), h = R[i(200)](o, [n.x, n.y]), l = R.dot(c, [t.x, t.y]), d = o[0], y = o[1], g = c[0], p = c[1], k = d * p - g * y;
  if (k == 0)
    return null;
  const I = { x: (p * h - y * l) / k, y: (d * l - g * h) / k };
  return s == ![] && (!ti(I, n, x) || !ti(I, t, e)) ? null : I;
}
function Ni(n, x, t, e = ![]) {
  const s = p0;
  if (t[s(193)] < 2)
    throw new Error("lenght of points less than 2");
  let i = [];
  for (var r = 0; r < t.length - 1; r++) {
    const a = t[r], o = t[r + 1];
    let c = Ce(n, x, a, o, e);
    c != null && i[s(199)](c);
  }
  return i = n1(i), i;
}
function ti(n, x, t) {
  const e = p0;
  let s = [t.x - x.x, t.y - x.y], i = R[e(218)](s), r = { x: (x.x + t.x) / 2, y: (x.y + t.y) / 2 }, a = [n.x - r.x, n.y - r.y];
  return R[e(218)](a) * 2 <= i + 1e-10;
}
function n1(n) {
  const x = p0;
  let t = {}, e = [];
  for (var s = 0; s < n[x(193)]; s++) {
    let i = n[s], r = i.x.toFixed(6) + "-" + i.y[x(228)](6);
    t[r] == null && (e[x(199)](i), t[r] = i);
  }
  return e;
}
function s1(n, x, t) {
  const e = p0;
  let s = Number[e(212)], i = null;
  for (var r = 0; r < x[e(193)]; r++) {
    const a = x[r], o = a[e(223)](Bt)[e(220)];
    a[e(229)] && o[e(199)](o[0]), mi(o[e(193)] >= 2, a, o);
    let c = zs(n, o);
    c[e(231)] < s && c[e(231)] < t && (s = c.dist, c[e(209)] = a, i = c);
  }
  return i;
}
function i1(n, x, t) {
  const e = p0;
  let s = Number.MAX_SAFE_INTEGER, i;
  for (let r = 0; r < x[e(193)]; r++) {
    const a = x[r];
    let o = a[e(225)](Bt), c = a.getAnchorPoints();
    for (let h = 0; h < c[e(193)]; h++) {
      let l = c[h], d = o[e(204)](a[e(196)](l)), y = D[e(230)](d, n);
      y < s && y < t && (s = y, i = { object: a, anchorName: l });
    }
  }
  return i;
}
function r1(n, x) {
  const t = p0;
  let e = n[t(226)], s = n.rate, i = n[t(209)], r = s >= 0.25 && s <= 0.75, a = s - 0.5, o = Math[t(202)](n[t(198)] * a);
  if (i.isNode) {
    if (o > x || !r)
      return null;
    if (e == 0)
      return S.ct;
    if (e == 1)
      return S.rm;
    if (e == 2)
      return S.cb;
    if (e == 3)
      return S.lm;
    throw new Error(t(194) + e);
  } else if (i[t(214)]) {
    let c = i.stageToLocalXY(n.x, n.y);
    return D[t(230)](c, i[t(206)]()) <= x ? S.begin : D[t(230)](c, i.getEndPoint()) <= x ? S[t(216)] : null;
  } else
    throw new Error("unkwnow object!");
}
function Bx(n) {
  return Math[p0(202)](Math.abs(n) % Math.PI) < 0.5;
}
function Ps(n, x, t) {
  return n < x ? x : n > t ? t : n;
}
const ft = V0;
(function(n, x) {
  const t = V0, e = n();
  for (; []; )
    try {
      if (parseInt(t(453)) / 1 + -parseInt(t(491)) / 2 * (-parseInt(t(446)) / 3) + parseInt(t(448)) / 4 * (parseInt(t(441)) / 5) + -parseInt(t(481)) / 6 * (parseInt(t(482)) / 7) + -parseInt(t(462)) / 8 + -parseInt(t(470)) / 9 + parseInt(t(485)) / 10 * (-parseInt(t(455)) / 11) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Le, 644164);
function a1(n, x, t) {
  const e = V0;
  t = t | 1;
  const s = document.createElementNS(e(465), e(450));
  return s[e(467)](e(478), e(465)), s[e(483)] = e(438) + n + e(489) + x + "px;opacity:" + t + ";", s[e(480)] = e(454) + t + `;">
        '</foreignObject>`, s;
}
function V0(n, x) {
  const t = Le();
  return V0 = function(e, s) {
    return e = e - 438, t[e];
  }, V0(n, x);
}
function o1(n) {
  const x = V0;
  let t = document.createElement("canvas");
  t[x(493)] = n[x(483)].width ? +n[x(483)].width : n.width, t[x(451)] = n[x(483)].height ? +n[x(483)][x(451)] : n.height;
  let e = t[x(486)]("2d");
  return e[x(449)](t[x(493)] / n[x(471)], t[x(451)] / n[x(469)]), e[x(459)](n, 0, 0), x(477) + n[x(493)] + x(474) + n.height + x(457) + t[x(439)](x(475)) + x(474) + n[x(451)] + x(490) + n[x(493)] + x(473);
}
async function c1(n) {
  const x = V0, t = n[x(484)](/\<br\>/gi, x(476)), e = t[x(442)](/<img .*?>/g);
  if (e == null || e[x(472)] == 0)
    return new Promise(function(i) {
      i([[], []]);
    });
  const s = [];
  return new Promise(function(i) {
    e.forEach(function(r) {
      const a = V0, o = document[a(466)](a(488));
      o[a(480)] = r;
      const c = o[a(445)]("img");
      c[a(444)] = function() {
        const h = a, l = o1(c);
        s.push(l), s[h(472)] == e[h(472)] && i([e, s]);
      };
    });
  });
}
class Es {
  constructor(x, t, e, s = 1) {
    const i = V0;
    this.isHtmlImage = !![], this.width = 1, this[i(451)] = 1, this[i(452)] = 1, this[i(463)] = !![], x !== null && x[i(447)](i(487)) && (x = x[i(461)](9)), this[i(464)] = x, this[i(493)] = t, this[i(451)] = e, this[i(452)] = s | 1, this[i(450)] = a1(t, e, this.opacity), this.canvas = document[i(466)]("canvas");
  }
  [ft(443)](x, t) {
    const e = ft;
    this[e(493)] = x, this[e(451)] = t;
  }
  [ft(468)](x) {
    const t = ft;
    if (x != t(440))
      throw new Error(t(456));
    return "HtmlImage" + this[t(464)];
  }
  [ft(479)](x) {
    const t = ft;
    this[t(464)] = x;
  }
  getCanvas() {
    const x = ft;
    let t = this[x(464)];
    const e = this[x(450)], s = this;
    let i = s[x(458)], r = i[x(486)]("2d");
    return i[x(483)][x(493)] = s[x(493)] + "px", i.style[x(451)] = s[x(451)] + "px", i.width = s[x(493)], i.height = s[x(451)], new Promise(function(a) {
      c1(t).then(function(o) {
        const c = V0, h = o[0], l = o[1];
        for (let g = 0; g < h.length; g++)
          t = t[c(484)](h[g], l[g]);
        const d = e[c(445)](c(460));
        d[c(480)] = t;
        let y = new Image();
        y[c(440)] = c(492) + encodeURIComponent(s[c(450)].outerHTML), y.onload = function() {
          const g = c;
          r[g(459)](y, 0, 0, s[g(493)], s[g(451)]), a(i);
        };
      });
    });
  }
}
function Le() {
  const n = ["match", "setSize", "onload", "querySelector", "129LaIDMQ", "startsWith", "12VetHuI", "scale", "svg", "height", "opacity", "837893kMpMeo", '<foreignObject width="100%" height="100%" style="position:absolute;top:0;left:0; opacity: ', "627LnwSpR", "HtmlImage has only src attr", '" display="inline" style="vertical-align: middle;display: inline-block"><image xlink:href="', "canvas", "drawImage", "foreignObject", "substring", "3382528mdOxAY", "isHtmlImage", "html", "http://www.w3.org/2000/svg", "createElement", "setAttribute", "getAttribute", "naturalHeight", "4796541pEQPrk", "naturalWidth", "length", 'px" /></svg>', '" height="', "image/png", "<div/>", '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink" width="', "xmlns", "setHtml", "innerHTML", "127398xSkRCP", "28BogRLk", "style", "replace", "221460Sjwill", "getContext", "HtmlImage", "div", "px;height:", 'px" width="', "39022xYzxmv", "data:image/svg+xml;charset=utf-8,", "width", "border:0px;position:absolute;top:0px;left:0px;text-align:center;z-index:10;width:", "toDataURL", "src", "2117195LVklAK"];
  return Le = function() {
    return n;
  }, Le();
}
const b = Me;
(function(n, x) {
  const t = Me, e = n();
  for (; []; )
    try {
      if (-parseInt(t(572)) / 1 * (parseInt(t(615)) / 2) + -parseInt(t(472)) / 3 * (parseInt(t(524)) / 4) + -parseInt(t(540)) / 5 + parseInt(t(612)) / 6 * (parseInt(t(624)) / 7) + parseInt(t(497)) / 8 * (parseInt(t(486)) / 9) + -parseInt(t(495)) / 10 * (-parseInt(t(602)) / 11) + parseInt(t(530)) / 12 * (-parseInt(t(631)) / 13) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Ae, 830900);
var h1 = Object[b(555)], l1 = Object[b(474)], s0 = (n, x, t, e) => {
  for (var s = e > 1 ? void 0 : e ? l1(x, t) : x, i = n.length - 1, r; i >= 0; i--)
    (r = n[i]) && (s = (e ? r(x, t, s) : r(s)) || s);
  return e && s && h1(x, t, s), s;
};
function Me(n, x) {
  const t = Ae();
  return Me = function(e, s) {
    return e = e - 467, t[e];
  }, Me(n, x);
}
const Ri = class extends T {
  constructor(n, x = 0, t = 0, e = 1, s = 1) {
    const i = b;
    super(), this.x = 0, this.y = 0, this[i(620)] = 0, this.top = 0, this[i(608)] = 0, this[i(535)] = 0, this[i(630)] = e0.RectShape, this.x = x || 0, this.y = t || 0, this[i(596)] = e || 0, this[i(541)] = s || 0, this[i(498)] = n;
  }
  [b(575)](n) {
    const x = b;
    this[x(630)] = n, this[x(514)]();
  }
  [b(514)]() {
    const n = b, x = this._getShapeSize();
    this[n(503)] = e0[n(614)](this[n(630)], x[n(596)], x.height), this._preWidth = x[n(596)], this._preHeight = x[n(541)];
  }
  [b(625)](n, x, t, e) {
    const s = b;
    x != null && (this[s(528)] = x), this[s(543)] = n, this[s(488)](n), t != null && this[s(626)](t, this[s(618)][1]), e != null && this.setOrigin(this[s(618)][0], e);
  }
  alignOriginToNode(n, x = b(559)) {
    const t = b;
    let e = at[x];
    this[t(626)](e.x, e.y), this.originAlignPosition = n;
  }
  [b(470)]() {
    const n = b;
    let x = this[n(608)], t = this.bottom, e = this.left, s = this[n(469)];
    return [{ x: e, y: s }, { x, y: s }, { x, y: t }, { x: e, y: t }];
  }
  _getShapeSize() {
    const n = b, x = this._style;
    let t = x[n(587)] || 0, e = x[n(487)] || 0, s = x[n(603)] || 0;
    const i = this[n(596)] - t * 2 - e - s * 2, r = this[n(541)] - t * 2 - e - s * 2;
    return { width: i, height: r };
  }
  [b(513)]() {
    const n = b, x = this[n(470)]();
    return (this.shape === e0[n(477)] || this.shape.isClosed) && x[n(576)](x[0]), x;
  }
  [b(566)]() {
    const n = b;
    if (this[n(630)][n(571)])
      return this[n(630)][n(571)] = ![], this._projectionShape(), this._shapePoints;
    let x = this._getShapeSize();
    return this[n(525)] == x[n(596)] && this[n(494)] == x[n(541)] ? this._shapePoints : (this[n(514)](), this[n(503)]);
  }
  [b(548)](n, x) {
    const t = b;
    let e = this;
    if (n == null || n == "")
      return this[t(496)] = null, this.image = null, this;
    if (n[t(501)] == t(502))
      return this[t(496)] = n.getAttribute("src"), e[t(606)] = n, x == !![] && e.resizeTo(n[t(596)], n[t(541)]), this;
    if (n[t(501)] == "CANVAS")
      return this[t(496)] = t(473), this.image = n, x == !![] && this.resizeTo(n[t(596)], n[t(541)]), this;
    if (typeof n == t(553))
      if (n.startsWith(t(500))) {
        let s = n;
        n = new Es(s, this[t(596)], this[t(541)]);
      } else
        this[t(496)] = n;
    return Y0[t(601)](n, function(s) {
      const i = t;
      e[i(606)] = s, n instanceof Es ? e[i(496)] = n.getAttribute(i(523)) : e[i(496)] = s[i(517)](i(523)), x == !![] && e[i(588)](s[i(596)], s.height);
    }), this;
  }
  setText(n) {
    const x = b;
    if (n != this[x(471)] && (this[x(507)] = !![]), n == null) {
      this._text = n;
      return;
    }
    if (typeof n == x(598) && (n = "" + n), n.indexOf(`
`) != -1) {
      let t = n[x(506)](`
`);
      this[x(570)] = t;
    } else
      this[x(570)] = null;
    this[x(471)] = n, this.calcTextSize();
  }
  calcTextSize() {
    const n = b;
    let x = this[n(570)] == null ? 1 : this[n(570)][n(499)], t;
    x == 1 ? t = I0.measureText(this[n(471)], this._style, x) : t = I0[n(510)](this[n(570)], this[n(493)], x), this._textWidth = t[n(596)], this[n(509)] = t[n(541)], this[n(564)] = t.lineHeight;
  }
  [b(475)](n) {
    const x = b;
    return Object[x(577)](this, n), this[x(571)] = !![], this;
  }
  resizeToFitImage() {
    const n = b;
    this[n(532)] != null && this[n(532)][n(596)] != null && this[n(588)](this._image[n(596)], this[n(532)][n(541)]);
  }
  init(n, x, t, e, s) {
    const i = b;
    this[i(571)] = !![], this.x = x || 0, this.y = t || 0, this[i(596)] = e || 0, this.height = s || 0, this[i(498)] = n;
  }
  [b(547)](n) {
    const x = b;
    let t = this[x(566)]();
    this[x(630)].draw(t, n);
  }
  [b(610)](n) {
    const x = b;
    let t = this[x(493)], e = t.borderWidth || 0;
    const s = e > 0;
    let i = this[x(620)] + e * 0.5, r = this[x(469)] + e * 0.5, a = this.width - e, o = this[x(541)] - e;
    const c = t[x(550)] != null;
    if (c) {
      n[x(487)] = e, n[x(589)] = t[x(550)], n[x(609)] = t[x(565)] || x(613);
      let d = t[x(468)] || 0;
      (t.borderStyle == x(529) || t[x(505)] == x(582)) && n[x(599)]([1, 1]), n[x(522)](), d == 0 ? n.rect(i, r, a, o) : n[x(593)](i, r, a, o, d), n[x(594)]();
    }
    if (s) {
      if (!c) {
        n[x(487)] = e, n[x(589)] = t[x(550)], n[x(609)] = t[x(565)] || "black";
        let d = t.borderRadius || 0;
        (t[x(505)] == "dashed" || t.borderStyle == x(582)) && n[x(599)]([1, 1]), n[x(522)](), d == 0 ? n[x(467)](i, r, a, o) : n.roundRect(i, r, a, o, d), n[x(583)]();
      }
      n[x(600)]();
    }
    const h = this[x(606)] || this[x(622)][x(632)], l = h != null;
    return l && this[x(574)](n, h, s, c, e), s || c || l;
  }
  _drawImage(n, x, t, e, s) {
    const i = b;
    if (this[i(496)] != null && this[i(496)][i(621)]()[i(597)](i(479))) {
      n[i(623)](x, this[i(620)], this.top, this[i(596)], this.height);
      return;
    }
    const r = this[i(622)];
    let a = this[i(596)] - s - s, o = this[i(541)] - s - s, c = r[i(595)](a, o, this), h = this.left + c.x, l = this[i(469)] + c.y, d = c[i(596)], y = c[i(541)], g = x[i(596)], p = x[i(541)];
    const k = r[i(545)] || "no-repeat";
    if (k == i(480)) {
      n[i(623)](x, 0, 0, g, p, h, l, d, y);
      return;
    }
    (t || e) && n.clip();
    let I = n[i(536)](x, k);
    n[i(589)] = I;
    let L = h % g, P = l % p;
    k == "repeat-x" ? P = 0 : k == i(484) && (L = 0), n.translate(L, P), n[i(584)](this[i(620)] - g, this.top - p, a + g + g, o + p + p), n[i(518)](-L, -P);
  }
  [b(586)](n) {
    const x = b;
    let t = this[x(493)];
    n[x(549)](), this._drawBackgroundAndBorder(n) && this[x(516)](n), n.beginPath(), this.drawShape(n), t[x(589)] != null && (n[x(589)] = t[x(589)], n.fill()), (t[x(487)] || 0) != 0 && t[x(609)] != null && (n[x(487)] = t.lineWidth, n[x(609)] = t[x(609)], n.stroke()), this[x(605)] == ![] && this.pickType == x(630) && this[x(516)](n), n.restore();
  }
  draw(n) {
    const x = b;
    this[x(596)] != 0 && this[x(541)] != 0 && this[x(586)](n), this[x(619)](n);
  }
  _isTextOrStyleDirty() {
    const n = b;
    return this[n(507)] || this[n(622)][n(562)]();
  }
  [b(515)](n = 0, x = 0) {
    const t = b;
    this[t(537)]() && this[t(491)]();
    let e = this[t(493)], s = null;
    e[t(604)] != null ? s = this.positionToLocalPoint(e[t(604)]) : s = { x: 0, y: this[t(535)] };
    let i = 0, r = -(this[t(509)] - this._textLineHeight) * 0.5;
    return e[t(482)] == t(620) ? i = n + x : e[t(482)] == t(608) && (i = -(n + x)), e.textBaseline == "top" ? r = n + x : e[t(628)] == "bottom" && (r = -(n + x) - this[t(509)] + this[t(564)]), s.x += i, s.y += r, e[t(485)] != null && (s.x += e.textOffsetX), e[t(531)] != null && (s.y += e.textOffsetY), s;
  }
  _paintText(n) {
    const x = b;
    let t = this._text;
    if (t == null)
      return;
    let e = this._style, s = this[x(515)](), i = this._textArr;
    if (n[x(589)] = e[x(492)] || x(613), this[x(552)] == 0)
      if (i == null)
        n[x(617)](t, s.x, s.y);
      else {
        let a = this[x(564)];
        for (var r = 0; r < i[x(499)]; r++)
          n[x(617)](i[r], s.x, s.y + r * a);
      }
    else {
      if (n.translate(s.x, s.y), n[x(616)](this[x(552)]), i == null)
        n[x(617)](t, 0, 0);
      else {
        let a = this[x(564)];
        for (var r = 0; r < i[x(499)]; r++)
          n[x(617)](i[r], 0, 0 + r * a);
      }
      n.rotate(-this.text), n[x(518)](-s.x, -s.y);
    }
    return this[x(507)] = ![], s;
  }
  getLinkChildren(n) {
    const x = b;
    let t = [], e = this[x(560)];
    for (var s = 0; s < e[x(499)]; s++) {
      let i = e[s], r = i[x(476)][x(627)];
      !J[x(508)](t, r) && t[x(576)](r), n && r instanceof Ri && r.outLinks[x(499)] > 0 && J[x(481)](t, r.getLinkChildren(n));
    }
    return t;
  }
  [b(563)](n, x) {
    const t = b, e = this[t(513)](), s = Ni({ x: n, y: x }, { x: 0, y: 0 }, e);
    return s == null || s.length == 0 ? { x: n, y: x } : s[0];
  }
  [b(488)](n) {
    const x = b;
    return this[x(591)] = n, this;
  }
  translateWith(n, x) {
    return this.dirty = !![], this.x += n, this.y += x, this;
  }
  translateTo(n, x) {
    const t = b;
    return this[t(571)] = !![], this.x = n, this.y = x, this;
  }
  [b(518)](n, x) {
    const t = b;
    return this[t(571)] = !![], this.x = n, this.y = x, this;
  }
  setXY(n, x) {
    return this.dirty = !![], this.x = n, this.y = x, this;
  }
  [b(544)](n, x, t) {
    const e = b;
    this[e(571)] = !![];
    let s = this[e(585)](n), i = x - s.x, r = t - s.y;
    this[e(511)](i, r);
  }
  [b(588)](n, x) {
    const t = b;
    return this[t(571)] = !![], this[t(596)] = n, this[t(541)] = x, this;
  }
  [b(534)](n, x) {
    const t = b;
    return this.dirty = !![], this[t(596)] += n, this[t(541)] += x, this[t(596)] < 0 && (this[t(596)] = 0), this[t(541)] < 0 && (this.height = 0), this;
  }
  [b(569)](n, x) {
    const t = b;
    return this[t(571)] = !![], this[t(526)] *= n, this[t(533)] *= x, this;
  }
  [b(592)](n, x, t, e) {
    const s = b;
    return this.dirty = !![], this.width * this.scaleX, this[s(541)] * this.scaleY, this[s(569)](n, x), this;
  }
  [b(519)]() {
    return this.zoom(0.8, 0.8), this;
  }
  [b(558)]() {
    return this[b(592)](1.25, 1.25), this;
  }
  [b(567)](n, x) {
    const t = b;
    return this[t(571)] = !![], this[t(526)] = n, this[t(533)] = x, this;
  }
  [b(561)](n) {
    const x = b;
    return this[x(571)] = !![], this[x(573)] = n, this;
  }
  rotate(n) {
    const x = b;
    return this[x(571)] = !![], this[x(573)] = n, this;
  }
  rotateWith(n) {
    const x = b;
    return this[x(571)] = !![], this[x(573)] += n, this;
  }
  getRect() {
    const n = b;
    return new K(this.x - this.width * 0.5, this.y - this[n(541)] * 0.5, this.width, this[n(541)]);
  }
  [b(578)](n, x) {
    const t = b;
    let e = this[t(489)](n, x);
    return { x: this[t(620)] + e.x, y: this[t(469)] + e.y };
  }
  [b(546)](n) {
    const x = b;
    if (this[x(611)] === n)
      throw new Error(x(520));
    let t = this;
    return Ns(t, n), t[x(611)] && t[x(611)].removeChild(t), n[x(512)](t), this;
  }
  [b(504)](n) {
    const x = b;
    let t = at[n];
    return this[x(618)][0] = t.x, this[x(618)][1] = t.y, this;
  }
  [b(585)](n, x, t) {
    const e = b;
    let s = this[e(580)][n];
    if (s == null && (s = at[n]), s == null)
      throw Error("position not exist:" + n);
    return typeof s == "function" ? s[e(490)](this, x, t) : { x: s.x * this[e(596)], y: s.y * this[e(541)] };
  }
  getPositionNormal(n) {
    const x = b;
    let t = this.positionToLocalPoint(S[x(559)]), e = this[x(585)](n);
    return K.normal(t, e);
  }
};
let C = Ri;
s0([v(b(607))], C[b(554)], b(579), 2), s0([v(1)], C[b(554)], b(596), 2), s0([v(1)], C.prototype, "height", 2), s0([v(0)], C[b(554)], b(573), 2), s0([v(null)], C[b(554)], b(543), 2), s0([v(!![])], C[b(554)], "originAutoRotate", 2), s0([v(0)], C[b(554)], b(528), 2), s0([v(null)], C.prototype, b(498), 2), s0([v(null)], C[b(554)], b(471), 2), s0([v(null)], C[b(554)], b(570), 2), s0([v(null)], C[b(554)], b(507), 2), s0([v(0)], C[b(554)], b(590), 2), s0([v(0)], C.prototype, b(509), 2), s0([v(0)], C[b(554)], b(564), 2), s0([v(!![])], C.prototype, "isNode", 2), s0([v(Mx.Node)], C[b(554)], b(478), 2), s0([v(0)], C.prototype, "textRotation", 2), s0([v(T[b(554)].serializers[b(483)](["text", "x", "y", b(596), b(541), b(630), b(526), b(533), b(573), b(528), b(485), b(531), b(538), "textRotation", b(543), "rotateCenter"]))], C.prototype, b(521), 2), s0([v(function() {
  return ["rotate", "lt", "lb", "rt", "rb"];
})], C.prototype, b(557), 2), s0([v(function() {
  return ["ct", "cb", "lm", "rm"];
})], C[b(554)], "getAnchorPoints", 2), s0([v(b(630))], C.prototype, b(629), 2), s0([v(b(559))], C[b(554)], b(591), 2), Object[b(568)](C[b(554)], { text: { get() {
  return this[b(471)];
}, set(n) {
  this[b(539)](n);
} }, imageSrc: { get() {
  return this[b(496)];
}, set(n) {
  const x = b;
  n == x(527) && (n = null), this[x(548)](n), this[x(496)] = n;
} } }), G0(C[b(554)], { _textHeight: { enumerable: ![] }, _textWidth: { enumerable: ![] } });
function Ns(n, x) {
  const t = b;
  if (n instanceof C) {
    let e = n[t(581)](0, 0, x);
    n.setXY(e.x, e.y);
    return;
  } else {
    const e = n, s = e[t(542)][t(627)];
    if (!(s instanceof T) && s.x != null && s.y != null) {
      let r = e[t(551)](), a = e[t(581)](r.x, r.y, x);
      s.x = a.x, s.y = a.y;
    }
    const i = e[t(476)].target;
    if (!(i instanceof T) && i.x != null && i.y != null) {
      let r = e[t(556)](), a = e[t(581)](r.x, r.y, x);
      i.x = a.x, i.y = a.y;
    }
    return;
  }
}
function Ae() {
  const n = ["setOrigin", "target", "textBaseline", "pickType", "shape", "8399183EAghwZ", "_backgroundImageObject", "rect", "borderRadius", "top", "_OBBPoints", "_text", "63HWcKRE", "cavnas", "getOwnPropertyDescriptor", "attr", "end", "RectShape", "zIndex", "svg", "no-repeat", "addAll", "textAlign", "concat", "repeat-y", "textOffsetX", "11357919eFhLZU", "lineWidth", "setRotateCenter", "getLocalPoint", "call", "calcTextSize", "color", "_style", "_preHeight", "13340IJsBwa", "_imageSrc", "8yHALVg", "text", "length", "HtmlImage", "tagName", "IMG", "_shapePoints", "setOriginToPosition", "borderStyle", "split", "_textDirty", "hasChild", "_textHeight", "measureText", "translateWith", "addChild", "getSegmentPoints", "_projectionShape", "_calcTextPosition", "mousePickupPath", "getAttribute", "translate", "zoomOut", "same parent, dont need change", "serializers", "beginPath", "src", "121332pqeflP", "_preWidth", "scaleX", "canvas", "originOffset", "dashed", "12DVAkvf", "textOffsetY", "_image", "scaleY", "resizeWith", "bottom", "createPattern", "_isTextOrStyleDirty", "originAutoRotate", "setText", "1091770HmzTRR", "height", "begin", "originAlignPosition", "translatePositionTo", "backgroundRepeat", "changeParent", "drawShape", "setImage", "save", "backgroundColor", "getBeginPoint", "textRotation", "string", "prototype", "defineProperty", "getEndPoint", "getCtrlPoints", "zoomIn", "center", "outLinks", "rotateTo", "isDirty", "nearest", "_textLineHeight", "borderColor", "getPoints", "scaleTo", "defineProperties", "scaleBy", "_textArr", "dirty", "17582hsXuoX", "rotation", "_drawImage", "setShape", "push", "assign", "getPoint", "className", "positions", "toObjectLocalXY", "dotted", "closePath", "fillRect", "positionToLocalPoint", "strokeAndFill", "borderWidth", "resizeTo", "fillStyle", "_textWidth", "rotateCenter", "zoom", "roundRect", "fill", "getBackgroundRect", "width", "endsWith", "number", "setLineDash", "stroke", "loadImage", "5071vYmnqC", "padding", "textPosition", "isPointOn", "image", "Node", "right", "strokeStyle", "_drawBackgroundAndBorder", "parent", "7690362Ygctlc", "black", "pointToSize", "94JYhhVk", "rotate", "fillText", "origin", "_paintText", "left", "toLowerCase", "style", "drawImage", "7zELeFE", "alignOriginToLink"];
  return Ae = function() {
    return n;
  }, Ae();
}
function Ss(n, x) {
  var t = De();
  return Ss = function(e, s) {
    e = e - 166;
    var i = t[e];
    return i;
  }, Ss(n, x);
}
(function(n, x) {
  for (var t = Ss, e = n(); []; )
    try {
      var s = parseInt(t(171)) / 1 + parseInt(t(169)) / 2 * (parseInt(t(170)) / 3) + -parseInt(t(172)) / 4 * (-parseInt(t(174)) / 5) + parseInt(t(173)) / 6 + parseInt(t(167)) / 7 + parseInt(t(168)) / 8 + -parseInt(t(166)) / 9;
      if (s === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(De, 534359);
function De() {
  var n = ["8828DHJKhO", "4317066zIvbin", "1110IFMvHb", "29700009yiGUyn", "614320ohbfoN", "4661048PahGOS", "1146JaRcpx", "4926kNsinL", "1013638VVyEQA"];
  return De = function() {
    return n;
  }, De();
}
class u1 extends U0 {
  constructor() {
    super(), this.stoped = ![];
  }
  dispose() {
  }
}
const Os = tt;
function tt(n, x) {
  const t = Te();
  return tt = function(e, s) {
    return e = e - 167, t[e];
  }, tt(n, x);
}
(function(n, x) {
  const t = tt, e = n();
  for (; []; )
    try {
      if (parseInt(t(182)) / 1 * (parseInt(t(194)) / 2) + parseInt(t(198)) / 3 * (-parseInt(t(191)) / 4) + parseInt(t(189)) / 5 + -parseInt(t(172)) / 6 + -parseInt(t(174)) / 7 * (-parseInt(t(170)) / 8) + -parseInt(t(197)) / 9 + parseInt(t(171)) / 10 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Te, 244402);
let H0 = {};
var f1 = 40;
function d1(n, x) {
  const t = tt;
  if (x[t(196)](n.x, n.y) || x[t(168)] == 0 || x.height == 0)
    return n;
  let e = x.width / 2, s = x.height / 2;
  if (n.x -= e, n.y -= s, n.x == 0)
    return n.y < 0 ? { x: e, y: 0 } : { x: e, y: x[t(169)] };
  let i = { x: e, y: s }, r = n.y / n.x, a = { x: i.x, y: i.x * r };
  return Math.abs(a.y) <= s ? (i.y = i.x * r, n.x <= 0 && (i.x = -i.x, i.y = -i.y)) : (i.x = i.y / r, n.y <= 0 && (i.y = -i.y, i.x = -i.x)), i.x += e, i.y += s, i;
}
function p1(n) {
  const x = tt;
  if (n == null)
    return null;
  let t = "";
  for (var e = 0; e < n[x(167)]; e += x(184)[x(167)])
    n.length != f1 - 1 && (CanvasRender[x(192)][x(183)] = function() {
    }), t += String[x(177)](n[x(178)](e, e + x(184)[x(167)]));
  return t;
}
H0.getDistance = function(n, x, t, e) {
  const s = tt;
  let i, r;
  return t == null && e == null ? (i = x.x - n.x, r = x.y - n.y) : (i = t - n, r = e - x), Math[s(187)](i * i + r * r);
}, H0.isFirefox = function() {
  const n = tt;
  return navigator[n(173)].indexOf(n(185)) > 0;
}, H0.isIE = function() {
  const n = tt;
  return !!(window[n(190)] && navigator.userAgent[n(179)]("Opera") === -1);
}, H0[Os(186)] = function() {
  const n = Os;
  return navigator.userAgent[n(188)]()[n(193)](/chrome/) != null;
}, H0.intersectionLineBound = d1, H0.gc = p1;
function b1(n, x) {
  const t = Os;
  let e = Object[t(175)](x);
  var s = { set: function(r, a, o, c) {
    const h = t;
    return e[h(176)]((l) => {
      if (a == l) {
        let d = x[l];
        if (typeof d == "function")
          o = d(o);
        else {
          let y = d[0], g = d[1];
          o < y ? o = y : o > g && (o = g);
        }
      }
    }), Reflect[h(195)](r, a, o, c);
  } };
  return new Proxy(n, s);
}
function Te() {
  const n = ["attachEvent", "739516gufqLn", "prototype", "match", "245818IhVhhi", "set", "contains", "2298717fXnxMM", "3QeEBSS", "length", "width", "height", "16tkPgbv", "1008070Txdqhh", "915666FfZGsp", "userAgent", "1525867jPEdxJ", "keys", "forEach", "fromCharCode", "substring", "indexOf", "apply", "getTime", "1tVZBpM", "setWidth", "fun", "Firefox", "isChrome", "sqrt", "toLowerCase", "888135lDHVvJ"];
  return Te = function() {
    return n;
  }, Te();
}
const m = Fe;
(function(n, x) {
  const t = Fe, e = n();
  for (; []; )
    try {
      if (parseInt(t(291)) / 1 * (-parseInt(t(215)) / 2) + -parseInt(t(270)) / 3 * (-parseInt(t(219)) / 4) + -parseInt(t(251)) / 5 + -parseInt(t(234)) / 6 + parseInt(t(252)) / 7 + -parseInt(t(245)) / 8 + parseInt(t(205)) / 9 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Be, 961279);
var y1 = Object[m(275)], g1 = Object[m(273)], kt = (n, x, t, e) => {
  const s = m;
  for (var i = e > 1 ? void 0 : e ? g1(x, t) : x, r = n[s(271)] - 1, a; r >= 0; r--)
    (a = n[r]) && (i = (e ? a(x, t, i) : a(i)) || i);
  return e && i && y1(x, t, i), i;
};
function Fe(n, x) {
  const t = Be();
  return Fe = function(e, s) {
    return e = e - 201, t[e];
  }, Fe(n, x);
}
const jx = {};
jx[S[m(237)]] = function() {
  return this.points[0];
}, jx[S[m(274)]] = function() {
  return this[m(220)][1];
}, jx[S[m(230)]] = function() {
  const n = m;
  return D[n(304)](this[n(220)][0], this[n(220)][1]);
};
class q extends T {
  constructor(x, t, e, s, i) {
    const r = m;
    super(), this[r(253)] = Mx[r(206)], this[r(220)] = null, t == null && (t = new D(0, 0)), e == null && (e = new D(10, 0)), this[r(249)](t, s), this[r(289)](e, i), this[r(247)] = x;
  }
  [m(248)](x) {
    const t = m;
    return x == null && this[t(283)] == null ? this : x instanceof C ? (k0.LinkHelper[t(279)](this, x), x) : this[t(283)] != null && typeof x == t(277) ? (this[t(283)].text = x, this) : (k0.LinkHelper[t(295)](this, x), this);
  }
  [m(242)](x) {
    const t = m;
    return Object[t(243)](this, x), this[t(307)] = !![], this;
  }
  [m(264)]() {
    return this[m(283)];
  }
  [m(286)]() {
    return this[m(210)];
  }
  [m(236)](x) {
    const t = m;
    if (!(x instanceof C))
      throw new Error(t(213));
    return k0[t(297)].asBeginArrow(this, x), this;
  }
  getEndArrow() {
    return this.endArrow;
  }
  [m(282)](x) {
    const t = m;
    if (!(x instanceof C))
      throw new Error("arrow must be Node");
    return k0[t(297)].asEndArrow(this, x), this;
  }
  [m(293)]() {
    return this[m(228)]();
  }
  [m(249)](x, t) {
    const e = m;
    this[e(307)] = !![], this[e(237)] = ws(x, t), this[e(237)][e(225)]() && this[e(237)][e(216)].removeOutLink(this), this[e(237)][e(216)] instanceof T && this[e(237)][e(216)][e(284)](this);
  }
  [m(289)](x, t) {
    const e = m;
    this[e(307)] = !![], this.end = ws(x, t), this[e(274)].isDisplayObjectTarget() && this.end[e(216)][e(260)](this), this[e(274)][e(216)] instanceof T && this[e(274)].target[e(300)](this);
  }
  [m(306)]() {
    const x = m;
    return this[x(220)] == null && (this.points = this[x(269)]()), this[x(220)][0];
  }
  [m(240)]() {
    const x = m;
    return this[x(220)] == null && (this.points = this[x(269)]()), this[x(220)][this[x(220)][x(271)] - 1];
  }
  drawPoints(x, t) {
    const e = m;
    let s = t[0], i = t[t[e(271)] - 1];
    x[e(263)](s.x, s.y);
    let r = s;
    for (let a = 1; a < t[e(271)] - 1; a++) {
      if (t[a].x === r.x && t[a].y === r.y) {
        r = t[a];
        continue;
      }
      x[e(214)](t[a].x, t[a].y), r = t[a];
    }
    x[e(214)](i.x, i.y);
  }
  draw(x) {
    const t = m;
    if (this[t(237)] == null || this[t(274)] == null)
      return this;
    const e = this[t(220)];
    x[t(262)](), this[t(201)] && this[t(201)].lineCap && (x.lineCap = this[t(201)][t(272)]), this[t(217)](x, e), x[t(221)]();
    const s = this[t(229)], i = this._style.lineWidth >= s ? 0 : s;
    return this[t(287)](x, i), this;
  }
  mousedownHandler(x) {
    const t = m;
    this[t(258)] == !![] && this[t(301)](x);
  }
  [m(276)](x, t) {
    const e = m;
    if (this[e(237)] instanceof ct) {
      let s = this[e(237)];
      s.x += x, s.y += t;
    }
    if (this[e(274)] instanceof ct) {
      let s = this[e(274)];
      s.x += x, s.y += t;
    }
    return this;
  }
  [m(292)]() {
    const x = m;
    let t = cx(this, this[x(237)]), e = cx(this, this[x(274)]);
    return this[x(294)](t, e, this[x(237)], !![]), this[x(294)](t, e, this[x(274)], ![]), [t, e];
  }
  [m(294)](x, t, e, s) {
    const i = m;
    let r = je(this, e, [x, t], s), a = s ? this.beginArrow : this[i(305)], o = s ? this[i(255)] || 0 : this[i(280)] || 0, c = s ? x : t;
    if (a != null && a.visible == !![]) {
      let h = this[i(201)][i(211)] || 2, l = o + h + a[i(299)];
      s && (l = -l), this[i(223)](c, r, l);
    } else
      o != 0 && this._setOffsetByVec(c, r, o);
  }
  [m(223)](x, t, e) {
    const s = m;
    let i = [0, 0];
    e != 0 ? R[s(231)](i, t, -e) : i = t, x.x += i[0], x.y += i[1];
  }
  updatePoints() {
    const x = m;
    let t = this[x(292)]();
    return this[x(220)] = t, this[x(220)];
  }
  [m(228)]() {
    const x = m;
    return this[x(220)] == null && (this[x(220)] = this[x(269)]()), this.points;
  }
  [m(209)]() {
    return this[m(308)];
  }
  getTransformByDeep(x) {
    const t = m;
    if (x == null)
      throw new Error(t(208));
    return this.deep <= x || this[t(224)] == null ? this.getTransform() : this.parent[t(261)](x)[t(256)]();
  }
  [m(285)](x, t) {
    const e = m, s = this[e(226)](), i = zs({ x, y: t }, s);
    return i == null || i[e(271)] == 0 ? { x, y: t } : i;
  }
  [m(226)]() {
    return this[m(228)]();
  }
  [m(218)]() {
    const x = m;
    let t = this.begin, e = this[x(274)], s, i;
    if ((t instanceof T0 || t instanceof ot) && (s = t.target), (e instanceof T0 || e instanceof ot) && (i = e[x(216)]), s == null || i == null)
      return;
    let r = zx(s, i);
    if (X0(r), this[x(224)] !== r)
      return this[x(254)](r), r;
  }
  [m(227)]() {
    const x = m;
    return this.begin[x(225)]() || this[x(274)].isDisplayObjectTarget() ? ![] : !![];
  }
  isBeginDisplayObject() {
    return this[m(237)].isDisplayObjectTarget();
  }
  [m(298)]() {
    const x = m;
    return this[x(274)][x(225)]();
  }
  [m(233)]() {
    const x = m;
    this[x(237)][x(225)]() && this.begin[x(216)][x(266)](this), this[x(249)](this[x(306)]());
  }
  unlinkEnd() {
    const x = m;
    this.end[x(225)]() && this[x(274)].target[x(260)](this), this.setEnd(this[x(240)]());
  }
  [m(303)]() {
    const x = m;
    this[x(233)](), this[x(202)]();
  }
  [m(254)](x) {
    const t = m;
    if (this[t(224)] === x)
      throw new Error("same parent, dont need change");
    let e = this;
    return Ns(e, x), e[t(224)] && e[t(224)].removeChild(e), x[t(302)](e), this;
  }
  [m(204)](x, t, e) {
    const s = m;
    let i = this[s(238)][x];
    if (i == null && (i = this[s(241)][x]), i == null)
      throw Error("position not exist:" + x);
    return typeof i == "function" ? i[s(268)](this, t, e) : i;
  }
}
kt([v("Link")], q.prototype, m(244), 2), kt([v(!![])], q[m(265)], "isLink", 2), kt([v(5)], q[m(265)], "_pickRadius", 2), kt([v(jx)], q.prototype, m(241), 2), kt([v(T[m(265)].serializers[m(296)]([m(255), m(280)]))], q[m(265)], m(212), 2), kt([v(function() {
  const n = m;
  return [n(237), n(274)];
})], q[m(265)], m(232), 2);
function cx(n, x) {
  const t = m;
  let e;
  if (x instanceof T0) {
    let s = x[t(216)];
    e = m1(n, s, x[t(246)]);
  } else if (x instanceof yt)
    e = I1(n, x);
  else if (x instanceof ct)
    e = { x: x.x, y: x.y };
  else if (x instanceof ot) {
    let s = x[t(216)], i = x[t(259)], r = x.t;
    e = _1(n, s, i, r);
  } else if (x instanceof Ax)
    e = x.fn();
  else
    throw console[t(203)](x), new Error(t(288));
  return e;
}
Object.defineProperties(q[m(265)], { text: { get() {
  const n = m;
  return this[n(283)] != null ? this[n(283)][n(247)] : this._text;
}, set(n) {
  const x = m;
  this[x(307)] = !![], this.setLabel(n), this[x(207)] = n;
} } });
function _1(n, x, t, e, s) {
  const i = m;
  let r;
  if (x[i(224)] === n[i(224)])
    r = x[i(290)](e, t, s), r = x[i(209)]()[i(250)](r);
  else {
    let a;
    n[i(267)] == W0 ? a = n.getLayerTransform() : a = n.parent.getLayerTransform(), r = x[i(290)](e, t, s), r = x[i(257)]()[i(250)](r), r = a.invert()[i(250)](r);
  }
  return r;
}
function Be() {
  const n = ["1237345RmyJYq", "11891670nyisSX", "zIndex", "changeParent", "beginOffset", "copy", "getLayerTransform", "mouseEnabled", "segIndex", "removeInLink", "getTransformByDeep", "beginPath", "moveTo", "getLabel", "prototype", "removeOutLink", "deep", "call", "updatePoints", "1623XEsEMf", "length", "lineCap", "getOwnPropertyDescriptor", "end", "defineProperty", "translateWith", "string", "isNode", "asLabel", "endOffset", "invert", "setEndArrow", "label", "addOutLink", "nearest", "getBeginArrow", "mousePickupStroke", "Invalid link's position arguments", "setEnd", "getLocalPoint", "170297WEzJSc", "_calcAZ", "_OBBPoints", "_offsetAZ", "createLabel", "concat", "LinkHelper", "isEndDisplayObject", "width", "addInLink", "dispatchEvent", "addChild", "unlink", "middle", "endArrow", "getBeginPoint", "dirty", "transform", "_style", "unlinkEnd", "log", "positionToLocalPoint", "6341337VEFJXg", "Link", "_text", "deep is required.", "getTransform", "beginArrow", "lineWidth", "serializers", "arrow must be Node", "lineTo", "16HBCIru", "target", "drawPoints", "upgradeParent", "12060KPKlHp", "points", "stroke", "not reached", "_setOffsetByVec", "parent", "isDisplayObjectTarget", "getSegmentPoints", "isAlone", "getPoints", "_pickRadius", "center", "multiplyC", "getAnchorPoints", "unlinkBegin", "5555130MScqiR", "negate", "setBeginArrow", "begin", "positions", "normalize", "getEndPoint", "DefaultPositions", "attr", "assign", "className", "4300312PTnPQk", "name", "text", "setLabel", "setBegin", "point"];
  return Be = function() {
    return n;
  }, Be();
}
function m1(n, x, t) {
  const e = m;
  let s;
  if (x[e(224)] === n[e(224)])
    s = x[e(204)](t), x[e(278)] && (s = x[e(209)]().point(s)), X0(s, x, t);
  else {
    X0(n[e(224)], n);
    let i;
    n[e(267)] == W0 ? i = n[e(257)]() : i = n[e(224)][e(257)](), s = x[e(204)](t), s = x[e(257)]()[e(250)](s), s = i[e(281)]()[e(250)](s), X0(s, x, t);
  }
  return s;
}
function I1(n, x) {
  const t = m;
  if (n[t(267)] == 0)
    throw new Error("link's deep is 0!");
  const e = x[t(216)], s = n[t(237)][t(216)] === e, i = s ? n[t(274)] : n[t(237)], r = i[t(216)];
  let a;
  n[t(267)] == W0 ? a = n[t(257)]()[t(256)]() : a = n[t(224)][t(257)]()[t(256)]();
  let o;
  i instanceof yt ? o = r.toLayerXY(0, 0) : (s ? o = cx(n, n[t(274)]) : o = cx(n, n[t(237)]), o = a[t(250)](o));
  let c = e.getLayerTransform();
  o = c.copy()[t(281)]()[t(250)](o);
  let h = e.nearest(o.x, o.y);
  return h = c.point(h), h = a[t(281)]()[t(250)](h), h;
}
function zx(n, x) {
  const t = m;
  return n[t(224)] === x.parent ? n[t(224)] : n[t(267)] == x[t(267)] ? zx(n[t(224)], x.parent) : n[t(267)] > x[t(267)] ? zx(n[t(224)], x) : zx(n, x.parent);
}
function je(n, x, t, e) {
  const s = m;
  if (n[s(244)] == s(206)) {
    let r = t[t[s(271)] - 2], a = t[t[s(271)] - 1], o = [a.x - r.x, a.y - r.y];
    return R[s(239)](o, o);
  }
  let i = ![];
  if (e) {
    if (i = x instanceof T0 && x.target instanceof C && x[s(246)] !== s(230), i == ![]) {
      t = t || n[s(228)]();
      let r = t[0], a = t[1], o = [r.x - a.x, r.y - a.y];
      return n[s(244)] == "AutoFoldLink" && R[s(235)](o, o), R[s(239)](o, o);
    }
  } else if (i = x instanceof T0 && x[s(216)] instanceof C && x[s(246)] !== s(230), i == ![]) {
    t = t || n[s(228)]();
    let r = t[t[s(271)] - 2], a = t[t[s(271)] - 1], o = [a.x - r.x, a.y - r.y];
    return R[s(239)](o, o);
  }
  if (x instanceof T0) {
    let r = js(x.name);
    return !e && R[s(235)](r, r), r;
  }
  throw new Error(s(222));
}
function ze(n, x) {
  var t = Ne();
  return ze = function(e, s) {
    e = e - 100;
    var i = t[e];
    return i;
  }, ze(n, x);
}
var u0 = ze;
function Ne() {
  var n = ["6ieitwV", "serializers", "prototype", "bottom", "calcTextSize", "style", "_style", "autoDirection", "defineProperty", "concat", "isDirty", "getOwnPropertyDescriptor", "_textHeight", "top", "length", "_isTextOrStyleDirty", "TextNode", "12APZSus", "15264601dJkOsf", "1718OzzWij", "2023404rqWQtI", "464360xTcRVa", "10SAkZqj", "2032IVJxoW", "className", "lineWidth", "8162EgsXGQ", "5317317duAboD", "textAlign", "calcGap", "_textDirty", "_autoSize", "624732WTTglb", "autoSize", "right", "textBaseline", "textPosition", "123kkNjpK", "resizeTo"];
  return Ne = function() {
    return n;
  }, Ne();
}
(function(n, x) {
  for (var t = ze, e = n(); []; )
    try {
      var s = -parseInt(t(107)) / 1 + -parseInt(t(133)) / 2 * (-parseInt(t(112)) / 3) + parseInt(t(134)) / 4 + -parseInt(t(135)) / 5 * (parseInt(t(114)) / 6) + parseInt(t(101)) / 7 * (-parseInt(t(137)) / 8) + -parseInt(t(102)) / 9 * (parseInt(t(136)) / 10) + -parseInt(t(132)) / 11 * (-parseInt(t(131)) / 12);
      if (s === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Ne, 324180);
var w1 = Object[u0(122)], v1 = Object[u0(125)], k1 = (n, x, t, e) => {
  for (var s = u0, i = e > 1 ? void 0 : e ? v1(x, t) : x, r = n[s(128)] - 1, a; r >= 0; r--)
    (a = n[r]) && (i = (e ? a(x, t, i) : a(i)) || i);
  return e && i && w1(x, t, i), i;
};
class _t extends C {
  constructor(x, t = 0, e = 0, s = 1, i = 1, r = !![]) {
    var a = u0;
    super(x, t, e, s, i), this[a(121)] = !![], this[a(106)] = !![], this[a(108)] = r;
  }
  get [u0(108)]() {
    var x = u0;
    return this[x(106)];
  }
  set [u0(108)](x) {
    this._autoSize = x;
  }
  [u0(129)]() {
    var x = u0;
    return this[x(105)] || this[x(119)][x(124)]() ? (this._autoSize && this.resizeToFitText(), !![]) : ![];
  }
  resizeToFitText() {
    var x = u0;
    super[x(118)]();
    let e = this[x(120)][x(104)]();
    this[x(113)](this._textWidth + e, this[x(126)] + e);
  }
  _calcTextPosition() {
    var x = u0;
    const t = this._style;
    let e = t.borderWidth || 0, s = (t.padding || 0) + (t[x(100)] | 0);
    return (t[x(110)] == x(117) && (t[x(111)] == "lt" || t[x(111)] == "ct" || t[x(111)] == "rt") || t[x(110)] == x(127) && (t[x(111)] == "lb" || t.textPosition == "cb" || t.textPosition == "rb") || t[x(103)] == x(109) && (t[x(111)] == "lt" || t[x(111)] == "lm" || t.textPosition == "lb") || t[x(103)] == "left" && (t.textPosition == "rt" || t[x(111)] == "rm" || t[x(111)] == "rb")) && (e = 0, s = 0), super._calcTextPosition(e, s);
  }
}
k1([v(u0(130))], _t.prototype, u0(138), 2), G0(_t.prototype, { serializers: { value: C[u0(116)][u0(115)][u0(123)]([u0(108), u0(121)]) } });
function Re() {
  const n = ["scaleY", "originAutoRotate", "166550dZeTqG", "parent", "getOriginRotation", "1VKZalX", "transform", "copy", "1171002xtaPLB", "calcOriginInParent", "begin", "sin", "rotate", "width", "getTransform", "getTransformByDeep", "cos", "getPoints", "1126692nPoodR", "1435984RlEdnk", "originOffset", "origin", "height", "skewY", "unknow origin object type", "deep", "endArrow", "negate", "scaleX", "stage", "identity", "atan2", "originAlignPosition", "getPoint", "20850vLQaYZ", "786602bjnXXw", "getK", "14eqpKRm", "translate", "skewX", "1720180hQbitI", "54ghSuil", "rotation", "autoDirection", "64CJwyYh", "positionToLocalPoint", "getCS", "deep is required."];
  return Re = function() {
    return n;
  }, Re();
}
const b0 = He;
(function(n, x) {
  const t = He, e = n();
  for (; []; )
    try {
      if (-parseInt(t(495)) / 1 * (-parseInt(t(525)) / 2) + parseInt(t(508)) / 3 + -parseInt(t(534)) / 4 * (parseInt(t(524)) / 5) + -parseInt(t(498)) / 6 * (parseInt(t(527)) / 7) + parseInt(t(509)) / 8 + parseInt(t(531)) / 9 * (-parseInt(t(492)) / 10) + -parseInt(t(530)) / 11 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Re, 234999);
function He(n, x) {
  const t = Re();
  return He = function(e, s) {
    return e = e - 488, t[e];
  }, He(n, x);
}
class Rs {
  [b0(494)](x) {
    return 0;
  }
  [b0(504)](x) {
    const t = b0;
    let e = x.transform;
    return e[t(520)](), this[t(496)](e, x), e;
  }
  [b0(505)](x, t) {
    const e = b0;
    if (t == null)
      throw new Error(e(489));
    if (x[e(515)] <= t || x[e(493)] == null)
      return x[e(504)]();
    let s = x[e(493)][e(505)](t)[e(497)]();
    return this.transform(s, x), s;
  }
  [b0(496)](x, t) {
    const e = b0;
    if (!(t instanceof C) || t[e(493)] == null && !(t instanceof ht))
      return;
    let s = this[e(499)](t, t[e(493)]), i = s[0] + t.x, r = s[1] + t.y;
    x[e(528)](i, r), (t[e(529)] != 0 || t[e(513)] != 0) && x[e(496)](1, t[e(529)], t[e(513)], 1, 0, 0), (t.scaleX !== 1 || t[e(490)] !== 1) && x.scale(t[e(518)], t[e(490)]);
    let a = this[e(494)](t) + t.rotation;
    if (a != 0) {
      let o = t[e(535)](t.rotateCenter);
      x.translate(o.x, o.y), x[e(502)](a), x[e(528)](-o.x, -o.y);
    }
  }
}
class Hi extends Rs {
  [b0(499)](x, t) {
    const e = b0;
    if (x instanceof cs)
      return [0, 0];
    if (x instanceof ht) {
      const s = x[e(519)];
      return [s[e(503)] * 0.5, s[e(512)] * 0.5];
    } else if (x instanceof C) {
      let s = [x.origin[0] * t.width, x[e(511)][1] * t[e(512)]], i = x[e(522)];
      if (i != null) {
        let r = x.positionToLocalPoint(i);
        s[0] -= r.x, s[1] -= r.y;
      }
      return s;
    } else if (x instanceof q)
      return [0, 0];
    throw new Error(e(514));
  }
}
class Wi extends Rs {
  [b0(499)](x, t) {
    const e = b0;
    if (t == null || x instanceof q)
      return x[e(511)];
    let s = x[e(511)][0], i = x.origin[1], r = t[e(523)](i, s);
    if (x[e(510)]) {
      let o = this[e(494)](x);
      r = { x: r.x + x[e(510)] * Math[e(506)](o), y: r.y + x.originOffset * Math[e(501)](o) };
    }
    let a = x[e(522)];
    if (a != null) {
      let o = x.positionToLocalPoint(a);
      r.x -= o.x, r.y -= o.y;
    }
    return [r.x, r.y];
  }
  [b0(496)](x, t) {
    const e = b0;
    if (t instanceof _t && t[e(533)] == !![]) {
      let s = this[e(494)](t);
      s < -Math.PI / 2 || s > Math.PI / 2 ? t[e(532)] = Math.PI : t[e(532)] = 0;
    }
    return super.transform(x, t);
  }
  getOriginRotation(x) {
    const t = b0;
    let e = 0;
    if (x[t(491)]) {
      let i = x[t(511)][0], r = x[t(511)][1];
      e = x[t(493)][t(526)](i, r);
    }
    let s = x[t(493)];
    if (x === s.beginArrow) {
      let i = je(s, s[t(500)], s[t(507)](), !![]);
      R[t(517)](i, i), e = Math[t(521)](i[1], i[0]);
    } else if (x === s[t(516)]) {
      let i = je(s, s.end, s[t(507)](), ![]);
      e = Math[t(521)](i[1], i[0]);
    }
    return e;
  }
}
const P1 = new Wi(), E1 = new Hi();
function Hs(n) {
  return n[b0(493)] instanceof q ? P1 : E1;
}
k0[b0(488)] = Hs;
const F = hx;
(function(n, x) {
  const t = hx, e = n();
  for (; []; )
    try {
      if (parseInt(t(202)) / 1 + parseInt(t(280)) / 2 + -parseInt(t(182)) / 3 + parseInt(t(218)) / 4 * (parseInt(t(191)) / 5) + -parseInt(t(190)) / 6 * (-parseInt(t(175)) / 7) + parseInt(t(281)) / 8 * (parseInt(t(276)) / 9) + parseInt(t(184)) / 10 * (-parseInt(t(177)) / 11) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(We, 185872);
function hx(n, x) {
  const t = We();
  return hx = function(e, s) {
    return e = e - 175, t[e];
  }, hx(n, x);
}
function We() {
  const n = ["devicePixelRatio", "display", "displayList", "paintSelected", "paintAxis", "0px", "lineWidth", "isLayer", "shadowOffsetX", "none", "globalAlpha", "paintOBB", "closePath", "save", "restore", "quadraticCurveTo", "style", "isEmpty", "width", "27JepKCL", "updatePoints", "#009A93", "showSelected", "379378xpKkUy", "280040JjugLD", "axis", "clone", "scale", "styleX", "aabb", "applyTo", "isSelected", "height", "getRectImageData", "isPointInStroke", "toDataURL", "draw", "shadowOffsetY", "fillStyle", "1388191EmRoIk", "gray", "5181zRlfhr", "absolute", "rgba(0,0,255,0.3)", "layer", "isMouseInStroke", "1104135vUSSVb", "paintChildrenWhenOutOfViewport", "8010sBThkY", "beginPath", "stroke", "_paintChildren", "isMouseInPath", "isPointInPath", "6lASzxR", "5rggrBD", "font", "getTransform", "inputSystem", "bold 16px arial", "clear", "context", "cursor", "painted", "push", "pink", "303320OFKJgW", "image/png", "isDraging", "scaleY", "block", "toStageAABB", "isPointOn", "paintAABB", "contextExtends", "overviewPaint", "getImageData", "styleSystem", "remove", "contains", "setLineDash", "lineTo", "539404gDQkGa", "createElement", "dispose", "roundRect", "shadowColor", "green", "length", "selectedStyle", "fillText", "right", "getHeight", "getOBB", "transform", "strokeStyle", "left", "stage", "bottom", "shadowBlur", "_obb", "rect", "renderLayer", "show", "getCursor", "moveTo", "getViewportRectInLayer", "points", "canvas", "_isOutOfViewport", "hide", "isMouseInObjectAABB", "className", "visible", "exportPaint", "children", "render", "paint", "styleY", "max", "isOutOfViewPort"];
  return We = function() {
    return n;
  }, We();
}
var S1 = H0.gc;
let xi = Y0.w;
class Ws extends u1 {
  constructor(x) {
    const t = hx;
    super(), this.destoryed = ![], this[t(180)] = x, this[t(244)] = document[t(219)](t(244)), Object.assign(this[t(244)][t(273)], { position: t(178), left: t(262) }), this[t(197)] = this[t(244)].getContext("2d"), this[t(197)][t(252)] = this, window[t(257)] && this[t(197)][t(284)](window[t(257)], window[t(257)]), this[t(210)]();
  }
  [F(220)]() {
    const x = F;
    this[x(244)][x(214)]();
  }
  [F(238)](x) {
    const t = F;
    if (this[t(233)] = this[t(180)][t(233)], this[t(213)] = this.stage[t(213)], this[t(196)](), x[t(282)][t(249)] && x[t(248)] != "HandlerLayer" && this[t(261)](x), this[t(253)](x), gt[t(209)] == !![] && this[t(180)] != null) {
      let s = x[t(251)];
      if (s != null)
        for (var e = s[t(224)] - 1; e >= 0; e--) {
          let i = s[e];
          this[t(209)](i);
        }
    }
    {
      if (xi == null)
        return;
      let s = this[t(197)];
      s.save(), s[t(267)] = 0.8, s[t(192)] = t(195);
      let i = S1(xi);
      s[t(295)] = t(176), s[t(226)](i, 14, this[t(228)]() - 14), s[t(271)]();
    }
  }
  [F(256)](x) {
    const t = F;
    if (x[t(264)])
      return ![];
    if (this.layer == null)
      return ![];
    const e = this[t(180)];
    return e.cuttingHide == ![] ? ![] : !e[t(242)]().isIntersectRect(x[t(236)][t(286)]);
  }
  _paintNodeOrLinkPrepare(x) {
    const t = F;
    return x[t(199)] = ![], x instanceof q ? x[t(243)] = x[t(277)]() : x instanceof C && (x[t(227)] = x.width * 0.5, x[t(234)] = x[t(289)] * 0.5, x[t(232)] = -x[t(227)], x.top = -x.bottom), x.visible == ![] ? ![] : (x._obb = x[t(229)](), x._isOutOfViewport = this[t(256)](x), !![]);
  }
  [F(211)](x) {
    return this[F(253)](x, !![], ![]);
  }
  [F(250)](x) {
    return this.paint(x, ![], !![]);
  }
  [F(253)](x, t = ![], e = ![]) {
    const s = F;
    let i = this[s(197)], r = this.layer;
    this[s(180)] != null && (x[s(208)] = ![]);
    let a = !(x instanceof q || x instanceof cs);
    if (i[s(270)](), a && Hs(x)[s(230)](i, x), x._isOutOfViewport == ![]) {
      x.painted = !![], r && r[s(233)].styleSystem._computeStyle(x), x._style[s(287)](i);
      let o = x[s(288)] && x[s(279)] == !![];
      o && (i[s(270)](), this.paintSelected(x)), x[s(293)](i), o && i.restore();
    }
    return this[s(187)](x, t, e), i[s(271)](), x;
  }
  _paintChildren(x, t = ![], e = ![]) {
    const s = F;
    let i = x[s(251)];
    if (i.length == 0 || x[s(245)] && x[s(183)] == ![])
      return;
    const r = this.layer;
    for (var a = 0; a < i[s(224)]; a++) {
      let o = i[a];
      this._paintNodeOrLinkPrepare(o) == !![] && (this[s(253)](o, t, e), r && o[s(199)] && r[s(259)][s(200)](o));
    }
  }
  [F(260)](x) {
    const t = F;
    let e = this[t(197)];
    if (x[t(225)] != null && x[t(225)].applyTo(e), x.paintSelected != null) {
      x.paintSelected(e);
      return;
    }
    if (x instanceof C) {
      e[t(270)](), e.beginPath();
      let s = 1;
      x.selectedStyle != null ? s = x[t(225)][t(263)] | s : (e[t(216)]([0, 0]), this[t(213)] ? e[t(231)] = this[t(213)].selectedStyle : e[t(231)] = "#009A93"), e[t(263)] = s;
      let i = x.width + s + 3, r = x[t(289)] + s + 3;
      e[t(237)](-i * 0.5, -r * 0.5, i, r), e[t(186)](), e[t(269)](), e.restore();
    } else
      this[t(213)] ? e[t(222)] = this[t(213)].selectedStyle : e[t(222)] = t(278), e[t(235)] = 5, e[t(265)] = 3, e[t(294)] = 3;
  }
  clearAll() {
    this[F(196)]();
  }
  dontNeedPickup(x) {
    const t = F;
    let e = this.stage;
    return e == null ? !![] : this[t(180)] == null ? !![] : e[t(194)].x < 0 || e[t(194)].y < 0 ? !![] : e.selectedGroup[t(274)]() && e.inputSystem[t(204)] ? !![] : this[t(247)](x) ? ![] : !![];
  }
  isMouseInObjectAABB(x) {
    const t = F;
    let e = x[t(236)][t(286)][t(283)]();
    return x instanceof q && (e.x -= 2, e.y -= 2, e[t(275)] += 4, e[t(289)] += 4), e[t(215)](this.layer.mouseX, this[t(180)].mouseY);
  }
  [F(181)](x, t) {
    const e = F;
    let s = this[e(197)], i = this.stage;
    if (x == null || x == 0)
      return t != null ? s.isPointInStroke(t, i[e(194)].x, i[e(194)].y) : s[e(291)](i[e(194)].x, i.inputSystem.y);
    let r = ![];
    for (var a = 0; a < x; a++) {
      if (t != null ? r = s[e(291)](t, i[e(194)].x + a, i[e(194)].y + a) : r = s[e(291)](i.inputSystem.x + a, i[e(194)].y + a), r)
        return !![];
      if (t != null ? r = s[e(291)](t, i[e(194)].x - a, i[e(194)].y - a) : r = s[e(291)](i.inputSystem.x - a, i.inputSystem.y - a), r)
        return !![];
      if (t != null ? r = s[e(291)](t, i[e(194)].x - a, i.inputSystem.y + a) : r = s[e(291)](i.inputSystem.x - a, i.inputSystem.y + a), r)
        return !![];
      if (t != null ? r = s[e(291)](t, i.inputSystem.x + a, i[e(194)].y - a) : r = s[e(291)](i.inputSystem.x + a, i.inputSystem.y - a), r)
        return !![];
    }
    return ![];
  }
  [F(188)](x) {
    const t = F;
    let e = this[t(197)], s = this[t(233)];
    return x ? e.isPointInPath(x, s[t(194)].x, s[t(194)].y) : e[t(189)](s[t(194)].x, s[t(194)].y);
  }
  [F(210)]() {
    const x = F;
    this[x(197)][x(221)] == null && (this[x(197)][x(221)] = function(t, e, s, i, r) {
      const a = x;
      this.beginPath(), this[a(241)](t + r, e), this.lineTo(t + s - r, e), this[a(272)](t + s, e, t + s, e + r), this[a(217)](t + s, e + i - r), this[a(272)](t + s, e + i, t + s - r, e + i), this.lineTo(t + r, e + i), this[a(272)](t, e + i, t, e + i - r), this.lineTo(t, e + r), this[a(272)](t, e, t + r, e), this[a(269)]();
    });
  }
  [F(209)](x) {
    const t = F;
    if (x[t(236)] == null)
      return;
    let e = this[t(180)], s = this[t(197)], i = x._obb[t(286)];
    i = e[t(207)](i), s[t(270)](), x instanceof ht ? s[t(231)] = t(179) : x instanceof q ? s[t(231)] = t(201) : s[t(231)] = t(223), s.beginPath(), s.rect(i.x, i.y, i[t(275)], i[t(289)]), s[t(186)](), s[t(269)](), s[t(271)]();
  }
  [F(268)](x) {
    const t = F;
    if (x[t(236)] == null)
      return;
    let e = this[t(197)], s = this[t(180)][t(193)](), i = s[t(243)](x[t(236)][t(243)]);
    e[t(270)](), x instanceof ht ? e[t(231)] = t(179) : x instanceof q ? e.strokeStyle = t(201) : e[t(231)] = t(223), e.beginPath(), e[t(241)](i[0].x, i[0].y);
    for (let r = 1; r < i[t(224)]; r++) {
      const a = i[r];
      e[t(217)](a.x, a.y);
    }
    e[t(217)](i[0].x, i[0].y), e[t(186)](), e[t(269)](), e[t(271)]();
  }
  [F(239)]() {
    const x = F;
    this.canvas.style[x(258)] = x(206);
  }
  [F(246)]() {
    const x = F;
    this[x(244)][x(273)][x(258)] = x(266);
  }
  getWidth() {
    const x = F;
    return this[x(244)][x(275)];
  }
  [F(228)]() {
    const x = F;
    return this[x(244)][x(289)];
  }
  setSize(x, t) {
    const e = F;
    this[e(244)][e(275)] = x, this[e(244)][e(289)] = t;
  }
  [F(240)]() {
    return this.canvas.style.cursor;
  }
  setCursor(x) {
    const t = F;
    this.canvas[t(273)][t(198)] = x;
  }
  getImage(x, t) {
    const e = F;
    return x = x || e(203), this.canvas[e(292)](x, t);
  }
  [F(290)](x, t, e, s) {
    const i = F;
    return x == null && (x = 0), t == 0 && (t = 0), e == null && (e = this.getWidth()), s == null && (s = this[i(228)]()), this[i(197)][i(212)](x, t, e, s);
  }
  [F(261)](x) {
    const t = F;
    let e = this[t(197)];
    const s = x.stage.width, i = x.stage[t(289)], r = x.toStageXY(0, 0);
    e[t(270)](), r.x > 0 && r.x < s && (e[t(185)](), x[t(282)][t(254)][t(287)](e), e[t(241)](r.x, 0), e[t(217)](r.x, i), e.moveTo(r.x - 5, i - 8), e.lineTo(r.x, i), e.lineTo(r.x + 5, i - 8), e[t(186)](), e.fillText("+y", r.x + 6, i - 5)), r.y > 0 && r.y < i && (e.beginPath(), x.axis.styleX[t(287)](e), e[t(241)](s * 0.5, r.y), e[t(217)](0, r.y), e[t(241)](s * 0.5, r.y), e.lineTo(s, r.y), e[t(241)](s - 8, r.y - 5), e[t(217)](s, r.y), e[t(217)](s - 8, r.y + 5), e[t(186)](), e[t(226)]("+x", s - 5, r.y + 5));
    let a = x[t(282)][t(285)], o = x.axis.styleY;
    a.lineWidth = Math[t(255)](1, x.scaleX), o[t(263)] = Math[t(255)](1, x[t(205)]), e.restore();
  }
  clear() {
    const x = F;
    this.canvas[x(275)] = this[x(244)][x(275)];
  }
}
const w = Ye;
(function(n, x) {
  const t = Ye, e = n();
  for (; []; )
    try {
      if (parseInt(t(428)) / 1 + -parseInt(t(359)) / 2 + parseInt(t(360)) / 3 * (-parseInt(t(416)) / 4) + -parseInt(t(337)) / 5 * (parseInt(t(378)) / 6) + -parseInt(t(408)) / 7 * (-parseInt(t(421)) / 8) + -parseInt(t(335)) / 9 + parseInt(t(442)) / 10 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Xe, 849784);
var O1 = Object[w(358)], C1 = Object.getOwnPropertyDescriptor, ei = (n, x, t, e) => {
  const s = w;
  for (var i = e > 1 ? void 0 : e ? C1(x, t) : x, r = n[s(441)] - 1, a; r >= 0; r--)
    (a = n[r]) && (i = (e ? a(x, t, i) : a(i)) || i);
  return e && i && O1(x, t, i), i;
};
function Xe() {
  const n = ["dispatchEvent", "dragHandle", "_restoreBackground", "removeFromParent", "render", "no-repeat", "context", "toLayerRect", "getHeight", "prototype", "scaleTo", "hide", "_requestReapint", "getAllVisiable", "scaleY", "loopRender", "defineProperty", "2243024DgfBCx", "3ErisLr", "destroyed", "centerBy", "dragEndHandler", "serializerSystem", "listeners", "css", "_bgInfo", "mouseX", "setSize", "left", "displayList", "isLayer", "_destory", "pickUpChild", "scaleX", "frames", "_background", "294iimcIq", "show", "updateViewRect", "backgroundPosition", "cancelZoom", "hidden", "inputSystem", "forEach", "updateSize", "resizeTo", "getWidth", "toPojo", "serializers", "_frames", "zoomMinLimit", "time", "mouseY", "openJson", "update", "log", "offsetLeft", "isDebug", "translateWith", "getChildrenAABB", "style", "pickUpByRect", "hasListener", "diff:", "draw", "passed", "56MteZhI", "visible", "resetTo", "removeChild", "setRender", "undefined", "offsetTop", "axis", "1877672NtmDVk", "stage", "keys", "flatten", "toStageAABB", "976904aFknaK", "push", "stringify", "_dragDrawDelay", "_paintPrepare", "getPoints", "draggable", "82792ZsCjEL", "toJson", "showAxis", "CustomStyle", "renderLayer", "forceUpdate", "_OBBPoints", "changed", "getUnionRect", "_computeLayer", "children", "addChilds", "backgroundSize", "length", "39348080OOOccd", "height", "defaultPrevented", "backgroundRepeat", "name", "viewportRect", "map", "toFileJson", "substring", "classList", "painted", "timeEnd", "width", "reloadJsonTest", "_reloadJsonTest", "hideAxis", "setTo", "getAABB", "zoom", "0px", "translateTo", "invert", "dirty", "zoomMaxLimit", "addChild", "startsWith", "aabb", "getTransform", "find", "inherit", "remove", "canvas", "_calcBackgroundPosition", "top", "runScript", "point", "layersContainer", "updateCanvasOffset", "9349713hNRFSS", "wheelZoom", "154585SeSMnv", "background", "Layer has been destroyed already.", "_backgroundImageObject", "styleSystem"];
  return Xe = function() {
    return n;
  }, Xe();
}
function Ye(n, x) {
  const t = Xe();
  return Ye = function(e, s) {
    return e = e - 326, t[e];
  }, Ye(n, x);
}
class ht extends C {
  constructor(x) {
    const t = w;
    super(), this.className = "Layer", this[t(372)] = !![], this.viewportRect = new K(0, 0, 1, 1), this.cuttingHide = !![], this[t(371)] = [], this[t(336)] = !![], this[t(415)] = new Jr(), this[t(368)] = -1, this[t(394)] = -1, this[t(465)] = { x: 10, y: 10 }, this[t(392)] = { x: 0.1, y: 0.1 }, this[t(391)] = 0, this[t(354)] = ![], this._dragDrawDelay = ![], this[t(367)] = { sw: null, sh: null, x: null, y: null }, this[t(446)] = x, this[t(409)] = ![], this.setRender(new Ws(this)), this[t(371)] = [], gt[t(399)] && (k0.layer = this);
  }
  get [w(376)]() {
    return this[w(391)];
  }
  set [w(376)](x) {
    this._frames = x;
  }
  [w(396)]() {
    const x = w;
    return this[x(329)](), this[x(354)] = !![], !![];
  }
  [w(430)]() {
    const x = w;
    this[x(415)][x(379)]();
  }
  [w(457)]() {
    const x = w;
    this[x(415)][x(353)]();
  }
  [w(412)](x) {
    const t = w;
    this.render != null && this.render.dispose(), this[t(346)] = x, this[t(396)]();
  }
  [w(425)]() {
    const x = w;
    this[x(371)] = [];
    let t = this[x(469)]().invert(), e = t.point({ x: this[x(417)].inputSystem.x || 0, y: this[x(417)][x(384)].y || 0 });
    return this[x(368)] = e.x, this[x(394)] = e.y, this.dirty && this[x(380)](), !![];
  }
  getViewportRectInLayer() {
    return this[w(447)];
  }
  [w(449)]() {
    const x = w;
    let t = this[x(417)].serializerSystem[x(389)]([this]);
    return t[x(431)] = this[x(417)].styleSystem[x(389)](), JSON[x(423)](t);
  }
  [w(395)](x) {
    const t = w;
    D0[t(410)](100), this.removeAllChild(), this[t(417)][t(364)].fillByJson(this, x), this[t(417)][t(341)][t(437)](this), this[t(329)](), this[t(460)](1, 1, 0, 0), setTimeout(() => this[t(396)](), 10);
  }
  [w(331)](x) {
    x(this.stage, this);
  }
  [w(380)]() {
    const x = w;
    this[x(447)][x(458)](0, 0, this[x(417)][x(454)], this.stage[x(443)]);
    let t = this[x(469)]()[x(463)]();
    const e = this[x(447)];
    let s = t[x(332)]({ x: e.x, y: e.y }), i = t[x(332)]({ x: e[x(454)], y: e.height });
    return e.x = s.x, e.y = s.y, e.width = i.x - s.x, e[x(443)] = i.y - s.y, this[x(447)] = e, e;
  }
  [w(386)](x, t) {
    const e = w;
    (x != this[e(346)][e(388)]() || t != this[e(346)][e(350)]()) && (this.render[e(369)](x, t), this[e(387)](x, t), this.update());
  }
  pickUpChild(x = ![]) {
    const t = w;
    let e = this[t(346)][t(348)];
    return super[t(374)](e, x);
  }
  [w(403)](x) {
    const t = w, e = this;
    let s = [], i = e.getAllVisiable();
    if (i != null)
      for (var r = 0; r < i[t(441)]; r++) {
        let a = i[r];
        if (!a[t(452)])
          continue;
        let o = a._obb[t(468)];
        x.containsRect(o) && s[t(422)](a);
      }
    return s;
  }
  [w(400)](x, t) {
    const e = w;
    return super[e(400)](x, t), this[e(329)](), this;
  }
  [w(329)]() {
    const x = w;
    if (!this.render)
      return;
    let t = this._bgInfo, e = this[x(402)][x(445)];
    if (e != null && e != x(347)) {
      let s = 100, i = 100, r = this.style[x(340)];
      r != null && (s = r.width, i = r.height);
      let a = s * this[x(375)], o = i * this[x(356)], c = this.width * 0.5 % a + this.x, h = this[x(443)] * 0.5 % o + this.y;
      if (t.sw != a || t.sh != o || t.x != c || t.y != h) {
        const l = this[x(346)].canvas;
        l[x(402)][x(440)] = a + "px " + o + "px", l.style[x(381)] = c + "px " + h + "px";
      }
      t.sw = a, t.sh = o, t.x = c, t.y = h;
    }
  }
  [w(366)](x) {
    const t = w;
    super[t(366)](x);
    let e = x;
    if (this[t(346)]) {
      const s = this[t(346)][t(328)];
      Object.keys(e)[t(385)]((r) => {
        const a = t;
        let o = e[r];
        r[a(467)](a(338)) && (s[a(402)][r] = o);
      });
    }
    return this;
  }
  [w(459)](x = ![]) {
    const t = w;
    let e = this[t(401)](x, W0);
    return this[t(420)](e);
  }
  show() {
    const x = w;
    return super[x(379)](), this[x(329)](), this;
  }
  [w(353)]() {
    const x = w;
    return super[x(353)](), this[x(346)].hide(), this;
  }
  [w(434)]() {
    const x = w;
    let t = this[x(454)], e = this[x(443)];
    return [{ x: 0, y: 0 }, { x: t, y: 0 }, { x: t, y: e }, { x: 0, y: e }];
  }
  [w(426)]() {
    return this._OBBPoints();
  }
  [w(406)](x) {
  }
  [w(460)](x, t, e, s) {
    const i = w;
    if (this[i(404)](i(460))) {
      let a = new Event(i(460), { cancelable: !![] });
      if (a[i(460)] = { x, y: t, cx: e, cy: s }, this[i(342)](a), a[i(444)] == !![])
        return this;
    }
    if (x < 1) {
      let a = this[i(392)];
      if (this[i(447)][i(454)] >= this[i(454)] * (1 / a.x) && this[i(447)].height >= this[i(443)] * (1 / a.y))
        return this;
    } else {
      let a = this.zoomMaxLimit;
      if (this[i(447)].width <= this[i(454)] * (1 / a.x) && this[i(447)][i(443)] <= this.height * (1 / a.y))
        return this;
    }
    return Gr(this, x, t, e, s), this;
  }
  [w(382)]() {
    const x = w;
    this[x(352)](1, 1), this[x(462)](0, 0), this[x(464)] = !![];
  }
  [w(433)]() {
    const x = w;
    this.render[x(432)](this);
  }
  setBackground(x, t) {
    const e = w;
    this.render[e(328)][e(402)][e(338)] = x, this[e(346)][e(328)].style[e(440)] = t;
  }
  [w(470)](x, t, e = ![]) {
    return this._findChildren(x, t, e);
  }
  [w(420)](x) {
    const t = w;
    let e = x.clone(), s = this[t(469)](), i = s[t(332)]({ x: e.x, y: e.y }), r = s[t(332)]({ x: e.x + e[t(454)], y: e.y + e[t(443)] });
    return e.x = i.x, e.y = i.y, e.width = r.x - i.x, e.height = r.y - i.y, e;
  }
  [w(349)](x) {
    const t = w;
    let e = this[t(469)]().invert(), s = new K(), i = e[t(332)]({ x: x.x, y: x.y }), r = e.point({ x: x.x + x[t(454)], y: x.y + x[t(443)] });
    return s.x = i.x, s.y = i.y, s[t(454)] = r.x - i.x, s[t(443)] = r.y - i.y, s;
  }
  [w(343)](x) {
    const t = w;
    if (this[t(427)] == ![])
      return;
    let e = x.dx, s = x.dy;
    this[t(334)](e, s);
  }
  updateCanvasOffset(x, t) {
    const e = w;
    if (this[e(424)] == ![]) {
      this[e(400)](x, t);
      return;
    }
    let s = this.render.canvas, i = s[e(398)], r = s[e(414)];
    s[e(402)].left = i + x + "px", s[e(402)][e(330)] = r + t + "px";
  }
  setDrawDelay(x) {
    const t = w;
    this._dragDrawDelay = x, x ? this[t(417)].layersContainer[t(402)].overflow = t(383) : this[t(417)][t(333)][t(402)].overflow = t(326);
  }
  [w(363)]() {
    const x = w;
    if (this._dragDrawDelay == ![])
      return;
    let t = this.render[x(328)], e = t.offsetLeft, s = t[x(414)];
    this[x(400)](e, s), t[x(402)][x(370)] = x(461), t.style.top = x(461);
  }
  [w(466)](x) {
    const t = w;
    return super[t(466)](x), this[t(396)](), this;
  }
  [w(439)](x) {
    const t = w;
    super[t(439)](x), this[t(396)]();
  }
  [w(362)](x) {
    const t = w;
    let e = this, s = e.stage, i;
    if (x == null)
      i = e.getAABB(!![]);
    else if (x instanceof T)
      i = x[t(459)](!![], Bt);
    else {
      let h = x[t(448)]((l) => l[t(459)](!![], Bt));
      i = $0[t(436)](h);
    }
    let r = s[t(454)] / 2, a = s[t(443)] / 2, o = r - i.x, c = a - i.y;
    o -= i[t(454)] / 2, c -= i[t(443)] / 2, e[t(400)](o, c), e.update();
  }
  [w(344)](x) {
    const t = w;
    let e = Object[t(418)](x);
    const s = this[t(346)][t(328)];
    x._background != null && (s[t(402)].background = x[t(377)]), e.forEach((i) => {
      const r = t;
      let a = x[i];
      i[r(467)](r(338)) && (s[r(402)][i] = a);
    }), s[t(454)] += 1, s.width -= 1;
  }
  [w(456)]() {
    const x = w;
    let t = this[x(417)][x(364)], e = t[x(429)]([this]);
    console[x(393)](x(455)), this.openJson(e);
    let s = t[x(429)]([this]);
    console[x(453)](x(455));
    function i(a, o) {
      const c = x, h = Math.min(a[c(441)], o[c(441)]);
      for (let l = 0; l < h; l++)
        if (a[l] !== o[l])
          return console[c(397)](c(405), a[c(450)](l, l + 20), o.substring(l, l + 20)), l;
      return a[c(441)] !== o[c(441)] ? h : -1;
    }
    let r = i(e, s);
    return r != -1 ? console[x(397)](x(435), r) : console[x(397)](x(407)), e;
  }
  [w(355)]() {
    const x = w;
    return T[x(419)](this[x(438)], (t) => t.visible == !![]);
  }
  [w(357)](x = 60) {
    const t = w;
    this[t(391)] = x;
  }
  [w(373)]() {
    const x = w;
    if (this[x(361)])
      throw new Error(x(339));
    this[x(361)] = !![], this[x(346)][x(328)][x(327)](), this[x(417)] && this[x(417)][x(411)](this), this[x(371)] = void 0, this[x(365)] = void 0, this[x(402)] = void 0, this[x(447)] = void 0, this[x(451)] = void 0, this[x(346)] = void 0, this.stage = void 0, this.children[x(385)]((t) => t[x(345)]()), this[x(438)] = void 0;
  }
}
ei([v(["id", w(446), "className"])], ht.prototype, w(390), 2), ei([v(w(413))], ht[w(351)], "_layerIndex", 2);
const qe = Ve;
(function(n, x) {
  const t = Ve, e = n();
  for (; []; )
    try {
      if (-parseInt(t(192)) / 1 + -parseInt(t(178)) / 2 + parseInt(t(193)) / 3 + parseInt(t(175)) / 4 * (parseInt(t(197)) / 5) + parseInt(t(199)) / 6 * (parseInt(t(180)) / 7) + parseInt(t(187)) / 8 * (-parseInt(t(194)) / 9) + -parseInt(t(181)) / 10 * (parseInt(t(182)) / 11) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Ke, 158103);
function Ve(n, x) {
  const t = Ke();
  return Ve = function(e, s) {
    return e = e - 175, t[e];
  }, Ve(n, x);
}
let L1 = `
<svg viewBox="0 0 24 24" id="zoom-in">
<path d="M4,20 L9.58788778,14.4121122"/>
<path d="M14,16 C10.6862915,16 8,13.3137085 8,10 C8,6.6862915 10.6862915,4 14,4 C17.3137085,4 20,6.6862915 20,10 C20,13.3137085 17.3137085,16 14,16 Z"/>
<path d="M16.6666667 10L11.3333333 10M14 7.33333333L14 12.6666667"/>
</svg>
<svg viewBox="0 0 24 24" id="zoom-out">
<path d="M14,16 C10.6862915,16 8,13.3137085 8,10 C8,6.6862915 10.6862915,4 14,4 C17.3137085,4 20,6.6862915 20,10 C20,13.3137085 17.3137085,16 14,16 Z"/>
<path d="M16.6666667 10L11.3333333 10M4 20L9.58788778 14.4121122"/>
</svg>
<svg viewBox="0 0 24 24" id="back-left">
<path d="M5,17 L5,15 C5,10.0294373 8.80557963,6 13.5,6 C18.1944204,6 22,10.0294373 22,15"/>
<polyline points="8 15 5 18 2 15"/>
</svg>
<svg viewBox="0 0 24 24" id="align-center">
<path d="M8 10L16 10M6 6L18 6M6 14L18 14M8 18L16 18"/>
</svg>
<svg viewBox="0 0 24 24" id="edit">
<path d="M18.4142136 4.41421356L19.5857864 5.58578644C20.366835 6.36683502 20.366835 7.63316498 19.5857864 8.41421356L8 20 4 20 4 16 15.5857864 4.41421356C16.366835 3.63316498 17.633165 3.63316498 18.4142136 4.41421356zM14 6L18 10"/>
</svg>
<svg viewBox="0 0 24 24" id="lock-alt">
<rect width="14" height="10" x="5" y="11"/>
<path d="M12,3 L12,3 C14.7614237,3 17,5.23857625 17,8 L17,11 L7,11 L7,8 C7,5.23857625 9.23857625,3 12,3 Z"/>
<circle cx="12" cy="16" r="1"/>
</svg>
<svg viewBox="0 0 24 24" id="lock-open">
<path d="M7,7.625 L7,7 C7,4.23857625 9.23857625,2 12,2 L12,2 C14.7614237,2 17,4.23857625 17,7 L17,11"/>
<rect width="14" height="10" x="5" y="11"/>
</svg>
<svg viewBox="0 0 24 24" id="pan">
<path d="M20,14 L20,17 C20,19.209139 18.209139,21 16,21 L10.0216594,21 C8.75045497,21 7.55493392,20.3957659 6.80103128,19.3722467 L3.34541668,14.6808081 C2.81508416,13.9608139 2.94777982,12.950548 3.64605479,12.391928 C4.35756041,11.8227235 5.38335813,11.8798792 6.02722571,12.5246028 L8,14.5 L8,13 L8.00393081,13 L8,11 L8.0174523,6.5 C8.0174523,5.67157288 8.68902517,5 9.5174523,5 C10.3458794,5 11.0174523,5.67157288 11.0174523,6.5 L11.0174523,11 L11.0174523,4.5 C11.0174523,3.67157288 11.6890252,3 12.5174523,3 C13.3458794,3 14.0174523,3.67157288 14.0174523,4.5 L14.0174523,11 L14.0174523,5.5 C14.0174523,4.67157288 14.6890252,4 15.5174523,4 C16.3458794,4 17.0174523,4.67157288 17.0174523,5.5 L17.0174523,11 L17.0174523,7.5 C17.0174523,6.67157288 17.6890252,6 18.5174523,6 C19.3458794,6 20.0174523,6.67157288 20.0174523,7.5 L20.0058962,14 L20,14 Z"/>
</svg>
<svg viewBox="0 0 24 24" id="apps-alt">
<rect x="5" y="5" width="2" height="2"/>
<rect x="11" y="5" width="2" height="2"/>
<rect x="17" y="5" width="2" height="2"/>
<rect x="5" y="11" width="2" height="2"/>
<rect x="11" y="11" width="2" height="2"/>
<rect x="17" y="11" width="2" height="2"/>
<rect x="5" y="17" width="2" height="2"/>
<rect x="11" y="17" width="2" height="2"/>
<rect x="17" y="17" width="2" height="2"/>
</svg>
<svg viewBox="0 0 24 24" id="maximise">
<polyline points="21 16 21 21 16 21"/>
<polyline points="8 21 3 21 3 16"/>
<polyline points="16 3 21 3 21 8"/>
<polyline points="3 8 3 3 8 3"/>
</svg>
<svg viewBox="0 0 24 24" id="minimise">
<polyline points="8 3 8 8 3 8"/>
<polyline points="21 8 16 8 16 3"/>
<polyline points="3 16 8 16 8 21"/>
<polyline points="16 21 16 16 21 16"/>
</svg>
<svg viewBox="0 0 24 24" id="download">
<path d="M12,3 L12,16"/>
<polyline points="7 12 12 17 17 12"/>
<path d="M20,21 L4,21"/>
</svg>
<svg viewBox="0 0 24 24" id="rectangle">
<rect width="18" height="18" x="3" y="3"/>
</svg>
<svg viewBox="0 0 24 24" id="cursor">
<polygon points="7 20 7 4 19 16 12 16 7 21"/>
</svg>
<svg viewBox="0 0 24 24" id="search">
<path d="M14.4121122,14.4121122 L20,20"/>
<circle cx="10" cy="10" r="6"/>
</svg>
<svg viewBox="0 0 24 24" id="eye">
<path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z"/>
<circle cx="12" cy="12" r="3"/>
</svg>
<svg viewBox="0 0 24 24" id="save">
<path d="M17.2928932,3.29289322 L21,7 L21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 L16.5857864,3 C16.8510029,3 17.1053568,3.10535684 17.2928932,3.29289322 Z"/>
<rect width="10" height="8" x="7" y="13"/>
<rect width="8" height="5" x="8" y="3"/>
</svg>
<svg viewBox="0 0 24 24" id="image">
<rect width="18" height="18" x="3" y="3"/>
<path stroke-linecap="round" d="M3 14l4-4 11 11"/>
<circle cx="13.5" cy="7.5" r="2.5"/>
<path stroke-linecap="round" d="M13.5 16.5L21 9"/>
</svg>
<svg viewBox="0 0 24 24" id="upload">
<path d="M12,4 L12,17"/>
<polyline points="7 8 12 3 17 8"/>
<path d="M20,21 L4,21"/>
</svg>
`;
function ni(n, x, t, e, s = qe(177), i = "rgb(21,21,21)") {
  const r = qe;
  let a = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + n + " " + x + r(176) + n + '" height="' + x + '" style="fill:' + s + r(184) + i + r(191), o = x / t, c = n / e;
  for (let h = 1; h <= t; h++)
    a += r(188) + o * h + r(189) + n + r(190) + o * h + r(186) + i + ';stroke-width:0.5"/>';
  for (let h = 1; h <= e; h++)
    a += r(196) + c * h + r(198) + c * h + r(190) + x + r(186) + i + r(195);
  return a += r(183), a = a.replace(/\n/g, ""), a;
}
function si(n) {
  return "data:image/svg+xml;charset=UTF-8," + n;
}
let Xi = document[qe(179)]("div");
function Ke() {
  const n = ["1244hqhNKm", `">
            <rect x="0" y="0" width="`, "rgb(36,36,36)", "250814fksDSM", "createElement", "917140mQoLxG", "20xyaTuk", "888613iVRmSs", "</svg>", ";stroke:", "innerHTML", '" style="stroke:', "557120qRFqzl", '<line x1="0" y1="', '" x2="', '" y2="', ';stroke-width:1;"/>', "105065ioYAbq", "654306rFcYJp", "9GypFqe", ';stroke-width:0.5"/>', '<line x1="', "2245psvjbC", '" y1="0" x2="', "12zAvHlR"];
  return Ke = function() {
    return n;
  }, Ke();
}
Xi[qe(185)] = L1;
let Xs = {};
Xs.get = function(n) {
  return Xi.querySelector("#" + n);
};
const M = lx;
function Ue() {
  const n = ["rgba(0,0,236,0.1)", "255941gGxOTE", "65299NxRDuZ", "10QXjpoE", "2652221QgaQVY", "url('", "black", "forEach", "266029qhQMcL", "') repeat", "rgba(255,255,255,0.2)", "10axuVom", "269164lAdLuM", "47583IZWrRB", "rgb(220,220,220)", "top", "16PuGBIC", "30tzxyxw", "center", "177273GQTuSN", "white", "10rgiioQ", "keys", "middle", "936qMxoUQ"];
  return Ue = function() {
    return n;
  }, Ue();
}
function lx(n, x) {
  const t = Ue();
  return lx = function(e, s) {
    return e = e - 276, t[e];
  }, lx(n, x);
}
(function(n, x) {
  const t = lx, e = n();
  for (; []; )
    try {
      if (parseInt(t(289)) / 1 + -parseInt(t(284)) / 2 * (parseInt(t(300)) / 3) + -parseInt(t(293)) / 4 * (-parseInt(t(292)) / 5) + -parseInt(t(298)) / 6 * (-parseInt(t(282)) / 7) + -parseInt(t(297)) / 8 * (-parseInt(t(294)) / 9) + -parseInt(t(277)) / 10 * (-parseInt(t(285)) / 11) + parseInt(t(280)) / 12 * (-parseInt(t(283)) / 13) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Ue, 147862);
const ux = { copyFrom: function(n) {
  const x = lx;
  let t = ux[n];
  if (t == null)
    throw new Error("theme not exist:" + n);
  let e = Object[x(278)](t), s = {};
  return e[x(288)]((i) => {
    s[i] = Object.assign({}, t[i]);
  }), s;
}, DefaultLight: { SelectArea: { border: "1px solid rgba(0,0,0,0.5)", backgroundColor: M(281) }, Layer: { background: "url('" + si(ni(100, 100, 5, 5, "rgb(255,255,255)", M(295))) + "') repeat" }, Node: { textPosition: "cb", textAlign: M(299), textBaseline: M(296), strokeStyle: M(287) }, TextNode: { textPosition: M(299), textAlign: "center", textBaseline: M(279), strokeStyle: M(287) }, TipNode: { textPosition: "ct", textAlign: M(299), textBaseline: M(296) }, ShapeNode: { lineWidth: 1, textPosition: "cb", textAlign: "center", textBaseline: "top", strokeStyle: M(287) }, CircleNode: { textPosition: "cb", textAlign: M(299), textBaseline: M(296), strokeStyle: "black" }, VideoNode: { textPosition: "cb", textAlign: "center", textBaseline: M(296) }, RatioNode: { textPosition: M(299), textAlign: "center", textBaseline: M(279) }, Link: { lineWidth: 1, strokeStyle: M(287) }, AutoFoldLink: { strokeStyle: M(287) }, FoldLink: { strokeStyle: "black" }, FlexionalLink: { strokeStyle: M(287) }, CurveLink: { strokeStyle: M(287) }, BezierLink: { strokeStyle: M(287) }, ArcLink: { strokeStyle: M(287) } }, DefaultDark: { SelectArea: { border: "1px solid rgba(255,255,255,0.5)", backgroundColor: M(291) }, Layer: { background: M(286) + si(ni(100, 100, 5, 5)) + M(290) }, Node: { textPosition: "cb", textAlign: "center", textBaseline: M(296), strokeStyle: "white", color: "white" }, TextNode: { textPosition: M(299), textAlign: M(299), textBaseline: M(279), strokeStyle: M(276), color: M(276) }, TipNode: { textPosition: "ct", textAlign: "center", textBaseline: M(296), color: M(276) }, ShapeNode: { lineWidth: 1, textPosition: "cb", textAlign: "center", textBaseline: M(296), strokeStyle: M(276), color: M(276) }, CircleNode: { textPosition: "cb", textAlign: M(299), textBaseline: M(296), strokeStyle: M(276), color: M(276) }, VideoNode: { textPosition: "cb", textAlign: M(299), textBaseline: "top", strokeStyle: M(276), color: M(276) }, RatioNode: { textPosition: M(299), textAlign: M(299), textBaseline: M(279), color: M(276) }, Link: { strokeStyle: "white" }, AutoFoldLink: { strokeStyle: M(276) }, FoldLink: { strokeStyle: M(276) }, FlexionalLink: { strokeStyle: M(276) }, CurveLink: { strokeStyle: "white" }, BezierLink: { strokeStyle: M(276) }, ArcLink: { strokeStyle: "white" } } }, Dx = fx;
(function(n, x) {
  const t = fx, e = n();
  for (; []; )
    try {
      if (parseInt(t(394)) / 1 + parseInt(t(373)) / 2 + parseInt(t(381)) / 3 * (parseInt(t(383)) / 4) + -parseInt(t(395)) / 5 * (-parseInt(t(392)) / 6) + -parseInt(t(364)) / 7 * (parseInt(t(384)) / 8) + -parseInt(t(382)) / 9 * (-parseInt(t(379)) / 10) + parseInt(t(378)) / 11 * (-parseInt(t(369)) / 12) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Ge, 654680);
function fx(n, x) {
  const t = Ge();
  return fx = function(e, s) {
    return e = e - 362, t[e];
  }, fx(n, x);
}
function Ge() {
  const n = ["3850qWwsfk", "7541270goACJw", "DefaultDark", "462780kdBJeI", "9yjlFNq", "8EoMgRK", "141952CCscdg", "red", "render", "style", "addChild", "areaBox", "axis", "back", "1086234NiohPE", "white", "1072492dCrwOc", "35qDzCVl", "HandlerLayer", "visible", "restore", "hide", "mouseX", "168tEPOtW", "_frames", "font", "fillText", "getHeight", "90108gyOjRQ", "mouseoutHandler", "draw", "mouseDownY", "612548ZEUEtr", "mouseY", "bold 16px arial", "css", "stage"];
  return Ge = function() {
    return n;
  }, Ge();
}
var M1 = H0.gc;
let ii = Y0.w;
class cs extends ht {
  constructor(x) {
    const t = fx;
    super(), this.className = t(396), this[t(365)] = 0, this.zIndex = Mx.HandlerLayerCanvas, this[t(363)] = 0, this[t(374)] = 0, this.mouseDownX = 0, this[t(372)] = 0, D0[t(391)](), this[t(377)] = x, this[t(387)] = new I0({ fillStyle: t(385), font: "13px arial" }), this[t(389)] = new C(), D0[t(391)](), this[t(389)][t(376)](ux[t(380)].SelectArea), this[t(388)](this[t(389)]), this[t(390)][t(397)] = ![], this[t(397)] = !![];
  }
  [Dx(370)](x) {
    const t = Dx;
    this[t(389)][t(362)]();
  }
  [Dx(371)](x) {
    const t = Dx;
    if (ii == null)
      return;
    x.save(), x.globalAlpha = 0.6, x[t(366)] = t(375);
    let e = M1(ii);
    x.fillStyle = t(393), x[t(367)](e, 16, this[t(386)][t(368)]() - 16), x[t(398)]();
  }
}
function mt(n, x) {
  const t = Je();
  return mt = function(e, s) {
    return e = e - 264, t[e];
  }, mt(n, x);
}
const rt = mt;
(function(n, x) {
  const t = mt, e = n();
  for (; []; )
    try {
      if (-parseInt(t(312)) / 1 + parseInt(t(267)) / 2 * (parseInt(t(273)) / 3) + parseInt(t(308)) / 4 + parseInt(t(315)) / 5 + -parseInt(t(291)) / 6 + parseInt(t(281)) / 7 + -parseInt(t(321)) / 8 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Je, 375809);
function Je() {
  const n = ["test", "userAgent", "body", "scrollLeft", "left", "top", "3607464LPuKyp", "fullScreen", "requestFullscreen", "mozRequestFullScreen", "pageY", "getOffsetPosition", "msRequestFullscreen", "fixed", "call", "ownerDocument", "1469262JecDpU", "isFirefox", "getBoundingClientRect", "video", "offsetLeft", "video/mp4", "FullWindowDom", "bottom", "createVideo", "forEach", "muted", "scrollTop", "position,width,height,left,top,bottom,right,zIndex", "oncanplay", "clientTop", "addEventListener", "src", "1074932vxjalK", "clientX", "createElement", "none", "42450MGWbnP", "touches", "split", "3728910AnNEXl", "pageXOffset", "mousewheel", "offsetTop", "right", "source", "11667704BcOTza", "attachEvent", "style", "documentElement", "131496IoyzRl", "clientLeft", "isMobileDevice", "pageX", "_backup", "zIndex", "27UAZZmn", "appendChild"];
  return Je = function() {
    return n;
  }, Je();
}
function Yi(n, x) {
  const t = mt;
  let e = x[t(313)][0][t(270)], s = x[t(313)][0][t(285)];
  x[t(313)][0][t(270)] == null && (e = x[t(313)][0][t(309)] + document[t(277)][t(278)] - document[t(277)][t(268)], s = x[t(313)][0].clientY + document[t(277)][t(302)] - document[t(277)][t(305)]);
  let i = K0[t(286)](n), r = e - i[t(279)], a = s - i[t(280)];
  return { x: r, y: a };
}
class K0 {
  static addEventListener(x, t, e) {
    const s = mt;
    let i = x[s(264)] || x[s(306)];
    H0[s(292)]() && t == s(317) ? t = "DOMMouseScroll" : window.attachEvent && t.substring(0, 2) !== "on" && (t = "on" + t), i[s(289)](x, t, e);
  }
  static getOffsetPosition(x) {
    const t = mt;
    if (x == null)
      return { left: 0, top: 0 };
    let e = 0, s = 0;
    if (x[t(293)] != null) {
      let i = x[t(293)](), r = x[t(290)], a = r[t(277)], o = r[t(266)], c = o[t(305)] || a[t(305)] || 0, h = o[t(268)] || a[t(268)] || 0;
      e = i[t(280)] + (window.pageYOffset || o && o[t(302)] || a[t(302)]) - c, s = i.left + (window[t(316)] || o && o[t(278)] || a[t(278)]) - h;
    } else
      do
        e += x[t(318)] || 0, s += x[t(295)] || 0, x = x.offsetParent;
      while (x);
    return { left: s, top: e };
  }
  static [rt(299)](x, t) {
    const e = rt;
    if (typeof x == "string") {
      let s = document[e(310)](e(294));
      s.muted = e(301), s[e(265)].display = e(311);
      let i = document[e(310)](e(320));
      return i.type = e(296), i[e(307)] = x, s.appendChild(i), document.body[e(274)](s), s[e(304)] = function() {
        t(s);
      }, s;
    } else
      return x;
  }
  static fullWindow(x) {
    const t = rt;
    let e = t(303)[t(314)](",");
    if (x[t(282)] == !![]) {
      let s = x._backup;
      e[t(300)]((i) => {
        const r = t;
        x[r(265)][i] = s[i];
      }), x[t(282)] = ![];
    } else {
      let s = {};
      e[t(300)]((i) => {
        const r = t;
        s[i] = x[r(265)][i];
      }), x[t(271)] = s, x[t(265)].position = t(288), x.style.left = 0, x[t(265)][t(280)] = 0, x.style[t(298)] = 0, x[t(265)][t(319)] = 0, x[t(265)][t(272)] = Mx[t(297)], x[t(282)] = !![];
    }
  }
  static [rt(282)](x) {
    const t = rt;
    x[t(283)] ? x[t(283)]() : x[t(284)] ? x[t(284)]() : x.webkitRequestFullscreen ? x.webkitRequestFullscreen() : x[t(287)] && x[t(287)]();
  }
}
K0[rt(269)] = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i[rt(275)](navigator[rt(276)]);
const j = Qe;
(function(n, x) {
  const t = Qe, e = n();
  for (; []; )
    try {
      if (parseInt(t(221)) / 1 * (parseInt(t(184)) / 2) + parseInt(t(155)) / 3 * (-parseInt(t(233)) / 4) + parseInt(t(209)) / 5 + -parseInt(t(154)) / 6 + parseInt(t(211)) / 7 + parseInt(t(160)) / 8 * (parseInt(t(157)) / 9) + parseInt(t(238)) / 10 * (-parseInt(t(248)) / 11) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Ze, 712897);
function Ze() {
  const n = ["innerHTML", "getHeigth", '<input type="file"/>', "maximise", "active", "displayList", "activeBtn", "onkeydown", "iconId", "title", "jtopo_toolbar", "edit", "pan", "normal", `</button>
<button title="拖拽模式"  class="item" group='mode' iconId='pan'>`, ".json", "zoom-in", 'input[type="text"]', "163250ZYFuuh", `</button>
</div>

<div class="group">
<button title="缩略图" class="item" iconId='eye'>`, "centerBy", "image", "play", "saveImageInfo", "stage", "none", "showOverview", "value", "domObj", `</button>
<button title="缩放至画布" class="item" iconId='minimise'>`, "Enter", "files", "effectSystem", "scaleTo", "text", "select", "name", `</button>
</div>

<div class="group">
<button title="导出PNG" class="item" iconId='image'>`, "ondblclick", "button[iconid='edit']", "readAsText", `</button>
<button title="锁定模式" class="item" group='mode' iconId='lock-alt'>`, ' style="display:none" ', "850230hZwFIm", "change", "1644482SBVGgn", "onload", "upload", "get", "div", "zoomFullStage", "add", "align-center", "editor", "getCurrentLayer", "13clzqrW", "outerHTML", "加载出现错误", `</button>
<button title="保存到本地" class="item" iconId='save'>`, "buttons", "getDom", "zoomIn", "group", "display", "clientHeight", "translateToCenter", "openJson", "4nnCywS", "classList", "button", `</button>
<button title="编辑模式" edit="true" class="item" group='mode' iconId='edit' `, "fileInput", "1720eiQzic", "reloadJsonTest", "initToolbar", "removeAllActive", "log", "querySelector", "setMode", "result", "initActiveStatus", "input", "2959XNaYRF", "style", "getAttribute", "search", "overview", "update", "输入要保存的文件名：", `</button>
<button title="居中" class="item" iconId='align-center'>`, 'input[type="file"]', "minimise", `</button>
<button title="取消缩放" class="item" iconId='back-left'>`, "zoomOut", "querySelectorAll", "translate", "hide", "mode", "eye", `</button>
</div>

<div class="group">
<button title="放大"  class="item" iconId='zoom-in'>`, "key", "onclick", "visible", "lock-alt", "1977828JXBRvw", "1371453frFBSh", "remove", "27WgMbiM", "click", "length", "212952ahVnDd", `</button>
<button title="浏览器全屏" class="item" iconId='maximise'>`, "save", "drag", "flash", "block"];
  return Ze = function() {
    return n;
  }, Ze();
}
function _0(n) {
  return Xs.get(n).outerHTML;
}
let qi = j(208);
qi = "";
var A1 = `
<div class="group">
<button title="默认" class="item active" group='mode' iconId='cursor'>` + _0("cursor") + j(236) + qi + ">" + _0("edit") + `</button>
<button title="框选模式" class="item" group='mode' iconId='rectangle'>` + _0("rectangle") + j(180) + _0(j(178)) + j(207) + _0(j(153)) + j(149) + _0(j(182)) + `</button>
<button title="缩小"  class="item" iconId='zoom-out'>` + _0("zoom-out") + j(139) + _0(j(218)) + j(195) + _0(j(141)) + j(142) + _0("back-left") + j(185) + _0(j(148)) + j(161) + _0(j(169)) + `</button>
<input title="查找" type="text" placeholder="查找" value=""></input>
<button class="item" iconId='search'>` + Xs[j(214)](j(251))[j(222)] + j(203) + _0(j(187)) + `</button>
<button title="打开本地文件" class="item" iconId='upload'>` + _0(j(213)) + j(224) + _0(j(162)) + `</button>
<div style="display:none;"><input type="file"/></div>
</div>
`;
class Vi {
  constructor(x) {
    const t = j;
    this[t(190)] = x, this[t(240)](x, A1);
    let e = this;
    setTimeout(function() {
      e[t(246)]();
    }, 200);
  }
  [j(226)]() {
    return this[j(194)];
  }
  show() {
    const x = j;
    this[x(194)][x(249)].display = x(165);
  }
  [j(146)]() {
    const x = j;
    this[x(194)][x(249)][x(229)] = x(191);
  }
  [j(156)]() {
    const x = j;
    this[x(194)][x(156)]();
  }
  [j(167)]() {
    const x = j;
    return this[x(194)][x(249)][x(229)] == x(191) ? 0 : this[x(194)][x(230)] + 1;
  }
  initActiveStatus() {
    const x = j;
    if (this.stage[x(147)] == x(177)) {
      let e = document[x(243)](x(205));
      this.activeBtn(e);
    }
  }
  [j(240)](x, t) {
    const e = j;
    let s = this, i = document.createElement(e(215));
    this[e(194)] = i, i[e(234)][e(217)](e(176)), i.innerHTML = t;
    let r = i[e(144)](e(235));
    this.buttons = r;
    let a = i[e(243)](e(140)), o = a.parentNode;
    function c(p) {
      const k = e;
      o[k(166)] = k(168), h();
      let I = p.target[k(197)][0];
      const L = new FileReader();
      L[k(206)](I), L[k(212)] = function() {
        const P = k, z = s[P(190)][P(220)](), N = this[P(245)];
        try {
          z[P(232)](N), z[P(145)](0, 0), z[P(199)](1, 1), document[P(175)] = I[P(202)];
        } catch (f0) {
          console[P(242)](f0), alert(P(223));
        }
      };
    }
    function h() {
      const p = e;
      a = i[p(243)]('input[type="file"]'), a.addEventListener(p(210), c);
    }
    h(), this[e(237)] = a;
    function l() {
      const p = e;
      let k = x[p(220)](), I = i.querySelector(p(183))[p(193)];
      if (I[p(159)] > 0) {
        let L = k[p(171)];
        for (let P = 0; P < L[p(159)]; P++) {
          const z = L[P];
          if (z[p(200)] != null && z[p(200)].indexOf(I) != -1) {
            k[p(186)](z, 10), x[p(198)][p(164)](z)[p(188)](), x[p(219)] != null ? x[p(219)].update() : x[p(137)]();
            return;
          }
        }
      }
    }
    let d = { cursor: function() {
      const p = e;
      x.setMode(p(179));
    }, rectangle: function() {
      const p = e;
      x[p(244)](p(201));
    }, pan: function() {
      const p = e;
      x[p(244)](p(163));
    }, edit: function() {
      const p = e;
      x[p(244)](p(177));
    }, "lock-alt": function() {
      x[e(244)]("view");
    }, eye: function() {
      const p = e;
      x[p(136)] == null || x[p(136)][p(152)] == ![] ? x[p(192)]() : x.hideOverview();
    }, "zoom-in": function() {
      x[e(227)]();
    }, "zoom-out": function() {
      x[e(143)]();
    }, "back-left": function() {
      x.cancelZoom();
    }, minimise: function() {
      x[e(216)]();
    }, "align-center": function() {
      x[e(231)]();
    }, maximise: function() {
      x.fullWindow();
    }, image: function() {
      x[e(189)]();
    }, save: function() {
      const p = e;
      let k = prompt(p(138));
      k != null && x.download(k + p(181));
    }, upload: function() {
      a[e(158)]();
    }, search: l };
    i[e(243)](e(247))[e(173)] = function(p) {
      const k = e;
      p[k(150)] == k(196) && l();
    }, i.querySelector("input")[e(204)] = function() {
      const p = e;
      console[p(242)](p(239)), x[p(220)]()[p(239)]();
    };
    function y(p) {
      const k = e;
      p[k(151)] = function() {
        const I = k;
        let L = p[I(250)](I(174));
        d[L](), s[I(172)](p);
      };
    }
    for (var g = 0; g < r[e(159)]; g++) {
      let p = r[g];
      y(p);
    }
  }
  [j(172)](x) {
    const t = j;
    let e = x.getAttribute("group");
    e != null && (this[t(241)](e), x[t(234)][t(217)](t(170)));
  }
  removeAllActive(x) {
    const t = j;
    let e = this[t(225)];
    for (var s = 0; s < e.length; s++) {
      let i = e[s];
      x == i[t(250)](t(228)) && i[t(234)][t(156)](t(170));
    }
  }
}
function Qe(n, x) {
  const t = Ze();
  return Qe = function(e, s) {
    return e = e - 136, t[e];
  }, Qe(n, x);
}
const Q0 = dx;
(function(n, x) {
  const t = dx, e = n();
  for (; []; )
    try {
      if (parseInt(t(238)) / 1 * (parseInt(t(176)) / 2) + parseInt(t(241)) / 3 + -parseInt(t(226)) / 4 + -parseInt(t(223)) / 5 + -parseInt(t(184)) / 6 * (-parseInt(t(213)) / 7) + -parseInt(t(206)) / 8 + -parseInt(t(199)) / 9 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})($e, 735981);
function $e() {
  const n = ["idleTimer", "mouseup", "offsetX", "Handler", "event", "11077096lwrzST", "isDraging", "left", "mousewheel", "isMouseOn", "isDragEnd", "getElementById", "345338kaTgBF", "touchmove", "drop", "targetCanvas", "idleTimeout", "mousedown", "canvas", "assign", "dispatchEvent", "isMouseDown", "345140AGwqDP", "dirty", "mouseover", "2124652LTmbxT", "buttons", "click", "sourceCanvas", "dragover", "edit", "clientY", "preventDefault", "touchend", "mouseDownX", "mousemove", "touchstart", "7899TzqNRE", "top", "touchendHandler", "4393647JNwrmo", "touches", "button", "log", "view", "addEventListener", "forceUpdate", "294wpWmDn", "mouseenter", "offsetY", "editor", "isIdle", "inputSystem", "isDragStart", "wheelZoom", "42RtqJDw", "length", "overview", "map", "stopPropagation", "mode", "render", "getBoundingClientRect", "handlerLayer", "dragend", "mockMouseEvent", "mousedragHandler", "defaultPrevented", "update", "mouseout", "2252079DrGbUB", "dragstart"];
  return $e = function() {
    return n;
  }, $e();
}
class Ys extends U0 {
  constructor() {
    const x = dx;
    super(), this[x(183)] = !![], this[x(235)] = 0, this.mouseDownY = 0, this.x = -1, this.y = -1, this[x(222)] = ![], this.isDragEnd = ![], this.isDraging = ![], this[x(210)] = ![], this[x(182)] = ![], this.touchesDistance = 0, this[x(217)] = 50, this[x(227)] = 0, this[x(243)] = 0;
  }
  [Q0(233)]() {
    const x = Q0;
    this[x(205)] && this.event[x(233)]();
  }
  isRightButton() {
    return this[Q0(243)] == 2;
  }
  [Q0(197)](x, t) {
    const e = Q0, s = Object[e(220)]({}, this);
    this.previous = s, this[e(205)] = x, this[e(227)] = x[e(227)], this[e(243)] = x.button, this[e(211)] = ![], this[e(210)] = t != e(198), this[e(180)] = ![];
    let i = this;
    this[e(201)] != null && window.clearTimeout(this[e(201)]), this[e(201)] = setTimeout(function() {
      i.isIdle = !![];
    }, this[e(217)]), this.type = t, this.x = x[e(203)], this.y = x[e(178)], t == e(218) || t == e(237) ? (this.isMouseDown = !![], this[e(235)] = this.x, this.mouseDownY = this.y) : (t == e(202) || t == "click" || t == e(198) || t == e(234)) && (this[e(222)] = ![], s && s.type == e(236) && (this[e(211)] = !![])), this.isDraging = this[e(222)] == !![] && (t == e(236) || t == e(214)), this[e(182)] = this[e(207)] && s[e(207)] != !![], this.dx = this.x - s.x, this.dy = this.y - s.y;
  }
  _initEvent(x) {
    const t = Q0;
    if (K0.isMobileDevice) {
      D1(x);
      return;
    }
    let e = x[t(181)], s = x[t(192)], i = s[t(190)][t(219)];
    [t(177), t(198), t(225), t(218), "mouseup", t(236), t(209), t(228), "dblclick", "dragstart", t(193), t(230), t(215)].map(function(a) {
      const o = t;
      K0[o(174)](i, a, function(c) {
        const h = o;
        if (c[h(203)] < 0 || c.offsetY < 0 || (e.update(c, a), x.update(), x[h(189)] == M0[h(173)]))
          return;
        if (x[h(189)] == M0[h(231)] && (a == h(200) || a == h(193) || a == h(230) || a == h(215))) {
          e[h(221)](c);
          return;
        }
        let l = a + h(204);
        e[h(207)] ? l = h(195) : a == h(214) && (c[h(242)][h(185)] == 1 ? l = h(195) : c[h(242)][h(185)] >= 2 && (l = "mousedragHandler")), a == h(218) && x[h(175)](), !(x[h(189)] == M0[h(231)] && x[h(179)] != null && x[h(179)][l] && (x[h(179)][l](c), e[h(205)][h(196)])) && (x[l] && (x[l](c), x[h(186)] && (x.overview[h(224)] = !![]), e[h(205)][h(196)]) || (a == "mousewheel" && c[h(233)](), e[h(221)](c)));
      });
    });
  }
  [Q0(194)](x, t, e, s) {
    const i = Q0, r = x[i(191)]();
    e = r[i(208)] + e, s = r[i(239)] + s;
    const a = new MouseEvent(t, { clientX: e, clientY: s });
    console[i(172)](a), x[i(221)](a);
  }
}
function D1(n) {
  const x = Q0;
  let t = n[x(181)], e = n.handlerLayer, s = e[x(190)][x(219)];
  ["touchstart", x(214), x(234)][x(187)](function(r) {
    const a = x;
    K0[a(174)](s, r, function(o) {
      const c = a;
      if (o.preventDefault(), n.mode == M0[c(173)])
        return;
      if (t[c(197)](o, r), o[c(242)].length == 0 && r == c(234)) {
        n[c(240)] && n[c(240)](t);
        return;
      }
      if (o[c(242)].length == 0)
        return;
      let h = Yi(s, o);
      if (t[c(203)] = h.x, t[c(178)] = h.y, t.x = h.x, t.y = h.y, t.x = h.x, t.y = h.y, o[c(242)][c(185)] > 1) {
        r == c(214) && n[c(195)] && n[c(195)](t);
        return;
      }
      r == c(237) && n[c(175)]();
      let l = r + "Handler";
      n[l] && n[l](t), t[c(221)](o);
    });
  });
}
function dx(n, x) {
  const t = $e();
  return dx = function(e, s) {
    return e = e - 172, t[e];
  }, dx(n, x);
}
const E0 = dt;
(function(n, x) {
  const t = dt, e = n();
  for (; []; )
    try {
      if (-parseInt(t(309)) / 1 + parseInt(t(327)) / 2 + -parseInt(t(335)) / 3 + parseInt(t(331)) / 4 * (parseInt(t(325)) / 5) + parseInt(t(299)) / 6 + -parseInt(t(321)) / 7 * (-parseInt(t(330)) / 8) + -parseInt(t(343)) / 9 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(tn, 638344);
function dt(n, x) {
  const t = tn();
  return dt = function(e, s) {
    return e = e - 294, t[e];
  }, dt(n, x);
}
function tn() {
  const n = ["TEXTAREA", "keydownHandler", "preKeydownEvent", "keydown", "Meta", "Shift", "4273218wTJDUK", "isMouseOnInputDomElement", "stage", "isKeydown", "regMap", "sort", "toLowerCase", "6959724Alyqdb", "key", "inputSystem", "fireKey", "keys", "metaKey", "sendKey", "keyMap", "split", "isMouseOn", "634650ssVnUd", "editor", "debug", "textInputMode", "altKey", "activeElement", "ctrlKey", "shift", "forEach", "keyupHandler", "preventDefault", "Control", "16653FNrlaA", "Alt", "keyup", "push", "90500mfdlEG", "control", "337762jVrpgF", "meta", "INPUT", "3040uvgrbn", "120KEgGfJ", "join", "tagName", "init", "3084177nuVIXw", "addEventListener"];
  return tn = function() {
    return n;
  }, tn();
}
class Ki extends U0 {
  constructor(x) {
    const t = dt;
    super(), this[t(311)] = ![], this.regMap = {}, this.keyMap = {}, this[t(294)] = x, this[t(334)](), this[t(311)] = ![];
  }
  bindKey(x, t) {
    const e = dt;
    let s = x[e(298)]()[e(307)]("+")[e(297)]()[e(332)]("+");
    this[e(296)][s] = t;
  }
  unBind(x) {
    const t = dt;
    let e = x[t(298)]().split("+").sort()[t(332)]("+");
    this[t(296)][e] = void 0;
  }
  [E0(295)](x) {
    return this[E0(306)][x];
  }
  [E0(305)](x, t) {
    const e = E0;
    t == null && (t = new KeyboardEvent(e(340)), t.mock = !![]), this[e(302)](x[e(298)]().split("+"), t, !![]);
  }
  [E0(344)]() {
    const x = E0;
    let t = document[x(314)][x(333)];
    return t == x(329) || t == x(337);
  }
  fireKey(x, t, e) {
    const s = E0;
    if (e == ![] || this[s(344)]())
      return;
    const i = this;
    let r = this[s(294)], a = r.editor, o = x[s(297)]()[s(332)]("+").toLowerCase();
    this[s(311)] && console.log("按下", o), Object[s(303)](this[s(296)])[s(317)]((h) => {
      const l = s;
      if (h != o || a != null && a.textInputMode == !![])
        return;
      t[l(319)]();
      let d = i[l(296)][h];
      d(t);
    });
  }
  [E0(338)](x) {
    const t = E0;
    let e = x[t(300)][t(298)](), s = this[t(294)], i = [];
    x[t(315)] && (this.keyMap[t(320)] = !![], i.push(t(326))), x[t(313)] && (this.keyMap[t(322)] = !![], i[t(324)]("alt")), x.shiftKey && (this[t(306)][t(342)] = !![], i[t(324)](t(316))), x[t(304)] && (this[t(306)][t(341)] = !![], i.push(t(328))), i.indexOf(e) == -1 && i[t(324)](e), this[t(306)][e] = !![];
    let r = ki(x);
    this[t(339)] = r, this[t(302)](i, r, s[t(301)][t(308)]), this.dispatchEvent(r);
  }
  [E0(318)](x) {
    const t = E0, e = this;
    e.keyMap[x[t(300)]] = ![];
    let s = e[t(294)][t(310)];
    s != null && s[t(312)] == !![] || e.dispatchEvent(new Event(t(323)));
  }
  [E0(334)]() {
    const x = E0;
    let t = this;
    document.addEventListener(x(340), function(e) {
      t[x(338)](e);
    }), document[x(336)](x(323), function(e) {
      t[x(318)](e);
    });
  }
}
function xn(n, x) {
  const t = en();
  return xn = function(e, s) {
    return e = e - 300, t[e];
  }, xn(n, x);
}
const a0 = xn;
(function(n, x) {
  const t = xn, e = n();
  for (; []; )
    try {
      if (parseInt(t(305)) / 1 + -parseInt(t(314)) / 2 * (parseInt(t(324)) / 3) + parseInt(t(313)) / 4 + parseInt(t(300)) / 5 * (-parseInt(t(301)) / 6) + -parseInt(t(319)) / 7 + parseInt(t(330)) / 8 + parseInt(t(321)) / 9 * (parseInt(t(332)) / 10) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(en, 144430);
let ri = new InputEvent(O0[a0(318)]), T1 = new InputEvent(O0[a0(317)]);
class Ui extends U0 {
  constructor() {
    const x = a0;
    super(), this.objects = [], this[x(306)] = ![], this.noChildrensObjects;
  }
  [a0(320)]() {
    const x = a0;
    return this[x(303)][x(328)] == 0;
  }
  [a0(325)](x) {
    const t = a0;
    this.isDraging = ![], !this[t(320)]() && this[t(326)](ri);
  }
  [a0(310)](x) {
    const t = a0;
    if (this[t(326)](T1), x.event[t(329)] == !![])
      return;
    let e = this.getNoChildrensObjects();
    for (var s = 0; s < e[t(328)]; s++) {
      let i = e[s];
      i[t(323)] && i[t(310)] && i.mousedragHandler(x);
    }
  }
  [a0(304)](x) {
    const t = a0;
    this.dispatchEvent(ri);
    let e = this[t(302)]();
    for (var s = 0; s < e.length; s++) {
      let i = e[s];
      i[t(323)] && i[t(304)] && i[t(304)](x);
    }
  }
  [a0(302)]() {
    return T[a0(302)](this.objects);
  }
  addAll(x) {
    const t = a0;
    for (var e = 0; e < x[t(328)]; e++) {
      let s = x[e];
      s[t(307)] = this, !J.hasChild(this.objects, s) && (s.selectedHandler && s[t(331)](), this[t(303)][t(312)](s));
    }
    return this;
  }
  [a0(327)](x) {
    const t = a0;
    return x.group = this, J.hasChild(this[t(303)], x) ? this : (x[t(331)][t(315)](x), this[t(303)][t(312)](x), this);
  }
  remove(x) {
    const t = a0;
    return x[t(307)] = void 0, x[t(316)] && x[t(316)](x), J[t(311)](this[t(303)], x), this;
  }
  [a0(308)]() {
    const x = a0;
    let t = this[x(303)];
    for (var e = 0; e < t[x(328)]; e++) {
      let s = t[e];
      s[x(307)] = void 0, s.unselectedHandler && s.unselectedHandler();
    }
    return this[x(303)][x(328)] = 0, this;
  }
  [a0(322)](x) {
    const t = a0;
    return J[t(309)](this[t(303)], x);
  }
}
function en() {
  const n = ["isDraging", "group", "removeAll", "hasChild", "mousedragHandler", "remove", "push", "1110532UMZWYD", "313372DLZaQe", "call", "unselectedHandler", "groupdrag", "groupdragend", "1826979tduwFZ", "isEmpty", "6498LtVILp", "has", "draggable", "3GRwuzJ", "mouseoutHandler", "dispatchEvent", "add", "length", "defaultPrevented", "1626840ukiATn", "selectedHandler", "1430MpRcUP", "730gsEgQW", "1590NPMnWX", "getNoChildrensObjects", "objects", "mousedragEndHandler", "16569bRYUfC"];
  return en = function() {
    return n;
  }, en();
}
const N0 = px;
function px(n, x) {
  const t = nn();
  return px = function(e, s) {
    return e = e - 440, t[e];
  }, px(n, x);
}
(function(n, x) {
  const t = px, e = n();
  for (; []; )
    try {
      if (parseInt(t(473)) / 1 * (parseInt(t(471)) / 2) + parseInt(t(500)) / 3 * (-parseInt(t(453)) / 4) + parseInt(t(461)) / 5 * (-parseInt(t(479)) / 6) + parseInt(t(459)) / 7 + parseInt(t(468)) / 8 + parseInt(t(460)) / 9 * (parseInt(t(457)) / 10) + -parseInt(t(469)) / 11 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(nn, 856689);
function nn() {
  const n = ["<li>&nbsp;&nbsp;-Parent: (x: ", "appendChild", "6vXiDNK", "stageToLocalXY", ")</li>", "<li>Origin: [", "<li>", "toStageXY", "<li>Total: ", "add", "<li>Links: ", "_obb", "toLayerXY", "height", "aabb", "start", "getCurrentLayer", "hide", "debugInfo", "<li>Mouse-Layer( x: ", ", h:", ",w: ", "layersContainer", "393hAsQEl", "none", "_timer", "<li>Nodes: ", "]</li>", "show", "init", "isIdle", "displayList", "ceil", "innerHTML", "</li>", "checkDom", "<li>&nbsp;&nbsp;-Canvas: (x: ", "div", ", y: ", "createElement", "inputSystem", ") </li>", "stage", "getChildren", "<li>_aabb:[x:", "jtopo_debugPanel", "style", "22136UHYefQ", "domElement", "width", "] </li>", "10455470waMATm", "<li>Painted: ", "9279725bAWEQA", "9piefvh", "7079815CWgSUK", "length", " y: ", "<li>&nbsp;&nbsp;-Layer:  (x: ", "pickedObject", "<li>Mouse-Canvas( x: ", "numberFixed", "6868136CDrOrE", "3476759exIEKe", "<li>Target: id: ", "167872odONre", "toFixed", "1gCUYtd", "origin", "classList", "display"];
  return nn = function() {
    return n;
  }, nn();
}
class F1 {
  constructor(x) {
    const t = px;
    this[t(467)] = 0, this[t(448)] = x;
  }
  [N0(506)]() {
    const x = N0, t = document[x(445)](x(443));
    t[x(475)][x(486)](x(451)), this[x(448)][x(499)][x(478)](t), this[x(454)] = t, this[x(494)]();
  }
  [N0(492)](x = 24) {
    const t = N0, e = this, s = this[t(448)];
    function i() {
      const r = t;
      if (s.inputSystem[r(507)])
        return;
      let a = s[r(449)](), o = 0, c = 0, h = 0;
      for (var l = 0; l < a[r(462)]; l++) {
        let L = a[l];
        o += L[r(508)][r(462)], c += L.getAllNodes()[r(462)], h += L.getAllLinks()[r(462)];
      }
      let d = Math[r(509)](s.inputSystem.x), y = Math[r(509)](s[r(446)].y), g = s[r(493)](), p = { x: 0, y: 0 };
      g != null && (p = g[r(480)](d, y));
      const k = s.inputSystem[r(465)];
      let I = r(466) + d + r(463) + y + r(481);
      if (I += r(496) + p.x[r(472)](2) + r(463) + p.y[r(472)](2) + ")</li>", I += r(503) + c + "</li>", I += r(487) + h + r(440), I += r(485) + (c + h) + "</li>", I += r(458) + o + r(440), k) {
        I += r(470) + k.id;
        const L = k[r(488)][r(491)], P = k[r(484)](0, 0), z = k[r(489)](0, 0), N = this[r(467)];
        I += r(450) + L.x[r(472)](N) + ",y: " + L.y[r(472)](N) + r(498) + L[r(455)][r(472)](N) + r(497) + L[r(490)][r(472)](N) + r(456), I += r(482) + k[r(474)][0][r(472)](N) + ", " + k[r(474)][1].toFixed(N) + r(504), I += r(442) + P.x[r(472)](N) + r(444) + P.y.toFixed(N) + r(447), k instanceof C && (I += r(477) + k.x[r(472)](N) + r(444) + k.y.toFixed(N) + r(447)), I += r(464) + z.x.toFixed(N) + r(444) + z.y[r(472)](N) + r(447);
      }
      gt[r(495)] && (I += r(483) + gt.debugInfo + "</li>"), e.setContent(I);
    }
    this._timer = setInterval(i, x);
  }
  setContent(x) {
    const t = N0;
    this[t(454)][t(510)] = x;
  }
  [N0(441)]() {
    const x = N0;
    this[x(454)] == null && this[x(506)]();
  }
  hide() {
    const x = N0;
    return this.checkDom(), clearInterval(this[x(502)]), this[x(454)][x(452)][x(476)] = x(501), this;
  }
  [N0(505)](x) {
    const t = N0;
    return this[t(441)](), this[t(454)][t(452)][t(476)] = "block", this.start(x), this;
  }
}
const W = bx;
function sn() {
  const n = ["paint", "isDraging", "setTo", "translate", "zIndex", "1911332oslgHx", "375748ukArcX", "Handler", "7NFgxxc", "1411270XsBmOT", "setSize", "beginPath", "mousedragHandler", "fillStyle", "position", "fill", "bottom", "border", "update", "mouseup", "786768gVyguI", "stroke", "getWidth", "render", "Overview has no handler:", "visible", "addEventListener", "style", "resizeTo", "show", "max", "195831gvRDnG", "moveWith", "height", "red", "mousedownHandler", "backgroundColor", "translateTo", "handlerLayer", "save", "rgba(0,250,50,0.2)", "initEvent", "absolute", "mousewheel", "_updateTimer", "paintDragRect", "mousewheelHandler", "opacity", "mouseupHandler", "forEach", "layersAABBRect", "contains", "layersContainer", "_overviewTimer", "lineWidth", "translateWith", "canvas", "3999843IQaWRd", "strokeStyle", "right", "map", "stage", "preventDefault", "mousemoveHandler", "appendChild", "solid 1px gray", "inputSystem", "getLayersAABBRect", "left", "rectObj", "dirty", "restore", "getRect", "2088880iMPqqr", "6GjfhHz", "hide", "getHeight", "getChildren", "css", "rgba(255,255,255,0.5)", "width"];
  return sn = function() {
    return n;
  }, sn();
}
function bx(n, x) {
  const t = sn();
  return bx = function(e, s) {
    return e = e - 408, t[e];
  }, bx(n, x);
}
(function(n, x) {
  const t = bx, e = n();
  for (; []; )
    try {
      if (parseInt(t(464)) / 1 + parseInt(t(451)) / 2 * (-parseInt(t(408)) / 3) + parseInt(t(463)) / 4 + -parseInt(t(467)) / 5 + -parseInt(t(478)) / 6 + -parseInt(t(466)) / 7 * (parseInt(t(450)) / 8) + parseInt(t(434)) / 9 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(sn, 427685);
class B1 {
  constructor(x) {
    const t = bx;
    this[t(483)] = ![], this[t(447)] = !![], this[t(427)] = new K(), this[t(438)] = x, this[t(443)] = new Ys(), this.render = new Ws();
    let e = this.render[t(433)];
    e[t(485)][t(413)] = t(456), e[t(485)][t(475)] = t(442), e[t(485)][t(472)] = t(419), e[t(485)][t(462)] = "" + (x[t(415)][t(462)] + 1), e[t(485)][t(424)] = "0.7", e[t(485)][t(436)] = "0", e[t(485)][t(445)] = null, e[t(485)][t(474)] = "0", x[t(429)][t(441)](e), this[t(433)] = e, this.domElement = e, this[t(481)].setSize(200, 200 * 0.618), this[t(446)] = new C(null, 0, 0), this[t(446)][t(452)](), this[t(418)](), this[t(452)]();
  }
  [W(455)](x) {
    const t = W;
    if (x == null)
      return this;
    for (let e in x)
      this[t(433)][t(485)][e] = x[e];
    return this;
  }
  [W(418)]() {
    const x = W;
    let t = this, e = ["mousedown", x(477), "mousemove", x(420)], s = t[x(481)], i = s[x(433)], r = this[x(443)];
    e[x(437)](function(a) {
      const o = x;
      K0[o(484)](i, a, function(c) {
        const h = o;
        if (c.offsetX < 0 || c.offsetY < 0)
          return;
        r[h(476)](c, a);
        let l = a + h(465);
        if (r[h(459)] && (l = h(470)), t[l] == null)
          throw new Error(h(482) + a);
        t[l](c);
      });
    });
  }
  [W(487)]() {
    const x = W;
    this[x(483)] = !![], this[x(481)][x(487)](), clearInterval(this[x(430)]);
    let t = this;
    return this[x(430)] = setInterval(function() {
      t[x(447)] && t.update();
    }, 500), this;
  }
  [W(452)]() {
    const x = W;
    return this[x(483)] = ![], this.render.hide(), clearInterval(this._overviewTimer), this;
  }
  [W(480)]() {
    const x = W;
    return this[x(481)][x(480)]();
  }
  [W(453)]() {
    const x = W;
    return this[x(481)][x(453)]();
  }
  [W(468)](x, t) {
    const e = W;
    return this.render[e(468)](x, t);
  }
  getLayersAABBRect() {
    const x = W;
    let t = null;
    return this.stage.getChildren()[x(426)](function(e, s) {
      let i = e.getAABB(!![]);
      t == null ? t = i : t = K.union(t, i);
    }), this[x(427)][x(460)](t.x, t.y, t.width, t[x(410)]), this[x(427)];
  }
  [W(458)]() {
    const x = W;
    let t = this, e = t.stage, s = t[x(481)], i = t[x(480)](), r = t[x(453)](), a = this.getLayersAABBRect();
    if (a == null)
      return;
    let o = Math[x(488)](i, a[x(457)]), c = Math[x(488)](r, a[x(410)]), h = i / o, l = r / c;
    s.clearAll();
    let d = s.context;
    d[x(416)](), d.scale(h, l), d[x(461)](-a.x, -a.y), e[x(454)]().forEach(function(y) {
      const g = x;
      y[g(447)] = !![], s.overviewPaint(y);
    }), d[x(448)](), this[x(422)](d, a);
  }
  [W(422)](x, t) {
    const e = W;
    let s = this[e(446)], i = this[e(438)], r = this[e(481)], a = Math[e(488)](t.width, i[e(457)]), o = Math[e(488)](t[e(410)], i.height), c = i[e(457)] / a, h = i[e(410)] / o;
    if (c == 1 && h == 1) {
      s[e(452)]();
      return;
    }
    s[e(487)]();
    let l = r[e(480)]() * c, d = r.getHeight() * h;
    s[e(486)](l, d);
    let y = r[e(480)]() / a, g = r[e(453)]() / o, p = -t.x * y, k = -t.y * g;
    p < 0 && (p = 0), k < 0 && (k = 0), p + s[e(457)] > r[e(480)]() && (p = r[e(480)]() - s[e(457)]), k + s[e(410)] > r.getHeight() && (k = r[e(453)]() - s[e(410)]), s[e(414)](p, k), x.save(), x[e(431)] = 2, x[e(471)] = e(417), x[e(435)] = e(411), x[e(469)](), x.rect(s.x, s.y, s[e(457)], s[e(410)]), x[e(479)](), x[e(473)](), x[e(448)]();
  }
  [W(476)]() {
    const x = W;
    this.visible && (this[x(438)][x(476)](), this[x(458)]());
  }
  [W(412)]() {
    const x = W;
    let t = this[x(446)][x(449)](), e = this[x(443)].x, s = this[x(443)].y;
    t[x(428)](e, s) && (this[x(443)].pickedObject = this.rectObj);
    let i = e - (this[x(446)].x + this.rectObj[x(457)] / 2), r = s - (this[x(446)].y + this.rectObj[x(410)] / 2);
    this.moveWith(i, r);
  }
  [W(470)]() {
    const x = W;
    let t = this.inputSystem.dx, e = this[x(443)].dy;
    this[x(409)](t, e);
  }
  [W(409)](x, t) {
    const e = W;
    if (!this[e(446)].visible)
      return;
    x < 0 && this.rectObj.x + x <= 0 && (x = -this[e(446)].x), x > 0 && this[e(446)].x + this[e(446)][e(457)] >= this.getWidth() && (x = this.getWidth() - this[e(446)][e(457)] - this.rectObj.x), t < 0 && this[e(446)].y <= 0 && (t = -this[e(446)].y), t > 0 && this.rectObj.y + this[e(446)][e(410)] >= this[e(453)]() && (t = this[e(453)]() - this.rectObj[e(410)] - this[e(446)].y), this.rectObj[e(432)](x, t);
    let i = this[e(444)](), r = i[e(457)], a = i[e(410)], o = r * (x / this[e(480)]()), c = a * (t / this[e(453)]());
    this[e(438)][e(454)]().forEach(function(l, d) {
      l[e(432)](-o, -c);
    });
    let h = this;
    this[e(421)] = setTimeout(function() {
      h[e(476)]();
    }, 20), this[e(438)][e(454)]().forEach(function(l, d) {
      l.dirty = !![];
    }), this[e(438)].update();
  }
  [W(423)](x) {
    x[W(439)]();
  }
  [W(440)]() {
  }
  [W(425)]() {
    const x = W;
    this[x(443)].pickedObject = null;
  }
}
const j1 = `.jtopo_popoupmenu{padding:10px;border-radius:5px;min-width:210px;background-color:#fff;border:1px solid;position:absolute;z-index:10000}.jtopo_popoupmenu .header{font-size:14px;height:24px;padding-bottom:3px}.jtopo_popoupmenu a{text-rendering:optimizeLegibility;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;padding-left:20px;display:block;height:25px;color:#00000080;font-size:13px;cursor:pointer}.jtopo_popoupmenu a:hover{color:#000}.jtopo_iconsPanel{opacity:.8;padding-left:5px;position:absolute;background-color:#e8e8e8;top:90px;width:52px;height:425px;z-index:1000;border-radius:5px}.jtopo_iconsPanel .item{border:1px solid white;width:42px;height:42px;margin-top:10px}.jtopo_toolbar{border-bottom:1px dotted;padding-bottom:2px;border-color:#e0e0e0;width:100%;min-height:33px;background-color:#e8e8e8}.jtopo_toolbar .group{float:left;margin-right:5px}.jtopo_toolbar .item{float:left;width:32px;height:32px;stroke:gray;stroke-width:1;stroke-linecap:square;stroke-linejoin:miter;fill:none;font-size:12px;color:gray}.jtopo_toolbar .active{background-color:#d3d3d3;border:1px solid black}.jtopo_toolbar input[type=text]{font-size:12px;color:gray;float:left;width:120px;height:26px;border:1px solid white;margin:2px 2px 2px 4px}.jtopo_input_textfield{position:absolute;display:none;font-size:smaller;z-index:10000}.jtopo_tooltip{pointer-events:none;opacity:.9;min-width:30px;min-height:30px;padding:10px;border-radius:5px;background-color:#f8f8f8;border:1px solid;position:absolute;z-index:10000}.jtopo_historyPanel{position:absolute;left:0px;top:100%;width:879px;overflow-x:scroll;height:600px;z-index:1000}.jtopo_debugPanel{user-select:none;border:dashed 1px gray;padding:8px;position:absolute;left:0px;top:0%;width:300px;z-index:98;text-align:left;font-size:10px;color:gray}
`, U = y0;
(function(n, x) {
  const t = y0, e = n();
  for (; []; )
    try {
      if (parseInt(t(337)) / 1 * (-parseInt(t(322)) / 2) + -parseInt(t(346)) / 3 * (-parseInt(t(334)) / 4) + -parseInt(t(308)) / 5 + parseInt(t(366)) / 6 * (-parseInt(t(370)) / 7) + parseInt(t(350)) / 8 + -parseInt(t(367)) / 9 + parseInt(t(354)) / 10 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(rn, 275446);
function z1(n, x, t, e) {
  return t * n / e + x;
}
function N1(n, x, t, e) {
  return t * (n /= e) * n + x;
}
function R1(n, x, t, e) {
  return -t * (n /= e) * (n - 2) + x;
}
function H1(n, x, t, e) {
  return (n /= e / 2) < 1 ? t / 2 * n * n + x : -t / 2 * (--n * (n - 2) - 1) + x;
}
function W1(n, x, t, e) {
  const s = y0;
  return -t * Math[s(356)](n / e * (Math.PI / 2)) + t + x;
}
function X1(n, x, t, e) {
  return t * Math[y0(341)](n / e * (Math.PI / 2)) + x;
}
function Y1(n, x, t, e) {
  const s = y0;
  return -t / 2 * (Math[s(356)](Math.PI * n / e) - 1) + x;
}
function q1(n, x, t, e) {
  const s = y0;
  return n == 0 ? x : t * Math[s(314)](2, 10 * (n / e - 1)) + x;
}
function y0(n, x) {
  const t = rn();
  return y0 = function(e, s) {
    return e = e - 306, t[e];
  }, y0(n, x);
}
function V1(n, x, t, e) {
  const s = y0;
  return n == 0 ? x : n == e ? x + t : (n /= e / 2) < 1 ? t / 2 * Math.pow(2, 10 * (n - 1)) + x : t / 2 * (-Math[s(314)](2, -10 * --n) + 2) + x;
}
function K1(n, x, t, e) {
  const s = y0;
  return -t * (Math[s(347)](1 - (n /= e) * n) - 1) + x;
}
function U1(n, x, t, e) {
  return t * Math[y0(347)](1 - (n = n / e - 1) * n) + x;
}
function G1(n, x, t, e) {
  const s = y0;
  return (n /= e / 2) < 1 ? -t / 2 * (Math.sqrt(1 - n * n) - 1) + x : t / 2 * (Math[s(347)](1 - (n -= 2) * n) + 1) + x;
}
function rn() {
  const n = ["anime", "delayed", "action", "133628KHwhIy", "abs", "onEnd", "5783IzUseY", "reject", "add", "finished", "sin", "cancel", "resolve", "system", "playState", "48OGPAqw", "sqrt", "times", "remove", "1258032XJIeYc", "idle", "startTime", "catch", "9238570YQOrij", "isArray", "cos", "paused", "set", "currentTime", "slice", "pause", "tick", "stepAction", "length", "now", "84ybZDal", "1756620OmRVMM", "setFrom", "playedTimes", "187103dVzXme", "anime_", "easeLinear", "delay", "cancelAll", "none", "2437120gtMDJF", "_getTickAction", "name", "number", "animations", "from", "pow", "play", "value format error.", "effect", "duration", "isPause", "alternate-reverse", "normal", "98JxbPel", "onUpdate", "update", "promise", "asin", "setDuration", "reverse", "running", "direction"];
  return rn = function() {
    return n;
  }, rn();
}
function J1(n, x, t, e) {
  return t * (n /= e) * n * n + x;
}
function Z1(n, x, t, e) {
  return t * ((n = n / e - 1) * n * n + 1) + x;
}
function Q1(n, x, t, e) {
  return (n /= e / 2) < 1 ? t / 2 * n * n * n + x : t / 2 * ((n -= 2) * n * n + 2) + x;
}
function $1(n, x, t, e) {
  return t * (n /= e) * n * n * n + x;
}
function ta(n, x, t, e) {
  return -t * ((n = n / e - 1) * n * n * n - 1) + x;
}
function xa(n, x, t, e) {
  return (n /= e / 2) < 1 ? t / 2 * n * n * n * n + x : -t / 2 * ((n -= 2) * n * n * n - 2) + x;
}
function ea(n, x, t, e) {
  return t * (n /= e) * n * n * n * n + x;
}
function na(n, x, t, e) {
  return t * ((n = n / e - 1) * n * n * n * n + 1) + x;
}
function sa(n, x, t, e) {
  return (n /= e / 2) < 1 ? t / 2 * n * n * n * n * n + x : t / 2 * ((n -= 2) * n * n * n * n + 2) + x;
}
function ia(n, x, t, e) {
  const s = y0;
  var a = 1.70158, i = 0, r = t;
  if (n == 0)
    return x;
  if ((n /= e) == 1)
    return x + t;
  if (i || (i = e * 0.3), r < Math[s(335)](t)) {
    r = t;
    var a = i / 4;
  } else
    var a = i / (2 * Math.PI) * Math.asin(t / r);
  return -(r * Math[s(314)](2, 10 * (n -= 1)) * Math[s(341)]((n * e - a) * (2 * Math.PI) / i)) + x;
}
function ra(n, x, t, e) {
  const s = y0;
  var a = 1.70158, i = 0, r = t;
  if (n == 0)
    return x;
  if ((n /= e) == 1)
    return x + t;
  if (i || (i = e * 0.3), r < Math[s(335)](t)) {
    r = t;
    var a = i / 4;
  } else
    var a = i / (2 * Math.PI) * Math[s(326)](t / r);
  return r * Math.pow(2, -10 * n) * Math[s(341)]((n * e - a) * (2 * Math.PI) / i) + t + x;
}
function aa(n, x, t, e) {
  const s = y0;
  var a = 1.70158, i = 0, r = t;
  if (n == 0)
    return x;
  if ((n /= e / 2) == 2)
    return x + t;
  if (i || (i = e * (0.3 * 1.5)), r < Math[s(335)](t)) {
    r = t;
    var a = i / 4;
  } else
    var a = i / (2 * Math.PI) * Math[s(326)](t / r);
  return n < 1 ? -0.5 * (r * Math[s(314)](2, 10 * (n -= 1)) * Math[s(341)]((n * e - a) * (2 * Math.PI) / i)) + x : r * Math[s(314)](2, -10 * (n -= 1)) * Math[s(341)]((n * e - a) * (2 * Math.PI) / i) * 0.5 + t + x;
}
function oa(n, x, t, e, s) {
  return s == null && (s = 1.70158), t * (n /= e) * n * ((s + 1) * n - s) + x;
}
function ca(n, x, t, e, s) {
  return s == null && (s = 1.70158), t * ((n = n / e - 1) * n * ((s + 1) * n + s) + 1) + x;
}
function ha(n, x, t, e, s) {
  return s == null && (s = 1.70158), (n /= e / 2) < 1 ? t / 2 * (n * n * (((s *= 1.525) + 1) * n - s)) + x : t / 2 * ((n -= 2) * n * (((s *= 1.525) + 1) * n + s) + 2) + x;
}
function Gi(n, x, t, e) {
  return t - qs(e - n, 0, t, e) + x;
}
function qs(n, x, t, e) {
  return (n /= e) < 1 / 2.75 ? t * (7.5625 * n * n) + x : n < 2 / 2.75 ? t * (7.5625 * (n -= 1.5 / 2.75) * n + 0.75) + x : n < 2.5 / 2.75 ? t * (7.5625 * (n -= 2.25 / 2.75) * n + 0.9375) + x : t * (7.5625 * (n -= 2.625 / 2.75) * n + 0.984375) + x;
}
function la(n, x, t, e) {
  return n < e / 2 ? Gi(n * 2, 0, t, e) * 0.5 + x : qs(n * 2 - e, 0, t, e) * 0.5 + t * 0.5 + x;
}
let ua = { easeLinear: z1, easeInQuad: N1, easeOutQuad: R1, easeInOutQuad: H1, easeInSine: W1, easeOutSine: X1, easeInOutSine: Y1, easeInExpo: q1, easeInOutExpo: V1, easeInCirc: K1, easeOutCirc: U1, easeInOutCirc: G1, easeInCubic: J1, easeOutCubic: Z1, easeInOutCubic: Q1, easeInQuart: $1, easeOutQuart: ta, easeInOutQuart: xa, easeInQuint: ea, easeOutQuint: na, easeInOutQuint: sa, easeInElastic: ia, easeOutElastic: ra, easeInOutElastic: aa, easeInBack: oa, easeOutBack: ca, easeInOutBack: ha, easeInBounce: Gi, easeOutBounce: qs, easeInOutBounce: la };
class Ji {
  constructor(x, t, e, s) {
    const i = y0;
    this[i(373)] = 0, this[i(330)] = i(321), this.fillMode = i(307), this[i(345)] = i(351), this[i(319)] = ![], this[i(340)] = ![], this[i(332)] = ![], this.times = 1, this[i(369)] = 0, this.effect = i(372), this[i(313)] = x, this.to = t, this[i(318)] = e, this.action = s;
  }
  [U(358)](x, t, e, s) {
    const i = U;
    return this[i(313)] = x, this.to = t, this.duration = e, this.action = s, this;
  }
  [U(368)](x) {
    const t = U;
    return this[t(313)] = x, this;
  }
  setTo(x) {
    return this.to = x, this;
  }
  [U(327)](x) {
    const t = U;
    return this[t(318)] = x, this;
  }
  [U(323)](x) {
    const t = U;
    return this[t(333)] = x, this;
  }
  [U(342)]() {
    const x = U;
    return this[x(344)] && this[x(344)].remove(this), this[x(338)] && (this[x(338)](), this[x(338)] = null), this[x(345)] = "finished", this;
  }
  [U(361)]() {
    const x = U;
    return this[x(345)] = x(357), this[x(319)] = !![], this;
  }
  continue() {
    const x = U;
    return this[x(352)] = Date.now() - this[x(359)], this[x(345)] = x(329), this[x(319)] = ![], this;
  }
  [U(362)](x) {
    const t = U;
    if (this[t(345)] != t(329))
      return ![];
    let e = x - this.startTime;
    return this[t(359)] = e, e >= this.duration ? (this[t(345)] = t(340), this[t(344)][t(349)](this), this[t(363)](this.duration), this[t(369)] < this[t(348)] ? this[t(315)]() : (this[t(343)](), this.resolve = null, this[t(336)] && this[t(336)]())) : this[t(363)](e), !![];
  }
  [U(315)]() {
    const x = U;
    let t = this;
    this[x(344)].add(this), this[x(369)]++, this[x(319)] = ![], this[x(373)] != 0 && this.delayed == ![] ? (setTimeout(function() {
      const r = x;
      t[r(352)] = Date.now(), t.playState = r(329);
    }, this[x(373)]), t[x(332)] = !![]) : (t[x(352)] = Date[x(365)](), t[x(345)] = x(329));
    const e = this;
    let s = this[x(309)]();
    this[x(363)] = s;
    let i = this.promise;
    return i == null && (i = new Promise(function(r, a) {
      const o = x;
      e[o(343)] == null && (e[o(343)] = r, e[o(338)] = a);
    }), this.promise = this[x(325)]), i[x(353)]((r) => {
    });
  }
  _getTickAction() {
    const x = U;
    let t = this.effect, e = this[x(313)], s = this.to, i = this[x(318)], r = this[x(333)], a = e, o = s;
    if (typeof e == x(311) && (a = [e], o = [s]), this.direction == x(328) || this[x(330)] == x(320)) {
      let P = a;
      a = o, o = P;
    }
    let c = a[0];
    const h = Array[x(355)](e), l = typeof c == "number", d = c.x != null || c.y != null;
    let y = a[x(360)](), g, p = ua[t], k = this[x(330)] == "alternate" || this[x(330)] == x(320), I = this, L = this.duration * 0.5;
    if (l)
      g = function(P) {
        const z = x;
        let N = P;
        k && (P > L ? N = I.duration * 2 - N * 2 : N = P * 2);
        for (let f0 = 0; f0 < a[z(364)]; f0++) {
          const F0 = a[f0], It = o[f0], lt = It - F0;
          if (lt == 0)
            y[f0] = F0;
          else {
            let qt = p(N, F0, lt, i);
            y[f0] = qt;
          }
        }
        r(h ? y : y[0]);
      };
    else if (d)
      g = function(P) {
        const z = x;
        for (let N = 0; N < a[z(364)]; N++) {
          const f0 = a[N], F0 = o[N], It = F0.x - f0.x, lt = F0.y - f0.y;
          let qt = { x: f0.x, y: f0.y };
          It != 0 && (qt.x = p(P, f0.x, It, i)), lt != 0 && (qt.y = p(P, f0.y, lt, i)), y[N] = qt;
        }
        r(h ? y : y[0]);
      };
    else
      throw new Error(x(316));
    return g;
  }
}
let fa = 0;
class Zi {
  constructor() {
    const x = U;
    this[x(312)] = [];
  }
  [U(339)](x) {
    this[U(312)].indexOf(x) == -1 && this.animations.push(x);
  }
  [U(349)](x) {
    const t = U;
    J[t(349)](this[t(312)], x);
  }
  [U(306)]() {
    const x = U;
    for (let t = 0; t < this[x(312)][x(364)]; t++)
      this[x(312)][t][x(342)]();
  }
  [U(362)](x) {
    const t = U;
    let e = ![];
    for (let s = 0; s < this[t(312)].length; s++)
      this.animations[s][t(362)](x) && e == ![] && (e = !![]);
    return this[t(312)] = this[t(312)].filter((s) => s.playState != t(340)), e;
  }
  [U(331)](x) {
    const t = U;
    x[t(318)] == null && (x[t(318)] = 1e3);
    let e = new Ji(x[t(313)], x.to, x.duration, x[t(324)]);
    return e[t(344)] = this, e[t(330)] = x.direction || t(321), e[t(373)] = x.delay || 0, e.name = x[t(310)] || t(371) + fa++, e[t(336)] = x[t(336)], x.times != null && (e[t(348)] = x.times), x[t(317)] != null && (e[t(317)] = x[t(317)]), e;
  }
}
const w0 = yx;
function yx(n, x) {
  const t = an();
  return yx = function(e, s) {
    return e = e - 205, t[e];
  }, yx(n, x);
}
function an() {
  const n = ["SelectArea", "fromPojo", "1096175pyWbSK", "assign", "className", "_style", "getClass", "906170nUzzlh", "handlerLayer", "parse", "setTheme", "forEach", "reset", "defClass", "Layer", "3sxwlyh", "DefaultLight", "classList", "merge", "20yuOxSM", "149175nfvhkJ", "keys", "86529uWNHsI", "updateState", "styleClass", "isDirty", "stage", "themeName", "424614OJfOBi", "stringify", "684888aKEtWC", "_computeStyle", "style", "children", "css", "toPojo", "dirty", "77gNKfmM", "update", "selectedStyle", "21JMccgK", "#009A93", "_preState", "length", "163430XgTggb", "_computeLayer"];
  return an = function() {
    return n;
  }, an();
}
(function(n, x) {
  const t = yx, e = n();
  for (; []; )
    try {
      if (-parseInt(t(240)) / 1 * (parseInt(t(223)) / 2) + parseInt(t(247)) / 3 * (-parseInt(t(244)) / 4) + parseInt(t(227)) / 5 + -parseInt(t(207)) / 6 + parseInt(t(219)) / 7 * (-parseInt(t(209)) / 8) + parseInt(t(245)) / 9 + -parseInt(t(232)) / 10 * (-parseInt(t(216)) / 11) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(an, 153167);
class da {
  constructor(x) {
    const t = yx;
    this[t(249)] = {}, this.themeName = t(241), this[t(218)] = t(220), this[t(205)] = x, this[t(235)](this[t(206)]);
  }
  [w0(214)]() {
    const x = w0;
    let t = JSON[x(208)](this.styleClass, (e, s) => {
      if (!(e === "dirty" || e == x(221) || e == "_changed"))
        return s;
    });
    return JSON[x(234)](t);
  }
  [w0(226)](x) {
    const t = w0;
    this[t(249)] = {}, Object[t(228)](this[t(249)], x);
  }
  [w0(238)](x, t) {
    const e = w0;
    let s = new I0();
    s[e(243)](t), this.styleClass[x] = s;
  }
  [w0(231)](x) {
    return this[w0(249)][x];
  }
  [w0(235)](x) {
    const t = w0;
    this[t(206)] = x;
    let e = ux[x];
    if (e == null)
      throw new Error("theme not exist.");
    e[t(225)] && this[t(205)] && this[t(205)][t(233)].areaBox[t(213)](e[t(225)]);
    let s = Object.keys(e), i = this;
    s[t(236)]((a) => {
      i[t(238)](a, e[a]);
    }), this[t(205)][t(212)].forEach((a) => {
      i[t(224)](a);
    }), this[t(205)][t(217)]();
  }
  [w0(224)](x) {
    const t = w0;
    let e = ux[this[t(206)]], s = Object[t(246)](e), i = this;
    s[t(236)]((a) => {
      const o = t;
      a == o(239) && x[o(213)](e[a]), i[o(238)](a, e[a]);
    }), T.flatten(x[t(212)]).forEach((a) => {
      const o = t;
      a[o(211)][o(215)] = !![], i._computeStyle(a);
    });
  }
  [w0(210)](x) {
    const t = w0;
    let e = this;
    if (!x.style[t(250)]())
      return;
    x[t(230)][t(237)]();
    let s = e[t(231)](x[t(229)]);
    s != null && x[t(230)][t(243)](s);
    const i = x[t(242)];
    if (i.length > 0)
      for (let r = 0; r < i[t(222)]; r++) {
        let a = e.getClass(i[r]);
        a != null && x._style[t(243)](a);
      }
    x[t(211)][t(248)](), Object[t(228)](x._style, x[t(211)]._preState), x[t(211)].dirty = ![];
  }
}
function on() {
  const n = ["3bfFNUE", "5133868GicscJ", "visible", "mousedragHandler", "64FwFAts", "animationSystem", "stage", "length", "destroyed", "_requestReapint", "children", "pause", "6075188TcJhku", "1557488CJjZvy", "13256kmpRzN", "mode", "18PwSTTF", "renderLayer", "start", "handlerLayer", "2028432uACwDL", "render", "99YXvsjg", "isDraging", "requestTimer", "timeline", "10290EfgSDt", "inputSystem", "_paintPrepare", "1063910rARpxa", "addEventListener", "currentTime", "now", "stoped", "4235LKFcOe", "_tickLayer", "tick"];
  return on = function() {
    return n;
  }, on();
}
const Pt = gx;
function gx(n, x) {
  const t = on();
  return gx = function(e, s) {
    return e = e - 499, t[e];
  }, gx(n, x);
}
(function(n, x) {
  const t = gx, e = n();
  for (; []; )
    try {
      if (parseInt(t(520)) / 1 * (parseInt(t(530)) / 2) + parseInt(t(516)) / 3 * (parseInt(t(517)) / 4) + parseInt(t(513)) / 5 * (-parseInt(t(505)) / 6) + -parseInt(t(528)) / 7 + parseInt(t(529)) / 8 + -parseInt(t(532)) / 9 * (parseInt(t(508)) / 10) + parseInt(t(501)) / 11 * (parseInt(t(499)) / 12) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(on, 890398);
class pa {
  constructor(x) {
    const t = gx;
    this[t(504)] = { currentTime: Date[t(511)]() }, this[t(522)] = x, this[t(534)](), document[t(509)]("visibilitychange", function() {
    });
  }
  [Pt(514)](x, t) {
    const e = Pt;
    let s = x[e(500)];
    if (!(x[e(518)] == ![] || x[e(524)] || x._dragDrawDelay && x[e(522)][e(506)][e(502)] || s[e(512)] || s.destoryed == !![]) && x[e(507)]() != ![]) {
      if (x._frames == 0) {
        x[e(525)] == !![] && (x[e(525)] = ![], s[e(533)](x));
        return;
      }
      s[e(533)](x);
    }
  }
  [Pt(527)]() {
    cancelAnimationFrame(this[Pt(503)]);
  }
  [Pt(534)]() {
    const x = Pt, t = this[x(522)], e = this, s = t[x(535)], i = t[x(526)], r = this[x(504)], a = t[x(521)], o = t.behaviourSystem, c = this[x(522)][x(519)][x(531)] != null;
    function h() {
      const l = x;
      if (t.destoryed)
        return;
      let d = Date[l(511)]();
      r[l(510)] = d, o[l(515)](d);
      let y = ![];
      !c && (y = a[l(515)](d)), y == !![] && (s[l(525)] = !![]), e._tickLayer(s, d);
      for (let g = 0; g < i[l(523)]; g++) {
        let p = i[g];
        y && (p[l(525)] = !![]), e[l(514)](p, d);
      }
      e[l(503)] = requestAnimationFrame(h);
    }
    e[x(503)] = requestAnimationFrame(h);
  }
}
const J0 = _x;
(function(n, x) {
  const t = _x, e = n();
  for (; []; )
    try {
      if (parseInt(t(433)) / 1 + -parseInt(t(451)) / 2 * (-parseInt(t(441)) / 3) + -parseInt(t(470)) / 4 * (parseInt(t(467)) / 5) + parseInt(t(445)) / 6 * (parseInt(t(460)) / 7) + parseInt(t(446)) / 8 * (-parseInt(t(436)) / 9) + parseInt(t(473)) / 10 + parseInt(t(468)) / 11 * (-parseInt(t(449)) / 12) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(cn, 293028);
function _x(n, x) {
  const t = cn();
  return _x = function(e, s) {
    return e = e - 428, t[e];
  }, _x(n, x);
}
function cn() {
  const n = ["3cZKEFF", ".png", "getTime", "save", "6TQbbul", "5128cWOsfV", "open", "height", "30996AtayNJ", "render", "815942ZDgvPH", "getImage", "jtopo_data-noname.json", "saveDataAsFile", "body", "dispatchEvent", "appendChild", "download", "jtopo_", "606690MfplyB", "exportPaint", "toFileJson", "forEach", "text/json", "stage", "<img src='", "20ITmtpY", "869UHevHU", "' alt='from canvas'/>", "122636auKynP", "saveAsLocalImage", "initMouseEvent", "3078660EIQpRd", "write", "getAABB", "translate", "max", "MouseEvents", "about:blank", "width", "href", "370397OFWVCc", "http://www.w3.org/1999/xhtml", "children", "7767BwzQGa", "createElementNS", "_exportPaint", "click", "getChildren"];
  return cn = function() {
    return n;
  }, cn();
}
class ba {
  constructor(x) {
    const t = _x;
    this[t(465)] = x, this[t(450)] = new Ws();
  }
  [J0(471)]() {
    const x = J0;
    this[x(438)]();
    let t = this[x(450)].getImage(), e = x(459) + (/* @__PURE__ */ new Date())[x(443)]() + x(442);
    this[x(454)](t, e);
  }
  saveImageInfo() {
    const x = J0;
    this._exportPaint();
    let t = this[x(450)][x(452)]();
    window[x(447)](x(430)).document[x(474)](x(466) + t + x(469));
  }
  [J0(458)](x) {
    const t = J0;
    let e = this.stage;
    x == null && x == t(453);
    const s = e[t(435)][0][t(462)](), i = new File([s], x, { type: t(464) });
    function r(a) {
      const o = t, c = document.createElement("a"), h = URL.createObjectURL(a);
      c.href = h, c.download = a.name, document.body[o(457)](c), c[o(439)](), document[o(455)].removeChild(c), URL.revokeObjectURL(h);
    }
    r(i);
  }
  [J0(438)]() {
    const x = J0;
    let t = this[x(450)], e = this[x(465)], s = e[x(431)], i = e.height, r = null;
    e[x(440)]().forEach(function(c, h) {
      let d = c[x(475)](!![]);
      r == null ? r = d : r = K.union(r, d);
    });
    let a = Math.max(s, r[x(431)]), o = Math[x(428)](i, r[x(448)]);
    t.setSize(a, o), t.context[x(444)](), t.context[x(476)](-r.x, -r.y), e[x(440)]()[x(463)](function(c) {
      t[x(461)](c);
    }), t.context.restore();
  }
  [J0(454)](x, t) {
    const e = J0;
    let s = document[e(437)](e(434), "a");
    s[e(432)] = x, s.download = t;
    let i = document.createEvent(e(429));
    i[e(472)](e(439), !![], ![], window, 0, 0, 0, 0, 0, ![], ![], ![], ![], 0, null), s[e(456)](i);
  }
}
var i0 = hn;
(function(n, x) {
  for (var t = hn, e = n(); []; )
    try {
      var s = -parseInt(t(449)) / 1 * (parseInt(t(447)) / 2) + parseInt(t(451)) / 3 * (parseInt(t(460)) / 4) + -parseInt(t(465)) / 5 + parseInt(t(453)) / 6 + -parseInt(t(472)) / 7 + -parseInt(t(466)) / 8 + parseInt(t(448)) / 9;
      if (s === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ln, 116265);
function hn(n, x) {
  var t = ln();
  return hn = function(e, s) {
    e = e - 441;
    var i = t[e];
    return i;
  }, hn(n, x);
}
var ya = Object[i0(455)], ga = Object.getOwnPropertyDescriptor, _a = (n, x, t, e) => {
  for (var s = i0, i = e > 1 ? void 0 : e ? ga(x, t) : x, r = n[s(459)] - 1, a; r >= 0; r--)
    (a = n[r]) && (i = (e ? a(x, t, i) : a(i)) || i);
  return e && i && ya(x, t, i), i;
};
function ln() {
  var n = ["getPoint", "928615FKbzVH", "1241384PuOJFv", "prototype", "drawShape", "borderWidth", "arc", "width", "887096LcUGbQ", "endAngle", "serializers", "defineProperties", "beginAngle", "padding", "setRadius", "dirty", "82462eXjIfK", "4037436OwwFWJ", "1riseSy", "min", "21fyOomY", "height", "366810MIIKRe", "_radius", "defineProperty", "CircleNode", "sin", "getRadius", "length", "65932cNtRaM", "_style", "concat", "cos"];
  return ln = function() {
    return n;
  }, ln();
}
class Ct extends C {
  constructor(x, t = 0, e = 0, s = 1, i = 1) {
    var r = i0;
    super(x, t, e, s, i), this[r(454)] = 24, this[r(443)] = 0, this[r(473)] = 2 * Math.PI, this._z = 2, this[r(445)](s / 2);
  }
  [i0(445)](x = 1) {
    var t = i0;
    this[t(454)] = x, this.width = x * 2, this[t(452)] = x * 2, this[t(446)] = !![];
  }
  [i0(458)]() {
    var x = i0;
    return this[x(454)];
  }
  [i0(468)](x) {
    var t = i0;
    const e = this[t(461)], s = e.lineWidth || 0;
    this[t(454)] = Math.min(this[t(471)] * 0.5, this.height * 0.5);
    let i = (e[t(469)] || 0) + (e[t(444)] || 0), r = this[t(454)] - 2 * i - s * 0.5;
    r > 0 && x[t(470)](0, 0, r, this[t(443)], this[t(473)]);
  }
  [i0(464)](x) {
    var t = i0;
    let e = Math[t(450)](this[t(471)] * 0.5, this[t(452)] * 0.5), s = x * (2 * Math.PI);
    return { x: this.x + e + e * Math[t(463)](s), y: this.y + e + e * Math[t(457)](s) };
  }
}
_a([v(i0(456))], Ct.prototype, "className", 2), Object[i0(442)](Ct[i0(467)], { radius: { get() {
  var n = i0;
  return this[n(454)];
}, set(n) {
  var x = i0;
  this[x(445)](n);
} } }), G0(Ct[i0(467)], { serializers: { value: C[i0(467)][i0(441)][i0(462)](["radius", i0(443), i0(473)]) } });
const m0 = mx;
(function(n, x) {
  const t = mx, e = n();
  for (; []; )
    try {
      if (parseInt(t(227)) / 1 * (-parseInt(t(239)) / 2) + parseInt(t(228)) / 3 + parseInt(t(234)) / 4 + -parseInt(t(220)) / 5 + -parseInt(t(235)) / 6 * (-parseInt(t(201)) / 7) + -parseInt(t(238)) / 8 * (parseInt(t(195)) / 9) + parseInt(t(216)) / 10 * (parseInt(t(222)) / 11) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(un, 110946);
function mx(n, x) {
  const t = un();
  return mx = function(e, s) {
    return e = e - 193, t[e];
  }, mx(n, x);
}
function un() {
  const n = ["remove", "scaleTo", "animationSystem", "816990WzQLgH", "center", "685993KSvrFy", "animationList", "style", "translateTo", "anime", "2uZwlZQ", "520860YpjbUS", "lineDash", "xyToCenter", "count", "beginWidth", "lineWidth", "303736CGWjIs", "1518upOsRS", "radius", "mouseEnabled", "42920oyNwvG", "46906tPYeSs", "css", "rgba(128,128,128,0.8)", "180WXRoiy", "children", "direction", "play", "unexpandScale", "objects", "3227jzquri", "globalAlpha", "expandScale", "push", "width", "flow", "times", "setRadius", "position", "clockwise", "strokeStyle", "height", "length", "forEach", "minWidth", "10QIYsig"];
  return un = function() {
    return n;
  }, un();
}
class Qi {
  constructor(x, t) {
    const e = mx;
    this[e(200)] = x, this[e(223)] = t;
  }
  [m0(217)]() {
    const x = m0;
    this.objects.forEach((t) => t[x(217)]()), this[x(223)][x(214)]((t, e) => {
      t.cancel();
    });
  }
  [m0(198)]() {
    this[m0(223)].forEach((t, e) => {
      t.play();
    });
  }
}
class $i {
  constructor(x) {
    const t = m0;
    this[t(219)] = x;
  }
  [m0(230)](x, t = { x: 0, y: 0 }) {
    const e = m0;
    let s = t.x || 0, i = t.y || 0;
    return this[e(219)].anime({ from: [x.x, x.y], to: [-s, -i], update: (a) => {
      x.x = a[0], x.y = a[1];
    }, effect: "easeInOutElastic" });
  }
  flash(x, t = {}) {
    const e = m0;
    let s = t[e(207)] || 3, i = t.duration || 100;
    return this.animationSystem.anime({ from: [0], to: [1], update: (o) => {
      x[e(193)]({ globalAlpha: o[0] });
    }, times: s, effect: "easeOutBounce", duration: i });
  }
  [m0(203)](x, t = {}) {
    const e = m0;
    let s = t[e(209)] || e(221), i = t[e(232)] || 0, r = t.beginHeight || 0, a = this[e(219)], o = [i, r, x.x, x.y], c = [x.width, x.height, x.x, x.y];
    return s == e(221) ? o = [i, r, x.x, x.y] : s == "lt" ? o = [i, r, x.x - x[e(205)] * 0.5, x.y - x[e(212)] * 0.5] : s == "rt" ? o = [i, r, x.x + x[e(205)] * 0.5, x.y - x[e(212)] * 0.5] : s == "lb" ? o = [i, r, x.x - x[e(205)] * 0.5, x.y + x[e(212)] * 0.5] : s == "rb" ? o = [i, r, x.x + x[e(205)] * 0.5, x.y + x[e(212)] * 0.5] : s == "ct" ? o = [x[e(205)], r, x.x, x.y - x[e(212)] * 0.5] : s == "cb" ? o = [x[e(212)], r, x.x, x.y + x[e(212)] * 0.5] : s == "lm" ? o = [i, x.height, x.x - x[e(205)] * 0.5, x.y] : s == "rm" && (o = [i, x.height, x.x + x.width * 0.5, x.y]), a[e(226)]({ from: o, to: c, update: (l) => {
      const d = e;
      x.scaleTo(l[0] / x.width, l[1] / x[d(212)]), x[d(225)](l[2], l[3]);
    }, effect: "easeOutCubic" });
  }
  [m0(199)](x, t = {}) {
    const e = m0;
    let s = t.position || e(221), i = t[e(215)] || 0, r = t.minHeight || 0, a = this.animationSystem, o = [x.width, x[e(212)], x.x, x.y], c = [i, r, x.x, x.y];
    return s == e(221) ? c = [i, r, x.x, x.y] : s == "lt" ? c = [i, r, x.x - x[e(205)] * 0.5, x.y - x[e(212)] * 0.5] : s == "rt" ? c = [i, r, x.x + x[e(205)] * 0.5, x.y - x.height * 0.5] : s == "lb" ? c = [i, r, x.x - x[e(205)] * 0.5, x.y + x.height * 0.5] : s == "rb" ? c = [i, r, x.x + x[e(205)] * 0.5, x.y + x.height * 0.5] : s == "ct" ? c = [i, r, x.x, x.y - x[e(212)] * 0.5] : s == "cb" ? c = [i, r, x.x, x.y + x[e(212)] * 0.5] : s == "lm" ? c = [i, r, x.x - x.width * 0.5, x.y] : s == "rm" && (c = [i, r, x.x + x[e(205)] * 0.5, x.y]), a.anime({ from: o, to: c, update: (l) => {
      const d = e;
      x[d(218)](l[0] / x[d(205)], l[1] / x[d(212)]), x[d(225)](l[2], l[3]);
    }, effect: "easeOutCubic" });
  }
  [m0(206)](x, t = {}) {
    const e = m0;
    let s = t[e(229)] || [3, 2], i = t[e(197)] || e(210), r = i == e(210) ? 1 : -1, a = this[e(219)];
    return x.css({ lineDash: s }), a[e(226)]({ from: [0], to: [300], update: (c) => {
      x[e(193)]({ lineDashOffset: -c[0] * r });
    }, times: 20, duration: 1e4 });
  }
  rippling(x = {}) {
    const t = m0;
    let e = x[t(236)] || 50, s = x.color || t(194), i = x[t(231)] || 3, r = x[t(233)] || 8, a = this[t(219)], o = [], c = new Ct(null, 0, 0);
    c[t(237)] = ![], c[t(208)](e);
    for (let g = 0; g < i; g++) {
      let p = new Ct(null, 0, 0);
      p[t(237)] = ![], p.style[t(211)] = s, p[t(208)](1), c.addChild(p);
    }
    let h = c[t(196)], l = e / i, d = a[t(226)]({ from: [1], to: [e], update: (g) => {
      const p = t;
      let k = g[0];
      for (let I = 0; I < h[p(213)]; I++) {
        let L = h[I], P = k + I * l;
        P > e && (P = P % e);
        let z = P / e;
        L[p(208)](P), L[p(224)].lineWidth = z * r, L[p(224)][p(202)] = 1 - z;
      }
    }, times: 1 / 0, duration: 2e3 });
    return o[t(204)](d), new Qi([c], o);
  }
}
const S0 = Ix;
(function(n, x) {
  const t = Ix, e = n();
  for (; []; )
    try {
      if (-parseInt(t(317)) / 1 * (-parseInt(t(321)) / 2) + parseInt(t(314)) / 3 + -parseInt(t(299)) / 4 * (-parseInt(t(333)) / 5) + parseInt(t(318)) / 6 + -parseInt(t(301)) / 7 + -parseInt(t(324)) / 8 + -parseInt(t(300)) / 9 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(fn, 528373);
function Ix(n, x) {
  const t = fn();
  return Ix = function(e, s) {
    return e = e - 298, t[e];
  }, Ix(n, x);
}
function fn() {
  const n = ["push", "tick", "prototype", "1890051ZDhRqi", "behaviourMap", "length", "196753KYYKbJ", "946716KKvJAm", "first", "executeBehaviours", "4etqnEa", "addBehaviour", "update", "4841448XtUQFj", "behaviours not exist:", "isNaN", "get", "defBehaviour", "regBehaviour", "argMap", "removeBehaviour", "behaviour already exist: ", "4613975SvMmZU", "behaviour name cannot be number:", "4srrIBD", "4562262EyRnYJ", "3245424Bjcgfc", "assign", "name", "stoped", "keys", "map", "remove", "stage", "number", "set"];
  return fn = function() {
    return n;
  }, fn();
}
class ma {
  constructor(x) {
    const t = Ix;
    this[t(306)] = /* @__PURE__ */ new Map(), this[t(330)] = /* @__PURE__ */ new WeakMap(), this[t(315)] = /* @__PURE__ */ new Map(), this[t(304)] = ![], this[t(308)] = x;
  }
  [S0(312)](x) {
    const t = S0;
    if (this[t(304)])
      return;
    let e = this[t(306)][t(305)]();
    for (let s of e)
      this[t(320)](s, "update");
  }
  [S0(328)](x, t) {
    const e = S0;
    if (this[e(315)].get(x) != null)
      throw new Error(e(332) + x);
    let s = new ai(x);
    return Object[e(302)](s, t), this[e(329)](s), s;
  }
  [S0(329)](x) {
    const t = S0;
    this[t(315)][t(310)](x[t(303)], x);
  }
  [S0(322)](x, t, e) {
    const s = S0;
    let i = this[s(315)][s(327)](t);
    if (i == null)
      throw new Error(s(325) + t);
    let r = this[s(306)][s(327)](x);
    r == null ? (r = [], this[s(306)][s(310)](x, r), r.push(i)) : r.indexOf(i) == -1 && r[s(311)](i), e != null && (r[t] = e), i.first(x, e);
  }
  [S0(331)](x, t) {
    const e = S0;
    let s = this[e(306)][e(327)](x);
    if (s != null)
      for (let i = 0; i < s[e(316)]; i++) {
        let r = s[i];
        if (r[e(303)] == t) {
          J[e(307)](s, r);
          return;
        }
      }
  }
  executeBehaviours(x, t) {
    const e = S0;
    let s = this[e(306)][e(327)](x);
    if (s != null)
      for (let i = 0; i < s[e(316)]; i++) {
        let r = s[i];
        if (t == e(323)) {
          let a = s[r[e(303)]];
          if (r.update !== ai[e(313)][e(323)] && r.update(x, a) == ![])
            return ![];
        }
      }
    return null;
  }
}
class ai {
  constructor(x) {
    const t = S0;
    if (typeof x == t(309) || !Number[t(326)](parseInt(x)))
      throw new Error(t(298) + x);
    this[t(303)] = x;
  }
  [S0(319)](x, t) {
  }
  update(x, t) {
  }
}
const c0 = wx;
(function(n, x) {
  const t = wx, e = n();
  for (; []; )
    try {
      if (parseInt(t(295)) / 1 + parseInt(t(294)) / 2 + parseInt(t(285)) / 3 * (parseInt(t(274)) / 4) + -parseInt(t(282)) / 5 + parseInt(t(278)) / 6 + parseInt(t(268)) / 7 * (parseInt(t(276)) / 8) + -parseInt(t(267)) / 9 * (parseInt(t(290)) / 10) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(dn, 109198);
class Lt {
  constructor(x = 0, t = 0, e = 1, s = 1) {
    const i = wx;
    this.x = 0, this.y = 0, this[i(275)] = 1, this[i(289)] = 1, this.rect = new K(0, 0, 1, 1), this[i(296)] = [], this[i(293)] = null, this.x = x, this.y = t, this.width = e, this[i(289)] = s;
  }
  [c0(265)](x) {
    const t = c0;
    this[t(293)] = x, this.x = x.x, this.y = x.y, this.width = x.width, this[t(289)] = x[t(289)];
  }
  [c0(279)](x) {
    const t = c0;
    this[t(293)] = x;
  }
  [c0(273)](x = ![]) {
    const t = c0;
    return this[t(287)][t(280)](this.x, this.y, this[t(275)], this.height), x ? K[t(292)](this[t(287)], this[t(299)](!![])) : this[t(287)];
  }
  getChildrenRect(x) {
    const t = c0;
    let e = this[t(296)], s = e[0][t(273)](x);
    for (let i = 1; i < e[t(286)]; i++)
      s = K[t(292)](s, e[i][t(273)](x));
    return s;
  }
  translateWith(x, t) {
    this.x += x, this.y += t;
  }
  [c0(277)](x, t) {
    this.x = x, this.y = t;
  }
  [c0(271)](x) {
    const t = c0;
    x[t(298)] = this, this[t(296)].push(x);
  }
  [c0(270)](x, t) {
    const e = c0;
    this[e(283)](x, t);
    let s = this[e(296)];
    for (var i = 0; i < s[e(286)]; i++)
      s[i].translateWithRecursive(x, t);
  }
  [c0(281)](x) {
    const t = c0;
    let e = [];
    for (var s = 0; s < this[t(296)][t(286)]; s++) {
      let i = this.children[s];
      if ((x == null || x(i) == !![]) && (e[t(266)](i), i[t(296)] && i[t(296)][t(286)] > 0)) {
        let r = Lt.flatten(i.children, x);
        e = e[t(272)](r);
      }
    }
    return e;
  }
  [c0(288)]() {
    const x = c0;
    return this[x(293)].text + x(297) + Lt[x(281)](this[x(296)])[x(269)]((e) => e[x(293)].text)[x(291)](",");
  }
  static [c0(284)](x) {
    const t = c0;
    let e = x[0][t(273)]();
    for (let s = 1; s < x[t(286)]; s++)
      e = K[t(292)](e, x[s][t(273)]());
    return e;
  }
  static [c0(281)](x, t) {
    const e = c0;
    let s = [];
    for (var i = 0; i < x.length; i++) {
      let r = x[i];
      if ((t == null || t(r) == !![]) && (s[e(266)](r), r[e(296)] && r[e(296)][e(286)] > 0)) {
        let a = Lt[e(281)](r[e(296)], t);
        s = s[e(272)](a);
      }
    }
    return s;
  }
}
function wx(n, x) {
  const t = dn();
  return wx = function(e, s) {
    return e = e - 265, t[e];
  }, wx(n, x);
}
function dn() {
  const n = ["getVNodeUnionRect", "123phCpDu", "length", "rect", "toString", "height", "1824930ZGjFpF", "join", "union", "object", "58376ayJsrt", "161165oGRkEF", "children", ": 	", "parent", "getChildrenRect", "fromObject", "push", "27jExrcy", "367955oUGNtB", "map", "translateWithRecursive", "addChild", "concat", "getRect", "20836qFzpOo", "width", "16MvgzwJ", "translateTo", "969366AqRGdx", "setObject", "setTo", "flatten", "69680nCMckl", "translateWith"];
  return dn = function() {
    return n;
  }, dn();
}
const C0 = Nt;
(function(n, x) {
  const t = Nt, e = n();
  for (; []; )
    try {
      if (-parseInt(t(486)) / 1 * (-parseInt(t(487)) / 2) + -parseInt(t(503)) / 3 * (-parseInt(t(477)) / 4) + -parseInt(t(502)) / 5 * (parseInt(t(485)) / 6) + parseInt(t(504)) / 7 + -parseInt(t(479)) / 8 + -parseInt(t(495)) / 9 * (-parseInt(t(489)) / 10) + -parseInt(t(484)) / 11 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(pn, 892171);
function Nt(n, x) {
  const t = pn();
  return Nt = function(e, s) {
    return e = e - 477, t[e];
  }, Nt(n, x);
}
function pn() {
  const n = ["10941007YzakoT", "9798wVztnz", "1ieZHgA", "2963074gzMpMw", "allVirtualNodes", "90XxfEco", "children", "length", "getRect", "centerTo", "concat", "998334fIhVaa", "indexData", "getRect() in empty tree", "descendants", "push", "root", "index", "3155TsltcI", "9SjZwOf", "2070852hiWCdQ", "getLeafs", "forEach", "2163140XvlzGt", "deep", "11846648soLjqk", "translateTo", "flatten", "translateWith", "union"];
  return pn = function() {
    return n;
  }, pn();
}
class Ia {
  constructor(x) {
    const t = Nt;
    this.deep = 0, this.root = x, this[t(498)] = x.flatten(), this[t(488)] = [x][t(494)](this.descendants), this.allObjects = this[t(488)].map((e) => e.object), this[t(496)] = [], this[t(501)]();
  }
  [C0(501)]() {
    const x = C0;
    let t = [];
    const e = this;
    function s(i, r) {
      const a = Nt;
      e.deep < r && (e[a(478)] = r);
      let o = i[a(490)], c = t[r];
      c == null && (c = [], t[r] = c), c[a(499)](i);
      for (var h = 0; h < o[a(491)]; h++)
        s(o[h], r + 1);
    }
    s(this.root, 0), this[x(496)] = t;
  }
  [C0(492)]() {
    const x = C0, t = this.root[x(481)]();
    if (t[x(491)] == 0)
      throw new Error(x(497));
    let e = t[0].getRect();
    for (let s = 1; s < t[x(491)]; s++) {
      const i = t[s];
      e = K[x(483)](e, i[x(492)]());
    }
    return e;
  }
  [C0(493)](x, t) {
    const e = C0, s = this[e(488)];
    let i = this[e(500)][e(492)]();
    s[e(506)]((c) => {
      i = K[e(483)](i, c.getRect());
    });
    let r = i.getCenter(), a = x - r.x, o = t - r.y;
    return s.forEach((c) => {
      c[e(482)](a, o);
    }), this;
  }
  [C0(480)](x, t) {
    const e = C0, s = this[e(488)];
    let i = this[e(500)][e(492)]();
    s[e(506)]((o) => {
      const c = e;
      i = K[c(483)](i, o[c(492)]());
    });
    let r = x - i.x, a = t - i.y;
    return s.forEach((o) => {
      o[e(482)](r, a);
    }), this;
  }
  [C0(482)](x, t) {
    const e = C0;
    return this[e(488)][e(506)]((i) => {
      i[e(482)](x, t);
    }), this;
  }
  [C0(505)]() {
    const x = C0;
    return this[x(496)][this[x(478)]];
  }
}
function Rt(n, x) {
  const t = bn();
  return Rt = function(e, s) {
    return e = e - 109, t[e];
  }, Rt(n, x);
}
const H = Rt;
(function(n, x) {
  const t = Rt, e = n();
  for (; []; )
    try {
      if (parseInt(t(148)) / 1 + parseInt(t(132)) / 2 * (-parseInt(t(139)) / 3) + parseInt(t(111)) / 4 * (-parseInt(t(134)) / 5) + -parseInt(t(124)) / 6 * (parseInt(t(115)) / 7) + parseInt(t(145)) / 8 + -parseInt(t(119)) / 9 * (-parseInt(t(141)) / 10) + -parseInt(t(150)) / 11 * (parseInt(t(142)) / 12) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(bn, 958403);
function bn() {
  const n = ["edges", "depth", "isTrace", "1750754VFYyfx", "isTree", "1098830YXyqri", "vertexes", "length", "has", "clone", "3hdcZyK", "isBridge", "670590XvVLrB", "24xUsrrt", "weight", "getOutDegree", "4177896sbEEsi", "outputs", "getMinDegree", "1809782yKPapz", "concat", "708917nSvxoB", "assert", "check", "filter", "map", "getAdjacentList", "add", "isTrack", "getMaxDegreeVertext", "from", "12ANnHqe", "traverse", "slice", "push", "273tuLcra", "isCycle", "isLoop", "isSubGraph", "72dzfzNR", "getInDegree", "travelNext", "hasDirection", "isClose", "37926bgxzwY", "forEach", "getDegree", "isAlone", "inputs"];
  return bn = function() {
    return n;
  }, bn();
}
class Mt {
  constructor() {
    const x = Rt;
    this.inputs = [], this[x(146)] = [];
  }
  [H(126)]() {
    const x = H;
    return this[x(120)]() + this[x(144)]();
  }
  [H(120)]() {
    const x = H;
    return this.inputs[x(136)];
  }
  [H(144)]() {
    return this[H(146)].length;
  }
  [H(155)]() {
    const x = H;
    let t = this.outputs[x(154)]((s) => s.to), e = this[x(128)][x(154)]((s) => s.from);
    return t[x(149)](e);
  }
}
class Cs {
  constructor(x, t) {
    const e = H;
    this[e(143)] = 0, this.from = x, this.to = t, x[e(146)][e(114)](this), t.inputs[e(114)](this);
  }
  [H(117)]() {
    return this[H(110)] === this.to;
  }
  isAdjacent(x) {
    const t = H;
    return this[t(110)] === x[t(110)] || this.from === x.to || this.to === x[t(110)] || this.to === x.to;
  }
}
class wa {
  constructor(x) {
    this.vertexes = x;
  }
  isClose(x) {
    return ![];
  }
  [H(131)](x) {
    return ![];
  }
  isCircuit(x) {
    const t = H;
    return this[t(123)](x) && this[t(131)](x);
  }
  [H(157)](x) {
    return ![];
  }
  [H(116)](x) {
    return this.isClose(x) && this.isTrack(x);
  }
}
class vx {
  constructor(x, t) {
    const e = H;
    this[e(122)] = !![], this[e(135)] = x, this[e(129)] = t;
  }
  isZero() {
    const x = H;
    return this[x(135)][x(136)] > 0 && this[x(129)][x(136)] == 0;
  }
  [H(127)]() {
    const x = H;
    return this.vertexes.length == 1 && this[x(129)][x(136)] == 0;
  }
  [H(112)](x, t = H(130), e = [], s = /* @__PURE__ */ new Set()) {
    const i = H;
    x == null && (x = this[i(135)][0]);
    let r = this;
    if (!s.has(x) && (e[i(114)](x), s.add(x)), t == "depth")
      x.getAdjacentList()[i(153)]((o) => !s[i(137)](o)).map((o) => {
        const c = i;
        !s.has(o) && (e.push(o), s[c(156)](o)), r.traverse(o, t, e, s);
      });
    else {
      let a = x[i(155)]()[i(153)]((o) => !s.has(o));
      a.map((o) => {
        e[i(114)](o), s.add(o);
      }), a[i(154)]((o) => {
        r[i(112)](o, t, e, s);
      });
    }
    return e;
  }
  [H(109)]() {
    const x = H;
    let t = this.vertexes[0];
    for (let e = 1; e < this[x(135)][x(136)]; e++) {
      const s = this[x(135)][e];
      s[x(126)]() > t.getDegree() && (t = s);
    }
    return t;
  }
  [H(147)]() {
    const x = H;
    let t = this[x(135)][0][x(126)]();
    for (let e = 1; e < this[x(135)][x(136)]; e++) {
      const s = this[x(135)][e];
      s[x(126)]() < t && (t = s.getDegree());
    }
    return t;
  }
  getPathList(x, t, e = /* @__PURE__ */ new Set()) {
    return [];
  }
  getOrder() {
    const x = H;
    return this[x(135)][x(136)];
  }
  [H(140)]() {
  }
  [H(118)](x) {
  }
  [H(133)]() {
    const x = H;
    return this[x(135)][x(136)] != this.edges.length + 1 ? ![] : this[x(135)][x(136)] == 1 ? !![] : this[x(135)].filter((e) => e[x(126)]() == 1)[x(136)] > 0;
  }
  [H(121)](x) {
    let t = [];
    function e(s) {
      const i = Rt;
      t.push(s);
      let r = s[i(146)].map((a) => a.to);
      for (let a = 0; a < r[i(136)]; a++) {
        let o = r[a];
        if (o === x)
          return;
        e(o);
      }
    }
    return e(x), t;
  }
  [H(138)]() {
    const x = H;
    let t = this[x(135)].slice();
    t[x(125)]((i) => {
      const r = x;
      i[r(128)] = i[r(128)][r(113)](), i[r(146)] = i[r(146)].slice();
    });
    let e = this[x(129)][x(113)](), s = new vx(t, e);
    return s[x(122)] = this[x(122)], s;
  }
  [H(152)]() {
    const x = H;
    let t = 0;
    this[x(135)][x(125)]((s) => t += s[x(126)]()), console[x(151)](t == this[x(129)][x(136)] * 2);
    let e = this[x(135)].filter((s) => s.getDegree() % 2 != 0)[x(136)];
    console[x(151)](e % 2 == 0);
  }
}
const B0 = kx;
function yn() {
  const n = ["810640bYqWbD", "sort", "travelVertext", "add", "object", "createMinimalSpanningTree", "has", "1256197PAeiwd", "59168oqbmJu", "68860cOquFL", "getInDegree", "forEach", "from", "88186Bswtvy", "target", "end", "351KIgxXS", "filter", "concat", "fromObject", "edges", "6ulaqdo", "getLinks", "vertexes", "55FhndBk", "set", "2FPimJj", "weight", "map", "toGraphs", "48xTtgFP", "inputs", "push", "outputs", "get", "2977CHAOti", "2394156Adehjw", "begin", "length", "511fKJVYY", "getOutDegree", "isTree", "isNodeTarget", "1835604YosZcu", "getNodes"];
  return yn = function() {
    return n;
  }, yn();
}
(function(n, x) {
  const t = kx, e = n();
  for (; []; )
    try {
      if (parseInt(t(494)) / 1 * (-parseInt(t(468)) / 2) + -parseInt(t(463)) / 3 * (-parseInt(t(478)) / 4) + -parseInt(t(487)) / 5 * (-parseInt(t(472)) / 6) + parseInt(t(481)) / 7 * (parseInt(t(495)) / 8) + parseInt(t(458)) / 9 * (-parseInt(t(496)) / 10) + parseInt(t(466)) / 11 * (parseInt(t(485)) / 12) + parseInt(t(477)) / 13 * (-parseInt(t(455)) / 14) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(yn, 831623);
function kx(n, x) {
  const t = yn();
  return kx = function(e, s) {
    return e = e - 453, t[e];
  }, kx(n, x);
}
class Ht {
  static [B0(492)](x) {
    const t = B0;
    let e = [], s = [], i = x[t(462)][t(488)]((o, c) => {
      const h = t;
      let l = o.weight - c[h(469)];
      return l == 0 && (l = o[h(454)][h(497)]() - c.from[h(497)](), l == 0 && (l = c.to[h(482)]() - o.to[h(482)]())), l;
    }), r = /* @__PURE__ */ new WeakMap();
    for (let o = 0; o < i[t(480)]; o++) {
      const c = i[o];
      let h = c[t(454)], l = c.to, d = r.get(h), y = r[t(476)](l);
      if (d != null && y != null)
        continue;
      d == null && (d = new Mt(), d[t(491)] = h[t(491)], e[t(474)](d), r[t(467)](h, d)), y == null && (y = new Mt(), y[t(491)] = l[t(491)], e.push(y), r[t(467)](l, y));
      let g = new Cs(d, y);
      g[t(491)] = c[t(491)], s.push(g);
    }
    return new vx(e, s);
  }
  [B0(486)](x) {
    const t = B0;
    return x.vertexes[t(470)]((e) => e[t(491)]);
  }
  [B0(464)](x) {
    const t = B0;
    return x.edges[t(470)]((e) => e.object);
  }
  objectsToGraphs(x) {
    const t = B0, e = x.filter((c) => c instanceof C);
    let s = x[t(459)]((c) => c instanceof q);
    s.filter((c) => c[t(479)].isNodeTarget() && c[t(457)][t(484)]());
    const i = /* @__PURE__ */ new WeakMap(), r = e.map((c) => {
      const h = t, l = new Mt();
      return l[h(491)] = c, i.set(c, l), l;
    });
    s[t(459)]((c) => {
      const h = t;
      return i.get(c[h(479)][h(456)]) && i[h(476)](c[h(457)].target);
    });
    const a = s[t(470)]((c) => {
      const h = t;
      let l = i[h(476)](c[h(479)][h(456)]), d = i[h(476)](c[h(457)][h(456)]), y = new Cs(l, d);
      return y[h(491)] = c, y;
    });
    return this[t(471)](r, a);
  }
  [B0(471)](x, t) {
    const e = B0;
    let s = [];
    x.forEach((a) => {
      const o = kx;
      let c = a[o(473)], h = a[o(475)];
      s = s[o(460)](c), s = s.concat(h);
    });
    let i = [], r = /* @__PURE__ */ new Set();
    for (let a = 0; a < x.length; a++) {
      const o = x[a];
      if (r[e(493)](o))
        continue;
      let c = [], h = [];
      this[e(489)](o, c, h, r);
      let l = new vx(c, h);
      i[e(474)](l);
    }
    return i;
  }
  travelVertext(x, t = [], e = [], s = /* @__PURE__ */ new Set()) {
    const i = B0;
    if (s[i(493)](x))
      return;
    t[i(474)](x), s[i(490)](x);
    let r = x[i(473)][i(459)]((c) => !s[i(493)](c)), a = x[i(475)][i(459)]((c) => !s[i(493)](c));
    r.forEach((c) => {
      e[i(474)](c), s.add(c);
    }), a.forEach((c) => {
      e[i(474)](c), s.add(c);
    });
    let o = this;
    r[i(453)]((c) => {
      o.travelVertext(c.from, t, e, s);
    }), a[i(453)]((c) => {
      o[i(489)](c.to, t, e, s);
    });
  }
  toTree(x) {
    const t = B0;
    !x[t(483)]() && (x = Ht[t(492)](x));
    let e = x.vertexes[t(459)]((c) => c[t(497)]() == 0)[0][t(491)], s = x[t(465)][t(470)]((c) => c[t(491)]), i = x[t(462)].map((c) => c[t(491)]);
    const r = /* @__PURE__ */ new WeakMap();
    let a = new Lt();
    return a[t(461)](e), r[t(467)](e, a), s[t(453)]((c) => {
      const h = t;
      if (c === e)
        return;
      const l = new Lt();
      l[h(461)](c), r[h(467)](c, l);
    }), i[t(453)]((c) => {
      const h = t;
      let l = r.get(c[h(479)][h(456)]), d = r.get(c[h(457)][h(456)]);
      l.addChild(d);
    }), new Ia(a);
  }
}
const nt = Wt;
function Wt(n, x) {
  const t = gn();
  return Wt = function(e, s) {
    return e = e - 408, t[e];
  }, Wt(n, x);
}
(function(n, x) {
  const t = Wt, e = n();
  for (; []; )
    try {
      if (-parseInt(t(429)) / 1 * (-parseInt(t(419)) / 2) + parseInt(t(414)) / 3 + -parseInt(t(435)) / 4 + parseInt(t(423)) / 5 + -parseInt(t(410)) / 6 + -parseInt(t(430)) / 7 * (-parseInt(t(434)) / 8) + parseInt(t(425)) / 9 * (-parseInt(t(418)) / 10) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(gn, 892963);
class Nx {
  constructor(x, t) {
    const e = Wt;
    this.x = 0, this.y = 0, this[e(433)] = 1, this[e(413)] = 1, this[e(420)] = 1, this[e(411)] = 1, this[e(412)] = 0, this[e(431)] = x, this[e(421)] = t, this[e(427)] = J[e(408)](t);
    let s = J[e(417)](t);
    this[e(420)] = s.width, this.height = s[e(411)];
  }
  [nt(436)](x, t) {
    const e = nt;
    this[e(420)] = x, this[e(411)] = t;
  }
  translate(x, t) {
    this.x = x, this.y = t;
  }
  [nt(424)](x, t) {
    const e = nt;
    this[e(433)] = x, this[e(413)] = t;
  }
  [nt(428)](x) {
    const t = nt;
    this[t(412)] = x;
  }
  [nt(409)](x) {
    const t = nt;
    let e = this, s = this[t(431)], i = this[t(427)];
    this[t(412)] != 0 && (i = J[t(422)](this[t(427)], this[t(412)]));
    let r = (o) => {
      const c = t;
      return { x: e.x + e[c(420)] * o.x * e.scaleX, y: e.y + e[c(411)] * o.y * e[c(413)] };
    };
    i = i[t(416)](r);
    function a(o) {
      o.forEach((c, h) => {
        const l = Wt;
        s[h][l(432)](c.x, c.y);
      });
    }
    if (x != null) {
      let o = s[t(416)]((c) => ({ x: c.x, y: c.y }));
      x[t(415)] = o, x.to = i, x.update = a, this[t(437)][t(426)](x).play();
    } else
      a(i);
    return this;
  }
}
function gn() {
  const n = ["2831748AWvdIJ", "from", "map", "getPointsRect", "110XNoNgr", "2785182HkSLce", "width", "positions", "rotateNormaledPoints", "2347370LbmkzS", "scale", "242415BKXFVT", "anime", "positionNormals", "rotate", "1qkBWAA", "55937DitdYb", "objects", "setXY", "scaleX", "568CrjSwE", "6918128zWEwoc", "resizeTo", "animationSystem", "getPointsNormalization", "doLayout", "2727372ArleLa", "height", "rotation", "scaleY"];
  return gn = function() {
    return n;
  }, gn();
}
function _n() {
  const n = ["allVirtualNodes", "2100120wCfGvj", "72KROSmX", "250790gkEdTR", "length", "deep", "indexData", "width", "push", "74487JlJckJ", "translateTo", "454kAgBdf", "1579810zUPUyj", "477MFCcdQ", "435309xvtOxW", "abs", "3099JvmgBc", "getLeafs", "1275416OZYpuR"];
  return _n = function() {
    return n;
  }, _n();
}
(function(n, x) {
  const t = mn, e = n();
  for (; []; )
    try {
      if (parseInt(t(317)) / 1 + parseInt(t(319)) / 2 * (-parseInt(t(324)) / 3) + -parseInt(t(328)) / 4 + parseInt(t(320)) / 5 + -parseInt(t(329)) / 6 * (parseInt(t(322)) / 7) + parseInt(t(326)) / 8 + parseInt(t(321)) / 9 * (parseInt(t(330)) / 10) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(_n, 373298);
function mn(n, x) {
  const t = _n();
  return mn = function(e, s) {
    return e = e - 315, t[e];
  }, mn(n, x);
}
function va(n, x = {}) {
  const t = mn;
  let e = n[t(333)], s = n[t(332)], i = n[t(325)](), r = 60, a = 80;
  for (let h = 0; h < i[t(331)]; h++) {
    let l = i[h], d = (h + 1) * r, y = s * a;
    l[t(318)](d, y);
  }
  for (let h = s - 1; h >= 0; h--) {
    let l = e[h];
    for (let d = 0; d < l[t(331)]; d++) {
      let y = l[d], g = y.children, p = y.x, k = h * a;
      if (g[t(331)] > 0 ? p = (g[0].x + g[g[t(331)] - 1].x) / 2 : d > 0 && (p = l[d - 1].x + l[d - 1][t(315)]), y[t(318)](p, k), d > 0 && y.x < l[d - 1].x + l[d - 1][t(315)]) {
        let I = l[d - 1].x + l[d - 1][t(315)], L = Math[t(323)](I - y.x);
        for (let P = d; P < l[t(331)]; P++)
          l[P].translateWithRecursive(L, 0);
      }
    }
  }
  let o = [];
  return n[t(327)].forEach((h) => {
    o[t(316)](h);
  }), o;
}
const Z0 = Px;
(function(n, x) {
  const t = Px, e = n();
  for (; []; )
    try {
      if (-parseInt(t(337)) / 1 * (parseInt(t(348)) / 2) + -parseInt(t(349)) / 3 * (-parseInt(t(327)) / 4) + -parseInt(t(340)) / 5 * (-parseInt(t(333)) / 6) + parseInt(t(330)) / 7 * (parseInt(t(331)) / 8) + parseInt(t(338)) / 9 * (parseInt(t(356)) / 10) + -parseInt(t(358)) / 11 + -parseInt(t(354)) / 12 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(In, 715646);
function Px(n, x) {
  const t = In();
  return Px = function(e, s) {
    return e = e - 325, t[e];
  }, Px(n, x);
}
class tr {
  constructor(x, t) {
    const e = Px;
    this[e(361)] = x, this[e(343)] = t;
  }
  [Z0(326)](x, t) {
    const e = Z0;
    let s = t;
    t instanceof e0 && (s = t[e(335)]);
    let i = new Nx(x, s);
    return i.animationSystem = this[e(361)], i;
  }
  circleLayout(x, t = {}) {
    const e = Z0;
    !x[e(332)]() && (x = Ht.createMinimalSpanningTree(x));
    let s = x[e(339)](null)[e(350)]((c) => c instanceof Mt), i = s[0], r = this[e(341)](i, t), a = s[e(360)]((c) => c.object), o = new Nx(a, r);
    return o[e(361)] = this[e(361)], o;
  }
  [Z0(362)](x) {
    const t = Z0;
    !x[t(332)]() && (x = Ht[t(363)](x));
    let e = x[t(339)](null)[t(350)]((o) => o instanceof Mt), s = this[t(343)][t(342)](x), i = va(s), r = e[t(360)]((o) => o.object), a = new Nx(r, i);
    return a[t(361)] = this[t(361)], a;
  }
  [Z0(353)](x, t) {
    const e = Z0;
    if (!x[e(332)]())
      throw new Error(e(344));
    return t == null && (t = x[e(336)][0]), x.travelNext(t);
  }
  [Z0(341)](x, t = {}) {
    const e = Z0;
    t.cx = t.cx || 0, t.cy = t.cy || 0, t[e(359)] = t.radius || 200, t[e(352)] = t[e(352)] || 0, t[e(365)] = t.endAngle || 2 * Math.PI, t[e(345)] = t.radiusScale || 0.5, t[e(364)] = t[e(364)] || 1, t[e(365)] > 2 * Math.PI && (t[e(365)] = t.endAngle % (2 * Math.PI));
    let s = [], i = /* @__PURE__ */ new Set(), r = [];
    function a(o, c, h, l, d, y, g) {
      const p = e;
      if (i[p(334)](o))
        return;
      r[p(351)](o[p(355)].id), i[p(325)](o), s.push({ x: c, y: h });
      let k = o[p(329)](), I = k[p(328)];
      if (g > 1 && (I -= 1), I <= 0)
        return;
      let L = d, P = y - d, z = P;
      P < 2 * Math.PI && (I -= 1), I != 0 && (z /= I), g > 1 && (P < 2 * Math.PI ? L -= P * 0.5 : P == 2 * Math.PI && I > 1 && I % 2 == 0 && (L += z * 0.5));
      for (let N = 0; N < k[p(328)]; N++) {
        let f0 = k[N], F0 = L + N * z, It = c + l * Math[p(347)](F0), lt = h + l * Math[p(357)](F0);
        t[p(346)] && t[p(346)](t, x[p(355)], g), a(f0, It, lt, l * t[p(345)], F0, F0 + P, g + 1);
      }
    }
    return t[e(346)] && t[e(346)](t, x.object, 0), a(x, t.cx, t.cy, t[e(359)], t[e(352)], t[e(365)], 1), s;
  }
}
function In() {
  const n = ["length", "getAdjacentList", "9569IkxBtj", "7792rYlrbr", "isTree", "12LjsQtb", "has", "points", "vertexes", "87nHFNtY", "369GPdlLg", "traverse", "493895nQQhkR", "getCircleLayoutPositions", "toTree", "graphSystem", "graph is not a tree", "radiusScale", "update", "cos", "18318xQtyyx", "774294zCSMql", "filter", "push", "startAngle", "travelTree", "15832812cZMIkY", "object", "96210wXsCGJ", "sin", "4202957yhIuYX", "radius", "map", "animationSystem", "treeLayout", "createMinimalSpanningTree", "angleScale", "endAngle", "add", "shapeLayout", "20loydfW"];
  return In = function() {
    return n;
  }, In();
}
const _ = vn;
(function(n, x) {
  const t = vn, e = n();
  for (; []; )
    try {
      if (-parseInt(t(646)) / 1 + parseInt(t(510)) / 2 * (-parseInt(t(648)) / 3) + parseInt(t(627)) / 4 * (parseInt(t(512)) / 5) + -parseInt(t(587)) / 6 + parseInt(t(521)) / 7 * (-parseInt(t(576)) / 8) + parseInt(t(518)) / 9 + parseInt(t(678)) / 10 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(wn, 196338);
function wn() {
  const n = ["mouseup", "classList", "backgroundSize", "isDragEnd", "mousedown", "setCursor", "1719720000000", "exporterSystem", "layersContainer", "dragEndHandler", "mouseoutHandler", "union", "touchend", "fullWindow", "height", "layer_container", "serializerSystem", "touchwheelHandler", "isDraging", "translateWith", "getElementsByTagName", "filter", "4519530LPIxYm", "width", "addEventListener", "addAll", "selectedGroup", "Layer_", "mousedragHandler", "timeline", "removeAll", "mode", "saveImageInfo", "index", "getDom", "backgroundPosition", "show", "previous", "rand", "edit", "touchstart", "inputSystem", "Stage has been destroyed already.", "dragHandle", "resizeTo", "78574QXpOhb", "draggable", "5ZfhIgk", "areaBox", "add", "zoomAfter", "render", "zIndex", "1859868xtTinK", "loaded", "ResizeObserver", "119WjwGWI", "injectCss", "mouseDownY", "default", "mouseEnabled", "hasListener", "setMode", "toolbar", "canvas", "call", "length", "min", "_resizeObserver", "pickUpViewLayers", "renderSystem", "drag", "dispatchEvent", "forEach", "zoom", "hasChildren", "mousewheelHandler", "translateTo", "mouseoverTarget", "wheelZoom", "zoomFullStage", "keyboard", "dragover", "stage", "setToolbar", "grabbing", "addChild", "data", "toLayerRect", "layoutSystem", "dblclickHandler", "round", "push", "removeAt", "handlerLayer", "hide", "pickedObject", "string", "overview", "px)", "select", "clientHeight", "getCursor", "event", "indexOf", "styleSystem", "effectSystem", "isDragStart", "forceUpdate", "debugPanel", "remove", "55824xMuvSv", "fullScreen", "detail", "calc(100% - ", "offsetWidth", "position", "hideOverview", "type", "showToolbar", "_updateOverview", "innerHTML", "948210nQwSvj", "touchmoveHandler", "removeChild", "getChildren", "appendChild", "destoryed", "modeChange", "clickHandler", "zoomIn", "preventDefault", "getElementById", "abs", "relative", "mousedragEndHandler", "_resizeTimer", "_init", "now", "getCurrentLayer", "mouseenterHandler", "mousedownHandler", "translateToCenter", "style", "_initEvent", "grab", "mouseDownX", "name", "getToolbarHeight", "_destory", "touchstartHandler", "dirty", "update", "background", "isRightButton", "pickUpChild", "saveAsLocalImage", "domElement", "head", "children", "cancelZoom", "editor", "363576eonRVt", "clearCache", "updateSize", "random", "the dom element id is not found id:", "offsetHeight", "textContent", "metaKey", "createElement", "_computeLayer", "hideToolbar", "defaultPrevented", "behaviourSystem", "contentRect", "touchendHandler", "randomNum", "graphSystem", "visible", "the dom element is null.", "237213TjxKDd", "ctrlKey", "3FNwnVO", "mousemoveHandler", "isDebug", "buttons", "oncontextmenu", "mouseupHandler", "currentTime", "wheelDelta"];
  return wn = function() {
    return n;
  }, wn();
}
function vn(n, x) {
  const t = wn();
  return vn = function(e, s) {
    return e = e - 492, t[e];
  }, vn(n, x);
}
let oi = Date[_(603)](), ci = ![];
class ka extends U0 {
  constructor(x) {
    const t = _;
    super(), this[t(624)] = [], this[t(644)] = ![], this[t(496)] = "normal", this.destoryed = ![], this[t(546)] = new Ki(this), this.inputSystem = new Ys(), this[t(682)] = new Ui(), this[t(602)](x), this[t(522)](), this[t(639)] = new ma(this), this.styleSystem = new da(this), this.animationSystem = new Zi(), this[t(571)] = new $i(this.animationSystem), this[t(643)] = new Ht(), this[t(554)] = new tr(this.animationSystem, this[t(643)]), this[t(535)] = new pa(this), this[t(663)] = new ba(this), this[t(672)] = new Ot(), Y0[t(680)](t(519), () => this[t(617)]());
  }
  [_(522)]() {
    const x = _;
    if (ci == ![]) {
      ci = !![];
      let t = document[x(623)] || document[x(676)](x(623))[0], e = document[x(635)](x(608));
      e[x(633)] = j1, t[x(591)](e);
    }
  }
  _init(x) {
    const t = _;
    let e = this;
    document[t(652)] = function() {
      return !e[t(506)].isMouseOn;
    }, e[t(622)] = Ma(x);
    const s = document[t(635)]("div");
    e[t(664)] = s, e[t(574)] = new F1(e), gt[t(650)] && e[t(574)][t(501)](), e[t(549)](new Vi(e)), s[t(657)][t(514)](t(671)), s[t(608)][t(581)] = "relative", s[t(608)][t(679)] = "100%", e.domElement.appendChild(s), e[t(679)] = s[t(580)], e[t(670)] = s[t(566)];
    {
      const r = new cs(e);
      e[t(559)] = r;
      const a = r.render[t(529)];
      a[t(608)].zIndex = "" + r[t(517)], this[t(664)][t(591)](a);
    }
    Oa(e);
    let i = parseInt(t(662));
    Date[t(603)]() > i || e[t(506)][t(609)](e), e.on(t(547), function(r) {
      r[t(596)]();
    });
  }
  showDebugPanel() {
    const x = _;
    this[x(574)][x(501)]();
  }
  hideDebugPanel() {
    const x = _;
    this[x(574)][x(560)]();
  }
  showOverview(x) {
    const t = _;
    let e = this;
    this[t(535)][t(494)][t(654)] > parseInt(t(662)) || (e[t(563)] == null && (e[t(563)] = new B1(e)), e[t(563)].css(x), e[t(563)].show());
  }
  [_(585)]() {
    const x = _;
    this[x(563)] != null && this[x(563)][x(617)]();
  }
  [_(582)]() {
    const x = _;
    this[x(563)] != null && this[x(563)][x(560)]();
  }
  [_(613)]() {
    const x = _;
    return this[x(528)] == null ? 0 : (this[x(642)] = Math.random(), this.toolbar.getHeigth());
  }
  zoomOut(x = 0.8) {
    return this[_(539)](x, x), this;
  }
  [_(595)](x = 1.25) {
    return this[_(539)](x, x), this;
  }
  [_(539)](x, t, e, s) {
    const i = _;
    if (this[i(526)](O0.zoom)) {
      let r = new Event(O0.zoom, { cancelable: !![] });
      if (this[i(537)](r), r[i(638)] == !![])
        return;
    }
    if (Sa(this, x, t, e, s), this[i(526)](O0[i(515)])) {
      let r = new Event(O0[i(515)], { cancelable: !![] });
      if (this[i(537)](r), r.defaultPrevented == !![])
        return;
    }
  }
  [_(625)]() {
    const x = _;
    this[x(590)]()[x(538)](function(t) {
      const e = x;
      t[e(625)](), t[e(617)]();
    });
  }
  [_(545)]() {
    Ca(this);
  }
  [_(607)]() {
    this[_(590)]().forEach(function(t) {
      t.centerBy();
    });
  }
  [_(551)](x) {
    const t = _;
    x[t(517)] = this[t(624)][t(531)], x.stage = this, x.resizeTo(this[t(679)], this[t(670)]), x[t(616)] = !![], x[t(612)] == null && (x[t(612)] = t(492) + x.zIndex), this[t(624)][t(557)](x);
    const e = x[t(516)][t(529)];
    e[t(608)][t(517)] = "" + x[t(517)], this.layersContainer[t(591)](e);
    const s = x[t(608)];
    s != null && (e[t(608)][t(618)] = s[t(618)], e[t(608)][t(500)] = s[t(500)], e[t(608)][t(658)] = s[t(658)]), this[t(570)][t(636)](x);
  }
  [_(590)]() {
    return this[_(624)];
  }
  [_(589)](x) {
    const t = _;
    x[t(516)].canvas.remove();
    let e = this.children[t(569)](x);
    return e == -1 ? this : (J[t(558)](this[t(624)], e), x.stage = null, this);
  }
  [_(501)]() {
    const x = _;
    this[x(644)] = !![], this[x(590)]()[x(538)](function(t) {
      t[x(501)]();
    }), this[x(617)]();
  }
  hide() {
    const x = _;
    this[x(644)] = ![], this[x(590)]()[x(538)](function(t) {
      t[x(560)]();
    });
  }
  [_(617)]() {
    const x = _;
    this[x(559)][x(617)](), this.getChildren().forEach(function(t) {
      t[x(617)]();
    });
  }
  [_(573)]() {
    const x = _;
    this[x(559)][x(573)](), this[x(590)]()[x(538)](function(t) {
      t[x(573)]();
    });
  }
  [_(497)]() {
    return this[_(663)].saveImageInfo();
  }
  [_(621)]() {
    const x = _;
    this.exporterSystem[x(621)]();
  }
  on(x, t) {
    const e = _;
    return this.on[e(498)] = oi, this.addEventListener(x, t);
  }
  fullWindow() {
    const x = _;
    if (this.hasListener(O0.fullWindow)) {
      let t = new Event(O0[x(669)], { cancelable: !![] });
      if (this.dispatchEvent(t), t[x(638)] == !![])
        return;
    }
    K0[x(669)](this[x(622)]);
  }
  [_(577)]() {
    K0.fullScreen(this.domElement);
  }
  [_(584)]() {
    const x = _;
    if (this[x(528)] == null)
      return;
    this[x(528)][x(501)]();
    let t = x(579) + this[x(613)]() + "px)";
    this[x(664)][x(608)][x(670)] = t;
  }
  [_(637)]() {
    const x = _;
    if (this[x(528)] == null || oi > parseInt(x(662)))
      return;
    this[x(528)][x(560)]();
    let t = x(579) + this[x(613)]() + x(564);
    this.layersContainer.style[x(670)] = t;
  }
  [_(549)](x) {
    const t = _;
    this[t(528)] != null && this.toolbar[t(575)](), this.domElement.appendChild(x[t(499)]());
    let e = "calc(100% - " + this[t(613)]() + "px)";
    this.layersContainer.style.height = e, this.toolbar = x;
  }
  [_(527)](x) {
    const t = _;
    if (this[t(526)](O0.modeChange)) {
      let e = new Event(O0[t(593)], { cancelable: !![] });
      if (e.mode = x, this[t(537)](e), e[t(638)] == !![])
        return;
    }
    La(this, x), x == M0[t(536)] ? this.setCursor(t(610)) : this[t(661)]("default");
  }
  [_(606)](x) {
    const t = _, e = this.inputSystem;
    if (this[t(496)] == M0[t(536)]) {
      this[t(661)](t(550));
      return;
    }
    let s = this;
    if (s.inputSystem[t(561)] = s.pickUpViewLayers(), s[t(506)][t(561)] != null) {
      Ea(s, e);
      return;
    } else
      !(x[t(647)] || x[t(634)]) && s[t(682)].removeAll();
  }
  [_(493)](x) {
    const t = _, e = this[t(506)], s = this[t(559)], i = this[t(496)], r = this[t(506)][t(561)], a = this[t(682)], o = this[t(534)]();
    this[t(506)].mouseoverTarget = o;
    const c = x[t(651)] == 2, h = e[t(572)], l = r != null && r[t(525)] && r.draggable, d = this[t(590)]();
    for (let y = 0; y < d[t(531)]; y++) {
      const g = d[y];
      if (g[t(525)]) {
        if (c || i == M0.drag) {
          h && this[t(661)](t(550)), g[t(508)](e);
          continue;
        }
        if (l) {
          a[t(493)](e);
          return;
        }
        i == M0.select || i == M0[t(504)] ? Pa(s, e) : g[t(508)](e);
      }
    }
  }
  [_(653)](x) {
    const t = _, e = this.inputSystem;
    let s = this;
    const i = this[t(590)](), r = e[t(619)]();
    for (let c = 0; c < i[t(531)]; c++) {
      const h = i[c];
      h[t(511)] && e[t(674)] && h[t(665)]();
    }
    if (this[t(496)] == M0[t(536)]) {
      this[t(661)](t(610));
      return;
    }
    this[t(661)](t(524));
    let a = this[t(506)][t(561)], o = this[t(559)];
    o[t(513)][t(560)](), o[t(513)][t(509)](0, 0), a && a[t(525)] && (e.type == t(656) ? a[t(653)](e) : e[t(583)] == t(668) && a[t(641)](e), e[t(502)][t(674)] && a[t(511)] && r == ![] && s[t(682)][t(600)](e));
  }
  mouseoutHandler(x) {
    const t = _, e = this[t(506)];
    this[t(559)][t(666)](e), this.selectedGroup[t(666)](e);
  }
  [_(594)](x) {
    const t = _, e = this.inputSystem;
    let s = e.pickedObject;
    s && !e.previous[t(659)] && s.clickHandler(e);
  }
  [_(555)](x) {
    const t = _, e = this[t(506)];
    let s = e.pickedObject;
    s && !e[t(502)].isDragEnd && s[t(555)](e);
  }
  mousemoveHandler(x) {
    const t = _;
    if (this[t(496)] == M0[t(536)]) {
      this.setCursor(t(610));
      return;
    }
    const e = this.inputSystem;
    let s = e[t(543)], i = this[t(534)]();
    s !== i && s != null && s.mouseoutHandler && s[t(666)](e), i != null && (s !== i ? i[t(605)] && i[t(605)](e) : i[t(649)] && i[t(649)](e)), e.mouseoverTarget = i;
  }
  [_(541)](x) {
    const t = _, e = this[t(506)];
    if (e[t(544)] != !![])
      return;
    (x.wheelDelta == null ? x[t(578)] : x[t(655)]) > 0 ? this.zoom(1.25, 1.25, e.x, e.y) : this.zoom(0.8, 0.8, e.x, e.y);
  }
  [_(605)](x) {
  }
  touchstartHandler(x) {
    this[_(606)](x);
  }
  [_(588)](x) {
    this[_(493)](x);
  }
  [_(673)](x) {
  }
  [_(641)](x) {
    this[_(653)](x);
  }
  [_(534)](x = ![]) {
    const t = _;
    let e = this[t(590)]();
    for (let s = e.length - 1; s >= 0; s--) {
      let i = e[s];
      if (!(i.visible && i.mouseEnabled))
        continue;
      let r = i[t(620)](x);
      if (r != null)
        return r;
    }
    return null;
  }
  [_(567)]() {
    const x = _;
    return this[x(559)].render[x(567)]();
  }
  [_(661)](x) {
    const t = _;
    return this[t(559)][t(516)].setCursor(x);
  }
  download(x) {
    return this.exporterSystem.download(x);
  }
  [_(565)](x) {
    const t = _;
    this[t(682)][t(495)](), this[t(682)][t(681)](x);
  }
  [_(604)]() {
    const x = _;
    return this.children[x(677)]((t) => t[x(644)] == !![])[0];
  }
  [_(503)](x, t) {
    const e = _;
    return x == null && (x = -this[e(679)] * 0.5), t == null && (t = this[e(670)] * 0.5), Math[e(556)](Math[e(630)]() * (t - x) + x);
  }
  destory(x) {
    const t = _;
    if (this[t(592)])
      throw new Error(t(507));
    this[t(592)] = !![], this[t(533)] && this._resizeObserver.disconnect(), this._resizeTimer && clearInterval(this[t(601)]), this[t(559)][t(614)](), this[t(624)][t(538)]((e) => {
      e._destory();
    }), this[t(622)][t(586)] = "", x != ![] && Y0[t(628)]();
  }
}
function Pa(n, x) {
  const t = _;
  let e = n[t(548)], s = x[t(611)], i = x[t(523)], r = x.x, a = x.y, o = Math.min(s, r), c = Math[t(532)](i, a), h = Math[t(598)](s - r), l = Math.abs(i - a);
  const d = n.areaBox;
  d[t(501)](), d[t(509)](h, l), d[t(542)](o, c), d[t(675)](h * 0.5, l * 0.5);
  let y = new K(o, c, d.width, d.height), g = n[t(548)].getChildren();
  for (var p = 0; p < g[t(531)]; p++) {
    let k = g[p];
    if (!k[t(540)]())
      continue;
    let I = k[t(553)](y), L = k.pickUpByRect(I);
    e[t(682)][t(681)](L);
  }
}
function Ea(n, x) {
  const t = _;
  let e = n[t(506)][t(561)], s = x[t(568)];
  x.type == t(660) ? e[t(606)][t(530)](e, s) : s.type == t(505) && e[t(615)][t(530)](e, s);
  const i = s[t(647)] || s[t(634)];
  n[t(682)].has(e) ? i && n[t(682)].remove(e) : (!i && n[t(682)][t(495)](), n[t(682)][t(514)](e));
}
function hi(n, x, t) {
  const e = _;
  n[e(679)] = x, n[e(670)] = t, n[e(559)][e(629)](x, t), n[e(590)]()[e(538)](function(i) {
    i[e(629)](x, t);
  });
  let s = new Event(O0.resize);
  n[e(537)](s);
}
function Sa(n, x, t, e, s) {
  const i = _;
  (e == null || s == null) && (e = n[i(679)] / 2, s = n[i(670)] / 2), n[i(590)]()[i(538)](function(r) {
    const a = i;
    !r[a(525)] || !r[a(544)] || (r[a(539)](x, t, e, s), r[a(617)]());
  }), n.handlerLayer.update();
}
function Oa(n) {
  const x = _, t = n[x(664)];
  if (t[x(608)].height = "calc(100% - " + n[x(613)]() + x(564), window[x(520)]) {
    const s = new ResizeObserver((i) => {
      const r = x;
      for (let a of i) {
        let o = a[r(640)];
        t[r(608)][r(670)] = r(579) + n[r(613)]() + r(564), hi(n, o[r(679)], o.height);
      }
    });
    s.observe(t), n._resizeObserver = s;
    return;
  }
  let e = setInterval(function() {
    const s = x;
    let i = t.offsetWidth, r = t[s(632)];
    (n[s(679)] != i || n[s(670)] != r) && (t[s(608)][s(670)] = s(579) + n[s(613)]() + s(564), hi(n, i, r));
  }, 500);
  n[x(601)] = e;
}
function Ca(n) {
  const x = _;
  let t = null;
  n.getChildren()[x(538)](function(o) {
    const c = x;
    t == null ? t = o.getAABB(!![]) : t = K[c(667)](t, o.getAABB(!![]));
  });
  let e = n[x(679)] / t[x(679)], s = n[x(670)] / t[x(670)], i = Math[x(532)](e, s), r = 0, a = 0;
  n[x(539)](i, i, r, a), n[x(607)]();
}
function La(n, x) {
  const t = _;
  let e = n.mode;
  n[t(496)] = x;
  let s = { type: O0.modeChange, oldMode: e, newMode: x };
  n[t(626)] && n[t(626)][t(617)](), n[t(537)](s);
}
function Ma(n) {
  const x = _;
  if (typeof n == x(562) && (n = document[x(597)](n), n == null))
    throw new Error(x(631) + n);
  if (n == null)
    throw new Error(x(645));
  return n.style[x(581)] = x(599), n;
}
var A0 = kn;
(function(n, x) {
  for (var t = kn, e = n(); []; )
    try {
      var s = -parseInt(t(465)) / 1 + parseInt(t(470)) / 2 * (parseInt(t(454)) / 3) + -parseInt(t(464)) / 4 + -parseInt(t(457)) / 5 + parseInt(t(453)) / 6 * (parseInt(t(455)) / 7) + -parseInt(t(449)) / 8 * (parseInt(t(466)) / 9) + parseInt(t(458)) / 10;
      if (s === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Pn, 993799);
var Aa = Object.defineProperty, Da = Object[A0(459)], li = (n, x, t, e) => {
  for (var s = A0, i = e > 1 ? void 0 : e ? Da(x, t) : x, r = n[s(461)] - 1, a; r >= 0; r--)
    (a = n[r]) && (i = (e ? a(x, t, i) : a(i)) || i);
  return e && i && Aa(x, t, i), i;
};
function kn(n, x) {
  var t = Pn();
  return kn = function(e, s) {
    e = e - 449;
    var i = t[e];
    return i;
  }, kn(n, x);
}
function Pn() {
  var n = ["2dCHhVa", "middle", "4524112XCNolD", "prototype", "_calcAZ", "endArrow", "6SlvJxO", "1333797xdyXOj", "4832205uMnnNS", "updatePoints", "5666075NwMphm", "35597150GlRheo", "getOwnPropertyDescriptor", "serializers", "length", "horizontal", "FoldLink", "3165560kJZNOC", "645197exkPcj", "18uBONjQ", "points", "concat", "direction"];
  return Pn = function() {
    return n;
  }, Pn();
}
class Ex extends q {
  constructor(x, t, e, s, i) {
    var r = A0;
    super(x, t, e, s, i), this[r(469)] = r(462);
  }
  [A0(456)]() {
    var x = A0;
    const t = this[x(451)](), e = t[0], s = t[1];
    let i;
    return e.x == s.x || e.y == s.y ? i = D[x(471)](e, s) : this[x(469)] == Ft.horizontal ? i = { x: s.x, y: e.y } : i = { x: e.x, y: s.y }, this[x(467)] = [e, i, s], this[x(452)] && (this[x(452)].origin[0] = 1), this[x(467)];
  }
}
li([v(A0(463))], Ex[A0(450)], "className", 2), li([v(q[A0(450)][A0(460)][A0(468)](["direction"]))], Ex[A0(450)], A0(460), 2);
const $ = Sn;
function En() {
  const n = ["middle", "points", "horizontal", "538440XHPThe", "getStageTransform", "186bFAqzI", "CurveLink", "quadraticCurveTo", "7HwkQIA", "prototype", "5916008gfgTXT", "serializers", "4MCmlKW", "getAnchorPoints", "defineProperty", "direction", "_ctrlPoint", "getOwnPropertyDescriptor", "819170tAnvDD", "61850bNLaAT", "18WgZGok", "10034662AzOgrT", "moveTo", "concat", "begin", "center", "resetCtrlPoint", "mousedragHandler", "670204wXiyco", "end", "524862SnQsMO", "ctrlPoint", "between", "drawPoints", "getPoint", "getCtrlPoint", "vec"];
  return En = function() {
    return n;
  }, En();
}
(function(n, x) {
  const t = Sn, e = n();
  for (; []; )
    try {
      if (parseInt(t(313)) / 1 + -parseInt(t(311)) / 2 + parseInt(t(323)) / 3 * (parseInt(t(295)) / 4) + parseInt(t(302)) / 5 * (parseInt(t(325)) / 6) + -parseInt(t(291)) / 7 * (-parseInt(t(293)) / 8) + parseInt(t(303)) / 9 * (-parseInt(t(301)) / 10) + -parseInt(t(304)) / 11 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(En, 416135);
var Ta = Object[$(297)], Fa = Object[$(300)], Ba = (n, x, t, e) => {
  for (var s = e > 1 ? void 0 : e ? Fa(x, t) : x, i = n.length - 1, r; i >= 0; i--)
    (r = n[i]) && (s = (e ? r(x, t, s) : r(s)) || s);
  return e && s && Ta(x, t, s), s;
};
function Sn(n, x) {
  const t = En();
  return Sn = function(e, s) {
    return e = e - 289, t[e];
  }, Sn(n, x);
}
class On extends q {
  constructor(x, t, e, s, i) {
    super(x, t, e, s, i), this.direction = "horizontal";
  }
  [$(316)](x, t) {
    const e = $;
    let s = t[0], i = t[1], r = this[e(318)](s, i), a = r.x, o = r.y;
    x[e(305)](s.x, s.y), x[e(290)](a, o, i.x, i.y);
  }
  [$(310)](x) {
    const t = $;
    super.mousedragHandler(x);
    let e = this[t(314)];
    if (e) {
      x.isDragStart && (this._ctrlPoint = { x: e.x, y: e.y });
      let s = this.parent[t(324)]().invert(), i = s[t(319)](x.dx, x.dy), r = i.x, a = i.y;
      e.x = this[t(299)].x + r, e.y = this[t(299)].y + a;
    }
  }
  [$(318)](x, t) {
    const e = $;
    if (this.ctrlPoint != null)
      return this[e(314)];
    let s = (x.x + t.x) / 2, i = (x.y + t.y) / 2;
    return this[e(298)] == Ft[e(322)] ? i += (t.y - x.y) / 2 : i -= (t.y - x.y) / 2, { x: s, y: i };
  }
  [$(317)](x) {
    const t = $;
    let e = this.getPoints(), s = e[0], i = e[1], r = this[t(318)](s, i), a = D[t(315)](s, r, x), o = D[t(315)](r, i, x);
    return D[t(315)](a, o, x);
  }
  [$(309)]() {
    this.ctrlPoint = void 0;
  }
}
Ba([v($(289))], On.prototype, "className", 2);
const Gt = {};
Gt[S[$(307)]] = function() {
  return this.points[0];
}, Gt[S[$(312)]] = function() {
  return this[$(321)][1];
}, Gt[S[$(308)]] = function() {
  return D[$(320)](this.points[0], this.points[1]);
}, Gt[S[$(314)]] = function() {
  const n = $;
  return this[n(314)] != null ? this[n(314)] : this[n(318)](this.points[0], this[n(321)][1]);
}, G0(On[$(292)], { DefaultPositions: { value: Gt }, serializers: { value: q[$(292)][$(294)][$(306)]([$(298), "ctrlPoint"]) } }), On[$(292)][$(296)] = function() {
  const n = $;
  return [n(307), "end", n(314)];
};
const v0 = Cn;
(function(n, x) {
  const t = Cn, e = n();
  for (; []; )
    try {
      if (-parseInt(t(486)) / 1 + parseInt(t(500)) / 2 * (-parseInt(t(511)) / 3) + parseInt(t(492)) / 4 * (-parseInt(t(510)) / 5) + -parseInt(t(504)) / 6 * (parseInt(t(502)) / 7) + parseInt(t(494)) / 8 * (parseInt(t(509)) / 9) + -parseInt(t(490)) / 10 + parseInt(t(508)) / 11 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Ln, 254671);
function Cn(n, x) {
  const t = Ln();
  return Cn = function(e, s) {
    return e = e - 486, t[e];
  }, Cn(n, x);
}
function Ln() {
  const n = ["_textWidth", "TipNode", "4861880XymKVO", "prototype", "741764hSXRDP", "_textHeight", "8mOhUez", "resizeToFitText", "className", "lineTo", "moveTo", "height", "11614PDSzmg", "calcTextSize", "382207oCFXhh", "serializers", "6SfVYzQ", "top", "length", "defineProperty", "17525827NUxOXI", "1615698EZUQHz", "5Thvyci", "183EVxDYf", "getOwnPropertyDescriptor", "arrowsSize", "_style", "437651HqTVJF", "drawShape"];
  return Ln = function() {
    return n;
  }, Ln();
}
var ja = Object[v0(507)], za = Object[v0(512)], ds = (n, x, t, e) => {
  const s = v0;
  for (var i = e > 1 ? void 0 : e ? za(x, t) : x, r = n[s(506)] - 1, a; r >= 0; r--)
    (a = n[r]) && (i = (e ? a(x, t, i) : a(i)) || i);
  return e && i && ja(x, t, i), i;
};
class Rx extends _t {
  constructor(x, t = 0, e = 0, s = 1, i = 1) {
    super(x, t, e, s, i);
  }
  [v0(495)]() {
    const x = v0;
    super[x(501)]();
    let e = this[x(514)].calcGap();
    this.resizeTo(this[x(488)] + e, this[x(493)] + e + this[x(513)]);
  }
  [v0(487)](x) {
    const t = v0;
    let e = this.left, s = this[t(505)], i = this.width, r = this[t(513)], a = this[t(499)] - r, o = 0;
    x[t(498)](e, s), x[t(497)](e + i, s), x[t(497)](e + i, s + a), x[t(497)](o + (r - 2), s + a), x[t(497)](o, s + a + r), x[t(497)](o - (r - 2), s + a), x[t(497)](e, s + a), x[t(497)](e, s);
  }
}
ds([v(v0(489))], Rx[v0(491)], v0(496), 2), ds([v(8)], Rx[v0(491)], v0(513), 2), ds([v(_t[v0(491)][v0(503)].concat(["arrowsSize"]))], Rx.prototype, "serializers", 2);
const X = An;
(function(n, x) {
  const t = An, e = n();
  for (; []; )
    try {
      if (parseInt(t(318)) / 1 * (-parseInt(t(333)) / 2) + parseInt(t(311)) / 3 * (-parseInt(t(307)) / 4) + -parseInt(t(305)) / 5 + parseInt(t(327)) / 6 + parseInt(t(321)) / 7 * (parseInt(t(310)) / 8) + -parseInt(t(313)) / 9 * (-parseInt(t(328)) / 10) + parseInt(t(317)) / 11 * (-parseInt(t(330)) / 12) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Mn, 102629);
var Na = Object[X(312)], Ra = Object[X(335)], ps = (n, x, t, e) => {
  const s = X;
  for (var i = e > 1 ? void 0 : e ? Ra(x, t) : x, r = n[s(319)] - 1, a; r >= 0; r--)
    (a = n[r]) && (i = (e ? a(x, t, i) : a(i)) || i);
  return e && i && Na(x, t, i), i;
};
function Mn() {
  const n = ["offsetGap", "prototype", "3998yUqyKv", "getFold2", "getOwnPropertyDescriptor", "horizontal", "119230JYqfht", "className", "2780ScnJmi", "updatePoints", "fold2", "1079088wtLyUb", "12ngqjHQ", "defineProperty", "981VcAmnY", "fold1", "getFold1", "endArrow", "11aUxqYe", "6CRSrsf", "length", "end", "7hEZELe", "points", "concat", "serializers", "direction", "center", "553536FNyIMT", "16930kKEJYj", "begin", "3245160TiuOlo"];
  return Mn = function() {
    return n;
  }, Mn();
}
class pt extends q {
  constructor(x, t, e, s, i) {
    super(x, t, e, s, i);
  }
  [X(315)](x, t) {
    const e = X;
    let s = (t.y - x.y) / 2, i = (t.x - x.x) / 2;
    return this.direction == Ft[e(336)] ? { x: x.x + i, y: x.y } : { x: x.x, y: x.y + s };
  }
  [X(334)](x, t) {
    const e = X;
    let s = (t.y - x.y) / 2, i = (t.x - x.x) / 2;
    return this[e(325)] == Ft[e(336)] ? { x: t.x - i, y: t.y } : { x: t.x, y: t.y - s };
  }
  [X(308)]() {
    const x = X, t = this._calcAZ(), e = t[0], s = t[1];
    let i = this[x(315)](e, s), r = this[x(334)](e, s), a = { x: (i.x + r.x) / 2, y: (i.y + r.y) / 2 };
    const o = [e, i, a, r, s];
    if (this[x(322)] = o, this[x(316)]) {
      let c = o[x(319)] - 2;
      this[x(316)].origin[0] = c;
    }
    return o;
  }
}
ps([v("FlexionalLink")], pt[X(332)], X(306), 2), ps([v(Ft[X(336)])], pt[X(332)], X(325), 2), ps([v(44)], pt.prototype, X(331), 2);
const Et = {};
Et[S[X(329)]] = function() {
  return this[X(322)][0];
}, Et[S[X(314)]] = function() {
  return this[X(322)][1];
}, Et[S[X(326)]] = function() {
  return this[X(322)][2];
}, Et[S[X(309)]] = function() {
  return this[X(322)][3];
}, Et[S[X(320)]] = function() {
  return this[X(322)][4];
}, G0(pt[X(332)], { DefaultPositions: { value: Et }, serializers: { value: q[X(332)][X(324)][X(323)]([X(325), X(331)]) } });
function An(n, x) {
  const t = Mn();
  return An = function(e, s) {
    return e = e - 305, t[e];
  }, An(n, x);
}
var G = Tn;
(function(n, x) {
  for (var t = Tn, e = n(); []; )
    try {
      var s = -parseInt(t(386)) / 1 + -parseInt(t(417)) / 2 * (parseInt(t(390)) / 3) + -parseInt(t(396)) / 4 * (parseInt(t(389)) / 5) + -parseInt(t(387)) / 6 * (parseInt(t(419)) / 7) + parseInt(t(408)) / 8 * (-parseInt(t(399)) / 9) + -parseInt(t(401)) / 10 * (parseInt(t(416)) / 11) + -parseInt(t(407)) / 12 * (-parseInt(t(382)) / 13);
      if (s === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Dn, 945458);
var Ha = Object.defineProperty, Wa = Object[G(402)], Xa = (n, x, t, e) => {
  for (var s = e > 1 ? void 0 : e ? Wa(x, t) : x, i = n.length - 1, r; i >= 0; i--)
    (r = n[i]) && (s = (e ? r(x, t, s) : r(s)) || s);
  return e && s && Ha(x, t, s), s;
};
function Dn() {
  var n = ["373165cmpnRb", "6fubpQO", "VideoNode", "21685pqAhBK", "3bLeUIv", "drawImage", "mousePickupPath", "concat", "left", "addEventListener", "1016AtzVcI", "text", "width", "2781MCxnNg", "stroke", "5402110pDYPTZ", "getOwnPropertyDescriptor", "isPlaying", "pause", "serializers", "video", "19704lCkYsG", "28984jyqcrE", "onPlay", "createVideo", "defineProperties", "showCover", "prototype", "top", "setVideo", "11XBnWJt", "441912dnHmjv", "play", "6605571gVzCLf", "onPause", "videoSrc", "_videoSrc", "41522MDbktW", "draw", "onEnded", "height"];
  return Dn = function() {
    return n;
  }, Dn();
}
function Tn(n, x) {
  var t = Dn();
  return Tn = function(e, s) {
    e = e - 380;
    var i = t[e];
    return i;
  }, Tn(n, x);
}
class Hx extends C {
  constructor(x, t = 0, e = 0, s = 1, i = 1) {
    var r = G;
    super(), this[r(403)] = ![], this.dirty = !![], this[r(397)] = x, this.x = t || 0, this.y = e || 0, this[r(398)] = s || 0, this.height = i || 0;
  }
  [G(412)]() {
    var x = G;
    this[x(403)] = ![];
  }
  [G(418)]() {
    var x = G;
    this[x(403)] = !![], this[x(406)][x(418)]();
  }
  [G(404)]() {
    var x = G;
    this.video[x(404)]();
  }
  [G(415)](x) {
    var t = G;
    this[t(381)] = x, this.video = K0[t(410)](x, function() {
    }), this[t(406)][t(398)] = this[t(398)], this[t(406)][t(385)] = this.height;
  }
  [G(409)](x) {
    var t = G;
    this[t(406)].addEventListener(t(418), x, ![]);
  }
  [G(420)](x) {
    var t = G;
    this[t(406)][t(395)](t(404), x, ![]);
  }
  [G(384)](x) {
    var t = G;
    this[t(406)][t(395)]("ended", x, ![]);
  }
  [G(383)](x) {
    var t = G;
    if (x.beginPath(), x.rect(this[t(394)], this[t(414)], this[t(398)], this[t(385)]), this[t(406)] != null) {
      this[t(406)][t(398)] != this.width && (this[t(406)][t(398)] = this[t(398)], this[t(406)][t(385)] = this[t(385)]);
      let e = this[t(403)] ? this[t(406)] : this.image;
      e != null && x[t(391)](e, this[t(394)], this[t(414)], this.width, this[t(385)]);
    } else
      x[t(400)]();
    this[t(392)](x), this._paintText(x);
  }
}
Xa([v(G(388))], Hx[G(413)], "className", 2), Object[G(411)](Hx[G(413)], { videoSrc: { get() {
  var n = G;
  return this[n(381)];
}, set(n) {
  this.setVideo(n);
} } }), G0(Hx[G(413)], { serializers: { value: C[G(413)][G(405)][G(393)]([G(403), G(380)]) } });
const A = Bn;
(function(n, x) {
  const t = Bn, e = n();
  for (; []; )
    try {
      if (-parseInt(t(507)) / 1 + -parseInt(t(486)) / 2 * (-parseInt(t(522)) / 3) + -parseInt(t(510)) / 4 + -parseInt(t(503)) / 5 * (parseInt(t(478)) / 6) + parseInt(t(504)) / 7 * (parseInt(t(496)) / 8) + -parseInt(t(527)) / 9 + parseInt(t(513)) / 10 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Fn, 450327);
function Fn() {
  const n = ["fold2Offset", "prototype", "36996wMkbKK", "setFold2Offset", "beginOffsetGap", "end", "middle", "6047154UQppZa", "fold1Offset", "1607184WjEerd", "updatePoints", "mid1", "fold2", "getFold1Vec", "AutoFoldLink", "dot", "getAnchorPoints", "74aDvSXj", "concat", "_preAngle", "center", "length", "sign", "defineProperty", "assert failed getMid1AndMid2", "endOffsetGap", "points", "177976SejRKX", "setCenterOffset", "fold1", "begin", "abs", "pointOffsets", "getOwnPropertyDescriptor", "15BEqFvq", "161xwTqMg", "getK", "toFixed", "795001WbAgZH", "getFold1", "looksSame", "293004iVZXhL", "absorb", "resetOffset", "18261120gqQXUT", "getMergedPoints", "getFold2Vec", "serializers", "className", "centerOffset", "getFold2"];
  return Fn = function() {
    return n;
  }, Fn();
}
var Ya = Object[A(492)], qa = Object[A(502)], Va = (n, x, t, e) => {
  const s = A;
  for (var i = e > 1 ? void 0 : e ? qa(x, t) : x, r = n[s(490)] - 1, a; r >= 0; r--)
    (a = n[r]) && (i = (e ? a(x, t, i) : a(i)) || i);
  return e && i && Ya(x, t, i), i;
};
class Xt extends q {
  constructor(x, t, e, s, i) {
    const r = A;
    super(x, t, e, s, i), this[r(524)] = 15, this[r(494)] = 15, this[r(511)] = 3;
  }
  [A(508)](x, t) {
    const e = A;
    let s = this.beginOffsetGap, i = this[e(482)](x, t), r = { x: x.x + i[0] * s, y: x.y + i[1] * s }, a = this.fold1Offset;
    return a && (r.x += a.x, r.y += a.y), r;
  }
  [A(519)](x, t) {
    const e = A;
    let s = this[e(494)], i = this[e(515)](x, t), r = { x: t.x + i[0] * s, y: t.y + i[1] * s }, a = this[e(520)];
    return a && (r.x += a.x, r.y += a.y), r;
  }
  [A(482)](x, t) {
    let s = vs(this[A(499)]);
    if (s == null) {
      let i = 0, r = 0;
      t.x > x.x ? i = 1 : i = -1, s = [i, r];
    }
    return s;
  }
  [A(515)](x, t) {
    let e = vs(this.end);
    if (e == null) {
      let s = 0, i = -1;
      t.y > x.y ? i = -1 : i = 1, e = [s, i];
    }
    return e;
  }
  [A(479)]() {
    const x = A, t = this._calcAZ(), e = t[0], s = t[1], i = this.absorb;
    let r = this[x(482)](e, s);
    if (r[0] == 0 && Math[x(500)](e.x - s.x) < i) {
      let y = (e.x + s.x) * 0.5;
      e.x = y, s.x = y;
    }
    if (r[1] == 0 && Math[x(500)](e.y - s.y) < i) {
      let y = (e.y + s.y) * 0.5;
      e.y = y, s.y = y;
    }
    let a = this[x(508)](e, s), o = this[x(519)](e, s);
    const c = Ka(this, e, s, a, o);
    let h = c[0], l = c[1];
    {
      const y = D[x(509)](h, l, 0.5), g = Math[x(500)](D.getAngle(h, l))[x(506)](6);
      y == ![] && (this._preAngle != g && (this[x(518)] = null), this[x(488)] = g);
      let p = this[x(518)];
      p && (h.x += p.x, h.y += p.y, l.x += p.x, l.y += p.y);
    }
    let d = [e, a, h, l, o, s];
    return this[x(495)] = d, d;
  }
  [A(514)]() {
    const x = A;
    return D.mergePoints(this[x(495)]);
  }
  getWithOffset(x, t) {
    const e = A;
    if (this[e(501)] == null || this.pointOffsets[t] == null)
      return x;
    let s = this[e(501)][t];
    return { x: x.x + s.x, y: x.y + s.y };
  }
  setFold1Offset(x, t) {
    const e = A;
    let s = this.fold1Offset;
    s == null && (s = { x: 0, y: 0 }, this.fold1Offset = s), Bx(this[e(505)](0, 0.5)) ? (s.y = 0, t = 0) : (s.x = 0, x = 0), s.x += x, s.y += t;
  }
  [A(523)](x, t) {
    const e = A;
    let s = this[e(520)];
    s == null && (s = { x: 0, y: 0 }, this[e(520)] = s), Bx(this.getK(4, 0.5)) ? (s.y = 0, t = 0) : (s.x = 0, x = 0), s.x += x, s.y += t;
  }
  [A(497)](x, t) {
    const e = A;
    let s = this[e(518)];
    s == null && (s = { x: 0, y: 0 }, this[e(518)] = s), Bx(this[e(505)](2, 0.5)) ? (s.x = 0, x = 0) : (s.y = 0, t = 0), s.x += x, s.y += t;
  }
  [A(512)]() {
    const x = A;
    this[x(518)] = void 0, this[x(528)] = null, this[x(520)] = null;
  }
}
Va([v(A(483))], Xt[A(521)], A(517), 2);
const it = {};
function Bn(n, x) {
  const t = Fn();
  return Bn = function(e, s) {
    return e = e - 478, t[e];
  }, Bn(n, x);
}
it[S[A(499)]] = function() {
  return this[A(495)][0];
}, it[S[A(498)]] = function() {
  return this[A(495)][1];
}, it[S[A(480)]] = function() {
  return this[A(495)][2];
}, it[S.mid2] = function() {
  return this[A(495)][3];
}, it[S[A(481)]] = function() {
  return this[A(495)][4];
}, it[S[A(525)]] = function() {
  return this[A(495)][5];
}, it[S[A(489)]] = function() {
  const n = A;
  return D.middle(this.points[2], this[n(495)][3]);
};
function jn(n, x) {
  const t = A;
  return Math[t(500)](x[0]) > Math[t(500)](x[1]) ? n.x * Math.sign(x[0]) : n.y * Math[t(491)](x[1]);
}
function ui(n, x, t) {
  let e = jn(n, x);
  return jn(t, x) - e;
}
function bs(n, x, t, e) {
  let s = jn(n, t), i = jn(x, e), r = t[0] != 0;
  return s > i ? r ? { x: n.x, y: x.y } : { x: x.x, y: n.y } : r ? { x: x.x, y: n.y } : { x: n.x, y: x.y };
}
function Ka(n, x, t, e, s) {
  const i = A, r = n[i(482)](x, t), a = n[i(515)](x, t), o = R[i(484)](r, a);
  if (o == 1) {
    let d = bs(e, s, r, a);
    return [d, d];
  }
  if (o == -1) {
    const d = D[i(526)](e, s);
    let y = bs(e, d, r, r), g = bs(s, d, a, a);
    return [y, g];
  }
  let c = Ce(x, e, t, s, !![]), h = ui(x, r, c), l = ui(t, a, c);
  if (h > 0 && l > 0)
    return [c, c];
  {
    const d = [-r[1], r[0]], y = { x: e.x + d[0], y: e.y + d[1] }, g = [-a[1], a[0]], p = { x: s.x + g[0], y: s.y + g[1] };
    let k = Ce(e, y, s, p, !![]);
    if (X0(k), k != null)
      return [k, k];
  }
  throw new Error(i(493));
}
G0(Xt[A(521)], { DefaultPositions: { value: it }, serializers: { value: q[A(521)][A(516)][A(487)]([A(524), "endOffsetGap", "fold1Offset", "fold2Offset", A(518)]) } }), Xt[A(521)][A(485)] = function() {
  const n = A;
  let x = this[n(514)](), t = x[n(490)];
  return t < 4 ? [n(499), n(525)] : t == 4 || t == 5 ? [n(499), n(525), n(498), n(481)] : [n(499), "end", n(498), n(481), n(489)];
};
const r0 = Nn;
(function(n, x) {
  const t = Nn, e = n();
  for (; []; )
    try {
      if (parseInt(t(417)) / 1 * (parseInt(t(406)) / 2) + -parseInt(t(422)) / 3 * (parseInt(t(416)) / 4) + -parseInt(t(460)) / 5 * (parseInt(t(452)) / 6) + -parseInt(t(424)) / 7 + -parseInt(t(413)) / 8 + -parseInt(t(414)) / 9 + parseInt(t(456)) / 10 * (parseInt(t(440)) / 11) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(zn, 176252);
function zn() {
  const n = ["connectable", "命中2", "54mpbLaS", "createLabel", "614411GybaPg", "inLinks", "addChild", "end", "editable", "fromPoints", "label", "removeChild", "createPologyNode", "unlink", "disconnect", "parent", "getCenter", "width", "Polygon", "log", "9748354hFDxwB", "height", "getRect", "translateObjectsCenterTo", "ArrowShape", "setXYwithChildFixed", "endArrow", "beginArrow", "target", "outLinks", "命中1", "draggable", "1878PWmbes", "asEndArrow", "mouseEnabled", "createArrow", "10agWfkK", "getUnionRect", "setShape", "isDisplayObjectTarget", "3825aZSydK", "children", "travel", "forEach", "asLabel", "alignOriginToLink", "12400VTXfwZ", "concat", "getChildren", "text", "getEndPoint", "resizeTo", "union", "2055144XLTVqZ", "2494413hdtvVH", "length", "43532AziyaQ", "56PANXIU", "setBegin", "autoSize"];
  return zn = function() {
    return n;
  }, zn();
}
function Nn(n, x) {
  const t = zn();
  return Nn = function(e, s) {
    return e = e - 406, t[e];
  }, Nn(n, x);
}
class $0 {
  static [r0(432)](x, t = 1, e = 1) {
    const s = r0;
    let i = new C();
    return i.setShape(e0[s(438)](x)), i[s(411)](t, e), i;
  }
  static [r0(457)](x) {
    const t = r0;
    let e = x[0][t(442)]();
    for (let s = 1; s < x[t(415)]; s++)
      e = K[t(412)](e, x[s][t(442)]());
    return e;
  }
  static [r0(445)](x, t, e) {
    const s = r0;
    let i = x[s(461)];
    x.x += t, x.y += e;
    for (let r = 0; r < i[s(415)]; r++) {
      const a = i[r];
      a instanceof C && (a.x -= t, a.y -= e);
    }
  }
  static sizeFitToChildren(x) {
    const t = r0;
    let e = x[t(408)]();
    if (e[t(415)] == 0)
      return;
    let s = $0[t(457)](e);
    x[t(411)](s[t(437)], s[t(441)]), $0[t(445)](x, s.x + x.width / 2, s.y + x[t(441)] / 2);
  }
  static [r0(443)](x, t, e) {
    const s = r0;
    let i = { x: t, y: e }, r = [];
    r = r[s(407)](x);
    let a = $0[s(457)](r), o = a[s(436)](), c = i.x - o.x, h = i.y - o.y;
    r.forEach((l) => {
      l.translateWith(c, h);
    });
  }
  static [r0(462)](x, t, e, s) {
    const i = r0;
    if (s == null)
      s = [];
    else if (J.hasChild(s, x))
      return null;
    if (t && t(x, e), s.push(x), x instanceof C) {
      let a = x[i(449)];
      if (a != null)
        for (var r = 0; r < a.length; r++) {
          let o = a[r];
          $0[i(462)](o, t, x, s);
        }
    } else
      x instanceof q && x[i(427)][i(459)]() && $0.travel(x.end[i(448)], t, e, s);
    return s;
  }
}
class Vs {
  static [r0(434)](x, t) {
    const e = r0;
    if (x instanceof q) {
      x[e(433)]();
      return;
    }
    let s = x[e(425)];
    s != null && (s.forEach((r) => {
      const a = e;
      if (r[a(435)] != null) {
        if (t != null && t.indexOf(r) != -1) {
          console.log(a(450));
          return;
        }
        r.setEnd(r[a(410)]());
      }
    }), x[e(425)] = []);
    let i = x.outLinks;
    i != null && (i[e(463)]((r) => {
      const a = e;
      if (r[a(435)] != null) {
        if (t != null && t.indexOf(r) != -1) {
          console[a(439)](a(421));
          return;
        }
        r[a(418)](r.getBeginPoint());
      }
    }), x[e(449)] = []);
  }
  static [r0(423)](x, t) {
    const e = r0;
    if (x[e(430)] == null) {
      const s = new _t(t);
      return s[e(428)] = ![], s[e(451)] = ![], s[e(420)] = ![], s[e(454)] = ![], s[e(419)] = !![], s[e(465)]("cb", 0, 0, 0.5), Vs[e(464)](x, s), s;
    }
    return x.label[e(409)] = t, x.label;
  }
  static [r0(464)](x, t) {
    const e = r0;
    x[e(430)] != null && x[e(431)](x[e(430)]), x[e(430)] = t, x[e(461)].indexOf(x[e(430)]) == -1 && x[e(426)](x[e(430)]);
    let s = 0, i = 0.5;
    return x instanceof Ex ? i = 1 : x instanceof pt ? s = 1 : x instanceof Xt && (s = 2), t.setOrigin(s, i), t;
  }
  static [r0(455)](x, t = 10, e = 10) {
    const s = r0;
    let i = new C();
    return i[s(411)](t, e), x == null ? i[s(458)](e0[s(444)]) : i[s(458)](e0[s(429)](x)), i.editable = ![], i[s(451)] = ![], i[s(420)] = ![], i[s(454)] = ![], i;
  }
  static asBeginArrow(x, t) {
    const e = r0;
    return t[e(465)]("lm", 0, 0, 0), x.beginArrow != null && x[e(431)](x[e(447)]), x[e(461)].indexOf(t) == -1 && x.addChild(t), x[e(447)] = t, t;
  }
  static [r0(453)](x, t) {
    const e = r0;
    let s = 1;
    x instanceof Xt ? s = 5 : x instanceof Ex ? s = 2 : x instanceof pt && (s = 3);
    const i = s - 1;
    return t[e(465)]("lm", 0, i, 1), x[e(446)] != null && x[e(431)](x.endArrow), x.children.indexOf(t) == -1 && x[e(426)](t), x[e(446)] = t, t;
  }
}
const h0 = Rn;
(function(n, x) {
  const t = Rn, e = n();
  for (; []; )
    try {
      if (-parseInt(t(484)) / 1 * (parseInt(t(510)) / 2) + -parseInt(t(483)) / 3 * (parseInt(t(498)) / 4) + parseInt(t(494)) / 5 * (-parseInt(t(515)) / 6) + parseInt(t(485)) / 7 + parseInt(t(489)) / 8 + -parseInt(t(480)) / 9 * (parseInt(t(487)) / 10) + parseInt(t(511)) / 11 * (parseInt(t(502)) / 12) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Hn, 122527);
function Rn(n, x) {
  const t = Hn();
  return Rn = function(e, s) {
    return e = e - 474, t[e];
  }, Rn(n, x);
}
var Ls = function() {
};
Ls[h0(486)] = { calculate: function(n, x) {
  const t = h0;
  this.dx = n.x - x.x, this.dy = n.y - x.y, this.d2 = this.dx * this.dx + this.dy * this.dy, this.d = Math[t(513)](this.d2);
} };
function Hn() {
  const n = ["attractiveForce", "initialize", "3153EFIghk", "20354uDcemi", "55048negIpQ", "prototype", "140rQvNXw", "speed", "1622104CHtRta", "push", "origin", "originEdges", "neighbors", "5GfFQtF", "bounds", "setOriginEdgeWeight", "mass", "464UvzytJ", "maxForceDistance", "initNodes", "addLink", "3968520bqkICW", "edges", "getLink", "log", "frame_height", "gravity", "Error Adding Edge: ", "isNode", "10MmwflD", "11kVDFKS", "force", "sqrt", "travel", "910428PFXDcv", "repulsiveForce", "length", "selectedNode", "doLayout", "originWeight", "nodes", "27891joCrHi"];
  return Hn = function() {
    return n;
  }, Hn();
}
class Ua {
  constructor(x, t, e) {
    const s = h0;
    this.originEdges = [], this.frame_width = t, this[s(506)] = e, this[s(491)] = x, this[s(482)](), this[s(500)](x);
  }
  initNodes(x) {
    const t = h0;
    let e = this;
    $0[t(514)](x, function(s, i) {
      const r = t;
      if (s[r(509)] && i != null) {
        let a = i, o = s;
        a == x && e[r(496)](o, e[r(478)]);
        let c = o[r(497)] | 1;
        e.addNode(o, c);
        let h = 30;
        e[r(501)](a, o, h);
      }
    });
  }
  [h0(482)]() {
    const x = h0;
    this[x(478)] = 48, this[x(488)] = 12, this[x(507)] = 50, this[x(499)] = 512, this.nodes = new Array(), this[x(503)] = new Array(), this[x(492)] = new Array();
  }
  originForce(x, t) {
    const e = h0;
    if (this[e(492)][x.id]) {
      if (x.id != this.selectedNode) {
        let s = this.originEdges[x.id], i = (t.d - s) / s;
        x.force.x += i * (t.dx / t.d), x[e(512)].y += i * (t.dy / t.d);
      }
    } else if (x.id != this[e(476)]) {
      let s = this[e(507)] * x[e(497)] * this[e(491)].mass / t.d2, i = this[e(499)] - t.d;
      i > 0 && (s *= Math[e(505)](i)), s < 1024 && (x.force.x -= s * t.dx / t.d, x.force.y -= s * t.dy / t.d);
    }
  }
  [h0(481)](x, t, e) {
    const s = h0;
    let i = this.edges[x.id][t.id];
    if (i += 3 * (x.neighbors + t[s(493)]), i) {
      let r = (e.d - i) / i;
      x.id != this[s(476)] && (x[s(512)].x -= r * e.dx / e.d, x[s(512)].y -= r * e.dy / e.d), t.id != this.selectedNode && (t[s(512)].x += r * e.dx / e.d, t[s(512)].y += r * e.dy / e.d);
    }
  }
  [h0(474)](x, t, e) {
    const s = h0;
    let i = this[s(507)] * x.mass * t[s(497)] / e.d2, r = this[s(499)] - e.d;
    r > 0 && (i *= Math[s(505)](r)), i < 1024 && (x[s(512)].x += i * e.dx / e.d, x[s(512)].y += i * e.dy / e.d);
  }
  [h0(477)]() {
    this.applyForce();
  }
  applyForce() {
    const x = h0;
    for (var t = 0; t < this[x(479)][x(475)]; t++) {
      let s = this[x(479)][t];
      for (var e = 0; e < this[x(479)].length; e++)
        if (t != e) {
          let r = this.nodes[e], a = new Ls();
          a.calculate(s, r), this[x(504)](s.id, r.id) != null && this[x(481)](s, r, a), t != this.selectedNode && this[x(474)](s, r, a);
        }
      let i = new Ls();
      i.calculate(this.origin, s), this.originForce(s, i), s[x(512)].x *= this.speed, s.force.y *= this[x(488)], s.x += s[x(512)].x, s.y += s[x(512)].y, s[x(512)].x = 0, s[x(512)].y = 0;
    }
  }
  [h0(495)](x) {
    const t = h0;
    let e = 12, s = e * 2 + 4, i = x.x, r = x.x + s, a = x.y, o = x.y + s;
    i < 0 && (x.x = 0), a < 0 && (x.y = 0), r > this.frame_width && (x.x = this.frame_width - s), o > this[t(506)] && (x.y = this.frame_height - s);
  }
  [h0(496)](x, t) {
    this.originEdges[x.id] = t;
  }
  addNode(x, t) {
    const e = h0;
    x[e(497)] = t | 1, x[e(493)] = x[e(493)] | 0, x.force = { x: 0, y: 0 }, this[e(479)][e(490)](x);
  }
  getLink(x, t) {
    let s = this[h0(503)][x];
    return s == null ? null : s[t];
  }
  [h0(501)](x, t, e) {
    const s = h0;
    !this[s(503)][x.id] && (this.edges[x.id] = new Object()), this[s(503)][x.id][t.id] = e;
    try {
      x[s(493)]++, t.neighbors++;
    } catch (i) {
      console[s(505)](s(508) + i);
    }
  }
}
function Wn() {
  const n = ["18kaoZMc", "_calcAZ", "updatePoints", "arc", "17563INUbfK", "atan2", "sqrt", "abs", "getPoints", "length", "20AtKScI", "anticlockwise", "7448608DUkzLT", "direction", "908967aiJgDd", "getOwnPropertyDescriptor", "drawPoints", "1125390gNoDTR", "clockwise", "156pmqahK", "className", "concat", "cos", "getPoint", "serializers", "prototype", "23942mfaLaK", "_OBBPoints", "sin", "398702eGnDRX", "defineProperty", "ArcLink", "9571090OEbvQC"];
  return Wn = function() {
    return n;
  }, Wn();
}
const l0 = Xn;
(function(n, x) {
  const t = Xn, e = n();
  for (; []; )
    try {
      if (parseInt(t(241)) / 1 + -parseInt(t(244)) / 2 + parseInt(t(262)) / 3 * (-parseInt(t(258)) / 4) + -parseInt(t(265)) / 5 + parseInt(t(267)) / 6 * (-parseInt(t(252)) / 7) + parseInt(t(260)) / 8 + parseInt(t(248)) / 9 * (parseInt(t(247)) / 10) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Wn, 864628);
var Ga = Object[l0(245)], Ja = Object[l0(263)], fi = (n, x, t, e) => {
  const s = l0;
  for (var i = e > 1 ? void 0 : e ? Ja(x, t) : x, r = n[s(257)] - 1, a; r >= 0; r--)
    (a = n[r]) && (i = (e ? a(x, t, i) : a(i)) || i);
  return e && i && Ga(x, t, i), i;
};
class Wx extends q {
  constructor(x, t, e, s, i) {
    super(x, t, e, s, i);
  }
  [l0(264)](x, t) {
    const e = l0;
    let s = t[0], i = t[t.length - 1];
    t[1];
    let r = (s.x + i.x) / 2, a = (s.y + i.y) / 2, o = i.x - s.x, c = i.y - s.y, h = Math[e(254)](o * o + c * c) / 2, l = Math[e(253)](c, o);
    this[e(261)] != e(259) && (l += Math.PI);
    let d = l + Math.PI;
    x.beginPath(), x[e(251)](r, a, h, l, d);
  }
  [l0(242)]() {
    const x = l0;
    let t = this[x(256)](), e = this[x(238)](0.5);
    return [t[0], e, t[1]];
  }
  getPoint(x, t = 0) {
    const e = l0;
    let s = this[e(256)](), i = s[0], r = s[s[e(257)] - 1], a = (i.x + r.x) / 2, o = (i.y + r.y) / 2, c = r.x - i.x, h = r.y - i.y, l = Math.sqrt(c * c + h * h) / 2, d = Math[e(253)](h, c);
    this[e(261)] != e(259) && (d += Math.PI);
    let y = d + Math.PI, g = d + (y - d) * x;
    return { x: a + l * Math[e(237)](g), y: o + l * Math.sin(g) };
  }
  [l0(250)]() {
    const x = l0;
    let t = this[x(249)](), e = t[0], s = t[1], i = (e.x + s.x) / 2, r = (e.y + s.y) / 2, a = s.x - e.x, o = s.y - e.y, c = Math[x(255)](Math[x(254)](a * a + o * o) * 0.5);
    c *= Math[x(254)](2);
    let h = Math.PI / 4, l = Math.atan2(o, a);
    l >= Math.PI / 2 && l < Math.PI || (l >= 0 && l < Math.PI / 2 ? h += Math.PI / 2 : l <= 0 && l > -Math.PI / 2 ? h += Math.PI : h -= Math.PI / 2);
    let d = { x: i + c * Math[x(243)](h), y: r + c * Math[x(237)](h) };
    return [e, d, s];
  }
}
fi([v(l0(246))], Wx.prototype, l0(268), 2), fi([v(l0(266))], Wx.prototype, l0(261), 2), G0(Wx[l0(240)], { serializers: { value: q[l0(240)][l0(239)][l0(236)]([l0(261)]) } });
function Xn(n, x) {
  const t = Wn();
  return Xn = function(e, s) {
    return e = e - 236, t[e];
  }, Xn(n, x);
}
const Z = Sx;
(function(n, x) {
  const t = Sx, e = n();
  for (; []; )
    try {
      if (parseInt(t(426)) / 1 + -parseInt(t(413)) / 2 * (-parseInt(t(416)) / 3) + -parseInt(t(438)) / 4 * (parseInt(t(407)) / 5) + parseInt(t(445)) / 6 * (-parseInt(t(419)) / 7) + parseInt(t(424)) / 8 * (parseInt(t(417)) / 9) + parseInt(t(442)) / 10 * (-parseInt(t(444)) / 11) + -parseInt(t(437)) / 12 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Yn, 397162);
var Za = Object.defineProperty, Qa = Object.getOwnPropertyDescriptor, $a = (n, x, t, e) => {
  const s = Sx;
  for (var i = e > 1 ? void 0 : e ? Qa(x, t) : x, r = n[s(420)] - 1, a; r >= 0; r--)
    (a = n[r]) && (i = (e ? a(x, t, i) : a(i)) || i);
  return e && i && Za(x, t, i), i;
};
function Yn() {
  const n = ["concat", "calcCtrlPoint2", "3445776MXQnpU", "2346620ijeugD", "_ctrlPoint1", "resetCtrlPoint", "between", "10HEwKbk", "getPoint", "936529gMcBmx", "6irOAgT", "5fhskmY", "ctrlPoint2", "points", "_ctrlPoint2", "begin", "bezierCurveTo", "51342oIelrU", "sqrt", "sin", "75TwxaWp", "16803ZGjBEt", "beginPath", "2167193oLavkC", "length", "cos", "moveTo", "isDragStart", "1240DhMvDP", "ctrlPoint1", "734543bANKCx", "mousedragHandler", "serializers", "_calcAZ", "prototype", "end", "center", "getPoints", "updatePoints"];
  return Yn = function() {
    return n;
  }, Yn();
}
class qn extends q {
  constructor(x, t, e, s, i) {
    super(x, t, e, s, i);
  }
  [Z(427)](x) {
    const t = Z;
    if (super[t(427)](x), this.ctrlPoint1 || this[t(408)]) {
      const e = x[t(423)], s = x.toObjectLocalDXY(this);
      let i = s.dx, r = s.dy, a = this[t(425)], o = this[t(408)];
      a && (e && (this[t(439)] = { x: a.x, y: a.y }), a.x = this._ctrlPoint1.x + i, a.y = this[t(439)].y + r), this[t(408)] && (e && (this[t(410)] = { x: o.x, y: o.y }), o.x = this._ctrlPoint2.x + i, o.y = this[t(410)].y + r);
    }
  }
  drawPoints(x, t) {
    const e = Z;
    let s = t[0], i = t[1];
    t[2];
    let r = t[3], a = t[4];
    x[e(418)](), x[e(422)](s.x, s.y), x[e(412)](i.x, i.y, r.x, r.y, a.x, a.y);
  }
  calcCtrlPoint1(x, t, e) {
    const s = Z;
    return this[s(425)] != null ? this[s(425)] : di(x, e);
  }
  calcCtrlPoint2(x, t, e) {
    const s = Z;
    return this[s(408)] != null ? this[s(408)] : di(t, e);
  }
  [Z(440)]() {
    this.ctrlPoint1 = void 0, this.ctrlPoint2 = void 0;
  }
  [Z(443)](x, t) {
    const e = Z;
    let s = this[e(433)](), i = s[0], r = s[1];
    s[2];
    let a = s[3], o = s[4], c = r, h = a, l = D[e(441)](i, c, x), d = D[e(441)](c, h, x), y = D[e(441)](h, o, x), g = D.between(l, d, x), p = D[e(441)](d, y, x);
    return D[e(441)](g, p, x);
  }
  [Z(434)]() {
    const x = Z, t = this[x(429)](), e = t[0], s = t[1];
    let i = { x: (e.x + s.x) / 2, y: (e.y + s.y) / 2 }, r = this.calcCtrlPoint1(e, s, i), a = this[x(436)](e, s, i);
    return [e, r, i, a, s];
  }
}
$a([v("BezierLink")], qn[Z(430)], "className", 2);
const St = {};
function Sx(n, x) {
  const t = Yn();
  return Sx = function(e, s) {
    return e = e - 407, t[e];
  }, Sx(n, x);
}
St[S[Z(411)]] = function() {
  return this.points[0];
}, St[S[Z(431)]] = function() {
  return this.points[1];
}, St[S[Z(432)]] = function() {
  return this[Z(443)](0.5, 0);
}, St[S[Z(425)]] = function() {
  const n = Z;
  return this[n(425)] != null ? this[n(425)] : this.calcCtrlPoint1(this.points[0], this[n(409)][1]);
}, St[S[Z(408)]] = function() {
  const n = Z;
  return this[n(408)] != null ? this.ctrlPoint2 : this[n(436)](this[n(409)][0], this[n(409)][1]);
}, G0(qn[Z(430)], { DefaultPositions: { value: St }, serializers: { value: q[Z(430)][Z(428)][Z(435)]([Z(425), Z(408)]) } }), qn[Z(430)].getAnchorPoints = function() {
  const n = Z;
  return [n(411), "end", n(425), n(408)];
};
function di(n, x) {
  const t = Z;
  let e = x.x - n.x, s = x.y - n.y, i = (x.x + n.x) / 2, r = (x.y + n.y) / 2, a = Math[t(414)](e * e + s * s) / 2, o = Math.atan2(s, e) + Math.PI / 2;
  return { x: i + a * Math[t(421)](o), y: r + a * Math[t(415)](o) };
}
const f = Kn;
(function(n, x) {
  const t = Kn, e = n();
  for (; []; )
    try {
      if (parseInt(t(137)) / 1 * (-parseInt(t(290)) / 2) + -parseInt(t(303)) / 3 * (parseInt(t(208)) / 4) + -parseInt(t(283)) / 5 * (-parseInt(t(234)) / 6) + parseInt(t(186)) / 7 * (parseInt(t(271)) / 8) + parseInt(t(153)) / 9 + parseInt(t(317)) / 10 + parseInt(t(167)) / 11 * (-parseInt(t(318)) / 12) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Vn, 596345);
var xr = [f(207), "#2d2e36", f(200), f(276), f(170), f(194), f(229), f(212), f(237), f(184), f(162), f(172), f(206), f(315), "#346c9c", f(275), f(151), f(282), f(309), f(272), f(125)], ys = [xr, ["#dcb375", f(253), f(316), f(289), f(259)], ["#D73417", f(136), f(149)], [f(251), f(157), f(252), f(288), f(321)], [f(182), f(175), "#d84870", "#f18851", f(310)], [f(293), "#24653E", f(250), f(178), "#f0ac68"], [f(139), f(280), f(263), f(128), f(243)], ["#e85827", "#fb991c", f(307), f(279), f(320)], [f(313), f(230), f(121), f(131), f(291)], [f(222), f(147), f(244), f(155), "#ebe0c4"]];
class bt {
  constructor(x) {
    const t = f;
    this.r = 1, this.g = 1, this.b = 1, this.o = 1, arguments[t(189)] === 3 ? this[t(124)](arguments[0], arguments[1], arguments[2]) : this[t(180)](x);
  }
  [f(180)](x) {
    const t = f;
    return x instanceof bt ? this[t(298)](x) : typeof x === t(168) ? this[t(319)](x) : typeof x == "string" && this[t(281)](x), this;
  }
  [f(319)](x) {
    return x = Math[f(286)](x), this.r = (x >> 16 & 255) / 255, this.g = (x >> 8 & 255) / 255, this.b = (x & 255) / 255, this;
  }
  [f(124)](x, t, e) {
    return this.r = x, this.g = t, this.b = e, this;
  }
  [f(239)](x, t, e) {
    if (t === 0)
      this.r = this.g = this.b = e;
    else {
      let s = function(a, o, c) {
        return c < 0 && (c += 1), c > 1 && (c -= 1), c < 0.16666666666666666 ? a + (o - a) * 6 * c : c < 0.5 ? o : c < 0.6666666666666666 ? a + (o - a) * 6 * (0.6666666666666666 - c) : a;
      }, i = e <= 0.5 ? e * (1 + t) : e + t - e * t, r = 2 * e - i;
      this.r = s(r, i, x + 1 / 3), this.g = s(r, i, x), this.b = s(r, i, x - 1 / 3);
    }
    return this;
  }
  [f(281)](x) {
    const t = f;
    if (/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i[t(274)](x)) {
      let e = /^rgb\((\d+), ?(\d+), ?(\d+)\)$/i[t(154)](x);
      return this.r = Math.min(255, parseInt(e[1], 10)) / 255, this.g = Math[t(165)](255, parseInt(e[2], 10)) / 255, this.b = Math.min(255, parseInt(e[3], 10)) / 255, this;
    }
    if (/^rgba\((\d+),?(\d+),?(\d+),?(\S+)\)$/i.test(x)) {
      let e = /^rgba\((\d+),?(\d+),?(\d+),?(\S+)\)$/i.exec(x);
      return this.r = Math[t(165)](255, parseInt(e[1], 10)) / 255, this.g = Math[t(165)](255, parseInt(e[2], 10)) / 255, this.b = Math[t(165)](255, parseInt(e[3], 10)) / 255, this.o = parseInt(e[4]), this;
    }
    if (/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i[t(274)](x)) {
      let e = /^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i[t(154)](x);
      return this.r = Math[t(165)](100, parseInt(e[1], 10)) / 100, this.g = Math[t(165)](100, parseInt(e[2], 10)) / 100, this.b = Math[t(165)](100, parseInt(e[3], 10)) / 100, this;
    }
    if (/^\#([0-9a-f]{6})$/i[t(274)](x)) {
      let e = /^\#([0-9a-f]{6})$/i.exec(x);
      return this[t(319)](parseInt(e[1], 16)), this;
    }
    if (/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(x)) {
      let e = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i[t(154)](x);
      return this[t(319)](parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3], 16)), this;
    }
    return /^(\w+)$/i[t(274)](x) ? (this[t(319)](er[x]), this) : this;
  }
  [f(298)](x) {
    return this.r = x.r, this.g = x.g, this.b = x.b, this;
  }
  [f(203)](x) {
    return this.r = x.r * x.r, this.g = x.g * x.g, this.b = x.b * x.b, this;
  }
  copyLinearToGamma(x) {
    const t = f;
    return this.r = Math[t(145)](x.r), this.g = Math[t(145)](x.g), this.b = Math[t(145)](x.b), this;
  }
  [f(226)]() {
    let x = this.r, t = this.g, e = this.b;
    return this.r = x * x, this.g = t * t, this.b = e * e, this;
  }
  [f(199)]() {
    const x = f;
    return this.r = Math[x(145)](this.r), this.g = Math[x(145)](this.g), this.b = Math.sqrt(this.b), this;
  }
  [f(166)]() {
    return this.r * 255 << 16 ^ this.g * 255 << 8 ^ this.b * 255 << 0;
  }
  getHexString() {
    const x = f;
    return (x(190) + this[x(166)]()[x(308)](16))[x(294)](-6);
  }
  [f(141)](x) {
    const t = f;
    let e = x || { h: 0, s: 0, l: 0 }, s = this.r, i = this.g, r = this.b, a = Math[t(228)](s, i, r), o = Math[t(165)](s, i, r), c, h, l = (o + a) / 2;
    if (o === a)
      c = 0, h = 0;
    else {
      let d = a - o;
      switch (h = l <= 0.5 ? d / (a + o) : d / (2 - a - o), a) {
        case s:
          c = (i - r) / d + (i < r ? 6 : 0);
          break;
        case i:
          c = (r - s) / d + 2;
          break;
        case r:
          c = (s - i) / d + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = h, e.l = l, e;
  }
  [f(160)](x) {
    const t = f;
    return x != null ? (x = x[t(264)](1), t(144) + (this.r * 255 | 0) + "," + (this.g * 255 | 0) + "," + (this.b * 255 | 0) + "," + x + ")") : t(127) + (this.r * 255 | 0) + "," + (this.g * 255 | 0) + "," + (this.b * 255 | 0) + ")";
  }
  [f(267)](x, t, e) {
    let i = this[f(141)]();
    return i.h += x, i.s += t, i.l += e, this.setHSL(i.h, i.s, i.l), this;
  }
  [f(242)](x) {
    return this.r += x.r, this.g += x.g, this.b += x.b, this;
  }
  [f(159)](x, t) {
    return this.r = x.r + t.r, this.g = x.g + t.g, this.b = x.b + t.b, this;
  }
  [f(305)](x) {
    return this.r += x, this.g += x, this.b += x, this;
  }
  [f(299)](x) {
    return this.r *= x.r, this.g *= x.g, this.b *= x.b, this;
  }
  [f(268)](x) {
    return this.r *= x, this.g *= x, this.b *= x, this;
  }
  [f(158)](x, t) {
    return this.r += (x.r - this.r) * t, this.g += (x.g - this.g) * t, this.b += (x.b - this.b) * t, this;
  }
  equals(x) {
    return x.r === this.r && x.g === this.g && x.b === this.b;
  }
  [f(247)](x) {
    return this.r = x[0], this.g = x[1], this.b = x[2], this;
  }
  [f(142)]() {
    return [this.r, this.g, this.b];
  }
  [f(285)]() {
    const x = f;
    return new bt()[x(124)](this.r, this.g, this.b);
  }
  static [f(248)](x) {
    const t = f;
    x == null && (x = xr);
    let e = Math.random() * x[t(189)] | 0;
    return x[e];
  }
  static randomScheme() {
    const x = f;
    let t = Math[x(248)]() * ys[x(189)] | 0;
    return ys[t];
  }
  static getScheme(x) {
    return ys[x];
  }
}
function Vn() {
  const n = ["#A52A2A", "#1ba784", "#708090", "314909xEdSwj", "#E9967A", "#FFFACD", "length", "000000", "#FF00FF", "#40E0D0", "#9400D3", "#2bae85", "#CD853F", "#FFFAF0", "#E6E6FA", "#ADD8E6", "convertLinearToGamma", "#FA7E23", "#DB7093", "#F8F8FF", "copyGammaToLinear", "#808000", "#32CD32", "#2474b5", "#475164", "44740SceCqr", "#AFEEEE", "#FFE4E1", "#008B8B", "#12A182", "#EE82EE", "#3CB371", "#E0FFFF", "#FFEFD5", "#0000CD", "#191970", "#FFEBCD", "#DCDCDC", "#FAFAD2", "#6a4307", "#483D8B", "#0000FF", "#FF69B4", "convertGammaToLinear", "#BA55D3", "max", "#248067", "#3fb9c1", "#8FBC8F", "#D2B48C", "#6B8E23", "201462ZRYHyF", "#FFE4B5", "#FFFFFF", "#5e5314", "#B8860B", "setHSL", "#00FA9A", "#FFF8DC", "add", "#f6d82c", "#d2865a", "#DC143C", "#8B0000", "fromArray", "random", "#EEE8AA", "#3c968a", "#35aeff", "#ff63b3", "#c5aa99", "#778899", "#D8BFD8", "#DAA520", "#B22222", "#48D1CC", "#ccbbaa", "#FFFF00", "#5F9EA0", "#90EE90", "#567f4f", "toFixed", "#00FF00", "#87CEFA", "offsetHSL", "multiplyScalar", "#FF7F50", "#4B0082", "136voiUbt", "#EE3f4d", "#FDF5E6", "test", "#61649f", "#FF9900", "#F0F8FF", "#7FFFD4", "#ffde5f", "#707556", "setStyle", "#7e2065", "5xSfiFC", "#4682B4", "clone", "floor", "#F5F5F5", "#f4a146", "#8e8b86", "22rdBryH", "#ffe99b", "#FFF0F5", "#32510E", "slice", "#FFC0CB", "#00BFFF", "#F5F5DC", "copy", "multiply", "#FF8C00", "#A0522D", "#6A5ACD", "294KgTmNX", "#FFA07A", "addScalar", "#98FB98", "#fdbc3a", "toString", "#681752", "#f3ca43", "#FF4500", "#FF0000", "#15838a", "#00CED1", "#2775B6", "#ca7d61", "7065290TvEYvB", "12jfpaat", "setHex", "#ffdc99", "#f7e853", "#006400", "#7ed1d2", "#DEB887", "#F5DEB3", "setRGB", "#C02c38", "#DA70D6", "rgb(", "#f4642b", "#F4A460", "#008080", "#d2Dfb2", "#F0E68C", "#6495ED", "#FF1493", "#2E8B57", "#FDD163", "51838fzUvOb", "#00FF7F", "#203046", "#00008B", "getHSL", "toArray", "#556B2F", "rgba(", "sqrt", "#C71585", "#cb8a2a", "#008000", "#3586E3", "#800080", "#C06f98", "#FFFFE0", "7224579nAsGJC", "exec", "#b6ca98", "#9370DB", "#5ae292", "lerp", "addColors", "getStyle", "#B0C4DE", "#0f1423", "#808080", "#FFDEAD", "min", "getHex", "494153SOkSci", "number", "#FFFFF0", "#FED71A", "#2F4F4F", "#4E7ca1", "#00FFFF", "#BC8F8F", "#97893f", "#1E90FF", "#FF6347", "#d7d351", "#228B22", "set", "#D3D3D3", "#166E84"];
  return Vn = function() {
    return n;
  }, Vn();
}
const er = { aliceblue: f(277), antiquewhite: "#FAEBD7", aqua: f(173), aquamarine: f(278), azure: "#F0FFFF", beige: f(297), bisque: "#FFE4C4", black: "#000000", blanchedalmond: f(219), blue: f(224), blueviolet: "#8A2BE2", brown: f(183), burlywood: f(122), cadetblue: f(261), chartreuse: "#7FFF00", chocolate: "#D2691E", coral: f(269), cornflowerblue: f(133), cornsilk: f(241), crimson: f(245), cyan: "#00FFFF", darkblue: f(140), darkcyan: f(211), darkgoldenrod: f(238), darkgray: "#A9A9A9", darkgreen: f(120), darkgrey: "#A9A9A9", darkkhaki: "#BDB76B", darkmagenta: "#8B008B", darkolivegreen: f(143), darkorange: f(300), darkorchid: "#9932CC", darkred: f(246), darksalmon: f(187), darkseagreen: f(231), darkslateblue: f(223), darkslategray: f(171), darkslategrey: f(171), darkturquoise: f(314), darkviolet: f(193), deeppink: f(134), deepskyblue: f(296), dimgray: "#696969", dimgrey: "#696969", dodgerblue: f(176), firebrick: f(257), floralwhite: f(196), forestgreen: f(179), fuchsia: f(191), gainsboro: f(220), ghostwhite: f(202), gold: "#FFD700", goldenrod: f(256), gray: f(163), green: f(148), greenyellow: "#ADFF2F", grey: f(163), honeydew: "#F0FFF0", hotpink: f(225), indianred: "#CD5C5C", indigo: f(270), ivory: f(169), khaki: f(132), lavender: f(197), lavenderblush: f(292), lawngreen: "#7CFC00", lemonchiffon: f(188), lightblue: f(198), lightcoral: "#F08080", lightcyan: f(215), lightgoldenrodyellow: f(221), lightgray: "#D3D3D3", lightgreen: f(262), lightgrey: f(181), lightpink: "#FFB6C1", lightsalmon: f(304), lightseagreen: "#20B2AA", lightskyblue: f(266), lightslategray: "#778899", lightslategrey: f(254), lightsteelblue: f(161), lightyellow: f(152), lime: f(265), limegreen: f(205), linen: "#FAF0E6", magenta: f(191), maroon: "#800000", mediumaquamarine: "#66CDAA", mediumblue: f(217), mediumorchid: f(227), mediumpurple: f(156), mediumseagreen: f(214), mediumslateblue: "#7B68EE", mediumspringgreen: f(240), mediumturquoise: f(258), mediumvioletred: f(146), midnightblue: f(218), mintcream: "#F5FFFA", mistyrose: f(210), moccasin: f(235), navajowhite: f(164), navy: "#000080", oldlace: f(273), olive: f(204), olivedrab: f(233), orange: "#FFA500", orangered: f(311), orchid: f(126), palegoldenrod: f(249), palegreen: f(306), paleturquoise: f(209), palevioletred: f(201), papayawhip: f(216), peachpuff: "#FFDAB9", peru: f(195), pink: f(295), plum: "#DDA0DD", powderblue: "#B0E0E6", purple: f(150), red: f(312), rosybrown: f(174), royalblue: "#4169E1", saddlebrown: "#8B4513", salmon: "#FA8072", sandybrown: f(129), seagreen: f(135), seashell: "#FFF5EE", sienna: f(301), silver: "#C0C0C0", skyblue: "#87CEEB", slateblue: f(302), slategray: f(185), slategrey: "#708090", snow: "#FFFAFA", springgreen: f(138), steelblue: f(284), tan: f(232), teal: f(130), thistle: f(255), tomato: f(177), turquoise: f(192), violet: f(213), wheat: f(123), white: f(236), whitesmoke: f(287), yellow: f(260), yellowgreen: "#9ACD32" };
function Kn(n, x) {
  const t = Vn();
  return Kn = function(e, s) {
    return e = e - 120, t[e];
  }, Kn(n, x);
}
function to(n) {
  const x = f;
  return n != null ? bt[x(248)](bt.getScheme(n)) : bt[x(248)]();
}
const B = Ox;
(function(n, x) {
  const t = Ox, e = n();
  for (; []; )
    try {
      if (-parseInt(t(447)) / 1 * (-parseInt(t(478)) / 2) + parseInt(t(455)) / 3 + parseInt(t(468)) / 4 + -parseInt(t(464)) / 5 + parseInt(t(467)) / 6 + -parseInt(t(450)) / 7 * (-parseInt(t(483)) / 8) + parseInt(t(463)) / 9 * (-parseInt(t(449)) / 10) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Un, 332916);
function Un() {
  const n = ["marks", "getDistance", "sizeWith", "moveTo", "cos", "6gpfufW", "sin", "turnLeft", "forwardToMarks", "direction", "574168vQuGHt", "position", "faceTo", "getAngle", "_position", "_actions", "turnRight", "faceToMark", "199827ixTbRH", "_stepSize", "8772130BpjEru", "63mlEFdH", "addAction", "sizeBy", "size", "stepSize", "1613385jpKgGP", "forward", "forwardToMark", "updateDxy", "moveToMiddle", "jump", "mark", "forwardTo", "18JTDDhE", "3129250yNArqq", "getMark", "_direction", "3830484onWLpD", "1166252jLBzzs", "mark's name is required.", "atan2", "sqrt", "init"];
  return Un = function() {
    return n;
  }, Un();
}
function Ox(n, x) {
  const t = Un();
  return Ox = function(e, s) {
    return e = e - 442, t[e];
  }, Ox(n, x);
}
const Qt = class {
  constructor() {
    const n = Ox;
    this[n(484)] = { x: 0, y: 0 }, this[n(482)] = 0, this[n(454)] = 1, this.dx = 1, this.dy = 1, this[n(472)]();
  }
  [B(472)]() {
    const n = B;
    return this[n(443)] = { x: 0, y: 0 }, this[n(444)] = [], this[n(473)] = {}, this;
  }
  [B(451)](n, x) {
    const t = B;
    let e = { name: n, args: x };
    return this[t(444)].push(e), this;
  }
  [B(461)](n) {
    const x = B;
    if (n == null)
      throw new Error(x(469));
    return this[x(473)][n] = { x: this[x(443)].x, y: this[x(443)].y }, this;
  }
  [B(465)](n) {
    return this.marks[n];
  }
  [B(446)](n) {
    const x = B;
    let t = this[x(465)](n);
    return this[x(485)](t);
  }
  moveToMark(n) {
    const x = B;
    let t = this[x(465)](n);
    return this[x(476)](t);
  }
  [B(457)](n) {
    const x = B;
    let t = this[x(465)](n);
    return this[x(462)](t);
  }
  [B(481)](n) {
    const x = B;
    for (let t = 0; t < n.length; t++) {
      const e = n[t], s = this[x(465)](e);
      this[x(462)](s);
    }
    return this;
  }
  [B(458)]() {
    const n = B;
    let x = this[n(443)], t = this[n(466)], e = this[n(448)], s = x.x + e * Math[n(477)](t), i = x.y + e * Math[n(479)](t);
    return this.dx = s - x.x, this.dy = i - x.y, this;
  }
  [B(485)](n) {
    const x = B, t = n.x, e = n.y;
    return this[x(466)] = Math[x(470)](e - this._position.y, t - this[x(443)].x), this[x(458)](), this;
  }
  forward(n) {
    const x = B;
    return this[x(453)](n), this[x(443)].x += this.dx, this._position.y += this.dy, this[x(451)](Qt.OP[x(456)], [this[x(443)].x, this[x(443)].y]), this;
  }
  [B(460)](n) {
    const x = B;
    n == null && (n = 1);
    for (var t = 0; t < n; t++)
      this[x(443)].x += this.dx, this[x(443)].y += this.dy, this[x(451)](Qt.OP[x(460)], [this[x(443)].x, this[x(443)].y]);
    return this;
  }
  [B(476)](n) {
    const x = B, t = n.x, e = n.y;
    return this[x(443)].x = t, this[x(443)].y = e, this[x(451)](Qt.OP[x(476)], [this[x(443)].x, this[x(443)].y]), this;
  }
  [B(459)](n, x) {
    const t = B;
    let e = { x: (n.x + x.x) / 2, y: (n.y + x.y) / 2 };
    return this[t(476)](e);
  }
  [B(462)](n) {
    const x = B, t = n.x, e = n.y;
    return this[x(443)].x = t, this[x(443)].y = e, this.addAction(Qt.OP[x(462)], [this[x(443)].x, this[x(443)].y]), this;
  }
  [B(480)](n) {
    const x = B;
    return n == null && (n = Math.PI / 2), this._direction = this[x(466)] - n, this.updateDxy(), this;
  }
  [B(445)](n) {
    const x = B;
    return n == null && (n = -Math.PI / 2), this._direction = this[x(466)] + n, this[x(458)](), this;
  }
  [B(453)](n) {
    const x = B;
    return this[x(448)] = n, this[x(458)](), this;
  }
  [B(452)](n) {
    const x = B;
    return this._stepSize *= n, this[x(458)](), this;
  }
  [B(475)](n) {
    const x = B;
    return this._stepSize += n, this[x(458)](), this;
  }
  [B(474)](n) {
    const x = B, t = n.x, e = n.y;
    let s = t - this[x(443)].x, i = e - this._position.y;
    return Math[x(471)](s * s + i * i);
  }
  [B(442)](n) {
    const x = B, t = n.x, e = n.y;
    return Math[x(470)](e - this[x(443)].y, t - this[x(443)].x);
  }
};
let nr = Qt;
nr.OP = { forward: "forward", forwardTo: B(462), moveTo: B(476), jump: B(460) };
const x0 = Jn;
function Gn() {
  const n = ["save", "_actions", "addAction", "restore", "();", "_position", "join", "12ZxXOyw", "style", "length", "ctx.", "isArray", "5319948iUrOhf", "moveTo", "forwardTo", "applyTo", "11wpkAtt", `
 return path;`, "1oCZzIh", "lineTo", "stroke", "arc", "778068tGoKXj", "8SEmXSo", "applyTo's target has no method:", `var path = new Path2D();
`, "580jLvjho", "name", "3771834FJDacC", "toCmd", "beginPath", "text", "string", "circle", "push", "apply", "2598560jDIWjl", "toCmds", "fill", "toFunction", "19696HZHTLR", "4496786bGtfkd", "args", "6102585OsPazS"];
  return Gn = function() {
    return n;
  }, Gn();
}
function Jn(n, x) {
  const t = Gn();
  return Jn = function(e, s) {
    return e = e - 232, t[e];
  }, Jn(n, x);
}
(function(n, x) {
  const t = Jn, e = n();
  for (; []; )
    try {
      if (parseInt(t(250)) / 1 * (parseInt(t(254)) / 2) + -parseInt(t(260)) / 3 + parseInt(t(272)) / 4 * (-parseInt(t(258)) / 5) + parseInt(t(239)) / 6 * (parseInt(t(273)) / 7) + -parseInt(t(255)) / 8 * (-parseInt(t(275)) / 9) + -parseInt(t(268)) / 10 + parseInt(t(248)) / 11 * (parseInt(t(244)) / 12) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Gn, 706906);
var pi = { forward: x0(251), forwardTo: x0(251), moveTo: x0(245), jump: x0(245) };
class xo extends nr {
  constructor() {
    super();
  }
  [x0(247)](x) {
    const t = x0;
    let e = this[t(233)];
    for (let s = 0; s < e[t(241)]; s++) {
      const i = e[s];
      let r = pi[i.name];
      const a = i[t(274)];
      r == null && (r = i[t(259)]);
      let o = x[r];
      if (o == null)
        throw new Error(t(256) + r);
      if (a == null) {
        o[t(267)](x, []);
        continue;
      }
      a[t(241)] ? o[t(267)](x, a) : x[r] = a;
    }
    return this;
  }
  [x0(271)]() {
    let x = this.toCmd();
    return new Function("ctx", x);
  }
  toPath2D() {
    const x = x0;
    let t = this[x(261)]("path.");
    return t = x(257) + t, t = t + x(249), new Function("path", t)();
  }
  [x0(261)](x) {
    const t = x0;
    return this[t(269)](x)[t(238)](`
`);
  }
  toCmds(x) {
    const t = x0;
    let e = this[t(233)], s = [];
    x == null && (x = t(242));
    for (let i = 0; i < e[t(241)]; i++) {
      const r = e[i];
      let a = pi[r.name];
      const o = r[t(274)];
      if (a == null && (a = r.name), o == null) {
        s[t(266)](x + a + t(236));
        continue;
      }
      o.length ? s.push(x + a + "(" + bi(o) + ");") : s.push(x + a + "=" + bi(o) + ";");
    }
    return s;
  }
  [x0(265)](x) {
    const t = x0;
    return this[t(234)](t(253), [this._position.x, this[t(237)].y, x, 0, Math.PI * 2]), this;
  }
  [x0(240)](x, t) {
    return this[x0(234)](x, t), this;
  }
  [x0(263)](x) {
    const t = x0;
    return this.addAction("fillText", [x, this[t(237)].x, this[t(237)].y]), this;
  }
  [x0(251)](x) {
    return this[x0(246)](x), this;
  }
  beginPath() {
    const x = x0;
    return this[x(234)](x(262)), this;
  }
  [x0(252)]() {
    return this[x0(234)]("stroke"), this;
  }
  [x0(270)]() {
    return this.addAction("fill"), this;
  }
  save() {
    const x = x0;
    return this[x(234)](x(232)), this;
  }
  [x0(235)]() {
    return this.addAction("restore"), this;
  }
}
function bi(n) {
  const x = x0;
  if (!Array[x(243)](n) && typeof n == "string")
    return '"' + n + '"';
  let t = "";
  for (let e = 0; e < n.length; e++) {
    let s = n[e];
    typeof s == x(264) ? t += '"' + s + '"' : t += "" + s, e + 1 < n[x(241)] && (t += ",");
  }
  return t;
}
const z0 = Qn;
(function(n, x) {
  const t = Qn, e = n();
  for (; []; )
    try {
      if (parseInt(t(465)) / 1 + parseInt(t(454)) / 2 * (parseInt(t(456)) / 3) + -parseInt(t(432)) / 4 + parseInt(t(437)) / 5 + -parseInt(t(433)) / 6 * (parseInt(t(449)) / 7) + -parseInt(t(445)) / 8 * (parseInt(t(444)) / 9) + parseInt(t(450)) / 10 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Zn, 302954);
var eo = Object[z0(457)], no = Object[z0(451)], so = (n, x, t, e) => {
  for (var s = e > 1 ? void 0 : e ? no(x, t) : x, i = n.length - 1, r; i >= 0; i--)
    (r = n[i]) && (s = (e ? r(x, t, s) : r(s)) || s);
  return e && s && eo(x, t, s), s;
};
function Zn() {
  const n = ["beginPath", "18qcMQdA", "fill", "62169PUbaoJ", "defineProperty", "padding", "mousePickupPath", "borderWidth", "height", "strokeAndFill", "concat", "down", "248616SSnMDo", "Unknow RatioNode's direction:", "left", "2294688RxYxAd", "3295686LLyisi", "rect", "_paintText", "serializers", "175680rwMRKC", "ratio", "direction", "fillStyle", "prototype", "_style", "RatioNode", "83997NbtkZx", "72OObDhU", "className", "width", "top", "7gddiKM", "10396450uqKwVX", "getOwnPropertyDescriptor", "right"];
  return Zn = function() {
    return n;
  }, Zn();
}
function Qn(n, x) {
  const t = Zn();
  return Qn = function(e, s) {
    return e = e - 432, t[e];
  }, Qn(n, x);
}
class Ms extends C {
  constructor(x, t = 0, e = 0, s = 1, i = 1) {
    const r = z0;
    super(x, t, e, s, i), this[r(438)] = 0.5, this[r(439)] = S[r(452)];
  }
  draw(x) {
    const t = z0;
    let e = this[t(442)], s = e[t(440)];
    e.fillStyle = null, this[t(462)](x), this[t(459)](x), e[t(440)] = s, x[t(453)](), x.fillStyle = s;
    let i = e[t(460)] || 0, r = e[t(458)] || 0, a = r * 2 + i * 2, o = this[t(467)] + i + r, c = this[t(448)] + i + r, h = (this[t(447)] - a) * this[t(438)], l = (this[t(461)] - a) * this[t(438)];
    if (this[t(439)] == S[t(452)])
      l = this[t(461)] - a;
    else if (this[t(439)] == S[t(464)])
      h = this[t(447)] - a;
    else if (this[t(439)] == S[t(467)])
      o = this[t(467)] + this[t(447)] - i - r - h, l = this[t(461)] - a;
    else if (this[t(439)] == S.up)
      c = this[t(448)] + this.height - i - r - l, h = this[t(447)] - a;
    else
      throw new Error(t(466) + this[t(439)]);
    x[t(434)](o, c, h, l), x[t(455)](), this[t(435)](x);
  }
}
so([v(z0(443))], Ms.prototype, z0(446), 2), G0(Ms.prototype, { serializers: { value: C[z0(441)][z0(436)][z0(463)]([z0(438), "padding", z0(439)]) } });
const R0 = Cx;
(function(n, x) {
  const t = Cx, e = n();
  for (; []; )
    try {
      if (-parseInt(t(187)) / 1 + -parseInt(t(183)) / 2 + -parseInt(t(177)) / 3 + -parseInt(t(169)) / 4 * (parseInt(t(175)) / 5) + -parseInt(t(194)) / 6 + parseInt(t(179)) / 7 * (parseInt(t(173)) / 8) + parseInt(t(162)) / 9 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})($n, 917651);
class io extends U0 {
  constructor(x, t) {
    const e = Cx;
    super(), this[e(171)] = x, this[e(196)] = this.setHtml(t);
  }
  [R0(176)]() {
    const x = R0;
    this[x(196)] != null && this[x(196)].remove();
  }
  [R0(166)](x) {
    const t = R0;
    this[t(182)] = x, this[t(176)]();
    let e = document[t(191)](t(167));
    return e[t(186)][t(189)](t(174)), this[t(171)][t(195)][t(192)](e), e[t(170)] = x, this[t(188)](e), this.domElement = e, this.hide(), e;
  }
  [R0(188)](x) {
    const t = R0;
    let e = this;
    x[t(185)]("a").forEach(function(i) {
      const r = t;
      i.addEventListener(r(163), function(a) {
        const o = r;
        let c = new Event("select", { cancelable: !![] });
        c[o(168)] = this[o(170)], e[o(178)](c), !c[o(184)] && e.hide();
      });
    });
  }
  [R0(197)](x, t) {
    const e = R0;
    this.domElement.style[e(193)] = "block", t + this[e(196)][e(198)] >= this[e(171)].height && t > this[e(171)][e(190)] / 2 && (t -= this[e(196)][e(198)]), x + this[e(196)].offsetWidth >= this[e(171)][e(164)] && x > this[e(171)][e(164)] / 2 && (x -= this[e(196)][e(172)]), this[e(196)].style[e(181)] = x + "px", this[e(196)].style[e(180)] = t + "px";
  }
  [R0(165)]() {
    const x = R0;
    this[x(196)].style.display = "none";
  }
}
function Cx(n, x) {
  const t = $n();
  return Cx = function(e, s) {
    return e = e - 162, t[e];
  }, Cx(n, x);
}
function $n() {
  const n = ["appendChild", "display", "9131712oJjjIu", "layersContainer", "domElement", "showAt", "offsetHeight", "41293674isWRTC", "click", "width", "hide", "setHtml", "div", "item", "4GwSvqY", "innerHTML", "stage", "offsetWidth", "23928PlIyhI", "jtopo_popoupmenu", "6320995vVoQTa", "remove", "6069MZYsNm", "dispatchEvent", "1274sXheZK", "top", "left", "html", "2723314sATdZp", "defaultPrevented", "querySelectorAll", "classList", "65066tQgiwF", "initEvent", "add", "height", "createElement"];
  return $n = function() {
    return n;
  }, $n();
}
function Lx(n, x) {
  const t = ts();
  return Lx = function(e, s) {
    return e = e - 401, t[e];
  }, Lx(n, x);
}
const j0 = Lx;
(function(n, x) {
  const t = Lx, e = n();
  for (; []; )
    try {
      if (-parseInt(t(425)) / 1 + parseInt(t(414)) / 2 * (parseInt(t(408)) / 3) + -parseInt(t(426)) / 4 + parseInt(t(410)) / 5 + parseInt(t(419)) / 6 + parseInt(t(413)) / 7 + parseInt(t(404)) / 8 * (parseInt(t(421)) / 9) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ts, 617407);
function ts() {
  const n = ["initEvent", "3736OGaAdr", "jtopo_tooltip", "showAt", "style", "620952dlipks", "stage", "1237560RNUtvD", "add", "classList", "7297549UbKUJY", "2iVbYbJ", "mousemove", "left", "hide", "mouseup", "241044xZZRIk", "fadeOut", "11367dULTjQ", "mouseoverTarget", "setHtml", "mousedown", "981219JAmbWT", "2113488cZPEFc", "fadeoutTimer", "stopFade", "domElement", "createElement", "div", "display", "inputSystem", "layersContainer", "0.9", "opacity"];
  return ts = function() {
    return n;
  }, ts();
}
class ro extends U0 {
  constructor(x) {
    const t = Lx;
    super(), this[t(409)] = x, this.domElement = document[t(430)](t(431)), this[t(429)][t(412)][t(411)](t(405)), this[t(409)][t(434)].appendChild(this[t(429)]), this[t(403)](), this[t(417)]();
  }
  [j0(423)](x) {
    return this.domElement.innerHTML = x, this.domElement;
  }
  [j0(403)]() {
    const x = j0, t = this, e = this[x(409)][x(433)];
    e.on(x(424), function() {
      t[x(417)]();
    }), e.on(x(418), function() {
      t.hide();
    }), e.on(x(415), function() {
      const s = x;
      e[s(422)] == null && t[s(420)]();
    });
  }
  [j0(406)](x, t) {
    const e = j0;
    this[e(428)](), this[e(429)].style[e(432)] = "block", this.domElement[e(407)][e(416)] = x + "px", this[e(429)].style.top = t + "px", this.domElement[e(407)].opacity = e(401);
  }
  [j0(417)]() {
    const x = j0;
    this[x(428)](), this.domElement.style[x(432)] = "none";
  }
  [j0(428)]() {
    const x = j0;
    this[x(427)] != null && (clearInterval(this.fadeoutTimer), this[x(427)] = null);
  }
  [j0(420)](x = 50) {
    const t = j0;
    if (this[t(427)] != null)
      return;
    let e = this;
    this[t(427)] = setInterval(function() {
      const s = t;
      e[s(429)].style[s(402)] -= 0.1, e[s(429)].style[s(402)] <= 0.1 && e.hide();
    }, x);
  }
}
const st = Yt;
(function(n, x) {
  const t = Yt, e = n();
  for (; []; )
    try {
      if (parseInt(t(369)) / 1 * (-parseInt(t(372)) / 2) + -parseInt(t(368)) / 3 * (-parseInt(t(370)) / 4) + parseInt(t(379)) / 5 * (-parseInt(t(365)) / 6) + parseInt(t(367)) / 7 + parseInt(t(360)) / 8 + parseInt(t(378)) / 9 + -parseInt(t(347)) / 10 === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(xs, 184917);
function Yt(n, x) {
  const t = xs();
  return Yt = function(e, s) {
    return e = e - 336, t[e];
  }, Yt(n, x);
}
function xs() {
  const n = ["key", "value", "1961082WdsOWz", "115yIzyJZ", "positionToLocalPoint", "onkeydown", "pickedObject", "add", "isLink", "style", "display", "createElement", "textarea", "width", "height", "toStageXY", "stage", "5849670mRVJez", "metaKey", "setValue", "inputSystem", "none", "block", "jtopo_input_textfield", "show", "top", "Enter", "hide", "update", "left", "2821304tzAGFB", "editor", "layersContainer", "ctrlKey", "max", "2958EYusnf", "setSize", "1510376viubeh", "102rKcNVn", "25304DEBAew", "14284UtiSMB", "focus", "10MNydSt", "isNode", "leaveTextInputMode", "text"];
  return xs = function() {
    return n;
  }, xs();
}
class ao {
  constructor(x) {
    const t = Yt;
    this[t(361)] = x, this.stage = x.stage;
    let e = document[t(341)](t(342));
    e.classList[t(337)](t(353)), this[t(346)][t(362)].appendChild(e);
    let s = this;
    e[t(381)] = function(i) {
      s[t(381)](i);
    }, this[t(342)] = e;
  }
  attachTo(x, t) {
    const e = Yt;
    let s = { x: t.x - 50, y: t.y };
    if (x[e(373)]) {
      let i = x[e(380)](S.lt);
      s = x[e(345)](i.x, i.y);
      let r = Ps(x[e(343)], 60, 100), a = Ps(x[e(344)], 60, 100);
      this.setSize(r, a);
    } else if (x[e(338)])
      return;
    this[e(349)](x[e(375)]), this[e(354)](s.x, s.y);
  }
  [st(349)](x) {
    const t = st;
    this[t(342)][t(377)] = x;
  }
  [st(366)](x, t) {
    const e = st;
    this[e(342)][e(339)].width = x + "px", this[e(342)][e(339)][e(344)] = t + "px";
  }
  show(x, t) {
    const e = st;
    this.textarea[e(339)].display = e(352), this[e(342)][e(371)](), x != null && (x = Math.max(0, x), t = Math[e(364)](0, t), this[e(342)].style[e(359)] = x, this.textarea.style[e(355)] = t), this.editor.enterTextInputMode();
  }
  hide() {
    const x = st;
    this.editor[x(374)](), this[x(342)][x(339)][x(340)] = x(351);
  }
  [st(381)](x) {
    const t = st;
    let e = this[t(342)];
    if (x[t(376)] == t(356) && (x[t(363)] || x[t(348)])) {
      let s = this[t(346)][t(350)][t(336)];
      if (s == null)
        return;
      s[t(375)] = e[t(377)], e[t(339)][t(340)] = t(351), this[t(361)][t(358)](), this[t(357)]();
    }
  }
}
(function(n, x) {
  for (var t = As, e = n(); []; )
    try {
      var s = parseInt(t(322)) / 1 * (parseInt(t(318)) / 2) + -parseInt(t(317)) / 3 * (parseInt(t(324)) / 4) + parseInt(t(316)) / 5 + -parseInt(t(314)) / 6 * (parseInt(t(323)) / 7) + parseInt(t(321)) / 8 * (-parseInt(t(319)) / 9) + -parseInt(t(315)) / 10 + parseInt(t(320)) / 11;
      if (s === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(es, 497250);
function es() {
  var n = ["3329485EjKJzc", "366kDturM", "2542nkSpbn", "827307PKtCof", "3513763cVJvvx", "40VFdnic", "514tlycSJ", "7qnjBsd", "388gGpEBK", "2978454pyKtnU", "1735160NPTfeZ"];
  return es = function() {
    return n;
  }, es();
}
function As(n, x) {
  var t = es();
  return As = function(e, s) {
    e = e - 314;
    var i = t[e];
    return i;
  }, As(n, x);
}
(function(n, x) {
  for (var t = Ds, e = n(); []; )
    try {
      var s = parseInt(t(275)) / 1 * (-parseInt(t(280)) / 2) + -parseInt(t(279)) / 3 * (parseInt(t(277)) / 4) + -parseInt(t(285)) / 5 * (parseInt(t(278)) / 6) + parseInt(t(282)) / 7 * (parseInt(t(276)) / 8) + -parseInt(t(283)) / 9 + -parseInt(t(281)) / 10 + parseInt(t(284)) / 11;
      if (s === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ns, 602398);
function ns() {
  var n = ["1NUvmtq", "89312XwNWzN", "4LtwYsI", "6VZhUaj", "2032752KPXtZp", "840602nvPogM", "10106890tYvdpr", "329XlQPZB", "4211829gpEAEq", "37389132QcgYjN", "3723835fNAAmX"];
  return ns = function() {
    return n;
  }, ns();
}
function Ds(n, x) {
  var t = ns();
  return Ds = function(e, s) {
    e = e - 275;
    var i = t[e];
    return i;
  }, Ds(n, x);
}
const sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AENode: Qi,
  Animation: Ji,
  AnimationSystem: Zi,
  ArcLink: Wx,
  ArrowShape: Jt,
  AutoFoldLink: Xt,
  BezierLink: qn,
  CircleNode: Ct,
  Collection: J,
  Color: bt,
  ColorKeywords: er,
  CoordinateSystem: Rs,
  Cursor: lr,
  CurveLink: On,
  Debug: gt,
  DefaultZIndexs: Mx,
  Direction: Ft,
  DisplayObject: T,
  DomUtil: K0,
  Edge: Cs,
  EffectSystem: $i,
  Endpoint: et,
  EndpointFixedName: T0,
  EndpointFixedPoint: ct,
  EndpointFunction: Ax,
  EndpointNearest: yt,
  EndpointSegment: ot,
  EventNames: O0,
  EventTarget: U0,
  FlexionalLink: pt,
  FoldLink: Ex,
  ForceDirectLayout: Ua,
  GeometricCoordinateSystem: Hi,
  Graph: vx,
  GraphSystem: Ht,
  HandlerLayer: cs,
  HtmlImage: Es,
  InputEvent: P0,
  InputSystem: Ys,
  InputTextfield: ao,
  Intersect: os,
  Keyboard: Ki,
  Layer: ht,
  LayerLocalDeep: W0,
  LayoutBase: Nx,
  LayoutSystem: tr,
  LinearGradient: Rr,
  Link: q,
  LinkCoordinateSystem: Wi,
  LinkHelper: Vs,
  Node: C,
  NodeHelper: $0,
  OBB: xx,
  PI2: ms,
  Path: wa,
  Pattern: Xr,
  Point: D,
  PopupMenu: io,
  Position: S,
  PositionInvertMap: ur,
  RadialGradient: Hr,
  RatioNode: Ms,
  RectDefaultPositions: at,
  RectShape: Tx,
  Rectangle: K,
  ResourceLoader: Y0,
  SelectedGroup: Ui,
  SerializerSystem: Ot,
  Shape: e0,
  Stage: ka,
  StageLocalDeep: Bt,
  StageMode: M0,
  Style: I0,
  TextNode: _t,
  Theme: ux,
  TipNode: Rx,
  Toolbar: Vi,
  Tooltip: ro,
  TopoEvent: Pi,
  TopoPainter: xo,
  Transform: rs,
  VERSION: Zx,
  Vertext: Mt,
  VideoNode: Hx,
  assertEquals: fr,
  assertNotNull: X0,
  assertTrue: mi,
  clickEvent: Mi,
  constraint: b1,
  copyKeyboardEvent: ki,
  copyMouseEvent: Yr,
  dblclickEvent: Ai,
  getArrowDIR: je,
  getCS: Hs,
  getChildrenAABB: zi,
  getClass: Bs,
  getEndpointNormal: vs,
  getLineIntersectPoint: Ce,
  getLineIntersectPoints: Ni,
  getNearestAnchorOnObjects: i1,
  getNearestPointOnLines: zs,
  getNearestPointOnObjectsOBB: s1,
  getNearestPositionName: r1,
  getParallelLine: $r,
  getParallelLines: Qr,
  getPointByEndpoint: cx,
  getRectPositionDirection: js,
  getRectPositionRotate: Ii,
  getXYInDom: Yi,
  isHorizontal: Bx,
  jtopo: k0,
  mousedownEvent: Ci,
  mousedragendEvent: ks,
  mouseenterEvent: Di,
  mousemoveEvent: Kr,
  mouseoutEvent: Ti,
  mouseupEvent: Li,
  newEndpoint: ws,
  pointProjectToLine: x1,
  randomColor: to,
  range: Ps,
  regClass: pr,
  removeEvent: ji,
  selectedEvent: Fi,
  setProto: v,
  touchendEvent: Oi,
  touchmoveEvent: Si,
  touchstartEvent: Ei,
  unselectedEvent: Bi,
  updateTransformInNewParent: Ns,
  util: H0,
  vec2: R
}, Symbol.toStringTag, { value: "Module" })), Ts = is;
(function(n, x) {
  const t = is, e = n();
  for (; []; )
    try {
      if (-parseInt(t(185)) / 1 * (-parseInt(t(181)) / 2) + parseInt(t(191)) / 3 * (parseInt(t(193)) / 4) + -parseInt(t(192)) / 5 + -parseInt(t(190)) / 6 + parseInt(t(188)) / 7 * (parseInt(t(183)) / 8) + -parseInt(t(187)) / 9 + -parseInt(t(189)) / 10 * (-parseInt(t(184)) / 11) === x)
        break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ss, 253425);
function ss() {
  const n = ["1875162jlcfXD", "3HtxjmX", "79840OxeMbZ", "1045052lwyPRb", "19442HCDbAZ", "jtopo", "817072VgfSdR", "81334mPhMOm", "37mqfMyL", "assign", "2788506aBJtvm", "14GIBmQU", "90ggyOQI"];
  return ss = function() {
    return n;
  }, ss();
}
function is(n, x) {
  const t = ss();
  return is = function(e, s) {
    return e = e - 181, t[e];
  }, is(n, x);
}
let yi = sr[Ts(182)];
Object[Ts(186)](yi, sr), delete yi[Ts(182)];
export {
  Qi as AENode,
  Ji as Animation,
  Zi as AnimationSystem,
  Wx as ArcLink,
  Jt as ArrowShape,
  Xt as AutoFoldLink,
  qn as BezierLink,
  Ct as CircleNode,
  J as Collection,
  bt as Color,
  er as ColorKeywords,
  Rs as CoordinateSystem,
  lr as Cursor,
  On as CurveLink,
  gt as Debug,
  Mx as DefaultZIndexs,
  Ft as Direction,
  T as DisplayObject,
  K0 as DomUtil,
  Cs as Edge,
  $i as EffectSystem,
  et as Endpoint,
  T0 as EndpointFixedName,
  ct as EndpointFixedPoint,
  Ax as EndpointFunction,
  yt as EndpointNearest,
  ot as EndpointSegment,
  O0 as EventNames,
  U0 as EventTarget,
  pt as FlexionalLink,
  Ex as FoldLink,
  Ua as ForceDirectLayout,
  Hi as GeometricCoordinateSystem,
  vx as Graph,
  Ht as GraphSystem,
  cs as HandlerLayer,
  Es as HtmlImage,
  P0 as InputEvent,
  Ys as InputSystem,
  ao as InputTextfield,
  os as Intersect,
  Ki as Keyboard,
  ht as Layer,
  W0 as LayerLocalDeep,
  Nx as LayoutBase,
  tr as LayoutSystem,
  Rr as LinearGradient,
  q as Link,
  Wi as LinkCoordinateSystem,
  Vs as LinkHelper,
  C as Node,
  $0 as NodeHelper,
  xx as OBB,
  ms as PI2,
  wa as Path,
  Xr as Pattern,
  D as Point,
  io as PopupMenu,
  S as Position,
  ur as PositionInvertMap,
  Hr as RadialGradient,
  Ms as RatioNode,
  at as RectDefaultPositions,
  Tx as RectShape,
  K as Rectangle,
  Y0 as ResourceLoader,
  Ui as SelectedGroup,
  Ot as SerializerSystem,
  e0 as Shape,
  ka as Stage,
  Bt as StageLocalDeep,
  M0 as StageMode,
  I0 as Style,
  _t as TextNode,
  ux as Theme,
  Rx as TipNode,
  Vi as Toolbar,
  ro as Tooltip,
  Pi as TopoEvent,
  xo as TopoPainter,
  rs as Transform,
  Zx as VERSION,
  Mt as Vertext,
  Hx as VideoNode,
  fr as assertEquals,
  X0 as assertNotNull,
  mi as assertTrue,
  Mi as clickEvent,
  b1 as constraint,
  ki as copyKeyboardEvent,
  Yr as copyMouseEvent,
  Ai as dblclickEvent,
  je as getArrowDIR,
  Hs as getCS,
  zi as getChildrenAABB,
  Bs as getClass,
  vs as getEndpointNormal,
  Ce as getLineIntersectPoint,
  Ni as getLineIntersectPoints,
  i1 as getNearestAnchorOnObjects,
  zs as getNearestPointOnLines,
  s1 as getNearestPointOnObjectsOBB,
  r1 as getNearestPositionName,
  $r as getParallelLine,
  Qr as getParallelLines,
  cx as getPointByEndpoint,
  js as getRectPositionDirection,
  Ii as getRectPositionRotate,
  Yi as getXYInDom,
  Bx as isHorizontal,
  k0 as jtopo,
  Ci as mousedownEvent,
  ks as mousedragendEvent,
  Di as mouseenterEvent,
  Kr as mousemoveEvent,
  Ti as mouseoutEvent,
  Li as mouseupEvent,
  ws as newEndpoint,
  x1 as pointProjectToLine,
  to as randomColor,
  Ps as range,
  pr as regClass,
  ji as removeEvent,
  Fi as selectedEvent,
  v as setProto,
  Oi as touchendEvent,
  Si as touchmoveEvent,
  Ei as touchstartEvent,
  Bi as unselectedEvent,
  Ns as updateTransformInNewParent,
  H0 as util,
  R as vec2
};

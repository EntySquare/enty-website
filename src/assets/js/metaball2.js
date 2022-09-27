/* eslint-disable */
!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";

    function n(e, t) {
        t = t || te;
        var n = t.createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function r(e) {
        var t = !!e && "length" in e && e.length, n = de.type(e);
        return "function" !== n && !de.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e, t, n) {
        return de.isFunction(t) ? de.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? de.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? de.grep(e, function (e) {
            return ae.call(t, e) > -1 !== n
        }) : be.test(t) ? de.filter(t, e, n) : (t = de.filter(t, e), de.grep(e, function (e) {
            return ae.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }

    function o(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    function a(e) {
        var t = {};
        return de.each(e.match(ke) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function s(e) {
        return e
    }

    function u(e) {
        throw e
    }

    function l(e, t, n) {
        var r;
        try {
            e && de.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && de.isFunction(r = e.then) ? r.call(e, t, n) : t.call(void 0, e)
        } catch (e) {
            n.call(void 0, e)
        }
    }

    function c() {
        te.removeEventListener("DOMContentLoaded", c), e.removeEventListener("load", c), de.ready()
    }

    function f() {
        this.expando = de.expando + f.uid++
    }

    function p(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Le.test(e) ? JSON.parse(e) : e)
    }

    function d(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(He, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
            try {
                n = p(n)
            } catch (e) {
            }
            qe.set(e, t, n)
        } else n = void 0;
        return n
    }

    function h(e, t, n, r) {
        var i, o = 1, a = 20, s = r ? function () {
                return r.cur()
            } : function () {
                return de.css(e, t, "")
            }, u = s(), l = n && n[3] || (de.cssNumber[t] ? "" : "px"),
            c = (de.cssNumber[t] || "px" !== l && +u) && Oe.exec(de.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +u || 1;
            do {
                o = o || ".5", c /= o, de.style(e, t, c + l)
            } while (o !== (o = s() / u) && 1 !== o && --a)
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    function g(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = Ie[r];
        return i ? i : (t = n.body.appendChild(n.createElement(r)), i = de.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), Ie[r] = i, i)
    }

    function m(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++) r = e[o], r.style && (n = r.style.display, t ? ("none" === n && (i[o] = Ae.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && Re(r) && (i[o] = g(r))) : "none" !== n && (i[o] = "none", Ae.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }

    function v(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && de.nodeName(e, t) ? de.merge([e], n) : n
    }

    function y(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Ae.set(e[n], "globalEval", !t || Ae.get(t[n], "globalEval"))
    }

    function x(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === de.type(o)) de.merge(p, o.nodeType ? [o] : o); else if (ze.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = ($e.exec(o) || ["", ""])[1].toLowerCase(), u = _e[s] || _e._default, a.innerHTML = u[1] + de.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
            de.merge(p, a.childNodes), a = f.firstChild, a.textContent = ""
        } else p.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; o = p[d++];) if (r && de.inArray(o, r) > -1) i && i.push(o); else if (l = de.contains(o.ownerDocument, o), a = v(f.appendChild(o), "script"), l && y(a), n) for (c = 0; o = a[c++];) Be.test(o.type || "") && n.push(o);
        return f
    }

    function b() {
        return !0
    }

    function w() {
        return !1
    }

    function T() {
        try {
            return te.activeElement
        } catch (e) {
        }
    }

    function C(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) C(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = w; else if (!i) return e;
        return 1 === o && (a = i, i = function (e) {
            return de().off(e), a.apply(this, arguments)
        }, i.guid = a.guid || (a.guid = de.guid++)), e.each(function () {
            de.event.add(this, t, i, r, n)
        })
    }

    function E(e, t) {
        return de.nodeName(e, "table") && de.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
    }

    function k(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function N(e) {
        var t = Je.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function S(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Ae.hasData(e) && (o = Ae.access(e), a = Ae.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l) for (n = 0, r = l[i].length; n < r; n++) de.event.add(t, i, l[i][n])
            }
            qe.hasData(e) && (s = qe.access(e), u = de.extend({}, s), qe.set(t, u))
        }
    }

    function D(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && We.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function j(e, t, r, i) {
        t = ie.apply([], t);
        var o, a, s, u, l, c, f = 0, p = e.length, d = p - 1, h = t[0], g = de.isFunction(h);
        if (g || p > 1 && "string" == typeof h && !pe.checkClone && Qe.test(h)) return e.each(function (n) {
            var o = e.eq(n);
            g && (t[0] = h.call(this, n, o.html())), j(o, t, r, i)
        });
        if (p && (o = x(t, e[0].ownerDocument, !1, e, i), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || i)) {
            for (s = de.map(v(o, "script"), k), u = s.length; f < p; f++) l = o, f !== d && (l = de.clone(l, !0, !0), u && de.merge(s, v(l, "script"))), r.call(e[f], l, f);
            if (u) for (c = s[s.length - 1].ownerDocument, de.map(s, N), f = 0; f < u; f++) l = s[f], Be.test(l.type || "") && !Ae.access(l, "globalEval") && de.contains(c, l) && (l.src ? de._evalUrl && de._evalUrl(l.src) : n(l.textContent.replace(Ke, ""), c))
        }
        return e
    }

    function A(e, t, n) {
        for (var r, i = t ? de.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || de.cleanData(v(r)), r.parentNode && (n && de.contains(r.ownerDocument, r) && y(v(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function q(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || tt(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || de.contains(e.ownerDocument, e) || (a = de.style(e, t)), !pe.pixelMarginRight() && et.test(a) && Ze.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function L(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function H(e) {
        if (e in at) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ot.length; n--;) if ((e = ot[n] + t) in at) return e
    }

    function F(e, t, n) {
        var r = Oe.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function O(e, t, n, r, i) {
        var o, a = 0;
        for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (a += de.css(e, n + Pe[o], !0, i)), r ? ("content" === n && (a -= de.css(e, "padding" + Pe[o], !0, i)), "margin" !== n && (a -= de.css(e, "border" + Pe[o] + "Width", !0, i))) : (a += de.css(e, "padding" + Pe[o], !0, i), "padding" !== n && (a += de.css(e, "border" + Pe[o] + "Width", !0, i)));
        return a
    }

    function P(e, t, n) {
        var r, i = !0, o = tt(e), a = "border-box" === de.css(e, "boxSizing", !1, o);
        if (e.getClientRects().length && (r = e.getBoundingClientRect()[t]), r <= 0 || null == r) {
            if (r = q(e, t, o), (r < 0 || null == r) && (r = e.style[t]), et.test(r)) return r;
            i = a && (pe.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + O(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }

    function R(e, t, n, r, i) {
        return new R.prototype.init(e, t, n, r, i)
    }

    function M() {
        ut && (e.requestAnimationFrame(M), de.fx.tick())
    }

    function I() {
        return e.setTimeout(function () {
            st = void 0
        }), st = de.now()
    }

    function W(e, t) {
        var n, r = 0, i = {height: e};
        for (t = t ? 1 : 0; r < 4; r += 2 - t) n = Pe[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function $(e, t, n) {
        for (var r, i = (z.tweeners[t] || []).concat(z.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
    }

    function B(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style,
            g = e.nodeType && Re(e), v = Ae.get(e, "fxshow");
        n.queue || (a = de._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
            a.unqueued || s()
        }), a.unqueued++, p.always(function () {
            p.always(function () {
                a.unqueued--, de.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (r in t) if (i = t[r], lt.test(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                if ("show" !== i || !v || void 0 === v[r]) continue;
                g = !0
            }
            d[r] = v && v[r] || de.style(e, r)
        }
        if ((u = !de.isEmptyObject(t)) || !de.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = v && v.display, null == l && (l = Ae.get(e, "display")), c = de.css(e, "display"), "none" === c && (l ? c = l : (m([e], !0), l = e.style.display || l, c = de.css(e, "display"), m([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === de.css(e, "float") && (u || (p.done(function () {
                h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1;
            for (r in d) u || (v ? "hidden" in v && (g = v.hidden) : v = Ae.access(e, "fxshow", {display: l}), o && (v.hidden = !g), g && m([e], !0), p.done(function () {
                g || m([e]), Ae.remove(e, "fxshow");
                for (r in d) de.style(e, r, d[r])
            })), u = $(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }
    }

    function _(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = de.camelCase(n), i = t[r], o = e[n], de.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = de.cssHooks[r]) && "expand" in a) {
            o = a.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    function z(e, t, n) {
        var r, i, o = 0, a = z.prefilters.length, s = de.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (i) return !1;
            for (var t = st || I(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; a < u; a++) l.tweens[a].run(o);
            return s.notifyWith(e, [l, o, n]), o < 1 && u ? n : (s.resolveWith(e, [l]), !1)
        }, l = s.promise({
            elem: e,
            props: de.extend({}, t),
            opts: de.extend(!0, {specialEasing: {}, easing: de.easing._default}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: st || I(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = de.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i) return this;
                for (i = !0; n < r; n++) l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
            }
        }), c = l.props;
        for (_(c, l.opts.specialEasing); o < a; o++) if (r = z.prefilters[o].call(l, e, c, l.opts)) return de.isFunction(r.stop) && (de._queueHooks(l.elem, l.opts.queue).stop = de.proxy(r.stop, r)), r;
        return de.map(c, $, l), de.isFunction(l.opts.start) && l.opts.start.call(e, l), de.fx.timer(de.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function X(e) {
        return (e.match(ke) || []).join(" ")
    }

    function U(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function V(e, t, n, r) {
        var i;
        if (de.isArray(t)) de.each(t, function (t, i) {
            n || xt.test(e) ? r(e, i) : V(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== de.type(t)) r(e, t); else for (i in t) V(e + "[" + i + "]", t[i], n, r)
    }

    function G(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(ke) || [];
            if (de.isFunction(n)) for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Y(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, de.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }

        var o = {}, a = e === Nt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function Q(e, t) {
        var n, r, i = de.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && de.extend(!0, e, r), e
    }

    function J(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r) for (i in s) if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break
        }
        if (u[0] in n) o = u[0]; else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function K(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                break
            }
            if (a !== !0) if (a && e.throws) t = a(t); else try {
                t = a(t)
            } catch (e) {
                return {state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    function Z(e) {
        return de.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }

    var ee = [], te = e.document, ne = Object.getPrototypeOf, re = ee.slice, ie = ee.concat, oe = ee.push,
        ae = ee.indexOf, se = {}, ue = se.toString, le = se.hasOwnProperty, ce = le.toString, fe = ce.call(Object),
        pe = {}, de = function (e, t) {
            return new de.fn.init(e, t)
        }, he = function (e, t) {
            return t.toUpperCase()
        };
    de.fn = de.prototype = {
        jquery: "3.1.1", constructor: de, length: 0, toArray: function () {
            return re.call(this)
        }, get: function (e) {
            return null == e ? re.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = de.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return de.each(this, e)
        }, map: function (e) {
            return this.pushStack(de.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(re.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: oe, sort: ee.sort, splice: ee.splice
    }, de.extend = de.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || de.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], r = e[t], a !== r && (l && r && (de.isPlainObject(r) || (i = de.isArray(r))) ? (i ? (i = !1, o = n && de.isArray(n) ? n : []) : o = n && de.isPlainObject(n) ? n : {}, a[t] = de.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, de.extend({
        expando: "jQuery" + ("3.1.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === de.type(e)
        }, isArray: Array.isArray, isWindow: function (e) {
            return null != e && e === e.window
        }, isNumeric: function (e) {
            var t = de.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== ue.call(e)) && (!(t = ne(e)) || "function" == typeof (n = le.call(t, "constructor") && t.constructor) && ce.call(n) === fe)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? se[ue.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            n(e)
        }, camelCase: function (e) {
            return e.replace(/^-ms-/, "ms-").replace(/-([a-z])/g, he)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t) {
            var n, i = 0;
            if (r(e)) for (n = e.length; i < n && t.call(e[i], i, e[i]) !== !1; i++) ; else for (i in e) if (t.call(e[i], i, e[i]) === !1) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (r(Object(e)) ? de.merge(n, "string" == typeof e ? [e] : e) : oe.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : ae.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        }, map: function (e, t, n) {
            var i, o, a = 0, s = [];
            if (r(e)) for (i = e.length; a < i; a++) null != (o = t(e[a], a, n)) && s.push(o); else for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
            return ie.apply([], s)
        }, guid: 1, proxy: function (e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), de.isFunction(e)) return r = re.call(arguments, 2), i = function () {
                return e.apply(t || this, r.concat(re.call(arguments)))
            }, i.guid = e.guid = e.guid || de.guid++, i
        }, now: Date.now, support: pe
    }), "function" == typeof Symbol && (de.fn[Symbol.iterator] = ee[Symbol.iterator]), de.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        se["[object " + t + "]"] = t.toLowerCase()
    });
    var ge = function (e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, c, p, d = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!r && ((t ? t.ownerDocument || t : I) !== q && A(t), t = t || q, H)) {
                if (11 !== h && (u = ge.exec(e))) if (i = u[1]) {
                    if (9 === h) {
                        if (!(a = t.getElementById(i))) return n;
                        if (a.id === i) return n.push(a), n
                    } else if (d && (a = d.getElementById(i)) && R(t, a) && a.id === i) return n.push(a), n
                } else {
                    if (u[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                    if ((i = u[3]) && b.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(i)), n
                }
                if (b.qsa && !z[e + " "] && (!F || !F.test(e))) {
                    if (1 !== h) d = t, p = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(xe, be) : t.setAttribute("id", s = M), c = E(e), o = c.length; o--;) c[o] = "#" + s + " " + f(c[o]);
                        p = c.join(","), d = me.test(e) && l(t.parentNode) || t
                    }
                    if (p) try {
                        return Q.apply(n, d.querySelectorAll(p)), n
                    } catch (e) {
                    } finally {
                        s === M && t.removeAttribute("id")
                    }
                }
            }
            return N(e.replace(oe, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = r
            }

            var t = [];
            return e
        }

        function r(e) {
            return e[M] = !0, e
        }

        function i(e) {
            var t = q.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) w.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function (t) {
                return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function u(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function l(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function c() {
        }

        function f(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function p(e, t, n) {
            var r = t.dir, i = t.next, o = i || r, a = n && "parentNode" === o, s = $++;
            return t.first ? function (t, n, i) {
                for (; t = t[r];) if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function (t, n, u) {
                var l, c, f, p = [W, s];
                if (u) {
                    for (; t = t[r];) if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                } else for (; t = t[r];) if (1 === t.nodeType || a) if (f = t[M] || (t[M] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t; else {
                    if ((l = c[o]) && l[0] === W && l[1] === s) return p[2] = l[2];
                    if (c[o] = p, p[2] = e(t, n, u)) return !0
                }
                return !1
            }
        }

        function d(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function h(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
            return r
        }

        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function m(e, t, n, i, o, a) {
            return i && !i[M] && (i = m(i)), o && !o[M] && (o = m(o, a)), r(function (r, a, s, u) {
                var l, c, f, p = [], d = [], m = a.length, v = r || h(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !r && t ? v : g(v, p, e, s, u), x = n ? o || (r ? e : m || i) ? [] : a : y;
                if (n && n(y, x, s, u), i) for (l = g(x, d), i(l, [], s, u), c = l.length; c--;) (f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = x.length; c--;) (f = x[c]) && l.push(y[c] = f);
                            o(null, x = [], l, u)
                        }
                        for (c = x.length; c--;) (f = x[c]) && (l = o ? K(r, f) : p[c]) > -1 && (r[l] = !(a[l] = f))
                    }
                } else x = g(x === a ? x.splice(m, x.length) : x), o ? o(null, a, x, u) : Q.apply(a, x)
            })
        }

        function v(e) {
            for (var t, n, r, i = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, u = p(function (e) {
                return e === t
            }, a, !0), l = p(function (e) {
                return K(t, e) > -1
            }, a, !0), c = [function (e, n, r) {
                var i = !o && (r || n !== S) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                return t = null, i
            }]; s < i; s++) if (n = w.relative[e[s].type]) c = [p(d(c), n)]; else {
                if (n = w.filter[e[s].type].apply(null, e[s].matches), n[M]) {
                    for (r = ++s; r < i && !w.relative[e[r].type]; r++) ;
                    return m(s > 1 && d(c), s > 1 && f(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(oe, "$1"), n, s < r && v(e.slice(s, r)), r < i && v(e = e.slice(r)), r < i && f(e))
                }
                c.push(n)
            }
            return d(c)
        }

        function y(e, n) {
            var i = n.length > 0, o = e.length > 0, a = function (r, a, s, u, l) {
                var c, f, p, d = 0, h = "0", m = r && [], v = [], y = S, x = r || o && w.find.TAG("*", l),
                    b = W += null == y ? 1 : Math.random() || .1, T = x.length;
                for (l && (S = a === q || a || l); h !== T && null != (c = x[h]); h++) {
                    if (o && c) {
                        for (f = 0, a || c.ownerDocument === q || (A(c), s = !H); p = e[f++];) if (p(c, a || q, s)) {
                            u.push(c);
                            break
                        }
                        l && (W = b)
                    }
                    i && ((c = !p && c) && d--, r && m.push(c))
                }
                if (d += h, i && h !== d) {
                    for (f = 0; p = n[f++];) p(m, v, a, s);
                    if (r) {
                        if (d > 0) for (; h--;) m[h] || v[h] || (v[h] = G.call(u));
                        v = g(v)
                    }
                    Q.apply(u, v), l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                }
                return l && (W = b, S = y), m
            };
            return i ? r(a) : a
        }

        var x, b, w, T, C, E, k, N, S, D, j, A, q, L, H, F, O, P, R, M = "sizzle" + 1 * new Date, I = e.document, W = 0,
            $ = 0, B = n(), _ = n(), z = n(), X = function (e, t) {
                return e === t && (j = !0), 0
            }, U = {}.hasOwnProperty, V = [], G = V.pop, Y = V.push, Q = V.push, J = V.slice, K = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1
            },
            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            ie = new RegExp(ee + "+", "g"), oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            ae = new RegExp("^" + ee + "*," + ee + "*"), se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), le = new RegExp(re),
            ce = new RegExp("^" + te + "$"), fe = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Z + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            }, pe = /^(?:input|select|textarea|button)$/i, de = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, me = /[+~]/,
            ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), ye = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }, xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, be = function (e, t) {
                return t ? "\0" === e ? "锟�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, we = function () {
                A()
            }, Te = p(function (e) {
                return e.disabled === !0 && ("form" in e || "label" in e)
            }, {dir: "parentNode", next: "legend"});
        try {
            Q.apply(V = J.call(I.childNodes), I.childNodes), V[I.childNodes.length].nodeType
        } catch (e) {
            Q = {
                apply: V.length ? function (e, t) {
                    Y.apply(e, J.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];) ;
                    e.length = n - 1
                }
            }
        }
        b = t.support = {}, C = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, A = t.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : I;
            return r !== q && 9 === r.nodeType && r.documentElement ? (q = r, L = q.documentElement, H = !C(q), I !== q && (n = q.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), b.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), b.getElementsByTagName = i(function (e) {
                return e.appendChild(q.createComment("")), !e.getElementsByTagName("*").length
            }), b.getElementsByClassName = he.test(q.getElementsByClassName), b.getById = i(function (e) {
                return L.appendChild(e).id = M, !q.getElementsByName || !q.getElementsByName(M).length
            }), b.getById ? (w.filter.ID = function (e) {
                var t = e.replace(ve, ye);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, w.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && H) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (w.filter.ID = function (e) {
                var t = e.replace(ve, ye);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, w.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && H) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        for (i = t.getElementsByName(e), r = 0; o = i[r++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), w.find.TAG = b.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, w.find.CLASS = b.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && H) return t.getElementsByClassName(e)
            }, O = [], F = [], (b.qsa = he.test(q.querySelectorAll)) && (i(function (e) {
                L.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + M + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + M + "+*").length || F.push(".#.+[+~]")
            }), i(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = q.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && F.push(":enabled", ":disabled"), L.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
            })), (b.matchesSelector = he.test(P = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function (e) {
                b.disconnectedMatch = P.call(e, "*"), P.call(e, "[s!='']:x"), O.push("!=", re)
            }), F = F.length && new RegExp(F.join("|")), O = O.length && new RegExp(O.join("|")), t = he.test(L.compareDocumentPosition), R = t || he.test(L.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, X = t ? function (e, t) {
                if (e === t) return j = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === q || e.ownerDocument === I && R(I, e) ? -1 : t === q || t.ownerDocument === I && R(I, t) ? 1 : D ? K(D, e) - K(D, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return j = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, s = [e], u = [t];
                if (!i || !o) return e === q ? -1 : t === q ? 1 : i ? -1 : o ? 1 : D ? K(D, e) - K(D, t) : 0;
                if (i === o) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; s[r] === u[r];) r++;
                return r ? a(s[r], u[r]) : s[r] === I ? -1 : u[r] === I ? 1 : 0
            }, q) : q
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== q && A(e), n = n.replace(ue, "='$1']"), b.matchesSelector && H && !z[n + " "] && (!O || !O.test(n)) && (!F || !F.test(n))) try {
                var r = P.call(e, n);
                if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {
            }
            return t(n, q, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== q && A(e), R(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== q && A(e);
            var n = w.attrHandle[t.toLowerCase()],
                r = n && U.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
            return void 0 !== r ? r : b.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.escape = function (e) {
            return (e + "").replace(xe, be)
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (j = !b.detectDuplicates, D = !b.sortStable && e.slice(0), e.sort(X), j) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return D = null, e
        }, T = t.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r++];) n += T(t);
            return n
        }, w = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(ve, ye).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = B[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && B(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, n, r) {
                    return function (i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode,
                            v = s && t.nodeName.toLowerCase(), y = !u && !s, x = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (p = t; p = p[g];) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                for (p = m, f = p[M] || (p[M] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[e] || [], d = l[0] === W && l[1], x = d && l[2], p = d && m.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();) if (1 === p.nodeType && ++x && p === t) {
                                    c[e] = [W, d, x];
                                    break
                                }
                            } else if (y && (p = t, f = p[M] || (p[M] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[e] || [], d = l[0] === W && l[1], x = d), x === !1) for (; (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++x || (y && (f = p[M] || (p[M] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), c[e] = [W, x]), p !== t));) ;
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                }, PSEUDO: function (e, n) {
                    var i, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[M] ? o(n) : o.length > 1 ? (i = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = K(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function (e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function (e) {
                    var t = [], n = [], i = k(e.replace(oe, "$1"));
                    return i[M] ? r(function (e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;) (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }), has: r(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }), contains: r(function (e) {
                    return e = e.replace(ve, ye), function (t) {
                        return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                    }
                }), lang: r(function (e) {
                    return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === L
                }, focus: function (e) {
                    return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: s(!1), disabled: s(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !w.pseudos.empty(e)
                }, header: function (e) {
                    return de.test(e.nodeName)
                }, input: function (e) {
                    return pe.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: u(function () {
                    return [0]
                }), last: u(function (e, t) {
                    return [t - 1]
                }), eq: u(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: u(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: u(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: u(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }), gt: u(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (x in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) w.pseudos[x] = function (e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(x);
        for (x in {submit: !0, reset: !0}) w.pseudos[x] = function (e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(x);
        return c.prototype = w.filters = w.pseudos, w.setFilters = new c, E = t.tokenize = function (e, n) {
            var r, i, o, a, s, u, l, c = _[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, u = [], l = w.preFilter; s;) {
                r && !(i = ae.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = se.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(oe, " ")
                }), s = s.slice(r.length));
                for (a in w.filter) !(i = fe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : _(e, u).slice(0)
        }, k = t.compile = function (e, t) {
            var n, r = [], i = [], o = z[e + " "];
            if (!o) {
                for (t || (t = E(e)), n = t.length; n--;) o = v(t[n]), o[M] ? r.push(o) : i.push(o);
                o = z(e, y(i, r)), o.selector = e
            }
            return o
        }, N = t.select = function (e, t, n, r) {
            var i, o, a, s, u, c = "function" == typeof e && e, p = !r && E(e = c.selector || e);
            if (n = n || [], 1 === p.length) {
                if (o = p[0] = p[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && H && w.relative[o[1].type]) {
                    if (!(t = (w.find.ID(a.matches[0].replace(ve, ye), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !w.relative[s = a.type]);) if ((u = w.find[s]) && (r = u(a.matches[0].replace(ve, ye), me.test(o[0].type) && l(t.parentNode) || t))) {
                    if (o.splice(i, 1), !(e = r.length && f(o))) return Q.apply(n, r), n;
                    break
                }
            }
            return (c || k(e, p))(r, t, !H, n, !t || me.test(e) && l(t.parentNode) || t), n
        }, b.sortStable = M.split("").sort(X).join("") === M, b.detectDuplicates = !!j, A(), b.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(q.createElement("fieldset"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), b.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(Z, function (e, t, n) {
            var r;
            if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    de.find = ge, de.expr = ge.selectors, de.expr[":"] = de.expr.pseudos, de.uniqueSort = de.unique = ge.uniqueSort, de.text = ge.getText, de.isXMLDoc = ge.isXML, de.contains = ge.contains, de.escapeSelector = ge.escape;
    var me = function (e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (i && de(e).is(n)) break;
                r.push(e)
            }
            return r
        }, ve = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }, ye = de.expr.match.needsContext, xe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        be = /^.[^:#\[\.,]*$/;
    de.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? de.find.matchesSelector(r, e) ? [r] : [] : de.find.matches(e, de.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, de.fn.extend({
        find: function (e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e) return this.pushStack(de(e).filter(function () {
                for (t = 0; t < r; t++) if (de.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) de.find(e, i[t], n);
            return r > 1 ? de.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(i(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(i(this, e || [], !0))
        }, is: function (e) {
            return !!i(this, "string" == typeof e && ye.test(e) ? de(e) : e || [], !1).length
        }
    });
    var we, Te = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (de.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || we, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Te.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof de ? t[0] : t, de.merge(this, de.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), xe.test(r[1]) && de.isPlainObject(t)) for (r in t) de.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return i = te.getElementById(r[2]), i && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : de.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(de) : de.makeArray(e, this)
    }).prototype = de.fn, we = de(te);
    var Ce = /^(?:parents|prev(?:Until|All))/, Ee = {children: !0, contents: !0, next: !0, prev: !0};
    de.fn.extend({
        has: function (e) {
            var t = de(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (de.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && de(e);
            if (!ye.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && de.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? de.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? ae.call(de(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(de.uniqueSort(de.merge(this.get(), de(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), de.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return me(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return me(e, "parentNode", n)
        }, next: function (e) {
            return o(e, "nextSibling")
        }, prev: function (e) {
            return o(e, "previousSibling")
        }, nextAll: function (e) {
            return me(e, "nextSibling")
        }, prevAll: function (e) {
            return me(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return me(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return me(e, "previousSibling", n)
        }, siblings: function (e) {
            return ve((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return ve(e.firstChild)
        }, contents: function (e) {
            return e.contentDocument || de.merge([], e.childNodes)
        }
    }, function (e, t) {
        de.fn[e] = function (n, r) {
            var i = de.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = de.filter(r, i)), this.length > 1 && (Ee[e] || de.uniqueSort(i), Ce.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var ke = /[^\x20\t\r\n\f]+/g;
    de.Callbacks = function (e) {
        e = "string" == typeof e ? a(e) : de.extend({}, e);
        var t, n, r, i, o = [], s = [], u = -1, l = function () {
            for (i = e.once, r = t = !0; s.length; u = -1) for (n = s.shift(); ++u < o.length;) o[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = o.length, n = !1);
            e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
        }, c = {
            add: function () {
                return o && (n && !t && (u = o.length - 1, s.push(n)), function t(n) {
                    de.each(n, function (n, r) {
                        de.isFunction(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== de.type(r) && t(r)
                    })
                }(arguments), n && !t && l()), this
            }, remove: function () {
                return de.each(arguments, function (e, t) {
                    for (var n; (n = de.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= u && u--
                }), this
            }, has: function (e) {
                return e ? de.inArray(e, o) > -1 : o.length > 0
            }, empty: function () {
                return o && (o = []), this
            }, disable: function () {
                return i = s = [], o = n = "", this
            }, disabled: function () {
                return !o
            }, lock: function () {
                return i = s = [], n || t || (o = n = ""), this
            }, locked: function () {
                return !!i
            }, fireWith: function (e, n) {
                return i || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || l()), this
            }, fire: function () {
                return c.fireWith(this, arguments), this
            }, fired: function () {
                return !!r
            }
        };
        return c
    }, de.extend({
        Deferred: function (t) {
            var n = [["notify", "progress", de.Callbacks("memory"), de.Callbacks("memory"), 2], ["resolve", "done", de.Callbacks("once memory"), de.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", de.Callbacks("once memory"), de.Callbacks("once memory"), 1, "rejected"]],
                r = "pending", i = {
                    state: function () {
                        return r
                    }, always: function () {
                        return o.done(arguments).fail(arguments), this
                    }, catch: function (e) {
                        return i.then(null, e)
                    }, pipe: function () {
                        var e = arguments;
                        return de.Deferred(function (t) {
                            de.each(n, function (n, r) {
                                var i = de.isFunction(e[r[4]]) && e[r[4]];
                                o[r[1]](function () {
                                    var e = i && i.apply(this, arguments);
                                    e && de.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, then: function (t, r, i) {
                        function o(t, n, r, i) {
                            return function () {
                                var l = this, c = arguments, f = function () {
                                    var e, f;
                                    if (!(t < a)) {
                                        if ((e = r.apply(l, c)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                        f = e && ("object" == typeof e || "function" == typeof e) && e.then, de.isFunction(f) ? i ? f.call(e, o(a, n, s, i), o(a, n, u, i)) : (a++, f.call(e, o(a, n, s, i), o(a, n, u, i), o(a, n, s, n.notifyWith))) : (r !== s && (l = void 0, c = [e]), (i || n.resolveWith)(l, c))
                                    }
                                }, p = i ? f : function () {
                                    try {
                                        f()
                                    } catch (e) {
                                        de.Deferred.exceptionHook && de.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= a && (r !== u && (l = void 0, c = [e]), n.rejectWith(l, c))
                                    }
                                };
                                t ? p() : (de.Deferred.getStackHook && (p.stackTrace = de.Deferred.getStackHook()), e.setTimeout(p))
                            }
                        }

                        var a = 0;
                        return de.Deferred(function (e) {
                            n[0][3].add(o(0, e, de.isFunction(i) ? i : s, e.notifyWith)), n[1][3].add(o(0, e, de.isFunction(t) ? t : s)), n[2][3].add(o(0, e, de.isFunction(r) ? r : u))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? de.extend(e, i) : i
                    }
                }, o = {};
            return de.each(n, function (e, t) {
                var a = t[2], s = t[5];
                i[t[1]] = a.add, s && a.add(function () {
                    r = s
                }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        }, when: function (e) {
            var t = arguments.length, n = t, r = Array(n), i = re.call(arguments), o = de.Deferred(), a = function (e) {
                return function (n) {
                    r[e] = this, i[e] = arguments.length > 1 ? re.call(arguments) : n, --t || o.resolveWith(r, i)
                }
            };
            if (t <= 1 && (l(e, o.done(a(n)).resolve, o.reject), "pending" === o.state() || de.isFunction(i[n] && i[n].then))) return o.then();
            for (; n--;) l(i[n], a(n), o.reject);
            return o.promise()
        }
    });
    var Ne = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    de.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && Ne.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, de.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var Se = de.Deferred();
    de.fn.ready = function (e) {
        return Se.then(e).catch(function (e) {
            de.readyException(e)
        }), this
    }, de.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? de.readyWait++ : de.ready(!0)
        }, ready: function (e) {
            (e === !0 ? --de.readyWait : de.isReady) || (de.isReady = !0, e !== !0 && --de.readyWait > 0 || Se.resolveWith(te, [de]))
        }
    }), de.ready.then = Se.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(de.ready) : (te.addEventListener("DOMContentLoaded", c), e.addEventListener("load", c));
    var De = function (e, t, n, r, i, o, a) {
        var s = 0, u = e.length, l = null == n;
        if ("object" === de.type(n)) {
            i = !0;
            for (s in n) De(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0, de.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
            return l.call(de(e), n)
        })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }, je = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    f.uid = 1, f.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, je(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[de.camelCase(t)] = n; else for (r in t) i[de.camelCase(r)] = t[r];
            return i
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][de.camelCase(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    de.isArray(t) ? t = t.map(de.camelCase) : (t = de.camelCase(t), t = t in r ? [t] : t.match(ke) || []), n = t.length;
                    for (; n--;) delete r[t[n]]
                }
                (void 0 === t || de.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !de.isEmptyObject(t)
        }
    };
    var Ae = new f, qe = new f, Le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, He = /[A-Z]/g;
    de.extend({
        hasData: function (e) {
            return qe.hasData(e) || Ae.hasData(e)
        }, data: function (e, t, n) {
            return qe.access(e, t, n)
        }, removeData: function (e, t) {
            qe.remove(e, t)
        }, _data: function (e, t, n) {
            return Ae.access(e, t, n)
        }, _removeData: function (e, t) {
            Ae.remove(e, t)
        }
    }), de.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = qe.get(o), 1 === o.nodeType && !Ae.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = de.camelCase(r.slice(5)), d(o, r, i[r])));
                    Ae.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                qe.set(this, e)
            }) : De(this, function (t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = qe.get(o, e))) return n;
                    if (void 0 !== (n = d(o, e))) return n
                } else this.each(function () {
                    qe.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                qe.remove(this, e)
            })
        }
    }), de.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Ae.get(e, t), n && (!r || de.isArray(n) ? r = Ae.access(e, t, de.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = de.queue(e, t), r = n.length, i = n.shift(), o = de._queueHooks(e, t), a = function () {
                de.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Ae.get(e, n) || Ae.access(e, n, {
                empty: de.Callbacks("once memory").add(function () {
                    Ae.remove(e, [t + "queue", n])
                })
            })
        }
    }), de.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? de.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = de.queue(this, e, t);
                de._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && de.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                de.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = de.Deferred(), o = this, a = this.length, s = function () {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (n = Ae.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Oe = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"),
        Pe = ["Top", "Right", "Bottom", "Left"], Re = function (e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && de.contains(e.ownerDocument, e) && "none" === de.css(e, "display")
        }, Me = function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }, Ie = {};
    de.fn.extend({
        show: function () {
            return m(this, !0)
        }, hide: function () {
            return m(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Re(this) ? de(this).show() : de(this).hide()
            })
        }
    });
    var We = /^(?:checkbox|radio)$/i, $e = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Be = /^$|\/(?:java|ecma)script/i, _e = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    _e.optgroup = _e.option, _e.tbody = _e.tfoot = _e.colgroup = _e.caption = _e.thead, _e.th = _e.td;
    var ze = /<|&#?\w+;/;
    !function () {
        var e = te.createDocumentFragment(), t = e.appendChild(te.createElement("div")), n = te.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), pe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", pe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Xe = te.documentElement, Ue = /^key/, Ve = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ge = /^([^.]*)(?:\.(.+)|)/;
    de.event = {
        global: {}, add: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, m = Ae.get(e);
            if (m) for (n.handler && (o = n, n = o.handler, i = o.selector), i && de.find.matchesSelector(Xe, i), n.guid || (n.guid = de.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function (t) {
                return void 0 !== de && de.event.triggered !== t.type ? de.event.dispatch.apply(e, arguments) : void 0
            }), t = (t || "").match(ke) || [""], l = t.length; l--;) s = Ge.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d && (f = de.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = de.event.special[d] || {}, c = de.extend({
                type: d,
                origType: g,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && de.expr.match.needsContext.test(i),
                namespace: h.join(".")
            }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), de.event.global[d] = !0)
        }, remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, m = Ae.hasData(e) && Ae.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(ke) || [""], l = t.length; l--;) if (s = Ge.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    for (f = de.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || de.removeEvent(e, d, m.handle), delete u[d])
                } else for (d in u) de.event.remove(e, d + t[l], n, r, !0);
                de.isEmptyObject(u) && Ae.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, n, r, i, o, a, s = de.event.fix(e), u = new Array(arguments.length),
                l = (Ae.get(this, "events") || {})[s.type] || [], c = de.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, s) !== !1) {
                for (a = de.event.handlers.call(this, s, l), t = 0; (i = a[t++]) && !s.isPropagationStopped();) for (s.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((de.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && (s.result = r) === !1 && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        }, handlers: function (e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || l.disabled !== !0)) {
                for (o = [], a = {}, n = 0; n < u; n++) r = t[n], i = r.selector + " ", void 0 === a[i] && (a[i] = r.needsContext ? de(i, this).index(l) > -1 : de.find(i, this, null, [l]).length), a[i] && o.push(r);
                o.length && s.push({elem: l, handlers: o})
            }
            return l = this, u < t.length && s.push({elem: l, handlers: t.slice(u)}), s
        }, addProp: function (e, t) {
            Object.defineProperty(de.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: de.isFunction(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                }
            })
        }, fix: function (e) {
            return e[de.expando] ? e : new de.Event(e)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== T() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === T() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && de.nodeName(this, "input")) return this.click(), !1
                }, _default: function (e) {
                    return de.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, de.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, de.Event = function (e, t) {
        if (!(this instanceof de.Event)) return new de.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? b : w, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && de.extend(this, t), this.timeStamp = e && e.timeStamp || de.now(), this[de.expando] = !0
    }, de.Event.prototype = {
        constructor: de.Event,
        isDefaultPrevented: w,
        isPropagationStopped: w,
        isImmediatePropagationStopped: w,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = b, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = b, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = b, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, de.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && Ue.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ve.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, de.event.addProp), de.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        de.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || de.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), de.fn.extend({
        on: function (e, t, n, r) {
            return C(this, e, t, n, r)
        }, one: function (e, t, n, r) {
            return C(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, de(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = w), this.each(function () {
                de.event.remove(this, e, n, t)
            })
        }
    });
    var Ye = /<script|<style|<link/i, Qe = /checked\s*(?:[^=]|=\s*.checked.)/i, Je = /^true\/(.*)/,
        Ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    de.extend({
        htmlPrefilter: function (e) {
            return e.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, "<$1></$2>")
        }, clone: function (e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = de.contains(e.ownerDocument, e);
            if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || de.isXMLDoc(e))) for (a = v(s), o = v(e), r = 0, i = o.length; r < i; r++) D(o[r], a[r]);
            if (t) if (n) for (o = o || v(e), a = a || v(s), r = 0, i = o.length; r < i; r++) S(o[r], a[r]); else S(e, s);
            return a = v(s, "script"), a.length > 0 && y(a, !u && v(e, "script")), s
        }, cleanData: function (e) {
            for (var t, n, r, i = de.event.special, o = 0; void 0 !== (n = e[o]); o++) if (je(n)) {
                if (t = n[Ae.expando]) {
                    if (t.events) for (r in t.events) i[r] ? de.event.remove(n, r) : de.removeEvent(n, r, t.handle);
                    n[Ae.expando] = void 0
                }
                n[qe.expando] && (n[qe.expando] = void 0)
            }
        }
    }), de.fn.extend({
        detach: function (e) {
            return A(this, e, !0)
        }, remove: function (e) {
            return A(this, e)
        }, text: function (e) {
            return De(this, function (e) {
                return void 0 === e ? de.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return j(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    E(this, e).appendChild(e)
                }
            })
        }, prepend: function () {
            return j(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = E(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return j(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return j(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (de.cleanData(v(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return de.clone(this, e, t)
            })
        }, html: function (e) {
            return De(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ye.test(e) && !_e[($e.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = de.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (de.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return j(this, arguments, function (t) {
                var n = this.parentNode;
                de.inArray(this, e) < 0 && (de.cleanData(v(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), de.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        de.fn[e] = function (e) {
            for (var n, r = [], i = de(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), de(i[a])[t](n), oe.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Ze = /^margin/, et = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"), tt = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    };
    !function () {
        function t() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Xe.appendChild(a);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, s.style.marginRight = "50%", i = "4px" === t.marginRight, Xe.removeChild(a), s = null
            }
        }

        var n, r, i, o, a = te.createElement("div"), s = te.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", pe.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), de.extend(pe, {
            pixelPosition: function () {
                return t(), n
            }, boxSizingReliable: function () {
                return t(), r
            }, pixelMarginRight: function () {
                return t(), i
            }, reliableMarginLeft: function () {
                return t(), o
            }
        }))
    }();
    var nt = /^(none|table(?!-c[ea]).+)/, rt = {position: "absolute", visibility: "hidden", display: "block"},
        it = {letterSpacing: "0", fontWeight: "400"}, ot = ["Webkit", "Moz", "ms"], at = te.createElement("div").style;
    de.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = q(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {float: "cssFloat"},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = de.camelCase(t), u = e.style;
                if (t = de.cssProps[s] || (de.cssProps[s] = H(s) || s), a = de.cssHooks[t] || de.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                o = typeof n, "string" === o && (i = Oe.exec(n)) && i[1] && (n = h(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (de.cssNumber[s] ? "" : "px")), pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = de.camelCase(t);
            return t = de.cssProps[s] || (de.cssProps[s] = H(s) || s), a = de.cssHooks[t] || de.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = q(e, t, r)), "normal" === i && t in it && (i = it[t]), "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i
        }
    }), de.each(["height", "width"], function (e, t) {
        de.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return !nt.test(de.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? P(e, t, r) : Me(e, rt, function () {
                    return P(e, t, r)
                })
            }, set: function (e, n, r) {
                var i, o = r && tt(e), a = r && O(e, t, r, "border-box" === de.css(e, "boxSizing", !1, o), o);
                return a && (i = Oe.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = de.css(e, t)), F(e, n, a)
            }
        }
    }), de.cssHooks.marginLeft = L(pe.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(q(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), de.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        de.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Pe[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ze.test(e) || (de.cssHooks[e + t].set = F)
    }), de.fn.extend({
        css: function (e, t) {
            return De(this, function (e, t, n) {
                var r, i, o = {}, a = 0;
                if (de.isArray(t)) {
                    for (r = tt(e), i = t.length; a < i; a++) o[t[a]] = de.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? de.style(e, t, n) : de.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), de.Tween = R, R.prototype = {
        constructor: R, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || de.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (de.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = R.propHooks[this.prop];
            return e && e.get ? e.get(this) : R.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = R.propHooks[this.prop];
            return this.options.duration ? this.pos = t = de.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this
        }
    }, R.prototype.init.prototype = R.prototype, R.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = de.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            }, set: function (e) {
                de.fx.step[e.prop] ? de.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[de.cssProps[e.prop]] && !de.cssHooks[e.prop] ? e.elem[e.prop] = e.now : de.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, de.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, de.fx = R.prototype.init, de.fx.step = {};
    var st, ut, lt = /^(?:toggle|show|hide)$/, ct = /queueHooks$/;
    de.Animation = de.extend(z, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return h(n.elem, e, Oe.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            de.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(ke);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], z.tweeners[n] = z.tweeners[n] || [], z.tweeners[n].unshift(t)
        }, prefilters: [B], prefilter: function (e, t) {
            t ? z.prefilters.unshift(e) : z.prefilters.push(e)
        }
    }), de.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? de.extend({}, e) : {
            complete: n || !n && t || de.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !de.isFunction(t) && t
        };
        return de.fx.off || te.hidden ? r.duration = 0 : "number" != typeof r.duration && (r.duration in de.fx.speeds ? r.duration = de.fx.speeds[r.duration] : r.duration = de.fx.speeds._default), null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            de.isFunction(r.old) && r.old.call(this), r.queue && de.dequeue(this, r.queue)
        }, r
    }, de.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(Re).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = de.isEmptyObject(e), o = de.speed(t, n, r), a = function () {
                var t = z(this, de.extend({}, e), o);
                (i || Ae.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, t, n) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, i = null != e && e + "queueHooks", o = de.timers, a = Ae.get(this);
                if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && ct.test(i) && r(a[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                !t && n || de.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = Ae.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = de.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, de.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), de.each(["toggle", "show", "hide"], function (e, t) {
        var n = de.fn[t];
        de.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, r, i)
        }
    }), de.each({
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        de.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), de.timers = [], de.fx.tick = function () {
        var e, t = 0, n = de.timers;
        for (st = de.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || de.fx.stop(), st = void 0
    }, de.fx.timer = function (e) {
        de.timers.push(e), e() ? de.fx.start() : de.timers.pop()
    }, de.fx.interval = 13, de.fx.start = function () {
        ut || (ut = e.requestAnimationFrame ? e.requestAnimationFrame(M) : e.setInterval(de.fx.tick, de.fx.interval))
    }, de.fx.stop = function () {
        e.cancelAnimationFrame ? e.cancelAnimationFrame(ut) : e.clearInterval(ut), ut = null
    }, de.fx.speeds = {slow: 600, fast: 200, _default: 400}, de.fn.delay = function (t, n) {
        return t = de.fx ? de.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function () {
                e.clearTimeout(i)
            }
        })
    }, function () {
        var e = te.createElement("input"), t = te.createElement("select"),
            n = t.appendChild(te.createElement("option"));
        e.type = "checkbox", pe.checkOn = "" !== e.value, pe.optSelected = n.selected, e = te.createElement("input"), e.value = "t", e.type = "radio", pe.radioValue = "t" === e.value
    }();
    var ft, pt = de.expr.attrHandle;
    de.fn.extend({
        attr: function (e, t) {
            return De(this, de.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                de.removeAttr(this, e)
            })
        }
    }), de.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? de.prop(e, t, n) : (1 === o && de.isXMLDoc(e) || (i = de.attrHooks[t.toLowerCase()] || (de.expr.match.bool.test(t) ? ft : void 0)), void 0 !== n ? null === n ? void de.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = de.find.attr(e, t), null == r ? void 0 : r))
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!pe.radioValue && "radio" === t && de.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, r = 0, i = t && t.match(ke);
            if (i && 1 === e.nodeType) for (; n = i[r++];) e.removeAttribute(n)
        }
    }), ft = {
        set: function (e, t, n) {
            return t === !1 ? de.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, de.each(de.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = pt[t] || de.find.attr;
        pt[t] = function (e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = pt[a], pt[a] = i, i = null != n(e, t, r) ? a : null, pt[a] = o), i
        }
    });
    var dt = /^(?:input|select|textarea|button)$/i, ht = /^(?:a|area)$/i;
    de.fn.extend({
        prop: function (e, t) {
            return De(this, de.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[de.propFix[e] || e]
            })
        }
    }), de.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && de.isXMLDoc(e) || (t = de.propFix[t] || t, i = de.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = de.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : dt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), pe.optSelected || (de.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), de.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        de.propFix[this.toLowerCase()] = this
    }), de.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (de.isFunction(e)) return this.each(function (t) {
                de(this).addClass(e.call(this, t, U(this)))
            });
            if ("string" == typeof e && e) for (t = e.match(ke) || []; n = this[u++];) if (i = U(n), r = 1 === n.nodeType && " " + X(i) + " ") {
                for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                s = X(r), i !== s && n.setAttribute("class", s)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (de.isFunction(e)) return this.each(function (t) {
                de(this).removeClass(e.call(this, t, U(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (t = e.match(ke) || []; n = this[u++];) if (i = U(n), r = 1 === n.nodeType && " " + X(i) + " ") {
                for (a = 0; o = t[a++];) for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                s = X(r), i !== s && n.setAttribute("class", s)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : de.isFunction(e) ? this.each(function (n) {
                de(this).toggleClass(e.call(this, n, U(this), t), t)
            }) : this.each(function () {
                var t, r, i, o;
                if ("string" === n) for (r = 0, i = de(this), o = e.match(ke) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else void 0 !== e && "boolean" !== n || (t = U(this), t && Ae.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Ae.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && (" " + X(U(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    de.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length) return r = de.isFunction(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, de(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : de.isArray(i) && (i = de.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = de.valHooks[this.type] || de.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return (t = de.valHooks[i.type] || de.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(/\r/g, "") : null == n ? "" : n)
            }
        }
    }), de.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = de.find.attr(e, "value");
                    return null != t ? t : X(de.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (n = i[r], (n.selected || r === o) && !n.disabled && (!n.parentNode.disabled || !de.nodeName(n.parentNode, "optgroup"))) {
                        if (t = de(n).val(), a) return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    for (var n, r, i = e.options, o = de.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = de.inArray(de.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), de.each(["radio", "checkbox"], function () {
        de.valHooks[this] = {
            set: function (e, t) {
                if (de.isArray(t)) return e.checked = de.inArray(de(e).val(), t) > -1
            }
        }, pe.checkOn || (de.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var gt = /^(?:focusinfocus|focusoutblur)$/;
    de.extend(de.event, {
        trigger: function (t, n, r, i) {
            var o, a, s, u, l, c, f, p = [r || te], d = le.call(t, "type") ? t.type : t,
                h = le.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || te, 3 !== r.nodeType && 8 !== r.nodeType && !gt.test(d + de.event.triggered) && (d.indexOf(".") > -1 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[de.expando] ? t : new de.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : de.makeArray(n, [t]), f = de.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !de.isWindow(r)) {
                    for (u = f.delegateType || d, gt.test(u + d) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                    s === (r.ownerDocument || te) && p.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0; (a = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || d, c = (Ae.get(a, "events") || {})[t.type] && Ae.get(a, "handle"), c && c.apply(a, n), (c = l && a[l]) && c.apply && je(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault());
                return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !je(r) || l && de.isFunction(r[d]) && !de.isWindow(r) && (s = r[l], s && (r[l] = null), de.event.triggered = d, r[d](), de.event.triggered = void 0, s && (r[l] = s)), t.result
            }
        }, simulate: function (e, t, n) {
            var r = de.extend(new de.Event, n, {type: e, isSimulated: !0});
            de.event.trigger(r, null, t)
        }
    }), de.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                de.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return de.event.trigger(e, t, n, !0)
        }
    }), de.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        de.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), de.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), pe.focusin = "onfocusin" in e, pe.focusin || de.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            de.event.simulate(t, e.target, de.event.fix(e))
        };
        de.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this, i = Ae.access(r, t);
                i || r.addEventListener(e, n, !0), Ae.access(r, t, (i || 0) + 1)
            }, teardown: function () {
                var r = this.ownerDocument || this, i = Ae.access(r, t) - 1;
                i ? Ae.access(r, t, i) : (r.removeEventListener(e, n, !0), Ae.remove(r, t))
            }
        }
    });
    var mt = e.location, vt = de.now(), yt = /\?/;
    de.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || de.error("Invalid XML: " + t), n
    };
    var xt = /\[\]$/, bt = /^(?:submit|button|image|reset|file)$/i, wt = /^(?:input|select|textarea|keygen)/i;
    de.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            var n = de.isFunction(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (de.isArray(e) || e.jquery && !de.isPlainObject(e)) de.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e) V(n, e[n], t, i);
        return r.join("&")
    }, de.fn.extend({
        serialize: function () {
            return de.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = de.prop(this, "elements");
                return e ? de.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !de(this).is(":disabled") && wt.test(this.nodeName) && !bt.test(e) && (this.checked || !We.test(e))
            }).map(function (e, t) {
                var n = de(this).val();
                return null == n ? null : de.isArray(n) ? de.map(n, function (e) {
                    return {name: t.name, value: e.replace(/\r?\n/g, "\r\n")}
                }) : {name: t.name, value: n.replace(/\r?\n/g, "\r\n")}
            }).get()
        }
    });
    var Tt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ct = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Et = /^(?:GET|HEAD)$/, kt = {}, Nt = {}, St = "*/".concat("*"), Dt = te.createElement("a");
    Dt.href = mt.href, de.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: mt.href,
            type: "GET",
            isLocal: Ct.test(mt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": St,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": de.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? Q(Q(e, de.ajaxSettings), t) : Q(de.ajaxSettings, e)
        },
        ajaxPrefilter: G(kt),
        ajaxTransport: G(Nt),
        ajax: function (t, n) {
            function r(t, n, r, s) {
                var l, p, d, b, w, T = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", C.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = J(h, C, r)), b = K(h, b, C, l), l ? (h.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (de.lastModified[o] = w), (w = C.getResponseHeader("etag")) && (de.etag[o] = w)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, p = b.data, d = b.error, l = !d)) : (d = T, !t && T || (T = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || T) + "", l ? v.resolveWith(g, [p, T, C]) : v.rejectWith(g, [C, T, d]), C.statusCode(x), x = void 0, f && m.trigger(l ? "ajaxSuccess" : "ajaxError", [C, h, l ? p : d]), y.fireWith(g, [C, T]), f && (m.trigger("ajaxComplete", [C, h]), --de.active || de.event.trigger("ajaxStop")))
            }

            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = de.ajaxSetup({}, n), g = h.context || h,
                m = h.context && (g.nodeType || g.jquery) ? de(g) : de.event, v = de.Deferred(),
                y = de.Callbacks("once memory"), x = h.statusCode || {}, b = {}, w = {}, T = "canceled", C = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!s) for (s = {}; t = Tt.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return c ? a : null
                    }, setRequestHeader: function (e, t) {
                        return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == c && (h.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (c) C.always(e[C.status]); else for (t in e) x[t] = [x[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || T;
                        return i && i.abort(t), r(0, t), this
                    }
                };
            if (v.promise(C), h.url = ((t || h.url || mt.href) + "").replace(/^\/\//, mt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(ke) || [""], null == h.crossDomain) {
                l = te.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Dt.protocol + "//" + Dt.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = de.param(h.data, h.traditional)), Y(kt, h, n, C), c) return C;
            f = de.event && h.global, f && 0 == de.active++ && de.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Et.test(h.type), o = h.url.replace(/#.*$/, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(/%20/g, "+")) : (d = h.url.slice(o.length), h.data && (o += (yt.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (o = o.replace(/([?&])_=[^&]*/, "$1"), d = (yt.test(o) ? "&" : "?") + "_=" + vt++ + d), h.url = o + d), h.ifModified && (de.lastModified[o] && C.setRequestHeader("If-Modified-Since", de.lastModified[o]), de.etag[o] && C.setRequestHeader("If-None-Match", de.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + St + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) C.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (h.beforeSend.call(g, C, h) === !1 || c)) return C.abort();
            if (T = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), i = Y(Nt, h, n, C)) {
                if (C.readyState = 1, f && m.trigger("ajaxSend", [C, h]), c) return C;
                h.async && h.timeout > 0 && (u = e.setTimeout(function () {
                    C.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, i.send(b, r)
                } catch (e) {
                    if (c) throw e;
                    r(-1, e)
                }
            } else r(-1, "No Transport");
            return C
        },
        getJSON: function (e, t, n) {
            return de.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return de.get(e, void 0, t, "script")
        }
    }), de.each(["get", "post"], function (e, t) {
        de[t] = function (e, n, r, i) {
            return de.isFunction(n) && (i = i || r, r = n, n = void 0), de.ajax(de.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, de.isPlainObject(e) && e))
        }
    }), de._evalUrl = function (e) {
        return de.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
    }, de.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (de.isFunction(e) && (e = e.call(this[0])), t = de(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (e) {
            return de.isFunction(e) ? this.each(function (t) {
                de(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = de(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = de.isFunction(e);
            return this.each(function (n) {
                de(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                de(this).replaceWith(this.childNodes)
            }), this
        }
    }), de.expr.pseudos.hidden = function (e) {
        return !de.expr.pseudos.visible(e)
    }, de.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, de.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    };
    var jt = {0: 200, 1223: 204}, At = de.ajaxSettings.xhr();
    pe.cors = !!At && "withCredentials" in At, pe.ajax = At = !!At, de.ajaxTransport(function (t) {
        var n, r;
        if (pe.cors || At && !t.crossDomain) return {
            send: function (i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                n = function (e) {
                    return function () {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(jt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {binary: s.response} : {text: s.responseText}, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout(function () {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            }, abort: function () {
                n && n()
            }
        }
    }), de.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), de.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return de.globalEval(e), e
            }
        }
    }), de.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), de.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (r, i) {
                    t = de("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), te.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var qt = [], Lt = /(=)\?(?=&|$)|\?\?/;
    de.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = qt.pop() || de.expando + "_" + vt++;
            return this[e] = !0, e
        }
    }), de.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, a,
            s = t.jsonp !== !1 && (Lt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Lt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = de.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Lt, "$1" + i) : t.jsonp !== !1 && (t.url += (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || de.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            a = arguments
        }, r.always(function () {
            void 0 === o ? de(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, qt.push(i)), a && de.isFunction(o) && o(a[0]), a = o = void 0
        }), "script"
    }), pe.createHTMLDocument = function () {
        var e = te.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), de.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var r, i, o;
        return t || (pe.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = te.location.href, t.head.appendChild(r)) : t = te), i = xe.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = x([e], t, o), o && o.length && de(o).remove(), de.merge([], i.childNodes))
    }, de.fn.load = function (e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = X(e.slice(s)), e = e.slice(0, s)), de.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && de.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? de("<div>").append(de.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, de.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        de.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), de.expr.pseudos.animated = function (e) {
        return de.grep(de.timers, function (t) {
            return e === t.elem
        }).length
    }, de.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l, c = de.css(e, "position"), f = de(e), p = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = de.css(e, "top"), u = de.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), de.isFunction(t) && (t = t.call(e, n, de.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, de.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                de.offset.setOffset(this, e, t)
            });
            var t, n, r, i, o = this[0];
            if (o) return o.getClientRects().length ? (r = o.getBoundingClientRect(), r.width || r.height ? (i = o.ownerDocument, n = Z(i), t = i.documentElement, {
                top: r.top + n.pageYOffset - t.clientTop,
                left: r.left + n.pageXOffset - t.clientLeft
            }) : r) : {top: 0, left: 0}
        }, position: function () {
            if (this[0]) {
                var e, t, n = this[0], r = {top: 0, left: 0};
                return "fixed" === de.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), de.nodeName(e[0], "html") || (r = e.offset()), r = {
                    top: r.top + de.css(e[0], "borderTopWidth", !0),
                    left: r.left + de.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - r.top - de.css(n, "marginTop", !0),
                    left: t.left - r.left - de.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === de.css(e, "position");) e = e.offsetParent;
                return e || Xe
            })
        }
    }), de.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        de.fn[e] = function (r) {
            return De(this, function (e, r, i) {
                var o = Z(e);
                if (void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), de.each(["top", "left"], function (e, t) {
        de.cssHooks[t] = L(pe.pixelPosition, function (e, n) {
            if (n) return n = q(e, t), et.test(n) ? de(e).position()[t] + "px" : n
        })
    }), de.each({Height: "height", Width: "width"}, function (e, t) {
        de.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
            de.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || o === !0 ? "margin" : "border");
                return De(this, function (t, n, i) {
                    var o;
                    return de.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? de.css(t, n, s) : de.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), de.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), de.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
        return de
    });
    var Ht = e.jQuery, Ft = e.$;
    return de.noConflict = function (t) {
        return e.$ === de && (e.$ = Ft), t && e.jQuery === de && (e.jQuery = Ht), de
    }, t || (e.jQuery = e.$ = de), de
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (t) {
        var n, e, i, o = _gsScope.GreenSockGlobals || _gsScope, s = o.com.greensock, r = 2 * Math.PI, u = Math.PI / 2,
            p = s._class, c = function (n, e) {
                var i = p("easing." + n, function () {
                }, !0), o = i.prototype = new t;
                return o.constructor = i, o.getRatio = e, i
            }, a = t.register || function () {
            }, h = function (t, n, e, i, o) {
                var s = p("easing." + t, {easeOut: new n, easeIn: new e, easeInOut: new i}, !0);
                return a(s, t), s
            }, f = function (t, n, e) {
                this.t = t, this.v = n, e && (this.next = e, e.prev = this, this.c = e.v - n, this.gap = e.t - t)
            }, _ = function (n, e) {
                var i = p("easing." + n, function (t) {
                    this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                }, !0), o = i.prototype = new t;
                return o.constructor = i, o.getRatio = e, o.config = function (t) {
                    return new i(t)
                }, i
            }, g = h("Back", _("BackOut", function (t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
            }), _("BackIn", function (t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
            }), _("BackInOut", function (t) {
                return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
            })), l = p("easing.SlowMo", function (t, n, e) {
                n = n || 0 === n ? n : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? n : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = e === !0
            }, !0), w = l.prototype = new t;
        return w.constructor = l, w.getRatio = function (t) {
            var n = t + (.5 - t) * this._p;
            return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : n - (t = 1 - t / this._p1) * t * t * t * n : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : n + (t - n) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : n
        }, l.ease = new l(.7, .7), w.config = l.config = function (t, n, e) {
            return new l(t, n, e)
        }, n = p("easing.SteppedEase", function (t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0), w = n.prototype = new t, w.constructor = n, w.getRatio = function (t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
        }, w.config = n.config = function (t) {
            return new n(t)
        }, e = p("easing.RoughEase", function (n) {
            n = n || {};
            for (var e, i, o, s, r, u, p = n.taper || "none", c = [], a = 0, h = 0 | (n.points || 20), _ = h, g = n.randomize !== !1, l = n.clamp === !0, w = n.template instanceof t ? n.template : null, M = "number" == typeof n.strength ? .4 * n.strength : .4; --_ > -1;) e = g ? Math.random() : 1 / h * _, i = w ? w.getRatio(e) : e, "none" === p ? o = M : "out" === p ? (s = 1 - e, o = s * s * M) : "in" === p ? o = e * e * M : .5 > e ? (s = 2 * e, o = s * s * .5 * M) : (s = 2 * (1 - e), o = s * s * .5 * M), g ? i += Math.random() * o - .5 * o : _ % 2 ? i += .5 * o : i -= .5 * o, l && (i > 1 ? i = 1 : 0 > i && (i = 0)), c[a++] = {
                x: e,
                y: i
            };
            for (c.sort(function (t, n) {
                return t.x - n.x
            }), u = new f(1, 1, null), _ = h; --_ > -1;) r = c[_], u = new f(r.x, r.y, u);
            this._prev = new f(0, 0, 0 !== u.t ? u : u.next)
        }, !0), w = e.prototype = new t, w.constructor = e, w.getRatio = function (t) {
            var n = this._prev;
            if (t > n.t) {
                for (; n.next && t >= n.t;) n = n.next;
                n = n.prev
            } else for (; n.prev && t <= n.t;) n = n.prev;
            return this._prev = n, n.v + (t - n.t) / n.gap * n.c
        }, w.config = function (t) {
            return new e(t)
        }, e.ease = new e, h("Bounce", c("BounceOut", function (t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), c("BounceIn", function (t) {
            return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), c("BounceInOut", function (t) {
            var n = .5 > t;
            return t = n ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, n ? .5 * (1 - t) : .5 * t + .5
        })), h("Circ", c("CircOut", function (t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), c("CircIn", function (t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), c("CircInOut", function (t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), i = function (n, e, i) {
            var o = p("easing." + n, function (t, n) {
                this._p1 = t >= 1 ? t : 1, this._p2 = (n || i) / (1 > t ? t : 1), this._p3 = this._p2 / r * (Math.asin(1 / this._p1) || 0), this._p2 = r / this._p2
            }, !0), s = o.prototype = new t;
            return s.constructor = o, s.getRatio = e, s.config = function (t, n) {
                return new o(t, n)
            }, o
        }, h("Elastic", i("ElasticOut", function (t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
        }, .3), i("ElasticIn", function (t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
        }, .3), i("ElasticInOut", function (t) {
            return (t *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
        }, .45)), h("Expo", c("ExpoOut", function (t) {
            return 1 - Math.pow(2, -10 * t)
        }), c("ExpoIn", function (t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), c("ExpoInOut", function (t) {
            return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), h("Sine", c("SineOut", function (t) {
            return Math.sin(t * u)
        }), c("SineIn", function (t) {
            return 1 - Math.cos(t * u)
        }), c("SineInOut", function (t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })), p("easing.EaseLookup", {
            find: function (n) {
                return t.map[n]
            }
        }, !0), a(o.SlowMo, "SlowMo", "ease,"), a(e, "RoughEase", "ease,"), a(n, "SteppedEase", "ease,"), g
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function () {
    "use strict";
    var t = function () {
        return _gsScope.GreenSockGlobals || _gsScope
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], t) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = t())
}();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    var t = document.documentElement, e = window, s = function (s, i) {
        var o = "x" === i ? "Width" : "Height", n = "scroll" + o, l = "client" + o, h = document.body;
        return s === e || s === t || s === h ? Math.max(t[n], h[n]) - (e["inner" + o] || t[l] || h[l]) : s[n] - s["offset" + o]
    }, i = function (t) {
        return "string" == typeof t && (t = TweenLite.selector(t)), t.length && t !== e && t[0] && t[0].style && !t.nodeType && (t = t[0]), t === e || t.nodeType && t.style ? t : null
    }, o = function (s, i) {
        var o = "scroll" + ("x" === i ? "Left" : "Top");
        return s === e && (null != s.pageXOffset ? o = "page" + i.toUpperCase() + "Offset" : s = null != t[o] ? t : document.body), function () {
            return s[o]
        }
    }, n = function (s, n) {
        var l = i(s).getBoundingClientRect(), h = !n || n === e || n === document.body,
            r = (h ? t : n).getBoundingClientRect(), u = {x: l.left - r.left, y: l.top - r.top};
        return !h && n && (u.x += o(n, "x")(), u.y += o(n, "y")()), u
    }, l = function (t, e, i) {
        var o = typeof t;
        return "number" === o || "string" === o && "=" === t.charAt(1) ? t : "max" === t ? s(e, i) : Math.min(s(e, i), n(t, e)[i])
    }, h = _gsScope._gsDefine.plugin({
        propName: "scrollTo", API: 2, version: "1.8.0", init: function (t, s, i) {
            return this._wdw = t === e, this._target = t, this._tween = i, "object" != typeof s ? (s = {y: s}, "string" == typeof s.y && "max" !== s.y && "=" !== s.y.charAt(1) && (s.x = s.y)) : s.nodeType && (s = {
                y: s,
                x: s
            }), this.vars = s, this._autoKill = s.autoKill !== !1, this.getX = o(t, "x"), this.getY = o(t, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != s.x ? (this._addTween(this, "x", this.x, l(s.x, t, "x") - (s.offsetX || 0), "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != s.y ? (this._addTween(this, "y", this.y, l(s.y, t, "y") - (s.offsetY || 0), "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
        }, set: function (t) {
            this._super.setRatio.call(this, t);
            var i = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                o = this._wdw || !this.skipY ? this.getY() : this.yPrev, n = o - this.yPrev, l = i - this.xPrev,
                r = h.autoKillThreshold;
            this.x < 0 && (this.x = 0), this.y < 0 && (this.y = 0), this._autoKill && (!this.skipX && (l > r || -r > l) && i < s(this._target, "x") && (this.skipX = !0), !this.skipY && (n > r || -r > n) && o < s(this._target, "y") && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? e.scrollTo(this.skipX ? i : this.x, this.skipY ? o : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
        }
    }), r = h.prototype;
    h.max = s, h.getOffset = n, h.autoKillThreshold = 7, r._kill = function (t) {
        return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t)
    }
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (t) {
    "use strict";
    var e = function () {
        return (_gsScope.GreenSockGlobals || _gsScope).ScrollToPlugin
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = e())
}();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
        var s = function (t) {
            var e, i = [], s = t.length;
            for (e = 0; e !== s; i.push(t[e++])) ;
            return i
        }, r = function (t, e, i) {
            var s, r, n = t.cycle;
            for (s in n) r = n[s], t[s] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
            delete t.cycle
        }, n = function (t, e, s) {
            i.call(this, t, e, s), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = n.prototype.render
        }, a = 1e-10, o = i._internals, l = o.isSelector, h = o.isArray, _ = n.prototype = i.to({}, .1, {}), u = [];
        n.version = "1.19.0", _.constructor = n, _.kill()._gc = !1, n.killTweensOf = n.killDelayedCallsTo = i.killTweensOf, n.getTweensOf = i.getTweensOf, n.lagSmoothing = i.lagSmoothing, n.ticker = i.ticker, n.render = i.render, _.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
        }, _.updateTo = function (t, e) {
            var s, r = this.ratio, n = this.vars.immediateRender || t.immediateRender;
            e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (s in t) this.vars[s] = t[s];
            if (this._initted || n) if (e) this._initted = !1, n && this.render(0, !0, !0); else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                var a = this._totalTime;
                this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
            } else if (this._initted = !1, this._init(), this._time > 0 || n) for (var o, l = 1 / (1 - r), h = this._firstPT; h;) o = h.s + h.c, h.c *= l, h.s = o - h.c, h = h._next;
            return this
        }, _.render = function (t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var s, r, n, l, h, _, u, f, c = this._dirty ? this.totalDuration() : this._totalDuration, p = this._time,
                d = this._totalTime, m = this._cycle, g = this._duration, v = this._rawPrevTime;
            if (t >= c - 1e-7 ? (this._totalTime = c, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > v || 0 >= t && t >= -1e-7 || v === a && "isPause" !== this.data) && v !== t && (i = !0, v > a && (r = "onReverseComplete")), this._rawPrevTime = f = !e || t || v === t ? t : a)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== d || 0 === g && v > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === g && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = f = !e || t || v === t ? t : a)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = g + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && t >= d && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g : this._time < 0 && (this._time = 0)), this._easeType ? (h = this._time / g, _ = this._easeType, u = this._easePower, (1 === _ || 3 === _ && h >= .5) && (h = 1 - h), 3 === _ && (h *= 2), 1 === u ? h *= h : 2 === u ? h *= h * h : 3 === u ? h *= h * h * h : 4 === u && (h *= h * h * h * h), 1 === _ ? this.ratio = 1 - h : 2 === _ ? this.ratio = h : this._time / g < .5 ? this.ratio = h / 2 : this.ratio = 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / g)), p === this._time && !i && m === this._cycle) return void (d !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
            if (!this._initted) {
                if (this._init(), !this._initted || this._gc) return;
                if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = p, this._totalTime = d, this._rawPrevTime = v, this._cycle = m, o.lazyTweens.push(this), void (this._lazy = [t, e]);
                this._time && !s ? this.ratio = this._ease.getRatio(this._time / g) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== p && t >= 0 && (this._active = !0), 0 === d && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (e || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
            this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== d || r) && this._callback("onUpdate")), this._cycle !== m && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === g && this._rawPrevTime === a && f !== a && (this._rawPrevTime = 0))
        }, n.to = function (t, e, i) {
            return new n(t, e, i)
        }, n.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new n(t, e, i)
        }, n.fromTo = function (t, e, i, s) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new n(t, e, s)
        }, n.staggerTo = n.allTo = function (t, e, a, o, _, f, c) {
            o = o || 0;
            var p, d, m, g, v = 0, y = [], T = function () {
                a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), _.apply(c || a.callbackScope || this, f || u)
            }, x = a.cycle, w = a.startAt && a.startAt.cycle;
            for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = s(t))), t = t || [], 0 > o && (t = s(t), t.reverse(), o *= -1), p = t.length - 1, m = 0; p >= m; m++) {
                d = {};
                for (g in a) d[g] = a[g];
                if (x && (r(d, t, m), null != d.duration && (e = d.duration, delete d.duration)), w) {
                    w = d.startAt = {};
                    for (g in a.startAt) w[g] = a.startAt[g];
                    r(d.startAt, t, m)
                }
                d.delay = v + (d.delay || 0), m === p && _ && (d.onComplete = T), y[m] = new n(t[m], e, d), v += o
            }
            return y
        }, n.staggerFrom = n.allFrom = function (t, e, i, s, r, a, o) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, n.staggerTo(t, e, i, s, r, a, o)
        }, n.staggerFromTo = n.allFromTo = function (t, e, i, s, r, a, o, l) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, n.staggerTo(t, e, s, r, a, o, l)
        }, n.delayedCall = function (t, e, i, s, r) {
            return new n(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                useFrames: r,
                overwrite: 0
            })
        }, n.set = function (t, e) {
            return new n(t, 0, e)
        }, n.isTweening = function (t) {
            return i.getTweensOf(t, !0).length > 0
        };
        var f = function (t, e) {
            for (var s = [], r = 0, n = t._first; n;) n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(f(n, e)), r = s.length), n = n._next;
            return s
        }, c = n.getAllTweens = function (e) {
            return f(t._rootTimeline, e).concat(f(t._rootFramesTimeline, e))
        };
        n.killAll = function (t, i, s, r) {
            null == i && (i = !0), null == s && (s = !0);
            var n, a, o, l = c(0 != r), h = l.length, _ = i && s && r;
            for (o = 0; h > o; o++) a = l[o], (_ || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
        }, n.killChildTweensOf = function (t, e) {
            if (null != t) {
                var r, a, _, u, f, c = o.tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = s(t)), h(t)) for (u = t.length; --u > -1;) n.killChildTweensOf(t[u], e); else {
                    r = [];
                    for (_ in c) for (a = c[_].target.parentNode; a;) a === t && (r = r.concat(c[_].tweens)), a = a.parentNode;
                    for (f = r.length, u = 0; f > u; u++) e && r[u].totalTime(r[u].totalDuration()), r[u]._enabled(!1, !1)
                }
            }
        };
        var p = function (t, i, s, r) {
            i = i !== !1, s = s !== !1, r = r !== !1;
            for (var n, a, o = c(r), l = i && s && r, h = o.length; --h > -1;) a = o[h], (l || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t)
        };
        return n.pauseAll = function (t, e, i) {
            p(!0, t, e, i)
        }, n.resumeAll = function (t, e, i) {
            p(!1, t, e, i)
        }, n.globalTimeScale = function (e) {
            var s = t._rootTimeline, r = i.ticker.time;
            return arguments.length ? (e = e || a, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
        }, _.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }, _.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }, _.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, _.duration = function (e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        }, _.totalDuration = function (t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, _.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, _.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, _.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, n
    }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
        var s = function (t) {
                e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                var i, s, r = this.vars;
                for (s in r) i = r[s], l(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
                l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
            }, r = 1e-10, n = i._internals, a = s._internals = {}, o = n.isSelector, l = n.isArray, h = n.lazyTweens,
            _ = n.lazyRender, u = _gsScope._gsDefine.globals, f = function (t) {
                var e, i = {};
                for (e in t) i[e] = t[e];
                return i
            }, c = function (t, e, i) {
                var s, r, n = t.cycle;
                for (s in n) r = n[s], t[s] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
                delete t.cycle
            }, p = a.pauseCallback = function () {
            }, d = function (t) {
                var e, i = [], s = t.length;
                for (e = 0; e !== s; i.push(t[e++])) ;
                return i
            }, m = s.prototype = new e;
        return s.version = "1.19.0", m.constructor = s, m.kill()._gc = m._forcingPlayhead = m._hasPause = !1, m.to = function (t, e, s, r) {
            var n = s.repeat && u.TweenMax || i;
            return e ? this.add(new n(t, e, s), r) : this.set(t, s, r)
        }, m.from = function (t, e, s, r) {
            return this.add((s.repeat && u.TweenMax || i).from(t, e, s), r)
        }, m.fromTo = function (t, e, s, r, n) {
            var a = r.repeat && u.TweenMax || i;
            return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n)
        }, m.staggerTo = function (t, e, r, n, a, l, h, _) {
            var u, p, m = new s({
                onComplete: l,
                onCompleteParams: h,
                callbackScope: _,
                smoothChildTiming: this.smoothChildTiming
            }), g = r.cycle;
            for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = d(t)), n = n || 0, 0 > n && (t = d(t), t.reverse(), n *= -1), p = 0; p < t.length; p++) u = f(r), u.startAt && (u.startAt = f(u.startAt), u.startAt.cycle && c(u.startAt, t, p)), g && (c(u, t, p), null != u.duration && (e = u.duration, delete u.duration)), m.to(t[p], e, u, p * n);
            return this.add(m, a)
        }, m.staggerFrom = function (t, e, i, s, r, n, a, o) {
            return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
        }, m.staggerFromTo = function (t, e, i, s, r, n, a, o, l) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, l)
        }, m.call = function (t, e, s, r) {
            return this.add(i.delayedCall(0, t, e, s), r)
        }, m.set = function (t, e, s) {
            return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
        }, s.exportRoot = function (t, e) {
            t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
            var r, n, a = new s(t), o = a._timeline;
            for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
            return o.add(a, 0), a
        }, m.add = function (r, n, a, o) {
            var h, _, u, f, c, p;
            if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                if (r instanceof Array || r && r.push && l(r)) {
                    for (a = a || "normal", o = o || 0, h = n, _ = r.length, u = 0; _ > u; u++) l(f = r[u]) && (f = new s({tweens: f})), this.add(f, h), "string" != typeof f && "function" != typeof f && ("sequence" === a ? h = f._startTime + f.totalDuration() / f._timeScale : "start" === a && (f._startTime -= f.delay())), h += o;
                    return this._uncache(!0)
                }
                if ("string" == typeof r) return this.addLabel(r, n);
                if ("function" != typeof r) throw"Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                r = i.delayedCall(0, r)
            }
            if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (c = this, p = c.rawTime() > r._startTime; c._timeline;) p && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1), c = c._timeline;
            return this
        }, m.remove = function (e) {
            if (e instanceof t) {
                this._remove(e, !1);
                var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
            }
            if (e instanceof Array || e && e.push && l(e)) {
                for (var s = e.length; --s > -1;) this.remove(e[s]);
                return this
            }
            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }, m._remove = function (t, i) {
            e.prototype._remove.call(this, t, i);
            var s = this._last;
            return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, m.append = function (t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }, m.insert = m.insertMultiple = function (t, e, i, s) {
            return this.add(t, e || 0, i, s)
        }, m.appendMultiple = function (t, e, i, s) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
        }, m.addLabel = function (t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e), this
        }, m.addPause = function (t, e, s, r) {
            var n = i.delayedCall(0, p, s, r || this);
            return n.vars.onComplete = n.vars.onReverseComplete = e, n.data = "isPause", this._hasPause = !0, this.add(n, t)
        }, m.removeLabel = function (t) {
            return delete this._labels[t], this
        }, m.getLabelTime = function (t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }, m._parseTimeOrLabel = function (e, i, s, r) {
            var n;
            if (r instanceof t && r.timeline === this) this.remove(r); else if (r && (r instanceof Array || r.push && l(r))) for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
            if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
            if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration()); else {
                if (-1 === (n = e.indexOf("="))) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
            }
            return Number(e) + i
        }, m.seek = function (t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
        }, m.stop = function () {
            return this.paused(!0)
        }, m.gotoAndPlay = function (t, e) {
            return this.play(t, e)
        }, m.gotoAndStop = function (t, e) {
            return this.pause(t, e)
        }, m.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s, n, a, o, l, u, f, c = this._dirty ? this.totalDuration() : this._totalDuration, p = this._time,
                d = this._startTime, m = this._timeScale, g = this._paused;
            if (t >= c - 1e-7) this._totalTime = this._time = c, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = c + 1e-4; else if (1e-7 > t) if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = n = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t; else {
                if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n) for (s = this._first; s && 0 === s._startTime;) s._duration || (n = !1), s = s._next;
                t = 0, this._initted || (l = !0)
            } else {
                if (this._hasPause && !this._forcingPlayhead && !e) {
                    if (t >= p) for (s = this._first; s && s._startTime <= t && !u;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (u = s), s = s._next; else for (s = this._last; s && s._startTime >= t && !u;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (u = s), s = s._prev;
                    u && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                this._totalTime = this._time = this._rawPrevTime = t
            }
            if (this._time !== p && this._first || i || l || u) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (f = this._time) >= p) for (s = this._first; s && (a = s._next, f === this._time && (!this._paused || g));) (s._active || s._startTime <= f && !s._paused && !s._gc) && (u === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a; else for (s = this._last; s && (a = s._prev, f === this._time && (!this._paused || g));) {
                    if (s._active || s._startTime <= p && !s._paused && !s._gc) {
                        if (u === s) {
                            for (u = s._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
                            u = null, this.pause()
                        }
                        s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                    }
                    s = a
                }
                this._onUpdate && (e || (h.length && _(), this._callback("onUpdate"))), o && (this._gc || (d === this._startTime || m !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (n && (h.length && _(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
            }
        }, m._hasPausedChild = function () {
            for (var t = this._first; t;) {
                if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                t = t._next
            }
            return !1
        }, m.getChildren = function (t, e, s, r) {
            r = r || -9999999999;
            for (var n = [], a = this._first, o = 0; a;) a._startTime < r || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
            return n
        }, m.getTweensOf = function (t, e) {
            var s, r, n = this._gc, a = [], o = 0;
            for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;) (s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
            return n && this._enabled(!1, !0), a
        }, m.recent = function () {
            return this._recent
        }, m._contains = function (t) {
            for (var e = t.timeline; e;) {
                if (e === this) return !0;
                e = e.timeline
            }
            return !1
        }, m.shiftChildren = function (t, e, i) {
            i = i || 0;
            for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
            if (e) for (s in n) n[s] >= i && (n[s] += t);
            return this._uncache(!0)
        }, m._kill = function (t, e) {
            if (!t && !e) return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
            return r
        }, m.clear = function (t) {
            var e = this.getChildren(!1, !0, !0), i = e.length;
            for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
            return t !== !1 && (this._labels = {}), this._uncache(!0)
        }, m.invalidate = function () {
            for (var e = this._first; e;) e.invalidate(), e = e._next;
            return t.prototype.invalidate.call(this)
        }, m._enabled = function (t, i) {
            if (t === this._gc) for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
            return e.prototype._enabled.call(this, t, i)
        }, m.totalTime = function (e, i, s) {
            this._forcingPlayhead = !0;
            var r = t.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, r
        }, m.duration = function (t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
        }, m.totalDuration = function (t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, r._startTime < 0 && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
                    this._duration = this._totalDuration = s, this._dirty = !1
                }
                return this._totalDuration
            }
            return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
        }, m.paused = function (e) {
            if (!e) for (var i = this._first, s = this._time; i;) i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
            return t.prototype.paused.apply(this, arguments)
        }, m.usesFrames = function () {
            for (var e = this._timeline; e._timeline;) e = e._timeline;
            return e === t._rootFramesTimeline
        }, m.rawTime = function () {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, s
    }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, i) {
        var s = function (e) {
                t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
            }, r = 1e-10, n = e._internals, a = n.lazyTweens, o = n.lazyRender, l = _gsScope._gsDefine.globals,
            h = new i(null, null, 1, 0), _ = s.prototype = new t;
        return _.constructor = s, _.kill()._gc = !1, s.version = "1.19.0", _.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
        }, _.addCallback = function (t, i, s, r) {
            return this.add(e.delayedCall(0, t, s, r), i)
        }, _.removeCallback = function (t, e) {
            if (t) if (null == e) this._kill(null, t); else for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === r && i[s]._enabled(!1, !1);
            return this
        }, _.removePause = function (e) {
            return this.removeCallback(t._internals.pauseCallback, e)
        }, _.tweenTo = function (t, i) {
            i = i || {};
            var s, r, n, a = {ease: h, useFrames: this.usesFrames(), immediateRender: !1},
                o = i.repeat && l.TweenMax || e;
            for (r in i) a[r] = i[r];
            return a.time = this._parseTimeOrLabel(t), s = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, n = new o(this, s, a), a.onStart = function () {
                n.target.paused(!0), n.vars.time !== n.target.time() && s === n.duration() && n.duration(Math.abs(n.vars.time - n.target.time()) / n.target._timeScale), i.onStart && n._callback("onStart")
            }, n
        }, _.tweenFromTo = function (t, e, i) {
            i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this
            }, i.immediateRender = i.immediateRender !== !1;
            var s = this.tweenTo(e, i);
            return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
        }, _.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s, n, l, h, _, u, f, c, p = this._dirty ? this.totalDuration() : this._totalDuration,
                d = this._duration, m = this._time, g = this._totalTime, v = this._startTime, y = this._timeScale,
                T = this._rawPrevTime, x = this._paused, w = this._cycle;
            if (t >= p - 1e-7) this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (n = !0, h = "onComplete", _ = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > T || T === r) && T !== t && this._first && (_ = !0, T > r && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = d, t = d + 1e-4); else if (1e-7 > t) if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === d && T !== r && (T > 0 || 0 > t && T >= 0) && !this._locked) && (h = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (_ = n = !0, h = "onReverseComplete") : T >= 0 && this._first && (_ = !0), this._rawPrevTime = t; else {
                if (this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n) for (s = this._first; s && 0 === s._startTime;) s._duration || (n = !1), s = s._next;
                t = 0, this._initted || (_ = !0)
            } else if (0 === d && 0 > T && (_ = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = d + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && t >= g && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 != (1 & this._cycle) && (this._time = d - this._time), this._time > d ? (this._time = d, t = d + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                if ((t = this._time) >= m) for (s = this._first; s && s._startTime <= t && !f;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (f = s), s = s._next; else for (s = this._last; s && s._startTime >= t && !f;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (f = s), s = s._prev;
                f && (this._time = t = f._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
            }
            if (this._cycle !== w && !this._locked) {
                var b = this._yoyo && 0 != (1 & w), P = b === (this._yoyo && 0 != (1 & this._cycle)),
                    O = this._totalTime, k = this._cycle, S = this._rawPrevTime, R = this._time;
                if (this._totalTime = w * d, this._cycle < w ? b = !b : this._totalTime += d, this._time = m, this._rawPrevTime = 0 === d ? T - 1e-4 : T, this._cycle = w, this._locked = !0, m = b ? 0 : d, this.render(m, e, 0 === d), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), m !== this._time) return;
                if (P && (m = b ? d + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !x) return;
                this._time = R, this._totalTime = O, this._cycle = k, this._rawPrevTime = S
            }
            if (!(this._time !== m && this._first || i || _ || f)) return void (g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (c = this._time) >= m) for (s = this._first; s && (l = s._next, c === this._time && (!this._paused || x));) (s._active || s._startTime <= this._time && !s._paused && !s._gc) && (f === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = l; else for (s = this._last; s && (l = s._prev, c === this._time && (!this._paused || x));) {
                if (s._active || s._startTime <= m && !s._paused && !s._gc) {
                    if (f === s) {
                        for (f = s._prev; f && f.endTime() > this._time;) f.render(f._reversed ? f.totalDuration() - (t - f._startTime) * f._timeScale : (t - f._startTime) * f._timeScale, e, i), f = f._prev;
                        f = null, this.pause()
                    }
                    s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                }
                s = l
            }
            this._onUpdate && (e || (a.length && o(), this._callback("onUpdate"))), h && (this._locked || this._gc || (v === this._startTime || y !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (n && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h)))
        }, _.getActive = function (t, e, i) {
            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
            var s, r, n = [], a = this.getChildren(t, e, i), o = 0, l = a.length;
            for (s = 0; l > s; s++) r = a[s], r.isActive() && (n[o++] = r);
            return n
        }, _.getLabelAfter = function (t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(), s = i.length;
            for (e = 0; s > e; e++) if (i[e].time > t) return i[e].name;
            return null
        }, _.getLabelBefore = function (t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1;) if (e[i].time < t) return e[i].name;
            return null
        }, _.getLabelsArray = function () {
            var t, e = [], i = 0;
            for (t in this._labels) e[i++] = {time: this._labels[t], name: t};
            return e.sort(function (t, e) {
                return t.time - e.time
            }), e
        }, _.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }, _.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }, _.totalDuration = function (e) {
            return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, _.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, _.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, _.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, _.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, _.currentLabel = function (t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }, s
    }, !0), function () {
        var t = 180 / Math.PI, e = [], i = [], s = [], r = {}, n = _gsScope._gsDefine.globals,
            a = function (t, e, i, s) {
                i === s && (i = s - (s - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
            }, o = function (t, e, i, s) {
                var r = {a: t}, n = {}, a = {}, o = {c: s}, l = (t + e) / 2, h = (e + i) / 2, _ = (i + s) / 2,
                    u = (l + h) / 2, f = (h + _) / 2, c = (f - u) / 8;
                return r.b = l + (t - l) / 4, n.b = u + c, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + f) / 2, a.b = f - c, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o]
            }, l = function (t, r, n, a, l) {
                var h, _, u, f, c, p, d, m, g, v, y, T, x, w = t.length - 1, b = 0, P = t[0].a;
                for (h = 0; w > h; h++) c = t[b], _ = c.a, u = c.d, f = t[b + 1].d, l ? (y = e[h], T = i[h], x = (T + y) * r * .25 / (a ? .5 : s[h] || .5), p = u - (u - _) * (a ? .5 * r : 0 !== y ? x / y : 0), d = u + (f - u) * (a ? .5 * r : 0 !== T ? x / T : 0), m = u - (p + ((d - p) * (3 * y / (y + T) + .5) / 4 || 0))) : (p = u - (u - _) * r * .5, d = u + (f - u) * r * .5, m = u - (p + d) / 2), p += m, d += m, c.c = g = p, c.b = 0 !== h ? P : P = c.a + .6 * (c.c - c.a), c.da = u - _, c.ca = g - _, c.ba = P - _, n ? (v = o(_, P, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, P = d;
                c = t[b], c.b = P, c.c = P + .4 * (c.d - P), c.da = c.d - c.a, c.ca = c.c - c.a, c.ba = P - c.a, n && (v = o(c.a, P, c.c, c.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
            }, h = function (t, s, r, n) {
                var o, l, h, _, u, f, c = [];
                if (n) for (t = [n].concat(t), l = t.length; --l > -1;) "string" == typeof (f = t[l][s]) && "=" === f.charAt(1) && (t[l][s] = n[s] + Number(f.charAt(0) + f.substr(2)));
                if (0 > (o = t.length - 2)) return c[0] = new a(t[0][s], 0, 0, t[-1 > o ? 0 : 1][s]), c;
                for (l = 0; o > l; l++) h = t[l][s], _ = t[l + 1][s], c[l] = new a(h, 0, 0, _), r && (u = t[l + 2][s], e[l] = (e[l] || 0) + (_ - h) * (_ - h), i[l] = (i[l] || 0) + (u - _) * (u - _));
                return c[l] = new a(t[l][s], 0, 0, t[l + 1][s]), c
            }, _ = function (t, n, a, o, _, u) {
                var f, c, p, d, m, g, v, y, T = {}, x = [], w = u || t[0];
                _ = "string" == typeof _ ? "," + _ + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == n && (n = 1);
                for (c in t[0]) x.push(c);
                if (t.length > 1) {
                    for (y = t[t.length - 1], v = !0, f = x.length; --f > -1;) if (c = x[f], Math.abs(w[c] - y[c]) > .05) {
                        v = !1;
                        break
                    }
                    v && (t = t.concat(), u && t.unshift(u), t.push(t[1]), u = t[t.length - 3])
                }
                for (e.length = i.length = s.length = 0, f = x.length; --f > -1;) c = x[f], r[c] = -1 !== _.indexOf("," + c + ","), T[c] = h(t, c, r[c], u);
                for (f = e.length; --f > -1;) e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
                if (!o) {
                    for (f = x.length; --f > -1;) if (r[c]) for (p = T[x[f]], g = p.length - 1, d = 0; g > d; d++) m = p[d + 1].da / i[d] + p[d].da / e[d] || 0, s[d] = (s[d] || 0) + m * m;
                    for (f = s.length; --f > -1;) s[f] = Math.sqrt(s[f])
                }
                for (f = x.length, d = a ? 4 : 1; --f > -1;) c = x[f], p = T[c], l(p, n, a, o, r[c]), v && (p.splice(0, d), p.splice(p.length - d, d));
                return T
            }, u = function (t, e, i) {
                e = e || "soft";
                var s, r, n, o, l, h, _, u, f, c, p, d = {}, m = "cubic" === e ? 3 : 2, g = "soft" === e, v = [];
                if (g && i && (t = [i].concat(t)), null == t || t.length < m + 1) throw"invalid Bezier data";
                for (f in t[0]) v.push(f);
                for (h = v.length; --h > -1;) {
                    for (f = v[h], d[f] = l = [], c = 0, u = t.length, _ = 0; u > _; _++) s = null == i ? t[_][f] : "string" == typeof (p = t[_][f]) && "=" === p.charAt(1) ? i[f] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && _ > 1 && u - 1 > _ && (l[c++] = (s + l[c - 2]) / 2), l[c++] = s;
                    for (u = c - m + 1, c = 0, _ = 0; u > _; _ += m) s = l[_], r = l[_ + 1], n = l[_ + 2], o = 2 === m ? 0 : l[_ + 3], l[c++] = p = 3 === m ? new a(s, r, n, o) : new a(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
                    l.length = c
                }
                return d
            }, f = function (t, e, i) {
                for (var s, r, n, a, o, l, h, _, u, f, c, p = 1 / i, d = t.length; --d > -1;) for (f = t[d], n = f.a, a = f.d - n, o = f.c - n, l = f.b - n, s = r = 0, _ = 1; i >= _; _++) h = p * _, u = 1 - h, s = r - (r = (h * h * a + 3 * u * (h * o + u * l)) * h), c = d * i + _ - 1, e[c] = (e[c] || 0) + s * s
            }, c = function (t, e) {
                e = e >> 0 || 6;
                var i, s, r, n, a = [], o = [], l = 0, h = 0, _ = e - 1, u = [], c = [];
                for (i in t) f(t[i], a, e);
                for (r = a.length, s = 0; r > s; s++) l += Math.sqrt(a[s]), n = s % e, c[n] = l, n === _ && (h += l, n = s / e >> 0, u[n] = c, o[n] = h, l = 0, c = []);
                return {length: h, lengths: o, segments: u}
            }, p = _gsScope._gsDefine.plugin({
                propName: "bezier", priority: -1, version: "1.3.7", API: 2, global: !0, init: function (t, e, i) {
                    this._target = t, e instanceof Array && (e = {values: e}), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                    var s, r, n, a, o, l = e.values || [], h = {}, f = l[0], p = e.autoRotate || i.vars.orientToBezier;
                    this._autoRotate = p ? p instanceof Array ? p : [["x", "y", "rotation", p === !0 ? 0 : Number(p) || 0]] : null;
                    for (s in f) this._props.push(s);
                    for (n = this._props.length; --n > -1;) s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], h[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || h[s] !== l[0][s] && (o = h);
                    if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? _(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : u(l, e.type, h), this._segCount = this._beziers[s].length, this._timeRes) {
                        var d = c(this._beziers, this._timeRes);
                        this._length = d.length, this._lengths = d.lengths, this._segments = d.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                    }
                    if (p = this._autoRotate) for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), n = p.length; --n > -1;) {
                        for (a = 0; 3 > a; a++) s = p[n][a], this._func[s] = "function" == typeof t[s] && t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)];
                        s = p[n][2], this._initialRotations[n] = (this._func[s] ? this._func[s].call(this._target) : this._target[s]) || 0, this._overwriteProps.push(s)
                    }
                    return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                }, set: function (e) {
                    var i, s, r, n, a, o, l, h, _, u, f = this._segCount, c = this._func, p = this._target,
                        d = e !== this._startRatio;
                    if (this._timeRes) {
                        if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && f - 1 > r) {
                            for (h = f - 1; h > r && (this._l2 = _[++r]) <= e;) ;
                            this._l1 = _[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                        } else if (e < this._l1 && r > 0) {
                            for (; r > 0 && (this._l1 = _[--r]) >= e;) ;
                            0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = _[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                        }
                        if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < u.length - 1) {
                            for (h = u.length - 1; h > r && (this._s2 = u[++r]) <= e;) ;
                            this._s1 = u[r - 1], this._si = r
                        } else if (e < this._s1 && r > 0) {
                            for (; r > 0 && (this._s1 = u[--r]) >= e;) ;
                            0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                        }
                        o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                    } else i = 0 > e ? 0 : e >= 1 ? f - 1 : f * e >> 0, o = (e - i * (1 / f)) * f;
                    for (s = 1 - o, r = this._props.length; --r > -1;) n = this._props[r], a = this._beziers[n][i], l = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a, this._mod[n] && (l = this._mod[n](l, p)), c[n] ? p[n](l) : p[n] = l;
                    if (this._autoRotate) {
                        var m, g, v, y, T, x, w, b = this._autoRotate;
                        for (r = b.length; --r > -1;) n = b[r][2], x = b[r][3] || 0, w = b[r][4] === !0 ? 1 : t, a = this._beziers[b[r][0]], m = this._beziers[b[r][1]], a && m && (a = a[i], m = m[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = m.a + (m.b - m.a) * o, T = m.b + (m.c - m.b) * o, v += (T - v) * o, T += (m.c + (m.d - m.c) * o - T) * o, l = d ? Math.atan2(T - v, y - g) * w + x : this._initialRotations[r], this._mod[n] && (l = this._mod[n](l, p)), c[n] ? p[n](l) : p[n] = l)
                    }
                }
            }), d = p.prototype;
        p.bezierThrough = _, p.cubicToQuadratic = o, p._autoCSS = !0, p.quadraticToCubic = function (t, e, i) {
            return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
        }, p._cssRegister = function () {
            var t = n.CSSPlugin;
            if (t) {
                var e = t._internals, i = e._parseToProxy, s = e._setPluginRatio, r = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function (t, e, n, a, o, l) {
                        e instanceof Array && (e = {values: e}), l = new p;
                        var h, _, u, f = e.values, c = f.length - 1, d = [], m = {};
                        if (0 > c) return o;
                        for (h = 0; c >= h; h++) u = i(t, f[h], a, o, l, c !== h), d[h] = u.end;
                        for (_ in e) m[_] = e[_];
                        return m.values = d, o = new r(t, "bezier", 0, 0, u.pt, 2), o.data = u, o.plugin = l, o.setRatio = s, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (h = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != u.end.left ? [["left", "top", "rotation", h, !1]] : null != u.end.x && [["x", "y", "rotation", h, !1]]), m.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform, u.proxy.rotation = u.autoRotate.rotation || 0, a._overwriteProps.push("rotation")), l._onInitTween(u.proxy, m, a._tween), o
                    }
                })
            }
        }, d._mod = function (t) {
            for (var e, i = this._overwriteProps, s = i.length; --s > -1;) (e = t[i[s]]) && "function" == typeof e && (this._mod[i[s]] = e)
        }, d._kill = function (t) {
            var e, i, s = this._props;
            for (e in this._beziers) if (e in t) for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
            if (s = this._autoRotate) for (i = s.length; --i > -1;) t[s[i][2]] && s.splice(i, 1);
            return this._super._kill.call(this, t)
        }
    }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
        var i, s, r, n, a = function () {
            t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
        }, o = _gsScope._gsDefine.globals, l = {}, h = a.prototype = new t("css");
        h.constructor = a, a.version = "1.19.0", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, h = "px", a.suffixMap = {
            top: h,
            right: h,
            bottom: h,
            left: h,
            width: h,
            height: h,
            fontSize: h,
            padding: h,
            margin: h,
            perspective: h,
            lineHeight: ""
        };
        var _, u, f, c, p, d, m, g, v = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
            y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            T = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
            w = /(?:\d|\-|\+|=|#|\.)*/g, b = /opacity *= *([^)]*)/i, P = /opacity:([^;]*)/i, O = /^(rgb|hsl)/,
            k = /([A-Z])/g, S = /-([a-z])/gi, R = function (t, e) {
                return e.toUpperCase()
            }, A = /(?:Left|Right|Width)/i, C = /,(?=[^\)]*(?:\(|$))/gi, D = /[\s,\(]/i, M = Math.PI / 180,
            F = 180 / Math.PI, z = {}, X = document, I = function (t) {
                return X.createElementNS ? X.createElementNS("http://www.w3.org/1999/xhtml", t) : X.createElement(t)
            }, N = I("div"), L = I("img"), E = a._internals = {_specialProps: l}, Y = navigator.userAgent, B = function () {
                var t = Y.indexOf("Android"), e = I("a");
                return f = -1 !== Y.indexOf("Safari") && -1 === Y.indexOf("Chrome") && (-1 === t || Number(Y.substr(t + 8, 1)) > 3), p = f && Number(Y.substr(Y.indexOf("Version/") + 8, 1)) < 6, c = -1 !== Y.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (d = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
            }(), j = function (t) {
                return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            }, U = function (t) {
                window.console
            }, V = "", q = "", W = function (t, e) {
                e = e || N;
                var i, s, r = e.style;
                if (void 0 !== r[t]) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];) ;
                return s >= 0 ? (q = 3 === s ? "ms" : i[s], V = "-" + q.toLowerCase() + "-", q + t) : null
            }, Z = X.defaultView ? X.defaultView.getComputedStyle : function () {
            }, G = a.getStyle = function (t, e, i, s, r) {
                var n;
                return B || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || Z(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(k, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : j(t)
            }, $ = E.convertToPixels = function (t, i, s, r, n) {
                if ("px" === r || !r) return s;
                if ("auto" === r || !s) return 0;
                var o, l, h, _ = A.test(i), u = t, f = N.style, c = 0 > s, p = 1 === s;
                if (c && (s = -s), p && (s *= 100), "%" === r && -1 !== i.indexOf("border")) o = s / 100 * (_ ? t.clientWidth : t.clientHeight); else {
                    if (f.cssText = "border:0 solid red;position:" + G(t, "position") + ";line-height:0;", "%" !== r && u.appendChild && "v" !== r.charAt(0) && "rem" !== r) f[_ ? "borderLeftWidth" : "borderTopWidth"] = s + r; else {
                        if (u = t.parentNode || X.body, l = u._gsCache, h = e.ticker.frame, l && _ && l.time === h) return l.width * s / 100;
                        f[_ ? "width" : "height"] = s + r
                    }
                    u.appendChild(N), o = parseFloat(N[_ ? "offsetWidth" : "offsetHeight"]), u.removeChild(N), _ && "%" === r && a.cacheWidths !== !1 && (l = u._gsCache = u._gsCache || {}, l.time = h, l.width = o / s * 100), 0 !== o || n || (o = $(t, i, s, r, !0))
                }
                return p && (o /= 100), c ? -o : o
            }, Q = E.calculateOffset = function (t, e, i) {
                if ("absolute" !== G(t, "position", i)) return 0;
                var s = "left" === e ? "Left" : "Top", r = G(t, "margin" + s, i);
                return t["offset" + s] - ($(t, e, parseFloat(r), r.replace(w, "")) || 0)
            }, H = function (t, e) {
                var i, s, r, n = {};
                if (e = e || Z(t, null)) if (i = e.length) for (; --i > -1;) r = e[i], (-1 === r.indexOf("-transform") || Pt === r) && (n[r.replace(S, R)] = e.getPropertyValue(r)); else for (i in e) (-1 === i.indexOf("Transform") || bt === i) && (n[i] = e[i]); else if (e = t.currentStyle || t.style) for (i in e) "string" == typeof i && void 0 === n[i] && (n[i.replace(S, R)] = e[i]);
                return B || (n.opacity = j(t)), s = Nt(t, e, !1), n.rotation = s.rotation, n.skewX = s.skewX, n.scaleX = s.scaleX, n.scaleY = s.scaleY, n.x = s.x, n.y = s.y, kt && (n.z = s.z, n.rotationX = s.rotationX, n.rotationY = s.rotationY, n.scaleZ = s.scaleZ), n.filters && delete n.filters, n
            }, K = function (t, e, i, s, r) {
                var n, a, o, l = {}, h = t.style;
                for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(x, "") ? n : 0 : Q(t, a), void 0 !== h[a] && (o = new ct(h, a, h[a], o)));
                if (s) for (a in s) "className" !== a && (l[a] = s[a]);
                return {difs: l, firstMPT: o}
            }, J = {width: ["Left", "Right"], height: ["Top", "Bottom"]},
            tt = ["marginLeft", "marginRight", "marginTop", "marginBottom"], et = function (t, e, i) {
                if ("svg" === (t.nodeName + "").toLowerCase()) return (i || Z(t))[e] || 0;
                if (t.getBBox && zt(t)) return t.getBBox()[e] || 0;
                var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight), r = J[e], n = r.length;
                for (i = i || Z(t, null); --n > -1;) s -= parseFloat(G(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(G(t, "border" + r[n] + "Width", i, !0)) || 0;
                return s
            }, it = function (t, e) {
                if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                (null == t || "" === t) && (t = "0 0");
                var i, s = t.split(" "), r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : s[0],
                    n = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : s[1];
                if (s.length > 3 && !e) {
                    for (s = t.split(", ").join(",").split(","), t = [], i = 0; i < s.length; i++) t.push(it(s[i]));
                    return t.join(",")
                }
                return null == n ? n = "center" === r ? "50%" : "0" : "center" === n && (n = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + n + (s.length > 2 ? " " + s[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== n.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === n.charAt(1), e.ox = parseFloat(r.replace(x, "")), e.oy = parseFloat(n.replace(x, "")), e.v = t), e || t
            }, st = function (t, e) {
                return "function" == typeof t && (t = t(g, m)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
            }, rt = function (t, e) {
                return "function" == typeof t && (t = t(g, m)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
            }, nt = function (t, e, i, s) {
                var r, n, a, o, l;
                return "function" == typeof t && (t = t(g, m)), null == t ? o = e : "number" == typeof t ? o = t : (r = 360, n = t.split("_"), l = "=" === t.charAt(1), a = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : F) - (l ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r) !== a % (r / 2) && (a = 0 > a ? a + r : a - r), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (a / r | 0) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (a / r | 0) * r)), o = e + a), 1e-6 > o && o > -1e-6 && (o = 0), o
            }, at = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            }, ot = function (t, e, i) {
                return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
            }, lt = a.parseColor = function (t, e) {
                var i, s, r, n, a, o, l, h, _, u, f;
                if (t) if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t]; else {
                    if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), at[t]) i = at[t]; else if ("#" === t.charAt(0)) 4 === t.length && (s = t.charAt(1), r = t.charAt(2), n = t.charAt(3), t = "#" + s + s + r + r + n + n), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t]; else if ("hsl" === t.substr(0, 3)) if (i = f = t.match(v), e) {
                        if (-1 !== t.indexOf("=")) return t.match(y)
                    } else a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, l = Number(i[2]) / 100, r = .5 >= l ? l * (o + 1) : l + o - l * o, s = 2 * l - r, i.length > 3 && (i[3] = Number(t[3])), i[0] = ot(a + 1 / 3, s, r), i[1] = ot(a, s, r), i[2] = ot(a - 1 / 3, s, r); else i = t.match(v) || at.transparent;
                    i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                } else i = at.black;
                return e && !f && (s = i[0] / 255, r = i[1] / 255, n = i[2] / 255, h = Math.max(s, r, n), _ = Math.min(s, r, n), l = (h + _) / 2, h === _ ? a = o = 0 : (u = h - _, o = l > .5 ? u / (2 - h - _) : u / (h + _), a = h === s ? (r - n) / u + (n > r ? 6 : 0) : h === r ? (n - s) / u + 2 : (s - r) / u + 4, a *= 60), i[0] = a + .5 | 0, i[1] = 100 * o + .5 | 0, i[2] = 100 * l + .5 | 0), i
            }, ht = function (t, e) {
                var i, s, r, n = t.match(_t) || [], a = 0, o = n.length ? "" : t;
                for (i = 0; i < n.length; i++) s = n[i], r = t.substr(a, t.indexOf(s, a) - a), a += r.length + s.length, s = lt(s, e), 3 === s.length && s.push(1), o += r + (e ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3] : "rgba(" + s.join(",")) + ")";
                return o + t.substr(a)
            }, _t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (h in at) _t += "|" + h + "\\b";
        _t = new RegExp(_t + ")", "gi"), a.colorStringFilter = function (t) {
            var e, i = t[0] + t[1];
            _t.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = ht(t[0], e), t[1] = ht(t[1], e)), _t.lastIndex = 0
        }, e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
        var ut = function (t, e, i, s) {
            if (null == t) return function (t) {
                return t
            };
            var r, n = e ? (t.match(_t) || [""])[0] : "", a = t.split(n).join("").match(T) || [],
                o = t.substr(0, t.indexOf(a[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "",
                h = -1 !== t.indexOf(" ") ? " " : ",", _ = a.length, u = _ > 0 ? a[0].replace(v, "") : "";
            return _ ? r = e ? function (t) {
                var e, f, c, p;
                if ("number" == typeof t) t += u; else if (s && C.test(t)) {
                    for (p = t.replace(C, "|").split("|"), c = 0; c < p.length; c++) p[c] = r(p[c]);
                    return p.join(",")
                }
                if (e = (t.match(_t) || [n])[0], f = t.split(e).join("").match(T) || [], c = f.length, _ > c--) for (; ++c < _;) f[c] = i ? f[(c - 1) / 2 | 0] : a[c];
                return o + f.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
            } : function (t) {
                var e, n, f;
                if ("number" == typeof t) t += u; else if (s && C.test(t)) {
                    for (n = t.replace(C, "|").split("|"), f = 0; f < n.length; f++) n[f] = r(n[f]);
                    return n.join(",")
                }
                if (e = t.match(T) || [], f = e.length, _ > f--) for (; ++f < _;) e[f] = i ? e[(f - 1) / 2 | 0] : a[f];
                return o + e.join(h) + l
            } : function (t) {
                return t
            }
        }, ft = function (t) {
            return t = t.split(","), function (e, i, s, r, n, a, o) {
                var l, h = (i + "").split(" ");
                for (o = {}, l = 0; 4 > l; l++) o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                return r.parse(e, o, n, a)
            }
        }, ct = (E._setPluginRatio = function (t) {
            this.plugin.setRatio(t);
            for (var e, i, s, r, n, a = this.data, o = a.proxy, l = a.firstMPT; l;) e = o[l.v], l.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next;
            if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod(o.rotation, this.t) : o.rotation), 1 === t || 0 === t) for (l = a.firstMPT, n = 1 === t ? "e" : "b"; l;) {
                if (i = l.t, i.type) {
                    if (1 === i.type) {
                        for (r = i.xs0 + i.s + i.xs1, s = 1; s < i.l; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                        i[n] = r
                    }
                } else i[n] = i.s + i.xs0;
                l = l._next
            }
        }, function (t, e, i, s, r) {
            this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s)
        }), pt = (E._parseToProxy = function (t, e, i, s, r, n) {
            var a, o, l, h, _, u = s, f = {}, c = {}, p = i._transform, d = z;
            for (i._transform = null, z = e, s = _ = i.parse(t, e, s, r), z = d, n && (i._transform = p, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                if (s.type <= 1 && (o = s.p, c[o] = s.s + s.c, f[o] = s.s, n || (h = new ct(s, "s", o, h, s.r), s.c = 0), 1 === s.type)) for (a = s.l; --a > 0;) l = "xn" + a, o = s.p + "_" + l, c[o] = s.data[l], f[o] = s[l], n || (h = new ct(s, l, o, h, s.rxp[l]));
                s = s._next
            }
            return {proxy: f, end: c, firstMPT: h, pt: _}
        }, E.CSSPropTween = function (t, e, s, r, a, o, l, h, _, u, f) {
            this.t = t, this.p = e, this.s = s, this.c = r, this.n = l || e, t instanceof pt || n.push(this.n), this.r = h, this.type = o || 0, _ && (this.pr = _, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === f ? s + r : f, a && (this._next = a, a._prev = this)
        }), dt = function (t, e, i, s, r, n) {
            var a = new pt(t, e, i, s - i, r, -1, n);
            return a.b = i, a.e = a.xs0 = s, a
        }, mt = a.parseComplex = function (t, e, i, s, r, n, o, l, h, u) {
            i = i || n || "", "function" == typeof s && (s = s(g, m)), o = new pt(t, e, 0, 0, o, u ? 2 : 1, null, !1, l, i, s), s += "", r && _t.test(s + i) && (s = [i, s], a.colorStringFilter(s), i = s[0], s = s[1]);
            var f, c, p, d, T, x, w, b, P, O, k, S, R, A = i.split(", ").join(",").split(" "),
                D = s.split(", ").join(",").split(" "), M = A.length, F = _ !== !1;
            for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (A = A.join(" ").replace(C, ", ").split(" "), D = D.join(" ").replace(C, ", ").split(" "), M = A.length), M !== D.length && (A = (n || "").split(" "), M = A.length), o.plugin = h, o.setRatio = u, _t.lastIndex = 0, f = 0; M > f; f++) if (d = A[f], T = D[f], (b = parseFloat(d)) || 0 === b) o.appendXtra("", b, st(T, b), T.replace(y, ""), F && -1 !== T.indexOf("px"), !0); else if (r && _t.test(d)) S = T.indexOf(")") + 1, S = ")" + (S ? T.substr(S) : ""), R = -1 !== T.indexOf("hsl") && B, d = lt(d, R), T = lt(T, R), P = d.length + T.length > 6, P && !B && 0 === T[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(D[f]).join("transparent")) : (B || (P = !1), R ? o.appendXtra(P ? "hsla(" : "hsl(", d[0], st(T[0], d[0]), ",", !1, !0).appendXtra("", d[1], st(T[1], d[1]), "%,", !1).appendXtra("", d[2], st(T[2], d[2]), P ? "%," : "%" + S, !1) : o.appendXtra(P ? "rgba(" : "rgb(", d[0], T[0] - d[0], ",", !0, !0).appendXtra("", d[1], T[1] - d[1], ",", !0).appendXtra("", d[2], T[2] - d[2], P ? "," : S, !0), P && (d = d.length < 4 ? 1 : d[3], o.appendXtra("", d, (T.length < 4 ? 1 : T[3]) - d, S, !1))), _t.lastIndex = 0; else if (x = d.match(v)) {
                if (!(w = T.match(y)) || w.length !== x.length) return o;
                for (p = 0, c = 0; c < x.length; c++) k = x[c], O = d.indexOf(k, p), o.appendXtra(d.substr(p, O - p), Number(k), st(w[c], k), "", F && "px" === d.substr(O + k.length, 2), 0 === c), p = O + k.length;
                o["xs" + o.l] += d.substr(p)
            } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + T : T;
            if (-1 !== s.indexOf("=") && o.data) {
                for (S = o.xs0 + o.data.s, f = 1; f < o.l; f++) S += o["xs" + f] + o.data["xn" + f];
                o.e = S + o["xs" + f]
            }
            return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
        }, gt = 9;
        for (h = pt.prototype, h.l = h.pr = 0; --gt > 0;) h["xn" + gt] = 0, h["xs" + gt] = "";
        h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function (t, e, i, s, r, n) {
            var a = this, o = a.l;
            return a["xs" + o] += n && (o || a["xs" + o]) ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new pt(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {s: e + i}, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
        };
        var vt = function (t, e) {
            e = e || {}, this.p = e.prefix ? W(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || ut(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
        }, yt = E._registerComplexSpecialProp = function (t, e, i) {
            "object" != typeof e && (e = {parser: i});
            var s, r = t.split(","), n = e.defaultValue;
            for (i = i || [n], s = 0; s < r.length; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || n, new vt(r[s], e)
        }, Tt = E._registerPluginProp = function (t) {
            if (!l[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                yt(t, {
                    parser: function (t, i, s, r, n, a, h) {
                        var _ = o.com.greensock.plugins[e];
                        return _ ? (_._cssRegister(), l[s].parse(t, i, s, r, n, a, h)) : (U(), n)
                    }
                })
            }
        };
        h = vt.prototype, h.parseComplex = function (t, e, i, s, r, n) {
            var a, o, l, h, _, u, f = this.keyword;
            if (this.multi && (C.test(i) || C.test(e) ? (o = e.replace(C, "|").split("|"), l = i.replace(C, "|").split("|")) : f && (o = [e], l = [i])), l) {
                for (h = l.length > o.length ? l.length : o.length, a = 0; h > a; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, f && (_ = e.indexOf(f), u = i.indexOf(f), _ !== u && (-1 === u ? o[a] = o[a].split(f).join("") : -1 === _ && (o[a] += " " + f)));
                e = o.join(", "), i = l.join(", ")
            }
            return mt(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
        }, h.parse = function (t, e, i, s, n, a, o) {
            return this.parseComplex(t.style, this.format(G(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
        }, a.registerSpecialProp = function (t, e, i) {
            yt(t, {
                parser: function (t, s, r, n, a, o, l) {
                    var h = new pt(t, r, 0, 0, a, 2, r, !1, i);
                    return h.plugin = o, h.setRatio = e(t, s, n._tween, r), h
                }, priority: i
            })
        }, a.useSVGTransformAttr = f || c;
        var xt,
            wt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
            bt = W("transform"), Pt = V + "transform", Ot = W("transformOrigin"), kt = null !== W("perspective"),
            St = E.Transform = function () {
                this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = !(a.defaultForce3D === !1 || !kt) && (a.defaultForce3D || "auto")
            }, Rt = window.SVGElement, At = function (t, e, i) {
                var s, r = X.createElementNS("http://www.w3.org/2000/svg", t);
                for (s in i) r.setAttributeNS(null, s.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), i[s]);
                return e.appendChild(r), r
            }, Ct = X.documentElement, Dt = function () {
                var t, e, i, s = d || /Android/i.test(Y) && !window.chrome;
                return X.createElementNS && !s && (t = At("svg", Ct), e = At("rect", t, {
                    width: 100,
                    height: 50,
                    x: 100
                }), i = e.getBoundingClientRect().width, e.style[Ot] = "50% 50%", e.style[bt] = "scaleX(0.5)", s = i === e.getBoundingClientRect().width && !(c && kt), Ct.removeChild(t)), s
            }(), Mt = function (t, e, i, s, r, n) {
                var o, l, h, _, u, f, c, p, d, m, g, v, y, T, x = t._gsTransform, w = It(t, !0);
                x && (y = x.xOrigin, T = x.yOrigin), (!s || (o = s.split(" ")).length < 2) && (c = t.getBBox(), e = it(e).split(" "), o = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * c.width : parseFloat(e[0])) + c.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * c.height : parseFloat(e[1])) + c.y]), i.xOrigin = _ = parseFloat(o[0]), i.yOrigin = u = parseFloat(o[1]), s && w !== Xt && (f = w[0], c = w[1], p = w[2], d = w[3], m = w[4], g = w[5], v = f * d - c * p, l = _ * (d / v) + u * (-p / v) + (p * g - d * m) / v, h = _ * (-c / v) + u * (f / v) - (f * g - c * m) / v, _ = i.xOrigin = o[0] = l, u = i.yOrigin = o[1] = h), x && (n && (i.xOffset = x.xOffset, i.yOffset = x.yOffset, x = i), r || r !== !1 && a.defaultSmoothOrigin !== !1 ? (l = _ - y, h = u - T, x.xOffset += l * w[0] + h * w[2] - l, x.yOffset += l * w[1] + h * w[3] - h) : x.xOffset = x.yOffset = 0), n || t.setAttribute("data-svg-origin", o.join(" "))
            }, Ft = function (t) {
                try {
                    return t.getBBox()
                } catch (t) {
                }
            }, zt = function (t) {
                return !!(Rt && t.getBBox && t.getCTM && Ft(t) && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
            }, Xt = [1, 0, 0, 1, 0, 0], It = function (t, e) {
                var i, s, r, n, a, o, l = t._gsTransform || new St, h = t.style;
                if (bt ? s = G(t, Pt, null, !0) : t.currentStyle && (s = t.currentStyle.filter.match(/(M11|M12|M21|M22)=[\d\-\.e]+/gi), s = s && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, i && bt && ((o = "none" === Z(t).display) || !t.parentNode) && (o && (n = h.display, h.display = "block"), t.parentNode || (a = 1, Ct.appendChild(t)), s = G(t, Pt, null, !0), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, n ? h.display = n : o && Bt(h, "display"), a && Ct.removeChild(t)), (l.svg || t.getBBox && zt(t)) && (i && -1 !== (h[bt] + "").indexOf("matrix") && (s = h[bt], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (s = r, i = 0) : -1 !== r.indexOf("translate") && (s = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Xt;
                for (r = (s || "").match(v) || [], gt = r.length; --gt > -1;) n = Number(r[gt]), r[gt] = (a = n - (n |= 0)) ? (1e5 * a + (0 > a ? -.5 : .5) | 0) / 1e5 + n : n;
                return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
            }, Nt = E.getTransform = function (t, i, s, r) {
                if (t._gsTransform && s && !r) return t._gsTransform;
                var n, o, l, h, _, u, f = s ? t._gsTransform || new St : new St, c = f.scaleX < 0, p = 1e5,
                    d = kt ? parseFloat(G(t, Ot, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0,
                    m = parseFloat(a.defaultTransformPerspective) || 0;
                if (f.svg = !(!t.getBBox || !zt(t)), f.svg && (Mt(t, G(t, Ot, i, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), xt = a.useSVGTransformAttr || Dt), (n = It(t)) !== Xt) {
                    if (16 === n.length) {
                        var g, v, y, T, x, w = n[0], b = n[1], P = n[2], O = n[3], k = n[4], S = n[5], R = n[6], A = n[7],
                            C = n[8], D = n[9], M = n[10], z = n[12], X = n[13], I = n[14], N = n[11], L = Math.atan2(R, M);
                        f.zOrigin && (I = -f.zOrigin, z = C * I - n[12], X = D * I - n[13], I = M * I + f.zOrigin - n[14]), f.rotationX = L * F, L && (T = Math.cos(-L), x = Math.sin(-L), g = k * T + C * x, v = S * T + D * x, y = R * T + M * x, C = k * -x + C * T, D = S * -x + D * T, M = R * -x + M * T, N = A * -x + N * T, k = g, S = v, R = y), L = Math.atan2(-P, M), f.rotationY = L * F, L && (T = Math.cos(-L), x = Math.sin(-L), g = w * T - C * x, v = b * T - D * x, y = P * T - M * x, D = b * x + D * T, M = P * x + M * T, N = O * x + N * T, w = g, b = v, P = y), L = Math.atan2(b, w), f.rotation = L * F, L && (T = Math.cos(-L), x = Math.sin(-L), w = w * T + k * x, v = b * T + S * x, S = b * -x + S * T, R = P * -x + R * T, b = v), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY = 180 - f.rotationY), f.scaleX = (Math.sqrt(w * w + b * b) * p + .5 | 0) / p, f.scaleY = (Math.sqrt(S * S + D * D) * p + .5 | 0) / p, f.scaleZ = (Math.sqrt(R * R + M * M) * p + .5 | 0) / p, f.rotationX || f.rotationY ? f.skewX = 0 : (f.skewX = k || S ? Math.atan2(k, S) * F + f.rotation : f.skewX || 0, Math.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (c ? (f.scaleX *= -1, f.skewX += f.rotation <= 0 ? 180 : -180, f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1, f.skewX += f.skewX <= 0 ? 180 : -180))), f.perspective = N ? 1 / (0 > N ? -N : N) : 0, f.x = z, f.y = X, f.z = I, f.svg && (f.x -= f.xOrigin - (f.xOrigin * w - f.yOrigin * k), f.y -= f.yOrigin - (f.yOrigin * b - f.xOrigin * S))
                    } else if (!kt || r || !n.length || f.x !== n[4] || f.y !== n[5] || !f.rotationX && !f.rotationY) {
                        var E = n.length >= 6, Y = E ? n[0] : 1, B = n[1] || 0, j = n[2] || 0, U = E ? n[3] : 1;
                        f.x = n[4] || 0, f.y = n[5] || 0, l = Math.sqrt(Y * Y + B * B), h = Math.sqrt(U * U + j * j), _ = Y || B ? Math.atan2(B, Y) * F : f.rotation || 0, u = j || U ? Math.atan2(j, U) * F + _ : f.skewX || 0, Math.abs(u) > 90 && Math.abs(u) < 270 && (c ? (l *= -1, u += 0 >= _ ? 180 : -180, _ += 0 >= _ ? 180 : -180) : (h *= -1, u += 0 >= u ? 180 : -180)), f.scaleX = l, f.scaleY = h, f.rotation = _, f.skewX = u, kt && (f.rotationX = f.rotationY = f.z = 0, f.perspective = m, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * Y + f.yOrigin * j), f.y -= f.yOrigin - (f.xOrigin * B + f.yOrigin * U))
                    }
                    f.zOrigin = d;
                    for (o in f) f[o] < 2e-5 && f[o] > -2e-5 && (f[o] = 0)
                }
                return s && (t._gsTransform = f, f.svg && (xt && t.style[bt] ? e.delayedCall(.001, function () {
                    Bt(t.style, bt)
                }) : !xt && t.getAttribute("transform") && e.delayedCall(.001, function () {
                    t.removeAttribute("transform")
                }))), f
            }, Lt = function (t) {
                var e, i, s = this.data, r = -s.rotation * M, n = r + s.skewX * M, a = 1e5,
                    o = (Math.cos(r) * s.scaleX * a | 0) / a, l = (Math.sin(r) * s.scaleX * a | 0) / a,
                    h = (Math.sin(n) * -s.scaleY * a | 0) / a, _ = (Math.cos(n) * s.scaleY * a | 0) / a, u = this.t.style,
                    f = this.t.currentStyle;
                if (f) {
                    i = l, l = -h, h = -i, e = f.filter, u.filter = "";
                    var c, p, m = this.t.offsetWidth, g = this.t.offsetHeight, v = "absolute" !== f.position,
                        y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + _,
                        T = s.x + m * s.xPercent / 100, x = s.y + g * s.yPercent / 100;
                    if (null != s.ox && (c = (s.oxp ? m * s.ox * .01 : s.ox) - m / 2, p = (s.oyp ? g * s.oy * .01 : s.oy) - g / 2, T += c - (c * o + p * l), x += p - (c * h + p * _)), v ? (c = m / 2, p = g / 2, y += ", Dx=" + (c - (c * o + p * l) + T) + ", Dy=" + (p - (c * h + p * _) + x) + ")") : y += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? u.filter = e.replace(/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, y) : u.filter = y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === _ && (v && -1 === y.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
                        var P, O, k, S = 8 > d ? 1 : -1;
                        for (c = s.ieOffsetX || 0, p = s.ieOffsetY || 0, s.ieOffsetX = Math.round((m - ((0 > o ? -o : o) * m + (0 > l ? -l : l) * g)) / 2 + T), s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > h ? -h : h) * m)) / 2 + x), gt = 0; 4 > gt; gt++) O = tt[gt], P = f[O], i = -1 !== P.indexOf("px") ? parseFloat(P) : $(this.t, O, parseFloat(P), P.replace(w, "")) || 0, k = i !== s[O] ? 2 > gt ? -s.ieOffsetX : -s.ieOffsetY : 2 > gt ? c - s.ieOffsetX : p - s.ieOffsetY, u[O] = (s[O] = Math.round(i - k * (0 === gt || 2 === gt ? 1 : S))) + "px"
                    }
                }
            }, Et = E.set3DTransformRatio = E.setTransformRatio = function (t) {
                var e, i, s, r, n, a, o, l, h, _, u, f, p, d, m, g, v, y, T, x, w, b, P, O = this.data, k = this.t.style,
                    S = O.rotation, R = O.rotationX, A = O.rotationY, C = O.scaleX, D = O.scaleY, F = O.scaleZ, z = O.x,
                    X = O.y, I = O.z, N = O.svg, L = O.perspective, E = O.force3D;
                if (((1 === t || 0 === t) && "auto" === E && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !E) && !I && !L && !A && !R && 1 === F || xt && N || !kt) return void (S || O.skewX || N ? (S *= M, b = O.skewX * M, P = 1e5, e = Math.cos(S) * C, r = Math.sin(S) * C, i = Math.sin(S - b) * -D, n = Math.cos(S - b) * D, b && "simple" === O.skewType && (v = Math.tan(b - O.skewY * M), v = Math.sqrt(1 + v * v), i *= v, n *= v, O.skewY && (v = Math.tan(O.skewY * M), v = Math.sqrt(1 + v * v), e *= v, r *= v)), N && (z += O.xOrigin - (O.xOrigin * e + O.yOrigin * i) + O.xOffset, X += O.yOrigin - (O.xOrigin * r + O.yOrigin * n) + O.yOffset, xt && (O.xPercent || O.yPercent) && (d = this.t.getBBox(), z += .01 * O.xPercent * d.width, X += .01 * O.yPercent * d.height), d = 1e-6, d > z && z > -d && (z = 0), d > X && X > -d && (X = 0)), T = (e * P | 0) / P + "," + (r * P | 0) / P + "," + (i * P | 0) / P + "," + (n * P | 0) / P + "," + z + "," + X + ")", N && xt ? this.t.setAttribute("transform", "matrix(" + T) : k[bt] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix(" : "matrix(") + T) : k[bt] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix(" : "matrix(") + C + ",0,0," + D + "," + z + "," + X + ")");
                if (c && (d = 1e-4, d > C && C > -d && (C = F = 2e-5), d > D && D > -d && (D = F = 2e-5), !L || O.z || O.rotationX || O.rotationY || (L = 0)), S || O.skewX) S *= M, m = e = Math.cos(S), g = r = Math.sin(S), O.skewX && (S -= O.skewX * M, m = Math.cos(S), g = Math.sin(S), "simple" === O.skewType && (v = Math.tan((O.skewX - O.skewY) * M), v = Math.sqrt(1 + v * v), m *= v, g *= v, O.skewY && (v = Math.tan(O.skewY * M), v = Math.sqrt(1 + v * v), e *= v, r *= v))), i = -g, n = m; else {
                    if (!(A || R || 1 !== F || L || N)) return void (k[bt] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) translate3d(" : "translate3d(") + z + "px," + X + "px," + I + "px)" + (1 !== C || 1 !== D ? " scale(" + C + "," + D + ")" : ""));
                    e = n = 1, i = r = 0
                }
                h = 1, s = a = o = l = _ = u = 0, f = L ? -1 / L : 0, p = O.zOrigin, d = 1e-6, x = ",", w = "0", S = A * M, S && (m = Math.cos(S), g = Math.sin(S), o = -g, _ = f * -g, s = e * g, a = r * g, h = m, f *= m, e *= m, r *= m), S = R * M, S && (m = Math.cos(S), g = Math.sin(S), v = i * m + s * g, y = n * m + a * g, l = h * g, u = f * g, s = i * -g + s * m, a = n * -g + a * m, h *= m, f *= m, i = v, n = y), 1 !== F && (s *= F, a *= F, h *= F, f *= F), 1 !== D && (i *= D, n *= D, l *= D, u *= D), 1 !== C && (e *= C, r *= C, o *= C, _ *= C), (p || N) && (p && (z += s * -p, X += a * -p, I += h * -p + p), N && (z += O.xOrigin - (O.xOrigin * e + O.yOrigin * i) + O.xOffset, X += O.yOrigin - (O.xOrigin * r + O.yOrigin * n) + O.yOffset), d > z && z > -d && (z = w), d > X && X > -d && (X = w), d > I && I > -d && (I = 0)), T = O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix3d(" : "matrix3d(", T += (d > e && e > -d ? w : e) + x + (d > r && r > -d ? w : r) + x + (d > o && o > -d ? w : o), T += x + (d > _ && _ > -d ? w : _) + x + (d > i && i > -d ? w : i) + x + (d > n && n > -d ? w : n), R || A || 1 !== F ? (T += x + (d > l && l > -d ? w : l) + x + (d > u && u > -d ? w : u) + x + (d > s && s > -d ? w : s), T += x + (d > a && a > -d ? w : a) + x + (d > h && h > -d ? w : h) + x + (d > f && f > -d ? w : f) + x) : T += ",0,0,0,0,1,0,", T += z + x + X + x + I + x + (L ? 1 + -I / L : 1) + ")", k[bt] = T
            };
        h = St.prototype, h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, yt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function (t, e, i, s, n, o, l) {
                if (s._lastParsedTransform === l) return n;
                s._lastParsedTransform = l;
                var h;
                "function" == typeof l[i] && (h = l[i], l[i] = e);
                var _, u, f, c, p, d, v, y, T, x = t._gsTransform, w = t.style, b = wt.length, P = l, O = {},
                    k = "transformOrigin", S = Nt(t, r, !0, P.parseTransform),
                    R = P.transform && ("function" == typeof P.transform ? P.transform(g, m) : P.transform);
                if (s._transform = S, R && "string" == typeof R && bt) u = N.style, u[bt] = R, u.display = "block", u.position = "absolute", X.body.appendChild(N), _ = Nt(N, null, !1), S.svg && (d = S.xOrigin, v = S.yOrigin, _.x -= S.xOffset, _.y -= S.yOffset, (P.transformOrigin || P.svgOrigin) && (R = {}, Mt(t, it(P.transformOrigin), R, P.svgOrigin, P.smoothOrigin, !0), d = R.xOrigin, v = R.yOrigin, _.x -= R.xOffset - S.xOffset, _.y -= R.yOffset - S.yOffset), (d || v) && (y = It(N, !0), _.x -= d - (d * y[0] + v * y[2]), _.y -= v - (d * y[1] + v * y[3]))), X.body.removeChild(N), _.perspective || (_.perspective = S.perspective), null != P.xPercent && (_.xPercent = rt(P.xPercent, S.xPercent)), null != P.yPercent && (_.yPercent = rt(P.yPercent, S.yPercent)); else if ("object" == typeof P) {
                    if (_ = {
                        scaleX: rt(null != P.scaleX ? P.scaleX : P.scale, S.scaleX),
                        scaleY: rt(null != P.scaleY ? P.scaleY : P.scale, S.scaleY),
                        scaleZ: rt(P.scaleZ, S.scaleZ),
                        x: rt(P.x, S.x),
                        y: rt(P.y, S.y),
                        z: rt(P.z, S.z),
                        xPercent: rt(P.xPercent, S.xPercent),
                        yPercent: rt(P.yPercent, S.yPercent),
                        perspective: rt(P.transformPerspective, S.perspective)
                    }, null != (p = P.directionalRotation)) if ("object" == typeof p) for (u in p) P[u] = p[u]; else P.rotation = p;
                    "string" == typeof P.x && -1 !== P.x.indexOf("%") && (_.x = 0, _.xPercent = rt(P.x, S.xPercent)), "string" == typeof P.y && -1 !== P.y.indexOf("%") && (_.y = 0, _.yPercent = rt(P.y, S.yPercent)), _.rotation = nt("rotation" in P ? P.rotation : "shortRotation" in P ? P.shortRotation + "_short" : "rotationZ" in P ? P.rotationZ : S.rotation - S.skewY, S.rotation - S.skewY, "rotation", O), kt && (_.rotationX = nt("rotationX" in P ? P.rotationX : "shortRotationX" in P ? P.shortRotationX + "_short" : S.rotationX || 0, S.rotationX, "rotationX", O), _.rotationY = nt("rotationY" in P ? P.rotationY : "shortRotationY" in P ? P.shortRotationY + "_short" : S.rotationY || 0, S.rotationY, "rotationY", O)), _.skewX = nt(P.skewX, S.skewX - S.skewY), (_.skewY = nt(P.skewY, S.skewY)) && (_.skewX += _.skewY, _.rotation += _.skewY)
                }
                for (kt && null != P.force3D && (S.force3D = P.force3D, c = !0), S.skewType = P.skewType || S.skewType || a.defaultSkewType, (f = S.force3D || S.z || S.rotationX || S.rotationY || _.z || _.rotationX || _.rotationY || _.perspective) || null == P.scale || (_.scaleZ = 1); --b > -1;) T = wt[b], ((R = _[T] - S[T]) > 1e-6 || -1e-6 > R || null != P[T] || null != z[T]) && (c = !0, n = new pt(S, T, S[T], R, n), T in O && (n.e = O[T]), n.xs0 = 0, n.plugin = o, s._overwriteProps.push(n.n));
                return R = P.transformOrigin, S.svg && (R || P.svgOrigin) && (d = S.xOffset, v = S.yOffset, Mt(t, it(R), _, P.svgOrigin, P.smoothOrigin), n = dt(S, "xOrigin", (x ? S : _).xOrigin, _.xOrigin, n, k), n = dt(S, "yOrigin", (x ? S : _).yOrigin, _.yOrigin, n, k), (d !== S.xOffset || v !== S.yOffset) && (n = dt(S, "xOffset", x ? d : S.xOffset, S.xOffset, n, k), n = dt(S, "yOffset", x ? v : S.yOffset, S.yOffset, n, k)), R = xt ? null : "0px 0px"), (R || kt && f && S.zOrigin) && (bt ? (c = !0, T = Ot, R = (R || G(t, T, r, !1, "50% 50%")) + "", n = new pt(w, T, 0, 0, n, -1, k), n.b = w[T], n.plugin = o, kt ? (u = S.zOrigin, R = R.split(" "), S.zOrigin = (R.length > 2 && (0 === u || "0px" !== R[2]) ? parseFloat(R[2]) : u) || 0, n.xs0 = n.e = R[0] + " " + (R[1] || "50%") + " 0px", n = new pt(S, "zOrigin", 0, 0, n, -1, n.n), n.b = u, n.xs0 = n.e = S.zOrigin) : n.xs0 = n.e = R) : it(R + "", S)), c && (s._transformType = S.svg && xt || !f && 3 !== this._transformType ? 2 : 3), h && (l[i] = h), n
            }, prefix: !0
        }), yt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), yt("borderRadius", {
            defaultValue: "0px", parser: function (t, e, i, n, a, o) {
                e = this.format(e);
                var l, h, _, u, f, c, p, d, m, g, v, y, T, x, w, b,
                    P = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    O = t.style;
                for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), l = e.split(" "), h = 0; h < P.length; h++) this.p.indexOf("border") && (P[h] = W(P[h])), f = u = G(t, P[h], r, !1, "0px"), -1 !== f.indexOf(" ") && (u = f.split(" "), f = u[0], u = u[1]), c = _ = l[h], p = parseFloat(f), y = f.substr((p + "").length), T = "=" === c.charAt(1), T ? (d = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), d *= parseFloat(c), v = c.substr((d + "").length - (0 > d ? 1 : 0)) || "") : (d = parseFloat(c), v = c.substr((d + "").length)), "" === v && (v = s[i] || y), v !== y && (x = $(t, "borderLeft", p, y), w = $(t, "borderTop", p, y), "%" === v ? (f = x / m * 100 + "%", u = w / g * 100 + "%") : "em" === v ? (b = $(t, "borderLeft", 1, "em"), f = x / b + "em", u = w / b + "em") : (f = x + "px", u = w + "px"), T && (c = parseFloat(f) + d + v, _ = parseFloat(u) + d + v)), a = mt(O, P[h], f + " " + u, c + " " + _, !1, "0px", a);
                return a
            }, prefix: !0, formatter: ut("0px 0px 0px 0px", !1, !0)
        }), yt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px",
            parser: function (t, e, i, s, n, a) {
                return mt(t.style, i, this.format(G(t, i, r, !1, "0px 0px")), this.format(e), !1, "0px", n)
            },
            prefix: !0,
            formatter: ut("0px 0px", !1, !0)
        }), yt("backgroundPosition", {
            defaultValue: "0 0", parser: function (t, e, i, s, n, a) {
                var o, l, h, _, u, f, c = "background-position", p = r || Z(t, null),
                    m = this.format((p ? d ? p.getPropertyValue(c + "-x") + " " + p.getPropertyValue(c + "-y") : p.getPropertyValue(c) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                    g = this.format(e);
                if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && (f = G(t, "backgroundImage").replace(/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, "")) && "none" !== f) {
                    for (o = m.split(" "), l = g.split(" "), L.setAttribute("src", f), h = 2; --h > -1;) m = o[h], (_ = -1 !== m.indexOf("%")) !== (-1 !== l[h].indexOf("%")) && (u = 0 === h ? t.offsetWidth - L.width : t.offsetHeight - L.height, o[h] = _ ? parseFloat(m) / 100 * u + "px" : parseFloat(m) / u * 100 + "%");
                    m = o.join(" ")
                }
                return this.parseComplex(t.style, m, g, n, a)
            }, formatter: it
        }), yt("backgroundSize", {
            defaultValue: "0 0", formatter: function (t) {
                return t += "", it(-1 === t.indexOf(" ") ? t + " " + t : t)
            }
        }), yt("perspective", {defaultValue: "0px", prefix: !0}), yt("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), yt("transformStyle", {prefix: !0}), yt("backfaceVisibility", {prefix: !0}), yt("userSelect", {prefix: !0}), yt("margin", {parser: ft("marginTop,marginRight,marginBottom,marginLeft")}), yt("padding", {parser: ft("paddingTop,paddingRight,paddingBottom,paddingLeft")}), yt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (t, e, i, s, n, a) {
                var o, l, h;
                return 9 > d ? (l = t.currentStyle, h = 8 > d ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(G(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a)
            }
        }), yt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), yt("autoRound,strictUnits", {
            parser: function (t, e, i, s, r) {
                return r
            }
        }), yt("border", {
            defaultValue: "0px solid #000", parser: function (t, e, i, s, n, a) {
                var o = G(t, "borderTopWidth", r, !1, "0px"), l = this.format(e).split(" "), h = l[0].replace(w, "");
                return "px" !== h && (o = parseFloat(o) / $(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(o + " " + G(t, "borderTopStyle", r, !1, "solid") + " " + G(t, "borderTopColor", r, !1, "#000")), l.join(" "), n, a)
            }, color: !0, formatter: function (t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(_t) || ["#000"])[0]
            }
        }), yt("borderWidth", {parser: ft("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}), yt("float,cssFloat,styleFloat", {
            parser: function (t, e, i, s, r, n) {
                var a = t.style, o = "cssFloat" in a ? "cssFloat" : "styleFloat";
                return new pt(a, o, 0, 0, r, -1, i, !1, 0, a[o], e)
            }
        });
        var Yt = function (t) {
            var e, i = this.t, s = i.filter || G(this.data, "filter") || "", r = this.s + this.c * t | 0;
            100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !G(this.data, "filter")) : (i.filter = s.replace(/alpha\(opacity *=.+?\)/i, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(b, "opacity=" + r))
        };
        yt("opacity,alpha,autoAlpha", {
            defaultValue: "1", parser: function (t, e, i, s, n, a) {
                var o = parseFloat(G(t, "opacity", r, !1, "1")), l = t.style, h = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === G(t, "visibility", r) && 0 !== e && (o = 0), B ? n = new pt(l, "opacity", o, e - o, n) : (n = new pt(l, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = h ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Yt), h && (n = new pt(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(i)), n
            }
        });
        var Bt = function (t, e) {
            e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e))
        }, jt = function (t) {
            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Bt(i, e.p), e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        yt("className", {
            parser: function (t, e, s, n, a, o, l) {
                var h, _, u, f, c, p = t.getAttribute("class") || "", d = t.style.cssText;
                if (a = n._classNamePT = new pt(t, s, 0, 0, a, 2), a.setRatio = jt, a.pr = -11, i = !0, a.b = p, _ = H(t, r), u = t._gsClassPT) {
                    for (f = {}, c = u.data; c;) f[c.p] = 1, c = c._next;
                    u.setRatio(1)
                }
                return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : p.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), h = K(t, _, H(t), l, f), t.setAttribute("class", p), a.data = h.firstMPT, t.style.cssText = d, a = a.xfirst = n.parse(t, h.difs, a, o)
            }
        });
        var Ut = function (t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, s, r, n, a = this.t.style, o = l.transform.parse;
                if ("all" === this.e) a.cssText = "", r = !0; else for (e = this.e.split(" ").join("").split(","), s = e.length; --s > -1;) i = e[s], l[i] && (l[i].parse === o ? r = !0 : i = "transformOrigin" === i ? Ot : l[i].p), Bt(a, i);
                r && (Bt(a, bt), (n = this.t._gsTransform) && (n.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
            }
        };
        for (yt("clearProps", {
            parser: function (t, e, s, r, n) {
                return n = new pt(t, s, 0, 0, n, 2), n.setRatio = Ut, n.e = e, n.pr = -10, n.data = r._tween, i = !0, n
            }
        }), h = "bezier,throwProps,physicsProps,physics2D".split(","), gt = h.length; gt--;) Tt(h[gt]);
        h = a.prototype, h._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function (t, e, o, h) {
            if (!t.nodeType) return !1;
            this._target = m = t, this._tween = o, this._vars = e, g = h, _ = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, r = Z(t, ""), n = this._overwriteProps;
            var c, d, v, y, T, x, w, b, O, k = t.style;
            if (u && "" === k.zIndex && ("auto" === (c = G(t, "zIndex", r)) || "" === c) && this._addLazySet(k, "zIndex", 0), "string" == typeof e && (y = k.cssText, c = H(t, r), k.cssText = y + ";" + e, c = K(t, c, H(t)).difs, !B && P.test(e) && (c.opacity = parseFloat(RegExp.$1)), e = c, k.cssText = y), e.className ? this._firstPT = d = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = d = this.parse(t, e, null), this._transformType) {
                for (O = 3 === this._transformType, bt ? f && (u = !0, "" === k.zIndex && ("auto" === (w = G(t, "zIndex", r)) || "" === w) && this._addLazySet(k, "zIndex", 0), p && this._addLazySet(k, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (O ? "visible" : "hidden"))) : k.zoom = 1, v = d; v && v._next;) v = v._next;
                b = new pt(t, "transform", 0, 0, null, 2), this._linkCSSP(b, null, v), b.setRatio = bt ? Et : Lt, b.data = this._transform || Nt(t, r, !0), b.tween = o, b.pr = -1, n.pop()
            }
            if (i) {
                for (; d;) {
                    for (x = d._next, v = y; v && v.pr > d.pr;) v = v._next;
                    (d._prev = v ? v._prev : T) ? d._prev._next = d : y = d, (d._next = v) ? v._prev = d : T = d, d = x
                }
                this._firstPT = y
            }
            return !0
        }, h.parse = function (t, e, i, n) {
            var a, o, h, u, f, c, p, d, v, y, T = t.style;
            for (a in e) c = e[a], "function" == typeof c && (c = c(g, m)), o = l[a], o ? i = o.parse(t, c, a, this, i, n, e) : (f = G(t, a, r) + "", v = "string" == typeof c, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || v && O.test(c) ? (v || (c = lt(c), c = (c.length > 3 ? "rgba(" : "rgb(") + c.join(",") + ")"), i = mt(T, a, f, c, !0, "transparent", i, 0, n)) : v && D.test(c) ? i = mt(T, a, f, c, !0, null, i, 0, n) : (h = parseFloat(f), p = h || 0 === h ? f.substr((h + "").length) : "", ("" === f || "auto" === f) && ("width" === a || "height" === a ? (h = et(t, a, r), p = "px") : "left" === a || "top" === a ? (h = Q(t, a, r), p = "px") : (h = "opacity" !== a ? 0 : 1, p = "")), y = v && "=" === c.charAt(1), y ? (u = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), u *= parseFloat(c), d = c.replace(w, "")) : (u = parseFloat(c), d = v ? c.replace(w, "") : ""), "" === d && (d = a in s ? s[a] : p), c = u || 0 === u ? (y ? u + h : u) + d : e[a], p !== d && "" !== d && (u || 0 === u) && h && (h = $(t, a, h, p), "%" === d ? (h /= $(t, a, 100, "%") / 100, e.strictUnits !== !0 && (f = h + "%")) : "em" === d || "rem" === d || "vw" === d || "vh" === d ? h /= $(t, a, 1, d) : "px" !== d && (u = $(t, a, u, d), d = "px"), y && (u || 0 === u) && (c = u + h + d)), y && (u += h), !h && 0 !== h || !u && 0 !== u ? void 0 !== T[a] && (c || c + "" != "NaN" && null != c) ? (i = new pt(T, a, u || h || 0, 0, i, -1, a, !1, 0, f, c), i.xs0 = "none" !== c || "display" !== a && -1 === a.indexOf("Style") ? c : f) : U(e[a]) : (i = new pt(T, a, h, u - h, i, 0, a, _ !== !1 && ("px" === d || "zIndex" === a), 0, f, c), i.xs0 = d))), n && i && !i.plugin && (i.plugin = n);
            return i
        }, h.setRatio = function (t) {
            var e, i, s, r = this._firstPT;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6) for (; r;) {
                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), r.type) if (1 === r.type) if (2 === (s = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2; else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3; else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4; else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5; else {
                    for (i = r.xs0 + e + r.xs1, s = 1; s < r.l; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                    r.t[r.p] = i
                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t); else r.t[r.p] = e + r.xs0;
                r = r._next
            } else for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next; else for (; r;) {
                if (2 !== r.type) if (r.r && -1 !== r.type) if (e = Math.round(r.s + r.c), r.type) {
                    if (1 === r.type) {
                        for (s = r.l, i = r.xs0 + e + r.xs1, s = 1; s < r.l; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                        r.t[r.p] = i
                    }
                } else r.t[r.p] = e + r.xs0; else r.t[r.p] = r.e; else r.setRatio(t);
                r = r._next
            }
        }, h._enableTransforms = function (t) {
            this._transform = this._transform || Nt(this._target, r, !0), this._transformType = this._transform.svg && xt || !t && 3 !== this._transformType ? 2 : 3
        };
        var Vt = function (t) {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        h._addLazySet = function (t, e, i) {
            var s = this._firstPT = new pt(t, e, 0, 0, this._firstPT, 2);
            s.e = i, s.setRatio = Vt, s.data = this
        }, h._linkCSSP = function (t, e, i, s) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
        }, h._mod = function (t) {
            for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
        }, h._kill = function (e) {
            var i, s, r, n = e;
            if (e.autoAlpha || e.alpha) {
                n = {};
                for (s in e) n[s] = e[s];
                n.opacity = 1, n.autoAlpha && (n.visibility = 1)
            }
            for (e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== s && i.plugin._kill && (i.plugin._kill(e), s = i.plugin), i = i._next;
            return t.prototype._kill.call(this, n)
        };
        var qt = function (t, e, i) {
            var s, r, n, a;
            if (t.slice) for (r = t.length; --r > -1;) qt(t[r], e, i); else for (s = t.childNodes, r = s.length; --r > -1;) n = s[r], a = n.type, n.style && (e.push(H(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || qt(n, e, i)
        };
        return a.cascadeTo = function (t, i, s) {
            var r, n, a, o, l = e.to(t, i, s), h = [l], _ = [], u = [], f = [], c = e._internals.reservedProps;
            for (t = l._targets || l.target, qt(t, _, f), l.render(i, !0, !0), qt(t, u), l.render(0, !0, !0), l._enabled(!0), r = f.length; --r > -1;) if (n = K(f[r], _[r], u[r]), n.firstMPT) {
                n = n.difs;
                for (a in s) c[a] && (n[a] = s[a]);
                o = {};
                for (a in n) o[a] = _[r][a];
                h.push(e.fromTo(f[r], i, o, n))
            }
            return h
        }, t.activate([a]), a
    }, !0), function () {
        var t = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.6.0",
            priority: -1,
            API: 2,
            init: function (t, e, i) {
                return this._tween = i, !0
            }
        }), e = function (t) {
            for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
        }, i = t.prototype;
        i._onInitAllProps = function () {
            for (var t, i, s, r = this._tween, n = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), a = n.length, o = {}, l = r._propLookup.roundProps; --a > -1;) o[n[a]] = Math.round;
            for (a = n.length; --a > -1;) for (t = n[a], i = r._firstPT; i;) s = i._next, i.pg ? i.t._mod(o) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), s && (s._prev = i._prev), i._prev ? i._prev._next = s : r._firstPT === i && (r._firstPT = s), i._next = i._prev = null, r._propLookup[t] = l)), i = s;
            return !1
        }, i._add = function (t, e, i, s) {
            this._addTween(t, e, i, i + s, e, Math.round), this._overwriteProps.push(e)
        }
    }(), function () {
        _gsScope._gsDefine.plugin({
            propName: "attr", API: 2, version: "0.6.0", init: function (t, e, i, s) {
                var r, n;
                if ("function" != typeof t.setAttribute) return !1;
                for (r in e) n = e[r], "function" == typeof n && (n = n(s, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", n + "", r, !1, r), this._overwriteProps.push(r);
                return !0
            }
        })
    }(), _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.3.0",
        API: 2,
        init: function (t, e, i, s) {
            "object" != typeof e && (e = {rotation: e}), this.finals = {};
            var r, n, a, o, l, h, _ = e.useRadians === !0 ? 2 * Math.PI : 360;
            for (r in e) "useRadians" !== r && (o = e[r], "function" == typeof o && (o = o(s, t)), h = (o + "").split("_"), n = h[0], a = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), o = this.finals[r] = "string" == typeof n && "=" === n.charAt(1) ? a + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0, l = o - a, h.length && (n = h.join("_"), -1 !== n.indexOf("short") && (l %= _) !== l % (_ / 2) && (l = 0 > l ? l + _ : l - _), -1 !== n.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * _) % _ - (l / _ | 0) * _ : -1 !== n.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * _) % _ - (l / _ | 0) * _)), (l > 1e-6 || -1e-6 > l) && (this._addTween(t, r, a, a + l, r), this._overwriteProps.push(r)));
            return !0
        },
        set: function (t) {
            var e;
            if (1 !== t) this._super.setRatio.call(this, t); else for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
        }
    })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (t) {
        var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope, n = r.com.greensock, a = 2 * Math.PI, o = Math.PI / 2,
            l = n._class, h = function (e, i) {
                var s = l("easing." + e, function () {
                }, !0), r = s.prototype = new t;
                return r.constructor = s, r.getRatio = i, s
            }, _ = t.register || function () {
            }, u = function (t, e, i, s, r) {
                var n = l("easing." + t, {easeOut: new e, easeIn: new i, easeInOut: new s}, !0);
                return _(n, t), n
            }, f = function (t, e, i) {
                this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
            }, c = function (e, i) {
                var s = l("easing." + e, function (t) {
                    this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                }, !0), r = s.prototype = new t;
                return r.constructor = s, r.getRatio = i, r.config = function (t) {
                    return new s(t)
                }, s
            }, p = u("Back", c("BackOut", function (t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
            }), c("BackIn", function (t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
            }), c("BackInOut", function (t) {
                return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
            })), d = l("easing.SlowMo", function (t, e, i) {
                e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
            }, !0), m = d.prototype = new t;
        return m.constructor = d, m.getRatio = function (t) {
            var e = t + (.5 - t) * this._p;
            return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, d.ease = new d(.7, .7), m.config = d.config = function (t, e, i) {
            return new d(t, e, i)
        }, e = l("easing.SteppedEase", function (t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0), m = e.prototype = new t, m.constructor = e, m.getRatio = function (t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
        }, m.config = e.config = function (t) {
            return new e(t)
        }, i = l("easing.RoughEase", function (e) {
            e = e || {};
            for (var i, s, r, n, a, o, l = e.taper || "none", h = [], _ = 0, u = 0 | (e.points || 20), c = u, p = e.randomize !== !1, d = e.clamp === !0, m = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --c > -1;) i = p ? Math.random() : 1 / u * c, s = m ? m.getRatio(i) : i, "none" === l ? r = g : "out" === l ? (n = 1 - i, r = n * n * g) : "in" === l ? r = i * i * g : .5 > i ? (n = 2 * i, r = n * n * .5 * g) : (n = 2 * (1 - i), r = n * n * .5 * g), p ? s += Math.random() * r - .5 * r : c % 2 ? s += .5 * r : s -= .5 * r, d && (s > 1 ? s = 1 : 0 > s && (s = 0)), h[_++] = {
                x: i,
                y: s
            };
            for (h.sort(function (t, e) {
                return t.x - e.x
            }), o = new f(1, 1, null), c = u; --c > -1;) a = h[c], o = new f(a.x, a.y, o);
            this._prev = new f(0, 0, 0 !== o.t ? o : o.next)
        }, !0), m = i.prototype = new t, m.constructor = i, m.getRatio = function (t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
            } else for (; e.prev && t <= e.t;) e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, m.config = function (t) {
            return new i(t)
        }, i.ease = new i, u("Bounce", h("BounceOut", function (t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), h("BounceIn", function (t) {
            return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), h("BounceInOut", function (t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), u("Circ", h("CircOut", function (t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), h("CircIn", function (t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), h("CircInOut", function (t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), s = function (e, i, s) {
            var r = l("easing." + e, function (t, e) {
                this._p1 = t >= 1 ? t : 1, this._p2 = (e || s) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
            }, !0), n = r.prototype = new t;
            return n.constructor = r, n.getRatio = i, n.config = function (t, e) {
                return new r(t, e)
            }, r
        }, u("Elastic", s("ElasticOut", function (t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
        }, .3), s("ElasticIn", function (t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
        }, .3), s("ElasticInOut", function (t) {
            return (t *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
        }, .45)), u("Expo", h("ExpoOut", function (t) {
            return 1 - Math.pow(2, -10 * t)
        }), h("ExpoIn", function (t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), h("ExpoInOut", function (t) {
            return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), u("Sine", h("SineOut", function (t) {
            return Math.sin(t * o)
        }), h("SineIn", function (t) {
            return 1 - Math.cos(t * o)
        }), h("SineInOut", function (t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })), l("easing.EaseLookup", {
            find: function (e) {
                return t.map[e]
            }
        }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), p
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (t, e) {
    "use strict";
    var i = {}, s = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!s.TweenLite) {
        var r, n, a, o, l, h = function (t) {
            var e, i = t.split("."), r = s;
            for (e = 0; e < i.length; e++) r[i[e]] = r = r[i[e]] || {};
            return r
        }, _ = h("com.greensock"), u = 1e-10, f = function (t) {
            var e, i = [], s = t.length;
            for (e = 0; e !== s; i.push(t[e++])) ;
            return i
        }, c = function () {
        }, p = function () {
            var t = Object.prototype.toString, e = t.call([]);
            return function (i) {
                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
            }
        }(), d = {}, m = function (r, n, a, o) {
            this.sc = d[r] ? d[r].sc : [], d[r] = this, this.gsClass = null, this.func = a;
            var l = [];
            this.check = function (_) {
                for (var u, f, c, p, g, v = n.length, y = v; --v > -1;) (u = d[n[v]] || new m(n[v], [])).gsClass ? (l[v] = u.gsClass, y--) : _ && u.sc.push(this);
                if (0 === y && a) {
                    if (f = ("com.greensock." + r).split("."), c = f.pop(), p = h(f.join("."))[c] = this.gsClass = a.apply(a, l), o) if (s[c] = i[c] = p, !(g = "undefined" != typeof module && module.exports) && "function" == typeof define && define.amd) define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function () {
                        return p
                    }); else if (g) if (r === e) {
                        module.exports = i[e] = p;
                        for (v in i) p[v] = i[v]
                    } else i[e] && (i[e][c] = p);
                    for (v = 0; v < this.sc.length; v++) this.sc[v].check()
                }
            }, this.check(!0)
        }, g = t._gsDefine = function (t, e, i, s) {
            return new m(t, e, i, s)
        }, v = _._class = function (t, e, i) {
            return e = e || function () {
            }, g(t, [], function () {
                return e
            }, i), e
        };
        g.globals = s;
        var y = [0, 0, 1, 1], T = v("easing.Ease", function (t, e, i, s) {
            this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? y.concat(e) : y
        }, !0), x = T.map = {}, w = T.register = function (t, e, i, s) {
            for (var r, n, a, o, l = e.split(","), h = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;) for (n = l[h], r = s ? v("easing." + n, null, !0) : _.easing[n] || {}, a = u.length; --a > -1;) o = u[a], x[n + "." + o] = x[o + n] = r[o] = t.getRatio ? t : t[o] || new t
        };
        for (a = T.prototype, a._calcEnd = !1, a.getRatio = function (t) {
            if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
            var e = this._type, i = this._power, s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
            return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
        }, r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], n = r.length; --n > -1;) a = r[n] + ",Power" + n, w(new T(null, null, 1, n), a, "easeOut", !0), w(new T(null, null, 2, n), a, "easeIn" + (0 === n ? ",easeNone" : "")), w(new T(null, null, 3, n), a, "easeInOut");
        x.linear = _.easing.Linear.easeIn, x.swing = _.easing.Quad.easeInOut;
        var b = v("events.EventDispatcher", function (t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        a = b.prototype, a.addEventListener = function (t, e, i, s, r) {
            r = r || 0;
            var n, a, h = this._listeners[t], _ = 0;
            for (this !== o || l || o.wake(), null == h && (this._listeners[t] = h = []), a = h.length; --a > -1;) n = h[a], n.c === e && n.s === i ? h.splice(a, 1) : 0 === _ && n.pr < r && (_ = a + 1);
            h.splice(_, 0, {c: e, s: i, up: s, pr: r})
        }, a.removeEventListener = function (t, e) {
            var i, s = this._listeners[t];
            if (s) for (i = s.length; --i > -1;) if (s[i].c === e) return void s.splice(i, 1)
        }, a.dispatchEvent = function (t) {
            var e, i, s, r = this._listeners[t];
            if (r) for (e = r.length, e > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1;) (s = r[e]) && (s.up ? s.c.call(s.s || i, {
                type: t,
                target: i
            }) : s.c.call(s.s || i))
        };
        var P = t.requestAnimationFrame, O = t.cancelAnimationFrame, k = Date.now || function () {
            return (new Date).getTime()
        }, S = k();
        for (r = ["ms", "moz", "webkit", "o"], n = r.length; --n > -1 && !P;) P = t[r[n] + "RequestAnimationFrame"], O = t[r[n] + "CancelAnimationFrame"] || t[r[n] + "CancelRequestAnimationFrame"];
        v("Ticker", function (t, e) {
            var i, s, r, n, a, h = this, _ = k(), f = !(e === !1 || !P) && "auto", p = 500, d = 33, m = function (t) {
                var e, o, l = k() - S;
                l > p && (_ += l - d), S += l, h.time = (S - _) / 1e3, e = h.time - a, (!i || e > 0 || t === !0) && (h.frame++, a += e + (e >= n ? .004 : n - e), o = !0), t !== !0 && (r = s(m)), o && h.dispatchEvent("tick")
            };
            b.call(h), h.time = h.frame = 0, h.tick = function () {
                m(!0)
            }, h.lagSmoothing = function (t, e) {
                p = t || 1 / u, d = Math.min(e, p, 0)
            }, h.sleep = function () {
                null != r && (f && O ? O(r) : clearTimeout(r), s = c, r = null, h === o && (l = !1))
            }, h.wake = function (t) {
                null !== r ? h.sleep() : t ? _ += -S + (S = k()) : h.frame > 10 && (S = k() - p + 5), s = 0 === i ? c : f && P ? P : function (t) {
                    return setTimeout(t, 1e3 * (a - h.time) + 1 | 0)
                }, h === o && (l = !0), m(2)
            }, h.fps = function (t) {
                return arguments.length ? (i = t, n = 1 / (i || 60), a = this.time + n, void h.wake()) : i
            }, h.useRAF = function (t) {
                return arguments.length ? (h.sleep(), f = t, void h.fps(i)) : f
            }, h.fps(t), setTimeout(function () {
                "auto" === f && h.frame < 5 && "hidden" !== document.visibilityState && h.useRAF(!1)
            }, 1500)
        }), a = _.Ticker.prototype = new _.events.EventDispatcher, a.constructor = _.Ticker;
        var R = v("core.Animation", function (t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, Z) {
                l || o.wake();
                var i = this.vars.useFrames ? W : Z;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        o = R.ticker = new _.Ticker, a = R.prototype, a._dirty = a._gc = a._initted = a._paused = !1, a._totalTime = a._time = 0, a._rawPrevTime = -1, a._next = a._last = a._onUpdate = a._timeline = a.timeline = null, a._paused = !1;
        var A = function () {
            l && k() - S > 2e3 && o.wake(), setTimeout(A, 2e3)
        };
        A(), a.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, a.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, a.resume = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, a.seek = function (t, e) {
            return this.totalTime(Number(t), e !== !1)
        }, a.restart = function (t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
        }, a.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, a.render = function (t, e, i) {
        }, a.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, a.isActive = function () {
            var t, e = this._timeline, i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
        }, a._enabled = function (t, e) {
            return l || o.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, a._kill = function (t, e) {
            return this._enabled(!1, !1)
        }, a.kill = function (t, e) {
            return this._kill(t, e), this
        }, a._uncache = function (t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
        }, a._swapSelfInParams = function (t) {
            for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
            return i
        }, a._callback = function (t) {
            var e = this.vars, i = e[t], s = e[t + "Params"], r = e[t + "Scope"] || e.callbackScope || this;
            switch (s ? s.length : 0) {
                case 0:
                    i.call(r);
                    break;
                case 1:
                    i.call(r, s[0]);
                    break;
                case 2:
                    i.call(r, s[0], s[1]);
                    break;
                default:
                    i.apply(r, s)
            }
        }, a.eventCallback = function (t, e, i, s) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length) return r[t];
                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, a.delay = function (t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, a.duration = function (t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, a.totalDuration = function (t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, a.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, a.totalTime = function (t, e, i) {
            if (l || o.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var s = this._totalDuration, r = this._timeline;
                    if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline) for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (z.length && $(), this.render(t, e, !1), z.length && $())
            }
            return this
        }, a.progress = a.totalProgress = function (t, e) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
        }, a.startTime = function (t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, a.endTime = function (t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }, a.timeScale = function (t) {
            if (!arguments.length) return this._timeScale;
            if (t = t || u, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, a.reversed = function (t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, a.paused = function (t) {
            if (!arguments.length) return this._paused;
            var e, i, s = this._timeline;
            return t != this._paused && s && (l || t || o.wake(), e = s.rawTime(), i = e - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
        };
        var C = v("core.SimpleTimeline", function (t) {
            R.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        a = C.prototype = new R, a.constructor = C, a.kill()._gc = !1, a._first = a._last = a._recent = null, a._sortChildren = !1, a.add = a.insert = function (t, e, i, s) {
            var r, n;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren) for (n = t._startTime; r && r._startTime > n;) r = r._prev;
            return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
        }, a._remove = function (t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, a.render = function (t, e, i) {
            var s, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
        }, a.rawTime = function () {
            return l || o.wake(), this._totalTime
        };
        var D = v("TweenLite", function (e, i, s) {
            if (R.call(this, i, s), this.render = D.prototype.render, null == e) throw"Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : D.selector(e) || e;
            var r, n, a,
                o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                l = this.vars.overwrite;
            if (this._overwrite = l = null == l ? q[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : q[l], (o || e instanceof Array || e.push && p(e)) && "number" != typeof e[0]) for (this._targets = a = f(e), this._propLookup = [], this._siblings = [], r = 0; r < a.length; r++) n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(f(n))) : (this._siblings[r] = Q(n, this, !1), 1 === l && this._siblings[r].length > 1 && K(n, this, null, 1, this._siblings[r])) : "string" == typeof (n = a[r--] = D.selector(n)) && a.splice(r + 1, 1) : a.splice(r--, 1); else this._propLookup = {}, this._siblings = Q(e, this, !1), 1 === l && this._siblings.length > 1 && K(e, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -u, this.render(Math.min(0, -this._delay)))
        }, !0), M = function (e) {
            return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        }, F = function (t, e) {
            var i, s = {};
            for (i in t) V[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!B[i] || B[i] && B[i]._autoCSS) || (s[i] = t[i], delete t[i]);
            t.css = s
        };
        a = D.prototype = new R, a.constructor = D, a.kill()._gc = !1, a.ratio = 0, a._firstPT = a._targets = a._overwrittenProps = a._startAt = null, a._notifyPluginsOfEnabled = a._lazy = !1, D.version = "1.19.0", D.defaultEase = a._ease = new T(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = o, D.autoSleep = 120, D.lagSmoothing = function (t, e) {
            o.lagSmoothing(t, e)
        }, D.selector = t.$ || t.jQuery || function (e) {
            var i = t.$ || t.jQuery;
            return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        };
        var z = [], X = {}, I = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, N = function (t) {
                for (var e, i = this._firstPT; i;) e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : 1e-6 > e && e > -1e-6 && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
            }, L = function (t, e, i, s) {
                var r, n, a, o, l, h, _, u = [t, e], f = 0, c = "", p = 0;
                for (u.start = t, i && (i(u), t = u[0], e = u[1]), u.length = 0, r = t.match(I) || [], n = e.match(I) || [], s && (s._next = null, s.blob = 1, u._firstPT = u._applyPT = s), l = n.length, o = 0; l > o; o++) _ = n[o], h = e.substr(f, e.indexOf(_, f) - f), c += h || !o ? h : ",", f += h.length, p ? p = (p + 1) % 5 : "rgba(" === h.substr(-5) && (p = 1), _ === r[o] || r.length <= o ? c += _ : (c && (u.push(c), c = ""), a = parseFloat(r[o]), u.push(a), u._firstPT = {
                    _next: u._firstPT,
                    t: u,
                    p: u.length - 1,
                    s: a,
                    c: ("=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * parseFloat(_.substr(2)) : parseFloat(_) - a) || 0,
                    f: 0,
                    m: p && 4 > p ? Math.round : 0
                }), f += _.length;
                return c += e.substr(f), c && u.push(c), u.setRatio = N, u
            }, E = function (t, e, i, s, r, n, a, o, l) {
                "function" == typeof s && (s = s(l || 0, t));
                var h, _, u = "get" === i ? t[e] : i, f = typeof t[e], c = "string" == typeof s && "=" === s.charAt(1),
                    p = {
                        t: t,
                        p: e,
                        s: u,
                        f: "function" === f,
                        pg: 0,
                        n: r || e,
                        m: n ? "function" == typeof n ? n : Math.round : 0,
                        pr: 0,
                        c: c ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - u || 0
                    };
                return "number" !== f && ("function" === f && "get" === i && (_ = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), p.s = u = a ? t[_](a) : t[_]()), "string" == typeof u && (a || isNaN(u)) ? (p.fp = a, h = L(u, s, o || D.defaultStringFilter, p), p = {
                    t: h,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: r || e,
                    pr: 0,
                    m: 0
                }) : c || (p.s = parseFloat(u), p.c = parseFloat(s) - p.s || 0)), p.c ? ((p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p, p) : void 0
            }, Y = D._internals = {isArray: p, isSelector: M, lazyTweens: z, blobDif: L}, B = D._plugins = {},
            j = Y.tweenLookup = {}, U = 0, V = Y.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1,
                id: 1
            }, q = {none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0},
            W = R._rootFramesTimeline = new C, Z = R._rootTimeline = new C, G = 30, $ = Y.lazyRender = function () {
                var t, e = z.length;
                for (X = {}; --e > -1;) (t = z[e]) && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                z.length = 0
            };
        Z._startTime = o.time, W._startTime = o.frame, Z._active = W._active = !0, setTimeout($, 1), R._updateRoot = D.render = function () {
            var t, e, i;
            if (z.length && $(), Z.render((o.time - Z._startTime) * Z._timeScale, !1, !1), W.render((o.frame - W._startTime) * W._timeScale, !1, !1), z.length && $(), o.frame >= G) {
                G = o.frame + (parseInt(D.autoSleep, 10) || 120);
                for (i in j) {
                    for (e = j[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete j[i]
                }
                if ((!(i = Z._first) || i._paused) && D.autoSleep && !W._first && 1 === o._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || o.sleep()
                }
            }
        }, o.addEventListener("tick", R._updateRoot);
        var Q = function (t, e, i) {
            var s, r, n = t._gsTweenID;
            if (j[n || (t._gsTweenID = n = "t" + U++)] || (j[n] = {
                target: t,
                tweens: []
            }), e && (s = j[n].tweens, s[r = s.length] = e, i)) for (; --r > -1;) s[r] === e && s.splice(r, 1);
            return j[n].tweens
        }, H = function (t, e, i, s) {
            var r, n, a = t.vars.onOverwrite;
            return a && (r = a(t, e, i, s)), a = D.onOverwrite, a && (n = a(t, e, i, s)), r !== !1 && n !== !1
        }, K = function (t, e, i, s, r) {
            var n, a, o, l;
            if (1 === s || s >= 4) {
                for (l = r.length, n = 0; l > n; n++) if ((o = r[n]) !== e) o._gc || o._kill(null, t, e) && (a = !0); else if (5 === s) break;
                return a
            }
            var h, _ = e._startTime + u, f = [], c = 0, p = 0 === e._duration;
            for (n = r.length; --n > -1;) (o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || J(e, 0, p), 0 === J(o, h, p) && (f[c++] = o)) : o._startTime <= _ && o._startTime + o.totalDuration() / o._timeScale > _ && ((p || !o._initted) && _ - o._startTime <= 2e-10 || (f[c++] = o)));
            for (n = c; --n > -1;) if (o = f[n], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
                if (2 !== s && !H(o, e)) continue;
                o._enabled(!1, !1) && (a = !0)
            }
            return a
        }, J = function (t, e, i) {
            for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
                if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
                s = s._timeline
            }
            return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * u > n - e ? u : (n += t.totalDuration() / t._timeScale / r) > e + u ? 0 : n - e - u
        };
        a._init = function () {
            var t, e, i, s, r, n, a = this.vars, o = this._overwrittenProps, l = this._duration,
                h = !!a.immediateRender, _ = a.ease;
            if (a.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                for (s in a.startAt) r[s] = a.startAt[s];
                if (r.overwrite = !1, r.immediateRender = !0, r.lazy = h && a.lazy !== !1, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), h) if (this._time > 0) this._startAt = null; else if (0 !== l) return
            } else if (a.runBackwards && 0 !== l) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null; else {
                0 !== this._time && (h = !1), i = {};
                for (s in a) V[s] && "autoCSS" !== s || (i[s] = a[s]);
                if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && a.lazy !== !1, i.immediateRender = h, this._startAt = D.to(this.target, 0, i), h) {
                    if (0 === this._time) return
                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
            }
            if (this._ease = _ = _ ? _ instanceof T ? _ : "function" == typeof _ ? new T(_, a.easeParams) : x[_] || D.defaultEase : D.defaultEase, a.easeParams instanceof Array && _.config && (this._ease = _.config.apply(_, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (n = this._targets.length, t = 0; n > t; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null, t) && (e = !0); else e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
            if (e && D._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards) for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = a.onUpdate, this._initted = !0
        }, a._initProps = function (e, i, s, r, n) {
            var a, o, l, h, _, u;
            if (null == e) return !1;
            X[e._gsTweenID] && $(), this.vars.css || e.style && e !== t && e.nodeType && B.css && this.vars.autoCSS !== !1 && F(this.vars, e);
            for (a in this.vars) if (u = this.vars[a], V[a]) u && (u instanceof Array || u.push && p(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[a] = u = this._swapSelfInParams(u, this)); else if (B[a] && (h = new B[a])._onInitTween(e, this.vars[a], this, n)) {
                for (this._firstPT = _ = {
                    _next: this._firstPT,
                    t: h,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 1,
                    n: a,
                    pg: 1,
                    pr: h._priority,
                    m: 0
                }, o = h._overwriteProps.length; --o > -1;) i[h._overwriteProps[o]] = this._firstPT;
                (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), _._next && (_._next._prev = _)
            } else i[a] = E.call(this, e, a, "get", u, a, 0, null, this.vars.stringFilter, n);
            return r && this._kill(r, e) ? this._initProps(e, i, s, r, n) : this._overwrite > 1 && this._firstPT && s.length > 1 && K(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r, n)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (X[e._gsTweenID] = !0), l)
        }, a.render = function (t, e, i) {
            var s, r, n, a, o = this._time, l = this._duration, h = this._rawPrevTime;
            if (t >= l - 1e-7) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > h || 0 >= t && t >= -1e-7 || h === u && "isPause" !== this.data) && h !== t && (i = !0, h > u && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : u); else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== u || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : u)), this._initted || (i = !0); else if (this._totalTime = this._time = t, this._easeType) {
                var _ = t / l, f = this._easeType, c = this._easePower;
                (1 === f || 3 === f && _ >= .5) && (_ = 1 - _), 3 === f && (_ *= 2), 1 === c ? _ *= _ : 2 === c ? _ *= _ * _ : 3 === c ? _ *= _ * _ * _ : 4 === c && (_ *= _ * _ * _ * _), this.ratio = 1 === f ? 1 - _ : 2 === f ? _ : .5 > t / l ? _ / 2 : 1 - _ / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== o || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, z.push(this), void (this._lazy = [t, e]);
                    this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || s || i) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === u && a !== u && (this._rawPrevTime = 0))
            }
        }, a._kill = function (t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
            var s, r, n, a, o, l, h, _, u,
                f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
            if ((p(e) || M(e)) && "number" != typeof e[0]) for (s = e.length; --s > -1;) this._kill(t, e[s], i) && (l = !0); else {
                if (this._targets) {
                    for (s = this._targets.length; --s > -1;) if (e === this._targets[s]) {
                        o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                        break
                    }
                } else {
                    if (e !== this.target) return !1;
                    o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (o) {
                    if (h = t || o, _ = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                        for (n in h) o[n] && (u || (u = []), u.push(n));
                        if ((u || !t) && !H(this, i, e, u)) return !1
                    }
                    for (n in h) (a = o[n]) && (f && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), _ && (r[n] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        }, a.invalidate = function () {
            return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], R.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -u, this.render(Math.min(0, -this._delay))), this
        }, a._enabled = function (t, e) {
            if (l || o.wake(), t && this._gc) {
                var i, s = this._targets;
                if (s) for (i = s.length; --i > -1;) this._siblings[i] = Q(s[i], this, !0); else this._siblings = Q(this.target, this, !0)
            }
            return R.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && D._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }, D.to = function (t, e, i) {
            return new D(t, e, i)
        }, D.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i)
        }, D.fromTo = function (t, e, i, s) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new D(t, e, s)
        }, D.delayedCall = function (t, e, i, s, r) {
            return new D(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: r,
                overwrite: 0
            })
        }, D.set = function (t, e) {
            return new D(t, 0, e)
        }, D.getTweensOf = function (t, e) {
            if (null == t) return [];
            t = "string" != typeof t ? t : D.selector(t) || t;
            var i, s, r, n;
            if ((p(t) || M(t)) && "number" != typeof t[0]) {
                for (i = t.length, s = []; --i > -1;) s = s.concat(D.getTweensOf(t[i], e));
                for (i = s.length; --i > -1;) for (n = s[i], r = i; --r > -1;) n === s[r] && s.splice(i, 1)
            } else for (s = Q(t).concat(), i = s.length; --i > -1;) (s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
            return s
        }, D.killTweensOf = D.killDelayedCallsTo = function (t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var s = D.getTweensOf(t, e), r = s.length; --r > -1;) s[r]._kill(i, t)
        };
        var tt = v("plugins.TweenPlugin", function (t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = tt.prototype
        }, !0);
        if (a = tt.prototype, tt.version = "1.19.0", tt.API = 2, a._firstPT = null, a._addTween = E, a.setRatio = N, a._kill = function (t) {
            var e, i = this._overwriteProps, s = this._firstPT;
            if (null != t[this._propName]) this._overwriteProps = []; else for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
            for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
            return !1
        }, a._mod = a._roundProps = function (t) {
            for (var e, i = this._firstPT; i;) e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")], e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
        }, D._onPluginEvent = function (t, e) {
            var i, s, r, n, a, o = e._firstPT;
            if ("_onInitAllProps" === t) {
                for (; o;) {
                    for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next;
                    (o._prev = s ? s._prev : n) ? o._prev._next = o : r = o, (o._next = s) ? s._prev = o : n = o, o = a
                }
                o = e._firstPT = r
            }
            for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
            return i
        }, tt.activate = function (t) {
            for (var e = t.length; --e > -1;) t[e].API === tt.API && (B[(new t[e])._propName] = t[e]);
            return !0
        }, g.plugin = function (t) {
            if (!(t && t.propName && t.init && t.API)) throw"illegal plugin definition.";
            var e, i = t.propName, s = t.priority || 0, r = t.overwriteProps, n = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_mod",
                mod: "_mod",
                initAll: "_onInitAllProps"
            }, a = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                tt.call(this, i, s), this._overwriteProps = r || []
            }, t.global === !0), o = a.prototype = new tt(i);
            o.constructor = a, a.API = t.API;
            for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
            return a.version = t.version, tt.activate([a]), a
        }, r = t._gsQueue) {
            for (n = 0; n < r.length; n++) r[n]();
            for (a in d) d[a].func || t.console.log("GSAP encountered missing dependency: " + a)
        }
        l = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
var THREE = {REVISION: "63"};
THREE.extend = function (e, t) {
    if (Object.keys) for (var i = Object.keys(t), r = 0, o = i.length; r < o; r++) {
        var a = i[r];
        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
    } else {
        var n = {}.hasOwnProperty;
        for (var a in t) n.call(t, a) && (e[a] = t[a])
    }
    return e
}, function () {
    for (var e = 0, t = ["ms", "moz", "webkit", "o"], i = 0; i < t.length && !self.requestAnimationFrame; ++i) self.requestAnimationFrame = self[t[i] + "RequestAnimationFrame"], self.cancelAnimationFrame = self[t[i] + "CancelAnimationFrame"] || self[t[i] + "CancelRequestAnimationFrame"];
    void 0 === self.requestAnimationFrame && void 0 !== self.setTimeout && (self.requestAnimationFrame = function (t) {
        var i = Date.now(), r = Math.max(0, 16 - (i - e)), o = self.setTimeout(function () {
            t(i + r)
        }, r);
        return e = i + r, o
    }), void 0 === self.cancelAnimationFrame && void 0 !== self.clearTimeout && (self.cancelAnimationFrame = function (e) {
        self.clearTimeout(e)
    })
}(), THREE.CullFaceNone = 0, THREE.CullFaceBack = 1, THREE.CullFaceFront = 2, THREE.CullFaceFrontBack = 3, THREE.FrontFaceDirectionCW = 0, THREE.FrontFaceDirectionCCW = 1, THREE.BasicShadowMap = 0, THREE.PCFShadowMap = 1, THREE.PCFSoftShadowMap = 2, THREE.FrontSide = 0, THREE.BackSide = 1, THREE.DoubleSide = 2, THREE.NoShading = 0, THREE.FlatShading = 1, THREE.SmoothShading = 2, THREE.NoColors = 0, THREE.FaceColors = 1, THREE.VertexColors = 2, THREE.NoBlending = 0, THREE.NormalBlending = 1, THREE.AdditiveBlending = 2, THREE.SubtractiveBlending = 3, THREE.MultiplyBlending = 4, THREE.CustomBlending = 5, THREE.AddEquation = 100, THREE.SubtractEquation = 101, THREE.ReverseSubtractEquation = 102, THREE.ZeroFactor = 200, THREE.OneFactor = 201, THREE.SrcColorFactor = 202, THREE.OneMinusSrcColorFactor = 203, THREE.SrcAlphaFactor = 204, THREE.OneMinusSrcAlphaFactor = 205, THREE.DstAlphaFactor = 206, THREE.OneMinusDstAlphaFactor = 207, THREE.DstColorFactor = 208, THREE.OneMinusDstColorFactor = 209, THREE.SrcAlphaSaturateFactor = 210, THREE.MultiplyOperation = 0, THREE.MixOperation = 1, THREE.AddOperation = 2, THREE.UVMapping = function () {
}, THREE.CubeReflectionMapping = function () {
}, THREE.CubeRefractionMapping = function () {
}, THREE.SphericalReflectionMapping = function () {
}, THREE.SphericalRefractionMapping = function () {
}, THREE.RepeatWrapping = 1e3, THREE.ClampToEdgeWrapping = 1001, THREE.MirroredRepeatWrapping = 1002, THREE.NearestFilter = 1003, THREE.NearestMipMapNearestFilter = 1004, THREE.NearestMipMapLinearFilter = 1005, THREE.LinearFilter = 1006, THREE.LinearMipMapNearestFilter = 1007, THREE.LinearMipMapLinearFilter = 1008, THREE.UnsignedByteType = 1009, THREE.ByteType = 1010, THREE.ShortType = 1011, THREE.UnsignedShortType = 1012, THREE.IntType = 1013, THREE.UnsignedIntType = 1014, THREE.FloatType = 1015, THREE.UnsignedShort4444Type = 1016, THREE.UnsignedShort5551Type = 1017, THREE.UnsignedShort565Type = 1018, THREE.AlphaFormat = 1019, THREE.RGBFormat = 1020, THREE.RGBAFormat = 1021, THREE.LuminanceFormat = 1022, THREE.LuminanceAlphaFormat = 1023, THREE.RGB_S3TC_DXT1_Format = 2001, THREE.RGBA_S3TC_DXT1_Format = 2002, THREE.RGBA_S3TC_DXT3_Format = 2003, THREE.RGBA_S3TC_DXT5_Format = 2004, THREE.Color = function (e) {
    return void 0 !== e && this.set(e), this
}, THREE.Color.prototype = {
    constructor: THREE.Color, r: 1, g: 1, b: 1, set: function (e) {
        return e instanceof THREE.Color ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e), this
    }, setHex: function (e) {
        return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, this
    }, setRGB: function (e, t, i) {
        return this.r = e, this.g = t, this.b = i, this
    }, setHSL: function (e, t, i) {
        if (0 === t) this.r = this.g = this.b = i; else {
            var r = function (e, t, i) {
                return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? e + 6 * (t - e) * i : i < .5 ? t : i < 2 / 3 ? e + 6 * (t - e) * (2 / 3 - i) : e
            }, o = i <= .5 ? i * (1 + t) : i + t - i * t, a = 2 * i - o;
            this.r = r(a, o, e + 1 / 3), this.g = r(a, o, e), this.b = r(a, o, e - 1 / 3)
        }
        return this
    }, setStyle: function (e) {
        if (/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test(e)) {
            var t = /^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(e);
            return this.r = Math.min(255, parseInt(t[1], 10)) / 255, this.g = Math.min(255, parseInt(t[2], 10)) / 255, this.b = Math.min(255, parseInt(t[3], 10)) / 255, this
        }
        if (/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test(e)) {
            var t = /^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(e);
            return this.r = Math.min(100, parseInt(t[1], 10)) / 100, this.g = Math.min(100, parseInt(t[2], 10)) / 100, this.b = Math.min(100, parseInt(t[3], 10)) / 100, this
        }
        if (/^\#([0-9a-f]{6})$/i.test(e)) {
            var t = /^\#([0-9a-f]{6})$/i.exec(e);
            return this.setHex(parseInt(t[1], 16)), this
        }
        if (/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(e)) {
            var t = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(e);
            return this.setHex(parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3], 16)), this
        }
        if (/^(\w+)$/i.test(e)) return this.setHex(THREE.ColorKeywords[e]), this
    }, copy: function (e) {
        return this.r = e.r, this.g = e.g, this.b = e.b, this
    }, copyGammaToLinear: function (e) {
        return this.r = e.r * e.r, this.g = e.g * e.g, this.b = e.b * e.b, this
    }, copyLinearToGamma: function (e) {
        return this.r = Math.sqrt(e.r), this.g = Math.sqrt(e.g), this.b = Math.sqrt(e.b), this
    }, convertGammaToLinear: function () {
        var e = this.r, t = this.g, i = this.b;
        return this.r = e * e, this.g = t * t, this.b = i * i, this
    }, convertLinearToGamma: function () {
        return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this
    }, getHex: function () {
        return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
    }, getHexString: function () {
        return ("000000" + this.getHex().toString(16)).slice(-6)
    }, getHSL: function () {
        var e = {h: 0, s: 0, l: 0};
        return function () {
            var t, i, r = this.r, o = this.g, a = this.b, n = Math.max(r, o, a), s = Math.min(r, o, a), h = (s + n) / 2;
            if (s === n) t = 0, i = 0; else {
                var l = n - s;
                switch (i = h <= .5 ? l / (n + s) : l / (2 - n - s), n) {
                    case r:
                        t = (o - a) / l + (o < a ? 6 : 0);
                        break;
                    case o:
                        t = (a - r) / l + 2;
                        break;
                    case a:
                        t = (r - o) / l + 4
                }
                t /= 6
            }
            return e.h = t, e.s = i, e.l = h, e
        }
    }(), getStyle: function () {
        return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
    }, offsetHSL: function (e, t, i) {
        var r = this.getHSL();
        return r.h += e, r.s += t, r.l += i, this.setHSL(r.h, r.s, r.l), this
    }, add: function (e) {
        return this.r += e.r, this.g += e.g, this.b += e.b, this
    }, addColors: function (e, t) {
        return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this
    }, addScalar: function (e) {
        return this.r += e, this.g += e, this.b += e, this
    }, multiply: function (e) {
        return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
    }, multiplyScalar: function (e) {
        return this.r *= e, this.g *= e, this.b *= e, this
    }, lerp: function (e, t) {
        return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
    }, equals: function (e) {
        return e.r === this.r && e.g === this.g && e.b === this.b
    }, fromArray: function (e) {
        return this.r = e[0], this.g = e[1], this.b = e[2], this
    }, toArray: function () {
        return [this.r, this.g, this.b]
    }, clone: function () {
        return (new THREE.Color).setRGB(this.r, this.g, this.b)
    }
}, THREE.ColorKeywords = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
}, THREE.Quaternion = function (e, t, i, r) {
    this._x = e || 0, this._y = t || 0, this._z = i || 0, this._w = void 0 !== r ? r : 1
}, THREE.Quaternion.prototype = {
    constructor: THREE.Quaternion, _x: 0, _y: 0, _z: 0, _w: 0, _euler: void 0, _updateEuler: function (e) {
        void 0 !== this._euler && this._euler.setFromQuaternion(this, void 0, !1)
    }, get x() {
        return this._x
    }, set x(e) {
        this._x = e, this._updateEuler()
    }, get y() {
        return this._y
    }, set y(e) {
        this._y = e, this._updateEuler()
    }, get z() {
        return this._z
    }, set z(e) {
        this._z = e, this._updateEuler()
    }, get w() {
        return this._w
    }, set w(e) {
        this._w = e, this._updateEuler()
    }, set: function (e, t, i, r) {
        return this._x = e, this._y = t, this._z = i, this._w = r, this._updateEuler(), this
    }, copy: function (e) {
        return this._x = e._x, this._y = e._y, this._z = e._z, this._w = e._w, this._updateEuler(), this
    }, setFromEuler: function (e, t) {
        if (e instanceof THREE.Euler == !1) throw new Error("ERROR: Quaternion's .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.");
        var i = Math.cos(e._x / 2), r = Math.cos(e._y / 2), o = Math.cos(e._z / 2), a = Math.sin(e._x / 2),
            n = Math.sin(e._y / 2), s = Math.sin(e._z / 2);
        return "XYZ" === e.order ? (this._x = a * r * o + i * n * s, this._y = i * n * o - a * r * s, this._z = i * r * s + a * n * o, this._w = i * r * o - a * n * s) : "YXZ" === e.order ? (this._x = a * r * o + i * n * s, this._y = i * n * o - a * r * s, this._z = i * r * s - a * n * o, this._w = i * r * o + a * n * s) : "ZXY" === e.order ? (this._x = a * r * o - i * n * s, this._y = i * n * o + a * r * s, this._z = i * r * s + a * n * o, this._w = i * r * o - a * n * s) : "ZYX" === e.order ? (this._x = a * r * o - i * n * s, this._y = i * n * o + a * r * s, this._z = i * r * s - a * n * o, this._w = i * r * o + a * n * s) : "YZX" === e.order ? (this._x = a * r * o + i * n * s, this._y = i * n * o + a * r * s, this._z = i * r * s - a * n * o, this._w = i * r * o - a * n * s) : "XZY" === e.order && (this._x = a * r * o - i * n * s, this._y = i * n * o - a * r * s, this._z = i * r * s + a * n * o, this._w = i * r * o + a * n * s), t !== !1 && this._updateEuler(), this
    }, setFromAxisAngle: function (e, t) {
        var i = t / 2, r = Math.sin(i);
        return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(i), this._updateEuler(), this
    }, setFromRotationMatrix: function (e) {
        var t, i = e.elements, r = i[0], o = i[4], a = i[8], n = i[1], s = i[5], h = i[9], l = i[2], c = i[6],
            u = i[10], p = r + s + u;
        return p > 0 ? (t = .5 / Math.sqrt(p + 1), this._w = .25 / t, this._x = (c - h) * t, this._y = (a - l) * t, this._z = (n - o) * t) : r > s && r > u ? (t = 2 * Math.sqrt(1 + r - s - u), this._w = (c - h) / t, this._x = .25 * t, this._y = (o + n) / t, this._z = (a + l) / t) : s > u ? (t = 2 * Math.sqrt(1 + s - r - u), this._w = (a - l) / t, this._x = (o + n) / t, this._y = .25 * t, this._z = (h + c) / t) : (t = 2 * Math.sqrt(1 + u - r - s), this._w = (n - o) / t, this._x = (a + l) / t, this._y = (h + c) / t, this._z = .25 * t), this._updateEuler(), this
    }, inverse: function () {
        return this.conjugate().normalize(), this
    }, conjugate: function () {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._updateEuler(), this
    }, lengthSq: function () {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    }, length: function () {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    }, normalize: function () {
        var e = this.length();
        return 0 === e ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this
    }, multiply: function (e, t) {
        return void 0 !== t ? this.multiplyQuaternions(e, t) : this.multiplyQuaternions(this, e)
    }, multiplyQuaternions: function (e, t) {
        var i = e._x, r = e._y, o = e._z, a = e._w, n = t._x, s = t._y, h = t._z, l = t._w;
        return this._x = i * l + a * n + r * h - o * s, this._y = r * l + a * s + o * n - i * h, this._z = o * l + a * h + i * s - r * n, this._w = a * l - i * n - r * s - o * h, this._updateEuler(), this
    }, multiplyVector3: function (e) {
        return e.applyQuaternion(this)
    }, slerp: function (e, t) {
        var i = this._x, r = this._y, o = this._z, a = this._w, n = a * e._w + i * e._x + r * e._y + o * e._z;
        if (n < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, n = -n) : this.copy(e), n >= 1) return this._w = a, this._x = i, this._y = r, this._z = o, this;
        var s = Math.acos(n), h = Math.sqrt(1 - n * n);
        if (Math.abs(h) < .001) return this._w = .5 * (a + this._w), this._x = .5 * (i + this._x), this._y = .5 * (r + this._y), this._z = .5 * (o + this._z), this;
        var l = Math.sin((1 - t) * s) / h, c = Math.sin(t * s) / h;
        return this._w = a * l + this._w * c, this._x = i * l + this._x * c, this._y = r * l + this._y * c, this._z = o * l + this._z * c, this._updateEuler(), this
    }, equals: function (e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
    }, fromArray: function (e) {
        return this._x = e[0], this._y = e[1], this._z = e[2], this._w = e[3], this._updateEuler(), this
    }, toArray: function () {
        return [this._x, this._y, this._z, this._w]
    }, clone: function () {
        return new THREE.Quaternion(this._x, this._y, this._z, this._w)
    }
}, THREE.Quaternion.slerp = function (e, t, i, r) {
    return i.copy(e).slerp(t, r)
}, THREE.Vector2 = function (e, t) {
    this.x = e || 0, this.y = t || 0
}, THREE.Vector2.prototype = {
    constructor: THREE.Vector2, set: function (e, t) {
        return this.x = e, this.y = t, this
    }, setX: function (e) {
        return this.x = e, this
    }, setY: function (e) {
        return this.y = e, this
    }, setComponent: function (e, t) {
        switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            default:
                throw new Error("index is out of range: " + e)
        }
    }, getComponent: function (e) {
        switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw new Error("index is out of range: " + e)
        }
    }, copy: function (e) {
        return this.x = e.x, this.y = e.y, this
    }, add: function (e, t) {
        return void 0 !== t ? this.addVectors(e, t) : (this.x += e.x, this.y += e.y, this)
    }, addVectors: function (e, t) {
        return this.x = e.x + t.x, this.y = e.y + t.y, this
    }, addScalar: function (e) {
        return this.x += e, this.y += e, this
    }, sub: function (e, t) {
        return void 0 !== t ? this.subVectors(e, t) : (this.x -= e.x, this.y -= e.y, this)
    }, subVectors: function (e, t) {
        return this.x = e.x - t.x, this.y = e.y - t.y, this
    }, multiplyScalar: function (e) {
        return this.x *= e, this.y *= e, this
    }, divideScalar: function (e) {
        if (0 !== e) {
            var t = 1 / e;
            this.x *= t, this.y *= t
        } else this.x = 0, this.y = 0;
        return this
    }, min: function (e) {
        return this.x > e.x && (this.x = e.x), this.y > e.y && (this.y = e.y), this
    }, max: function (e) {
        return this.x < e.x && (this.x = e.x), this.y < e.y && (this.y = e.y), this
    }, clamp: function (e, t) {
        return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x), this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y), this
    }, negate: function () {
        return this.multiplyScalar(-1)
    }, dot: function (e) {
        return this.x * e.x + this.y * e.y
    }, lengthSq: function () {
        return this.x * this.x + this.y * this.y
    }, length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }, normalize: function () {
        return this.divideScalar(this.length())
    }, distanceTo: function (e) {
        return Math.sqrt(this.distanceToSquared(e))
    }, distanceToSquared: function (e) {
        var t = this.x - e.x, i = this.y - e.y;
        return t * t + i * i
    }, setLength: function (e) {
        var t = this.length();
        return 0 !== t && e !== t && this.multiplyScalar(e / t), this
    }, lerp: function (e, t) {
        return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
    }, equals: function (e) {
        return e.x === this.x && e.y === this.y
    }, fromArray: function (e) {
        return this.x = e[0], this.y = e[1], this
    }, toArray: function () {
        return [this.x, this.y]
    }, clone: function () {
        return new THREE.Vector2(this.x, this.y)
    }
}, THREE.Vector3 = function (e, t, i) {
    this.x = e || 0, this.y = t || 0, this.z = i || 0
}, THREE.Vector3.prototype = {
    constructor: THREE.Vector3, set: function (e, t, i) {
        return this.x = e, this.y = t, this.z = i, this
    }, setX: function (e) {
        return this.x = e, this
    }, setY: function (e) {
        return this.y = e, this
    }, setZ: function (e) {
        return this.z = e, this
    }, setComponent: function (e, t) {
        switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            case 2:
                this.z = t;
                break;
            default:
                throw new Error("index is out of range: " + e)
        }
    }, getComponent: function (e) {
        switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw new Error("index is out of range: " + e)
        }
    }, copy: function (e) {
        return this.x = e.x, this.y = e.y, this.z = e.z, this
    }, add: function (e, t) {
        return void 0 !== t ? this.addVectors(e, t) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
    }, addScalar: function (e) {
        return this.x += e, this.y += e, this.z += e, this
    }, addVectors: function (e, t) {
        return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
    }, sub: function (e, t) {
        return void 0 !== t ? this.subVectors(e, t) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
    }, subVectors: function (e, t) {
        return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
    }, multiply: function (e, t) {
        return void 0 !== t ? this.multiplyVectors(e, t) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
    }, multiplyScalar: function (e) {
        return this.x *= e, this.y *= e, this.z *= e, this
    }, multiplyVectors: function (e, t) {
        return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
    }, applyMatrix3: function (e) {
        var t = this.x, i = this.y, r = this.z, o = e.elements;
        return this.x = o[0] * t + o[3] * i + o[6] * r, this.y = o[1] * t + o[4] * i + o[7] * r, this.z = o[2] * t + o[5] * i + o[8] * r, this
    }, applyMatrix4: function (e) {
        var t = this.x, i = this.y, r = this.z, o = e.elements;
        return this.x = o[0] * t + o[4] * i + o[8] * r + o[12], this.y = o[1] * t + o[5] * i + o[9] * r + o[13], this.z = o[2] * t + o[6] * i + o[10] * r + o[14], this
    }, applyProjection: function (e) {
        var t = this.x, i = this.y, r = this.z, o = e.elements, a = 1 / (o[3] * t + o[7] * i + o[11] * r + o[15]);
        return this.x = (o[0] * t + o[4] * i + o[8] * r + o[12]) * a, this.y = (o[1] * t + o[5] * i + o[9] * r + o[13]) * a, this.z = (o[2] * t + o[6] * i + o[10] * r + o[14]) * a, this
    }, applyQuaternion: function (e) {
        var t = this.x, i = this.y, r = this.z, o = e.x, a = e.y, n = e.z, s = e.w, h = s * t + a * r - n * i,
            l = s * i + n * t - o * r, c = s * r + o * i - a * t, u = -o * t - a * i - n * r;
        return this.x = h * s + u * -o + l * -n - c * -a, this.y = l * s + u * -a + c * -o - h * -n, this.z = c * s + u * -n + h * -a - l * -o, this
    }, transformDirection: function (e) {
        var t = this.x, i = this.y, r = this.z, o = e.elements;
        return this.x = o[0] * t + o[4] * i + o[8] * r, this.y = o[1] * t + o[5] * i + o[9] * r, this.z = o[2] * t + o[6] * i + o[10] * r, this.normalize(), this
    }, divide: function (e) {
        return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
    }, divideScalar: function (e) {
        if (0 !== e) {
            var t = 1 / e;
            this.x *= t, this.y *= t, this.z *= t
        } else this.x = 0, this.y = 0, this.z = 0;
        return this
    }, min: function (e) {
        return this.x > e.x && (this.x = e.x), this.y > e.y && (this.y = e.y), this.z > e.z && (this.z = e.z), this
    }, max: function (e) {
        return this.x < e.x && (this.x = e.x), this.y < e.y && (this.y = e.y), this.z < e.z && (this.z = e.z), this
    }, clamp: function (e, t) {
        return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x), this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y), this.z < e.z ? this.z = e.z : this.z > t.z && (this.z = t.z), this
    }, negate: function () {
        return this.multiplyScalar(-1)
    }, dot: function (e) {
        return this.x * e.x + this.y * e.y + this.z * e.z
    }, lengthSq: function () {
        return this.x * this.x + this.y * this.y + this.z * this.z
    }, length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }, lengthManhattan: function () {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    }, normalize: function () {
        return this.divideScalar(this.length())
    }, setLength: function (e) {
        var t = this.length();
        return 0 !== t && e !== t && this.multiplyScalar(e / t), this
    }, lerp: function (e, t) {
        return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
    }, cross: function (e, t) {
        if (void 0 !== t) return this.crossVectors(e, t);
        var i = this.x, r = this.y, o = this.z;
        return this.x = r * e.z - o * e.y, this.y = o * e.x - i * e.z, this.z = i * e.y - r * e.x, this
    }, crossVectors: function (e, t) {
        var i = e.x, r = e.y, o = e.z, a = t.x, n = t.y, s = t.z;
        return this.x = r * s - o * n, this.y = o * a - i * s, this.z = i * n - r * a, this
    }, angleTo: function (e) {
        var t = this.dot(e) / (this.length() * e.length());
        return Math.acos(THREE.Math.clamp(t, -1, 1))
    }, distanceTo: function (e) {
        return Math.sqrt(this.distanceToSquared(e))
    }, distanceToSquared: function (e) {
        var t = this.x - e.x, i = this.y - e.y, r = this.z - e.z;
        return t * t + i * i + r * r
    }, setEulerFromRotationMatrix: function (e, t) {
    }, setEulerFromQuaternion: function (e, t) {
    }, getPositionFromMatrix: function (e) {
        return this.x = e.elements[12], this.y = e.elements[13], this.z = e.elements[14], this
    }, getScaleFromMatrix: function (e) {
        var t = this.set(e.elements[0], e.elements[1], e.elements[2]).length(),
            i = this.set(e.elements[4], e.elements[5], e.elements[6]).length(),
            r = this.set(e.elements[8], e.elements[9], e.elements[10]).length();
        return this.x = t, this.y = i, this.z = r, this
    }, getColumnFromMatrix: function (e, t) {
        var i = 4 * e, r = t.elements;
        return this.x = r[i], this.y = r[i + 1], this.z = r[i + 2], this
    }, equals: function (e) {
        return e.x === this.x && e.y === this.y && e.z === this.z
    }, fromArray: function (e) {
        return this.x = e[0], this.y = e[1], this.z = e[2], this
    }, toArray: function () {
        return [this.x, this.y, this.z]
    }, clone: function () {
        return new THREE.Vector3(this.x, this.y, this.z)
    }
}, THREE.extend(THREE.Vector3.prototype, {
    applyEuler: function () {
        var e = new THREE.Quaternion;
        return function (t) {
            return THREE.Euler, this.applyQuaternion(e.setFromEuler(t)), this
        }
    }(), applyAxisAngle: function () {
        var e = new THREE.Quaternion;
        return function (t, i) {
            return this.applyQuaternion(e.setFromAxisAngle(t, i)), this
        }
    }(), projectOnVector: function () {
        var e = new THREE.Vector3;
        return function (t) {
            e.copy(t).normalize();
            var i = this.dot(e);
            return this.copy(e).multiplyScalar(i)
        }
    }(), projectOnPlane: function () {
        var e = new THREE.Vector3;
        return function (t) {
            return e.copy(this).projectOnVector(t), this.sub(e)
        }
    }(), reflect: function () {
        var e = new THREE.Vector3;
        return function (t) {
            return e.copy(this).projectOnVector(t).multiplyScalar(2), this.subVectors(e, this)
        }
    }()
}), THREE.Vector4 = function (e, t, i, r) {
    this.x = e || 0, this.y = t || 0, this.z = i || 0, this.w = void 0 !== r ? r : 1
}, THREE.Vector4.prototype = {
    constructor: THREE.Vector4, set: function (e, t, i, r) {
        return this.x = e, this.y = t, this.z = i, this.w = r, this
    }, setX: function (e) {
        return this.x = e, this
    }, setY: function (e) {
        return this.y = e, this
    }, setZ: function (e) {
        return this.z = e, this
    }, setW: function (e) {
        return this.w = e, this
    }, setComponent: function (e, t) {
        switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            case 2:
                this.z = t;
                break;
            case 3:
                this.w = t;
                break;
            default:
                throw new Error("index is out of range: " + e)
        }
    }, getComponent: function (e) {
        switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw new Error("index is out of range: " + e)
        }
    }, copy: function (e) {
        return this.x = e.x, this.y = e.y, this.z = e.z, this.w = void 0 !== e.w ? e.w : 1, this
    }, add: function (e, t) {
        return void 0 !== t ? this.addVectors(e, t) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
    }, addScalar: function (e) {
        return this.x += e, this.y += e, this.z += e, this.w += e, this
    }, addVectors: function (e, t) {
        return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
    }, sub: function (e, t) {
        return void 0 !== t ? this.subVectors(e, t) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
    }, subVectors: function (e, t) {
        return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
    }, multiplyScalar: function (e) {
        return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
    }, applyMatrix4: function (e) {
        var t = this.x, i = this.y, r = this.z, o = this.w, a = e.elements;
        return this.x = a[0] * t + a[4] * i + a[8] * r + a[12] * o, this.y = a[1] * t + a[5] * i + a[9] * r + a[13] * o, this.z = a[2] * t + a[6] * i + a[10] * r + a[14] * o, this.w = a[3] * t + a[7] * i + a[11] * r + a[15] * o, this
    }, divideScalar: function (e) {
        if (0 !== e) {
            var t = 1 / e;
            this.x *= t, this.y *= t, this.z *= t, this.w *= t
        } else this.x = 0, this.y = 0, this.z = 0, this.w = 1;
        return this
    }, setAxisAngleFromQuaternion: function (e) {
        this.w = 2 * Math.acos(e.w);
        var t = Math.sqrt(1 - e.w * e.w);
        return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
    }, setAxisAngleFromRotationMatrix: function (e) {
        var t, i, r, o, a = e.elements, n = a[0], s = a[4], h = a[8], l = a[1], c = a[5], u = a[9], p = a[2], f = a[6],
            E = a[10];
        if (Math.abs(s - l) < .01 && Math.abs(h - p) < .01 && Math.abs(u - f) < .01) {
            if (Math.abs(s + l) < .1 && Math.abs(h + p) < .1 && Math.abs(u + f) < .1 && Math.abs(n + c + E - 3) < .1) return this.set(1, 0, 0, 0), this;
            t = Math.PI;
            var d = (n + 1) / 2, m = (c + 1) / 2, g = (E + 1) / 2, v = (s + l) / 4, T = (h + p) / 4, y = (u + f) / 4;
            return d > m && d > g ? d < .01 ? (i = 0, r = .707106781, o = .707106781) : (i = Math.sqrt(d), r = v / i, o = T / i) : m > g ? m < .01 ? (i = .707106781, r = 0, o = .707106781) : (r = Math.sqrt(m), i = v / r, o = y / r) : g < .01 ? (i = .707106781, r = .707106781, o = 0) : (o = Math.sqrt(g), i = T / o, r = y / o), this.set(i, r, o, t), this
        }
        var R = Math.sqrt((f - u) * (f - u) + (h - p) * (h - p) + (l - s) * (l - s));
        return Math.abs(R) < .001 && (R = 1), this.x = (f - u) / R, this.y = (h - p) / R, this.z = (l - s) / R, this.w = Math.acos((n + c + E - 1) / 2), this
    }, min: function (e) {
        return this.x > e.x && (this.x = e.x), this.y > e.y && (this.y = e.y), this.z > e.z && (this.z = e.z), this.w > e.w && (this.w = e.w), this
    }, max: function (e) {
        return this.x < e.x && (this.x = e.x), this.y < e.y && (this.y = e.y), this.z < e.z && (this.z = e.z), this.w < e.w && (this.w = e.w), this
    }, clamp: function (e, t) {
        return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x), this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y), this.z < e.z ? this.z = e.z : this.z > t.z && (this.z = t.z), this.w < e.w ? this.w = e.w : this.w > t.w && (this.w = t.w), this
    }, negate: function () {
        return this.multiplyScalar(-1)
    }, dot: function (e) {
        return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
    }, lengthSq: function () {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    }, length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }, lengthManhattan: function () {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    }, normalize: function () {
        return this.divideScalar(this.length())
    }, setLength: function (e) {
        var t = this.length();
        return 0 !== t && e !== t && this.multiplyScalar(e / t), this
    }, lerp: function (e, t) {
        return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
    }, equals: function (e) {
        return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
    }, fromArray: function (e) {
        return this.x = e[0], this.y = e[1], this.z = e[2], this.w = e[3], this
    }, toArray: function () {
        return [this.x, this.y, this.z, this.w]
    }, clone: function () {
        return new THREE.Vector4(this.x, this.y, this.z, this.w)
    }
}, THREE.Euler = function (e, t, i, r) {
    this._x = e || 0, this._y = t || 0, this._z = i || 0, this._order = r || THREE.Euler.DefaultOrder
}, THREE.Euler.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], THREE.Euler.DefaultOrder = "XYZ", THREE.Euler.prototype = {
    constructor: THREE.Euler,
    _x: 0,
    _y: 0,
    _z: 0,
    _order: THREE.Euler.DefaultOrder,
    _quaternion: void 0,
    _updateQuaternion: function () {
        void 0 !== this._quaternion && this._quaternion.setFromEuler(this, !1)
    },
    get x() {
        return this._x
    },
    set x(e) {
        this._x = e, this._updateQuaternion()
    },
    get y() {
        return this._y
    },
    set y(e) {
        this._y = e, this._updateQuaternion()
    },
    get z() {
        return this._z
    },
    set z(e) {
        this._z = e, this._updateQuaternion()
    },
    get order() {
        return this._order
    },
    set order(e) {
        this._order = e, this._updateQuaternion()
    },
    set: function (e, t, i, r) {
        return this._x = e, this._y = t, this._z = i, this._order = r || this._order, this._updateQuaternion(), this
    },
    copy: function (e) {
        return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._updateQuaternion(), this
    },
    setFromRotationMatrix: function (e, t) {
        function i(e) {
            return Math.min(Math.max(e, -1), 1)
        }

        var r = e.elements, o = r[0], a = r[4], n = r[8], s = r[1], h = r[5], l = r[9], c = r[2], u = r[6], p = r[10];
        return t = t || this._order, "XYZ" === t ? (this._y = Math.asin(i(n)), Math.abs(n) < .99999 ? (this._x = Math.atan2(-l, p), this._z = Math.atan2(-a, o)) : (this._x = Math.atan2(u, h), this._z = 0)) : "YXZ" === t ? (this._x = Math.asin(-i(l)), Math.abs(l) < .99999 ? (this._y = Math.atan2(n, p), this._z = Math.atan2(s, h)) : (this._y = Math.atan2(-c, o), this._z = 0)) : "ZXY" === t ? (this._x = Math.asin(i(u)), Math.abs(u) < .99999 ? (this._y = Math.atan2(-c, p), this._z = Math.atan2(-a, h)) : (this._y = 0, this._z = Math.atan2(s, o))) : "ZYX" === t ? (this._y = Math.asin(-i(c)), Math.abs(c) < .99999 ? (this._x = Math.atan2(u, p), this._z = Math.atan2(s, o)) : (this._x = 0, this._z = Math.atan2(-a, h))) : "YZX" === t ? (this._z = Math.asin(i(s)), Math.abs(s) < .99999 ? (this._x = Math.atan2(-l, h), this._y = Math.atan2(-c, o)) : (this._x = 0, this._y = Math.atan2(n, p))) : "XZY" === t && (this._z = Math.asin(-i(a)), Math.abs(a) < .99999 ? (this._x = Math.atan2(u, h), this._y = Math.atan2(n, o)) : (this._x = Math.atan2(-l, p), this._y = 0)), this._order = t, this._updateQuaternion(), this
    },
    setFromQuaternion: function (e, t, i) {
        function r(e) {
            return Math.min(Math.max(e, -1), 1)
        }

        var o = e.x * e.x, a = e.y * e.y, n = e.z * e.z, s = e.w * e.w;
        return t = t || this._order, "XYZ" === t ? (this._x = Math.atan2(2 * (e.x * e.w - e.y * e.z), s - o - a + n), this._y = Math.asin(r(2 * (e.x * e.z + e.y * e.w))), this._z = Math.atan2(2 * (e.z * e.w - e.x * e.y), s + o - a - n)) : "YXZ" === t ? (this._x = Math.asin(r(2 * (e.x * e.w - e.y * e.z))), this._y = Math.atan2(2 * (e.x * e.z + e.y * e.w), s - o - a + n), this._z = Math.atan2(2 * (e.x * e.y + e.z * e.w), s - o + a - n)) : "ZXY" === t ? (this._x = Math.asin(r(2 * (e.x * e.w + e.y * e.z))), this._y = Math.atan2(2 * (e.y * e.w - e.z * e.x), s - o - a + n), this._z = Math.atan2(2 * (e.z * e.w - e.x * e.y), s - o + a - n)) : "ZYX" === t ? (this._x = Math.atan2(2 * (e.x * e.w + e.z * e.y), s - o - a + n), this._y = Math.asin(r(2 * (e.y * e.w - e.x * e.z))), this._z = Math.atan2(2 * (e.x * e.y + e.z * e.w), s + o - a - n)) : "YZX" === t ? (this._x = Math.atan2(2 * (e.x * e.w - e.z * e.y), s - o + a - n), this._y = Math.atan2(2 * (e.y * e.w - e.x * e.z), s + o - a - n), this._z = Math.asin(r(2 * (e.x * e.y + e.z * e.w)))) : "XZY" === t && (this._x = Math.atan2(2 * (e.x * e.w + e.y * e.z), s - o + a - n), this._y = Math.atan2(2 * (e.x * e.z + e.y * e.w), s + o - a - n), this._z = Math.asin(r(2 * (e.z * e.w - e.x * e.y)))), this._order = t, i !== !1 && this._updateQuaternion(), this
    },
    reorder: function () {
        var e = new THREE.Quaternion;
        return function (t) {
            e.setFromEuler(this), this.setFromQuaternion(e, t)
        }
    }(),
    fromArray: function (e) {
        return this._x = e[0], this._y = e[1], this._z = e[2], void 0 !== e[3] && (this._order = e[3]), this._updateQuaternion(), this
    },
    toArray: function () {
        return [this._x, this._y, this._z, this._order]
    },
    equals: function (e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
    },
    clone: function () {
        return new THREE.Euler(this._x, this._y, this._z, this._order)
    }
}, THREE.Line3 = function (e, t) {
    this.start = void 0 !== e ? e : new THREE.Vector3, this.end = void 0 !== t ? t : new THREE.Vector3
}, THREE.Line3.prototype = {
    constructor: THREE.Line3, set: function (e, t) {
        return this.start.copy(e), this.end.copy(t), this
    }, copy: function (e) {
        return this.start.copy(e.start), this.end.copy(e.end), this
    }, center: function (e) {
        return (e || new THREE.Vector3).addVectors(this.start, this.end).multiplyScalar(.5)
    }, delta: function (e) {
        return (e || new THREE.Vector3).subVectors(this.end, this.start)
    }, distanceSq: function () {
        return this.start.distanceToSquared(this.end)
    }, distance: function () {
        return this.start.distanceTo(this.end)
    }, at: function (e, t) {
        var i = t || new THREE.Vector3;
        return this.delta(i).multiplyScalar(e).add(this.start)
    }, closestPointToPointParameter: function () {
        var e = new THREE.Vector3, t = new THREE.Vector3;
        return function (i, r) {
            e.subVectors(i, this.start), t.subVectors(this.end, this.start);
            var o = t.dot(t), a = t.dot(e), n = a / o;
            return r && (n = THREE.Math.clamp(n, 0, 1)), n
        }
    }(), closestPointToPoint: function (e, t, i) {
        var r = this.closestPointToPointParameter(e, t), o = i || new THREE.Vector3;
        return this.delta(o).multiplyScalar(r).add(this.start)
    }, applyMatrix4: function (e) {
        return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this
    }, equals: function (e) {
        return e.start.equals(this.start) && e.end.equals(this.end)
    }, clone: function () {
        return (new THREE.Line3).copy(this)
    }
}, THREE.Box2 = function (e, t) {
    this.min = void 0 !== e ? e : new THREE.Vector2(1 / 0, 1 / 0), this.max = void 0 !== t ? t : new THREE.Vector2(-(1 / 0), -(1 / 0))
}, THREE.Box2.prototype = {
    constructor: THREE.Box2, set: function (e, t) {
        return this.min.copy(e), this.max.copy(t), this
    }, setFromPoints: function (e) {
        if (e.length > 0) {
            var t = e[0];
            this.min.copy(t), this.max.copy(t);
            for (var i = 1, r = e.length; i < r; i++) t = e[i], t.x < this.min.x ? this.min.x = t.x : t.x > this.max.x && (this.max.x = t.x), t.y < this.min.y ? this.min.y = t.y : t.y > this.max.y && (this.max.y = t.y)
        } else this.makeEmpty();
        return this
    }, setFromCenterAndSize: function () {
        var e = new THREE.Vector2;
        return function (t, i) {
            var r = e.copy(i).multiplyScalar(.5);
            return this.min.copy(t).sub(r), this.max.copy(t).add(r), this
        }
    }(), copy: function (e) {
        return this.min.copy(e.min), this.max.copy(e.max), this
    }, makeEmpty: function () {
        return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -(1 / 0), this
    }, empty: function () {
        return this.max.x < this.min.x || this.max.y < this.min.y
    }, center: function (e) {
        return (e || new THREE.Vector2).addVectors(this.min, this.max).multiplyScalar(.5)
    }, size: function (e) {
        return (e || new THREE.Vector2).subVectors(this.max, this.min)
    }, expandByPoint: function (e) {
        return this.min.min(e), this.max.max(e), this
    }, expandByVector: function (e) {
        return this.min.sub(e), this.max.add(e), this
    }, expandByScalar: function (e) {
        return this.min.addScalar(-e), this.max.addScalar(e), this
    }, containsPoint: function (e) {
        return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y)
    }, containsBox: function (e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y
    }, getParameter: function (e) {
        return new THREE.Vector2((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y))
    }, isIntersectionBox: function (e) {
        return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y)
    }, clampPoint: function (e, t) {
        return (t || new THREE.Vector2).copy(e).clamp(this.min, this.max)
    }, distanceToPoint: function () {
        var e = new THREE.Vector2;
        return function (t) {
            return e.copy(t).clamp(this.min, this.max).sub(t).length()
        }
    }(), intersect: function (e) {
        return this.min.max(e.min), this.max.min(e.max), this
    }, union: function (e) {
        return this.min.min(e.min), this.max.max(e.max), this
    }, translate: function (e) {
        return this.min.add(e), this.max.add(e), this
    }, equals: function (e) {
        return e.min.equals(this.min) && e.max.equals(this.max)
    }, clone: function () {
        return (new THREE.Box2).copy(this)
    }
}, THREE.Box3 = function (e, t) {
    this.min = void 0 !== e ? e : new THREE.Vector3(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== t ? t : new THREE.Vector3(-(1 / 0), -(1 / 0), -(1 / 0))
}, THREE.Box3.prototype = {
    constructor: THREE.Box3, set: function (e, t) {
        return this.min.copy(e), this.max.copy(t), this
    }, addPoint: function (e) {
        e.x < this.min.x ? this.min.x = e.x : e.x > this.max.x && (this.max.x = e.x), e.y < this.min.y ? this.min.y = e.y : e.y > this.max.y && (this.max.y = e.y), e.z < this.min.z ? this.min.z = e.z : e.z > this.max.z && (this.max.z = e.z)
    }, setFromPoints: function (e) {
        if (e.length > 0) {
            var t = e[0];
            this.min.copy(t), this.max.copy(t);
            for (var i = 1, r = e.length; i < r; i++) this.addPoint(e[i])
        } else this.makeEmpty();
        return this
    }, setFromCenterAndSize: function () {
        var e = new THREE.Vector3;
        return function (t, i) {
            var r = e.copy(i).multiplyScalar(.5);
            return this.min.copy(t).sub(r), this.max.copy(t).add(r), this
        }
    }(), setFromObject: function () {
        var e = new THREE.Vector3;
        return function (t) {
            var i = this;
            return t.updateMatrixWorld(!0), this.makeEmpty(), t.traverse(function (t) {
                if (void 0 !== t.geometry && void 0 !== t.geometry.vertices) for (var r = t.geometry.vertices, o = 0, a = r.length; o < a; o++) e.copy(r[o]), e.applyMatrix4(t.matrixWorld), i.expandByPoint(e)
            }), this
        }
    }(), copy: function (e) {
        return this.min.copy(e.min), this.max.copy(e.max), this
    }, makeEmpty: function () {
        return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -(1 / 0), this
    }, empty: function () {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    }, center: function (e) {
        return (e || new THREE.Vector3).addVectors(this.min, this.max).multiplyScalar(.5)
    }, size: function (e) {
        return (e || new THREE.Vector3).subVectors(this.max, this.min)
    }, expandByPoint: function (e) {
        return this.min.min(e), this.max.max(e), this
    }, expandByVector: function (e) {
        return this.min.sub(e), this.max.add(e), this
    }, expandByScalar: function (e) {
        return this.min.addScalar(-e), this.max.addScalar(e), this
    }, containsPoint: function (e) {
        return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z)
    }, containsBox: function (e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
    }, getParameter: function (e) {
        return new THREE.Vector3((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
    }, isIntersectionBox: function (e) {
        return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z)
    }, clampPoint: function (e, t) {
        return (t || new THREE.Vector3).copy(e).clamp(this.min, this.max)
    }, distanceToPoint: function () {
        var e = new THREE.Vector3;
        return function (t) {
            return e.copy(t).clamp(this.min, this.max).sub(t).length()
        }
    }(), getBoundingSphere: function () {
        var e = new THREE.Vector3;
        return function (t) {
            var i = t || new THREE.Sphere;
            return i.center = this.center(), i.radius = .5 * this.size(e).length(), i
        }
    }(), intersect: function (e) {
        return this.min.max(e.min), this.max.min(e.max), this
    }, union: function (e) {
        return this.min.min(e.min), this.max.max(e.max), this
    }, applyMatrix4: function () {
        var e = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
        return function (t) {
            return e[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), e[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), e[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), e[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), e[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), e[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), e[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), e[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.makeEmpty(), this.setFromPoints(e), this
        }
    }(), translate: function (e) {
        return this.min.add(e), this.max.add(e), this
    }, equals: function (e) {
        return e.min.equals(this.min) && e.max.equals(this.max)
    }, clone: function () {
        return (new THREE.Box3).copy(this)
    }
}, THREE.Matrix3 = function (e, t, i, r, o, a, n, s, h) {
    this.elements = new Float32Array(9), this.set(void 0 !== e ? e : 1, t || 0, i || 0, r || 0, void 0 !== o ? o : 1, a || 0, n || 0, s || 0, void 0 !== h ? h : 1)
}, THREE.Matrix3.prototype = {
    constructor: THREE.Matrix3, set: function (e, t, i, r, o, a, n, s, h) {
        var l = this.elements;
        return l[0] = e, l[3] = t, l[6] = i, l[1] = r, l[4] = o, l[7] = a, l[2] = n, l[5] = s, l[8] = h, this
    }, identity: function () {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
    }, copy: function (e) {
        var t = e.elements;
        return this.set(t[0], t[3], t[6], t[1], t[4], t[7], t[2], t[5], t[8]), this
    }, multiplyVector3: function (e) {
        return e.applyMatrix3(this)
    }, multiplyVector3Array: function () {
        var e = new THREE.Vector3;
        return function (t) {
            for (var i = 0, r = t.length; i < r; i += 3) e.x = t[i], e.y = t[i + 1], e.z = t[i + 2], e.applyMatrix3(this), t[i] = e.x, t[i + 1] = e.y, t[i + 2] = e.z;
            return t
        }
    }(), multiplyScalar: function (e) {
        var t = this.elements;
        return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
    }, determinant: function () {
        var e = this.elements, t = e[0], i = e[1], r = e[2], o = e[3], a = e[4], n = e[5], s = e[6], h = e[7], l = e[8];
        return t * a * l - t * n * h - i * o * l + i * n * s + r * o * h - r * a * s
    }, getInverse: function (e, t) {
        var i = e.elements, r = this.elements;
        r[0] = i[10] * i[5] - i[6] * i[9], r[1] = -i[10] * i[1] + i[2] * i[9], r[2] = i[6] * i[1] - i[2] * i[5], r[3] = -i[10] * i[4] + i[6] * i[8], r[4] = i[10] * i[0] - i[2] * i[8], r[5] = -i[6] * i[0] + i[2] * i[4], r[6] = i[9] * i[4] - i[5] * i[8], r[7] = -i[9] * i[0] + i[1] * i[8], r[8] = i[5] * i[0] - i[1] * i[4];
        var o = i[0] * r[0] + i[1] * r[3] + i[2] * r[6];
        if (0 === o) {
            var a = "Matrix3.getInverse(): can't invert matrix, determinant is 0";
            if (t) throw new Error(a);
            return this.identity(), this
        }
        return this.multiplyScalar(1 / o), this
    }, transpose: function () {
        var e, t = this.elements;
        return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
    }, getNormalMatrix: function (e) {
        return this.getInverse(e).transpose(), this
    }, transposeIntoArray: function (e) {
        var t = this.elements;
        return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
    }, clone: function () {
        var e = this.elements;
        return new THREE.Matrix3(e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8])
    }
},THREE.Matrix4 = function (e, t, i, r, o, a, n, s, h, l, c, u, p, f, E, d) {
    this.elements = new Float32Array(16);
    var m = this.elements;
    m[0] = void 0 !== e ? e : 1, m[4] = t || 0, m[8] = i || 0, m[12] = r || 0, m[1] = o || 0, m[5] = void 0 !== a ? a : 1, m[9] = n || 0, m[13] = s || 0, m[2] = h || 0, m[6] = l || 0, m[10] = void 0 !== c ? c : 1, m[14] = u || 0, m[3] = p || 0, m[7] = f || 0, m[11] = E || 0, m[15] = void 0 !== d ? d : 1
},THREE.Matrix4.prototype = {
    constructor: THREE.Matrix4, set: function (e, t, i, r, o, a, n, s, h, l, c, u, p, f, E, d) {
        var m = this.elements;
        return m[0] = e, m[4] = t, m[8] = i, m[12] = r, m[1] = o, m[5] = a, m[9] = n, m[13] = s, m[2] = h, m[6] = l, m[10] = c, m[14] = u, m[3] = p, m[7] = f, m[11] = E, m[15] = d, this
    }, identity: function () {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    }, copy: function (e) {
        return this.elements.set(e.elements), this
    }, extractPosition: function (e) {
        return this.copyPosition(e)
    }, copyPosition: function (e) {
        var t = this.elements, i = e.elements;
        return t[12] = i[12], t[13] = i[13], t[14] = i[14], this
    }, extractRotation: function () {
        var e = new THREE.Vector3;
        return function (t) {
            var i = this.elements, r = t.elements, o = 1 / e.set(r[0], r[1], r[2]).length(),
                a = 1 / e.set(r[4], r[5], r[6]).length(), n = 1 / e.set(r[8], r[9], r[10]).length();
            return i[0] = r[0] * o, i[1] = r[1] * o, i[2] = r[2] * o, i[4] = r[4] * a, i[5] = r[5] * a, i[6] = r[6] * a, i[8] = r[8] * n, i[9] = r[9] * n, i[10] = r[10] * n, this
        }
    }(), makeRotationFromEuler: function (e) {
        THREE.Euler;
        var t = this.elements, i = e.x, r = e.y, o = e.z, a = Math.cos(i), n = Math.sin(i), s = Math.cos(r),
            h = Math.sin(r), l = Math.cos(o), c = Math.sin(o);
        if ("XYZ" === e.order) {
            var u = a * l, p = a * c, f = n * l, E = n * c;
            t[0] = s * l, t[4] = -s * c, t[8] = h, t[1] = p + f * h, t[5] = u - E * h, t[9] = -n * s, t[2] = E - u * h, t[6] = f + p * h, t[10] = a * s
        } else if ("YXZ" === e.order) {
            var d = s * l, m = s * c, g = h * l, v = h * c;
            t[0] = d + v * n, t[4] = g * n - m, t[8] = a * h, t[1] = a * c, t[5] = a * l, t[9] = -n, t[2] = m * n - g, t[6] = v + d * n, t[10] = a * s
        } else if ("ZXY" === e.order) {
            var d = s * l, m = s * c, g = h * l, v = h * c;
            t[0] = d - v * n, t[4] = -a * c, t[8] = g + m * n, t[1] = m + g * n, t[5] = a * l, t[9] = v - d * n, t[2] = -a * h, t[6] = n, t[10] = a * s
        } else if ("ZYX" === e.order) {
            var u = a * l, p = a * c, f = n * l, E = n * c;
            t[0] = s * l, t[4] = f * h - p, t[8] = u * h + E, t[1] = s * c, t[5] = E * h + u, t[9] = p * h - f, t[2] = -h, t[6] = n * s, t[10] = a * s
        } else if ("YZX" === e.order) {
            var T = a * s, y = a * h, R = n * s, x = n * h;
            t[0] = s * l, t[4] = x - T * c, t[8] = R * c + y, t[1] = c, t[5] = a * l, t[9] = -n * l, t[2] = -h * l, t[6] = y * c + R, t[10] = T - x * c
        } else if ("XZY" === e.order) {
            var T = a * s, y = a * h, R = n * s, x = n * h;
            t[0] = s * l, t[4] = -c, t[8] = h * l, t[1] = T * c + x, t[5] = a * l, t[9] = y * c - R, t[2] = R * c - y, t[6] = n * l, t[10] = x * c + T
        }
        return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
    }, setRotationFromQuaternion: function (e) {
        return this.makeRotationFromQuaternion(e)
    }, makeRotationFromQuaternion: function (e) {
        var t = this.elements, i = e.x, r = e.y, o = e.z, a = e.w, n = i + i, s = r + r, h = o + o, l = i * n,
            c = i * s, u = i * h, p = r * s, f = r * h, E = o * h, d = a * n, m = a * s, g = a * h;
        return t[0] = 1 - (p + E), t[4] = c - g, t[8] = u + m, t[1] = c + g, t[5] = 1 - (l + E), t[9] = f - d, t[2] = u - m, t[6] = f + d, t[10] = 1 - (l + p), t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
    }, lookAt: function () {
        var e = new THREE.Vector3, t = new THREE.Vector3, i = new THREE.Vector3;
        return function (r, o, a) {
            var n = this.elements;
            return i.subVectors(r, o).normalize(), 0 === i.length() && (i.z = 1), e.crossVectors(a, i).normalize(), 0 === e.length() && (i.x += 1e-4, e.crossVectors(a, i).normalize()), t.crossVectors(i, e), n[0] = e.x, n[4] = t.x, n[8] = i.x, n[1] = e.y, n[5] = t.y, n[9] = i.y, n[2] = e.z, n[6] = t.z, n[10] = i.z, this
        }
    }(), multiply: function (e, t) {
        return void 0 !== t ? this.multiplyMatrices(e, t) : this.multiplyMatrices(this, e)
    }, multiplyMatrices: function (e, t) {
        var i = e.elements, r = t.elements, o = this.elements, a = i[0], n = i[4], s = i[8], h = i[12], l = i[1],
            c = i[5], u = i[9], p = i[13], f = i[2], E = i[6], d = i[10], m = i[14], g = i[3], v = i[7], T = i[11],
            y = i[15], R = r[0], x = r[4], H = r[8], _ = r[12], w = r[1], b = r[5], M = r[9], S = r[13], A = r[2],
            C = r[6], L = r[10], P = r[14], D = r[3], F = r[7], V = r[11], U = r[15];
        return o[0] = a * R + n * w + s * A + h * D, o[4] = a * x + n * b + s * C + h * F, o[8] = a * H + n * M + s * L + h * V, o[12] = a * _ + n * S + s * P + h * U, o[1] = l * R + c * w + u * A + p * D, o[5] = l * x + c * b + u * C + p * F, o[9] = l * H + c * M + u * L + p * V, o[13] = l * _ + c * S + u * P + p * U, o[2] = f * R + E * w + d * A + m * D, o[6] = f * x + E * b + d * C + m * F, o[10] = f * H + E * M + d * L + m * V, o[14] = f * _ + E * S + d * P + m * U, o[3] = g * R + v * w + T * A + y * D, o[7] = g * x + v * b + T * C + y * F, o[11] = g * H + v * M + T * L + y * V, o[15] = g * _ + v * S + T * P + y * U, this
    }, multiplyToArray: function (e, t, i) {
        var r = this.elements;
        return this.multiplyMatrices(e, t), i[0] = r[0], i[1] = r[1], i[2] = r[2], i[3] = r[3], i[4] = r[4], i[5] = r[5], i[6] = r[6], i[7] = r[7], i[8] = r[8], i[9] = r[9], i[10] = r[10], i[11] = r[11], i[12] = r[12], i[13] = r[13], i[14] = r[14], i[15] = r[15], this
    }, multiplyScalar: function (e) {
        var t = this.elements;
        return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
    }, multiplyVector3: function (e) {
        return e.applyProjection(this)
    }, multiplyVector4: function (e) {
        return e.applyMatrix4(this)
    }, multiplyVector3Array: function () {
        var e = new THREE.Vector3;
        return function (t) {
            for (var i = 0, r = t.length; i < r; i += 3) e.x = t[i], e.y = t[i + 1], e.z = t[i + 2], e.applyProjection(this), t[i] = e.x, t[i + 1] = e.y, t[i + 2] = e.z;
            return t
        }
    }(), rotateAxis: function (e) {
        e.transformDirection(this)
    }, crossVector: function (e) {
        return e.applyMatrix4(this)
    }, determinant: function () {
        var e = this.elements, t = e[0], i = e[4], r = e[8], o = e[12], a = e[1], n = e[5], s = e[9], h = e[13],
            l = e[2], c = e[6], u = e[10], p = e[14];
        return e[3] * (+o * s * c - r * h * c - o * n * u + i * h * u + r * n * p - i * s * p) + e[7] * (+t * s * p - t * h * u + o * a * u - r * a * p + r * h * l - o * s * l) + e[11] * (+t * h * c - t * n * p - o * a * c + i * a * p + o * n * l - i * h * l) + e[15] * (-r * n * l - t * s * c + t * n * u + r * a * c - i * a * u + i * s * l)
    }, transpose: function () {
        var e, t = this.elements;
        return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
    }, flattenToArray: function (e) {
        var t = this.elements;
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
    }, flattenToArrayOffset: function (e, t) {
        var i = this.elements;
        return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e[t + 9] = i[9], e[t + 10] = i[10], e[t + 11] = i[11], e[t + 12] = i[12], e[t + 13] = i[13], e[t + 14] = i[14], e[t + 15] = i[15], e
    }, getPosition: function () {
        var e = new THREE.Vector3;
        return function () {
            var t = this.elements;
            return e.set(t[12], t[13], t[14])
        }
    }(), setPosition: function (e) {
        var t = this.elements;
        return t[12] = e.x, t[13] = e.y, t[14] = e.z, this
    }, getInverse: function (e, t) {
        var i = this.elements, r = e.elements, o = r[0], a = r[4], n = r[8], s = r[12], h = r[1], l = r[5], c = r[9],
            u = r[13], p = r[2], f = r[6], E = r[10], d = r[14], m = r[3], g = r[7], v = r[11], T = r[15];
        i[0] = c * d * g - u * E * g + u * f * v - l * d * v - c * f * T + l * E * T, i[4] = s * E * g - n * d * g - s * f * v + a * d * v + n * f * T - a * E * T, i[8] = n * u * g - s * c * g + s * l * v - a * u * v - n * l * T + a * c * T, i[12] = s * c * f - n * u * f - s * l * E + a * u * E + n * l * d - a * c * d, i[1] = u * E * m - c * d * m - u * p * v + h * d * v + c * p * T - h * E * T, i[5] = n * d * m - s * E * m + s * p * v - o * d * v - n * p * T + o * E * T, i[9] = s * c * m - n * u * m - s * h * v + o * u * v + n * h * T - o * c * T, i[13] = n * u * p - s * c * p + s * h * E - o * u * E - n * h * d + o * c * d, i[2] = l * d * m - u * f * m + u * p * g - h * d * g - l * p * T + h * f * T, i[6] = s * f * m - a * d * m - s * p * g + o * d * g + a * p * T - o * f * T, i[10] = a * u * m - s * l * m + s * h * g - o * u * g - a * h * T + o * l * T, i[14] = s * l * p - a * u * p - s * h * f + o * u * f + a * h * d - o * l * d, i[3] = c * f * m - l * E * m - c * p * g + h * E * g + l * p * v - h * f * v, i[7] = a * E * m - n * f * m + n * p * g - o * E * g - a * p * v + o * f * v, i[11] = n * l * m - a * c * m - n * h * g + o * c * g + a * h * v - o * l * v, i[15] = a * c * p - n * l * p + n * h * f - o * c * f - a * h * E + o * l * E;
        var y = o * i[0] + h * i[4] + p * i[8] + m * i[12];
        if (0 == y) {
            var R = "Matrix4.getInverse(): can't invert matrix, determinant is 0";
            if (t) throw new Error(R);
            return this.identity(), this
        }
        return this.multiplyScalar(1 / y), this
    }, translate: function (e) {
    }, rotateX: function (e) {
    }, rotateY: function (e) {
    }, rotateZ: function (e) {
    }, rotateByAxis: function (e, t) {
    }, scale: function (e) {
        var t = this.elements, i = e.x, r = e.y, o = e.z;
        return t[0] *= i, t[4] *= r, t[8] *= o, t[1] *= i, t[5] *= r, t[9] *= o, t[2] *= i, t[6] *= r, t[10] *= o, t[3] *= i, t[7] *= r, t[11] *= o, this
    }, getMaxScaleOnAxis: function () {
        var e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
            r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
        return Math.sqrt(Math.max(t, Math.max(i, r)))
    }, makeTranslation: function (e, t, i) {
        return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, i, 0, 0, 0, 1), this
    }, makeRotationX: function (e) {
        var t = Math.cos(e), i = Math.sin(e);
        return this.set(1, 0, 0, 0, 0, t, -i, 0, 0, i, t, 0, 0, 0, 0, 1), this
    }, makeRotationY: function (e) {
        var t = Math.cos(e), i = Math.sin(e);
        return this.set(t, 0, i, 0, 0, 1, 0, 0, -i, 0, t, 0, 0, 0, 0, 1), this
    }, makeRotationZ: function (e) {
        var t = Math.cos(e), i = Math.sin(e);
        return this.set(t, -i, 0, 0, i, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    }, makeRotationAxis: function (e, t) {
        var i = Math.cos(t), r = Math.sin(t), o = 1 - i, a = e.x, n = e.y, s = e.z, h = o * a, l = o * n;
        return this.set(h * a + i, h * n - r * s, h * s + r * n, 0, h * n + r * s, l * n + i, l * s - r * a, 0, h * s - r * n, l * s + r * a, o * s * s + i, 0, 0, 0, 0, 1), this
    }, makeScale: function (e, t, i) {
        return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this
    }, compose: function (e, t, i) {
        return this.makeRotationFromQuaternion(t), this.scale(i), this.setPosition(e), this
    }, decompose: function () {
        var e = new THREE.Vector3, t = new THREE.Matrix4;
        return function (i, r, o) {
            var a = this.elements, n = e.set(a[0], a[1], a[2]).length(), s = e.set(a[4], a[5], a[6]).length(),
                h = e.set(a[8], a[9], a[10]).length();
            i.x = a[12], i.y = a[13], i.z = a[14], t.elements.set(this.elements);
            var l = 1 / n, c = 1 / s, u = 1 / h;
            return t.elements[0] *= l, t.elements[1] *= l, t.elements[2] *= l, t.elements[4] *= c, t.elements[5] *= c, t.elements[6] *= c, t.elements[8] *= u, t.elements[9] *= u, t.elements[10] *= u, r.setFromRotationMatrix(t), o.x = n, o.y = s, o.z = h, this
        }
    }(), makeFrustum: function (e, t, i, r, o, a) {
        var n = this.elements, s = 2 * o / (t - e), h = 2 * o / (r - i), l = (t + e) / (t - e), c = (r + i) / (r - i),
            u = -(a + o) / (a - o), p = -2 * a * o / (a - o);
        return n[0] = s, n[4] = 0, n[8] = l, n[12] = 0, n[1] = 0, n[5] = h, n[9] = c, n[13] = 0, n[2] = 0, n[6] = 0, n[10] = u, n[14] = p, n[3] = 0, n[7] = 0, n[11] = -1, n[15] = 0, this
    }, makePerspective: function (e, t, i, r) {
        var o = i * Math.tan(THREE.Math.degToRad(.5 * e)), a = -o, n = a * t, s = o * t;
        return this.makeFrustum(n, s, a, o, i, r)
    }, makeOrthographic: function (e, t, i, r, o, a) {
        var n = this.elements, s = t - e, h = i - r, l = a - o, c = (t + e) / s, u = (i + r) / h, p = (a + o) / l;
        return n[0] = 2 / s, n[4] = 0, n[8] = 0, n[12] = -c, n[1] = 0, n[5] = 2 / h, n[9] = 0, n[13] = -u, n[2] = 0, n[6] = 0, n[10] = -2 / l, n[14] = -p, n[3] = 0, n[7] = 0, n[11] = 0, n[15] = 1, this
    }, fromArray: function (e) {
        return this.elements.set(e), this
    }, toArray: function () {
        var e = this.elements;
        return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]]
    }, clone: function () {
        var e = this.elements;
        return new THREE.Matrix4(e[0], e[4], e[8], e[12], e[1], e[5], e[9], e[13], e[2], e[6], e[10], e[14], e[3], e[7], e[11], e[15])
    }
},THREE.Ray = function (e, t) {
    this.origin = void 0 !== e ? e : new THREE.Vector3, this.direction = void 0 !== t ? t : new THREE.Vector3
},THREE.Ray.prototype = {
    constructor: THREE.Ray, set: function (e, t) {
        return this.origin.copy(e), this.direction.copy(t), this
    }, copy: function (e) {
        return this.origin.copy(e.origin), this.direction.copy(e.direction), this
    }, at: function (e, t) {
        return (t || new THREE.Vector3).copy(this.direction).multiplyScalar(e).add(this.origin)
    }, recast: function () {
        var e = new THREE.Vector3;
        return function (t) {
            return this.origin.copy(this.at(t, e)), this
        }
    }(), closestPointToPoint: function (e, t) {
        var i = t || new THREE.Vector3;
        i.subVectors(e, this.origin);
        var r = i.dot(this.direction);
        return r < 0 ? i.copy(this.origin) : i.copy(this.direction).multiplyScalar(r).add(this.origin)
    }, distanceToPoint: function () {
        var e = new THREE.Vector3;
        return function (t) {
            var i = e.subVectors(t, this.origin).dot(this.direction);
            return i < 0 ? this.origin.distanceTo(t) : (e.copy(this.direction).multiplyScalar(i).add(this.origin), e.distanceTo(t))
        }
    }(), distanceSqToSegment: function (e, t, i, r) {
        var o, a, n, s, h = e.clone().add(t).multiplyScalar(.5), l = t.clone().sub(e).normalize(),
            c = .5 * e.distanceTo(t), u = this.origin.clone().sub(h), p = -this.direction.dot(l),
            f = u.dot(this.direction), E = -u.dot(l), d = u.lengthSq(), m = Math.abs(1 - p * p);
        if (m >= 0) if (o = p * E - f, a = p * f - E, s = c * m, o >= 0) if (a >= -s) if (a <= s) {
            var g = 1 / m;
            o *= g, a *= g, n = o * (o + p * a + 2 * f) + a * (p * o + a + 2 * E) + d
        } else a = c, o = Math.max(0, -(p * a + f)), n = -o * o + a * (a + 2 * E) + d; else a = -c, o = Math.max(0, -(p * a + f)), n = -o * o + a * (a + 2 * E) + d; else a <= -s ? (o = Math.max(0, -(-p * c + f)), a = o > 0 ? -c : Math.min(Math.max(-c, -E), c), n = -o * o + a * (a + 2 * E) + d) : a <= s ? (o = 0, a = Math.min(Math.max(-c, -E), c), n = a * (a + 2 * E) + d) : (o = Math.max(0, -(p * c + f)), a = o > 0 ? c : Math.min(Math.max(-c, -E), c), n = -o * o + a * (a + 2 * E) + d); else a = p > 0 ? -c : c, o = Math.max(0, -(p * a + f)), n = -o * o + a * (a + 2 * E) + d;
        return i && i.copy(this.direction.clone().multiplyScalar(o).add(this.origin)), r && r.copy(l.clone().multiplyScalar(a).add(h)), n
    }, isIntersectionSphere: function (e) {
        return this.distanceToPoint(e.center) <= e.radius
    }, isIntersectionPlane: function (e) {
        var t = e.distanceToPoint(this.origin);
        return 0 === t || e.normal.dot(this.direction) * t < 0
    }, distanceToPlane: function (e) {
        var t = e.normal.dot(this.direction);
        if (0 == t) return 0 == e.distanceToPoint(this.origin) ? 0 : null;
        var i = -(this.origin.dot(e.normal) + e.constant) / t;
        return i >= 0 ? i : null
    }, intersectPlane: function (e, t) {
        var i = this.distanceToPlane(e);
        return null === i ? null : this.at(i, t)
    }, isIntersectionBox: function () {
        var e = new THREE.Vector3;
        return function (t) {
            return null !== this.intersectBox(t, e)
        }
    }(), intersectBox: function (e, t) {
        var i, r, o, a, n, s, h = 1 / this.direction.x, l = 1 / this.direction.y, c = 1 / this.direction.z,
            u = this.origin;
        return h >= 0 ? (i = (e.min.x - u.x) * h, r = (e.max.x - u.x) * h) : (i = (e.max.x - u.x) * h, r = (e.min.x - u.x) * h), l >= 0 ? (o = (e.min.y - u.y) * l, a = (e.max.y - u.y) * l) : (o = (e.max.y - u.y) * l, a = (e.min.y - u.y) * l), i > a || o > r ? null : ((o > i || i !== i) && (i = o), (a < r || r !== r) && (r = a), c >= 0 ? (n = (e.min.z - u.z) * c, s = (e.max.z - u.z) * c) : (n = (e.max.z - u.z) * c, s = (e.min.z - u.z) * c), i > s || n > r ? null : ((n > i || i !== i) && (i = n), (s < r || r !== r) && (r = s), r < 0 ? null : this.at(i >= 0 ? i : r, t)))
    }, intersectTriangle: function () {
        var e = new THREE.Vector3, t = new THREE.Vector3, i = new THREE.Vector3, r = new THREE.Vector3;
        return function (o, a, n, s, h) {
            t.subVectors(a, o), i.subVectors(n, o), r.crossVectors(t, i);
            var l, c = this.direction.dot(r);
            if (c > 0) {
                if (s) return null;
                l = 1
            } else {
                if (!(c < 0)) return null;
                l = -1, c = -c
            }
            e.subVectors(this.origin, o);
            var u = l * this.direction.dot(i.crossVectors(e, i));
            if (u < 0) return null;
            var p = l * this.direction.dot(t.cross(e));
            if (p < 0) return null;
            if (u + p > c) return null;
            var f = -l * e.dot(r);
            return f < 0 ? null : this.at(f / c, h)
        }
    }(), applyMatrix4: function (e) {
        return this.direction.add(this.origin).applyMatrix4(e), this.origin.applyMatrix4(e), this.direction.sub(this.origin), this.direction.normalize(), this
    }, equals: function (e) {
        return e.origin.equals(this.origin) && e.direction.equals(this.direction)
    }, clone: function () {
        return (new THREE.Ray).copy(this)
    }
},THREE.Sphere = function (e, t) {
    this.center = void 0 !== e ? e : new THREE.Vector3, this.radius = void 0 !== t ? t : 0
},THREE.Sphere.prototype = {
    constructor: THREE.Sphere, set: function (e, t) {
        return this.center.copy(e), this.radius = t, this
    }, setFromPoints: function () {
        var e = new THREE.Box3;
        return function (t, i) {
            var r = this.center;
            void 0 !== i ? r.copy(i) : e.setFromPoints(t).center(r);
            for (var o = 0, a = 0, n = t.length; a < n; a++) o = Math.max(o, r.distanceToSquared(t[a]));
            return this.radius = Math.sqrt(o), this
        }
    }(), copy: function (e) {
        return this.center.copy(e.center), this.radius = e.radius, this
    }, empty: function () {
        return this.radius <= 0
    }, containsPoint: function (e) {
        return e.distanceToSquared(this.center) <= this.radius * this.radius
    }, distanceToPoint: function (e) {
        return e.distanceTo(this.center) - this.radius
    }, intersectsSphere: function (e) {
        var t = this.radius + e.radius;
        return e.center.distanceToSquared(this.center) <= t * t
    }, clampPoint: function (e, t) {
        var i = this.center.distanceToSquared(e), r = t || new THREE.Vector3;
        return r.copy(e), i > this.radius * this.radius && (r.sub(this.center).normalize(), r.multiplyScalar(this.radius).add(this.center)), r
    }, getBoundingBox: function (e) {
        var t = e || new THREE.Box3;
        return t.set(this.center, this.center), t.expandByScalar(this.radius), t
    }, applyMatrix4: function (e) {
        return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this
    }, translate: function (e) {
        return this.center.add(e), this
    }, equals: function (e) {
        return e.center.equals(this.center) && e.radius === this.radius
    }, clone: function () {
        return (new THREE.Sphere).copy(this)
    }
},THREE.Frustum = function (e, t, i, r, o, a) {
    this.planes = [void 0 !== e ? e : new THREE.Plane, void 0 !== t ? t : new THREE.Plane, void 0 !== i ? i : new THREE.Plane, void 0 !== r ? r : new THREE.Plane, void 0 !== o ? o : new THREE.Plane, void 0 !== a ? a : new THREE.Plane]
},THREE.Frustum.prototype = {
    constructor: THREE.Frustum, set: function (e, t, i, r, o, a) {
        var n = this.planes;
        return n[0].copy(e), n[1].copy(t), n[2].copy(i), n[3].copy(r), n[4].copy(o), n[5].copy(a), this
    }, copy: function (e) {
        for (var t = this.planes, i = 0; i < 6; i++) t[i].copy(e.planes[i]);
        return this
    }, setFromMatrix: function (e) {
        var t = this.planes, i = e.elements, r = i[0], o = i[1], a = i[2], n = i[3], s = i[4], h = i[5], l = i[6],
            c = i[7], u = i[8], p = i[9], f = i[10], E = i[11], d = i[12], m = i[13], g = i[14], v = i[15];
        return t[0].setComponents(n - r, c - s, E - u, v - d).normalize(), t[1].setComponents(n + r, c + s, E + u, v + d).normalize(), t[2].setComponents(n + o, c + h, E + p, v + m).normalize(), t[3].setComponents(n - o, c - h, E - p, v - m).normalize(), t[4].setComponents(n - a, c - l, E - f, v - g).normalize(), t[5].setComponents(n + a, c + l, E + f, v + g).normalize(), this
    }, intersectsObject: function () {
        var e = new THREE.Sphere;
        return function (t) {
            var i = t.geometry;
            return null === i.boundingSphere && i.computeBoundingSphere(), e.copy(i.boundingSphere), e.applyMatrix4(t.matrixWorld), this.intersectsSphere(e)
        }
    }(), intersectsSphere: function (e) {
        for (var t = this.planes, i = e.center, r = -e.radius, o = 0; o < 6; o++) {
            if (t[o].distanceToPoint(i) < r) return !1
        }
        return !0
    }, intersectsBox: function () {
        var e = new THREE.Vector3, t = new THREE.Vector3;
        return function (i) {
            for (var r = this.planes, o = 0; o < 6; o++) {
                var a = r[o];
                e.x = a.normal.x > 0 ? i.min.x : i.max.x, t.x = a.normal.x > 0 ? i.max.x : i.min.x, e.y = a.normal.y > 0 ? i.min.y : i.max.y, t.y = a.normal.y > 0 ? i.max.y : i.min.y, e.z = a.normal.z > 0 ? i.min.z : i.max.z, t.z = a.normal.z > 0 ? i.max.z : i.min.z;
                var n = a.distanceToPoint(e), s = a.distanceToPoint(t);
                if (n < 0 && s < 0) return !1
            }
            return !0
        }
    }(), containsPoint: function (e) {
        for (var t = this.planes, i = 0; i < 6; i++) if (t[i].distanceToPoint(e) < 0) return !1;
        return !0
    }, clone: function () {
        return (new THREE.Frustum).copy(this)
    }
},THREE.Plane = function (e, t) {
    this.normal = void 0 !== e ? e : new THREE.Vector3(1, 0, 0), this.constant = void 0 !== t ? t : 0
},THREE.Plane.prototype = {
    constructor: THREE.Plane, set: function (e, t) {
        return this.normal.copy(e), this.constant = t, this
    }, setComponents: function (e, t, i, r) {
        return this.normal.set(e, t, i), this.constant = r, this
    }, setFromNormalAndCoplanarPoint: function (e, t) {
        return this.normal.copy(e), this.constant = -t.dot(this.normal), this
    }, setFromCoplanarPoints: function () {
        var e = new THREE.Vector3, t = new THREE.Vector3;
        return function (i, r, o) {
            var a = e.subVectors(o, r).cross(t.subVectors(i, r)).normalize();
            return this.setFromNormalAndCoplanarPoint(a, i), this
        }
    }(), copy: function (e) {
        return this.normal.copy(e.normal), this.constant = e.constant, this
    }, normalize: function () {
        var e = 1 / this.normal.length();
        return this.normal.multiplyScalar(e), this.constant *= e, this
    }, negate: function () {
        return this.constant *= -1, this.normal.negate(), this
    }, distanceToPoint: function (e) {
        return this.normal.dot(e) + this.constant
    }, distanceToSphere: function (e) {
        return this.distanceToPoint(e.center) - e.radius
    }, projectPoint: function (e, t) {
        return this.orthoPoint(e, t).sub(e).negate()
    }, orthoPoint: function (e, t) {
        var i = this.distanceToPoint(e);
        return (t || new THREE.Vector3).copy(this.normal).multiplyScalar(i)
    }, isIntersectionLine: function (e) {
        var t = this.distanceToPoint(e.start), i = this.distanceToPoint(e.end);
        return t < 0 && i > 0 || i < 0 && t > 0
    }, intersectLine: function () {
        var e = new THREE.Vector3;
        return function (t, i) {
            var r = i || new THREE.Vector3, o = t.delta(e), a = this.normal.dot(o);
            if (0 != a) {
                var n = -(t.start.dot(this.normal) + this.constant) / a;
                if (!(n < 0 || n > 1)) return r.copy(o).multiplyScalar(n).add(t.start)
            } else if (0 == this.distanceToPoint(t.start)) return r.copy(t.start)
        }
    }(), coplanarPoint: function (e) {
        return (e || new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)
    }, applyMatrix4: function () {
        var e = new THREE.Vector3, t = new THREE.Vector3;
        return function (i, r) {
            r = r || (new THREE.Matrix3).getNormalMatrix(i);
            var o = e.copy(this.normal).applyMatrix3(r), a = this.coplanarPoint(t);
            return a.applyMatrix4(i), this.setFromNormalAndCoplanarPoint(o, a), this
        }
    }(), translate: function (e) {
        return this.constant = this.constant - e.dot(this.normal), this
    }, equals: function (e) {
        return e.normal.equals(this.normal) && e.constant == this.constant
    }, clone: function () {
        return (new THREE.Plane).copy(this)
    }
},THREE.Math = {
    PI2: 2 * Math.PI, generateUUID: function () {
        var e, t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), i = new Array(36), r = 0;
        return function () {
            for (var o = 0; o < 36; o++) 8 == o || 13 == o || 18 == o || 23 == o ? i[o] = "-" : 14 == o ? i[o] = "4" : (r <= 2 && (r = 33554432 + 16777216 * Math.random() | 0), e = 15 & r, r >>= 4, i[o] = t[19 == o ? 3 & e | 8 : e]);
            return i.join("")
        }
    }(), clamp: function (e, t, i) {
        return e < t ? t : e > i ? i : e
    }, clampBottom: function (e, t) {
        return e < t ? t : e
    }, mapLinear: function (e, t, i, r, o) {
        return r + (e - t) * (o - r) / (i - t)
    }, smoothstep: function (e, t, i) {
        return e <= t ? 0 : e >= i ? 1 : (e = (e - t) / (i - t)) * e * (3 - 2 * e)
    }, smootherstep: function (e, t, i) {
        return e <= t ? 0 : e >= i ? 1 : (e = (e - t) / (i - t)) * e * e * (e * (6 * e - 15) + 10)
    }, random16: function () {
        return (65280 * Math.random() + 255 * Math.random()) / 65535
    }, randInt: function (e, t) {
        return e + Math.floor(Math.random() * (t - e + 1))
    }, randFloat: function (e, t) {
        return e + Math.random() * (t - e)
    }, randFloatSpread: function (e) {
        return e * (.5 - Math.random())
    }, sign: function (e) {
        return e < 0 ? -1 : e > 0 ? 1 : 0
    }, degToRad: function () {
        var e = Math.PI / 180;
        return function (t) {
            return t * e
        }
    }(), radToDeg: function () {
        var e = 180 / Math.PI;
        return function (t) {
            return t * e
        }
    }()
},THREE.Spline = function (e) {
    function t(e, t, i, r, o, a, n) {
        var s = .5 * (i - e), h = .5 * (r - t);
        return (2 * (t - i) + s + h) * n + (-3 * (t - i) - 2 * s - h) * a + s * o + t
    }

    this.points = e;
    var i, r, o, a, n, s, h, l, c, u = [], p = {x: 0, y: 0, z: 0};
    this.initFromArray = function (e) {
        this.points = [];
        for (var t = 0; t < e.length; t++) this.points[t] = {x: e[t][0], y: e[t][1], z: e[t][2]}
    }, this.getPoint = function (e) {
        return i = (this.points.length - 1) * e, r = Math.floor(i), o = i - r, u[0] = 0 === r ? r : r - 1, u[1] = r, u[2] = r > this.points.length - 2 ? this.points.length - 1 : r + 1, u[3] = r > this.points.length - 3 ? this.points.length - 1 : r + 2, s = this.points[u[0]], h = this.points[u[1]], l = this.points[u[2]], c = this.points[u[3]], a = o * o, n = o * a, p.x = t(s.x, h.x, l.x, c.x, o, a, n), p.y = t(s.y, h.y, l.y, c.y, o, a, n), p.z = t(s.z, h.z, l.z, c.z, o, a, n), p
    }, this.getControlPointsArray = function () {
        var e, t, i = this.points.length, r = [];
        for (e = 0; e < i; e++) t = this.points[e], r[e] = [t.x, t.y, t.z];
        return r
    }, this.getLength = function (e) {
        var t, i, r, o, a = 0, n = 0, s = 0, h = new THREE.Vector3, l = new THREE.Vector3, c = [], u = 0;
        for (c[0] = 0, e || (e = 100), r = this.points.length * e, h.copy(this.points[0]), t = 1; t < r; t++) i = t / r, o = this.getPoint(i), l.copy(o), u += l.distanceTo(h), h.copy(o), a = (this.points.length - 1) * i, (n = Math.floor(a)) != s && (c[n] = u, s = n);
        return c[c.length] = u, {chunks: c, total: u}
    }, this.reparametrizeByArcLength = function (e) {
        var t, i, r, o, a, n, s, h, l = [], c = new THREE.Vector3, u = this.getLength();
        for (l.push(c.copy(this.points[0]).clone()), t = 1; t < this.points.length; t++) {
            for (n = u.chunks[t] - u.chunks[t - 1], s = Math.ceil(e * n / u.total), o = (t - 1) / (this.points.length - 1), a = t / (this.points.length - 1), i = 1; i < s - 1; i++) r = o + i * (1 / s) * (a - o), h = this.getPoint(r), l.push(c.copy(h).clone());
            l.push(c.copy(this.points[t]).clone())
        }
        this.points = l
    }
},THREE.Triangle = function (e, t, i) {
    this.a = void 0 !== e ? e : new THREE.Vector3, this.b = void 0 !== t ? t : new THREE.Vector3, this.c = void 0 !== i ? i : new THREE.Vector3
},THREE.Triangle.normal = function () {
    var e = new THREE.Vector3;
    return function (t, i, r, o) {
        var a = o || new THREE.Vector3;
        a.subVectors(r, i), e.subVectors(t, i), a.cross(e);
        var n = a.lengthSq();
        return n > 0 ? a.multiplyScalar(1 / Math.sqrt(n)) : a.set(0, 0, 0)
    }
}(),THREE.Triangle.barycoordFromPoint = function () {
    var e = new THREE.Vector3, t = new THREE.Vector3, i = new THREE.Vector3;
    return function (r, o, a, n, s) {
        e.subVectors(n, o), t.subVectors(a, o), i.subVectors(r, o);
        var h = e.dot(e), l = e.dot(t), c = e.dot(i), u = t.dot(t), p = t.dot(i), f = h * u - l * l,
            E = s || new THREE.Vector3;
        if (0 == f) return E.set(-2, -1, -1);
        var d = 1 / f, m = (u * c - l * p) * d, g = (h * p - l * c) * d;
        return E.set(1 - m - g, g, m)
    }
}(),THREE.Triangle.containsPoint = function () {
    var e = new THREE.Vector3;
    return function (t, i, r, o) {
        var a = THREE.Triangle.barycoordFromPoint(t, i, r, o, e);
        return a.x >= 0 && a.y >= 0 && a.x + a.y <= 1
    }
}(),THREE.Triangle.prototype = {
    constructor: THREE.Triangle, set: function (e, t, i) {
        return this.a.copy(e), this.b.copy(t), this.c.copy(i), this
    }, setFromPointsAndIndices: function (e, t, i, r) {
        return this.a.copy(e[t]), this.b.copy(e[i]), this.c.copy(e[r]), this
    }, copy: function (e) {
        return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
    }, area: function () {
        var e = new THREE.Vector3, t = new THREE.Vector3;
        return function () {
            return e.subVectors(this.c, this.b), t.subVectors(this.a, this.b), .5 * e.cross(t).length()
        }
    }(), midpoint: function (e) {
        return (e || new THREE.Vector3).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    }, normal: function (e) {
        return THREE.Triangle.normal(this.a, this.b, this.c, e)
    }, plane: function (e) {
        return (e || new THREE.Plane).setFromCoplanarPoints(this.a, this.b, this.c)
    }, barycoordFromPoint: function (e, t) {
        return THREE.Triangle.barycoordFromPoint(e, this.a, this.b, this.c, t)
    }, containsPoint: function (e) {
        return THREE.Triangle.containsPoint(e, this.a, this.b, this.c)
    }, equals: function (e) {
        return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
    }, clone: function () {
        return (new THREE.Triangle).copy(this)
    }
},THREE.Vertex = function (e) {
    return e
},THREE.UV = function (e, t) {
    return new THREE.Vector2(e, t)
},THREE.Clock = function (e) {
    this.autoStart = void 0 === e || e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
},THREE.Clock.prototype = {
    constructor: THREE.Clock, start: function () {
        this.startTime = void 0 !== self.performance && void 0 !== self.performance.now ? self.performance.now() : Date.now(), this.oldTime = this.startTime, this.running = !0
    }, stop: function () {
        this.getElapsedTime(), this.running = !1
    }, getElapsedTime: function () {
        return this.getDelta(), this.elapsedTime
    }, getDelta: function () {
        var e = 0;
        if (this.autoStart && !this.running && this.start(), this.running) {
            var t = void 0 !== self.performance && void 0 !== self.performance.now ? self.performance.now() : Date.now();
            e = .001 * (t - this.oldTime), this.oldTime = t, this.elapsedTime += e
        }
        return e
    }
},THREE.EventDispatcher = function () {
},THREE.EventDispatcher.prototype = {
    constructor: THREE.EventDispatcher, apply: function (e) {
        e.addEventListener = THREE.EventDispatcher.prototype.addEventListener, e.hasEventListener = THREE.EventDispatcher.prototype.hasEventListener, e.removeEventListener = THREE.EventDispatcher.prototype.removeEventListener, e.dispatchEvent = THREE.EventDispatcher.prototype.dispatchEvent
    }, addEventListener: function (e, t) {
        void 0 === this._listeners && (this._listeners = {});
        var i = this._listeners;
        void 0 === i[e] && (i[e] = []), i[e].indexOf(t) === -1 && i[e].push(t)
    }, hasEventListener: function (e, t) {
        if (void 0 === this._listeners) return !1;
        var i = this._listeners;
        return void 0 !== i[e] && i[e].indexOf(t) !== -1
    }, removeEventListener: function (e, t) {
        if (void 0 !== this._listeners) {
            var i = this._listeners, r = i[e].indexOf(t);
            r !== -1 && i[e].splice(r, 1)
        }
    }, dispatchEvent: function () {
        var e = [];
        return function (t) {
            if (void 0 !== this._listeners) {
                var i = this._listeners, r = i[t.type];
                if (void 0 !== r) {
                    t.target = this;
                    for (var o = r.length, a = 0; a < o; a++) e[a] = r[a];
                    for (var a = 0; a < o; a++) e[a].call(this, t)
                }
            }
        }
    }()
},function (e) {
    e.Raycaster = function (t, i, r, o) {
        this.ray = new e.Ray(t, i), this.near = r || 0, this.far = o || 1 / 0
    };
    var t = new e.Sphere, i = new e.Ray, r = (new e.Plane, new e.Vector3, new e.Vector3), o = new e.Matrix4,
        a = function (e, t) {
            return e.distance - t.distance
        }, n = new e.Vector3, s = new e.Vector3, h = new e.Vector3, l = function (a, c, u) {
            if (a instanceof e.Sprite) {
                r.getPositionFromMatrix(a.matrixWorld);
                var p = c.ray.distanceToPoint(r);
                if (p > a.scale.x) return u;
                u.push({distance: p, point: a.position, face: null, object: a})
            } else if (a instanceof e.LOD) {
                r.getPositionFromMatrix(a.matrixWorld);
                var p = c.ray.origin.distanceTo(r);
                l(a.getObjectForDistance(p), c, u)
            } else if (a instanceof e.Mesh) {
                var f = a.geometry;
                if (null === f.boundingSphere && f.computeBoundingSphere(), t.copy(f.boundingSphere), t.applyMatrix4(a.matrixWorld), c.ray.isIntersectionSphere(t) === !1) return u;
                if (o.getInverse(a.matrixWorld), i.copy(c.ray).applyMatrix4(o), null !== f.boundingBox && i.isIntersectionBox(f.boundingBox) === !1) return u;
                if (f instanceof e.BufferGeometry) {
                    var E = a.material;
                    if (void 0 === E) return u;
                    if (f.dynamic === !1) return u;
                    var d, m, g, v = c.precision;
                    if (void 0 !== f.attributes.index) for (var T = f.offsets, y = f.attributes.index.array, R = f.attributes.position.array, x = f.offsets.length, H = f.attributes.index.array.length / 3, _ = 0; _ < x; ++_) for (var w = T[_].start, b = T[_].count, M = T[_].index, S = w, A = w + b; S < A; S += 3) {
                        if (d = M + y[S], m = M + y[S + 1], g = M + y[S + 2], n.set(R[3 * d], R[3 * d + 1], R[3 * d + 2]), s.set(R[3 * m], R[3 * m + 1], R[3 * m + 2]), h.set(R[3 * g], R[3 * g + 1], R[3 * g + 2]), E.side === e.BackSide) var C = i.intersectTriangle(h, s, n, !0); else var C = i.intersectTriangle(n, s, h, E.side !== e.DoubleSide);
                        if (null !== C) {
                            C.applyMatrix4(a.matrixWorld);
                            var p = c.ray.origin.distanceTo(C);
                            p < v || p < c.near || p > c.far || u.push({
                                distance: p,
                                point: C,
                                face: null,
                                faceIndex: null,
                                object: a
                            })
                        }
                    } else for (var T = f.offsets, R = f.attributes.position.array, x = f.offsets.length, H = f.attributes.position.array.length, S = 0; S < H; S += 3) {
                        if (d = S, m = S + 1, g = S + 2, n.set(R[3 * d], R[3 * d + 1], R[3 * d + 2]), s.set(R[3 * m], R[3 * m + 1], R[3 * m + 2]), h.set(R[3 * g], R[3 * g + 1], R[3 * g + 2]), E.side === e.BackSide) var C = i.intersectTriangle(h, s, n, !0); else var C = i.intersectTriangle(n, s, h, E.side !== e.DoubleSide);
                        if (null !== C) {
                            C.applyMatrix4(a.matrixWorld);
                            var p = c.ray.origin.distanceTo(C);
                            p < v || p < c.near || p > c.far || u.push({
                                distance: p,
                                point: C,
                                face: null,
                                faceIndex: null,
                                object: a
                            })
                        }
                    }
                } else if (f instanceof e.Geometry) for (var d, m, g, L = a.material instanceof e.MeshFaceMaterial, P = L === !0 ? a.material.materials : null, v = c.precision, D = f.vertices, F = 0, H = f.faces.length; F < H; F++) {
                    var V = f.faces[F], E = L === !0 ? P[V.materialIndex] : a.material;
                    if (void 0 !== E) {
                        if (d = D[V.a], m = D[V.b], g = D[V.c], E.side === e.BackSide) var C = i.intersectTriangle(g, m, d, !0); else var C = i.intersectTriangle(d, m, g, E.side !== e.DoubleSide);
                        if (null !== C) {
                            C.applyMatrix4(a.matrixWorld);
                            var p = c.ray.origin.distanceTo(C);
                            p < v || p < c.near || p > c.far || u.push({
                                distance: p,
                                point: C,
                                face: V,
                                faceIndex: F,
                                object: a
                            })
                        }
                    }
                }
            } else if (a instanceof e.Line) {
                var v = c.linePrecision, U = v * v, f = a.geometry;
                if (null === f.boundingSphere && f.computeBoundingSphere(), t.copy(f.boundingSphere), t.applyMatrix4(a.matrixWorld), c.ray.isIntersectionSphere(t) === !1) return u;
                if (o.getInverse(a.matrixWorld), i.copy(c.ray).applyMatrix4(o), f instanceof e.Geometry) for (var D = f.vertices, z = D.length, B = new e.Vector3, N = new e.Vector3, O = a.type === e.LineStrip ? 1 : 2, S = 0; S < z - 1; S += O) {
                    var I = i.distanceSqToSegment(D[S], D[S + 1], N, B);
                    if (!(I > U)) {
                        var p = i.origin.distanceTo(N);
                        p < c.near || p > c.far || u.push({
                            distance: p,
                            point: B.clone().applyMatrix4(a.matrixWorld),
                            face: null,
                            faceIndex: null,
                            object: a
                        })
                    }
                }
            }
        }, c = function (e, t, i) {
            for (var r = e.getDescendants(), o = 0, a = r.length; o < a; o++) l(r[o], t, i)
        };
    e.Raycaster.prototype.precision = 1e-4, e.Raycaster.prototype.linePrecision = 1, e.Raycaster.prototype.set = function (e, t) {
        this.ray.set(e, t)
    }, e.Raycaster.prototype.intersectObject = function (e, t) {
        var i = [];
        return t === !0 && c(e, this, i), l(e, this, i), i.sort(a), i
    }, e.Raycaster.prototype.intersectObjects = function (e, t) {
        for (var i = [], r = 0, o = e.length; r < o; r++) l(e[r], this, i), t === !0 && c(e[r], this, i);
        return i.sort(a), i
    }
}(THREE),THREE.Object3D = function () {
    this.id = THREE.Object3DIdCount++, this.uuid = THREE.Math.generateUUID(), this.name = "", this.parent = void 0, this.children = [], this.up = new THREE.Vector3(0, 1, 0), this.position = new THREE.Vector3, this._rotation = new THREE.Euler, this._quaternion = new THREE.Quaternion, this.scale = new THREE.Vector3(1, 1, 1), this._rotation._quaternion = this.quaternion, this._quaternion._euler = this.rotation, this.renderDepth = null, this.rotationAutoUpdate = !0, this.matrix = new THREE.Matrix4, this.matrixWorld = new THREE.Matrix4, this.matrixAutoUpdate = !0, this.matrixWorldNeedsUpdate = !0, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.userData = {}
},THREE.Object3D.prototype = {
    constructor: THREE.Object3D, get rotation() {
        return this._rotation
    }, set rotation(e) {
        this._rotation = e, this._rotation._quaternion = this._quaternion, this._quaternion._euler = this._rotation, this._rotation._updateQuaternion()
    }, get quaternion() {
        return this._quaternion
    }, set quaternion(e) {
        this._quaternion = e, this._quaternion._euler = this._rotation, this._rotation._quaternion = this._quaternion, this._quaternion._updateEuler()
    }, get eulerOrder() {
        return this.rotation.order
    }, set eulerOrder(e) {
        this.rotation.order = e
    }, get useQuaternion() {
    }, set useQuaternion(e) {
    }, applyMatrix: function () {
        var e = new THREE.Matrix4;
        return function (t) {
            this.matrix.multiplyMatrices(t, this.matrix), this.position.getPositionFromMatrix(this.matrix), this.scale.getScaleFromMatrix(this.matrix), e.extractRotation(this.matrix), this.quaternion.setFromRotationMatrix(e)
        }
    }(), setRotationFromAxisAngle: function (e, t) {
        this.quaternion.setFromAxisAngle(e, t)
    }, setRotationFromEuler: function (e) {
        this.quaternion.setFromEuler(e, !0)
    }, setRotationFromMatrix: function (e) {
        this.quaternion.setFromRotationMatrix(e)
    }, setRotationFromQuaternion: function (e) {
        this.quaternion.copy(e)
    }, rotateOnAxis: function () {
        var e = new THREE.Quaternion;
        return function (t, i) {
            return e.setFromAxisAngle(t, i), this.quaternion.multiply(e), this
        }
    }(), rotateX: function () {
        var e = new THREE.Vector3(1, 0, 0);
        return function (t) {
            return this.rotateOnAxis(e, t)
        }
    }(), rotateY: function () {
        var e = new THREE.Vector3(0, 1, 0);
        return function (t) {
            return this.rotateOnAxis(e, t)
        }
    }(), rotateZ: function () {
        var e = new THREE.Vector3(0, 0, 1);
        return function (t) {
            return this.rotateOnAxis(e, t)
        }
    }(), translateOnAxis: function () {
        var e = new THREE.Vector3;
        return function (t, i) {
            return e.copy(t), e.applyQuaternion(this.quaternion), this.position.add(e.multiplyScalar(i)), this
        }
    }(), translate: function (e, t) {
        return this.translateOnAxis(t, e)
    }, translateX: function () {
        var e = new THREE.Vector3(1, 0, 0);
        return function (t) {
            return this.translateOnAxis(e, t)
        }
    }(), translateY: function () {
        var e = new THREE.Vector3(0, 1, 0);
        return function (t) {
            return this.translateOnAxis(e, t)
        }
    }(), translateZ: function () {
        var e = new THREE.Vector3(0, 0, 1);
        return function (t) {
            return this.translateOnAxis(e, t)
        }
    }(), localToWorld: function (e) {
        return e.applyMatrix4(this.matrixWorld)
    }, worldToLocal: function () {
        var e = new THREE.Matrix4;
        return function (t) {
            return t.applyMatrix4(e.getInverse(this.matrixWorld))
        }
    }(), lookAt: function () {
        var e = new THREE.Matrix4;
        return function (t) {
            e.lookAt(t, this.position, this.up), this.quaternion.setFromRotationMatrix(e)
        }
    }(), add: function (e) {
        if (e !== this && e instanceof THREE.Object3D) {
            void 0 !== e.parent && e.parent.remove(e), e.parent = this, e.dispatchEvent({type: "added"}), this.children.push(e);
            for (var t = this; void 0 !== t.parent;) t = t.parent;
            void 0 !== t && t instanceof THREE.Scene && t.__addObject(e)
        }
    }, remove: function (e) {
        var t = this.children.indexOf(e);
        if (t !== -1) {
            e.parent = void 0, e.dispatchEvent({type: "removed"}), this.children.splice(t, 1);
            for (var i = this; void 0 !== i.parent;) i = i.parent;
            void 0 !== i && i instanceof THREE.Scene && i.__removeObject(e)
        }
    }, traverse: function (e) {
        e(this);
        for (var t = 0, i = this.children.length; t < i; t++) this.children[t].traverse(e)
    }, getObjectById: function (e, t) {
        for (var i = 0, r = this.children.length; i < r; i++) {
            var o = this.children[i];
            if (o.id === e) return o;
            if (t === !0 && void 0 !== (o = o.getObjectById(e, t))) return o
        }
    }, getObjectByName: function (e, t) {
        for (var i = 0, r = this.children.length; i < r; i++) {
            var o = this.children[i];
            if (o.name === e) return o;
            if (t === !0 && void 0 !== (o = o.getObjectByName(e, t))) return o
        }
    }, getChildByName: function (e, t) {
        return this.getObjectByName(e, t)
    }, getDescendants: function (e) {
        void 0 === e && (e = []), Array.prototype.push.apply(e, this.children);
        for (var t = 0, i = this.children.length; t < i; t++) this.children[t].getDescendants(e);
        return e
    }, updateMatrix: function () {
        this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
    }, updateMatrixWorld: function (e) {
        this.matrixAutoUpdate === !0 && this.updateMatrix(), this.matrixWorldNeedsUpdate !== !0 && e !== !0 || (void 0 === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
        for (var t = 0, i = this.children.length; t < i; t++) this.children[t].updateMatrixWorld(e)
    }, clone: function (e, t) {
        if (void 0 === e && (e = new THREE.Object3D), void 0 === t && (t = !0), e.name = this.name, e.up.copy(this.up), e.position.copy(this.position), e.quaternion.copy(this.quaternion), e.scale.copy(this.scale), e.renderDepth = this.renderDepth, e.rotationAutoUpdate = this.rotationAutoUpdate, e.matrix.copy(this.matrix), e.matrixWorld.copy(this.matrixWorld), e.matrixAutoUpdate = this.matrixAutoUpdate, e.matrixWorldNeedsUpdate = this.matrixWorldNeedsUpdate, e.visible = this.visible, e.castShadow = this.castShadow, e.receiveShadow = this.receiveShadow, e.frustumCulled = this.frustumCulled, e.userData = JSON.parse(JSON.stringify(this.userData)), t === !0) for (var i = 0; i < this.children.length; i++) {
            var r = this.children[i];
            e.add(r.clone())
        }
        return e
    }
},THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype),THREE.Object3DIdCount = 0,THREE.Projector = function () {
    function e() {
        if (h === T) {
            var e = new THREE.RenderableObject;
            return v.push(e), T++, h++, e
        }
        return v[h++]
    }

    function t() {
        if (c === R) {
            var e = new THREE.RenderableVertex;
            return y.push(e), R++, c++, e
        }
        return y[c++]
    }

    function i() {
        if (p === H) {
            var e = new THREE.RenderableFace3;
            return x.push(e), H++, p++, e
        }
        return x[p++]
    }

    function r() {
        if (E === w) {
            var e = new THREE.RenderableLine;
            return _.push(e), w++, E++, e
        }
        return _[E++]
    }

    function o() {
        if (m === M) {
            var e = new THREE.RenderableSprite;
            return b.push(e), M++, m++, e
        }
        return b[m++]
    }

    function a(e, t) {
        return e.z !== t.z ? t.z - e.z : e.id !== t.id ? e.id - t.id : 0
    }

    function n(e, t) {
        var i = 0, r = 1, o = e.z + e.w, a = t.z + t.w, n = -e.z + e.w, s = -t.z + t.w;
        return o >= 0 && a >= 0 && n >= 0 && s >= 0 || !(o < 0 && a < 0 || n < 0 && s < 0) && (o < 0 ? i = Math.max(i, o / (o - a)) : a < 0 && (r = Math.min(r, o / (o - a))), n < 0 ? i = Math.max(i, n / (n - s)) : s < 0 && (r = Math.min(r, n / (n - s))), !(r < i) && (e.lerp(t, i), t.lerp(e, 1 - r), !0))
    }

    var s, h, l, c, u, p, f, E, d, m, g, v = [], T = 0, y = [], R = 0, x = [], H = 0, _ = [], w = 0, b = [], M = 0,
        S = {objects: [], sprites: [], lights: [], elements: []}, A = new THREE.Vector3, C = new THREE.Vector4,
        L = new THREE.Box3(new THREE.Vector3(-1, -1, -1), new THREE.Vector3(1, 1, 1)), P = new THREE.Box3,
        D = new Array(3), F = (new Array(4), new THREE.Matrix4), V = new THREE.Matrix4, U = new THREE.Matrix4,
        z = new THREE.Matrix3, B = new THREE.Matrix3, N = new THREE.Vector3, O = new THREE.Frustum,
        I = new THREE.Vector4, k = new THREE.Vector4;
    this.projectVector = function (e, t) {
        return t.matrixWorldInverse.getInverse(t.matrixWorld), V.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), e.applyProjection(V)
    }, this.unprojectVector = function (e, t) {
        return t.projectionMatrixInverse.getInverse(t.projectionMatrix), V.multiplyMatrices(t.matrixWorld, t.projectionMatrixInverse), e.applyProjection(V)
    }, this.pickingRay = function (e, t) {
        e.z = -1;
        var i = new THREE.Vector3(e.x, e.y, 1);
        return this.unprojectVector(e, t), this.unprojectVector(i, t), i.sub(e).normalize(), new THREE.Raycaster(e, i)
    };
    var G = function (t) {
        return s = e(), s.id = t.id, s.object = t, null !== t.renderDepth ? s.z = t.renderDepth : (A.getPositionFromMatrix(t.matrixWorld), A.applyProjection(V), s.z = A.z), s
    }, W = function (e) {
        if (e.visible !== !1) {
            e instanceof THREE.Light ? S.lights.push(e) : e instanceof THREE.Mesh || e instanceof THREE.Line ? e.frustumCulled !== !1 && O.intersectsObject(e) !== !0 || S.objects.push(G(e)) : e instanceof THREE.Sprite && S.sprites.push(G(e));
            for (var t = 0, i = e.children.length; t < i; t++) W(e.children[t])
        }
    }, j = function (e, t) {
        h = 0, S.objects.length = 0, S.sprites.length = 0, S.lights.length = 0, W(e), t === !0 && S.objects.sort(a)
    };
    this.projectScene = function (e, s, h, v) {
        var T, R, x, H, _, w, b, M, A, G, W, X, q, Y, K, Z, Q, J, $, ee, te, ie, re, oe, ae, ne = !1;
        for (p = 0, E = 0, m = 0, S.elements.length = 0, e.autoUpdate === !0 && e.updateMatrixWorld(), void 0 === s.parent && s.updateMatrixWorld(), F.copy(s.matrixWorldInverse.getInverse(s.matrixWorld)), V.multiplyMatrices(s.projectionMatrix, F), B.getNormalMatrix(F), O.setFromMatrix(V), j(e, h), T = 0, R = S.objects.length; T < R; T++) if (q = S.objects[T].object, g = q.matrixWorld, c = 0, q instanceof THREE.Mesh) {
            for (Y = q.geometry, K = Y.vertices, Z = Y.faces, $ = Y.faceVertexUvs, z.getNormalMatrix(g), oe = q.material instanceof THREE.MeshFaceMaterial, ae = oe === !0 ? q.material : null, x = 0, H = K.length; x < H; x++) {
                l = t(), l.positionWorld.copy(K[x]).applyMatrix4(g), l.positionScreen.copy(l.positionWorld).applyMatrix4(V);
                var se = 1 / l.positionScreen.w;
                l.positionScreen.x *= se, l.positionScreen.y *= se, l.positionScreen.z *= se, l.visible = !(l.positionScreen.x < -1 || l.positionScreen.x > 1 || l.positionScreen.y < -1 || l.positionScreen.y > 1 || l.positionScreen.z < -1 || l.positionScreen.z > 1)
            }
            for (_ = 0, w = Z.length; _ < w; _++) {
                Q = Z[_];
                var he = oe === !0 ? ae.materials[Q.materialIndex] : q.material;
                if (void 0 !== he) {
                    var le = he.side;
                    if (te = y[Q.a], ie = y[Q.b], re = y[Q.c], D[0] = te.positionScreen, D[1] = ie.positionScreen, D[2] = re.positionScreen, (te.visible === !0 || ie.visible === !0 || re.visible === !0 || L.isIntersectionBox(P.setFromPoints(D))) && (ne = (re.positionScreen.x - te.positionScreen.x) * (ie.positionScreen.y - te.positionScreen.y) - (re.positionScreen.y - te.positionScreen.y) * (ie.positionScreen.x - te.positionScreen.x) < 0, le === THREE.DoubleSide || ne === (le === THREE.FrontSide))) {
                        for (u = i(), u.id = q.id, u.v1.copy(te), u.v2.copy(ie), u.v3.copy(re), u.normalModel.copy(Q.normal), ne !== !1 || le !== THREE.BackSide && le !== THREE.DoubleSide || u.normalModel.negate(), u.normalModel.applyMatrix3(z).normalize(), u.normalModelView.copy(u.normalModel).applyMatrix3(B), u.centroidModel.copy(Q.centroid).applyMatrix4(g), J = Q.vertexNormals, b = 0, M = Math.min(J.length, 3); b < M; b++) {
                            var ce = u.vertexNormalsModel[b];
                            ce.copy(J[b]), ne !== !1 || le !== THREE.BackSide && le !== THREE.DoubleSide || ce.negate(), ce.applyMatrix3(z).normalize();
                            var ue = u.vertexNormalsModelView[b];
                            ue.copy(ce).applyMatrix3(B)
                        }
                        for (u.vertexNormalsLength = J.length, A = 0, G = Math.min($.length, 3); A < G; A++) if (void 0 !== (ee = $[A][_])) for (W = 0, X = ee.length; W < X; W++) u.uvs[A][W] = ee[W];
                        u.color = Q.color, u.material = he, N.copy(u.centroidModel).applyProjection(V), u.z = N.z, S.elements.push(u)
                    }
                }
            }
        } else if (q instanceof THREE.Line) {
            U.multiplyMatrices(V, g), K = q.geometry.vertices, te = t(), te.positionScreen.copy(K[0]).applyMatrix4(U);
            var pe = q.type === THREE.LinePieces ? 2 : 1;
            for (x = 1, H = K.length; x < H; x++) te = t(), te.positionScreen.copy(K[x]).applyMatrix4(U), (x + 1) % pe > 0 || (ie = y[c - 2], I.copy(te.positionScreen), k.copy(ie.positionScreen), n(I, k) === !0 && (I.multiplyScalar(1 / I.w), k.multiplyScalar(1 / k.w), f = r(), f.id = q.id, f.v1.positionScreen.copy(I), f.v2.positionScreen.copy(k), f.z = Math.max(I.z, k.z), f.material = q.material, q.material.vertexColors === THREE.VertexColors && (f.vertexColors[0].copy(q.geometry.colors[x]), f.vertexColors[1].copy(q.geometry.colors[x - 1])), S.elements.push(f)))
        }
        for (T = 0, R = S.sprites.length; T < R; T++) if (q = S.sprites[T].object, g = q.matrixWorld, q instanceof THREE.Sprite) {
            C.set(g.elements[12], g.elements[13], g.elements[14], 1), C.applyMatrix4(V);
            var se = 1 / C.w;
            C.z *= se, C.z > -1 && C.z < 1 && (d = o(), d.id = q.id, d.x = C.x * se, d.y = C.y * se, d.z = C.z, d.object = q, d.rotation = q.rotation, d.scale.x = q.scale.x * Math.abs(d.x - (C.x + s.projectionMatrix.elements[0]) / (C.w + s.projectionMatrix.elements[12])), d.scale.y = q.scale.y * Math.abs(d.y - (C.y + s.projectionMatrix.elements[5]) / (C.w + s.projectionMatrix.elements[13])), d.material = q.material, S.elements.push(d))
        }
        return v === !0 && S.elements.sort(a), S
    }
},THREE.Face3 = function (e, t, i, r, o, a) {
    this.a = e, this.b = t, this.c = i, this.normal = r instanceof THREE.Vector3 ? r : new THREE.Vector3, this.vertexNormals = r instanceof Array ? r : [], this.color = o instanceof THREE.Color ? o : new THREE.Color, this.vertexColors = o instanceof Array ? o : [], this.vertexTangents = [], this.materialIndex = void 0 !== a ? a : 0, this.centroid = new THREE.Vector3
},THREE.Face3.prototype = {
    constructor: THREE.Face3, clone: function () {
        var e = new THREE.Face3(this.a, this.b, this.c);
        e.normal.copy(this.normal), e.color.copy(this.color), e.centroid.copy(this.centroid), e.materialIndex = this.materialIndex;
        var t, i;
        for (t = 0, i = this.vertexNormals.length; t < i; t++) e.vertexNormals[t] = this.vertexNormals[t].clone();
        for (t = 0, i = this.vertexColors.length; t < i; t++) e.vertexColors[t] = this.vertexColors[t].clone();
        for (t = 0, i = this.vertexTangents.length; t < i; t++) e.vertexTangents[t] = this.vertexTangents[t].clone();
        return e
    }
},THREE.Face4 = function (e, t, i, r, o, a, n) {
    return new THREE.Face3(e, t, i, o, a, n)
},THREE.Geometry = function () {
    this.id = THREE.GeometryIdCount++, this.uuid = THREE.Math.generateUUID(), this.name = "", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphColors = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.hasTangents = !1, this.dynamic = !0, this.verticesNeedUpdate = !1, this.elementsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.tangentsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.buffersNeedUpdate = !1
},THREE.Geometry.prototype = {
    constructor: THREE.Geometry, applyMatrix: function (e) {
        for (var t = (new THREE.Matrix3).getNormalMatrix(e), i = 0, r = this.vertices.length; i < r; i++) {
            this.vertices[i].applyMatrix4(e)
        }
        for (var i = 0, r = this.faces.length; i < r; i++) {
            var o = this.faces[i];
            o.normal.applyMatrix3(t).normalize();
            for (var a = 0, n = o.vertexNormals.length; a < n; a++) o.vertexNormals[a].applyMatrix3(t).normalize();
            o.centroid.applyMatrix4(e)
        }
        this.boundingBox instanceof THREE.Box3 && this.computeBoundingBox(), this.boundingSphere instanceof THREE.Sphere && this.computeBoundingSphere()
    }, computeCentroids: function () {
        var e, t, i;
        for (e = 0, t = this.faces.length; e < t; e++) i = this.faces[e], i.centroid.set(0, 0, 0), i.centroid.add(this.vertices[i.a]), i.centroid.add(this.vertices[i.b]), i.centroid.add(this.vertices[i.c]), i.centroid.divideScalar(3)
    }, computeFaceNormals: function () {
        for (var e = new THREE.Vector3, t = new THREE.Vector3, i = 0, r = this.faces.length; i < r; i++) {
            var o = this.faces[i], a = this.vertices[o.a], n = this.vertices[o.b], s = this.vertices[o.c];
            e.subVectors(s, n), t.subVectors(a, n), e.cross(t), e.normalize(), o.normal.copy(e)
        }
    }, computeVertexNormals: function (e) {
        var t, i, r, o, a, n;
        if (void 0 === this.__tmpVertices) {
            for (this.__tmpVertices = new Array(this.vertices.length), n = this.__tmpVertices, t = 0, i = this.vertices.length; t < i; t++) n[t] = new THREE.Vector3;
            for (r = 0, o = this.faces.length; r < o; r++) a = this.faces[r], a.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3]
        } else for (n = this.__tmpVertices, t = 0, i = this.vertices.length; t < i; t++) n[t].set(0, 0, 0);
        if (e) {
            var s, h, l, c = new THREE.Vector3, u = new THREE.Vector3;
            new THREE.Vector3, new THREE.Vector3, new THREE.Vector3;
            for (r = 0, o = this.faces.length; r < o; r++) a = this.faces[r], s = this.vertices[a.a], h = this.vertices[a.b], l = this.vertices[a.c], c.subVectors(l, h), u.subVectors(s, h), c.cross(u), n[a.a].add(c), n[a.b].add(c), n[a.c].add(c)
        } else for (r = 0, o = this.faces.length; r < o; r++) a = this.faces[r], n[a.a].add(a.normal), n[a.b].add(a.normal), n[a.c].add(a.normal);
        for (t = 0, i = this.vertices.length; t < i; t++) n[t].normalize();
        for (r = 0, o = this.faces.length; r < o; r++) a = this.faces[r], a.vertexNormals[0].copy(n[a.a]), a.vertexNormals[1].copy(n[a.b]), a.vertexNormals[2].copy(n[a.c])
    }, computeMorphNormals: function () {
        var e, t, i, r, o;
        for (i = 0, r = this.faces.length; i < r; i++) for (o = this.faces[i], o.__originalFaceNormal ? o.__originalFaceNormal.copy(o.normal) : o.__originalFaceNormal = o.normal.clone(), o.__originalVertexNormals || (o.__originalVertexNormals = []), e = 0, t = o.vertexNormals.length; e < t; e++) o.__originalVertexNormals[e] ? o.__originalVertexNormals[e].copy(o.vertexNormals[e]) : o.__originalVertexNormals[e] = o.vertexNormals[e].clone();
        var a = new THREE.Geometry;
        for (a.faces = this.faces, e = 0, t = this.morphTargets.length; e < t; e++) {
            if (!this.morphNormals[e]) {
                this.morphNormals[e] = {}, this.morphNormals[e].faceNormals = [], this.morphNormals[e].vertexNormals = [];
                var n, s, h = this.morphNormals[e].faceNormals, l = this.morphNormals[e].vertexNormals;
                for (i = 0, r = this.faces.length; i < r; i++) o = this.faces[i], n = new THREE.Vector3, s = {
                    a: new THREE.Vector3,
                    b: new THREE.Vector3,
                    c: new THREE.Vector3
                }, h.push(n), l.push(s)
            }
            var c = this.morphNormals[e];
            a.vertices = this.morphTargets[e].vertices, a.computeFaceNormals(), a.computeVertexNormals();
            var n, s;
            for (i = 0, r = this.faces.length; i < r; i++) o = this.faces[i], n = c.faceNormals[i], s = c.vertexNormals[i], n.copy(o.normal), s.a.copy(o.vertexNormals[0]), s.b.copy(o.vertexNormals[1]), s.c.copy(o.vertexNormals[2])
        }
        for (i = 0, r = this.faces.length; i < r; i++) o = this.faces[i], o.normal = o.__originalFaceNormal, o.vertexNormals = o.__originalVertexNormals
    }, computeTangents: function () {
        var e, t, i, r, o, a, n, s, h, l, c, u, p, f, E, d, m, g, v, T, y, R, x, H, _, w, b, M, S = [], A = [],
            C = new THREE.Vector3, L = new THREE.Vector3, P = new THREE.Vector3, D = new THREE.Vector3,
            F = new THREE.Vector3;
        for (i = 0, r = this.vertices.length; i < r; i++) S[i] = new THREE.Vector3, A[i] = new THREE.Vector3;
        for (e = 0, t = this.faces.length; e < t; e++) n = this.faces[e], s = this.faceVertexUvs[0][e], function (e, t, i, r, o, a, n) {
            h = e.vertices[t], l = e.vertices[i], c = e.vertices[r], u = s[o], p = s[a], f = s[n], E = l.x - h.x, d = c.x - h.x, m = l.y - h.y, g = c.y - h.y, v = l.z - h.z, T = c.z - h.z, y = p.x - u.x, R = f.x - u.x, x = p.y - u.y, H = f.y - u.y, _ = 1 / (y * H - R * x), C.set((H * E - x * d) * _, (H * m - x * g) * _, (H * v - x * T) * _), L.set((y * d - R * E) * _, (y * g - R * m) * _, (y * T - R * v) * _), S[t].add(C), S[i].add(C), S[r].add(C), A[t].add(L), A[i].add(L), A[r].add(L)
        }(this, n.a, n.b, n.c, 0, 1, 2);
        var V = ["a", "b", "c", "d"];
        for (e = 0, t = this.faces.length; e < t; e++) for (n = this.faces[e], o = 0; o < Math.min(n.vertexNormals.length, 3); o++) F.copy(n.vertexNormals[o]), a = n[V[o]], w = S[a], P.copy(w), P.sub(F.multiplyScalar(F.dot(w))).normalize(), D.crossVectors(n.vertexNormals[o], w), b = D.dot(A[a]), M = b < 0 ? -1 : 1, n.vertexTangents[o] = new THREE.Vector4(P.x, P.y, P.z, M);
        this.hasTangents = !0
    }, computeLineDistances: function () {
        for (var e = 0, t = this.vertices, i = 0, r = t.length; i < r; i++) i > 0 && (e += t[i].distanceTo(t[i - 1])), this.lineDistances[i] = e
    }, computeBoundingBox: function () {
        null === this.boundingBox && (this.boundingBox = new THREE.Box3), this.boundingBox.setFromPoints(this.vertices)
    }, computeBoundingSphere: function () {
        null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere), this.boundingSphere.setFromPoints(this.vertices)
    }, mergeVertices: function () {
        var e, t, i, r, o, a, n, s, h = {}, l = [], c = [], u = Math.pow(10, 4);
        for (this.__tmpVertices = void 0, i = 0, r = this.vertices.length; i < r; i++) e = this.vertices[i], t = Math.round(e.x * u) + "_" + Math.round(e.y * u) + "_" + Math.round(e.z * u), void 0 === h[t] ? (h[t] = i, l.push(this.vertices[i]), c[i] = l.length - 1) : c[i] = c[h[t]];
        var p = [];
        for (i = 0, r = this.faces.length; i < r; i++) {
            o = this.faces[i], o.a = c[o.a], o.b = c[o.b], o.c = c[o.c], a = [o.a, o.b, o.c];
            for (var f = 0; f < 3; f++) if (a[f] == a[(f + 1) % 3]) {
                f, p.push(i);
                break
            }
        }
        for (i = p.length - 1; i >= 0; i--) {
            var E = p[i];
            for (this.faces.splice(E, 1), n = 0, s = this.faceVertexUvs.length; n < s; n++) this.faceVertexUvs[n].splice(E, 1)
        }
        var d = this.vertices.length - l.length;
        return this.vertices = l, d
    }, clone: function () {
        for (var e = new THREE.Geometry, t = this.vertices, i = 0, r = t.length; i < r; i++) e.vertices.push(t[i].clone());
        for (var o = this.faces, i = 0, r = o.length; i < r; i++) e.faces.push(o[i].clone());
        for (var a = this.faceVertexUvs[0], i = 0, r = a.length; i < r; i++) {
            for (var n = a[i], s = [], h = 0, l = n.length; h < l; h++) s.push(new THREE.Vector2(n[h].x, n[h].y));
            e.faceVertexUvs[0].push(s)
        }
        return e
    }, dispose: function () {
        this.dispatchEvent({type: "dispose"})
    }
},THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype),THREE.GeometryIdCount = 0,THREE.BufferGeometry = function () {
    this.id = THREE.GeometryIdCount++, this.uuid = THREE.Math.generateUUID(), this.name = "", this.attributes = {}, this.dynamic = !0, this.offsets = [], this.boundingBox = null, this.boundingSphere = null, this.hasTangents = !1, this.morphTargets = []
},THREE.BufferGeometry.prototype = {
    constructor: THREE.BufferGeometry, addAttribute: function (e, t, i, r) {
        this.attributes[e] = {itemSize: r, array: new t(i * r)}
    }, applyMatrix: function (e) {
        var t, i;
        if (this.attributes.position && (t = this.attributes.position.array), this.attributes.normal && (i = this.attributes.normal.array), void 0 !== t && (e.multiplyVector3Array(t), this.verticesNeedUpdate = !0), void 0 !== i) {
            (new THREE.Matrix3).getNormalMatrix(e).multiplyVector3Array(i), this.normalizeNormals(), this.normalsNeedUpdate = !0
        }
    }, computeBoundingBox: function () {
        null === this.boundingBox && (this.boundingBox = new THREE.Box3);
        var e = this.attributes.position.array;
        if (e) {
            var t, i, r, o = this.boundingBox;
            e.length >= 3 && (o.min.x = o.max.x = e[0], o.min.y = o.max.y = e[1], o.min.z = o.max.z = e[2]);
            for (var a = 3, n = e.length; a < n; a += 3) t = e[a], i = e[a + 1], r = e[a + 2], t < o.min.x ? o.min.x = t : t > o.max.x && (o.max.x = t), i < o.min.y ? o.min.y = i : i > o.max.y && (o.max.y = i), r < o.min.z ? o.min.z = r : r > o.max.z && (o.max.z = r)
        }
        void 0 !== e && 0 !== e.length || (this.boundingBox.min.set(0, 0, 0), this.boundingBox.max.set(0, 0, 0))
    }, computeBoundingSphere: function () {
        var e = new THREE.Box3, t = new THREE.Vector3;
        return function () {
            null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
            var i = this.attributes.position.array;
            if (i) {
                for (var r = this.boundingSphere.center, o = 0, a = i.length; o < a; o += 3) t.set(i[o], i[o + 1], i[o + 2]), e.addPoint(t);
                e.center(r);
                for (var n = 0, o = 0, a = i.length; o < a; o += 3) t.set(i[o], i[o + 1], i[o + 2]), n = Math.max(n, r.distanceToSquared(t));
                this.boundingSphere.radius = Math.sqrt(n)
            }
        }
    }(), computeVertexNormals: function () {
        if (this.attributes.position) {
            var e, t, i, r, o = this.attributes.position.array.length;
            if (void 0 === this.attributes.normal) this.attributes.normal = {
                itemSize: 3,
                array: new Float32Array(o)
            }; else for (e = 0, t = this.attributes.normal.array.length; e < t; e++) this.attributes.normal.array[e] = 0;
            var a, n, s, h, l, c, u = this.attributes.position.array, p = this.attributes.normal.array,
                f = new THREE.Vector3, E = new THREE.Vector3, d = new THREE.Vector3, m = new THREE.Vector3,
                g = new THREE.Vector3;
            if (this.attributes.index) {
                var v = this.attributes.index.array, T = this.offsets;
                for (i = 0, r = T.length; i < r; ++i) {
                    var y = T[i].start, R = T[i].count, x = T[i].index;
                    for (e = y, t = y + R; e < t; e += 3) a = x + v[e], n = x + v[e + 1], s = x + v[e + 2], h = u[3 * a], l = u[3 * a + 1], c = u[3 * a + 2], f.set(h, l, c), h = u[3 * n], l = u[3 * n + 1], c = u[3 * n + 2], E.set(h, l, c), h = u[3 * s], l = u[3 * s + 1], c = u[3 * s + 2], d.set(h, l, c), m.subVectors(d, E), g.subVectors(f, E), m.cross(g), p[3 * a] += m.x, p[3 * a + 1] += m.y, p[3 * a + 2] += m.z, p[3 * n] += m.x, p[3 * n + 1] += m.y, p[3 * n + 2] += m.z, p[3 * s] += m.x, p[3 * s + 1] += m.y, p[3 * s + 2] += m.z
                }
            } else for (e = 0, t = u.length; e < t; e += 9) h = u[e], l = u[e + 1], c = u[e + 2], f.set(h, l, c), h = u[e + 3], l = u[e + 4], c = u[e + 5], E.set(h, l, c), h = u[e + 6], l = u[e + 7], c = u[e + 8], d.set(h, l, c), m.subVectors(d, E), g.subVectors(f, E), m.cross(g), p[e] = m.x, p[e + 1] = m.y, p[e + 2] = m.z, p[e + 3] = m.x, p[e + 4] = m.y, p[e + 5] = m.z, p[e + 6] = m.x, p[e + 7] = m.y, p[e + 8] = m.z;
            this.normalizeNormals(), this.normalsNeedUpdate = !0
        }
    }, normalizeNormals: function () {
        for (var e, t, i, r, o = this.attributes.normal.array, a = 0, n = o.length; a < n; a += 3) e = o[a], t = o[a + 1], i = o[a + 2], r = 1 / Math.sqrt(e * e + t * t + i * i), o[a] *= r, o[a + 1] *= r, o[a + 2] *= r
    }, computeTangents: function () {
        function e(e) {
            te.x = r[3 * e], te.y = r[3 * e + 1], te.z = r[3 * e + 2], ie.copy(te), Q = h[e], $.copy(Q), $.sub(te.multiplyScalar(te.dot(Q))).normalize(), ee.crossVectors(ie, Q), J = ee.dot(l[e]), Z = J < 0 ? -1 : 1, s[4 * e] = $.x, s[4 * e + 1] = $.y, s[4 * e + 2] = $.z, s[4 * e + 3] = Z
        }

        if (void 0 !== this.attributes.index && void 0 !== this.attributes.position && void 0 !== this.attributes.normal && void 0 !== this.attributes.uv) {
            var t = this.attributes.index.array, i = this.attributes.position.array, r = this.attributes.normal.array,
                o = this.attributes.uv.array, a = i.length / 3;
            if (void 0 === this.attributes.tangent) {
                var n = 4 * a;
                this.attributes.tangent = {itemSize: 4, array: new Float32Array(n)}
            }
            for (var s = this.attributes.tangent.array, h = [], l = [], c = 0; c < a; c++) h[c] = new THREE.Vector3, l[c] = new THREE.Vector3;
            var u, p, f, E, d, m, g, v, T, y, R, x, H, _, w, b, M, S, A, C, L, P, D, F, V, U, z, B, N, O, I, k, G,
                W = new THREE.Vector3, j = new THREE.Vector3, X = this.offsets;
            for (N = 0, O = X.length; N < O; ++N) {
                var q = X[N].start, Y = X[N].count, K = X[N].index;
                for (z = q, B = q + Y; z < B; z += 3) I = K + t[z], k = K + t[z + 1], G = K + t[z + 2], function (e, t, r) {
                    u = i[3 * e], p = i[3 * e + 1], f = i[3 * e + 2], E = i[3 * t], d = i[3 * t + 1], m = i[3 * t + 2], g = i[3 * r], v = i[3 * r + 1], T = i[3 * r + 2], y = o[2 * e], R = o[2 * e + 1], x = o[2 * t], H = o[2 * t + 1], _ = o[2 * r], w = o[2 * r + 1], b = E - u, M = g - u, S = d - p, A = v - p, C = m - f, L = T - f, P = x - y, D = _ - y, F = H - R, V = w - R, U = 1 / (P * V - D * F), W.set((V * b - F * M) * U, (V * S - F * A) * U, (V * C - F * L) * U), j.set((P * M - D * b) * U, (P * A - D * S) * U, (P * L - D * C) * U), h[e].add(W), h[t].add(W), h[r].add(W), l[e].add(j), l[t].add(j), l[r].add(j)
                }(I, k, G)
            }
            var Z, Q, J, $ = new THREE.Vector3, ee = new THREE.Vector3, te = new THREE.Vector3, ie = new THREE.Vector3;
            for (N = 0, O = X.length; N < O; ++N) {
                var q = X[N].start, Y = X[N].count, K = X[N].index;
                for (z = q, B = q + Y; z < B; z += 3) I = K + t[z], k = K + t[z + 1], G = K + t[z + 2], e(I), e(k), e(G)
            }
            this.hasTangents = !0, this.tangentsNeedUpdate = !0
        }
    }, clone: function () {
        var e = new THREE.BufferGeometry,
            t = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
        for (var i in this.attributes) {
            for (var r = this.attributes[i], o = r.array, a = {
                itemSize: r.itemSize,
                numItems: r.numItems,
                array: null
            }, n = 0, s = t.length; n < s; n++) {
                var h = t[n];
                if (o instanceof h) {
                    a.array = new h(o);
                    break
                }
            }
            e.attributes[i] = a
        }
        for (var n = 0, s = this.offsets.length; n < s; n++) {
            var l = this.offsets[n];
            e.offsets.push({start: l.start, index: l.index, count: l.count})
        }
        return e
    }, dispose: function () {
        this.dispatchEvent({type: "dispose"})
    }
},THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype),THREE.Camera = function () {
    THREE.Object3D.call(this), this.matrixWorldInverse = new THREE.Matrix4, this.projectionMatrix = new THREE.Matrix4, this.projectionMatrixInverse = new THREE.Matrix4
},THREE.Camera.prototype = Object.create(THREE.Object3D.prototype),THREE.Camera.prototype.lookAt = function () {
    var e = new THREE.Matrix4;
    return function (t) {
        e.lookAt(this.position, t, this.up), this.quaternion.setFromRotationMatrix(e)
    }
}(),THREE.Camera.prototype.clone = function (e) {
    return void 0 === e && (e = new THREE.Camera), THREE.Object3D.prototype.clone.call(this, e), e.matrixWorldInverse.copy(this.matrixWorldInverse), e.projectionMatrix.copy(this.projectionMatrix), e.projectionMatrixInverse.copy(this.projectionMatrixInverse), e
},THREE.OrthographicCamera = function (e, t, i, r, o, a) {
    THREE.Camera.call(this), this.left = e, this.right = t, this.top = i, this.bottom = r, this.near = void 0 !== o ? o : .1, this.far = void 0 !== a ? a : 2e3, this.updateProjectionMatrix()
},THREE.OrthographicCamera.prototype = Object.create(THREE.Camera.prototype),THREE.OrthographicCamera.prototype.updateProjectionMatrix = function () {
    this.projectionMatrix.makeOrthographic(this.left, this.right, this.top, this.bottom, this.near, this.far)
},THREE.OrthographicCamera.prototype.clone = function () {
    var e = new THREE.OrthographicCamera;
    return THREE.Camera.prototype.clone.call(this, e), e.left = this.left, e.right = this.right, e.top = this.top, e.bottom = this.bottom, e.near = this.near, e.far = this.far, e
},THREE.PerspectiveCamera = function (e, t, i, r) {
    THREE.Camera.call(this), this.fov = void 0 !== e ? e : 50, this.aspect = void 0 !== t ? t : 1, this.near = void 0 !== i ? i : .1, this.far = void 0 !== r ? r : 2e3, this.updateProjectionMatrix()
},THREE.PerspectiveCamera.prototype = Object.create(THREE.Camera.prototype),THREE.PerspectiveCamera.prototype.setLens = function (e, t) {
    void 0 === t && (t = 24), this.fov = 2 * THREE.Math.radToDeg(Math.atan(t / (2 * e))), this.updateProjectionMatrix()
},THREE.PerspectiveCamera.prototype.setViewOffset = function (e, t, i, r, o, a) {
    this.fullWidth = e, this.fullHeight = t, this.x = i, this.y = r, this.width = o, this.height = a, this.updateProjectionMatrix()
},THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function () {
    if (this.fullWidth) {
        var e = this.fullWidth / this.fullHeight, t = Math.tan(THREE.Math.degToRad(.5 * this.fov)) * this.near, i = -t,
            r = e * i, o = e * t, a = Math.abs(o - r), n = Math.abs(t - i);
        this.projectionMatrix.makeFrustum(r + this.x * a / this.fullWidth, r + (this.x + this.width) * a / this.fullWidth, t - (this.y + this.height) * n / this.fullHeight, t - this.y * n / this.fullHeight, this.near, this.far)
    } else this.projectionMatrix.makePerspective(this.fov, this.aspect, this.near, this.far)
},THREE.PerspectiveCamera.prototype.clone = function () {
    var e = new THREE.PerspectiveCamera;
    return THREE.Camera.prototype.clone.call(this, e), e.fov = this.fov, e.aspect = this.aspect, e.near = this.near, e.far = this.far, e
},THREE.Light = function (e) {
    THREE.Object3D.call(this), this.color = new THREE.Color(e)
},THREE.Light.prototype = Object.create(THREE.Object3D.prototype),THREE.Light.prototype.clone = function (e) {
    return void 0 === e && (e = new THREE.Light), THREE.Object3D.prototype.clone.call(this, e), e.color.copy(this.color), e
},THREE.AmbientLight = function (e) {
    THREE.Light.call(this, e)
},THREE.AmbientLight.prototype = Object.create(THREE.Light.prototype),THREE.AmbientLight.prototype.clone = function () {
    var e = new THREE.AmbientLight;
    return THREE.Light.prototype.clone.call(this, e), e
},THREE.AreaLight = function (e, t) {
    THREE.Light.call(this, e), this.normal = new THREE.Vector3(0, -1, 0), this.right = new THREE.Vector3(1, 0, 0), this.intensity = void 0 !== t ? t : 1, this.width = 1, this.height = 1, this.constantAttenuation = 1.5, this.linearAttenuation = .5, this.quadraticAttenuation = .1
},THREE.AreaLight.prototype = Object.create(THREE.Light.prototype),THREE.DirectionalLight = function (e, t) {
    THREE.Light.call(this, e), this.position.set(0, 1, 0), this.target = new THREE.Object3D, this.intensity = void 0 !== t ? t : 1, this.castShadow = !1, this.onlyShadow = !1, this.shadowCameraNear = 50, this.shadowCameraFar = 5e3, this.shadowCameraLeft = -500, this.shadowCameraRight = 500, this.shadowCameraTop = 500, this.shadowCameraBottom = -500, this.shadowCameraVisible = !1, this.shadowBias = 0, this.shadowDarkness = .5, this.shadowMapWidth = 512, this.shadowMapHeight = 512, this.shadowCascade = !1, this.shadowCascadeOffset = new THREE.Vector3(0, 0, -1e3), this.shadowCascadeCount = 2, this.shadowCascadeBias = [0, 0, 0], this.shadowCascadeWidth = [512, 512, 512], this.shadowCascadeHeight = [512, 512, 512], this.shadowCascadeNearZ = [-1, .99, .998], this.shadowCascadeFarZ = [.99, .998, 1], this.shadowCascadeArray = [], this.shadowMap = null, this.shadowMapSize = null, this.shadowCamera = null, this.shadowMatrix = null
},THREE.DirectionalLight.prototype = Object.create(THREE.Light.prototype),THREE.DirectionalLight.prototype.clone = function () {
    var e = new THREE.DirectionalLight;
    return THREE.Light.prototype.clone.call(this, e), e.target = this.target.clone(), e.intensity = this.intensity, e.castShadow = this.castShadow, e.onlyShadow = this.onlyShadow, e
},THREE.HemisphereLight = function (e, t, i) {
    THREE.Light.call(this, e), this.position.set(0, 100, 0), this.groundColor = new THREE.Color(t), this.intensity = void 0 !== i ? i : 1
},THREE.HemisphereLight.prototype = Object.create(THREE.Light.prototype),THREE.HemisphereLight.prototype.clone = function () {
    var e = new THREE.HemisphereLight;
    return THREE.Light.prototype.clone.call(this, e), e.groundColor.copy(this.groundColor), e.intensity = this.intensity, e
},THREE.PointLight = function (e, t, i) {
    THREE.Light.call(this, e), this.intensity = void 0 !== t ? t : 1, this.distance = void 0 !== i ? i : 0
},THREE.PointLight.prototype = Object.create(THREE.Light.prototype),THREE.PointLight.prototype.clone = function () {
    var e = new THREE.PointLight;
    return THREE.Light.prototype.clone.call(this, e), e.intensity = this.intensity, e.distance = this.distance, e
},THREE.SpotLight = function (e, t, i, r, o) {
    THREE.Light.call(this, e), this.position.set(0, 1, 0), this.target = new THREE.Object3D, this.intensity = void 0 !== t ? t : 1, this.distance = void 0 !== i ? i : 0, this.angle = void 0 !== r ? r : Math.PI / 3, this.exponent = void 0 !== o ? o : 10, this.castShadow = !1, this.onlyShadow = !1, this.shadowCameraNear = 50, this.shadowCameraFar = 5e3, this.shadowCameraFov = 50, this.shadowCameraVisible = !1, this.shadowBias = 0, this.shadowDarkness = .5, this.shadowMapWidth = 512, this.shadowMapHeight = 512, this.shadowMap = null, this.shadowMapSize = null, this.shadowCamera = null, this.shadowMatrix = null
},THREE.SpotLight.prototype = Object.create(THREE.Light.prototype),THREE.SpotLight.prototype.clone = function () {
    var e = new THREE.SpotLight;
    return THREE.Light.prototype.clone.call(this, e), e.target = this.target.clone(), e.intensity = this.intensity, e.distance = this.distance, e.angle = this.angle, e.exponent = this.exponent, e.castShadow = this.castShadow, e.onlyShadow = this.onlyShadow, e
},THREE.Loader = function (e) {
    this.showStatus = e, this.statusDomElement = e ? THREE.Loader.prototype.addStatusElement() : null, this.onLoadStart = function () {
    }, this.onLoadProgress = function () {
    }, this.onLoadComplete = function () {
    }
},THREE.Loader.prototype = {
    constructor: THREE.Loader, crossOrigin: "anonymous", addStatusElement: function () {
        var e = document.createElement("div");
        return e.style.position = "absolute", e.style.right = "0px", e.style.top = "0px", e.style.fontSize = "0.8em", e.style.textAlign = "left", e.style.background = "rgba(0,0,0,0.25)", e.style.color = "#fff", e.style.width = "120px", e.style.padding = "0.5em 0.5em 0.5em 0.5em", e.style.zIndex = 1e3, e.innerHTML = "Loading ...", e
    }, updateProgress: function (e) {
        var t = "Loaded ";
        t += e.total ? (100 * e.loaded / e.total).toFixed(0) + "%" : (e.loaded / 1e3).toFixed(2) + " KB", this.statusDomElement.innerHTML = t
    }, extractUrlBase: function (e) {
        var t = e.split("/");
        return t.pop(), (t.length < 1 ? "." : t.join("/")) + "/"
    }, initMaterials: function (e, t) {
        for (var i = [], r = 0; r < e.length; ++r) i[r] = THREE.Loader.prototype.createMaterial(e[r], t);
        return i
    }, needsTangents: function (e) {
        for (var t = 0, i = e.length; t < i; t++) {
            if (e[t] instanceof THREE.ShaderMaterial) return !0
        }
        return !1
    }, createMaterial: function (e, t) {
        function i(e) {
            var t = Math.log(e) / Math.LN2;
            return Math.floor(t) == t
        }

        function r(e) {
            var t = Math.log(e) / Math.LN2;
            return Math.pow(2, Math.round(t))
        }

        function o(e, t) {
            var o = new Image;
            o.onload = function () {
                if (i(this.width) && i(this.height)) e.image = this; else {
                    var t = r(this.width), o = r(this.height);
                    e.image.width = t, e.image.height = o, e.image.getContext("2d").drawImage(this, 0, 0, t, o)
                }
                e.needsUpdate = !0
            }, o.crossOrigin = s.crossOrigin, o.src = t
        }

        function a(e, i, r, a, n, s, h) {
            var l = /\.dds$/i.test(r), c = t + "/" + r;
            if (l) {
                var u = THREE.ImageUtils.loadCompressedTexture(c);
                e[i] = u
            } else {
                var u = document.createElement("canvas");
                e[i] = new THREE.Texture(u)
            }
            if (e[i].sourceFile = r, a && (e[i].repeat.set(a[0], a[1]), 1 !== a[0] && (e[i].wrapS = THREE.RepeatWrapping), 1 !== a[1] && (e[i].wrapT = THREE.RepeatWrapping)), n && e[i].offset.set(n[0], n[1]), s) {
                var p = {repeat: THREE.RepeatWrapping, mirror: THREE.MirroredRepeatWrapping};
                void 0 !== p[s[0]] && (e[i].wrapS = p[s[0]]), void 0 !== p[s[1]] && (e[i].wrapT = p[s[1]])
            }
            h && (e[i].anisotropy = h), l || o(e[i], c)
        }

        function n(e) {
            return (255 * e[0] << 16) + (255 * e[1] << 8) + 255 * e[2]
        }

        var s = this, h = "MeshLambertMaterial",
            l = {color: 15658734, opacity: 1, map: null, lightMap: null, normalMap: null, bumpMap: null, wireframe: !1};
        if (e.shading) {
            var c = e.shading.toLowerCase();
            "phong" === c ? h = "MeshPhongMaterial" : "basic" === c && (h = "MeshBasicMaterial")
        }
        if (void 0 !== e.blending && void 0 !== THREE[e.blending] && (l.blending = THREE[e.blending]), (void 0 !== e.transparent || e.opacity < 1) && (l.transparent = e.transparent), void 0 !== e.depthTest && (l.depthTest = e.depthTest), void 0 !== e.depthWrite && (l.depthWrite = e.depthWrite), void 0 !== e.visible && (l.visible = e.visible), void 0 !== e.flipSided && (l.side = THREE.BackSide), void 0 !== e.doubleSided && (l.side = THREE.DoubleSide), void 0 !== e.wireframe && (l.wireframe = e.wireframe), void 0 !== e.vertexColors && ("face" === e.vertexColors ? l.vertexColors = THREE.FaceColors : e.vertexColors && (l.vertexColors = THREE.VertexColors)), e.colorDiffuse ? l.color = n(e.colorDiffuse) : e.DbgColor && (l.color = e.DbgColor), e.colorSpecular && (l.specular = n(e.colorSpecular)), e.colorAmbient && (l.ambient = n(e.colorAmbient)), e.transparency && (l.opacity = e.transparency), e.specularCoef && (l.shininess = e.specularCoef), e.mapDiffuse && t && a(l, "map", e.mapDiffuse, e.mapDiffuseRepeat, e.mapDiffuseOffset, e.mapDiffuseWrap, e.mapDiffuseAnisotropy), e.mapLight && t && a(l, "lightMap", e.mapLight, e.mapLightRepeat, e.mapLightOffset, e.mapLightWrap, e.mapLightAnisotropy), e.mapBump && t && a(l, "bumpMap", e.mapBump, e.mapBumpRepeat, e.mapBumpOffset, e.mapBumpWrap, e.mapBumpAnisotropy), e.mapNormal && t && a(l, "normalMap", e.mapNormal, e.mapNormalRepeat, e.mapNormalOffset, e.mapNormalWrap, e.mapNormalAnisotropy), e.mapSpecular && t && a(l, "specularMap", e.mapSpecular, e.mapSpecularRepeat, e.mapSpecularOffset, e.mapSpecularWrap, e.mapSpecularAnisotropy), e.mapBumpScale && (l.bumpScale = e.mapBumpScale), e.mapNormal) {
            var u = THREE.ShaderLib.normalmap, p = THREE.UniformsUtils.clone(u.uniforms);
            p.tNormal.value = l.normalMap, e.mapNormalFactor && p.uNormalScale.value.set(e.mapNormalFactor, e.mapNormalFactor), l.map && (p.tDiffuse.value = l.map, p.enableDiffuse.value = !0), l.specularMap && (p.tSpecular.value = l.specularMap, p.enableSpecular.value = !0), l.lightMap && (p.tAO.value = l.lightMap, p.enableAO.value = !0), p.uDiffuseColor.value.setHex(l.color), p.uSpecularColor.value.setHex(l.specular), p.uAmbientColor.value.setHex(l.ambient), p.uShininess.value = l.shininess, void 0 !== l.opacity && (p.uOpacity.value = l.opacity);
            var f = {fragmentShader: u.fragmentShader, vertexShader: u.vertexShader, uniforms: p, lights: !0, fog: !0},
                E = new THREE.ShaderMaterial(f);
            l.transparent && (E.transparent = !0)
        } else var E = new THREE[h](l);
        return void 0 !== e.DbgName && (E.name = e.DbgName), E
    }
},THREE.XHRLoader = function (e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
},THREE.XHRLoader.prototype = {
    constructor: THREE.XHRLoader, load: function (e, t, i, r) {
        var o = this, a = new XMLHttpRequest;
        void 0 !== t && a.addEventListener("load", function (i) {
            t(i.target.responseText), o.manager.itemEnd(e)
        }, !1), void 0 !== i && a.addEventListener("progress", function (e) {
            i(e)
        }, !1), void 0 !== r && a.addEventListener("error", function (e) {
            r(e)
        }, !1), void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), a.open("GET", e, !0), a.send(null), o.manager.itemStart(e)
    }, setCrossOrigin: function (e) {
        this.crossOrigin = e
    }
},THREE.ImageLoader = function (e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
},THREE.ImageLoader.prototype = {
    constructor: THREE.ImageLoader, load: function (e, t, i, r) {
        var o = this, a = document.createElement("img");
        return void 0 !== t && a.addEventListener("load", function (i) {
            o.manager.itemEnd(e), t(this)
        }, !1), void 0 !== i && a.addEventListener("progress", function (e) {
            i(e)
        }, !1), void 0 !== r && a.addEventListener("error", function (e) {
            r(e)
        }, !1), void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), a.src = e, o.manager.itemStart(e), a
    }, setCrossOrigin: function (e) {
        this.crossOrigin = e
    }
},THREE.JSONLoader = function (e) {
    THREE.Loader.call(this, e), this.withCredentials = !1
},THREE.JSONLoader.prototype = Object.create(THREE.Loader.prototype),THREE.JSONLoader.prototype.load = function (e, t, i) {
    i = i && "string" == typeof i ? i : this.extractUrlBase(e), this.onLoadStart(), this.loadAjaxJSON(this, e, t, i)
},THREE.JSONLoader.prototype.loadAjaxJSON = function (e, t, i, r, o) {
    var a = new XMLHttpRequest, n = 0;
    a.onreadystatechange = function () {
        if (a.readyState === a.DONE) {
            if (200 === a.status || 0 === a.status) {
                if (a.responseText) {
                    var t = JSON.parse(a.responseText), s = e.parse(t, r);
                    i(s.geometry, s.materials)
                }
                e.onLoadComplete()
            }
        } else a.readyState === a.LOADING ? o && (0 === n && (n = a.getResponseHeader("Content-Length")), o({
            total: n,
            loaded: a.responseText.length
        })) : a.readyState === a.HEADERS_RECEIVED && void 0 !== o && (n = a.getResponseHeader("Content-Length"))
    }, a.open("GET", t, !0), a.withCredentials = this.withCredentials, a.send(null)
},THREE.JSONLoader.prototype.parse = function (e, t) {
    var i = new THREE.Geometry, r = void 0 !== e.scale ? 1 / e.scale : 1;
    if (function (t) {
        function r(e, t) {
            return e & 1 << t
        }

        var o, a, n, s, h, l, c, u, p, f, E, d, m, g, v, T, y, R, x, H, _, w, b, M, S, A, C, L = e.faces,
            P = e.vertices, D = e.normals, F = e.colors, V = 0;
        if (void 0 !== e.uvs) {
            for (o = 0; o < e.uvs.length; o++) e.uvs[o].length && V++;
            for (o = 0; o < V; o++) i.faceVertexUvs[o] = []
        }
        for (s = 0, h = P.length; s < h;) R = new THREE.Vector3, R.x = P[s++] * t, R.y = P[s++] * t, R.z = P[s++] * t, i.vertices.push(R);
        for (s = 0, h = L.length; s < h;) if (f = L[s++], E = r(f, 0), d = r(f, 1), m = r(f, 3), g = r(f, 4), v = r(f, 5), T = r(f, 6), y = r(f, 7), E) {
            if (H = new THREE.Face3, H.a = L[s], H.b = L[s + 1], H.c = L[s + 3], _ = new THREE.Face3, _.a = L[s + 1], _.b = L[s + 2], _.c = L[s + 3], s += 4, d && (p = L[s++], H.materialIndex = p, _.materialIndex = p), n = i.faces.length, m) for (o = 0; o < V; o++) for (M = e.uvs[o], i.faceVertexUvs[o][n] = [], i.faceVertexUvs[o][n + 1] = [], a = 0; a < 4; a++) u = L[s++], A = M[2 * u], C = M[2 * u + 1], S = new THREE.Vector2(A, C), 2 !== a && i.faceVertexUvs[o][n].push(S), 0 !== a && i.faceVertexUvs[o][n + 1].push(S);
            if (g && (c = 3 * L[s++], H.normal.set(D[c++], D[c++], D[c]), _.normal.copy(H.normal)), v) for (o = 0; o < 4; o++) c = 3 * L[s++], b = new THREE.Vector3(D[c++], D[c++], D[c]), 2 !== o && H.vertexNormals.push(b), 0 !== o && _.vertexNormals.push(b);
            if (T && (l = L[s++], w = F[l], H.color.setHex(w), _.color.setHex(w)), y) for (o = 0; o < 4; o++) l = L[s++], w = F[l], 2 !== o && H.vertexColors.push(new THREE.Color(w)), 0 !== o && _.vertexColors.push(new THREE.Color(w));
            i.faces.push(H), i.faces.push(_)
        } else {
            if (x = new THREE.Face3, x.a = L[s++], x.b = L[s++], x.c = L[s++], d && (p = L[s++], x.materialIndex = p), n = i.faces.length, m) for (o = 0; o < V; o++) for (M = e.uvs[o], i.faceVertexUvs[o][n] = [], a = 0; a < 3; a++) u = L[s++], A = M[2 * u], C = M[2 * u + 1], S = new THREE.Vector2(A, C), i.faceVertexUvs[o][n].push(S);
            if (g && (c = 3 * L[s++], x.normal.set(D[c++], D[c++], D[c])), v) for (o = 0; o < 3; o++) c = 3 * L[s++], b = new THREE.Vector3(D[c++], D[c++], D[c]), x.vertexNormals.push(b);
            if (T && (l = L[s++], x.color.setHex(F[l])), y) for (o = 0; o < 3; o++) l = L[s++], x.vertexColors.push(new THREE.Color(F[l]));
            i.faces.push(x)
        }
    }(r), function () {
        var t, r, o, a, n, s, h, l, c, u;
        if (e.skinWeights) for (t = 0, r = e.skinWeights.length; t < r; t += 2) o = e.skinWeights[t], a = e.skinWeights[t + 1], n = 0, s = 0, i.skinWeights.push(new THREE.Vector4(o, a, n, s));
        if (e.skinIndices) for (t = 0, r = e.skinIndices.length; t < r; t += 2) h = e.skinIndices[t], l = e.skinIndices[t + 1], c = 0, u = 0, i.skinIndices.push(new THREE.Vector4(h, l, c, u));
        i.bones = e.bones, i.animation = e.animation, i.animations = e.animations
    }(), function (t) {
        if (void 0 !== e.morphTargets) {
            var r, o, a, n, s, h;
            for (r = 0, o = e.morphTargets.length; r < o; r++) for (i.morphTargets[r] = {}, i.morphTargets[r].name = e.morphTargets[r].name, i.morphTargets[r].vertices = [], s = i.morphTargets[r].vertices, h = e.morphTargets[r].vertices, a = 0, n = h.length; a < n; a += 3) {
                var l = new THREE.Vector3;
                l.x = h[a] * t, l.y = h[a + 1] * t, l.z = h[a + 2] * t, s.push(l)
            }
        }
        if (void 0 !== e.morphColors) {
            var r, o, c, u, p, f, E;
            for (r = 0, o = e.morphColors.length; r < o; r++) for (i.morphColors[r] = {}, i.morphColors[r].name = e.morphColors[r].name, i.morphColors[r].colors = [], p = i.morphColors[r].colors, f = e.morphColors[r].colors, c = 0, u = f.length; c < u; c += 3) E = new THREE.Color(16755200), E.setRGB(f[c], f[c + 1], f[c + 2]), p.push(E)
        }
    }(r), i.computeCentroids(), i.computeFaceNormals(), i.computeBoundingSphere(), void 0 === e.materials) return {geometry: i};
    var o = this.initMaterials(e.materials, t);
    return this.needsTangents(o) && i.computeTangents(), {geometry: i, materials: o}
},THREE.LoadingManager = function (e, t, i) {
    var r = this, o = 0, a = 0;
    this.onLoad = e, this.onProgress = t, this.onError = i, this.itemStart = function (e) {
        a++
    }, this.itemEnd = function (e) {
        o++, void 0 !== r.onProgress && r.onProgress(e, o, a), o === a && void 0 !== r.onLoad && r.onLoad()
    }
},THREE.DefaultLoadingManager = new THREE.LoadingManager,THREE.BufferGeometryLoader = function (e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
},THREE.BufferGeometryLoader.prototype = {
    constructor: THREE.BufferGeometryLoader, load: function (e, t, i, r) {
        var o = this, a = new THREE.XHRLoader;
        a.setCrossOrigin(this.crossOrigin), a.load(e, function (e) {
            t(o.parse(JSON.parse(e)))
        })
    }, setCrossOrigin: function (e) {
        this.crossOrigin = e
    }, parse: function (e) {
        var t = new THREE.BufferGeometry, i = e.attributes, r = e.offsets, o = e.boundingSphere;
        for (var a in i) {
            var n = i[a];
            t.attributes[a] = {itemSize: n.itemSize, array: new self[n.type](n.array)}
        }
        return void 0 !== r && (t.offsets = JSON.parse(JSON.stringify(r))), void 0 !== o && (t.boundingSphere = new THREE.Sphere((new THREE.Vector3).fromArray(void 0 !== o.center ? o.center : [0, 0, 0]), o.radius)), t
    }
},THREE.GeometryLoader = function (e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
},THREE.GeometryLoader.prototype = {
    constructor: THREE.GeometryLoader, load: function (e, t, i, r) {
        var o = this, a = new THREE.XHRLoader;
        a.setCrossOrigin(this.crossOrigin), a.load(e, function (e) {
            t(o.parse(JSON.parse(e)))
        })
    }, setCrossOrigin: function (e) {
        this.crossOrigin = e
    }, parse: function (e) {
    }
},THREE.MaterialLoader = function (e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
},THREE.MaterialLoader.prototype = {
    constructor: THREE.MaterialLoader, load: function (e, t, i, r) {
        var o = this, a = new THREE.XHRLoader;
        a.setCrossOrigin(this.crossOrigin), a.load(e, function (e) {
            t(o.parse(JSON.parse(e)))
        })
    }, setCrossOrigin: function (e) {
        this.crossOrigin = e
    }, parse: function (e) {
        var t = new THREE[e.type];
        if (void 0 !== e.color && t.color.setHex(e.color), void 0 !== e.ambient && t.ambient.setHex(e.ambient), void 0 !== e.emissive && t.emissive.setHex(e.emissive), void 0 !== e.specular && t.specular.setHex(e.specular), void 0 !== e.shininess && (t.shininess = e.shininess), void 0 !== e.vertexColors && (t.vertexColors = e.vertexColors), void 0 !== e.blending && (t.blending = e.blending), void 0 !== e.side && (t.side = e.side), void 0 !== e.opacity && (t.opacity = e.opacity), void 0 !== e.transparent && (t.transparent = e.transparent), void 0 !== e.wireframe && (t.wireframe = e.wireframe), void 0 !== e.materials) for (var i = 0, r = e.materials.length; i < r; i++) t.materials.push(this.parse(e.materials[i]));
        return t
    }
},THREE.ObjectLoader = function (e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
},THREE.ObjectLoader.prototype = {
    constructor: THREE.ObjectLoader, load: function (e, t, i, r) {
        var o = this, a = new THREE.XHRLoader(o.manager);
        a.setCrossOrigin(this.crossOrigin), a.load(e, function (e) {
            t(o.parse(JSON.parse(e)))
        })
    }, setCrossOrigin: function (e) {
        this.crossOrigin = e
    }, parse: function (e) {
        var t = this.parseGeometries(e.geometries), i = this.parseMaterials(e.materials);
        return this.parseObject(e.object, t, i)
    }, parseGeometries: function (e) {
        var t = {};
        if (void 0 !== e) for (var i = new THREE.JSONLoader, r = new THREE.BufferGeometryLoader, o = 0, a = e.length; o < a; o++) {
            var n, s = e[o];
            switch (s.type) {
                case"PlaneGeometry":
                    n = new THREE.PlaneGeometry(s.width, s.height, s.widthSegments, s.heightSegments);
                    break;
                case"CircleGeometry":
                    n = new THREE.CircleGeometry(s.radius, s.segments);
                    break;
                case"CubeGeometry":
                    n = new THREE.CubeGeometry(s.width, s.height, s.depth, s.widthSegments, s.heightSegments, s.depthSegments);
                    break;
                case"CylinderGeometry":
                    n = new THREE.CylinderGeometry(s.radiusTop, s.radiusBottom, s.height, s.radialSegments, s.heightSegments, s.openEnded);
                    break;
                case"SphereGeometry":
                    n = new THREE.SphereGeometry(s.radius, s.widthSegments, s.heightSegments, s.phiStart, s.phiLength, s.thetaStart, s.thetaLength);
                    break;
                case"IcosahedronGeometry":
                    n = new THREE.IcosahedronGeometry(s.radius, s.detail);
                    break;
                case"TorusGeometry":
                    n = new THREE.TorusGeometry(s.radius, s.tube, s.radialSegments, s.tubularSegments, s.arc);
                    break;
                case"TorusKnotGeometry":
                    n = new THREE.TorusKnotGeometry(s.radius, s.tube, s.radialSegments, s.tubularSegments, s.p, s.q, s.heightScale);
                    break;
                case"BufferGeometry":
                    n = r.parse(s.data);
                    break;
                case"Geometry":
                    n = i.parse(s.data).geometry
            }
            n.uuid = s.uuid, void 0 !== s.name && (n.name = s.name), t[s.uuid] = n
        }
        return t
    }, parseMaterials: function (e) {
        var t = {};
        if (void 0 !== e) for (var i = new THREE.MaterialLoader, r = 0, o = e.length; r < o; r++) {
            var a = e[r], n = i.parse(a);
            n.uuid = a.uuid, void 0 !== a.name && (n.name = a.name), t[a.uuid] = n
        }
        return t
    }, parseObject: function () {
        var e = new THREE.Matrix4;
        return function (t, i, r) {
            var o;
            switch (t.type) {
                case"Scene":
                    o = new THREE.Scene;
                    break;
                case"PerspectiveCamera":
                    o = new THREE.PerspectiveCamera(t.fov, t.aspect, t.near, t.far);
                    break;
                case"OrthographicCamera":
                    o = new THREE.OrthographicCamera(t.left, t.right, t.top, t.bottom, t.near, t.far);
                    break;
                case"AmbientLight":
                    o = new THREE.AmbientLight(t.color);
                    break;
                case"DirectionalLight":
                    o = new THREE.DirectionalLight(t.color, t.intensity);
                    break;
                case"PointLight":
                    o = new THREE.PointLight(t.color, t.intensity, t.distance);
                    break;
                case"SpotLight":
                    o = new THREE.SpotLight(t.color, t.intensity, t.distance, t.angle, t.exponent);
                    break;
                case"HemisphereLight":
                    o = new THREE.HemisphereLight(t.color, t.groundColor, t.intensity);
                    break;
                case"Mesh":
                    var a = i[t.geometry], n = r[t.material];
                    o = new THREE.Mesh(a, n);
                    break;
                case"Sprite":
                    var n = r[t.material];
                    o = new THREE.Sprite(n);
                    break;
                default:
                    o = new THREE.Object3D
            }
            if (o.uuid = t.uuid, void 0 !== t.name && (o.name = t.name), void 0 !== t.matrix ? (e.fromArray(t.matrix), e.decompose(o.position, o.quaternion, o.scale)) : (void 0 !== t.position && o.position.fromArray(t.position), void 0 !== t.rotation && o.rotation.fromArray(t.rotation), void 0 !== t.scale && o.scale.fromArray(t.scale)), void 0 !== t.visible && (o.visible = t.visible), void 0 !== t.userData && (o.userData = t.userData), void 0 !== t.children) for (var s in t.children) o.add(this.parseObject(t.children[s], i, r));
            return o
        }
    }()
},THREE.SceneLoader = function () {
    this.onLoadStart = function () {
    }, this.onLoadProgress = function () {
    }, this.onLoadComplete = function () {
    }, this.callbackSync = function () {
    }, this.callbackProgress = function () {
    }, this.geometryHandlers = {}, this.hierarchyHandlers = {}, this.addGeometryHandler("ascii", THREE.JSONLoader)
},THREE.SceneLoader.prototype = {
    constructor: THREE.SceneLoader, load: function (e, t, i, r) {
        var o = this, a = new THREE.XHRLoader(o.manager);
        a.setCrossOrigin(this.crossOrigin), a.load(e, function (i) {
            o.parse(JSON.parse(i), t, e)
        })
    }, setCrossOrigin: function (e) {
        this.crossOrigin = e
    }, addGeometryHandler: function (e, t) {
        this.geometryHandlers[e] = {loaderClass: t}
    }, addHierarchyHandler: function (e, t) {
        this.hierarchyHandlers[e] = {loaderClass: t}
    }, parse: function (e, t, i) {
        function r(e, t) {
            return "relativeToHTML" == t ? e : w + "/" + e
        }

        function o() {
            a(H.scene, M.objects)
        }

        function a(e, t) {
            var i, o, n, s, l;
            for (var c in t) {
                var u = H.objects[c], d = t[c];
                if (void 0 === u) {
                    if (d.type && d.type in _.hierarchyHandlers) {
                        if (void 0 === d.loading) {
                            var m = {
                                type: 1,
                                url: 1,
                                material: 1,
                                position: 1,
                                rotation: 1,
                                scale: 1,
                                visible: 1,
                                children: 1,
                                userData: 1,
                                skin: 1,
                                morph: 1,
                                mirroredLoop: 1,
                                duration: 1
                            }, g = {};
                            for (var T in d) T in m || (g[T] = d[T]);
                            f = H.materials[d.material], d.loading = !0;
                            var y = _.hierarchyHandlers[d.type].loaderObject;
                            y.options ? y.load(r(d.url, M.urlBaseType), h(c, e, f, d)) : y.load(r(d.url, M.urlBaseType), h(c, e, f, d), g)
                        }
                    } else if (void 0 !== d.geometry) {
                        if (p = H.geometries[d.geometry]) {
                            var R = !1;
                            if (f = H.materials[d.material], R = f instanceof THREE.ShaderMaterial, o = d.position, n = d.rotation, s = d.scale, i = d.matrix, l = d.quaternion, d.material || (f = new THREE.MeshFaceMaterial(H.face_materials[d.geometry])), f instanceof THREE.MeshFaceMaterial && 0 === f.materials.length && (f = new THREE.MeshFaceMaterial(H.face_materials[d.geometry])), f instanceof THREE.MeshFaceMaterial) for (var x = 0; x < f.materials.length; x++) R = R || f.materials[x] instanceof THREE.ShaderMaterial;
                            R && p.computeTangents(), d.skin ? u = new THREE.SkinnedMesh(p, f) : d.morph ? (u = new THREE.MorphAnimMesh(p, f), void 0 !== d.duration && (u.duration = d.duration), void 0 !== d.time && (u.time = d.time), void 0 !== d.mirroredLoop && (u.mirroredLoop = d.mirroredLoop), f.morphNormals && p.computeMorphNormals()) : u = new THREE.Mesh(p, f), u.name = c, i ? (u.matrixAutoUpdate = !1, u.matrix.set(i[0], i[1], i[2], i[3], i[4], i[5], i[6], i[7], i[8], i[9], i[10], i[11], i[12], i[13], i[14], i[15])) : (u.position.fromArray(o), l ? u.quaternion.fromArray(l) : u.rotation.fromArray(n), u.scale.fromArray(s)), u.visible = d.visible, u.castShadow = d.castShadow, u.receiveShadow = d.receiveShadow, e.add(u), H.objects[c] = u
                        }
                    } else if ("AmbientLight" === d.type || "PointLight" === d.type || "DirectionalLight" === d.type || "SpotLight" === d.type || "HemisphereLight" === d.type || "AreaLight" === d.type) {
                        var w = d.color, b = d.intensity, S = d.distance, A = d.position, C = d.rotation;
                        switch (d.type) {
                            case"AmbientLight":
                                v = new THREE.AmbientLight(w);
                                break;
                            case"PointLight":
                                v = new THREE.PointLight(w, b, S), v.position.fromArray(A);
                                break;
                            case"DirectionalLight":
                                v = new THREE.DirectionalLight(w, b), v.position.fromArray(d.direction);
                                break;
                            case"SpotLight":
                                v = new THREE.SpotLight(w, b, S, 1), v.angle = d.angle, v.position.fromArray(A), v.target.set(A[0], A[1] - S, A[2]), v.target.applyEuler(new THREE.Euler(C[0], C[1], C[2], "XYZ"));
                                break;
                            case"HemisphereLight":
                                v = new THREE.DirectionalLight(w, b, S), v.target.set(A[0], A[1] - S, A[2]), v.target.applyEuler(new THREE.Euler(C[0], C[1], C[2], "XYZ"));
                                break;
                            case"AreaLight":
                                v = new THREE.AreaLight(w, b), v.position.fromArray(A), v.width = d.size, v.height = d.size_y
                        }
                        e.add(v), v.name = c, H.lights[c] = v, H.objects[c] = v
                    } else "PerspectiveCamera" === d.type || "OrthographicCamera" === d.type ? (o = d.position, n = d.rotation, l = d.quaternion, "PerspectiveCamera" === d.type ? E = new THREE.PerspectiveCamera(d.fov, d.aspect, d.near, d.far) : "OrthographicCamera" === d.type && (E = new THREE.OrthographicCamera(d.left, d.right, d.top, d.bottom, d.near, d.far)), E.name = c, E.position.fromArray(o), void 0 !== l ? E.quaternion.fromArray(l) : void 0 !== n && E.rotation.fromArray(n), e.add(E), H.cameras[c] = E, H.objects[c] = E) : (o = d.position, n = d.rotation, s = d.scale, l = d.quaternion, u = new THREE.Object3D, u.name = c, u.position.fromArray(o), l ? u.quaternion.fromArray(l) : u.rotation.fromArray(n), u.scale.fromArray(s), u.visible = void 0 !== d.visible && d.visible, e.add(u), H.objects[c] = u, H.empties[c] = u);
                    if (u) {
                        if (void 0 !== d.userData) for (var L in d.userData) {
                            var P = d.userData[L];
                            u.userData[L] = P
                        }
                        if (void 0 !== d.groups) for (var x = 0; x < d.groups.length; x++) {
                            var D = d.groups[x];
                            void 0 === H.groups[D] && (H.groups[D] = []), H.groups[D].push(c)
                        }
                    }
                }
                void 0 !== u && void 0 !== d.children && a(u, d.children)
            }
        }

        function n(e, t, i) {
            H.geometries[i] = e, H.face_materials[i] = t, o()
        }

        function s(e, t, i, r, a) {
            var n = a.position, s = a.rotation, h = a.quaternion, l = a.scale;
            e.position.fromArray(n), h ? e.quaternion.fromArray(h) : e.rotation.fromArray(s), e.scale.fromArray(l), r && e.traverse(function (e) {
                e.material = r
            });
            var c = void 0 === a.visible || a.visible;
            e.traverse(function (e) {
                e.visible = c
            }), i.add(e), e.name = t, H.objects[t] = e, o()
        }

        function h(e, t, i, r) {
            return function (o) {
                var a;
                a = o.content ? o.content : o.dae ? o.scene : o, s(a, e, t, i, r), T -= 1, _.onLoadComplete(), l()
            }
        }

        function l() {
            var e = {totalModels: R, totalTextures: x, loadedModels: R - T, loadedTextures: x - y};
            _.callbackProgress(e, H), _.onLoadProgress(), 0 === T && 0 === y && (c(), t(H))
        }

        function c() {
            for (var e = 0; e < b.length; e++) {
                var t = b[e], i = H.objects[t.targetName];
                i ? t.object.target = i : (t.object.target = new THREE.Object3D, H.scene.add(t.object.target)), t.object.target.userData.targetInverse = t.object
            }
        }

        function u(e, t) {
            if (t(e), void 0 !== e.children) for (var i in e.children) u(e.children[i], t)
        }

        var p, f, E, d, m, g, v, T, y, R, x, H, _ = this, w = THREE.Loader.prototype.extractUrlBase(i), b = [], M = e;
        for (var S in this.geometryHandlers) {
            var A = this.geometryHandlers[S].loaderClass;
            this.geometryHandlers[S].loaderObject = new A
        }
        for (var S in this.hierarchyHandlers) {
            var A = this.hierarchyHandlers[S].loaderClass;
            this.hierarchyHandlers[S].loaderObject = new A
        }
        if (T = 0, y = 0, H = {
            scene: new THREE.Scene,
            geometries: {},
            face_materials: {},
            materials: {},
            textures: {},
            objects: {},
            cameras: {},
            lights: {},
            fogs: {},
            empties: {},
            groups: {}
        }, M.transform) {
            var C = M.transform.position, L = M.transform.rotation, P = M.transform.scale;
            C && H.scene.position.fromArray(C), L && H.scene.rotation.fromArray(L), P && H.scene.scale.fromArray(P), (C || L || P) && (H.scene.updateMatrix(), H.scene.updateMatrixWorld())
        }
        var D, F, V = function (e) {
            y -= e, l(), _.onLoadComplete()
        }, U = function (e) {
            return function () {
                V(e)
            }
        };
        for (D in M.fogs) F = M.fogs[D], "linear" === F.type ? d = new THREE.Fog(0, F.near, F.far) : "exp2" === F.type && (d = new THREE.FogExp2(0, F.density)), g = F.color, d.color.setRGB(g[0], g[1], g[2]), H.fogs[D] = d;
        var z, B;
        for (z in M.geometries) B = M.geometries[z], B.type in this.geometryHandlers && (T += 1, _.onLoadStart());
        for (var N in M.objects) u(M.objects[N], function (e) {
            e.type && e.type in _.hierarchyHandlers && (T += 1, _.onLoadStart())
        });
        R = T;
        for (z in M.geometries) if (B = M.geometries[z], "cube" === B.type) p = new THREE.CubeGeometry(B.width, B.height, B.depth, B.widthSegments, B.heightSegments, B.depthSegments), p.name = z, H.geometries[z] = p; else if ("plane" === B.type) p = new THREE.PlaneGeometry(B.width, B.height, B.widthSegments, B.heightSegments), p.name = z, H.geometries[z] = p; else if ("sphere" === B.type) p = new THREE.SphereGeometry(B.radius, B.widthSegments, B.heightSegments), p.name = z, H.geometries[z] = p; else if ("cylinder" === B.type) p = new THREE.CylinderGeometry(B.topRad, B.botRad, B.height, B.radSegs, B.heightSegs), p.name = z, H.geometries[z] = p; else if ("torus" === B.type) p = new THREE.TorusGeometry(B.radius, B.tube, B.segmentsR, B.segmentsT), p.name = z, H.geometries[z] = p; else if ("icosahedron" === B.type) p = new THREE.IcosahedronGeometry(B.radius, B.subdivisions), p.name = z, H.geometries[z] = p; else if (B.type in this.geometryHandlers) {
            var O = {};
            for (var I in B) "type" !== I && "url" !== I && (O[I] = B[I]);
            var k = this.geometryHandlers[B.type].loaderObject;
            k.load(r(B.url, M.urlBaseType), function (e) {
                return function (t, i) {
                    t.name = e, n(t, i, e), T -= 1, _.onLoadComplete(), l()
                }
            }(z), O)
        } else if ("embedded" === B.type) {
            var G = M.embeds[B.id];
            if (G.metadata = M.metadata, G) {
                var W = this.geometryHandlers.ascii.loaderObject, j = W.parse(G, "");
                !function (e) {
                    return function (t, i) {
                        t.name = e, H.geometries[e] = t, H.face_materials[e] = i
                    }
                }(z)(j.geometry, j.materials)
            }
        }
        var X, q;
        for (X in M.textures) if (q = M.textures[X], q.url instanceof Array) {
            y += q.url.length;
            for (var Y = 0; Y < q.url.length; Y++) _.onLoadStart()
        } else y += 1, _.onLoadStart();
        x = y;
        for (X in M.textures) {
            if (q = M.textures[X], void 0 !== q.mapping && void 0 !== THREE[q.mapping] && (q.mapping = new THREE[q.mapping]), q.url instanceof Array) {
                for (var K = q.url.length, Z = [], Q = 0; Q < K; Q++) Z[Q] = r(q.url[Q], M.urlBaseType);
                var J = /\.dds$/i.test(Z[0]);
                m = J ? THREE.ImageUtils.loadCompressedTextureCube(Z, q.mapping, U(K)) : THREE.ImageUtils.loadTextureCube(Z, q.mapping, U(K))
            } else {
                var J = /\.dds$/i.test(q.url), $ = r(q.url, M.urlBaseType), ee = U(1);
                if (m = J ? THREE.ImageUtils.loadCompressedTexture($, q.mapping, ee) : THREE.ImageUtils.loadTexture($, q.mapping, ee), void 0 !== THREE[q.minFilter] && (m.minFilter = THREE[q.minFilter]), void 0 !== THREE[q.magFilter] && (m.magFilter = THREE[q.magFilter]), q.anisotropy && (m.anisotropy = q.anisotropy), q.repeat && (m.repeat.set(q.repeat[0], q.repeat[1]), 1 !== q.repeat[0] && (m.wrapS = THREE.RepeatWrapping), 1 !== q.repeat[1] && (m.wrapT = THREE.RepeatWrapping)), q.offset && m.offset.set(q.offset[0], q.offset[1]), q.wrap) {
                    var te = {repeat: THREE.RepeatWrapping, mirror: THREE.MirroredRepeatWrapping};
                    void 0 !== te[q.wrap[0]] && (m.wrapS = te[q.wrap[0]]), void 0 !== te[q.wrap[1]] && (m.wrapT = te[q.wrap[1]])
                }
            }
            H.textures[X] = m
        }
        var ie, re, oe;
        for (ie in M.materials) {
            re = M.materials[ie];
            for (oe in re.parameters) if ("envMap" === oe || "map" === oe || "lightMap" === oe || "bumpMap" === oe) re.parameters[oe] = H.textures[re.parameters[oe]]; else if ("shading" === oe) re.parameters[oe] = "flat" === re.parameters[oe] ? THREE.FlatShading : THREE.SmoothShading; else if ("side" === oe) "double" == re.parameters[oe] ? re.parameters[oe] = THREE.DoubleSide : "back" == re.parameters[oe] ? re.parameters[oe] = THREE.BackSide : re.parameters[oe] = THREE.FrontSide; else if ("blending" === oe) re.parameters[oe] = re.parameters[oe] in THREE ? THREE[re.parameters[oe]] : THREE.NormalBlending; else if ("combine" === oe) re.parameters[oe] = re.parameters[oe] in THREE ? THREE[re.parameters[oe]] : THREE.MultiplyOperation; else if ("vertexColors" === oe) "face" == re.parameters[oe] ? re.parameters[oe] = THREE.FaceColors : re.parameters[oe] && (re.parameters[oe] = THREE.VertexColors); else if ("wrapRGB" === oe) {
                var ae = re.parameters[oe];
                re.parameters[oe] = new THREE.Vector3(ae[0], ae[1], ae[2])
            }
            if (void 0 !== re.parameters.opacity && re.parameters.opacity < 1 && (re.parameters.transparent = !0), re.parameters.normalMap) {
                var ne = THREE.ShaderLib.normalmap, se = THREE.UniformsUtils.clone(ne.uniforms),
                    he = re.parameters.color, le = re.parameters.specular, ce = re.parameters.ambient,
                    ue = re.parameters.shininess;
                se.tNormal.value = H.textures[re.parameters.normalMap], re.parameters.normalScale && se.uNormalScale.value.set(re.parameters.normalScale[0], re.parameters.normalScale[1]), re.parameters.map && (se.tDiffuse.value = re.parameters.map, se.enableDiffuse.value = !0), re.parameters.envMap && (se.tCube.value = re.parameters.envMap, se.enableReflection.value = !0, se.uReflectivity.value = re.parameters.reflectivity), re.parameters.lightMap && (se.tAO.value = re.parameters.lightMap, se.enableAO.value = !0), re.parameters.specularMap && (se.tSpecular.value = H.textures[re.parameters.specularMap], se.enableSpecular.value = !0), re.parameters.displacementMap && (se.tDisplacement.value = H.textures[re.parameters.displacementMap], se.enableDisplacement.value = !0, se.uDisplacementBias.value = re.parameters.displacementBias, se.uDisplacementScale.value = re.parameters.displacementScale), se.uDiffuseColor.value.setHex(he), se.uSpecularColor.value.setHex(le), se.uAmbientColor.value.setHex(ce), se.uShininess.value = ue, re.parameters.opacity && (se.uOpacity.value = re.parameters.opacity);
                var pe = {
                    fragmentShader: ne.fragmentShader,
                    vertexShader: ne.vertexShader,
                    uniforms: se,
                    lights: !0,
                    fog: !0
                };
                f = new THREE.ShaderMaterial(pe)
            } else f = new THREE[re.type](re.parameters);
            f.name = ie, H.materials[ie] = f
        }
        for (ie in M.materials) if (re = M.materials[ie], re.parameters.materials) {
            for (var fe = [], Q = 0; Q < re.parameters.materials.length; Q++) {
                var Ee = re.parameters.materials[Q];
                fe.push(H.materials[Ee])
            }
            H.materials[ie].materials = fe
        }
        o(), H.cameras && M.defaults.camera && (H.currentCamera = H.cameras[M.defaults.camera]), H.fogs && M.defaults.fog && (H.scene.fog = H.fogs[M.defaults.fog]), _.callbackSync(H), l()
    }
},THREE.TextureLoader = function (e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
};
THREE.TextureLoader.prototype = {
    constructor: THREE.TextureLoader, load: function (e, t, i, r) {
        var o = this, a = new THREE.ImageLoader(o.manager);
        a.setCrossOrigin(this.crossOrigin), a.load(e, function (e) {
            var i = new THREE.Texture(e);
            i.needsUpdate = !0, void 0 !== t && t(i)
        })
    }, setCrossOrigin: function (e) {
        this.crossOrigin = e
    }
}, THREE.Material = function () {
    this.id = THREE.MaterialIdCount++, this.uuid = THREE.Math.generateUUID(), this.name = "", this.side = THREE.FrontSide, this.opacity = 1, this.transparent = !1, this.blending = THREE.NormalBlending, this.blendSrc = THREE.SrcAlphaFactor, this.blendDst = THREE.OneMinusSrcAlphaFactor, this.blendEquation = THREE.AddEquation, this.depthTest = !0, this.depthWrite = !0, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.alphaTest = 0, this.overdraw = 0, this.visible = !0, this.needsUpdate = !0
}, THREE.Material.prototype = {
    constructor: THREE.Material, setValues: function (e) {
        if (void 0 !== e) for (var t in e) {
            var i = e[t];
            if (void 0 !== i && t in this) {
                var r = this[t];
                r instanceof THREE.Color ? r.set(i) : r instanceof THREE.Vector3 && i instanceof THREE.Vector3 ? r.copy(i) : this[t] = "overdraw" == t ? Number(i) : i
            }
        }
    }, clone: function (e) {
        return void 0 === e && (e = new THREE.Material), e.name = this.name, e.side = this.side, e.opacity = this.opacity, e.transparent = this.transparent, e.blending = this.blending, e.blendSrc = this.blendSrc, e.blendDst = this.blendDst, e.blendEquation = this.blendEquation, e.depthTest = this.depthTest, e.depthWrite = this.depthWrite, e.polygonOffset = this.polygonOffset, e.polygonOffsetFactor = this.polygonOffsetFactor, e.polygonOffsetUnits = this.polygonOffsetUnits, e.alphaTest = this.alphaTest, e.overdraw = this.overdraw, e.visible = this.visible, e
    }, dispose: function () {
        this.dispatchEvent({type: "dispose"})
    }
}, THREE.EventDispatcher.prototype.apply(THREE.Material.prototype), THREE.MaterialIdCount = 0, THREE.LineBasicMaterial = function (e) {
    THREE.Material.call(this), this.color = new THREE.Color(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.vertexColors = !1, this.fog = !0, this.setValues(e)
}, THREE.LineBasicMaterial.prototype = Object.create(THREE.Material.prototype), THREE.LineBasicMaterial.prototype.clone = function () {
    var e = new THREE.LineBasicMaterial;
    return THREE.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.linewidth = this.linewidth, e.linecap = this.linecap, e.linejoin = this.linejoin, e.vertexColors = this.vertexColors, e.fog = this.fog, e
}, THREE.LineDashedMaterial = function (e) {
    THREE.Material.call(this), this.color = new THREE.Color(16777215), this.linewidth = 1, this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.vertexColors = !1, this.fog = !0, this.setValues(e)
}, THREE.LineDashedMaterial.prototype = Object.create(THREE.Material.prototype), THREE.LineDashedMaterial.prototype.clone = function () {
    var e = new THREE.LineDashedMaterial;
    return THREE.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.linewidth = this.linewidth, e.scale = this.scale, e.dashSize = this.dashSize, e.gapSize = this.gapSize, e.vertexColors = this.vertexColors, e.fog = this.fog, e
}, THREE.MeshBasicMaterial = function (e) {
    THREE.Material.call(this), this.color = new THREE.Color(16777215), this.map = null, this.lightMap = null, this.specularMap = null, this.envMap = null, this.combine = THREE.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = THREE.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = THREE.NoColors, this.skinning = !1, this.morphTargets = !1, this.setValues(e)
}, THREE.MeshBasicMaterial.prototype = Object.create(THREE.Material.prototype), THREE.MeshBasicMaterial.prototype.clone = function () {
    var e = new THREE.MeshBasicMaterial;
    return THREE.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.map = this.map, e.lightMap = this.lightMap, e.specularMap = this.specularMap, e.envMap = this.envMap, e.combine = this.combine, e.reflectivity = this.reflectivity, e.refractionRatio = this.refractionRatio, e.fog = this.fog, e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e.wireframeLinecap = this.wireframeLinecap, e.wireframeLinejoin = this.wireframeLinejoin, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e
}, THREE.MeshLambertMaterial = function (e) {
    THREE.Material.call(this), this.color = new THREE.Color(16777215), this.ambient = new THREE.Color(16777215), this.emissive = new THREE.Color(0), this.wrapAround = !1, this.wrapRGB = new THREE.Vector3(1, 1, 1), this.map = null, this.lightMap = null, this.specularMap = null, this.envMap = null, this.combine = THREE.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = THREE.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = THREE.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
}, THREE.MeshLambertMaterial.prototype = Object.create(THREE.Material.prototype), THREE.MeshLambertMaterial.prototype.clone = function () {
    var e = new THREE.MeshLambertMaterial;
    return THREE.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.ambient.copy(this.ambient), e.emissive.copy(this.emissive), e.wrapAround = this.wrapAround, e.wrapRGB.copy(this.wrapRGB), e.map = this.map, e.lightMap = this.lightMap, e.specularMap = this.specularMap, e.envMap = this.envMap, e.combine = this.combine, e.reflectivity = this.reflectivity, e.refractionRatio = this.refractionRatio, e.fog = this.fog, e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e.wireframeLinecap = this.wireframeLinecap, e.wireframeLinejoin = this.wireframeLinejoin, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e.morphNormals = this.morphNormals, e
}, THREE.MeshPhongMaterial = function (e) {
    THREE.Material.call(this), this.color = new THREE.Color(16777215), this.ambient = new THREE.Color(16777215), this.emissive = new THREE.Color(0), this.specular = new THREE.Color(1118481), this.shininess = 30, this.metal = !1, this.perPixel = !0, this.wrapAround = !1, this.wrapRGB = new THREE.Vector3(1, 1, 1), this.map = null, this.lightMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new THREE.Vector2(1, 1), this.specularMap = null, this.envMap = null, this.combine = THREE.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = THREE.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = THREE.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
}, THREE.MeshPhongMaterial.prototype = Object.create(THREE.Material.prototype), THREE.MeshPhongMaterial.prototype.clone = function () {
    var e = new THREE.MeshPhongMaterial;
    return THREE.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.ambient.copy(this.ambient), e.emissive.copy(this.emissive), e.specular.copy(this.specular), e.shininess = this.shininess, e.metal = this.metal, e.perPixel = this.perPixel, e.wrapAround = this.wrapAround, e.wrapRGB.copy(this.wrapRGB), e.map = this.map, e.lightMap = this.lightMap, e.bumpMap = this.bumpMap, e.bumpScale = this.bumpScale, e.normalMap = this.normalMap, e.normalScale.copy(this.normalScale), e.specularMap = this.specularMap, e.envMap = this.envMap, e.combine = this.combine, e.reflectivity = this.reflectivity, e.refractionRatio = this.refractionRatio, e.fog = this.fog, e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e.wireframeLinecap = this.wireframeLinecap, e.wireframeLinejoin = this.wireframeLinejoin, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e.morphNormals = this.morphNormals, e
}, THREE.MeshDepthMaterial = function (e) {
    THREE.Material.call(this), this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e)
}, THREE.MeshDepthMaterial.prototype = Object.create(THREE.Material.prototype), THREE.MeshDepthMaterial.prototype.clone = function () {
    var e = new THREE.MeshDepthMaterial;
    return THREE.Material.prototype.clone.call(this, e), e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e
}, THREE.MeshNormalMaterial = function (e) {
    THREE.Material.call(this, e), this.shading = THREE.FlatShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.morphTargets = !1, this.setValues(e)
}, THREE.MeshNormalMaterial.prototype = Object.create(THREE.Material.prototype), THREE.MeshNormalMaterial.prototype.clone = function () {
    var e = new THREE.MeshNormalMaterial;
    return THREE.Material.prototype.clone.call(this, e), e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e
}, THREE.MeshFaceMaterial = function (e) {
    this.materials = e instanceof Array ? e : []
}, THREE.MeshFaceMaterial.prototype.clone = function () {
    for (var e = new THREE.MeshFaceMaterial, t = 0; t < this.materials.length; t++) e.materials.push(this.materials[t].clone());
    return e
}, THREE.ParticleSystemMaterial = function (e) {
    THREE.Material.call(this), this.color = new THREE.Color(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.vertexColors = !1, this.fog = !0, this.setValues(e)
}, THREE.ParticleSystemMaterial.prototype = Object.create(THREE.Material.prototype), THREE.ParticleSystemMaterial.prototype.clone = function () {
    var e = new THREE.ParticleSystemMaterial;
    return THREE.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.map = this.map, e.size = this.size, e.sizeAttenuation = this.sizeAttenuation, e.vertexColors = this.vertexColors, e.fog = this.fog, e
}, THREE.ParticleBasicMaterial = THREE.ParticleSystemMaterial, THREE.ShaderMaterial = function (e) {
    THREE.Material.call(this), this.fragmentShader = "void main() {}", this.vertexShader = "void main() {}", this.uniforms = {}, this.defines = {}, this.attributes = null, this.shading = THREE.SmoothShading, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.vertexColors = THREE.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0]
    }, this.index0AttributeName = "position", this.setValues(e)
}, THREE.ShaderMaterial.prototype = Object.create(THREE.Material.prototype), THREE.ShaderMaterial.prototype.clone = function () {
    var e = new THREE.ShaderMaterial;
    return THREE.Material.prototype.clone.call(this, e), e.fragmentShader = this.fragmentShader, e.vertexShader = this.vertexShader, e.uniforms = THREE.UniformsUtils.clone(this.uniforms), e.attributes = this.attributes, e.defines = this.defines, e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e.fog = this.fog, e.lights = this.lights, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e.morphNormals = this.morphNormals, e
}, THREE.SpriteMaterial = function (e) {
    THREE.Material.call(this), this.color = new THREE.Color(16777215), this.map = null, this.rotation = 0, this.fog = !1, this.uvOffset = new THREE.Vector2(0, 0), this.uvScale = new THREE.Vector2(1, 1), this.setValues(e)
}, THREE.SpriteMaterial.prototype = Object.create(THREE.Material.prototype), THREE.SpriteMaterial.prototype.clone = function () {
    var e = new THREE.SpriteMaterial;
    return THREE.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.map = this.map, e.rotation = this.rotation, e.uvOffset.copy(this.uvOffset), e.uvScale.copy(this.uvScale), e.fog = this.fog, e
}, THREE.SpriteCanvasMaterial = function (e) {
    THREE.Material.call(this), this.color = new THREE.Color(16777215), this.program = function (e, t) {
    }, this.setValues(e)
}, THREE.SpriteCanvasMaterial.prototype = Object.create(THREE.Material.prototype), THREE.SpriteCanvasMaterial.prototype.clone = function () {
    var e = new THREE.SpriteCanvasMaterial;
    return THREE.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.program = this.program, e
}, THREE.ParticleCanvasMaterial = THREE.SpriteCanvasMaterial, THREE.Texture = function (e, t, i, r, o, a, n, s, h) {
    this.id = THREE.TextureIdCount++, this.uuid = THREE.Math.generateUUID(), this.name = "", this.image = e, this.mipmaps = [], this.mapping = void 0 !== t ? t : new THREE.UVMapping, this.wrapS = void 0 !== i ? i : THREE.ClampToEdgeWrapping, this.wrapT = void 0 !== r ? r : THREE.ClampToEdgeWrapping, this.magFilter = void 0 !== o ? o : THREE.LinearFilter, this.minFilter = void 0 !== a ? a : THREE.LinearMipMapLinearFilter, this.anisotropy = void 0 !== h ? h : 1, this.format = void 0 !== n ? n : THREE.RGBAFormat, this.type = void 0 !== s ? s : THREE.UnsignedByteType, this.offset = new THREE.Vector2(0, 0), this.repeat = new THREE.Vector2(1, 1), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.needsUpdate = !1, this.onUpdate = null
}, THREE.Texture.prototype = {
    constructor: THREE.Texture, clone: function (e) {
        return void 0 === e && (e = new THREE.Texture), e.image = this.image, e.mipmaps = this.mipmaps.slice(0), e.mapping = this.mapping, e.wrapS = this.wrapS, e.wrapT = this.wrapT, e.magFilter = this.magFilter, e.minFilter = this.minFilter, e.anisotropy = this.anisotropy, e.format = this.format, e.type = this.type, e.offset.copy(this.offset), e.repeat.copy(this.repeat), e.generateMipmaps = this.generateMipmaps, e.premultiplyAlpha = this.premultiplyAlpha, e.flipY = this.flipY, e.unpackAlignment = this.unpackAlignment, e
    }, dispose: function () {
        this.dispatchEvent({type: "dispose"})
    }
}, THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype), THREE.TextureIdCount = 0, THREE.CompressedTexture = function (e, t, i, r, o, a, n, s, h, l, c) {
    THREE.Texture.call(this, null, a, n, s, h, l, r, o, c), this.image = {
        width: t,
        height: i
    }, this.mipmaps = e, this.generateMipmaps = !1
}, THREE.CompressedTexture.prototype = Object.create(THREE.Texture.prototype), THREE.CompressedTexture.prototype.clone = function () {
    var e = new THREE.CompressedTexture;
    return THREE.Texture.prototype.clone.call(this, e), e
}, THREE.DataTexture = function (e, t, i, r, o, a, n, s, h, l, c) {
    THREE.Texture.call(this, null, a, n, s, h, l, r, o, c), this.image = {data: e, width: t, height: i}
}, THREE.DataTexture.prototype = Object.create(THREE.Texture.prototype), THREE.DataTexture.prototype.clone = function () {
    var e = new THREE.DataTexture;
    return THREE.Texture.prototype.clone.call(this, e), e
}, THREE.ParticleSystem = function (e, t) {
    THREE.Object3D.call(this), this.geometry = void 0 !== e ? e : new THREE.Geometry, this.material = void 0 !== t ? t : new THREE.ParticleSystemMaterial({color: 16777215 * Math.random()}), this.sortParticles = !1, this.frustumCulled = !1
}, THREE.ParticleSystem.prototype = Object.create(THREE.Object3D.prototype), THREE.ParticleSystem.prototype.clone = function (e) {
    return void 0 === e && (e = new THREE.ParticleSystem(this.geometry, this.material)), e.sortParticles = this.sortParticles, THREE.Object3D.prototype.clone.call(this, e), e
}, THREE.Line = function (e, t, i) {
    THREE.Object3D.call(this), this.geometry = void 0 !== e ? e : new THREE.Geometry, this.material = void 0 !== t ? t : new THREE.LineBasicMaterial({color: 16777215 * Math.random()}), this.type = void 0 !== i ? i : THREE.LineStrip
}, THREE.LineStrip = 0, THREE.LinePieces = 1, THREE.Line.prototype = Object.create(THREE.Object3D.prototype), THREE.Line.prototype.clone = function (e) {
    return void 0 === e && (e = new THREE.Line(this.geometry, this.material, this.type)), THREE.Object3D.prototype.clone.call(this, e), e
}, THREE.Mesh = function (e, t) {
    THREE.Object3D.call(this), this.geometry = void 0 !== e ? e : new THREE.Geometry, this.material = void 0 !== t ? t : new THREE.MeshBasicMaterial({color: 16777215 * Math.random()}), this.updateMorphTargets()
}, THREE.Mesh.prototype = Object.create(THREE.Object3D.prototype), THREE.Mesh.prototype.updateMorphTargets = function () {
    if (this.geometry.morphTargets.length > 0) {
        this.morphTargetBase = -1, this.morphTargetForcedOrder = [], this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (var e = 0, t = this.geometry.morphTargets.length; e < t; e++) this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[e].name] = e
    }
}, THREE.Mesh.prototype.getMorphTargetIndexByName = function (e) {
    return void 0 !== this.morphTargetDictionary[e] ? this.morphTargetDictionary[e] : 0
}, THREE.Mesh.prototype.clone = function (e) {
    return void 0 === e && (e = new THREE.Mesh(this.geometry, this.material)), THREE.Object3D.prototype.clone.call(this, e), e
}, THREE.Bone = function (e) {
    THREE.Object3D.call(this), this.skin = e, this.skinMatrix = new THREE.Matrix4
}, THREE.Bone.prototype = Object.create(THREE.Object3D.prototype), THREE.Bone.prototype.update = function (e, t) {
    this.matrixAutoUpdate && (t |= this.updateMatrix()), (t || this.matrixWorldNeedsUpdate) && (e ? this.skinMatrix.multiplyMatrices(e, this.matrix) : this.skinMatrix.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
    var i, r = this.children.length;
    for (i = 0; i < r; i++) this.children[i].update(this.skinMatrix, t)
}, THREE.SkinnedMesh = function (e, t, i) {
    THREE.Mesh.call(this, e, t), this.useVertexTexture = void 0 === i || i, this.identityMatrix = new THREE.Matrix4, this.bones = [], this.boneMatrices = [];
    var r, o, a, n, s, h;
    if (this.geometry && void 0 !== this.geometry.bones) {
        for (r = 0; r < this.geometry.bones.length; r++) a = this.geometry.bones[r], n = a.pos, s = a.rotq, h = a.scl, o = this.addBone(), o.name = a.name, o.position.set(n[0], n[1], n[2]), o.quaternion.set(s[0], s[1], s[2], s[3]), void 0 !== h ? o.scale.set(h[0], h[1], h[2]) : o.scale.set(1, 1, 1);
        for (r = 0; r < this.bones.length; r++) a = this.geometry.bones[r], o = this.bones[r], a.parent === -1 ? this.add(o) : this.bones[a.parent].add(o);
        var l = this.bones.length;
        if (this.useVertexTexture) {
            var c;
            c = l > 256 ? 64 : l > 64 ? 32 : l > 16 ? 16 : 8, this.boneTextureWidth = c, this.boneTextureHeight = c, this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4), this.boneTexture = new THREE.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, THREE.RGBAFormat, THREE.FloatType), this.boneTexture.minFilter = THREE.NearestFilter, this.boneTexture.magFilter = THREE.NearestFilter, this.boneTexture.generateMipmaps = !1, this.boneTexture.flipY = !1
        } else this.boneMatrices = new Float32Array(16 * l);
        this.pose()
    }
}, THREE.SkinnedMesh.prototype = Object.create(THREE.Mesh.prototype), THREE.SkinnedMesh.prototype.addBone = function (e) {
    return void 0 === e && (e = new THREE.Bone(this)), this.bones.push(e), e
}, THREE.SkinnedMesh.prototype.updateMatrixWorld = function () {
    var e = new THREE.Matrix4;
    return function (t) {
        this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.parent ? this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
        for (var i = 0, r = this.children.length; i < r; i++) {
            var o = this.children[i];
            o instanceof THREE.Bone ? o.update(this.identityMatrix, !1) : o.updateMatrixWorld(!0)
        }
        if (void 0 == this.boneInverses) {
            this.boneInverses = [];
            for (var a = 0, n = this.bones.length; a < n; a++) {
                var s = new THREE.Matrix4;
                s.getInverse(this.bones[a].skinMatrix), this.boneInverses.push(s)
            }
        }
        for (var a = 0, n = this.bones.length; a < n; a++) e.multiplyMatrices(this.bones[a].skinMatrix, this.boneInverses[a]), e.flattenToArrayOffset(this.boneMatrices, 16 * a);
        this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
    }
}(), THREE.SkinnedMesh.prototype.pose = function () {
    this.updateMatrixWorld(!0), this.normalizeSkinWeights()
}, THREE.SkinnedMesh.prototype.normalizeSkinWeights = function () {
    if (this.geometry instanceof THREE.Geometry) for (var e = 0; e < this.geometry.skinIndices.length; e++) {
        var t = this.geometry.skinWeights[e], i = 1 / t.lengthManhattan();
        i !== 1 / 0 ? t.multiplyScalar(i) : t.set(1)
    }
}, THREE.SkinnedMesh.prototype.clone = function (e) {
    return void 0 === e && (e = new THREE.SkinnedMesh(this.geometry, this.material, this.useVertexTexture)), THREE.Mesh.prototype.clone.call(this, e), e
}, THREE.MorphAnimMesh = function (e, t) {
    THREE.Mesh.call(this, e, t), this.duration = 1e3, this.mirroredLoop = !1, this.time = 0, this.lastKeyframe = 0, this.currentKeyframe = 0, this.direction = 1, this.directionBackwards = !1, this.setFrameRange(0, this.geometry.morphTargets.length - 1)
}, THREE.MorphAnimMesh.prototype = Object.create(THREE.Mesh.prototype), THREE.MorphAnimMesh.prototype.setFrameRange = function (e, t) {
    this.startKeyframe = e, this.endKeyframe = t, this.length = this.endKeyframe - this.startKeyframe + 1
}, THREE.MorphAnimMesh.prototype.setDirectionForward = function () {
    this.direction = 1, this.directionBackwards = !1
}, THREE.MorphAnimMesh.prototype.setDirectionBackward = function () {
    this.direction = -1, this.directionBackwards = !0
}, THREE.MorphAnimMesh.prototype.parseAnimations = function () {
    var e = this.geometry;
    e.animations || (e.animations = {});
    for (var t, i = e.animations, r = 0, o = e.morphTargets.length; r < o; r++) {
        var a = e.morphTargets[r], n = a.name.match(/([a-z]+)(\d+)/);
        if (n && n.length > 1) {
            var s = n[1];
            n[2];
            i[s] || (i[s] = {start: 1 / 0, end: -(1 / 0)});
            var h = i[s];
            r < h.start && (h.start = r), r > h.end && (h.end = r), t || (t = s)
        }
    }
    e.firstAnimation = t
}, THREE.MorphAnimMesh.prototype.setAnimationLabel = function (e, t, i) {
    this.geometry.animations || (this.geometry.animations = {}), this.geometry.animations[e] = {start: t, end: i}
}, THREE.MorphAnimMesh.prototype.playAnimation = function (e, t) {
    var i = this.geometry.animations[e];
    i && (this.setFrameRange(i.start, i.end), this.duration = (i.end - i.start) / t * 1e3, this.time = 0)
}, THREE.MorphAnimMesh.prototype.updateAnimation = function (e) {
    var t = this.duration / this.length;
    this.time += this.direction * e, this.mirroredLoop ? (this.time > this.duration || this.time < 0) && (this.direction *= -1, this.time > this.duration && (this.time = this.duration, this.directionBackwards = !0), this.time < 0 && (this.time = 0, this.directionBackwards = !1)) : (this.time = this.time % this.duration, this.time < 0 && (this.time += this.duration));
    var i = this.startKeyframe + THREE.Math.clamp(Math.floor(this.time / t), 0, this.length - 1);
    i !== this.currentKeyframe && (this.morphTargetInfluences[this.lastKeyframe] = 0, this.morphTargetInfluences[this.currentKeyframe] = 1, this.morphTargetInfluences[i] = 0, this.lastKeyframe = this.currentKeyframe, this.currentKeyframe = i);
    var r = this.time % t / t;
    this.directionBackwards && (r = 1 - r), this.morphTargetInfluences[this.currentKeyframe] = r, this.morphTargetInfluences[this.lastKeyframe] = 1 - r
}, THREE.MorphAnimMesh.prototype.clone = function (e) {
    return void 0 === e && (e = new THREE.MorphAnimMesh(this.geometry, this.material)), e.duration = this.duration, e.mirroredLoop = this.mirroredLoop, e.time = this.time, e.lastKeyframe = this.lastKeyframe, e.currentKeyframe = this.currentKeyframe, e.direction = this.direction, e.directionBackwards = this.directionBackwards, THREE.Mesh.prototype.clone.call(this, e), e
}, THREE.LOD = function () {
    THREE.Object3D.call(this), this.objects = []
}, THREE.LOD.prototype = Object.create(THREE.Object3D.prototype), THREE.LOD.prototype.addLevel = function (e, t) {
    void 0 === t && (t = 0), t = Math.abs(t);
    for (var i = 0; i < this.objects.length && !(t < this.objects[i].distance); i++) ;
    this.objects.splice(i, 0, {distance: t, object: e}), this.add(e)
}, THREE.LOD.prototype.getObjectForDistance = function (e) {
    for (var t = 1, i = this.objects.length; t < i && !(e < this.objects[t].distance); t++) ;
    return this.objects[t - 1].object
}, THREE.LOD.prototype.update = function () {
    var e = new THREE.Vector3, t = new THREE.Vector3;
    return function (i) {
        if (this.objects.length > 1) {
            e.getPositionFromMatrix(i.matrixWorld), t.getPositionFromMatrix(this.matrixWorld);
            var r = e.distanceTo(t);
            this.objects[0].object.visible = !0;
            for (var o = 1, a = this.objects.length; o < a && r >= this.objects[o].distance; o++) this.objects[o - 1].object.visible = !1, this.objects[o].object.visible = !0;
            for (; o < a; o++) this.objects[o].object.visible = !1
        }
    }
}(), THREE.LOD.prototype.clone = function () {
}, THREE.Sprite = function (e) {
    THREE.Object3D.call(this), this.material = void 0 !== e ? e : new THREE.SpriteMaterial
}, THREE.Sprite.prototype = Object.create(THREE.Object3D.prototype), THREE.Sprite.prototype.updateMatrix = function () {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
}, THREE.Sprite.prototype.clone = function (e) {
    return void 0 === e && (e = new THREE.Sprite(this.material)), THREE.Object3D.prototype.clone.call(this, e), e
}, THREE.Particle = THREE.Sprite, THREE.Scene = function () {
    THREE.Object3D.call(this), this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, this.matrixAutoUpdate = !1, this.__lights = [], this.__objectsAdded = [], this.__objectsRemoved = []
}, THREE.Scene.prototype = Object.create(THREE.Object3D.prototype), THREE.Scene.prototype.__addObject = function (e) {
    if (e instanceof THREE.Light) this.__lights.indexOf(e) === -1 && this.__lights.push(e), e.target && void 0 === e.target.parent && this.add(e.target); else if (!(e instanceof THREE.Camera || e instanceof THREE.Bone)) {
        this.__objectsAdded.push(e);
        var t = this.__objectsRemoved.indexOf(e);
        t !== -1 && this.__objectsRemoved.splice(t, 1)
    }
    for (var i = 0; i < e.children.length; i++) this.__addObject(e.children[i])
}, THREE.Scene.prototype.__removeObject = function (e) {
    if (e instanceof THREE.Light) {
        var t = this.__lights.indexOf(e);
        if (t !== -1 && this.__lights.splice(t, 1), e.shadowCascadeArray) for (var i = 0; i < e.shadowCascadeArray.length; i++) this.__removeObject(e.shadowCascadeArray[i])
    } else if (!(e instanceof THREE.Camera)) {
        this.__objectsRemoved.push(e);
        var t = this.__objectsAdded.indexOf(e);
        t !== -1 && this.__objectsAdded.splice(t, 1)
    }
    for (var r = 0; r < e.children.length; r++) this.__removeObject(e.children[r])
}, THREE.Scene.prototype.clone = function (e) {
    return void 0 === e && (e = new THREE.Scene), THREE.Object3D.prototype.clone.call(this, e), null !== this.fog && (e.fog = this.fog.clone()), null !== this.overrideMaterial && (e.overrideMaterial = this.overrideMaterial.clone()), e.autoUpdate = this.autoUpdate, e.matrixAutoUpdate = this.matrixAutoUpdate, e
},THREE.Fog = function (e, t, i) {
    this.name = "", this.color = new THREE.Color(e), this.near = void 0 !== t ? t : 1, this.far = void 0 !== i ? i : 1e3
},THREE.Fog.prototype.clone = function () {
    return new THREE.Fog(this.color.getHex(), this.near, this.far)
},THREE.FogExp2 = function (e, t) {
    this.name = "", this.color = new THREE.Color(e), this.density = void 0 !== t ? t : 25e-5
},THREE.FogExp2.prototype.clone = function () {
    return new THREE.FogExp2(this.color.getHex(), this.density)
},THREE.CanvasRenderer = function (e) {
    function t() {
        Ae.setRGB(0, 0, 0), Ce.setRGB(0, 0, 0), Le.setRGB(0, 0, 0);
        for (var e = 0, t = _.length; e < t; e++) {
            var i = _[e], r = i.color;
            i instanceof THREE.AmbientLight ? Ae.add(r) : i instanceof THREE.DirectionalLight ? Ce.add(r) : i instanceof THREE.PointLight && Le.add(r)
        }
    }

    function i(e, t, i) {
        for (var r = 0, o = _.length; r < o; r++) {
            var a = _[r];
            if (He.copy(a.color), a instanceof THREE.DirectionalLight) {
                var n = Pe.getPositionFromMatrix(a.matrixWorld).normalize(), s = t.dot(n);
                if (s <= 0) continue;
                s *= a.intensity, i.add(He.multiplyScalar(s))
            } else if (a instanceof THREE.PointLight) {
                var n = Pe.getPositionFromMatrix(a.matrixWorld), s = t.dot(Pe.subVectors(n, e).normalize());
                if (s <= 0) continue;
                if (0 == (s *= 0 == a.distance ? 1 : 1 - Math.min(e.distanceTo(n) / a.distance, 1))) continue;
                s *= a.intensity, i.add(He.multiplyScalar(s))
            }
        }
    }

    function r(e, t, i) {
        f(i.opacity), E(i.blending);
        var r = t.scale.x * ie, o = t.scale.y * re;
        if (Se.min.set(e.x - .5 * r, e.y - .5 * o), Se.max.set(e.x + .5 * r, e.y + .5 * o), be.isIntersectionBox(Se) === !1) return void Se.makeEmpty();
        if (i instanceof THREE.SpriteMaterial || i instanceof THREE.ParticleSystemMaterial) if (null !== i.map) {
            var a = i.map.image;
            oe.save(), oe.translate(e.x, e.y), oe.rotate(-i.rotation), oe.scale(r, -o), oe.drawImage(a, 0, 0, a.width, a.height, -.5, -.5, 1, 1), oe.restore()
        } else T(i.color.getStyle()), oe.save(), oe.translate(e.x, e.y), oe.rotate(-t.rotation), oe.scale(r, o), oe.fillRect(-.5, -.5, 1, 1), oe.restore(); else i instanceof THREE.SpriteCanvasMaterial && (v(i.color.getStyle()), T(i.color.getStyle()), oe.save(), oe.translate(e.x, e.y), oe.rotate(-t.rotation), oe.scale(r, o), i.program(oe), oe.restore())
    }

    function o(e, t, i, r) {
        if (f(r.opacity), E(r.blending), oe.beginPath(), oe.moveTo(e.positionScreen.x, e.positionScreen.y), oe.lineTo(t.positionScreen.x, t.positionScreen.y), r instanceof THREE.LineBasicMaterial) {
            if (d(r.linewidth), m(r.linecap), g(r.linejoin), r.vertexColors !== THREE.VertexColors) v(r.color.getStyle()); else {
                var o = i.vertexColors[0].getStyle(), a = i.vertexColors[1].getStyle();
                if (o === a) v(o); else {
                    try {
                        var n = oe.createLinearGradient(e.positionScreen.x, e.positionScreen.y, t.positionScreen.x, t.positionScreen.y);
                        n.addColorStop(0, o), n.addColorStop(1, a)
                    } catch (e) {
                        n = o
                    }
                    v(n)
                }
            }
            oe.stroke(), Se.expandByScalar(2 * r.linewidth)
        } else r instanceof THREE.LineDashedMaterial && (d(r.linewidth), m(r.linecap), g(r.linejoin), v(r.color.getStyle()), y(r.dashSize, r.gapSize), oe.stroke(), Se.expandByScalar(2 * r.linewidth), y(null, null))
    }

    function a(e, t, r, o, a, p, d, m) {
        if (Q.info.render.vertices += 3, Q.info.render.faces++, f(m.opacity), E(m.blending), A = e.positionScreen.x, C = e.positionScreen.y, L = t.positionScreen.x, P = t.positionScreen.y, D = r.positionScreen.x, F = r.positionScreen.y, n(A, C, L, P, D, F), (m instanceof THREE.MeshLambertMaterial || m instanceof THREE.MeshPhongMaterial) && null === m.map) Re.copy(m.color), xe.copy(m.emissive), m.vertexColors === THREE.FaceColors && Re.multiply(d.color), m.wireframe === !1 && m.shading === THREE.SmoothShading && 3 === d.vertexNormalsLength ? (ge.copy(Ae), ve.copy(Ae), Te.copy(Ae), i(d.v1.positionWorld, d.vertexNormalsModel[0], ge), i(d.v2.positionWorld, d.vertexNormalsModel[1], ve), i(d.v3.positionWorld, d.vertexNormalsModel[2], Te), ge.multiply(Re).add(xe), ve.multiply(Re).add(xe), Te.multiply(Re).add(xe), ye.addColors(ve, Te).multiplyScalar(.5), z = u(ge, ve, Te, ye), c(A, C, L, P, D, F, 0, 0, 1, 0, 0, 1, z)) : (me.copy(Ae), i(d.centroidModel, d.normalModel, me), me.multiply(Re).add(xe), m.wireframe === !0 ? s(me, m.wireframeLinewidth, m.wireframeLinecap, m.wireframeLinejoin) : h(me)); else if (m instanceof THREE.MeshBasicMaterial || m instanceof THREE.MeshLambertMaterial || m instanceof THREE.MeshPhongMaterial) null !== m.map ? m.map.mapping instanceof THREE.UVMapping && (B = d.uvs[0], l(A, C, L, P, D, F, B[o].x, B[o].y, B[a].x, B[a].y, B[p].x, B[p].y, m.map)) : null !== m.envMap ? m.envMap.mapping instanceof THREE.SphericalReflectionMapping && (Pe.copy(d.vertexNormalsModelView[o]), N = .5 * Pe.x + .5, O = .5 * Pe.y + .5, Pe.copy(d.vertexNormalsModelView[a]), I = .5 * Pe.x + .5, k = .5 * Pe.y + .5, Pe.copy(d.vertexNormalsModelView[p]), G = .5 * Pe.x + .5, W = .5 * Pe.y + .5, l(A, C, L, P, D, F, N, O, I, k, G, W, m.envMap)) : (me.copy(m.color), m.vertexColors === THREE.FaceColors && me.multiply(d.color), m.wireframe === !0 ? s(me, m.wireframeLinewidth, m.wireframeLinecap, m.wireframeLinejoin) : h(me)); else if (m instanceof THREE.MeshDepthMaterial) V = w.near, U = w.far, ge.r = ge.g = ge.b = 1 - R(e.positionScreen.z * e.positionScreen.w, V, U), ve.r = ve.g = ve.b = 1 - R(t.positionScreen.z * t.positionScreen.w, V, U), Te.r = Te.g = Te.b = 1 - R(r.positionScreen.z * r.positionScreen.w, V, U), ye.addColors(ve, Te).multiplyScalar(.5), z = u(ge, ve, Te, ye), c(A, C, L, P, D, F, 0, 0, 1, 0, 0, 1, z); else if (m instanceof THREE.MeshNormalMaterial) {
            var g;
            m.shading === THREE.FlatShading ? (g = d.normalModelView, me.setRGB(g.x, g.y, g.z).multiplyScalar(.5).addScalar(.5), m.wireframe === !0 ? s(me, m.wireframeLinewidth, m.wireframeLinecap, m.wireframeLinejoin) : h(me)) : m.shading === THREE.SmoothShading && (g = d.vertexNormalsModelView[o], ge.setRGB(g.x, g.y, g.z).multiplyScalar(.5).addScalar(.5), g = d.vertexNormalsModelView[a], ve.setRGB(g.x, g.y, g.z).multiplyScalar(.5).addScalar(.5), g = d.vertexNormalsModelView[p], Te.setRGB(g.x, g.y, g.z).multiplyScalar(.5).addScalar(.5), ye.addColors(ve, Te).multiplyScalar(.5), z = u(ge, ve, Te, ye), c(A, C, L, P, D, F, 0, 0, 1, 0, 0, 1, z))
        }
    }

    function n(e, t, i, r, o, a) {
        oe.beginPath(), oe.moveTo(e, t), oe.lineTo(i, r), oe.lineTo(o, a), oe.closePath()
    }

    function s(e, t, i, r) {
        d(t), m(i), g(r), v(e.getStyle()), oe.stroke(), Se.expandByScalar(2 * t)
    }

    function h(e) {
        T(e.getStyle()), oe.fill()
    }

    function l(e, t, i, r, o, a, n, s, l, c, u, p, f) {
        if (!(f instanceof THREE.DataTexture || void 0 === f.image || 0 === f.image.width)) {
            if (f.needsUpdate === !0) {
                var E = f.wrapS === THREE.RepeatWrapping, d = f.wrapT === THREE.RepeatWrapping;
                _e[f.id] = oe.createPattern(f.image, E === !0 && d === !0 ? "repeat" : E === !0 && d === !1 ? "repeat-x" : E === !1 && d === !0 ? "repeat-y" : "no-repeat"), f.needsUpdate = !1
            }
            T(void 0 === _e[f.id] ? "rgba(0,0,0,1)" : _e[f.id]);
            var m, g, v, y, R, x, H, _, w = f.offset.x / f.repeat.x, b = f.offset.y / f.repeat.y,
                M = f.image.width * f.repeat.x, S = f.image.height * f.repeat.y;
            if (n = (n + w) * M, s = (1 - s + b) * S, l = (l + w) * M, c = (1 - c + b) * S, u = (u + w) * M, p = (1 - p + b) * S, i -= e, r -= t, o -= e, a -= t, l -= n, c -= s, u -= n, p -= s, 0 === (H = l * p - u * c)) {
                if (void 0 === we[f.id]) {
                    var A = document.createElement("canvas");
                    A.width = f.image.width, A.height = f.image.height;
                    var C = A.getContext("2d");
                    C.drawImage(f.image, 0, 0), we[f.id] = C.getImageData(0, 0, f.image.width, f.image.height).data
                }
                var L = we[f.id], P = 4 * (Math.floor(n) + Math.floor(s) * f.image.width);
                return me.setRGB(L[P] / 255, L[P + 1] / 255, L[P + 2] / 255), void h(me)
            }
            _ = 1 / H, m = (p * i - c * o) * _, g = (p * r - c * a) * _, v = (l * o - u * i) * _, y = (l * a - u * r) * _, R = e - m * n - v * s, x = t - g * n - y * s, oe.save(), oe.transform(m, g, v, y, R, x), oe.fill(), oe.restore()
        }
    }

    function c(e, t, i, r, o, a, n, s, h, l, c, u, p) {
        var f, E, d, m, g, v, T, y, R = p.width - 1, x = p.height - 1;
        n *= R, s *= x, h *= R, l *= x, c *= R, u *= x, i -= e, r -= t, o -= e, a -= t, h -= n, l -= s, c -= n, u -= s, T = h * u - c * l, y = 1 / T, f = (u * i - l * o) * y, E = (u * r - l * a) * y, d = (h * o - c * i) * y, m = (h * a - c * r) * y, g = e - f * n - d * s, v = t - E * n - m * s, oe.save(), oe.transform(f, E, d, m, g, v), oe.clip(), oe.drawImage(p, 0, 0), oe.restore()
    }

    function u(e, t, i, r) {
        return Y[0] = 255 * e.r | 0, Y[1] = 255 * e.g | 0, Y[2] = 255 * e.b | 0, Y[4] = 255 * t.r | 0, Y[5] = 255 * t.g | 0, Y[6] = 255 * t.b | 0, Y[8] = 255 * i.r | 0, Y[9] = 255 * i.g | 0, Y[10] = 255 * i.b | 0, Y[12] = 255 * r.r | 0, Y[13] = 255 * r.g | 0, Y[14] = 255 * r.b | 0, X.putImageData(q, 0, 0), Z.drawImage(j, 0, 0), K
    }

    function p(e, t, i) {
        var r, o = t.x - e.x, a = t.y - e.y, n = o * o + a * a;
        0 !== n && (r = i / Math.sqrt(n), o *= r, a *= r, t.x += o, t.y += a, e.x -= o, e.y -= a)
    }

    function f(e) {
        se !== e && (oe.globalAlpha = e, se = e)
    }

    function E(e) {
        he !== e && (e === THREE.NormalBlending ? oe.globalCompositeOperation = "source-over" : e === THREE.AdditiveBlending ? oe.globalCompositeOperation = "lighter" : e === THREE.SubtractiveBlending && (oe.globalCompositeOperation = "darker"), he = e)
    }

    function d(e) {
        ue !== e && (oe.lineWidth = e, ue = e)
    }

    function m(e) {
        pe !== e && (oe.lineCap = e, pe = e)
    }

    function g(e) {
        fe !== e && (oe.lineJoin = e, fe = e)
    }

    function v(e) {
        le !== e && (oe.strokeStyle = e, le = e)
    }

    function T(e) {
        ce !== e && (oe.fillStyle = e, ce = e)
    }

    function y(e, t) {
        Ee === e && de === t || (oe.setLineDash([e, t]), Ee = e, de = t)
    }

    var R = THREE.Math.smoothstep;
    e = e || {};
    var x, H, _, w, b, M, S, A, C, L, P, D, F, V, U, z, B, N, O, I, k, G, W, j, X, q, Y, K, Z, Q = this,
        J = new THREE.Projector, $ = void 0 !== e.canvas ? e.canvas : document.createElement("canvas"), ee = $.width,
        te = $.height, ie = Math.floor(ee / 2), re = Math.floor(te / 2), oe = $.getContext("2d"),
        ae = new THREE.Color(0), ne = 0, se = 1, he = 0, le = null, ce = null, ue = null, pe = null, fe = null,
        Ee = null, de = 0, me = (new THREE.RenderableVertex, new THREE.RenderableVertex, new THREE.Color),
        ge = new THREE.Color, ve = new THREE.Color, Te = new THREE.Color, ye = new THREE.Color, Re = new THREE.Color,
        xe = new THREE.Color, He = new THREE.Color, _e = {}, we = {}, be = new THREE.Box2, Me = new THREE.Box2,
        Se = new THREE.Box2, Ae = new THREE.Color, Ce = new THREE.Color, Le = new THREE.Color, Pe = new THREE.Vector3,
        De = 16;
    j = document.createElement("canvas"), j.width = j.height = 2, X = j.getContext("2d"), X.fillStyle = "rgba(0,0,0,1)", X.fillRect(0, 0, 2, 2), q = X.getImageData(0, 0, 2, 2), Y = q.data, K = document.createElement("canvas"), K.width = K.height = De, Z = K.getContext("2d"), Z.translate(-De / 2, -De / 2), Z.scale(De, De), De--, void 0 === oe.setLineDash && (void 0 !== oe.mozDash ? oe.setLineDash = function (e) {
        oe.mozDash = null !== e[0] ? e : null
    } : oe.setLineDash = function () {
    }), this.domElement = $, this.devicePixelRatio = void 0 !== e.devicePixelRatio ? e.devicePixelRatio : void 0 !== self.devicePixelRatio ? self.devicePixelRatio : 1, this.autoClear = !0, this.sortObjects = !0, this.sortElements = !0, this.info = {
        render: {
            vertices: 0,
            faces: 0
        }
    }, this.supportsVertexTextures = function () {
    }, this.setFaceCulling = function () {
    }, this.setSize = function (e, t, i) {
        ee = e * this.devicePixelRatio, te = t * this.devicePixelRatio, ie = Math.floor(ee / 2), re = Math.floor(te / 2), $.width = ee, $.height = te, 1 !== this.devicePixelRatio && i !== !1 && ($.style.width = e + "px", $.style.height = t + "px"), be.set(new THREE.Vector2(-ie, -re), new THREE.Vector2(ie, re)), Me.set(new THREE.Vector2(-ie, -re), new THREE.Vector2(ie, re)), se = 1, he = 0, le = null, ce = null, ue = null, pe = null, fe = null
    }, this.setClearColor = function (e, t) {
        ae.set(e), ne = void 0 !== t ? t : 1, Me.set(new THREE.Vector2(-ie, -re), new THREE.Vector2(ie, re))
    }, this.setClearColorHex = function (e, t) {
        this.setClearColor(e, t)
    }, this.getMaxAnisotropy = function () {
        return 0
    }, this.clear = function () {
        oe.setTransform(1, 0, 0, -1, ie, re), Me.empty() === !1 && (Me.intersect(be), Me.expandByScalar(2), ne < 1 && oe.clearRect(0 | Me.min.x, 0 | Me.min.y, Me.max.x - Me.min.x | 0, Me.max.y - Me.min.y | 0), ne > 0 && (E(THREE.NormalBlending), f(1), T("rgba(" + Math.floor(255 * ae.r) + "," + Math.floor(255 * ae.g) + "," + Math.floor(255 * ae.b) + "," + ne + ")"), oe.fillRect(0 | Me.min.x, 0 | Me.min.y, Me.max.x - Me.min.x | 0, Me.max.y - Me.min.y | 0)), Me.makeEmpty())
    }, this.render = function (e, i) {
        if (i instanceof THREE.Camera != !1) {
            this.autoClear === !0 && this.clear(), oe.setTransform(1, 0, 0, -1, ie, re), Q.info.render.vertices = 0, Q.info.render.faces = 0, x = J.projectScene(e, i, this.sortObjects, this.sortElements), H = x.elements, _ = x.lights, w = i, t();
            for (var n = 0, s = H.length; n < s; n++) {
                var h = H[n], l = h.material;
                if (void 0 !== l && l.visible !== !1) {
                    if (Se.makeEmpty(), h instanceof THREE.RenderableSprite) b = h, b.x *= ie, b.y *= re, r(b, h, l); else if (h instanceof THREE.RenderableLine) b = h.v1, M = h.v2, b.positionScreen.x *= ie, b.positionScreen.y *= re, M.positionScreen.x *= ie, M.positionScreen.y *= re, Se.setFromPoints([b.positionScreen, M.positionScreen]), be.isIntersectionBox(Se) === !0 && o(b, M, h, l); else if (h instanceof THREE.RenderableFace3) {
                        if (b = h.v1, M = h.v2, S = h.v3, b.positionScreen.z < -1 || b.positionScreen.z > 1) continue;
                        if (M.positionScreen.z < -1 || M.positionScreen.z > 1) continue;
                        if (S.positionScreen.z < -1 || S.positionScreen.z > 1) continue;
                        b.positionScreen.x *= ie, b.positionScreen.y *= re, M.positionScreen.x *= ie, M.positionScreen.y *= re, S.positionScreen.x *= ie, S.positionScreen.y *= re, l.overdraw > 0 && (p(b.positionScreen, M.positionScreen, l.overdraw), p(M.positionScreen, S.positionScreen, l.overdraw), p(S.positionScreen, b.positionScreen, l.overdraw)), Se.setFromPoints([b.positionScreen, M.positionScreen, S.positionScreen]), be.isIntersectionBox(Se) === !0 && a(b, M, S, 0, 1, 2, h, l)
                    }
                    Me.union(Se)
                }
            }
            oe.setTransform(1, 0, 0, 1, 0, 0)
        }
    }
},THREE.ShaderChunk = {
    fog_pars_fragment: ["#ifdef USE_FOG", "uniform vec3 fogColor;", "#ifdef FOG_EXP2", "uniform float fogDensity;", "#else", "uniform float fogNear;", "uniform float fogFar;", "#endif", "#endif"].join("\n"),
    fog_fragment: ["#ifdef USE_FOG", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "#ifdef FOG_EXP2", "const float LOG2 = 1.442695;", "float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "#else", "float fogFactor = smoothstep( fogNear, fogFar, depth );", "#endif", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "#endif"].join("\n"),
    envmap_pars_fragment: ["#ifdef USE_ENVMAP", "uniform float reflectivity;", "uniform samplerCube envMap;", "uniform float flipEnvMap;", "uniform int combine;", "#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )", "uniform bool useRefract;", "uniform float refractionRatio;", "#else", "varying vec3 vReflect;", "#endif", "#endif"].join("\n"),
    envmap_fragment: ["#ifdef USE_ENVMAP", "vec3 reflectVec;", "#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )", "vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );", "if ( useRefract ) {", "reflectVec = refract( cameraToVertex, normal, refractionRatio );", "} else { ", "reflectVec = reflect( cameraToVertex, normal );", "}", "#else", "reflectVec = vReflect;", "#endif", "#ifdef DOUBLE_SIDED", "float flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );", "vec4 cubeColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );", "#else", "vec4 cubeColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );", "#endif", "#ifdef GAMMA_INPUT", "cubeColor.xyz *= cubeColor.xyz;", "#endif", "if ( combine == 1 ) {", "gl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularStrength * reflectivity );", "} else if ( combine == 2 ) {", "gl_FragColor.xyz += cubeColor.xyz * specularStrength * reflectivity;", "} else {", "gl_FragColor.xyz = mix( gl_FragColor.xyz, gl_FragColor.xyz * cubeColor.xyz, specularStrength * reflectivity );", "}", "#endif"].join("\n"),
    envmap_pars_vertex: ["#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )", "varying vec3 vReflect;", "uniform float refractionRatio;", "uniform bool useRefract;", "#endif"].join("\n"),
    worldpos_vertex: ["#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )", "#ifdef USE_SKINNING", "vec4 worldPosition = modelMatrix * skinned;", "#endif", "#if defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )", "vec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );", "#endif", "#if ! defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )", "vec4 worldPosition = modelMatrix * vec4( position, 1.0 );", "#endif", "#endif"].join("\n"),
    envmap_vertex: ["#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )", "vec3 worldNormal = mat3( modelMatrix[ 0 ].xyz, modelMatrix[ 1 ].xyz, modelMatrix[ 2 ].xyz ) * objectNormal;", "worldNormal = normalize( worldNormal );", "vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );", "if ( useRefract ) {", "vReflect = refract( cameraToVertex, worldNormal, refractionRatio );", "} else {", "vReflect = reflect( cameraToVertex, worldNormal );", "}", "#endif"].join("\n"),
    map_particle_pars_fragment: ["#ifdef USE_MAP", "uniform sampler2D map;", "#endif"].join("\n"),
    map_particle_fragment: ["#ifdef USE_MAP", "gl_FragColor = gl_FragColor * texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) );", "#endif"].join("\n"),
    map_pars_vertex: ["#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )", "varying vec2 vUv;", "uniform vec4 offsetRepeat;", "#endif"].join("\n"),
    map_pars_fragment: ["#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )", "varying vec2 vUv;", "#endif", "#ifdef USE_MAP", "uniform sampler2D map;", "#endif"].join("\n"),
    map_vertex: ["#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )", "vUv = uv * offsetRepeat.zw + offsetRepeat.xy;", "#endif"].join("\n"),
    map_fragment: ["#ifdef USE_MAP", "vec4 texelColor = texture2D( map, vUv );", "#ifdef GAMMA_INPUT", "texelColor.xyz *= texelColor.xyz;", "#endif", "gl_FragColor = gl_FragColor * texelColor;", "#endif"].join("\n"),
    lightmap_pars_fragment: ["#ifdef USE_LIGHTMAP", "varying vec2 vUv2;", "uniform sampler2D lightMap;", "#endif"].join("\n"),
    lightmap_pars_vertex: ["#ifdef USE_LIGHTMAP", "varying vec2 vUv2;", "#endif"].join("\n"),
    lightmap_fragment: ["#ifdef USE_LIGHTMAP", "gl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );", "#endif"].join("\n"),
    lightmap_vertex: ["#ifdef USE_LIGHTMAP", "vUv2 = uv2;", "#endif"].join("\n"),
    bumpmap_pars_fragment: ["#ifdef USE_BUMPMAP", "uniform sampler2D bumpMap;", "uniform float bumpScale;", "vec2 dHdxy_fwd() {", "vec2 dSTdx = dFdx( vUv );", "vec2 dSTdy = dFdy( vUv );", "float Hll = bumpScale * texture2D( bumpMap, vUv ).x;", "float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;", "float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;", "return vec2( dBx, dBy );", "}", "vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {", "vec3 vSigmaX = dFdx( surf_pos );", "vec3 vSigmaY = dFdy( surf_pos );", "vec3 vN = surf_norm;", "vec3 R1 = cross( vSigmaY, vN );", "vec3 R2 = cross( vN, vSigmaX );", "float fDet = dot( vSigmaX, R1 );", "vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );", "return normalize( abs( fDet ) * surf_norm - vGrad );", "}", "#endif"].join("\n"),
    normalmap_pars_fragment: ["#ifdef USE_NORMALMAP", "uniform sampler2D normalMap;", "uniform vec2 normalScale;", "vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {", "vec3 q0 = dFdx( eye_pos.xyz );", "vec3 q1 = dFdy( eye_pos.xyz );", "vec2 st0 = dFdx( vUv.st );", "vec2 st1 = dFdy( vUv.st );", "vec3 S = normalize(  q0 * st1.t - q1 * st0.t );", "vec3 T = normalize( -q0 * st1.s + q1 * st0.s );", "vec3 N = normalize( surf_norm );", "vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;", "mapN.xy = normalScale * mapN.xy;", "mat3 tsn = mat3( S, T, N );", "return normalize( tsn * mapN );", "}", "#endif"].join("\n"),
    specularmap_pars_fragment: ["#ifdef USE_SPECULARMAP", "uniform sampler2D specularMap;", "#endif"].join("\n"),
    specularmap_fragment: ["float specularStrength;", "#ifdef USE_SPECULARMAP", "vec4 texelSpecular = texture2D( specularMap, vUv );", "specularStrength = texelSpecular.r;", "#else", "specularStrength = 1.0;", "#endif"].join("\n"),
    lights_lambert_pars_vertex: ["uniform vec3 ambient;", "uniform vec3 diffuse;", "uniform vec3 emissive;", "uniform vec3 ambientLightColor;", "#if MAX_DIR_LIGHTS > 0", "uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];", "uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];", "#endif", "#if MAX_HEMI_LIGHTS > 0", "uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];", "uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];", "uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];", "#endif", "#if MAX_POINT_LIGHTS > 0", "uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];", "uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];", "uniform float pointLightDistance[ MAX_POINT_LIGHTS ];", "#endif", "#if MAX_SPOT_LIGHTS > 0", "uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];", "uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];", "uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];", "uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];", "uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];", "uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];", "#endif", "#ifdef WRAP_AROUND", "uniform vec3 wrapRGB;", "#endif"].join("\n"),
    lights_lambert_vertex: ["vLightFront = vec3( 0.0 );", "#ifdef DOUBLE_SIDED", "vLightBack = vec3( 0.0 );", "#endif", "transformedNormal = normalize( transformedNormal );", "#if MAX_DIR_LIGHTS > 0", "for( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {", "vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );", "vec3 dirVector = normalize( lDirection.xyz );", "float dotProduct = dot( transformedNormal, dirVector );", "vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );", "#ifdef DOUBLE_SIDED", "vec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );", "#ifdef WRAP_AROUND", "vec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );", "#endif", "#endif", "#ifdef WRAP_AROUND", "vec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );", "directionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );", "#ifdef DOUBLE_SIDED", "directionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );", "#endif", "#endif", "vLightFront += directionalLightColor[ i ] * directionalLightWeighting;", "#ifdef DOUBLE_SIDED", "vLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;", "#endif", "}", "#endif", "#if MAX_POINT_LIGHTS > 0", "for( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {", "vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );", "vec3 lVector = lPosition.xyz - mvPosition.xyz;", "float lDistance = 1.0;", "if ( pointLightDistance[ i ] > 0.0 )", "lDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );", "lVector = normalize( lVector );", "float dotProduct = dot( transformedNormal, lVector );", "vec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );", "#ifdef DOUBLE_SIDED", "vec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );", "#ifdef WRAP_AROUND", "vec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );", "#endif", "#endif", "#ifdef WRAP_AROUND", "vec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );", "pointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );", "#ifdef DOUBLE_SIDED", "pointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );", "#endif", "#endif", "vLightFront += pointLightColor[ i ] * pointLightWeighting * lDistance;", "#ifdef DOUBLE_SIDED", "vLightBack += pointLightColor[ i ] * pointLightWeightingBack * lDistance;", "#endif", "}", "#endif", "#if MAX_SPOT_LIGHTS > 0", "for( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {", "vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );", "vec3 lVector = lPosition.xyz - mvPosition.xyz;", "float spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );", "if ( spotEffect > spotLightAngleCos[ i ] ) {", "spotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );", "float lDistance = 1.0;", "if ( spotLightDistance[ i ] > 0.0 )", "lDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );", "lVector = normalize( lVector );", "float dotProduct = dot( transformedNormal, lVector );", "vec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );", "#ifdef DOUBLE_SIDED", "vec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );", "#ifdef WRAP_AROUND", "vec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );", "#endif", "#endif", "#ifdef WRAP_AROUND", "vec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );", "spotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );", "#ifdef DOUBLE_SIDED", "spotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );", "#endif", "#endif", "vLightFront += spotLightColor[ i ] * spotLightWeighting * lDistance * spotEffect;", "#ifdef DOUBLE_SIDED", "vLightBack += spotLightColor[ i ] * spotLightWeightingBack * lDistance * spotEffect;", "#endif", "}", "}", "#endif", "#if MAX_HEMI_LIGHTS > 0", "for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {", "vec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );", "vec3 lVector = normalize( lDirection.xyz );", "float dotProduct = dot( transformedNormal, lVector );", "float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;", "float hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;", "vLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );", "#ifdef DOUBLE_SIDED", "vLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );", "#endif", "}", "#endif", "vLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;", "#ifdef DOUBLE_SIDED", "vLightBack = vLightBack * diffuse + ambient * ambientLightColor + emissive;", "#endif"].join("\n"),
    lights_phong_pars_vertex: ["#ifndef PHONG_PER_PIXEL", "#if MAX_POINT_LIGHTS > 0", "uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];", "uniform float pointLightDistance[ MAX_POINT_LIGHTS ];", "varying vec4 vPointLight[ MAX_POINT_LIGHTS ];", "#endif", "#if MAX_SPOT_LIGHTS > 0", "uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];", "uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];", "varying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];", "#endif", "#endif", "#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )", "varying vec3 vWorldPosition;", "#endif"].join("\n"),
    lights_phong_vertex: ["#ifndef PHONG_PER_PIXEL", "#if MAX_POINT_LIGHTS > 0", "for( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {", "vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );", "vec3 lVector = lPosition.xyz - mvPosition.xyz;", "float lDistance = 1.0;", "if ( pointLightDistance[ i ] > 0.0 )", "lDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );", "vPointLight[ i ] = vec4( lVector, lDistance );", "}", "#endif", "#if MAX_SPOT_LIGHTS > 0", "for( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {", "vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );", "vec3 lVector = lPosition.xyz - mvPosition.xyz;", "float lDistance = 1.0;", "if ( spotLightDistance[ i ] > 0.0 )", "lDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );", "vSpotLight[ i ] = vec4( lVector, lDistance );", "}", "#endif", "#endif", "#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )", "vWorldPosition = worldPosition.xyz;", "#endif"].join("\n"),
    lights_phong_pars_fragment: ["uniform vec3 ambientLightColor;", "#if MAX_DIR_LIGHTS > 0", "uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];", "uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];", "#endif", "#if MAX_HEMI_LIGHTS > 0", "uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];", "uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];", "uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];", "#endif", "#if MAX_POINT_LIGHTS > 0", "uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];", "#ifdef PHONG_PER_PIXEL", "uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];", "uniform float pointLightDistance[ MAX_POINT_LIGHTS ];", "#else", "varying vec4 vPointLight[ MAX_POINT_LIGHTS ];", "#endif", "#endif", "#if MAX_SPOT_LIGHTS > 0", "uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];", "uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];", "uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];", "uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];", "uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];", "#ifdef PHONG_PER_PIXEL", "uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];", "#else", "varying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];", "#endif", "#endif", "#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )", "varying vec3 vWorldPosition;", "#endif", "#ifdef WRAP_AROUND", "uniform vec3 wrapRGB;", "#endif", "varying vec3 vViewPosition;", "varying vec3 vNormal;"].join("\n"),
    lights_phong_fragment: ["vec3 normal = normalize( vNormal );", "vec3 viewPosition = normalize( vViewPosition );", "#ifdef DOUBLE_SIDED", "normal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );", "#endif", "#ifdef USE_NORMALMAP", "normal = perturbNormal2Arb( -vViewPosition, normal );", "#elif defined( USE_BUMPMAP )", "normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );", "#endif", "#if MAX_POINT_LIGHTS > 0", "vec3 pointDiffuse  = vec3( 0.0 );", "vec3 pointSpecular = vec3( 0.0 );", "for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {", "#ifdef PHONG_PER_PIXEL", "vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );", "vec3 lVector = lPosition.xyz + vViewPosition.xyz;", "float lDistance = 1.0;", "if ( pointLightDistance[ i ] > 0.0 )", "lDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );", "lVector = normalize( lVector );", "#else", "vec3 lVector = normalize( vPointLight[ i ].xyz );", "float lDistance = vPointLight[ i ].w;", "#endif", "float dotProduct = dot( normal, lVector );", "#ifdef WRAP_AROUND", "float pointDiffuseWeightFull = max( dotProduct, 0.0 );", "float pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );", "vec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );", "#else", "float pointDiffuseWeight = max( dotProduct, 0.0 );", "#endif", "pointDiffuse  += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;", "vec3 pointHalfVector = normalize( lVector + viewPosition );", "float pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );", "float pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );", "#ifdef PHYSICALLY_BASED_SHADING", "float specularNormalization = ( shininess + 2.0001 ) / 8.0;", "vec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, pointHalfVector ), 5.0 );", "pointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;", "#else", "pointSpecular += specular * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance;", "#endif", "}", "#endif", "#if MAX_SPOT_LIGHTS > 0", "vec3 spotDiffuse  = vec3( 0.0 );", "vec3 spotSpecular = vec3( 0.0 );", "for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {", "#ifdef PHONG_PER_PIXEL", "vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );", "vec3 lVector = lPosition.xyz + vViewPosition.xyz;", "float lDistance = 1.0;", "if ( spotLightDistance[ i ] > 0.0 )", "lDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );", "lVector = normalize( lVector );", "#else", "vec3 lVector = normalize( vSpotLight[ i ].xyz );", "float lDistance = vSpotLight[ i ].w;", "#endif", "float spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );", "if ( spotEffect > spotLightAngleCos[ i ] ) {", "spotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );", "float dotProduct = dot( normal, lVector );", "#ifdef WRAP_AROUND", "float spotDiffuseWeightFull = max( dotProduct, 0.0 );", "float spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );", "vec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );", "#else", "float spotDiffuseWeight = max( dotProduct, 0.0 );", "#endif", "spotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;", "vec3 spotHalfVector = normalize( lVector + viewPosition );", "float spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );", "float spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );", "#ifdef PHYSICALLY_BASED_SHADING", "float specularNormalization = ( shininess + 2.0001 ) / 8.0;", "vec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, spotHalfVector ), 5.0 );", "spotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;", "#else", "spotSpecular += specular * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * spotEffect;", "#endif", "}", "}", "#endif", "#if MAX_DIR_LIGHTS > 0", "vec3 dirDiffuse  = vec3( 0.0 );", "vec3 dirSpecular = vec3( 0.0 );", "for( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {", "vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );", "vec3 dirVector = normalize( lDirection.xyz );", "float dotProduct = dot( normal, dirVector );", "#ifdef WRAP_AROUND", "float dirDiffuseWeightFull = max( dotProduct, 0.0 );", "float dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );", "vec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );", "#else", "float dirDiffuseWeight = max( dotProduct, 0.0 );", "#endif", "dirDiffuse  += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;", "vec3 dirHalfVector = normalize( dirVector + viewPosition );", "float dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );", "float dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );", "#ifdef PHYSICALLY_BASED_SHADING", "float specularNormalization = ( shininess + 2.0001 ) / 8.0;", "vec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );", "dirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;", "#else", "dirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight;", "#endif", "}", "#endif", "#if MAX_HEMI_LIGHTS > 0", "vec3 hemiDiffuse  = vec3( 0.0 );", "vec3 hemiSpecular = vec3( 0.0 );", "for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {", "vec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );", "vec3 lVector = normalize( lDirection.xyz );", "float dotProduct = dot( normal, lVector );", "float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;", "vec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );", "hemiDiffuse += diffuse * hemiColor;", "vec3 hemiHalfVectorSky = normalize( lVector + viewPosition );", "float hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;", "float hemiSpecularWeightSky = specularStrength * max( pow( hemiDotNormalHalfSky, shininess ), 0.0 );", "vec3 lVectorGround = -lVector;", "vec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );", "float hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;", "float hemiSpecularWeightGround = specularStrength * max( pow( hemiDotNormalHalfGround, shininess ), 0.0 );", "#ifdef PHYSICALLY_BASED_SHADING", "float dotProductGround = dot( normal, lVectorGround );", "float specularNormalization = ( shininess + 2.0001 ) / 8.0;", "vec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );", "vec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );", "hemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );", "#else", "hemiSpecular += specular * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;", "#endif", "}", "#endif", "vec3 totalDiffuse = vec3( 0.0 );", "vec3 totalSpecular = vec3( 0.0 );", "#if MAX_DIR_LIGHTS > 0", "totalDiffuse += dirDiffuse;", "totalSpecular += dirSpecular;", "#endif", "#if MAX_HEMI_LIGHTS > 0", "totalDiffuse += hemiDiffuse;", "totalSpecular += hemiSpecular;", "#endif", "#if MAX_POINT_LIGHTS > 0", "totalDiffuse += pointDiffuse;", "totalSpecular += pointSpecular;", "#endif", "#if MAX_SPOT_LIGHTS > 0", "totalDiffuse += spotDiffuse;", "totalSpecular += spotSpecular;", "#endif", "#ifdef METAL", "gl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );", "#else", "gl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;", "#endif"].join("\n"),
    color_pars_fragment: ["#ifdef USE_COLOR", "varying vec3 vColor;", "#endif"].join("\n"),
    color_fragment: ["#ifdef USE_COLOR", "gl_FragColor = gl_FragColor * vec4( vColor, 1.0 );", "#endif"].join("\n"),
    color_pars_vertex: ["#ifdef USE_COLOR", "varying vec3 vColor;", "#endif"].join("\n"),
    color_vertex: ["#ifdef USE_COLOR", "#ifdef GAMMA_INPUT", "vColor = color * color;", "#else", "vColor = color;", "#endif", "#endif"].join("\n"),
    skinning_pars_vertex: ["#ifdef USE_SKINNING", "#ifdef BONE_TEXTURE", "uniform sampler2D boneTexture;", "uniform int boneTextureWidth;", "uniform int boneTextureHeight;", "mat4 getBoneMatrix( const in float i ) {", "float j = i * 4.0;", "float x = mod( j, float( boneTextureWidth ) );", "float y = floor( j / float( boneTextureWidth ) );", "float dx = 1.0 / float( boneTextureWidth );", "float dy = 1.0 / float( boneTextureHeight );", "y = dy * ( y + 0.5 );", "vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );", "vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );", "vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );", "vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );", "mat4 bone = mat4( v1, v2, v3, v4 );", "return bone;", "}", "#else", "uniform mat4 boneGlobalMatrices[ MAX_BONES ];", "mat4 getBoneMatrix( const in float i ) {", "mat4 bone = boneGlobalMatrices[ int(i) ];", "return bone;", "}", "#endif", "#endif"].join("\n"),
    skinbase_vertex: ["#ifdef USE_SKINNING", "mat4 boneMatX = getBoneMatrix( skinIndex.x );", "mat4 boneMatY = getBoneMatrix( skinIndex.y );", "#endif"].join("\n"),
    skinning_vertex: ["#ifdef USE_SKINNING", "#ifdef USE_MORPHTARGETS", "vec4 skinVertex = vec4( morphed, 1.0 );", "#else", "vec4 skinVertex = vec4( position, 1.0 );", "#endif", "vec4 skinned  = boneMatX * skinVertex * skinWeight.x;", "skinned    += boneMatY * skinVertex * skinWeight.y;", "#endif"].join("\n"),
    morphtarget_pars_vertex: ["#ifdef USE_MORPHTARGETS", "#ifndef USE_MORPHNORMALS", "uniform float morphTargetInfluences[ 8 ];", "#else", "uniform float morphTargetInfluences[ 4 ];", "#endif", "#endif"].join("\n"),
    morphtarget_vertex: ["#ifdef USE_MORPHTARGETS", "vec3 morphed = vec3( 0.0 );", "morphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];", "morphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];", "morphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];", "morphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];", "#ifndef USE_MORPHNORMALS", "morphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];", "morphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];", "morphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];", "morphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];", "#endif", "morphed += position;", "#endif"].join("\n"),
    default_vertex: ["vec4 mvPosition;", "#ifdef USE_SKINNING", "mvPosition = modelViewMatrix * skinned;", "#endif", "#if !defined( USE_SKINNING ) && defined( USE_MORPHTARGETS )", "mvPosition = modelViewMatrix * vec4( morphed, 1.0 );", "#endif", "#if !defined( USE_SKINNING ) && ! defined( USE_MORPHTARGETS )", "mvPosition = modelViewMatrix * vec4( position, 1.0 );", "#endif", "gl_Position = projectionMatrix * mvPosition;"].join("\n"),
    morphnormal_vertex: ["#ifdef USE_MORPHNORMALS", "vec3 morphedNormal = vec3( 0.0 );", "morphedNormal +=  ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];", "morphedNormal +=  ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];", "morphedNormal +=  ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];", "morphedNormal +=  ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];", "morphedNormal += normal;", "#endif"].join("\n"),
    skinnormal_vertex: ["#ifdef USE_SKINNING", "mat4 skinMatrix = skinWeight.x * boneMatX;", "skinMatrix  += skinWeight.y * boneMatY;", "#ifdef USE_MORPHNORMALS", "vec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );", "#else", "vec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );", "#endif", "#endif"].join("\n"),
    defaultnormal_vertex: ["vec3 objectNormal;", "#ifdef USE_SKINNING", "objectNormal = skinnedNormal.xyz;", "#endif", "#if !defined( USE_SKINNING ) && defined( USE_MORPHNORMALS )", "objectNormal = morphedNormal;", "#endif", "#if !defined( USE_SKINNING ) && ! defined( USE_MORPHNORMALS )", "objectNormal = normal;", "#endif", "#ifdef FLIP_SIDED", "objectNormal = -objectNormal;", "#endif", "vec3 transformedNormal = normalMatrix * objectNormal;"].join("\n"),
    shadowmap_pars_fragment: ["#ifdef USE_SHADOWMAP", "uniform sampler2D shadowMap[ MAX_SHADOWS ];", "uniform vec2 shadowMapSize[ MAX_SHADOWS ];", "uniform float shadowDarkness[ MAX_SHADOWS ];", "uniform float shadowBias[ MAX_SHADOWS ];", "varying vec4 vShadowCoord[ MAX_SHADOWS ];", "float unpackDepth( const in vec4 rgba_depth ) {", "const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );", "float depth = dot( rgba_depth, bit_shift );", "return depth;", "}", "#endif"].join("\n"),
    shadowmap_fragment: ["#ifdef USE_SHADOWMAP", "#ifdef SHADOWMAP_DEBUG", "vec3 frustumColors[3];", "frustumColors[0] = vec3( 1.0, 0.5, 0.0 );", "frustumColors[1] = vec3( 0.0, 1.0, 0.8 );", "frustumColors[2] = vec3( 0.0, 0.5, 1.0 );", "#endif", "#ifdef SHADOWMAP_CASCADE", "int inFrustumCount = 0;", "#endif", "float fDepth;", "vec3 shadowColor = vec3( 1.0 );", "for( int i = 0; i < MAX_SHADOWS; i ++ ) {", "vec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;", "bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );", "bool inFrustum = all( inFrustumVec );", "#ifdef SHADOWMAP_CASCADE", "inFrustumCount += int( inFrustum );", "bvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );", "#else", "bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );", "#endif", "bool frustumTest = all( frustumTestVec );", "if ( frustumTest ) {", "shadowCoord.z += shadowBias[ i ];", "#if defined( SHADOWMAP_TYPE_PCF )", "float shadow = 0.0;", "const float shadowDelta = 1.0 / 9.0;", "float xPixelOffset = 1.0 / shadowMapSize[ i ].x;", "float yPixelOffset = 1.0 / shadowMapSize[ i ].y;", "float dx0 = -1.25 * xPixelOffset;", "float dy0 = -1.25 * yPixelOffset;", "float dx1 = 1.25 * xPixelOffset;", "float dy1 = 1.25 * yPixelOffset;", "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );", "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;", "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );", "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;", "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );", "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;", "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );", "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;", "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );", "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;", "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );", "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;", "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );", "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;", "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );", "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;", "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );", "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;", "shadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );", "#elif defined( SHADOWMAP_TYPE_PCF_SOFT )", "float shadow = 0.0;", "float xPixelOffset = 1.0 / shadowMapSize[ i ].x;", "float yPixelOffset = 1.0 / shadowMapSize[ i ].y;", "float dx0 = -1.0 * xPixelOffset;", "float dy0 = -1.0 * yPixelOffset;", "float dx1 = 1.0 * xPixelOffset;", "float dy1 = 1.0 * yPixelOffset;", "mat3 shadowKernel;", "mat3 depthKernel;", "depthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );", "depthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );", "depthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );", "depthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );", "depthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );", "depthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );", "depthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );", "depthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );", "depthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );", "vec3 shadowZ = vec3( shadowCoord.z );", "shadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));", "shadowKernel[0] *= vec3(0.25);", "shadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));", "shadowKernel[1] *= vec3(0.25);", "shadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));", "shadowKernel[2] *= vec3(0.25);", "vec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );", "shadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );", "shadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );", "vec4 shadowValues;", "shadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );", "shadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );", "shadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );", "shadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );", "shadow = dot( shadowValues, vec4( 1.0 ) );", "shadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );", "#else", "vec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );", "float fDepth = unpackDepth( rgbaDepth );", "if ( fDepth < shadowCoord.z )", "shadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );", "#endif", "}", "#ifdef SHADOWMAP_DEBUG", "#ifdef SHADOWMAP_CASCADE", "if ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];", "#else", "if ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];", "#endif", "#endif", "}", "#ifdef GAMMA_OUTPUT", "shadowColor *= shadowColor;", "#endif", "gl_FragColor.xyz = gl_FragColor.xyz * shadowColor;", "#endif"].join("\n"),
    shadowmap_pars_vertex: ["#ifdef USE_SHADOWMAP", "varying vec4 vShadowCoord[ MAX_SHADOWS ];", "uniform mat4 shadowMatrix[ MAX_SHADOWS ];", "#endif"].join("\n"),
    shadowmap_vertex: ["#ifdef USE_SHADOWMAP", "for( int i = 0; i < MAX_SHADOWS; i ++ ) {", "vShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;", "}", "#endif"].join("\n"),
    alphatest_fragment: ["#ifdef ALPHATEST", "if ( gl_FragColor.a < ALPHATEST ) discard;", "#endif"].join("\n"),
    linear_to_gamma_fragment: ["#ifdef GAMMA_OUTPUT", "gl_FragColor.xyz = sqrt( gl_FragColor.xyz );", "#endif"].join("\n")
},THREE.UniformsUtils = {
    merge: function (e) {
        var t, i, r, o = {};
        for (t = 0; t < e.length; t++) {
            r = this.clone(e[t]);
            for (i in r) o[i] = r[i]
        }
        return o
    }, clone: function (e) {
        var t, i, r, o = {};
        for (t in e) {
            o[t] = {};
            for (i in e[t]) r = e[t][i], r instanceof THREE.Color || r instanceof THREE.Vector2 || r instanceof THREE.Vector3 || r instanceof THREE.Vector4 || r instanceof THREE.Matrix4 || r instanceof THREE.Texture ? o[t][i] = r.clone() : r instanceof Array ? o[t][i] = r.slice() : o[t][i] = r
        }
        return o
    }
},THREE.UniformsLib = {
    common: {
        diffuse: {type: "c", value: new THREE.Color(15658734)},
        opacity: {type: "f", value: 1},
        map: {type: "t", value: null},
        offsetRepeat: {type: "v4", value: new THREE.Vector4(0, 0, 1, 1)},
        lightMap: {type: "t", value: null},
        specularMap: {type: "t", value: null},
        envMap: {type: "t", value: null},
        flipEnvMap: {type: "f", value: -1},
        useRefract: {type: "i", value: 0},
        reflectivity: {type: "f", value: 1},
        refractionRatio: {type: "f", value: .98},
        combine: {type: "i", value: 0},
        morphTargetInfluences: {type: "f", value: 0}
    },
    bump: {bumpMap: {type: "t", value: null}, bumpScale: {type: "f", value: 1}},
    normalmap: {normalMap: {type: "t", value: null}, normalScale: {type: "v2", value: new THREE.Vector2(1, 1)}},
    fog: {
        fogDensity: {type: "f", value: 25e-5},
        fogNear: {type: "f", value: 1},
        fogFar: {type: "f", value: 2e3},
        fogColor: {type: "c", value: new THREE.Color(16777215)}
    },
    lights: {
        ambientLightColor: {type: "fv", value: []},
        directionalLightDirection: {type: "fv", value: []},
        directionalLightColor: {type: "fv", value: []},
        hemisphereLightDirection: {type: "fv", value: []},
        hemisphereLightSkyColor: {type: "fv", value: []},
        hemisphereLightGroundColor: {type: "fv", value: []},
        pointLightColor: {type: "fv", value: []},
        pointLightPosition: {type: "fv", value: []},
        pointLightDistance: {type: "fv1", value: []},
        spotLightColor: {type: "fv", value: []},
        spotLightPosition: {type: "fv", value: []},
        spotLightDirection: {type: "fv", value: []},
        spotLightDistance: {type: "fv1", value: []},
        spotLightAngleCos: {type: "fv1", value: []},
        spotLightExponent: {type: "fv1", value: []}
    },
    particle: {
        psColor: {type: "c", value: new THREE.Color(15658734)},
        opacity: {type: "f", value: 1},
        size: {type: "f", value: 1},
        scale: {type: "f", value: 1},
        map: {type: "t", value: null},
        fogDensity: {type: "f", value: 25e-5},
        fogNear: {type: "f", value: 1},
        fogFar: {type: "f", value: 2e3},
        fogColor: {type: "c", value: new THREE.Color(16777215)}
    },
    shadowmap: {
        shadowMap: {type: "tv", value: []},
        shadowMapSize: {type: "v2v", value: []},
        shadowBias: {type: "fv1", value: []},
        shadowDarkness: {type: "fv1", value: []},
        shadowMatrix: {type: "m4v", value: []}
    }
},THREE.ShaderLib = {
    basic: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.shadowmap]),
        vertexShader: [THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.skinbase_vertex, "#ifdef USE_ENVMAP", THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, "#endif", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
        fragmentShader: ["uniform vec3 diffuse;", "uniform float opacity;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, "void main() {", "gl_FragColor = vec4( diffuse, opacity );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")
    },
    lambert: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
            ambient: {
                type: "c",
                value: new THREE.Color(16777215)
            },
            emissive: {type: "c", value: new THREE.Color(0)},
            wrapRGB: {type: "v3", value: new THREE.Vector3(1, 1, 1)}
        }]),
        vertexShader: ["#define LAMBERT", "varying vec3 vLightFront;", "#ifdef DOUBLE_SIDED", "varying vec3 vLightBack;", "#endif", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_lambert_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.lights_lambert_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
        fragmentShader: ["uniform float opacity;", "varying vec3 vLightFront;", "#ifdef DOUBLE_SIDED", "varying vec3 vLightBack;", "#endif", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, "void main() {", "gl_FragColor = vec4( vec3 ( 1.0 ), opacity );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, "#ifdef DOUBLE_SIDED", "if ( gl_FrontFacing )", "gl_FragColor.xyz *= vLightFront;", "else", "gl_FragColor.xyz *= vLightBack;", "#else", "gl_FragColor.xyz *= vLightFront;", "#endif", THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")
    },
    phong: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.bump, THREE.UniformsLib.normalmap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
            ambient: {
                type: "c",
                value: new THREE.Color(16777215)
            },
            emissive: {type: "c", value: new THREE.Color(0)},
            specular: {type: "c", value: new THREE.Color(1118481)},
            shininess: {type: "f", value: 30},
            wrapRGB: {type: "v3", value: new THREE.Vector3(1, 1, 1)}
        }]),
        vertexShader: ["#define PHONG", "varying vec3 vViewPosition;", "varying vec3 vNormal;", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_phong_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, "vNormal = normalize( transformedNormal );", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, "vViewPosition = -mvPosition.xyz;", THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.lights_phong_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
        fragmentShader: ["uniform vec3 diffuse;", "uniform float opacity;", "uniform vec3 ambient;", "uniform vec3 emissive;", "uniform vec3 specular;", "uniform float shininess;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.lights_phong_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.bumpmap_pars_fragment, THREE.ShaderChunk.normalmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, "void main() {", "gl_FragColor = vec4( vec3 ( 1.0 ), opacity );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, THREE.ShaderChunk.lights_phong_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")
    },
    particle_basic: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.particle, THREE.UniformsLib.shadowmap]),
        vertexShader: ["uniform float size;", "uniform float scale;", THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", "#ifdef USE_SIZEATTENUATION", "gl_PointSize = size * ( scale / length( mvPosition.xyz ) );", "#else", "gl_PointSize = size;", "#endif", "gl_Position = projectionMatrix * mvPosition;", THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
        fragmentShader: ["uniform vec3 psColor;", "uniform float opacity;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_particle_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, "void main() {", "gl_FragColor = vec4( psColor, opacity );", THREE.ShaderChunk.map_particle_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")
    },
    dashed: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, {
            scale: {
                type: "f",
                value: 1
            }, dashSize: {type: "f", value: 1}, totalSize: {type: "f", value: 2}
        }]),
        vertexShader: ["uniform float scale;", "attribute float lineDistance;", "varying float vLineDistance;", THREE.ShaderChunk.color_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "vLineDistance = scale * lineDistance;", "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", "gl_Position = projectionMatrix * mvPosition;", "}"].join("\n"),
        fragmentShader: ["uniform vec3 diffuse;", "uniform float opacity;", "uniform float dashSize;", "uniform float totalSize;", "varying float vLineDistance;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, "void main() {", "if ( mod( vLineDistance, totalSize ) > dashSize ) {", "discard;", "}", "gl_FragColor = vec4( diffuse, opacity );", THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")
    },
    depth: {
        uniforms: {mNear: {type: "f", value: 1}, mFar: {type: "f", value: 2e3}, opacity: {type: "f", value: 1}},
        vertexShader: ["void main() {", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
        fragmentShader: ["uniform float mNear;", "uniform float mFar;", "uniform float opacity;", "void main() {", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "float color = 1.0 - smoothstep( mNear, mFar, depth );", "gl_FragColor = vec4( vec3( color ), opacity );", "}"].join("\n")
    },
    normal: {
        uniforms: {opacity: {type: "f", value: 1}},
        vertexShader: ["varying vec3 vNormal;", THREE.ShaderChunk.morphtarget_pars_vertex, "void main() {", "vNormal = normalize( normalMatrix * normal );", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, "}"].join("\n"),
        fragmentShader: ["uniform float opacity;", "varying vec3 vNormal;", "void main() {", "gl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );", "}"].join("\n")
    },
    normalmap: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
            enableAO: {
                type: "i",
                value: 0
            },
            enableDiffuse: {type: "i", value: 0},
            enableSpecular: {type: "i", value: 0},
            enableReflection: {type: "i", value: 0},
            enableDisplacement: {type: "i", value: 0},
            tDisplacement: {type: "t", value: null},
            tDiffuse: {type: "t", value: null},
            tCube: {type: "t", value: null},
            tNormal: {type: "t", value: null},
            tSpecular: {type: "t", value: null},
            tAO: {type: "t", value: null},
            uNormalScale: {type: "v2", value: new THREE.Vector2(1, 1)},
            uDisplacementBias: {type: "f", value: 0},
            uDisplacementScale: {type: "f", value: 1},
            uDiffuseColor: {type: "c", value: new THREE.Color(16777215)},
            uSpecularColor: {type: "c", value: new THREE.Color(1118481)},
            uAmbientColor: {type: "c", value: new THREE.Color(16777215)},
            uShininess: {type: "f", value: 30},
            uOpacity: {type: "f", value: 1},
            useRefract: {type: "i", value: 0},
            uRefractionRatio: {type: "f", value: .98},
            uReflectivity: {type: "f", value: .5},
            uOffset: {type: "v2", value: new THREE.Vector2(0, 0)},
            uRepeat: {type: "v2", value: new THREE.Vector2(1, 1)},
            wrapRGB: {type: "v3", value: new THREE.Vector3(1, 1, 1)}
        }]),
        fragmentShader: ["uniform vec3 uAmbientColor;", "uniform vec3 uDiffuseColor;", "uniform vec3 uSpecularColor;", "uniform float uShininess;", "uniform float uOpacity;", "uniform bool enableDiffuse;", "uniform bool enableSpecular;", "uniform bool enableAO;", "uniform bool enableReflection;", "uniform sampler2D tDiffuse;", "uniform sampler2D tNormal;", "uniform sampler2D tSpecular;", "uniform sampler2D tAO;", "uniform samplerCube tCube;", "uniform vec2 uNormalScale;", "uniform bool useRefract;", "uniform float uRefractionRatio;", "uniform float uReflectivity;", "varying vec3 vTangent;", "varying vec3 vBinormal;", "varying vec3 vNormal;", "varying vec2 vUv;", "uniform vec3 ambientLightColor;", "#if MAX_DIR_LIGHTS > 0", "uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];", "uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];", "#endif", "#if MAX_HEMI_LIGHTS > 0", "uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];", "uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];", "uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];", "#endif", "#if MAX_POINT_LIGHTS > 0", "uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];", "uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];", "uniform float pointLightDistance[ MAX_POINT_LIGHTS ];", "#endif", "#if MAX_SPOT_LIGHTS > 0", "uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];", "uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];", "uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];", "uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];", "uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];", "uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];", "#endif", "#ifdef WRAP_AROUND", "uniform vec3 wrapRGB;", "#endif", "varying vec3 vWorldPosition;", "varying vec3 vViewPosition;", THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, "void main() {", "gl_FragColor = vec4( vec3( 1.0 ), uOpacity );", "vec3 specularTex = vec3( 1.0 );", "vec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;", "normalTex.xy *= uNormalScale;", "normalTex = normalize( normalTex );", "if( enableDiffuse ) {", "#ifdef GAMMA_INPUT", "vec4 texelColor = texture2D( tDiffuse, vUv );", "texelColor.xyz *= texelColor.xyz;", "gl_FragColor = gl_FragColor * texelColor;", "#else", "gl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );", "#endif", "}", "if( enableAO ) {", "#ifdef GAMMA_INPUT", "vec4 aoColor = texture2D( tAO, vUv );", "aoColor.xyz *= aoColor.xyz;", "gl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;", "#else", "gl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;", "#endif", "}", "if( enableSpecular )", "specularTex = texture2D( tSpecular, vUv ).xyz;", "mat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );", "vec3 finalNormal = tsb * normalTex;", "#ifdef FLIP_SIDED", "finalNormal = -finalNormal;", "#endif", "vec3 normal = normalize( finalNormal );", "vec3 viewPosition = normalize( vViewPosition );", "#if MAX_POINT_LIGHTS > 0", "vec3 pointDiffuse = vec3( 0.0 );", "vec3 pointSpecular = vec3( 0.0 );", "for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {", "vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );", "vec3 pointVector = lPosition.xyz + vViewPosition.xyz;", "float pointDistance = 1.0;", "if ( pointLightDistance[ i ] > 0.0 )", "pointDistance = 1.0 - min( ( length( pointVector ) / pointLightDistance[ i ] ), 1.0 );", "pointVector = normalize( pointVector );", "#ifdef WRAP_AROUND", "float pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );", "float pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );", "vec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );", "#else", "float pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );", "#endif", "pointDiffuse += pointDistance * pointLightColor[ i ] * uDiffuseColor * pointDiffuseWeight;", "vec3 pointHalfVector = normalize( pointVector + viewPosition );", "float pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );", "float pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, uShininess ), 0.0 );", "#ifdef PHYSICALLY_BASED_SHADING", "float specularNormalization = ( uShininess + 2.0001 ) / 8.0;", "vec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( pointVector, pointHalfVector ), 5.0 );", "pointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;", "#else", "pointSpecular += pointDistance * pointLightColor[ i ] * uSpecularColor * pointSpecularWeight * pointDiffuseWeight;", "#endif", "}", "#endif", "#if MAX_SPOT_LIGHTS > 0", "vec3 spotDiffuse = vec3( 0.0 );", "vec3 spotSpecular = vec3( 0.0 );", "for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {", "vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );", "vec3 spotVector = lPosition.xyz + vViewPosition.xyz;", "float spotDistance = 1.0;", "if ( spotLightDistance[ i ] > 0.0 )", "spotDistance = 1.0 - min( ( length( spotVector ) / spotLightDistance[ i ] ), 1.0 );", "spotVector = normalize( spotVector );", "float spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );", "if ( spotEffect > spotLightAngleCos[ i ] ) {", "spotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );", "#ifdef WRAP_AROUND", "float spotDiffuseWeightFull = max( dot( normal, spotVector ), 0.0 );", "float spotDiffuseWeightHalf = max( 0.5 * dot( normal, spotVector ) + 0.5, 0.0 );", "vec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );", "#else", "float spotDiffuseWeight = max( dot( normal, spotVector ), 0.0 );", "#endif", "spotDiffuse += spotDistance * spotLightColor[ i ] * uDiffuseColor * spotDiffuseWeight * spotEffect;", "vec3 spotHalfVector = normalize( spotVector + viewPosition );", "float spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );", "float spotSpecularWeight = specularTex.r * max( pow( spotDotNormalHalf, uShininess ), 0.0 );", "#ifdef PHYSICALLY_BASED_SHADING", "float specularNormalization = ( uShininess + 2.0001 ) / 8.0;", "vec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( spotVector, spotHalfVector ), 5.0 );", "spotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * spotDistance * specularNormalization * spotEffect;", "#else", "spotSpecular += spotDistance * spotLightColor[ i ] * uSpecularColor * spotSpecularWeight * spotDiffuseWeight * spotEffect;", "#endif", "}", "}", "#endif", "#if MAX_DIR_LIGHTS > 0", "vec3 dirDiffuse = vec3( 0.0 );", "vec3 dirSpecular = vec3( 0.0 );", "for( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {", "vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );", "vec3 dirVector = normalize( lDirection.xyz );", "#ifdef WRAP_AROUND", "float directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );", "float directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );", "vec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );", "#else", "float dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );", "#endif", "dirDiffuse += directionalLightColor[ i ] * uDiffuseColor * dirDiffuseWeight;", "vec3 dirHalfVector = normalize( dirVector + viewPosition );", "float dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );", "float dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, uShininess ), 0.0 );", "#ifdef PHYSICALLY_BASED_SHADING", "float specularNormalization = ( uShininess + 2.0001 ) / 8.0;", "vec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );", "dirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;", "#else", "dirSpecular += directionalLightColor[ i ] * uSpecularColor * dirSpecularWeight * dirDiffuseWeight;", "#endif", "}", "#endif", "#if MAX_HEMI_LIGHTS > 0", "vec3 hemiDiffuse  = vec3( 0.0 );", "vec3 hemiSpecular = vec3( 0.0 );", "for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {", "vec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );", "vec3 lVector = normalize( lDirection.xyz );", "float dotProduct = dot( normal, lVector );", "float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;", "vec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );", "hemiDiffuse += uDiffuseColor * hemiColor;", "vec3 hemiHalfVectorSky = normalize( lVector + viewPosition );", "float hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;", "float hemiSpecularWeightSky = specularTex.r * max( pow( hemiDotNormalHalfSky, uShininess ), 0.0 );", "vec3 lVectorGround = -lVector;", "vec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );", "float hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;", "float hemiSpecularWeightGround = specularTex.r * max( pow( hemiDotNormalHalfGround, uShininess ), 0.0 );", "#ifdef PHYSICALLY_BASED_SHADING", "float dotProductGround = dot( normal, lVectorGround );", "float specularNormalization = ( uShininess + 2.0001 ) / 8.0;", "vec3 schlickSky = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );", "vec3 schlickGround = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );", "hemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );", "#else", "hemiSpecular += uSpecularColor * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;", "#endif", "}", "#endif", "vec3 totalDiffuse = vec3( 0.0 );", "vec3 totalSpecular = vec3( 0.0 );", "#if MAX_DIR_LIGHTS > 0", "totalDiffuse += dirDiffuse;", "totalSpecular += dirSpecular;", "#endif", "#if MAX_HEMI_LIGHTS > 0", "totalDiffuse += hemiDiffuse;", "totalSpecular += hemiSpecular;", "#endif", "#if MAX_POINT_LIGHTS > 0", "totalDiffuse += pointDiffuse;", "totalSpecular += pointSpecular;", "#endif", "#if MAX_SPOT_LIGHTS > 0", "totalDiffuse += spotDiffuse;", "totalSpecular += spotSpecular;", "#endif", "#ifdef METAL", "gl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor + totalSpecular );", "#else", "gl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor ) + totalSpecular;", "#endif", "if ( enableReflection ) {", "vec3 vReflect;", "vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );", "if ( useRefract ) {", "vReflect = refract( cameraToVertex, normal, uRefractionRatio );", "} else {", "vReflect = reflect( cameraToVertex, normal );", "}", "vec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );", "#ifdef GAMMA_INPUT", "cubeColor.xyz *= cubeColor.xyz;", "#endif", "gl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * uReflectivity );", "}", THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n"),
        vertexShader: ["attribute vec4 tangent;", "uniform vec2 uOffset;", "uniform vec2 uRepeat;", "uniform bool enableDisplacement;", "#ifdef VERTEX_TEXTURES", "uniform sampler2D tDisplacement;", "uniform float uDisplacementScale;", "uniform float uDisplacementBias;", "#endif", "varying vec3 vTangent;", "varying vec3 vBinormal;", "varying vec3 vNormal;", "varying vec2 vUv;", "varying vec3 vWorldPosition;", "varying vec3 vViewPosition;", THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, "#ifdef USE_SKINNING", "vNormal = normalize( normalMatrix * skinnedNormal.xyz );", "vec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );", "vTangent = normalize( normalMatrix * skinnedTangent.xyz );", "#else", "vNormal = normalize( normalMatrix * normal );", "vTangent = normalize( normalMatrix * tangent.xyz );", "#endif", "vBinormal = normalize( cross( vNormal, vTangent ) * tangent.w );", "vUv = uv * uRepeat + uOffset;", "vec3 displacedPosition;", "#ifdef VERTEX_TEXTURES", "if ( enableDisplacement ) {", "vec3 dv = texture2D( tDisplacement, uv ).xyz;", "float df = uDisplacementScale * dv.x + uDisplacementBias;", "displacedPosition = position + normalize( normal ) * df;", "} else {", "#ifdef USE_SKINNING", "vec4 skinVertex = vec4( position, 1.0 );", "vec4 skinned  = boneMatX * skinVertex * skinWeight.x;", "skinned    += boneMatY * skinVertex * skinWeight.y;", "displacedPosition  = skinned.xyz;", "#else", "displacedPosition = position;", "#endif", "}", "#else", "#ifdef USE_SKINNING", "vec4 skinVertex = vec4( position, 1.0 );", "vec4 skinned  = boneMatX * skinVertex * skinWeight.x;", "skinned    += boneMatY * skinVertex * skinWeight.y;", "displacedPosition  = skinned.xyz;", "#else", "displacedPosition = position;", "#endif", "#endif", "vec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );", "vec4 worldPosition = modelMatrix * vec4( displacedPosition, 1.0 );", "gl_Position = projectionMatrix * mvPosition;", "vWorldPosition = worldPosition.xyz;", "vViewPosition = -mvPosition.xyz;", "#ifdef USE_SHADOWMAP", "for( int i = 0; i < MAX_SHADOWS; i ++ ) {", "vShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;", "}", "#endif", "}"].join("\n")
    },
    cube: {
        uniforms: {tCube: {type: "t", value: null}, tFlip: {type: "f", value: -1}},
        vertexShader: ["varying vec3 vWorldPosition;", "void main() {", "vec4 worldPosition = modelMatrix * vec4( position, 1.0 );", "vWorldPosition = worldPosition.xyz;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
        fragmentShader: ["uniform samplerCube tCube;", "uniform float tFlip;", "varying vec3 vWorldPosition;", "void main() {", "gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );", "}"].join("\n")
    },
    depthRGBA: {
        uniforms: {},
        vertexShader: [THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, "void main() {", THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, "}"].join("\n"),
        fragmentShader: ["vec4 pack_depth( const in float depth ) {", "const vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );", "const vec4 bit_mask  = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );", "vec4 res = fract( depth * bit_shift );", "res -= res.xxyz * bit_mask;", "return res;", "}", "void main() {", "gl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );", "}"].join("\n")
    }
},THREE.WebGLRenderer = function (e) {
    function t(e) {
        e.__webglVertexBuffer = Le.createBuffer(), e.__webglColorBuffer = Le.createBuffer(), ze.info.memory.geometries++
    }

    function i(e) {
        e.__webglVertexBuffer = Le.createBuffer(), e.__webglColorBuffer = Le.createBuffer(), e.__webglLineDistanceBuffer = Le.createBuffer(), ze.info.memory.geometries++
    }

    function r(e) {
        e.__webglVertexBuffer = Le.createBuffer(), e.__webglNormalBuffer = Le.createBuffer(), e.__webglTangentBuffer = Le.createBuffer(), e.__webglColorBuffer = Le.createBuffer(), e.__webglUVBuffer = Le.createBuffer(), e.__webglUV2Buffer = Le.createBuffer(), e.__webglSkinIndicesBuffer = Le.createBuffer(), e.__webglSkinWeightsBuffer = Le.createBuffer(), e.__webglFaceBuffer = Le.createBuffer(), e.__webglLineBuffer = Le.createBuffer();
        var t, i;
        if (e.numMorphTargets) for (e.__webglMorphTargetsBuffers = [], t = 0, i = e.numMorphTargets; t < i; t++) e.__webglMorphTargetsBuffers.push(Le.createBuffer());
        if (e.numMorphNormals) for (e.__webglMorphNormalsBuffers = [], t = 0, i = e.numMorphNormals; t < i; t++) e.__webglMorphNormalsBuffers.push(Le.createBuffer());
        ze.info.memory.geometries++
    }

    function o(e, t) {
        var i = e.vertices.length, r = t.material;
        if (r.attributes) {
            void 0 === e.__webglCustomAttributesList && (e.__webglCustomAttributesList = []);
            for (var o in r.attributes) {
                var a = r.attributes[o];
                if (!a.__webglInitialized || a.createUniqueBuffers) {
                    a.__webglInitialized = !0;
                    var n = 1;
                    "v2" === a.type ? n = 2 : "v3" === a.type ? n = 3 : "v4" === a.type ? n = 4 : "c" === a.type && (n = 3), a.size = n, a.array = new Float32Array(i * n), a.buffer = Le.createBuffer(), a.buffer.belongsToAttribute = o, a.needsUpdate = !0
                }
                e.__webglCustomAttributesList.push(a)
            }
        }
    }

    function a(e, t) {
        var i = e.vertices.length;
        e.__vertexArray = new Float32Array(3 * i), e.__colorArray = new Float32Array(3 * i), e.__sortArray = [], e.__webglParticleCount = i, o(e, t)
    }

    function n(e, t) {
        var i = e.vertices.length;
        e.__vertexArray = new Float32Array(3 * i), e.__colorArray = new Float32Array(3 * i), e.__lineDistanceArray = new Float32Array(1 * i), e.__webglLineCount = i, o(e, t)
    }

    function s(e, t) {
        var i = t.geometry, r = e.faces3, o = 3 * r.length, a = 1 * r.length, n = 3 * r.length, s = h(t, e), l = p(s),
            f = c(s), E = u(s);
        e.__vertexArray = new Float32Array(3 * o), f && (e.__normalArray = new Float32Array(3 * o)), i.hasTangents && (e.__tangentArray = new Float32Array(4 * o)), E && (e.__colorArray = new Float32Array(3 * o)), l && (i.faceVertexUvs.length > 0 && (e.__uvArray = new Float32Array(2 * o)), i.faceVertexUvs.length > 1 && (e.__uv2Array = new Float32Array(2 * o))), t.geometry.skinWeights.length && t.geometry.skinIndices.length && (e.__skinIndexArray = new Float32Array(4 * o), e.__skinWeightArray = new Float32Array(4 * o)), e.__faceArray = new Uint16Array(3 * a), e.__lineArray = new Uint16Array(2 * n);
        var d, m;
        if (e.numMorphTargets) for (e.__morphTargetsArrays = [], d = 0, m = e.numMorphTargets; d < m; d++) e.__morphTargetsArrays.push(new Float32Array(3 * o));
        if (e.numMorphNormals) for (e.__morphNormalsArrays = [], d = 0, m = e.numMorphNormals; d < m; d++) e.__morphNormalsArrays.push(new Float32Array(3 * o));
        if (e.__webglFaceCount = 3 * a, e.__webglLineCount = 2 * n, s.attributes) {
            void 0 === e.__webglCustomAttributesList && (e.__webglCustomAttributesList = []);
            for (var g in s.attributes) {
                var v = s.attributes[g], T = {};
                for (var y in v) T[y] = v[y];
                if (!T.__webglInitialized || T.createUniqueBuffers) {
                    T.__webglInitialized = !0;
                    var R = 1;
                    "v2" === T.type ? R = 2 : "v3" === T.type ? R = 3 : "v4" === T.type ? R = 4 : "c" === T.type && (R = 3), T.size = R, T.array = new Float32Array(o * R), T.buffer = Le.createBuffer(), T.buffer.belongsToAttribute = g, v.needsUpdate = !0, T.__original = v
                }
                e.__webglCustomAttributesList.push(T)
            }
        }
        e.__inittedArrays = !0
    }

    function h(e, t) {
        return e.material instanceof THREE.MeshFaceMaterial ? e.material.materials[t.materialIndex] : e.material
    }

    function l(e) {
        return e && void 0 !== e.shading && e.shading === THREE.SmoothShading
    }

    function c(e) {
        return !(e instanceof THREE.MeshBasicMaterial && !e.envMap || e instanceof THREE.MeshDepthMaterial) && (l(e) ? THREE.SmoothShading : THREE.FlatShading)
    }

    function u(e) {
        return !!e.vertexColors && e.vertexColors
    }

    function p(e) {
        return !!(e.map || e.lightMap || e.bumpMap || e.normalMap || e.specularMap || e instanceof THREE.ShaderMaterial)
    }

    function f(e) {
        var t, i, r;
        for (t in e.attributes) r = "index" === t ? Le.ELEMENT_ARRAY_BUFFER : Le.ARRAY_BUFFER, i = e.attributes[t], void 0 === i.numItems && (i.numItems = i.array.length), i.buffer = Le.createBuffer(), Le.bindBuffer(r, i.buffer), Le.bufferData(r, i.array, Le.STATIC_DRAW)
    }

    function E(e, t, i) {
        var r, o, a, n, s, h, l, c, u, p, f, E, d = e.vertices, m = d.length, g = e.colors, v = g.length,
            T = e.__vertexArray, y = e.__colorArray, R = e.__sortArray, H = e.verticesNeedUpdate,
            _ = (e.elementsNeedUpdate, e.colorsNeedUpdate), w = e.__webglCustomAttributesList;
        if (i.sortParticles) {
            for (Et.copy(ft), Et.multiply(i.matrixWorld), r = 0; r < m; r++) a = d[r], dt.copy(a), dt.applyProjection(Et), R[r] = [dt.z, r];
            for (R.sort(x), r = 0; r < m; r++) a = d[R[r][1]], n = 3 * r, T[n] = a.x, T[n + 1] = a.y, T[n + 2] = a.z;
            for (o = 0; o < v; o++) n = 3 * o, h = g[R[o][1]], y[n] = h.r, y[n + 1] = h.g, y[n + 2] = h.b;
            if (w) for (l = 0, c = w.length; l < c; l++) if (E = w[l], void 0 === E.boundTo || "vertices" === E.boundTo) if (n = 0, p = E.value.length, 1 === E.size) for (u = 0; u < p; u++) s = R[u][1], E.array[u] = E.value[s]; else if (2 === E.size) for (u = 0; u < p; u++) s = R[u][1], f = E.value[s], E.array[n] = f.x, E.array[n + 1] = f.y, n += 2; else if (3 === E.size) if ("c" === E.type) for (u = 0; u < p; u++) s = R[u][1], f = E.value[s], E.array[n] = f.r, E.array[n + 1] = f.g, E.array[n + 2] = f.b, n += 3; else for (u = 0; u < p; u++) s = R[u][1], f = E.value[s], E.array[n] = f.x, E.array[n + 1] = f.y, E.array[n + 2] = f.z, n += 3; else if (4 === E.size) for (u = 0; u < p; u++) s = R[u][1], f = E.value[s], E.array[n] = f.x, E.array[n + 1] = f.y, E.array[n + 2] = f.z, E.array[n + 3] = f.w, n += 4
        } else {
            if (H) for (r = 0; r < m; r++) a = d[r], n = 3 * r, T[n] = a.x, T[n + 1] = a.y, T[n + 2] = a.z;
            if (_) for (o = 0; o < v; o++) h = g[o], n = 3 * o, y[n] = h.r, y[n + 1] = h.g, y[n + 2] = h.b;
            if (w) for (l = 0, c = w.length; l < c; l++) if (E = w[l], E.needsUpdate && (void 0 === E.boundTo || "vertices" === E.boundTo)) if (p = E.value.length, n = 0, 1 === E.size) for (u = 0; u < p; u++) E.array[u] = E.value[u]; else if (2 === E.size) for (u = 0; u < p; u++) f = E.value[u], E.array[n] = f.x, E.array[n + 1] = f.y, n += 2; else if (3 === E.size) if ("c" === E.type) for (u = 0; u < p; u++) f = E.value[u], E.array[n] = f.r, E.array[n + 1] = f.g, E.array[n + 2] = f.b, n += 3; else for (u = 0; u < p; u++) f = E.value[u], E.array[n] = f.x, E.array[n + 1] = f.y, E.array[n + 2] = f.z, n += 3; else if (4 === E.size) for (u = 0; u < p; u++) f = E.value[u], E.array[n] = f.x, E.array[n + 1] = f.y, E.array[n + 2] = f.z, E.array[n + 3] = f.w, n += 4
        }
        if ((H || i.sortParticles) && (Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglVertexBuffer), Le.bufferData(Le.ARRAY_BUFFER, T, t)), (_ || i.sortParticles) && (Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglColorBuffer), Le.bufferData(Le.ARRAY_BUFFER, y, t)), w) for (l = 0, c = w.length; l < c; l++) E = w[l], (E.needsUpdate || i.sortParticles) && (Le.bindBuffer(Le.ARRAY_BUFFER, E.buffer), Le.bufferData(Le.ARRAY_BUFFER, E.array, t))
    }

    function d(e, t) {
        var i, r, o, a, n, s, h, l, c, u, p, f, E = e.vertices, d = e.colors, m = e.lineDistances, g = E.length,
            v = d.length, T = m.length, y = e.__vertexArray, R = e.__colorArray, x = e.__lineDistanceArray,
            H = e.verticesNeedUpdate, _ = e.colorsNeedUpdate, w = e.lineDistancesNeedUpdate,
            b = e.__webglCustomAttributesList;
        if (H) {
            for (i = 0; i < g; i++) a = E[i], n = 3 * i, y[n] = a.x, y[n + 1] = a.y, y[n + 2] = a.z;
            Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglVertexBuffer), Le.bufferData(Le.ARRAY_BUFFER, y, t)
        }
        if (_) {
            for (r = 0; r < v; r++) s = d[r], n = 3 * r, R[n] = s.r, R[n + 1] = s.g, R[n + 2] = s.b;
            Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglColorBuffer), Le.bufferData(Le.ARRAY_BUFFER, R, t)
        }
        if (w) {
            for (o = 0; o < T; o++) x[o] = m[o];
            Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglLineDistanceBuffer), Le.bufferData(Le.ARRAY_BUFFER, x, t)
        }
        if (b) for (h = 0, l = b.length; h < l; h++) if (f = b[h], f.needsUpdate && (void 0 === f.boundTo || "vertices" === f.boundTo)) {
            if (n = 0, u = f.value.length, 1 === f.size) for (c = 0; c < u; c++) f.array[c] = f.value[c]; else if (2 === f.size) for (c = 0; c < u; c++) p = f.value[c], f.array[n] = p.x, f.array[n + 1] = p.y, n += 2; else if (3 === f.size) if ("c" === f.type) for (c = 0; c < u; c++) p = f.value[c], f.array[n] = p.r, f.array[n + 1] = p.g, f.array[n + 2] = p.b, n += 3; else for (c = 0; c < u; c++) p = f.value[c], f.array[n] = p.x, f.array[n + 1] = p.y, f.array[n + 2] = p.z, n += 3; else if (4 === f.size) for (c = 0; c < u; c++) p = f.value[c], f.array[n] = p.x, f.array[n + 1] = p.y, f.array[n + 2] = p.z, f.array[n + 3] = p.w, n += 4;
            Le.bindBuffer(Le.ARRAY_BUFFER, f.buffer), Le.bufferData(Le.ARRAY_BUFFER, f.array, t)
        }
    }

    function m(e, t, i, r, o) {
        if (e.__inittedArrays) {
            var a, n, s, h, l, f, E, d, m, g, v, T, y, R, x, H, _, w, b, M, S, A, C, L, P, D, F, V, U, z, B, N, O, I, k,
                G, W, j, X, q, Y, K, Z = c(o), Q = u(o), J = p(o), $ = Z === THREE.SmoothShading, ee = 0, te = 0,
                ie = 0, re = 0, oe = 0, ae = 0, ne = 0, se = 0, he = 0, le = 0, ce = 0, ue = 0, pe = e.__vertexArray,
                fe = e.__uvArray, Ee = e.__uv2Array, de = e.__normalArray, me = e.__tangentArray, ge = e.__colorArray,
                ve = e.__skinIndexArray, Te = e.__skinWeightArray, ye = e.__morphTargetsArrays,
                Re = e.__morphNormalsArrays, xe = e.__webglCustomAttributesList, He = e.__faceArray, _e = e.__lineArray,
                we = t.geometry, be = we.verticesNeedUpdate, Me = we.elementsNeedUpdate, Se = we.uvsNeedUpdate,
                Ae = we.normalsNeedUpdate, Ce = we.tangentsNeedUpdate, Pe = we.colorsNeedUpdate,
                De = we.morphTargetsNeedUpdate, Fe = we.vertices, Ve = e.faces3, Ue = we.faces,
                ze = we.faceVertexUvs[0], Be = we.faceVertexUvs[1], Ne = (we.colors, we.skinIndices),
                Oe = we.skinWeights, Ie = we.morphTargets, ke = we.morphNormals;
            if (be) {
                for (a = 0, n = Ve.length; a < n; a++) h = Ue[Ve[a]], T = Fe[h.a], y = Fe[h.b], R = Fe[h.c], pe[te] = T.x, pe[te + 1] = T.y, pe[te + 2] = T.z, pe[te + 3] = y.x, pe[te + 4] = y.y, pe[te + 5] = y.z, pe[te + 6] = R.x, pe[te + 7] = R.y, pe[te + 8] = R.z, te += 9;
                Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglVertexBuffer), Le.bufferData(Le.ARRAY_BUFFER, pe, i)
            }
            if (De) for (k = 0, G = Ie.length; k < G; k++) {
                for (ce = 0, a = 0, n = Ve.length; a < n; a++) X = Ve[a], h = Ue[X], T = Ie[k].vertices[h.a], y = Ie[k].vertices[h.b], R = Ie[k].vertices[h.c], W = ye[k], W[ce] = T.x, W[ce + 1] = T.y, W[ce + 2] = T.z, W[ce + 3] = y.x, W[ce + 4] = y.y, W[ce + 5] = y.z, W[ce + 6] = R.x, W[ce + 7] = R.y, W[ce + 8] = R.z, o.morphNormals && ($ ? (q = ke[k].vertexNormals[X], w = q.a, b = q.b, M = q.c) : (w = ke[k].faceNormals[X], b = w, M = w), j = Re[k], j[ce] = w.x, j[ce + 1] = w.y, j[ce + 2] = w.z, j[ce + 3] = b.x, j[ce + 4] = b.y, j[ce + 5] = b.z, j[ce + 6] = M.x, j[ce + 7] = M.y, j[ce + 8] = M.z), ce += 9;
                Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[k]), Le.bufferData(Le.ARRAY_BUFFER, ye[k], i), o.morphNormals && (Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglMorphNormalsBuffers[k]), Le.bufferData(Le.ARRAY_BUFFER, Re[k], i))
            }
            if (Oe.length) {
                for (a = 0, n = Ve.length; a < n; a++) h = Ue[Ve[a]], L = Oe[h.a], P = Oe[h.b], D = Oe[h.c], Te[le] = L.x, Te[le + 1] = L.y, Te[le + 2] = L.z, Te[le + 3] = L.w, Te[le + 4] = P.x, Te[le + 5] = P.y, Te[le + 6] = P.z, Te[le + 7] = P.w, Te[le + 8] = D.x, Te[le + 9] = D.y, Te[le + 10] = D.z, Te[le + 11] = D.w, F = Ne[h.a], V = Ne[h.b], U = Ne[h.c], ve[le] = F.x, ve[le + 1] = F.y, ve[le + 2] = F.z, ve[le + 3] = F.w, ve[le + 4] = V.x, ve[le + 5] = V.y, ve[le + 6] = V.z, ve[le + 7] = V.w, ve[le + 8] = U.x, ve[le + 9] = U.y, ve[le + 10] = U.z, ve[le + 11] = U.w, le += 12;
                le > 0 && (Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglSkinIndicesBuffer), Le.bufferData(Le.ARRAY_BUFFER, ve, i), Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglSkinWeightsBuffer), Le.bufferData(Le.ARRAY_BUFFER, Te, i))
            }
            if (Pe && Q) {
                for (a = 0, n = Ve.length; a < n; a++) h = Ue[Ve[a]], E = h.vertexColors, d = h.color, 3 === E.length && Q === THREE.VertexColors ? (S = E[0], A = E[1], C = E[2]) : (S = d, A = d, C = d), ge[he] = S.r, ge[he + 1] = S.g, ge[he + 2] = S.b, ge[he + 3] = A.r, ge[he + 4] = A.g, ge[he + 5] = A.b, ge[he + 6] = C.r, ge[he + 7] = C.g, ge[he + 8] = C.b, he += 9;
                he > 0 && (Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglColorBuffer), Le.bufferData(Le.ARRAY_BUFFER, ge, i))
            }
            if (Ce && we.hasTangents) {
                for (a = 0, n = Ve.length; a < n; a++) h = Ue[Ve[a]], m = h.vertexTangents, x = m[0], H = m[1], _ = m[2], me[ne] = x.x, me[ne + 1] = x.y, me[ne + 2] = x.z, me[ne + 3] = x.w, me[ne + 4] = H.x, me[ne + 5] = H.y, me[ne + 6] = H.z, me[ne + 7] = H.w, me[ne + 8] = _.x, me[ne + 9] = _.y, me[ne + 10] = _.z, me[ne + 11] = _.w, ne += 12;
                Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglTangentBuffer), Le.bufferData(Le.ARRAY_BUFFER, me, i)
            }
            if (Ae && Z) {
                for (a = 0, n = Ve.length; a < n; a++) if (h = Ue[Ve[a]], l = h.vertexNormals, f = h.normal, 3 === l.length && $) for (z = 0; z < 3; z++) N = l[z], de[ae] = N.x, de[ae + 1] = N.y, de[ae + 2] = N.z, ae += 3; else for (z = 0; z < 3; z++) de[ae] = f.x, de[ae + 1] = f.y, de[ae + 2] = f.z, ae += 3;
                Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglNormalBuffer), Le.bufferData(Le.ARRAY_BUFFER, de, i)
            }
            if (Se && ze && J) {
                for (a = 0, n = Ve.length; a < n; a++) if (s = Ve[a], void 0 !== (g = ze[s])) for (z = 0; z < 3; z++) O = g[z], fe[ie] = O.x, fe[ie + 1] = O.y, ie += 2;
                ie > 0 && (Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglUVBuffer), Le.bufferData(Le.ARRAY_BUFFER, fe, i))
            }
            if (Se && Be && J) {
                for (a = 0, n = Ve.length; a < n; a++) if (s = Ve[a], void 0 !== (v = Be[s])) for (z = 0; z < 3; z++) I = v[z], Ee[re] = I.x, Ee[re + 1] = I.y, re += 2;
                re > 0 && (Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglUV2Buffer), Le.bufferData(Le.ARRAY_BUFFER, Ee, i))
            }
            if (Me) {
                for (a = 0, n = Ve.length; a < n; a++) He[oe] = ee, He[oe + 1] = ee + 1, He[oe + 2] = ee + 2, oe += 3, _e[se] = ee, _e[se + 1] = ee + 1, _e[se + 2] = ee, _e[se + 3] = ee + 2, _e[se + 4] = ee + 1, _e[se + 5] = ee + 2, se += 6, ee += 3;
                Le.bindBuffer(Le.ELEMENT_ARRAY_BUFFER, e.__webglFaceBuffer), Le.bufferData(Le.ELEMENT_ARRAY_BUFFER, He, i), Le.bindBuffer(Le.ELEMENT_ARRAY_BUFFER, e.__webglLineBuffer), Le.bufferData(Le.ELEMENT_ARRAY_BUFFER, _e, i)
            }
            if (xe) for (z = 0, B = xe.length; z < B; z++) if (K = xe[z], K.__original.needsUpdate) {
                if (ue = 0, 0, 1 === K.size) {
                    if (void 0 === K.boundTo || "vertices" === K.boundTo) for (a = 0, n = Ve.length; a < n; a++) h = Ue[Ve[a]], K.array[ue] = K.value[h.a], K.array[ue + 1] = K.value[h.b], K.array[ue + 2] = K.value[h.c], ue += 3; else if ("faces" === K.boundTo) for (a = 0, n = Ve.length; a < n; a++) Y = K.value[Ve[a]], K.array[ue] = Y, K.array[ue + 1] = Y, K.array[ue + 2] = Y, ue += 3
                } else if (2 === K.size) {
                    if (void 0 === K.boundTo || "vertices" === K.boundTo) for (a = 0, n = Ve.length; a < n; a++) h = Ue[Ve[a]], T = K.value[h.a], y = K.value[h.b], R = K.value[h.c], K.array[ue] = T.x, K.array[ue + 1] = T.y, K.array[ue + 2] = y.x, K.array[ue + 3] = y.y, K.array[ue + 4] = R.x, K.array[ue + 5] = R.y, ue += 6; else if ("faces" === K.boundTo) for (a = 0, n = Ve.length; a < n; a++) Y = K.value[Ve[a]], T = Y, y = Y, R = Y, K.array[ue] = T.x, K.array[ue + 1] = T.y, K.array[ue + 2] = y.x, K.array[ue + 3] = y.y, K.array[ue + 4] = R.x, K.array[ue + 5] = R.y, ue += 6
                } else if (3 === K.size) {
                    var Ge;
                    if (Ge = "c" === K.type ? ["r", "g", "b"] : ["x", "y", "z"], void 0 === K.boundTo || "vertices" === K.boundTo) for (a = 0, n = Ve.length; a < n; a++) h = Ue[Ve[a]], T = K.value[h.a], y = K.value[h.b], R = K.value[h.c], K.array[ue] = T[Ge[0]], K.array[ue + 1] = T[Ge[1]], K.array[ue + 2] = T[Ge[2]], K.array[ue + 3] = y[Ge[0]], K.array[ue + 4] = y[Ge[1]], K.array[ue + 5] = y[Ge[2]], K.array[ue + 6] = R[Ge[0]], K.array[ue + 7] = R[Ge[1]], K.array[ue + 8] = R[Ge[2]], ue += 9; else if ("faces" === K.boundTo) for (a = 0, n = Ve.length; a < n; a++) Y = K.value[Ve[a]], T = Y, y = Y, R = Y, K.array[ue] = T[Ge[0]], K.array[ue + 1] = T[Ge[1]], K.array[ue + 2] = T[Ge[2]], K.array[ue + 3] = y[Ge[0]], K.array[ue + 4] = y[Ge[1]], K.array[ue + 5] = y[Ge[2]], K.array[ue + 6] = R[Ge[0]], K.array[ue + 7] = R[Ge[1]], K.array[ue + 8] = R[Ge[2]], ue += 9; else if ("faceVertices" === K.boundTo) for (a = 0, n = Ve.length; a < n; a++) Y = K.value[Ve[a]], T = Y[0], y = Y[1], R = Y[2], K.array[ue] = T[Ge[0]], K.array[ue + 1] = T[Ge[1]], K.array[ue + 2] = T[Ge[2]], K.array[ue + 3] = y[Ge[0]], K.array[ue + 4] = y[Ge[1]], K.array[ue + 5] = y[Ge[2]], K.array[ue + 6] = R[Ge[0]], K.array[ue + 7] = R[Ge[1]], K.array[ue + 8] = R[Ge[2]], ue += 9
                } else if (4 === K.size) if (void 0 === K.boundTo || "vertices" === K.boundTo) for (a = 0, n = Ve.length; a < n; a++) h = Ue[Ve[a]], T = K.value[h.a], y = K.value[h.b], R = K.value[h.c], K.array[ue] = T.x, K.array[ue + 1] = T.y, K.array[ue + 2] = T.z, K.array[ue + 3] = T.w, K.array[ue + 4] = y.x, K.array[ue + 5] = y.y, K.array[ue + 6] = y.z, K.array[ue + 7] = y.w, K.array[ue + 8] = R.x, K.array[ue + 9] = R.y, K.array[ue + 10] = R.z, K.array[ue + 11] = R.w, ue += 12; else if ("faces" === K.boundTo) for (a = 0, n = Ve.length; a < n; a++) Y = K.value[Ve[a]], T = Y, y = Y, R = Y, K.array[ue] = T.x, K.array[ue + 1] = T.y, K.array[ue + 2] = T.z, K.array[ue + 3] = T.w, K.array[ue + 4] = y.x, K.array[ue + 5] = y.y, K.array[ue + 6] = y.z, K.array[ue + 7] = y.w, K.array[ue + 8] = R.x, K.array[ue + 9] = R.y, K.array[ue + 10] = R.z, K.array[ue + 11] = R.w, ue += 12; else if ("faceVertices" === K.boundTo) for (a = 0, n = Ve.length; a < n; a++) Y = K.value[Ve[a]], T = Y[0], y = Y[1], R = Y[2], K.array[ue] = T.x, K.array[ue + 1] = T.y, K.array[ue + 2] = T.z, K.array[ue + 3] = T.w, K.array[ue + 4] = y.x, K.array[ue + 5] = y.y, K.array[ue + 6] = y.z, K.array[ue + 7] = y.w, K.array[ue + 8] = R.x, K.array[ue + 9] = R.y, K.array[ue + 10] = R.z, K.array[ue + 11] = R.w, ue += 12;
                Le.bindBuffer(Le.ARRAY_BUFFER, K.buffer), Le.bufferData(Le.ARRAY_BUFFER, K.array, i)
            }
            r && (delete e.__inittedArrays, delete e.__colorArray, delete e.__normalArray, delete e.__tangentArray, delete e.__uvArray, delete e.__uv2Array, delete e.__faceArray, delete e.__vertexArray, delete e.__lineArray, delete e.__skinIndexArray, delete e.__skinWeightArray)
        }
    }

    function g(e, t, i) {
        var r, o, a = e.attributes;
        for (r in a) o = a[r], o.needsUpdate && ("index" === r ? (Le.bindBuffer(Le.ELEMENT_ARRAY_BUFFER, o.buffer), Le.bufferData(Le.ELEMENT_ARRAY_BUFFER, o.array, t)) : (Le.bindBuffer(Le.ARRAY_BUFFER, o.buffer), Le.bufferData(Le.ARRAY_BUFFER, o.array, t)), o.needsUpdate = !1), i && !o.dynamic && (o.array = null)
    }

    function v(e) {
        ut[e] || (Le.enableVertexAttribArray(e), ut[e] = !0)
    }

    function T() {
        for (var e in ut) ut[e] && (Le.disableVertexAttribArray(e), ut[e] = !1)
    }

    function y(e, t, i) {
        var r = e.program.attributes;
        if (i.morphTargetBase !== -1 && r.position >= 0 ? (Le.bindBuffer(Le.ARRAY_BUFFER, t.__webglMorphTargetsBuffers[i.morphTargetBase]), v(r.position), Le.vertexAttribPointer(r.position, 3, Le.FLOAT, !1, 0, 0)) : r.position >= 0 && (Le.bindBuffer(Le.ARRAY_BUFFER, t.__webglVertexBuffer), v(r.position), Le.vertexAttribPointer(r.position, 3, Le.FLOAT, !1, 0, 0)), i.morphTargetForcedOrder.length) for (var o = 0, a = i.morphTargetForcedOrder, n = i.morphTargetInfluences; o < e.numSupportedMorphTargets && o < a.length;) r["morphTarget" + o] >= 0 && (Le.bindBuffer(Le.ARRAY_BUFFER, t.__webglMorphTargetsBuffers[a[o]]), v(r["morphTarget" + o]), Le.vertexAttribPointer(r["morphTarget" + o], 3, Le.FLOAT, !1, 0, 0)), r["morphNormal" + o] >= 0 && e.morphNormals && (Le.bindBuffer(Le.ARRAY_BUFFER, t.__webglMorphNormalsBuffers[a[o]]), v(r["morphNormal" + o]), Le.vertexAttribPointer(r["morphNormal" + o], 3, Le.FLOAT, !1, 0, 0)), i.__webglMorphTargetInfluences[o] = n[a[o]], o++; else {
            var s, h, l = [], n = i.morphTargetInfluences, c = n.length;
            for (h = 0; h < c; h++) (s = n[h]) > 0 && l.push([s, h]);
            l.length > e.numSupportedMorphTargets ? (l.sort(x), l.length = e.numSupportedMorphTargets) : l.length > e.numSupportedMorphNormals ? l.sort(x) : 0 === l.length && l.push([0, 0]);
            for (var u, o = 0; o < e.numSupportedMorphTargets;) l[o] ? (u = l[o][1], r["morphTarget" + o] >= 0 && (Le.bindBuffer(Le.ARRAY_BUFFER, t.__webglMorphTargetsBuffers[u]), v(r["morphTarget" + o]), Le.vertexAttribPointer(r["morphTarget" + o], 3, Le.FLOAT, !1, 0, 0)), r["morphNormal" + o] >= 0 && e.morphNormals && (Le.bindBuffer(Le.ARRAY_BUFFER, t.__webglMorphNormalsBuffers[u]), v(r["morphNormal" + o]), Le.vertexAttribPointer(r["morphNormal" + o], 3, Le.FLOAT, !1, 0, 0)), i.__webglMorphTargetInfluences[o] = n[u]) : i.__webglMorphTargetInfluences[o] = 0, o++
        }
        null !== e.program.uniforms.morphTargetInfluences && Le.uniform1fv(e.program.uniforms.morphTargetInfluences, i.__webglMorphTargetInfluences)
    }

    function R(e, t) {
        return e.z !== t.z ? t.z - e.z : e.id - t.id
    }

    function x(e, t) {
        return t[0] - e[0]
    }

    function H(e, t, i) {
        if (e.length) for (var r = 0, o = e.length; r < o; r++) Oe = null, We = null, Ke = -1, $e = -1, et = -1, qe = -1, Ye = -1, Ge = -1, ke = -1, gt = !0, e[r].render(t, i, lt, ct), Oe = null, We = null, Ke = -1, $e = -1, et = -1, qe = -1, Ye = -1, Ge = -1, ke = -1, gt = !0
    }

    function _(e, t, i, r, o, a, n, s) {
        var h, l, c, u, p, f, E;
        t ? (p = e.length - 1, f = -1, E = -1) : (p = 0, f = e.length, E = 1);
        for (var d = p; d !== f; d += E) if (h = e[d], h.render) {
            if (l = h.object, c = h.buffer, s) u = s; else {
                if (!(u = h[i])) continue;
                n && ze.setBlending(u.blending, u.blendEquation, u.blendSrc, u.blendDst), ze.setDepthTest(u.depthTest), ze.setDepthWrite(u.depthWrite), re(u.polygonOffset, u.polygonOffsetFactor, u.polygonOffsetUnits)
            }
            ze.setMaterialFaces(u), c instanceof THREE.BufferGeometry ? ze.renderBufferDirect(r, o, a, u, c, l) : ze.renderBuffer(r, o, a, u, c, l)
        }
    }

    function w(e, t, i, r, o, a, n) {
        for (var s, h, l, c = 0, u = e.length; c < u; c++) if (s = e[c], h = s.object, h.visible) {
            if (n) l = n; else {
                if (!(l = s[t])) continue;
                a && ze.setBlending(l.blending, l.blendEquation, l.blendSrc, l.blendDst), ze.setDepthTest(l.depthTest), ze.setDepthWrite(l.depthWrite), re(l.polygonOffset, l.polygonOffsetFactor, l.polygonOffsetUnits)
            }
            ze.renderImmediateObject(i, r, o, l, h)
        }
    }

    function b(e) {
        var t = e.object, i = t.material;
        i.transparent ? (e.transparent = i, e.opaque = null) : (e.opaque = i, e.transparent = null)
    }

    function M(e) {
        var t, i, r, o = e.object, a = e.buffer;
        r = o.material, r instanceof THREE.MeshFaceMaterial ? (i = a.materialIndex, t = r.materials[i], t.transparent ? (e.transparent = t, e.opaque = null) : (e.opaque = t, e.transparent = null)) : (t = r) && (t.transparent ? (e.transparent = t, e.opaque = null) : (e.opaque = t, e.transparent = null))
    }

    function S(e, t) {
        var i, r, o, a, n, s, h = {}, l = e.morphTargets.length, c = e.morphNormals.length,
            u = t instanceof THREE.MeshFaceMaterial;
        for (e.geometryGroups = {}, i = 0, r = e.faces.length; i < r; i++) o = e.faces[i], a = u ? o.materialIndex : 0, void 0 === h[a] && (h[a] = {
            hash: a,
            counter: 0
        }), s = h[a].hash + "_" + h[a].counter, void 0 === e.geometryGroups[s] && (e.geometryGroups[s] = {
            faces3: [],
            materialIndex: a,
            vertices: 0,
            numMorphTargets: l,
            numMorphNormals: c
        }), n = 3, e.geometryGroups[s].vertices + n > 65535 && (h[a].counter += 1, s = h[a].hash + "_" + h[a].counter, void 0 === e.geometryGroups[s] && (e.geometryGroups[s] = {
            faces3: [],
            materialIndex: a,
            vertices: 0,
            numMorphTargets: l,
            numMorphNormals: c
        })), e.geometryGroups[s].faces3.push(i), e.geometryGroups[s].vertices += n;
        e.geometryGroupsList = [];
        for (var p in e.geometryGroups) e.geometryGroups[p].id = je++, e.geometryGroupsList.push(e.geometryGroups[p])
    }

    function A(e, o) {
        var h, l, c, u;
        if (void 0 === e.__webglInit) if (e.__webglInit = !0, e._modelViewMatrix = new THREE.Matrix4, e._normalMatrix = new THREE.Matrix3, void 0 !== e.geometry && void 0 === e.geometry.__webglInit && (e.geometry.__webglInit = !0, e.geometry.addEventListener("dispose", Ct)), void 0 === (l = e.geometry)) ; else if (l instanceof THREE.BufferGeometry) f(l); else if (e instanceof THREE.Mesh) {
            c = e.material, void 0 === l.geometryGroups && S(l, c);
            for (h in l.geometryGroups) u = l.geometryGroups[h], u.__webglVertexBuffer || (r(u), s(u, e), l.verticesNeedUpdate = !0, l.morphTargetsNeedUpdate = !0, l.elementsNeedUpdate = !0, l.uvsNeedUpdate = !0, l.normalsNeedUpdate = !0, l.tangentsNeedUpdate = !0, l.colorsNeedUpdate = !0)
        } else e instanceof THREE.Line ? l.__webglVertexBuffer || (i(l), n(l, e), l.verticesNeedUpdate = !0, l.colorsNeedUpdate = !0, l.lineDistancesNeedUpdate = !0) : e instanceof THREE.ParticleSystem && (l.__webglVertexBuffer || (t(l), a(l, e), l.verticesNeedUpdate = !0, l.colorsNeedUpdate = !0));
        if (void 0 === e.__webglActive) {
            if (e instanceof THREE.Mesh) {
                if ((l = e.geometry) instanceof THREE.BufferGeometry) C(o.__webglObjects, l, e); else if (l instanceof THREE.Geometry) for (h in l.geometryGroups) u = l.geometryGroups[h], C(o.__webglObjects, u, e)
            } else e instanceof THREE.Line || e instanceof THREE.ParticleSystem ? (l = e.geometry, C(o.__webglObjects, l, e)) : e instanceof THREE.ImmediateRenderObject || e.immediateRenderCallback ? L(o.__webglObjectsImmediate, e) : e instanceof THREE.Sprite ? o.__webglSprites.push(e) : e instanceof THREE.LensFlare && o.__webglFlares.push(e);
            e.__webglActive = !0
        }
    }

    function C(e, t, i) {
        e.push({id: null, buffer: t, object: i, opaque: null, transparent: null, z: 0})
    }

    function L(e, t) {
        e.push({id: null, object: t, opaque: null, transparent: null, z: 0})
    }

    function P(e) {
        var t, i, r, o = e.geometry;
        if (o instanceof THREE.BufferGeometry) g(o, Le.DYNAMIC_DRAW, !o.dynamic); else if (e instanceof THREE.Mesh) {
            for (var a = 0, n = o.geometryGroupsList.length; a < n; a++) t = o.geometryGroupsList[a], r = h(e, t), o.buffersNeedUpdate && s(t, e), i = r.attributes && D(r), (o.verticesNeedUpdate || o.morphTargetsNeedUpdate || o.elementsNeedUpdate || o.uvsNeedUpdate || o.normalsNeedUpdate || o.colorsNeedUpdate || o.tangentsNeedUpdate || i) && m(t, e, Le.DYNAMIC_DRAW, !o.dynamic, r);
            o.verticesNeedUpdate = !1, o.morphTargetsNeedUpdate = !1, o.elementsNeedUpdate = !1, o.uvsNeedUpdate = !1, o.normalsNeedUpdate = !1, o.colorsNeedUpdate = !1, o.tangentsNeedUpdate = !1, o.buffersNeedUpdate = !1, r.attributes && F(r)
        } else e instanceof THREE.Line ? (r = h(e, o), i = r.attributes && D(r), (o.verticesNeedUpdate || o.colorsNeedUpdate || o.lineDistancesNeedUpdate || i) && d(o, Le.DYNAMIC_DRAW), o.verticesNeedUpdate = !1, o.colorsNeedUpdate = !1, o.lineDistancesNeedUpdate = !1, r.attributes && F(r)) : e instanceof THREE.ParticleSystem && (r = h(e, o), i = r.attributes && D(r), (o.verticesNeedUpdate || o.colorsNeedUpdate || e.sortParticles || i) && E(o, Le.DYNAMIC_DRAW, e), o.verticesNeedUpdate = !1, o.colorsNeedUpdate = !1, r.attributes && F(r))
    }

    function D(e) {
        for (var t in e.attributes) if (e.attributes[t].needsUpdate) return !0;
        return !1
    }

    function F(e) {
        for (var t in e.attributes) e.attributes[t].needsUpdate = !1
    }

    function V(e, t) {
        e instanceof THREE.Mesh || e instanceof THREE.ParticleSystem || e instanceof THREE.Line ? U(t.__webglObjects, e) : e instanceof THREE.Sprite ? z(t.__webglSprites, e) : e instanceof THREE.LensFlare ? z(t.__webglFlares, e) : (e instanceof THREE.ImmediateRenderObject || e.immediateRenderCallback) && U(t.__webglObjectsImmediate, e), delete e.__webglActive
    }

    function U(e, t) {
        for (var i = e.length - 1; i >= 0; i--) e[i].object === t && e.splice(i, 1)
    }

    function z(e, t) {
        for (var i = e.length - 1; i >= 0; i--) e[i] === t && e.splice(i, 1)
    }

    function B(e, t) {
        e.uniforms = THREE.UniformsUtils.clone(t.uniforms), e.vertexShader = t.vertexShader, e.fragmentShader = t.fragmentShader
    }

    function N(e, t, i, r, o) {
        Xe = 0, r.needsUpdate && (r.program && Bt(r), ze.initMaterial(r, t, i, o), r.needsUpdate = !1), r.morphTargets && (o.__webglMorphTargetInfluences || (o.__webglMorphTargetInfluences = new Float32Array(ze.maxMorphTargets)));
        var a = !1, n = r.program, s = n.uniforms, h = r.uniforms;
        if (n !== Oe && (Le.useProgram(n), Oe = n, a = !0), r.id !== ke && (ke = r.id, a = !0), (a || e !== We) && (Le.uniformMatrix4fv(s.projectionMatrix, !1, e.projectionMatrix.elements), e !== We && (We = e)), r.skinning) if (Ht && o.useVertexTexture) {
            if (null !== s.boneTexture) {
                var l = Z();
                Le.uniform1i(s.boneTexture, l), ze.setTexture(o.boneTexture, l)
            }
            null !== s.boneTextureWidth && Le.uniform1i(s.boneTextureWidth, o.boneTextureWidth), null !== s.boneTextureHeight && Le.uniform1i(s.boneTextureHeight, o.boneTextureHeight)
        } else null !== s.boneGlobalMatrices && Le.uniformMatrix4fv(s.boneGlobalMatrices, !1, o.boneMatrices);
        return a && (i && r.fog && W(h, i), (r instanceof THREE.MeshPhongMaterial || r instanceof THREE.MeshLambertMaterial || r.lights) && (gt && (te(n, t), gt = !1), q(h, vt)), (r instanceof THREE.MeshBasicMaterial || r instanceof THREE.MeshLambertMaterial || r instanceof THREE.MeshPhongMaterial) && O(h, r), r instanceof THREE.LineBasicMaterial ? I(h, r) : r instanceof THREE.LineDashedMaterial ? (I(h, r), k(h, r)) : r instanceof THREE.ParticleSystemMaterial ? G(h, r) : r instanceof THREE.MeshPhongMaterial ? j(h, r) : r instanceof THREE.MeshLambertMaterial ? X(h, r) : r instanceof THREE.MeshDepthMaterial ? (h.mNear.value = e.near, h.mFar.value = e.far, h.opacity.value = r.opacity) : r instanceof THREE.MeshNormalMaterial && (h.opacity.value = r.opacity), o.receiveShadow && !r._shadowPass && Y(h, t), Q(n, r.uniformsList), (r instanceof THREE.ShaderMaterial || r instanceof THREE.MeshPhongMaterial || r.envMap) && null !== s.cameraPosition && (dt.getPositionFromMatrix(e.matrixWorld), Le.uniform3f(s.cameraPosition, dt.x, dt.y, dt.z)), (r instanceof THREE.MeshPhongMaterial || r instanceof THREE.MeshLambertMaterial || r instanceof THREE.ShaderMaterial || r.skinning) && null !== s.viewMatrix && Le.uniformMatrix4fv(s.viewMatrix, !1, e.matrixWorldInverse.elements)), K(s, o), null !== s.modelMatrix && Le.uniformMatrix4fv(s.modelMatrix, !1, o.matrixWorld.elements), n
    }

    function O(e, t) {
        e.opacity.value = t.opacity, ze.gammaInput ? e.diffuse.value.copyGammaToLinear(t.color) : e.diffuse.value = t.color, e.map.value = t.map, e.lightMap.value = t.lightMap, e.specularMap.value = t.specularMap, t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale), t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale));
        var i;
        if (t.map ? i = t.map : t.specularMap ? i = t.specularMap : t.normalMap ? i = t.normalMap : t.bumpMap && (i = t.bumpMap), void 0 !== i) {
            var r = i.offset, o = i.repeat;
            e.offsetRepeat.value.set(r.x, r.y, o.x, o.y)
        }
        e.envMap.value = t.envMap, e.flipEnvMap.value = t.envMap instanceof THREE.WebGLRenderTargetCube ? 1 : -1, ze.gammaInput, e.reflectivity.value = t.reflectivity, e.refractionRatio.value = t.refractionRatio, e.combine.value = t.combine, e.useRefract.value = t.envMap && t.envMap.mapping instanceof THREE.CubeRefractionMapping
    }

    function I(e, t) {
        e.diffuse.value = t.color, e.opacity.value = t.opacity
    }

    function k(e, t) {
        e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale
    }

    function G(e, t) {
        e.psColor.value = t.color, e.opacity.value = t.opacity, e.size.value = t.size, e.scale.value = xe.height / 2, e.map.value = t.map
    }

    function W(e, t) {
        e.fogColor.value = t.color, t instanceof THREE.Fog ? (e.fogNear.value = t.near, e.fogFar.value = t.far) : t instanceof THREE.FogExp2 && (e.fogDensity.value = t.density)
    }

    function j(e, t) {
        e.shininess.value = t.shininess, ze.gammaInput ? (e.ambient.value.copyGammaToLinear(t.ambient), e.emissive.value.copyGammaToLinear(t.emissive), e.specular.value.copyGammaToLinear(t.specular)) : (e.ambient.value = t.ambient, e.emissive.value = t.emissive, e.specular.value = t.specular), t.wrapAround && e.wrapRGB.value.copy(t.wrapRGB)
    }

    function X(e, t) {
        ze.gammaInput ? (e.ambient.value.copyGammaToLinear(t.ambient), e.emissive.value.copyGammaToLinear(t.emissive)) : (e.ambient.value = t.ambient, e.emissive.value = t.emissive), t.wrapAround && e.wrapRGB.value.copy(t.wrapRGB)
    }

    function q(e, t) {
        e.ambientLightColor.value = t.ambient, e.directionalLightColor.value = t.directional.colors, e.directionalLightDirection.value = t.directional.positions, e.pointLightColor.value = t.point.colors, e.pointLightPosition.value = t.point.positions, e.pointLightDistance.value = t.point.distances, e.spotLightColor.value = t.spot.colors, e.spotLightPosition.value = t.spot.positions, e.spotLightDistance.value = t.spot.distances, e.spotLightDirection.value = t.spot.directions, e.spotLightAngleCos.value = t.spot.anglesCos, e.spotLightExponent.value = t.spot.exponents, e.hemisphereLightSkyColor.value = t.hemi.skyColors, e.hemisphereLightGroundColor.value = t.hemi.groundColors, e.hemisphereLightDirection.value = t.hemi.positions
    }

    function Y(e, t) {
        if (e.shadowMatrix) for (var i = 0, r = 0, o = t.length; r < o; r++) {
            var a = t[r];
            a.castShadow && (a instanceof THREE.SpotLight || a instanceof THREE.DirectionalLight && !a.shadowCascade) && (e.shadowMap.value[i] = a.shadowMap, e.shadowMapSize.value[i] = a.shadowMapSize, e.shadowMatrix.value[i] = a.shadowMatrix, e.shadowDarkness.value[i] = a.shadowDarkness, e.shadowBias.value[i] = a.shadowBias, i++)
        }
    }

    function K(e, t) {
        Le.uniformMatrix4fv(e.modelViewMatrix, !1, t._modelViewMatrix.elements), e.normalMatrix && Le.uniformMatrix3fv(e.normalMatrix, !1, t._normalMatrix.elements)
    }

    function Z() {
        var e = Xe;
        return Xe += 1, e
    }

    function Q(e, t) {
        var i, r, o, a, n, s, h, l, c, u, p;
        for (c = 0, u = t.length; c < u; c++) if (a = e.uniforms[t[c][1]]) if (i = t[c][0], o = i.type, r = i.value, "i" === o) Le.uniform1i(a, r); else if ("f" === o) Le.uniform1f(a, r); else if ("v2" === o) Le.uniform2f(a, r.x, r.y); else if ("v3" === o) Le.uniform3f(a, r.x, r.y, r.z); else if ("v4" === o) Le.uniform4f(a, r.x, r.y, r.z, r.w); else if ("c" === o) Le.uniform3f(a, r.r, r.g, r.b); else if ("iv1" === o) Le.uniform1iv(a, r); else if ("iv" === o) Le.uniform3iv(a, r); else if ("fv1" === o) Le.uniform1fv(a, r); else if ("fv" === o) Le.uniform3fv(a, r); else if ("v2v" === o) {
            for (void 0 === i._array && (i._array = new Float32Array(2 * r.length)), h = 0, l = r.length; h < l; h++) p = 2 * h, i._array[p] = r[h].x, i._array[p + 1] = r[h].y;
            Le.uniform2fv(a, i._array)
        } else if ("v3v" === o) {
            for (void 0 === i._array && (i._array = new Float32Array(3 * r.length)), h = 0, l = r.length; h < l; h++) p = 3 * h, i._array[p] = r[h].x, i._array[p + 1] = r[h].y, i._array[p + 2] = r[h].z;
            Le.uniform3fv(a, i._array)
        } else if ("v4v" === o) {
            for (void 0 === i._array && (i._array = new Float32Array(4 * r.length)), h = 0, l = r.length; h < l; h++) p = 4 * h, i._array[p] = r[h].x, i._array[p + 1] = r[h].y, i._array[p + 2] = r[h].z, i._array[p + 3] = r[h].w;
            Le.uniform4fv(a, i._array)
        } else if ("m4" === o) void 0 === i._array && (i._array = new Float32Array(16)), r.flattenToArray(i._array), Le.uniformMatrix4fv(a, !1, i._array); else if ("m4v" === o) {
            for (void 0 === i._array && (i._array = new Float32Array(16 * r.length)), h = 0, l = r.length; h < l; h++) r[h].flattenToArrayOffset(i._array, 16 * h);
            Le.uniformMatrix4fv(a, !1, i._array)
        } else if ("t" === o) {
            if (n = r, s = Z(), Le.uniform1i(a, s), !n) continue;
            n.image instanceof Array && 6 === n.image.length ? pe(n, s) : n instanceof THREE.WebGLRenderTargetCube ? fe(n, s) : ze.setTexture(n, s)
        } else if ("tv" === o) {
            for (void 0 === i._array && (i._array = []), h = 0, l = i.value.length; h < l; h++) i._array[h] = Z();
            for (Le.uniform1iv(a, i._array), h = 0, l = i.value.length; h < l; h++) n = i.value[h], s = i._array[h], n && ze.setTexture(n, s)
        }
    }

    function J(e, t) {
        e._modelViewMatrix.multiplyMatrices(t.matrixWorldInverse, e.matrixWorld), e._normalMatrix.getNormalMatrix(e._modelViewMatrix)
    }

    function $(e, t, i, r) {
        e[t] = i.r * i.r * r, e[t + 1] = i.g * i.g * r, e[t + 2] = i.b * i.b * r
    }

    function ee(e, t, i, r) {
        e[t] = i.r * r, e[t + 1] = i.g * r, e[t + 2] = i.b * r
    }

    function te(e, t) {
        var i, r, o, a, n, s, h, l, c, u = 0, p = 0, f = 0, E = vt, d = E.directional.colors,
            m = E.directional.positions, g = E.point.colors, v = E.point.positions, T = E.point.distances,
            y = E.spot.colors, R = E.spot.positions, x = E.spot.distances, H = E.spot.directions, _ = E.spot.anglesCos,
            w = E.spot.exponents, b = E.hemi.skyColors, M = E.hemi.groundColors, S = E.hemi.positions, A = 0, C = 0,
            L = 0, P = 0, D = 0, F = 0, V = 0, U = 0, z = 0, B = 0, N = 0, O = 0;
        for (i = 0, r = t.length; i < r; i++) if (o = t[i], !o.onlyShadow) if (a = o.color, h = o.intensity, c = o.distance, o instanceof THREE.AmbientLight) {
            if (!o.visible) continue;
            ze.gammaInput ? (u += a.r * a.r, p += a.g * a.g, f += a.b * a.b) : (u += a.r, p += a.g, f += a.b)
        } else if (o instanceof THREE.DirectionalLight) {
            if (D += 1, !o.visible) continue;
            if (mt.getPositionFromMatrix(o.matrixWorld), dt.getPositionFromMatrix(o.target.matrixWorld), mt.sub(dt), mt.normalize(), 0 === mt.x && 0 === mt.y && 0 === mt.z) continue;
            z = 3 * A, m[z] = mt.x, m[z + 1] = mt.y, m[z + 2] = mt.z, ze.gammaInput ? $(d, z, a, h * h) : ee(d, z, a, h), A += 1
        } else if (o instanceof THREE.PointLight) {
            if (F += 1, !o.visible) continue;
            B = 3 * C, ze.gammaInput ? $(g, B, a, h * h) : ee(g, B, a, h), dt.getPositionFromMatrix(o.matrixWorld), v[B] = dt.x, v[B + 1] = dt.y, v[B + 2] = dt.z, T[C] = c, C += 1
        } else if (o instanceof THREE.SpotLight) {
            if (V += 1, !o.visible) continue;
            N = 3 * L, ze.gammaInput ? $(y, N, a, h * h) : ee(y, N, a, h), dt.getPositionFromMatrix(o.matrixWorld), R[N] = dt.x, R[N + 1] = dt.y, R[N + 2] = dt.z, x[L] = c, mt.copy(dt), dt.getPositionFromMatrix(o.target.matrixWorld), mt.sub(dt), mt.normalize(), H[N] = mt.x, H[N + 1] = mt.y, H[N + 2] = mt.z, _[L] = Math.cos(o.angle), w[L] = o.exponent, L += 1
        } else if (o instanceof THREE.HemisphereLight) {
            if (U += 1, !o.visible) continue;
            if (mt.getPositionFromMatrix(o.matrixWorld), mt.normalize(), 0 === mt.x && 0 === mt.y && 0 === mt.z) continue;
            O = 3 * P, S[O] = mt.x, S[O + 1] = mt.y, S[O + 2] = mt.z, n = o.color, s = o.groundColor, ze.gammaInput ? (l = h * h, $(b, O, n, l), $(M, O, s, l)) : (ee(b, O, n, h), ee(M, O, s, h)), P += 1
        }
        for (i = 3 * A, r = Math.max(d.length, 3 * D); i < r; i++) d[i] = 0;
        for (i = 3 * C, r = Math.max(g.length, 3 * F); i < r; i++) g[i] = 0;
        for (i = 3 * L, r = Math.max(y.length, 3 * V); i < r; i++) y[i] = 0;
        for (i = 3 * P, r = Math.max(b.length, 3 * U); i < r; i++) b[i] = 0;
        for (i = 3 * P, r = Math.max(M.length, 3 * U); i < r; i++) M[i] = 0;
        E.directional.length = A, E.point.length = C, E.spot.length = L, E.hemi.length = P, E.ambient[0] = u, E.ambient[1] = p, E.ambient[2] = f
    }

    function ie(e) {
        e !== ot && (Le.lineWidth(e), ot = e)
    }

    function re(e, t, i) {
        tt !== e && (e ? Le.enable(Le.POLYGON_OFFSET_FILL) : Le.disable(Le.POLYGON_OFFSET_FILL), tt = e), !e || it === t && rt === i || (Le.polygonOffset(t, i), it = t, rt = i)
    }

    function oe(e) {
        var t, i, r = [];
        for (var o in e) (t = e[o]) !== !1 && (i = "#define " + o + " " + t, r.push(i));
        return r.join("\n")
    }

    function ae(e, t, i, r, o, a, n, s) {
        var h, l, c, u, p, f = [];
        e ? f.push(e) : (f.push(t), f.push(i));
        for (c in a) f.push(c), f.push(a[c]);
        for (h in n) f.push(h), f.push(n[h]);
        for (p = f.join(), h = 0, l = Be.length; h < l; h++) {
            var E = Be[h];
            if (E.code === p) return E.usedTimes++, E.program
        }
        var d = "SHADOWMAP_TYPE_BASIC";
        n.shadowMapType === THREE.PCFShadowMap ? d = "SHADOWMAP_TYPE_PCF" : n.shadowMapType === THREE.PCFSoftShadowMap && (d = "SHADOWMAP_TYPE_PCF_SOFT");
        var m = oe(a);
        u = Le.createProgram();
        var g = ["precision " + He + " float;", "precision " + He + " int;", m, xt ? "#define VERTEX_TEXTURES" : "", ze.gammaInput ? "#define GAMMA_INPUT" : "", ze.gammaOutput ? "#define GAMMA_OUTPUT" : "", ze.physicallyBasedShading ? "#define PHYSICALLY_BASED_SHADING" : "", "#define MAX_DIR_LIGHTS " + n.maxDirLights, "#define MAX_POINT_LIGHTS " + n.maxPointLights, "#define MAX_SPOT_LIGHTS " + n.maxSpotLights, "#define MAX_HEMI_LIGHTS " + n.maxHemiLights, "#define MAX_SHADOWS " + n.maxShadows, "#define MAX_BONES " + n.maxBones, n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.vertexColors ? "#define USE_COLOR" : "", n.skinning ? "#define USE_SKINNING" : "", n.useVertexTexture ? "#define BONE_TEXTURE" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals ? "#define USE_MORPHNORMALS" : "", n.perPixel ? "#define PHONG_PER_PIXEL" : "", n.wrapAround ? "#define WRAP_AROUND" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + d : "", n.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", n.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "attribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "attribute vec3 morphTarget0;", "attribute vec3 morphTarget1;", "attribute vec3 morphTarget2;", "attribute vec3 morphTarget3;", "#ifdef USE_MORPHNORMALS", "attribute vec3 morphNormal0;", "attribute vec3 morphNormal1;", "attribute vec3 morphNormal2;", "attribute vec3 morphNormal3;", "#else", "attribute vec3 morphTarget4;", "attribute vec3 morphTarget5;", "attribute vec3 morphTarget6;", "attribute vec3 morphTarget7;", "#endif", "#endif", "#ifdef USE_SKINNING", "attribute vec4 skinIndex;", "attribute vec4 skinWeight;", "#endif", ""].join("\n"),
            v = ["precision " + He + " float;", "precision " + He + " int;", n.bumpMap || n.normalMap ? "#extension GL_OES_standard_derivatives : enable" : "", m, "#define MAX_DIR_LIGHTS " + n.maxDirLights, "#define MAX_POINT_LIGHTS " + n.maxPointLights, "#define MAX_SPOT_LIGHTS " + n.maxSpotLights, "#define MAX_HEMI_LIGHTS " + n.maxHemiLights, "#define MAX_SHADOWS " + n.maxShadows, n.alphaTest ? "#define ALPHATEST " + n.alphaTest : "", ze.gammaInput ? "#define GAMMA_INPUT" : "", ze.gammaOutput ? "#define GAMMA_OUTPUT" : "", ze.physicallyBasedShading ? "#define PHYSICALLY_BASED_SHADING" : "", n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.vertexColors ? "#define USE_COLOR" : "", n.metal ? "#define METAL" : "", n.perPixel ? "#define PHONG_PER_PIXEL" : "", n.wrapAround ? "#define WRAP_AROUND" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + d : "", n.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", n.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", ""].join("\n"),
            T = he("vertex", g + i), y = he("fragment", v + t);
        Le.attachShader(u, T), Le.attachShader(u, y), s && Le.bindAttribLocation(u, 0, s), Le.linkProgram(u), Le.getProgramParameter(u, Le.LINK_STATUS), Le.deleteShader(y), Le.deleteShader(T), u.uniforms = {}, u.attributes = {};
        var R, x, H, _;
        R = ["viewMatrix", "modelViewMatrix", "projectionMatrix", "normalMatrix", "modelMatrix", "cameraPosition", "morphTargetInfluences"], n.useVertexTexture ? (R.push("boneTexture"), R.push("boneTextureWidth"), R.push("boneTextureHeight")) : R.push("boneGlobalMatrices");
        for (x in r) R.push(x);
        for (ne(u, R), R = ["position", "normal", "uv", "uv2", "tangent", "color", "skinIndex", "skinWeight", "lineDistance"], _ = 0; _ < n.maxMorphTargets; _++) R.push("morphTarget" + _);
        for (_ = 0; _ < n.maxMorphNormals; _++) R.push("morphNormal" + _);
        for (H in o) R.push(H);
        return se(u, R), u.id = Ne++, Be.push({
            program: u,
            code: p,
            usedTimes: 1
        }), ze.info.memory.programs = Be.length, u
    }

    function ne(e, t) {
        var i, r, o;
        for (i = 0, r = t.length; i < r; i++) o = t[i], e.uniforms[o] = Le.getUniformLocation(e, o)
    }

    function se(e, t) {
        var i, r, o;
        for (i = 0, r = t.length; i < r; i++) o = t[i], e.attributes[o] = Le.getAttribLocation(e, o)
    }

    function he(e, t) {
        var i;
        return "fragment" === e ? i = Le.createShader(Le.FRAGMENT_SHADER) : "vertex" === e && (i = Le.createShader(Le.VERTEX_SHADER)), Le.shaderSource(i, t), Le.compileShader(i), Le.getShaderParameter(i, Le.COMPILE_STATUS) ? i : null
    }

    function le(e) {
        return 0 == (e & e - 1)
    }

    function ce(e, t, i) {
        i ? (Le.texParameteri(e, Le.TEXTURE_WRAP_S, ve(t.wrapS)), Le.texParameteri(e, Le.TEXTURE_WRAP_T, ve(t.wrapT)), Le.texParameteri(e, Le.TEXTURE_MAG_FILTER, ve(t.magFilter)), Le.texParameteri(e, Le.TEXTURE_MIN_FILTER, ve(t.minFilter))) : (Le.texParameteri(e, Le.TEXTURE_WRAP_S, Le.CLAMP_TO_EDGE), Le.texParameteri(e, Le.TEXTURE_WRAP_T, Le.CLAMP_TO_EDGE), Le.texParameteri(e, Le.TEXTURE_MAG_FILTER, ge(t.magFilter)), Le.texParameteri(e, Le.TEXTURE_MIN_FILTER, ge(t.minFilter))), Ve && t.type !== THREE.FloatType && (t.anisotropy > 1 || t.__oldAnisotropy) && (Le.texParameterf(e, Ve.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(t.anisotropy, Rt)), t.__oldAnisotropy = t.anisotropy)
    }

    function ue(e, t) {
        if (e.width <= t && e.height <= t) return e;
        var i = Math.max(e.width, e.height), r = Math.floor(e.width * t / i), o = Math.floor(e.height * t / i),
            a = document.createElement("canvas");
        return a.width = r, a.height = o, a.getContext("2d").drawImage(e, 0, 0, e.width, e.height, 0, 0, r, o), a
    }

    function pe(e, t) {
        if (6 === e.image.length) if (e.needsUpdate) {
            e.image.__webglTextureCube || (e.addEventListener("dispose", Lt), e.image.__webglTextureCube = Le.createTexture(), ze.info.memory.textures++), Le.activeTexture(Le.TEXTURE0 + t), Le.bindTexture(Le.TEXTURE_CUBE_MAP, e.image.__webglTextureCube), Le.pixelStorei(Le.UNPACK_FLIP_Y_WEBGL, e.flipY);
            for (var i = e instanceof THREE.CompressedTexture, r = [], o = 0; o < 6; o++) ze.autoScaleCubemaps && !i ? r[o] = ue(e.image[o], yt) : r[o] = e.image[o];
            var a = r[0], n = le(a.width) && le(a.height), s = ve(e.format), h = ve(e.type);
            ce(Le.TEXTURE_CUBE_MAP, e, n);
            for (var o = 0; o < 6; o++) if (i) for (var l, c = r[o].mipmaps, u = 0, p = c.length; u < p; u++) l = c[u], e.format !== THREE.RGBAFormat ? Le.compressedTexImage2D(Le.TEXTURE_CUBE_MAP_POSITIVE_X + o, u, s, l.width, l.height, 0, l.data) : Le.texImage2D(Le.TEXTURE_CUBE_MAP_POSITIVE_X + o, u, s, l.width, l.height, 0, s, h, l.data); else Le.texImage2D(Le.TEXTURE_CUBE_MAP_POSITIVE_X + o, 0, s, s, h, r[o]);
            e.generateMipmaps && n && Le.generateMipmap(Le.TEXTURE_CUBE_MAP), e.needsUpdate = !1, e.onUpdate && e.onUpdate()
        } else Le.activeTexture(Le.TEXTURE0 + t), Le.bindTexture(Le.TEXTURE_CUBE_MAP, e.image.__webglTextureCube)
    }

    function fe(e, t) {
        Le.activeTexture(Le.TEXTURE0 + t), Le.bindTexture(Le.TEXTURE_CUBE_MAP, e.__webglTexture)
    }

    function Ee(e, t, i) {
        Le.bindFramebuffer(Le.FRAMEBUFFER, e), Le.framebufferTexture2D(Le.FRAMEBUFFER, Le.COLOR_ATTACHMENT0, i, t.__webglTexture, 0)
    }

    function de(e, t) {
        Le.bindRenderbuffer(Le.RENDERBUFFER, e), t.depthBuffer && !t.stencilBuffer ? (Le.renderbufferStorage(Le.RENDERBUFFER, Le.DEPTH_COMPONENT16, t.width, t.height), Le.framebufferRenderbuffer(Le.FRAMEBUFFER, Le.DEPTH_ATTACHMENT, Le.RENDERBUFFER, e)) : t.depthBuffer && t.stencilBuffer ? (Le.renderbufferStorage(Le.RENDERBUFFER, Le.DEPTH_STENCIL, t.width, t.height), Le.framebufferRenderbuffer(Le.FRAMEBUFFER, Le.DEPTH_STENCIL_ATTACHMENT, Le.RENDERBUFFER, e)) : Le.renderbufferStorage(Le.RENDERBUFFER, Le.RGBA4, t.width, t.height)
    }

    function me(e) {
        e instanceof THREE.WebGLRenderTargetCube ? (Le.bindTexture(Le.TEXTURE_CUBE_MAP, e.__webglTexture), Le.generateMipmap(Le.TEXTURE_CUBE_MAP), Le.bindTexture(Le.TEXTURE_CUBE_MAP, null)) : (Le.bindTexture(Le.TEXTURE_2D, e.__webglTexture), Le.generateMipmap(Le.TEXTURE_2D), Le.bindTexture(Le.TEXTURE_2D, null))
    }

    function ge(e) {
        return e === THREE.NearestFilter || e === THREE.NearestMipMapNearestFilter || e === THREE.NearestMipMapLinearFilter ? Le.NEAREST : Le.LINEAR
    }

    function ve(e) {
        if (e === THREE.RepeatWrapping) return Le.REPEAT;
        if (e === THREE.ClampToEdgeWrapping) return Le.CLAMP_TO_EDGE;
        if (e === THREE.MirroredRepeatWrapping) return Le.MIRRORED_REPEAT;
        if (e === THREE.NearestFilter) return Le.NEAREST;
        if (e === THREE.NearestMipMapNearestFilter) return Le.NEAREST_MIPMAP_NEAREST;
        if (e === THREE.NearestMipMapLinearFilter) return Le.NEAREST_MIPMAP_LINEAR;
        if (e === THREE.LinearFilter) return Le.LINEAR;
        if (e === THREE.LinearMipMapNearestFilter) return Le.LINEAR_MIPMAP_NEAREST;
        if (e === THREE.LinearMipMapLinearFilter) return Le.LINEAR_MIPMAP_LINEAR;
        if (e === THREE.UnsignedByteType) return Le.UNSIGNED_BYTE;
        if (e === THREE.UnsignedShort4444Type) return Le.UNSIGNED_SHORT_4_4_4_4;
        if (e === THREE.UnsignedShort5551Type) return Le.UNSIGNED_SHORT_5_5_5_1;
        if (e === THREE.UnsignedShort565Type) return Le.UNSIGNED_SHORT_5_6_5;
        if (e === THREE.ByteType) return Le.BYTE;
        if (e === THREE.ShortType) return Le.SHORT;
        if (e === THREE.UnsignedShortType) return Le.UNSIGNED_SHORT;
        if (e === THREE.IntType) return Le.INT;
        if (e === THREE.UnsignedIntType) return Le.UNSIGNED_INT;
        if (e === THREE.FloatType) return Le.FLOAT;
        if (e === THREE.AlphaFormat) return Le.ALPHA;
        if (e === THREE.RGBFormat) return Le.RGB;
        if (e === THREE.RGBAFormat) return Le.RGBA;
        if (e === THREE.LuminanceFormat) return Le.LUMINANCE;
        if (e === THREE.LuminanceAlphaFormat) return Le.LUMINANCE_ALPHA;
        if (e === THREE.AddEquation) return Le.FUNC_ADD;
        if (e === THREE.SubtractEquation) return Le.FUNC_SUBTRACT;
        if (e === THREE.ReverseSubtractEquation) return Le.FUNC_REVERSE_SUBTRACT;
        if (e === THREE.ZeroFactor) return Le.ZERO;
        if (e === THREE.OneFactor) return Le.ONE;
        if (e === THREE.SrcColorFactor) return Le.SRC_COLOR;
        if (e === THREE.OneMinusSrcColorFactor) return Le.ONE_MINUS_SRC_COLOR;
        if (e === THREE.SrcAlphaFactor) return Le.SRC_ALPHA;
        if (e === THREE.OneMinusSrcAlphaFactor) return Le.ONE_MINUS_SRC_ALPHA;
        if (e === THREE.DstAlphaFactor) return Le.DST_ALPHA;
        if (e === THREE.OneMinusDstAlphaFactor) return Le.ONE_MINUS_DST_ALPHA;
        if (e === THREE.DstColorFactor) return Le.DST_COLOR;
        if (e === THREE.OneMinusDstColorFactor) return Le.ONE_MINUS_DST_COLOR;
        if (e === THREE.SrcAlphaSaturateFactor) return Le.SRC_ALPHA_SATURATE;
        if (void 0 !== Ue) {
            if (e === THREE.RGB_S3TC_DXT1_Format) return Ue.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (e === THREE.RGBA_S3TC_DXT1_Format) return Ue.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (e === THREE.RGBA_S3TC_DXT3_Format) return Ue.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (e === THREE.RGBA_S3TC_DXT5_Format) return Ue.COMPRESSED_RGBA_S3TC_DXT5_EXT
        }
        return 0
    }

    function Te(e) {
        if (Ht && e && e.useVertexTexture) return 1024;
        var t = Le.getParameter(Le.MAX_VERTEX_UNIFORM_VECTORS), i = Math.floor((t - 20) / 4), r = i;
        return void 0 !== e && e instanceof THREE.SkinnedMesh && (r = Math.min(e.bones.length, r), e.bones.length), r
    }

    function ye(e) {
        for (var t = 0, i = 0, r = 0, o = 0, a = 0, n = e.length; a < n; a++) {
            var s = e[a];
            s.onlyShadow || (s instanceof THREE.DirectionalLight && t++, s instanceof THREE.PointLight && i++, s instanceof THREE.SpotLight && r++, s instanceof THREE.HemisphereLight && o++)
        }
        return {directional: t, point: i, spot: r, hemi: o}
    }

    function Re(e) {
        for (var t = 0, i = 0, r = e.length; i < r; i++) {
            var o = e[i];
            o.castShadow && (o instanceof THREE.SpotLight && t++, o instanceof THREE.DirectionalLight && !o.shadowCascade && t++)
        }
        return t
    }

    e = e || {};
    var xe = void 0 !== e.canvas ? e.canvas : document.createElement("canvas"),
        He = void 0 !== e.precision ? e.precision : "highp", _e = void 0 !== e.alpha && e.alpha,
        we = void 0 === e.premultipliedAlpha || e.premultipliedAlpha, be = void 0 !== e.antialias && e.antialias,
        Me = void 0 === e.stencil || e.stencil, Se = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer,
        Ae = new THREE.Color(0), Ce = 0;
    this.domElement = xe, this.context = null, this.devicePixelRatio = void 0 !== e.devicePixelRatio ? e.devicePixelRatio : void 0 !== self.devicePixelRatio ? self.devicePixelRatio : 1, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.autoUpdateObjects = !0, this.gammaInput = !1, this.gammaOutput = !1, this.physicallyBasedShading = !1, this.shadowMapEnabled = !1, this.shadowMapAutoUpdate = !0, this.shadowMapType = THREE.PCFShadowMap, this.shadowMapCullFace = THREE.CullFaceFront, this.shadowMapDebug = !1, this.shadowMapCascade = !1, this.maxMorphTargets = 8, this.maxMorphNormals = 4, this.autoScaleCubemaps = !0, this.renderPluginsPre = [], this.renderPluginsPost = [], this.info = {
        memory: {
            programs: 0,
            geometries: 0,
            textures: 0
        }, render: {calls: 0, vertices: 0, faces: 0, points: 0}
    };
    var Le, Pe, De, Fe, Ve, Ue, ze = this, Be = [], Ne = 0, Oe = null, Ie = null, ke = -1, Ge = null, We = null, je = 0,
        Xe = 0, qe = -1, Ye = -1, Ke = -1, Ze = -1, Qe = -1, Je = -1, $e = -1, et = -1, tt = null, it = null, rt = null,
        ot = null, at = 0, nt = 0, st = xe.width, ht = xe.height, lt = 0, ct = 0, ut = {}, pt = new THREE.Frustum,
        ft = new THREE.Matrix4, Et = new THREE.Matrix4, dt = new THREE.Vector3, mt = new THREE.Vector3, gt = !0, vt = {
            ambient: [0, 0, 0],
            directional: {length: 0, colors: new Array, positions: new Array},
            point: {length: 0, colors: new Array, positions: new Array, distances: new Array},
            spot: {
                length: 0,
                colors: new Array,
                positions: new Array,
                distances: new Array,
                directions: new Array,
                anglesCos: new Array,
                exponents: new Array
            },
            hemi: {length: 0, skyColors: new Array, groundColors: new Array, positions: new Array}
        };
    !function () {
        try {
            var e = {alpha: _e, premultipliedAlpha: we, antialias: be, stencil: Me, preserveDrawingBuffer: Se};
            if (null === (Le = xe.getContext("webgl", e) || xe.getContext("experimental-webgl", e))) throw"Error creating WebGL context."
        } catch (e) {
        }
        Pe = Le.getExtension("OES_texture_float"), De = Le.getExtension("OES_texture_float_linear"), Fe = Le.getExtension("OES_standard_derivatives"), Ve = Le.getExtension("EXT_texture_filter_anisotropic") || Le.getExtension("MOZ_EXT_texture_filter_anisotropic") || Le.getExtension("WEBKIT_EXT_texture_filter_anisotropic"), Ue = Le.getExtension("WEBGL_compressed_texture_s3tc") || Le.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || Le.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"), void 0 === Le.getShaderPrecisionFormat && (Le.getShaderPrecisionFormat = function () {
            return {rangeMin: 1, rangeMax: 1, precision: 1}
        })
    }(), function () {
        Le.clearColor(0, 0, 0, 1), Le.clearDepth(1), Le.clearStencil(0), Le.enable(Le.DEPTH_TEST), Le.depthFunc(Le.LEQUAL), Le.frontFace(Le.CCW), Le.cullFace(Le.BACK), Le.enable(Le.CULL_FACE), Le.enable(Le.BLEND), Le.blendEquation(Le.FUNC_ADD), Le.blendFunc(Le.SRC_ALPHA, Le.ONE_MINUS_SRC_ALPHA), Le.viewport(at, nt, st, ht), Le.clearColor(Ae.r, Ae.g, Ae.b, Ce)
    }(), this.context = Le;
    var Tt = (Le.getParameter(Le.MAX_TEXTURE_IMAGE_UNITS), Le.getParameter(Le.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),
        yt = (Le.getParameter(Le.MAX_TEXTURE_SIZE), Le.getParameter(Le.MAX_CUBE_MAP_TEXTURE_SIZE)),
        Rt = Ve ? Le.getParameter(Ve.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, xt = Tt > 0, Ht = xt && Pe,
        _t = (Ue && Le.getParameter(Le.COMPRESSED_TEXTURE_FORMATS), Le.getShaderPrecisionFormat(Le.VERTEX_SHADER, Le.HIGH_FLOAT)),
        wt = Le.getShaderPrecisionFormat(Le.VERTEX_SHADER, Le.MEDIUM_FLOAT),
        bt = (Le.getShaderPrecisionFormat(Le.VERTEX_SHADER, Le.LOW_FLOAT), Le.getShaderPrecisionFormat(Le.FRAGMENT_SHADER, Le.HIGH_FLOAT)),
        Mt = Le.getShaderPrecisionFormat(Le.FRAGMENT_SHADER, Le.MEDIUM_FLOAT),
        St = (Le.getShaderPrecisionFormat(Le.FRAGMENT_SHADER, Le.LOW_FLOAT), Le.getShaderPrecisionFormat(Le.VERTEX_SHADER, Le.HIGH_INT), Le.getShaderPrecisionFormat(Le.VERTEX_SHADER, Le.MEDIUM_INT), Le.getShaderPrecisionFormat(Le.VERTEX_SHADER, Le.LOW_INT), Le.getShaderPrecisionFormat(Le.FRAGMENT_SHADER, Le.HIGH_INT), Le.getShaderPrecisionFormat(Le.FRAGMENT_SHADER, Le.MEDIUM_INT), Le.getShaderPrecisionFormat(Le.FRAGMENT_SHADER, Le.LOW_INT), _t.precision > 0 && bt.precision > 0),
        At = wt.precision > 0 && Mt.precision > 0;
    "highp" !== He || St || (He = At ? "mediump" : "lowp"), "mediump" !== He || At || (He = "lowp"), this.getContext = function () {
        return Le
    }, this.supportsVertexTextures = function () {
        return xt
    }, this.supportsFloatTextures = function () {
        return Pe
    }, this.supportsStandardDerivatives = function () {
        return Fe
    }, this.supportsCompressedTextureS3TC = function () {
        return Ue
    }, this.getMaxAnisotropy = function () {
        return Rt
    }, this.getPrecision = function () {
        return He
    }, this.setSize = function (e, t, i) {
        xe.width = e * this.devicePixelRatio, xe.height = t * this.devicePixelRatio, 1 !== this.devicePixelRatio && i !== !1 && (xe.style.width = e + "px", xe.style.height = t + "px"), this.setViewport(0, 0, xe.width, xe.height)
    }, this.setViewport = function (e, t, i, r) {
        at = void 0 !== e ? e : 0, nt = void 0 !== t ? t : 0, st = void 0 !== i ? i : xe.width, ht = void 0 !== r ? r : xe.height, Le.viewport(at, nt, st, ht)
    }, this.setScissor = function (e, t, i, r) {
        Le.scissor(e, t, i, r)
    }, this.enableScissorTest = function (e) {
        e ? Le.enable(Le.SCISSOR_TEST) : Le.disable(Le.SCISSOR_TEST)
    }, this.setClearColor = function (e, t) {
        Ae.set(e), Ce = void 0 !== t ? t : 1, Le.clearColor(Ae.r, Ae.g, Ae.b, Ce)
    }, this.setClearColorHex = function (e, t) {
        this.setClearColor(e, t)
    }, this.getClearColor = function () {
        return Ae
    }, this.getClearAlpha = function () {
        return Ce
    }, this.clear = function (e, t, i) {
        var r = 0;
        (void 0 === e || e) && (r |= Le.COLOR_BUFFER_BIT), (void 0 === t || t) && (r |= Le.DEPTH_BUFFER_BIT), (void 0 === i || i) && (r |= Le.STENCIL_BUFFER_BIT), Le.clear(r)
    }, this.clearTarget = function (e, t, i, r) {
        this.setRenderTarget(e), this.clear(t, i, r)
    }, this.addPostPlugin = function (e) {
        e.init(this), this.renderPluginsPost.push(e)
    }, this.addPrePlugin = function (e) {
        e.init(this), this.renderPluginsPre.push(e)
    }, this.updateShadowMap = function (e, t) {
        Oe = null, Ke = -1, $e = -1, et = -1, Ge = -1, ke = -1, gt = !0, qe = -1, Ye = -1, this.shadowMapPlugin.update(e, t)
    };
    var Ct = function (e) {
        var t = e.target;
        t.removeEventListener("dispose", Ct), Vt(t)
    }, Lt = function (e) {
        var t = e.target;
        t.removeEventListener("dispose", Lt), Ut(t), ze.info.memory.textures--
    }, Pt = function (e) {
        var t = e.target;
        t.removeEventListener("dispose", Pt), zt(t), ze.info.memory.textures--
    }, Dt = function (e) {
        var t = e.target;
        t.removeEventListener("dispose", Dt), Bt(t)
    }, Ft = function (e) {
        if (void 0 !== e.__webglVertexBuffer && Le.deleteBuffer(e.__webglVertexBuffer), void 0 !== e.__webglNormalBuffer && Le.deleteBuffer(e.__webglNormalBuffer), void 0 !== e.__webglTangentBuffer && Le.deleteBuffer(e.__webglTangentBuffer), void 0 !== e.__webglColorBuffer && Le.deleteBuffer(e.__webglColorBuffer), void 0 !== e.__webglUVBuffer && Le.deleteBuffer(e.__webglUVBuffer), void 0 !== e.__webglUV2Buffer && Le.deleteBuffer(e.__webglUV2Buffer), void 0 !== e.__webglSkinIndicesBuffer && Le.deleteBuffer(e.__webglSkinIndicesBuffer), void 0 !== e.__webglSkinWeightsBuffer && Le.deleteBuffer(e.__webglSkinWeightsBuffer), void 0 !== e.__webglFaceBuffer && Le.deleteBuffer(e.__webglFaceBuffer), void 0 !== e.__webglLineBuffer && Le.deleteBuffer(e.__webglLineBuffer), void 0 !== e.__webglLineDistanceBuffer && Le.deleteBuffer(e.__webglLineDistanceBuffer), void 0 !== e.__webglCustomAttributesList) for (var t in e.__webglCustomAttributesList) Le.deleteBuffer(e.__webglCustomAttributesList[t].buffer);
        ze.info.memory.geometries--
    }, Vt = function (e) {
        if (e.__webglInit = void 0, e instanceof THREE.BufferGeometry) {
            var t = e.attributes;
            for (var i in t) void 0 !== t[i].buffer && Le.deleteBuffer(t[i].buffer);
            ze.info.memory.geometries--
        } else if (void 0 !== e.geometryGroups) for (var r in e.geometryGroups) {
            var o = e.geometryGroups[r];
            if (void 0 !== o.numMorphTargets) for (var a = 0, n = o.numMorphTargets; a < n; a++) Le.deleteBuffer(o.__webglMorphTargetsBuffers[a]);
            if (void 0 !== o.numMorphNormals) for (var a = 0, n = o.numMorphNormals; a < n; a++) Le.deleteBuffer(o.__webglMorphNormalsBuffers[a]);
            Ft(o)
        } else Ft(e)
    }, Ut = function (e) {
        if (e.image && e.image.__webglTextureCube) Le.deleteTexture(e.image.__webglTextureCube); else {
            if (!e.__webglInit) return;
            e.__webglInit = !1, Le.deleteTexture(e.__webglTexture)
        }
    }, zt = function (e) {
        if (e && e.__webglTexture) if (Le.deleteTexture(e.__webglTexture), e instanceof THREE.WebGLRenderTargetCube) for (var t = 0; t < 6; t++) Le.deleteFramebuffer(e.__webglFramebuffer[t]), Le.deleteRenderbuffer(e.__webglRenderbuffer[t]); else Le.deleteFramebuffer(e.__webglFramebuffer), Le.deleteRenderbuffer(e.__webglRenderbuffer)
    }, Bt = function (e) {
        var t = e.program;
        if (void 0 !== t) {
            e.program = void 0;
            var i, r, o, a = !1;
            for (i = 0, r = Be.length; i < r; i++) if (o = Be[i], o.program === t) {
                o.usedTimes--, 0 === o.usedTimes && (a = !0);
                break
            }
            if (a === !0) {
                var n = [];
                for (i = 0, r = Be.length; i < r; i++) o = Be[i], o.program !== t && n.push(o);
                Be = n, Le.deleteProgram(t), ze.info.memory.programs--
            }
        }
    };
    this.renderBufferImmediate = function (e, t, i) {
        if (e.hasPositions && !e.__webglVertexBuffer && (e.__webglVertexBuffer = Le.createBuffer()), e.hasNormals && !e.__webglNormalBuffer && (e.__webglNormalBuffer = Le.createBuffer()), e.hasUvs && !e.__webglUvBuffer && (e.__webglUvBuffer = Le.createBuffer()), e.hasColors && !e.__webglColorBuffer && (e.__webglColorBuffer = Le.createBuffer()), e.hasPositions && (Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglVertexBuffer), Le.bufferData(Le.ARRAY_BUFFER, e.positionArray, Le.DYNAMIC_DRAW), Le.enableVertexAttribArray(t.attributes.position), Le.vertexAttribPointer(t.attributes.position, 3, Le.FLOAT, !1, 0, 0)), e.hasNormals) {
            if (Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglNormalBuffer), i.shading === THREE.FlatShading) {
                var r, o, a, n, s, h, l, c, u, p, f, E, d, m, g = 3 * e.count;
                for (m = 0; m < g; m += 9) d = e.normalArray, n = d[m], l = d[m + 1], p = d[m + 2], s = d[m + 3], c = d[m + 4], f = d[m + 5], h = d[m + 6], u = d[m + 7], E = d[m + 8], r = (n + s + h) / 3, o = (l + c + u) / 3, a = (p + f + E) / 3, d[m] = r, d[m + 1] = o, d[m + 2] = a, d[m + 3] = r, d[m + 4] = o, d[m + 5] = a, d[m + 6] = r, d[m + 7] = o, d[m + 8] = a
            }
            Le.bufferData(Le.ARRAY_BUFFER, e.normalArray, Le.DYNAMIC_DRAW), Le.enableVertexAttribArray(t.attributes.normal), Le.vertexAttribPointer(t.attributes.normal, 3, Le.FLOAT, !1, 0, 0)
        }
        e.hasUvs && i.map && (Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglUvBuffer), Le.bufferData(Le.ARRAY_BUFFER, e.uvArray, Le.DYNAMIC_DRAW), Le.enableVertexAttribArray(t.attributes.uv), Le.vertexAttribPointer(t.attributes.uv, 2, Le.FLOAT, !1, 0, 0)), e.hasColors && i.vertexColors !== THREE.NoColors && (Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglColorBuffer), Le.bufferData(Le.ARRAY_BUFFER, e.colorArray, Le.DYNAMIC_DRAW), Le.enableVertexAttribArray(t.attributes.color), Le.vertexAttribPointer(t.attributes.color, 3, Le.FLOAT, !1, 0, 0)), Le.drawArrays(Le.TRIANGLES, 0, e.count), e.count = 0
    }, this.renderBufferDirect = function (e, t, i, r, o, a) {
        if (r.visible !== !1) {
            var n, s, h, l, c = N(e, t, i, r, a), u = c.attributes, p = o.attributes, f = !1, E = r.wireframe ? 1 : 0,
                d = 16777215 * o.id + 2 * c.id + E;
            if (d !== Ge && (Ge = d, f = !0), f && T(), a instanceof THREE.Mesh) {
                var m = p.index;
                if (m) {
                    var g = o.offsets;
                    g.length > 1 && (f = !0);
                    for (var y = 0, R = g.length; y < R; y++) {
                        var x = g[y].index;
                        if (f) {
                            for (s in u) h = u[s], n = p[s], h >= 0 && (n ? (l = n.itemSize, Le.bindBuffer(Le.ARRAY_BUFFER, n.buffer), v(h), Le.vertexAttribPointer(h, l, Le.FLOAT, !1, 0, x * l * 4)) : r.defaultAttributeValues && (2 === r.defaultAttributeValues[s].length ? Le.vertexAttrib2fv(h, r.defaultAttributeValues[s]) : 3 === r.defaultAttributeValues[s].length && Le.vertexAttrib3fv(h, r.defaultAttributeValues[s])));
                            Le.bindBuffer(Le.ELEMENT_ARRAY_BUFFER, m.buffer)
                        }
                        Le.drawElements(Le.TRIANGLES, g[y].count, Le.UNSIGNED_SHORT, 2 * g[y].start), ze.info.render.calls++, ze.info.render.vertices += g[y].count, ze.info.render.faces += g[y].count / 3
                    }
                } else {
                    if (f) for (s in u) "index" !== s && (h = u[s], n = p[s], h >= 0 && (n ? (l = n.itemSize, Le.bindBuffer(Le.ARRAY_BUFFER, n.buffer), v(h), Le.vertexAttribPointer(h, l, Le.FLOAT, !1, 0, 0)) : r.defaultAttributeValues && r.defaultAttributeValues[s] && (2 === r.defaultAttributeValues[s].length ? Le.vertexAttrib2fv(h, r.defaultAttributeValues[s]) : 3 === r.defaultAttributeValues[s].length && Le.vertexAttrib3fv(h, r.defaultAttributeValues[s]))));
                    var H = o.attributes.position;
                    Le.drawArrays(Le.TRIANGLES, 0, H.numItems / 3), ze.info.render.calls++, ze.info.render.vertices += H.numItems / 3, ze.info.render.faces += H.numItems / 3 / 3
                }
            } else if (a instanceof THREE.ParticleSystem) {
                if (f) {
                    for (s in u) h = u[s], n = p[s], h >= 0 && (n ? (l = n.itemSize, Le.bindBuffer(Le.ARRAY_BUFFER, n.buffer), v(h), Le.vertexAttribPointer(h, l, Le.FLOAT, !1, 0, 0)) : r.defaultAttributeValues && r.defaultAttributeValues[s] && (2 === r.defaultAttributeValues[s].length ? Le.vertexAttrib2fv(h, r.defaultAttributeValues[s]) : 3 === r.defaultAttributeValues[s].length && Le.vertexAttrib3fv(h, r.defaultAttributeValues[s])));
                    var H = p.position;
                    Le.drawArrays(Le.POINTS, 0, H.numItems / 3), ze.info.render.calls++, ze.info.render.points += H.numItems / 3
                }
            } else if (a instanceof THREE.Line && f) {
                for (s in u) h = u[s], n = p[s], h >= 0 && (n ? (l = n.itemSize, Le.bindBuffer(Le.ARRAY_BUFFER, n.buffer), v(h), Le.vertexAttribPointer(h, l, Le.FLOAT, !1, 0, 0)) : r.defaultAttributeValues && r.defaultAttributeValues[s] && (2 === r.defaultAttributeValues[s].length ? Le.vertexAttrib2fv(h, r.defaultAttributeValues[s]) : 3 === r.defaultAttributeValues[s].length && Le.vertexAttrib3fv(h, r.defaultAttributeValues[s])));
                var _ = a.type === THREE.LineStrip ? Le.LINE_STRIP : Le.LINES;
                ie(r.linewidth);
                var H = p.position;
                Le.drawArrays(_, 0, H.numItems / 3), ze.info.render.calls++, ze.info.render.points += H.numItems
            }
        }
    }, this.renderBuffer = function (e, t, i, r, o, a) {
        if (r.visible !== !1) {
            var n, s, h, l = N(e, t, i, r, a), c = l.attributes, u = !1, p = r.wireframe ? 1 : 0,
                f = 16777215 * o.id + 2 * l.id + p;
            if (f !== Ge && (Ge = f, u = !0), u && T(), !r.morphTargets && c.position >= 0 ? u && (Le.bindBuffer(Le.ARRAY_BUFFER, o.__webglVertexBuffer), v(c.position), Le.vertexAttribPointer(c.position, 3, Le.FLOAT, !1, 0, 0)) : a.morphTargetBase && y(r, o, a), u) {
                if (o.__webglCustomAttributesList) for (s = 0, h = o.__webglCustomAttributesList.length; s < h; s++) n = o.__webglCustomAttributesList[s], c[n.buffer.belongsToAttribute] >= 0 && (Le.bindBuffer(Le.ARRAY_BUFFER, n.buffer), v(c[n.buffer.belongsToAttribute]), Le.vertexAttribPointer(c[n.buffer.belongsToAttribute], n.size, Le.FLOAT, !1, 0, 0));
                c.color >= 0 && (a.geometry.colors.length > 0 || a.geometry.faces.length > 0 ? (Le.bindBuffer(Le.ARRAY_BUFFER, o.__webglColorBuffer), v(c.color), Le.vertexAttribPointer(c.color, 3, Le.FLOAT, !1, 0, 0)) : r.defaultAttributeValues && Le.vertexAttrib3fv(c.color, r.defaultAttributeValues.color)), c.normal >= 0 && (Le.bindBuffer(Le.ARRAY_BUFFER, o.__webglNormalBuffer), v(c.normal), Le.vertexAttribPointer(c.normal, 3, Le.FLOAT, !1, 0, 0)), c.tangent >= 0 && (Le.bindBuffer(Le.ARRAY_BUFFER, o.__webglTangentBuffer), v(c.tangent), Le.vertexAttribPointer(c.tangent, 4, Le.FLOAT, !1, 0, 0)), c.uv >= 0 && (a.geometry.faceVertexUvs[0] ? (Le.bindBuffer(Le.ARRAY_BUFFER, o.__webglUVBuffer), v(c.uv), Le.vertexAttribPointer(c.uv, 2, Le.FLOAT, !1, 0, 0)) : r.defaultAttributeValues && Le.vertexAttrib2fv(c.uv, r.defaultAttributeValues.uv)), c.uv2 >= 0 && (a.geometry.faceVertexUvs[1] ? (Le.bindBuffer(Le.ARRAY_BUFFER, o.__webglUV2Buffer), v(c.uv2), Le.vertexAttribPointer(c.uv2, 2, Le.FLOAT, !1, 0, 0)) : r.defaultAttributeValues && Le.vertexAttrib2fv(c.uv2, r.defaultAttributeValues.uv2)), r.skinning && c.skinIndex >= 0 && c.skinWeight >= 0 && (Le.bindBuffer(Le.ARRAY_BUFFER, o.__webglSkinIndicesBuffer), v(c.skinIndex), Le.vertexAttribPointer(c.skinIndex, 4, Le.FLOAT, !1, 0, 0), Le.bindBuffer(Le.ARRAY_BUFFER, o.__webglSkinWeightsBuffer), v(c.skinWeight), Le.vertexAttribPointer(c.skinWeight, 4, Le.FLOAT, !1, 0, 0)), c.lineDistance >= 0 && (Le.bindBuffer(Le.ARRAY_BUFFER, o.__webglLineDistanceBuffer), v(c.lineDistance), Le.vertexAttribPointer(c.lineDistance, 1, Le.FLOAT, !1, 0, 0))
            }
            if (a instanceof THREE.Mesh) r.wireframe ? (ie(r.wireframeLinewidth), u && Le.bindBuffer(Le.ELEMENT_ARRAY_BUFFER, o.__webglLineBuffer), Le.drawElements(Le.LINES, o.__webglLineCount, Le.UNSIGNED_SHORT, 0)) : (u && Le.bindBuffer(Le.ELEMENT_ARRAY_BUFFER, o.__webglFaceBuffer), Le.drawElements(Le.TRIANGLES, o.__webglFaceCount, Le.UNSIGNED_SHORT, 0)), ze.info.render.calls++, ze.info.render.vertices += o.__webglFaceCount, ze.info.render.faces += o.__webglFaceCount / 3; else if (a instanceof THREE.Line) {
                var E = a.type === THREE.LineStrip ? Le.LINE_STRIP : Le.LINES;
                ie(r.linewidth), Le.drawArrays(E, 0, o.__webglLineCount), ze.info.render.calls++
            } else a instanceof THREE.ParticleSystem && (Le.drawArrays(Le.POINTS, 0, o.__webglParticleCount), ze.info.render.calls++, ze.info.render.points += o.__webglParticleCount)
        }
    }, this.render = function (e, t, i, r) {
        if (t instanceof THREE.Camera != !1) {
            var o, a, n, s, h, l = e.__lights, c = e.fog;
            for (ke = -1, gt = !0, e.autoUpdate === !0 && e.updateMatrixWorld(), void 0 === t.parent && t.updateMatrixWorld(), t.matrixWorldInverse.getInverse(t.matrixWorld), ft.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), pt.setFromMatrix(ft), this.autoUpdateObjects && this.initWebGLObjects(e), H(this.renderPluginsPre, e, t), ze.info.render.calls = 0, ze.info.render.vertices = 0, ze.info.render.faces = 0, ze.info.render.points = 0, this.setRenderTarget(i), (this.autoClear || r) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil), h = e.__webglObjects, o = 0, a = h.length; o < a; o++) n = h[o], s = n.object, n.id = o, n.render = !1, s.visible && ((s instanceof THREE.Mesh || s instanceof THREE.ParticleSystem) && s.frustumCulled && !pt.intersectsObject(s) || (J(s, t), M(n), n.render = !0, this.sortObjects === !0 && (null !== s.renderDepth ? n.z = s.renderDepth : (dt.getPositionFromMatrix(s.matrixWorld), dt.applyProjection(ft), n.z = dt.z))));
            for (this.sortObjects && h.sort(R), h = e.__webglObjectsImmediate, o = 0, a = h.length; o < a; o++) n = h[o], s = n.object, s.visible && (J(s, t), b(n));
            if (e.overrideMaterial) {
                var u = e.overrideMaterial;
                this.setBlending(u.blending, u.blendEquation, u.blendSrc, u.blendDst), this.setDepthTest(u.depthTest), this.setDepthWrite(u.depthWrite), re(u.polygonOffset, u.polygonOffsetFactor, u.polygonOffsetUnits), _(e.__webglObjects, !1, "", t, l, c, !0, u), w(e.__webglObjectsImmediate, "", t, l, c, !1, u)
            } else {
                var u = null;
                this.setBlending(THREE.NoBlending), _(e.__webglObjects, !0, "opaque", t, l, c, !1, u), w(e.__webglObjectsImmediate, "opaque", t, l, c, !1, u), _(e.__webglObjects, !1, "transparent", t, l, c, !0, u), w(e.__webglObjectsImmediate, "transparent", t, l, c, !0, u)
            }
            H(this.renderPluginsPost, e, t), i && i.generateMipmaps && i.minFilter !== THREE.NearestFilter && i.minFilter !== THREE.LinearFilter && me(i), this.setDepthTest(!0), this.setDepthWrite(!0)
        }
    }, this.renderImmediateObject = function (e, t, i, r, o) {
        var a = N(e, t, i, r, o);
        Ge = -1, ze.setMaterialFaces(r), o.immediateRenderCallback ? o.immediateRenderCallback(a, Le, pt) : o.render(function (e) {
            ze.renderBufferImmediate(e, a, r)
        })
    }, this.initWebGLObjects = function (e) {
        for (e.__webglObjects || (e.__webglObjects = [], e.__webglObjectsImmediate = [], e.__webglSprites = [], e.__webglFlares = []); e.__objectsAdded.length;) A(e.__objectsAdded[0], e), e.__objectsAdded.splice(0, 1);
        for (; e.__objectsRemoved.length;) V(e.__objectsRemoved[0], e), e.__objectsRemoved.splice(0, 1);
        for (var t = 0, i = e.__webglObjects.length; t < i; t++) {
            var r = e.__webglObjects[t].object;
            void 0 === r.__webglInit && (void 0 !== r.__webglActive && V(r, e), A(r, e)), P(r)
        }
    }, this.initMaterial = function (e, t, i, r) {
        e.addEventListener("dispose", Dt);
        var o, a, n, s, h, l, c;
        e instanceof THREE.MeshDepthMaterial ? c = "depth" : e instanceof THREE.MeshNormalMaterial ? c = "normal" : e instanceof THREE.MeshBasicMaterial ? c = "basic" : e instanceof THREE.MeshLambertMaterial ? c = "lambert" : e instanceof THREE.MeshPhongMaterial ? c = "phong" : e instanceof THREE.LineBasicMaterial ? c = "basic" : e instanceof THREE.LineDashedMaterial ? c = "dashed" : e instanceof THREE.ParticleSystemMaterial && (c = "particle_basic"), c && B(e, THREE.ShaderLib[c]), s = ye(t), l = Re(t), h = Te(r), n = {
            map: !!e.map,
            envMap: !!e.envMap,
            lightMap: !!e.lightMap,
            bumpMap: !!e.bumpMap,
            normalMap: !!e.normalMap,
            specularMap: !!e.specularMap,
            vertexColors: e.vertexColors,
            fog: i,
            useFog: e.fog,
            fogExp: i instanceof THREE.FogExp2,
            sizeAttenuation: e.sizeAttenuation,
            skinning: e.skinning,
            maxBones: h,
            useVertexTexture: Ht && r && r.useVertexTexture,
            morphTargets: e.morphTargets,
            morphNormals: e.morphNormals,
            maxMorphTargets: this.maxMorphTargets,
            maxMorphNormals: this.maxMorphNormals,
            maxDirLights: s.directional,
            maxPointLights: s.point,
            maxSpotLights: s.spot,
            maxHemiLights: s.hemi,
            maxShadows: l,
            shadowMapEnabled: this.shadowMapEnabled && r.receiveShadow,
            shadowMapType: this.shadowMapType,
            shadowMapDebug: this.shadowMapDebug,
            shadowMapCascade: this.shadowMapCascade,
            alphaTest: e.alphaTest,
            metal: e.metal,
            perPixel: e.perPixel,
            wrapAround: e.wrapAround,
            doubleSided: e.side === THREE.DoubleSide,
            flipSided: e.side === THREE.BackSide
        }, e.program = ae(c, e.fragmentShader, e.vertexShader, e.uniforms, e.attributes, e.defines, n, e.index0AttributeName);
        var u = e.program.attributes;
        if (e.morphTargets) {
            e.numSupportedMorphTargets = 0;
            var p, f = "morphTarget";
            for (a = 0; a < this.maxMorphTargets; a++) p = f + a, u[p] >= 0 && e.numSupportedMorphTargets++
        }
        if (e.morphNormals) {
            e.numSupportedMorphNormals = 0;
            var p, f = "morphNormal";
            for (a = 0; a < this.maxMorphNormals; a++) p = f + a, u[p] >= 0 && e.numSupportedMorphNormals++
        }
        e.uniformsList = [];
        for (o in e.uniforms) e.uniformsList.push([e.uniforms[o], o])
    }, this.setFaceCulling = function (e, t) {
        e === THREE.CullFaceNone ? Le.disable(Le.CULL_FACE) : (t === THREE.FrontFaceDirectionCW ? Le.frontFace(Le.CW) : Le.frontFace(Le.CCW), e === THREE.CullFaceBack ? Le.cullFace(Le.BACK) : e === THREE.CullFaceFront ? Le.cullFace(Le.FRONT) : Le.cullFace(Le.FRONT_AND_BACK), Le.enable(Le.CULL_FACE))
    }, this.setMaterialFaces = function (e) {
        var t = e.side === THREE.DoubleSide, i = e.side === THREE.BackSide;
        qe !== t && (t ? Le.disable(Le.CULL_FACE) : Le.enable(Le.CULL_FACE), qe = t), Ye !== i && (i ? Le.frontFace(Le.CW) : Le.frontFace(Le.CCW), Ye = i)
    }, this.setDepthTest = function (e) {
        $e !== e && (e ? Le.enable(Le.DEPTH_TEST) : Le.disable(Le.DEPTH_TEST), $e = e)
    }, this.setDepthWrite = function (e) {
        et !== e && (Le.depthMask(e), et = e)
    }, this.setBlending = function (e, t, i, r) {
        e !== Ke && (e === THREE.NoBlending ? Le.disable(Le.BLEND) : e === THREE.AdditiveBlending ? (Le.enable(Le.BLEND), Le.blendEquation(Le.FUNC_ADD), Le.blendFunc(Le.SRC_ALPHA, Le.ONE)) : e === THREE.SubtractiveBlending ? (Le.enable(Le.BLEND), Le.blendEquation(Le.FUNC_ADD), Le.blendFunc(Le.ZERO, Le.ONE_MINUS_SRC_COLOR)) : e === THREE.MultiplyBlending ? (Le.enable(Le.BLEND), Le.blendEquation(Le.FUNC_ADD), Le.blendFunc(Le.ZERO, Le.SRC_COLOR)) : e === THREE.CustomBlending ? Le.enable(Le.BLEND) : (Le.enable(Le.BLEND), Le.blendEquationSeparate(Le.FUNC_ADD, Le.FUNC_ADD), Le.blendFuncSeparate(Le.SRC_ALPHA, Le.ONE_MINUS_SRC_ALPHA, Le.ONE, Le.ONE_MINUS_SRC_ALPHA)), Ke = e), e === THREE.CustomBlending ? (t !== Ze && (Le.blendEquation(ve(t)), Ze = t), i === Qe && r === Je || (Le.blendFunc(ve(i), ve(r)), Qe = i, Je = r)) : (Ze = null, Qe = null, Je = null)
    }, this.setTexture = function (e, t) {
        if (e.needsUpdate) {
            e.__webglInit || (e.__webglInit = !0, e.addEventListener("dispose", Lt), e.__webglTexture = Le.createTexture(), ze.info.memory.textures++), Le.activeTexture(Le.TEXTURE0 + t), Le.bindTexture(Le.TEXTURE_2D, e.__webglTexture), Le.pixelStorei(Le.UNPACK_FLIP_Y_WEBGL, e.flipY), Le.pixelStorei(Le.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha), Le.pixelStorei(Le.UNPACK_ALIGNMENT, e.unpackAlignment);
            var i = e.image, r = le(i.width) && le(i.height), o = ve(e.format), a = ve(e.type);
            ce(Le.TEXTURE_2D, e, r);
            var n, s = e.mipmaps;
            if (e instanceof THREE.DataTexture) if (s.length > 0 && r) {
                for (var h = 0, l = s.length; h < l; h++) n = s[h], Le.texImage2D(Le.TEXTURE_2D, h, o, n.width, n.height, 0, o, a, n.data);
                e.generateMipmaps = !1
            } else Le.texImage2D(Le.TEXTURE_2D, 0, o, i.width, i.height, 0, o, a, i.data); else if (e instanceof THREE.CompressedTexture) for (var h = 0, l = s.length; h < l; h++) n = s[h], e.format !== THREE.RGBAFormat ? Le.compressedTexImage2D(Le.TEXTURE_2D, h, o, n.width, n.height, 0, n.data) : Le.texImage2D(Le.TEXTURE_2D, h, o, n.width, n.height, 0, o, a, n.data); else if (s.length > 0 && r) {
                for (var h = 0, l = s.length; h < l; h++) n = s[h], Le.texImage2D(Le.TEXTURE_2D, h, o, o, a, n);
                e.generateMipmaps = !1
            } else Le.texImage2D(Le.TEXTURE_2D, 0, o, o, a, e.image);
            e.generateMipmaps && r && Le.generateMipmap(Le.TEXTURE_2D), e.needsUpdate = !1, e.onUpdate && e.onUpdate()
        } else Le.activeTexture(Le.TEXTURE0 + t), Le.bindTexture(Le.TEXTURE_2D, e.__webglTexture)
    }, this.setRenderTarget = function (e) {
        var t = e instanceof THREE.WebGLRenderTargetCube;
        if (e && !e.__webglFramebuffer) {
            void 0 === e.depthBuffer && (e.depthBuffer = !0), void 0 === e.stencilBuffer && (e.stencilBuffer = !0), e.addEventListener("dispose", Pt), e.__webglTexture = Le.createTexture(), ze.info.memory.textures++;
            var i = le(e.width) && le(e.height), r = ve(e.format), o = ve(e.type);
            if (t) {
                e.__webglFramebuffer = [], e.__webglRenderbuffer = [], Le.bindTexture(Le.TEXTURE_CUBE_MAP, e.__webglTexture), ce(Le.TEXTURE_CUBE_MAP, e, i);
                for (var a = 0; a < 6; a++) e.__webglFramebuffer[a] = Le.createFramebuffer(), e.__webglRenderbuffer[a] = Le.createRenderbuffer(), Le.texImage2D(Le.TEXTURE_CUBE_MAP_POSITIVE_X + a, 0, r, e.width, e.height, 0, r, o, null), Ee(e.__webglFramebuffer[a], e, Le.TEXTURE_CUBE_MAP_POSITIVE_X + a), de(e.__webglRenderbuffer[a], e);
                i && Le.generateMipmap(Le.TEXTURE_CUBE_MAP)
            } else e.__webglFramebuffer = Le.createFramebuffer(), e.shareDepthFrom ? e.__webglRenderbuffer = e.shareDepthFrom.__webglRenderbuffer : e.__webglRenderbuffer = Le.createRenderbuffer(), Le.bindTexture(Le.TEXTURE_2D, e.__webglTexture), ce(Le.TEXTURE_2D, e, i), Le.texImage2D(Le.TEXTURE_2D, 0, r, e.width, e.height, 0, r, o, null), Ee(e.__webglFramebuffer, e, Le.TEXTURE_2D), e.shareDepthFrom ? e.depthBuffer && !e.stencilBuffer ? Le.framebufferRenderbuffer(Le.FRAMEBUFFER, Le.DEPTH_ATTACHMENT, Le.RENDERBUFFER, e.__webglRenderbuffer) : e.depthBuffer && e.stencilBuffer && Le.framebufferRenderbuffer(Le.FRAMEBUFFER, Le.DEPTH_STENCIL_ATTACHMENT, Le.RENDERBUFFER, e.__webglRenderbuffer) : de(e.__webglRenderbuffer, e), i && Le.generateMipmap(Le.TEXTURE_2D);
            t ? Le.bindTexture(Le.TEXTURE_CUBE_MAP, null) : Le.bindTexture(Le.TEXTURE_2D, null), Le.bindRenderbuffer(Le.RENDERBUFFER, null), Le.bindFramebuffer(Le.FRAMEBUFFER, null)
        }
        var n, s, h, l, c;
        e ? (n = t ? e.__webglFramebuffer[e.activeCubeFace] : e.__webglFramebuffer, s = e.width, h = e.height, l = 0, c = 0) : (n = null, s = st, h = ht, l = at, c = nt), n !== Ie && (Le.bindFramebuffer(Le.FRAMEBUFFER, n), Le.viewport(l, c, s, h), Ie = n), lt = s, ct = h
    }, this.shadowMapPlugin = new THREE.ShadowMapPlugin, this.addPrePlugin(this.shadowMapPlugin), this.addPostPlugin(new THREE.SpritePlugin), this.addPostPlugin(new THREE.LensFlarePlugin)
},THREE.WebGLRenderTarget = function (e, t, i) {
    this.width = e, this.height = t, i = i || {}, this.wrapS = void 0 !== i.wrapS ? i.wrapS : THREE.ClampToEdgeWrapping, this.wrapT = void 0 !== i.wrapT ? i.wrapT : THREE.ClampToEdgeWrapping, this.magFilter = void 0 !== i.magFilter ? i.magFilter : THREE.LinearFilter, this.minFilter = void 0 !== i.minFilter ? i.minFilter : THREE.LinearMipMapLinearFilter, this.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1, this.offset = new THREE.Vector2(0, 0), this.repeat = new THREE.Vector2(1, 1), this.format = void 0 !== i.format ? i.format : THREE.RGBAFormat, this.type = void 0 !== i.type ? i.type : THREE.UnsignedByteType, this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer, this.stencilBuffer = void 0 === i.stencilBuffer || i.stencilBuffer, this.generateMipmaps = !0, this.shareDepthFrom = null
},THREE.WebGLRenderTarget.prototype = {
    constructor: THREE.WebGLRenderTarget, clone: function () {
        var e = new THREE.WebGLRenderTarget(this.width, this.height);
        return e.wrapS = this.wrapS, e.wrapT = this.wrapT, e.magFilter = this.magFilter, e.minFilter = this.minFilter, e.anisotropy = this.anisotropy, e.offset.copy(this.offset), e.repeat.copy(this.repeat), e.format = this.format, e.type = this.type, e.depthBuffer = this.depthBuffer, e.stencilBuffer = this.stencilBuffer, e.generateMipmaps = this.generateMipmaps, e.shareDepthFrom = this.shareDepthFrom, e
    }, dispose: function () {
        this.dispatchEvent({type: "dispose"})
    }
},THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype),THREE.WebGLRenderTargetCube = function (e, t, i) {
    THREE.WebGLRenderTarget.call(this, e, t, i), this.activeCubeFace = 0
},THREE.WebGLRenderTargetCube.prototype = Object.create(THREE.WebGLRenderTarget.prototype),THREE.RenderableVertex = function () {
    this.positionWorld = new THREE.Vector3, this.positionScreen = new THREE.Vector4, this.visible = !0
},THREE.RenderableVertex.prototype.copy = function (e) {
    this.positionWorld.copy(e.positionWorld), this.positionScreen.copy(e.positionScreen)
},THREE.RenderableFace3 = function () {
    this.id = 0, this.v1 = new THREE.RenderableVertex, this.v2 = new THREE.RenderableVertex, this.v3 = new THREE.RenderableVertex, this.centroidModel = new THREE.Vector3, this.normalModel = new THREE.Vector3, this.normalModelView = new THREE.Vector3, this.vertexNormalsLength = 0, this.vertexNormalsModel = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3], this.vertexNormalsModelView = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3], this.color = null, this.material = null, this.uvs = [[]], this.z = 0
},THREE.RenderableObject = function () {
    this.id = 0, this.object = null, this.z = 0
},THREE.RenderableSprite = function () {
    this.id = 0, this.object = null, this.x = 0, this.y = 0, this.z = 0, this.rotation = 0, this.scale = new THREE.Vector2, this.material = null
},THREE.RenderableLine = function () {
    this.id = 0, this.v1 = new THREE.RenderableVertex, this.v2 = new THREE.RenderableVertex, this.vertexColors = [new THREE.Color, new THREE.Color], this.material = null, this.z = 0
},THREE.GeometryUtils = {
    merge: function (e, t, i) {
        var r, o, a = e.vertices.length, n = (e.faceVertexUvs[0].length, t instanceof THREE.Mesh ? t.geometry : t),
            s = e.vertices, h = n.vertices, l = e.faces, c = n.faces, u = e.faceVertexUvs[0], p = n.faceVertexUvs[0];
        void 0 === i && (i = 0), t instanceof THREE.Mesh && (t.matrixAutoUpdate && t.updateMatrix(), r = t.matrix, o = (new THREE.Matrix3).getNormalMatrix(r));
        for (var f = 0, E = h.length; f < E; f++) {
            var d = h[f], m = d.clone();
            r && m.applyMatrix4(r), s.push(m)
        }
        for (f = 0, E = c.length; f < E; f++) {
            var g, v, T, y = c[f], R = y.vertexNormals, x = y.vertexColors;
            g = new THREE.Face3(y.a + a, y.b + a, y.c + a), g.normal.copy(y.normal), o && g.normal.applyMatrix3(o).normalize();
            for (var H = 0, _ = R.length; H < _; H++) v = R[H].clone(), o && v.applyMatrix3(o).normalize(), g.vertexNormals.push(v);
            g.color.copy(y.color);
            for (var H = 0, _ = x.length; H < _; H++) T = x[H], g.vertexColors.push(T.clone());
            g.materialIndex = y.materialIndex + i, g.centroid.copy(y.centroid), r && g.centroid.applyMatrix4(r), l.push(g)
        }
        for (f = 0, E = p.length; f < E; f++) {
            for (var w = p[f], b = [], H = 0, _ = w.length; H < _; H++) b.push(new THREE.Vector2(w[H].x, w[H].y));
            u.push(b)
        }
    }, randomPointInTriangle: function () {
        var e = new THREE.Vector3;
        return function (t, i, r) {
            var o = new THREE.Vector3, a = THREE.Math.random16(), n = THREE.Math.random16();
            a + n > 1 && (a = 1 - a, n = 1 - n);
            var s = 1 - a - n;
            return o.copy(t), o.multiplyScalar(a), e.copy(i), e.multiplyScalar(n), o.add(e), e.copy(r), e.multiplyScalar(s), o.add(e), o
        }
    }(), randomPointInFace: function (e, t, i) {
        var r, o, a;
        return r = t.vertices[e.a], o = t.vertices[e.b], a = t.vertices[e.c], THREE.GeometryUtils.randomPointInTriangle(r, o, a)
    }, randomPointsInGeometry: function (e, t) {
        var i, r, o, a, n, s = e.faces, h = e.vertices, l = s.length, c = 0, u = [];
        for (r = 0; r < l; r++) i = s[r], o = h[i.a], a = h[i.b], n = h[i.c], i._area = THREE.GeometryUtils.triangleArea(o, a, n), c += i._area, u[r] = c;
        var p, f, E = [], d = {};
        for (r = 0; r < t; r++) p = THREE.Math.random16() * c, f = function (e) {
            function t(i, r) {
                if (r < i) return i;
                var o = i + Math.floor((r - i) / 2);
                return u[o] > e ? t(i, o - 1) : u[o] < e ? t(o + 1, r) : o
            }

            return t(0, u.length - 1)
        }(p), E[r] = THREE.GeometryUtils.randomPointInFace(s[f], e, !0), d[f] ? d[f] += 1 : d[f] = 1;
        return E
    }, triangleArea: function () {
        var e = new THREE.Vector3, t = new THREE.Vector3;
        return function (i, r, o) {
            return e.subVectors(r, i), t.subVectors(o, i), e.cross(t), .5 * e.length()
        }
    }(), center: function (e) {
        e.computeBoundingBox();
        var t = e.boundingBox, i = new THREE.Vector3;
        return i.addVectors(t.min, t.max), i.multiplyScalar(-.5), e.applyMatrix((new THREE.Matrix4).makeTranslation(i.x, i.y, i.z)), e.computeBoundingBox(), i
    }, triangulateQuads: function (e) {
        var t, i, r, o, a = [], n = [];
        for (t = 0, i = e.faceVertexUvs.length; t < i; t++) n[t] = [];
        for (t = 0, i = e.faces.length; t < i; t++) {
            var s = e.faces[t];
            for (a.push(s), r = 0, o = e.faceVertexUvs.length; r < o; r++) n[r].push(e.faceVertexUvs[r][t])
        }
        e.faces = a, e.faceVertexUvs = n, e.computeCentroids(), e.computeFaceNormals(), e.computeVertexNormals(), e.hasTangents && e.computeTangents()
    }
},THREE.ImageUtils = {
    crossOrigin: "anonymous", loadTexture: function (e, t, i, r) {
        var o = new THREE.ImageLoader;
        o.crossOrigin = this.crossOrigin;
        var a = new THREE.Texture(void 0, t), n = o.load(e, function () {
            a.needsUpdate = !0, i && i(a)
        });
        return a.image = n, a.sourceFile = e, a
    }, loadCompressedTexture: function (e, t, i, r) {
        var o = new THREE.CompressedTexture;
        o.mapping = t;
        var a = new XMLHttpRequest;
        return a.onload = function () {
            var e = a.response, t = THREE.ImageUtils.parseDDS(e, !0);
            o.format = t.format, o.mipmaps = t.mipmaps, o.image.width = t.width, o.image.height = t.height, o.generateMipmaps = !1, o.needsUpdate = !0, i && i(o)
        }, a.onerror = r, a.open("GET", e, !0), a.responseType = "arraybuffer", a.send(null), o
    }, loadTextureCube: function (e, t, i, r) {
        var o = [];
        o.loadCount = 0;
        var a = new THREE.Texture;
        a.image = o, void 0 !== t && (a.mapping = t), a.flipY = !1;
        for (var n = 0, s = e.length; n < s; ++n) {
            var h = new Image;
            o[n] = h, h.onload = function () {
                o.loadCount += 1, 6 === o.loadCount && (a.needsUpdate = !0, i && i(a))
            }, h.onerror = r, h.crossOrigin = this.crossOrigin, h.src = e[n]
        }
        return a
    }, loadCompressedTextureCube: function (e, t, i, r) {
        var o = [];
        o.loadCount = 0;
        var a = new THREE.CompressedTexture;
        a.image = o, void 0 !== t && (a.mapping = t), a.flipY = !1, a.generateMipmaps = !1;
        if (e instanceof Array) for (var n = 0, s = e.length; n < s; ++n) {
            var h = {};
            o[n] = h;
            var l = new XMLHttpRequest;
            l.onload = function (e, t) {
                return function () {
                    var r = e.response, n = THREE.ImageUtils.parseDDS(r, !0);
                    t.format = n.format, t.mipmaps = n.mipmaps, t.width = n.width, t.height = n.height, o.loadCount += 1, 6 === o.loadCount && (a.format = n.format, a.needsUpdate = !0, i && i(a))
                }
            }(l, h), l.onerror = r;
            var c = e[n];
            l.open("GET", c, !0), l.responseType = "arraybuffer", l.send(null)
        } else {
            var c = e, l = new XMLHttpRequest;
            l.onload = function () {
                var e = l.response, t = THREE.ImageUtils.parseDDS(e, !0);
                if (t.isCubemap) {
                    for (var r = t.mipmaps.length / t.mipmapCount, n = 0; n < r; n++) {
                        o[n] = {mipmaps: []};
                        for (var s = 0; s < t.mipmapCount; s++) o[n].mipmaps.push(t.mipmaps[n * t.mipmapCount + s]), o[n].format = t.format, o[n].width = t.width, o[n].height = t.height
                    }
                    a.format = t.format, a.needsUpdate = !0, i && i(a)
                }
            }, l.onerror = r, l.open("GET", c, !0), l.responseType = "arraybuffer", l.send(null)
        }
        return a
    }, loadDDSTexture: function (e, t, i, r) {
        var o = [];
        o.loadCount = 0;
        var a = new THREE.CompressedTexture;
        a.image = o, void 0 !== t && (a.mapping = t), a.flipY = !1, a.generateMipmaps = !1;
        var n = new XMLHttpRequest;
        return n.onload = function () {
            var e = n.response, t = THREE.ImageUtils.parseDDS(e, !0);
            if (t.isCubemap) for (var r = t.mipmaps.length / t.mipmapCount, s = 0; s < r; s++) {
                o[s] = {mipmaps: []};
                for (var h = 0; h < t.mipmapCount; h++) o[s].mipmaps.push(t.mipmaps[s * t.mipmapCount + h]), o[s].format = t.format, o[s].width = t.width, o[s].height = t.height
            } else a.image.width = t.width, a.image.height = t.height, a.mipmaps = t.mipmaps;
            a.format = t.format, a.needsUpdate = !0, i && i(a)
        }, n.onerror = r, n.open("GET", e, !0), n.responseType = "arraybuffer", n.send(null), a
    }, parseDDS: function (e, t) {
        function i(e) {
            return e.charCodeAt(0) + (e.charCodeAt(1) << 8) + (e.charCodeAt(2) << 16) + (e.charCodeAt(3) << 24)
        }

        var r = {mipmaps: [], width: 0, height: 0, format: null, mipmapCount: 1}, o = i("DXT1"), a = i("DXT3"),
            n = i("DXT5"), s = new Int32Array(e, 0, 31);
        if (542327876 !== s[0]) return r;
        if (4 & !s[20]) return r;
        var h, l = s[21], c = !1;
        switch (l) {
            case o:
                h = 8, r.format = THREE.RGB_S3TC_DXT1_Format;
                break;
            case a:
                h = 16, r.format = THREE.RGBA_S3TC_DXT3_Format;
                break;
            case n:
                h = 16, r.format = THREE.RGBA_S3TC_DXT5_Format;
                break;
            default:
                if (!(32 == s[22] && 16711680 & s[23] && 65280 & s[24] && 255 & s[25] && 4278190080 & s[26])) return r;
                c = !0, h = 64, r.format = THREE.RGBAFormat
        }
        r.mipmapCount = 1, 131072 & s[2] && t !== !1 && (r.mipmapCount = Math.max(1, s[7])), r.isCubemap = !!(512 & s[28]), r.width = s[4], r.height = s[3];
        for (var u = s[1] + 4, p = r.width, f = r.height, E = r.isCubemap ? 6 : 1, d = 0; d < E; d++) {
            for (var m = 0; m < r.mipmapCount; m++) {
                if (c) var g = function (e, t, i, r) {
                    for (var o = i * r * 4, a = new Uint8Array(e, t, o), n = new Uint8Array(o), s = 0, h = 0, l = 0; l < r; l++) for (var c = 0; c < i; c++) {
                        var u = a[h];
                        h++;
                        var p = a[h];
                        h++;
                        var f = a[h];
                        h++;
                        var E = a[h];
                        h++, n[s] = f, s++, n[s] = p, s++, n[s] = u, s++, n[s] = E, s++
                    }
                    return n
                }(e, u, p, f), v = g.length; else var v = Math.max(4, p) / 4 * Math.max(4, f) / 4 * h,
                    g = new Uint8Array(e, u, v);
                var T = {data: g, width: p, height: f};
                r.mipmaps.push(T), u += v, p = Math.max(.5 * p, 1), f = Math.max(.5 * f, 1)
            }
            p = r.width, f = r.height
        }
        return r
    }, getNormalMap: function (e, t) {
        var i = function (e, t) {
            return [e[0] - t[0], e[1] - t[1], e[2] - t[2]]
        };
        t |= 1;
        var r = e.width, o = e.height, a = document.createElement("canvas");
        a.width = r, a.height = o;
        var n = a.getContext("2d");
        n.drawImage(e, 0, 0);
        for (var s = n.getImageData(0, 0, r, o).data, h = n.createImageData(r, o), l = h.data, c = 0; c < r; c++) for (var u = 0; u < o; u++) {
            var p = u - 1 < 0 ? 0 : u - 1, f = u + 1 > o - 1 ? o - 1 : u + 1, E = c - 1 < 0 ? 0 : c - 1,
                d = c + 1 > r - 1 ? r - 1 : c + 1, m = [], g = [0, 0, s[4 * (u * r + c)] / 255 * t];
            m.push([-1, 0, s[4 * (u * r + E)] / 255 * t]), m.push([-1, -1, s[4 * (p * r + E)] / 255 * t]), m.push([0, -1, s[4 * (p * r + c)] / 255 * t]), m.push([1, -1, s[4 * (p * r + d)] / 255 * t]), m.push([1, 0, s[4 * (u * r + d)] / 255 * t]), m.push([1, 1, s[4 * (f * r + d)] / 255 * t]), m.push([0, 1, s[4 * (f * r + c)] / 255 * t]), m.push([-1, 1, s[4 * (f * r + E)] / 255 * t]);
            for (var v = [], T = m.length, y = 0; y < T; y++) {
                var R = m[y], x = m[(y + 1) % T];
                R = i(R, g), x = i(x, g), v.push(function (e) {
                    var t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
                    return [e[0] / t, e[1] / t, e[2] / t]
                }(function (e, t) {
                    return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
                }(R, x)))
            }
            for (var H = [0, 0, 0], y = 0; y < v.length; y++) H[0] += v[y][0], H[1] += v[y][1], H[2] += v[y][2];
            H[0] /= v.length, H[1] /= v.length, H[2] /= v.length;
            var _ = 4 * (u * r + c);
            l[_] = (H[0] + 1) / 2 * 255 | 0, l[_ + 1] = (H[1] + 1) / 2 * 255 | 0, l[_ + 2] = 255 * H[2] | 0, l[_ + 3] = 255
        }
        return n.putImageData(h, 0, 0), a
    }, generateDataTexture: function (e, t, i) {
        for (var r = e * t, o = new Uint8Array(3 * r), a = Math.floor(255 * i.r), n = Math.floor(255 * i.g), s = Math.floor(255 * i.b), h = 0; h < r; h++) o[3 * h] = a, o[3 * h + 1] = n, o[3 * h + 2] = s;
        var l = new THREE.DataTexture(o, e, t, THREE.RGBFormat);
        return l.needsUpdate = !0, l
    }
},THREE.SceneUtils = {
    createMultiMaterialObject: function (e, t) {
        for (var i = new THREE.Object3D, r = 0, o = t.length; r < o; r++) i.add(new THREE.Mesh(e, t[r]));
        return i
    }, detach: function (e, t, i) {
        e.applyMatrix(t.matrixWorld), t.remove(e), i.add(e)
    }, attach: function (e, t, i) {
        var r = new THREE.Matrix4;
        r.getInverse(i.matrixWorld), e.applyMatrix(r), t.remove(e), i.add(e)
    }
},THREE.FontUtils = {
    faces: {}, face: "helvetiker", weight: "normal", style: "normal", size: 150, divisions: 10, getFace: function () {
        return this.faces[this.face][this.weight][this.style]
    }, loadFace: function (e) {
        var t = e.familyName.toLowerCase(), i = this;
        i.faces[t] = i.faces[t] || {}, i.faces[t][e.cssFontWeight] = i.faces[t][e.cssFontWeight] || {}, i.faces[t][e.cssFontWeight][e.cssFontStyle] = e;
        i.faces[t][e.cssFontWeight][e.cssFontStyle] = e;
        return e
    }, drawText: function (e) {
        var t, i = this.getFace(), r = this.size / i.resolution, o = 0, a = String(e).split(""), n = a.length, s = [];
        for (t = 0; t < n; t++) {
            var h = new THREE.Path, l = this.extractGlyphPoints(a[t], i, r, o, h);
            o += l.offset, s.push(l.path)
        }
        return {paths: s, offset: o / 2}
    }, extractGlyphPoints: function (e, t, i, r, o) {
        var a, n, s, h, l, c, u, p, f, E, d, m, g, v, T, y, R, x, H = [], _ = t.glyphs[e] || t.glyphs["?"];
        if (_) {
            if (_.o) for (h = _._cachedOutline || (_._cachedOutline = _.o.split(" ")), l = h.length, c = i, u = i, a = 0; a < l;) switch (h[a++]) {
                case"m":
                    p = h[a++] * c + r, f = h[a++] * u, o.moveTo(p, f);
                    break;
                case"l":
                    p = h[a++] * c + r, f = h[a++] * u, o.lineTo(p, f);
                    break;
                case"q":
                    if (E = h[a++] * c + r, d = h[a++] * u, v = h[a++] * c + r, T = h[a++] * u, o.quadraticCurveTo(v, T, E, d), x = H[H.length - 1]) for (m = x.x, g = x.y, n = 1, s = this.divisions; n <= s; n++) {
                        var w = n / s;
                        THREE.Shape.Utils.b2(w, m, v, E), THREE.Shape.Utils.b2(w, g, T, d)
                    }
                    break;
                case"b":
                    if (E = h[a++] * c + r, d = h[a++] * u, v = h[a++] * c + r, T = h[a++] * -u, y = h[a++] * c + r, R = h[a++] * -u, o.bezierCurveTo(E, d, v, T, y, R), x = H[H.length - 1]) for (m = x.x, g = x.y, n = 1, s = this.divisions; n <= s; n++) {
                        var w = n / s;
                        THREE.Shape.Utils.b3(w, m, v, y, E), THREE.Shape.Utils.b3(w, g, T, R, d)
                    }
            }
            return {offset: _.ha * i, path: o}
        }
    }
},THREE.FontUtils.generateShapes = function (e, t) {
    t = t || {};
    var i = void 0 !== t.size ? t.size : 100, r = void 0 !== t.curveSegments ? t.curveSegments : 4,
        o = void 0 !== t.font ? t.font : "helvetiker", a = void 0 !== t.weight ? t.weight : "normal",
        n = void 0 !== t.style ? t.style : "normal";
    THREE.FontUtils.size = i, THREE.FontUtils.divisions = r, THREE.FontUtils.face = o, THREE.FontUtils.weight = a, THREE.FontUtils.style = n;
    for (var s = THREE.FontUtils.drawText(e), h = s.paths, l = [], c = 0, u = h.length; c < u; c++) Array.prototype.push.apply(l, h[c].toShapes());
    return l
},function (e) {
    var t = function (e, t) {
        var o = e.length;
        if (o < 3) return null;
        var a, n, s, h = [], l = [], c = [];
        if (i(e) > 0) for (n = 0; n < o; n++) l[n] = n; else for (n = 0; n < o; n++) l[n] = o - 1 - n;
        var u = o, p = 2 * u;
        for (n = u - 1; u > 2;) {
            if (p-- <= 0) return t ? c : h;
            if (a = n, u <= a && (a = 0), n = a + 1, u <= n && (n = 0), s = n + 1, u <= s && (s = 0), r(e, a, n, s, u, l)) {
                var f, E, d, m, g;
                for (f = l[a], E = l[n], d = l[s], h.push([e[f], e[E], e[d]]), c.push([l[a], l[n], l[s]]), m = n, g = n + 1; g < u; m++, g++) l[m] = l[g];
                u--, p = 2 * u
            }
        }
        return t ? c : h
    }, i = function (e) {
        for (var t = e.length, i = 0, r = t - 1, o = 0; o < t; r = o++) i += e[r].x * e[o].y - e[o].x * e[r].y;
        return .5 * i
    }, r = function (e, t, i, r, o, a) {
        var n, s, h, l, c, u, p, f, E;
        if (s = e[a[t]].x, h = e[a[t]].y, l = e[a[i]].x, c = e[a[i]].y, u = e[a[r]].x, p = e[a[r]].y, 1e-10 > (l - s) * (p - h) - (c - h) * (u - s)) return !1;
        var d, m, g, v, T, y, R, x, H, _, w, b, M, S, A;
        for (d = u - l, m = p - c, g = s - u, v = h - p, T = l - s, y = c - h, n = 0; n < o; n++) if (n !== t && n !== i && n !== r && (f = e[a[n]].x, E = e[a[n]].y, R = f - s, x = E - h, H = f - l, _ = E - c, w = f - u, b = E - p, A = d * _ - m * H, M = T * x - y * R, S = g * b - v * w, A >= -1e-10 && S >= -1e-10 && M >= -1e-10)) return !1;
        return !0
    };
    e.Triangulate = t, e.Triangulate.area = i, e
}(THREE.FontUtils),self._typeface_js = {
    faces: THREE.FontUtils.faces,
    loadFace: THREE.FontUtils.loadFace
},THREE.typeface_js = self._typeface_js,THREE.Curve = function () {
},THREE.Curve.prototype.getPoint = function (e) {
    return null
},THREE.Curve.prototype.getPointAt = function (e) {
    var t = this.getUtoTmapping(e);
    return this.getPoint(t)
},THREE.Curve.prototype.getPoints = function (e) {
    e || (e = 5);
    var t, i = [];
    for (t = 0; t <= e; t++) i.push(this.getPoint(t / e));
    return i
},THREE.Curve.prototype.getSpacedPoints = function (e) {
    e || (e = 5);
    var t, i = [];
    for (t = 0; t <= e; t++) i.push(this.getPointAt(t / e));
    return i
},THREE.Curve.prototype.getLength = function () {
    var e = this.getLengths();
    return e[e.length - 1]
},THREE.Curve.prototype.getLengths = function (e) {
    if (e || (e = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200), this.cacheArcLengths && this.cacheArcLengths.length == e + 1 && !this.needsUpdate) return this.cacheArcLengths;
    this.needsUpdate = !1;
    var t, i, r = [], o = this.getPoint(0), a = 0;
    for (r.push(0), i = 1; i <= e; i++) t = this.getPoint(i / e), a += t.distanceTo(o), r.push(a), o = t;
    return this.cacheArcLengths = r, r
},THREE.Curve.prototype.updateArcLengths = function () {
    this.needsUpdate = !0, this.getLengths()
},THREE.Curve.prototype.getUtoTmapping = function (e, t) {
    var i, r = this.getLengths(), o = 0, a = r.length;
    i = t ? t : e * r[a - 1];
    for (var n, s = 0, h = a - 1; s <= h;) if (o = Math.floor(s + (h - s) / 2), (n = r[o] - i) < 0) s = o + 1; else {
        if (!(n > 0)) {
            h = o;
            break
        }
        h = o - 1
    }
    if (o = h, r[o] == i) {
        var l = o / (a - 1);
        return l
    }
    var c = r[o], u = r[o + 1], p = u - c, f = (i - c) / p, l = (o + f) / (a - 1);
    return l
},THREE.Curve.prototype.getTangent = function (e) {
    var t = e - 1e-4, i = e + 1e-4;
    t < 0 && (t = 0), i > 1 && (i = 1);
    var r = this.getPoint(t);
    return this.getPoint(i).clone().sub(r).normalize()
},THREE.Curve.prototype.getTangentAt = function (e) {
    var t = this.getUtoTmapping(e);
    return this.getTangent(t)
},THREE.Curve.Utils = {
    tangentQuadraticBezier: function (e, t, i, r) {
        return 2 * (1 - e) * (i - t) + 2 * e * (r - i)
    }, tangentCubicBezier: function (e, t, i, r, o) {
        return -3 * t * (1 - e) * (1 - e) + 3 * i * (1 - e) * (1 - e) - 6 * e * i * (1 - e) + 6 * e * r * (1 - e) - 3 * e * e * r + 3 * e * e * o
    }, tangentSpline: function (e, t, i, r, o) {
        return 6 * e * e - 6 * e + (3 * e * e - 4 * e + 1) + (-6 * e * e + 6 * e) + (3 * e * e - 2 * e)
    }, interpolate: function (e, t, i, r, o) {
        var a = .5 * (i - e), n = .5 * (r - t), s = o * o;
        return (2 * t - 2 * i + a + n) * (o * s) + (-3 * t + 3 * i - 2 * a - n) * s + a * o + t
    }
},THREE.Curve.create = function (e, t) {
    return e.prototype = Object.create(THREE.Curve.prototype), e.prototype.getPoint = t, e
},THREE.CurvePath = function () {
    this.curves = [], this.bends = [], this.autoClose = !1
},THREE.CurvePath.prototype = Object.create(THREE.Curve.prototype),THREE.CurvePath.prototype.add = function (e) {
    this.curves.push(e)
},THREE.CurvePath.prototype.checkConnection = function () {
},THREE.CurvePath.prototype.closePath = function () {
    var e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
    e.equals(t) || this.curves.push(new THREE.LineCurve(t, e))
},THREE.CurvePath.prototype.getPoint = function (e) {
    for (var t, i, r = e * this.getLength(), o = this.getCurveLengths(), a = 0; a < o.length;) {
        if (o[a] >= r) {
            t = o[a] - r, i = this.curves[a];
            var n = 1 - t / i.getLength();
            return i.getPointAt(n)
        }
        a++
    }
    return null
},THREE.CurvePath.prototype.getLength = function () {
    var e = this.getCurveLengths();
    return e[e.length - 1]
},THREE.CurvePath.prototype.getCurveLengths = function () {
    if (this.cacheLengths && this.cacheLengths.length == this.curves.length) return this.cacheLengths;
    var e, t = [], i = 0, r = this.curves.length;
    for (e = 0; e < r; e++) i += this.curves[e].getLength(), t.push(i);
    return this.cacheLengths = t, t
},THREE.CurvePath.prototype.getBoundingBox = function () {
    var e, t, i, r, o, a, n = this.getPoints();
    e = t = Number.NEGATIVE_INFINITY, r = o = Number.POSITIVE_INFINITY;
    var s, h, l, c, u = n[0] instanceof THREE.Vector3;
    for (c = u ? new THREE.Vector3 : new THREE.Vector2, h = 0, l = n.length; h < l; h++) s = n[h], s.x > e ? e = s.x : s.x < r && (r = s.x), s.y > t ? t = s.y : s.y < o && (o = s.y), u && (s.z > i ? i = s.z : s.z < a && (a = s.z)), c.add(s);
    var p = {minX: r, minY: o, maxX: e, maxY: t, centroid: c.divideScalar(l)};
    return u && (p.maxZ = i, p.minZ = a), p
},THREE.CurvePath.prototype.createPointsGeometry = function (e) {
    var t = this.getPoints(e, !0);
    return this.createGeometry(t)
},THREE.CurvePath.prototype.createSpacedPointsGeometry = function (e) {
    var t = this.getSpacedPoints(e, !0);
    return this.createGeometry(t)
},THREE.CurvePath.prototype.createGeometry = function (e) {
    for (var t = new THREE.Geometry, i = 0; i < e.length; i++) t.vertices.push(new THREE.Vector3(e[i].x, e[i].y, e[i].z || 0));
    return t
},THREE.CurvePath.prototype.addWrapPath = function (e) {
    this.bends.push(e)
},THREE.CurvePath.prototype.getTransformedPoints = function (e, t) {
    var i, r, o = this.getPoints(e);
    for (t || (t = this.bends), i = 0, r = t.length; i < r; i++) o = this.getWrapPoints(o, t[i]);
    return o
},THREE.CurvePath.prototype.getTransformedSpacedPoints = function (e, t) {
    var i, r, o = this.getSpacedPoints(e);
    for (t || (t = this.bends), i = 0, r = t.length; i < r; i++) o = this.getWrapPoints(o, t[i]);
    return o
},THREE.CurvePath.prototype.getWrapPoints = function (e, t) {
    var i, r, o, a, n, s, h = this.getBoundingBox();
    for (i = 0, r = e.length; i < r; i++) {
        o = e[i], a = o.x, n = o.y, s = a / h.maxX, s = t.getUtoTmapping(s, a);
        var l = t.getPoint(s), c = t.getNormalVector(s).multiplyScalar(n);
        o.x = l.x + c.x, o.y = l.y + c.y
    }
    return e
},THREE.Gyroscope = function () {
    THREE.Object3D.call(this)
},THREE.Gyroscope.prototype = Object.create(THREE.Object3D.prototype),THREE.Gyroscope.prototype.updateMatrixWorld = function (e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent ? (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorld.decompose(this.translationWorld, this.quaternionWorld, this.scaleWorld), this.matrix.decompose(this.translationObject, this.quaternionObject, this.scaleObject), this.matrixWorld.compose(this.translationWorld, this.quaternionObject, this.scaleWorld)) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    for (var t = 0, i = this.children.length; t < i; t++) this.children[t].updateMatrixWorld(e)
},THREE.Gyroscope.prototype.translationWorld = new THREE.Vector3,THREE.Gyroscope.prototype.translationObject = new THREE.Vector3,THREE.Gyroscope.prototype.quaternionWorld = new THREE.Quaternion,THREE.Gyroscope.prototype.quaternionObject = new THREE.Quaternion,THREE.Gyroscope.prototype.scaleWorld = new THREE.Vector3,THREE.Gyroscope.prototype.scaleObject = new THREE.Vector3,THREE.Path = function (e) {
    THREE.CurvePath.call(this), this.actions = [], e && this.fromPoints(e)
},THREE.Path.prototype = Object.create(THREE.CurvePath.prototype),THREE.PathActions = {
    MOVE_TO: "moveTo",
    LINE_TO: "lineTo",
    QUADRATIC_CURVE_TO: "quadraticCurveTo",
    BEZIER_CURVE_TO: "bezierCurveTo",
    CSPLINE_THRU: "splineThru",
    ARC: "arc",
    ELLIPSE: "ellipse"
},THREE.Path.prototype.fromPoints = function (e) {
    this.moveTo(e[0].x, e[0].y);
    for (var t = 1, i = e.length; t < i; t++) this.lineTo(e[t].x, e[t].y)
},THREE.Path.prototype.moveTo = function (e, t) {
    var i = Array.prototype.slice.call(arguments);
    this.actions.push({action: THREE.PathActions.MOVE_TO, args: i})
},THREE.Path.prototype.lineTo = function (e, t) {
    var i = Array.prototype.slice.call(arguments), r = this.actions[this.actions.length - 1].args, o = r[r.length - 2],
        a = r[r.length - 1], n = new THREE.LineCurve(new THREE.Vector2(o, a), new THREE.Vector2(e, t));
    this.curves.push(n), this.actions.push({action: THREE.PathActions.LINE_TO, args: i})
},THREE.Path.prototype.quadraticCurveTo = function (e, t, i, r) {
    var o = Array.prototype.slice.call(arguments), a = this.actions[this.actions.length - 1].args, n = a[a.length - 2],
        s = a[a.length - 1],
        h = new THREE.QuadraticBezierCurve(new THREE.Vector2(n, s), new THREE.Vector2(e, t), new THREE.Vector2(i, r));
    this.curves.push(h), this.actions.push({action: THREE.PathActions.QUADRATIC_CURVE_TO, args: o})
},THREE.Path.prototype.bezierCurveTo = function (e, t, i, r, o, a) {
    var n = Array.prototype.slice.call(arguments), s = this.actions[this.actions.length - 1].args, h = s[s.length - 2],
        l = s[s.length - 1],
        c = new THREE.CubicBezierCurve(new THREE.Vector2(h, l), new THREE.Vector2(e, t), new THREE.Vector2(i, r), new THREE.Vector2(o, a));
    this.curves.push(c), this.actions.push({action: THREE.PathActions.BEZIER_CURVE_TO, args: n})
},THREE.Path.prototype.splineThru = function (e) {
    var t = Array.prototype.slice.call(arguments), i = this.actions[this.actions.length - 1].args, r = i[i.length - 2],
        o = i[i.length - 1], a = [new THREE.Vector2(r, o)];
    Array.prototype.push.apply(a, e);
    var n = new THREE.SplineCurve(a);
    this.curves.push(n), this.actions.push({action: THREE.PathActions.CSPLINE_THRU, args: t})
},THREE.Path.prototype.arc = function (e, t, i, r, o, a) {
    var n = this.actions[this.actions.length - 1].args, s = n[n.length - 2], h = n[n.length - 1];
    this.absarc(e + s, t + h, i, r, o, a)
},THREE.Path.prototype.absarc = function (e, t, i, r, o, a) {
    this.absellipse(e, t, i, i, r, o, a)
},THREE.Path.prototype.ellipse = function (e, t, i, r, o, a, n) {
    var s = this.actions[this.actions.length - 1].args, h = s[s.length - 2], l = s[s.length - 1];
    this.absellipse(e + h, t + l, i, r, o, a, n)
},THREE.Path.prototype.absellipse = function (e, t, i, r, o, a, n) {
    var s = Array.prototype.slice.call(arguments), h = new THREE.EllipseCurve(e, t, i, r, o, a, n);
    this.curves.push(h);
    var l = h.getPoint(1);
    s.push(l.x), s.push(l.y), this.actions.push({action: THREE.PathActions.ELLIPSE, args: s})
},THREE.Path.prototype.getSpacedPoints = function (e, t) {
    e || (e = 40);
    for (var i = [], r = 0; r < e; r++) i.push(this.getPoint(r / e));
    return i
},THREE.Path.prototype.getPoints = function (e, t) {
    if (this.useSpacedPoints) return this.getSpacedPoints(e, t);
    e = e || 12;
    var i, r, o, a, n, s, h, l, c, u, p, f, E, d, m, g, v, T, y = [];
    for (i = 0, r = this.actions.length; i < r; i++) switch (o = this.actions[i], a = o.action, n = o.args, a) {
        case THREE.PathActions.MOVE_TO:
            y.push(new THREE.Vector2(n[0], n[1]));
            break;
        case THREE.PathActions.LINE_TO:
            y.push(new THREE.Vector2(n[0], n[1]));
            break;
        case THREE.PathActions.QUADRATIC_CURVE_TO:
            for (s = n[2], h = n[3], u = n[0], p = n[1], y.length > 0 ? (d = y[y.length - 1], f = d.x, E = d.y) : (d = this.actions[i - 1].args, f = d[d.length - 2], E = d[d.length - 1]), m = 1; m <= e; m++) g = m / e, v = THREE.Shape.Utils.b2(g, f, u, s), T = THREE.Shape.Utils.b2(g, E, p, h), y.push(new THREE.Vector2(v, T));
            break;
        case THREE.PathActions.BEZIER_CURVE_TO:
            for (s = n[4], h = n[5], u = n[0], p = n[1], l = n[2], c = n[3], y.length > 0 ? (d = y[y.length - 1], f = d.x, E = d.y) : (d = this.actions[i - 1].args, f = d[d.length - 2], E = d[d.length - 1]), m = 1; m <= e; m++) g = m / e, v = THREE.Shape.Utils.b3(g, f, u, l, s), T = THREE.Shape.Utils.b3(g, E, p, c, h), y.push(new THREE.Vector2(v, T));
            break;
        case THREE.PathActions.CSPLINE_THRU:
            d = this.actions[i - 1].args;
            var R = new THREE.Vector2(d[d.length - 2], d[d.length - 1]), x = [R], H = e * n[0].length;
            x = x.concat(n[0]);
            var _ = new THREE.SplineCurve(x);
            for (m = 1; m <= H; m++) y.push(_.getPointAt(m / H));
            break;
        case THREE.PathActions.ARC:
            var w, b = n[0], M = n[1], S = n[2], A = n[3], C = n[4], L = !!n[5], P = C - A, D = 2 * e;
            for (m = 1; m <= D; m++) g = m / D, L || (g = 1 - g), w = A + g * P, v = b + S * Math.cos(w), T = M + S * Math.sin(w), y.push(new THREE.Vector2(v, T));
            break;
        case THREE.PathActions.ELLIPSE:
            var w, b = n[0], M = n[1], F = n[2], V = n[3], A = n[4], C = n[5], L = !!n[6], P = C - A, D = 2 * e;
            for (m = 1; m <= D; m++) g = m / D, L || (g = 1 - g), w = A + g * P, v = b + F * Math.cos(w), T = M + V * Math.sin(w), y.push(new THREE.Vector2(v, T))
    }
    var U = y[y.length - 1];
    return Math.abs(U.x - y[0].x) < 1e-10 && Math.abs(U.y - y[0].y) < 1e-10 && y.splice(y.length - 1, 1), t && y.push(y[0]), y
},THREE.Path.prototype.toShapes = function (e) {
    var t, i, r, o, a, n = [], s = new THREE.Path;
    for (t = 0, i = this.actions.length; t < i; t++) r = this.actions[t], a = r.args, o = r.action, o == THREE.PathActions.MOVE_TO && 0 != s.actions.length && (n.push(s), s = new THREE.Path), s[o].apply(s, a);
    if (0 != s.actions.length && n.push(s), 0 == n.length) return [];
    var h, l, c, u = [];
    if (1 == n.length) return l = n[0], c = new THREE.Shape, c.actions = l.actions, c.curves = l.curves, u.push(c), u;
    var p = !THREE.Shape.Utils.isClockWise(n[0].getPoints());
    if (p = e ? !p : p) for (c = new THREE.Shape, t = 0, i = n.length; t < i; t++) l = n[t], h = THREE.Shape.Utils.isClockWise(l.getPoints()), h = e ? !h : h, h ? (c.actions = l.actions, c.curves = l.curves, u.push(c), c = new THREE.Shape) : c.holes.push(l); else {
        for (c = void 0, t = 0, i = n.length; t < i; t++) l = n[t], h = THREE.Shape.Utils.isClockWise(l.getPoints()), h = e ? !h : h, h ? (c && u.push(c), c = new THREE.Shape, c.actions = l.actions, c.curves = l.curves) : c.holes.push(l);
        u.push(c)
    }
    return u
},THREE.Shape = function () {
    THREE.Path.apply(this, arguments), this.holes = []
},THREE.Shape.prototype = Object.create(THREE.Path.prototype),THREE.Shape.prototype.extrude = function (e) {
    return new THREE.ExtrudeGeometry(this, e)
},THREE.Shape.prototype.makeGeometry = function (e) {
    return new THREE.ShapeGeometry(this, e)
},THREE.Shape.prototype.getPointsHoles = function (e) {
    var t, i = this.holes.length, r = [];
    for (t = 0; t < i; t++) r[t] = this.holes[t].getTransformedPoints(e, this.bends);
    return r
},THREE.Shape.prototype.getSpacedPointsHoles = function (e) {
    var t, i = this.holes.length, r = [];
    for (t = 0; t < i; t++) r[t] = this.holes[t].getTransformedSpacedPoints(e, this.bends);
    return r
},THREE.Shape.prototype.extractAllPoints = function (e) {
    return {shape: this.getTransformedPoints(e), holes: this.getPointsHoles(e)}
},THREE.Shape.prototype.extractPoints = function (e) {
    return this.useSpacedPoints ? this.extractAllSpacedPoints(e) : this.extractAllPoints(e)
},THREE.Shape.prototype.extractAllSpacedPoints = function (e) {
    return {shape: this.getTransformedSpacedPoints(e), holes: this.getSpacedPointsHoles(e)}
},THREE.Shape.Utils = {
    removeHoles: function (e, t) {
        var i, r, o, a, n, s, h, l, c, u, p, f, E, d, m, g, v = e.concat(), T = v.concat(), y = [];
        for (n = 0; n < t.length; n++) {
            for (h = t[n], Array.prototype.push.apply(T, h), l = Number.POSITIVE_INFINITY, s = 0; s < h.length; s++) {
                p = h[s];
                var R = [];
                for (u = 0; u < v.length; u++) f = v[u], c = p.distanceToSquared(f), R.push(c), c < l && (l = c, o = s, a = u)
            }
            i = a - 1 >= 0 ? a - 1 : v.length - 1, r = o - 1 >= 0 ? o - 1 : h.length - 1;
            var x = [h[o], v[a], v[i]], H = THREE.FontUtils.Triangulate.area(x), _ = [h[o], h[r], v[a]],
                w = THREE.FontUtils.Triangulate.area(_), b = a, M = o;
            a += 1, o += -1, a < 0 && (a += v.length), a %= v.length, o < 0 && (o += h.length), o %= h.length, i = a - 1 >= 0 ? a - 1 : v.length - 1, r = o - 1 >= 0 ? o - 1 : h.length - 1, x = [h[o], v[a], v[i]];
            var S = THREE.FontUtils.Triangulate.area(x);
            _ = [h[o], h[r], v[a]];
            H + w > S + THREE.FontUtils.Triangulate.area(_) && (a = b, o = M, a < 0 && (a += v.length), a %= v.length, o < 0 && (o += h.length), o %= h.length, i = a - 1 >= 0 ? a - 1 : v.length - 1, r = o - 1 >= 0 ? o - 1 : h.length - 1), E = v.slice(0, a), d = v.slice(a), m = h.slice(o), g = h.slice(0, o);
            var A = [h[o], v[a], v[i]], C = [h[o], h[r], v[a]];
            y.push(A), y.push(C), v = E.concat(m).concat(g).concat(d)
        }
        return {shape: v, isolatedPts: y, allpoints: T}
    }, triangulateShape: function (e, t) {
        var i, r, o, a, n, s, h = THREE.Shape.Utils.removeHoles(e, t), l = h.shape, c = h.allpoints, u = h.isolatedPts,
            p = THREE.FontUtils.Triangulate(l, !1), f = {};
        for (i = 0, r = c.length; i < r; i++) n = c[i].x + ":" + c[i].y, f[n], f[n] = i;
        for (i = 0, r = p.length; i < r; i++) for (a = p[i], o = 0; o < 3; o++) n = a[o].x + ":" + a[o].y, void 0 !== (s = f[n]) && (a[o] = s);
        for (i = 0, r = u.length; i < r; i++) for (a = u[i], o = 0; o < 3; o++) n = a[o].x + ":" + a[o].y, void 0 !== (s = f[n]) && (a[o] = s);
        return p.concat(u)
    }, isClockWise: function (e) {
        return THREE.FontUtils.Triangulate.area(e) < 0
    }, b2p0: function (e, t) {
        var i = 1 - e;
        return i * i * t
    }, b2p1: function (e, t) {
        return 2 * (1 - e) * e * t
    }, b2p2: function (e, t) {
        return e * e * t
    }, b2: function (e, t, i, r) {
        return this.b2p0(e, t) + this.b2p1(e, i) + this.b2p2(e, r)
    }, b3p0: function (e, t) {
        var i = 1 - e;
        return i * i * i * t
    }, b3p1: function (e, t) {
        var i = 1 - e;
        return 3 * i * i * e * t
    }, b3p2: function (e, t) {
        return 3 * (1 - e) * e * e * t
    }, b3p3: function (e, t) {
        return e * e * e * t
    }, b3: function (e, t, i, r, o) {
        return this.b3p0(e, t) + this.b3p1(e, i) + this.b3p2(e, r) + this.b3p3(e, o)
    }
},THREE.LineCurve = function (e, t) {
    this.v1 = e, this.v2 = t
},THREE.LineCurve.prototype = Object.create(THREE.Curve.prototype),THREE.LineCurve.prototype.getPoint = function (e) {
    var t = this.v2.clone().sub(this.v1);
    return t.multiplyScalar(e).add(this.v1), t
},THREE.LineCurve.prototype.getPointAt = function (e) {
    return this.getPoint(e)
},THREE.LineCurve.prototype.getTangent = function (e) {
    return this.v2.clone().sub(this.v1).normalize()
},THREE.QuadraticBezierCurve = function (e, t, i) {
    this.v0 = e, this.v1 = t, this.v2 = i
};
THREE.QuadraticBezierCurve.prototype = Object.create(THREE.Curve.prototype), THREE.QuadraticBezierCurve.prototype.getPoint = function (e) {
    var t, i;
    return t = THREE.Shape.Utils.b2(e, this.v0.x, this.v1.x, this.v2.x), i = THREE.Shape.Utils.b2(e, this.v0.y, this.v1.y, this.v2.y), new THREE.Vector2(t, i)
}, THREE.QuadraticBezierCurve.prototype.getTangent = function (e) {
    var t, i;
    t = THREE.Curve.Utils.tangentQuadraticBezier(e, this.v0.x, this.v1.x, this.v2.x), i = THREE.Curve.Utils.tangentQuadraticBezier(e, this.v0.y, this.v1.y, this.v2.y);
    var r = new THREE.Vector2(t, i);
    return r.normalize(), r
}, THREE.CubicBezierCurve = function (e, t, i, r) {
    this.v0 = e, this.v1 = t, this.v2 = i, this.v3 = r
}, THREE.CubicBezierCurve.prototype = Object.create(THREE.Curve.prototype), THREE.CubicBezierCurve.prototype.getPoint = function (e) {
    var t, i;
    return t = THREE.Shape.Utils.b3(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), i = THREE.Shape.Utils.b3(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y), new THREE.Vector2(t, i)
}, THREE.CubicBezierCurve.prototype.getTangent = function (e) {
    var t, i;
    t = THREE.Curve.Utils.tangentCubicBezier(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), i = THREE.Curve.Utils.tangentCubicBezier(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
    var r = new THREE.Vector2(t, i);
    return r.normalize(), r
}, THREE.SplineCurve = function (e) {
    this.points = void 0 == e ? [] : e
}, THREE.SplineCurve.prototype = Object.create(THREE.Curve.prototype), THREE.SplineCurve.prototype.getPoint = function (e) {
    var t, i, r, o = new THREE.Vector2, a = [], n = this.points;
    return t = (n.length - 1) * e, i = Math.floor(t), r = t - i, a[0] = 0 == i ? i : i - 1, a[1] = i, a[2] = i > n.length - 2 ? n.length - 1 : i + 1, a[3] = i > n.length - 3 ? n.length - 1 : i + 2, o.x = THREE.Curve.Utils.interpolate(n[a[0]].x, n[a[1]].x, n[a[2]].x, n[a[3]].x, r), o.y = THREE.Curve.Utils.interpolate(n[a[0]].y, n[a[1]].y, n[a[2]].y, n[a[3]].y, r), o
}, THREE.EllipseCurve = function (e, t, i, r, o, a, n) {
    this.aX = e, this.aY = t, this.xRadius = i, this.yRadius = r, this.aStartAngle = o, this.aEndAngle = a, this.aClockwise = n
}, THREE.EllipseCurve.prototype = Object.create(THREE.Curve.prototype), THREE.EllipseCurve.prototype.getPoint = function (e) {
    var t, i = this.aEndAngle - this.aStartAngle;
    i < 0 && (i += 2 * Math.PI), i > 2 * Math.PI && (i -= 2 * Math.PI), t = this.aClockwise === !0 ? this.aEndAngle + (1 - e) * (2 * Math.PI - i) : this.aStartAngle + e * i;
    var r = this.aX + this.xRadius * Math.cos(t), o = this.aY + this.yRadius * Math.sin(t);
    return new THREE.Vector2(r, o)
}, THREE.ArcCurve = function (e, t, i, r, o, a) {
    THREE.EllipseCurve.call(this, e, t, i, i, r, o, a)
}, THREE.ArcCurve.prototype = Object.create(THREE.EllipseCurve.prototype), THREE.LineCurve3 = THREE.Curve.create(function (e, t) {
    this.v1 = e, this.v2 = t
}, function (e) {
    var t = new THREE.Vector3;
    return t.subVectors(this.v2, this.v1), t.multiplyScalar(e), t.add(this.v1), t
}), THREE.QuadraticBezierCurve3 = THREE.Curve.create(function (e, t, i) {
    this.v0 = e, this.v1 = t, this.v2 = i
}, function (e) {
    var t, i, r;
    return t = THREE.Shape.Utils.b2(e, this.v0.x, this.v1.x, this.v2.x), i = THREE.Shape.Utils.b2(e, this.v0.y, this.v1.y, this.v2.y), r = THREE.Shape.Utils.b2(e, this.v0.z, this.v1.z, this.v2.z), new THREE.Vector3(t, i, r)
}), THREE.CubicBezierCurve3 = THREE.Curve.create(function (e, t, i, r) {
    this.v0 = e, this.v1 = t, this.v2 = i, this.v3 = r
}, function (e) {
    var t, i, r;
    return t = THREE.Shape.Utils.b3(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), i = THREE.Shape.Utils.b3(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y), r = THREE.Shape.Utils.b3(e, this.v0.z, this.v1.z, this.v2.z, this.v3.z), new THREE.Vector3(t, i, r)
}), THREE.SplineCurve3 = THREE.Curve.create(function (e) {
    this.points = void 0 == e ? [] : e
}, function (e) {
    var t, i, r, o = new THREE.Vector3, a = [], n = this.points;
    t = (n.length - 1) * e, i = Math.floor(t), r = t - i, a[0] = 0 == i ? i : i - 1, a[1] = i, a[2] = i > n.length - 2 ? n.length - 1 : i + 1, a[3] = i > n.length - 3 ? n.length - 1 : i + 2;
    var s = n[a[0]], h = n[a[1]], l = n[a[2]], c = n[a[3]];
    return o.x = THREE.Curve.Utils.interpolate(s.x, h.x, l.x, c.x, r), o.y = THREE.Curve.Utils.interpolate(s.y, h.y, l.y, c.y, r), o.z = THREE.Curve.Utils.interpolate(s.z, h.z, l.z, c.z, r), o
}), THREE.ClosedSplineCurve3 = THREE.Curve.create(function (e) {
    this.points = void 0 == e ? [] : e
}, function (e) {
    var t, i, r, o = new THREE.Vector3, a = [], n = this.points;
    return t = (n.length - 0) * e, i = Math.floor(t), r = t - i, i += i > 0 ? 0 : (Math.floor(Math.abs(i) / n.length) + 1) * n.length, a[0] = (i - 1) % n.length, a[1] = i % n.length, a[2] = (i + 1) % n.length, a[3] = (i + 2) % n.length, o.x = THREE.Curve.Utils.interpolate(n[a[0]].x, n[a[1]].x, n[a[2]].x, n[a[3]].x, r), o.y = THREE.Curve.Utils.interpolate(n[a[0]].y, n[a[1]].y, n[a[2]].y, n[a[3]].y, r), o.z = THREE.Curve.Utils.interpolate(n[a[0]].z, n[a[1]].z, n[a[2]].z, n[a[3]].z, r), o
}), THREE.AnimationHandler = function () {
    var e = [], t = {}, i = {};
    i.update = function (t) {
        for (var i = 0; i < e.length; i++) e[i].update(t)
    }, i.addToUpdate = function (t) {
        e.indexOf(t) === -1 && e.push(t)
    }, i.removeFromUpdate = function (t) {
        var i = e.indexOf(t);
        i !== -1 && e.splice(i, 1)
    }, i.add = function (e) {
        t[e.name], t[e.name] = e, o(e)
    }, i.get = function (e) {
        if ("string" == typeof e) return t[e] ? t[e] : null
    }, i.parse = function (e) {
        var t = [];
        if (e instanceof THREE.SkinnedMesh) for (var i = 0; i < e.bones.length; i++) t.push(e.bones[i]); else r(e, t);
        return t
    };
    var r = function (e, t) {
        t.push(e);
        for (var i = 0; i < e.children.length; i++) r(e.children[i], t)
    }, o = function (e) {
        if (e.initialized !== !0) {
            for (var t = 0; t < e.hierarchy.length; t++) {
                for (var i = 0; i < e.hierarchy[t].keys.length; i++) if (e.hierarchy[t].keys[i].time < 0 && (e.hierarchy[t].keys[i].time = 0), void 0 !== e.hierarchy[t].keys[i].rot && !(e.hierarchy[t].keys[i].rot instanceof THREE.Quaternion)) {
                    var r = e.hierarchy[t].keys[i].rot;
                    e.hierarchy[t].keys[i].rot = new THREE.Quaternion(r[0], r[1], r[2], r[3])
                }
                if (e.hierarchy[t].keys.length && void 0 !== e.hierarchy[t].keys[0].morphTargets) {
                    for (var o = {}, i = 0; i < e.hierarchy[t].keys.length; i++) for (var a = 0; a < e.hierarchy[t].keys[i].morphTargets.length; a++) {
                        var n = e.hierarchy[t].keys[i].morphTargets[a];
                        o[n] = -1
                    }
                    e.hierarchy[t].usedMorphTargets = o;
                    for (var i = 0; i < e.hierarchy[t].keys.length; i++) {
                        var s = {};
                        for (var n in o) {
                            for (var a = 0; a < e.hierarchy[t].keys[i].morphTargets.length; a++) if (e.hierarchy[t].keys[i].morphTargets[a] === n) {
                                s[n] = e.hierarchy[t].keys[i].morphTargetsInfluences[a];
                                break
                            }
                            a === e.hierarchy[t].keys[i].morphTargets.length && (s[n] = 0)
                        }
                        e.hierarchy[t].keys[i].morphTargetsInfluences = s
                    }
                }
                for (var i = 1; i < e.hierarchy[t].keys.length; i++) e.hierarchy[t].keys[i].time === e.hierarchy[t].keys[i - 1].time && (e.hierarchy[t].keys.splice(i, 1), i--);
                for (var i = 0; i < e.hierarchy[t].keys.length; i++) e.hierarchy[t].keys[i].index = i
            }
            var h = parseInt(e.length * e.fps, 10);
            e.JIT = {}, e.JIT.hierarchy = [];
            for (var t = 0; t < e.hierarchy.length; t++) e.JIT.hierarchy.push(new Array(h));
            e.initialized = !0
        }
    };
    return i.LINEAR = 0, i.CATMULLROM = 1, i.CATMULLROM_FORWARD = 2, i
}(), THREE.Animation = function (e, t, i) {
    this.root = e, this.data = THREE.AnimationHandler.get(t), this.hierarchy = THREE.AnimationHandler.parse(e), this.currentTime = 0, this.timeScale = 1, this.isPlaying = !1, this.isPaused = !0, this.loop = !0, this.interpolationType = void 0 !== i ? i : THREE.AnimationHandler.LINEAR, this.points = [], this.target = new THREE.Vector3
}, THREE.Animation.prototype.play = function (e, t) {
    if (this.isPlaying === !1) {
        this.isPlaying = !0, this.loop = void 0 === e || e, this.currentTime = void 0 !== t ? t : 0;
        var i, r, o = this.hierarchy.length;
        for (i = 0; i < o; i++) {
            r = this.hierarchy[i], r.matrixAutoUpdate = !0, void 0 === r.animationCache && (r.animationCache = {}, r.animationCache.prevKey = {
                pos: 0,
                rot: 0,
                scl: 0
            }, r.animationCache.nextKey = {
                pos: 0,
                rot: 0,
                scl: 0
            }, r.animationCache.originalMatrix = r instanceof THREE.Bone ? r.skinMatrix : r.matrix);
            var a = r.animationCache.prevKey, n = r.animationCache.nextKey;
            a.pos = this.data.hierarchy[i].keys[0], a.rot = this.data.hierarchy[i].keys[0], a.scl = this.data.hierarchy[i].keys[0], n.pos = this.getNextKeyWith("pos", i, 1), n.rot = this.getNextKeyWith("rot", i, 1), n.scl = this.getNextKeyWith("scl", i, 1)
        }
        this.update(0)
    }
    this.isPaused = !1, THREE.AnimationHandler.addToUpdate(this)
}, THREE.Animation.prototype.pause = function () {
    this.isPaused === !0 ? THREE.AnimationHandler.addToUpdate(this) : THREE.AnimationHandler.removeFromUpdate(this), this.isPaused = !this.isPaused
}, THREE.Animation.prototype.stop = function () {
    this.isPlaying = !1, this.isPaused = !1, THREE.AnimationHandler.removeFromUpdate(this)
}, THREE.Animation.prototype.update = function (e) {
    if (this.isPlaying !== !1) {
        var t, i, r, o, a, n, s, h, l, c, u, p, f, E, d = ["pos", "rot", "scl"];
        this.data.JIT.hierarchy;
        this.currentTime += e * this.timeScale, u = this.currentTime, c = this.currentTime = this.currentTime % this.data.length, parseInt(Math.min(c * this.data.fps, this.data.length * this.data.fps), 10);
        for (var m = 0, g = this.hierarchy.length; m < g; m++) {
            h = this.hierarchy[m], l = h.animationCache;
            for (var v = 0; v < 3; v++) {
                if (t = d[v], n = l.prevKey[t], s = l.nextKey[t], s.time <= u) {
                    if (c < u) {
                        if (!this.loop) return void this.stop();
                        for (n = this.data.hierarchy[m].keys[0], s = this.getNextKeyWith(t, m, 1); s.time < c;) n = s, s = this.getNextKeyWith(t, m, s.index + 1)
                    } else do {
                        n = s, s = this.getNextKeyWith(t, m, s.index + 1)
                    } while (s.time < c);
                    l.prevKey[t] = n, l.nextKey[t] = s
                }
                h.matrixAutoUpdate = !0, h.matrixWorldNeedsUpdate = !0, i = (c - n.time) / (s.time - n.time), o = n[t], a = s[t], (i < 0 || i > 1) && (i = i < 0 ? 0 : 1), "pos" === t ? (r = h.position, this.interpolationType === THREE.AnimationHandler.LINEAR ? (r.x = o[0] + (a[0] - o[0]) * i, r.y = o[1] + (a[1] - o[1]) * i, r.z = o[2] + (a[2] - o[2]) * i) : this.interpolationType !== THREE.AnimationHandler.CATMULLROM && this.interpolationType !== THREE.AnimationHandler.CATMULLROM_FORWARD || (this.points[0] = this.getPrevKeyWith("pos", m, n.index - 1).pos, this.points[1] = o, this.points[2] = a, this.points[3] = this.getNextKeyWith("pos", m, s.index + 1).pos, i = .33 * i + .33, p = this.interpolateCatmullRom(this.points, i), r.x = p[0], r.y = p[1], r.z = p[2], this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD && (f = this.interpolateCatmullRom(this.points, 1.01 * i), this.target.set(f[0], f[1], f[2]), this.target.sub(r), this.target.y = 0, this.target.normalize(), E = Math.atan2(this.target.x, this.target.z), h.rotation.set(0, E, 0)))) : "rot" === t ? THREE.Quaternion.slerp(o, a, h.quaternion, i) : "scl" === t && (r = h.scale, r.x = o[0] + (a[0] - o[0]) * i, r.y = o[1] + (a[1] - o[1]) * i, r.z = o[2] + (a[2] - o[2]) * i)
            }
        }
    }
}, THREE.Animation.prototype.interpolateCatmullRom = function (e, t) {
    var i, r, o, a, n, s, h, l, c, u = [], p = [];
    return i = (e.length - 1) * t, r = Math.floor(i), o = i - r, u[0] = 0 === r ? r : r - 1, u[1] = r, u[2] = r > e.length - 2 ? r : r + 1, u[3] = r > e.length - 3 ? r : r + 2, s = e[u[0]], h = e[u[1]], l = e[u[2]], c = e[u[3]], a = o * o, n = o * a, p[0] = this.interpolate(s[0], h[0], l[0], c[0], o, a, n), p[1] = this.interpolate(s[1], h[1], l[1], c[1], o, a, n), p[2] = this.interpolate(s[2], h[2], l[2], c[2], o, a, n), p
}, THREE.Animation.prototype.interpolate = function (e, t, i, r, o, a, n) {
    var s = .5 * (i - e), h = .5 * (r - t);
    return (2 * (t - i) + s + h) * n + (-3 * (t - i) - 2 * s - h) * a + s * o + t
}, THREE.Animation.prototype.getNextKeyWith = function (e, t, i) {
    var r = this.data.hierarchy[t].keys;
    for (this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? i = i < r.length - 1 ? i : r.length - 1 : i %= r.length; i < r.length; i++) if (void 0 !== r[i][e]) return r[i];
    return this.data.hierarchy[t].keys[0]
}, THREE.Animation.prototype.getPrevKeyWith = function (e, t, i) {
    var r = this.data.hierarchy[t].keys;
    for (i = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? i > 0 ? i : 0 : i >= 0 ? i : i + r.length; i >= 0; i--) if (void 0 !== r[i][e]) return r[i];
    return this.data.hierarchy[t].keys[r.length - 1]
}, THREE.KeyFrameAnimation = function (e, t, i) {
    this.root = e, this.data = THREE.AnimationHandler.get(t), this.hierarchy = THREE.AnimationHandler.parse(e), this.currentTime = 0, this.timeScale = .001, this.isPlaying = !1, this.isPaused = !0, this.loop = !0, this.JITCompile = void 0 === i || i;
    for (var r = 0, o = this.hierarchy.length; r < o; r++) {
        var a = this.data.hierarchy[r].keys, n = this.data.hierarchy[r].sids, s = this.hierarchy[r];
        if (a.length && n) {
            for (var h = 0; h < n.length; h++) {
                var l = n[h], c = this.getNextKeyWith(l, r, 0);
                c && c.apply(l)
            }
            s.matrixAutoUpdate = !1, this.data.hierarchy[r].node.updateMatrix(), s.matrixWorldNeedsUpdate = !0
        }
    }
}, THREE.KeyFrameAnimation.prototype.play = function (e, t) {
    if (!this.isPlaying) {
        this.isPlaying = !0, this.loop = void 0 === e || e, this.currentTime = void 0 !== t ? t : 0, this.startTimeMs = t, this.startTime = 1e7, this.endTime = -this.startTime;
        var i, r, o, a = this.hierarchy.length;
        for (i = 0; i < a; i++) {
            r = this.hierarchy[i], o = this.data.hierarchy[i], void 0 === o.animationCache && (o.animationCache = {}, o.animationCache.prevKey = null, o.animationCache.nextKey = null, o.animationCache.originalMatrix = r instanceof THREE.Bone ? r.skinMatrix : r.matrix);
            var n = this.data.hierarchy[i].keys;
            n.length && (o.animationCache.prevKey = n[0], o.animationCache.nextKey = n[1], this.startTime = Math.min(n[0].time, this.startTime), this.endTime = Math.max(n[n.length - 1].time, this.endTime))
        }
        this.update(0)
    }
    this.isPaused = !1, THREE.AnimationHandler.addToUpdate(this)
}, THREE.KeyFrameAnimation.prototype.pause = function () {
    this.isPaused ? THREE.AnimationHandler.addToUpdate(this) : THREE.AnimationHandler.removeFromUpdate(this), this.isPaused = !this.isPaused
}, THREE.KeyFrameAnimation.prototype.stop = function () {
    this.isPlaying = !1, this.isPaused = !1, THREE.AnimationHandler.removeFromUpdate(this);
    for (var e = 0; e < this.data.hierarchy.length; e++) {
        var t = this.hierarchy[e], i = this.data.hierarchy[e];
        if (void 0 !== i.animationCache) {
            var r = i.animationCache.originalMatrix;
            t instanceof THREE.Bone ? (r.copy(t.skinMatrix), t.skinMatrix = r) : (r.copy(t.matrix), t.matrix = r), delete i.animationCache
        }
    }
}, THREE.KeyFrameAnimation.prototype.update = function (e) {
    if (this.isPlaying) {
        var t, i, r, o, a, n, s, h, l = this.data.JIT.hierarchy;
        if (this.currentTime += e * this.timeScale, s = this.currentTime, n = this.currentTime = this.currentTime % this.data.length, n < this.startTimeMs && (n = this.currentTime = this.startTimeMs + n), a = parseInt(Math.min(n * this.data.fps, this.data.length * this.data.fps), 10), (h = n < s) && !this.loop) {
            for (var c = 0, u = this.hierarchy.length; c < u; c++) {
                var p = this.data.hierarchy[c].keys, f = this.data.hierarchy[c].sids, E = p.length - 1,
                    d = this.hierarchy[c];
                if (p.length) {
                    for (var m = 0; m < f.length; m++) {
                        var g = f[m], v = this.getPrevKeyWith(g, c, E);
                        v && v.apply(g)
                    }
                    this.data.hierarchy[c].node.updateMatrix(), d.matrixWorldNeedsUpdate = !0
                }
            }
            return void this.stop()
        }
        if (!(n < this.startTime)) {
            for (var c = 0, u = this.hierarchy.length; c < u; c++) {
                r = this.hierarchy[c], o = this.data.hierarchy[c];
                var p = o.keys, T = o.animationCache;
                if (this.JITCompile && void 0 !== l[c][a]) r instanceof THREE.Bone ? (r.skinMatrix = l[c][a], r.matrixWorldNeedsUpdate = !1) : (r.matrix = l[c][a], r.matrixWorldNeedsUpdate = !0); else if (p.length) {
                    if (this.JITCompile && T && (r instanceof THREE.Bone ? r.skinMatrix = T.originalMatrix : r.matrix = T.originalMatrix), t = T.prevKey, i = T.nextKey, t && i) {
                        if (i.time <= s) {
                            if (h && this.loop) for (t = p[0], i = p[1]; i.time < n;) t = i, i = p[t.index + 1]; else if (!h) for (var y = p.length - 1; i.time < n && i.index !== y;) t = i, i = p[t.index + 1];
                            T.prevKey = t, T.nextKey = i
                        }
                        i.time >= n ? t.interpolate(i, n) : t.interpolate(i, i.time)
                    }
                    this.data.hierarchy[c].node.updateMatrix(), r.matrixWorldNeedsUpdate = !0
                }
            }
            if (this.JITCompile && void 0 === l[0][a]) {
                this.hierarchy[0].updateMatrixWorld(!0);
                for (var c = 0; c < this.hierarchy.length; c++) this.hierarchy[c] instanceof THREE.Bone ? l[c][a] = this.hierarchy[c].skinMatrix.clone() : l[c][a] = this.hierarchy[c].matrix.clone()
            }
        }
    }
}, THREE.KeyFrameAnimation.prototype.getNextKeyWith = function (e, t, i) {
    var r = this.data.hierarchy[t].keys;
    for (i %= r.length; i < r.length; i++) if (r[i].hasTarget(e)) return r[i];
    return r[0]
}, THREE.KeyFrameAnimation.prototype.getPrevKeyWith = function (e, t, i) {
    var r = this.data.hierarchy[t].keys;
    for (i = i >= 0 ? i : i + r.length; i >= 0; i--) if (r[i].hasTarget(e)) return r[i];
    return r[r.length - 1]
}, THREE.CubeCamera = function (e, t, i) {
    THREE.Object3D.call(this);
    var r = new THREE.PerspectiveCamera(90, 1, e, t);
    r.up.set(0, -1, 0), r.lookAt(new THREE.Vector3(1, 0, 0)), this.add(r);
    var o = new THREE.PerspectiveCamera(90, 1, e, t);
    o.up.set(0, -1, 0), o.lookAt(new THREE.Vector3(-1, 0, 0)), this.add(o);
    var a = new THREE.PerspectiveCamera(90, 1, e, t);
    a.up.set(0, 0, 1), a.lookAt(new THREE.Vector3(0, 1, 0)), this.add(a);
    var n = new THREE.PerspectiveCamera(90, 1, e, t);
    n.up.set(0, 0, -1), n.lookAt(new THREE.Vector3(0, -1, 0)), this.add(n);
    var s = new THREE.PerspectiveCamera(90, 1, e, t);
    s.up.set(0, -1, 0), s.lookAt(new THREE.Vector3(0, 0, 1)), this.add(s);
    var h = new THREE.PerspectiveCamera(90, 1, e, t);
    h.up.set(0, -1, 0), h.lookAt(new THREE.Vector3(0, 0, -1)), this.add(h), this.renderTarget = new THREE.WebGLRenderTargetCube(i, i, {
        format: THREE.RGBFormat,
        magFilter: THREE.LinearFilter,
        minFilter: THREE.LinearFilter
    }), this.updateCubeMap = function (e, t) {
        var i = this.renderTarget, l = i.generateMipmaps;
        i.generateMipmaps = !1, i.activeCubeFace = 0, e.render(t, r, i), i.activeCubeFace = 1, e.render(t, o, i), i.activeCubeFace = 2, e.render(t, a, i), i.activeCubeFace = 3, e.render(t, n, i), i.activeCubeFace = 4, e.render(t, s, i), i.generateMipmaps = l, i.activeCubeFace = 5, e.render(t, h, i)
    }
}, THREE.CubeCamera.prototype = Object.create(THREE.Object3D.prototype), THREE.CombinedCamera = function (e, t, i, r, o, a, n) {
    THREE.Camera.call(this), this.fov = i, this.left = -e / 2, this.right = e / 2, this.top = t / 2, this.bottom = -t / 2, this.cameraO = new THREE.OrthographicCamera(e / -2, e / 2, t / 2, t / -2, a, n), this.cameraP = new THREE.PerspectiveCamera(i, e / t, r, o), this.zoom = 1, this.toPerspective()
}, THREE.CombinedCamera.prototype = Object.create(THREE.Camera.prototype), THREE.CombinedCamera.prototype.toPerspective = function () {
    this.near = this.cameraP.near, this.far = this.cameraP.far, this.cameraP.fov = this.fov / this.zoom, this.cameraP.updateProjectionMatrix(), this.projectionMatrix = this.cameraP.projectionMatrix, this.inPerspectiveMode = !0, this.inOrthographicMode = !1
}, THREE.CombinedCamera.prototype.toOrthographic = function () {
    var e = this.fov, t = this.cameraP.aspect, i = this.cameraP.near, r = this.cameraP.far, o = (i + r) / 2,
        a = Math.tan(e / 2) * o, n = 2 * a, s = n * t, h = s / 2;
    a /= this.zoom, h /= this.zoom, this.cameraO.left = -h, this.cameraO.right = h, this.cameraO.top = a, this.cameraO.bottom = -a, this.cameraO.updateProjectionMatrix(), this.near = this.cameraO.near, this.far = this.cameraO.far, this.projectionMatrix = this.cameraO.projectionMatrix, this.inPerspectiveMode = !1, this.inOrthographicMode = !0
}, THREE.CombinedCamera.prototype.setSize = function (e, t) {
    this.cameraP.aspect = e / t, this.left = -e / 2, this.right = e / 2, this.top = t / 2, this.bottom = -t / 2
}, THREE.CombinedCamera.prototype.setFov = function (e) {
    this.fov = e, this.inPerspectiveMode ? this.toPerspective() : this.toOrthographic()
}, THREE.CombinedCamera.prototype.updateProjectionMatrix = function () {
    this.inPerspectiveMode ? this.toPerspective() : (this.toPerspective(), this.toOrthographic())
}, THREE.CombinedCamera.prototype.setLens = function (e, t) {
    void 0 === t && (t = 24);
    var i = 2 * THREE.Math.radToDeg(Math.atan(t / (2 * e)));
    return this.setFov(i), i
}, THREE.CombinedCamera.prototype.setZoom = function (e) {
    this.zoom = e, this.inPerspectiveMode ? this.toPerspective() : this.toOrthographic()
}, THREE.CombinedCamera.prototype.toFrontView = function () {
    this.rotation.x = 0, this.rotation.y = 0, this.rotation.z = 0, this.rotationAutoUpdate = !1
}, THREE.CombinedCamera.prototype.toBackView = function () {
    this.rotation.x = 0, this.rotation.y = Math.PI, this.rotation.z = 0, this.rotationAutoUpdate = !1
}, THREE.CombinedCamera.prototype.toLeftView = function () {
    this.rotation.x = 0, this.rotation.y = -Math.PI / 2, this.rotation.z = 0, this.rotationAutoUpdate = !1
}, THREE.CombinedCamera.prototype.toRightView = function () {
    this.rotation.x = 0, this.rotation.y = Math.PI / 2, this.rotation.z = 0, this.rotationAutoUpdate = !1
}, THREE.CombinedCamera.prototype.toTopView = function () {
    this.rotation.x = -Math.PI / 2, this.rotation.y = 0, this.rotation.z = 0, this.rotationAutoUpdate = !1
}, THREE.CombinedCamera.prototype.toBottomView = function () {
    this.rotation.x = Math.PI / 2, this.rotation.y = 0, this.rotation.z = 0, this.rotationAutoUpdate = !1
}, THREE.CircleGeometry = function (e, t, i, r) {
    THREE.Geometry.call(this), this.radius = e = e || 50, this.segments = t = void 0 !== t ? Math.max(3, t) : 8, this.thetaStart = i = void 0 !== i ? i : 0, this.thetaLength = r = void 0 !== r ? r : 2 * Math.PI;
    var o, a = [], n = new THREE.Vector3, s = new THREE.Vector2(.5, .5);
    for (this.vertices.push(n), a.push(s), o = 0; o <= t; o++) {
        var h = new THREE.Vector3, l = i + o / t * r;
        h.x = e * Math.cos(l), h.y = e * Math.sin(l), this.vertices.push(h), a.push(new THREE.Vector2((h.x / e + 1) / 2, (h.y / e + 1) / 2))
    }
    var c = new THREE.Vector3(0, 0, 1);
    for (o = 1; o <= t; o++) {
        var u = o, p = o + 1;
        this.faces.push(new THREE.Face3(u, p, 0, [c.clone(), c.clone(), c.clone()])), this.faceVertexUvs[0].push([a[o].clone(), a[o + 1].clone(), s.clone()])
    }
    this.computeCentroids(), this.computeFaceNormals(), this.boundingSphere = new THREE.Sphere(new THREE.Vector3, e)
}, THREE.CircleGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.CubeGeometry = function (e, t, i, r, o, a) {
    function n(e, t, i, r, o, a, n, h) {
        var l, c, u, p = s.widthSegments, f = s.heightSegments, E = o / 2, d = a / 2, m = s.vertices.length;
        "x" === e && "y" === t || "y" === e && "x" === t ? l = "z" : "x" === e && "z" === t || "z" === e && "x" === t ? (l = "y", f = s.depthSegments) : ("z" === e && "y" === t || "y" === e && "z" === t) && (l = "x", p = s.depthSegments);
        var g = p + 1, v = f + 1, T = o / p, y = a / f, R = new THREE.Vector3;
        for (R[l] = n > 0 ? 1 : -1, u = 0; u < v; u++) for (c = 0; c < g; c++) {
            var x = new THREE.Vector3;
            x[e] = (c * T - E) * i, x[t] = (u * y - d) * r, x[l] = n, s.vertices.push(x)
        }
        for (u = 0; u < f; u++) for (c = 0; c < p; c++) {
            var H = c + g * u, _ = c + g * (u + 1), w = c + 1 + g * (u + 1), b = c + 1 + g * u,
                M = new THREE.Vector2(c / p, 1 - u / f), S = new THREE.Vector2(c / p, 1 - (u + 1) / f),
                A = new THREE.Vector2((c + 1) / p, 1 - (u + 1) / f), C = new THREE.Vector2((c + 1) / p, 1 - u / f),
                L = new THREE.Face3(H + m, _ + m, b + m);
            L.normal.copy(R), L.vertexNormals.push(R.clone(), R.clone(), R.clone()), L.materialIndex = h, s.faces.push(L), s.faceVertexUvs[0].push([M, S, C]), L = new THREE.Face3(_ + m, w + m, b + m), L.normal.copy(R), L.vertexNormals.push(R.clone(), R.clone(), R.clone()), L.materialIndex = h, s.faces.push(L), s.faceVertexUvs[0].push([S.clone(), A, C.clone()])
        }
    }

    THREE.Geometry.call(this);
    var s = this;
    this.width = e, this.height = t, this.depth = i, this.widthSegments = r || 1, this.heightSegments = o || 1, this.depthSegments = a || 1;
    var h = this.width / 2, l = this.height / 2, c = this.depth / 2;
    n("z", "y", -1, -1, this.depth, this.height, h, 0), n("z", "y", 1, -1, this.depth, this.height, -h, 1), n("x", "z", 1, 1, this.width, this.depth, l, 2), n("x", "z", 1, -1, this.width, this.depth, -l, 3), n("x", "y", 1, -1, this.width, this.height, c, 4), n("x", "y", -1, -1, this.width, this.height, -c, 5), this.computeCentroids(), this.mergeVertices()
}, THREE.CubeGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.CylinderGeometry = function (e, t, i, r, o, a) {
    THREE.Geometry.call(this), this.radiusTop = e = void 0 !== e ? e : 20, this.radiusBottom = t = void 0 !== t ? t : 20, this.height = i = void 0 !== i ? i : 100, this.radialSegments = r = r || 8, this.heightSegments = o = o || 1, this.openEnded = a = void 0 !== a && a;
    var n, s, h = i / 2, l = [], c = [];
    for (s = 0; s <= o; s++) {
        var u = [], p = [], f = s / o, E = f * (t - e) + e;
        for (n = 0; n <= r; n++) {
            var d = n / r, m = new THREE.Vector3;
            m.x = E * Math.sin(d * Math.PI * 2), m.y = -f * i + h, m.z = E * Math.cos(d * Math.PI * 2), this.vertices.push(m), u.push(this.vertices.length - 1), p.push(new THREE.Vector2(d, 1 - f))
        }
        l.push(u), c.push(p)
    }
    var g, v, T = (t - e) / i;
    for (n = 0; n < r; n++) for (0 !== e ? (g = this.vertices[l[0][n]].clone(), v = this.vertices[l[0][n + 1]].clone()) : (g = this.vertices[l[1][n]].clone(), v = this.vertices[l[1][n + 1]].clone()), g.setY(Math.sqrt(g.x * g.x + g.z * g.z) * T).normalize(), v.setY(Math.sqrt(v.x * v.x + v.z * v.z) * T).normalize(), s = 0; s < o; s++) {
        var y = l[s][n], R = l[s + 1][n], x = l[s + 1][n + 1], H = l[s][n + 1], _ = g.clone(), w = g.clone(),
            b = v.clone(), M = v.clone(), S = c[s][n].clone(), A = c[s + 1][n].clone(), C = c[s + 1][n + 1].clone(),
            L = c[s][n + 1].clone();
        this.faces.push(new THREE.Face3(y, R, H, [_, w, M])), this.faceVertexUvs[0].push([S, A, L]), this.faces.push(new THREE.Face3(R, x, H, [w.clone(), b, M.clone()])), this.faceVertexUvs[0].push([A.clone(), C, L.clone()])
    }
    if (a === !1 && e > 0) for (this.vertices.push(new THREE.Vector3(0, h, 0)), n = 0; n < r; n++) {
        var y = l[0][n], R = l[0][n + 1], x = this.vertices.length - 1, _ = new THREE.Vector3(0, 1, 0),
            w = new THREE.Vector3(0, 1, 0), b = new THREE.Vector3(0, 1, 0), S = c[0][n].clone(),
            A = c[0][n + 1].clone(), C = new THREE.Vector2(A.x, 0);
        this.faces.push(new THREE.Face3(y, R, x, [_, w, b])), this.faceVertexUvs[0].push([S, A, C])
    }
    if (a === !1 && t > 0) for (this.vertices.push(new THREE.Vector3(0, -h, 0)), n = 0; n < r; n++) {
        var y = l[s][n + 1], R = l[s][n], x = this.vertices.length - 1, _ = new THREE.Vector3(0, -1, 0),
            w = new THREE.Vector3(0, -1, 0), b = new THREE.Vector3(0, -1, 0), S = c[s][n + 1].clone(),
            A = c[s][n].clone(), C = new THREE.Vector2(A.x, 1);
        this.faces.push(new THREE.Face3(y, R, x, [_, w, b])), this.faceVertexUvs[0].push([S, A, C])
    }
    this.computeCentroids(), this.computeFaceNormals()
}, THREE.CylinderGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.ExtrudeGeometry = function (e, t) {
    if (void 0 === e) return void (e = []);
    THREE.Geometry.call(this), e = e instanceof Array ? e : [e], this.shapebb = e[e.length - 1].getBoundingBox(), this.addShapeList(e, t), this.computeCentroids(), this.computeFaceNormals()
}, THREE.ExtrudeGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.ExtrudeGeometry.prototype.addShapeList = function (e, t) {
    for (var i = e.length, r = 0; r < i; r++) {
        var o = e[r];
        this.addShape(o, t)
    }
}, THREE.ExtrudeGeometry.prototype.addShape = function (e, t) {
    function i(e, t, i) {
        return t.clone().multiplyScalar(i).add(e)
    }

    function r(e, t, i) {
        return a(e, t, i)
    }

    function o(e, t, i) {
        var r = Math.atan2(t.y - e.y, t.x - e.x), o = Math.atan2(i.y - e.y, i.x - e.x);
        r > o && (o += 2 * Math.PI);
        var a = (r + o) / 2, n = -Math.cos(a), s = -Math.sin(a);
        return new THREE.Vector2(n, s)
    }

    function a(e, t, i) {
        var r, a, n, s, h, l, c = THREE.ExtrudeGeometry.__v1, u = THREE.ExtrudeGeometry.__v2,
            p = THREE.ExtrudeGeometry.__v3, f = THREE.ExtrudeGeometry.__v4, E = THREE.ExtrudeGeometry.__v5,
            d = THREE.ExtrudeGeometry.__v6;
        return c.set(e.x - t.x, e.y - t.y), u.set(e.x - i.x, e.y - i.y), r = c.normalize(), a = u.normalize(), p.set(-r.y, r.x), f.set(a.y, -a.x), E.copy(e).add(p), d.copy(e).add(f), E.equals(d) ? f.clone() : (E.copy(t).add(p), d.copy(i).add(f), n = r.dot(f), s = d.sub(E).dot(f), (h = s / n) < 0 ? o(e, t, i) : (l = r.multiplyScalar(h).add(E), l.sub(e).clone()))
    }

    function n(e, t) {
        var i, r;
        for (q = e.length; --q >= 0;) {
            i = q, r = q - 1, r < 0 && (r = e.length - 1);
            var o = 0, a = R + 2 * v;
            for (o = 0; o < a; o++) {
                var n = W * o, s = W * (o + 1);
                l(t + i + n, t + r + n, t + r + s, t + i + s, e, o, a, i, r)
            }
        }
    }

    function s(e, t, i) {
        C.vertices.push(new THREE.Vector3(e, t, i))
    }

    function h(i, r, o, a) {
        i += L, r += L, o += L, C.faces.push(new THREE.Face3(i, r, o, null, null, _));
        var n = a ? b.generateBottomUV(C, e, t, i, r, o) : b.generateTopUV(C, e, t, i, r, o);
        C.faceVertexUvs[0].push(n)
    }

    function l(i, r, o, a, n, s, h, l, c) {
        i += L, r += L, o += L, a += L, C.faces.push(new THREE.Face3(i, r, a, null, null, w)), C.faces.push(new THREE.Face3(r, o, a, null, null, w));
        var u = b.generateSideWallUV(C, e, n, t, i, r, o, a, s, h, l, c);
        C.faceVertexUvs[0].push([u[0], u[1], u[3]]), C.faceVertexUvs[0].push([u[1], u[2], u[3]])
    }

    var c, u, p, f, E, d = void 0 !== t.amount ? t.amount : 100, m = void 0 !== t.bevelThickness ? t.bevelThickness : 6,
        g = void 0 !== t.bevelSize ? t.bevelSize : m - 2, v = void 0 !== t.bevelSegments ? t.bevelSegments : 3,
        T = void 0 === t.bevelEnabled || t.bevelEnabled, y = void 0 !== t.curveSegments ? t.curveSegments : 12,
        R = void 0 !== t.steps ? t.steps : 1, x = t.extrudePath, H = !1, _ = t.material, w = t.extrudeMaterial,
        b = void 0 !== t.UVGenerator ? t.UVGenerator : THREE.ExtrudeGeometry.WorldUVGenerator;
    this.shapebb;
    x && (c = x.getSpacedPoints(R), H = !0, T = !1, u = void 0 !== t.frames ? t.frames : new THREE.TubeGeometry.FrenetFrames(x, R, !1), p = new THREE.Vector3, f = new THREE.Vector3, E = new THREE.Vector3), T || (v = 0, m = 0, g = 0);
    var M, S, A, C = this, L = this.vertices.length, P = e.extractPoints(y), D = P.shape, F = P.holes,
        V = !THREE.Shape.Utils.isClockWise(D);
    if (V) {
        for (D = D.reverse(), S = 0, A = F.length; S < A; S++) M = F[S], THREE.Shape.Utils.isClockWise(M) && (F[S] = M.reverse());
        V = !1
    }
    var U = THREE.Shape.Utils.triangulateShape(D, F), z = D;
    for (S = 0, A = F.length; S < A; S++) M = F[S], D = D.concat(M);
    for (var B, N, O, I, k, G, W = D.length, j = U.length, X = (z.length, Math.PI, []), q = 0, Y = z.length, K = Y - 1, Z = q + 1; q < Y; q++, K++, Z++) {
        K === Y && (K = 0), Z === Y && (Z = 0);
        z[q], z[K], z[Z];
        X[q] = r(z[q], z[K], z[Z])
    }
    var Q, J = [], $ = X.concat();
    for (S = 0, A = F.length; S < A; S++) {
        for (M = F[S], Q = [], q = 0, Y = M.length, K = Y - 1, Z = q + 1; q < Y; q++, K++, Z++) K === Y && (K = 0), Z === Y && (Z = 0), Q[q] = r(M[q], M[K], M[Z]);
        J.push(Q), $ = $.concat(Q)
    }
    for (B = 0; B < v; B++) {
        for (O = B / v, I = m * (1 - O), N = g * Math.sin(O * Math.PI / 2), q = 0, Y = z.length; q < Y; q++) k = i(z[q], X[q], N), s(k.x, k.y, -I);
        for (S = 0, A = F.length; S < A; S++) for (M = F[S], Q = J[S], q = 0, Y = M.length; q < Y; q++) k = i(M[q], Q[q], N), s(k.x, k.y, -I)
    }
    for (N = g, q = 0; q < W; q++) k = T ? i(D[q], $[q], N) : D[q], H ? (f.copy(u.normals[0]).multiplyScalar(k.x), p.copy(u.binormals[0]).multiplyScalar(k.y), E.copy(c[0]).add(f).add(p), s(E.x, E.y, E.z)) : s(k.x, k.y, 0);
    var ee;
    for (ee = 1; ee <= R; ee++) for (q = 0; q < W; q++) k = T ? i(D[q], $[q], N) : D[q], H ? (f.copy(u.normals[ee]).multiplyScalar(k.x), p.copy(u.binormals[ee]).multiplyScalar(k.y), E.copy(c[ee]).add(f).add(p), s(E.x, E.y, E.z)) : s(k.x, k.y, d / R * ee);
    for (B = v - 1; B >= 0; B--) {
        for (O = B / v, I = m * (1 - O), N = g * Math.sin(O * Math.PI / 2), q = 0, Y = z.length; q < Y; q++) k = i(z[q], X[q], N), s(k.x, k.y, d + I);
        for (S = 0, A = F.length; S < A; S++) for (M = F[S], Q = J[S], q = 0, Y = M.length; q < Y; q++) k = i(M[q], Q[q], N), H ? s(k.x, k.y + c[R - 1].y, c[R - 1].x + I) : s(k.x, k.y, d + I)
    }
    !function () {
        if (T) {
            var e = 0, t = W * e;
            for (q = 0; q < j; q++) G = U[q], h(G[2] + t, G[1] + t, G[0] + t, !0);
            for (e = R + 2 * v, t = W * e, q = 0; q < j; q++) G = U[q], h(G[0] + t, G[1] + t, G[2] + t, !1)
        } else {
            for (q = 0; q < j; q++) G = U[q], h(G[2], G[1], G[0], !0);
            for (q = 0; q < j; q++) G = U[q], h(G[0] + W * R, G[1] + W * R, G[2] + W * R, !1)
        }
    }(), function () {
        var e = 0;
        for (n(z, e), e += z.length, S = 0, A = F.length; S < A; S++) M = F[S], n(M, e), e += M.length
    }()
}, THREE.ExtrudeGeometry.WorldUVGenerator = {
    generateTopUV: function (e, t, i, r, o, a) {
        var n = e.vertices[r].x, s = e.vertices[r].y, h = e.vertices[o].x, l = e.vertices[o].y, c = e.vertices[a].x,
            u = e.vertices[a].y;
        return [new THREE.Vector2(n, s), new THREE.Vector2(h, l), new THREE.Vector2(c, u)]
    }, generateBottomUV: function (e, t, i, r, o, a) {
        return this.generateTopUV(e, t, i, r, o, a)
    }, generateSideWallUV: function (e, t, i, r, o, a, n, s, h, l, c, u) {
        var p = e.vertices[o].x, f = e.vertices[o].y, E = e.vertices[o].z, d = e.vertices[a].x, m = e.vertices[a].y,
            g = e.vertices[a].z, v = e.vertices[n].x, T = e.vertices[n].y, y = e.vertices[n].z, R = e.vertices[s].x,
            x = e.vertices[s].y, H = e.vertices[s].z;
        return Math.abs(f - m) < .01 ? [new THREE.Vector2(p, 1 - E), new THREE.Vector2(d, 1 - g), new THREE.Vector2(v, 1 - y), new THREE.Vector2(R, 1 - H)] : [new THREE.Vector2(f, 1 - E), new THREE.Vector2(m, 1 - g), new THREE.Vector2(T, 1 - y), new THREE.Vector2(x, 1 - H)]
    }
}, THREE.ExtrudeGeometry.__v1 = new THREE.Vector2, THREE.ExtrudeGeometry.__v2 = new THREE.Vector2, THREE.ExtrudeGeometry.__v3 = new THREE.Vector2, THREE.ExtrudeGeometry.__v4 = new THREE.Vector2, THREE.ExtrudeGeometry.__v5 = new THREE.Vector2, THREE.ExtrudeGeometry.__v6 = new THREE.Vector2, THREE.ShapeGeometry = function (e, t) {
    THREE.Geometry.call(this), e instanceof Array == !1 && (e = [e]), this.shapebb = e[e.length - 1].getBoundingBox(), this.addShapeList(e, t), this.computeCentroids(), this.computeFaceNormals()
}, THREE.ShapeGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.ShapeGeometry.prototype.addShapeList = function (e, t) {
    for (var i = 0, r = e.length; i < r; i++) this.addShape(e[i], t);
    return this
}, THREE.ShapeGeometry.prototype.addShape = function (e, t) {
    void 0 === t && (t = {});
    var i, r, o, a = void 0 !== t.curveSegments ? t.curveSegments : 12, n = t.material,
        s = void 0 === t.UVGenerator ? THREE.ExtrudeGeometry.WorldUVGenerator : t.UVGenerator,
        h = (this.shapebb, this.vertices.length), l = e.extractPoints(a), c = l.shape, u = l.holes,
        p = !THREE.Shape.Utils.isClockWise(c);
    if (p) {
        for (c = c.reverse(), i = 0, r = u.length; i < r; i++) o = u[i], THREE.Shape.Utils.isClockWise(o) && (u[i] = o.reverse());
        p = !1
    }
    var f = THREE.Shape.Utils.triangulateShape(c, u), E = c;
    for (i = 0, r = u.length; i < r; i++) o = u[i], c = c.concat(o);
    var d, m, g = c.length, v = f.length;
    E.length;
    for (i = 0; i < g; i++) d = c[i], this.vertices.push(new THREE.Vector3(d.x, d.y, 0));
    for (i = 0; i < v; i++) {
        m = f[i];
        var T = m[0] + h, y = m[1] + h, R = m[2] + h;
        this.faces.push(new THREE.Face3(T, y, R, null, null, n)), this.faceVertexUvs[0].push(s.generateBottomUV(this, e, t, T, y, R))
    }
}, THREE.LatheGeometry = function (e, t, i, r) {
    THREE.Geometry.call(this), t = t || 12, i = i || 0, r = r || 2 * Math.PI;
    for (var o = 1 / (e.length - 1), a = 1 / t, n = 0, s = t; n <= s; n++) for (var h = i + n * a * r, l = Math.cos(h), c = Math.sin(h), u = 0, p = e.length; u < p; u++) {
        var f = e[u], E = new THREE.Vector3;
        E.x = l * f.x - c * f.y, E.y = c * f.x + l * f.y, E.z = f.z, this.vertices.push(E)
    }
    for (var d = e.length, n = 0, s = t; n < s; n++) for (var u = 0, p = e.length - 1; u < p; u++) {
        var m = u + d * n, g = m, v = m + d, l = m + 1 + d, T = m + 1, y = n * a, R = u * o, x = y + a, H = R + o;
        this.faces.push(new THREE.Face3(g, v, T)), this.faceVertexUvs[0].push([new THREE.Vector2(y, R), new THREE.Vector2(x, R), new THREE.Vector2(y, H)]), this.faces.push(new THREE.Face3(v, l, T)), this.faceVertexUvs[0].push([new THREE.Vector2(x, R), new THREE.Vector2(x, H), new THREE.Vector2(y, H)])
    }
    this.mergeVertices(), this.computeCentroids(), this.computeFaceNormals(), this.computeVertexNormals()
}, THREE.LatheGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.PlaneGeometry = function (e, t, i, r) {
    THREE.Geometry.call(this), this.width = e, this.height = t, this.widthSegments = i || 1, this.heightSegments = r || 1;
    var o, a, n = e / 2, s = t / 2, h = this.widthSegments, l = this.heightSegments, c = h + 1, u = l + 1,
        p = this.width / h, f = this.height / l, E = new THREE.Vector3(0, 0, 1);
    for (a = 0; a < u; a++) for (o = 0; o < c; o++) {
        var d = o * p - n, m = a * f - s;
        this.vertices.push(new THREE.Vector3(d, -m, 0))
    }
    for (a = 0; a < l; a++) for (o = 0; o < h; o++) {
        var g = o + c * a, v = o + c * (a + 1), T = o + 1 + c * (a + 1), y = o + 1 + c * a,
            R = new THREE.Vector2(o / h, 1 - a / l), x = new THREE.Vector2(o / h, 1 - (a + 1) / l),
            H = new THREE.Vector2((o + 1) / h, 1 - (a + 1) / l), _ = new THREE.Vector2((o + 1) / h, 1 - a / l),
            w = new THREE.Face3(g, v, y);
        w.normal.copy(E), w.vertexNormals.push(E.clone(), E.clone(), E.clone()), this.faces.push(w), this.faceVertexUvs[0].push([R, x, _]), w = new THREE.Face3(v, T, y), w.normal.copy(E), w.vertexNormals.push(E.clone(), E.clone(), E.clone()), this.faces.push(w), this.faceVertexUvs[0].push([x.clone(), H, _.clone()])
    }
    this.computeCentroids()
}, THREE.PlaneGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.RingGeometry = function (e, t, i, r, o, a) {
    THREE.Geometry.call(this), e = e || 0, t = t || 50, o = void 0 !== o ? o : 0, a = void 0 !== a ? a : 2 * Math.PI, i = void 0 !== i ? Math.max(3, i) : 8, r = void 0 !== r ? Math.max(3, r) : 8;
    var n, s, h = [], l = e, c = (t - e) / r;
    for (n = 0; n <= r; n++) {
        for (s = 0; s <= i; s++) {
            var u = new THREE.Vector3, p = o + s / i * a;
            u.x = l * Math.cos(p), u.y = l * Math.sin(p), this.vertices.push(u), h.push(new THREE.Vector2((u.x / t + 1) / 2, (u.y / t + 1) / 2))
        }
        l += c
    }
    var f = new THREE.Vector3(0, 0, 1);
    for (n = 0; n < r; n++) {
        var E = n * i;
        for (s = 0; s <= i; s++) {
            var p = s + E, d = p + n, m = p + i + n, g = p + i + 1 + n;
            this.faces.push(new THREE.Face3(d, m, g, [f.clone(), f.clone(), f.clone()])), this.faceVertexUvs[0].push([h[d].clone(), h[m].clone(), h[g].clone()]), d = p + n, m = p + i + 1 + n, g = p + 1 + n, this.faces.push(new THREE.Face3(d, m, g, [f.clone(), f.clone(), f.clone()])), this.faceVertexUvs[0].push([h[d].clone(), h[m].clone(), h[g].clone()])
        }
    }
    this.computeCentroids(), this.computeFaceNormals(), this.boundingSphere = new THREE.Sphere(new THREE.Vector3, l)
}, THREE.RingGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.SphereGeometry = function (e, t, i, r, o, a, n) {
    THREE.Geometry.call(this), this.radius = e = e || 50, this.widthSegments = t = Math.max(3, Math.floor(t) || 8), this.heightSegments = i = Math.max(2, Math.floor(i) || 6), this.phiStart = r = void 0 !== r ? r : 0, this.phiLength = o = void 0 !== o ? o : 2 * Math.PI, this.thetaStart = a = void 0 !== a ? a : 0, this.thetaLength = n = void 0 !== n ? n : Math.PI;
    var s, h, l = [], c = [];
    for (h = 0; h <= i; h++) {
        var u = [], p = [];
        for (s = 0; s <= t; s++) {
            var f = s / t, E = h / i, d = new THREE.Vector3;
            d.x = -e * Math.cos(r + f * o) * Math.sin(a + E * n), d.y = e * Math.cos(a + E * n), d.z = e * Math.sin(r + f * o) * Math.sin(a + E * n), this.vertices.push(d), u.push(this.vertices.length - 1), p.push(new THREE.Vector2(f, 1 - E))
        }
        l.push(u), c.push(p)
    }
    for (h = 0; h < this.heightSegments; h++) for (s = 0; s < this.widthSegments; s++) {
        var m = l[h][s + 1], g = l[h][s], v = l[h + 1][s], T = l[h + 1][s + 1],
            y = this.vertices[m].clone().normalize(), R = this.vertices[g].clone().normalize(),
            x = this.vertices[v].clone().normalize(), H = this.vertices[T].clone().normalize(), _ = c[h][s + 1].clone(),
            w = c[h][s].clone(), b = c[h + 1][s].clone(), M = c[h + 1][s + 1].clone();
        Math.abs(this.vertices[m].y) === this.radius ? (_.x = (_.x + w.x) / 2, this.faces.push(new THREE.Face3(m, v, T, [y, x, H])), this.faceVertexUvs[0].push([_, b, M])) : Math.abs(this.vertices[v].y) === this.radius ? (b.x = (b.x + M.x) / 2, this.faces.push(new THREE.Face3(m, g, v, [y, R, x])), this.faceVertexUvs[0].push([_, w, b])) : (this.faces.push(new THREE.Face3(m, g, T, [y, R, H])), this.faceVertexUvs[0].push([_, w, M]), this.faces.push(new THREE.Face3(g, v, T, [R.clone(), x, H.clone()])), this.faceVertexUvs[0].push([w.clone(), b, M.clone()]))
    }
    this.computeCentroids(), this.computeFaceNormals(), this.boundingSphere = new THREE.Sphere(new THREE.Vector3, e)
}, THREE.SphereGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.TextGeometry = function (e, t) {
    t = t || {};
    var i = THREE.FontUtils.generateShapes(e, t);
    t.amount = void 0 !== t.height ? t.height : 50, void 0 === t.bevelThickness && (t.bevelThickness = 10), void 0 === t.bevelSize && (t.bevelSize = 8), void 0 === t.bevelEnabled && (t.bevelEnabled = !1), THREE.ExtrudeGeometry.call(this, i, t)
}, THREE.TextGeometry.prototype = Object.create(THREE.ExtrudeGeometry.prototype), THREE.TorusGeometry = function (e, t, i, r, o) {
    THREE.Geometry.call(this);
    this.radius = e || 100, this.tube = t || 40, this.radialSegments = i || 8, this.tubularSegments = r || 6, this.arc = o || 2 * Math.PI;
    for (var a = new THREE.Vector3, n = [], s = [], h = 0; h <= this.radialSegments; h++) for (var l = 0; l <= this.tubularSegments; l++) {
        var c = l / this.tubularSegments * this.arc, u = h / this.radialSegments * Math.PI * 2;
        a.x = this.radius * Math.cos(c), a.y = this.radius * Math.sin(c);
        var p = new THREE.Vector3;
        p.x = (this.radius + this.tube * Math.cos(u)) * Math.cos(c), p.y = (this.radius + this.tube * Math.cos(u)) * Math.sin(c), p.z = this.tube * Math.sin(u), this.vertices.push(p), n.push(new THREE.Vector2(l / this.tubularSegments, h / this.radialSegments)), s.push(p.clone().sub(a).normalize())
    }
    for (var h = 1; h <= this.radialSegments; h++) for (var l = 1; l <= this.tubularSegments; l++) {
        var f = (this.tubularSegments + 1) * h + l - 1, E = (this.tubularSegments + 1) * (h - 1) + l - 1,
            d = (this.tubularSegments + 1) * (h - 1) + l, m = (this.tubularSegments + 1) * h + l,
            g = new THREE.Face3(f, E, m, [s[f], s[E], s[m]]);
        g.normal.add(s[f]), g.normal.add(s[E]), g.normal.add(s[m]), g.normal.normalize(), this.faces.push(g), this.faceVertexUvs[0].push([n[f].clone(), n[E].clone(), n[m].clone()]), g = new THREE.Face3(E, d, m, [s[E], s[d], s[m]]), g.normal.add(s[E]), g.normal.add(s[d]), g.normal.add(s[m]), g.normal.normalize(), this.faces.push(g), this.faceVertexUvs[0].push([n[E].clone(), n[d].clone(), n[m].clone()])
    }
    this.computeCentroids()
}, THREE.TorusGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.TorusKnotGeometry = function (e, t, i, r, o, a, n) {
    function s(e, t, i, r, o) {
        var a = Math.cos(e), n = Math.sin(e), s = t / i * e, h = Math.cos(s), l = r * (2 + h) * .5 * a,
            c = r * (2 + h) * n * .5, u = o * r * Math.sin(s) * .5;
        return new THREE.Vector3(l, c, u)
    }

    THREE.Geometry.call(this);
    var h = this;
    this.radius = e || 100, this.tube = t || 40, this.radialSegments = i || 64, this.tubularSegments = r || 8, this.p = o || 2, this.q = a || 3, this.heightScale = n || 1, this.grid = new Array(this.radialSegments);
    for (var l = new THREE.Vector3, c = new THREE.Vector3, u = new THREE.Vector3, p = 0; p < this.radialSegments; ++p) {
        this.grid[p] = new Array(this.tubularSegments);
        var f = p / this.radialSegments * 2 * this.p * Math.PI, E = s(f, this.q, this.p, this.radius, this.heightScale),
            d = s(f + .01, this.q, this.p, this.radius, this.heightScale);
        l.subVectors(d, E), c.addVectors(d, E), u.crossVectors(l, c), c.crossVectors(u, l), u.normalize(), c.normalize();
        for (var m = 0; m < this.tubularSegments; ++m) {
            var g = m / this.tubularSegments * 2 * Math.PI, v = -this.tube * Math.cos(g), T = this.tube * Math.sin(g),
                y = new THREE.Vector3;
            y.x = E.x + v * c.x + T * u.x, y.y = E.y + v * c.y + T * u.y, y.z = E.z + v * c.z + T * u.z, this.grid[p][m] = h.vertices.push(y) - 1
        }
    }
    for (var p = 0; p < this.radialSegments; ++p) for (var m = 0; m < this.tubularSegments; ++m) {
        var R = (p + 1) % this.radialSegments, x = (m + 1) % this.tubularSegments, H = this.grid[p][m],
            _ = this.grid[R][m], w = this.grid[R][x], b = this.grid[p][x],
            M = new THREE.Vector2(p / this.radialSegments, m / this.tubularSegments),
            S = new THREE.Vector2((p + 1) / this.radialSegments, m / this.tubularSegments),
            A = new THREE.Vector2((p + 1) / this.radialSegments, (m + 1) / this.tubularSegments),
            C = new THREE.Vector2(p / this.radialSegments, (m + 1) / this.tubularSegments);
        this.faces.push(new THREE.Face3(H, _, b)), this.faceVertexUvs[0].push([M, S, C]), this.faces.push(new THREE.Face3(_, w, b)), this.faceVertexUvs[0].push([S.clone(), A, C.clone()])
    }
    this.computeCentroids(), this.computeFaceNormals(), this.computeVertexNormals()
}, THREE.TorusKnotGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.TubeGeometry = function (e, t, i, r, o) {
    THREE.Geometry.call(this), this.path = e, this.segments = t || 64, this.radius = i || 1, this.radialSegments = r || 8, this.closed = o || !1, this.grid = [];
    var a, n, s, h, l, c, u, p, f, E, d, m, g, v, T, y, R, x, H, _ = this, w = this.segments + 1, b = new THREE.Vector3,
        M = new THREE.TubeGeometry.FrenetFrames(this.path, this.segments, this.closed), S = M.tangents, A = M.normals,
        C = M.binormals;
    for (this.tangents = S, this.normals = A, this.binormals = C, p = 0; p < w; p++) for (this.grid[p] = [], s = p / (w - 1), u = e.getPointAt(s), S[p], a = A[p], n = C[p], f = 0; f < this.radialSegments; f++) h = f / this.radialSegments * 2 * Math.PI, l = -this.radius * Math.cos(h), c = this.radius * Math.sin(h), b.copy(u), b.x += l * a.x + c * n.x, b.y += l * a.y + c * n.y, b.z += l * a.z + c * n.z, this.grid[p][f] = function (e, t, i) {
        return _.vertices.push(new THREE.Vector3(e, t, i)) - 1
    }(b.x, b.y, b.z);
    for (p = 0; p < this.segments; p++) for (f = 0; f < this.radialSegments; f++) E = this.closed ? (p + 1) % this.segments : p + 1, d = (f + 1) % this.radialSegments, m = this.grid[p][f], g = this.grid[E][f], v = this.grid[E][d], T = this.grid[p][d], y = new THREE.Vector2(p / this.segments, f / this.radialSegments), R = new THREE.Vector2((p + 1) / this.segments, f / this.radialSegments), x = new THREE.Vector2((p + 1) / this.segments, (f + 1) / this.radialSegments), H = new THREE.Vector2(p / this.segments, (f + 1) / this.radialSegments), this.faces.push(new THREE.Face3(m, g, T)), this.faceVertexUvs[0].push([y, R, H]), this.faces.push(new THREE.Face3(g, v, T)), this.faceVertexUvs[0].push([R.clone(), x, H.clone()]);
    this.computeCentroids(), this.computeFaceNormals(), this.computeVertexNormals()
}, THREE.TubeGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.TubeGeometry.FrenetFrames = function (e, t, i) {
    var r, o, a, n, s, h, l, c = (new THREE.Vector3, new THREE.Vector3), u = (new THREE.Vector3, []), p = [], f = [],
        E = new THREE.Vector3, d = new THREE.Matrix4, m = t + 1, g = 1e-4;
    for (this.tangents = u, this.normals = p, this.binormals = f, h = 0; h < m; h++) l = h / (m - 1), u[h] = e.getTangentAt(l), u[h].normalize();
    for (function () {
        p[0] = new THREE.Vector3, f[0] = new THREE.Vector3, o = Number.MAX_VALUE, a = Math.abs(u[0].x), n = Math.abs(u[0].y), s = Math.abs(u[0].z), a <= o && (o = a, c.set(1, 0, 0)), n <= o && (o = n, c.set(0, 1, 0)), s <= o && c.set(0, 0, 1), E.crossVectors(u[0], c).normalize(), p[0].crossVectors(u[0], E), f[0].crossVectors(u[0], p[0])
    }(), h = 1; h < m; h++) p[h] = p[h - 1].clone(), f[h] = f[h - 1].clone(), E.crossVectors(u[h - 1], u[h]), E.length() > g && (E.normalize(), r = Math.acos(THREE.Math.clamp(u[h - 1].dot(u[h]), -1, 1)), p[h].applyMatrix4(d.makeRotationAxis(E, r))), f[h].crossVectors(u[h], p[h]);
    if (i) for (r = Math.acos(THREE.Math.clamp(p[0].dot(p[m - 1]), -1, 1)), r /= m - 1, u[0].dot(E.crossVectors(p[0], p[m - 1])) > 0 && (r = -r), h = 1; h < m; h++) p[h].applyMatrix4(d.makeRotationAxis(u[h], r * h)), f[h].crossVectors(u[h], p[h])
}, THREE.PolyhedronGeometry = function (e, t, i, r) {
    function o(e) {
        var t = e.normalize().clone();
        t.index = l.vertices.push(t) - 1;
        var i = n(e) / 2 / Math.PI + .5, r = s(e) / Math.PI + .5;
        return t.uv = new THREE.Vector2(i, 1 - r), t
    }

    function a(e, t, i) {
        var r = new THREE.Face3(e.index, t.index, i.index, [e.clone(), t.clone(), i.clone()]);
        r.centroid.add(e).add(t).add(i).divideScalar(3), l.faces.push(r);
        var o = n(r.centroid);
        l.faceVertexUvs[0].push([h(e.uv, e, o), h(t.uv, t, o), h(i.uv, i, o)])
    }

    function n(e) {
        return Math.atan2(e.z, -e.x)
    }

    function s(e) {
        return Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z))
    }

    function h(e, t, i) {
        return i < 0 && 1 === e.x && (e = new THREE.Vector2(e.x - 1, e.y)), 0 === t.x && 0 === t.z && (e = new THREE.Vector2(i / 2 / Math.PI + .5, e.y)), e.clone()
    }

    THREE.Geometry.call(this), i = i || 1, r = r || 0;
    for (var l = this, c = 0, u = e.length; c < u; c++) o(new THREE.Vector3(e[c][0], e[c][1], e[c][2]));
    for (var p = this.vertices, f = [], c = 0, u = t.length; c < u; c++) {
        var E = p[t[c][0]], d = p[t[c][1]], m = p[t[c][2]];
        f[c] = new THREE.Face3(E.index, d.index, m.index, [E.clone(), d.clone(), m.clone()])
    }
    for (var c = 0, u = f.length; c < u; c++) !function (e, t) {
        for (var i = Math.pow(2, t), r = (Math.pow(4, t), o(l.vertices[e.a])), n = o(l.vertices[e.b]), s = o(l.vertices[e.c]), h = [], c = 0; c <= i; c++) {
            h[c] = [];
            for (var u = o(r.clone().lerp(s, c / i)), p = o(n.clone().lerp(s, c / i)), f = i - c, E = 0; E <= f; E++) h[c][E] = 0 == E && c == i ? u : o(u.clone().lerp(p, E / f))
        }
        for (var c = 0; c < i; c++) for (var E = 0; E < 2 * (i - c) - 1; E++) {
            var d = Math.floor(E / 2);
            E % 2 == 0 ? a(h[c][d + 1], h[c + 1][d], h[c][d]) : a(h[c][d + 1], h[c + 1][d + 1], h[c + 1][d])
        }
    }(f[c], r);
    for (var c = 0, u = this.faceVertexUvs[0].length; c < u; c++) {
        var g = this.faceVertexUvs[0][c], v = g[0].x, T = g[1].x, y = g[2].x, R = Math.max(v, Math.max(T, y)),
            x = Math.min(v, Math.min(T, y));
        R > .9 && x < .1 && (v < .2 && (g[0].x += 1), T < .2 && (g[1].x += 1), y < .2 && (g[2].x += 1))
    }
    for (var c = 0, u = this.vertices.length; c < u; c++) this.vertices[c].multiplyScalar(i);
    this.mergeVertices(), this.computeCentroids(), this.computeFaceNormals(), this.boundingSphere = new THREE.Sphere(new THREE.Vector3, i)
}, THREE.PolyhedronGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.IcosahedronGeometry = function (e, t) {
    this.radius = e, this.detail = t;
    var i = (1 + Math.sqrt(5)) / 2,
        r = [[-1, i, 0], [1, i, 0], [-1, -i, 0], [1, -i, 0], [0, -1, i], [0, 1, i], [0, -1, -i], [0, 1, -i], [i, 0, -1], [i, 0, 1], [-i, 0, -1], [-i, 0, 1]],
        o = [[0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11], [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8], [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9], [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]];
    THREE.PolyhedronGeometry.call(this, r, o, e, t)
}, THREE.IcosahedronGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.OctahedronGeometry = function (e, t) {
    var i = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]],
        r = [[0, 2, 4], [0, 4, 3], [0, 3, 5], [0, 5, 2], [1, 2, 5], [1, 5, 3], [1, 3, 4], [1, 4, 2]];
    THREE.PolyhedronGeometry.call(this, i, r, e, t)
}, THREE.OctahedronGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.TetrahedronGeometry = function (e, t) {
    var i = [[1, 1, 1], [-1, -1, 1], [-1, 1, -1], [1, -1, -1]], r = [[2, 1, 0], [0, 3, 2], [1, 3, 0], [2, 3, 1]];
    THREE.PolyhedronGeometry.call(this, i, r, e, t)
}, THREE.TetrahedronGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.ParametricGeometry = function (e, t, i) {
    THREE.Geometry.call(this);
    var r, o, a, n, s, h = this.vertices, l = this.faces, c = this.faceVertexUvs[0], u = t + 1;
    for (r = 0; r <= i; r++) for (s = r / i, o = 0; o <= t; o++) n = o / t, a = e(n, s), h.push(a);
    var p, f, E, d, m, g, v, T;
    for (r = 0; r < i; r++) for (o = 0; o < t; o++) p = r * u + o, f = r * u + o + 1, E = (r + 1) * u + o + 1, d = (r + 1) * u + o, m = new THREE.Vector2(o / t, r / i), g = new THREE.Vector2((o + 1) / t, r / i), v = new THREE.Vector2((o + 1) / t, (r + 1) / i), T = new THREE.Vector2(o / t, (r + 1) / i), l.push(new THREE.Face3(p, f, d)), c.push([m, g, T]), l.push(new THREE.Face3(f, E, d)), c.push([g.clone(), v, T.clone()]);
    this.computeCentroids(), this.computeFaceNormals(), this.computeVertexNormals()
},THREE.ParametricGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.AxisHelper = function (e) {
    e = e || 1;
    var t = new THREE.Geometry;
    t.vertices.push(new THREE.Vector3, new THREE.Vector3(e, 0, 0), new THREE.Vector3, new THREE.Vector3(0, e, 0), new THREE.Vector3, new THREE.Vector3(0, 0, e)), t.colors.push(new THREE.Color(16711680), new THREE.Color(16755200), new THREE.Color(65280), new THREE.Color(11206400), new THREE.Color(255), new THREE.Color(43775));
    var i = new THREE.LineBasicMaterial({vertexColors: THREE.VertexColors});
    THREE.Line.call(this, t, i, THREE.LinePieces)
},THREE.AxisHelper.prototype = Object.create(THREE.Line.prototype),THREE.ArrowHelper = function (e, t, i, r) {
    THREE.Object3D.call(this), void 0 === r && (r = 16776960), void 0 === i && (i = 1), this.position = t;
    var o = new THREE.Geometry;
    o.vertices.push(new THREE.Vector3(0, 0, 0)), o.vertices.push(new THREE.Vector3(0, 1, 0)), this.line = new THREE.Line(o, new THREE.LineBasicMaterial({color: r})), this.line.matrixAutoUpdate = !1, this.add(this.line);
    var a = new THREE.CylinderGeometry(0, .05, .25, 5, 1);
    a.applyMatrix((new THREE.Matrix4).makeTranslation(0, .875, 0)), this.cone = new THREE.Mesh(a, new THREE.MeshBasicMaterial({color: r})), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(e), this.setLength(i)
},THREE.ArrowHelper.prototype = Object.create(THREE.Object3D.prototype),THREE.ArrowHelper.prototype.setDirection = function () {
    var e, t = new THREE.Vector3;
    return function (i) {
        i.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : i.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (t.set(i.z, 0, -i.x).normalize(), e = Math.acos(i.y), this.quaternion.setFromAxisAngle(t, e))
    }
}(),THREE.ArrowHelper.prototype.setLength = function (e) {
    this.scale.set(e, e, e)
},THREE.ArrowHelper.prototype.setColor = function (e) {
    this.line.material.color.setHex(e), this.cone.material.color.setHex(e)
},THREE.BoxHelper = function (e) {
    var t = [new THREE.Vector3(1, 1, 1), new THREE.Vector3(-1, 1, 1), new THREE.Vector3(-1, -1, 1), new THREE.Vector3(1, -1, 1), new THREE.Vector3(1, 1, -1), new THREE.Vector3(-1, 1, -1), new THREE.Vector3(-1, -1, -1), new THREE.Vector3(1, -1, -1)];
    this.vertices = t;
    var i = new THREE.Geometry;
    i.vertices.push(t[0], t[1], t[1], t[2], t[2], t[3], t[3], t[0], t[4], t[5], t[5], t[6], t[6], t[7], t[7], t[4], t[0], t[4], t[1], t[5], t[2], t[6], t[3], t[7]), THREE.Line.call(this, i, new THREE.LineBasicMaterial({color: 16776960}), THREE.LinePieces), void 0 !== e && this.update(e)
},THREE.BoxHelper.prototype = Object.create(THREE.Line.prototype),THREE.BoxHelper.prototype.update = function (e) {
    var t = e.geometry;
    null === t.boundingBox && t.computeBoundingBox();
    var i = t.boundingBox.min, r = t.boundingBox.max, o = this.vertices;
    o[0].set(r.x, r.y, r.z), o[1].set(i.x, r.y, r.z), o[2].set(i.x, i.y, r.z), o[3].set(r.x, i.y, r.z), o[4].set(r.x, r.y, i.z), o[5].set(i.x, r.y, i.z), o[6].set(i.x, i.y, i.z), o[7].set(r.x, i.y, i.z), this.geometry.computeBoundingSphere(), this.geometry.verticesNeedUpdate = !0, this.matrixAutoUpdate = !1, this.matrixWorld = e.matrixWorld
},THREE.BoundingBoxHelper = function (e, t) {
    var i = t || 8947848;
    this.object = e, this.box = new THREE.Box3, THREE.Mesh.call(this, new THREE.CubeGeometry(1, 1, 1), new THREE.MeshBasicMaterial({
        color: i,
        wireframe: !0
    }))
},THREE.BoundingBoxHelper.prototype = Object.create(THREE.Mesh.prototype),THREE.BoundingBoxHelper.prototype.update = function () {
    this.box.setFromObject(this.object), this.box.size(this.scale), this.box.center(this.position)
},THREE.CameraHelper = function (e) {
    function t(e, t, r) {
        i(e, r), i(t, r)
    }

    function i(e, t) {
        r.vertices.push(new THREE.Vector3), r.colors.push(new THREE.Color(t)), void 0 === a[e] && (a[e] = []), a[e].push(r.vertices.length - 1)
    }

    var r = new THREE.Geometry, o = new THREE.LineBasicMaterial({color: 16777215, vertexColors: THREE.FaceColors}),
        a = {};
    t("n1", "n2", 16755200), t("n2", "n4", 16755200), t("n4", "n3", 16755200), t("n3", "n1", 16755200), t("f1", "f2", 16755200), t("f2", "f4", 16755200), t("f4", "f3", 16755200), t("f3", "f1", 16755200), t("n1", "f1", 16755200), t("n2", "f2", 16755200), t("n3", "f3", 16755200), t("n4", "f4", 16755200), t("p", "n1", 16711680), t("p", "n2", 16711680), t("p", "n3", 16711680), t("p", "n4", 16711680), t("u1", "u2", 43775), t("u2", "u3", 43775), t("u3", "u1", 43775), t("c", "t", 16777215), t("p", "c", 3355443), t("cn1", "cn2", 3355443), t("cn3", "cn4", 3355443), t("cf1", "cf2", 3355443), t("cf3", "cf4", 3355443), THREE.Line.call(this, r, o, THREE.LinePieces), this.camera = e, this.matrixWorld = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update()
},THREE.CameraHelper.prototype = Object.create(THREE.Line.prototype),THREE.CameraHelper.prototype.update = function () {
    var e = new THREE.Vector3, t = new THREE.Camera, i = new THREE.Projector;
    return function () {
        function r(r, a, n, s) {
            e.set(a, n, s), i.unprojectVector(e, t);
            var h = o.pointMap[r];
            if (void 0 !== h) for (var l = 0, c = h.length; l < c; l++) o.geometry.vertices[h[l]].copy(e)
        }

        var o = this;
        t.projectionMatrix.copy(this.camera.projectionMatrix), r("c", 0, 0, -1), r("t", 0, 0, 1), r("n1", -1, -1, -1), r("n2", 1, -1, -1), r("n3", -1, 1, -1), r("n4", 1, 1, -1), r("f1", -1, -1, 1), r("f2", 1, -1, 1), r("f3", -1, 1, 1), r("f4", 1, 1, 1), r("u1", .7, 1.1, -1), r("u2", -.7, 1.1, -1), r("u3", 0, 2, -1), r("cf1", -1, 0, 1), r("cf2", 1, 0, 1), r("cf3", 0, -1, 1), r("cf4", 0, 1, 1), r("cn1", -1, 0, -1), r("cn2", 1, 0, -1), r("cn3", 0, -1, -1), r("cn4", 0, 1, -1), this.geometry.verticesNeedUpdate = !0
    }
}(),THREE.DirectionalLightHelper = function (e, t) {
    THREE.Object3D.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrixWorld = e.matrixWorld, this.matrixAutoUpdate = !1, t = t || 1;
    var i = new THREE.PlaneGeometry(t, t), r = new THREE.MeshBasicMaterial({wireframe: !0, fog: !1});
    r.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.lightPlane = new THREE.Mesh(i, r), this.add(this.lightPlane), i = new THREE.Geometry, i.vertices.push(new THREE.Vector3), i.vertices.push(new THREE.Vector3), r = new THREE.LineBasicMaterial({fog: !1}), r.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.targetLine = new THREE.Line(i, r), this.add(this.targetLine), this.update()
},THREE.DirectionalLightHelper.prototype = Object.create(THREE.Object3D.prototype),THREE.DirectionalLightHelper.prototype.dispose = function () {
    this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
},THREE.DirectionalLightHelper.prototype.update = function () {
    var e = new THREE.Vector3, t = new THREE.Vector3, i = new THREE.Vector3;
    return function () {
        e.getPositionFromMatrix(this.light.matrixWorld), t.getPositionFromMatrix(this.light.target.matrixWorld), i.subVectors(t, e), this.lightPlane.lookAt(i), this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.targetLine.geometry.vertices[1].copy(i), this.targetLine.geometry.verticesNeedUpdate = !0, this.targetLine.material.color.copy(this.lightPlane.material.color)
    }
}(),THREE.FaceNormalsHelper = function (e, t, i, r) {
    this.object = e, this.size = t || 1;
    for (var o = i || 16776960, a = r || 1, n = new THREE.Geometry, s = this.object.geometry.faces, h = 0, l = s.length; h < l; h++) n.vertices.push(new THREE.Vector3), n.vertices.push(new THREE.Vector3);
    THREE.Line.call(this, n, new THREE.LineBasicMaterial({
        color: o,
        linewidth: a
    }), THREE.LinePieces), this.matrixAutoUpdate = !1, this.normalMatrix = new THREE.Matrix3, this.update()
},THREE.FaceNormalsHelper.prototype = Object.create(THREE.Line.prototype),THREE.FaceNormalsHelper.prototype.update = function (e) {
    var t = new THREE.Vector3;
    return function (e) {
        this.object.updateMatrixWorld(!0), this.normalMatrix.getNormalMatrix(this.object.matrixWorld);
        for (var i = this.geometry.vertices, r = this.object.geometry.faces, o = this.object.matrixWorld, a = 0, n = r.length; a < n; a++) {
            var s = r[a];
            t.copy(s.normal).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size);
            var h = 2 * a;
            i[h].copy(s.centroid).applyMatrix4(o), i[h + 1].addVectors(i[h], t)
        }
        return this.geometry.verticesNeedUpdate = !0, this
    }
}(),THREE.GridHelper = function (e, t) {
    var i = new THREE.Geometry, r = new THREE.LineBasicMaterial({vertexColors: THREE.VertexColors});
    this.color1 = new THREE.Color(4473924), this.color2 = new THREE.Color(8947848);
    for (var o = -e; o <= e; o += t) {
        i.vertices.push(new THREE.Vector3(-e, 0, o), new THREE.Vector3(e, 0, o), new THREE.Vector3(o, 0, -e), new THREE.Vector3(o, 0, e));
        var a = 0 === o ? this.color1 : this.color2;
        i.colors.push(a, a, a, a)
    }
    THREE.Line.call(this, i, r, THREE.LinePieces)
},THREE.GridHelper.prototype = Object.create(THREE.Line.prototype),THREE.GridHelper.prototype.setColors = function (e, t) {
    this.color1.set(e), this.color2.set(t), this.geometry.colorsNeedUpdate = !0
},THREE.HemisphereLightHelper = function (e, t, i, r) {
    THREE.Object3D.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrixWorld = e.matrixWorld, this.matrixAutoUpdate = !1, this.colors = [new THREE.Color, new THREE.Color];
    var o = new THREE.SphereGeometry(t, 4, 2);
    o.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI / 2));
    for (var a = 0; a < 8; a++) o.faces[a].color = this.colors[a < 4 ? 0 : 1];
    var n = new THREE.MeshBasicMaterial({vertexColors: THREE.FaceColors, wireframe: !0});
    this.lightSphere = new THREE.Mesh(o, n), this.add(this.lightSphere), this.update()
},THREE.HemisphereLightHelper.prototype = Object.create(THREE.Object3D.prototype),THREE.HemisphereLightHelper.prototype.dispose = function () {
    this.lightSphere.geometry.dispose(), this.lightSphere.material.dispose()
},THREE.HemisphereLightHelper.prototype.update = function () {
    var e = new THREE.Vector3;
    return function () {
        this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity), this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity), this.lightSphere.lookAt(e.getPositionFromMatrix(this.light.matrixWorld).negate()), this.lightSphere.geometry.colorsNeedUpdate = !0
    }
}(),THREE.PointLightHelper = function (e, t) {
    this.light = e, this.light.updateMatrixWorld();
    var i = new THREE.SphereGeometry(t, 4, 2), r = new THREE.MeshBasicMaterial({wireframe: !0, fog: !1});
    r.color.copy(this.light.color).multiplyScalar(this.light.intensity), THREE.Mesh.call(this, i, r), this.matrixWorld = this.light.matrixWorld, this.matrixAutoUpdate = !1
},THREE.PointLightHelper.prototype = Object.create(THREE.Mesh.prototype),THREE.PointLightHelper.prototype.dispose = function () {
    this.geometry.dispose(), this.material.dispose()
},THREE.PointLightHelper.prototype.update = function () {
    this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
},THREE.SpotLightHelper = function (e) {
    THREE.Object3D.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrixWorld = e.matrixWorld, this.matrixAutoUpdate = !1;
    var t = new THREE.CylinderGeometry(0, 1, 1, 8, 1, !0);
    t.applyMatrix((new THREE.Matrix4).makeTranslation(0, -.5, 0)), t.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI / 2));
    var i = new THREE.MeshBasicMaterial({wireframe: !0, fog: !1});
    this.cone = new THREE.Mesh(t, i), this.add(this.cone), this.update()
},THREE.SpotLightHelper.prototype = Object.create(THREE.Object3D.prototype),THREE.SpotLightHelper.prototype.dispose = function () {
    this.cone.geometry.dispose(), this.cone.material.dispose()
},THREE.SpotLightHelper.prototype.update = function () {
    var e = new THREE.Vector3, t = new THREE.Vector3;
    return function () {
        var i = this.light.distance ? this.light.distance : 1e4, r = i * Math.tan(this.light.angle);
        this.cone.scale.set(r, r, i), e.getPositionFromMatrix(this.light.matrixWorld), t.getPositionFromMatrix(this.light.target.matrixWorld), this.cone.lookAt(t.sub(e)), this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
    }
}(),THREE.VertexNormalsHelper = function (e, t, i, r) {
    this.object = e, this.size = t || 1;
    for (var o = i || 16711680, a = r || 1, n = new THREE.Geometry, s = (e.geometry.vertices, e.geometry.faces), h = 0, l = s.length; h < l; h++) for (var c = s[h], u = 0, p = c.vertexNormals.length; u < p; u++) n.vertices.push(new THREE.Vector3), n.vertices.push(new THREE.Vector3);
    THREE.Line.call(this, n, new THREE.LineBasicMaterial({
        color: o,
        linewidth: a
    }), THREE.LinePieces), this.matrixAutoUpdate = !1, this.normalMatrix = new THREE.Matrix3, this.update()
},THREE.VertexNormalsHelper.prototype = Object.create(THREE.Line.prototype),THREE.VertexNormalsHelper.prototype.update = function (e) {
    var t = new THREE.Vector3;
    return function (e) {
        var i = ["a", "b", "c", "d"];
        this.object.updateMatrixWorld(!0), this.normalMatrix.getNormalMatrix(this.object.matrixWorld);
        for (var r = this.geometry.vertices, o = this.object.geometry.vertices, a = this.object.geometry.faces, n = this.object.matrixWorld, s = 0, h = 0, l = a.length; h < l; h++) for (var c = a[h], u = 0, p = c.vertexNormals.length; u < p; u++) {
            var f = c[i[u]], E = o[f], d = c.vertexNormals[u];
            r[s].copy(E).applyMatrix4(n), t.copy(d).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size), t.add(r[s]), s += 1, r[s].copy(t), s += 1
        }
        return this.geometry.verticesNeedUpdate = !0, this
    }
}(),THREE.VertexTangentsHelper = function (e, t, i, r) {
    this.object = e, this.size = t || 1;
    for (var o = i || 255, a = r || 1, n = new THREE.Geometry, s = (e.geometry.vertices, e.geometry.faces), h = 0, l = s.length; h < l; h++) for (var c = s[h], u = 0, p = c.vertexTangents.length; u < p; u++) n.vertices.push(new THREE.Vector3), n.vertices.push(new THREE.Vector3);
    THREE.Line.call(this, n, new THREE.LineBasicMaterial({
        color: o,
        linewidth: a
    }), THREE.LinePieces), this.matrixAutoUpdate = !1, this.update()
},THREE.VertexTangentsHelper.prototype = Object.create(THREE.Line.prototype),THREE.VertexTangentsHelper.prototype.update = function (e) {
    var t = new THREE.Vector3;
    return function (e) {
        var i = ["a", "b", "c", "d"];
        this.object.updateMatrixWorld(!0);
        for (var r = this.geometry.vertices, o = this.object.geometry.vertices, a = this.object.geometry.faces, n = this.object.matrixWorld, s = 0, h = 0, l = a.length; h < l; h++) for (var c = a[h], u = 0, p = c.vertexTangents.length; u < p; u++) {
            var f = c[i[u]], E = o[f], d = c.vertexTangents[u];
            r[s].copy(E).applyMatrix4(n), t.copy(d).transformDirection(n).multiplyScalar(this.size), t.add(r[s]), s += 1, r[s].copy(t), s += 1
        }
        return this.geometry.verticesNeedUpdate = !0, this
    }
}(),THREE.WireframeHelper = function (e) {
    for (var t = [0, 0], i = {}, r = function (e, t) {
        return e - t
    }, o = ["a", "b", "c", "d"], a = new THREE.Geometry, n = e.geometry.vertices, s = e.geometry.faces, h = 0, l = s.length; h < l; h++) for (var c = s[h], u = 0; u < 3; u++) {
        t[0] = c[o[u]], t[1] = c[o[(u + 1) % 3]], t.sort(r);
        var p = t.toString();
        void 0 === i[p] && (a.vertices.push(n[t[0]]), a.vertices.push(n[t[1]]), i[p] = !0)
    }
    THREE.Line.call(this, a, new THREE.LineBasicMaterial({color: 16777215}), THREE.LinePieces), this.matrixAutoUpdate = !1, this.matrixWorld = e.matrixWorld
},THREE.WireframeHelper.prototype = Object.create(THREE.Line.prototype),THREE.ImmediateRenderObject = function () {
    THREE.Object3D.call(this), this.render = function (e) {
    }
},THREE.ImmediateRenderObject.prototype = Object.create(THREE.Object3D.prototype),THREE.LensFlare = function (e, t, i, r, o) {
    THREE.Object3D.call(this), this.lensFlares = [], this.positionScreen = new THREE.Vector3, this.customUpdateCallback = void 0, void 0 !== e && this.add(e, t, i, r, o)
},THREE.LensFlare.prototype = Object.create(THREE.Object3D.prototype),THREE.LensFlare.prototype.add = function (e, t, i, r, o, a) {
    void 0 === t && (t = -1), void 0 === i && (i = 0), void 0 === a && (a = 1), void 0 === o && (o = new THREE.Color(16777215)), void 0 === r && (r = THREE.NormalBlending), i = Math.min(i, Math.max(0, i)), this.lensFlares.push({
        texture: e,
        size: t,
        distance: i,
        x: 0,
        y: 0,
        z: 0,
        scale: 1,
        rotation: 1,
        opacity: a,
        color: o,
        blending: r
    })
},THREE.LensFlare.prototype.updateLensFlares = function () {
    var e, t, i = this.lensFlares.length, r = 2 * -this.positionScreen.x, o = 2 * -this.positionScreen.y;
    for (e = 0; e < i; e++) t = this.lensFlares[e], t.x = this.positionScreen.x + r * t.distance, t.y = this.positionScreen.y + o * t.distance, t.wantedRotation = t.x * Math.PI * .25, t.rotation += .25 * (t.wantedRotation - t.rotation)
},THREE.MorphBlendMesh = function (e, t) {
    THREE.Mesh.call(this, e, t), this.animationsMap = {}, this.animationsList = [];
    var i = this.geometry.morphTargets.length, r = i - 1, o = i / 1;
    this.createAnimation("__default", 0, r, o), this.setAnimationWeight("__default", 1)
},THREE.MorphBlendMesh.prototype = Object.create(THREE.Mesh.prototype),THREE.MorphBlendMesh.prototype.createAnimation = function (e, t, i, r) {
    var o = {
        startFrame: t,
        endFrame: i,
        length: i - t + 1,
        fps: r,
        duration: (i - t) / r,
        lastFrame: 0,
        currentFrame: 0,
        active: !1,
        time: 0,
        direction: 1,
        weight: 1,
        directionBackwards: !1,
        mirroredLoop: !1
    };
    this.animationsMap[e] = o, this.animationsList.push(o)
},THREE.MorphBlendMesh.prototype.autoCreateAnimations = function (e) {
    for (var t, i = {}, r = this.geometry, o = 0, a = r.morphTargets.length; o < a; o++) {
        var n = r.morphTargets[o], s = n.name.match(/([a-z]+)(\d+)/);
        if (s && s.length > 1) {
            var h = s[1];
            s[2];
            i[h] || (i[h] = {start: 1 / 0, end: -(1 / 0)});
            var l = i[h];
            o < l.start && (l.start = o), o > l.end && (l.end = o), t || (t = h)
        }
    }
    for (var h in i) {
        var l = i[h];
        this.createAnimation(h, l.start, l.end, e)
    }
    this.firstAnimation = t
},THREE.MorphBlendMesh.prototype.setAnimationDirectionForward = function (e) {
    var t = this.animationsMap[e];
    t && (t.direction = 1, t.directionBackwards = !1)
},THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward = function (e) {
    var t = this.animationsMap[e];
    t && (t.direction = -1, t.directionBackwards = !0)
},THREE.MorphBlendMesh.prototype.setAnimationFPS = function (e, t) {
    var i = this.animationsMap[e];
    i && (i.fps = t, i.duration = (i.end - i.start) / i.fps)
},THREE.MorphBlendMesh.prototype.setAnimationDuration = function (e, t) {
    var i = this.animationsMap[e];
    i && (i.duration = t, i.fps = (i.end - i.start) / i.duration)
},THREE.MorphBlendMesh.prototype.setAnimationWeight = function (e, t) {
    var i = this.animationsMap[e];
    i && (i.weight = t)
},THREE.MorphBlendMesh.prototype.setAnimationTime = function (e, t) {
    var i = this.animationsMap[e];
    i && (i.time = t)
},THREE.MorphBlendMesh.prototype.getAnimationTime = function (e) {
    var t = 0, i = this.animationsMap[e];
    return i && (t = i.time), t
},THREE.MorphBlendMesh.prototype.getAnimationDuration = function (e) {
    var t = -1, i = this.animationsMap[e];
    return i && (t = i.duration), t
},THREE.MorphBlendMesh.prototype.playAnimation = function (e) {
    var t = this.animationsMap[e];
    t && (t.time = 0, t.active = !0)
},THREE.MorphBlendMesh.prototype.stopAnimation = function (e) {
    var t = this.animationsMap[e];
    t && (t.active = !1)
},THREE.MorphBlendMesh.prototype.update = function (e) {
    for (var t = 0, i = this.animationsList.length; t < i; t++) {
        var r = this.animationsList[t];
        if (r.active) {
            var o = r.duration / r.length;
            r.time += r.direction * e, r.mirroredLoop ? (r.time > r.duration || r.time < 0) && (r.direction *= -1, r.time > r.duration && (r.time = r.duration, r.directionBackwards = !0), r.time < 0 && (r.time = 0, r.directionBackwards = !1)) : (r.time = r.time % r.duration, r.time < 0 && (r.time += r.duration));
            var a = r.startFrame + THREE.Math.clamp(Math.floor(r.time / o), 0, r.length - 1), n = r.weight;
            a !== r.currentFrame && (this.morphTargetInfluences[r.lastFrame] = 0, this.morphTargetInfluences[r.currentFrame] = 1 * n, this.morphTargetInfluences[a] = 0, r.lastFrame = r.currentFrame, r.currentFrame = a);
            var s = r.time % o / o;
            r.directionBackwards && (s = 1 - s), this.morphTargetInfluences[r.currentFrame] = s * n, this.morphTargetInfluences[r.lastFrame] = (1 - s) * n
        }
    }
},THREE.LensFlarePlugin = function () {
    function e(e, i) {
        var r = t.createProgram(), o = t.createShader(t.FRAGMENT_SHADER), a = t.createShader(t.VERTEX_SHADER),
            n = "precision " + i + " float;\n";
        return t.shaderSource(o, n + e.fragmentShader), t.shaderSource(a, n + e.vertexShader), t.compileShader(o), t.compileShader(a), t.attachShader(r, o), t.attachShader(r, a), t.linkProgram(r), r
    }

    var t, i, r, o = {};
    this.init = function (a) {
        t = a.context, i = a, r = a.getPrecision(), o.vertices = new Float32Array(16), o.faces = new Uint16Array(6);
        var n = 0;
        o.vertices[n++] = -1, o.vertices[n++] = -1, o.vertices[n++] = 0, o.vertices[n++] = 0, o.vertices[n++] = 1, o.vertices[n++] = -1, o.vertices[n++] = 1, o.vertices[n++] = 0, o.vertices[n++] = 1, o.vertices[n++] = 1, o.vertices[n++] = 1, o.vertices[n++] = 1, o.vertices[n++] = -1, o.vertices[n++] = 1, o.vertices[n++] = 0, o.vertices[n++] = 1, n = 0, o.faces[n++] = 0, o.faces[n++] = 1, o.faces[n++] = 2, o.faces[n++] = 0, o.faces[n++] = 2, o.faces[n++] = 3, o.vertexBuffer = t.createBuffer(), o.elementBuffer = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, o.vertexBuffer), t.bufferData(t.ARRAY_BUFFER, o.vertices, t.STATIC_DRAW), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, o.elementBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, o.faces, t.STATIC_DRAW), o.tempTexture = t.createTexture(), o.occlusionTexture = t.createTexture(), t.bindTexture(t.TEXTURE_2D, o.tempTexture), t.texImage2D(t.TEXTURE_2D, 0, t.RGB, 16, 16, 0, t.RGB, t.UNSIGNED_BYTE, null), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.bindTexture(t.TEXTURE_2D, o.occlusionTexture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 16, 16, 0, t.RGBA, t.UNSIGNED_BYTE, null), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS) <= 0 ? (o.hasVertexTexture = !1, o.program = e(THREE.ShaderFlares.lensFlare, r)) : (o.hasVertexTexture = !0, o.program = e(THREE.ShaderFlares.lensFlareVertexTexture, r)), o.attributes = {}, o.uniforms = {}, o.attributes.vertex = t.getAttribLocation(o.program, "position"), o.attributes.uv = t.getAttribLocation(o.program, "uv"), o.uniforms.renderType = t.getUniformLocation(o.program, "renderType"), o.uniforms.map = t.getUniformLocation(o.program, "map"), o.uniforms.occlusionMap = t.getUniformLocation(o.program, "occlusionMap"), o.uniforms.opacity = t.getUniformLocation(o.program, "opacity"), o.uniforms.color = t.getUniformLocation(o.program, "color"), o.uniforms.scale = t.getUniformLocation(o.program, "scale"), o.uniforms.rotation = t.getUniformLocation(o.program, "rotation"), o.uniforms.screenPosition = t.getUniformLocation(o.program, "screenPosition")
    }, this.render = function (e, r, a, n) {
        var s = e.__webglFlares, h = s.length;
        if (h) {
            var l = new THREE.Vector3, c = n / a, u = .5 * a, p = .5 * n, f = 16 / n, E = new THREE.Vector2(f * c, f),
                d = new THREE.Vector3(1, 1, 0), m = new THREE.Vector2(1, 1), g = o.uniforms, v = o.attributes;
            t.useProgram(o.program), t.enableVertexAttribArray(o.attributes.vertex), t.enableVertexAttribArray(o.attributes.uv), t.uniform1i(g.occlusionMap, 0), t.uniform1i(g.map, 1), t.bindBuffer(t.ARRAY_BUFFER, o.vertexBuffer), t.vertexAttribPointer(v.vertex, 2, t.FLOAT, !1, 16, 0), t.vertexAttribPointer(v.uv, 2, t.FLOAT, !1, 16, 8), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, o.elementBuffer), t.disable(t.CULL_FACE), t.depthMask(!1);
            var T, y, R, x, H;
            for (T = 0; T < h; T++) if (f = 16 / n, E.set(f * c, f), x = s[T], l.set(x.matrixWorld.elements[12], x.matrixWorld.elements[13], x.matrixWorld.elements[14]), l.applyMatrix4(r.matrixWorldInverse), l.applyProjection(r.projectionMatrix), d.copy(l), m.x = d.x * u + u, m.y = d.y * p + p, o.hasVertexTexture || m.x > 0 && m.x < a && m.y > 0 && m.y < n) for (t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, o.tempTexture), t.copyTexImage2D(t.TEXTURE_2D, 0, t.RGB, m.x - 8, m.y - 8, 16, 16, 0), t.uniform1i(g.renderType, 0), t.uniform2f(g.scale, E.x, E.y), t.uniform3f(g.screenPosition, d.x, d.y, d.z), t.disable(t.BLEND), t.enable(t.DEPTH_TEST), t.drawElements(t.TRIANGLES, 6, t.UNSIGNED_SHORT, 0), t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, o.occlusionTexture), t.copyTexImage2D(t.TEXTURE_2D, 0, t.RGBA, m.x - 8, m.y - 8, 16, 16, 0), t.uniform1i(g.renderType, 1), t.disable(t.DEPTH_TEST), t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, o.tempTexture), t.drawElements(t.TRIANGLES, 6, t.UNSIGNED_SHORT, 0), x.positionScreen.copy(d), x.customUpdateCallback ? x.customUpdateCallback(x) : x.updateLensFlares(), t.uniform1i(g.renderType, 2), t.enable(t.BLEND), y = 0, R = x.lensFlares.length; y < R; y++) H = x.lensFlares[y], H.opacity > .001 && H.scale > .001 && (d.x = H.x, d.y = H.y, d.z = H.z, f = H.size * H.scale / n, E.x = f * c, E.y = f, t.uniform3f(g.screenPosition, d.x, d.y, d.z), t.uniform2f(g.scale, E.x, E.y), t.uniform1f(g.rotation, H.rotation), t.uniform1f(g.opacity, H.opacity), t.uniform3f(g.color, H.color.r, H.color.g, H.color.b), i.setBlending(H.blending, H.blendEquation, H.blendSrc, H.blendDst), i.setTexture(H.texture, 1), t.drawElements(t.TRIANGLES, 6, t.UNSIGNED_SHORT, 0));
            t.enable(t.CULL_FACE), t.enable(t.DEPTH_TEST), t.depthMask(!0)
        }
    }
},THREE.ShadowMapPlugin = function () {
    function e(e, t) {
        var i = new THREE.DirectionalLight;
        i.isVirtual = !0, i.onlyShadow = !0, i.castShadow = !0, i.shadowCameraNear = e.shadowCameraNear, i.shadowCameraFar = e.shadowCameraFar, i.shadowCameraLeft = e.shadowCameraLeft, i.shadowCameraRight = e.shadowCameraRight, i.shadowCameraBottom = e.shadowCameraBottom, i.shadowCameraTop = e.shadowCameraTop, i.shadowCameraVisible = e.shadowCameraVisible, i.shadowDarkness = e.shadowDarkness, i.shadowBias = e.shadowCascadeBias[t], i.shadowMapWidth = e.shadowCascadeWidth[t], i.shadowMapHeight = e.shadowCascadeHeight[t], i.pointsWorld = [], i.pointsFrustum = [];
        for (var r = i.pointsWorld, o = i.pointsFrustum, a = 0; a < 8; a++) r[a] = new THREE.Vector3, o[a] = new THREE.Vector3;
        var n = e.shadowCascadeNearZ[t], s = e.shadowCascadeFarZ[t];
        return o[0].set(-1, -1, n), o[1].set(1, -1, n), o[2].set(-1, 1, n), o[3].set(1, 1, n), o[4].set(-1, -1, s), o[5].set(1, -1, s), o[6].set(-1, 1, s), o[7].set(1, 1, s), i
    }

    function t(e, t) {
        var i = e.shadowCascadeArray[t];
        i.position.copy(e.position), i.target.position.copy(e.target.position), i.lookAt(i.target), i.shadowCameraVisible = e.shadowCameraVisible, i.shadowDarkness = e.shadowDarkness, i.shadowBias = e.shadowCascadeBias[t];
        var r = e.shadowCascadeNearZ[t], o = e.shadowCascadeFarZ[t], a = i.pointsFrustum;
        a[0].z = r, a[1].z = r, a[2].z = r, a[3].z = r, a[4].z = o, a[5].z = o, a[6].z = o, a[7].z = o
    }

    function i(e, t) {
        var i = t.shadowCamera, r = t.pointsFrustum, o = t.pointsWorld;
        p.set(1 / 0, 1 / 0, 1 / 0), f.set(-(1 / 0), -(1 / 0), -(1 / 0));
        for (var a = 0; a < 8; a++) {
            var n = o[a];
            n.copy(r[a]), THREE.ShadowMapPlugin.__projector.unprojectVector(n, e), n.applyMatrix4(i.matrixWorldInverse), n.x < p.x && (p.x = n.x), n.x > f.x && (f.x = n.x), n.y < p.y && (p.y = n.y), n.y > f.y && (f.y = n.y), n.z < p.z && (p.z = n.z), n.z > f.z && (f.z = n.z)
        }
        i.left = p.x, i.right = f.x, i.top = f.y, i.bottom = p.y, i.updateProjectionMatrix()
    }

    function r(e) {
        return e.material instanceof THREE.MeshFaceMaterial ? e.material.materials[0] : e.material
    }

    var o, a, n, s, h, l, c = new THREE.Frustum, u = new THREE.Matrix4, p = new THREE.Vector3, f = new THREE.Vector3,
        E = new THREE.Vector3;
    this.init = function (e) {
        o = e.context, a = e;
        var t = THREE.ShaderLib.depthRGBA, i = THREE.UniformsUtils.clone(t.uniforms);
        n = new THREE.ShaderMaterial({
            fragmentShader: t.fragmentShader,
            vertexShader: t.vertexShader,
            uniforms: i
        }), s = new THREE.ShaderMaterial({
            fragmentShader: t.fragmentShader,
            vertexShader: t.vertexShader,
            uniforms: i,
            morphTargets: !0
        }), h = new THREE.ShaderMaterial({
            fragmentShader: t.fragmentShader,
            vertexShader: t.vertexShader,
            uniforms: i,
            skinning: !0
        }), l = new THREE.ShaderMaterial({
            fragmentShader: t.fragmentShader,
            vertexShader: t.vertexShader,
            uniforms: i,
            morphTargets: !0,
            skinning: !0
        }), n._shadowPass = !0, s._shadowPass = !0, h._shadowPass = !0, l._shadowPass = !0
    }, this.render = function (e, t) {
        a.shadowMapEnabled && a.shadowMapAutoUpdate && this.update(e, t)
    }, this.update = function (p, f) {
        var d, m, g, v, T, y, R, x, H, _, w, b, M, S, A = [], C = 0;
        for (o.clearColor(1, 1, 1, 1), o.disable(o.BLEND), o.enable(o.CULL_FACE), o.frontFace(o.CCW), a.shadowMapCullFace === THREE.CullFaceFront ? o.cullFace(o.FRONT) : o.cullFace(o.BACK), a.setDepthTest(!0), d = 0, m = p.__lights.length; d < m; d++) if (M = p.__lights[d], M.castShadow) if (M instanceof THREE.DirectionalLight && M.shadowCascade) for (T = 0; T < M.shadowCascadeCount; T++) {
            var L;
            if (M.shadowCascadeArray[T]) L = M.shadowCascadeArray[T]; else {
                L = e(M, T), L.originalCamera = f;
                var P = new THREE.Gyroscope;
                P.position = M.shadowCascadeOffset, P.add(L), P.add(L.target), f.add(P), M.shadowCascadeArray[T] = L
            }
            t(M, T), A[C] = L, C++
        } else A[C] = M, C++;
        for (d = 0, m = A.length; d < m; d++) {
            if (M = A[d], !M.shadowMap) {
                var D = THREE.LinearFilter;
                a.shadowMapType === THREE.PCFSoftShadowMap && (D = THREE.NearestFilter);
                var F = {minFilter: D, magFilter: D, format: THREE.RGBAFormat};
                M.shadowMap = new THREE.WebGLRenderTarget(M.shadowMapWidth, M.shadowMapHeight, F), M.shadowMapSize = new THREE.Vector2(M.shadowMapWidth, M.shadowMapHeight), M.shadowMatrix = new THREE.Matrix4
            }
            if (!M.shadowCamera) {
                if (M instanceof THREE.SpotLight) M.shadowCamera = new THREE.PerspectiveCamera(M.shadowCameraFov, M.shadowMapWidth / M.shadowMapHeight, M.shadowCameraNear, M.shadowCameraFar); else {
                    if (!(M instanceof THREE.DirectionalLight)) continue;
                    M.shadowCamera = new THREE.OrthographicCamera(M.shadowCameraLeft, M.shadowCameraRight, M.shadowCameraTop, M.shadowCameraBottom, M.shadowCameraNear, M.shadowCameraFar)
                }
                p.add(M.shadowCamera), p.autoUpdate === !0 && p.updateMatrixWorld()
            }
            for (M.shadowCameraVisible && !M.cameraHelper && (M.cameraHelper = new THREE.CameraHelper(M.shadowCamera), M.shadowCamera.add(M.cameraHelper)), M.isVirtual && L.originalCamera == f && i(f, M), y = M.shadowMap, R = M.shadowMatrix, x = M.shadowCamera, x.position.getPositionFromMatrix(M.matrixWorld), E.getPositionFromMatrix(M.target.matrixWorld), x.lookAt(E), x.updateMatrixWorld(), x.matrixWorldInverse.getInverse(x.matrixWorld), M.cameraHelper && (M.cameraHelper.visible = M.shadowCameraVisible), M.shadowCameraVisible && M.cameraHelper.update(), R.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), R.multiply(x.projectionMatrix), R.multiply(x.matrixWorldInverse), u.multiplyMatrices(x.projectionMatrix, x.matrixWorldInverse), c.setFromMatrix(u), a.setRenderTarget(y), a.clear(), S = p.__webglObjects, g = 0, v = S.length; g < v; g++) w = S[g], b = w.object, w.render = !1, b.visible && b.castShadow && ((b instanceof THREE.Mesh || b instanceof THREE.ParticleSystem) && b.frustumCulled && !c.intersectsObject(b) || (b._modelViewMatrix.multiplyMatrices(x.matrixWorldInverse, b.matrixWorld), w.render = !0));
            var V, U, z;
            for (g = 0, v = S.length; g < v; g++) w = S[g], w.render && (b = w.object, H = w.buffer, V = r(b), U = b.geometry.morphTargets.length > 0 && V.morphTargets, z = b instanceof THREE.SkinnedMesh && V.skinning, _ = b.customDepthMaterial ? b.customDepthMaterial : z ? U ? l : h : U ? s : n, H instanceof THREE.BufferGeometry ? a.renderBufferDirect(x, p.__lights, null, _, H, b) : a.renderBuffer(x, p.__lights, null, _, H, b));
            for (S = p.__webglObjectsImmediate, g = 0, v = S.length; g < v; g++) w = S[g], b = w.object, b.visible && b.castShadow && (b._modelViewMatrix.multiplyMatrices(x.matrixWorldInverse, b.matrixWorld), a.renderImmediateObject(x, p.__lights, null, n, b))
        }
        var B = a.getClearColor(), N = a.getClearAlpha();
        o.clearColor(B.r, B.g, B.b, N), o.enable(o.BLEND), a.shadowMapCullFace === THREE.CullFaceFront && o.cullFace(o.BACK)
    }
},THREE.ShadowMapPlugin.__projector = new THREE.Projector,THREE.SpritePlugin = function () {
    function e() {
        var e = i.createProgram(), t = i.createShader(i.VERTEX_SHADER), o = i.createShader(i.FRAGMENT_SHADER);
        return i.shaderSource(t, ["precision " + r.getPrecision() + " float;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 scale;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uvOffset + uv * uvScale;", "vec2 alignedPosition = position * scale;", "vec2 rotatedPosition;", "rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", "rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", "vec4 finalPosition;", "finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "finalPosition.xy += rotatedPosition;", "finalPosition = projectionMatrix * finalPosition;", "gl_Position = finalPosition;", "}"].join("\n")), i.shaderSource(o, ["precision " + r.getPrecision() + " float;", "uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "void main() {", "vec4 texture = texture2D( map, vUV );", "if ( texture.a < alphaTest ) discard;", "gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "if ( fogType > 0 ) {", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "float fogFactor = 0.0;", "if ( fogType == 1 ) {", "fogFactor = smoothstep( fogNear, fogFar, depth );", "} else {", "const float LOG2 = 1.442695;", "float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "}", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "}", "}"].join("\n")), i.compileShader(t), i.compileShader(o), i.attachShader(e, t), i.attachShader(e, o), i.linkProgram(e), e
    }

    function t(e, t) {
        return e.z !== t.z ? t.z - e.z : t.id - e.id
    }

    var i, r, o, a, n, s, h, l, c, u;
    this.init = function (t) {
        i = t.context, r = t, a = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]), n = new Uint16Array([0, 1, 2, 0, 2, 3]), s = i.createBuffer(), h = i.createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, s), i.bufferData(i.ARRAY_BUFFER, a, i.STATIC_DRAW), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, h), i.bufferData(i.ELEMENT_ARRAY_BUFFER, n, i.STATIC_DRAW), l = e(), c = {
            position: i.getAttribLocation(l, "position"),
            uv: i.getAttribLocation(l, "uv")
        }, u = {
            uvOffset: i.getUniformLocation(l, "uvOffset"),
            uvScale: i.getUniformLocation(l, "uvScale"),
            rotation: i.getUniformLocation(l, "rotation"),
            scale: i.getUniformLocation(l, "scale"),
            color: i.getUniformLocation(l, "color"),
            map: i.getUniformLocation(l, "map"),
            opacity: i.getUniformLocation(l, "opacity"),
            modelViewMatrix: i.getUniformLocation(l, "modelViewMatrix"),
            projectionMatrix: i.getUniformLocation(l, "projectionMatrix"),
            fogType: i.getUniformLocation(l, "fogType"),
            fogDensity: i.getUniformLocation(l, "fogDensity"),
            fogNear: i.getUniformLocation(l, "fogNear"),
            fogFar: i.getUniformLocation(l, "fogFar"),
            fogColor: i.getUniformLocation(l, "fogColor"),
            alphaTest: i.getUniformLocation(l, "alphaTest")
        };
        var p = document.createElement("canvas");
        p.width = 8, p.height = 8;
        var f = p.getContext("2d");
        f.fillStyle = "#ffffff", f.fillRect(0, 0, p.width, p.height), o = new THREE.Texture(p), o.needsUpdate = !0
    }, this.render = function (e, a, n, p) {
        var f = e.__webglSprites, E = f.length;
        if (E) {
            i.useProgram(l), i.enableVertexAttribArray(c.position), i.enableVertexAttribArray(c.uv), i.disable(i.CULL_FACE), i.enable(i.BLEND), i.bindBuffer(i.ARRAY_BUFFER, s), i.vertexAttribPointer(c.position, 2, i.FLOAT, !1, 16, 0), i.vertexAttribPointer(c.uv, 2, i.FLOAT, !1, 16, 8), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, h), i.uniformMatrix4fv(u.projectionMatrix, !1, a.projectionMatrix.elements), i.activeTexture(i.TEXTURE0), i.uniform1i(u.map, 0);
            var d = 0, m = 0, g = e.fog;
            g ? (i.uniform3f(u.fogColor, g.color.r, g.color.g, g.color.b), g instanceof THREE.Fog ? (i.uniform1f(u.fogNear, g.near), i.uniform1f(u.fogFar, g.far), i.uniform1i(u.fogType, 1), d = 1, m = 1) : g instanceof THREE.FogExp2 && (i.uniform1f(u.fogDensity, g.density), i.uniform1i(u.fogType, 2), d = 2, m = 2)) : (i.uniform1i(u.fogType, 0), d = 0, m = 0);
            var v, T, y, R, x = [];
            for (v = 0; v < E; v++) T = f[v], y = T.material, T.visible !== !1 && (T._modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, T.matrixWorld), T.z = -T._modelViewMatrix.elements[14]);
            for (f.sort(t), v = 0; v < E; v++) T = f[v], T.visible !== !1 && (y = T.material, i.uniform1f(u.alphaTest, y.alphaTest), i.uniformMatrix4fv(u.modelViewMatrix, !1, T._modelViewMatrix.elements), x[0] = T.scale.x, x[1] = T.scale.y, R = e.fog && y.fog ? m : 0, d !== R && (i.uniform1i(u.fogType, R), d = R), i.uniform2f(u.uvScale, y.uvScale.x, y.uvScale.y), i.uniform2f(u.uvOffset, y.uvOffset.x, y.uvOffset.y), i.uniform1f(u.opacity, y.opacity), i.uniform3f(u.color, y.color.r, y.color.g, y.color.b), i.uniform1f(u.rotation, y.rotation), i.uniform2fv(u.scale, x), r.setBlending(y.blending, y.blendEquation, y.blendSrc, y.blendDst), r.setDepthTest(y.depthTest), r.setDepthWrite(y.depthWrite), y.map && y.map.image && y.map.image.width ? r.setTexture(y.map, 0) : r.setTexture(o, 0), i.drawElements(i.TRIANGLES, 6, i.UNSIGNED_SHORT, 0));
            i.enable(i.CULL_FACE)
        }
    }
},THREE.DepthPassPlugin = function () {
    function e(e) {
        return e.material instanceof THREE.MeshFaceMaterial ? e.material.materials[0] : e.material
    }

    this.enabled = !1, this.renderTarget = null;
    var t, i, r, o, a, n, s = new THREE.Frustum, h = new THREE.Matrix4;
    this.init = function (e) {
        t = e.context, i = e;
        var s = THREE.ShaderLib.depthRGBA, h = THREE.UniformsUtils.clone(s.uniforms);
        r = new THREE.ShaderMaterial({
            fragmentShader: s.fragmentShader,
            vertexShader: s.vertexShader,
            uniforms: h
        }), o = new THREE.ShaderMaterial({
            fragmentShader: s.fragmentShader,
            vertexShader: s.vertexShader,
            uniforms: h,
            morphTargets: !0
        }), a = new THREE.ShaderMaterial({
            fragmentShader: s.fragmentShader,
            vertexShader: s.vertexShader,
            uniforms: h,
            skinning: !0
        }), n = new THREE.ShaderMaterial({
            fragmentShader: s.fragmentShader,
            vertexShader: s.vertexShader,
            uniforms: h,
            morphTargets: !0,
            skinning: !0
        }), r._shadowPass = !0, o._shadowPass = !0, a._shadowPass = !0, n._shadowPass = !0
    }, this.render = function (e, t) {
        this.enabled && this.update(e, t)
    }, this.update = function (l, c) {
        var u, p, f, E, d, m, g;
        for (t.clearColor(1, 1, 1, 1), t.disable(t.BLEND), i.setDepthTest(!0), l.autoUpdate === !0 && l.updateMatrixWorld(), c.matrixWorldInverse.getInverse(c.matrixWorld), h.multiplyMatrices(c.projectionMatrix, c.matrixWorldInverse), s.setFromMatrix(h), i.setRenderTarget(this.renderTarget), i.clear(), g = l.__webglObjects, u = 0, p = g.length; u < p; u++) d = g[u], m = d.object, d.render = !1, m.visible && ((m instanceof THREE.Mesh || m instanceof THREE.ParticleSystem) && m.frustumCulled && !s.intersectsObject(m) || (m._modelViewMatrix.multiplyMatrices(c.matrixWorldInverse, m.matrixWorld), d.render = !0));
        var v, T, y;
        for (u = 0, p = g.length; u < p; u++) if (d = g[u], d.render) {
            if (m = d.object, f = d.buffer, m instanceof THREE.ParticleSystem && !m.customDepthMaterial) continue;
            v = e(m), v && i.setMaterialFaces(m.material), T = m.geometry.morphTargets.length > 0 && v.morphTargets, y = m instanceof THREE.SkinnedMesh && v.skinning, E = m.customDepthMaterial ? m.customDepthMaterial : y ? T ? n : a : T ? o : r, f instanceof THREE.BufferGeometry ? i.renderBufferDirect(c, l.__lights, null, E, f, m) : i.renderBuffer(c, l.__lights, null, E, f, m)
        }
        for (g = l.__webglObjectsImmediate, u = 0, p = g.length; u < p; u++) d = g[u], m = d.object, m.visible && (m._modelViewMatrix.multiplyMatrices(c.matrixWorldInverse, m.matrixWorld), i.renderImmediateObject(c, l.__lights, null, r, m));
        var R = i.getClearColor(), x = i.getClearAlpha();
        t.clearColor(R.r, R.g, R.b, x), t.enable(t.BLEND)
    }
},THREE.ShaderFlares = {
    lensFlareVertexTexture: {
        vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "uniform sampler2D occlusionMap;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if( renderType == 2 ) {", "vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );", "vVisibility =        visibility.r / 9.0;", "vVisibility *= 1.0 - visibility.g / 9.0;", "vVisibility *=       visibility.b / 9.0;", "vVisibility *= 1.0 - visibility.a / 9.0;", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
        fragmentShader: ["uniform lowp int renderType;", "uniform sampler2D map;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "if( renderType == 0 ) {", "gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );", "} else if( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * vVisibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
    }, lensFlare: {
        vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if( renderType == 2 ) {", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
        fragmentShader: ["precision mediump float;", "uniform lowp int renderType;", "uniform sampler2D map;", "uniform sampler2D occlusionMap;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "void main() {", "if( renderType == 0 ) {", "gl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );", "} else if( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "float visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;", "visibility = ( 1.0 - visibility / 4.0 );", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * visibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
    }
};
THREE.MarchingCubes = function (i, t, s, h) {
    THREE.ImmediateRenderObject.call(this), this.material = t, this.enableUvs = void 0 !== s && s, this.enableColors = void 0 !== h && h, this.init = function (i) {
        this.resolution = i, this.isolation = 80, this.size = i, this.size2 = this.size * this.size, this.size3 = this.size2 * this.size, this.halfsize = this.size / 2, this.delta = 2 / this.size, this.yd = this.size, this.zd = this.size2, this.field = new Float32Array(this.size3), this.normal_cache = new Float32Array(3 * this.size3), this.vlist = new Float32Array(36), this.nlist = new Float32Array(36), this.firstDraw = !0, this.maxCount = 4096, this.count = 0, this.hasPositions = !1, this.hasNormals = !1, this.hasColors = !1, this.hasUvs = !1, this.positionArray = new Float32Array(3 * this.maxCount), this.normalArray = new Float32Array(3 * this.maxCount), this.enableUvs && (this.uvArray = new Float32Array(2 * this.maxCount)), this.enableColors && (this.colorArray = new Float32Array(3 * this.maxCount))
    }, this.lerp = function (i, t, s) {
        return i + (t - i) * s
    }, this.VIntX = function (i, t, s, h, r, o, a, e, n, l) {
        var c = (r - n) / (l - n), m = this.normal_cache;
        t[h] = o + c * this.delta, t[h + 1] = a, t[h + 2] = e, s[h] = this.lerp(m[i], m[i + 3], c), s[h + 1] = this.lerp(m[i + 1], m[i + 4], c), s[h + 2] = this.lerp(m[i + 2], m[i + 5], c)
    }, this.VIntY = function (i, t, s, h, r, o, a, e, n, l) {
        var c = (r - n) / (l - n), m = this.normal_cache;
        t[h] = o, t[h + 1] = a + c * this.delta, t[h + 2] = e;
        var f = i + 3 * this.yd;
        s[h] = this.lerp(m[i], m[f], c), s[h + 1] = this.lerp(m[i + 1], m[f + 1], c), s[h + 2] = this.lerp(m[i + 2], m[f + 2], c)
    }, this.VIntZ = function (i, t, s, h, r, o, a, e, n, l) {
        var c = (r - n) / (l - n), m = this.normal_cache;
        t[h] = o, t[h + 1] = a, t[h + 2] = e + c * this.delta;
        var f = i + 3 * this.zd;
        s[h] = this.lerp(m[i], m[f], c), s[h + 1] = this.lerp(m[i + 1], m[f + 1], c), s[h + 2] = this.lerp(m[i + 2], m[f + 2], c)
    }, this.compNorm = function (i) {
        var t = 3 * i;
        0 === this.normal_cache[t] && (this.normal_cache[t] = this.field[i - 1] - this.field[i + 1], this.normal_cache[t + 1] = this.field[i - this.yd] - this.field[i + this.yd], this.normal_cache[t + 2] = this.field[i - this.zd] - this.field[i + this.zd])
    }, this.polygonize = function (i, t, s, h, r, o) {
        var a = h + 1, e = h + this.yd, n = h + this.zd, l = a + this.yd, c = a + this.zd, m = h + this.yd + this.zd,
            f = a + this.yd + this.zd, y = 0, p = this.field[h], d = this.field[a], v = this.field[e],
            z = this.field[l], u = this.field[n], A = this.field[c], E = this.field[m], N = this.field[f];
        p < r && (y |= 1), d < r && (y |= 2), v < r && (y |= 8), z < r && (y |= 4), u < r && (y |= 16), A < r && (y |= 32), E < r && (y |= 128), N < r && (y |= 64);
        var b = THREE.edgeTable[y];
        if (0 === b) return 0;
        var T = this.delta, V = i + T, I = t + T, R = s + T;
        1 & b && (this.compNorm(h), this.compNorm(a), this.VIntX(3 * h, this.vlist, this.nlist, 0, r, i, t, s, p, d)), 2 & b && (this.compNorm(a), this.compNorm(l), this.VIntY(3 * a, this.vlist, this.nlist, 3, r, V, t, s, d, z)), 4 & b && (this.compNorm(e), this.compNorm(l), this.VIntX(3 * e, this.vlist, this.nlist, 6, r, i, I, s, v, z)), 8 & b && (this.compNorm(h), this.compNorm(e), this.VIntY(3 * h, this.vlist, this.nlist, 9, r, i, t, s, p, v)), 16 & b && (this.compNorm(n), this.compNorm(c), this.VIntX(3 * n, this.vlist, this.nlist, 12, r, i, t, R, u, A)), 32 & b && (this.compNorm(c), this.compNorm(f), this.VIntY(3 * c, this.vlist, this.nlist, 15, r, V, t, R, A, N)), 64 & b && (this.compNorm(m), this.compNorm(f), this.VIntX(3 * m, this.vlist, this.nlist, 18, r, i, I, R, E, N)), 128 & b && (this.compNorm(n), this.compNorm(m), this.VIntY(3 * n, this.vlist, this.nlist, 21, r, i, t, R, u, E)), 256 & b && (this.compNorm(h), this.compNorm(n), this.VIntZ(3 * h, this.vlist, this.nlist, 24, r, i, t, s, p, u)), 512 & b && (this.compNorm(a), this.compNorm(c), this.VIntZ(3 * a, this.vlist, this.nlist, 27, r, V, t, s, d, A)), 1024 & b && (this.compNorm(l), this.compNorm(f), this.VIntZ(3 * l, this.vlist, this.nlist, 30, r, V, I, s, z, N)), 2048 & b && (this.compNorm(e), this.compNorm(m), this.VIntZ(3 * e, this.vlist, this.nlist, 33, r, i, I, s, v, E)), y <<= 4;
        for (var w, C, H, x = 0, M = 0; THREE.triTable[y + M] != -1;) w = y + M, C = w + 1, H = w + 2, this.posnormtriv(this.vlist, this.nlist, 3 * THREE.triTable[w], 3 * THREE.triTable[C], 3 * THREE.triTable[H], o), M += 3, x++;
        return x
    }, this.posnormtriv = function (i, t, s, h, r, o) {
        var a = 3 * this.count;
        if (this.positionArray[a] = i[s], this.positionArray[a + 1] = i[s + 1], this.positionArray[a + 2] = i[s + 2], this.positionArray[a + 3] = i[h], this.positionArray[a + 4] = i[h + 1], this.positionArray[a + 5] = i[h + 2], this.positionArray[a + 6] = i[r], this.positionArray[a + 7] = i[r + 1], this.positionArray[a + 8] = i[r + 2], this.normalArray[a] = t[s], this.normalArray[a + 1] = t[s + 1], this.normalArray[a + 2] = t[s + 2], this.normalArray[a + 3] = t[h], this.normalArray[a + 4] = t[h + 1], this.normalArray[a + 5] = t[h + 2], this.normalArray[a + 6] = t[r], this.normalArray[a + 7] = t[r + 1], this.normalArray[a + 8] = t[r + 2], this.enableUvs) {
            var e = 2 * this.count;
            this.uvArray[e] = i[s], this.uvArray[e + 1] = i[s + 2], this.uvArray[e + 2] = i[h], this.uvArray[e + 3] = i[h + 2], this.uvArray[e + 4] = i[r], this.uvArray[e + 5] = i[r + 2]
        }
        this.enableColors && (this.colorArray[a] = i[s], this.colorArray[a + 1] = i[s + 1], this.colorArray[a + 2] = i[s + 2], this.colorArray[a + 3] = i[h], this.colorArray[a + 4] = i[h + 1], this.colorArray[a + 5] = i[h + 2], this.colorArray[a + 6] = i[r], this.colorArray[a + 7] = i[r + 1], this.colorArray[a + 8] = i[r + 2]), this.count += 3, this.count >= this.maxCount - 3 && (this.hasPositions = !0, this.hasNormals = !0, this.enableUvs && (this.hasUvs = !0), this.enableColors && (this.hasColors = !0), o(this))
    }, this.begin = function () {
        this.count = 0, this.hasPositions = !1, this.hasNormals = !1, this.hasUvs = !1, this.hasColors = !1
    }, this.end = function (i) {
        if (0 !== this.count) {
            for (var t = 3 * this.count; t < this.positionArray.length; t++) this.positionArray[t] = 0;
            this.hasPositions = !0, this.hasNormals = !0, this.enableUvs && (this.hasUvs = !0), this.enableColors && (this.hasColors = !0), i(this)
        }
    }, this.addBall = function (i, t, s, h, r) {
        var o = this.size * Math.sqrt(h / r), a = s * this.size, e = t * this.size, n = i * this.size,
            l = Math.floor(a - o);
        l < 1 && (l = 1);
        var c = Math.floor(a + o);
        c > this.size - 1 && (c = this.size - 1);
        var m = Math.floor(e - o);
        m < 1 && (m = 1);
        var f = Math.floor(e + o);
        f > this.size - 1 && (f = this.size - 1);
        var y = Math.floor(n - o);
        y < 1 && (y = 1);
        var p = Math.floor(n + o);
        p > this.size - 1 && (p = this.size - 1);
        var d, v, z, u, A, E, N, b, T, V, I;
        for (z = l; z < c; z++) for (A = this.size2 * z, b = z / this.size - s, T = b * b, v = m; v < f; v++) for (u = A + this.size * v, N = v / this.size - t, V = N * N, d = y; d < p; d++) E = d / this.size - i, (I = h / (1e-6 + E * E + V + T) - r) > 0 && (this.field[u + d] += I);
        return o
    }, this.addPlaneX = function (i, t) {
        var s, h, r, o, a, e, n, l = this.size, c = this.yd, m = this.zd, f = this.field, y = l * Math.sqrt(i / t);
        for (y > l && (y = l), s = 0; s < y; s++) if (e = s / l, o = e * e, (a = i / (1e-4 + o) - t) > 0) for (h = 0; h < l; h++) for (n = s + h * c, r = 0; r < l; r++) f[m * r + n] += a
    }, this.addPlaneY = function (i, t) {
        var s, h, r, o, a, e, n, l, c = this.size, m = this.yd, f = this.zd, y = this.field, p = c * Math.sqrt(i / t);
        for (p > c && (p = c), h = 0; h < p; h++) if (e = h / c, o = e * e, (a = i / (1e-4 + o) - t) > 0) for (n = h * m, s = 0; s < c; s++) for (l = n + s, r = 0; r < c; r++) y[f * r + l] += a
    }, this.addPlaneZ = function (i, t) {
        var s, h, r, o, a, e, n, l, c = this.size, m = this.yd, f = this.zd, y = this.field, p = c * Math.sqrt(i / t);
        for (p > c && (p = c), r = 0; r < p; r++) if (e = r / c, o = e * e, (a = i / (1e-4 + o) - t) > 0) for (n = f * r, h = 0; h < c; h++) for (l = n + h * m, s = 0; s < c; s++) y[l + s] += a
    }, this.reset = function () {
        var i;
        for (i = 0; i < this.size3; i++) this.normal_cache[3 * i] = 0, this.field[i] = 0
    }, this.render = function (i) {
        this.begin();
        var t, s, h, r, o, a, e, n, l, c = this.size - 2;
        for (r = 1; r < c; r++) for (l = this.size2 * r, e = (r - this.halfsize) / this.halfsize, h = 1; h < c; h++) for (n = l + this.size * h, a = (h - this.halfsize) / this.halfsize, s = 1; s < c; s++) o = (s - this.halfsize) / this.halfsize, t = n + s, this.polygonize(o, a, e, t, this.isolation, i);
        this.end(i)
    }, this.generateGeometry = function () {
        var i = 0, t = new THREE.Geometry, s = [], h = [], r = (new THREE.Vector3(0, 0, 0), function (r) {
            var o, a, e, n, l, c, m, f, y, p, d, v, z, u, A, E;
            for (o = 0; o < r.count; o++) f = 3 * o, y = f + 1, p = f + 2, px = r.positionArray[f], py = r.positionArray[y], pz = r.positionArray[p], l = new THREE.Vector3(px, py, pz), a = r.normalArray[f], e = r.normalArray[y], n = r.normalArray[p], c = new THREE.Vector3(a, e, n), c.normalize(), ax = Math.abs(c.x), ay = Math.abs(c.y), az = Math.abs(c.z), ax > ay && ax > az ? (A = py, E = pz) : ay > ax && ay > az ? (A = px, E = pz) : (A = py, E = pz), t.vertices.push(l), s.push(c), uv = new THREE.Vector2(A, E), h.push(uv);
            for (u = r.count / 3, o = 0; o < u; o++) f = 3 * (i + o), y = f + 1, p = f + 2, d = s[f], v = s[y], z = s[p], m = new THREE.Face3(f, y, p, [d, v, z]), t.faces.push(m), t.faceVertexUvs[0].push([h[f], h[y], h[p]]);
            i += u, r.count = 0
        });
        return this.render(r), t
    }, this.init(i)
}, THREE.MarchingCubes.prototype = Object.create(THREE.ImmediateRenderObject.prototype), THREE.edgeTable = new Int32Array([0, 265, 515, 778, 1030, 1295, 1541, 1804, 2060, 2309, 2575, 2822, 3082, 3331, 3593, 3840, 400, 153, 915, 666, 1430, 1183, 1941, 1692, 2460, 2197, 2975, 2710, 3482, 3219, 3993, 3728, 560, 825, 51, 314, 1590, 1855, 1077, 1340, 2620, 2869, 2111, 2358, 3642, 3891, 3129, 3376, 928, 681, 419, 170, 1958, 1711, 1445, 1196, 2988, 2725, 2479, 2214, 4010, 3747, 3497, 3232, 1120, 1385, 1635, 1898, 102, 367, 613, 876, 3180, 3429, 3695, 3942, 2154, 2403, 2665, 2912, 1520, 1273, 2035, 1786, 502, 255, 1013, 764, 3580, 3317, 4095, 3830, 2554, 2291, 3065, 2800, 1616, 1881, 1107, 1370, 598, 863, 85, 348, 3676, 3925, 3167, 3414, 2650, 2899, 2137, 2384, 1984, 1737, 1475, 1226, 966, 719, 453, 204, 4044, 3781, 3535, 3270, 3018, 2755, 2505, 2240, 2240, 2505, 2755, 3018, 3270, 3535, 3781, 4044, 204, 453, 719, 966, 1226, 1475, 1737, 1984, 2384, 2137, 2899, 2650, 3414, 3167, 3925, 3676, 348, 85, 863, 598, 1370, 1107, 1881, 1616, 2800, 3065, 2291, 2554, 3830, 4095, 3317, 3580, 764, 1013, 255, 502, 1786, 2035, 1273, 1520, 2912, 2665, 2403, 2154, 3942, 3695, 3429, 3180, 876, 613, 367, 102, 1898, 1635, 1385, 1120, 3232, 3497, 3747, 4010, 2214, 2479, 2725, 2988, 1196, 1445, 1711, 1958, 170, 419, 681, 928, 3376, 3129, 3891, 3642, 2358, 2111, 2869, 2620, 1340, 1077, 1855, 1590, 314, 51, 825, 560, 3728, 3993, 3219, 3482, 2710, 2975, 2197, 2460, 1692, 1941, 1183, 1430, 666, 915, 153, 400, 3840, 3593, 3331, 3082, 2822, 2575, 2309, 2060, 1804, 1541, 1295, 1030, 778, 515, 265, 0]), THREE.triTable = new Int32Array([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 8, 3, 9, 8, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 2, 10, 0, 2, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 8, 3, 2, 10, 8, 10, 9, 8, -1, -1, -1, -1, -1, -1, -1, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 11, 2, 8, 11, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 11, 2, 1, 9, 11, 9, 8, 11, -1, -1, -1, -1, -1, -1, -1, 3, 10, 1, 11, 10, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 10, 1, 0, 8, 10, 8, 11, 10, -1, -1, -1, -1, -1, -1, -1, 3, 9, 0, 3, 11, 9, 11, 10, 9, -1, -1, -1, -1, -1, -1, -1, 9, 8, 10, 10, 8, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 3, 0, 7, 3, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 1, 9, 4, 7, 1, 7, 3, 1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 4, 7, 3, 0, 4, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, 9, 2, 10, 9, 0, 2, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, 2, 10, 9, 2, 9, 7, 2, 7, 3, 7, 9, 4, -1, -1, -1, -1, 8, 4, 7, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 4, 7, 11, 2, 4, 2, 0, 4, -1, -1, -1, -1, -1, -1, -1, 9, 0, 1, 8, 4, 7, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, 4, 7, 11, 9, 4, 11, 9, 11, 2, 9, 2, 1, -1, -1, -1, -1, 3, 10, 1, 3, 11, 10, 7, 8, 4, -1, -1, -1, -1, -1, -1, -1, 1, 11, 10, 1, 4, 11, 1, 0, 4, 7, 11, 4, -1, -1, -1, -1, 4, 7, 8, 9, 0, 11, 9, 11, 10, 11, 0, 3, -1, -1, -1, -1, 4, 7, 11, 4, 11, 9, 9, 11, 10, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 5, 4, 1, 5, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 5, 4, 8, 3, 5, 3, 1, 5, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 1, 2, 10, 4, 9, 5, -1, -1, -1, -1, -1, -1, -1, 5, 2, 10, 5, 4, 2, 4, 0, 2, -1, -1, -1, -1, -1, -1, -1, 2, 10, 5, 3, 2, 5, 3, 5, 4, 3, 4, 8, -1, -1, -1, -1, 9, 5, 4, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 11, 2, 0, 8, 11, 4, 9, 5, -1, -1, -1, -1, -1, -1, -1, 0, 5, 4, 0, 1, 5, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, 2, 1, 5, 2, 5, 8, 2, 8, 11, 4, 8, 5, -1, -1, -1, -1, 10, 3, 11, 10, 1, 3, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, 4, 9, 5, 0, 8, 1, 8, 10, 1, 8, 11, 10, -1, -1, -1, -1, 5, 4, 0, 5, 0, 11, 5, 11, 10, 11, 0, 3, -1, -1, -1, -1, 5, 4, 8, 5, 8, 10, 10, 8, 11, -1, -1, -1, -1, -1, -1, -1, 9, 7, 8, 5, 7, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 3, 0, 9, 5, 3, 5, 7, 3, -1, -1, -1, -1, -1, -1, -1, 0, 7, 8, 0, 1, 7, 1, 5, 7, -1, -1, -1, -1, -1, -1, -1, 1, 5, 3, 3, 5, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 7, 8, 9, 5, 7, 10, 1, 2, -1, -1, -1, -1, -1, -1, -1, 10, 1, 2, 9, 5, 0, 5, 3, 0, 5, 7, 3, -1, -1, -1, -1, 8, 0, 2, 8, 2, 5, 8, 5, 7, 10, 5, 2, -1, -1, -1, -1, 2, 10, 5, 2, 5, 3, 3, 5, 7, -1, -1, -1, -1, -1, -1, -1, 7, 9, 5, 7, 8, 9, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, 9, 5, 7, 9, 7, 2, 9, 2, 0, 2, 7, 11, -1, -1, -1, -1, 2, 3, 11, 0, 1, 8, 1, 7, 8, 1, 5, 7, -1, -1, -1, -1, 11, 2, 1, 11, 1, 7, 7, 1, 5, -1, -1, -1, -1, -1, -1, -1, 9, 5, 8, 8, 5, 7, 10, 1, 3, 10, 3, 11, -1, -1, -1, -1, 5, 7, 0, 5, 0, 9, 7, 11, 0, 1, 0, 10, 11, 10, 0, -1, 11, 10, 0, 11, 0, 3, 10, 5, 0, 8, 0, 7, 5, 7, 0, -1, 11, 10, 5, 7, 11, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 0, 1, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 8, 3, 1, 9, 8, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, 1, 6, 5, 2, 6, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 6, 5, 1, 2, 6, 3, 0, 8, -1, -1, -1, -1, -1, -1, -1, 9, 6, 5, 9, 0, 6, 0, 2, 6, -1, -1, -1, -1, -1, -1, -1, 5, 9, 8, 5, 8, 2, 5, 2, 6, 3, 2, 8, -1, -1, -1, -1, 2, 3, 11, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 0, 8, 11, 2, 0, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 2, 3, 11, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 1, 9, 2, 9, 11, 2, 9, 8, 11, -1, -1, -1, -1, 6, 3, 11, 6, 5, 3, 5, 1, 3, -1, -1, -1, -1, -1, -1, -1, 0, 8, 11, 0, 11, 5, 0, 5, 1, 5, 11, 6, -1, -1, -1, -1, 3, 11, 6, 0, 3, 6, 0, 6, 5, 0, 5, 9, -1, -1, -1, -1, 6, 5, 9, 6, 9, 11, 11, 9, 8, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 3, 0, 4, 7, 3, 6, 5, 10, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 5, 10, 6, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, 10, 6, 5, 1, 9, 7, 1, 7, 3, 7, 9, 4, -1, -1, -1, -1, 6, 1, 2, 6, 5, 1, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, 1, 2, 5, 5, 2, 6, 3, 0, 4, 3, 4, 7, -1, -1, -1, -1, 8, 4, 7, 9, 0, 5, 0, 6, 5, 0, 2, 6, -1, -1, -1, -1, 7, 3, 9, 7, 9, 4, 3, 2, 9, 5, 9, 6, 2, 6, 9, -1, 3, 11, 2, 7, 8, 4, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 4, 7, 2, 4, 2, 0, 2, 7, 11, -1, -1, -1, -1, 0, 1, 9, 4, 7, 8, 2, 3, 11, 5, 10, 6, -1, -1, -1, -1, 9, 2, 1, 9, 11, 2, 9, 4, 11, 7, 11, 4, 5, 10, 6, -1, 8, 4, 7, 3, 11, 5, 3, 5, 1, 5, 11, 6, -1, -1, -1, -1, 5, 1, 11, 5, 11, 6, 1, 0, 11, 7, 11, 4, 0, 4, 11, -1, 0, 5, 9, 0, 6, 5, 0, 3, 6, 11, 6, 3, 8, 4, 7, -1, 6, 5, 9, 6, 9, 11, 4, 7, 9, 7, 11, 9, -1, -1, -1, -1, 10, 4, 9, 6, 4, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 10, 6, 4, 9, 10, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1, 10, 0, 1, 10, 6, 0, 6, 4, 0, -1, -1, -1, -1, -1, -1, -1, 8, 3, 1, 8, 1, 6, 8, 6, 4, 6, 1, 10, -1, -1, -1, -1, 1, 4, 9, 1, 2, 4, 2, 6, 4, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 1, 2, 9, 2, 4, 9, 2, 6, 4, -1, -1, -1, -1, 0, 2, 4, 4, 2, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 3, 2, 8, 2, 4, 4, 2, 6, -1, -1, -1, -1, -1, -1, -1, 10, 4, 9, 10, 6, 4, 11, 2, 3, -1, -1, -1, -1, -1, -1, -1, 0, 8, 2, 2, 8, 11, 4, 9, 10, 4, 10, 6, -1, -1, -1, -1, 3, 11, 2, 0, 1, 6, 0, 6, 4, 6, 1, 10, -1, -1, -1, -1, 6, 4, 1, 6, 1, 10, 4, 8, 1, 2, 1, 11, 8, 11, 1, -1, 9, 6, 4, 9, 3, 6, 9, 1, 3, 11, 6, 3, -1, -1, -1, -1, 8, 11, 1, 8, 1, 0, 11, 6, 1, 9, 1, 4, 6, 4, 1, -1, 3, 11, 6, 3, 6, 0, 0, 6, 4, -1, -1, -1, -1, -1, -1, -1, 6, 4, 8, 11, 6, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 10, 6, 7, 8, 10, 8, 9, 10, -1, -1, -1, -1, -1, -1, -1, 0, 7, 3, 0, 10, 7, 0, 9, 10, 6, 7, 10, -1, -1, -1, -1, 10, 6, 7, 1, 10, 7, 1, 7, 8, 1, 8, 0, -1, -1, -1, -1, 10, 6, 7, 10, 7, 1, 1, 7, 3, -1, -1, -1, -1, -1, -1, -1, 1, 2, 6, 1, 6, 8, 1, 8, 9, 8, 6, 7, -1, -1, -1, -1, 2, 6, 9, 2, 9, 1, 6, 7, 9, 0, 9, 3, 7, 3, 9, -1, 7, 8, 0, 7, 0, 6, 6, 0, 2, -1, -1, -1, -1, -1, -1, -1, 7, 3, 2, 6, 7, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 11, 10, 6, 8, 10, 8, 9, 8, 6, 7, -1, -1, -1, -1, 2, 0, 7, 2, 7, 11, 0, 9, 7, 6, 7, 10, 9, 10, 7, -1, 1, 8, 0, 1, 7, 8, 1, 10, 7, 6, 7, 10, 2, 3, 11, -1, 11, 2, 1, 11, 1, 7, 10, 6, 1, 6, 7, 1, -1, -1, -1, -1, 8, 9, 6, 8, 6, 7, 9, 1, 6, 11, 6, 3, 1, 3, 6, -1, 0, 9, 1, 11, 6, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 8, 0, 7, 0, 6, 3, 11, 0, 11, 6, 0, -1, -1, -1, -1, 7, 11, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 1, 9, 8, 3, 1, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, 10, 1, 2, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 3, 0, 8, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, 2, 9, 0, 2, 10, 9, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, 6, 11, 7, 2, 10, 3, 10, 8, 3, 10, 9, 8, -1, -1, -1, -1, 7, 2, 3, 6, 2, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 0, 8, 7, 6, 0, 6, 2, 0, -1, -1, -1, -1, -1, -1, -1, 2, 7, 6, 2, 3, 7, 0, 1, 9, -1, -1, -1, -1, -1, -1, -1, 1, 6, 2, 1, 8, 6, 1, 9, 8, 8, 7, 6, -1, -1, -1, -1, 10, 7, 6, 10, 1, 7, 1, 3, 7, -1, -1, -1, -1, -1, -1, -1, 10, 7, 6, 1, 7, 10, 1, 8, 7, 1, 0, 8, -1, -1, -1, -1, 0, 3, 7, 0, 7, 10, 0, 10, 9, 6, 10, 7, -1, -1, -1, -1, 7, 6, 10, 7, 10, 8, 8, 10, 9, -1, -1, -1, -1, -1, -1, -1, 6, 8, 4, 11, 8, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 6, 11, 3, 0, 6, 0, 4, 6, -1, -1, -1, -1, -1, -1, -1, 8, 6, 11, 8, 4, 6, 9, 0, 1, -1, -1, -1, -1, -1, -1, -1, 9, 4, 6, 9, 6, 3, 9, 3, 1, 11, 3, 6, -1, -1, -1, -1, 6, 8, 4, 6, 11, 8, 2, 10, 1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 3, 0, 11, 0, 6, 11, 0, 4, 6, -1, -1, -1, -1, 4, 11, 8, 4, 6, 11, 0, 2, 9, 2, 10, 9, -1, -1, -1, -1, 10, 9, 3, 10, 3, 2, 9, 4, 3, 11, 3, 6, 4, 6, 3, -1, 8, 2, 3, 8, 4, 2, 4, 6, 2, -1, -1, -1, -1, -1, -1, -1, 0, 4, 2, 4, 6, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 2, 3, 4, 2, 4, 6, 4, 3, 8, -1, -1, -1, -1, 1, 9, 4, 1, 4, 2, 2, 4, 6, -1, -1, -1, -1, -1, -1, -1, 8, 1, 3, 8, 6, 1, 8, 4, 6, 6, 10, 1, -1, -1, -1, -1, 10, 1, 0, 10, 0, 6, 6, 0, 4, -1, -1, -1, -1, -1, -1, -1, 4, 6, 3, 4, 3, 8, 6, 10, 3, 0, 3, 9, 10, 9, 3, -1, 10, 9, 4, 6, 10, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 9, 5, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 4, 9, 5, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, 5, 0, 1, 5, 4, 0, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, 11, 7, 6, 8, 3, 4, 3, 5, 4, 3, 1, 5, -1, -1, -1, -1, 9, 5, 4, 10, 1, 2, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, 6, 11, 7, 1, 2, 10, 0, 8, 3, 4, 9, 5, -1, -1, -1, -1, 7, 6, 11, 5, 4, 10, 4, 2, 10, 4, 0, 2, -1, -1, -1, -1, 3, 4, 8, 3, 5, 4, 3, 2, 5, 10, 5, 2, 11, 7, 6, -1, 7, 2, 3, 7, 6, 2, 5, 4, 9, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, 0, 8, 6, 0, 6, 2, 6, 8, 7, -1, -1, -1, -1, 3, 6, 2, 3, 7, 6, 1, 5, 0, 5, 4, 0, -1, -1, -1, -1, 6, 2, 8, 6, 8, 7, 2, 1, 8, 4, 8, 5, 1, 5, 8, -1, 9, 5, 4, 10, 1, 6, 1, 7, 6, 1, 3, 7, -1, -1, -1, -1, 1, 6, 10, 1, 7, 6, 1, 0, 7, 8, 7, 0, 9, 5, 4, -1, 4, 0, 10, 4, 10, 5, 0, 3, 10, 6, 10, 7, 3, 7, 10, -1, 7, 6, 10, 7, 10, 8, 5, 4, 10, 4, 8, 10, -1, -1, -1, -1, 6, 9, 5, 6, 11, 9, 11, 8, 9, -1, -1, -1, -1, -1, -1, -1, 3, 6, 11, 0, 6, 3, 0, 5, 6, 0, 9, 5, -1, -1, -1, -1, 0, 11, 8, 0, 5, 11, 0, 1, 5, 5, 6, 11, -1, -1, -1, -1, 6, 11, 3, 6, 3, 5, 5, 3, 1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 9, 5, 11, 9, 11, 8, 11, 5, 6, -1, -1, -1, -1, 0, 11, 3, 0, 6, 11, 0, 9, 6, 5, 6, 9, 1, 2, 10, -1, 11, 8, 5, 11, 5, 6, 8, 0, 5, 10, 5, 2, 0, 2, 5, -1, 6, 11, 3, 6, 3, 5, 2, 10, 3, 10, 5, 3, -1, -1, -1, -1, 5, 8, 9, 5, 2, 8, 5, 6, 2, 3, 8, 2, -1, -1, -1, -1, 9, 5, 6, 9, 6, 0, 0, 6, 2, -1, -1, -1, -1, -1, -1, -1, 1, 5, 8, 1, 8, 0, 5, 6, 8, 3, 8, 2, 6, 2, 8, -1, 1, 5, 6, 2, 1, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 3, 6, 1, 6, 10, 3, 8, 6, 5, 6, 9, 8, 9, 6, -1, 10, 1, 0, 10, 0, 6, 9, 5, 0, 5, 6, 0, -1, -1, -1, -1, 0, 3, 8, 5, 6, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, 5, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 5, 10, 7, 5, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 5, 10, 11, 7, 5, 8, 3, 0, -1, -1, -1, -1, -1, -1, -1, 5, 11, 7, 5, 10, 11, 1, 9, 0, -1, -1, -1, -1, -1, -1, -1, 10, 7, 5, 10, 11, 7, 9, 8, 1, 8, 3, 1, -1, -1, -1, -1, 11, 1, 2, 11, 7, 1, 7, 5, 1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 1, 2, 7, 1, 7, 5, 7, 2, 11, -1, -1, -1, -1, 9, 7, 5, 9, 2, 7, 9, 0, 2, 2, 11, 7, -1, -1, -1, -1, 7, 5, 2, 7, 2, 11, 5, 9, 2, 3, 2, 8, 9, 8, 2, -1, 2, 5, 10, 2, 3, 5, 3, 7, 5, -1, -1, -1, -1, -1, -1, -1, 8, 2, 0, 8, 5, 2, 8, 7, 5, 10, 2, 5, -1, -1, -1, -1, 9, 0, 1, 5, 10, 3, 5, 3, 7, 3, 10, 2, -1, -1, -1, -1, 9, 8, 2, 9, 2, 1, 8, 7, 2, 10, 2, 5, 7, 5, 2, -1, 1, 3, 5, 3, 7, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 7, 0, 7, 1, 1, 7, 5, -1, -1, -1, -1, -1, -1, -1, 9, 0, 3, 9, 3, 5, 5, 3, 7, -1, -1, -1, -1, -1, -1, -1, 9, 8, 7, 5, 9, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5, 8, 4, 5, 10, 8, 10, 11, 8, -1, -1, -1, -1, -1, -1, -1, 5, 0, 4, 5, 11, 0, 5, 10, 11, 11, 3, 0, -1, -1, -1, -1, 0, 1, 9, 8, 4, 10, 8, 10, 11, 10, 4, 5, -1, -1, -1, -1, 10, 11, 4, 10, 4, 5, 11, 3, 4, 9, 4, 1, 3, 1, 4, -1, 2, 5, 1, 2, 8, 5, 2, 11, 8, 4, 5, 8, -1, -1, -1, -1, 0, 4, 11, 0, 11, 3, 4, 5, 11, 2, 11, 1, 5, 1, 11, -1, 0, 2, 5, 0, 5, 9, 2, 11, 5, 4, 5, 8, 11, 8, 5, -1, 9, 4, 5, 2, 11, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 5, 10, 3, 5, 2, 3, 4, 5, 3, 8, 4, -1, -1, -1, -1, 5, 10, 2, 5, 2, 4, 4, 2, 0, -1, -1, -1, -1, -1, -1, -1, 3, 10, 2, 3, 5, 10, 3, 8, 5, 4, 5, 8, 0, 1, 9, -1, 5, 10, 2, 5, 2, 4, 1, 9, 2, 9, 4, 2, -1, -1, -1, -1, 8, 4, 5, 8, 5, 3, 3, 5, 1, -1, -1, -1, -1, -1, -1, -1, 0, 4, 5, 1, 0, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 4, 5, 8, 5, 3, 9, 0, 5, 0, 3, 5, -1, -1, -1, -1, 9, 4, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 11, 7, 4, 9, 11, 9, 10, 11, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 4, 9, 7, 9, 11, 7, 9, 10, 11, -1, -1, -1, -1, 1, 10, 11, 1, 11, 4, 1, 4, 0, 7, 4, 11, -1, -1, -1, -1, 3, 1, 4, 3, 4, 8, 1, 10, 4, 7, 4, 11, 10, 11, 4, -1, 4, 11, 7, 9, 11, 4, 9, 2, 11, 9, 1, 2, -1, -1, -1, -1, 9, 7, 4, 9, 11, 7, 9, 1, 11, 2, 11, 1, 0, 8, 3, -1, 11, 7, 4, 11, 4, 2, 2, 4, 0, -1, -1, -1, -1, -1, -1, -1, 11, 7, 4, 11, 4, 2, 8, 3, 4, 3, 2, 4, -1, -1, -1, -1, 2, 9, 10, 2, 7, 9, 2, 3, 7, 7, 4, 9, -1, -1, -1, -1, 9, 10, 7, 9, 7, 4, 10, 2, 7, 8, 7, 0, 2, 0, 7, -1, 3, 7, 10, 3, 10, 2, 7, 4, 10, 1, 10, 0, 4, 0, 10, -1, 1, 10, 2, 8, 7, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 9, 1, 4, 1, 7, 7, 1, 3, -1, -1, -1, -1, -1, -1, -1, 4, 9, 1, 4, 1, 7, 0, 8, 1, 8, 7, 1, -1, -1, -1, -1, 4, 0, 3, 7, 4, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 8, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 10, 8, 10, 11, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 9, 3, 9, 11, 11, 9, 10, -1, -1, -1, -1, -1, -1, -1, 0, 1, 10, 0, 10, 8, 8, 10, 11, -1, -1, -1, -1, -1, -1, -1, 3, 1, 10, 11, 3, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 11, 1, 11, 9, 9, 11, 8, -1, -1, -1, -1, -1, -1, -1, 3, 0, 9, 3, 9, 11, 1, 2, 9, 2, 11, 9, -1, -1, -1, -1, 0, 2, 11, 8, 0, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 2, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 8, 2, 8, 10, 10, 8, 9, -1, -1, -1, -1, -1, -1, -1, 9, 10, 2, 0, 9, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 8, 2, 8, 10, 0, 1, 8, 1, 10, 8, -1, -1, -1, -1, 1, 10, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 3, 8, 9, 1, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 9, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 3, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]);
var Pages = Pages || {};
App = function (e) {
    function t() {
        $('a[href*="#"]:not([href="#"])').on("click", Utils.smoothScroll), n.browser.is && n.$html.addClass("is-" + n.browser.is), n.device.is && n.$html.addClass("is-ios")
    }

    var n = Config.getInstance();
    n.$window.on({load: t}), e && new Pages[e]
}, Config = function () {
    function e() {
        var e = {};
        e.$document = $(document), e.$window = $(window), e.$html = $("html"), e.$body = $("body"), e.$htmlBody = $("html, body"), e.$title = $("title"), e.$desc = $('meta[name = "description" ]'), e.$nav = $(".js-nav"), e.$page = $("#js-page"), e.$overlay = $("#js-overlay"), e.$overlayHero = e.$overlay.find(".overlay__hero"), e.$header = $(".header"), e.$footer = $(".footer"), e.W = {
            w: e.$window.innerWidth(),
            vw: window.innerWidth,
            h: e.$window.innerHeight(),
            vh: window.innerHeight
        }, e.$window.on("resize", function () {
            e.W = {w: e.$window.innerWidth(), vw: window.innerWidth, h: e.$window.innerHeight(), vh: window.innerHeight}
        }), e.browser = {
            isOpera: !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0,
            isFirefox: "undefined" != typeof InstallTrigger,
            isSafari: Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 || function (e) {
                return "[object SafariRemoteNotification]" === e.toString()
            }(!window.safari || safari.pushNotification),
            isIE: !!document.documentMode,
            isEdge: !!window.StyleMedia,
            isChrome: !!window.chrome && !!window.chrome.webstore
        }, e.browser.is = e.browser.isOpera ? "opera" : e.browser.isFirefox ? "firefox" : e.browser.isSafari ? "safari" : e.browser.isIE ? "ie" : e.browser.isEdge ? "edge" : !!e.browser.isChrome && "chrome";
        var t = navigator.userAgent || navigator.vendor || window.opera;
        return e.device = {isIOS: /iPad|iPhone|iPod/.test(t) && !window.MSStream}, e.device.is = !!e.device.isIOS && "ios", e
    }

    var t;
    return {
        getInstance: function () {
            return t || (t = e()), t
        }
    }
}();
var config = Config.getInstance();
Pages.home = function () {
    new Video, new Metaballs("js-metaballs")
}, Canvas = function () {
    "use strict";

    function e() {
        var e = a.getBoundingClientRect();
        a.width = e.width, a.height = e.height, l.shadow = config.W.w > config.W.h ? config.W.w : config.W.h
    }

    function t(e) {
        var t = this;
        t.half_size = Math.floor(50 * Math.random() + 1), t.x = Math.floor(Math.random() * a.width + 1), t.y = Math.floor(Math.random() * a.height + 1), t.r = Math.random() * Math.PI * 40, t.color = l.colors[Math.floor(Math.random() * l.colors.length)], t.points = e, t.rotation = 0, t.rotationInc = Math.random() / 500, t.rotationInc *= Math.random() < .5 ? -1 : 1, t.getDots = function () {
            var e = {};
            for (i = 0; i < t.points; i++) e["p" + (i + 1)] = {
                x: t.x + t.r * Math.cos(t.rotation + 2 * i * Math.PI / t.points),
                y: t.y + t.r * -Math.sin(t.rotation + 2 * i * Math.PI / t.points)
            };
            return t.rotation += t.rotationInc, e
        }, t.rotate = function () {
            var e = (60 - t.half_size) / 60;
            t.r += .002 * e, t.x += 1.2 * e, t.y -= e
        }, t.draw = function () {
            var e = t.getDots();
            r.beginPath(), r.moveTo(e.p1.x, e.p1.y);
            var n = 0;
            for (var o in e) n > 0 && r.lineTo(e[o].x, e[o].y), n++;
            r.fillStyle = t.color, r.fill(), t.y < -t.r && (t.y += a.height + 2 * t.r), t.x > a.width + t.r && (t.x -= a.width + 2 * t.r)
        }, t.drawShadow = function () {
            var e = t.getDots(), n = [], o = [];
            for (var a in e) {
                var i = Math.atan2(s.y - e[a].y, s.x - e[a].x), d = e[a].x + l.shadow * Math.sin(-i - Math.PI / 2),
                    c = e[a].y + l.shadow * Math.cos(-i - Math.PI / 2);
                n.push(i), o.push({endX: d, endY: c, startX: e[a].x, startY: e[a].y})
            }
            for (var h = o.length - 1; h >= 0; h--) {
                var f = h === t.points - 1 ? 0 : h + 1;
                r.beginPath(), r.moveTo(o[h].startX, o[h].startY), r.lineTo(o[f].startX, o[f].startY), r.lineTo(o[f].endX, o[f].endY), r.lineTo(o[h].endX, o[h].endY), gradient = r.createLinearGradient(o[h].startX, o[h].startY, o[h].endX, o[h].endY), gradient.addColorStop(0, t.color), gradient.addColorStop(1, "transparent"), r.fillStyle = gradient, r.fill()
            }
        }
    }

    function n() {
        r.clearRect(0, 0, a.width, a.height);
        for (var e = 0; e < d.length; e++) d[e].rotate(), d[e].drawShadow();
        for (e = 0; e < d.length; e++) o(e), d[e].draw();
        requestAnimationFrame(n)
    }

    function o(e) {
        for (var t = d.length - 1; t >= 0; t--) if (t !== e) {
            var n = d[e].x + d[e].half_size - (d[t].x + d[t].half_size),
                o = d[e].y + d[e].half_size - (d[t].y + d[t].half_size), a = Math.sqrt(n * n + o * o);
            a < d[e].half_size + d[t].half_size && (d[e].half_size = d[e].half_size > 1 ? d[e].half_size -= 1 : 1, d[t].half_size = d[t].half_size > 1 ? d[t].half_size -= 1 : 1)
        }
    }

    var a = document.getElementById("js-canvas"), r = a.getContext("2d"), s = {x: 160, y: 200}, l = {
        number: 12,
        colors: ["rgba(0, 176, 239, 0.3)", "rgba(251, 30, 73, 0.3)", "rgba(255, 235, 59, 0.3)"],
        sides: [4, 50],
        shadow: config.W.w > config.W.h ? config.W.w : config.W.h
    }, d = [];
    for (e(), n(); d.length < l.number;) d.push(new t(l.sides[d.length % l.sides.length]));
    config.$window.on("resize", e), config.$document.on("mousemove", function (e) {
        s.x = void 0 === e.offsetX ? e.layerX : e.offsetX, s.y = void 0 === e.offsetY ? e.layerY : e.offsetY
    })
}, Lazy = function (e) {
    "use strict";

    function t() {
        l = window.innerWidth || document.documentElement.clientWidth, d = window.innerHeight || document.documentElement.clientHeight
    }

    function n(e, t) {
        var n = 0;
        return function () {
            var o = +new Date;
            o - n < t || (n = o, e())
        }
    }

    //if (!(this instanceof Lazy)) return new Lazy(e);
    var o = this;
    o.options = {
        src: "data-src",
        selector: ".js-lazy",
        separator: " | ",
        breakpoints: [{width: 1440, src: "data-src-largest"}, {width: 1280, src: "data-src-larger"}, {
            width: 992,
            src: "data-src-large"
        }, {width: 768, src: "data-src-medium"}, {width: 480, src: "data-src-small"}, {
            width: 0,
            src: "data-src-smaller"
        }],
        offset: window.innerWidth,
        onError: function () {
        },
        errorClass: "has-error",
        onSuccess: function () {
        },
        successClass: "is-loaded"
    }, $.extend(!0, o.options, e);
    var a = o.options, i = [], r = a.src, s = window.devicePixelRatio >= 1.5, l = window.innerWidth,
        d = window.innerHeight;
    return o.validate = function () {
        if (o.$images.each(function () {
            var e = $(this);
            (o.isInViewport(this) || e.hasClass(a.successClass)) && o.load(this)
        }), 0 === i.length) return o.destroy(), !1
    }, o.load = function (e) {
        var t = $(e), n = t.attr(r) || t.attr(a.src);
        if (n) {
            var o = n.split(a.separator), l = o[s && o.length > 1 ? 1 : 0];
            if ($.each(a.breakpoints, function (e, n) {
                t.removeAttr(n.src)
            }), t.removeAttr(a.src), "img" === e.nodeName.toLowerCase() || void 0 === e.src) {
                var d = new Image;
                d.onerror = function () {
                    a.onError && a.onError(e, "invalid"), t.addClass(a.errorClass)
                }, d.onload = function () {
                    if ("img" === e.nodeName.toLowerCase()) e.src = l; else if ("image" === e.nodeName.toLowerCase()) {
                        var n = document.createElementNS("http://www.w3.org/2000/svg", "image");
                        n.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l), n.setAttribute("x", e.getAttribute("x")), n.setAttribute("y", e.getAttribute("y")), n.setAttribute("width", e.width.baseVal.value), n.setAttribute("height", e.height.baseVal.value), e.parentNode.appendChild(n), e.remove()
                    } else t.css("background-image", 'url("' + l + '")');
                    t.addClass(a.successClass), a.onSuccess && a.onSuccess(e)
                }, d.src = l, i.splice($.inArray(e, i), 1)
            } else "video" === e.nodeName.toLowerCase() && (e.src = l, t.addClass(a.successClass), a.onSuccess && a.onSuccess(e))
        }
    }, o.isInViewport = function (e) {
        var t = e.getBoundingClientRect(), n = d + a.offset;
        return t.top >= 0 && t.top <= n || t.bottom <= n && t.bottom >= 0 - a.offset
    }, o.init = function () {
        o.destroyed = !0, o.$images = $(a.selector), o.$images.each(function () {
            i.push(this)
        }), t(), o.validateT = n(o.validate, 250), o.updateSizesT = n(t, 500), o.updateAndValidateT = function () {
            o.updateSizesT(), o.validateT()
        }, $.each(a.breakpoints, function (e, t) {
            if (t.width <= l) return r = t.src, !1
        }), o.destroyed && (o.destroyed = !1, $(window).on({
            resize: o.updateAndValidateT,
            scroll: o.validateT
        })), o.validate()
    }, o.init(), o
}, Lazy.prototype = {
    revalidate: function () {
        var e = this;
        e.destroyed || e.validate()
    }, reInit: function () {
        var e = this;
        e.$images = $(e.options.selector).not("." + e.options.successClass), e.$images && (e.destroyed = !1, e.revalidate())
    }, destroy: function () {
        var e = this;
        e.destroyed = !0, $(window).off({resize: e.updateAndValidateT, scroll: e.validateT}), e.$images = null
    }
}, Metaballs = function (e) {
    function t(e) {
        var t, n;
        e.changedTouches ? (t = e.changedTouches[0].pageX, n = e.changedTouches[0].pageY) : (t = e.clientX, n = e.clientY), P = !0, onPointerDownPointerX = t, onPointerDownPointerY = n, onPointerDownLon = m, onPointerDownLat = C
    }

    function n(e) {
        e.changedTouches ? (x = e.changedTouches[0].pageX, y = e.changedTouches[0].pageY) : (x = e.clientX, y = e.clientY), P && (b = .1 * (x - onPointerDownPointerX) + onPointerDownLon, v = .1 * (y - onPointerDownPointerY) + onPointerDownLat), z.x = x / f.w * 2 - 1, z.y = 2 * -(y / f.h) + 1, e.preventDefault()
    }

    function o(e) {
        P = !1, e.preventDefault()
    }

    function a(e) {
        x = e.beta, y = e.gamma, b = x, v = y, e.preventDefault()
    }

    function i() {
        f.w = $(e).innerWidth(), f.h = $(e).innerHeight();
        l.setSize(1 * f.w, 1 * f.h), c.projectionMatrix.makePerspective(u, f.w / f.h, c.near, c.far)
    }

    function r(e, t, n) {
        e.reset();
        var o, a, i, r, s, l;
        for (s = 12, l = 2.2 / ((Math.sqrt(n) - 1) / 4 + 1), o = 0; o < n; o++) a = .27 * Math.sin(o + 1.26 * t * (1.03 + .5 * Math.cos(.21 * o))) + .5, i = .27 * Math.cos(o + 1.12 * t * .21 * Math.sin(.72 + .83 * o)) + .5, r = .27 * Math.cos(o + 1.32 * t * .1 * Math.sin(.92 + .53 * o)) + .5, e.addBall(a, i, r, l, s)
    }

    function s() {
        requestAnimationFrame(s), r(effect, 5e-4 * (Date.now() - p), f.numBlobs), v = Math.max(-85, Math.min(85, v)), C += .1 * (v - C), m += .1 * (b - m), T = (90 - C) * Math.PI / 180, M = m * Math.PI / 180, w += .1 * (g - w), c.position.x = d.position.x + w * Math.sin(T) * Math.cos(M), c.position.y = d.position.y + w * Math.cos(T), c.position.z = d.position.z + w * Math.sin(T) * Math.sin(M), c.lookAt(d.position), l.render(d, c)
    }

    if (!(this instanceof Metaballs)) return new Metaballs(e);
    e = document.getElementById(e);
    var l, d, c, h, f = {
        w: $(e).innerWidth(),
        h: $(e).innerHeight(),
        numBlobs: 10,
        blobColor: 16119285,
        sceneBg: 16777215,
        sceneLight: 10066329
    }, u = 90, p = Date.now(), w = 1e3, g = 160, m = 0, v = 0, b = 0, T = 0, M = 0, C = 15, P = !1, z = {x: 0, y: 0};
    !function () {
        d = new THREE.Scene, d.position = new THREE.Vector3(0, 0, 0), c = new THREE.PerspectiveCamera(u, f.w / f.h, .01, 1e5), c.position.z = 100, c.target = new THREE.Vector3(0, 0, 0), d.add(c), l = new THREE.WebGLRenderer({antialias: !0}), l.autoClear = !0, l.setClearColor(f.sceneBg), l.setSize(f.w, f.h), l.gammaInput = !0, l.gammaOutput = !0, l.physicallyBasedShading = !0, e.appendChild(l.domElement), window.addEventListener("resize", i, !1), window.addEventListener("orientationchange", i), window.addEventListener("mousedown", t), window.addEventListener("mousemove", n), window.addEventListener("mouseup", o), window.addEventListener("deviceorientation", a), resolution = 75, h = new THREE.MeshLambertMaterial({color: f.blobColor}), effect = new THREE.MarchingCubes(resolution, h, !0, !1), effect.scale.set(100, 100, 100), d.add(effect), light = new THREE.DirectionalLight(f.sceneLight, 1), light.position.set(.5, .5, .5), d.add(light), light = new THREE.DirectionalLight(f.sceneLight, 1), light.position.set(.5, -.5, -.5), d.add(light), light = new THREE.DirectionalLight(f.sceneLight, 1), light.position.set(-.5, .5, .5), d.add(light), light = new THREE.DirectionalLight(f.sceneLight, 1), light.position.set(.5, -.5, .5), d.add(light), ambientLight = new THREE.AmbientLight(f.sceneLight), d.add(ambientLight), r(effect, 0, f.numBlobs), i(), s()
    }()
};
var Utils = Utils || {};
Utils.smoothScroll = function () {
    "use strict";
    if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
        var e = $(this.hash);
        if (e.length) return TweenMax.to(window, .8, {scrollTo: {y: e.offset().top}, ease: Expo.easeInOut}), !1
    }
}, Video = function () {
    "use strict";

    function e() {
        n.each(function () {
            var e = $(this), n = e.innerHeight(), o = e.offset().top;
            o > t.$window.scrollTop() + t.W.h && o + n + t.W.h > t.$window.scrollTop() ? this.pause() : this.play()
        })
    }

    if (!(this instanceof Video)) return new Video;
    var t = Config.getInstance();
    if (!t.$body.hasClass("is-mobile")) {
        var n = $("video");
        t.$window.on("scroll", e), e()
    }
};

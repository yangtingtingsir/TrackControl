var _STRINGS = {
    Ad: {
        Mobile: {
            Preroll: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            Header: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            End: {
                ReadyIn: "Advertisement ends in ",
                Loading: "Please wait ...",
                Close: "Close"
            }
        }
    },
    Splash: {
        Loading: "Loading ...",
        LogoLine1: "Some text here",
        LogoLine2: "powered by MarketJS",
        LogoLine3: "none"
    },
    Game: {
        SelectPlayer: "Select Player",
        Win: "You win!",
        Lose: "You lose!",
        Score: "Score",
        Time: "Time"
    },
    Results: {
        Title: "High score"
    },
    tutorial: {
        game: ["Welcome to Lost Treasure Slots! \nIn this tutorial, you will learn how to master the game. \n>>>", "Press 'BET' to change bet size. You are playing 17 lines. \nThe total bet will be the 'Bet Size X 17'. For example: 1 X 17 = 17 \n>>>", "You may press 'AUTO SPIN' once to toggle auto spin. \nPress it again to stop auto spinning. \n>>>", "Press 'SPIN' to start spinning. Have fun! \n>>>"],
        bonus: ["You have won your first bonus. Spin the wheel and win a price. Good luck.\n>>>"]
    }
};
var _SETTINGS = {
    API: {
        Enabled: !0,
        Log: {
            Events: {
                InitializeGame: !0,
                EndGame: !0,
                Level: {
                    Begin: !0,
                    End: !0,
                    Win: !0,
                    Lose: !0,
                    Draw: !0
                }
            }
        }
    },
    Ad: {
        Mobile: {
            Preroll: {
                Enabled: !0,
                Duration: 5,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGamePreroll: 40,
                        MobileAdInGamePreroll2: 40,
                        MobileAdInGamePreroll3: 20
                    }
                }
            },
            Header: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameHeader: 40,
                        MobileAdInGameHeader2: 40,
                        MobileAdInGameHeader3: 20
                    }
                }
            },
            Footer: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameFooter: 40,
                        MobileAdInGameFooter2: 40,
                        MobileAdInGameFooter3: 20
                    }
                }
            },
            End: {
                Enabled: !1,
                Duration: 1,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameEnd: 40,
                        MobileAdInGameEnd2: 40,
                        MobileAdInGameEnd3: 20
                    }
                }
            }
        }
    },
    Language: {
        Default: "en"
    },
    DeveloperBranding: {
        Splash: {
            Enabled: !0
        },
        Logo: {
            Enabled: !0,
            Link: "http://google.com",
            LinkEnabled: !0,
            Width: 166,
            Height: 61
        }
    },
    Branding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://google.com",
            Width: 280,
            Height: 34
        }
    },
    MoreGames: {
        Enabled: !0,
        Link: "http://www.marketjs.com/game/links/mobile"
    },
    Gamecenter: {
        Enabled: !0
    }
};
var MobileAdInGamePreroll = {
    ad_duration: _SETTINGS.Ad.Mobile.Preroll.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Preroll.Width,
    ad_height: _SETTINGS.Ad.Mobile.Preroll.Height,
    ready_in: _STRINGS.Ad.Mobile.Preroll.ReadyIn,
    loading: _STRINGS.Ad.Mobile.Preroll.Loading,
    close: _STRINGS.Ad.Mobile.Preroll.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    Initialize: function() {
        if (false) {
            var b = _SETTINGS.Ad.Mobile.Preroll.Rotation.Weight,
                c = b.MobileAdInGamePreroll,
                d = c + b.MobileAdInGamePreroll2,
                b = d + b.MobileAdInGamePreroll3,
                f = Math.floor(100 * Math.random());
            console.log("seed: ", f);
            f <= c ? this.selectedOverlayName = "MobileAdInGamePreroll" : f <= d ? this.selectedOverlayName = "MobileAdInGamePreroll2" : f <= b && (this.selectedOverlayName = "MobileAdInGamePreroll3");
            console.log("Ad rotating preroll enabled")
        } else
            this.selectedOverlayName = "MobileAdInGamePreroll",
            console.log("Ad rotating preroll disabled");
        console.log("selected:", this.selectedOverlayName);
        this.overlay = $("#" + this.selectedOverlayName);
        this.box = $("#" + this.selectedOverlayName + "-Box");
        this.game = $("#game");
        this.boxContents = {
            footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
            header: $("#" + this.selectedOverlayName + "-Box-Header"),
            close: $("#" + this.selectedOverlayName + "-Box-Close"),
            body: $("#" + this.selectedOverlayName + "-Box-Body")
        };
        this.box.width(this.ad_width);
        this.box.height(this.ad_height);
        this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
        this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() -
        this.boxContents.footer.height()) / 2);
        this.overlay.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = b,
            d = setInterval(function() {
                MobileAdInGamePreroll.boxContents.header.text(MobileAdInGamePreroll.ready_in + c + "...");
                MobileAdInGamePreroll.boxContents.footer.text(MobileAdInGamePreroll.loading);
                c--;
                0 > c && (clearInterval(d), MobileAdInGamePreroll.boxContents.close.css("left", MobileAdInGamePreroll.boxContents.body.width() - 23), MobileAdInGamePreroll.boxContents.close.show(), MobileAdInGamePreroll.boxContents.header.html(MobileAdInGamePreroll.close), MobileAdInGamePreroll.boxContents.footer.text(""))
            }, 1E3)
    },
    Close: function() {
        this.boxContents.close.hide();
        this.overlay.hide()
    }
};
var MobileAdInGameHeader = {
    ad_duration: _SETTINGS.Ad.Mobile.Header.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Header.Width,
    ad_height: _SETTINGS.Ad.Mobile.Header.Height,
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Header.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Header.Rotation.Weight,
                c = b.MobileAdInGameHeader,
                d = c + b.MobileAdInGameHeader2,
                b = d + b.MobileAdInGameHeader3,
                f = Math.floor(100 * Math.random());
            console.log("seed: ", f);
            f <= c ? this.selectedOverlayName = "MobileAdInGameHeader" : f <= d ? this.selectedOverlayName = "MobileAdInGameHeader2" : f <= b && (this.selectedOverlayName = "MobileAdInGameHeader3");
            console.log("Ad rotating header enabled")
        } else
            this.selectedOverlayName = "MobileAdInGameHeader",
            console.log("Ad rotating header disabled");
        this.div = $("#" + this.selectedOverlayName);
        this.game = $("#game");
        this.div.width(this.ad_width);
        this.div.height(this.ad_height);
        this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
        this.div.css("top", 0);
        this.div.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = setInterval(function() {
            b--;
            0 > b && (MobileAdInGameHeader.div.hide(), clearInterval(c))
        }, 1E3)
    }
};
var MobileAdInGameFooter = {
    ad_duration: _SETTINGS.Ad.Mobile.Footer.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Footer.Width,
    ad_height: _SETTINGS.Ad.Mobile.Footer.Height,
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Footer.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Footer.Rotation.Weight,
                c = b.MobileAdInGameFooter,
                d = c + b.MobileAdInGameFooter2,
                b = d + b.MobileAdInGameFooter3,
                f = Math.floor(100 * Math.random());
            console.log("seed: ", f);
            f <= c ? this.selectedOverlayName = "MobileAdInGameFooter" : f <= d ? this.selectedOverlayName = "MobileAdInGameFooter2" : f <= b && (this.selectedOverlayName = "MobileAdInGameFooter3");
            console.log("Ad rotating footer enabled")
        } else
            this.selectedOverlayName = "MobileAdInGameFooter",
            console.log("Ad rotating footer disabled");
        this.div = $("#" + this.selectedOverlayName);
        this.game = $("#game");
        this.div.width(this.ad_width);
        this.div.height(this.ad_height);
        this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
        this.div.css("top", this.game.height() - this.div.height() - 5);
        this.div.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = setInterval(function() {
            b--;
            0 > b && (MobileAdInGameFooter.div.hide(), clearInterval(c))
        }, 1E3)
    }
};
var MobileAdInGameEnd = {
    ad_duration: _SETTINGS.Ad.Mobile.End.Duration,
    ad_width: _SETTINGS.Ad.Mobile.End.Width,
    ad_height: _SETTINGS.Ad.Mobile.End.Height,
    ready_in: _STRINGS.Ad.Mobile.End.ReadyIn,
    loading: _STRINGS.Ad.Mobile.End.Loading,
    close: _STRINGS.Ad.Mobile.End.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.End.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.End.Rotation.Weight,
                c = b.MobileAdInGameEnd,
                d = c + b.MobileAdInGameEnd2,
                b = d + b.MobileAdInGameEnd3,
                f = Math.floor(100 * Math.random());
            console.log("seed: ", f);
            f <= c ? this.selectedOverlayName = "MobileAdInGameEnd" : f <= d ? this.selectedOverlayName = "MobileAdInGameEnd2" : f <= b && (this.selectedOverlayName = "MobileAdInGameEnd3");
            console.log("Ad rotating end enabled")
        } else
            this.selectedOverlayName = "MobileAdInGameEnd",
            console.log("Ad rotating end disabled");
        console.log("selected:", this.selectedOverlayName);
        this.overlay = $("#" + this.selectedOverlayName);
        this.box = $("#" + this.selectedOverlayName + "-Box");
        this.game = $("#game");
        this.boxContents = {
            footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
            header: $("#" + this.selectedOverlayName + "-Box-Header"),
            close: $("#" + this.selectedOverlayName + "-Box-Close"),
            body: $("#" + this.selectedOverlayName + "-Box-Body")
        };
        this.box.width(this.ad_width);
        this.box.height(this.ad_height);
        this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
        this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() - this.boxContents.footer.height()) / 2);
        this.overlay.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = b,
            d = setInterval(function() {
                MobileAdInGameEnd.boxContents.header.text(MobileAdInGameEnd.ready_in + c + "...");
                MobileAdInGameEnd.boxContents.footer.text(MobileAdInGameEnd.loading);
                c--;
                0 > c && (clearInterval(d), MobileAdInGameEnd.boxContents.close.css("left", MobileAdInGameEnd.boxContents.body.width() - 23), MobileAdInGameEnd.boxContents.close.show(), MobileAdInGameEnd.boxContents.header.html(MobileAdInGameEnd.close), MobileAdInGameEnd.boxContents.footer.text(""))
            }, 1E3)
    },
    Close: function() {
        this.boxContents.close.hide();
        this.overlay.hide()
    }
};
(function(b, c) {
    function d(r, b, l) {
        if (l === c && 1 === r.nodeType)
            if (l = "data-" + b.replace(sc, "-$1").toLowerCase(), l = r.getAttribute(l), "string" == typeof l) {
                try {
                    l = "true" === l ? !0 : "false" === l ? !1 : "null" === l ? null : +l + "" === l ? +l : tc.test(l) ? e.parseJSON(l) : l
                } catch (B) {}
                e.data(r, b, l)
            } else
                l = c;
        return l
    }
    function f(r) {
        for (var b in r)
            if (!("data" === b && e.isEmptyObject(r[b])) && "toJSON" !== b)
                return !1;
        return !0
    }
    function g() {
        return !1
    }
    function m() {
        return !0
    }
    function u(r) {
        return !r || !r.parentNode || 11 === r.parentNode.nodeType
    }
    function A(r, b) {
        do r = r[b];
        while (r && 1 !== r.nodeType);
        return r
    }
    function q(r, b, c) {
        b = b || 0;
        if (e.isFunction(b))
            return e.grep(r, function(r, e) {
                return !!b.call(r, e, r) === c
            });
        if (b.nodeType)
            return e.grep(r, function(r) {
                return r === b === c
            });
        if ("string" == typeof b) {
            var B = e.grep(r, function(r) {
                return 1 === r.nodeType
            });
            if (uc.test(b))
                return e.filter(b, B, !c);
            b = e.filter(b, B)
        }
        return e.grep(r, function(r) {
            return 0 <= e.inArray(r, b) === c
        })
    }
    function x(r) {
        var b = wb.split("|");
        r = r.createDocumentFragment();
        if (r.createElement)
            for (; b.length;)
                r.createElement(b.pop());
        return r
    }
    function z(r, b) {
        if (1 === b.nodeType && e.hasData(r)) {
            var c,
                B,
                d;
            B = e._data(r);
            var v = e._data(b, B),
                s = B.events;
            if (s)
                for (c in delete v.handle, v.events = {}, s) {
                    B = 0;
                    for (d = s[c].length; B < d; B++)
                        e.event.add(b, c, s[c][B])
                }
            v.data && (v.data = e.extend({}, v.data))
        }
    }
    function j(r, b) {
        var c;
        1 === b.nodeType && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(r), c = b.nodeName.toLowerCase(), "object" === c ? (b.parentNode && (b.outerHTML = r.outerHTML), e.support.html5Clone && r.innerHTML && !e.trim(b.innerHTML) && (b.innerHTML = r.innerHTML)) : "input" === c && xb.test(r.type) ? (b.defaultChecked = b.checked = r.checked, b.value !== r.value && (b.value = r.value)) : "option" === c ? b.selected = r.defaultSelected : "input" === c || "textarea" === c ? b.defaultValue = r.defaultValue : "script" === c && b.text !== r.text && (b.text = r.text), b.removeAttribute(e.expando))
    }
    function p(r) {
        return "undefined" != typeof r.getElementsByTagName ? r.getElementsByTagName("*") : "undefined" != typeof r.querySelectorAll ? r.querySelectorAll("*") : []
    }
    function t(r) {
        xb.test(r.type) && (r.defaultChecked = r.checked)
    }
    function y(r, b) {
        if (b in r)
            return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), e = b, d = yb.length; d--;)
            if (b = yb[d] + c, b in r)
                return b;
        return e
    }
    function M(r, b) {
        return r = b || r, "none" === e.css(r, "display") || !e.contains(r.ownerDocument, r)
    }
    function E(r, b) {
        for (var c, B, d = [], v = 0, s = r.length; v < s; v++)
            c = r[v],
            c.style && (d[v] = e._data(c, "olddisplay"), b ? (!d[v] && "none" === c.style.display && (c.style.display = ""), "" === c.style.display && M(c) && (d[v] = e._data(c, "olddisplay", O(c.nodeName)))) : (B = P(c, "display"), !d[v] && "none" !== B && e._data(c, "olddisplay", B)));
        for (v = 0; v < s; v++)
            if (c = r[v], c.style && (!b || "none" === c.style.display || "" === c.style.display))
                c.style.display = b ? d[v] || "" : "none";
        return r
    }
    function D(r, b, c) {
        return (r = vc.exec(b)) ? Math.max(0, r[1] - (c || 0)) + (r[2] || "px") : b
    }
    function Xa(r, b, c, B) {
        b = c === (B ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
        for (var d = 0; 4 > b; b += 2)
            "margin" === c && (d += e.css(r, c + ea[b], !0)),
            B ? ("content" === c && (d -= parseFloat(P(r, "padding" + ea[b])) || 0), "margin" !== c && (d -= parseFloat(P(r, "border" + ea[b] + "Width")) || 0)) : (d += parseFloat(P(r, "padding" + ea[b])) || 0, "padding" !== c && (d += parseFloat(P(r, "border" + ea[b] + "Width")) || 0));
        return d
    }
    function G(r, b, c) {
        var B = "width" === b ? r.offsetWidth : r.offsetHeight,
            d = !0,
            v = e.support.boxSizing && "border-box" === e.css(r, "boxSizing");
        if (0 >= B || null == B) {
            B = P(r, b);
            if (0 > B || null == B)
                B = r.style[b];
            if (ya.test(B))
                return B;
            d = v && (e.support.boxSizingReliable || B === r.style[b]);
            B = parseFloat(B) || 0
        }
        return B + Xa(r, b, c || (v ? "border" : "content"), d) + "px"
    }
    function O(r) {
        if (Ya[r])
            return Ya[r];
        var b = e("<" + r + ">").appendTo(C.body),
            c = b.css("display");
        b.remove();
        if ("none" === c || "" === c) {
            la = C.body.appendChild(la || e.extend(C.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!ma || !la.createElement)
                ma = (la.contentWindow || la.contentDocument).document,
                ma.write("<!doctype html><html><body>"),
                ma.close();
            b = ma.body.appendChild(ma.createElement(r));
            c = P(b, "display");
            C.body.removeChild(la)
        }
        return Ya[r] = c, c
    }
    function L(b, n, c, B) {
        var d;
        if (e.isArray(n))
            e.each(n, function(n, e) {
                c || wc.test(b) ? B(b, e) : L(b + "[" + ("object" == typeof e ? n : "") + "]", e, c, B)
            });
        else if (!c && "object" === e.type(n))
            for (d in n)
                L(b + "[" + d + "]", n[d], c, B);
        else
            B(b, n)
    }
    function za(b) {
        return function(n, c) {
            "string" != typeof n && (c = n, n = "*");
            var B,
                d,
                v = n.toLowerCase().split(fa),
                s = 0,
                j = v.length;
            if (e.isFunction(c))
                for (; s < j; s++)
                    B = v[s],
                    (d = /^\+/.test(B)) && (B = B.substr(1) || "*"),
                    B = b[B] = b[B] || [],
                    B[d ? "unshift" : "push"](c)
        }
    }
    function na(b, n, l, e, d, v) {
        d = d || n.dataTypes[0];
        v = v || {};
        v[d] = !0;
        var s;
        d = b[d];
        for (var j = 0, f = d ? d.length : 0, g = b === Za; j < f && (g || !s); j++)
            s = d[j](n, l, e),
            "string" == typeof s && (!g || v[s] ? s = c : (n.dataTypes.unshift(s), s = na(b, n, l, e, s, v)));
        return (g || !s) && !v["*"] && (s = na(b, n, l, e, "*", v)), s
    }
    function sa(b, n) {
        var l,
            B,
            d = e.ajaxSettings.flatOptions || {};
        for (l in n)
            n[l] !== c && ((d[l] ? b : B || (B = {}))[l] = n[l]);
        B && e.extend(!0, b, B)
    }
    function zb() {
        try {
            return new b.XMLHttpRequest
        } catch (r) {}
    }
    function Ab() {
        return setTimeout(function() {
            Aa = c
        }, 0), Aa = e.now()
    }
    function Bb(b, n, c) {
        var B,
            d = 0,
            v = Ba.length,
            s = e.Deferred().always(function() {
                delete j.elem
            }),
            j = function() {
                for (var n = Aa || Ab(), n = Math.max(0, f.startTime + f.duration - n), c = 1 - (n / f.duration || 0), l = 0, e = f.tweens.length; l < e; l++)
                    f.tweens[l].run(c);
                return s.notifyWith(b, [f, c, n]), 1 > c && e ? n : (s.resolveWith(b, [f]), !1)
            },
            f = s.promise({
                elem: b,
                props: e.extend({}, n),
                opts: e.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: n,
                originalOptions: c,
                startTime: Aa || Ab(),
                duration: c.duration,
                tweens: [],
                createTween: function(n, c) {
                    var l = e.Tween(b, f.opts, n, c, f.opts.specialEasing[n] || f.opts.easing);
                    return f.tweens.push(l), l
                },
                stop: function(n) {
                    for (var c = 0, l = n ? f.tweens.length : 0; c < l; c++)
                        f.tweens[c].run(1);
                    return n ? s.resolveWith(b, [f, n]) : s.rejectWith(b, [f, n]), this
                }
            });
        n = f.props;
        c = f.opts.specialEasing;
        var g,
            p,
            t,
            m;
        for (B in n)
            if (g = e.camelCase(B), p = c[g], t = n[B], e.isArray(t) && (p = t[1], t = n[B] = t[0]), B !== g && (n[g] = t, delete n[B]), (m = e.cssHooks[g]) && "expand" in m)
                for (B in t = m.expand(t), delete n[g], t)
                    B in n || (n[B] = t[B], c[B] = p);
            else
                c[g] = p;
        for (; d < v; d++)
            if (B = Ba[d].call(f, b, n, f.opts))
                return B;
        var q = f;
        e.each(n, function(b, r) {
            for (var n = (ta[b] || []).concat(ta["*"]), c = 0, l = n.length; c < l && !n[c].call(q, b, r); c++)
                ;
        });
        return e.isFunction(f.opts.start) && f.opts.start.call(b, f), e.fx.timer(e.extend(j, {
            anim: f,
            queue: f.opts.queue,
            elem: b
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }
    function S(b, n, c, e, d) {
        return new S.prototype.init(b, n, c, e, d)
    }
    function Ca(b, n) {
        var c,
            e = {
                height: b
            },
            d = 0;
        for (n = n ? 1 : 0; 4 > d; d += 2 - n)
            c = ea[d],
            e["margin" + c] = e["padding" + c] = b;
        return n && (e.opacity = e.width = b), e
    }
    function Cb(b) {
        return e.isWindow(b) ? b : 9 === b.nodeType ? b.defaultView || b.parentWindow : !1
    }
    var Db,
        Da,
        C = b.document,
        yc = b.location,
        zc = b.navigator,
        Ac = b.jQuery,
        Bc = b.$,
        Eb = Array.prototype.push,
        aa = Array.prototype.slice,
        Fb = Array.prototype.indexOf,
        Cc = Object.prototype.toString,
        $a = Object.prototype.hasOwnProperty,
        ab = String.prototype.trim,
        e = function(b, n) {
            return new e.fn.init(b, n, Db)
        },
        Ea = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        Dc = /\S/,
        fa = /\s+/,
        Ec = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Fc = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        Gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Gc = /^[\],:{}\s]*$/,
        Hc = /(?:^|:|,)(?:\s*\[)+/g,
        Ic = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        Jc = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        Kc = /^-ms-/,
        Lc = /-([\da-z])/gi,
        Mc = function(b, n) {
            return (n + "").toUpperCase()
        },
        Fa = function() {
            C.addEventListener ? (C.removeEventListener("DOMContentLoaded", Fa, !1), e.ready()) : "complete" === C.readyState && (C.detachEvent("onreadystatechange", Fa), e.ready())
        },
        Hb = {};
    e.fn = e.prototype = {
        constructor: e,
        init: function(b, n, l) {
            var B,
                d;
            if (!b)
                return this;
            if (b.nodeType)
                return this.context = this[0] = b, this.length = 1, this;
            if ("string" == typeof b) {
                "<" === b.charAt(0) && ">" === b.charAt(b.length - 1) && 3 <= b.length ? B = [null, b, null] : B = Fc.exec(b);
                if (B && (B[1] || !n)) {
                    if (B[1])
                        return n = n instanceof e ? n[0] : n, d = n && n.nodeType ? n.ownerDocument || n : C, b = e.parseHTML(B[1], d, !0), Gb.test(B[1]) && e.isPlainObject(n) && this.attr.call(b, n, !0), e.merge(this, b);
                    if ((n = C.getElementById(B[2])) && n.parentNode) {
                        if (n.id !== B[2])
                            return l.find(b);
                        this.length = 1;
                        this[0] = n
                    }
                    return this.context = C, this.selector = b, this
                }
                return !n || n.jquery ? (n || l).find(b) : this.constructor(n).find(b)
            }
            return e.isFunction(b) ? l.ready(b) : (b.selector !== c && (this.selector = b.selector, this.context = b.context), e.makeArray(b, this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return aa.call(this)
        },
        get: function(b) {
            return null == b ? this.toArray() : 0 > b ? this[this.length + b] : this[b]
        },
        pushStack: function(b, n, c) {
            b = e.merge(this.constructor(), b);
            return b.prevObject = this, b.context = this.context, "find" === n ? b.selector = this.selector + (this.selector ? " " : "") + c : n && (b.selector = this.selector + "." + n + "(" + c + ")"), b
        },
        each: function(b, n) {
            return e.each(this, b, n)
        },
        ready: function(b) {
            return e.ready.promise().done(b), this
        },
        eq: function(b) {
            return b = +b, -1 === b ? this.slice(b) : this.slice(b, b + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(aa.apply(this, arguments), "slice", aa.call(arguments).join(","))
        },
        map: function(b) {
            return this.pushStack(e.map(this, function(n, c) {
                return b.call(n, c, n)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Eb,
        sort: [].sort,
        splice: [].splice
    };
    e.fn.init.prototype = e.fn;
    e.extend = e.fn.extend = function() {
        var b,
            n,
            l,
            B,
            d,
            v,
            s = arguments[0] || {},
            j = 1,
            f = arguments.length,
            g = !1;
        "boolean" == typeof s && (g = s, s = arguments[1] || {}, j = 2);
        "object" != typeof s && !e.isFunction(s) && (s = {});
        for (f === j && (s = this, --j); j < f; j++)
            if (null != (b = arguments[j]))
                for (n in b)
                    l = s[n],
                    B = b[n],
                    s !== B && (g && B && (e.isPlainObject(B) || (d = e.isArray(B))) ? (d ? (d = !1, v = l && e.isArray(l) ? l : []) : v = l && e.isPlainObject(l) ? l : {}, s[n] = e.extend(g, v, B)) : B !== c && (s[n] = B));
        return s
    };
    e.extend({
        noConflict: function(r) {
            return b.$ === e && (b.$ = Bc), r && b.jQuery === e && (b.jQuery = Ac), e
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(b) {
            b ? e.readyWait++ : e.ready(!0)
        },
        ready: function(b) {
            if (!(!0 === b ? --e.readyWait : e.isReady)) {
                if (!C.body)
                    return setTimeout(e.ready, 1);
                e.isReady = !0;
                !0 !== b && 0 < --e.readyWait || (Da.resolveWith(C, [e]), e.fn.trigger && e(C).trigger("ready").off("ready"))
            }
        },
        isFunction: function(b) {
            return "function" === e.type(b)
        },
        isArray: Array.isArray || function(b) {
            return "array" === e.type(b)
        },
        isWindow: function(b) {
            return null != b && b == b.window
        },
        isNumeric: function(b) {
            return !isNaN(parseFloat(b)) && isFinite(b)
        },
        type: function(b) {
            return null == b ? String(b) : Hb[Cc.call(b)] || "object"
        },
        isPlainObject: function(b) {
            if (!b || "object" !== e.type(b) || b.nodeType || e.isWindow(b))
                return !1;
            try {
                if (b.constructor && !$a.call(b, "constructor") && !$a.call(b.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            for (var l in b)
                ;
            return l === c || $a.call(b, l)
        },
        isEmptyObject: function(b) {
            for (var n in b)
                return !1;
            return !0
        },
        error: function(b) {
            throw Error(b);
        },
        parseHTML: function(b, n, c) {
            var B;
            return !b || "string" != typeof b ? null : ("boolean" == typeof n && (c = n, n = 0), n = n || C, (B = Gb.exec(b)) ? [n.createElement(B[1])] : (B = e.buildFragment([b], n, c ? null : []), e.merge([], (B.cacheable ? e.clone(B.fragment) : B.fragment).childNodes)))
        },
        parseJSON: function(r) {
            if (!r || "string" != typeof r)
                return null;
            r = e.trim(r);
            if (b.JSON && b.JSON.parse)
                return b.JSON.parse(r);
            if (Gc.test(r.replace(Ic, "@").replace(Jc, "]").replace(Hc, "")))
                return (new Function("return " + r))();
            e.error("Invalid JSON: " + r)
        },
        parseXML: function(r) {
            var n,
                l;
            if (!r || "string" != typeof r)
                return null;
            try {
                b.DOMParser ? (l = new DOMParser, n = l.parseFromString(r, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(r))
            } catch (B) {
                n = c
            }
            return (!n || !n.documentElement || n.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + r), n
        },
        noop: function() {},
        globalEval: function(r) {
            r && Dc.test(r) && (b.execScript || function(r) {
                b.eval.call(b, r)
            })(r)
        },
        camelCase: function(b) {
            return b.replace(Kc, "ms-").replace(Lc, Mc)
        },
        nodeName: function(b, c) {
            return b.nodeName && b.nodeName.toLowerCase() === c.toLowerCase()
        },
        each: function(b, n, l) {
            var B,
                d = 0,
                v = b.length,
                s = v === c || e.isFunction(b);
            if (l)
                if (s)
                    for (B in b) {
                        if (!1 === n.apply(b[B], l))
                            break
                    }
                else
                    for (; d < v && !1 !== n.apply(b[d++], l);)
                        ;
            else if (s)
                for (B in b) {
                    if (!1 === n.call(b[B], B, b[B]))
                        break
                }
            else
                for (; d < v && !1 !== n.call(b[d], d, b[d++]);)
                    ;
            return b
        },
        trim: ab && !ab.call("\ufeff\u00a0") ? function(b) {
            return null == b ? "" : ab.call(b)
        } : function(b) {
            return null == b ? "" : (b + "").replace(Ec, "")
        },
        makeArray: function(b, c) {
            var l,
                B = c || [];
            return null != b && (l = e.type(b), null == b.length || "string" === l || "function" === l || "regexp" === l || e.isWindow(b) ? Eb.call(B, b) : e.merge(B, b)), B
        },
        inArray: function(b, c, l) {
            var e;
            if (c) {
                if (Fb)
                    return Fb.call(c, b, l);
                e = c.length;
                for (l = l ? 0 > l ? Math.max(0, e + l) : l : 0; l < e; l++)
                    if (l in c && c[l] === b)
                        return l
            }
            return -1
        },
        merge: function(b, n) {
            var l = n.length,
                e = b.length,
                d = 0;
            if ("number" == typeof l)
                for (; d < l; d++)
                    b[e++] = n[d];
            else
                for (; n[d] !== c;)
                    b[e++] = n[d++];
            return b.length = e, b
        },
        grep: function(b, c, l) {
            var e,
                d = [],
                v = 0,
                s = b.length;
            for (l = !!l; v < s; v++)
                e = !!c(b[v], v),
                l !== e && d.push(b[v]);
            return d
        },
        map: function(b, n, l) {
            var B,
                d,
                v = [],
                s = 0,
                j = b.length;
            if (b instanceof e || j !== c && "number" == typeof j && (0 < j && b[0] && b[j - 1] || 0 === j || e.isArray(b)))
                for (; s < j; s++)
                    B = n(b[s], s, l),
                    null != B && (v[v.length] = B);
            else
                for (d in b)
                    B = n(b[d], d, l),
                    null != B && (v[v.length] = B);
            return v.concat.apply([], v)
        },
        guid: 1,
        proxy: function(b, n) {
            var l,
                B,
                d;
            return "string" == typeof n && (l = b[n], n = b, b = l), e.isFunction(b) ? (B = aa.call(arguments, 2), d = function() {
                return b.apply(n, B.concat(aa.call(arguments)))
            }, d.guid = b.guid = b.guid || e.guid++, d) : c
        },
        access: function(b, n, l, B, d, v, s) {
            var j,
                f = null == l,
                g = 0,
                p = b.length;
            if (l && "object" == typeof l) {
                for (g in l)
                    e.access(b, n, g, l[g], 1, v, B);
                d = 1
            } else if (B !== c) {
                j = s === c && e.isFunction(B);
                f && (j ? (j = n, n = function(b, r, c) {
                    return j.call(e(b), c)
                }) : (n.call(b, B), n = null));
                if (n)
                    for (; g < p; g++)
                        n(b[g], l, j ? B.call(b[g], g, n(b[g], l)) : B, s);
                d = 1
            }
            return d ? b : f ? n.call(b) : p ? n(b[0], l) : v
        },
        now: function() {
            return (new Date).getTime()
        }
    });
    e.ready.promise = function(r) {
        if (!Da)
            if (Da = e.Deferred(), "complete" === C.readyState)
                setTimeout(e.ready, 1);
            else if (C.addEventListener)
                C.addEventListener("DOMContentLoaded", Fa, !1),
                b.addEventListener("load", e.ready, !1);
            else {
                C.attachEvent("onreadystatechange", Fa);
                b.attachEvent("onload", e.ready);
                var c = !1;
                try {
                    c = null == b.frameElement && C.documentElement
                } catch (l) {}
                c && c.doScroll && function Q() {
                    if (!e.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (b) {
                            return setTimeout(Q, 50)
                        }
                        e.ready()
                    }
                }()
            }
        return Da.promise(r)
    };
    e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(b, c) {
        Hb["[object " + c + "]"] = c.toLowerCase()
    });
    Db = e(C);
    var Ib = {};
    e.Callbacks = function(b) {
        var n;
        if ("string" == typeof b) {
            if (!(n = Ib[b])) {
                n = b;
                var l = Ib[n] = {};
                n = (e.each(n.split(fa), function(b, r) {
                    l[r] = !0
                }), l)
            }
        } else
            n = e.extend({}, b);
        b = n;
        var B,
            d,
            v,
            s,
            j,
            f,
            g = [],
            p = !b.once && [],
            t = function(c) {
                B = b.memory && c;
                d = !0;
                f = s || 0;
                s = 0;
                j = g.length;
                for (v = !0; g && f < j; f++)
                    if (!1 === g[f].apply(c[0], c[1]) && b.stopOnFalse) {
                        B = !1;
                        break
                    }
                v = !1;
                g && (p ? p.length && t(p.shift()) : B ? g = [] : m.disable())
            },
            m = {
                add: function() {
                    if (g) {
                        var c = g.length;
                        (function xc(c) {
                            e.each(c, function(c, n) {
                                var l = e.type(n);
                                "function" === l && (!b.unique || !m.has(n)) ? g.push(n) : n && n.length && "string" !== l && xc(n)
                            })
                        })(arguments);
                        v ? j = g.length : B && (s = c, t(B))
                    }
                    return this
                },
                remove: function() {
                    return g && e.each(arguments, function(b, r) {
                        for (var c; -1 < (c = e.inArray(r, g, c));)
                            g.splice(c, 1),
                            v && (c <= j && j--, c <= f && f--)
                    }), this
                },
                has: function(b) {
                    return -1 < e.inArray(b, g)
                },
                empty: function() {
                    return g = [], this
                },
                disable: function() {
                    return g = p = B = c, this
                },
                disabled: function() {
                    return !g
                },
                lock: function() {
                    return p = c, B || m.disable(), this
                },
                locked: function() {
                    return !p
                },
                fireWith: function(b, r) {
                    return r = r || [], r = [b, r.slice ? r.slice() : r], g && (!d || p) && (v ? p.push(r) : t(r)), this
                },
                fire: function() {
                    return m.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return m
    };
    e.extend({
        Deferred: function(b) {
            var c = [["resolve", "done", e.Callbacks("once memory"), "resolved"], ["reject", "fail", e.Callbacks("once memory"), "rejected"], ["notify", "progress", e.Callbacks("memory")]],
                l = "pending",
                d = {
                    state: function() {
                        return l
                    },
                    always: function() {
                        return Q.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var b = arguments;
                        return e.Deferred(function(r) {
                            e.each(c, function(c, n) {
                                var l = n[0],
                                    d = b[c];
                                Q[n[1]](e.isFunction(d) ? function() {
                                    var b = d.apply(this, arguments);
                                    b && e.isFunction(b.promise) ? b.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[l + "With"](this === Q ? r : this, [b])
                                } : r[l])
                            });
                            b = null
                        }).promise()
                    },
                    promise: function(b) {
                        return null != b ? e.extend(b, d) : d
                    }
                },
                Q = {};
            return d.pipe = d.then, e.each(c, function(b, r) {
                var e = r[2],
                    j = r[3];
                d[r[1]] = e.add;
                j && e.add(function() {
                    l = j
                }, c[b ^ 1][2].disable, c[2][2].lock);
                Q[r[0]] = e.fire;
                Q[r[0] + "With"] = e.fireWith
            }), d.promise(Q), b && b.call(Q, Q), Q
        },
        when: function(b) {
            var c = 0,
                l = aa.call(arguments),
                d = l.length,
                Q = 1 !== d || b && e.isFunction(b.promise) ? d : 0,
                v = 1 === Q ? b : e.Deferred(),
                s = function(b, r, c) {
                    return function(n) {
                        r[b] = this;
                        c[b] = 1 < arguments.length ? aa.call(arguments) : n;
                        c === j ? v.notifyWith(r, c) : --Q || v.resolveWith(r, c)
                    }
                },
                j,
                f,
                g;
            if (1 < d) {
                j = Array(d);
                f = Array(d);
                for (g = Array(d); c < d; c++)
                    l[c] && e.isFunction(l[c].promise) ? l[c].promise().done(s(c, g, l)).fail(v.reject).progress(s(c, f, j)) : --Q
            }
            return Q || v.resolveWith(g, l), v.promise()
        }
    });
    var Nc = e,
        bb,
        N,
        Ga,
        ga,
        Ha,
        Ia,
        T,
        ha,
        Ja,
        cb,
        ua,
        Jb,
        J = C.createElement("div");
    J.setAttribute("className", "t");
    J.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    Ga = J.getElementsByTagName("*");
    ga = J.getElementsByTagName("a")[0];
    ga.style.cssText = "top:1px;float:left;opacity:.5";
    if (!Ga || !Ga.length)
        bb = {};
    else {
        Ha = C.createElement("select");
        Ia = Ha.appendChild(C.createElement("option"));
        T = J.getElementsByTagName("input")[0];
        N = {
            leadingWhitespace: 3 === J.firstChild.nodeType,
            tbody: !J.getElementsByTagName("tbody").length,
            htmlSerialize: !!J.getElementsByTagName("link").length,
            style: /top/.test(ga.getAttribute("style")),
            hrefNormalized: "/a" === ga.getAttribute("href"),
            opacity: /^0.5/.test(ga.style.opacity),
            cssFloat: !!ga.style.cssFloat,
            checkOn: "on" === T.value,
            optSelected: Ia.selected,
            getSetAttribute: "t" !== J.className,
            enctype: !!C.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== C.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === C.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        };
        T.checked = !0;
        N.noCloneChecked = T.cloneNode(!0).checked;
        Ha.disabled = !0;
        N.optDisabled = !Ia.disabled;
        try {
            delete J.test
        } catch (Pd) {
            N.deleteExpando = !1
        }
        !J.addEventListener && J.attachEvent && J.fireEvent && (J.attachEvent("onclick", Jb = function() {
            N.noCloneEvent = !1
        }), J.cloneNode(!0).fireEvent("onclick"), J.detachEvent("onclick", Jb));
        T = C.createElement("input");
        T.value = "t";
        T.setAttribute("type", "radio");
        N.radioValue = "t" === T.value;
        T.setAttribute("checked", "checked");
        T.setAttribute("name", "t");
        J.appendChild(T);
        ha = C.createDocumentFragment();
        ha.appendChild(J.lastChild);
        N.checkClone = ha.cloneNode(!0).cloneNode(!0).lastChild.checked;
        N.appendChecked = T.checked;
        ha.removeChild(T);
        ha.appendChild(J);
        if (J.attachEvent)
            for (cb in {
                submit: !0,
                change: !0,
                focusin: !0
            })
                Ja = "on" + cb,
                (ua = Ja in J) || (J.setAttribute(Ja, "return;"), ua = "function" == typeof J[Ja]),
                N[cb + "Bubbles"] = ua;
        bb = (e(function() {
            var r,
                c,
                l,
                e,
                d = C.getElementsByTagName("body")[0];
            d && (r = C.createElement("div"), r.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", d.insertBefore(r, d.firstChild), c = C.createElement("div"), r.appendChild(c), c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", l = c.getElementsByTagName("td"), l[0].style.cssText = "padding:0;margin:0;border:0;display:none", ua = 0 === l[0].offsetHeight, l[0].style.display = "", l[1].style.display = "none", N.reliableHiddenOffsets = ua && 0 === l[0].offsetHeight, c.innerHTML = "", c.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", N.boxSizing = 4 === c.offsetWidth, N.doesNotIncludeMarginInBodyOffset = 1 !== d.offsetTop, b.getComputedStyle && (N.pixelPosition = "1%" !== (b.getComputedStyle(c, null) || {}).top, N.boxSizingReliable = "4px" === (b.getComputedStyle(c, null) || {
                width: "4px"
            }).width, e = C.createElement("div"), e.style.cssText = c.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;", e.style.marginRight = e.style.width = "0", c.style.width = "1px", c.appendChild(e), N.reliableMarginRight = !parseFloat((b.getComputedStyle(e, null) || {}).marginRight)), "undefined" != typeof c.style.zoom && (c.innerHTML = "", c.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1", N.inlineBlockNeedsLayout = 3 === c.offsetWidth, c.style.display = "block", c.style.overflow = "visible", c.innerHTML = "<div></div>", c.firstChild.style.width = "5px", N.shrinkWrapBlocks = 3 !== c.offsetWidth, r.style.zoom = 1), d.removeChild(r))
        }), ha.removeChild(J), Ga = ga = Ha = Ia = T = ha = J = null, N)
    }
    Nc.support = bb;
    var tc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        sc = /([A-Z])/g;
    e.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (e.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(b) {
            return b = b.nodeType ? e.cache[b[e.expando]] : b[e.expando], !!b && !f(b)
        },
        data: function(b, n, l, d) {
            if (e.acceptData(b)) {
                var j,
                    v,
                    s = e.expando,
                    f = "string" == typeof n,
                    g = b.nodeType,
                    p = g ? e.cache : b,
                    t = g ? b[s] : b[s] && s;
                if (t && p[t] && (d || p[t].data) || !(f && l === c)) {
                    t || (g ? b[s] = t = e.deletedIds.pop() || e.guid++ : t = s);
                    p[t] || (p[t] = {}, g || (p[t].toJSON = e.noop));
                    if ("object" == typeof n || "function" == typeof n)
                        d ? p[t] = e.extend(p[t], n) : p[t].data = e.extend(p[t].data, n);
                    return j = p[t], d || (j.data || (j.data = {}), j = j.data), l !== c && (j[e.camelCase(n)] = l), f ? (v = j[n], null == v && (v = j[e.camelCase(n)])) : v = j, v
                }
            }
        },
        removeData: function(b, c, l) {
            if (e.acceptData(b)) {
                var d,
                    j,
                    v,
                    s = b.nodeType,
                    g = s ? e.cache : b,
                    p = s ? b[e.expando] : e.expando;
                if (g[p]) {
                    if (c && (d = l ? g[p] : g[p].data)) {
                        e.isArray(c) || (c in d ? c = [c] : (c = e.camelCase(c), c in d ? c = [c] : c = c.split(" ")));
                        j = 0;
                        for (v = c.length; j < v; j++)
                            delete d[c[j]];
                        if (!(l ? f : e.isEmptyObject)(d))
                            return
                    }
                    if (l || !(delete g[p].data, !f(g[p])))
                        s ? e.cleanData([b], !0) : e.support.deleteExpando || g != g.window ? delete g[p] : g[p] = null
                }
            }
        },
        _data: function(b, c, l) {
            return e.data(b, c, l, !0)
        },
        acceptData: function(b) {
            var c = b.nodeName && e.noData[b.nodeName.toLowerCase()];
            return !c || !0 !== c && b.getAttribute("classid") === c
        }
    });
    e.fn.extend({
        data: function(b, n) {
            var l,
                B,
                j,
                v,
                s,
                f = this[0],
                g = 0,
                p = null;
            if (b === c) {
                if (this.length && (p = e.data(f), 1 === f.nodeType && !e._data(f, "parsedAttrs"))) {
                    j = f.attributes;
                    for (s = j.length; g < s; g++)
                        v = j[g].name,
                        v.indexOf("data-") || (v = e.camelCase(v.substring(5)), d(f, v, p[v]));
                    e._data(f, "parsedAttrs", !0)
                }
                return p
            }
            return "object" == typeof b ? this.each(function() {
                e.data(this, b)
            }) : (l = b.split(".", 2), l[1] = l[1] ? "." + l[1] : "", B = l[1] + "!", e.access(this, function(n) {
                if (n === c)
                    return p = this.triggerHandler("getData" + B, [l[0]]), p === c && f && (p = e.data(f, b), p = d(f, b, p)), p === c && l[1] ? this.data(l[0]) : p;
                l[1] = n;
                this.each(function() {
                    var c = e(this);
                    c.triggerHandler("setData" + B, l);
                    e.data(this, b, n);
                    c.triggerHandler("changeData" +
                    B, l)
                })
            }, null, n, 1 < arguments.length, null, !1))
        },
        removeData: function(b) {
            return this.each(function() {
                e.removeData(this, b)
            })
        }
    });
    e.extend({
        queue: function(b, c, l) {
            var d;
            if (b)
                return c = (c || "fx") + "queue", d = e._data(b, c), l && (!d || e.isArray(l) ? d = e._data(b, c, e.makeArray(l)) : d.push(l)), d || []
        },
        dequeue: function(b, c) {
            c = c || "fx";
            var l = e.queue(b, c),
                d = l.length,
                j = l.shift(),
                v = e._queueHooks(b, c),
                s = function() {
                    e.dequeue(b, c)
                };
            "inprogress" === j && (j = l.shift(), d--);
            j && ("fx" === c && l.unshift("inprogress"), delete v.stop, j.call(b, s, v));
            !d && v && v.empty.fire()
        },
        _queueHooks: function(b, c) {
            var l = c + "queueHooks";
            return e._data(b, l) || e._data(b, l, {
                    empty: e.Callbacks("once memory").add(function() {
                        e.removeData(b, c + "queue", !0);
                        e.removeData(b, l, !0)
                    })
                })
        }
    });
    e.fn.extend({
        queue: function(b, n) {
            var l = 2;
            return "string" != typeof b && (n = b, b = "fx", l--), arguments.length < l ? e.queue(this[0], b) : n === c ? this : this.each(function() {
                var c = e.queue(this, b, n);
                e._queueHooks(this, b);
                "fx" === b && "inprogress" !== c[0] && e.dequeue(this, b)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                e.dequeue(this, b)
            })
        },
        delay: function(b, c) {
            return b = e.fx ? e.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, n) {
                var e = setTimeout(c, b);
                n.stop = function() {
                    clearTimeout(e)
                }
            })
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", [])
        },
        promise: function(b, n) {
            var l,
                d = 1,
                j = e.Deferred(),
                v = this,
                s = this.length,
                f = function() {
                    --d || j.resolveWith(v, [v])
                };
            "string" != typeof b && (n = b, b = c);
            for (b = b || "fx"; s--;)
                (l = e._data(v[s], b + "queueHooks")) && l.empty && (d++, l.empty.add(f));
            return f(), j.promise(n)
        }
    });
    var ba,
        Kb,
        Lb,
        Mb = /[\t\r\n]/g,
        Oc = /\r/g,
        Pc = /^(?:button|input)$/i,
        Qc = /^(?:button|input|object|select|textarea)$/i,
        Rc = /^a(?:rea|)$/i,
        Nb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Ob = e.support.getSetAttribute;
    e.fn.extend({
        attr: function(b, c) {
            return e.access(this, e.attr, b, c, 1 < arguments.length)
        },
        removeAttr: function(b) {
            return this.each(function() {
                e.removeAttr(this, b)
            })
        },
        prop: function(b, c) {
            return e.access(this, e.prop, b, c, 1 < arguments.length)
        },
        removeProp: function(b) {
            return b = e.propFix[b] || b, this.each(function() {
                try {
                    this[b] = c,
                    delete this[b]
                } catch (n) {}
            })
        },
        addClass: function(b) {
            var c,
                l,
                d,
                j,
                v,
                s,
                f;
            if (e.isFunction(b))
                return this.each(function(c) {
                    e(this).addClass(b.call(this, c, this.className))
                });
            if (b && "string" == typeof b) {
                c = b.split(fa);
                l = 0;
                for (d = this.length; l < d; l++)
                    if (j = this[l], 1 === j.nodeType)
                        if (!j.className && 1 === c.length)
                            j.className = b;
                        else {
                            v = " " + j.className + " ";
                            s = 0;
                            for (f = c.length; s < f; s++)
                                0 > v.indexOf(" " + c[s] + " ") && (v += c[s] + " ");
                            j.className = e.trim(v)
                        }
            }
            return this
        },
        removeClass: function(b) {
            var n,
                l,
                d,
                j,
                v,
                s,
                f;
            if (e.isFunction(b))
                return this.each(function(c) {
                    e(this).removeClass(b.call(this, c, this.className))
                });
            if (b && "string" == typeof b || b === c) {
                n = (b || "").split(fa);
                s = 0;
                for (f = this.length; s < f; s++)
                    if (d = this[s], 1 === d.nodeType && d.className) {
                        l = (" " + d.className + " ").replace(Mb, " ");
                        j = 0;
                        for (v = n.length; j < v; j++)
                            for (; 0 <= l.indexOf(" " + n[j] + " ");)
                                l = l.replace(" " + n[j] + " ", " ");
                        d.className = b ? e.trim(l) : ""
                    }
            }
            return this
        },
        toggleClass: function(b, c) {
            var l = typeof b,
                d = "boolean" == typeof c;
            return e.isFunction(b) ? this.each(function(l) {
                e(this).toggleClass(b.call(this, l, this.className, c), c)
            }) : this.each(function() {
                if ("string" === l)
                    for (var j, v = 0, s = e(this), f = c, g = b.split(fa); j = g[v++];)
                        f = d ? f : !s.hasClass(j),
                        s[f ? "addClass" : "removeClass"](j);
                else if ("undefined" === l || "boolean" === l)
                    this.className && e._data(this, "__className__", this.className),
                    this.className = this.className || !1 === b ? "" : e._data(this, "__className__") || ""
            })
        },
        hasClass: function(b) {
            b = " " + b + " ";
            for (var c = 0, l = this.length; c < l; c++)
                if (1 === this[c].nodeType && 0 <= (" " + this[c].className + " ").replace(Mb, " ").indexOf(b))
                    return !0;
            return !1
        },
        val: function(b) {
            var n,
                l,
                d,
                j = this[0];
            if (arguments.length)
                return d = e.isFunction(b), this.each(function(l) {
                    var j,
                        f = e(this);
                    if (1 === this.nodeType && (d ? j = b.call(this, l, f.val()) : j = b, null == j ? j = "" : "number" == typeof j ? j += "" : e.isArray(j) && (j = e.map(j, function(b) {
                        return null == b ? "" : b + ""
                    })), n = e.valHooks[this.type] || e.valHooks[this.nodeName.toLowerCase()], !n || !("set" in n) || n.set(this, j, "value") === c))
                        this.value = j
                });
            if (j)
                return n = e.valHooks[j.type] || e.valHooks[j.nodeName.toLowerCase()], n && "get" in n && (l = n.get(j, "value")) !== c ? l : (l = j.value, "string" == typeof l ? l.replace(Oc, "") : null == l ? "" : l)
        }
    });
    e.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var c = b.attributes.value;
                    return !c || c.specified ? b.value : b.text
                }
            },
            select: {
                get: function(b) {
                    var c,
                        l,
                        d = b.selectedIndex,
                        j = [],
                        v = b.options,
                        s = "select-one" === b.type;
                    if (0 > d)
                        return null;
                    b = s ? d : 0;
                    for (l = s ? d + 1 : v.length; b < l; b++)
                        if (c = v[b], c.selected && (e.support.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !e.nodeName(c.parentNode, "optgroup"))) {
                            c = e(c).val();
                            if (s)
                                return c;
                            j.push(c)
                        }
                    return s && !j.length && v.length ? e(v[d]).val() : j
                },
                set: function(b, c) {
                    var l = e.makeArray(c);
                    return e(b).find("option").each(function() {
                        this.selected = 0 <= e.inArray(e(this).val(), l)
                    }), l.length || (b.selectedIndex = -1), l
                }
            }
        },
        attrFn: {},
        attr: function(b, n, l, d) {
            var j,
                v,
                s = b.nodeType;
            if (b && !(3 === s || 8 === s || 2 === s)) {
                if (d && e.isFunction(e.fn[n]))
                    return e(b)[n](l);
                if ("undefined" == typeof b.getAttribute)
                    return e.prop(b, n, l);
                (d = 1 !== s || !e.isXMLDoc(b)) && (n = n.toLowerCase(), v = e.attrHooks[n] || (Nb.test(n) ? Kb : ba));
                if (l !== c) {
                    if (null === l) {
                        e.removeAttr(b, n);
                        return
                    }
                    return v && "set" in v && d && (j = v.set(b, l, n)) !== c ? j : (b.setAttribute(n, l + ""), l)
                }
                return v && "get" in v && d && null !== (j = v.get(b, n)) ? j : (j = b.getAttribute(n), null === j ? c : j)
            }
        },
        removeAttr: function(b, c) {
            var l,
                d,
                j,
                v,
                s = 0;
            if (c && 1 === b.nodeType)
                for (d = c.split(fa); s < d.length; s++)
                    (j = d[s]) && (l = e.propFix[j] || j, v = Nb.test(j), v || e.attr(b, j, ""), b.removeAttribute(Ob ? j : l), v && l in b && (b[l] = !1))
        },
        attrHooks: {
            type: {
                set: function(b, c) {
                    if (Pc.test(b.nodeName) && b.parentNode)
                        e.error("type property can't be changed");
                    else if (!e.support.radioValue && "radio" === c && e.nodeName(b, "input")) {
                        var l = b.value;
                        return b.setAttribute("type", c), l && (b.value = l), c
                    }
                }
            },
            value: {
                get: function(b, c) {
                    return ba && e.nodeName(b, "button") ? ba.get(b, c) : c in b ? b.value : null
                },
                set: function(b, c, l) {
                    if (ba && e.nodeName(b, "button"))
                        return ba.set(b, c, l);
                    b.value = c
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(b, n, l) {
            var d,
                j,
                v,
                s = b.nodeType;
            if (b && !(3 === s || 8 === s || 2 === s))
                return v = 1 !== s || !e.isXMLDoc(b), v && (n = e.propFix[n] || n, j = e.propHooks[n]), l !== c ? j && "set" in j && (d = j.set(b, l, n)) !== c ? d : b[n] = l : j && "get" in j && null !== (d = j.get(b, n)) ? d : b[n]
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    var n = b.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : Qc.test(b.nodeName) || Rc.test(b.nodeName) && b.href ? 0 : c
                }
            }
        }
    });
    Kb = {
        get: function(b, n) {
            var l,
                d = e.prop(b, n);
            return !0 === d || "boolean" != typeof d && (l = b.getAttributeNode(n)) && !1 !== l.nodeValue ? n.toLowerCase() : c
        },
        set: function(b, c, l) {
            var d;
            return !1 === c ? e.removeAttr(b, l) : (d = e.propFix[l] || l, d in b && (b[d] = !0), b.setAttribute(l, l.toLowerCase())), l
        }
    };
    Ob || (Lb = {
        name: !0,
        id: !0,
        coords: !0
    }, ba = e.valHooks.button = {
        get: function(b, n) {
            var l;
            return l = b.getAttributeNode(n), l && (Lb[n] ? "" !== l.value : l.specified) ? l.value : c
        },
        set: function(b, c, l) {
            var e = b.getAttributeNode(l);
            return e || (e = C.createAttribute(l), b.setAttributeNode(e)), e.value = c + ""
        }
    }, e.each(["width", "height"], function(b, c) {
        e.attrHooks[c] = e.extend(e.attrHooks[c], {
            set: function(b, r) {
                if ("" === r)
                    return b.setAttribute(c, "auto"), r
            }
        })
    }), e.attrHooks.contenteditable = {
        get: ba.get,
        set: function(b, c, l) {
            "" === c && (c = "false");
            ba.set(b, c, l)
        }
    });
    e.support.hrefNormalized || e.each(["href", "src", "width", "height"], function(b, n) {
        e.attrHooks[n] = e.extend(e.attrHooks[n], {
            get: function(b) {
                b = b.getAttribute(n, 2);
                return null === b ? c : b
            }
        })
    });
    e.support.style || (e.attrHooks.style = {
        get: function(b) {
            return b.style.cssText.toLowerCase() || c
        },
        set: function(b, c) {
            return b.style.cssText = c + ""
        }
    });
    e.support.optSelected || (e.propHooks.selected = e.extend(e.propHooks.selected, {
        get: function(b) {
            b = b.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }));
    e.support.enctype || (e.propFix.enctype = "encoding");
    e.support.checkOn || e.each(["radio", "checkbox"], function() {
        e.valHooks[this] = {
            get: function(b) {
                return null === b.getAttribute("value") ? "on" : b.value
            }
        }
    });
    e.each(["radio", "checkbox"], function() {
        e.valHooks[this] = e.extend(e.valHooks[this], {
            set: function(b, c) {
                if (e.isArray(c))
                    return b.checked = 0 <= e.inArray(e(b).val(), c)
            }
        })
    });
    var db = /^(?:textarea|input|select)$/i,
        Pb = /^([^\.]*|)(?:\.(.+)|)$/,
        Sc = /(?:^|\s)hover(\.\S+|)\b/,
        Tc = /^key/,
        Uc = /^(?:mouse|contextmenu)|click/,
        Qb = /^(?:focusinfocus|focusoutblur)$/,
        Rb = function(b) {
            return e.event.special.hover ? b : b.replace(Sc, "mouseenter$1 mouseleave$1")
        };
    e.event = {
        add: function(b, n, l, d, j) {
            var v,
                s,
                f,
                g,
                p,
                t,
                m,
                q,
                x;
            if (!(3 === b.nodeType || 8 === b.nodeType || !n || !l || !(v = e._data(b)))) {
                l.handler && (m = l, l = m.handler, j = m.selector);
                l.guid || (l.guid = e.guid++);
                (f = v.events) || (v.events = f = {});
                (s = v.handle) || (v.handle = s = function(b) {
                    return "undefined" != typeof e && (!b || e.event.triggered !== b.type) ? e.event.dispatch.apply(s.elem, arguments) : c
                }, s.elem = b);
                n = e.trim(Rb(n)).split(" ");
                for (v = 0; v < n.length; v++) {
                    g = Pb.exec(n[v]) || [];
                    p = g[1];
                    t = (g[2] || "").split(".").sort();
                    x = e.event.special[p] || {};
                    p = (j ? x.delegateType : x.bindType) || p;
                    x = e.event.special[p] || {};
                    g = e.extend({
                        type: p,
                        origType: g[1],
                        data: d,
                        handler: l,
                        guid: l.guid,
                        selector: j,
                        needsContext: j && e.expr.match.needsContext.test(j),
                        namespace: t.join(".")
                    }, m);
                    q = f[p];
                    if (!q && (q = f[p] = [], q.delegateCount = 0, !x.setup || !1 === x.setup.call(b, d, t, s)))
                        b.addEventListener ? b.addEventListener(p, s, !1) : b.attachEvent && b.attachEvent("on" + p, s);
                    x.add && (x.add.call(b, g), g.handler.guid || (g.handler.guid = l.guid));
                    j ? q.splice(q.delegateCount++, 0, g) : q.push(g);
                    e.event.global[p] = !0
                }
                b = null
            }
        },
        global: {},
        remove: function(b, c, l, d, j) {
            var f,
                s,
                g,
                p,
                t,
                m,
                q,
                x,
                u,
                y,
                z = e.hasData(b) && e._data(b);
            if (z && (q = z.events)) {
                c = e.trim(Rb(c || "")).split(" ");
                for (f = 0; f < c.length; f++)
                    if (s = Pb.exec(c[f]) || [], g = p = s[1], s = s[2], g) {
                        x = e.event.special[g] || {};
                        g = (d ? x.delegateType : x.bindType) || g;
                        u = q[g] || [];
                        t = u.length;
                        s = s ? RegExp("(^|\\.)" + s.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        for (m = 0; m < u.length; m++)
                            y = u[m],
                            (j || p === y.origType) && (!l || l.guid === y.guid) && (!s || s.test(y.namespace)) && (!d || d === y.selector || "**" === d && y.selector) && (u.splice(m--, 1), y.selector && u.delegateCount--, x.remove && x.remove.call(b, y));
                        0 === u.length && t !== u.length && ((!x.teardown || !1 === x.teardown.call(b, s, z.handle)) && e.removeEvent(b, g, z.handle), delete q[g])
                    } else
                        for (g in q)
                            e.event.remove(b, g + c[f], l, d, !0);
                e.isEmptyObject(q) && (delete z.handle, e.removeData(b, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(r, n, l, d) {
            if (!l || 3 !== l.nodeType && 8 !== l.nodeType) {
                var j,
                    f,
                    s,
                    g,
                    p,
                    t,
                    m,
                    q = r.type || r;
                g = [];
                if (!Qb.test(q + e.event.triggered) && (0 <= q.indexOf("!") && (q = q.slice(0, -1), j = !0), 0 <= q.indexOf(".") && (g = q.split("."), q = g.shift(), g.sort()), l && !e.event.customEvent[q] || e.event.global[q]))
                    if (r = "object" == typeof r ? r[e.expando] ? r : new e.Event(q, r) : new e.Event(q), r.type = q, r.isTrigger = !0, r.exclusive = j, r.namespace = g.join("."), r.namespace_re = r.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, g = 0 > q.indexOf(":") ? "on" + q : "", l) {
                        if (r.result = c, r.target || (r.target = l), n = null != n ? e.makeArray(n) : [], n.unshift(r), p = e.event.special[q] || {}, !(p.trigger && !1 === p.trigger.apply(l, n))) {
                            m = [[l, p.bindType || q]];
                            if (!d && !p.noBubble && !e.isWindow(l)) {
                                f = p.delegateType || q;
                                j = Qb.test(f + q) ? l : l.parentNode;
                                for (s = l; j; j = j.parentNode)
                                    m.push([j, f]),
                                    s = j;
                                s === (l.ownerDocument || C) && m.push([s.defaultView || s.parentWindow || b, f])
                            }
                            for (f = 0; f < m.length && !r.isPropagationStopped(); f++)
                                j = m[f][0],
                                r.type = m[f][1],
                                (t = (e._data(j, "events") || {})[r.type] && e._data(j, "handle")) && t.apply(j, n),
                                (t = g && j[g]) && e.acceptData(j) && t.apply && !1 === t.apply(j, n) && r.preventDefault();
                            return r.type = q, !d && !r.isDefaultPrevented() && (!p._default || !1 === p._default.apply(l.ownerDocument, n)) && ("click" !== q || !e.nodeName(l, "a")) && e.acceptData(l) && g && l[q] && ("focus" !== q && "blur" !== q || 0 !== r.target.offsetWidth) && !e.isWindow(l) && (s = l[g], s && (l[g] = null), e.event.triggered = q, l[q](), e.event.triggered = c, s && (l[g] = s)), r.result
                        }
                    } else
                        for (f in l = e.cache, l)
                            l[f].events && l[f].events[q] && e.event.trigger(r, n, l[f].handle.elem, !0)
            }
        },
        dispatch: function(r) {
            r = e.event.fix(r || b.event);
            var n,
                l,
                d,
                j,
                f,
                s,
                g = (e._data(this, "events") || {})[r.type] || [],
                p = g.delegateCount,
                t = aa.call(arguments),
                q = !r.exclusive && !r.namespace,
                m = e.event.special[r.type] || {},
                x = [];
            t[0] = r;
            r.delegateTarget = this;
            if (!(m.preDispatch && !1 === m.preDispatch.call(this, r))) {
                if (p && (!r.button || "click" !== r.type))
                    for (l = r.target; l != this; l = l.parentNode || this)
                        if (!0 !== l.disabled || "click" !== r.type) {
                            j = {};
                            f = [];
                            for (n = 0; n < p; n++)
                                d = g[n],
                                s = d.selector,
                                j[s] === c && (j[s] = d.needsContext ? 0 <= e(s, this).index(l) : e.find(s, this, null, [l]).length),
                                j[s] && f.push(d);
                            f.length && x.push({
                                elem: l,
                                matches: f
                            })
                        }
                g.length > p && x.push({
                    elem: this,
                    matches: g.slice(p)
                });
                for (n = 0; n < x.length && !r.isPropagationStopped(); n++) {
                    j = x[n];
                    r.currentTarget = j.elem;
                    for (l = 0; l < j.matches.length && !r.isImmediatePropagationStopped(); l++)
                        if (d = j.matches[l], q || !r.namespace && !d.namespace || r.namespace_re && r.namespace_re.test(d.namespace))
                            r.data = d.data,
                            r.handleObj = d,
                            d = ((e.event.special[d.origType] || {}).handle || d.handler).apply(j.elem, t),
                            d !== c && (r.result = d, !1 === d && (r.preventDefault(), r.stopPropagation()))
                }
                return m.postDispatch && m.postDispatch.call(this, r), r.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(b, c) {
                return null == b.which && (b.which = null != c.charCode ? c.charCode : c.keyCode), b
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(b, n) {
                var l,
                    e,
                    d,
                    j = n.button,
                    s = n.fromElement;
                return null == b.pageX && null != n.clientX && (l = b.target.ownerDocument || C, e = l.documentElement, d = l.body, b.pageX = n.clientX + (e && e.scrollLeft || d && d.scrollLeft || 0) - (e && e.clientLeft || d && d.clientLeft || 0), b.pageY = n.clientY + (e && e.scrollTop || d && d.scrollTop || 0) - (e && e.clientTop || d && d.clientTop || 0)), !b.relatedTarget && s && (b.relatedTarget = s === b.target ? n.toElement : s), !b.which && j !== c && (b.which = j & 1 ? 1 : j & 2 ? 3 : j & 4 ? 2 : 0), b
            }
        },
        fix: function(b) {
            if (b[e.expando])
                return b;
            var c,
                l,
                d = b,
                j = e.event.fixHooks[b.type] || {},
                f = j.props ? this.props.concat(j.props) : this.props;
            b = e.Event(d);
            for (c = f.length; c;)
                l = f[--c],
                b[l] = d[l];
            return b.target || (b.target = d.srcElement || C), 3 === b.target.nodeType && (b.target = b.target.parentNode), b.metaKey = !!b.metaKey, j.filter ? j.filter(b, d) : b
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(b, c, l) {
                    e.isWindow(this) && (this.onbeforeunload = l)
                },
                teardown: function(b, c) {
                    this.onbeforeunload === c && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(b, c, l, d) {
            b = e.extend(new e.Event, l, {
                type: b,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? e.event.trigger(b, null, c) : e.event.dispatch.call(c, b);
            b.isDefaultPrevented() && l.preventDefault()
        }
    };
    e.event.handle = e.event.dispatch;
    e.removeEvent = C.removeEventListener ? function(b, c, e) {
        b.removeEventListener && b.removeEventListener(c, e, !1)
    } : function(b, c, e) {
        c = "on" + c;
        b.detachEvent && ("undefined" == typeof b[c] && (b[c] = null), b.detachEvent(c, e))
    };
    e.Event = function(b, c) {
        if (this instanceof e.Event)
            b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || !1 === b.returnValue || b.getPreventDefault && b.getPreventDefault() ? m : g) : this.type = b,
            c && e.extend(this, c),
            this.timeStamp = b && b.timeStamp || e.now(),
            this[e.expando] = !0;
        else
            return new e.Event(b, c)
    };
    e.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = m;
            var b = this.originalEvent;
            b && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = m;
            var b = this.originalEvent;
            b && (b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = m;
            this.stopPropagation()
        },
        isDefaultPrevented: g,
        isPropagationStopped: g,
        isImmediatePropagationStopped: g
    };
    e.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(b, c) {
        e.event.special[b] = {
            delegateType: c,
            bindType: c,
            handle: function(b) {
                var r,
                    d = b.relatedTarget,
                    j = b.handleObj;
                if (!d || d !== this && !e.contains(this, d))
                    b.type = j.origType,
                    r = j.handler.apply(this, arguments),
                    b.type = c;
                return r
            }
        }
    });
    e.support.submitBubbles || (e.event.special.submit = {
        setup: function() {
            if (e.nodeName(this, "form"))
                return !1;
            e.event.add(this, "click._submit keypress._submit", function(b) {
                b = b.target;
                (b = e.nodeName(b, "input") || e.nodeName(b, "button") ? b.form : c) && !e._data(b, "_submit_attached") && (e.event.add(b, "submit._submit", function(b) {
                    b._submit_bubble = !0
                }), e._data(b, "_submit_attached", !0))
            })
        },
        postDispatch: function(b) {
            b._submit_bubble && (delete b._submit_bubble, this.parentNode && !b.isTrigger && e.event.simulate("submit", this.parentNode, b, !0))
        },
        teardown: function() {
            if (e.nodeName(this, "form"))
                return !1;
            e.event.remove(this, "._submit")
        }
    });
    e.support.changeBubbles || (e.event.special.change = {
        setup: function() {
            if (db.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" === this.type)
                    e.event.add(this, "propertychange._change", function(b) {
                        "checked" === b.originalEvent.propertyName && (this._just_changed = !0)
                    }),
                    e.event.add(this, "click._change", function(b) {
                        this._just_changed && !b.isTrigger && (this._just_changed = !1);
                        e.event.simulate("change", this, b, !0)
                    });
                return !1
            }
            e.event.add(this, "beforeactivate._change", function(b) {
                b = b.target;
                db.test(b.nodeName) && !e._data(b, "_change_attached") && (e.event.add(b, "change._change", function(b) {
                    this.parentNode && !b.isSimulated && !b.isTrigger && e.event.simulate("change", this.parentNode, b, !0)
                }), e._data(b, "_change_attached", !0))
            })
        },
        handle: function(b) {
            var c = b.target;
            if (this !== c || b.isSimulated || b.isTrigger || "radio" !== c.type && "checkbox" !== c.type)
                return b.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return e.event.remove(this, "._change"), !db.test(this.nodeName)
        }
    });
    e.support.focusinBubbles || e.each({
        focus: "focusin",
        blur: "focusout"
    }, function(b, c) {
        var l = 0,
            d = function(b) {
                e.event.simulate(c, b.target, e.event.fix(b), !0)
            };
        e.event.special[c] = {
            setup: function() {
                0 === l++ && C.addEventListener(b, d, !0)
            },
            teardown: function() {
                0 === --l && C.removeEventListener(b, d, !0)
            }
        }
    });
    e.fn.extend({
        on: function(b, n, l, d, j) {
            var f,
                s;
            if ("object" == typeof b) {
                "string" != typeof n && (l = l || n, n = c);
                for (s in b)
                    this.on(s, n, l, b[s], j);
                return this
            }
            null == l && null == d ? (d = n, l = n = c) : null == d && ("string" == typeof n ? (d = l, l = c) : (d = l, l = n, n = c));
            if (!1 === d)
                d = g;
            else if (!d)
                return this;
            return 1 === j && (f = d, d = function(b) {
                return e().off(b), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = e.guid++)), this.each(function() {
                e.event.add(this, b, d, l, n)
            })
        },
        one: function(b, c, e, d) {
            return this.on(b, c, e, d, 1)
        },
        off: function(b, n, l) {
            var d,
                j;
            if (b && b.preventDefault && b.handleObj)
                return d = b.handleObj, e(b.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof b) {
                for (j in b)
                    this.off(j, n, b[j]);
                return this
            }
            if (!1 === n || "function" == typeof n)
                l = n,
                n = c;
            return !1 === l && (l = g), this.each(function() {
                e.event.remove(this, b, l, n)
            })
        },
        bind: function(b, c, e) {
            return this.on(b, null, c, e)
        },
        unbind: function(b, c) {
            return this.off(b, null, c)
        },
        live: function(b, c, d) {
            return e(this.context).on(b, this.selector, c, d), this
        },
        die: function(b, c) {
            return e(this.context).off(b, this.selector || "**", c), this
        },
        delegate: function(b, c, e, d) {
            return this.on(c, b, e, d)
        },
        undelegate: function(b, c, e) {
            return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", e)
        },
        trigger: function(b, c) {
            return this.each(function() {
                e.event.trigger(b, c, this)
            })
        },
        triggerHandler: function(b, c) {
            if (this[0])
                return e.event.trigger(b, c, this[0], !0)
        },
        toggle: function(b) {
            var c = arguments,
                d = b.guid || e.guid++,
                j = 0,
                f = function(d) {
                    var l = (e._data(this, "lastToggle" + b.guid) || 0) % j;
                    return e._data(this, "lastToggle" + b.guid, l + 1), d.preventDefault(), c[l].apply(this, arguments) || !1
                };
            for (f.guid = d; j < c.length;)
                c[j++].guid = d;
            return this.click(f)
        },
        hover: function(b, c) {
            return this.mouseenter(b).mouseleave(c || b)
        }
    });
    e.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(b, c) {
        e.fn[c] = function(b, r) {
            return null == r && (r = b, b = null), 0 < arguments.length ? this.on(c, null, b, r) : this.trigger(c)
        };
        Tc.test(c) && (e.event.fixHooks[c] = e.event.keyHooks);
        Uc.test(c) && (e.event.fixHooks[c] = e.event.mouseHooks)
    });
    var Vc = b,
        F = function(b, c, e, d) {
            e = e || [];
            c = c || X;
            var j,
                f,
                s,
                g,
                p = c.nodeType;
            if (!b || "string" != typeof b)
                return e;
            if (1 !== p && 9 !== p)
                return [];
            s = Ka(c);
            if (!s && !d && (j = Wc.exec(b)))
                if (g = j[1])
                    if (9 === p) {
                        f = c.getElementById(g);
                        if (!f || !f.parentNode)
                            return e;
                        if (f.id === g)
                            return e.push(f), e
                    } else {
                        if (c.ownerDocument && (f = c.ownerDocument.getElementById(g)) && Sb(c, f) && f.id === g)
                            return e.push(f), e
                    }
                else {
                    if (j[2])
                        return oa.apply(e, pa.call(c.getElementsByTagName(b), 0)), e;
                    if ((g = j[3]) && Tb && c.getElementsByClassName)
                        return oa.apply(e, pa.call(c.getElementsByClassName(g), 0)), e
                }
            return eb(b.replace(La, "$1"), c, e, d, s)
        },
        va = function(b) {
            return function(c) {
                return "input" === c.nodeName.toLowerCase() && c.type === b
            }
        },
        Ub = function(b) {
            return function(c) {
                var e = c.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && c.type === b
            }
        },
        ia = function(b) {
            return Y(function(c) {
                return c = +c, Y(function(e, d) {
                    for (var j, f = b([], e.length, c), s = f.length; s--;)
                        e[j = f[s]] && (e[j] = !(d[j] = e[j]))
                })
            })
        },
        Ma = function(b, c, e) {
            if (b === c)
                return e;
            for (b = b.nextSibling; b;) {
                if (b === c)
                    return -1;
                b = b.nextSibling
            }
            return 1
        },
        Oa = function(b, c) {
            var e,
                d,
                j,
                f,
                s,
                g,
                p;
            if (s = Vb[H][b])
                return c ? 0 : s.slice(0);
            s = b;
            g = [];
            for (p = K.preFilter; s;) {
                if (!e || (d = Xc.exec(s)))
                    d && (s = s.slice(d[0].length)),
                    g.push(j = []);
                e = !1;
                if (d = Yc.exec(s))
                    j.push(e = new Wb(d.shift())),
                    s = s.slice(e.length),
                    e.type = d[0].replace(La, " ");
                for (f in K.filter)
                    (d = Na[f].exec(s)) && (!p[f] || (d = p[f](d, X, !0))) && (j.push(e = new Wb(d.shift())), s = s.slice(e.length), e.type = f, e.matches = d);
                if (!e)
                    break
            }
            return c ? s.length : s ? F.error(b) : Vb(b, g).slice(0)
        },
        gb = function(b, c, e) {
            var d = c.dir,
                j = e && "parentNode" === c.dir,
                f = Zc++;
            return c.first ? function(c, e, n) {
                for (; c = c[d];)
                    if (j || 1 === c.nodeType)
                        return b(c, e, n)
            } : function(c, e, n) {
                if (n)
                    for (; c = c[d];) {
                        if ((j || 1 === c.nodeType) && b(c, e, n))
                            return c
                    }
                else
                    for (var l, g = wa + " " + f + " ", p = g + fb; c = c[d];)
                        if (j || 1 === c.nodeType) {
                            if ((l = c[H]) === p)
                                return c.sizset;
                            if ("string" == typeof l && 0 === l.indexOf(g)) {
                                if (c.sizset)
                                    return c
                            } else {
                                c[H] = p;
                                if (b(c, e, n))
                                    return c.sizset = !0, c;
                                c.sizset = !1
                            }
                        }
            }
        },
        hb = function(b) {
            return 1 < b.length ? function(c, e, d) {
                for (var j = b.length; j--;)
                    if (!b[j](c, e, d))
                        return !1;
                return !0
            } : b[0]
        },
        Pa = function(b, c, e, d, j) {
            for (var f, s = [], g = 0, p = b.length, t = null != c; g < p; g++)
                if (f = b[g])
                    if (!e || e(f, d, j))
                        s.push(f),
                        t && c.push(g);
            return s
        },
        ib = function(b, c, e, d, j, f) {
            return d && !d[H] && (d = ib(d)), j && !j[H] && (j = ib(j, f)), Y(function(f, g, v, p) {
                if (!f || !j) {
                    var t,
                        q,
                        m = [],
                        x = [],
                        u = g.length;
                    if (!(q = f)) {
                        q = c || "*";
                        var y = v.nodeType ? [v] : v,
                            z = [];
                        t = 0;
                        for (var A = y.length; t < A; t++)
                            F(q, y[t], z, f);
                        q = z
                    }
                    y = b && (f || !c) ? Pa(q, m, b, v, p) : q;
                    z = e ? j || (f ? b : u || d) ? [] : g : y;
                    e && e(y, z, v, p);
                    if (d) {
                        q = Pa(z, x);
                        d(q, [], v, p);
                        for (v = q.length; v--;)
                            if (t = q[v])
                                z[x[v]] = !(y[x[v]] = t)
                    }
                    if (f)
                        for (v = b && z.length; v--;) {
                            if (t = z[v])
                                f[m[v]] = !(g[m[v]] = t)
                        }
                    else
                        z = Pa(z === g ? z.splice(u, z.length) : z),
                        j ? j(null, g, z, p) : oa.apply(g, z)
                }
            })
        },
        jb = function(b) {
            var c,
                e,
                d,
                j = b.length,
                f = K.relative[b[0].type];
            e = f || K.relative[" "];
            for (var s = f ? 1 : 0, g = gb(function(b) {
                    return b === c
                }, e, !0), p = gb(function(b) {
                    return -1 < Xb.call(c, b)
                }, e, !0), t = [function(b, r, e) {
                    return !f && (e || r !== Qa) || ((c = r).nodeType ? g(b, r, e) : p(b, r, e))
                }]; s < j; s++)
                if (e = K.relative[b[s].type])
                    t = [gb(hb(t), e)];
                else {
                    e = K.filter[b[s].type].apply(null, b[s].matches);
                    if (e[H]) {
                        for (d = ++s; d < j && !K.relative[b[d].type]; d++)
                            ;
                        return ib(1 < s && hb(t), 1 < s && b.slice(0, s - 1).join("").replace(La, "$1"), e, s < d && jb(b.slice(s, d)), d < j && jb(b = b.slice(d)), d < j && b.join(""))
                    }
                    t.push(e)
                }
            return hb(t)
        },
        eb = function(b, c, e, d, j) {
            var f,
                s,
                g,
                p,
                t = Oa(b);
            if (!d && 1 === t.length) {
                s = t[0] = t[0].slice(0);
                if (2 < s.length && "ID" === (g = s[0]).type && 9 === c.nodeType && !j && K.relative[s[1].type]) {
                    c = K.find.ID(g.matches[0].replace(ja, ""), c, j)[0];
                    if (!c)
                        return e;
                    b = b.slice(s.shift().length)
                }
                for (f = Na.POS.test(b) ? -1 : s.length - 1; 0 <= f; f--) {
                    g = s[f];
                    if (K.relative[p = g.type])
                        break;
                    if (p = K.find[p])
                        if (d = p(g.matches[0].replace(ja, ""), kb.test(s[0].type) && c.parentNode || c, j)) {
                            s.splice(f, 1);
                            b = d.length && s.join("");
                            if (!b)
                                return oa.apply(e, pa.call(d, 0)), e;
                            break
                        }
                }
            }
            return lb(b, t)(d, c, j, e, kb.test(b)), e
        },
        Yb = function() {},
        fb,
        mb,
        K,
        Ra,
        Ka,
        Sb,
        lb,
        nb,
        xa,
        Qa,
        Zb = !0,
        H = ("sizcache" + Math.random()).replace(".", ""),
        Wb = String,
        X = Vc.document,
        W = X.documentElement,
        wa = 0,
        Zc = 0,
        $c = [].pop,
        oa = [].push,
        pa = [].slice,
        Xb = [].indexOf || function(b) {
            for (var c = 0, e = this.length; c < e; c++)
                if (this[c] === b)
                    return c;
            return -1
        },
        Y = function(b, c) {
            return b[H] = null == c || c, b
        },
        ob = function() {
            var b = {},
                c = [];
            return Y(function(e, d) {
                return c.push(e) > K.cacheLength && delete b[c.shift()], b[e] = d
            }, b)
        },
        $b = ob(),
        Vb = ob(),
        ac = ob(),
        bc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
        "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
        pb = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + bc + ")|[^:]|\\\\.)*|.*))\\)|)",
        La = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        Xc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        Yc = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
        ad = RegExp(pb),
        Wc = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        kb = /[\x20\t\r\n\f]*[+~]/,
        bd = /h\d/i,
        cd = /input|select|textarea|button/i,
        ja = /\\(?!\\)/g,
        Na = {
            ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/,
            TAG: RegExp("^(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
            ATTR: RegExp("^" + bc),
            PSEUDO: RegExp("^" + pb),
            POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
            CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
        },
        ca = function(b) {
            var c = X.createElement("div");
            try {
                return b(c)
            } catch (e) {
                return !1
            } finally {}
        },
        dd = ca(function(b) {
            return b.appendChild(X.createComment("")), !b.getElementsByTagName("*").length
        }),
        ed = ca(function(b) {
            return b.innerHTML = "<a href='#'></a>", b.firstChild && "undefined" !== typeof b.firstChild.getAttribute && "#" === b.firstChild.getAttribute("href")
        }),
        fd = ca(function(b) {
            b.innerHTML = "<select></select>";
            b = typeof b.lastChild.getAttribute("multiple");
            return "boolean" !== b && "string" !== b
        }),
        Tb = ca(function(b) {
            return b.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !b.getElementsByClassName || !b.getElementsByClassName("e").length ? !1 : (b.lastChild.className = "e", 2 === b.getElementsByClassName("e").length)
        }),
        gd = ca(function(b) {
            b.id = H + 0;
            b.innerHTML = "<a name='" + H + "'></a><div name='" + H + "'></div>";
            W.insertBefore(b, W.firstChild);
            var c = X.getElementsByName && X.getElementsByName(H).length === 2 + X.getElementsByName(H + 0).length;
            return mb = !X.getElementById(H), W.removeChild(b), c
        });
    try {
        pa.call(W.childNodes, 0)[0].nodeType
    } catch (Qd) {
        pa = function(b) {
            for (var c, e = []; c = this[b]; b++)
                e.push(c);
            return e
        }
    }
    F.matches = function(b, c) {
        return F(b, null, null, c)
    };
    F.matchesSelector = function(b, c) {
        return 0 < F(c, null, null, [b]).length
    };
    Ra = F.getText = function(b) {
        var c,
            e = "",
            d = 0;
        if (c = b.nodeType)
            if (1 === c || 9 === c || 11 === c) {
                if ("string" == typeof b.textContent)
                    return b.textContent;
                for (b = b.firstChild; b; b = b.nextSibling)
                    e += Ra(b)
            } else {
                if (3 === c || 4 === c)
                    return b.nodeValue
            }
        else
            for (; c = b[d]; d++)
                e += Ra(c);
        return e
    };
    Ka = F.isXML = function(b) {
        return (b = b && (b.ownerDocument || b).documentElement) ? "HTML" !== b.nodeName : !1
    };
    Sb = F.contains = W.contains ? function(b, c) {
        var e = 9 === b.nodeType ? b.documentElement : b,
            d = c && c.parentNode;
        return b === d || !(!d || !(1 === d.nodeType && e.contains && e.contains(d)))
    } : W.compareDocumentPosition ? function(b, c) {
        return c && !!(b.compareDocumentPosition(c) & 16)
    } : function(b, c) {
        for (; c = c.parentNode;)
            if (c === b)
                return !0;
        return !1
    };
    F.attr = function(b, c) {
        var e,
            d = Ka(b);
        return d || (c = c.toLowerCase()), (e = K.attrHandle[c]) ? e(b) : d || fd ? b.getAttribute(c) : (e = b.getAttributeNode(c), e ? "boolean" == typeof b[c] ? b[c] ? c : null : e.specified ? e.value : null : null)
    };
    K = F.selectors = {
        cacheLength: 50,
        createPseudo: Y,
        match: Na,
        attrHandle: ed ? {} : {
            href: function(b) {
                return b.getAttribute("href", 2)
            },
            type: function(b) {
                return b.getAttribute("type")
            }
        },
        find: {
            ID: mb ? function(b, c, e) {
                if ("undefined" !== typeof c.getElementById && !e)
                    return (b = c.getElementById(b)) && b.parentNode ? [b] : []
            } : function(b, c, e) {
                if ("undefined" !== typeof c.getElementById && !e)
                    return (c = c.getElementById(b)) ? c.id === b || "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id").value === b ? [c] : void 0 : []
            },
            TAG: dd ? function(b, c) {
                if ("undefined" !== typeof c.getElementsByTagName)
                    return c.getElementsByTagName(b)
            } : function(b, c) {
                var e = c.getElementsByTagName(b);
                if ("*" === b) {
                    for (var d, j = [], f = 0; d = e[f]; f++)
                        1 === d.nodeType && j.push(d);
                    return j
                }
                return e
            },
            NAME: gd && function(b, c) {
                if ("undefined" !== typeof c.getElementsByName)
                    return c.getElementsByName(name)
            },
            CLASS: Tb && function(b, c, e) {
                if ("undefined" !== typeof c.getElementsByClassName && !e)
                    return c.getElementsByClassName(b)
            }
        },
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function(b) {
                return b[1] = b[1].replace(ja, ""), b[3] = (b[4] || b[5] || "").replace(ja, ""), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4)
            },
            CHILD: function(b) {
                return b[1] = b[1].toLowerCase(), "nth" === b[1] ? (b[2] || F.error(b[0]), b[3] = +(b[3] ? b[4] + (b[5] || 1) : 2 * ("even" === b[2] || "odd" === b[2])), b[4] = +(b[6] + b[7] || "odd" === b[2])) : b[2] && F.error(b[0]), b
            },
            PSEUDO: function(b) {
                var c,
                    e;
                if (Na.CHILD.test(b[0]))
                    return null;
                if (b[3])
                    b[2] = b[3];
                else if (c = b[4])
                    ad.test(c) && (e = Oa(c, !0)) && (e = c.indexOf(")", c.length - e) - c.length) && (c = c.slice(0, e), b[0] = b[0].slice(0, e)),
                    b[2] = c;
                return b.slice(0, 3)
            }
        },
        filter: {
            ID: mb ? function(b) {
                return b = b.replace(ja, ""), function(c) {
                    return c.getAttribute("id") === b
                }
            } : function(b) {
                return b = b.replace(ja, ""), function(c) {
                    return (c = "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id")) && c.value === b
                }
            },
            TAG: function(b) {
                return "*" === b ? function() {
                    return !0
                } : (b = b.replace(ja, "").toLowerCase(), function(c) {
                    return c.nodeName && c.nodeName.toLowerCase() === b
                })
            },
            CLASS: function(b) {
                var c = $b[H][b];
                return c || (c = $b(b, RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)"))), function(b) {
                    return c.test(b.className || "undefined" !== typeof b.getAttribute && b.getAttribute("class") || "")
                }
            },
            ATTR: function(b, c, e) {
                return function(d) {
                    d = F.attr(d, b);
                    return null == d ? "!=" === c : c ? (d += "", "=" === c ? d === e : "!=" === c ? d !== e : "^=" === c ? e && 0 === d.indexOf(e) : "*=" === c ? e && -1 < d.indexOf(e) : "$=" === c ? e && d.substr(d.length - e.length) === e : "~=" === c ? -1 < (" " + d + " ").indexOf(e) : "|=" === c ? d === e || d.substr(0, e.length + 1) === e + "-" : !1) : !0
                }
            },
            CHILD: function(b, c, e, d) {
                return "nth" === b ? function(b) {
                    var c,
                        r;
                    c = b.parentNode;
                    if (1 === e && 0 === d)
                        return !0;
                    if (c) {
                        r = 0;
                        for (c = c.firstChild; c && !(1 === c.nodeType && (r++, b === c)); c = c.nextSibling)
                            ;
                    }
                    return r -= d, r === e || 0 === r % e && 0 <= r / e
                } : function(c) {
                    var e = c;
                    switch (b) {
                    case "only":
                    case "first":
                        for (; e = e.previousSibling;)
                            if (1 === e.nodeType)
                                return !1;
                        if ("first" === b)
                            return !0;
                        e = c;
                    case "last":
                        for (; e = e.nextSibling;)
                            if (1 === e.nodeType)
                                return !1;
                        return !0
                    }
                }
            },
            PSEUDO: function(b, c) {
                var e,
                    d = K.pseudos[b] || K.setFilters[b.toLowerCase()] || F.error("unsupported pseudo: " + b);
                return d[H] ? d(c) : 1 < d.length ? (e = [b, b, "", c], K.setFilters.hasOwnProperty(b.toLowerCase()) ? Y(function(b, e) {
                    for (var r, l = d(b, c), j = l.length; j--;)
                        r = Xb.call(b, l[j]),
                        b[r] = !(e[r] = l[j])
                }) : function(b) {
                    return d(b, 0, e)
                }) : d
            }
        },
        pseudos: {
            not: Y(function(b) {
                var c = [],
                    e = [],
                    d = lb(b.replace(La, "$1"));
                return d[H] ? Y(function(b, c, e, r) {
                    r = d(b, null, r, []);
                    for (var n = b.length; n--;)
                        if (e = r[n])
                            b[n] = !(c[n] = e)
                }) : function(b, r, j) {
                    return c[0] = b, d(c, null, j, e), !e.pop()
                }
            }),
            has: Y(function(b) {
                return function(c) {
                    return 0 < F(b, c).length
                }
            }),
            contains: Y(function(b) {
                return function(c) {
                    return -1 < (c.textContent || c.innerText || Ra(c)).indexOf(b)
                }
            }),
            enabled: function(b) {
                return !1 === b.disabled
            },
            disabled: function(b) {
                return !0 === b.disabled
            },
            checked: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && !!b.checked || "option" === c && !!b.selected
            },
            selected: function(b) {
                return b.parentNode && b.parentNode.selectedIndex, !0 === b.selected
            },
            parent: function(b) {
                return !K.pseudos.empty(b)
            },
            empty: function(b) {
                var c;
                for (b = b.firstChild; b;) {
                    if ("@" < b.nodeName || 3 === (c = b.nodeType) || 4 === c)
                        return !1;
                    b = b.nextSibling
                }
                return !0
            },
            header: function(b) {
                return bd.test(b.nodeName)
            },
            text: function(b) {
                var c,
                    e;
                return "input" === b.nodeName.toLowerCase() && "text" === (c = b.type) && (null == (e = b.getAttribute("type")) || e.toLowerCase() === c)
            },
            radio: va("radio"),
            checkbox: va("checkbox"),
            file: va("file"),
            password: va("password"),
            image: va("image"),
            submit: Ub("submit"),
            reset: Ub("reset"),
            button: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && "button" === b.type || "button" === c
            },
            input: function(b) {
                return cd.test(b.nodeName)
            },
            focus: function(b) {
                var c = b.ownerDocument;
                return b === c.activeElement && (!c.hasFocus || c.hasFocus()) && (!!b.type || !!b.href)
            },
            active: function(b) {
                return b === b.ownerDocument.activeElement
            },
            first: ia(function() {
                return [0]
            }),
            last: ia(function(b, c) {
                return [c - 1]
            }),
            eq: ia(function(b, c, e) {
                return [0 > e ? e + c : e]
            }),
            even: ia(function(b, c) {
                for (var e = 0; e < c; e += 2)
                    b.push(e);
                return b
            }),
            odd: ia(function(b, c) {
                for (var e = 1; e < c; e += 2)
                    b.push(e);
                return b
            }),
            lt: ia(function(b, c, e) {
                for (c = 0 > e ? e + c : e; 0 <= --c;)
                    b.push(c);
                return b
            }),
            gt: ia(function(b, c, e) {
                for (e = 0 > e ? e + c : e; ++e < c;)
                    b.push(e);
                return b
            })
        }
    };
    nb = W.compareDocumentPosition ? function(b, c) {
        return b === c ? (xa = !0, 0) : (!b.compareDocumentPosition || !c.compareDocumentPosition ? b.compareDocumentPosition : b.compareDocumentPosition(c) & 4) ? -1 : 1
    } : function(b, c) {
        if (b === c)
            return xa = !0, 0;
        if (b.sourceIndex && c.sourceIndex)
            return b.sourceIndex - c.sourceIndex;
        var e,
            d,
            j = [],
            f = [];
        e = b.parentNode;
        d = c.parentNode;
        var g = e;
        if (e === d)
            return Ma(b, c);
        if (!e)
            return -1;
        if (!d)
            return 1;
        for (; g;)
            j.unshift(g),
            g = g.parentNode;
        for (g = d; g;)
            f.unshift(g),
            g = g.parentNode;
        e = j.length;
        d = f.length;
        for (g = 0; g < e && g < d; g++)
            if (j[g] !== f[g])
                return Ma(j[g], f[g]);
        return g === e ? Ma(b, f[g], -1) : Ma(j[g], c, 1)
    };
    [0, 0].sort(nb);
    Zb = !xa;
    F.uniqueSort = function(b) {
        var c,
            e = 1;
        xa = Zb;
        b.sort(nb);
        if (xa)
            for (; c = b[e]; e++)
                c === b[e - 1] && b.splice(e--, 1);
        return b
    };
    F.error = function(b) {
        throw Error("Syntax error, unrecognized expression: " + b);
    };
    lb = F.compile = function(b, c) {
        var e,
            d = [],
            j = [],
            f = ac[H][b];
        if (!f) {
            c || (c = Oa(b));
            for (e = c.length; e--;)
                f = jb(c[e]),
                f[H] ? d.push(f) : j.push(f);
            var g = 0 < d.length,
                p = 0 < j.length,
                t = function(b, c, e, r, n) {
                    var l,
                        f,
                        v = [],
                        q = 0,
                        m = "0",
                        x = b && [],
                        z = null != n,
                        y = Qa,
                        u = b || p && K.find.TAG("*", n && c.parentNode || c),
                        A = wa += null == y ? 1 : Math.E;
                    for (z && (Qa = c !== X && c, fb = t.el); null != (n = u[m]); m++) {
                        if (p && n) {
                            for (l = 0; f = j[l]; l++)
                                if (f(n, c, e)) {
                                    r.push(n);
                                    break
                                }
                            z && (wa = A, fb = ++t.el)
                        }
                        g && ((n = !f && n) && q--, b && x.push(n))
                    }
                    q += m;
                    if (g && m !== q) {
                        for (l = 0; f = d[l]; l++)
                            f(x, v, c, e);
                        if (b) {
                            if (0 < q)
                                for (; m--;)
                                    !x[m] && !v[m] && (v[m] = $c.call(r));
                            v = Pa(v)
                        }
                        oa.apply(r, v);
                        z && !b && 0 < v.length && 1 < q + d.length && F.uniqueSort(r)
                    }
                    return z && (wa = A, Qa = y), x
                };
            e = (t.el = 0, g ? Y(t) : t);
            f = ac(b, e)
        }
        return f
    };
    if (X.querySelectorAll) {
        var cc,
            hd = eb,
            id = /'|\\/g,
            jd = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            Z = [":focus"],
            Sa = [":active", ":focus"],
            Ta = W.matchesSelector || W.mozMatchesSelector || W.webkitMatchesSelector || W.oMatchesSelector || W.msMatchesSelector;
        ca(function(b) {
            b.innerHTML = "<select><option selected=''></option></select>";
            b.querySelectorAll("[selected]").length || Z.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
            b.querySelectorAll(":checked").length || Z.push(":checked")
        });
        ca(function(b) {
            b.innerHTML = "<p test=''></p>";
            b.querySelectorAll("[test^='']").length && Z.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
            b.innerHTML = "<input type='hidden'/>";
            b.querySelectorAll(":enabled").length || Z.push(":enabled", ":disabled")
        });
        Z = RegExp(Z.join("|"));
        eb = function(b, c, e, d, j) {
            if (!d && !j && (!Z || !Z.test(b))) {
                var f,
                    g,
                    p = !0,
                    t = H;
                g = c;
                f = 9 === c.nodeType && b;
                if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                    f = Oa(b);
                    (p = c.getAttribute("id")) ? t = p.replace(id, "\\$&") : c.setAttribute("id", t);
                    t = "[id='" + t + "'] ";
                    for (g = f.length; g--;)
                        f[g] = t + f[g].join("");
                    g = kb.test(b) && c.parentNode || c;
                    f = f.join(",")
                }
                if (f)
                    try {
                        return oa.apply(e, pa.call(g.querySelectorAll(f), 0)), e
                    } catch (q) {} finally {
                        p || c.removeAttribute("id")
                    }
            }
            return hd(b, c, e, d, j)
        };
        Ta && (ca(function(b) {
            cc = Ta.call(b, "div");
            try {
                Ta.call(b, "[test!='']:sizzle"),
                Sa.push("!=", pb)
            } catch (c) {}
        }), Sa = RegExp(Sa.join("|")), F.matchesSelector = function(b, c) {
            c = c.replace(jd, "='$1']");
            if (!Ka(b) && !Sa.test(c) && (!Z || !Z.test(c)))
                try {
                    var e = Ta.call(b, c);
                    if (e || cc || b.document && 11 !== b.document.nodeType)
                        return e
                } catch (d) {}
            return 0 < F(c, null, null, [b]).length
        })
    }
    K.pseudos.nth = K.pseudos.eq;
    K.filters = Yb.prototype = K.pseudos;
    K.setFilters = new Yb;
    F.attr = e.attr;
    e.find = F;
    e.expr = F.selectors;
    e.expr[":"] = e.expr.pseudos;
    e.unique = F.uniqueSort;
    e.text = F.getText;
    e.isXMLDoc = F.isXML;
    e.contains = F.contains;
    var kd = /Until$/,
        ld = /^(?:parents|prev(?:Until|All))/,
        uc = /^.[^:#\[\.,]*$/,
        dc = e.expr.match.needsContext,
        md = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    e.fn.extend({
        find: function(b) {
            var c,
                d,
                j,
                f,
                g,
                s,
                p = this;
            if ("string" != typeof b)
                return e(b).filter(function() {
                    c = 0;
                    for (d = p.length; c < d; c++)
                        if (e.contains(p[c], this))
                            return !0
                });
            s = this.pushStack("", "find", b);
            c = 0;
            for (d = this.length; c < d; c++)
                if (j = s.length, e.find(b, this[c], s), 0 < c)
                    for (f = j; f < s.length; f++)
                        for (g = 0; g < j; g++)
                            if (s[g] === s[f]) {
                                s.splice(f--, 1);
                                break
                            }
            return s
        },
        has: function(b) {
            var c,
                d = e(b, this),
                j = d.length;
            return this.filter(function() {
                for (c = 0; c < j; c++)
                    if (e.contains(this, d[c]))
                        return !0
            })
        },
        not: function(b) {
            return this.pushStack(q(this, b, !1), "not", b)
        },
        filter: function(b) {
            return this.pushStack(q(this, b, !0), "filter", b)
        },
        is: function(b) {
            return !!b && ("string" == typeof b ? dc.test(b) ? 0 <= e(b, this.context).index(this[0]) : 0 < e.filter(b, this).length : 0 < this.filter(b).length)
        },
        closest: function(b, c) {
            for (var d, j = 0, f = this.length, g = [], s = dc.test(b) || "string" != typeof b ? e(b, c || this.context) : 0; j < f; j++)
                for (d = this[j]; d && d.ownerDocument && d !== c && 11 !== d.nodeType;) {
                    if (s ? -1 < s.index(d) : e.find.matchesSelector(d, b)) {
                        g.push(d);
                        break
                    }
                    d = d.parentNode
                }
            return g = 1 < g.length ? e.unique(g) : g, this.pushStack(g, "closest", b)
        },
        index: function(b) {
            return b ? "string" == typeof b ? e.inArray(this[0], e(b)) : e.inArray(b.jquery ? b[0] : b, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(b, c) {
            var d = "string" == typeof b ? e(b, c) : e.makeArray(b && b.nodeType ? [b] : b),
                j = e.merge(this.get(), d);
            return this.pushStack(u(d[0]) || u(j[0]) ? j : e.unique(j))
        },
        addBack: function(b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });
    e.fn.andSelf = e.fn.addBack;
    e.each({
        parent: function(b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b : null
        },
        parents: function(b) {
            return e.dir(b, "parentNode")
        },
        parentsUntil: function(b, c, d) {
            return e.dir(b, "parentNode", d)
        },
        next: function(b) {
            return A(b, "nextSibling")
        },
        prev: function(b) {
            return A(b, "previousSibling")
        },
        nextAll: function(b) {
            return e.dir(b, "nextSibling")
        },
        prevAll: function(b) {
            return e.dir(b, "previousSibling")
        },
        nextUntil: function(b, c, d) {
            return e.dir(b, "nextSibling", d)
        },
        prevUntil: function(b, c, d) {
            return e.dir(b, "previousSibling", d)
        },
        siblings: function(b) {
            return e.sibling((b.parentNode || {}).firstChild, b)
        },
        children: function(b) {
            return e.sibling(b.firstChild)
        },
        contents: function(b) {
            return e.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : e.merge([], b.childNodes)
        }
    }, function(b, c) {
        e.fn[b] = function(d, j) {
            var f = e.map(this, c, d);
            return kd.test(b) || (j = d), j && "string" == typeof j && (f = e.filter(j, f)), f = 1 < this.length && !md[b] ? e.unique(f) : f, 1 < this.length && ld.test(b) && (f = f.reverse()), this.pushStack(f, b, aa.call(arguments).join(","))
        }
    });
    e.extend({
        filter: function(b, c, d) {
            return d && (b = ":not(" + b + ")"), 1 === c.length ? e.find.matchesSelector(c[0], b) ? [c[0]] : [] : e.find.matches(b, c)
        },
        dir: function(b, d, j) {
            var f = [];
            for (b = b[d]; b && 9 !== b.nodeType && (j === c || 1 !== b.nodeType || !e(b).is(j));)
                1 === b.nodeType && f.push(b),
                b = b[d];
            return f
        },
        sibling: function(b, c) {
            for (var e = []; b; b = b.nextSibling)
                1 === b.nodeType && b !== c && e.push(b);
            return e
        }
    });
    var wb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        nd = / jQuery\d+="(?:null|\d+)"/g,
        qb = /^\s+/,
        ec = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        fc = /<([\w:]+)/,
        od = /<tbody/i,
        pd = /<|&#?\w+;/,
        qd = /<(?:script|style|link)/i,
        rd = /<(?:script|object|embed|option|style)/i,
        rb = RegExp("<(?:" + wb + ")[\\s/>]", "i"),
        xb = /^(?:checkbox|radio)$/,
        gc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        sd = /\/(java|ecma)script/i,
        td = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        V = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        hc = x(C),
        sb = hc.appendChild(C.createElement("div"));
    V.optgroup = V.option;
    V.tbody = V.tfoot = V.colgroup = V.caption = V.thead;
    V.th = V.td;
    e.support.htmlSerialize || (V._default = [1, "X<div>", "</div>"]);
    e.fn.extend({
        text: function(b) {
            return e.access(this, function(b) {
                return b === c ? e.text(this) : this.empty().append((this[0] && this[0].ownerDocument || C).createTextNode(b))
            }, null, b, arguments.length)
        },
        wrapAll: function(b) {
            if (e.isFunction(b))
                return this.each(function(c) {
                    e(this).wrapAll(b.call(this, c))
                });
            if (this[0]) {
                var c = e(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]);
                c.map(function() {
                    for (var b = this; b.firstChild && 1 === b.firstChild.nodeType;)
                        b = b.firstChild;
                    return b
                }).append(this)
            }
            return this
        },
        wrapInner: function(b) {
            return e.isFunction(b) ? this.each(function(c) {
                e(this).wrapInner(b.call(this, c))
            }) : this.each(function() {
                var c = e(this),
                    d = c.contents();
                d.length ? d.wrapAll(b) : c.append(b)
            })
        },
        wrap: function(b) {
            var c = e.isFunction(b);
            return this.each(function(d) {
                e(this).wrapAll(c ? b.call(this, d) : b)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                e.nodeName(this, "body") || e(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(b)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(b, this.firstChild)
            })
        },
        before: function() {
            if (!u(this[0]))
                return this.domManip(arguments, !1, function(b) {
                    this.parentNode.insertBefore(b, this)
                });
            if (arguments.length) {
                var b = e.clean(arguments);
                return this.pushStack(e.merge(b, this), "before", this.selector)
            }
        },
        after: function() {
            if (!u(this[0]))
                return this.domManip(arguments, !1, function(b) {
                    this.parentNode.insertBefore(b, this.nextSibling)
                });
            if (arguments.length) {
                var b = e.clean(arguments);
                return this.pushStack(e.merge(this, b), "after", this.selector)
            }
        },
        remove: function(b, c) {
            for (var d, j = 0; null != (d = this[j]); j++)
                if (!b || e.filter(b, [d]).length)
                    !c && 1 === d.nodeType && (e.cleanData(d.getElementsByTagName("*")), e.cleanData([d])),
                    d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function() {
            for (var b, c = 0; null != (b = this[c]); c++)
                for (1 === b.nodeType && e.cleanData(b.getElementsByTagName("*")); b.firstChild;)
                    b.removeChild(b.firstChild);
            return this
        },
        clone: function(b, c) {
            return b = null == b ? !1 : b, c = null == c ? b : c, this.map(function() {
                return e.clone(this, b, c)
            })
        },
        html: function(b) {
            return e.access(this, function(b) {
                var d = this[0] || {},
                    j = 0,
                    r = this.length;
                if (b === c)
                    return 1 === d.nodeType ? d.innerHTML.replace(nd, "") : c;
                if ("string" == typeof b && !qd.test(b) && (e.support.htmlSerialize || !rb.test(b)) && (e.support.leadingWhitespace || !qb.test(b)) && !V[(fc.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = b.replace(ec, "<$1></$2>");
                    try {
                        for (; j < r; j++)
                            d = this[j] || {},
                            1 === d.nodeType && (e.cleanData(d.getElementsByTagName("*")), d.innerHTML = b);
                        d = 0
                    } catch (f) {}
                }
                d && this.empty().append(b)
            }, null, b, arguments.length)
        },
        replaceWith: function(b) {
            return u(this[0]) ? this.length ? this.pushStack(e(e.isFunction(b) ? b() : b), "replaceWith", b) : this : e.isFunction(b) ? this.each(function(c) {
                var d = e(this),
                    j = d.html();
                d.replaceWith(b.call(this, c, j))
            }) : ("string" != typeof b && (b = e(b).detach()), this.each(function() {
                var c = this.nextSibling,
                    d = this.parentNode;
                e(this).remove();
                c ? e(c).before(b) : e(d).append(b)
            }))
        },
        detach: function(b) {
            return this.remove(b, !0)
        },
        domManip: function(b, d, j) {
            b = [].concat.apply([], b);
            var f,
                g,
                p,
                s = 0,
                t = b[0],
                q = [],
                m = this.length;
            if (!e.support.checkClone && 1 < m && "string" == typeof t && gc.test(t))
                return this.each(function() {
                    e(this).domManip(b, d, j)
                });
            if (e.isFunction(t))
                return this.each(function(f) {
                    var g = e(this);
                    b[0] = t.call(this, f, d ? g.html() : c);
                    g.domManip(b, d, j)
                });
            if (this[0]) {
                f = e.buildFragment(b, this, q);
                p = f.fragment;
                g = p.firstChild;
                1 === p.childNodes.length && (p = g);
                if (g) {
                    d = d && e.nodeName(g, "tr");
                    for (f = f.cacheable || m - 1; s < m; s++)
                        j.call(d && e.nodeName(this[s], "table") ? this[s].getElementsByTagName("tbody")[0] || this[s].appendChild(this[s].ownerDocument.createElement("tbody")) : this[s], s === f ? p : e.clone(p, !0, !0))
                }
                p = g = null;
                q.length && e.each(q, function(b, c) {
                    c.src ? e.ajax ? e.ajax({
                        url: c.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : e.error("no ajax") : e.globalEval((c.text || c.textContent || c.innerHTML || "").replace(td, ""));
                    c.parentNode && c.parentNode.removeChild(c)
                })
            }
            return this
        }
    });
    e.buildFragment = function(b, d, j) {
        var f,
            g,
            p,
            s = b[0];
        return d = d || C, d = !d.nodeType && d[0] || d, d = d.ownerDocument || d, 1 === b.length && "string" == typeof s && 512 > s.length && d === C && "<" === s.charAt(0) && !rd.test(s) && (e.support.checkClone || !gc.test(s)) && (e.support.html5Clone || !rb.test(s)) && (g = !0, f = e.fragments[s], p = f !== c), f || (f = d.createDocumentFragment(), e.clean(b, d, f, j), g && (e.fragments[s] = p && f)), {
            fragment: f,
            cacheable: g
        }
    };
    e.fragments = {};
    e.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(b, c) {
        e.fn[b] = function(d) {
            var j,
                f = 0,
                g = [];
            d = e(d);
            var p = d.length;
            j = 1 === this.length && this[0].parentNode;
            if ((null == j || j && 11 === j.nodeType && 1 === j.childNodes.length) && 1 === p)
                return d[c](this[0]), this;
            for (; f < p; f++)
                j = (0 < f ? this.clone(!0) : this).get(),
                e(d[f])[c](j),
                g = g.concat(j);
            return this.pushStack(g, b, d.selector)
        }
    });
    e.extend({
        clone: function(b, c, d) {
            var f,
                g,
                t,
                s;
            e.support.html5Clone || e.isXMLDoc(b) || !rb.test("<" + b.nodeName +
            ">") ? s = b.cloneNode(!0) : (sb.innerHTML = b.outerHTML, sb.removeChild(s = sb.firstChild));
            if ((!e.support.noCloneEvent || !e.support.noCloneChecked) && (1 === b.nodeType || 11 === b.nodeType) && !e.isXMLDoc(b)) {
                j(b, s);
                f = p(b);
                g = p(s);
                for (t = 0; f[t]; ++t)
                    g[t] && j(f[t], g[t])
            }
            if (c && (z(b, s), d)) {
                f = p(b);
                g = p(s);
                for (t = 0; f[t]; ++t)
                    z(f[t], g[t])
            }
            return s
        },
        clean: function(b, c, d, j) {
            var f,
                g,
                p,
                q,
                m,
                z,
                y,
                u = c === C && hc,
                A = [];
            if (!c || "undefined" == typeof c.createDocumentFragment)
                c = C;
            for (f = 0; null != (p = b[f]); f++)
                if ("number" == typeof p && (p += ""), p) {
                    if ("string" == typeof p)
                        if (pd.test(p)) {
                            u = u || x(c);
                            z = c.createElement("div");
                            u.appendChild(z);
                            p = p.replace(ec, "<$1></$2>");
                            g = (fc.exec(p) || ["", ""])[1].toLowerCase();
                            q = V[g] || V._default;
                            m = q[0];
                            for (z.innerHTML = q[1] + p + q[2]; m--;)
                                z = z.lastChild;
                            if (!e.support.tbody) {
                                m = od.test(p);
                                q = "table" === g && !m ? z.firstChild && z.firstChild.childNodes : "<table>" === q[1] && !m ? z.childNodes : [];
                                for (g = q.length - 1; 0 <= g; --g)
                                    e.nodeName(q[g], "tbody") && !q[g].childNodes.length && q[g].parentNode.removeChild(q[g])
                            }
                            !e.support.leadingWhitespace && qb.test(p) && z.insertBefore(c.createTextNode(qb.exec(p)[0]), z.firstChild);
                            p = z.childNodes;
                            z.parentNode.removeChild(z)
                        } else
                            p = c.createTextNode(p);
                    p.nodeType ? A.push(p) : e.merge(A, p)
                }
            z && (p = z = u = null);
            if (!e.support.appendChecked)
                for (f = 0; null != (p = A[f]); f++)
                    e.nodeName(p, "input") ? t(p) : "undefined" != typeof p.getElementsByTagName && e.grep(p.getElementsByTagName("input"), t);
            if (d) {
                b = function(b) {
                    if (!b.type || sd.test(b.type))
                        return j ? j.push(b.parentNode ? b.parentNode.removeChild(b) : b) : d.appendChild(b)
                };
                for (f = 0; null != (p = A[f]); f++)
                    if (!e.nodeName(p, "script") || !b(p))
                        d.appendChild(p),
                        "undefined" != typeof p.getElementsByTagName && (y = e.grep(e.merge([], p.getElementsByTagName("script")), b), A.splice.apply(A, [f + 1, 0].concat(y)), f += y.length)
            }
            return A
        },
        cleanData: function(b, c) {
            for (var d, j, f, g, p = 0, t = e.expando, q = e.cache, m = e.support.deleteExpando, x = e.event.special; null != (f = b[p]); p++)
                if (c || e.acceptData(f))
                    if (d = (j = f[t]) && q[j]) {
                        if (d.events)
                            for (g in d.events)
                                x[g] ? e.event.remove(f, g) : e.removeEvent(f, g, d.handle);
                        q[j] && (delete q[j], m ? delete f[t] : f.removeAttribute ? f.removeAttribute(t) : f[t] = null, e.deletedIds.push(j))
                    }
        }
    });
    var Ua,
        da;
    e.uaMatch = function(b) {
        b = b.toLowerCase();
        b = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || 0 > b.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
        return {
            browser: b[1] || "",
            version: b[2] || "0"
        }
    };
    Ua = e.uaMatch(zc.userAgent);
    da = {};
    Ua.browser && (da[Ua.browser] = !0, da.version = Ua.version);
    da.chrome ? da.webkit = !0 : da.webkit && (da.safari = !0);
    e.browser = da;
    e.sub = function() {
        function b(c, e) {
            return new b.fn.init(c, e)
        }
        e.extend(!0, b, this);
        b.superclass = this;
        b.fn = b.prototype = this();
        b.fn.constructor = b;
        b.sub = this.sub;
        b.fn.init = function(d, j) {
            return j && j instanceof e && !(j instanceof b) && (j = b(j)), e.fn.init.call(this, d, j, c)
        };
        b.fn.init.prototype = b.fn;
        var c = b(C);
        return b
    };
    var P,
        la,
        ma,
        tb = /alpha\([^)]*\)/i,
        ud = /opacity=([^)]*)/,
        vd = /^(top|right|bottom|left)$/,
        wd = /^(none|table(?!-c[ea]).+)/,
        ic = /^margin/,
        vc = RegExp("^(" + Ea + ")(.*)$", "i"),
        ya = RegExp("^(" + Ea + ")(?!px)[a-z%]+$", "i"),
        xd = RegExp("^([-+])=(" + Ea + ")", "i"),
        Ya = {},
        yd = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        jc = {
            letterSpacing: 0,
            fontWeight: 400
        },
        ea = ["Top", "Right", "Bottom", "Left"],
        yb = ["Webkit", "O", "Moz", "ms"],
        zd = e.fn.toggle;
    e.fn.extend({
        css: function(b, d) {
            return e.access(this, function(b, d, j) {
                return j !== c ? e.style(b, d, j) : e.css(b, d)
            }, b, d, 1 < arguments.length)
        },
        show: function() {
            return E(this, !0)
        },
        hide: function() {
            return E(this)
        },
        toggle: function(b, c) {
            var d = "boolean" == typeof b;
            return e.isFunction(b) && e.isFunction(c) ? zd.apply(this, arguments) : this.each(function() {
                (d ? b : M(this)) ? e(this).show() : e(this).hide()
            })
        }
    });
    e.extend({
        cssHooks: {
            opacity: {
                get: function(b, c) {
                    if (c) {
                        var e = P(b, "opacity");
                        return "" === e ? "1" : e
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": e.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(b, d, j, f) {
            if (b && !(3 === b.nodeType || 8 === b.nodeType || !b.style)) {
                var g,
                    p,
                    s,
                    t = e.camelCase(d),
                    q = b.style;
                d = e.cssProps[t] || (e.cssProps[t] = y(q, t));
                s = e.cssHooks[d] || e.cssHooks[t];
                if (j === c)
                    return s && "get" in s && (g = s.get(b, !1, f)) !== c ? g : q[d];
                p = typeof j;
                "string" === p && (g = xd.exec(j)) && (j = (g[1] + 1) * g[2] + parseFloat(e.css(b, d)), p = "number");
                if (!(null == j || "number" === p && isNaN(j)))
                    if ("number" === p && !e.cssNumber[t] && (j += "px"), !s || !("set" in s) || (j = s.set(b, j, f)) !== c)
                        try {
                            q[d] = j
                        } catch (m) {}
            }
        },
        css: function(b, d, j, f) {
            var g,
                p,
                t,
                q = e.camelCase(d);
            return d = e.cssProps[q] || (e.cssProps[q] = y(b.style, q)), t = e.cssHooks[d] || e.cssHooks[q], t && "get" in t && (g = t.get(b, !0, f)), g === c && (g = P(b, d)), "normal" === g && d in jc && (g = jc[d]), j || f !== c ? (p = parseFloat(g), j || e.isNumeric(p) ? p || 0 : g) : g
        },
        swap: function(b, c, d) {
            var e,
                j = {};
            for (e in c)
                j[e] = b.style[e],
                b.style[e] = c[e];
            d = d.call(b);
            for (e in c)
                b.style[e] = j[e];
            return d
        }
    });
    b.getComputedStyle ? P = function(c, d) {
        var j,
            f,
            g,
            p,
            t = b.getComputedStyle(c, null),
            q = c.style;
        return t && (j = t[d], "" === j && !e.contains(c.ownerDocument, c) && (j = e.style(c, d)), ya.test(j) && ic.test(d) && (f = q.width, g = q.minWidth, p = q.maxWidth, q.minWidth = q.maxWidth = q.width = j, j = t.width, q.width = f, q.minWidth = g, q.maxWidth = p)), j
    } : C.documentElement.currentStyle && (P = function(b, c) {
        var d,
            e,
            j = b.currentStyle && b.currentStyle[c],
            f = b.style;
        return null == j && f && f[c] && (j = f[c]), ya.test(j) && !vd.test(c) && (d = f.left, e = b.runtimeStyle && b.runtimeStyle.left, e && (b.runtimeStyle.left = b.currentStyle.left), f.left = "fontSize" === c ? "1em" : j, j = f.pixelLeft + "px", f.left = d, e && (b.runtimeStyle.left = e)), "" === j ? "auto" : j
    });
    e.each(["height", "width"], function(b, c) {
        e.cssHooks[c] = {
            get: function(b, d, j) {
                if (d)
                    return 0 === b.offsetWidth && wd.test(P(b, "display")) ? e.swap(b, yd, function() {
                        return G(b, c, j)
                    }) : G(b, c, j)
            },
            set: function(b, d, j) {
                return D(b, d, j ? Xa(b, c, j, e.support.boxSizing && "border-box" === e.css(b, "boxSizing")) : 0)
            }
        }
    });
    e.support.opacity || (e.cssHooks.opacity = {
        get: function(b, c) {
            return ud.test((c && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : c ? "1" : ""
        },
        set: function(b, c) {
            var d = b.style,
                j = b.currentStyle,
                f = e.isNumeric(c) ? "alpha(opacity=" + 100 * c + ")" : "",
                g = j && j.filter || d.filter || "";
            d.zoom = 1;
            if (!(1 <= c && "" === e.trim(g.replace(tb, "")) && d.removeAttribute && (d.removeAttribute("filter"), j && !j.filter)))
                d.filter = tb.test(g) ? g.replace(tb, f) : g + " " + f
        }
    });
    e(function() {
        e.support.reliableMarginRight || (e.cssHooks.marginRight = {
            get: function(b, c) {
                return e.swap(b, {
                    display: "inline-block"
                }, function() {
                    if (c)
                        return P(b, "marginRight")
                })
            }
        });
        !e.support.pixelPosition && e.fn.position && e.each(["top", "left"], function(b, c) {
            e.cssHooks[c] = {
                get: function(b, d) {
                    if (d) {
                        var j = P(b, c);
                        return ya.test(j) ? e(b).position()[c] + "px" : j
                    }
                }
            }
        })
    });
    e.expr && e.expr.filters && (e.expr.filters.hidden = function(b) {
        return 0 === b.offsetWidth && 0 === b.offsetHeight || !e.support.reliableHiddenOffsets && "none" === (b.style && b.style.display || P(b, "display"))
    }, e.expr.filters.visible = function(b) {
        return !e.expr.filters.hidden(b)
    });
    e.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(b, c) {
        e.cssHooks[b + c] = {
            expand: function(d) {
                var e = "string" == typeof d ? d.split(" ") : [d],
                    j = {};
                for (d = 0; 4 > d; d++)
                    j[b + ea[d] + c] = e[d] || e[d - 2] || e[0];
                return j
            }
        };
        ic.test(b) || (e.cssHooks[b + c].set = D)
    });
    var Ad = /%20/g,
        wc = /\[\]$/,
        kc = /\r?\n/g,
        Bd = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Cd = /^(?:select|textarea)/i;
    e.fn.extend({
        serialize: function() {
            return e.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? e.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Cd.test(this.nodeName) || Bd.test(this.type))
            }).map(function(b, c) {
                var d = e(this).val();
                return null == d ? null : e.isArray(d) ? e.map(d, function(b) {
                    return {
                        name: c.name,
                        value: b.replace(kc, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: d.replace(kc, "\r\n")
                }
            }).get()
        }
    });
    e.param = function(b, d) {
        var j,
            f = [],
            g = function(b, c) {
                c = e.isFunction(c) ? c() : null == c ? "" : c;
                f[f.length] = encodeURIComponent(b) + "=" + encodeURIComponent(c)
            };
        d === c && (d = e.ajaxSettings && e.ajaxSettings.traditional);
        if (e.isArray(b) || b.jquery && !e.isPlainObject(b))
            e.each(b, function() {
                g(this.name, this.value)
            });
        else
            for (j in b)
                L(j, b[j], d, g);
        return f.join("&").replace(Ad, "+")
    };
    var qa,
        ka,
        Dd = /#.*$/,
        Ed = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Fd = /^(?:GET|HEAD)$/,
        Gd = /^\/\//,
        lc = /\?/,
        Hd = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Id = /([?&])_=[^&]*/,
        mc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        nc = e.fn.load,
        Za = {},
        oc = {},
        pc = ["*/"] + ["*"];
    try {
        ka = yc.href
    } catch (Rd) {
        ka = C.createElement("a"),
        ka.href = "",
        ka = ka.href
    }
    qa = mc.exec(ka.toLowerCase()) || [];
    e.fn.load = function(b, d, j) {
        if ("string" != typeof b && nc)
            return nc.apply(this, arguments);
        if (!this.length)
            return this;
        var f,
            g,
            p,
            t = this,
            q = b.indexOf(" ");
        return 0 <= q && (f = b.slice(q, b.length), b = b.slice(0, q)), e.isFunction(d) ? (j = d, d = c) : d && "object" == typeof d && (g = "POST"), e.ajax({
            url: b,
            type: g,
            dataType: "html",
            data: d,
            complete: function(b, c) {
                j && t.each(j, p || [b.responseText, c, b])
            }
        }).done(function(b) {
            p = arguments;
            t.html(f ? e("<div>").append(b.replace(Hd, "")).find(f) : b)
        }), this
    };
    e.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(b, c) {
        e.fn[c] = function(b) {
            return this.on(c, b)
        }
    });
    e.each(["get", "post"], function(b, d) {
        e[d] = function(b, j, f, g) {
            return e.isFunction(j) && (g = g || f, f = j, j = c), e.ajax({
                type: d,
                url: b,
                data: j,
                success: f,
                dataType: g
            })
        }
    });
    e.extend({
        getScript: function(b, d) {
            return e.get(b, c, d, "script")
        },
        getJSON: function(b, c, d) {
            return e.get(b, c, d, "json")
        },
        ajaxSetup: function(b, c) {
            return c ? sa(b, e.ajaxSettings) : (c = b, b = e.ajaxSettings), sa(b, c), b
        },
        ajaxSettings: {
            url: ka,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(qa[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": pc
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": b.String,
                "text html": !0,
                "text json": e.parseJSON,
                "text xml": e.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: za(Za),
        ajaxTransport: za(oc),
        ajax: function(b, d) {
            function j(b, d, r, n) {
                var l,
                    p,
                    m,
                    v,
                    z,
                    E = d;
                if (2 !== G) {
                    G = 2;
                    q && clearTimeout(q);
                    t = c;
                    g = n || "";
                    I.readyState = 0 < b ? 4 : 0;
                    if (r) {
                        v = y;
                        n = I;
                        var U,
                            R,
                            F,
                            J,
                            K = v.contents,
                            L = v.dataTypes,
                            O = v.responseFields;
                        for (R in O)
                            R in r && (n[O[R]] = r[R]);
                        for (; "*" === L[0];)
                            L.shift(),
                            U === c && (U = v.mimeType || n.getResponseHeader("content-type"));
                        if (U)
                            for (R in K)
                                if (K[R] && K[R].test(U)) {
                                    L.unshift(R);
                                    break
                                }
                        if (L[0] in r)
                            F = L[0];
                        else {
                            for (R in r) {
                                if (!L[0] || v.converters[R + " " + L[0]]) {
                                    F = R;
                                    break
                                }
                                J || (J = R)
                            }
                            F = F || J
                        }
                        v = r = F ? (F !== L[0] && L.unshift(F), r[F]) : void 0
                    }
                    if (200 <= b && 300 > b || 304 === b)
                        if (y.ifModified && (z = I.getResponseHeader("Last-Modified"), z && (e.lastModified[f] = z), z = I.getResponseHeader("Etag"), z && (e.etag[f] = z)), 304 === b)
                            E = "notmodified",
                            l = !0;
                        else {
                            var H;
                            a:
                            {
                                l = y;
                                p = v;
                                var N,
                                    E = l.dataTypes.slice();
                                r = E[0];
                                U = {};
                                R = 0;
                                l.dataFilter && (p = l.dataFilter(p, l.dataType));
                                if (E[1])
                                    for (H in l.converters)
                                        U[H.toLowerCase()] = l.converters[H];
                                for (; m = E[++R];)
                                    if ("*" !== m) {
                                        if ("*" !== r && r !== m) {
                                            H = U[r + " " + m] || U["* " + m];
                                            if (!H)
                                                for (N in U)
                                                    if (z = N.split(" "), z[1] === m && (H = U[r + " " + z[0]] || U["* " + z[0]])) {
                                                        !0 === H ? H = U[N] : !0 !== U[N] && (m = z[0], E.splice(R--, 0, m));
                                                        break
                                                    }
                                            if (!0 !== H)
                                                if (H && l["throws"])
                                                    p = H(p);
                                                else
                                                    try {
                                                        p = H(p)
                                                    } catch (P) {
                                                        H = {
                                                            state: "parsererror",
                                                            error: H ? P : "No conversion from " + r + " to " + m
                                                        };
                                                        break a
                                                    }
                                        }
                                        r = m
                                    }
                                H = {
                                    state: "success",
                                    data: p
                                }
                            }l = H;
                            E = l.state;
                            p = l.data;
                            m = l.error;
                            l = !m
                        }
                    else if (m = E, !E || b)
                        E = "error",
                        0 > b && (b = 0);
                    I.status = b;
                    I.statusText = (d || E) + "";
                    l ? M.resolveWith(u, [p, E, I]) : M.rejectWith(u, [I, E, m]);
                    I.statusCode(C);
                    C = c;
                    x && A.trigger("ajax" + (l ? "Success" : "Error"), [I, y, l ? p : m]);
                    D.fireWith(u, [I, E]);
                    x && (A.trigger("ajaxComplete", [I, y]), --e.active || e.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof b && (d = b, b = c);
            d = d || {};
            var f,
                g,
                p,
                t,
                q,
                m,
                x,
                z,
                y = e.ajaxSetup({}, d),
                u = y.context || y,
                A = u !== y && (u.nodeType || u instanceof e) ? e(u) : e.event,
                M = e.Deferred(),
                D = e.Callbacks("once memory"),
                C = y.statusCode || {},
                E = {},
                F = {},
                G = 0,
                J = "canceled",
                I = {
                    readyState: 0,
                    setRequestHeader: function(b, c) {
                        if (!G) {
                            var d = b.toLowerCase();
                            b = F[d] = F[d] || b;
                            E[b] = c
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === G ? g : null
                    },
                    getResponseHeader: function(b) {
                        var d;
                        if (2 === G) {
                            if (!p)
                                for (p = {}; d = Ed.exec(g);)
                                    p[d[1].toLowerCase()] = d[2];
                            d = p[b.toLowerCase()]
                        }
                        return d === c ? null : d
                    },
                    overrideMimeType: function(b) {
                        return G || (y.mimeType = b), this
                    },
                    abort: function(b) {
                        return b = b || J, t && t.abort(b), j(0, b), this
                    }
                };
            M.promise(I);
            I.success = I.done;
            I.error = I.fail;
            I.complete = D.add;
            I.statusCode = function(b) {
                if (b) {
                    var c;
                    if (2 > G)
                        for (c in b)
                            C[c] = [C[c], b[c]];
                    else
                        c = b[I.status],
                        I.always(c)
                }
                return this
            };
            y.url = ((b || y.url) + "").replace(Dd, "").replace(Gd, qa[1] + "//");
            y.dataTypes = e.trim(y.dataType || "*").toLowerCase().split(fa);
            null == y.crossDomain && (m = mc.exec(y.url.toLowerCase()) || !1, y.crossDomain = m && m.join(":") + (m[3] ? "" : "http:" === m[1] ? 80 : 443) !== qa.join(":") + (qa[3] ? "" : "http:" === qa[1] ? 80 : 443));
            y.data && y.processData && "string" != typeof y.data && (y.data = e.param(y.data, y.traditional));
            na(Za, y, d, I);
            if (2 === G)
                return I;
            x = y.global;
            y.type = y.type.toUpperCase();
            y.hasContent = !Fd.test(y.type);
            x && 0 === e.active++ && e.event.trigger("ajaxStart");
            if (!y.hasContent && (y.data && (y.url += (lc.test(y.url) ? "&" : "?") + y.data, delete y.data), f = y.url, !1 === y.cache)) {
                m = e.now();
                var K = y.url.replace(Id, "$1_=" + m);
                y.url = K + (K === y.url ? (lc.test(y.url) ? "&" : "?") + "_=" + m : "")
            }
            (y.data && y.hasContent && !1 !== y.contentType || d.contentType) && I.setRequestHeader("Content-Type", y.contentType);
            y.ifModified && (f = f || y.url, e.lastModified[f] && I.setRequestHeader("If-Modified-Since", e.lastModified[f]), e.etag[f] && I.setRequestHeader("If-None-Match", e.etag[f]));
            I.setRequestHeader("Accept", y.dataTypes[0] && y.accepts[y.dataTypes[0]] ? y.accepts[y.dataTypes[0]] + ("*" !== y.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : y.accepts["*"]);
            for (z in y.headers)
                I.setRequestHeader(z, y.headers[z]);
            if (!y.beforeSend || !1 !== y.beforeSend.call(u, I, y) && 2 !== G) {
                J = "abort";
                for (z in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    I[z](y[z]);
                if (t = na(oc, y, d, I)) {
                    I.readyState = 1;
                    x && A.trigger("ajaxSend", [I, y]);
                    y.async && 0 < y.timeout && (q = setTimeout(function() {
                        I.abort("timeout")
                    }, y.timeout));
                    try {
                        G = 1,
                        t.send(E, j)
                    } catch (L) {
                        if (2 > G)
                            j(-1, L);
                        else
                            throw L;
                    }
                } else
                    j(-1, "No Transport");
                return I
            }
            return I.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var qc = [],
        Jd = /\?/,
        Va = /(=)\?(?=&|$)|\?\?/,
        Kd = e.now();
    e.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var b = qc.pop() || e.expando + "_" + Kd++;
            return this[b] = !0, b
        }
    });
    e.ajaxPrefilter("json jsonp", function(d, j, f) {
        var g,
            p,
            t,
            q = d.data,
            m = d.url,
            y = !1 !== d.jsonp,
            x = y && Va.test(m),
            z = y && !x && "string" == typeof q && !(d.contentType || "").indexOf("application/x-www-form-urlencoded") && Va.test(q);
        if ("jsonp" === d.dataTypes[0] || x || z)
            return g = d.jsonpCallback = e.isFunction(d.jsonpCallback) ? d.jsonpCallback() : d.jsonpCallback, p = b[g], x ? d.url = m.replace(Va, "$1" + g) : z ? d.data = q.replace(Va, "$1" + g) : y && (d.url += (Jd.test(m) ? "&" : "?") + d.jsonp + "=" + g), d.converters["script json"] = function() {
                return t || e.error(g + " was not called"), t[0]
            }, d.dataTypes[0] = "json", b[g] = function() {
                t = arguments
            }, f.always(function() {
                b[g] = p;
                d[g] && (d.jsonpCallback = j.jsonpCallback, qc.push(g));
                t && e.isFunction(p) && p(t[0]);
                t = p = c
            }), "script"
    });
    e.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(b) {
                return e.globalEval(b), b
            }
        }
    });
    e.ajaxPrefilter("script", function(b) {
        b.cache === c && (b.cache = !1);
        b.crossDomain && (b.type = "GET", b.global = !1)
    });
    e.ajaxTransport("script", function(b) {
        if (b.crossDomain) {
            var d,
                e = C.head || C.getElementsByTagName("head")[0] || C.documentElement;
            return {
                send: function(j, f) {
                    d = C.createElement("script");
                    d.async = "async";
                    b.scriptCharset && (d.charset = b.scriptCharset);
                    d.src = b.url;
                    d.onload = d.onreadystatechange = function(b, j) {
                        if (j || !d.readyState || /loaded|complete/.test(d.readyState))
                            d.onload = d.onreadystatechange = null,
                            e && d.parentNode && e.removeChild(d),
                            d = c,
                            j || f(200, "success")
                    };
                    e.insertBefore(d, e.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var ra,
        ub = b.ActiveXObject ? function() {
            for (var b in ra)
                ra[b](0, 1)
        } : !1,
        Ld = 0;
    e.ajaxSettings.xhr = b.ActiveXObject ? function() {
        var c;
        if (!(c = !this.isLocal && zb()))
            a:
            {
                try {
                    c = new b.ActiveXObject("Microsoft.XMLHTTP");
                    break a
                } catch (d) {}
                c = void 0
            }return c
    } : zb;
    var vb = e.ajaxSettings.xhr();
    e.extend(e.support, {
        ajax: !!vb,
        cors: !!vb && "withCredentials" in vb
    });
    e.support.ajax && e.ajaxTransport(function(d) {
        if (!d.crossDomain || e.support.cors) {
            var j;
            return {
                send: function(f, g) {
                    var p,
                        t,
                        q = d.xhr();
                    d.username ? q.open(d.type, d.url, d.async, d.username, d.password) : q.open(d.type, d.url, d.async);
                    if (d.xhrFields)
                        for (t in d.xhrFields)
                            q[t] = d.xhrFields[t];
                    d.mimeType && q.overrideMimeType && q.overrideMimeType(d.mimeType);
                    !d.crossDomain && !f["X-Requested-With"] && (f["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (t in f)
                            q.setRequestHeader(t, f[t])
                    } catch (m) {}
                    q.send(d.hasContent && d.data || null);
                    j = function(b, f) {
                        var l,
                            t,
                            m,
                            y,
                            v;
                        try {
                            if (j && (f || 4 === q.readyState))
                                if (j = c, p && (q.onreadystatechange = e.noop, ub && delete ra[p]), f)
                                    4 !== q.readyState && q.abort();
                                else {
                                    l = q.status;
                                    m = q.getAllResponseHeaders();
                                    y = {};
                                    (v = q.responseXML) && v.documentElement && (y.xml = v);
                                    try {
                                        y.text = q.responseText
                                    } catch (x) {}
                                    try {
                                        t = q.statusText
                                    } catch (z) {
                                        t = ""
                                    }
                                    !l && d.isLocal && !d.crossDomain ? l = y.text ? 200 : 404 : 1223 === l && (l = 204)
                                }
                        } catch (u) {
                            f || g(-1, u)
                        }
                        y && g(l, t, y, m)
                    };
                    d.async ? 4 === q.readyState ? setTimeout(j, 0) : (p = ++Ld, ub && (ra || (ra = {}, e(b).unload(ub)), ra[p] = j), q.onreadystatechange = j) : j()
                },
                abort: function() {
                    j && j(0, 1)
                }
            }
        }
    });
    var Aa,
        Wa,
        Md = /^(?:toggle|show|hide)$/,
        Nd = RegExp("^(?:([-+])=|)(" + Ea + ")([a-z%]*)$", "i"),
        Od = /queueHooks$/,
        Ba = [function(b, c, d) {
            var j,
                f,
                g,
                p,
                t,
                q,
                m = this,
                y = b.style,
                x = {},
                z = [],
                u = b.nodeType && M(b);
            d.queue || (t = e._queueHooks(b, "fx"), null == t.unqueued && (t.unqueued = 0, q = t.empty.fire, t.empty.fire = function() {
                t.unqueued || q()
            }), t.unqueued++, m.always(function() {
                m.always(function() {
                    t.unqueued--;
                    e.queue(b, "fx").length || t.empty.fire()
                })
            }));
            1 === b.nodeType && ("height" in c || "width" in c) && (d.overflow = [y.overflow, y.overflowX, y.overflowY], "inline" === e.css(b, "display") && "none" === e.css(b, "float") && (!e.support.inlineBlockNeedsLayout || "inline" === O(b.nodeName) ? y.display = "inline-block" : y.zoom = 1));
            d.overflow && (y.overflow = "hidden", e.support.shrinkWrapBlocks || m.done(function() {
                y.overflow = d.overflow[0];
                y.overflowX = d.overflow[1];
                y.overflowY = d.overflow[2]
            }));
            for (j in c)
                f = c[j],
                Md.exec(f) && (delete c[j], f !== (u ? "hide" : "show") && z.push(j));
            if (f = z.length) {
                g = e._data(b, "fxshow") || e._data(b, "fxshow", {});
                u ? e(b).show() : m.done(function() {
                    e(b).hide()
                });
                m.done(function() {
                    var c;
                    e.removeData(b, "fxshow", !0);
                    for (c in x)
                        e.style(b, c, x[c])
                });
                for (j = 0; j < f; j++)
                    c = z[j],
                    p = m.createTween(c, u ? g[c] : 0),
                    x[c] = g[c] || e.style(b, c),
                    c in g || (g[c] = p.start, u && (p.end = p.start, p.start = "width" === c || "height" === c ? 1 : 0))
            }
        }],
        ta = {
            "*": [function(b, c) {
                var d,
                    j,
                    f = this.createTween(b, c),
                    g = Nd.exec(c),
                    p = f.cur(),
                    t = +p || 0,
                    q = 1,
                    m = 20;
                if (g) {
                    d = +g[2];
                    j = g[3] || (e.cssNumber[b] ? "" : "px");
                    if ("px" !== j && t) {
                        t = e.css(f.elem, b, !0) || d || 1;
                        do q = q || ".5",
                        t /= q,
                        e.style(f.elem, b, t + j);
                        while (q !== (q = f.cur() / p) && 1 !== q && --m)
                    }
                    f.unit = j;
                    f.start = t;
                    f.end = g[1] ? t + (g[1] + 1) * d : d
                }
                return f
            }]
        };
    e.Animation = e.extend(Bb, {
        tweener: function(b, c) {
            e.isFunction(b) ? (c = b, b = ["*"]) : b = b.split(" ");
            for (var d, j = 0, f = b.length; j < f; j++)
                d = b[j],
                ta[d] = ta[d] || [],
                ta[d].unshift(c)
        },
        prefilter: function(b, c) {
            c ? Ba.unshift(b) : Ba.push(b)
        }
    });
    e.Tween = S;
    S.prototype = {
        constructor: S,
        init: function(b, c, d, j, f, g) {
            this.elem = b;
            this.prop = d;
            this.easing = f || "swing";
            this.options = c;
            this.start = this.now = this.cur();
            this.end = j;
            this.unit = g || (e.cssNumber[d] ? "" : "px")
        },
        cur: function() {
            var b = S.propHooks[this.prop];
            return b && b.get ? b.get(this) : S.propHooks._default.get(this)
        },
        run: function(b) {
            var c,
                d = S.propHooks[this.prop];
            return this.options.duration ? this.pos = c = e.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : this.pos = c = b, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : S.propHooks._default.set(this), this
        }
    };
    S.prototype.init.prototype = S.prototype;
    S.propHooks = {
        _default: {
            get: function(b) {
                var c;
                return null == b.elem[b.prop] || b.elem.style && null != b.elem.style[b.prop] ? (c = e.css(b.elem, b.prop, !1, ""), !c || "auto" === c ? 0 : c) : b.elem[b.prop]
            },
            set: function(b) {
                e.fx.step[b.prop] ? e.fx.step[b.prop](b) : b.elem.style && (null != b.elem.style[e.cssProps[b.prop]] || e.cssHooks[b.prop]) ? e.style(b.elem, b.prop, b.now + b.unit) : b.elem[b.prop] = b.now
            }
        }
    };
    S.propHooks.scrollTop = S.propHooks.scrollLeft = {
        set: function(b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    };
    e.each(["toggle", "show", "hide"], function(b, c) {
        var d = e.fn[c];
        e.fn[c] = function(j, f, g) {
            return null == j || "boolean" == typeof j || !b && e.isFunction(j) && e.isFunction(f) ? d.apply(this, arguments) : this.animate(Ca(c, !0), j, f, g)
        }
    });
    e.fn.extend({
        fadeTo: function(b, c, d, e) {
            return this.filter(M).css("opacity", 0).show().end().animate({
                opacity: c
            }, b, d, e)
        },
        animate: function(b, c, d, j) {
            var f = e.isEmptyObject(b),
                g = e.speed(c, d, j);
            c = function() {
                var c = Bb(this, e.extend({}, b), g);
                f && c.stop(!0)
            };
            return f || !1 === g.queue ? this.each(c) : this.queue(g.queue, c)
        },
        stop: function(b, d, j) {
            var f = function(b) {
                var c = b.stop;
                delete b.stop;
                c(j)
            };
            return "string" != typeof b && (j = d, d = b, b = c), d && !1 !== b && this.queue(b || "fx", []), this.each(function() {
                var c = !0,
                    d = null != b && b + "queueHooks",
                    g = e.timers,
                    p = e._data(this);
                if (d)
                    p[d] && p[d].stop && f(p[d]);
                else
                    for (d in p)
                        p[d] && p[d].stop && Od.test(d) && f(p[d]);
                for (d = g.length; d--;)
                    g[d].elem === this && (null == b || g[d].queue === b) && (g[d].anim.stop(j), c = !1, g.splice(d, 1));
                (c || !j) && e.dequeue(this, b)
            })
        }
    });
    e.each({
        slideDown: Ca("show"),
        slideUp: Ca("hide"),
        slideToggle: Ca("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(b, c) {
        e.fn[b] = function(b, d, e) {
            return this.animate(c, b, d, e)
        }
    });
    e.speed = function(b, c, d) {
        var j = b && "object" == typeof b ? e.extend({}, b) : {
            complete: d || !d && c || e.isFunction(b) && b,
            duration: b,
            easing: d && c || c && !e.isFunction(c) && c
        };
        j.duration = e.fx.off ? 0 : "number" == typeof j.duration ? j.duration : j.duration in e.fx.speeds ? e.fx.speeds[j.duration] : e.fx.speeds._default;
        if (null == j.queue || !0 === j.queue)
            j.queue = "fx";
        return j.old = j.complete, j.complete = function() {
            e.isFunction(j.old) && j.old.call(this);
            j.queue && e.dequeue(this, j.queue)
        }, j
    };
    e.easing = {
        linear: function(b) {
            return b
        },
        swing: function(b) {
            return 0.5 - Math.cos(b * Math.PI) / 2
        }
    };
    e.timers = [];
    e.fx = S.prototype.init;
    e.fx.tick = function() {
        for (var b, c = e.timers, d = 0; d < c.length; d++)
            b = c[d],
            !b() && c[d] === b && c.splice(d--, 1);
        c.length || e.fx.stop()
    };
    e.fx.timer = function(b) {
        b() && e.timers.push(b) && !Wa && (Wa = setInterval(e.fx.tick, e.fx.interval))
    };
    e.fx.interval = 13;
    e.fx.stop = function() {
        clearInterval(Wa);
        Wa = null
    };
    e.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    e.fx.step = {};
    e.expr && e.expr.filters && (e.expr.filters.animated = function(b) {
        return e.grep(e.timers, function(c) {
            return b === c.elem
        }).length
    });
    var rc = /^(?:body|html)$/i;
    e.fn.offset = function(b) {
        if (arguments.length)
            return b === c ? this : this.each(function(c) {
                e.offset.setOffset(this, b, c)
            });
        var d,
            j,
            f,
            g,
            p,
            t,
            q,
            m = {
                top: 0,
                left: 0
            },
            y = this[0],
            x = y && y.ownerDocument;
        if (x)
            return (j = x.body) === y ? e.offset.bodyOffset(y) : (d = x.documentElement, e.contains(d, y) ? ("undefined" != typeof y.getBoundingClientRect && (m = y.getBoundingClientRect()), f = Cb(x), g = d.clientTop || j.clientTop || 0, p = d.clientLeft || j.clientLeft || 0, t = f.pageYOffset || d.scrollTop, q = f.pageXOffset || d.scrollLeft, {
                top: m.top + t - g,
                left: m.left + q - p
            }) : m)
    };
    e.offset = {
        bodyOffset: function(b) {
            var c = b.offsetTop,
                d = b.offsetLeft;
            return e.support.doesNotIncludeMarginInBodyOffset && (c += parseFloat(e.css(b, "marginTop")) || 0, d += parseFloat(e.css(b, "marginLeft")) || 0), {
                top: c,
                left: d
            }
        },
        setOffset: function(b, c, d) {
            var j = e.css(b, "position");
            "static" === j && (b.style.position = "relative");
            var f = e(b),
                g = f.offset(),
                p = e.css(b, "top"),
                t = e.css(b, "left"),
                q = {},
                m = {},
                y,
                x;
            ("absolute" === j || "fixed" === j) && -1 < e.inArray("auto", [p, t]) ? (m = f.position(), y = m.top, x = m.left) : (y = parseFloat(p) || 0, x = parseFloat(t) || 0);
            e.isFunction(c) && (c = c.call(b, d, g));
            null != c.top && (q.top = c.top - g.top + y);
            null != c.left && (q.left = c.left - g.left + x);
            "using" in c ? c.using.call(b, q) : f.css(q)
        }
    };
    e.fn.extend({
        position: function() {
            if (this[0]) {
                var b = this[0],
                    c = this.offsetParent(),
                    d = this.offset(),
                    j = rc.test(c[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : c.offset();
                return d.top -= parseFloat(e.css(b, "marginTop")) || 0, d.left -= parseFloat(e.css(b, "marginLeft")) || 0, j.top += parseFloat(e.css(c[0], "borderTopWidth")) || 0, j.left += parseFloat(e.css(c[0], "borderLeftWidth")) || 0, {
                    top: d.top - j.top,
                    left: d.left - j.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var b = this.offsetParent || C.body; b && !rc.test(b.nodeName) && "static" === e.css(b, "position");)
                    b = b.offsetParent;
                return b || C.body
            })
        }
    });
    e.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, d) {
        var j = /Y/.test(d);
        e.fn[b] = function(f) {
            return e.access(this, function(b, f, g) {
                var p = Cb(b);
                if (g === c)
                    return p ? d in p ? p[d] : p.document.documentElement[f] : b[f];
                p ? p.scrollTo(j ? e(p).scrollLeft() : g, j ? g : e(p).scrollTop()) : b[f] = g
            }, b, f, arguments.length, null)
        }
    });
    e.each({
        Height: "height",
        Width: "width"
    }, function(b, d) {
        e.each({
            padding: "inner" +
            b,
            content: d,
            "": "outer" + b
        }, function(j, f) {
            e.fn[f] = function(f, g) {
                var p = arguments.length && (j || "boolean" != typeof f),
                    t = j || (!0 === f || !0 === g ? "margin" : "border");
                return e.access(this, function(d, j, f) {
                    var g;
                    return e.isWindow(d) ? d.document.documentElement["client" + b] : 9 === d.nodeType ? (g = d.documentElement, Math.max(d.body["scroll" + b], g["scroll" + b], d.body["offset" + b], g["offset" + b], g["client" + b])) : f === c ? e.css(d, j, f, t) : e.style(d, j, f, t)
                }, d, p ? f : c, p, null)
            }
        })
    });
    b.jQuery = b.$ = e;
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return e
    })
})(window);
var portraitMode = !0,
    mobilePortraitWidth = 480,
    mobilePortraitHeight = 640,
    mobileLandscapeWidth = 640,
    mobileLandscapeHeight = 480,
    mobileWidth = mobilePortraitWidth,
    mobileHeight = mobilePortraitHeight,
    desktopWidth = 480,
    desktopHeight = 640,
    w,
    h,
    multiplier,
    destW,
    destH,
    dynamicClickableEntityDivs = {},
    coreDivsToResize = ["game", "play", "orientate"],
    advancedDivsToResize = {
        MobileAdInGamePreroll: {
            "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
        },
        MobileAdInGameEnd: {
            "box-width": _SETTINGS.Ad.Mobile.End.Width +
            2,
            "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
        },
        MobileAdInGamePreroll2: {
            "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
        },
        MobileAdInGameEnd2: {
            "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
        },
        MobileAdInGamePreroll3: {
            "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
        },
        MobileAdInGameEnd3: {
            "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.End.Height +
            20
        }
    };
function adjustLayers(b) {
    for (i = 0; i < coreDivsToResize.length; i++)
        true ? ($("#" + coreDivsToResize[i]).width(w), $("#" + coreDivsToResize[i]).height(h)) : ($("#" + coreDivsToResize[i]).width(destW), $("#" + coreDivsToResize[i]).height(destH), $("#" + coreDivsToResize[i]).css("left", b ? 0 : w / 2 - destW / 2));
    for (key in advancedDivsToResize)
        try {
            $("#" + key).width(w),
            $("#" + key).height(h),
            $("#" + key + "-Box").css("left", (w - advancedDivsToResize[key]["box-width"]) / 2),
            $("#" + key + "-Box").css("top", (h - advancedDivsToResize[key]["box-height"]) / 2)
        } catch (c) {
            console.log(c)
        }
    $("#ajaxbar").width(w);
    $("#ajaxbar").height(h)
}
function sizeHandler() {
    $("#game") && (w = window.innerWidth, h = window.innerHeight, true ? (multiplier = Math.min(h / mobileHeight, w / mobileWidth), destW = mobileWidth * multiplier, destH = mobileHeight * multiplier) : (multiplier = Math.min(h / desktopHeight, w / desktopWidth), destW = desktopWidth * multiplier, destH = desktopHeight * multiplier), widthRatio = window.innerWidth / mobileWidth, heightRatio = window.innerHeight / mobileHeight, adjustLayers(), window.scrollTo(0, 1))
}
function orientationHandler() {
    true && (window.innerHeight < window.innerWidth ? ($("#orientate").show(), $("#game").hide()) : ($("#orientate").hide(), $("#game").show()));
    sizeHandler()
}
function fixSamsungHandler() {
    ig.ua.android && !(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && (!(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function(b) {
        b.preventDefault();
        return !1
    }, !1), document.addEventListener("touchmove", function(b) {
        b.preventDefault();
        return !1
    }, !1), document.addEventListener("touchend", function(b) {
        b.preventDefault();
        return !1
    }, !1))
}
window.addEventListener("resize", function() {
    orientationHandler()
}, !1);
window.addEventListener("orientationchange", function() {
    orientationHandler()
}, !1);
window.addEventListener("pageshow", function() {
    //ig.ua.mobile && ig.game.resumeGame();
    ig.game && ig.game.unmute()
}, !1);
window.addEventListener("pagehide", function() {
    ig.game && ig.game.mute()
}, !1);
"true" === getQueryVariable("webview") ? ($(window).focus(function() {
    true && ig.game.resumeGame();
    ig.game && ig.game.unmute()
}), $(window).blur(function() {
    ig.game && ig.game.mute()
})) : (window.onfocus = function() {
    ig.ua.mobile && ig.game.resumeGame();
    ig.game && (ig.game.muteMusic || ig.game.unmute())
}, window.onblur = function() {
    ig.game && ig.game.mute()
});
document.ontouchmove = function() {
    window.scrollTo(0, 1)
};
function getInternetExplorerVersion() {
    var b = -1;
    "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (b = parseFloat(RegExp.$1));
    return b
}
var ie = getInternetExplorerVersion();
function getQueryVariable(b) {
    for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
        var f = c[d].split("=");
        if (decodeURIComponent(f[0]) == b)
            return decodeURIComponent(f[1])
    }
}
var nohtml5_message = {
    en: 'This game is best experienced with HTML5 capable browsers. We recommend downloading <a href="http://www.google.com/chrome" target="_blank">Google Chrome</a>, or <a href="http://www.mozilla.org" target="_blank">Mozilla Firefox</a>',
    hk: '\u6b64\u7a0b\u5f0f\u53ea\u80fd\u652f\u63f4 HTML5 \u7684\u700f\u89bd\u5668\u4e0a\u904b\u884c\uff0c\u5982\u672a\u80fd\u958b\u59cb\u904a\u6232\uff0c\u8acb\u6309\u6b64\u4e0b\u8f09 <a href="http://www.google.com/chrome" target="_blank">Google Chrome</a>, or <a href="http://www.mozilla.org" target="_blank">Mozilla Firefox</a>',
    tw: '\u6b64\u7a0b\u5f0f\u53ea\u80fd\u652f\u63f4 HTML5 \u7684\u700f\u89bd\u5668\u4e0a\u904b\u884c\uff0c\u5982\u672a\u80fd\u958b\u59cb\u904a\u6232\uff0c\u8acb\u6309\u6b64\u4e0b\u8f09 <a href="http://www.google.com/chrome" target="_blank">Google Chrome</a>, or <a href="http://www.mozilla.org" target="_blank">Mozilla Firefox</a>'
};
this.jukebox = {};
jukebox.Player = function(b, c) {
    this.id = ++jukebox.__jukeboxId;
    this.origin = c || null;
    this.settings = {};
    for (var d in this.defaults)
        this.settings[d] = this.defaults[d];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var f in b)
            this.settings[f] = b[f];
    "[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
    this.resource = this.isPlaying = null;
    this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) : this.settings.resources[0] || null;
    if (null === this.resource)
        throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
    this.__init();
    return this
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
    defaults: {
        resources: [],
        autoplay: !1,
        spritemap: {},
        flashMediaElement: "./swf/FlashMediaElement.swf",
        timeout: 1E3
    },
    __addToManager: function() {
        !0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0)
    },
    __init: function() {
        var b = this,
            c = this.settings,
            d = {},
            f;
        jukebox.Manager && void 0 !== jukebox.Manager.features && (d = jukebox.Manager.features);
        if (!0 === d.html5audio) {
            this.context = new Audio;
            this.context.src = this.resource;
            if (null === this.origin) {
                var g = function(c) {
                    b.__addToManager(c)
                };
                this.context.addEventListener("canplaythrough", g, !0);
                window.setTimeout(function() {
                    b.context.removeEventListener("canplaythrough", g, !0);
                    g("timeout")
                }, c.timeout)
            }
            this.context.autobuffer = !0;
            this.context.preload = !0;
            for (f in this.HTML5API)
                this[f] = this.HTML5API[f];
            1 < d.channels ? !0 === c.autoplay ? this.context.autoplay = !0 : void 0 !== c.spritemap[c.autoplay] && this.play(c.autoplay) : 1 === d.channels && void 0 !== c.spritemap[c.autoplay] && (this.backgroundMusic = c.spritemap[c.autoplay], this.backgroundMusic.started = Date.now ? Date.now() : +new Date, this.play(c.autoplay));
            1 == d.channels && !0 !== c.canPlayBackground && (window.addEventListener("pagehide", function() {
                null !== b.isPlaying && (b.pause(), b.__wasAutoPaused = !0)
            }), window.addEventListener("pageshow", function() {
                b.__wasAutoPaused && (b.resume(), delete b._wasAutoPaused)
            }))
        } else if (!0 === d.flashaudio) {
            for (f in this.FLASHAPI)
                this[f] = this.FLASHAPI[f];
            d = ["id=jukebox-flashstream-" + this.id, "autoplay=" + c.autoplay, "file=" + window.encodeURIComponent(this.resource)];
            this.__initFlashContext(d);
            !0 === c.autoplay ? this.play(0) : c.spritemap[c.autoplay] && this.play(c.autoplay)
        } else
            throw "Your Browser does not support Flash Audio or HTML5 Audio.";
    },
    __initFlashContext: function(b) {
        var c,
            d = this.settings.flashMediaElement,
            f,
            g = {
                flashvars: b.join("&"),
                quality: "high",
                bgcolor: "#000000",
                wmode: "transparent",
                allowscriptaccess: "always",
                allowfullscreen: "true"
            };
        if (navigator.userAgent.match(/MSIE/)) {
            c = document.createElement("div");
            document.getElementsByTagName("body")[0].appendChild(c);
            var m = document.createElement("object");
            m.id = "jukebox-flashstream-" + this.id;
            m.setAttribute("type", "application/x-shockwave-flash");
            m.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
            m.setAttribute("width", "0");
            m.setAttribute("height", "0");
            g.movie = d + "?x=" + (Date.now ? Date.now() : +new Date);
            g.flashvars = b.join("&amp;");
            for (f in g)
                b = document.createElement("param"),
                b.setAttribute("name", f),
                b.setAttribute("value", g[f]),
                m.appendChild(b);
            c.outerHTML = m.outerHTML;
            this.context = document.getElementById("jukebox-flashstream-" + this.id)
        } else {
            c = document.createElement("embed");
            c.id = "jukebox-flashstream-" + this.id;
            c.setAttribute("type", "application/x-shockwave-flash");
            c.setAttribute("width", "100");
            c.setAttribute("height", "100");
            g.play = !1;
            g.loop = !1;
            g.src = d + "?x=" + (Date.now ? Date.now() : +new Date);
            for (f in g)
                c.setAttribute(f, g[f]);
            document.getElementsByTagName("body")[0].appendChild(c);
            this.context = c
        }
    },
    backgroundHackForiOS: function() {
        if (void 0 !== this.backgroundMusic) {
            var b = Date.now ? Date.now() : +new Date;
            void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started = b, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (b - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
        }
    },
    play: function(b, c) {
        if (null !== this.isPlaying && !0 !== c)
            void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(b, this.id);
        else {
            var d = this.settings.spritemap,
                f;
            if (void 0 !== d[b])
                f = d[b].start;
            else if ("number" === typeof b) {
                f = b;
                for (var g in d)
                    if (f >= d[g].start && f <= d[g].end) {
                        b = g;
                        break
                    }
            }
            void 0 !== f && "[object Object]" === Object.prototype.toString.call(d[b]) && (this.isPlaying = this.settings.spritemap[b], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(f))
        }
    },
    stop: function() {
        this.__lastPosition = 0;
        this.isPlaying = null;
        this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
        return !0
    },
    pause: function() {
        this.isPlaying = null;
        this.__lastPosition = this.getCurrentTime();
        this.context.pause();
        return this.__lastPosition
    },
    resume: function(b) {
        b = "number" === typeof b ? b : this.__lastPosition;
        if (null !== b)
            return this.play(b), this.__lastPosition = null, !0;
        this.context.play();
        return !1
    },
    HTML5API: {
        getVolume: function() {
            return this.context.volume || 1
        },
        setVolume: function(b) {
            this.context.volume = b;
            return 1E-4 > Math.abs(this.context.volume - b) ? !0 : !1
        },
        getCurrentTime: function() {
            return this.context.currentTime || 0
        },
        setCurrentTime: function(b) {
            try {
                return this.context.currentTime = b, !0
            } catch (c) {
                return !1
            }
        }
    },
    FLASHAPI: {
        getVolume: function() {
            return this.context && "function" === typeof this.context.getVolume ? this.context.getVolume() : 1
        },
        setVolume: function(b) {
            return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(b), !0) : !1
        },
        getCurrentTime: function() {
            return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
        },
        setCurrentTime: function(b) {
            return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(b) : !1
        }
    }
};
if (void 0 === this.jukebox)
    throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function(b) {
    this.features = {};
    this.codecs = {};
    this.__players = {};
    this.__playersLength = 0;
    this.__clones = {};
    this.__queue = [];
    this.settings = {};
    for (var c in this.defaults)
        this.settings[c] = this.defaults[c];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var d in b)
            this.settings[d] = b[d];
    this.__detectFeatures();
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function() {
        jukebox.Manager.loop()
    }, 20) : !0
};
jukebox.Manager.prototype = {
    defaults: {
        useFlash: !1,
        useGameLoop: !1
    },
    __detectFeatures: function() {
        var b = window.Audio && new Audio;
        if (b && b.canPlayType && !1 === this.settings.useFlash) {
            for (var c = [{
                    e: "3gp",
                    m: ["audio/3gpp", "audio/amr"]
                }, {
                    e: "aac",
                    m: ["audio/aac", "audio/aacp"]
                }, {
                    e: "amr",
                    m: ["audio/amr", "audio/3gpp"]
                }, {
                    e: "caf",
                    m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
                }, {
                    e: "m4a",
                    m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
                }, {
                    e: "mp3",
                    m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
                }, {
                    e: "mpga",
                    m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
                }, {
                    e: "mp4",
                    m: ["audio/mp4", "video/mp4"]
                }, {
                    e: "ogg",
                    m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
                }, {
                    e: "wav",
                    m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
                }, {
                    e: "webm",
                    m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
                }], d, f, g = 0, m = c.length; g < m; g++)
                if (f = c[g].e, c[g].m.length && "object" === typeof c[g].m)
                    for (var u = 0, A = c[g].m.length; u < A; u++)
                        if (d = c[g].m[u], "" !== b.canPlayType(d)) {
                            this.codecs[f] = d;
                            break
                        } else
                            this.codecs[f] || (this.codecs[f] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            b.volume = 0.1337;
            this.features.volume = !!(1E-4 > Math.abs(b.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject)
            try {
                new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"),
                this.features.flashaudio = !0
            } catch (q) {}
        !0 === this.settings.useFlash && (this.features.flashaudio = !0);
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr", this.features.volume = !0, this.features.channels = 1)
    },
    __getPlayerById: function(b) {
        return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null
    },
    __getClone: function(b, c) {
        for (var d in this.__clones) {
            var f = this.__clones[d];
            if (null === f.isPlaying && f.origin === b)
                return f
        }
        if ("[object Object]" === Object.prototype.toString.call(c)) {
            d = {};
            for (var g in c)
                d[g] = c[g];
            d.autoplay = !1;
            g = new jukebox.Player(d, b);
            g.isClone = !0;
            g.wasReady = !1;
            return this.__clones[g.id] = g
        }
        return null
    },
    loop: function() {
        if (0 !== this.__playersLength)
            if (this.__queue.length && this.__playersLength < this.features.channels) {
                var b = this.__queue[0],
                    c = this.__getPlayerById(b.origin);
                if (null !== c) {
                    var d = this.__getClone(b.origin, c.settings);
                    null !== d && (!0 === this.features.volume && (c = this.__players[b.origin]) && d.setVolume(c.getVolume()), this.add(d), d.play(b.pointer, !0))
                }
                this.__queue.splice(0, 1)
            } else
                for (d in this.__queue.length && 1 === this.features.channels && (b = this.__queue[0], c = this.__getPlayerById(b.origin), null !== c && c.play(b.pointer, !0), this.__queue.splice(0, 1)), this.__players)
                    b = this.__players[d],
                    c = b.getCurrentTime() || 0,
                    b.isPlaying && !1 === b.wasReady ? b.wasReady = b.setCurrentTime(b.isPlaying.start) : b.isPlaying && !0 === b.wasReady ? c > b.isPlaying.end && (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop()) : b.isClone && null === b.isPlaying ? this.remove(b) : void 0 !== b.backgroundMusic && null === b.isPlaying && c > b.backgroundMusic.end && b.backgroundHackForiOS()
    },
    getPlayableResource: function(b) {
        "[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
        for (var c = 0, d = b.length; c < d; c++) {
            var f = b[c],
                g = f.match(/\.([^\.]*)$/)[1];
            if (g && this.codecs[g])
                return f
        }
        return null
    },
    add: function(b) {
        return b instanceof jukebox.Player && void 0 === this.__players[b.id] ? (this.__playersLength++, this.__players[b.id] = b, !0) : !1
    },
    remove: function(b) {
        return b instanceof jukebox.Player && void 0 !== this.__players[b.id] ? (this.__playersLength--, delete this.__players[b.id], !0) : !1
    },
    addToQueue: function(b, c) {
        return ("string" === typeof b || "number" === typeof b) && void 0 !== this.__players[c] ? (this.__queue.push({
            pointer: b,
            origin: c
        }), !0) : !1
    }
};
var MarketJS = {};
(function() {
    function b(b, g, m, u) {
        try {
            var A = window.XDomainRequest ? new XDomainRequest : new XMLHttpRequest,
                q;
            switch (b) {
//            case "single-metric-write":
//                q = c + "/metric/write/" + d + "/" + g + "/" + m;
//                break;
//            case "single-metric-read":
//                q = c + "/metric/read/single/" + d + "/" + g;
//                break;
//            case "multi-metric-write":
//                q = c + "/metric/write";
//                break;
//            case "multi-metric-read":
//                q = c + "/metric/read/multi/" + d + "?" + g;
//                break;
//            case "leaderboard-read":
//                q = c + "/leaderboard/read/" + d + "?" + g;
//                break;
//            case "leaderboard-write":
//                break;
            default:
                console.log("no mode found")
            }
            A.onerror = function() {
                console.log(A.responseText)
            };
            A.onload = function() {
                var b = JSON.parse(A.responseText);
                u && (console.log("passing to callback ..."), u(b))
            };
            window.XDomainRequest ? A.open("GET", q) : A.open("GET", q, !0);
            A.send()
        } catch (x) {
            console.log(x)
        }
    }
    var c = (9 < ie ? "http://" : "https://") + "marketjs-gamecenter.appspot.com",
        d = "";
    MarketJS.Initialize = function(b) {
        d = b;
        MarketJS.SingleMetric.Write("InitializeGame", "1")
    };
    MarketJS.SingleMetric = {
        Write: function(c, d) {
            b("single-metric-write", c, d)
        },
        Read: function(c) {
            b("single-metric-read", c)
        }
    };
    MarketJS.MultiMetric = {
        Write: function(b) {
            var g = {};
            g.data = JSON.stringify(b);
            g.game_key = d;
            try {
                $.post(c + "/metric/write", g, function(b) {
                    console.log("Response: " + b)
                })
            } catch (m) {
                console.log(m)
            }
        },
        Read: function(c, d, m) {
            var u = "";
            for (i = 0; i < c.length; i++)
                u += "metric_name=",
                u += c[i],
                i != c.length - 1 && (u += "&");
            u += m ? "&rank_ascending=yes" : "&rank_ascending=no";
            console.log(u);
            b("multi-metric-read", u, 0, d)
        }
    };
    MarketJS.Player = {};
    MarketJS.Player.Read = {
        Leaderboard: function(b, g, m) {
            b = c + "/read/player/game/leaderboard/" + b + "/" + g +
            "/" + d;
            g = {};
            try {
                $.get(b, g, m, "json")
            } catch (u) {
                console.log(u)
            }
        }
    };
    MarketJS.Login = {
        Basic: function(b, g) {
            var m = {};
            m.game_key = d;
            m.login_method = "basic";
            for (var u in b)
                m[u] = b[u];
            console.log("login payload:", m);
            try {
                $.post(c + "/login", m, g)
            } catch (A) {
                console.log(A)
            }
        }
    };
    MarketJS.Leaderboard = {
        Write: function(b, g, m, u) {
            var A = {};
            A.game_key = d;
            A.player_key = b;
            A.metric_name = g;
            A.metric_value = m;
            A.cumulative = u ? "true" : "false";
            try {
                $.post(c + "/write/leaderboard", A, function(b) {
                    console.log("Response: " + b)
                })
            } catch (q) {
                console.log(q)
            }
        },
        Read: function(c, d, m, u) {
            c = "metric_name=" + c + (d ? "&rank_ascending=yes" : "&rank_ascending=no");
            c += "&metric_count=";
            c += m;
            b("leaderboard-read", c, 0, u)
        }
    };
    MarketJS.Platform = {
        Read: function() {
            var b = /iPhone/i.test(navigator.userAgent),
                c = /iPad/i.test(navigator.userAgent),
                d = /android/i.test(navigator.userAgent),
                u = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            return "Web"
        }
    }
})();
function localJsonpCallback(b) {
    b.Error ? console.log(b.Message) : console.log(b)
}
this.JSON || (this.JSON = {});
(function() {
    function b(b) {
        return 10 > b ? "0" + b : b
    }
    function c(b) {
        g.lastIndex = 0;
        return g.test(b) ? '"' + b.replace(g, function(b) {
            var c = A[b];
            return "string" === typeof c ? c : "\\u" + ("0000" + b.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + b + '"'
    }
    function d(b, f) {
        var j,
            g,
            t,
            y,
            A = m,
            E,
            D = f[b];
        D && "object" === typeof D && "function" === typeof D.toJSON && (D = D.toJSON(b));
        "function" === typeof q && (D = q.call(f, b, D));
        switch (typeof D) {
        case "string":
            return c(D);
        case "number":
            return isFinite(D) ? String(D) : "null";
        case "boolean":
        case "null":
            return String(D);
        case "object":
            if (!D)
                return "null";
            m += u;
            E = [];
            if ("[object Array]" === Object.prototype.toString.apply(D)) {
                y = D.length;
                for (j = 0; j < y; j += 1)
                    E[j] = d(j, D) || "null";
                t = 0 === E.length ? "[]" : m ? "[\n" + m + E.join(",\n" + m) + "\n" + A + "]" : "[" + E.join(",") + "]";
                m = A;
                return t
            }
            if (q && "object" === typeof q) {
                y = q.length;
                for (j = 0; j < y; j += 1)
                    g = q[j],
                    "string" === typeof g && (t = d(g, D)) && E.push(c(g) + (m ? ": " : ":") + t)
            } else
                for (g in D)
                    Object.hasOwnProperty.call(D, g) && (t = d(g, D)) && E.push(c(g) + (m ? ": " : ":") + t);
            t = 0 === E.length ? "{}" : m ? "{\n" + m + E.join(",\n" + m) + "\n" +
            A + "}" : "{" + E.join(",") + "}";
            m = A;
            return t
        }
    }
    "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + b(this.getUTCMonth() + 1) + "-" + b(this.getUTCDate()) + "T" + b(this.getUTCHours()) + ":" + b(this.getUTCMinutes()) + ":" + b(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
        return this.valueOf()
    });
    var f = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        g = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        m,
        u,
        A = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        q;
    "function" !== typeof JSON.stringify && (JSON.stringify = function(b, c, j) {
        var f;
        u = m = "";
        if ("number" === typeof j)
            for (f = 0; f < j; f += 1)
                u += " ";
        else
            "string" === typeof j && (u = j);
        if ((q = c) && "function" !== typeof c && ("object" !== typeof c || "number" !== typeof c.length))
            throw Error("JSON.stringify");
        return d("", {
            "": b
        })
    });
    "function" !== typeof JSON.parse && (JSON.parse = function(b, c) {
        function d(b, f) {
            var g,
                p,
                q = b[f];
            if (q && "object" === typeof q)
                for (g in q)
                    Object.hasOwnProperty.call(q, g) && (p = d(q, g), void 0 !== p ? q[g] = p : delete q[g]);
            return c.call(b, f, q)
        }
        var g;
        b = String(b);
        f.lastIndex = 0;
        f.test(b) && (b = b.replace(f, function(b) {
            return "\\u" + ("0000" + b.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
            return g = eval("(" + b + ")"), "function" === typeof c ? d({
                "": g
            }, "") : g;
        throw new SyntaxError("JSON.parse");
    })
})();
(function() {
    var b = {},
        c = null,
        d = !0,
        f = !1;
    if ("undefined" !== typeof AudioContext)
        c = new AudioContext;
    else if ("undefined" !== typeof webkitAudioContext)
        c = new webkitAudioContext;
    else if ("undefined" !== typeof Audio) {
        d = !1;
        try {
            new Audio
        } catch (g) {
            f = !0
        }
    } else
        d = !1,
        f = !0;
    if (d) {
        var m = "undefined" === typeof c.createGain ? c.createGainNode() : c.createGain();
        m.gain.value = 1;
        m.connect(c.destination)
    }
    var u = function() {
        this._volume = 1;
        this._muted = !1;
        this.usingWebAudio = d;
        this.noAudio = f;
        this._howls = []
    };
    u.prototype = {
        volume: function(b) {
            b = parseFloat(b);
            if (0 <= b && 1 >= b) {
                this._volume = b;
                d && (m.gain.value = b);
                for (var c in this._howls)
                    if (this._howls.hasOwnProperty(c) && !1 === this._howls[c]._webAudio)
                        for (b = 0; b < this._howls[c]._audioNode.length; b++)
                            this._howls[c]._audioNode[b].volume = this._howls[c]._volume * this._volume;
                return this
            }
            return d ? m.gain.value : this._volume
        },
        mute: function() {
            this._setMuted(!0);
            return this
        },
        unmute: function() {
            this._setMuted(!1);
            return this
        },
        _setMuted: function(b) {
            this._muted = b;
            d && (m.gain.value = b ? 0 : this._volume);
            for (var c in this._howls)
                if (this._howls.hasOwnProperty(c) && !1 === this._howls[c]._webAudio)
                    for (var f = 0; f < this._howls[c]._audioNode.length; f++)
                        this._howls[c]._audioNode[f].muted = b
        }
    };
    var A = new u,
        u = null;
    if (!f)
        var u = new Audio,
            q = {
                mp3: !!u.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                opus: !!u.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                ogg: !!u.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                wav: !!u.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                m4a: !!(u.canPlayType("audio/x-m4a;") || u.canPlayType("audio/aac;")).replace(/^no$/, ""),
                mp4: !!(u.canPlayType("audio/x-mp4;") || u.canPlayType("audio/aac;")).replace(/^no$/, ""),
                weba: !!u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
            };
    var x = function(b) {
        this._autoplay = b.autoplay || !1;
        this._buffer = b.buffer || !1;
        this._duration = b.duration || 0;
        this._format = b.format || null;
        this._loop = b.loop || !1;
        this._loaded = !1;
        this._sprite = b.sprite || {};
        this._src = b.src || "";
        this._pos3d = b.pos3d || [0, 0, -0.5];
        this._volume = void 0 !== b.volume ? b.volume : 1;
        this._urls = b.urls || [];
        this._rate = b.rate || 1;
        this._onload = [b.onload || function() {}];
        this._onloaderror = [b.onloaderror || function() {}];
        this._onend = [b.onend || function() {}];
        this._onpause = [b.onpause || function() {}];
        this._onplay = [b.onplay || function() {}];
        this._onendTimer = [];
        this._webAudio = d && !this._buffer;
        this._audioNode = [];
        this._webAudio && this._setupAudioNode();
        A._howls.push(this);
        this.load()
    };
    x.prototype = {
        load: function() {
            var d = this,
                g = null;
            if (!f) {
                for (var t = 0; t < d._urls.length; t++) {
                    var m,
                        x;
                    if (d._format)
                        m = d._format;
                    else if (x = d._urls[t].toLowerCase().split("?")[0], m = (m = x.match(/.+\.([^?]+)(\?|$)/)) && 2 <= m.length ? m : x.match(/data\:audio\/([^?]+);/))
                        m = m[1];
                    else {
                        d.on("loaderror");
                        return
                    }
                    if (q[m]) {
                        g = d._urls[t];
                        break
                    }
                }
                if (g) {
                    d._src = g;
                    if (d._webAudio) {
                        var u = g;
                        if (u in b)
                            d._duration = b[u].duration,
                            z(d);
                        else {
                            var D = new XMLHttpRequest;
                            D.open("GET", u, !0);
                            D.responseType = "arraybuffer";
                            D.onload = function() {
                                c.decodeAudioData(D.response, function(c) {
                                    c && (b[u] = c, z(d, c))
                                }, function() {
                                    d.on("loaderror")
                                })
                            };
                            D.onerror = function() {
                                d._webAudio && (d._buffer = !0, d._webAudio = !1, d._audioNode = [], delete d._gainNode, d.load())
                            };
                            try {
                                D.send()
                            } catch (Xa) {
                                D.onerror()
                            }
                        }
                    } else {
                        var G = new Audio;
                        d._audioNode.push(G);
                        G.src = g;
                        G._pos = 0;
                        G.preload = "auto";
                        G.volume = A._muted ? 0 : d._volume * A.volume();
                        b[g] = d;
                        var O = function() {
                            d._duration = Math.ceil(10 * G.duration) / 10;
                            0 === Object.getOwnPropertyNames(d._sprite).length && (d._sprite = {
                                _default: [0, 1E3 * d._duration]
                            });
                            d._loaded || (d._loaded = !0, d.on("load"));
                            d._autoplay && d.play();
                            G.removeEventListener("canplaythrough", O, !1)
                        };
                        G.addEventListener("canplaythrough", O, !1);
                        G.load()
                    }
                    return d
                }
            }
            d.on("loaderror")
        },
        urls: function(b) {
            return b ? (this.stop(), this._urls = "string" === typeof b ? [b] : b, this._loaded = !1, this.load(), this) : this._urls
        },
        play: function(d, f) {
            var g = this;
            "function" === typeof d && (f = d);
            if (!d || "function" === typeof d)
                d = "_default";
            if (!g._loaded)
                return g.on("load", function() {
                    g.play(d, f)
                }), g;
            if (!g._sprite[d])
                return "function" === typeof f && f(), g;
            g._inactiveNode(function(q) {
                q._sprite = d;
                var m = 0 < q._pos ? q._pos : g._sprite[d][0] / 1E3,
                    x = g._sprite[d][1] / 1E3 - q._pos,
                    z = !(!g._loop && !g._sprite[d][2]),
                    u = "string" === typeof f ? f : Math.round(Date.now() * Math.random()) + "",
                    G,
                    O = {
                        id: u,
                        sprite: d,
                        loop: z
                    };
                G = setTimeout(function() {
                    !g._webAudio && z && g.stop(O.id, O.timer).play(d, O.id);
                    g._webAudio && !z && (g._nodeById(O.id).paused = !0, g._nodeById(O.id)._pos = 0);
                    !g._webAudio && !z && g.stop(O.id, O.timer);
                    g.on("end", u)
                }, 1E3 * x);
                g._onendTimer.push(G);
                O.timer = g._onendTimer[g._onendTimer.length - 1];
                if (g._webAudio) {
                    G = g._sprite[d][0] / 1E3;
                    var L = g._sprite[d][1] / 1E3;
                    q.id = u;
                    q.paused = !1;
                    G = [z, G, L];
                    L = g._nodeById(u);
                    L.bufferSource = c.createBufferSource();
                    L.bufferSource.buffer = b[g._src];
                    L.bufferSource.connect(L.panner);
                    L.bufferSource.loop = G[0];
                    G[0] && (L.bufferSource.loopStart = G[1], L.bufferSource.loopEnd = G[1] + G[2]);
                    L.bufferSource.playbackRate.value = g._rate;
                    g._playStart = c.currentTime;
                    q.gain.value = g._volume;
                    "undefined" === typeof q.bufferSource.start ? q.bufferSource.noteGrainOn(0, m, x) : q.bufferSource.start(0, m, x)
                } else if (4 === q.readyState)
                    q.id = u,
                    q.currentTime = m,
                    q.muted = A._muted,
                    q.volume = g._volume * A.volume(),
                    setTimeout(function() {
                        q.play()
                    }, 0);
                else {
                    g._clearEndTimer(G);
                    var za = d,
                        na = f,
                        sa = function() {
                            g.play(za, na);
                            q.removeEventListener("canplaythrough", sa, !1)
                        };
                    q.addEventListener("canplaythrough", sa, !1);
                    return g
                }
                g.on("play");
                "function" === typeof f && f(u);
                return g
            });
            return g
        },
        pause: function(b, c) {
            var d = this;
            if (!d._loaded)
                return d.on("play", function() {
                    d.pause(b)
                }), d;
            d._clearEndTimer(c || 0);
            var f = b ? d._nodeById(b) : d._activeNode();
            if (f)
                if (f._pos = d.pos(null, b), d._webAudio) {
                    if (!f.bufferSource || f.paused)
                        return d;
                    f.paused = !0;
                    "undefined" === typeof f.bufferSource.stop ? f.bufferSource.noteOff(0) : f.bufferSource.stop(0)
                } else
                    f.pause();
            d.on("pause");
            return d
        },
        stop: function(b, c) {
            var d = this;
            if (!d._loaded)
                return d.on("play", function() {
                    d.stop(b)
                }), d;
            d._clearEndTimer(c || 0);
            var f = b ? d._nodeById(b) : d._activeNode();
            if (f)
                if (f._pos = 0, d._webAudio) {
                    if (!f.bufferSource || f.paused)
                        return d;
                    f.paused = !0;
                    "undefined" === typeof f.bufferSource.stop ? f.bufferSource.noteOff(0) : f.bufferSource.stop(0)
                } else
                    f.pause(),
                    f.currentTime = 0;
            return d
        },
        mute: function(b) {
            var c = this;
            if (!c._loaded)
                return c.on("play", function() {
                    c.mute(b)
                }), c;
            var d = b ? c._nodeById(b) : c._activeNode();
            d && (c._webAudio ? d.gain.value = 0 : d.volume = 0);
            return c
        },
        unmute: function(b) {
            var c = this;
            if (!c._loaded)
                return c.on("play", function() {
                    c.unmute(b)
                }), c;
            var d = b ? c._nodeById(b) : c._activeNode();
            d && (c._webAudio ? d.gain.value = c._volume : d.volume = c._volume);
            return c
        },
        volume: function(b, c) {
            var d = this;
            b = parseFloat(b);
            if (0 <= b && 1 >= b) {
                d._volume = b;
                if (!d._loaded)
                    return d.on("play", function() {
                        d.volume(b, c)
                    }), d;
                var f = c ? d._nodeById(c) : d._activeNode();
                f && (d._webAudio ? f.gain.value = b : f.volume = b * A.volume());
                return d
            }
            return d._volume
        },
        loop: function(b) {
            return "boolean" === typeof b ? (this._loop = b, this) : this._loop
        },
        sprite: function(b) {
            return "object" === typeof b ? (this._sprite = b, this) : this._sprite
        },
        pos: function(b, d) {
            var f = this;
            if (!f._loaded)
                return f.on("load", function() {
                    f.pos(b)
                }), "number" === typeof b ? f : f._pos || 0;
            b = parseFloat(b);
            var g = d ? f._nodeById(d) : f._activeNode();
            if (g)
                return 0 <= b ? (f.pause(d), g._pos = b, f.play(g._sprite, d), f) : f._webAudio ? g._pos + (c.currentTime - f._playStart) : g.currentTime;
            if (0 <= b)
                return f;
            for (g = 0; g < f._audioNode.length; g++)
                if (f._audioNode[g].paused && 4 === f._audioNode[g].readyState)
                    return f._webAudio ? f._audioNode[g]._pos : f._audioNode[g].currentTime
        },
        pos3d: function(b, c, d, f) {
            var g = this;
            c = "undefined" === typeof c || !c ? 0 : c;
            d = "undefined" === typeof d || !d ? -0.5 : d;
            if (!g._loaded)
                return g.on("play", function() {
                    g.pos3d(b, c, d, f)
                }), g;
            if (0 <= b || 0 > b) {
                if (g._webAudio) {
                    var q = f ? g._nodeById(f) : g._activeNode();
                    q && (g._pos3d = [b, c, d], q.panner.setPosition(b, c, d))
                }
            } else
                return g._pos3d;
            return g
        },
        fade: function(b, c, d, f, g) {
            var q = this,
                m = Math.abs(b - c),
                x = b > c ? "down" : "up",
                m = m / 0.01,
                z = d / m;
            if (!q._loaded)
                return q.on("load", function() {
                    q.fade(b, c, d, f, g)
                }), q;
            q.volume(b, g);
            for (var u = 1; u <= m; u++)
                (function() {
                    var b = Math.round(1E3 * (q._volume + ("up" === x ? 0.01 : -0.01) * u)) / 1E3;
                    setTimeout(function() {
                        q.volume(b, g);
                        b === c && f && f()
                    }, z * u)
                })()
        },
        fadeIn: function(b, c, d) {
            return this.volume(0).play().fade(0, b, c, d)
        },
        fadeOut: function(b, c, d, f) {
            var g = this;
            return g.fade(g._volume, b, c, function() {
                d && d();
                g.pause(f);
                g.on("end")
            }, f)
        },
        _nodeById: function(b) {
            for (var c = this._audioNode[0], d = 0; d < this._audioNode.length; d++)
                if (this._audioNode[d].id === b) {
                    c = this._audioNode[d];
                    break
                }
            return c
        },
        _activeNode: function() {
            for (var b = null, c = 0; c < this._audioNode.length; c++)
                if (!this._audioNode[c].paused) {
                    b = this._audioNode[c];
                    break
                }
            this._drainPool();
            return b
        },
        _inactiveNode: function(b) {
            for (var c = null, d = 0; d < this._audioNode.length; d++)
                if (this._audioNode[d].paused && 4 === this._audioNode[d].readyState) {
                    b(this._audioNode[d]);
                    c = !0;
                    break
                }
            this._drainPool();
            if (!c) {
                var f;
                this._webAudio ? (f = this._setupAudioNode(), b(f)) : (this.load(), f = this._audioNode[this._audioNode.length - 1], f.addEventListener("loadedmetadata", function() {
                    b(f)
                }))
            }
        },
        _drainPool: function() {
            var b = 0,
                c;
            for (c = 0; c < this._audioNode.length; c++)
                this._audioNode[c].paused && b++;
            for (c = this._audioNode.length - 1; 0 <= c && !(5 >= b); c--)
                this._audioNode[c].paused && (this._webAudio && this._audioNode[c].disconnect(0), b--, this._audioNode.splice(c, 1))
        },
        _clearEndTimer: function(b) {
            b = this._onendTimer.indexOf(b);
            b = 0 <= b ? b : 0;
            this._onendTimer[b] && (clearTimeout(this._onendTimer[b]), this._onendTimer.splice(b, 1))
        },
        _setupAudioNode: function() {
            var b = this._audioNode,
                d = this._audioNode.length;
            b[d] = "undefined" === typeof c.createGain ? c.createGainNode() : c.createGain();
            b[d].gain.value = this._volume;
            b[d].paused = !0;
            b[d]._pos = 0;
            b[d].readyState = 4;
            b[d].connect(m);
            b[d].panner = c.createPanner();
            b[d].panner.setPosition(this._pos3d[0], this._pos3d[1], this._pos3d[2]);
            b[d].panner.connect(b[d]);
            return b[d]
        },
        on: function(b, c) {
            var d = this["_on" + b];
            if ("function" === typeof c)
                d.push(c);
            else
                for (var f = 0; f < d.length; f++)
                    c ? d[f].call(this, c) : d[f].call(this);
            return this
        },
        off: function(b, c) {
            for (var d = this["_on" + b], f = c.toString(), g = 0; g < d.length; g++)
                if (f === d[g].toString()) {
                    d.splice(g, 1);
                    break
                }
            return this
        },
        unload: function() {
            for (var c = this._audioNode, d = 0; d < this._audioNode.length; d++)
                c[d].paused || this.stop(c[d].id),
                this._webAudio ? c[d].disconnect(0) : c[d].src = "";
            c = A._howls.indexOf(this);
            null !== c && 0 <= c && A._howls.splice(c, 1);
            delete b[this._src]
        }
    };
    if (d)
        var z = function(b, c) {
            b._duration = c ? c.duration : b._duration;
            0 === Object.getOwnPropertyNames(b._sprite).length && (b._sprite = {
                _default: [0, 1E3 * b._duration]
            });
            b._loaded || (b._loaded = !0, b.on("load"));
            b._autoplay && b.play()
        };
    "function" === typeof define && define.amd && define(function() {
        return {
            Howler: A,
            Howl: x
        }
    });
    "undefined" !== typeof exports && (exports.Howler = A, exports.Howl = x);
    window.Howler = A;
    window.Howl = x
})();
(function(b) {
    Number.prototype.map = function(b, c, d, f) {
        return d + (f - d) * ((this - b) / (c - b))
    };
    Number.prototype.limit = function(b, c) {
        return Math.min(c, Math.max(b, this))
    };
    Number.prototype.round = function(b) {
        b = Math.pow(10, b || 0);
        return Math.round(this * b) / b
    };
    Number.prototype.floor = function() {
        return Math.floor(this)
    };
    Number.prototype.ceil = function() {
        return Math.ceil(this)
    };
    Number.prototype.toInt = function() {
        return this | 0
    };
    Number.prototype.toRad = function() {
        return this / 180 * Math.PI
    };
    Number.prototype.toDeg = function() {
        return 180 * this / Math.PI
    };
    Array.prototype.erase = function(b) {
        for (var c = this.length; c--;)
            this[c] === b && this.splice(c, 1);
        return this
    };
    Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)]
    };
    Function.prototype.bind = Function.prototype.bind || function(b) {
        var c = this;
        return function() {
            var d = Array.prototype.slice.call(arguments);
            return c.apply(b || null, d)
        }
    };
    b.ig = {
        game: null,
        debug: null,
        version: "1.20",
        global: b,
        modules: {},
        resources: [],
        ready: !1,
        baked: !1,
        nocache: "",
        ua: {},
        prefix: b.ImpactPrefix || "",
        lib: "lib/",
        _current: null,
        _loadQueue: [],
        _waitForOnload: 0,
        $: function(b) {
            return "#" == b.charAt(0) ? document.getElementById(b.substr(1)) : document.getElementsByTagName(b)
        },
        $new: function(b) {
            return document.createElement(b)
        },
        copy: function(b) {
            if (!b || "object" != typeof b || b instanceof HTMLElement || b instanceof ig.Class)
                return b;
            if (b instanceof Array)
                for (var c = [], d = 0, f = b.length; d < f; d++)
                    c[d] = ig.copy(b[d]);
            else
                for (d in c = {}, b)
                    c[d] = ig.copy(b[d]);
            return c
        },
        merge: function(b, c) {
            for (var d in c) {
                var f = c[d];
                if ("object" != typeof f || f instanceof HTMLElement || f instanceof ig.Class)
                    b[d] = f;
                else {
                    if (!b[d] || "object" != typeof b[d])
                        b[d] = f instanceof Array ? [] : {};
                    ig.merge(b[d], f)
                }
            }
            return b
        },
        ksort: function(b) {
            if (!b || "object" != typeof b)
                return [];
            var c = [],
                d = [],
                f;
            for (f in b)
                c.push(f);
            c.sort();
            for (f = 0; f < c.length; f++)
                d.push(b[c[f]]);
            return d
        },
        setVendorAttribute: function(b, c, d) {
            var f = c.charAt(0).toUpperCase() + c.substr(1);
            b[c] = b["ms" + f] = b["moz" + f] = b["webkit" + f] = b["o" + f] = d
        },
        getVendorAttribute: function(b, c) {
            var d = c.charAt(0).toUpperCase() +
            c.substr(1);
            return b[c] || b["ms" + d] || b["moz" + d] || b["webkit" + d] || b["o" + d]
        },
        normalizeVendorAttribute: function(b, c) {
            var d = ig.getVendorAttribute(b, c);
            !b[c] && d && (b[c] = d)
        },
        getImagePixels: function(b, c, d, f, g) {
            var m = ig.$new("canvas");
            m.width = b.width;
            m.height = b.height;
            var u = m.getContext("2d");
            ig.System.SCALE.CRISP(m, u);
            var A = ig.getVendorAttribute(u, "backingStorePixelRatio") || 1;
            ig.normalizeVendorAttribute(u, "getImageDataHD");
            var E = b.width / A,
                D = b.height / A;
            m.width = Math.ceil(E);
            m.height = Math.ceil(D);
            u.drawImage(b, 0, 0, E, D);
            return 1 === A ? u.getImageData(c, d, f, g) : u.getImageDataHD(c, d, f, g)
        },
        module: function(b) {
            if (ig._current)
                throw "Module '" + ig._current.name + "' defines nothing";
            if (ig.modules[b] && ig.modules[b].body)
                throw "Module '" + b + "' is already defined";
            ig._current = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig.modules[b] = ig._current;
            ig._loadQueue.push(ig._current);
            return ig
        },
        requires: function() {
            ig._current.requires = Array.prototype.slice.call(arguments);
            return ig
        },
        defines: function(b) {
            ig._current.body = b;
            ig._current = null;
            ig._initDOMReady()
        },
        addResource: function(b) {
            ig.resources.push(b)
        },
        setNocache: function(b) {
            ig.nocache = b ? "?" + Date.now() : ""
        },
        log: function() {},
        assert: function() {},
        show: function() {},
        mark: function() {},
        _loadScript: function(b, c) {
            ig.modules[b] = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig._waitForOnload++;
            var d = ig.prefix + ig.lib + b.replace(/\./g, "/") + ".js" + ig.nocache,
                f = ig.$new("script");
            f.type = "text/javascript";
            f.src = d;
            f.onload = function() {
                ig._waitForOnload--;
                ig._execModules()
            };
            f.onerror = function() {
                throw "Failed to load module " +
                b + " at " + d + " required from " + c;
            };
            ig.$("head")[0].appendChild(f)
        },
        _execModules: function() {
            for (var b = !1, c = 0; c < ig._loadQueue.length; c++) {
                for (var d = ig._loadQueue[c], f = !0, g = 0; g < d.requires.length; g++) {
                    var m = d.requires[g];
                    ig.modules[m] ? ig.modules[m].loaded || (f = !1) : (f = !1, ig._loadScript(m, d.name))
                }
                f && d.body && (ig._loadQueue.splice(c, 1), d.loaded = !0, d.body(), b = !0, c--)
            }
            if (b)
                ig._execModules();
            else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
                b = [];
                for (c = 0; c < ig._loadQueue.length; c++) {
                    f = [];
                    m = ig._loadQueue[c].requires;
                    for (g = 0; g < m.length; g++)
                        d = ig.modules[m[g]],
                        (!d || !d.loaded) && f.push(m[g]);
                    b.push(ig._loadQueue[c].name + " (requires: " + f.join(", ") + ")")
                }
                throw "Unresolved (circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules:\n" + b.join("\n");
            }
        },
        _DOMReady: function() {
            if (!ig.modules["dom.ready"].loaded) {
                if (!document.body)
                    return setTimeout(ig._DOMReady, 13);
                ig.modules["dom.ready"].loaded = !0;
                ig._waitForOnload--;
                ig._execModules()
            }
            return 0
        },
        _boot: function() {
            document.location.href.match(/\?nocache/) && ig.setNocache(!0);
            ig.ua.pixelRatio = b.devicePixelRatio || 1;
            ig.ua.viewport = {
                width: b.innerWidth,
                height: b.innerHeight
            };
            ig.ua.screen = {
                width: b.screen.availWidth * ig.ua.pixelRatio,
                height: b.screen.availHeight * ig.ua.pixelRatio
            };
            ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
            ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
            ig.ua.iPad = /iPad/i.test(navigator.userAgent);
            ig.ua.android = /android/i.test(navigator.userAgent);
            ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
            ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
            ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
            ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
            ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
            ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
            ig.ua.touchDevice = "ontouchstart" in
            b || b.navigator.msMaxTouchPoints;
            ig.ua.mobile = false
        },
        _initDOMReady: function() {
            ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = {
                requires: [],
                loaded: !1,
                body: null
            }, ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), b.addEventListener("load", ig._DOMReady, !1)))
        }
    };
    for (var c = ["ms", "moz", "webkit", "o"], d = 0; d < c.length && !b.requestAnimationFrame; d++)
        b.requestAnimationFrame = b[c[d] + "RequestAnimationFrame"];
    if (b.requestAnimationFrame) {
        var f = 1,
            g = {};
        b.ig.setAnimation = function(c, d) {
            var m = f++;
            g[m] = !0;
            var j = function() {
                g[m] && (b.requestAnimationFrame(j, d), c())
            };
            b.requestAnimationFrame(j, d);
            return m
        };
        b.ig.clearAnimation = function(b) {
            delete g[b]
        }
    } else
        b.ig.setAnimation = function(c) {
            return b.setInterval(c, 1E3 / 60)
        },
        b.ig.clearAnimation = function(c) {
            b.clearInterval(c)
        };
    var m = !1,
        u = /xyz/.test(function() {
            xyz
        }) ? /\bparent\b/ : /.*/;
    b.ig.Class = function() {};
    var A = function(b) {
        var c = this.prototype,
            d = {},
            f;
        for (f in b)
            "function" == typeof b[f] && "function" == typeof c[f] && u.test(b[f]) ? (d[f] = c[f], c[f] = function(b, c) {
                return function() {
                    var f = this.parent;
                    this.parent = d[b];
                    var g = c.apply(this, arguments);
                    this.parent = f;
                    return g
                }
            }(f, b[f])) : c[f] = b[f]
    };
    b.ig.Class.extend = function(c) {
        function d() {
            if (!m) {
                if (this.staticInstantiate) {
                    var b = this.staticInstantiate.apply(this, arguments);
                    if (b)
                        return b
                }
                for (var c in this)
                    "object" == typeof this[c] && (this[c] = ig.copy(this[c]));
                this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var f = this.prototype;
        m = !0;
        var g = new this;
        m = !1;
        for (var p in c)
            g[p] = "function" == typeof c[p] && "function" == typeof f[p] && u.test(c[p]) ? function(b, c) {
                return function() {
                    var d = this.parent;
                    this.parent = f[b];
                    var g = c.apply(this, arguments);
                    this.parent = d;
                    return g
                }
            }(p, c[p]) : c[p];
        d.prototype = g;
        d.constructor = d;
        d.extend = b.ig.Class.extend;
        d.inject = A;
        return d
    }
})(window);
ig.baked = !0;
ig.module("impact.image").defines(function() {
    ig.Image = ig.Class.extend({
        data: null,
        width: 0,
        height: 0,
        loaded: !1,
        failed: !1,
        loadCallback: null,
        path: "",
        staticInstantiate: function(b) {
            return ig.Image.cache[b] || null
        },
        init: function(b) {
            this.path = b;
            this.load()
        },
        load: function(b) {
            this.loaded ? b && b(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = b || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this), ig.Image.cache[this.path] = this)
        },
        reload: function() {
            this.loaded = !1;
            this.data = new Image;
            this.data.onload = this.onload.bind(this);
            this.data.src = this.path + "?" + Date.now()
        },
        onload: function() {
            this.width = this.data.width;
            this.height = this.data.height;
            this.loaded = !0;
            1 != ig.system.scale && this.resize(ig.system.scale);
            this.loadCallback && this.loadCallback(this.path, !0)
        },
        onerror: function() {
            this.failed = !0;
            this.loadCallback && this.loadCallback(this.path, !1)
        },
        resize: function(b) {
            var c = this.width * b,
                d = this.height * b,
                f = ig.$new("canvas");
            f.width = this.width;
            f.height = this.height;
            f = f.getContext("2d");
            f.drawImage(this.data, 0, 0, this.width, this.height, 0, 0, this.width, this.height);
            var f = f.getImageData(0, 0, this.width, this.height),
                g = ig.$new("canvas");
            g.width = c;
            g.height = d;
            for (var m = g.getContext("2d"), u = m.getImageData(0, 0, c, d), A = 0; A < d; A++)
                for (var q = 0; q < c; q++) {
                    var x = 4 * (Math.floor(A / b) * this.width + Math.floor(q / b)),
                        z = 4 * (A * c + q);
                    u.data[z] = f.data[x];
                    u.data[z + 1] = f.data[x + 1];
                    u.data[z + 2] = f.data[x + 2];
                    u.data[z + 3] = f.data[x + 3]
                }
            m.putImageData(u, 0, 0);
            this.data = g
        },
        draw: function(b, c, d, f, g, m) {
            if (this.loaded) {
                var u = ig.system.scale;
                g = (g ? g : this.width) * u;
                m = (m ? m : this.height) * u;
                ig.system.context.drawImage(this.data, d ? d * u : 0, f ? f * u : 0, g, m, ig.system.getDrawPos(b), ig.system.getDrawPos(c), g, m);
                ig.Image.drawCount++
            }
        },
        drawTile: function(b, c, d, f, g, m, u) {
            g = g ? g : f;
            if (this.loaded && !(f > this.width || g > this.height)) {
                var A = ig.system.scale,
                    q = Math.floor(f * A),
                    x = Math.floor(g * A),
                    z = m ? -1 : 1,
                    j = u ? -1 : 1;
                if (m || u)
                    ig.system.context.save(),
                    ig.system.context.scale(z, j);
                ig.system.context.drawImage(this.data, Math.floor(d * f) % this.width * A, Math.floor(d * f / this.width) * g * A, q, x, ig.system.getDrawPos(b) * z - (m ? q : 0), ig.system.getDrawPos(c) * j - (u ? x : 0), q, x);
                (m || u) && ig.system.context.restore();
                ig.Image.drawCount++
            }
        }
    });
    ig.Image.drawCount = 0;
    ig.Image.cache = {};
    ig.Image.reloadCache = function() {
        for (var b in ig.Image.cache)
            ig.Image.cache[b].reload()
    }
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function() {
    ig.Font = ig.Image.extend({
        widthMap: [],
        indices: [],
        firstChar: 32,
        alpha: 1,
        letterSpacing: 1,
        lineSpacing: 0,
        onload: function(b) {
            this._loadMetrics(this.data);
            this.parent(b)
        },
        widthForString: function(b) {
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var c = 0, d = 0; d < b.length; d++)
                    c = Math.max(c, this._widthForLine(b[d]));
                return c
            }
            return this._widthForLine(b)
        },
        _widthForLine: function(b) {
            for (var c = 0, d = 0; d < b.length; d++)
                c += this.widthMap[b.charCodeAt(d) - this.firstChar] +
                this.letterSpacing;
            return c
        },
        heightForString: function(b) {
            return b.split("\n").length * (this.height + this.lineSpacing)
        },
        draw: function(b, c, d, f) {
            "string" != typeof b && (b = b.toString());
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var g = this.height + this.lineSpacing, m = 0; m < b.length; m++)
                    this.draw(b[m], c, d + m * g, f)
            } else {
                if (f == ig.Font.ALIGN.RIGHT || f == ig.Font.ALIGN.CENTER)
                    m = this._widthForLine(b),
                    c -= f == ig.Font.ALIGN.CENTER ? m / 2 : m;
                1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
                for (m = 0; m < b.length; m++)
                    f = b.charCodeAt(m),
                    c += this._drawChar(f - this.firstChar, c, d);
                1 !== this.alpha && (ig.system.context.globalAlpha = 1);
                ig.Image.drawCount += b.length
            }
        },
        _drawChar: function(b, c, d) {
            if (!this.loaded || 0 > b || b >= this.indices.length)
                return 0;
            var f = ig.system.scale,
                g = this.widthMap[b] * f,
                m = (this.height - 2) * f;
            ig.system.context.drawImage(this.data, this.indices[b] * f, 0, g, m, ig.system.getDrawPos(c), ig.system.getDrawPos(d), g, m);
            return this.widthMap[b] + this.letterSpacing
        },
        _loadMetrics: function(b) {
            this.height = b.height - 1;
            this.widthMap = [];
            this.indices = [];
            for (var c = ig.getImagePixels(b, 0, b.height - 1, b.width, 1), d = 0, f = 0, g = 0; g < b.width; g++) {
                var m = 4 * g + 3;
                0 != c.data[m] ? f++ : 0 == c.data[m] && f && (this.widthMap.push(f), this.indices.push(g - f), d++, f = 0)
            }
            this.widthMap.push(f);
            this.indices.push(g - f)
        }
    });
    ig.Font.ALIGN = {
        LEFT: 0,
        RIGHT: 1,
        CENTER: 2
    }
});
ig.baked = !0;
ig.module("impact.sound").defines(function() {
    ig.SoundManager = ig.Class.extend({
        clips: {},
        volume: 1,
        format: null,
        init: function() {
            for (var b = new Audio, c = 0; c < ig.Sound.use.length; c++) {
                var d = ig.Sound.use[c];
                if (b.canPlayType(d.mime)) {
                    this.format = d;
                    break
                }
            }
            this.format || (ig.Sound.enabled = !1)
        },
        load: function(b, c, d) {
            var f = ig.prefix + b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
            if (this.clips[b]) {
                if (c && this.clips[b].length < ig.Sound.channels)
                    for (c = this.clips[b].length; c < ig.Sound.channels; c++) {
                        var g = new Audio(f);
                        g.load();
                        this.clips[b].push(g)
                    }
                return this.clips[b][0]
            }
            var m = new Audio(f);
            d && (m.addEventListener("canplaythrough", function A(c) {
                m.removeEventListener("canplaythrough", A, !1);
                d(b, !0, c)
            }, !1), m.addEventListener("error", function(c) {
                d(b, !0, c)
            }, !1));
            m.preload = "auto";
            m.load();
            this.clips[b] = [m];
            if (c)
                for (c = 1; c < ig.Sound.channels; c++)
                    g = new Audio(f),
                    g.load(),
                    this.clips[b].push(g);
            return m
        },
        get: function(b) {
            b = this.clips[b];
            for (var c = 0, d; d = b[c++];)
                if (d.paused || d.ended)
                    return d.ended && (d.currentTime = 0), d;
            b[0].pause();
            b[0].currentTime = 0;
            return b[0]
        }
    });
    ig.Music = ig.Class.extend({
        tracks: [],
        namedTracks: {},
        currentTrack: null,
        currentIndex: 0,
        random: !1,
        _volume: 1,
        _loop: !1,
        _fadeInterval: 0,
        _fadeTimer: null,
        _endedCallbackBound: null,
        init: function() {
            this._endedCallbackBound = this._endedCallback.bind(this);
            Object.defineProperty ? (Object.defineProperty(this, "volume", {
                get: this.getVolume.bind(this),
                set: this.setVolume.bind(this)
            }), Object.defineProperty(this, "loop", {
                get: this.getLooping.bind(this),
                set: this.setLooping.bind(this)
            })) : this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
        },
        add: function(b, c) {
            if (ig.Sound.enabled) {
                var d = ig.soundManager.load(b instanceof ig.Sound ? b.path : b, !1);
                d.loop = this._loop;
                d.volume = this._volume;
                d.addEventListener("ended", this._endedCallbackBound, !1);
                this.tracks.push(d);
                c && (this.namedTracks[c] = d);
                this.currentTrack || (this.currentTrack = d)
            }
        },
        next: function() {
            this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play())
        },
        pause: function() {
            this.currentTrack && this.currentTrack.pause()
        },
        stop: function() {
            if (this.currentTrack) {
                this.currentTrack.pause();
                try {
                    this.currentTrack.currentTime = 0
                } catch (b) {
                    console.log(b)
                }
            }
        },
        play: function(b) {
            if (b && this.namedTracks[b])
                b = this.namedTracks[b],
                b != this.currentTrack && (this.stop(), this.currentTrack = b);
            else if (!this.currentTrack)
                return;
            this.currentTrack.play()
        },
        getLooping: function() {
            return this._loop
        },
        setLooping: function(b) {
            this._loop = b;
            for (var c in this.tracks)
                this.tracks[c].loop = b
        },
        getVolume: function() {
            return this._volume
        },
        setVolume: function(b) {
            this._volume = b.limit(0, 1);
            for (var c in this.tracks)
                this.tracks[c].volume = this._volume
        },
        fadeOut: function(b) {
            this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(b), this._fadeInterval = setInterval(this._fadeStep.bind(this), 50))
        },
        _fadeStep: function() {
            var b = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
            0.01 >= b ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = b
        },
        _endedCallback: function() {
            this._loop ? this.play() : this.next()
        }
    });
    ig.Sound = ig.Class.extend({
        path: "",
        volume: 1,
        currentClip: null,
        multiChannel: !0,
        init: function(b, c) {
            this.path = b;
            this.multiChannel = !1 !== c;
            this.load()
        },
        load: function(b) {
            ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path, this.multiChannel, b) : ig.addResource(this) : b && b(this.path, !0)
        },
        play: function() {
            ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play())
        },
        stop: function() {
            this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0)
        }
    });
    ig.Sound.FORMAT = {
        MP3: {
            ext: "mp3",
            mime: "audio/mpeg"
        },
        M4A: {
            ext: "m4a",
            mime: "audio/mp4; codecs=mp4a"
        },
        OGG: {
            ext: "ogg",
            mime: "audio/ogg; codecs=vorbis"
        },
        WEBM: {
            ext: "webm",
            mime: "audio/webm; codecs=vorbis"
        },
        CAF: {
            ext: "caf",
            mime: "audio/x-caf"
        }
    };
    ig.Sound.use = [ig.Sound.FORMAT.MP3, ig.Sound.FORMAT.OGG];
    ig.Sound.channels = 4;
    ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function() {
    ig.Loader = ig.Class.extend({
        resources: [],
        gameClass: null,
        status: 0,
        done: !1,
        _unloaded: [],
        _drawStatus: 0,
        _intervalId: 0,
        _loadCallbackBound: null,
        init: function(b, c) {
            this.gameClass = b;
            this.resources = c;
            this._loadCallbackBound = this._loadCallback.bind(this);
            for (var d = 0; d < this.resources.length; d++)
                this._unloaded.push(this.resources[d].path)
        },
        load: function() {
            ig.system.clear("#000");
            if (this.resources.length) {
                for (var b = 0; b < this.resources.length; b++)
                    this.loadResource(this.resources[b]);
                this._intervalId = setInterval(this.draw.bind(this), 16)
            } else
                this.end()
        },
        loadResource: function(b) {
            b.load(this._loadCallbackBound)
        },
        end: function() {
            this.done || (this.done = !0, clearInterval(this._intervalId))
        },
        draw: function() {},
        _loadCallback: function(b, c) {
            if (c)
                this._unloaded.erase(b);
            else
                throw "Failed to load resource: " + b;
            this.status = 1 - this._unloaded.length / this.resources.length;
            0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
        }
    })
});
ig.baked = !0;
ig.module("impact.timer").defines(function() {
    ig.Timer = ig.Class.extend({
        target: 0,
        base: 0,
        last: 0,
        pausedAt: 0,
        init: function(b) {
            this.last = this.base = ig.Timer.time;
            this.target = b || 0
        },
        set: function(b) {
            this.target = b || 0;
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        reset: function() {
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        tick: function() {
            var b = ig.Timer.time - this.last;
            this.last = ig.Timer.time;
            return this.pausedAt ? 0 : b
        },
        delta: function() {
            return (this.pausedAt || ig.Timer.time) - this.base - this.target
        },
        pause: function() {
            this.pausedAt || (this.pausedAt = ig.Timer.time)
        },
        unpause: function() {
            this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0)
        }
    });
    ig.Timer._last = 0;
    ig.Timer.time = 0;
    ig.Timer.timeScale = 1;
    ig.Timer.maxStep = 0.05;
    ig.Timer.step = function() {
        var b = Date.now();
        ig.Timer.time += Math.min((b - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
        ig.Timer._last = b
    }
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function() {
    ig.System = ig.Class.extend({
        fps: 30,
        width: 320,
        height: 240,
        realWidth: 320,
        realHeight: 240,
        scale: 1,
        tick: 0,
        animationId: 0,
        newGameClass: null,
        running: !1,
        delegate: null,
        clock: null,
        canvas: null,
        context: null,
        init: function(b, c, d, f, g) {
            this.fps = c;
            this.clock = new ig.Timer;
            this.canvas = ig.$(b);
            this.resize(d, f, g);
            this.context = this.canvas.getContext("2d");
            this.getDrawPos = ig.System.drawMode
        },
        resize: function(b, c, d) {
            this.width = b;
            this.height = c;
            this.scale = d || this.scale;
            this.realWidth = this.width * this.scale;
            this.realHeight = this.height * this.scale;
            this.canvas.width = this.realWidth;
            this.canvas.height = this.realHeight
        },
        setGame: function(b) {
            this.running ? this.newGameClass = b : this.setGameNow(b)
        },
        setGameNow: function(b) {
            ig.game = new b;
            ig.system.setDelegate(ig.game)
        },
        setDelegate: function(b) {
            if ("function" == typeof b.run)
                this.delegate = b,
                this.startRunLoop();
            else
                throw "System.setDelegate: No run() function in object";
        },
        stopRunLoop: function() {
            ig.clearAnimation(this.animationId);
            this.running = !1
        },
        startRunLoop: function() {
            this.stopRunLoop();
            this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
            this.running = !0
        },
        clear: function(b) {
            this.context.fillStyle = b;
            this.context.fillRect(0, 0, this.realWidth, this.realHeight)
        },
        run: function() {
            ig.Timer.step();
            this.tick = this.clock.tick();
            this.delegate.run();
            ig.input.clearPressed();
            this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
        },
        getDrawPos: null
    });
    ig.System.DRAW = {
        AUTHENTIC: function(b) {
            return Math.round(b) * this.scale
        },
        SMOOTH: function(b) {
            return Math.round(b * this.scale)
        },
        SUBPIXEL: function(b) {
            return b * this.scale
        }
    };
    ig.System.drawMode = ig.System.DRAW.SMOOTH;
    ig.System.SCALE = {
        CRISP: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !1);
            b.style.imageRendering = "-moz-crisp-edges";
            b.style.imageRendering = "-o-crisp-edges";
            b.style.imageRendering = "-webkit-optimize-contrast";
            b.style.imageRendering = "crisp-edges";
            b.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !0);
            b.style.imageRendering = "";
            b.style.msInterpolationMode = ""
        }
    };
    ig.System.scaleMode = ig.System.SCALE.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function() {
    ig.KEY = {
        MOUSE1: -1,
        MOUSE2: -3,
        MWHEEL_UP: -4,
        MWHEEL_DOWN: -5,
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        PAUSE: 19,
        CAPS: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        INSERT: 45,
        DELETE: 46,
        _0: 48,
        _1: 49,
        _2: 50,
        _3: 51,
        _4: 52,
        _5: 53,
        _6: 54,
        _7: 55,
        _8: 56,
        _9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBSTRACT: 109,
        DECIMAL: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PLUS: 187,
        COMMA: 188,
        MINUS: 189,
        PERIOD: 190
    };
    ig.Input = ig.Class.extend({
        bindings: {},
        actions: {},
        presses: {},
        locks: {},
        delayedKeyup: {},
        isUsingMouse: !1,
        isUsingKeyboard: !1,
        isUsingAccelerometer: !1,
        mouse: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0,
            z: 0
        },
        initMouse: function() {
            if (!this.isUsingMouse) {
                this.isUsingMouse = !0;
                var b = this.mousewheel.bind(this);
                ig.system.canvas.addEventListener("mousewheel", b, !1);
                ig.system.canvas.addEventListener("DOMMouseScroll", b, !1);
                ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
                ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
                ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
                ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
                ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none")
            }
        },
        initKeyboard: function() {
            this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1))
        },
        initAccelerometer: function() {
            this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
        },
        mousewheel: function(b) {
            var c = this.bindings[0 < (b.wheelDelta ? b.wheelDelta : -1 * b.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
            c && (this.actions[c] = !0, this.presses[c] = !0, this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault())
        },
        mousemove: function(b) {
            for (var c = ig.system.canvas, d = 0, f = 0; null != c;)
                d += c.offsetLeft,
                f += c.offsetTop,
                c = c.offsetParent;
            var c = b.pageX,
                g = b.pageY;
            b.touches && (c = b.touches[0].clientX, g = b.touches[0].clientY);
            this.mouse.x = (c - d) / ig.system.scale;
            this.mouse.y = (g - f) / ig.system.scale
        },
        contextmenu: function(b) {
            this.bindings[ig.KEY.MOUSE2] && (b.stopPropagation(), b.preventDefault())
        },
        keydown: function(b) {
            if ("text" != b.target.type) {
                var c = "keydown" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1;
                ("touchstart" == b.type || "mousedown" == b.type) && this.mousemove(b);
                if (c = this.bindings[c])
                    this.actions[c] = !0,
                    this.locks[c] || (this.presses[c] = !0, this.locks[c] = !0),
                    b.stopPropagation(),
                    b.preventDefault()
            }
        },
        keyup: function(b) {
            if ("text" != b.target.type) {
                var c = this.bindings["keyup" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1];
                c && (this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault())
            }
        },
        devicemotion: function(b) {
            this.accel = b.accelerationIncludingGravity
        },
        bind: function(b, c) {
            0 > b ? this.initMouse() : 0 < b && this.initKeyboard();
            this.bindings[b] = c
        },
        bindTouch: function(b, c) {
            var d = ig.$(b),
                f = this;
            d.addEventListener("touchstart", function(b) {
                f.touchStart(b, c)
            }, !1);
            d.addEventListener("touchend", function(b) {
                f.touchEnd(b, c)
            }, !1)
        },
        unbind: function(b) {
            this.delayedKeyup[this.bindings[b]] = !0;
            this.bindings[b] = null
        },
        unbindAll: function() {
            this.bindings = {};
            this.actions = {};
            this.presses = {};
            this.locks = {};
            this.delayedKeyup = {}
        },
        state: function(b) {
            return this.actions[b]
        },
        pressed: function(b) {
            return this.presses[b]
        },
        released: function(b) {
            return this.delayedKeyup[b]
        },
        clearPressed: function() {
            for (var b in this.delayedKeyup)
                this.actions[b] = !1,
                this.locks[b] = !1;
            this.delayedKeyup = {};
            this.presses = {}
        },
        touchStart: function(b, c) {
            this.actions[c] = !0;
            this.presses[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        },
        touchEnd: function(b, c) {
            this.delayedKeyup[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        }
    })
});
ig.baked = !0;
ig.module("impact.sound-handler").defines(function() {
    ig.SoundHandler = ig.Class.extend({
        formats: {
            ogg: ".ogg",
            mp3: ".mp3"
        },
        jukebox: null,
        pausePosition: null,
        globalMute: !1,
        forceMuted: !1,
        muted: !1,
        bgmPlaying: !1,
        soundPlaying: !1,
        currentSoundPlaying: null,
        soundBuffer: [],
        voSoundLoaded: [],
        sfxSoundLoaded: [],
        SOUNDID: {},
        voSoundsToLoad: [],
        sfxSoundsToLoad: [{
            name: "staticSound",
            path: "media/audio/play/static"
        }, {
            name: "openingSound",
            path: "media/audio/opening/opening"
        }, {
            name: "kittyopeningSound",
            path: "media/audio/opening/kittyopening"
        }, {
            name: "pat",
            path: "media/audio/pat"
        }],
        debug: !1,
        init: function() {
            this.initSfx();
            this.setupWindowHandler()
        },
        allVoSoundLoaded: function() {
            if (this.voSoundLoaded.length >= this.voSoundsToLoad.length) {
                this.debug && console.log("Vo ready");
                for (index = 0; index < this.voSoundLoaded.length; index++)
                    this.voSoundLoaded[index].on("end", function(b) {
                        b.isPlaying = !1;
                        this.soundBuffer.pop()
                    }.bind(this, this.voSoundLoaded[index])),
                    this.voSoundLoaded[index].on("play", function(b) {
                        b.isPlaying = !0
                    }.bind(this, this.voSoundLoaded[index]));
                return !0
            }
            return !1
        },
        allSfxSoundLoaded: function() {
            return this.sfxSoundLoaded.length >= this.sfxSoundsToLoad.length ? !0 : !1
        },
        stopBackgroundMusic: function() {
            ig.ua.mobile ? (this.pausePosition = this.jukebox.player.pause(), this.bgmPlaying = !1) : (this.bgmPlaying = !1, ig.music.pause())
        },
        playBackgroundMusic: function() {
            true ? (this.pausePosition ? this.jukebox.player.resume(this.pausePosition) : this.jukebox.player.play(this.jukebox.player.settings.spritemap.music.start, !0), this.bgmPlaying = !0) : (this.bgmPlaying = !0, ig.music.play())
        },
        playSound: function(b) {
            if ((b = this[b]) && (!this.forceMuted || !this.muted) && !b.isPlaying)
                this.soundBuffer.push(b),
                b.play()
        },
        stopAllAndPlaySound: function(b) {
            this.stopAllSounds();
            this.playSound(b)
        },
        stopAllSounds: function() {
            for (index = 0; index < this.soundBuffer.length; index++)
                this.soundBuffer[index].isPlaying = !1,
                this.soundBuffer.splice(0, 1)[0].stop()
        },
        addSound: function(b, c, d) {
            var f = c + this.formats.ogg;
            c += this.formats.mp3;
            this.SOUNDID[b] = b;
            this[b] = d ? new Howl({
                urls: [f, c],
                onload: d
            }) : new Howl({
                urls: [f, c]
            })
        },
        _muteSounds: function() {
            for (i = 0; i < ig.resources.length; i++)
                ig.resources[i].multiChannel && ig.resources[i].stop();
            Howler.mute();
            this.debug && console.log("Sounds muted")
        },
        _unMuteSounds: function() {
            Howler.unmute();
            ig.Sound.enabled = !0;
            this.debug && console.log("Sounds can play")
        },
        focusBlurMute: function() {
            this.forceMuted || this.mute()
        },
        focusBlurUnmute: function() {
            this.forceMuted || this.unmute()
        },
        setForceMuted: function(b) {
            this.forceMuted = b
        },
        mute: function() {
            this._muteSounds();
            true ? this.jukebox && (this.jukebox.player.pause(), this.jukebox.player.setVolume(0.01)) : ig.music.volume = 0;
            this.muted = !0
        },
        unmute: function() {
            this._unMuteSounds();
            ig.ua.mobile ? this.jukebox && (this.jukebox.player.resume(), this.jukebox.player.setVolume(1)) : ig.music.volume = 1;
            this.muted = !1
        },
        setupWindowHandler: function() {
            "true" === getQueryVariable("webview") ? ($(window).focus(function() {
                ig.ua.mobile && ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.focusBlurUnmute()
            }), $(window).blur(function() {
                ig.soundHandler && ig.soundHandler.focusBlurMute()
            })) : (window.onfocus = function() {
                ig.ua.mobile && ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.focusBlurUnmute()
            }, window.onblur = function() {
                ig.soundHandler && ig.soundHandler.focusBlurMute()
            })
        },
        initSfx: function() {
            for (index = 0; index < this.sfxSoundsToLoad.length; index++) {
                var b = function(b) {
                    this.sfxSoundLoaded.push(this[b])
                }.bind(this, this.sfxSoundsToLoad[index].name);
                this.addSound(this.sfxSoundsToLoad[index].name, this.sfxSoundsToLoad[index].path, b)
            }
        },
        initVoSfx: function() {
            for (index = 0; index < this.voSoundsToLoad.length; index++) {
                var b = function(b) {
                    this.voSoundLoaded.push(this[b])
                }.bind(this, this.voSoundsToLoad[index].name);
                this.addSound(this.voSoundsToLoad[index].name, this.voSoundsToLoad[index].path, b)
            }
        },
        setupDesktopMusic: function() {
            ig.music.add("media/sounds/desktop/background.*", "background")
        },
        setupJukebox: function() {
            ig.ua.mobile && (this.jukebox = new ig.Jukebox)
        },
        forceLoopBGM: function() {
            !this.forceMuted && this.jukebox && this.jukebox.player && (this.jukebox.player.getCurrentTime() || this.jukebox.player.resume(), this.jukebox.player.settings.spritemap.music && this.jukebox.player.settings.spritemap.music.loop ? this.jukebox.player.getCurrentTime() >= this.jukebox.player.settings.spritemap.music.end && this.jukebox.player.resume(this.jukebox.player.settings.spritemap.music.start) : this.jukebox.player.isPlaying && this.jukebox.player.isPlaying.loop ? this.jukebox.player.getCurrentTime() >= this.jukebox.player.isPlaying.end && this.jukebox.player.resume(this.jukebox.player.isPlaying.start) : this.jukebox.player.backgroundMusic && this.jukebox.player.backgroundMusic.loop && this.jukebox.player.getCurrentTime() >= this.jukebox.player.backgroundMusic.end && this.jukebox.player.resume(this.jukebox.player.backgroundMusic.start))
        }
    })
});
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound", "impact.sound-handler").defines(function() {
    ig.main = function(b, c, d, f, g, m, u) {
        ig.system = new ig.System(b, d, f, g, m || 1);
        ig.input = new ig.Input;
        ig.soundManager = new ig.SoundManager;
        ig.music = new ig.Music;
        ig.ready = !0;
        ig.soundHandler = new ig.SoundHandler;
        (new (u || ig.Loader)(c, ig.resources)).load()
    }
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function() {
    ig.AnimationSheet = ig.Class.extend({
        width: 8,
        height: 8,
        image: null,
        init: function(b, c, d) {
            this.width = c;
            this.height = d;
            this.image = new ig.Image(b)
        }
    });
    ig.Animation = ig.Class.extend({
        sheet: null,
        timer: null,
        sequence: [],
        flip: {
            x: !1,
            y: !1
        },
        pivot: {
            x: 0,
            y: 0
        },
        frame: 0,
        tile: 0,
        loopCount: 0,
        alpha: 1,
        angle: 0,
        init: function(b, c, d, f) {
            this.sheet = b;
            this.pivot = {
                x: b.width / 2,
                y: b.height / 2
            };
            this.timer = new ig.Timer;
            this.frameTime = c;
            this.sequence = d;
            this.stop = !!f;
            this.tile = this.sequence[0]
        },
        rewind: function() {
            this.timer.reset();
            this.loopCount = 0;
            this.tile = this.sequence[0];
            return this
        },
        gotoFrame: function(b) {
            this.timer.set(this.frameTime * -b);
            this.update()
        },
        gotoRandomFrame: function() {
            this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
        },
        update: function() {
            var b = Math.floor(this.timer.delta() / this.frameTime);
            this.loopCount = Math.floor(b / this.sequence.length);
            this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : b % this.sequence.length;
            this.tile = this.sequence[this.frame]
        },
        draw: function(b, c) {
            var d = Math.max(this.sheet.width, this.sheet.height);
            b > ig.system.width || c > ig.system.height || (0 > b + d || 0 > c + d) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(b, c, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(b + this.pivot.x), ig.system.getDrawPos(c + this.pivot.y)), ig.system.context.rotate(this.angle), this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
        }
    })
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function() {
    ig.Entity = ig.Class.extend({
        id: 0,
        settings: {},
        size: {
            x: 16,
            y: 16
        },
        offset: {
            x: 0,
            y: 0
        },
        posMP: {
            x: 0,
            y: 0
        },
        posML: {
            x: 0,
            y: 0
        },
        enableReposition: !1,
        pos: {
            x: 0,
            y: 0
        },
        last: {
            x: 0,
            y: 0
        },
        vel: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0
        },
        friction: {
            x: 0,
            y: 0
        },
        maxVel: {
            x: 100,
            y: 100
        },
        zIndex: 0,
        gravityFactor: 1,
        standing: !1,
        bounciness: 0,
        minBounceVelocity: 40,
        anims: {},
        animSheet: null,
        currentAnim: null,
        health: 10,
        type: 0,
        checkAgainst: 0,
        collides: 0,
        _killed: !1,
        slopeStanding: {
            min: (44).toRad(),
            max: (136).toRad()
        },
        init: function(b, c, d) {
            this.id = ++ig.Entity._lastId;
            this.pos.x = b;
            this.pos.y = c;
            ig.merge(this, d)
        },
        addAnim: function(b, c, d, f) {
            if (!this.animSheet)
                throw "No animSheet to add the animation " + b + " to.";
            c = new ig.Animation(this.animSheet, c, d, f);
            this.anims[b] = c;
            this.currentAnim || (this.currentAnim = c);
            return c
        },
        update: function() {
            this.last.x = this.pos.x;
            this.last.y = this.pos.y;
            this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
            this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
            this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
            var b = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y * ig.system.tick, this.size.x, this.size.y);
            this.handleMovementTrace(b);
            this.currentAnim && this.currentAnim.update()
        },
        getNewVelocity: function(b, c, d, f) {
            return c ? (b + c * ig.system.tick).limit(-f, f) : d ? (c = d * ig.system.tick, 0 < b - c ? b - c : 0 > b + c ? b + c : 0) : b.limit(-f, f)
        },
        handleMovementTrace: function(b) {
            this.standing = !1;
            b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
            b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
            if (b.collision.slope) {
                var c = b.collision.slope;
                if (0 < this.bounciness) {
                    var d = this.vel.x * c.nx + this.vel.y * c.ny;
                    this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
                    this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness
                } else
                    d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y),
                    this.vel.x = c.x * d,
                    this.vel.y = c.y * d,
                    c = Math.atan2(c.x, c.y),
                    c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0)
            }
            this.pos = b.pos
        },
        reposition: function() {
            true && this.enableReposition && (portraitMode ? (this.pos.x = this.posMP.x, this.pos.y = this.posMP.y) : (this.pos.x = this.posML.x, this.pos.y = this.posML.y))
        },
        draw: function() {
            this.currentAnim && this.currentAnim.draw(this.pos.x - this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
        },
        kill: function() {
            ig.game.removeEntity(this)
        },
        receiveDamage: function(b) {
            this.health -= b;
            0 >= this.health && this.kill()
        },
        touches: function(b) {
            return !(this.pos.x >= b.pos.x + b.size.x || this.pos.x + this.size.x <= b.pos.x || this.pos.y >= b.pos.y + b.size.y || this.pos.y + this.size.y <= b.pos.y)
        },
        distanceTo: function(b) {
            var c = this.pos.x + this.size.x / 2 - (b.pos.x + b.size.x / 2);
            b = this.pos.y + this.size.y / 2 - (b.pos.y + b.size.y / 2);
            return Math.sqrt(c * c + b * b)
        },
        angleTo: function(b) {
            return Math.atan2(b.pos.y + b.size.y / 2 - (this.pos.y + this.size.y / 2), b.pos.x + b.size.x / 2 - (this.pos.x + this.size.x / 2))
        },
        check: function() {},
        collideWith: function() {},
        ready: function() {}
    });
    ig.Entity._lastId = 0;
    ig.Entity.COLLIDES = {
        NEVER: 0,
        LITE: 1,
        PASSIVE: 2,
        ACTIVE: 4,
        FIXED: 8
    };
    ig.Entity.TYPE = {
        NONE: 0,
        A: 1,
        B: 2,
        BOTH: 3
    };
    ig.Entity.checkPair = function(b, c) {
        b.checkAgainst & c.type && b.check(c);
        c.checkAgainst & b.type && c.check(b);
        b.collides && c.collides && b.collides + c.collides > ig.Entity.COLLIDES.ACTIVE && ig.Entity.solveCollision(b, c)
    };
    ig.Entity.solveCollision = function(b, c) {
        var d = null;
        if (b.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED)
            d = b;
        else if (c.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED)
            d = c;
        b.last.x + b.size.x > c.last.x && b.last.x < c.last.x + c.size.x ? (b.last.y < c.last.y ? ig.Entity.seperateOnYAxis(b, c, d) : ig.Entity.seperateOnYAxis(c, b, d), b.collideWith(c, "y"), c.collideWith(b, "y")) : b.last.y + b.size.y > c.last.y && b.last.y < c.last.y + c.size.y && (b.last.x < c.last.x ? ig.Entity.seperateOnXAxis(b, c, d) : ig.Entity.seperateOnXAxis(c, b, d), b.collideWith(c, "x"), c.collideWith(b, "x"))
    };
    ig.Entity.seperateOnXAxis = function(b, c, d) {
        var f = b.pos.x + b.size.x - c.pos.x;
        d ? (d.vel.x = -d.vel.x * d.bounciness + (b === d ? c : b).vel.x, c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, d == b ? -f : f, 0, d.size.x, d.size.y), d.pos.x = c.pos.x) : (d = (b.vel.x - c.vel.x) / 2, b.vel.x = -d, c.vel.x = d, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, -f / 2, 0, b.size.x, b.size.y), b.pos.x = Math.floor(d.pos.x), b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, f / 2, 0, c.size.x, c.size.y), c.pos.x = Math.ceil(b.pos.x))
    };
    ig.Entity.seperateOnYAxis = function(b, c, d) {
        var f = b.pos.y + b.size.y - c.pos.y;
        if (d) {
            c = b === d ? c : b;
            d.vel.y = -d.vel.y * d.bounciness + c.vel.y;
            var g = 0;
            d == b && Math.abs(d.vel.y - c.vel.y) < d.minBounceVelocity && (d.standing = !0, g = c.vel.x * ig.system.tick);
            b = ig.game.collisionMap.trace(d.pos.x, d.pos.y, g, d == b ? -f : f, d.size.x, d.size.y);
            d.pos.y = b.pos.y;
            d.pos.x = b.pos.x
        } else
            ig.game.gravity && (c.standing || 0 < b.vel.y) ? (d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, -(b.pos.y + b.size.y - c.pos.y), b.size.x, b.size.y), b.pos.y = d.pos.y, 0 < b.bounciness && b.vel.y > b.minBounceVelocity ? b.vel.y *= -b.bounciness : (b.standing = !0, b.vel.y = 0)) : (d = (b.vel.y - c.vel.y) / 2, b.vel.y = -d, c.vel.y = d, g = c.vel.x * ig.system.tick, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, g, -f / 2, b.size.x, b.size.y), b.pos.y = d.pos.y, b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, f / 2, c.size.x, c.size.y), c.pos.y = b.pos.y)
    }
});
ig.baked = !0;
ig.module("impact.map").defines(function() {
    ig.Map = ig.Class.extend({
        tilesize: 8,
        width: 1,
        height: 1,
        data: [[]],
        name: null,
        init: function(b, c) {
            this.tilesize = b;
            this.data = c;
            this.height = c.length;
            this.width = c[0].length
        },
        getTile: function(b, c) {
            var d = Math.floor(b / this.tilesize),
                f = Math.floor(c / this.tilesize);
            return 0 <= d && d < this.width && 0 <= f && f < this.height ? this.data[f][d] : 0
        },
        setTile: function(b, c, d) {
            b = Math.floor(b / this.tilesize);
            c = Math.floor(c / this.tilesize);
            0 <= b && b < this.width && 0 <= c && c < this.height && (this.data[c][b] = d)
        }
    })
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function() {
    ig.CollisionMap = ig.Map.extend({
        lastSlope: 1,
        tiledef: null,
        init: function(b, c, g) {
            this.parent(b, c);
            this.tiledef = g || ig.CollisionMap.defaultTileDef;
            for (var m in this.tiledef)
                m | 0 > this.lastSlope && (this.lastSlope = m | 0)
        },
        trace: function(b, c, g, m, u, A) {
            var q = {
                    collision: {
                        x: !1,
                        y: !1,
                        slope: !1
                    },
                    pos: {
                        x: b,
                        y: c
                    },
                    tile: {
                        x: 0,
                        y: 0
                    }
                },
                x = Math.ceil(Math.max(Math.abs(g), Math.abs(m)) / this.tilesize);
            if (1 < x)
                for (var z = g / x, j = m / x, p = 0; p < x && (z || j) && !(this._traceStep(q, b, c, z, j, u, A, g, m, p), b = q.pos.x, c = q.pos.y, q.collision.x && (g = z = 0), q.collision.y && (m = j = 0), q.collision.slope); p++)
                    ;
            else
                this._traceStep(q, b, c, g, m, u, A, g, m, 0);
            return q
        },
        _traceStep: function(b, c, g, m, u, A, q, x, z, j) {
            b.pos.x += m;
            b.pos.y += u;
            var p = 0;
            if (m) {
                var t = 0 < m ? A : 0,
                    y = 0 > m ? this.tilesize : 0,
                    p = Math.max(Math.floor(g / this.tilesize), 0),
                    M = Math.min(Math.ceil((g + q) / this.tilesize), this.height);
                m = Math.floor((b.pos.x + t) / this.tilesize);
                var E = Math.floor((c + t) / this.tilesize);
                if (0 < j || m == E || 0 > E || E >= this.width)
                    E = -1;
                if (0 <= m && m < this.width)
                    for (var D = p; D < M && !(-1 != E && (p = this.data[D][E], 1 < p && p <= this.lastSlope && this._checkTileDef(b, p, c, g, x, z, A, q, E, D))); D++)
                        if (p = this.data[D][m], 1 == p || p > this.lastSlope || 1 < p && this._checkTileDef(b, p, c, g, x, z, A, q, m, D)) {
                            if (1 < p && p <= this.lastSlope && b.collision.slope)
                                break;
                            b.collision.x = !0;
                            b.tile.x = p;
                            c = b.pos.x = m * this.tilesize - t + y;
                            x = 0;
                            break
                        }
            }
            if (u) {
                t = 0 < u ? q : 0;
                u = 0 > u ? this.tilesize : 0;
                p = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
                y = Math.min(Math.ceil((b.pos.x + A) / this.tilesize), this.width);
                D = Math.floor((b.pos.y + t) / this.tilesize);
                M = Math.floor((g + t) / this.tilesize);
                if (0 < j || D == M || 0 > M || M >= this.height)
                    M = -1;
                if (0 <= D && D < this.height)
                    for (m = p; m < y && !(-1 != M && (p = this.data[M][m], 1 < p && p <= this.lastSlope && this._checkTileDef(b, p, c, g, x, z, A, q, m, M))); m++)
                        if (p = this.data[D][m], 1 == p || p > this.lastSlope || 1 < p && this._checkTileDef(b, p, c, g, x, z, A, q, m, D)) {
                            if (1 < p && p <= this.lastSlope && b.collision.slope)
                                break;
                            b.collision.y = !0;
                            b.tile.y = p;
                            b.pos.y = D * this.tilesize - t + u;
                            break
                        }
            }
        },
        _checkTileDef: function(b, c, g, m, u, A, q, x, z, j) {
            var p = this.tiledef[c];
            if (!p)
                return !1;
            c = (p[2] -
            p[0]) * this.tilesize;
            var t = (p[3] - p[1]) * this.tilesize,
                y = p[4];
            q = g + u + (0 > t ? q : 0) - (z + p[0]) * this.tilesize;
            x = m + A + (0 < c ? x : 0) - (j + p[1]) * this.tilesize;
            if (0 < c * x - t * q) {
                if (0 > u * -t + A * c)
                    return y;
                z = Math.sqrt(c * c + t * t);
                j = t / z;
                z = -c / z;
                var M = q * j + x * z,
                    p = j * M,
                    M = z * M;
                if (p * p + M * M >= u * u + A * A)
                    return y || 0.5 > c * (x - A) - t * (q - u);
                b.pos.x = g + u - p;
                b.pos.y = m + A - M;
                b.collision.slope = {
                    x: c,
                    y: t,
                    nx: j,
                    ny: z
                };
                return !0
            }
            return !1
        }
    });
    var b = 1 / 3,
        c = 2 / 3;
    ig.CollisionMap.defaultTileDef = {
        5: [0, 1, 1, c, !0],
        6: [0, c, 1, b, !0],
        7: [0, b, 1, 0, !0],
        3: [0, 1, 1, 0.5, !0],
        4: [0, 0.5, 1, 0, !0],
        2: [0, 1, 1, 0, !0],
        10: [0.5, 1, 1, 0, !0],
        21: [0, 1, 0.5, 0, !0],
        32: [c, 1, 1, 0, !0],
        43: [b, 1, c, 0, !0],
        54: [0, 1, b, 0, !0],
        27: [0, 0, 1, b, !0],
        28: [0, b, 1, c, !0],
        29: [0, c, 1, 1, !0],
        25: [0, 0, 1, 0.5, !0],
        26: [0, 0.5, 1, 1, !0],
        24: [0, 0, 1, 1, !0],
        11: [0, 0, 0.5, 1, !0],
        22: [0.5, 0, 1, 1, !0],
        33: [0, 0, b, 1, !0],
        44: [b, 0, c, 1, !0],
        55: [c, 0, 1, 1, !0],
        16: [1, b, 0, 0, !0],
        17: [1, c, 0, b, !0],
        18: [1, 1, 0, c, !0],
        14: [1, 0.5, 0, 0, !0],
        15: [1, 1, 0, 0.5, !0],
        13: [1, 1, 0, 0, !0],
        8: [0.5, 1, 0, 0, !0],
        19: [1, 1, 0.5, 0, !0],
        30: [b, 1, 0, 0, !0],
        41: [c, 1, b, 0, !0],
        52: [1, 1, c, 0, !0],
        38: [1, c, 0, 1, !0],
        39: [1, b, 0, c, !0],
        40: [1, 0, 0, b, !0],
        36: [1, 0.5, 0, 1, !0],
        37: [1, 0, 0, 0.5, !0],
        35: [1, 0, 0, 1, !0],
        9: [1, 0, 0.5, 1, !0],
        20: [0.5, 0, 0, 1, !0],
        31: [1, 0, c, 1, !0],
        42: [c, 0, b, 1, !0],
        53: [b, 0, 0, 1, !0],
        12: [0, 0, 1, 0, !1],
        23: [1, 1, 0, 1, !1],
        34: [1, 0, 1, 1, !1],
        45: [0, 1, 0, 0, !1]
    };
    ig.CollisionMap.staticNoCollision = {
        trace: function(b, c, g, m) {
            return {
                collision: {
                    x: !1,
                    y: !1,
                    slope: !1
                },
                pos: {
                    x: b + g,
                    y: c + m
                },
                tile: {
                    x: 0,
                    y: 0
                }
            }
        }
    }
});
ig.baked = !0;
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function() {
    ig.BackgroundMap = ig.Map.extend({
        tiles: null,
        scroll: {
            x: 0,
            y: 0
        },
        distance: 1,
        repeat: !1,
        tilesetName: "",
        foreground: !1,
        enabled: !0,
        preRender: !1,
        preRenderedChunks: null,
        chunkSize: 512,
        debugChunks: !1,
        anims: {},
        init: function(b, c, d) {
            this.parent(b, c);
            this.setTileset(d)
        },
        setTileset: function(b) {
            this.tilesetName = b instanceof ig.Image ? b.path : b;
            this.tiles = new ig.Image(this.tilesetName);
            this.preRenderedChunks = null
        },
        setScreenPos: function(b, c) {
            this.scroll.x = b / this.distance;
            this.scroll.y = c / this.distance
        },
        preRenderMapToChunks: function() {
            var b = this.width * this.tilesize * ig.system.scale,
                c = this.height * this.tilesize * ig.system.scale,
                d = Math.ceil(b / this.chunkSize),
                f = Math.ceil(c / this.chunkSize);
            this.preRenderedChunks = [];
            for (var g = 0; g < f; g++) {
                this.preRenderedChunks[g] = [];
                for (var m = 0; m < d; m++)
                    this.preRenderedChunks[g][m] = this.preRenderChunk(m, g, m == d - 1 ? b - m * this.chunkSize : this.chunkSize, g == f - 1 ? c - g * this.chunkSize : this.chunkSize)
            }
        },
        preRenderChunk: function(b, c, d, f) {
            var g = d / this.tilesize / ig.system.scale + 1,
                m = f / this.tilesize / ig.system.scale + 1,
                u = b * this.chunkSize / ig.system.scale % this.tilesize,
                A = c * this.chunkSize / ig.system.scale % this.tilesize;
            b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale);
            c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
            var q = ig.$new("canvas");
            q.width = d;
            q.height = f;
            d = ig.system.context;
            ig.system.context = q.getContext("2d");
            for (f = 0; f < g; f++)
                for (var x = 0; x < m; x++)
                    if (f + b < this.width && x + c < this.height) {
                        var z = this.data[x + c][f + b];
                        z && this.tiles.drawTile(f * this.tilesize - u, x * this.tilesize - A, z - 1, this.tilesize)
                    }
            ig.system.context = d;
            return q
        },
        draw: function() {
            this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled())
        },
        drawPreRendered: function() {
            this.preRenderedChunks || this.preRenderMapToChunks();
            var b = ig.system.getDrawPos(this.scroll.x),
                c = ig.system.getDrawPos(this.scroll.y);
            this.repeat && (b %= this.width * this.tilesize * ig.system.scale, c %= this.height * this.tilesize * ig.system.scale);
            var d = Math.max(Math.floor(b / this.chunkSize), 0),
                f = Math.max(Math.floor(c / this.chunkSize), 0),
                g = Math.ceil((b + ig.system.realWidth) / this.chunkSize),
                m = Math.ceil((c + ig.system.realHeight) / this.chunkSize),
                u = this.preRenderedChunks[0].length,
                A = this.preRenderedChunks.length;
            this.repeat || (g = Math.min(g, u), m = Math.min(m, A));
            for (var q = 0; f < m; f++) {
                for (var x = 0, z = d; z < g; z++) {
                    var j = this.preRenderedChunks[f % A][z % u],
                        p = -b + z * this.chunkSize - x,
                        t = -c + f * this.chunkSize - q;
                    ig.system.context.drawImage(j, p, t);
                    ig.Image.drawCount++;
                    this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(p, t, this.chunkSize, this.chunkSize));
                    this.repeat && j.width < this.chunkSize && p + j.width < ig.system.realWidth && (x = this.chunkSize - j.width, g++)
                }
                this.repeat && j.height < this.chunkSize && t + j.height < ig.system.realHeight && (q = this.chunkSize - j.height, m++)
            }
        },
        drawTiled: function() {
            for (var b = 0, c = null, d = (this.scroll.x / this.tilesize).toInt(), f = (this.scroll.y / this.tilesize).toInt(), g = this.scroll.x % this.tilesize, m = this.scroll.y % this.tilesize, u = -g - this.tilesize, g = ig.system.width + this.tilesize -
                g, A = ig.system.height + this.tilesize - m, q = -1, m = -m - this.tilesize; m < A; q++, m += this.tilesize) {
                var x = q + f;
                if (x >= this.height || 0 > x) {
                    if (!this.repeat)
                        continue;
                    x = 0 < x ? x % this.height : (x + 1) % this.height + this.height - 1
                }
                for (var z = -1, j = u; j < g; z++, j += this.tilesize) {
                    b = z + d;
                    if (b >= this.width || 0 > b) {
                        if (!this.repeat)
                            continue;
                        b = 0 < b ? b % this.width : (b + 1) % this.width + this.width - 1
                    }
                    if (b = this.data[x][b])
                        (c = this.anims[b - 1]) ? c.draw(j, m) : this.tiles.drawTile(j, m, b - 1, this.tilesize)
                }
            }
        }
    })
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function() {
    ig.Game = ig.Class.extend({
        clearColor: "#000000",
        gravity: 0,
        screen: {
            x: 0,
            y: 0
        },
        _rscreen: {
            x: 0,
            y: 0
        },
        entities: [],
        namedEntities: {},
        collisionMap: ig.CollisionMap.staticNoCollision,
        backgroundMaps: [],
        backgroundAnims: {},
        autoSort: !1,
        sortBy: null,
        cellSize: 64,
        _deferredKill: [],
        _levelToLoad: null,
        _doSortEntities: !1,
        staticInstantiate: function() {
            this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
            ig.game = this;
            return null
        },
        loadLevelWithoutEntities: function(b) {
            this.screen = {
                x: 0,
                y: 0
            };
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (var c = 0; c < b.layer.length; c++) {
                var d = b.layer[c];
                if ("collision" == d.name)
                    this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
                else {
                    var f = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
                    f.anims = this.backgroundAnims[d.tilesetName] || {};
                    f.repeat = d.repeat;
                    f.distance = d.distance;
                    f.foreground = !!d.foreground;
                    f.preRender = !!d.preRender;
                    f.name = d.name;
                    this.backgroundMaps.push(f)
                }
            }
        },
        loadLevel: function(b) {
            this.screen = {
                x: 0,
                y: 0
            };
            this.entities = [];
            this.namedEntities = {};
            for (var c = 0; c < b.entities.length; c++) {
                var d = b.entities[c];
                this.spawnEntity(d.type, d.x, d.y, d.settings)
            }
            this.sortEntities();
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (c = 0; c < b.layer.length; c++)
                if (d = b.layer[c], "collision" == d.name)
                    this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
                else {
                    var f = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
                    f.anims = this.backgroundAnims[d.tilesetName] || {};
                    f.repeat = d.repeat;
                    f.distance = d.distance;
                    f.foreground = !!d.foreground;
                    f.preRender = !!d.preRender;
                    f.name = d.name;
                    this.backgroundMaps.push(f)
                }
            for (c = 0; c < this.entities.length; c++)
                this.entities[c].ready()
        },
        loadLevelDeferred: function(b) {
            this._levelToLoad = b
        },
        getMapByName: function(b) {
            if ("collision" == b)
                return this.collisionMap;
            for (var c = 0; c < this.backgroundMaps.length; c++)
                if (this.backgroundMaps[c].name == b)
                    return this.backgroundMaps[c];
            return null
        },
        getEntityByName: function(b) {
            return this.namedEntities[b]
        },
        getEntitiesByType: function(b) {
            b = "string" === typeof b ? ig.global[b] : b;
            for (var c = [], d = 0; d < this.entities.length; d++) {
                var f = this.entities[d];
                f instanceof b && !f._killed && c.push(f)
            }
            return c
        },
        spawnEntity: function(b, c, d, f) {
            var g = "string" === typeof b ? ig.global[b] : b;
            if (!g)
                throw "Can't spawn entity of type " + b;
            b = new g(c, d, f || {});
            this.entities.push(b);
            b.name && (this.namedEntities[b.name] = b);
            return b
        },
        sortEntities: function() {
            this.entities.sort(this.sortBy)
        },
        sortEntitiesDeferred: function() {
            this._doSortEntities = !0
        },
        removeEntity: function(b) {
            b.name && delete this.namedEntities[b.name];
            b._killed = !0;
            b.type = ig.Entity.TYPE.NONE;
            b.checkAgainst = ig.Entity.TYPE.NONE;
            b.collides = ig.Entity.COLLIDES.NEVER;
            this._deferredKill.push(b)
        },
        run: function() {
            this.update();
            this.draw()
        },
        update: function() {
            this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
            if (this._doSortEntities || this.autoSort)
                this.sortEntities(),
                this._doSortEntities = !1;
            this.updateEntities();
            this.checkEntities();
            for (var b = 0; b < this._deferredKill.length; b++)
                this.entities.erase(this._deferredKill[b]);
            this._deferredKill = [];
            for (var c in this.backgroundAnims) {
                var b = this.backgroundAnims[c],
                    d;
                for (d in b)
                    b[d].update()
            }
        },
        updateEntities: function() {
            for (var b = 0; b < this.entities.length; b++) {
                var c = this.entities[b];
                c._killed || c.update()
            }
        },
        draw: function() {
            this.clearColor && ig.system.clear(this.clearColor);
            this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
            this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
            var b;
            for (b = 0; b < this.backgroundMaps.length; b++) {
                var c = this.backgroundMaps[b];
                if (c.foreground)
                    break;
                c.setScreenPos(this.screen.x, this.screen.y);
                c.draw()
            }
            this.drawEntities();
            for (b; b < this.backgroundMaps.length; b++)
                c = this.backgroundMaps[b],
                c.setScreenPos(this.screen.x, this.screen.y),
                c.draw()
        },
        drawEntities: function() {
            for (var b = 0; b < this.entities.length; b++)
                this.entities[b].draw()
        },
        checkEntities: function() {
            for (var b = {}, c = 0; c < this.entities.length; c++) {
                var d = this.entities[c];
                if (!(d.type == ig.Entity.TYPE.NONE && d.checkAgainst == ig.Entity.TYPE.NONE && d.collides == ig.Entity.COLLIDES.NEVER))
                    for (var f = {}, g = Math.floor(d.pos.y / this.cellSize), m = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, u = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, A = Math.floor(d.pos.x / this.cellSize); A < m; A++)
                        for (var q = g; q < u; q++)
                            if (b[A])
                                if (b[A][q]) {
                                    for (var x = b[A][q], z = 0; z < x.length; z++)
                                        d.touches(x[z]) && !f[x[z].id] && (f[x[z].id] = !0, ig.Entity.checkPair(d, x[z]));
                                    x.push(d)
                                } else
                                    b[A][q] = [d];
                            else
                                b[A] = {},
                                b[A][q] = [d]
            }
        }
    });
    ig.Game.SORT = {
        Z_INDEX: function(b, c) {
            return b.zIndex - c.zIndex
        },
        POS_X: function(b, c) {
            return b.pos.x + b.size.x - (c.pos.x +
            c.size.x)
        },
        POS_Y: function(b, c) {
            return b.pos.y + b.size.y - (c.pos.y + c.size.y)
        }
    }
});
ig.baked = !0;
ig.module("impact.debug.menu").requires("dom.ready", "impact.system").defines(function() {
    ig.System.inject({
        run: function() {
            ig.debug.beforeRun();
            this.parent();
            ig.debug.afterRun()
        },
        setGameNow: function(b) {
            this.parent(b);
            ig.debug.ready()
        }
    });
    ig.Debug = ig.Class.extend({
        options: {},
        panels: {},
        numbers: {},
        container: null,
        panelMenu: null,
        activePanel: null,
        debugTime: 0,
        debugTickAvg: 0.016,
        debugRealTime: Date.now(),
        init: function() {
            this.container = ig.$new("div");
            this.container.className = "ig_debug";
            ig.$("body")[0].appendChild(this.container);
            this.panelMenu = ig.$new("div");
            this.panelMenu.innerHTML = '<div class="ig_debug_head">Impact.Debug:</div>';
            this.panelMenu.className = "ig_debug_panel_menu";
            this.container.appendChild(this.panelMenu);
            this.numberContainer = ig.$new("div");
            this.numberContainer.className = "ig_debug_stats";
            this.panelMenu.appendChild(this.numberContainer);
            window.console && window.console.log && window.console.assert && (ig.log = console.log.bind ? console.log.bind(console) : console.log, ig.assert = console.assert.bind ? console.assert.bind(console) : console.assert);
            ig.show = this.showNumber.bind(this)
        },
        addNumber: function(b) {
            var c = ig.$new("span");
            this.numberContainer.appendChild(c);
            this.numberContainer.appendChild(document.createTextNode(b));
            this.numbers[b] = c
        },
        showNumber: function(b, c, d) {
            this.numbers[b] || this.addNumber(b, d);
            this.numbers[b].textContent = c
        },
        addPanel: function(b) {
            var c = new b.type(b.name, b.label);
            if (b.options)
                for (var d = 0; d < b.options.length; d++) {
                    var f = b.options[d];
                    c.addOption(new ig.DebugOption(f.name, f.object, f.property))
                }
            this.panels[c.name] = c;
            c.container.style.display = "none";
            this.container.appendChild(c.container);
            b = ig.$new("div");
            b.className = "ig_debug_menu_item";
            b.textContent = c.label;
            b.addEventListener("click", function() {
                this.togglePanel(c)
            }.bind(this), !1);
            c.menuItem = b;
            f = !1;
            for (d = 1; d < this.panelMenu.childNodes.length; d++) {
                var g = this.panelMenu.childNodes[d];
                if (g.textContent > c.label) {
                    this.panelMenu.insertBefore(b, g);
                    f = !0;
                    break
                }
            }
            f || this.panelMenu.appendChild(b)
        },
        showPanel: function(b) {
            this.togglePanel(this.panels[b])
        },
        togglePanel: function(b) {
            b != this.activePanel && this.activePanel && (this.activePanel.toggle(!1), this.activePanel.menuItem.className = "ig_debug_menu_item", this.activePanel = null);
            var c = "block" != b.container.style.display;
            b.toggle(c);
            b.menuItem.className = "ig_debug_menu_item" + (c ? " active" : "");
            c && (this.activePanel = b)
        },
        ready: function() {
            for (var b in this.panels)
                this.panels[b].ready()
        },
        beforeRun: function() {
            var b = Date.now();
            this.debugTickAvg = 0.8 * this.debugTickAvg + 0.2 * (b - this.debugRealTime);
            this.debugRealTime = b;
            this.activePanel && this.activePanel.beforeRun()
        },
        afterRun: function() {
            var b = Date.now() - this.debugRealTime;
            this.debugTime = 0.8 * this.debugTime + 0.2 * b;
            this.activePanel && this.activePanel.afterRun();
            this.showNumber("ms", this.debugTime.toFixed(2));
            this.showNumber("fps", Math.round(1E3 / this.debugTickAvg));
            this.showNumber("draws", ig.Image.drawCount);
            ig.game && ig.game.entities && this.showNumber("entities", ig.game.entities.length);
            ig.Image.drawCount = 0
        }
    });
    ig.DebugPanel = ig.Class.extend({
        active: !1,
        container: null,
        options: [],
        panels: [],
        label: "",
        name: "",
        init: function(b, c) {
            this.name = b;
            this.label = c;
            this.container = ig.$new("div");
            this.container.className = "ig_debug_panel " + this.name
        },
        toggle: function(b) {
            this.active = b;
            this.container.style.display = b ? "block" : "none"
        },
        addPanel: function(b) {
            this.panels.push(b);
            this.container.appendChild(b.container)
        },
        addOption: function(b) {
            this.options.push(b);
            this.container.appendChild(b.container)
        },
        ready: function() {},
        beforeRun: function() {},
        afterRun: function() {}
    });
    ig.DebugOption = ig.Class.extend({
        name: "",
        labelName: "",
        className: "ig_debug_option",
        label: null,
        mark: null,
        container: null,
        active: !1,
        colors: {
            enabled: "#fff",
            disabled: "#444"
        },
        init: function(b, c, d) {
            this.name = b;
            this.object = c;
            this.property = d;
            this.active = this.object[this.property];
            this.container = ig.$new("div");
            this.container.className = "ig_debug_option";
            this.label = ig.$new("span");
            this.label.className = "ig_debug_label";
            this.label.textContent = this.name;
            this.mark = ig.$new("span");
            this.mark.className = "ig_debug_label_mark";
            this.container.appendChild(this.mark);
            this.container.appendChild(this.label);
            this.container.addEventListener("click", this.click.bind(this), !1);
            this.setLabel()
        },
        setLabel: function() {
            this.mark.style.backgroundColor = this.active ? this.colors.enabled : this.colors.disabled
        },
        click: function(b) {
            this.active = !this.active;
            this.object[this.property] = this.active;
            this.setLabel();
            b.stopPropagation();
            b.preventDefault();
            return !1
        }
    });
    ig.debug = new ig.Debug
});
ig.baked = !0;
ig.module("impact.debug.entities-panel").requires("impact.debug.menu", "impact.entity").defines(function() {
    ig.Entity.inject({
        colors: {
            names: "#fff",
            velocities: "#0f0",
            boxes: "#f00"
        },
        draw: function() {
            this.parent();
            ig.Entity._debugShowBoxes && (ig.system.context.strokeStyle = this.colors.boxes, ig.system.context.lineWidth = 1, ig.system.context.strokeRect(ig.system.getDrawPos(this.pos.x.round() - ig.game.screen.x) - 0.5, ig.system.getDrawPos(this.pos.y.round() - ig.game.screen.y) - 0.5, this.size.x * ig.system.scale, this.size.y * ig.system.scale));
            if (ig.Entity._debugShowVelocities) {
                var b = this.pos.x + this.size.x / 2,
                    c = this.pos.y + this.size.y / 2;
                this._debugDrawLine(this.colors.velocities, b, c, b + this.vel.x, c + this.vel.y)
            }
            if (ig.Entity._debugShowNames && (this.name && (ig.system.context.fillStyle = this.colors.names, ig.system.context.fillText(this.name, ig.system.getDrawPos(this.pos.x - ig.game.screen.x), ig.system.getDrawPos(this.pos.y - ig.game.screen.y))), "object" == typeof this.target))
                for (var d in this.target)
                    (b = ig.game.getEntityByName(this.target[d])) && this._debugDrawLine(this.colors.names, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, b.pos.x + b.size.x / 2, b.pos.y + b.size.y / 2)
        },
        _debugDrawLine: function(b, c, d, f, g) {
            ig.system.context.strokeStyle = b;
            ig.system.context.lineWidth = 1;
            ig.system.context.beginPath();
            ig.system.context.moveTo(ig.system.getDrawPos(c - ig.game.screen.x), ig.system.getDrawPos(d - ig.game.screen.y));
            ig.system.context.lineTo(ig.system.getDrawPos(f - ig.game.screen.x), ig.system.getDrawPos(g - ig.game.screen.y));
            ig.system.context.stroke();
            ig.system.context.closePath()
        }
    });
    ig.Entity._debugEnableChecks = !0;
    ig.Entity._debugShowBoxes = !1;
    ig.Entity._debugShowVelocities = !1;
    ig.Entity._debugShowNames = !1;
    ig.Entity.oldCheckPair = ig.Entity.checkPair;
    ig.Entity.checkPair = function(b, c) {
        ig.Entity._debugEnableChecks && ig.Entity.oldCheckPair(b, c)
    };
    ig.debug.addPanel({
        type: ig.DebugPanel,
        name: "entities",
        label: "Entities",
        options: [{
            name: "Checks & Collisions",
            object: ig.Entity,
            property: "_debugEnableChecks"
        }, {
            name: "Show Collision Boxes",
            object: ig.Entity,
            property: "_debugShowBoxes"
        }, {
            name: "Show Velocities",
            object: ig.Entity,
            property: "_debugShowVelocities"
        }, {
            name: "Show Names & Targets",
            object: ig.Entity,
            property: "_debugShowNames"
        }]
    })
});
ig.baked = !0;
ig.module("impact.debug.maps-panel").requires("impact.debug.menu", "impact.game", "impact.background-map").defines(function() {
    ig.Game.inject({
        loadLevel: function(b) {
            this.parent(b);
            ig.debug.panels.maps.load(this)
        }
    });
    ig.DebugMapsPanel = ig.DebugPanel.extend({
        maps: [],
        mapScreens: [],
        init: function(b, c) {
            this.parent(b, c);
            this.load()
        },
        load: function(b) {
            this.options = [];
            this.panels = [];
            if (!b || !b.backgroundMaps.length)
                this.container.innerHTML = "<em>No Maps Loaded</em>";
            else {
                this.maps = b.backgroundMaps;
                this.mapScreens = [];
                this.container.innerHTML = "";
                for (b = 0; b < this.maps.length; b++) {
                    var c = this.maps[b],
                        d = new ig.DebugPanel(b, "Layer " + b),
                        f = new ig.$new("strong");
                    f.textContent = b + ": " + c.tiles.path;
                    d.container.appendChild(f);
                    d.addOption(new ig.DebugOption("Enabled", c, "enabled"));
                    d.addOption(new ig.DebugOption("Pre Rendered", c, "preRender"));
                    d.addOption(new ig.DebugOption("Show Chunks", c, "debugChunks"));
                    this.generateMiniMap(d, c, b);
                    this.addPanel(d)
                }
            }
        },
        generateMiniMap: function(b, c, d) {
            var f = ig.system.scale,
                g = ig.$new("canvas"),
                m = g.getContext("2d"),
                u = c.tiles.width * f,
                A = c.tiles.height * f,
                q = u / c.tilesize;
            m.drawImage(c.tiles.data, 0, 0, u, A, 0, 0, q, A / c.tilesize);
            m = ig.$new("canvas");
            m.width = c.width * f;
            m.height = c.height * f;
            var x = m.getContext("2d");
            ig.game.clearColor && (x.fillStyle = ig.game.clearColor, x.fillRect(0, 0, u, A));
            for (A = u = 0; A < c.width; A++)
                for (var z = 0; z < c.height; z++)
                    (u = c.data[z][A]) && x.drawImage(g, Math.floor((u - 1) * f % q), Math.floor((u - 1) * f / q) * f, f, f, A * f, z * f, f, f);
            g = ig.$new("div");
            g.className = "ig_debug_map_container";
            g.style.width = c.width * f + "px";
            g.style.height = c.height * f + "px";
            q = ig.$new("div");
            q.className = "ig_debug_map_screen";
            q.style.width = ig.system.width / c.tilesize * f - 2 + "px";
            q.style.height = ig.system.height / c.tilesize * f - 2 + "px";
            this.mapScreens[d] = q;
            g.appendChild(m);
            g.appendChild(q);
            b.container.appendChild(g)
        },
        afterRun: function() {
            for (var b = ig.system.scale, c = 0; c < this.maps.length; c++) {
                var d = this.maps[c],
                    f = this.mapScreens[c];
                if (d && f) {
                    var g = d.scroll.x / d.tilesize,
                        m = d.scroll.y / d.tilesize;
                    d.repeat && (g %= d.width, m %= d.height);
                    f.style.left = g * b +
                    "px";
                    f.style.top = m * b + "px"
                }
            }
        }
    });
    ig.debug.addPanel({
        type: ig.DebugMapsPanel,
        name: "maps",
        label: "Background Maps"
    })
});
ig.baked = !0;
ig.module("impact.debug.graph-panel").requires("impact.debug.menu", "impact.system", "impact.game", "impact.image").defines(function() {
    ig.Game.inject({
        draw: function() {
            ig.graph.beginClock("draw");
            this.parent();
            ig.graph.endClock("draw")
        },
        update: function() {
            ig.graph.beginClock("update");
            this.parent();
            ig.graph.endClock("update")
        },
        checkEntities: function() {
            ig.graph.beginClock("checks");
            this.parent();
            ig.graph.endClock("checks")
        }
    });
    ig.DebugGraphPanel = ig.DebugPanel.extend({
        clocks: {},
        marks: [],
        textY: 0,
        height: 128,
        ms: 64,
        timeBeforeRun: 0,
        init: function(b, c) {
            this.parent(b, c);
            this.mark16ms = (this.height - 16 * (this.height / this.ms)).round();
            this.mark33ms = (this.height - 33 * (this.height / this.ms)).round();
            this.msHeight = this.height / this.ms;
            this.graph = ig.$new("canvas");
            this.graph.width = window.innerWidth;
            this.graph.height = this.height;
            this.container.appendChild(this.graph);
            this.ctx = this.graph.getContext("2d");
            this.ctx.fillStyle = "#444";
            this.ctx.fillRect(0, this.mark16ms, this.graph.width, 1);
            this.ctx.fillRect(0, this.mark33ms, this.graph.width, 1);
            this.addGraphMark("16ms", this.mark16ms);
            this.addGraphMark("33ms", this.mark33ms);
            this.addClock("draw", "Draw", "#13baff");
            this.addClock("update", "Entity Update", "#bb0fff");
            this.addClock("checks", "Entity Checks & Collisions", "#a2e908");
            this.addClock("lag", "System Lag", "#f26900");
            ig.mark = this.mark.bind(this);
            ig.graph = this
        },
        addGraphMark: function(b, c) {
            var d = ig.$new("span");
            d.className = "ig_debug_graph_mark";
            d.textContent = b;
            d.style.top = c.round() + "px";
            this.container.appendChild(d)
        },
        addClock: function(b, c, d) {
            var f = ig.$new("span");
            f.className = "ig_debug_legend_color";
            f.style.backgroundColor = d;
            var g = ig.$new("span");
            g.className = "ig_debug_legend_number";
            g.appendChild(document.createTextNode("0"));
            var m = ig.$new("span");
            m.className = "ig_debug_legend";
            m.appendChild(f);
            m.appendChild(document.createTextNode(c + " ("));
            m.appendChild(g);
            m.appendChild(document.createTextNode("ms)"));
            this.container.appendChild(m);
            this.clocks[b] = {
                description: c,
                color: d,
                current: 0,
                start: Date.now(),
                avg: 0,
                html: g
            }
        },
        beginClock: function(b, c) {
            this.clocks[b].start = Date.now() + (c || 0)
        },
        endClock: function(b) {
            b = this.clocks[b];
            b.current = Math.round(Date.now() - b.start);
            b.avg = 0.8 * b.avg + 0.2 * b.current
        },
        mark: function(b, c) {
            this.active && this.marks.push({
                msg: b,
                color: c || "#fff"
            })
        },
        beforeRun: function() {
            this.endClock("lag");
            this.timeBeforeRun = Date.now()
        },
        afterRun: function() {
            var b = Date.now() - this.timeBeforeRun;
            this.beginClock("lag", Math.max(1E3 / ig.system.fps - b, 0));
            var b = this.graph.width - 1,
                c = this.height;
            this.ctx.drawImage(this.graph, -1, 0);
            this.ctx.fillStyle = "#000";
            this.ctx.fillRect(b, 0, 1, this.height);
            this.ctx.fillStyle = "#444";
            this.ctx.fillRect(b, this.mark16ms, 1, 1);
            this.ctx.fillStyle = "#444";
            this.ctx.fillRect(b, this.mark33ms, 1, 1);
            for (var d in this.clocks) {
                var f = this.clocks[d];
                f.html.textContent = f.avg.toFixed(2);
                if (f.color && 0 < f.current) {
                    this.ctx.fillStyle = f.color;
                    var g = f.current * this.msHeight,
                        c = c - g;
                    this.ctx.fillRect(b, c, 1, g);
                    f.current = 0
                }
            }
            this.ctx.textAlign = "right";
            this.ctx.textBaseline = "top";
            this.ctx.globalAlpha = 0.5;
            for (d = 0; d < this.marks.length; d++)
                c = this.marks[d],
                this.ctx.fillStyle = c.color,
                this.ctx.fillRect(b, 0, 1, this.height),
                c.msg && (this.ctx.fillText(c.msg, b - 1, this.textY), this.textY = (this.textY + 8) % 32);
            this.ctx.globalAlpha = 1;
            this.marks = []
        }
    });
    ig.debug.addPanel({
        type: ig.DebugGraphPanel,
        name: "graph",
        label: "Performance"
    })
});
ig.baked = !0;
ig.module("impact.debug.debug").requires("impact.debug.entities-panel", "impact.debug.maps-panel", "impact.debug.graph-panel").defines(function() {});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function() {
    ig.SplashLoader = ig.Loader.extend({
        splash: new ig.Image("media/graphics/splash/bg-loader.jpg"),
        loader: new ig.Image("media/graphics/splash/loader.jpg"),
        init: function(b, c) {
            this.parent(b, c);
            ig.ua.mobile && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize()
        },
        end: function() {
            this.parent();
            var b = 0 <= document.URL.indexOf("localhost") ? 500 : 3E3;
            window.setTimeout("ig.system.setGame(MyGame)", b)
        },
        setupCustomAnimation: function() {
            this.customAnim = new ig.Animation(this.customAnim, 0.05, [0, 1, 2, 3, 4, 5]);
            this.customAnim.currentFrame = 0;
            ig.loadingScreen = this;
            ig.loadingScreen.animationTimer = window.setInterval("ig.loadingScreen.animate()", 100)
        },
        animate: function() {
            this.customAnim.currentFrame < this.customAnim.sequence.length ? this.customAnim.currentFrame++ : this.customAnim.currentFrame = 0;
            this.customAnim.gotoFrame(this.customAnim.currentFrame)
        },
        draw: function() {
            ig.system.context.font = "35px LuckiestGuy";
            ig.system.context.fillText("test", -50, -50);
            this._drawStatus += (this.status - this._drawStatus) / 5;
            var b = ig.system.context;
            ig.system.context.fillStyle = "#000";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            this.splash.draw(0, 0);
            b.drawImage(this.loader.data, 112, 585, this.loader.width * this._drawStatus, this.loader.height);
            b.font = "35px LuckiestGuy";
            b.fillStyle = "#ABFF20";
            b.strokeStyle = "#ABFF20";
            b.textAlign = "right";
            b.textBaseline = "top";
            b.fillText(Math.ceil(100 * this._drawStatus) + "%", 285, 590)
        }
    })
});
ig.baked = !0;
ig.module("plugins.tween").requires("impact.entity").defines(function() {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(b) {
        for (var c = 0; c < this.length; ++c)
            if (this[c] === b)
                return c;
        return -1
    });
    ig.Entity.prototype.tweens = [];
    ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
    ig.Entity.prototype.update = function() {
        this._preTweenUpdate();
        if (0 < this.tweens.length) {
            for (var b = [], c = 0; c < this.tweens.length; c++)
                this.tweens[c].update(),
                this.tweens[c].complete || b.push(this.tweens[c]);
            this.tweens = b
        }
    };
    ig.Entity.prototype.tween = function(b, c, d) {
        b = new ig.Tween(this, b, c, d);
        this.tweens.push(b);
        return b
    };
    ig.Entity.prototype.pauseTweens = function() {
        for (var b = 0; b < this.tweens.length; b++)
            this.tweens[b].pause()
    };
    ig.Entity.prototype.resumeTweens = function() {
        for (var b = 0; b < this.tweens.length; b++)
            this.tweens[b].resume()
    };
    ig.Entity.prototype.stopTweens = function(b) {
        for (var c = 0; c < this.tweens.length; c++)
            this.tweens[c].stop(b)
    };
    ig.Tween = function(b, c, d, f) {
        var g = {},
            m = {},
            u = {},
            A = 0,
            q = !1,
            x = !1,
            z = !1;
        this.obj = b;
        this.duration = d;
        this.paused = this.complete = !1;
        this.easing = ig.Tween.Easing.Linear.EaseNone;
        this.onComplete = !1;
        this.loop = this.delay = 0;
        this.loopCount = -1;
        ig.merge(this, f);
        this.loopNum = this.loopCount;
        this.chain = function(b) {
            z = b
        };
        this.initEnd = function(b, c, d) {
            if ("object" !== typeof c[b])
                d[b] = c[b];
            else
                for (subprop in c[b])
                    d[b] || (d[b] = {}),
                    this.initEnd(subprop, c[b], d[b])
        };
        this.initStart = function(b, c, d, f) {
            if ("object" !== typeof d[b])
                "undefined" !== typeof c[b] && (f[b] = d[b]);
            else
                for (subprop in d[b])
                    f[b] || (f[b] = {}),
                    "undefined" !== typeof c[b] && this.initStart(subprop, c[b], d[b], f[b])
        };
        this.start = function() {
            this.paused = this.complete = !1;
            this.loopNum = this.loopCount;
            A = 0;
            -1 == b.tweens.indexOf(this) && b.tweens.push(this);
            x = !0;
            q = new ig.Timer;
            for (var d in c)
                this.initEnd(d, c, m);
            for (d in m)
                this.initStart(d, m, b, g),
                this.initDelta(d, u, b, m)
        };
        this.initDelta = function(b, c, d, f) {
            if ("object" !== typeof f[b])
                c[b] = f[b] - d[b];
            else
                for (subprop in f[b])
                    c[b] || (c[b] = {}),
                    this.initDelta(subprop, c[b], d[b], f[b])
        };
        this.propUpdate = function(b, c, d, f, g) {
            if ("object" !== typeof d[b])
                c[b] = "undefined" != typeof d[b] ? d[b] + f[b] * g : c[b];
            else
                for (subprop in d[b])
                    this.propUpdate(subprop, c[b], d[b], f[b], g)
        };
        this.propSet = function(b, c, d) {
            if ("object" !== typeof c[b])
                d[b] = c[b];
            else
                for (subprop in c[b])
                    d[b] || (d[b] = {}),
                    this.propSet(subprop, c[b], d[b])
        };
        this.update = function() {
            if (!x)
                return !1;
            if (this.delay) {
                if (q.delta() < this.delay)
                    return;
                this.delay = 0;
                q.reset()
            }
            if (this.paused || this.complete)
                return !1;
            var c = (q.delta() + A) / this.duration,
                c = 1 < c ? 1 : c,
                d = this.easing(c);
            for (property in u)
                this.propUpdate(property, b, g, u, d);
            if (1 <= c) {
                if (0 == this.loopNum || !this.loop) {
                    this.complete = !0;
                    if (this.onComplete)
                        this.onComplete();
                    z && z.start();
                    return !1
                }
                if (this.loop == ig.Tween.Loop.Revert) {
                    for (property in g)
                        this.propSet(property, g, b);
                    A = 0;
                    q.reset();
                    -1 != this.loopNum && this.loopNum--
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                    c = {};
                    d = {};
                    ig.merge(c, m);
                    ig.merge(d, g);
                    ig.merge(g, c);
                    ig.merge(m, d);
                    for (property in m)
                        this.initDelta(property, u, b, m);
                    A = 0;
                    q.reset();
                    -1 != this.loopNum && this.loopNum--
                }
            }
        };
        this.pause = function() {
            this.paused = !0;
            A += q.delta()
        };
        this.resume = function() {
            this.paused = !1;
            q.reset()
        };
        this.stop = function(b) {
            b && (this.loop = this.complete = this.paused = !1, A += d, this.update());
            this.complete = !0
        }
    };
    ig.Tween.Loop = {
        Revert: 1,
        Reverse: 2
    };
    ig.Tween.Easing = {
        Linear: {},
        Quadratic: {},
        Cubic: {},
        Quartic: {},
        Quintic: {},
        Sinusoidal: {},
        Exponential: {},
        Circular: {},
        Elastic: {},
        Back: {},
        Bounce: {}
    };
    ig.Tween.Easing.Linear.EaseNone = function(b) {
        return b
    };
    ig.Tween.Easing.Quadratic.EaseIn = function(b) {
        return b * b
    };
    ig.Tween.Easing.Quadratic.EaseOut = function(b) {
        return -b * (b - 2)
    };
    ig.Tween.Easing.Quadratic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b : -0.5 * (--b * (b - 2) - 1)
    };
    ig.Tween.Easing.Cubic.EaseIn = function(b) {
        return b * b * b
    };
    ig.Tween.Easing.Cubic.EaseOut = function(b) {
        return --b * b * b + 1
    };
    ig.Tween.Easing.Cubic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b : 0.5 * ((b -= 2) * b * b + 2)
    };
    ig.Tween.Easing.Quartic.EaseIn = function(b) {
        return b * b * b * b
    };
    ig.Tween.Easing.Quartic.EaseOut = function(b) {
        return -(--b * b * b * b - 1)
    };
    ig.Tween.Easing.Quartic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b : -0.5 * ((b -= 2) * b * b * b - 2)
    };
    ig.Tween.Easing.Quintic.EaseIn = function(b) {
        return b * b * b * b * b
    };
    ig.Tween.Easing.Quintic.EaseOut = function(b) {
        return (b -= 1) * b * b * b * b + 1
    };
    ig.Tween.Easing.Quintic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b * b : 0.5 * ((b -= 2) * b * b * b * b + 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseIn = function(b) {
        return -Math.cos(b * Math.PI / 2) + 1
    };
    ig.Tween.Easing.Sinusoidal.EaseOut = function(b) {
        return Math.sin(b * Math.PI / 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseInOut = function(b) {
        return -0.5 * (Math.cos(Math.PI * b) - 1)
    };
    ig.Tween.Easing.Exponential.EaseIn = function(b) {
        return 0 == b ? 0 : Math.pow(2, 10 * (b - 1))
    };
    ig.Tween.Easing.Exponential.EaseOut = function(b) {
        return 1 == b ? 1 : -Math.pow(2, -10 * b) + 1
    };
    ig.Tween.Easing.Exponential.EaseInOut = function(b) {
        return 0 == b ? 0 : 1 == b ? 1 : 1 > (b *= 2) ? 0.5 * Math.pow(2, 10 * (b - 1)) : 0.5 * (-Math.pow(2, -10 * (b - 1)) + 2)
    };
    ig.Tween.Easing.Circular.EaseIn = function(b) {
        return -(Math.sqrt(1 - b * b) - 1)
    };
    ig.Tween.Easing.Circular.EaseOut = function(b) {
        return Math.sqrt(1 - --b * b)
    };
    ig.Tween.Easing.Circular.EaseInOut = function(b) {
        return 1 > (b /= 0.5) ? -0.5 * (Math.sqrt(1 - b * b) -
        1) : 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1)
    };
    ig.Tween.Easing.Elastic.EaseIn = function(b) {
        var c,
            d = 0.1,
            f = 0.4;
        if (0 == b)
            return 0;
        if (1 == b)
            return 1;
        f || (f = 0.3);
        !d || 1 > d ? (d = 1, c = f / 4) : c = f / (2 * Math.PI) * Math.asin(1 / d);
        return -(d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / f))
    };
    ig.Tween.Easing.Elastic.EaseOut = function(b) {
        var c,
            d = 0.1,
            f = 0.4;
        if (0 == b)
            return 0;
        if (1 == b)
            return 1;
        f || (f = 0.3);
        !d || 1 > d ? (d = 1, c = f / 4) : c = f / (2 * Math.PI) * Math.asin(1 / d);
        return d * Math.pow(2, -10 * b) * Math.sin(2 * (b - c) * Math.PI / f) + 1
    };
    ig.Tween.Easing.Elastic.EaseInOut = function(b) {
        var c,
            d = 0.1,
            f = 0.4;
        if (0 == b)
            return 0;
        if (1 == b)
            return 1;
        f || (f = 0.3);
        !d || 1 > d ? (d = 1, c = f / 4) : c = f / (2 * Math.PI) * Math.asin(1 / d);
        return 1 > (b *= 2) ? -0.5 * d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / f) : 0.5 * d * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / f) + 1
    };
    ig.Tween.Easing.Back.EaseIn = function(b) {
        return b * b * (2.70158 * b - 1.70158)
    };
    ig.Tween.Easing.Back.EaseOut = function(b) {
        return (b -= 1) * b * (2.70158 * b + 1.70158) + 1
    };
    ig.Tween.Easing.Back.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * (3.5949095 * b - 2.5949095) : 0.5 * ((b -= 2) * b * (3.5949095 * b + 2.5949095) + 2)
    };
    ig.Tween.Easing.Bounce.EaseIn = function(b) {
        return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - b)
    };
    ig.Tween.Easing.Bounce.EaseOut = function(b) {
        return (b /= 1) < 1 / 2.75 ? 7.5625 * b * b : b < 2 / 2.75 ? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75 : b < 2.5 / 2.75 ? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375 : 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375
    };
    ig.Tween.Easing.Bounce.EaseInOut = function(b) {
        return 0.5 > b ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * b) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * b - 1) + 0.5
    }
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function() {
    ig.UrlParameters = ig.Class.extend({
        init: function() {
            switch (getQueryVariable("iphone")) {
            case "true":
                ig.ua.iPhone = !0,
                console.log("iPhone mode")
            }
            var b = getQueryVariable("webview");
            if (b)
                switch (b) {
                case "true":
                    ig.ua.is_uiwebview = !0,
                    console.log("webview mode")
                }
            if (b = getQueryVariable("debug"))
                switch (b) {
                case "true":
                    ig.game.showDebugMenu(),
                    console.log("debug mode")
                }
            switch (getQueryVariable("view")) {
            case "stats":
                ig.game.resetPlayerStats(),
                ig.game.endGame()
            }
            getQueryVariable("ad")
        }
    })
});
ig.baked = !0;
ig.module("plugins.jukebox").defines(function() {
    ig.Jukebox = ig.Class.extend({
        init: function() {
            this.player = new jukebox.Player({
                resources: ["media/audio/bgm-m.mp3", "media/audio/bgm-m.ogg"],
                autoplay: "music",
                spritemap: {
                    music: {
                        start: 0,
                        end: 10.71,
                        loop: !0
                    }
                }
            })
        }
    })
});
ig.baked = !0;
ig.module("plugins.director").requires("impact.impact").defines(function() {
    ig.Director = ig.Class.extend({
        init: function(b, c) {
            this.game = b;
            this.levels = [];
            this.currentLevel = 0;
            this.append(c)
        },
        loadLevel: function(b) {
            this.currentLevel = b;
            this.game.loadLevel(this.levels[b]);
            return !0
        },
        loadLevelWithoutEntities: function(b) {
            this.currentLevel = b;
            this.game.loadLevelWithoutEntities(this.levels[b]);
            return !0
        },
        append: function(b) {
            newLevels = [];
            return "object" === typeof b ? (b.constructor === [].constructor ? newLevels = b : newLevels[0] = b, this.levels = this.levels.concat(newLevels), !0) : !1
        },
        nextLevel: function() {
            if (this.currentLevel + 1 < this.levels.length) {
                for (key in dynamicClickableEntityDivs)
                    ig.game.hideOverlay([key]);
                return this.loadLevel(this.currentLevel + 1)
            }
            return !1
        },
        previousLevel: function() {
            return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
        },
        jumpTo: function(b) {
            var c = null;
            for (i = 0; i < this.levels.length; i++)
                this.levels[i] == b && (c = i);
            return 0 <= c ? this.loadLevel(c) : !1
        },
        firstLevel: function() {
            return this.loadLevel(0)
        },
        lastLevel: function() {
            return this.loadLevel(this.levels.length -
            1)
        },
        reloadLevel: function() {
            return this.loadLevel(this.currentLevel)
        }
    })
});
ig.baked = !0;
ig.module("plugins.impact-storage").requires("impact.game").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        get: function(b) {
            if (!this.isCapable())
                return null;
            try {
                return JSON.parse(localStorage.getItem(b))
            } catch (c) {
                return window.localStorage.getItem(b)
            }
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        key: function(b) {
            return this.isCapable() ? window.localStorage.key(b) : null
        },
        set: function(b, c) {
            if (!this.isCapable())
                return null;
            try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch (d) {
                d == QUOTA_EXCEEDED_ERR && console.log("localStorage quota exceeded")
            }
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        remove: function(b) {
            if (!this.isCapable())
                return null;
            window.localStorage.removeItem(b)
        },
        clear: function() {
            if (!this.isCapable())
                return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("plugins.wordWrap").defines(function() {
    ig.WordWrap = ig.Class.extend({
        text: "",
        maxWidth: 100,
        cut: !1,
        init: function(b, c, d) {
            this.text = b;
            this.maxWidth = c;
            this.cut = d
        },
        wrap: function() {
            return this.text.match(RegExp(".{1," + this.maxWidth + "}(\\s|$)" + (this.cut ? "|.{" + this.maxWidth + "}|.+$" : "|\\S+?(\\s|$)"), "g")).join("\n")
        }
    })
});
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function() {
    ig.BrandingSplash = ig.Class.extend({
        init: function() {
            ig.game.spawnEntity(EntityBranding, 0, 0)
        }
    });
    EntityBranding = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        splash_320x480: new ig.AnimationSheet("branding/splash_320x480.png", 320, 267),
        splash_480x640: new ig.AnimationSheet("branding/splash_480x640.png", 480, 400),
        init: function(b, c, d) {
            this.parent(b, c, d);
            320 >= ig.system.width ? (this.size.x = 320, this.size.y = 267, this.anims.idle = new ig.Animation(this.splash_320x480, 0, [0], !0)) : (this.size.x = 480, this.size.y = 400, this.anims.idle = new ig.Animation(this.splash_480x640, 0, [0], !0));
            this.pos.x = (ig.system.width - this.size.x) / 2;
            this.pos.y = -this.size.y - 200;
            this.endPosY = (ig.system.height - this.size.y) / 2;
            b = this.tween({
                pos: {
                    y: this.endPosY
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Bounce.EaseIn
            });
            c = this.tween({}, 2, {
                onComplete: function() {
                    ig.game.director.loadLevel(ig.game.director.currentLevel)
                }
            });
            b.chain(c);
            b.start();
            this.currentAnim = this.anims.idle
        },
        draw: function() {
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            this.parent()
        }
    })
});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity").defines(function() {
    EntityBrandingLogoPlaceholder = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        init: function(b, c, d) {
            this.parent(b, c, d);
            if ("undefined" == typeof wm) {
                if (_SETTINGS.Branding.Logo.Enabled)
                    try {
                        ig.game.spawnEntity(EntityBrandingLogo, this.pos.x, this.pos.y)
                    } catch (f) {
                        console.log(f)
                    }
                this.kill()
            }
        }
    })
});
this.START_BRANDING_LOGO;
ig.baked = !0;
ig.module("game.entities.branding-logo").requires("impact.entity").defines(function() {
    EntityBrandingLogo = ig.Entity.extend({
        gravityFactor: 0,
        logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        size: {
            x: 32,
            y: 32
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (_SETTINGS.Branding.Logo.Enabled ? (this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, this.pos.x = ig.system.width / 2 - this.size.x / 2) : this.kill());
            this.anims.idle = new ig.Animation(this.logo, 0, [0], !0);
            this.currentAnim = this.anims.idle;
            this.checkClickableLayer("branding-logo", _SETTINGS.Branding.Logo.Link, !0)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b)
                    return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "branding/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, f) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var m = window.innerHeight / mobileHeight,
                    u = window.innerWidth / mobileWidth;
                $("#" + g.id).css("left", this.pos.x * u);
                $("#" + g.id).css("top", this.pos.y * m);
                $("#" + g.id).css("width", this.size.x * u);
                $("#" + g.id).css("height", this.size.y * m)
            } else
                m = w / 2 - destW / 2,
                u = h / 2 - destH / 2,
                console.log(m, u),
                $("#" + g.id).css("left", m + this.pos.x * multiplier),
                $("#" + g.id).css("top", u + this.pos.y * multiplier),
                $("#" + g.id).css("width", this.size.x * multiplier),
                $("#" + g.id).css("height", this.size.y * multiplier);
            f ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
this.END_BRANDING_LOGO;
ig.baked = !0;
ig.module("game.entities.button-more-games").requires("impact.entity").defines(function() {
    EntityButtonMoreGames = ig.Entity.extend({
        gravityFactor: 0,
        logo: new ig.AnimationSheet("media/graphics/sprites/btn_more_games.png", 0, 0),
        size: {
            x: 0,
            y: 0
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (_SETTINGS.MoreGames.Enabled ? this.checkClickableLayer("more-games", _SETTINGS.MoreGames.Link, !0) : this.kill());
            this.anims.idle = new ig.Animation(this.logo, 0, [0], !0);
            this.currentAnim = this.anims.idle
        },
        kill: function() {
            document.getElementById("more-games").style.display = "none";
            this.parent()
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b)
                    return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, f) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("position", "absolute");
            if (true) {
                var m = window.innerHeight / mobileHeight,
                    u = window.innerWidth / mobileWidth;
                $("#" + g.id).css("left", this.pos.x * u);
                $("#" + g.id).css("top", this.pos.y * m);
                $("#" + g.id).css("width", this.size.x * u);
                $("#" + g.id).css("height", this.size.y * m)
            } else
                m = w / 2 - destW / 2,
                u = h / 2 - destH / 2,
                $("#" + g.id).css("left", m + this.pos.x * multiplier),
                $("#" + g.id).css("top", u + this.pos.y * multiplier),
                $("#" + g.id).css("width", this.size.x * multiplier),
                $("#" + g.id).css("height", this.size.y * multiplier);
            f ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening").requires("impact.entity").defines(function() {
    EntityOpening = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        kittyAnim: -1,
        kittyImage: new ig.Image("media/graphics/opening/kitty.png"),
        kittyTitleImage: new ig.Image("media/graphics/opening/kittytitle.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.game.openingSound.play()
                    } catch (b) {
                        console.log(b)
                    }
                } else
                    ig.game.director.nextLevel(),
                    ig.system.context.globalAlpha = 1,
                    this.kill()
        },
        update: function() {
            this.parent();
            this.updateKittyOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawKittyOpening())
        },
        updateKittyOpening: function() {
            ig.game.director.nextLevel();
        },
        drawKittyOpening: function() {
            var b = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
            b.addColorStop(0, "#ffed94");
            b.addColorStop(1, "#ffcd85");
            ig.system.context.fillStyle = b;
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            this.kittyImage.drawTile(ig.system.width / 2 - this.kittyImage.width / 8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325);
            this.kittyTitleImage.drawTile(ig.system.width / 2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37);
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer").requires("impact.entity").defines(function() {
    EntityPointer = ig.Entity.extend({
        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.B,
        isClicking: !1,
        isHovering: !1,
        firstClick: !1,
        isReleased: !1,
        hoveringItem: null,
        objectArray: [],
        ignorePause: !0,
        zIndex: 5E3,
        check: function(b) {
            this.objectArray.push(b)
        },
        clickObject: function(b) {
            this.isClicking && !this.firstClick && "function" == typeof b.clicked && (b.clicked(), this.firstClick = !0);
            this.firstClick && !this.isReleased && "function" == typeof b.clicking && b.clicking();
            this.firstClick && this.isReleased && "function" == typeof b.released && (b.released(), this.firstClick = !1)
        },
        update: function() {
            if (true) {
                var b = window.innerHeight / mobileHeight;
                this.pos.x = ig.input.mouse.x / (window.innerWidth / mobileWidth) - this.size.x / 2 + ig.game.screen.x;
                this.pos.y = ig.input.mouse.y / b - this.size.y / 2
            } else
                this.pos.x = ig.input.mouse.x / multiplier - this.size.x / 2 + ig.game.screen.x,
                this.pos.y = ig.input.mouse.y / multiplier - this.size.y / 2;
            var b = null,
                c = -1;
            for (a = this.objectArray.length - 1; -1 < a; a--)
                this.objectArray[a].zIndex > c && (c = this.objectArray[a].zIndex, b = this.objectArray[a]);
            null != b ? ("close" == b.name && console.log(b), null != this.hoveringItem && "function" == typeof this.hoveringItem.idle && this.hoveringItem != b && this.hoveringItem.idle(), this.hoveringItem = b, this.clickObject(b), this.objectArray = []) : null != this.hoveringItem && "function" == typeof this.hoveringItem.idle && (this.hoveringItem.idle(), this.hoveringItem = null);
            this.firstClick = !1;
            this.isClicking = ig.input.pressed("click");
            this.isReleased = ig.input.released("click")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function() {
    EntityPointerSelector = EntityPointer.extend({
        zIndex: 1E3,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        size: {
            x: 2,
            y: 2
        },
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        draw: function() {
            this.parent();
            if ("true" == getQueryVariable("debug")) {
                var b = Math.round(this.pos.x),
                    c = Math.round(this.pos.y);
                ig.system.context.font = "18px LuckiestGuy";
                ig.system.context.fillText(b + ", " + c, this.pos.x, this.pos.y)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.select").requires("impact.entity").defines(function() {
    EntitySelect = ig.Entity.extend({
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.NEVER,
        canSelect: !1,
        canSelectTimerDuration: 0.35,
        zIndex: 99999,
        isHovering: !1,
        isSelected: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b)
                    return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, f) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("width", this.size.x * multiplier);
            $("#" + g.id).css("height", this.size.y * multiplier);
            $("#" + g.id).css("position", "absolute");
            var m = w / 2 - destW / 2,
                u = h / 2 - destH / 2;
            w == mobileWidth ? ($("#" + g.id).css("left", this.pos.x), $("#" + g.id).css("top", this.pos.y)) : ($("#" + g.id).css("left", m + this.pos.x * multiplier), $("#" + g.id).css("top", u + this.pos.y * multiplier));
            f ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = $("#" + g.id).width();
            dynamicClickableEntityDivs[b].height = $("#" + g.id).height();
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        hovered: function() {
            this.isHovering = !0;
            this.dehoverOthers()
        },
        dehoverOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++)
                b[i] != this && (b[i].isHovering = !1)
        },
        deselectOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++)
                b[i] != this && (b[i].isSelected = !1)
        },
        update: function() {
            this.parent();
            this.canSelectTimer && 0 < this.canSelectTimer.delta() && (this.canSelect = !0, this.canSelectTimer = null)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.btn").requires("impact.entity").defines(function() {
    EntityBtn = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        _wmScalable: !1,
        reClickEnabled: !1,
        animationEnabled: !1,
        hasSpriteSheet: !1,
        ignorePause: !1,
        canSelect: !1,
        gravityFactor: 0,
        zIndex: 230,
        alpha: 1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (this.animSheet && (this.addAnim("idle", 0, [0], !0), this.addAnim("pressed", 0, [1], !0), this.hasSpriteSheet = !0), this.canSelectTimer = new ig.Timer(0.1))
        },
        clicked: function() {
            ig.game.inTutorial ? this.canClick && (this.canClick = !1, this.animationEnabled ? (this.hasSpriteSheet ? this.currentAnim = this.anims.pressed : this.animate = !0, this.animTimer = new ig.Timer(0.3)) : (this.reClickEnabled && (this.canSelectTimer = new ig.Timer(0.1)), this.clickAction())) : this.canSelect && (this.canSelect = !1, this.animationEnabled ? (this.hasSpriteSheet ? this.currentAnim = this.anims.pressed : this.animate = !0, this.animTimer = new ig.Timer(0.3)) : (this.reClickEnabled && (this.canSelectTimer = new ig.Timer(0.1)), this.clickAction()))
        },
        update: function() {
            this.parent();
            this.canSelectTimer && 0 < this.canSelectTimer.delta() && (this.canSelectTimer = null, this.canSelect = !0);
            this.animTimer && 0 < this.animTimer.delta() && (this.animTimer = null, this.hasSpriteSheet && (this.currentAnim = this.anims.idle), this.animate = !1, this.reClickEnabled && (this.canSelectTimer = new ig.Timer(0.1)), this.clickAction())
        },
        clickAction: function() {},
        draw: function() {
            this.parent();
            "undefined" == typeof wm ? this.hasSpriteSheet || (this.animate ? this.image && ig.system.context.drawImage(this.image.data, 0, 0, this.image.width, this.image.height, this.pos.x + 5, this.pos.y + 5, this.image.width - 10, this.image.height - 10) : this.image && ig.system.context.drawImage(this.image.data, 0, 0, this.image.width, this.image.height, this.pos.x + this.offset.x, this.pos.y + this.offset.y, this.image.width, this.image.height)) : this.image && this.image.draw(this.pos.x, this.pos.y + this.offset.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.btn-close").requires("game.entities.btn").defines(function() {
    EntityBtnClose = EntityBtn.extend({
        size: {
            x: 60,
            y: 60
        },
        image: new ig.Image("media/graphics/btn_cross.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.zIndex = this.mother.zIndex + 100
        },
        clickAction: function() {
            this.mother.kill()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.btn-title-collect").requires("game.entities.btn").defines(function() {
    EntityBtnTitleCollect = EntityBtn.extend({
        name: "Collect",
        size: {
            x: 270,
            y: 79
        },
        image: new ig.Image("media/graphics/title/button-collect.png"),
        animationEnabled: !0,
        reClickEnabled: !0,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        clickAction: function() {
            document.getElementById("more-games").style.display = "none";
            this.mother.spawnRewardDialog()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.title-collectCoin").requires("impact.entity", "game.entities.btn").defines(function() {
    EntityTitleCollectCoin = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        image: new ig.Image("media/graphics/title/hourRewardBG.jpg", 480, 640),
        zIndex: 600,
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.game.buttonLock = !0;
            "undefined" == typeof wm && (this.creditDisplay = ig.game.spawnEntity(EntityGameCreditDisplay, 22, 11, {
                mother: this,
                zIndex: this.zIndex + 50
            }), this.btnClose = ig.game.spawnEntity(EntityBtnClose, 380, 6, {
                mother: this
            }), this.btnCollect = ig.game.spawnEntity(EntityBtnCollectReward, 100, 417, {
                mother: this,
                zIndex: this.zIndex + 50
            }), ig.game.inCollect = !0)
        },
        kill: function() {
            this.creditDisplay.kill();
            this.btnClose.kill();
            this.btnCollect.kill();
            ig.game.buttonLock = !1;
            this.parent();
            document.getElementById("more-games").style.display = "block";
            ig.game.inCollect = !1
        },
        draw: function() {
            this.parent();
            this.image.draw(0, 0);
            this.creditDisplay.draw(0, 0);
            this.btnClose.draw(0, 0);
            this.btnCollect.draw(0, 0)
        }
    });
    EntityBtnCollectReward = EntityBtn.extend({
        size: {
            x: 208,
            y: 55
        },
        collectImage: new ig.Image("media/graphics/title/btn_getCoins.png"),
        coin: new ig.Image("media/graphics/title/coins.png", 183, 172),
        animationEnabled: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.setNextCollectionTime()
        },
        setNextCollectionTime: function() {
            this.next_collection_time = new Date((new Date(ig.game.playerStats.last_login)).getTime() + ig.game.hourlyReward);
            console.log(this.next_collection_time - new Date)
        },
        msToTime: function(b) {
            b = (b - b % 1E3) / 1E3;
            var c = b % 60;
            b = (b - c) / 60;
            var d = b % 60;
            b = (b - d) / 60;
            return (10 > b ? "0" : "") + b + ":" + ((10 > d ? "0" : "") + d) + ":" + ((10 > c ? "0" : "") + c)
        },
        clicked: function() {
            ig.game.playerStats.collectedTimely || (ig.soundHandler.playSound(ig.soundHandler.SOUNDID.pat), this.parent())
        },
        clickAction: function() {
            this.mother.mother.collectTimelyRewards();
            this.setNextCollectionTime()
        },
        draw: function() {
            this.parent();
            this.coin.draw(240 - this.coin.width / 2, 220);
            if ("undefined" == typeof wm)
                if (ig.game.playerStats.collectedTimely) {
                    this.image && (this.image = null);
                    ig.system.context.font = "bold 28px LuckiestGuy";
                    ig.system.context.fillStyle = "#2a180b";
                    ig.system.context.strokeStyle = "#2a180b";
                    ig.system.context.lineWidth = 1;
                    var b = "COME BACK TO COLLECT IN:";
                    ig.system.context.textAlign = "center";
                    ig.system.context.fillText(b, 240, this.pos.y + 2 * this.size.y / 3);
                    ig.system.context.strokeText(b, 240, this.pos.y + 2 * this.size.y / 3);
                    ig.system.context.font = "bold 40px LuckiestGuy";
                    ig.system.context.fillStyle = "#2a180b";
                    ig.system.context.strokeStyle = "#2a180b";
                    ig.system.context.lineWidth = 1;
                    b = this.msToTime(this.next_collection_time - new Date);
                    ig.system.context.fillText(b, 240, this.pos.y + 2 * this.size.y / 3 + 40)
                } else
                    this.image || (this.image = this.collectImage)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.slot").requires("impact.entity").defines(function() {
    EntitySlot = ig.Entity.extend({
        hasNotSanpped: !1,
        hasSpinned: !1,
        slot1Image: new ig.Image("media/graphics/gameplay/item_column.png"),
        slot2Image: new ig.Image("media/graphics/gameplay/item_column2.png"),
        itemPosition: [],
        center: 256,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.topY = c;
            this.numberOfItems = 24;
            this.dy = 0;
            this.sizeY = this.slot1Image.height / this.numberOfItems;
            this.size = {
                x: 120,
                y: this.numberOfItems * (this.dy + this.sizeY)
            };
            if ("undefined" == typeof wm) {
                this.items = [];
                switch (d.slotNumber) {
                case 1:
                    this.items = [8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7];
                    this.image = this.slot1Image;
                    break;
                case 2:
                    this.items = [1, 11, 6, 5, 7, 0, 4, 9, 3, 2, 8, 10, 1, 11, 6, 5, 7, 0, 4, 9, 3, 2, 8, 10];
                    this.image = this.slot2Image;
                    break;
                case 3:
                    this.items = [8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7],
                    this.image = this.slot1Image
                }
                for (i = 0; i < this.numberOfItems + 1; i++)
                    this.itemPosition.push(this.topY + (this.dy + this.sizeY) * i)
            }
        },
        snapToMid: function() {
            for (i = 0; i < this.itemPosition.length -
            1; i++)
                if (this.pos.y >= this.itemPosition[i] && this.pos.y <= this.itemPosition[i + 1]) {
                    var b = this.itemPosition[i],
                        c = this.itemPosition[i + 1];
                    break
                }
            var d = Math.abs(this.pos.y - b),
                f = Math.abs(this.pos.y - c);
            d <= f ? this.tween({
                pos: {
                    x: this.pos.x,
                    y: b
                }
            }, 0.3).start() : (this.tween({
                pos: {
                    x: this.pos.x,
                    y: c
                }
            }, 0.3).start(), i++);
            this.centerItem = this.numberOfItems - i;
            try {
                switch (this.slotNumber) {
                case 1:
                    ig.game.slot1Sound.play();
                    break;
                case 2:
                    ig.game.slot2Sound.play();
                    break;
                case 3:
                    ig.game.slot3Sound.play()
                }
            } catch (g) {
                console.log(g)
            }
        },
        getCurrentItems: function(b) {
            0 >= b ? b += 12 : 23 < b + 1 && (b -= 12);
            return [this.items[b - 1], this.items[b], this.items[b + 1]]
        },
        getItemPosition: function(b) {
            var c = [];
            for (num = 0; num < this.items.length; num++)
                b === this.items[num] && c.push(num);
            return Math.abs(this.itemPosition[c[0]] - this.center) < Math.abs(this.itemPosition[c[1]] - this.center) ? this.topY + (this.dy + this.sizeY) * c[0] : this.topY + (this.dy + this.sizeY) * c[1]
        },
        scrollD: function(b) {
            this.vel.y = 5E3;
            this.friction.y = b
        },
        update: function() {
            this.parent();
            this.partner && (this.vel.y = this.partner.vel.y);
            this.pos.y > this.itemPosition[Math.floor(this.itemPosition.length / 2)] && (this.pos.y = this.topY);
            0 >= this.vel.y && this.hasNotSanpped && this.hasSpinned && (this.hasSpinned = this.hasNotSanpped = !1, this.snapToMid())
        },
        draw: function() {
            this.parent();
            "undefined" == typeof wm && this.image.draw(this.pos.x, this.pos.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.brain-slot").requires("impact.entity").defines(function() {
    EntityBrainSlot = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        bar: new ig.Image("media/graphics/gameplay/bar.png"),
        freeSpinImage: new ig.Image("media/graphics/gameplay/freeSpin.png"),
        zIndex: 10,
        slot: [],
        checkItems: [[], [], []],
        payLines: [[1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 1, 0, 0, 0, 1, 0, 0, 0], [1, 0, 1, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 1, 1, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0, 1], [0, 1, 1, 1, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 1, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0, 1], [0, 0, 0, 1, 0, 1, 0, 1, 0], [0, 0, 0, 1, 0, 0, 0, 1, 1], [0, 0, 1, 0, 1, 0, 1, 0, 0], [0, 0, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 0, 1, 0, 1], [0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1]],
        itemPos: [[0, 0, 0], [0, 0, 1], [0, 1, 0], [0, 1, 1], [0, 1, 2], [1, 0, 0], [1, 0, 1], [1, 1, 0], [1, 1, 1], [1, 1, 2], [1, 2, 1], [1, 2, 2], [2, 1, 0], [2, 1, 1], [2, 1, 2], [2, 2, 1], [2, 2, 2]],
        numberOfSlots: 3,
        canCheck: !1,
        prize: [50, 0, 0, 100, 10, 10, 10, 10, 10, 10, 10, 10],
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (this.slot.push(ig.game.spawnEntity(EntitySlot, 58, ig.game.gameStats.slotHeight[0], {
                mother: this,
                slotNumber: 1
            })), this.slot.push(ig.game.spawnEntity(EntitySlot, 180, ig.game.gameStats.slotHeight[1], {
                mother: this,
                slotNumber: 2
            })), this.slot.push(ig.game.spawnEntity(EntitySlot, 301, ig.game.gameStats.slotHeight[2], {
                mother: this,
                slotNumber: 3
            })), ig.game.stopBackgroundMusic())
        },
        scrollSlot: function(b) {
            if (!this.isSpinning) {
                try {
                    ig.game.UFOSound.play()
                } catch (c) {
                    console.log(c)
                }
                this.isSpinning = !0;
                ig.game.gameStats.currentBet = ig.game.gameStats.betSize * ig.game.gameStats.line;
                b ? ig.game.gameStats.freeSpin-- : ig.game.playerStats.credit -= ig.game.gameStats.currentBet;
                ig.game.playerStats.exp += ig.game.gameStats.currentBet;
                for (i = 0; 3 > i; i++)
                    b = Math.floor(750 * Math.random() + 750),
                    this.slot[i].hasSpinned = !0,
                    this.slot[i].hasNotSanpped = !0,
                    this.slot[i].scrollD(b)
            }
            this.canCheck = !0
        },
        checkPattern: function() {
            this.slotArray = [];
            for (i = 0; 3 > i; i++)
                this.slotArray.push(this.slot[i].getCurrentItems(this.slot[i].centerItem));
            this.matchedItems = [];
            if (this.checkItem(this.slotArray)) {
                try {
                    ig.game.winSound.play()
                } catch (b) {
                    console.log(b)
                }
                this.endRound("win")
            } else
                this.endRound("lose")
        },
        checkItem: function(b) {
            var c = [],
                d = [];
            this.lineMatched = [];
            for (row = 0; 3 > row; row++)
                for (col = 0; 3 > col; col++)
                    d.push(b[col][row]);
            for (lineIndex = 0; lineIndex < this.payLines.length; lineIndex++) {
                this.lineMatched.push(null);
                c.push([]);
                this.itemPos.push([]);
                for (checkIndex = 0; checkIndex < this.payLines[lineIndex].length; checkIndex++)
                    1 == this.payLines[lineIndex][checkIndex] && c[lineIndex].push(d[checkIndex])
            }
            for (lineIndex = 0; lineIndex < this.payLines.length; lineIndex++) {
                b = 0 == c[lineIndex][0];
                var d = 0 == c[lineIndex][1],
                    f = 0 == c[lineIndex][2],
                    g = 1 == c[lineIndex][0],
                    m = 1 == c[lineIndex][1],
                    u = 1 == c[lineIndex][2],
                    A = 2 == c[lineIndex][0],
                    q = 2 == c[lineIndex][1],
                    x = 2 == c[lineIndex][2];
                b && d && f ? this.lineMatched[lineIndex] = 0 : !b && d && f && !g && !A ? this.lineMatched[lineIndex] = c[lineIndex][0] : b && !d && f && !m && !q ? this.lineMatched[lineIndex] = c[lineIndex][1] : b && d && !f && !u && !x ? this.lineMatched[lineIndex] = c[lineIndex][2] : b && !m && !q && !u && !x ? c[lineIndex][1] == c[lineIndex][2] && (this.lineMatched[lineIndex] = c[lineIndex][1]) : d && !g && !A && !u && !x ? c[lineIndex][0] == c[lineIndex][2] && (this.lineMatched[lineIndex] = c[lineIndex][0]) : f && !m && !q && !g && !A ? c[lineIndex][0] == c[lineIndex][1] && (this.lineMatched[lineIndex] = c[lineIndex][0]) : c[lineIndex][0] == c[lineIndex][1] && c[lineIndex][1] == c[lineIndex][2] && (this.lineMatched[lineIndex] = c[lineIndex][0])
            }
            for (0 > i; i < this.lineMatched.length; i++)
                if (null != this.lineMatched[i])
                    return !0;
            return !1
        },
        endRound: function(b) {
            switch (b) {
            case "win":
                this.playAnimation();
                this.collectMoney();
                break;
            case "lose":
                this.loseMoney()
            }
        },
        playAnimation: function() {
            this.isAnimating = !0
        },
        collectMoney: function() {
            for (i = ig.game.gameStats.win = 0; i < this.lineMatched.length; i++)
                if (null != this.lineMatched[i]) {
                    switch (this.lineMatched[i]) {
                    case 2:
                        ig.game.playerStats.bonus++;
                        break;
                    case 1:
                        ig.game.gameStats.freeSpin += 5
                    }
                    ig.game.gameStats.win += ig.game.gameStats.betSize * this.prize[this.lineMatched[i]]
                }
            ig.game.playerStats.credit += ig.game.gameStats.win;
            ig.game.playerStats.exp += Math.round(ig.game.gameStats.win);
            ig.game.submitStats();
            0 < ig.game.playerStats.bonus && ig.game.firstBonus && 0 < !ig.game.gameStats.freeSpin ? ig.game.director.jumpTo(LevelWheel) : 0 < ig.game.gameStats.freeSpin ? this.nextFreeRoundTimer = new ig.Timer(3) : this.nextRoundTimer = new ig.Timer(3);
            _SETTINGS.API.Enabled && (_SETTINGS.API.Log.Events.Level.Win && (console.log("Log events level win enabled"), this.API_LOG_EVENTS_LEVEL_WIN), _SETTINGS.API.Log.Events.Level.End && (console.log("Log events level end enabled"), this.API_LOG_EVENTS_LEVEL_END))
        },
        loseMoney: function() {
            ig.game.playerStats.jackpot += ig.game.gameStats.currentBet;
            ig.game.submitStats();
            0 < ig.game.gameStats.freeSpin ? this.nextFreeRoundTimer = new ig.Timer(0.3) : this.nextRoundTimer = new ig.Timer(0.3)
        },
        update: function() {
            this.parent();
            0 == this.slot[0].vel.y && 0 == this.slot[1].vel.y && (0 == this.slot[2].vel.y && this.canCheck) && (this.canCheck = !1, ig.game.UFOSound.stop(), this.checkPattern());
            this.nextRoundTimer && 0 < this.nextRoundTimer.delta() && (this.nextRoundTimer = null, this.isSpinning = this.isAnimating = !1);
            this.nextFreeRoundTimer && 0 < this.nextFreeRoundTimer.delta() && (this.nextFreeRoundTimer = null, this.isSpinning = this.isAnimating = !1, this.scrollSlot(!0))
        },
        randColour: function() {
            var b = ig.system.context;
            do this.randColor = Math.floor(16777215 * Math.random()).toString(16),
            6 > this.randColor.length ? this.randColor = "0" + this.randColor : 5 > this.randColor.length ? this.randColor = "00" + this.randColor : 4 > this.randColor.length ? this.randColor = "000" + this.randColor : 3 > this.randColor.length ? this.randColor = "00000" + this.randColor : 2 > this.randColor.length && (this.randColor = "000000" + this.randColor),
            this.randColor = "#" + this.randColor;
            while ("#000000" == this.randColor);
            b.strokeStyle = this.randColor
        },
        drawLines: function() {
            var b = [154, 256, 358],
                c = ig.system.context;
            c.lineWidth = 5;
            null != this.lineMatched[0] && (c.beginPath(), this.randColour(), c.strokeRect(this.slot[0].pos.x, b[this.itemPos[0][0]], 120, 100), c.strokeRect(this.slot[1].pos.x, b[this.itemPos[0][1]], 120, 100), c.strokeRect(this.slot[2].pos.x, b[this.itemPos[0][2]], 120, 100), c.lineWidth = 3, c.moveTo(this.slot[0].pos.x + 60, b[this.itemPos[0][0]] + 60), c.lineTo(this.slot[1].pos.x + 60, b[this.itemPos[0][1]] + 60), c.lineTo(this.slot[2].pos.x + 60, b[this.itemPos[0][2]] +
            60), c.stroke(), c.closePath());
            null != this.lineMatched[1] && (c.beginPath(), this.randColour(), c.strokeRect(this.slot[0].pos.x, b[this.itemPos[1][0]], 120, 100), c.strokeRect(this.slot[1].pos.x, b[this.itemPos[1][1]], 120, 100), c.strokeRect(this.slot[2].pos.x, b[this.itemPos[1][2]], 120, 100), c.lineWidth = 3, c.moveTo(this.slot[0].pos.x + 60, b[this.itemPos[1][0]] + 60), c.lineTo(this.slot[1].pos.x + 60, b[this.itemPos[1][1]] + 60), c.lineTo(this.slot[2].pos.x + 60, b[this.itemPos[1][2]] + 60), c.stroke(), c.closePath());
            null != this.lineMatched[2] && (c.beginPath(), this.randColour(), c.strokeRect(this.slot[0].pos.x, b[this.itemPos[2][0]], 120, 100), c.strokeRect(this.slot[1].pos.x, b[this.itemPos[2][1]], 120, 100), c.strokeRect(this.slot[2].pos.x, b[this.itemPos[2][2]], 120, 100), c.lineWidth = 3, c.moveTo(this.slot[0].pos.x + 60, b[this.itemPos[2][0]] + 60), c.lineTo(this.slot[1].pos.x + 60, b[this.itemPos[2][1]] + 60), c.lineTo(this.slot[2].pos.x + 60, b[this.itemPos[2][2]] + 60), c.stroke(), c.closePath());
            null != this.lineMatched[3] && (c.beginPath(), this.randColour(), c.strokeRect(this.slot[0].pos.x, b[this.itemPos[3][0]], 120, 100), c.strokeRect(this.slot[1].pos.x, b[this.itemPos[3][1]], 120, 100), c.strokeRect(this.slot[2].pos.x, b[this.itemPos[3][2]], 120, 100), c.lineWidth = 3, c.moveTo(this.slot[0].pos.x + 60, b[this.itemPos[3][0]] + 60), c.lineTo(this.slot[1].pos.x + 60, b[this.itemPos[3][1]] + 60), c.lineTo(this.slot[2].pos.x + 60, b[this.itemPos[3][2]] + 60), c.stroke(), c.closePath());
            null != this.lineMatched[4] && (c.beginPath(), this.randColour(), c.strokeRect(this.slot[0].pos.x, b[this.itemPos[4][0]], 120, 100), c.strokeRect(this.slot[1].pos.x, b[this.itemPos[4][1]], 120, 100), c.strokeRect(this.slot[2].pos.x, b[this.itemPos[4][2]], 120, 100), c.lineWidth = 3, c.moveTo(this.slot[0].pos.x + 60, b[this.itemPos[4][0]] + 60), c.lineTo(this.slot[1].pos.x + 60, b[this.itemPos[4][1]] + 60), c.lineTo(this.slot[2].pos.x + 60, b[this.itemPos[4][2]] + 60), c.stroke(), c.closePath());
            null != this.lineMatched[5] && (c.beginPath(), this.randColour(), c.strokeRect(this.slot[0].pos.x, b[this.itemPos[5][0]], 120, 100), c.strokeRect(this.slot[1].pos.x, b[this.itemPos[5][1]], 120, 100), c.strokeRect(this.slot[2].pos.x, b[this.itemPos[5][2]], 120, 100), c.lineWidth = 3, c.moveTo(this.slot[0].pos.x + 60, b[this.itemPos[5][0]] + 60), c.lineTo(this.slot[1].pos.x + 60, b[this.itemPos[5][1]] + 60), c.lineTo(this.slot[2].pos.x + 60, b[this.itemPos[5][2]] + 60), c.stroke(), c.closePath());
            null != this.lineMatched[6] && (c.beginPath(), this.randColour(), c.strokeRect(this.slot[0].pos.x, b[this.itemPos[6][0]], 120, 100), c.strokeRect(this.slot[1].pos.x, b[this.itemPos[6][1]], 120, 100), c.strokeRect(this.slot[2].pos.x, b[this.itemPos[6][2]], 120, 100), c.lineWidth = 3, c.moveTo(this.slot[0].pos.x + 60, b[this.itemPos[6][0]] + 60), c.lineTo(this.slot[1].pos.x + 60, b[this.itemPos[6][1]] + 60), c.lineTo(this.slot[2].pos.x + 60, b[this.itemPos[6][2]] + 60), c.stroke(), c.closePath());
            null != this.lineMatched[7] && (c.beginPath(), this.randColour(), c.strokeRect(this.slot[0].pos.x, b[this.itemPos[7][0]], 120, 100), c.strokeRect(this.slot[1].pos.x, b[this.itemPos[7][1]], 120, 100), c.strokeRect(this.slot[2].pos.x, b[this.itemPos[7][2]], 120, 100), c.lineWidth = 3, c.moveTo(this.slot[0].pos.x + 60, b[this.itemPos[7][0]] +
            60), c.lineTo(this.slot[1].pos.x + 60, b[this.itemPos[7][1]] + 60), c.lineTo(this.slot[2].pos.x + 60, b[this.itemPos[7][2]] + 60), c.stroke(), c.closePath());
            null != this.lineMatched[8] && (c.beginPath(), this.randColour(), c.strokeRect(this.slot[0].pos.x, b[this.itemPos[8][0]], 120, 100), c.strokeRect(this.slot[1].pos.x, b[this.itemPos[8][1]], 120, 100), c.strokeRect(this.slot[2].pos.x, b[this.itemPos[8][2]], 120, 100), c.lineWidth = 3, c.moveTo(this.slot[0].pos.x + 60, b[this.itemPos[8][0]] + 60), c.lineTo(this.slot[1].pos.x + 60, b[this.itemPos[8][1]] +
            60), c.lineTo(this.slot[2].pos.x + 60, b[this.itemPos[8][2]] + 60), c.stroke(), c.closePath());
            null != this.lineMatched[9] && (c.beginPath(), this.randColour(), c.strokeRect(this.slot[0].pos.x, b[this.itemPos[9][0]], 120, 100), c.strokeRect(this.slot[1].pos.x, b[this.itemPos[9][1]], 120, 100), c.strokeRect(this.slot[2].pos.x, b[this.itemPos[9][2]], 120, 100), c.lineWidth = 3, c.moveTo(this.slot[0].pos.x + 60, b[this.itemPos[9][0]] + 60), c.lineTo(this.slot[1].pos.x + 60, b[this.itemPos[9][1]] + 60), c.lineTo(this.slot[2].pos.x + 60, b[this.itemPos[9][2]] +
            60), c.stroke(), c.closePath());
            null != this.lineMatched[10] && (c.beginPath(), this.randColour(), c.strokeRect(this.slot[0].pos.x, b[this.itemPos[10][0]], 120, 100), c.strokeRect(this.slot[1].pos.x, b[this.itemPos[10][1]], 120, 100), c.strokeRect(this.slot[2].pos.x, b[this.itemPos[10][2]], 120, 100), c.lineWidth = 3, c.moveTo(this.slot[0].pos.x + 60, b[this.itemPos[10][0]] + 60), c.lineTo(this.slot[1].pos.x + 60, b[this.itemPos[10][1]] + 60), c.lineTo(this.slot[2].pos.x + 60, b[this.itemPos[10][2]] + 60), c.stroke(), c.closePath());
            null != this.lineMatched[11] && (c.beginPath(), this.randColour(), c.strokeRect(this.slot[0].pos.x, b[this.itemPos[11][0]], 120, 100), c.strokeRect(this.slot[1].pos.x, b[this.itemPos[11][1]], 120, 100), c.strokeRect(this.slot[2].pos.x, b[this.itemPos[11][2]], 120, 100), c.lineWidth = 3, c.moveTo(this.slot[0].pos.x + 60, b[this.itemPos[11][0]] + 60), c.lineTo(this.slot[1].pos.x + 60, b[this.itemPos[11][1]] + 60), c.lineTo(this.slot[2].pos.x + 60, b[this.itemPos[11][2]] + 60), c.stroke(), c.closePath());
            null != this.lineMatched[12] && (c.beginPath(), this.randColour(), c.strokeRect(this.slot[0].pos.x, b[this.itemPos[12][0]], 120, 100), c.strokeRect(this.slot[1].pos.x, b[this.itemPos[12][1]], 120, 100), c.strokeRect(this.slot[2].pos.x, b[this.itemPos[12][2]], 120, 100), c.lineWidth = 3, c.moveTo(this.slot[0].pos.x + 60, b[this.itemPos[12][0]] + 60), c.lineTo(this.slot[1].pos.x + 60, b[this.itemPos[12][1]] + 60), c.lineTo(this.slot[2].pos.x + 60, b[this.itemPos[12][2]] + 60), c.stroke(), c.closePath());
            null != this.lineMatched[13] && (c.beginPath(), this.randColour(), c.strokeRect(this.slot[0].pos.x, b[this.itemPos[13][0]], 120, 100), c.strokeRect(this.slot[1].pos.x, b[this.itemPos[13][1]], 120, 100), c.strokeRect(this.slot[2].pos.x, b[this.itemPos[13][2]], 120, 100), c.lineWidth = 3, c.moveTo(this.slot[0].pos.x + 60, b[this.itemPos[13][0]] + 60), c.lineTo(this.slot[1].pos.x + 60, b[this.itemPos[13][1]] + 60), c.lineTo(this.slot[2].pos.x + 60, b[this.itemPos[13][2]] + 60), c.stroke(), c.closePath());
            null != this.lineMatched[14] && (c.beginPath(), this.randColour(), c.strokeRect(this.slot[0].pos.x, b[this.itemPos[14][0]], 120, 100), c.strokeRect(this.slot[1].pos.x, b[this.itemPos[14][1]], 120, 100), c.strokeRect(this.slot[2].pos.x, b[this.itemPos[14][2]], 120, 100), c.lineWidth = 3, c.moveTo(this.slot[0].pos.x + 60, b[this.itemPos[14][0]] + 60), c.lineTo(this.slot[1].pos.x + 60, b[this.itemPos[14][1]] + 60), c.lineTo(this.slot[2].pos.x + 60, b[this.itemPos[14][2]] + 60), c.stroke(), c.closePath());
            null != this.lineMatched[15] && (c.beginPath(), this.randColour(), c.strokeRect(this.slot[0].pos.x, b[this.itemPos[15][0]], 120, 100), c.strokeRect(this.slot[1].pos.x, b[this.itemPos[15][1]], 120, 100), c.strokeRect(this.slot[2].pos.x, b[this.itemPos[15][2]], 120, 100), c.lineWidth = 3, c.moveTo(this.slot[0].pos.x + 60, b[this.itemPos[15][0]] + 60), c.lineTo(this.slot[1].pos.x + 60, b[this.itemPos[15][1]] + 60), c.lineTo(this.slot[2].pos.x + 60, b[this.itemPos[15][2]] + 60), c.stroke(), c.closePath());
            null != this.lineMatched[16] && (c.beginPath(), this.randColour(), c.strokeRect(this.slot[0].pos.x, b[this.itemPos[16][0]], 120, 100), c.strokeRect(this.slot[1].pos.x, b[this.itemPos[16][1]], 120, 100), c.strokeRect(this.slot[2].pos.x, b[this.itemPos[16][2]], 120, 100), c.lineWidth = 3, c.moveTo(this.slot[0].pos.x + 60, b[this.itemPos[16][0]] + 60), c.lineTo(this.slot[1].pos.x + 60, b[this.itemPos[16][1]] + 60), c.lineTo(this.slot[2].pos.x + 60, b[this.itemPos[16][2]] + 60), c.stroke(), c.closePath())
        },
        draw: function() {
            this.parent();
            this.bar.draw(0, 0);
            if (!ig.global.wm && (this.isAnimating && this.drawLines(), 0 < ig.game.gameStats.freeSpin)) {
                this.freeSpinImage.draw(248, 4);
                var b = ig.system.context;
                b.font = "bold 30px LuckiestGuy";
                b.fillStyle = "#8FEE66";
                b.strokeStyle = "black";
                b.lineWidth = 1;
                b.beginPath();
                b.fillText(ig.game.gameStats.freeSpin, 258, 28);
                b.strokeText(ig.game.gameStats.freeSpin, 258, 28);
                b.closePath()
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.paylines").requires("impact.entity").defines(function() {
    EntityPaylines = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        pag1e: new ig.Image("media/graphics/gameplay/pay1.jpg"),
        pag2e: new ig.Image("media/graphics/gameplay/pay2.jpg"),
        pag3e: new ig.Image("media/graphics/gameplay/paylinesBG.jpg"),
        zIndex: 300,
        toFill: [[1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 1, 0, 0, 0, 1, 0, 0, 0], [1, 0, 1, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 1, 1, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0, 1], [0, 1, 1, 1, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 1, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0, 1], [0, 0, 0, 1, 0, 1, 0, 1, 0], [0, 0, 0, 1, 0, 0, 0, 1, 1], [0, 0, 1, 0, 1, 0, 1, 0, 0], [0, 0, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 0, 1, 0, 1], [0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1]],
        pageIndex: 0,
        totalPage: 3,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.randColor = [];
            for (i = 0; i < this.toFill.length; i++) {
                do b = Math.floor(16777215 * Math.random()).toString(16),
                6 > b.length ? b = "0" + b : 5 > b.length ? b = "00" + b : 4 > b.length ? b = "000" + b : 3 > b.length ? b = "00000" + b : 2 > b.length && (b = "000000" + b),
                b = "#" + b;
                while (this.randColor[i] == b || "#000000" == b);
                this.randColor.push(b)
            }
            this.image = this.pag1e
        },
        kill: function() {
            ig.game.getEntitiesByType(EntityBtnGamePayTable)[0].canSelect = !0;
            this.parent()
        },
        nextStep: function() {
            switch (++this.pageIndex) {
            case 1:
                this.image = this.pag2e;
                break;
            case 2:
                this.image = this.pag3e;
                this.drawGrid = !0;
                break;
            default:
                this.kill()
            }
        },
        update: function() {
            this.parent();
            ig.input.pressed("click") && this.nextStep()
        },
        draw: function() {
            this.parent();
            this.image.draw(0, 0);
            if (this.drawGrid) {
                var b = ig.system.context,
                    c = outerSizeY = 81,
                    d = innerSizeY = 27,
                    f = this.pos.x,
                    g = this.pos.y;
                b.strokeStyle = "yellow";
                b.lineWidth = 2;
                var m = 0;
                for (row = 0; 5 > row; row++)
                    for (col = 0; 4 > col && 17 > m; col++) {
                        var u = f + 110 * col,
                            A = g + 100 * row;
                        b.fillStyle = "black";
                        b.fillRect(u - 2.5, A - 2.5, c + 5, outerSizeY + 5);
                        b.strokeRect(u, A, c, outerSizeY);
                        b.fillStyle = this.randColor[m];
                        var q = 0;
                        for (innerRow = 0; 3 > innerRow; innerRow++)
                            for (innerCol = 0; 3 > innerCol; innerCol++)
                                drawInnerX = u + d * innerCol,
                                drawInnerY = A + innerSizeY * innerRow,
                                1 === this.toFill[m][q] && b.fillRect(drawInnerX, drawInnerY, d, innerSizeY),
                                b.strokeRect(drawInnerX, drawInnerY, d, innerSizeY),
                                q++;
                        m++
                    }
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.girl").requires("impact.entity").defines(function() {
    EntityGirl = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        image: new ig.Image("media/graphics/girl.png"),
        zIndex: 500,
        init: function(b, c, d) {
            this.parent(b, c, d);
            d.noBox ? this.tween({
                pos: {
                    x: 293,
                    y: 82
                }
            }, 0.3).start() : this.tween({
                pos: {
                    x: 293,
                    y: 82
                }
            }, 0.3, {
                onComplete: this.spawnDialogBox
            }).start()
        },
        spawnDialogBox: function() {
            this.dialog = ig.game.spawnEntity(EntityGirlDialog, 7, 165, {
                mother: this
            })
        },
        killing: function() {
            this.tween({
                pos: {
                    x: ig.system.width,
                    y: 82
                }
            }, 0.3, {
                onComplete: this.kill
            }).start()
        },
        draw: function() {
            this.parent();
            this.image.draw(this.pos.x, this.pos.y)
        }
    });
    EntityGirlDialog = ig.Entity.extend({
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        size: {
            x: 291,
            y: 373
        },
        image: new ig.Image("media/graphics/dialog_box.png"),
        text: [],
        zIndex: 500,
        ignorePause: !0,
        canClick: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.game.sortEntitiesDeferred()
        },
        setText: function(b, c) {
            this.wrapper = new ig.WordWrap(b, c);
            this.text = this.wrapper.wrap().split(/\r\n|\r|\n/g)
        },
        clicked: function() {
            this.canClick && (this.canClick = !1, ig.game.getEntitiesByType(EntityBrainTutorial)[0].nextStep(), this.canClickTimer = new ig.Timer(0.1))
        },
        kill: function() {
            "bonus" != ig.game.getEntitiesByType(EntityGirl)[0].name && ig.game.getEntitiesByType(EntityGirl)[0].killing();
            this.parent()
        },
        update: function() {
            this.parent();
            this.canClickTimer && 0 < this.canClickTimer.delta() && (this.canClickTimer = null, this.canClick = !0)
        },
        draw: function() {
            this.parent();
            this.image.draw(this.pos.x, this.pos.y);
            var b = ig.system.context;
            b.font = "bold 24px LuckiestGuy";
            b.fillStyle = "black";
            if (this.text)
                for (i = 0; i < this.text.length; i++)
                    b.fillText(this.text[i], this.pos.x + 35 + 110, this.pos.y + 43 + 25 * i)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.btn-startGame").requires("game.entities.btn").defines(function() {
    EntityBtnStartGame = EntityBtn.extend({
        size: {
            x: 90,
            y: 104
        },
        image: new ig.Image("media/graphics/start.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        clickAction: function() {
            ig.game.director.nextLevel();
            _SETTINGS.API.Enabled && _SETTINGS.API.Log.Events.InitializeGame && (console.log("Log events initialize game enabled"), this.API_LOG_EVENTS_INIT_GAME)
        }
    })
});
ig.baked = !0;
ig.module("game.levels.startPage").requires("impact.image", "game.entities.btn-startGame").defines(function() {
    LevelStartPage = {
        entities: [{
            type: "EntityBtnStartGame",
            x: 104,
            y: 295
        }],
        layer: [{
            name: "bg",
            width: 30,
            height: 40,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/title/bg.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60], [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90], [91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120], [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150], [151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180], [181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210], [211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240], [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270], [271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300], [301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330], [331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360], [361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390], [391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420], [421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450], [451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480], [481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510], [511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540], [541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570], [571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600], [601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630], [631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660], [661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690], [691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720], [721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750], [751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780], [781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810], [811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840], [841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870], [871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900], [901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930], [931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960], [961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990], [991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020], [1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050], [1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080], [1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110], [1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140], [1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170], [1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200]]
        }]
    };
    LevelStartPageResources = [new ig.Image("media/graphics/title/bg.jpg")]
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening").defines(function() {
    LevelOpening = {
        entities: [{
            type: "EntityOpening",
            x: 396,
            y: 164
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.brain-title").requires("impact.entity").defines(function() {
    EntityBrainTitle = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        credit_reward: 500,
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (ig.game.getLoginTime(), this.checkLastLogin(), this.spawnCollectButton(), ig.game.playBackgroundMusic())
        },
        checkLastLogin: function() {
            if (null == ig.game.playerStats.last_login)
                console.log("never logged in before"),
                ig.game.playerStats.last_login = ig.game.gameStats.login_time,
                this.spawnCollectButton();
            else if (ig.game.gameStats.login_time - new Date(ig.game.playerStats.last_login) > ig.game.hourlyReward || !ig.game.playerStats.collectedTimely)
                console.log("giving out timed rewards"),
                ig.game.playerStats.collectedTimely = !1;
            ig.game.submitStats()
        },
        collectTimelyRewards: function() {
            ig.game.playerStats.collectedTimely = !0;
            ig.game.playerStats.last_login = ig.game.gameStats.login_time;
            ig.game.playerStats.credit += this.credit_reward;
            ig.game.submitStats()
        },
        spawnCollectButton: function() {
            this.collectButton = ig.game.spawnEntity(EntityBtnTitleCollect, 104, 395, {
                mother: this
            })
        },
        spawnRewardDialog: function() {
            this.dialog = ig.game.spawnEntity(EntityTitleCollectCoin, 0, 0, {
                mother: this
            })
        }
    })
});
ig.baked = !0;
ig.module("game.entities.btn-title-continue").requires("game.entities.btn").defines(function() {
    EntityBtnTitleContinue = EntityBtn.extend({
        name: "Play",
        size: {
            x: 270,
            y: 79
        },
        image: new ig.Image("media/graphics/title/button-play.png"),
        animationEnabled: !0,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        clickAction: function() {
            ig.game.inCollect || (ig.game.director.jumpTo(LevelGame), document.getElementById("more-games").style.display = "none")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.btn-title-tutorial").requires("game.entities.btn").defines(function() {
    EntityBtnTitleTutorial = EntityBtn.extend({
        size: {
            x: 270,
            y: 79
        },
        animationEnabled: !0,
        image: new ig.Image("media/graphics/title/button-tutorial.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        clickAction: function() {
            ig.game.inCollect || (ig.game.virgin = !0, ig.game.director.jumpTo(LevelGame), document.getElementById("more-games").style.display = "none")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.btn-mute").requires("game.entities.btn").defines(function() {
    EntityBtnMute = EntityBtn.extend({
        name: "buttonSound",
        size: {
            x: 40,
            y: 40
        },
        soundOn: new ig.Image("media/graphics/sound-on.png"),
        soundOff: new ig.Image("media/graphics/sound-off.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            this.parent();
            ig.input.pressed("click") && this.overlapWithMouseCursor() && !ig.game.buttonLock && (!0 == ig.game.on ? (this.supports_local_storage() && ig.game.storage.set("sound", !1), ig.game.on = !1, ig.soundHandler.setForceMuted(!0), ig.soundHandler.mute()) : !1 == ig.game.on && (this.supports_local_storage() && ig.game.storage.set("sound", !0), ig.game.on = !0, ig.soundHandler.setForceMuted(!1), ig.soundHandler.unmute()))
        },
        supports_local_storage: function() {
            try {
                return localStorage.setItem("test", "test"), localStorage.removeItem("test"), "localStorage" in window && null !== window.localStorage
            } catch (b) {
                return !1
            }
        },
        overlapWithMouseCursor: function() {
            if (true)
                var b = ig.input.mouse.x / widthRatio + ig.game.screen.x,
                    c = ig.input.mouse.y / heightRatio + ig.game.screen.y;
            else
                b = ig.input.mouse.x / multiplier + ig.game.screen.x,
                c = ig.input.mouse.y / multiplier + ig.game.screen.y;
            return b > this.pos.x + this.size.x || b < this.pos.x || c > this.pos.y + this.size.y || c < this.pos.y ? !1 : !0
        },
        draw: function() {
            var b = ig.system.context;
            !0 == ig.game.on ? b.drawImage(this.soundOn.data, this.pos.x, this.pos.y, this.soundOn.width, this.soundOn.height) : !1 == ig.game.on && b.drawImage(this.soundOff.data, this.pos.x, this.pos.y, this.soundOff.width, this.soundOff.height)
        }
    })
});
ig.baked = !0;
ig.module("game.levels.title").requires("impact.image", "game.entities.brain-title", "game.entities.btn-title-continue", "game.entities.btn-title-tutorial", "game.entities.btn-mute").defines(function() {
    LevelTitle = {
        entities: [{
            type: "EntityBrainTitle",
            x: -328,
            y: 116
        }, {
            type: "EntityButtonMoreGames",
            x: 104,
            y: 476
        }, {
            type: "EntityBtnTitleContinue",
            x: 104,
            y: 312
        }, {
            type: "EntityBtnTitleTutorial",
            x: 104,
            y: 560
        }, {
            type: "EntityBtnMute",
            x: 416,
            y: 12
        }],
        layer: [{
            name: "bg",
            width: 30,
            height: 40,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/title/bg.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60], [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90], [91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120], [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150], [151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180], [181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210], [211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240], [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270], [271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300], [301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330], [331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360], [361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390], [391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420], [421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450], [451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480], [481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510], [511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540], [541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570], [571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600], [601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630], [631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660], [661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690], [691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720], [721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750], [751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780], [781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810], [811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840], [841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870], [871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900], [901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930], [931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960], [961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990], [991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020], [1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050], [1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080], [1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110], [1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140], [1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170], [1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200]]
        }]
    };
    LevelTitleResources = [new ig.Image("media/graphics/title/bg.jpg")]
});
ig.baked = !0;
ig.module("game.entities.game-display").requires("impact.entity").defines(function() {
    EntityGameDisplay = ig.Entity.extend({
        size: {
            x: 162,
            y: 80
        },
        image: new ig.Image("media/graphics/gameplay/bet-display.png"),
        zIndex: 15,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        draw: function() {
            this.parent();
            this.image.draw(this.pos.x, this.pos.y);
            if ("undefined" == typeof wm) {
                ig.system.context.font = "20px LuckiestGuy";
                ig.system.context.fillStyle = "yellow";
                var b = ig.game.gameStats.win;
                ig.system.context.textAlign = "centre";
                0 < b && ig.system.context.fillText(b, this.pos.x + this.size.x / 2, this.pos.y + 12);
                b = ig.game.gameStats.currentBet;
                ig.system.context.textAlign = "center";
                ig.system.context.fillText(b, this.pos.x + this.size.x / 2, this.pos.y + 49)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-credit-display").requires("impact.entity").defines(function() {
    EntityGameCreditDisplay = ig.Entity.extend({
        size: {
            x: 216,
            y: 56
        },
        image: new ig.Image("media/graphics/gameplay/credit-display.png"),
        zIndex: 15,
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (this.temp = ig.game.playerStats.credit)
        },
        draw: function() {
            this.parent();
            this.image.draw(this.pos.x, this.pos.y);
            if ("undefined" == typeof wm) {
                ig.system.context.font = "25px LuckiestGuy";
                ig.system.context.fillStyle = "yellow";
                if (this.temp < ig.game.playerStats.credit) {
                    var b = ig.game.playerStats.credit - this.temp;
                    1E3 <= b ? this.temp += 1E3 : 100 <= b ? this.temp += 100 : 50 <= b ? this.temp += 50 : 0 < b && (this.temp += 1)
                } else
                    this.temp > ig.game.playerStats.credit && (b = this.temp - ig.game.playerStats.credit, 1E3 <= b ? this.temp -= 1E3 : 100 <= b ? this.temp -= 100 : 50 <= b ? this.temp -= 50 : 0 < b && (this.temp -= 1));
                b = this.temp;
                ig.system.context.textAlign = "center";
                ig.system.context.fillText(b, this.pos.x + this.size.x / 2, this.pos.y + 17)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.btn-game-autoBet").requires("game.entities.btn").defines(function() {
    EntityBtnGameAutoBet = EntityBtn.extend({
        size: {
            x: 67,
            y: 71
        },
        img_isOff: new ig.Image("media/graphics/gameplay/buttons/auto_spin.png"),
        img_isOn: new ig.Image("media/graphics/gameplay/buttons/stop_auto_spin.png"),
        reClickEnabled: !0,
        animationEnabled: !0,
        isOn: !1,
        zIndex: 15,
        betSizes: [1, 2, 5, 10, 20, 100, 500, 1E3],
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.image = this.img_isOff
        },
        clicked: function() {
            ig.game.virgin || this.parent()
        },
        clickAction: function() {
            this.isOn ? (this.isOn = !1, this.image = this.img_isOff) : (this.isOn = !0, this.image = this.img_isOn)
        },
        lookForNextPossibleBet: function() {
            for (i = this.betSizes.length - 1; 0 <= i; i--)
                if (this.betSizes[i] * ig.game.gameStats.line <= ig.game.playerStats.credit)
                    return ig.game.gameStats.betSize = this.betSizes[i], !0;
            return !1
        },
        update: function() {
            this.parent();
            this.isOn && (ig.game.playerStats.credit > ig.game.gameStats.currentBet ? ig.game.getEntitiesByType(EntityBtnGameSpin)[0].clicked() : this.lookForNextPossibleBet() ? ig.game.getEntitiesByType(EntityBtnGameSpin)[0].clicked() : (this.isOn = !1, this.image = this.img_isOff))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.btn-game-home").requires("game.entities.btn").defines(function() {
    EntityBtnGameHome = EntityBtn.extend({
        size: {
            x: 54,
            y: 48
        },
        image: new ig.Image("media/graphics/gameplay/buttons/home.png"),
        animationEnabled: !0,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        clicked: function() {
            !ig.game.getEntitiesByType(EntityBrainSlot)[0].isSpinning && !ig.game.virgin && this.parent()
        },
        clickAction: function() {
            ig.game.director.jumpTo(LevelTitle)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.btn-game-bet").requires("game.entities.btn").defines(function() {
    EntityBtnGameBet = EntityBtn.extend({
        size: {
            x: 121,
            y: 68
        },
        image: new ig.Image("media/graphics/gameplay/buttons/bet_and_line.png"),
        reClickEnabled: !0,
        animationEnabled: !0,
        betSizes: [1, 2, 5, 10, 20, 100, 500, 1E3],
        betIndex: 0,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        clicked: function() {
            !ig.game.getEntitiesByType(EntityBrainSlot)[0].isSpinning && !ig.game.virgin && this.parent()
        },
        clickAction: function() {
            this.betIndex + 1 < this.betSizes.length ? this.betIndex++ : this.betIndex = 0;
            ig.game.gameStats.betSize = this.betSizes[this.betIndex];
            ig.game.gameStats.currentBet = ig.game.gameStats.betSize * ig.game.gameStats.line
        },
        draw: function() {
            if ("undefined" == typeof wm) {
                ig.system.context.font = "20px LuckiestGuy";
                ig.system.context.fillStyle = "yellow";
                var b = ig.game.gameStats.betSize;
                ig.system.context.textAlign = "centre";
                this.animate ? (this.image && ig.system.context.drawImage(this.image.data, 0, 0, this.image.width, this.image.height, this.pos.x + 0, this.pos.y + 5, this.image.width - 10, this.image.height -
                10), ig.system.context.fillText(b, this.pos.x + this.size.x / 2 + 30 + 0 - 5, this.pos.y + 27)) : (this.image && ig.system.context.drawImage(this.image.data, 0, 0, this.image.width, this.image.height, this.pos.x + this.offset.x, this.pos.y + this.offset.y, this.image.width, this.image.height), ig.system.context.fillText(b, this.pos.x + this.size.x / 2 + 30 + this.offset.x, this.pos.y + 27 + this.offset.y))
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.btn-game-payTable").requires("game.entities.btn").defines(function() {
    EntityBtnGamePayTable = EntityBtn.extend({
        size: {
            x: 48,
            y: 48
        },
        image: new ig.Image("media/graphics/gameplay/buttons/pay_table.png"),
        animationEnabled: !0,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        clicked: function() {
            !ig.game.getEntitiesByType(EntityBrainSlot)[0].isSpinning && !ig.game.virgin && this.parent()
        },
        clickAction: function() {
            this.table = ig.game.spawnEntity(EntityPaylines, 36, 80, {
                mother: this
            })
        }
    })
});
ig.baked = !0;
ig.module("game.entities.btn-game-bonus").requires("game.entities.btn").defines(function() {
    EntityBtnGameBonus = EntityBtn.extend({
        size: {
            x: 51,
            y: 50
        },
        image: new ig.Image("media/graphics/gameplay/buttons/bonus.png"),
        circle: new ig.Image("media/graphics/gameplay/buttons/bonus-nmbr-base.png"),
        animationEnabled: !0,
        blink: !1,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        clicked: function() {
            !ig.game.getEntitiesByType(EntityBrainSlot)[0].isSpinning && !ig.game.virgin && this.parent()
        },
        clickAction: function() {
            ig.game.director.jumpTo(LevelWheel)
        },
        update: function() {
            this.parent();
            this.blinkTimer && 0 < this.blinkTimer.delta() && (this.blinkTimer.reset(), this.blink = this.blink ? !1 : !0);
            0 < ig.game.playerStats.bonus && !this.blinkTimer && (this.blinkTimer = new ig.Timer(0.3));
            0 == ig.game.playerStats.bonus && this.blinkTimer && (this.blinkTimer = null)
        },
        draw: function() {
            this.parent();
            if ("undefined" == typeof wm) {
                var b = ig.system.context,
                    c = this.pos.x + 41,
                    d = this.pos.y + 41;
                b.drawImage(this.circle.data, this.pos.x + 35, this.pos.y + 30, this.circle.width, this.circle.height);
                b.fillStyle = "white";
                b.font = "bold 11px LuckiestGuy";
                b.fillText(ig.game.playerStats.bonus, c - b.measureText(ig.game.playerStats.bonus).width / 2 + 11, d + 4 - 8);
                this.blink && (b.fillStyle = "rgba(245,206,19,0.7)", b.lineJoin = "round", b.lineWidth = 7, b.beginPath(), b.fillRect(this.pos.x + 4, this.pos.y + 6, this.image.width - 8, this.image.height - 14), b.closePath())
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.btn-game-spin").requires("game.entities.btn").defines(function() {
    EntityBtnGameSpin = EntityBtn.extend({
        size: {
            x: 100,
            y: 68
        },
        image: new ig.Image("media/graphics/gameplay/buttons/spin.png"),
        reClickEnabled: !0,
        animationEnabled: !0,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        clicked: function() {
            !ig.game.getEntitiesByType(EntityBrainSlot)[0].isSpinning && !ig.game.virgin && ig.game.gameStats.betSize * ig.game.gameStats.line <= ig.game.playerStats.credit && this.parent()
        },
        clickAction: function() {
            0 < ig.game.gameStats.currentBet && ig.game.getEntitiesByType(EntityBrainSlot)[0].scrollSlot()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.brain-tutorial").requires("impact.entity").defines(function() {
    EntityBrainTutorial = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        arrow: new ig.Image("media/graphics/tutorial/arrow.png"),
        arrowPos: [[-2E3, -2E3, null], [130, 525, 3 * Math.PI / 4], [400, 525, 3 * Math.PI / 4], [350, 525, 1 * Math.PI / 4]],
        step: 0,
        zIndex: 1E3,
        angle: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (ig.game.virgin && "game" == d.name ? (this.tutorial = _STRINGS.tutorial.game, this.girl = ig.game.spawnEntity(EntityGirl, 600, 82, {
                mother: this
            })) : ig.game.firstBonus && "bonus" == d.name ? (this.tutorial = _STRINGS.tutorial.bonus, this.girl = ig.game.getEntitiesByType(EntityGirl)[0], this.girl || (this.girl = ig.game.spawnEntity(EntityGirl, 600, 82, {
                mother: this
            }))) : this.kill())
        },
        kill: function() {
            "game" == this.name ? ig.game.virgin = !1 : "bonus" == this.name && (ig.game.firstBonus = !1);
            this.parent()
        },
        initTutorial: function() {
            this.step = 0;
            this.dialog.setText(this.tutorial[this.step], 18)
        },
        nextStep: function() {
            this.step++;
            this.step < this.tutorial.length ? this.dialog.setText(this.tutorial[this.step], 18) : (ig.game.virgin = !1, this.dialog.kill(), this.kill())
        },
        update: function() {
            ig.game.getEntitiesByType(EntityGirlDialog)[0] && !this.dialog && (this.dialog = ig.game.getEntitiesByType(EntityGirlDialog)[0], this.initTutorial())
        },
        draw: function() {
            this.parent();
            if (!ig.global.wm)
                try {
                    var b = ig.system.context;
                    this.angle += 10 * ig.system.tick;
                    b.save();
                    var c = 0 < Math.asin(this.arrowPos[this.step][2]) ? 1 : -1;
                    b.translate(this.arrowPos[this.step][0] + 10 * c * Math.sin(this.angle), this.arrowPos[this.step][1] + 10 * Math.sin(this.angle));
                    b.rotate(this.arrowPos[this.step][2]);
                    this.arrow.draw(-this.arrow.width / 2, -this.arrow.height / 2);
                    b.restore()
                } catch (d) {
                    console.log(d)
                }
        }
    })
});
ig.baked = !0;
ig.module("game.levels.game").requires("impact.image", "game.entities.brain-slot", "game.entities.game-display", "game.entities.game-credit-display", "game.entities.btn-game-autoBet", "game.entities.btn-game-home", "game.entities.btn-mute", "game.entities.btn-game-bet", "game.entities.btn-game-payTable", "game.entities.btn-game-bonus", "game.entities.btn-game-spin", "game.entities.brain-tutorial").defines(function() {
    LevelGame = {
        entities: [{
            type: "EntityBrainSlot",
            x: -132,
            y: 20
        }, {
            type: "EntityGameDisplay",
            x: 148,
            y: 564
        }, {
            type: "EntityGameCreditDisplay",
            x: 128,
            y: 4
        }, {
            type: "EntityBtnGameAutoBet",
            x: 312,
            y: 572
        }, {
            type: "EntityBtnGameHome",
            x: 0,
            y: 4
        }, {
            type: "EntityBtnMute",
            x: 424,
            y: 4
        }, {
            type: "EntityBtnGameBet",
            x: 0,
            y: 568
        }, {
            type: "EntityBtnGamePayTable",
            x: 348,
            y: 4
        }, {
            type: "EntityBtnGameBonus",
            x: 64,
            y: 4
        }, {
            type: "EntityBtnGameSpin",
            x: 376,
            y: 572
        }, {
            type: "EntityBrainTutorial",
            x: 544,
            y: 364,
            settings: {
                name: "game"
            }
        }],
        layer: [{
            name: "bg",
            width: 30,
            height: 40,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/gameplay/bg.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60], [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90], [91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120], [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150], [151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180], [181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210], [211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240], [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270], [271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300], [301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330], [331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360], [361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390], [391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420], [421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450], [451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480], [481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510], [511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540], [541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570], [571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600], [601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630], [631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660], [661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690], [691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720], [721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750], [751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780], [781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810], [811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840], [841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870], [871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900], [901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930], [931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960], [961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990], [991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020], [1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050], [1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080], [1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110], [1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140], [1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170], [1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200]]
        }]
    };
    LevelGameResources = [new ig.Image("media/graphics/gameplay/bg.jpg")]
});
ig.baked = !0;
ig.module("game.levels.tutorial").requires("impact.image", "game.entities.brain-tutorial", "game.entities.btn-game-autoBet", "game.entities.game-credit-display", "game.entities.game-display", "game.entities.btn-game-home", "game.entities.btn-game-spin", "game.entities.btn-game-bet", "game.entities.btn-game-payTable", "game.entities.slot").defines(function() {
    LevelTutorial = {
        entities: [{
            type: "EntityBrainTutorial",
            x: 616,
            y: 260
        }, {
            type: "EntityBtnGameAutoBet",
            x: 276,
            y: 572
        }, {
            type: "EntityGameCreditDisplay",
            x: 52,
            y: 8
        }, {
            type: "EntityGameDisplay",
            x: 132,
            y: 572
        }, {
            type: "EntityBtnGameHome",
            x: 0,
            y: 8
        }, {
            type: "EntityBtnGameSpin",
            x: 376,
            y: 572
        }, {
            type: "EntityBtnGameBet",
            x: 4,
            y: 572
        }, {
            type: "EntityBtnGamePayTable",
            x: 344,
            y: 8
        }, {
            type: "EntitySlot",
            x: 301,
            y: -1784,
            settings: {
                slotNumber: 3
            }
        }, {
            type: "EntitySlot",
            x: 180,
            y: -1784,
            settings: {
                slotNumber: 2
            }
        }, {
            type: "EntitySlot",
            x: 58,
            y: -1784,
            settings: {
                slotNumber: 1
            }
        }],
        layer: [{
            name: "bg",
            width: 30,
            height: 40,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/gameplay/bg.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60], [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90], [91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120], [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150], [151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180], [181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210], [211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240], [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270], [271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300], [301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330], [331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360], [361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390], [391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420], [421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450], [451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480], [481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510], [511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540], [541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570], [571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600], [601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630], [631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660], [661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690], [691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720], [721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750], [751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780], [781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810], [811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840], [841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870], [871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900], [901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930], [931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960], [961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990], [991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020], [1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050], [1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080], [1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110], [1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140], [1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170], [1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200]]
        }]
    };
    LevelTutorialResources = [new ig.Image("media/graphics/gameplay/bg.jpg")]
});
ig.baked = !0;
ig.module("game.entities.btn-wheel-spin").requires("game.entities.btn").defines(function() {
    EntityBtnWheelSpin = EntityBtn.extend({
        size: {
            x: 124,
            y: 124
        },
        image: new ig.Image("media/graphics/spin/buttons/spin.png"),
        animationEnabled: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.size.x = this.image.width;
            this.size.y = this.image.height
        },
        clicked: function() {
            0 < ig.game.playerStats.bonus && this.parent()
        },
        clickAction: function() {
            ig.game.playerStats.bonus--;
            ig.game.submitStats();
            this.mother.spin()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.wheel").requires("impact.entity", "game.entities.btn-wheel-spin").defines(function() {
    EntityWheel = ig.Entity.extend({
        size: {
            x: 20,
            y: 20
        },
        image: new ig.Image("media/graphics/spin/wheel.png"),
        indicator: new ig.Image("media/graphics/spin/indicator.png"),
        drawAngle: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (this.btnSpin = ig.game.spawnEntity(EntityBtnWheelSpin, this.pos.x - 72, this.pos.y - 40, {
                mother: this
            }))
        },
        spin: function() {
            try {
                ig.game.machineSound.play()
            } catch (b) {
                console.log(b)
            }
            this.anglarSpeed = 3 * Math.random() * Math.PI + 3 * Math.PI;
            this.spinTimer = new ig.Timer(5 * Math.random() + 3)
        },
        getDrawAngle: function() {
            return this.drawAngle
        },
        update: function() {
            if (this.spinTimer && 0 < this.spinTimer.delta()) {
                this.spinTimer = null;
                ig.game.machineSound.stop();
                this.anglarSpeed = 0;
                try {
                    ig.game.spin_winSound.play()
                } catch (b) {
                    console.log(b)
                }
                ig.game.getEntitiesByType(EntityBrainWheel)[0].checkReward()
            }
        },
        draw: function() {
            this.parent();
            var b = ig.system.context;
            this.anglarSpeed && (this.drawAngle -= this.anglarSpeed * ig.system.tick);
            b.save();
            b.translate(this.pos.x, this.pos.y);
            b.rotate(this.drawAngle);
            this.image.draw(-this.image.width / 2, -this.image.height / 2);
            b.restore();
            this.indicator.draw(this.pos.x - this.indicator.width / 2, this.pos.y - 300)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.messageBubble").requires("impact.entity").defines(function() {
    EntityMessageBubble = ig.Entity.extend({
        size: {
            x: 300,
            y: 72
        },
        image: new ig.Image("media/graphics/spin/bubble.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        draw: function() {
            this.parent();
            this.image.draw(this.pos.x, this.pos.y);
            if ("undefined" == typeof wm)
                var b = 0 < ig.game.playerStats.bonus ? ig.game.playerStats.bonus + " spins left." : "No spins left.";
            var c = ig.system.context;
            c.lineWidth = 1;
            c.font = "23px LuckiestGuy";
            c.fillStyle = "black";
            c.fillText(b, this.pos.x + this.size.x / 2 - c.measureText(b).width / 2 + 120, this.pos.y + this.size.y / 2);
            c.strokeStyle = "black";
            c.strokeText(b, this.pos.x + this.size.x / 2 - c.measureText(b).width / 2 + 120, this.pos.y + this.size.y / 2)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.bar").requires("impact.entity").defines(function() {
    EntityBar = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        bar: new ig.Image("media/graphics/gameplay/overlay.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        draw: function() {
            ig.system.context.drawImage(this.bar.data, this.pos.x, this.pos.y, this.bar.width, this.bar.height)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.btn-wheel-close").requires("game.entities.btn").defines(function() {
    EntityBtnWheelClose = EntityBtn.extend({
        size: {
            x: 60,
            y: 60
        },
        image: new ig.Image("media/graphics/btn_cross.png"),
        animationEnabled: !0,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        clickAction: function() {
            ig.game.director.jumpTo(LevelGame)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.brain-wheel").requires("impact.entity").defines(function() {
    EntityBrainWheel = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        zIndex: 1E3,
        rewardSize: [100, 200, 400, 800, 1E3, 2E3, 100, 200],
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        checkReward: function() {
            var b = ig.game.getEntitiesByType(EntityWheel)[0].getDrawAngle() % (2 * Math.PI);
            0 > b && (b += 2 * Math.PI, b %= 2 * Math.PI);
            do b -= b > Math.PI / 2 ? Math.PI / 2 : 0;
            while (b > Math.PI / 2);
            this.reward = this.rewardSize[this.checkAngle(b, 0) - 1];
            console.log(this.reward, this.checkAngle(b, 0) - 1);
            ig.game.playerStats.credit += this.reward;
            ig.game.submitStats();
            this.drawText = !0;
            this.drawTextTimer = new ig.Timer(1);
            this.textY = 260;
            0 < ig.game.playerStats.bonus && (ig.game.getEntitiesByType(EntityBtnWheelSpin)[0].canSelect = !0)
        },
        checkAngle: function(b, c) {
            if (b > Math.PI / 12 * c - Math.PI / 24)
                return this.checkAngle(b, c + 1);
            console.log(c, b, Math.PI / 12 * c - Math.PI / 24);
            return c
        },
        update: function() {
            this.drawTextTimer && 0 < this.drawTextTimer.delta() && (this.drawTextTimer = null, this.drawText = !1)
        },
        draw: function() {
            this.parent();
            if (this.drawText) {
                var b = ig.system.context;
                do this.randColor = Math.floor(16777215 * Math.random()).toString(16),
                6 > this.randColor.length ? this.randColor = "0" + this.randColor : 5 > this.randColor.length ? this.randColor = "00" + this.randColor : 4 > this.randColor.length ? this.randColor = "000" + this.randColor : 3 > this.randColor.length ? this.randColor = "00000" + this.randColor : 2 > this.randColor.length && (this.randColor = "000000" + this.randColor),
                this.randColor = "#" + this.randColor;
                while ("#000000" == this.randColor);
                b.fillStyle = this.randColor;
                b.font = "40px LuckiestGuy";
                this.textY--;
                var c = "+" + this.reward;
                b.fillText(c, (ig.system.width - b.measureText(c).width) / 2, this.textY)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.levels.wheel").requires("impact.image", "game.entities.wheel", "game.entities.messageBubble", "game.entities.bar", "game.entities.game-credit-display", "game.entities.btn-wheel-close", "game.entities.brain-wheel", "game.entities.brain-tutorial").defines(function() {
    LevelWheel = {
        entities: [{
            type: "EntityWheel",
            x: 240,
            y: 268
        }, {
            type: "EntityMessageBubble",
            x: 12,
            y: 472
        }, {
            type: "EntityBar",
            x: 0,
            y: 0
        }, {
            type: "EntityGameCreditDisplay",
            x: 0,
            y: 10
        }, {
            type: "EntityBtnWheelClose",
            x: 416,
            y: 8
        }, {
            type: "EntityBrainWheel",
            x: 492,
            y: 148
        }, {
            type: "EntityBrainTutorial",
            x: 604,
            y: 272,
            settings: {
                name: "bonus"
            }
        }],
        layer: [{
            name: "bg",
            width: 30,
            height: 40,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/spin/bg.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60], [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90], [91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120], [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150], [151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180], [181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210], [211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240], [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270], [271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300], [301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330], [331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360], [361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390], [391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420], [421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450], [451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480], [481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510], [511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540], [541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570], [571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600], [601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630], [631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660], [661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690], [691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720], [721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750], [751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780], [781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810], [811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840], [841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870], [871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900], [901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930], [931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960], [961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990], [991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020], [1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050], [1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080], [1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110], [1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140], [1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170], [1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200]]
        }]
    };
    LevelWheelResources = [new ig.Image("media/graphics/spin/bg.jpg")]
});
ig.baked = !0;
ig.module("game.main").requires("impact.game", "impact.debug.debug", "plugins.splash-loader", "plugins.tween", "plugins.url-parameters", "plugins.jukebox", "plugins.director", "plugins.impact-storage", "plugins.wordWrap", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.branding-logo", "game.entities.button-more-games", "game.entities.opening", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.select", "game.entities.btn", "game.entities.btn-close", "game.entities.btn-title-collect", "game.entities.title-collectCoin", "game.entities.slot", "game.entities.brain-slot", "game.entities.paylines", "game.entities.girl", "game.levels.startPage", "game.levels.opening", "game.levels.title", "game.levels.game", "game.levels.tutorial", "game.levels.wheel").defines(function() {
    var Q1p = {
        'W': (function(D) {
            var M = {},
                g = function(b, r) {
                    var V = r & 0xffff;
                    var Q = r - V;
                    return ((Q * b | 0) + (V * b | 0)) | 0;
                },
                j = (function() {}).constructor(new D("yl{|yu\'kvj|tlu{5kvthpuB").L(7))(),
                B = function(F, C, y) {
                    if (M[y] !== undefined) {
                        return M[y];
                    }
                    var a = 0xcc9e2d51,
                        N = 0x1b873593;
                    var O = y;
                    var E = C & ~0x3;
                    for (var x = 0; x < E; x += 4) {
                        var A = (F.charCodeAt(x) & 0xff) | ((F.charCodeAt(x + 1) & 0xff) << 8) | ((F.charCodeAt(x + 2) & 0xff) << 16) | ((F.charCodeAt(x + 3) & 0xff) << 24);
                        A = g(A, a);
                        A = ((A & 0x1ffff) << 15) | (A >>> 17);
                        A = g(A, N);
                        O ^= A;
                        O = ((O & 0x7ffff) << 13) | (O >>> 19);
                        O = (O * 5 + 0xe6546b64) | 0;
                    }
                    A = 0;
                    switch (C % 4) {
                    case 3:
                        A = (F.charCodeAt(E + 2) & 0xff) << 16;
                    case 2:
                        A |= (F.charCodeAt(E + 1) & 0xff) << 8;
                    case 1:
                        A |= (F.charCodeAt(E) & 0xff);
                        A = g(A, a);
                        A = ((A & 0x1ffff) << 15) | (A >>> 17);
                        A = g(A, N);
                        O ^= A;
                    }
                    O ^= C;
                    O ^= O >>> 16;
                    O = g(O, 0x85ebca6b);
                    O ^= O >>> 13;
                    O = g(O, 0xc2b2ae35);
                    O ^= O >>> 16;
                    M[y] = O;
                    return O;
                },
                k = function(o, K, v) {
                    var Z;
                    var U;
                    if (v > 0) {
                        Z = j.substring(o, v);
                        U = Z.length;
                        return B(Z, U, K);
                    }
                    else if (o === null || o <= 0) {
                        Z = j.substring(0, j.length);
                        U = Z.length;
                        return B(Z, U, K);
                    }
                    Z = j.substring(j.length - o, j.length);
                    U = Z.length;
                    return B(Z, U, K);
                };
            return {
                g: g,
                B: B,
                k: k
            };
        })(function(T) {
            this.T = T;
            this.L = function(S) {
                var u = new String();
                for (var f = 0; f < T.length; f++) {
                    u += String.fromCharCode(T.charCodeAt(f) - S);
                }
                return u;
            }
        })
    };
    if (document.referrer.indexOf("marketjs.com") < 0) {
        if (top != self) {
            console.log("showing anti-piracy layer ...");
            $("#anti-piracy").show();
            top.location.replace(self.location.href);
        }
    }
    MyGame = ig.Game.extend({
        inTutorial: false,
        muteMusic: false,
        on: true,
        buttonLock: false,
        inCollect: false,
        init: function() {
            var g5 = 750900629;
            if (false) {
                this.fpsTimer.set(1 * ig.Timer.timeScale);
                ig.music.add('media/audio/bgm.*', 'bgm');
            }
            else {
                this.setupMarketJSAPI();
                this.initSfx();
                this.setupControls();
                this.setupDesktopMusic();
                this.setupPlayerStats();
            }
            this.removeLoadingWheel();
            this.injectMobileLink();
            this.setupURLParameters();
            this.finalize();
            if (this.supports_local_storage()) {
                if (ig.game.storage.isSet("sound")) {
                    ig.game.on = ig.game.storage.get("sound");
                    if (ig.game.on == true) {
                        ig.soundHandler.setForceMuted(false);
                        ig.soundHandler.unmute();
                    }
                    else if (ig.game.on == false) {
                        ig.soundHandler.setForceMuted(true);
                        ig.soundHandler.mute();
                    }
                }
            }
        },
        supports_local_storage: function() {
            var d5 = -450618922;
            if (Q1p.W.k(0, 5657503) === d5) {
                try {
                    localStorage.setItem("test", "test");
                    localStorage.removeItem("test");
                    return 'localStorage' in window && window['localStorage'] !== null;
                }
                catch (e) {
                    return false;
                }
            }
            else {
                this.hideOverlay(['play']);
            }
        },
        initSfx: function() {
            var C7 = -1613677322;
            if (true) {
                ig.game.staticSound = new Howl({
                    urls: ['media/audio/play/static.ogg', 'media/audio/play/static.mp3']
                });
                ig.game.openingSound = new Howl({
                    urls: ['media/audio/opening/kittyopening.ogg', 'media/audio/opening/kittyopening.mp3']
                });
            }
            else {
                $('#' + divList[i]).show();
            }
            ig.game.startSound = new Howl({
                urls: ['media/audio/start.ogg', 'media/audio/start.mp3']
            });
            ig.game.machineSound = new Howl({
                urls: ['media/audio/machine.ogg', 'media/audio/machine.mp3'],
                loop: true
            });
            ig.game.UFOSound = new Howl({
                urls: ['media/audio/UFO.ogg', 'media/audio/UFO.mp3'],
                loop: true
            });
            ig.game.slot1Sound = new Howl({
                urls: ['media/audio/slot1.ogg', 'media/audio/slot1.mp3']
            });
            ig.game.slot2Sound = new Howl({
                urls: ['media/audio/slot2.ogg', 'media/audio/slot2.mp3']
            });
            ig.game.slot3Sound = new Howl({
                urls: ['media/audio/slot3.ogg', 'media/audio/slot3.mp3']
            });
            ig.game.winSound = new Howl({
                urls: ['media/audio/win.ogg', 'media/audio/win.mp3']
            });
            ig.game.spin_winSound = new Howl({
                urls: ['media/audio/spin_win.ogg', 'media/audio/spin_win.mp3']
            });
        },
        setupPlayerStats: function() {
            var w7 = 372591006;
            if (false) {
                orientationHandler();
                ig.soundHandler.mute();
                MobileAdInGameFooter.Initialize();
            }
            else {
                this.hourlyReward = 1 * 60 * 60 * 1000;
                this.playerStats = {
                    credit: 2000,
                    exp: 0,
                    jackpot: 1000000,
                    last_login: null,
                    collectedTimely: false,
                    bonus: 1
                };
            }
            this.gameStats = {
                currentBet: 17,
                betSize: 1,
                line: 17,
                win: 0,
                login_time: null,
                freeSpin: 0,
                slotHeight: [-1784, -1784, -1784]
            };
            this.setupLocalStorage();
        },
        setupLocalStorage: function() {
            var E3 = 449407121;
            if (true) {
                try {
                    this.storage = new ig.Storage();
                }
                catch (e) {}
                var key = 'playerStats-slotBeach',
                    value = this.playerStats;
            }
            else {
                ig.game.jukebox.player.setVolume(0.01);
                this.spawnEntity(EntityPointerSelector, 50, 50);
                this.playBackgroundMusic();
                this.finalize();
            }
            if (this.storage.isSet(key)) {
                this.playerStats = this.storage.get(key);
            }
            else {
                ig.game.virgin = true;
                ig.game.firstBonus = true;
                this.submitStats();
            }
        },
        submitStats: function() {
            var n3 = -1480561695;
            if (true) {
                var key = 'playerStats-slotBeach',
                    value = this.playerStats;
                try {
                    this.storage.set(key, value);
                }
                catch (e) {
                    if ((e.name).toUpperCase() == 'QUOTA_EXCEEDED_ERR') {
                        ig.game.virgin = true;
                        console.log('localstorage is not available');
                    }
                }
            }
            else {
                console.log('showing debug menu ...');
                MobileAdInGameEnd.Initialize();
                this.setupMarketJSAPI();
            }
        },
        resetPlayerStats: function() {
            var U8 = -126947748;
            if (false) {
                ig.music.pause();
                ig.system.stopRunLoop.call(ig.system);
                console.log('Game Paused');
                ig.soundHandler.setForceMuted(false);
                ig.music.play();
            }
            else {
                this.playerStats = {
                    credit: 500,
                    exp: 0,
                    jackpot: 1000000,
                    last_login: null,
                    collectedTimely: false,
                    bonus: 0
                };
            }
            this.submitStats();
        },
        resetGameStats: function() {
            var p9 = 1826790377;
            if (false) {
                this.submitStats();
                return false;
            }
            else {
                this.gameStats.currentBet = 5;
            }
            this.gameStats.betSize = 5;
            this.gameStats.line = 17;
        },
        finalize: function() {
            var T9 = 1570077215;
            if (true) {
                if (ig.ua.mobile) {
                    ig.game.showOverlay(['play']);
                }
                else {
                    ig.game.startGame();
                }
                sizeHandler();
            }
            else {
                console.log("showing anti-piracy layer ...");
                ig.game.jukebox.player.pause();
                ig.input.unbindAll();
            }
        },
        getLoginTime: function() {
            var b4 = 2058211883;
            if (false) {
                ig.game.startGame();
                this.submitStats();
            }
            else {
                ig.game.gameStats.login_time = new Date();
            }
        },
        injectMobileLink: function() {
            var m4 = -1579762347;
            if (true) {
                $('#play').attr('onclick', 'ig.game.setupJukebox();ig.game.pressPlay();ig.game.staticSound.play();');
            }
            else {
                ig.game.showOverlay(['play']);
                ig.game.jukebox.player.pause();
                this.fpsTimer.reset();
                $('#' + divList[i]).hide();
            }
        },
        removeLoadingWheel: function() {
            var y6 = 1260245501;
            if (true) {
                try {
                    $('#ajaxbar').css('background', 'none');
                }
                catch (err) {
                    console.log(err);
                }
            }
            else {
                ig.soundHandler.setForceMuted(false);
                MobileAdInGameHeader.Initialize();
                this.injectMobileLink();
                this.entities[i].update();
                $('#play').attr('onclick', 'ig.game.setupJukebox();ig.game.pressPlay();ig.game.staticSound.play();');
            }
        },
        showDebugMenu: function() {
            console.log('showing debug menu ...');
            ig.Entity._debugShowBoxes = true;
            $('.ig_debug').show();
        },
        setupDesktopMusic: function() {
            ig.music.add('media/audio/bgm.*', 'bgm');
        },
        setupMarketJSAPI: function() {
            MarketJS.Initialize('ahVzfm1hcmtldGpzLWdhbWVjZW50ZXJyFQsSCFVzZXJHYW1lGICAgIDAhb8KDA');
        },
        startGame: function() {
            if (ig.ua.mobile) {
                this.director = new ig.Director(this, [LevelOpening, LevelTitle, LevelGame, LevelWheel]);
            }
            else {
                this.director = new ig.Director(this, [LevelOpening, LevelTitle, LevelGame, LevelWheel]);
            }
            if (_SETTINGS['Branding']['Splash']['Enabled']) {
                try {
                    this.branding = new ig.BrandingSplash();
                }
                catch (err) {
                    console.log(err);
                    console.log('Loading original levels ...');
                    this.director.loadLevel(this.director.currentLevel);
                }
            }
            else {
                this.director.loadLevel(this.director.currentLevel);
            }
            this.playBackgroundMusic();
        },
        playBackgroundMusic: function() {
            if (ig.ua.mobile) {
                ig.game.jukebox.player.resume();
            }
            else {
                ig.music.play();
            }
        },
        stopBackgroundMusic: function() {
            if (ig.ua.mobile) {
                ig.game.jukebox.player.pause();
            }
            else {
                ig.music.pause();
            }
        },
        fpsMultiplierFunction: function() {
            if (!this.fpsTimer) {
                this.fpsTimer = new ig.Timer(1 * ig.Timer.timeScale);
            }
            if (this.fpsTimer && this.fpsTimer.delta() < 0) {
                if (this.fpsCounter != null) {
                    this.fpsCounter++;
                }
                else {
                    this.fpsCounter = 0;
                }
            }
            else {
                ig.game.fps = this.fpsCounter;
                if (ig.game.fps < 31) {
                    ig.Timer.timeScale = 60 / ig.game.fps * 0.75;
                    ig.game.fpsMultiplier = 60 / ig.game.fps * 0.75;
                }
                else {
                    ig.Timer.timeScale = 1;
                    ig.game.fpsMultiplier = 1;
                }
                this.fpsCounter = 0;
                this.fpsTimer.set(1 * ig.Timer.timeScale);
                this.fpsTimer.reset();
            }
        },
        endGame: function() {
            console.log('End game');
            this.stopBackgroundMusic();
            if (ig.ua.mobile) {
                if (_SETTINGS['Ad']['Mobile']['End']['Enabled'])
                    MobileAdInGameEnd.Initialize();
            }
        },
        setupControls: function() {
            ig.input.unbindAll();
            ig.input.initMouse();
            ig.input.bind(ig.KEY.MOUSE1, 'click');
        },
        setupJukebox: function() {
            if (ig.ua.mobile) {
                this.jukebox = new ig.Jukebox();
            }
        },
        setupURLParameters: function() {
            this.setupURLParameters = new ig.UrlParameters();
        },
        pressPlay: function() {
            var Y6 = -577940246;
            if (false) {
                this.injectMobileLink();
                ig.game.jukebox.player.pause();
                top.location.replace(self.location.href);
                this.fpsTimer.reset();
            }
            else {
                this.hideOverlay(['play']);
                this.startGame();
            }
            if (ig.ua.mobile) {
                if (_SETTINGS['Ad']['Mobile']['Footer']['Enabled'])
                    MobileAdInGameFooter.Initialize();
            }
            if (ig.ua.mobile) {
                if (_SETTINGS['Ad']['Mobile']['Header']['Enabled'])
                    MobileAdInGameHeader.Initialize();
            }
        },
        pauseGame: function() {
            ig.system.stopRunLoop.call(ig.system);
            console.log('Game Paused');
        },
        resumeGame: function() {
            var x2 = 375857872;
            if (false) {
                ig.game.jukebox.player.resume();
            }
            else {
                ig.system.startRunLoop.call(ig.system);
                console.log('Game Resumed');
            }
        },
        showOverlay: function(divList) {
            for (i = 0; i < divList.length; i++) {
                $('#' + divList[i]).show();
                document.getElementById(divList[i]).style.visibility = "visible";
            }
        },
        hideOverlay: function(divList) {
            for (i = 0; i < divList.length; i++) {
                $('#' + divList[i]).hide();
                document.getElementById(divList[i]).style.visibility = "hidden";
            }
        },
        pressMute: function() {
            try {
                if (ig.game.muted) {
                    this.unmute();
                }
                else {
                    this.mute();
                }
            }
            catch (e) {
                console.log("pressMute() error: " + e);
            }
        },
        mute: function() {
            ig.game.muted = true;
            ig.game.stopAllSounds();
            if (ig.ua.mobile) {
                ig.game.jukebox.player.pause();
                ig.game.jukebox.player.setVolume(0.01);
            }
            else {
                ig.music.volume = 0;
                ig.Sound.enabled = false;
            }
            Howler.volume(0);
            Howler.mute();
        },
        unmute: function() {
            ig.game.muted = false;
            if (ig.ua.mobile) {
                ig.game.jukebox.player.resume();
                ig.game.jukebox.player.setVolume(1);
            }
            else {
                ig.music.volume = 1;
                ig.Sound.enabled = true;
            }
            Howler.volume(1);
            Howler.unmute();
        },
        stopAllSounds: function() {
            for (i = 0; i < ig.resources.length; i++) {
                if (ig.resources[i].multiChannel) {
                    ig.resources[i].stop();
                }
            }
        },
        loadLevel: function(data) {
            this.parent(data);
            this.spawnEntity(EntityPointerSelector, 50, 50);
        },
        removeEntity: function(ent) {
            this.parent(ent);
            document.getElementById('more-games').style.display = 'none';
        },
        update: function() {
            if (this.paused) {
                for (var i = 0; i < this.entities.length; i++) {
                    if (this.entities[i].ignorePause) {
                        this.entities[i].update();
                    }
                }
            }
            else {
                this.parent();
                if (ig.game.jukebox) {
                    if (ig.ua.mobile) {
                        for (var s in ig.game.jukebox.player.settings.spritemap) {
                            if (ig.game.jukebox.player.getCurrentTime() < (ig.game.jukebox.player.settings.spritemap[s].end + ig.game.jukebox.player.settings.timeout / 1000)) {}
                            else {
                                ig.game.jukebox.player.pause();
                                this.setupJukebox();
                                ig.game.jukebox.player.resume(ig.game.jukebox.player.settings.spritemap[s].start);
                            }
                        }
                    }
                }
            }
        }
    });
    var device = getQueryVariable("device");
    if (device) {
        switch (device) {
        case 'mobile':
            ig.ua.mobile = true;
            break;
        case 'desktop':
            ig.ua.mobile = false;
            break;
        default:
            break;
        }
    }
    else {}
    var force_rotate = getQueryVariable("force-rotate");
    if (force_rotate) {
        switch (force_rotate) {
        case 'portrait':
            console.log('force rotate to portrait');
            window.orientation = 0;
            break;
        case 'landscape':
            console.log('force rotate to horizontal');
            window.orientation = 90;
            break;
        default:
            alert('wrong command/type in param force-rotate. Defaulting value to portrait');
            window.orientation = 0;
        }
    }
    if (ig.ua.mobile) {
        ig.Sound.enabled = false;
        ig.main('#canvas', MyGame, 60, mobileWidth, mobileHeight, 1, ig.SplashLoader);
    }
    else {
        ig.main('#canvas', MyGame, 60, desktopWidth, desktopHeight, 1, ig.SplashLoader);
    }
    if (ig.ua.mobile) {
        orientationHandler();
    }
    sizeHandler();
    var TIME_SPENT = 0;
    function incrementTimeSpent() {
        TIME_SPENT++;
    }
    window.setInterval(function() {
        incrementTimeSpent();
    }, 1000);
    window.onunload = window.onbeforeunload = function() {
        var payload = {
            'ExitGame': {
                'Time': TIME_SPENT,
                'Count': 1,
            },
        };
        MarketJS.MultiMetric.Write(payload);
    };
    Array
});

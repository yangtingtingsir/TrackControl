function buildIOSMeta() {
    for (var n, i, r = [{
        name: "viewport",
        content: "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
    }, {
        name: "apple-mobile-web-app-capable",
        content: "yes"
    }, {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black"
    }], t = 0; t < r.length; t++)
        n = document.createElement("meta"),
        n.name = r[t].name,
        n.content = r[t].content,
        i = window.document.head.querySelector('meta[name="' + n.name + '"]'),
        i && i.parentNode.removeChild(i),
        window.document.head.appendChild(n)
}
function hideIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "none");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "none");
    jQuery(".xxx-game-iframe-full").removeClass("xxx-game-iframe-iphone-se")
}
function buildIOSFullscreenPanel() {
    var n = "";
    n += '<div class="xxx-ios-fullscreen-message">';
    n += '<div class="xxx-ios-fullscreen-swipe">';
    n += "<\/div>";
    n += "<\/div>";
    n += '<div class="xxx-ios-fullscreen-scroll">';
    n += "<\/div>";
    jQuery("body").append(n)
}
function showIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "block");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "block")
}
function __iosResize() {
    if (window.scrollTo(0, 0),
    console.log(window.devicePixelRatio),
    console.log(window.innerWidth),
    console.log(window.innerHeight),
    platform.product === "iPhone")
        switch (window.devicePixelRatio) {
        case 2:
            switch (window.innerWidth) {
            case 568:
                window.innerHeight === 320 || jQuery(".xxx-game-iframe-full").addClass("xxx-game-iframe-iphone-se");
                break;
            case 667:
                window.innerHeight === 375 ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                break;
            case 808:
                window.innerHeight === 414 ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                break;
            default:
                hideIOSFullscreenPanel()
            }
            break;
        case 3:
            switch (window.innerWidth) {
            case 736:
                window.innerHeight === 414 ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                break;
            case 724:
                window.innerHeight === 375 ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                break;
            case 808:
                window.innerHeight === 414 ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                break;
            default:
                hideIOSFullscreenPanel()
            }
            break;
        default:
            hideIOSFullscreenPanel()
        }
}
function iosResize() {
    __iosResize();
    setTimeout(function() {
        __iosResize()
    }, 500)
}
function iosInIframe() {
    try {
        return window.self !== window.top
    } catch (n) {
        return !0
    }
}
function isIOSLessThen13() {
    var n = platform.os
      , t = n.family.toLowerCase()
      , i = parseFloat(n.version);
    return t === "ios" && i < 13 ? !0 : !1
}
function trace(n) {
    console.log(n)
}
function isIpad() {
    var n = "ontouchstart"in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
      , t = navigator.userAgent.includes("Intel Mac OS X");
    return n && t
}
function isMobile() {
    return isIpad() ? !0 : navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ? !0 : !1
}
function isIOS() {
    var n, t;
    if (isIpad())
        return !0;
    for (n = ["iPad", "iPhone", "iPod", "Mac"]; n.length; ) {
        let i = navigator?.userAgentData?.platform || navigator?.platform;
        if (i = i.toLowerCase(),
        t = n.pop(),
        i && i.includes(t.toLowerCase()))
            return !0
    }
    return !1
}
function getSize(n) {
    var u, e = n.toLowerCase(), f = window.document, t = f.documentElement, i, r;
    return window["inner" + n] === undefined ? u = t["client" + n] : window["inner" + n] != t["client" + n] ? (i = f.createElement("body"),
    i.id = "vpw-test-b",
    i.style.cssText = "overflow:scroll",
    r = f.createElement("div"),
    r.id = "vpw-test-d",
    r.style.cssText = "position:absolute;top:-1000px",
    r.innerHTML = "<style>@media(" + e + ":" + t["client" + n] + "px){body#vpw-test-b div#vpw-test-d{" + e + ":7px!important}}<\/style>",
    i.appendChild(r),
    t.insertBefore(i, f.head),
    u = r["offset" + n] == 7 ? t["client" + n] : window["inner" + n],
    t.removeChild(i)) : u = window["inner" + n],
    u
}
function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}
function getIOSWindowHeight() {
    var n = document.documentElement.clientWidth / window.innerWidth;
    return window.innerHeight * n
}
function getHeightOfIOSToolbars() {
    var n = (window.orientation === 0 ? screen.height : screen.width) - getIOSWindowHeight();
    return n > 1 ? n : 0
}
function sizeHandler() {
    var i, r, h;
    if (window.scrollTo(0, 1),
    $("#canvas")) {
        i = platform.name !== null && platform.name.toLowerCase() === "safari" ? getIOSWindowHeight() : getSize("Height");
        r = getSize("Width");
        s_bFocus && _checkOrientation(r, i);
        var e = Math.min(i / CANVAS_HEIGHT, r / CANVAS_WIDTH)
          , n = Math.round(CANVAS_WIDTH * e)
          , t = Math.round(CANVAS_HEIGHT * e)
          , f = 0;
        t < i ? (f = i - t,
        t += f,
        n += f * (CANVAS_WIDTH / CANVAS_HEIGHT)) : n < r && (f = r - n,
        n += f,
        t += f * (CANVAS_HEIGHT / CANVAS_WIDTH));
        var u = i / 2 - t / 2
          , o = r / 2 - n / 2
          , s = CANVAS_WIDTH / n;
        (o * s < -EDGEBOARD_X || u * s < -EDGEBOARD_Y) && (e = Math.min(i / (CANVAS_HEIGHT - EDGEBOARD_Y * 2), r / (CANVAS_WIDTH - EDGEBOARD_X * 2)),
        n = Math.round(CANVAS_WIDTH * e),
        t = Math.round(CANVAS_HEIGHT * e),
        u = (i - t) / 2,
        o = (r - n) / 2,
        s = CANVAS_WIDTH / n);
        s_iOffsetX = -1 * o * s;
        s_iOffsetY = -1 * u * s;
        u >= 0 && (s_iOffsetY = 0);
        o >= 0 && (s_iOffsetX = 0);
        s_oGame !== null && s_oGame.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_oMenu !== null && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_oLevelMenu !== null && s_oLevelMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsIphone && s_oStage ? (canvas = document.getElementById("canvas"),
        s_oStage.canvas.width = n * 2,
        s_oStage.canvas.height = t * 2,
        canvas.style.width = n + "px",
        canvas.style.height = t + "px",
        h = Math.min(n / CANVAS_WIDTH, t / CANVAS_HEIGHT),
        s_iScaleFactor = h * 2,
        s_oStage.scaleX = s_oStage.scaleY = h * 2) : s_bMobile ? ($("#canvas").css("width", n + "px"),
        $("#canvas").css("height", t + "px")) : s_oStage && (s_oStage.canvas.width = n,
        s_oStage.canvas.height = t,
        s_iScaleFactor = Math.min(n / CANVAS_WIDTH, t / CANVAS_HEIGHT),
        s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        u < 0 ? $("#canvas").css("top", u + "px") : (u = (i - t) / 2,
        $("#canvas").css("top", u + "px"));
        $("#canvas").css("left", o + "px");
        fullscreenHandler()
    }
}
function _checkOrientation(n, t) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (n > t ? $(".orientation-msg-container").attr("data-orientation") === "landscape" ? ($(".orientation-msg-container").css("display", "none"),
    s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
    s_oMain.stopUpdate()) : $(".orientation-msg-container").attr("data-orientation") === "portrait" ? ($(".orientation-msg-container").css("display", "none"),
    s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
    s_oMain.stopUpdate()))
}
function inIframe() {
    try {
        return window.self !== window.top
    } catch (n) {
        return !0
    }
}
function createBitmap(n, t, i) {
    var u = new createjs.Bitmap(n)
      , r = new createjs.Shape;
    return t && i ? r.graphics.beginFill("#fff").drawRect(0, 0, t, i) : r.graphics.beginFill("#ff0").drawRect(0, 0, n.width, n.height),
    u.hitArea = r,
    u
}
function createSprite(n, t, i, r, u, f) {
    var e, o;
    return e = t !== null ? new createjs.Sprite(n,t) : new createjs.Sprite(n),
    o = new createjs.Shape,
    o.graphics.beginFill("#000000").drawRect(-i, -r, u, f),
    e.hitArea = o,
    e
}
function randomFloatBetween(n, t, i) {
    return typeof i == "undefined" && (i = 2),
    parseFloat(Math.min(n + Math.random() * (t - n), t).toFixed(i))
}
function shuffle(n) {
    for (var t = n.length, r, i; 0 !== t; )
        i = Math.floor(Math.random() * t),
        t -= 1,
        r = n[t],
        n[t] = n[i],
        n[i] = r;
    return n
}
function formatTime(n) {
    var i, t, r;
    return n /= 1e3,
    i = Math.floor(n / 60),
    t = n - i * 60,
    t = parseFloat(t).toFixed(1),
    r = "",
    r += i < 10 ? "0" + i + ":" : i + ":",
    r + (t < 10 ? "0" + t : t)
}
function NoClickDelay(n) {
    this.element = n;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}
function shuffle(n) {
    for (var t = n.length, r, i; t > 0; )
        i = Math.floor(Math.random() * t),
        t--,
        r = n[t],
        n[t] = n[i],
        n[i] = r;
    return n
}
function ctlArcadeResume() {
    s_oMain !== null && s_oMain.startUpdate()
}
function ctlArcadePause() {
    s_oMain !== null && s_oMain.stopUpdate()
}
function getParamValue(n) {
    for (var i, u = window.location.search.substring(1), r = u.split("&"), t = 0; t < r.length; t++)
        if (i = r[t].split("="),
        i[0] == n)
            return i[1]
}
function playSound(n, t, i) {
    return DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1 ? (s_aSounds[n].play(),
    s_aSounds[n].volume(t),
    s_aSounds[n].loop(i),
    s_aSounds[n]) : null
}
function stopSound(n) {
    (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && s_aSounds[n].stop()
}
function setVolume(n, t) {
    (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && s_aSounds[n].volume(t)
}
function setMute(n, t) {
    (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && s_aSounds[n].mute(t)
}
function saveItem(n, t) {
    s_bStorageAvailable && localStorage.setItem(n, t)
}
function getItem(n) {
    return s_bStorageAvailable ? localStorage.getItem(n) : null
}
function fullscreenHandler() {
    ENABLE_FULLSCREEN && screenfull.isEnabled !== !1 && (s_bFullscreen = screenfull.isFullscreen,
    s_oInterface !== null && s_oInterface.resetFullscreenBut(),
    s_oMenu !== null && s_oMenu.resetFullscreenBut(),
    s_oLevelMenu !== null && s_oLevelMenu.resetFullscreenBut())
}
function CSpriteLibrary() {
    var t = {}, n, i, u, f, e, r;
    this.init = function(t, o, s) {
        n = {};
        i = 0;
        u = 0;
        f = t;
        e = o;
        r = s
    }
    ;
    this.addSprite = function(r, u) {
        if (!t.hasOwnProperty(r)) {
            var f = new Image;
            t[r] = n[r] = {
                szPath: u,
                oSprite: f,
                bLoaded: !1
            };
            i++
        }
    }
    ;
    this.getSprite = function(n) {
        return t.hasOwnProperty(n) ? t[n].oSprite : null
    }
    ;
    this._onSpritesLoaded = function() {
        i = 0;
        e.call(r)
    }
    ;
    this._onSpriteLoaded = function() {
        f.call(r);
        ++u === i && this._onSpritesLoaded()
    }
    ;
    this.loadSprites = function() {
        for (var t in n)
            n[t].oSprite.oSpriteLibrary = this,
            n[t].oSprite.szKey = t,
            n[t].oSprite.onload = function() {
                this.oSpriteLibrary.setLoaded(this.szKey);
                this.oSpriteLibrary._onSpriteLoaded(this.szKey)
            }
            ,
            n[t].oSprite.onerror = function(t) {
                var i = t.currentTarget;
                setTimeout(function() {
                    n[i.szKey].oSprite.src = n[i.szKey].szPath
                }, 500)
            }
            ,
            n[t].oSprite.src = n[t].szPath
    }
    ;
    this.setLoaded = function(n) {
        t[n].bLoaded = !0
    }
    ;
    this.isLoaded = function(n) {
        return t[n].bLoaded
    }
    ;
    this.getNumSprites = function() {
        return i
    }
}
function CTLText(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w) {
    this._oContainer = n;
    this._x = t;
    this._y = i;
    this._iWidth = r;
    this._iHeight = u;
    this._bMultiline = p;
    this._iFontSize = f;
    this._szAlign = e;
    this._szColor = o;
    this._szFont = s;
    this._iPaddingH = c;
    this._iPaddingV = l;
    this._bVerticalAlign = y;
    this._bFitText = v;
    this._bDebug = w;
    this._oDebugShape = null;
    this._fLineHeightFactor = h;
    this._oText = null;
    a && this.__createText(a)
}
function CPreloader() {
    var s, o, r, t, u, f, i, e, n;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.loadSprites();
        n = new createjs.Container;
        s_oStage.addChild(n)
    }
    ;
    this.unload = function() {
        n.removeAllChildren()
    }
    ;
    this._onImagesLoaded = function() {}
    ;
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    }
    ;
    this.attachSprites = function() {
        var c = new createjs.Shape, h;
        c.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        n.addChild(c);
        h = s_oSpriteLibrary.getSprite("200x200");
        i = createBitmap(h);
        i.regX = h.width * .5;
        i.regY = h.height * .5;
        i.x = CANVAS_WIDTH / 2;
        i.y = CANVAS_HEIGHT / 2 - 80;
        n.addChild(i);
        e = new createjs.Shape;
        e.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(i.x - 100, i.y - 100, 200, 200, 10);
        n.addChild(e);
        i.mask = e;
        h = s_oSpriteLibrary.getSprite("progress_bar");
        t = createBitmap(h);
        t.x = CANVAS_WIDTH / 2 - h.width / 2;
        t.y = CANVAS_HEIGHT / 2 + 70;
        n.addChild(t);
        s = h.width;
        o = h.height;
        u = new createjs.Shape;
        u.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(t.x, t.y, 1, o);
        n.addChild(u);
        t.mask = u;
        r = new createjs.Text("","30px " + FONT_GAME,"#fff");
        r.x = CANVAS_WIDTH / 2;
        r.y = CANVAS_HEIGHT / 2 + 120;
        r.textBaseline = "alphabetic";
        r.textAlign = "center";
        n.addChild(r);
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        n.addChild(f);
        createjs.Tween.get(f).to({
            alpha: 0
        }, 500).call(function() {
            createjs.Tween.removeTweens(f);
            n.removeChild(f)
        })
    }
    ;
    this.refreshLoader = function(n) {
        r.text = n + "%";
        n === 100 && (s_oMain._allResourcesLoaded(),
        r.visible = !1,
        t.visible = !1);
        u.graphics.clear();
        var i = Math.floor(n * s / 100);
        u.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(t.x, t.y, i, o)
    }
    ;
    this._init()
}
function CMain(n) {
    var t, i = 0, r = 0, u = STATE_LOADING, o, f, s, h, c, e;
    this.initContainer = function() {
        var n = document.getElementById("canvas");
        s_oStage = new createjs.Stage(n);
        s_bMobile = isMobile();
        s_bMobile === !1 ? s_oStage.enableMouseOver(20) : createjs.Touch.enable(s_oStage, !0);
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.framerate = 30;
        createjs.Ticker.on("tick", this._update);
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        seekAndDestroy() ? f = new CPreloader : f = new CPreloader
    }
    ;
    this.clearLocalStorage = function() {
        s_bStorageAvailable && localStorage.clear()
    }
    ;
    this.preloaderReady = function() {
        this.onLoadedJSON(LAYOUT_INFO);
        t = !0
    }
    ;
    this.soundLoaded = function() {
        i++;
        var n = Math.floor(i / r * 100);
        f.refreshLoader(n)
    }
    ;
    this._initSounds = function() {
        Howler.mute(!s_bAudioActive);
        s_aSoundsInfo = [];
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "win",
            loop: !1,
            volume: 1,
            ingamename: "win"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "click",
            loop: !1,
            volume: 1,
            ingamename: "click"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "game_over",
            loop: !1,
            volume: 1,
            ingamename: "game_over"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "matching",
            loop: !1,
            volume: 1,
            ingamename: "matching"
        });
        r += s_aSoundsInfo.length;
        s_aSounds = [];
        for (var n = 0; n < s_aSoundsInfo.length; n++)
            this.tryToLoadSound(s_aSoundsInfo[n], !1)
    }
    ;
    this.tryToLoadSound = function(n, t) {
        setTimeout(function() {
            s_aSounds[n.ingamename] = new Howl({
                src: [n.path + n.filename + ".mp3"],
                autoplay: !1,
                preload: !0,
                loop: n.loop,
                volume: n.volume,
                onload: s_oMain.soundLoaded,
                onloaderror: function(n) {
                    for (var t = 0; t < s_aSoundsInfo.length; t++)
                        if (s_aSounds[s_aSoundsInfo[t].ingamename]._sounds.length > 0 && n === s_aSounds[s_aSoundsInfo[t].ingamename]._sounds[0]._id) {
                            s_oMain.tryToLoadSound(s_aSoundsInfo[t], !0);
                            break
                        } else
                            document.querySelector("#block_game").style.display = "none"
                },
                onplayerror: function(n) {
                    for (var t = 0; t < s_aSoundsInfo.length; t++)
                        if (n === s_aSounds[s_aSoundsInfo[t].ingamename]._sounds[0]._id) {
                            s_aSounds[s_aSoundsInfo[t].ingamename].once("unlock", function() {
                                s_aSounds[s_aSoundsInfo[t].ingamename].play();
                                s_aSoundsInfo[t].ingamename === "soundtrack" && s_oGame !== null && setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
                            });
                            break
                        }
                }
            })
        }, t ? 200 : 0)
    }
    ;
    this._loadImages = function() {
        var t, n;
        for (s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this),
        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png"),
        s_oSpriteLibrary.addSprite("but_continue", "./sprites/but_continue.png"),
        s_oSpriteLibrary.addSprite("but_generic_small", "./sprites/but_generic_small.png"),
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png"),
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg"),
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png"),
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png"),
        s_oSpriteLibrary.addSprite("but_level", "./sprites/but_level.png"),
        s_oSpriteLibrary.addSprite("bg_menu_level", "./sprites/bg_menu_level.jpg"),
        s_oSpriteLibrary.addSprite("arrow_left", "./sprites/arrow_left.png"),
        s_oSpriteLibrary.addSprite("arrow_right", "./sprites/arrow_right.png"),
        s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png"),
        s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png"),
        s_oSpriteLibrary.addSprite("but_exit_small", "./sprites/but_exit_small.png"),
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png"),
        s_oSpriteLibrary.addSprite("tiles", "./sprites/tiles.png"),
        s_oSpriteLibrary.addSprite("selection", "./sprites/selection.png"),
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg"),
        s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png"),
        s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png"),
        s_oSpriteLibrary.addSprite("panel_bg", "./sprites/panel_bg.png"),
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png"),
        s_oSpriteLibrary.addSprite("but_shuffle", "./sprites/but_shuffle.png"),
        s_oSpriteLibrary.addSprite("but_hint", "./sprites/but_hint.png"),
        t = s_oLevelSettings.getLayoutNames(),
        n = 0; n < t.length; n++)
            s_oSpriteLibrary.addSprite("but_level_" + n, "./sprites/but_level_" + t[n] + ".png");
        r += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    }
    ;
    this._onImagesLoaded = function() {
        i++;
        var n = Math.floor(i / r * 100);
        f.refreshLoader(n)
    }
    ;
    this._onAllImagesLoaded = function() {}
    ;
    this._allResourcesLoaded = function() {
        f.unload();
        try {
            saveItem("ls_available", "ok")
        } catch (n) {
            s_bStorageAvailable = !1
        }
        s_oMain.gotoMenu()
    }
    ;
    this.onLoadedJSON = function(n) {
        s_oLevelSettings = new CLevelSettings(n);
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && s_oMain._initSounds();
        s_oMain._loadImages()
    }
    ;
    this.stopUpdate = function() {
        t = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && Howler.mute(!0)
    }
    ;
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        t = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && s_bAudioActive && Howler.mute(!1)
    }
    ;
    this.gotoMenu = function() {
        s = new CMenu;
        u = STATE_MENU
    }
    ;
    this.gotoLevelMenu = function() {
        h = new CLevelMenu
    }
    ;
    this.gotoGame = function(n, t) {
        e = new CGame(n,t);
        u = STATE_GAME
    }
    ;
    this.gotoHelp = function() {
        c = new CHelp;
        u = STATE_HELP
    }
    ;
    this.levelSelected = function(n, t) {
        this.gotoGame(n, t)
    }
    ;
    this._update = function(n) {
        if (t !== !1) {
            var i = (new Date).getTime();
            s_iTimeElaps = i - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = i;
            s_iCntTime >= 1e3 && (s_iCurFps = s_iCntFps,
            s_iCntTime -= 1e3,
            s_iCntFps = 0);
            u === STATE_GAME && e.update();
            s_oStage !== undefined && s_oStage.update(n)
        }
    }
    ;
    s_oMain = this;
    o = n;
    BONUS_TIME = n.bonus_time;
    HINT_PENALTY = n.hint_penalty;
    ENABLE_FULLSCREEN = n.fullscreen;
    ENABLE_CHECK_ORIENTATION = n.check_orientation;
    s_bAudioActive = n.audio_enable_on_startup;
    this.initContainer()
}
function CTextButton(n, t, i, r, u, f, e, o) {
    var l, c, d, g, h, a, y, p, w, s, v, b, k = o;
    this._init = function(n, t, i, r, u, f, e) {
        l = !1;
        c = 1;
        h = [];
        a = [];
        b = createBitmap(i);
        d = i.width;
        g = i.height;
        s = new createjs.Container;
        s.x = n;
        s.y = t;
        s.regX = i.width / 2;
        s.regY = i.height / 2;
        s_bMobile || (s.cursor = "pointer");
        s.addChild(b, v);
        k.addChild(s);
        v = new CTLText(s,20,0,i.width - 40,i.height + 2,e,"center",f,u,1,2,2,r,!0,!0,!1,!1);
        this._initListener()
    }
    ;
    this.unload = function() {
        s.off("mousedown", y);
        s.off("pressup", p);
        k.removeChild(s)
    }
    ;
    this.setVisible = function(n) {
        s.visible = n
    }
    ;
    this.setAlign = function(n) {
        v.textAlign = n
    }
    ;
    this.setTextX = function(n) {
        v.x = n
    }
    ;
    this.setScale = function(n) {
        s.scaleX = s.scaleY = n;
        c = n
    }
    ;
    this.enable = function() {
        l = !1
    }
    ;
    this.disable = function() {
        l = !0
    }
    ;
    this._initListener = function() {
        y = s.on("mousedown", this.buttonDown);
        p = s.on("pressup", this.buttonRelease)
    }
    ;
    this.addEventListener = function(n, t, i) {
        h[n] = t;
        a[n] = i
    }
    ;
    this.addEventListenerWithParams = function(n, t, i, r) {
        h[n] = t;
        a[n] = i;
        w = r
    }
    ;
    this.buttonRelease = function() {
        l || (playSound("click", 1, !1),
        s.scaleX = c,
        s.scaleY = c,
        h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(a[ON_MOUSE_UP], w))
    }
    ;
    this.buttonDown = function() {
        l || (s.scaleX = c * .9,
        s.scaleY = c * .9,
        h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(a[ON_MOUSE_DOWN]))
    }
    ;
    this.setPosition = function(n, t) {
        s.x = n;
        s.y = t
    }
    ;
    this.tweenPosition = function(n, t, i, r, u, f, e) {
        createjs.Tween.get(s).wait(r).to({
            x: n,
            y: t
        }, i, u).call(function() {
            f !== undefined && f.call(e)
        })
    }
    ;
    this.changeText = function(n) {
        v.refreshText(n)
    }
    ;
    this.setX = function(n) {
        s.x = n
    }
    ;
    this.setY = function(n) {
        s.y = n
    }
    ;
    this.getButtonImage = function() {
        return s
    }
    ;
    this.getX = function() {
        return s.x
    }
    ;
    this.getY = function() {
        return s.y
    }
    ;
    this.getSprite = function() {
        return s
    }
    ;
    this.getScale = function() {
        return s.scaleX
    }
    ;
    this._init(n, t, i, r, u, f, e)
}
function CGfxButton(n, t, i, r) {
    var f, e, o = [], u, h, c, s;
    return this._init = function(n, t, i) {
        f = [];
        e = [];
        u = createBitmap(i);
        u.x = n;
        u.y = t;
        u.regX = i.width / 2;
        u.regY = i.height / 2;
        u.cursor = "pointer";
        s.addChild(u);
        this._initListener()
    }
    ,
    this.unload = function() {
        u.off("mousedown", h);
        u.off("pressup", c);
        s.removeChild(u)
    }
    ,
    this.setVisible = function(n) {
        u.visible = n
    }
    ,
    this._initListener = function() {
        h = u.on("mousedown", this.buttonDown);
        c = u.on("pressup", this.buttonRelease)
    }
    ,
    this.addEventListener = function(n, t, i) {
        f[n] = t;
        e[n] = i
    }
    ,
    this.addEventListenerWithParams = function(n, t, i, r) {
        f[n] = t;
        e[n] = i;
        o = r
    }
    ,
    this.buttonRelease = function() {
        playSound("click", 1, !1);
        u.scaleX = 1;
        u.scaleY = 1;
        f[ON_MOUSE_UP] && f[ON_MOUSE_UP].call(e[ON_MOUSE_UP], o)
    }
    ,
    this.buttonDown = function() {
        u.scaleX = .9;
        u.scaleY = .9;
        f[ON_MOUSE_DOWN] && f[ON_MOUSE_DOWN].call(e[ON_MOUSE_DOWN], o)
    }
    ,
    this.setPosition = function(n, t) {
        u.x = n;
        u.y = t
    }
    ,
    this.setX = function(n) {
        u.x = n
    }
    ,
    this.setY = function(n) {
        u.y = n
    }
    ,
    this.getButtonImage = function() {
        return u
    }
    ,
    this.getX = function() {
        return u.x
    }
    ,
    this.getY = function() {
        return u.y
    }
    ,
    s = r,
    this._init(n, t, i),
    this
}
function CToggle(n, t, i, r, u) {
    var e, o, s, f, h, c, l = u;
    this._init = function(n, t, i, r) {
        o = [];
        s = [];
        var u = {
            images: [i],
            frames: {
                width: i.width / 2,
                height: i.height,
                regX: i.width / 4,
                regY: i.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        }
          , h = new createjs.SpriteSheet(u);
        e = r;
        f = createSprite(h, "state_" + e, i.width / 4, i.height / 2, i.width / 2, i.height);
        f.x = n;
        f.y = t;
        f.stop();
        f.cursor = "pointer";
        l.addChild(f);
        this._initListener()
    }
    ;
    this.unload = function() {
        f.off("mousedown", h);
        f.off("pressup", c);
        l.removeChild(f)
    }
    ;
    this._initListener = function() {
        h = f.on("mousedown", this.buttonDown);
        c = f.on("pressup", this.buttonRelease)
    }
    ;
    this.addEventListener = function(n, t, i) {
        o[n] = t;
        s[n] = i
    }
    ;
    this.setActive = function(n) {
        e = n;
        f.gotoAndStop("state_" + e)
    }
    ;
    this.buttonRelease = function() {
        f.scaleX = 1;
        f.scaleY = 1;
        playSound("click", 1, !1);
        e = !e;
        f.gotoAndStop("state_" + e);
        o[ON_MOUSE_UP] && o[ON_MOUSE_UP].call(s[ON_MOUSE_UP], e)
    }
    ;
    this.buttonDown = function() {
        f.scaleX = .9;
        f.scaleY = .9;
        o[ON_MOUSE_DOWN] && o[ON_MOUSE_DOWN].call(s[ON_MOUSE_DOWN])
    }
    ;
    this.setPosition = function(n, t) {
        f.x = n;
        f.y = t
    }
    ;
    this._init(n, t, i, r)
}
function CMenu() {
    var r, n, u, o, s, f, h, t, e, i = null, c = null;
    this._init = function() {
        var l, a, v;
        o = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(o);
        s = new CGfxButton(CANVAS_WIDTH / 2,CANVAS_HEIGHT - 120,s_oSpriteLibrary.getSprite("but_play"),s_oStage);
        s.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && (l = s_oSpriteLibrary.getSprite("audio_icon"),
        r = {
            x: CANVAS_WIDTH - l.width / 4 - 10,
            y: l.height / 2 + 10
        },
        f = new CToggle(r.x,r.y,l,s_bAudioActive,s_oStage),
        f.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this));
        l = s_oSpriteLibrary.getSprite("but_credits");
        n = {
            x: l.height / 2 + 10,
            y: l.height / 2 + 10
        };
        h = new CGfxButton(n.x,n.y,l,s_oStage);
        h.addEventListener(ON_MOUSE_UP, this._onButCreditsRelease, this);
        a = window.document;
        v = a.documentElement;
        i = v.requestFullscreen || v.mozRequestFullScreen || v.webkitRequestFullScreen || v.msRequestFullscreen;
        c = a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen;
        ENABLE_FULLSCREEN === !1 && (i = !1);
        i && screenfull.isEnabled && (l = s_oSpriteLibrary.getSprite("but_fullscreen"),
        u = {
            x: n.x + l.width / 2,
            y: n.y
        },
        e = new CToggle(u.x,u.y,l,s_bFullscreen,s_oStage),
        e.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        t = new createjs.Shape;
        t.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(t);
        s_bStorageAvailable || new CAlertSavingBox(TEXT_ERR_LS,s_oStage);
        createjs.Tween.get(t).to({
            alpha: 0
        }, 400).call(function() {
            t.visible = !1
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    }
    ;
    this.unload = function() {
        s.unload();
        s = null;
        h.unload();
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && (f.unload(),
        f = null);
        i && screenfull.isEnabled && e.unload();
        s_oStage.removeChild(o);
        o = null;
        s_oStage.removeChild(t);
        t = null;
        s_oMenu = null
    }
    ;
    this.refreshButtonPos = function(t, o) {
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && f.setPosition(r.x - t, o + r.y);
        i && screenfull.isEnabled && e.setPosition(u.x + t, u.y + o);
        h.setPosition(n.x + t, n.y + o)
    }
    ;
    this._exitFromMenu = function() {
        this.unload();
        s_oMain.gotoLevelMenu();
        $(s_oMain).trigger("start_session")
    }
    ;
    this._onButPlayRelease = function() {
        s_oMenu._exitFromMenu()
    }
    ;
    this._onButCreditsRelease = function() {
        new CCreditsPanel
    }
    ;
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    }
    ;
    this.resetFullscreenBut = function() {
        i && screenfull.isEnabled && e.setActive(s_bFullscreen)
    }
    ;
    this._onFullscreenRelease = function() {
        s_bFullscreen ? c.call(window.document) : i.call(window.document.documentElement);
        sizeHandler()
    }
    ;
    s_oMenu = this;
    this._init()
}
function CGame(n, t) {
    var p = !1, f, l, tt, b, a, g, v, nt, k, i = [], w, o, d, y, h, c, r, u, e, s;
    this._init = function(n, t) {
        l = n;
        k = t;
        var i = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(i);
        this.createLayout();
        e = new CInterface(0);
        this._setTiles();
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    }
    ;
    this.unload = function() {
        p = !1;
        e.unload();
        s_oStage.removeAllChildren();
        s_oGame = null
    }
    ;
    this.reset = function() {
        f = 0;
        v = 0;
        a = BONUS_TIME;
        g = i.length;
        b = 2;
        h = null;
        c = null;
        r = null;
        u = null;
        this._storeSelectableTiles();
        e.reset();
        $(s_oMain).trigger("start_level", t);
        p = !0
    }
    ;
    this.refreshButtonPos = function(n, t) {
        s.x = d.x + n;
        e.refreshButtonPos(n, t)
    }
    ;
    this.stopUpdate = function() {
        p = !1
    }
    ;
    this.startUpdate = function() {
        p = !0
    }
    ;
    this.createLayout = function() {
        var n, u;
        y = s_oLevelSettings.getLayoutInfos(l);
        d = y.layout_pos;
        var t = y.pos
          , r = y.blocks
          , f = y.block_list
          , e = y.heights;
        for (tt = SCORE_BONUS_LAYOUT[y.difficulty],
        s = new createjs.Container,
        s.x = d.x,
        s.y = d.y,
        s.scaleX = s.scaleY = nt = y.layout_scale,
        s_oStage.addChild(s),
        n = 0; n < t.length; n++)
            u = new CTile(n,t[n].x,t[n].y,r[n].left_block,r[n].right_block,r[n].up_block,f[n],e[n],s),
            i[n] = u
    }
    ;
    this._setTiles = function() {
        var t, n;
        do {
            for (t = s_oLevelSettings.getShuffledTiles(),
            n = 0; n < i.length; n++)
                i[n].setValue(t[n]);
            this.reset()
        } while (o.length === 0);
        e.setHintNum(o.length)
    }
    ;
    this._unloadAllTiles = function() {
        for (var n = 0; n < i.length; n++)
            i[n].unload()
    }
    ;
    this._storeSelectableTiles = function() {
        var n, t, u, r;
        for (w = [],
        n = 0; n < i.length; n++)
            i[n].isSelectable() && w.push(i[n]);
        for (o = [],
        t = 0; t < w.length; ) {
            for (u = w[t],
            r = t + 1; r < w.length; r++)
                u.getValue() === w[r].getValue() && o.push({
                    first: u,
                    second: w[r]
                });
            t++
        }
    }
    ;
    this.onShuffleBoard = function() {
        var n;
        r && r.deselect();
        u && u.deselect();
        var f = s_oLevelSettings.getLayoutInfos(l)
          , t = f.blocks
          , s = f.block_list;
        for (n = 0; n < i.length; n++)
            i[n].initBlocksArray(t[n].left_block, t[n].right_block, t[n].up_block, s[n]);
        this._setTiles();
        e.setHintNum(o.length)
    }
    ;
    this.onRestartBoard = function() {
        var n;
        r && r.deselect();
        u && u.deselect();
        var f = s_oLevelSettings.getLayoutInfos(l)
          , t = f.blocks
          , s = f.block_list;
        for (n = 0; n < i.length; n++)
            i[n].initBlocksArray(t[n].left_block, t[n].right_block, t[n].up_block, s[n]);
        this.reset();
        e.setHintNum(o.length);
        $(s_oMain).trigger("restart_level", k)
    }
    ;
    this.onHintReleased = function() {
        o.length !== 0 && (r && r.deselect(),
        u && u.deselect(),
        r = o[v].first,
        u = o[v].second,
        r.showHint(),
        u.showHint(),
        v++,
        v === o.length && (v = 0),
        a = 0,
        f -= HINT_PENALTY,
        f < 0 && (f = 0),
        e.setScore(f))
    }
    ;
    this.removeHint = function() {
        r !== null && u !== null && (this._checkForSimilarBlock(r),
        r.disable(),
        this._checkForSimilarBlock(u),
        u.disable(),
        playSound("matching", 1, !1),
        r = null,
        u = null,
        v = 0)
    }
    ;
    this.onTileRemoved = function() {
        g--;
        b--;
        b === 0 && (this._storeSelectableTiles(),
        e.setHintNum(o.length),
        g === 0 ? this._win() : o.length === 0 && this._gameOver(),
        b = 2)
    }
    ;
    this.onTileSelected = function(n) {
        r !== null && (r.deselect(),
        r = null);
        u !== null && (u.deselect(),
        u = null);
        h === null ? h = i[n] : (c = i[n],
        this._checkTileMatching())
    }
    ;
    this.onTileDeselected = function() {
        h = null
    }
    ;
    this._checkTileMatching = function() {
        h.getValue() === c.getValue() ? (this._checkForSimilarBlock(h),
        h.remove(),
        this._checkForSimilarBlock(c),
        c.remove(),
        v = 0,
        this._calculateScore(),
        playSound("matching", 1, !1)) : (h.deselect(),
        c.deselect());
        h = null;
        c = null
    }
    ;
    this._checkForSimilarBlock = function(n) {
        for (var u, r = n.getBlockList(), t = 0; t < r.length; t++)
            u = i[r[t].tile],
            u.removeBlock(n.getIndex())
    }
    ;
    this._calculateScore = function() {
        var n = Math.floor(a / 100);
        n > 0 && e.showBonusScore(s.x + c.getX() * nt, s.y + c.getY() * nt, n);
        f += tt * n;
        e.setScore(f);
        a = BONUS_TIME
    }
    ;
    this._gameOver = function() {
        p = !1;
        var n = getItem("md_best_score_" + l);
        (n === null || n < f) && (saveItem("md_best_score_" + l, f),
        n = f);
        e.gameOver(f);
        playSound("game_over", 1, !1);
        $(s_oMain).trigger("end_level", k)
    }
    ;
    this._win = function() {
        p = !1;
        var n = getItem("md_best_score_" + l);
        (n === null || n < f) && (saveItem("md_best_score_" + l, f),
        n = f);
        e.win(f, n);
        playSound("win", 1, !1);
        $(s_oMain).trigger("end_level", k)
    }
    ;
    this.onExit = function() {
        this.unload();
        s_oMain.gotoMenu();
        $(s_oMain).trigger("end_session")
    }
    ;
    this.update = function() {
        p !== !1 && (a -= s_iTimeElaps,
        a < 0 && (a = 0),
        e.refreshTime(a))
    }
    ;
    s_oGame = this;
    this._init(n, t)
}
function CInterface(n) {
    var u, e, l, a, o, v, s, h, r, t, c, w, b, k, i, d, g, y, p, f = null, nt = null;
    return this._init = function(n) {
        var it, rt, tt;
        l = {
            x: 10,
            y: 5
        };
        t = new createjs.Text(TEXT_SCORE + " " + n,"22px " + FONT_GAME,"#d7d5d2");
        t.x = l.x;
        t.y = l.y;
        t.textAlign = "left";
        s_oStage.addChild(t);
        a = {
            x: 200,
            y: 5
        };
        r = new createjs.Text(TEXT_BONUS_TIME + ":0","22px " + FONT_GAME,"#d7d5d2");
        r.x = a.x;
        r.y = a.y;
        r.textAlign = "left";
        s_oStage.addChild(r);
        tt = s_oSpriteLibrary.getSprite("but_exit");
        e = {
            x: CANVAS_WIDTH - tt.width / 2,
            y: tt.height / 2 + 4
        };
        c = new CGfxButton(e.x,e.y,tt,s_oStage);
        c.addEventListener(ON_MOUSE_UP, this._onExit, this);
        DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1 ? (u = {
            x: e.x - tt.width,
            y: tt.height / 2 + 4
        },
        tt = s_oSpriteLibrary.getSprite("audio_icon"),
        y = new CToggle(u.x,u.y,tt,s_bAudioActive,s_oStage),
        y.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this),
        o = {
            x: u.x - tt.width / 2,
            y: u.y
        }) : o = {
            x: c.getX() - tt.width,
            y: tt.height / 2 + 4
        };
        it = window.document;
        rt = it.documentElement;
        f = rt.requestFullscreen || rt.mozRequestFullScreen || rt.webkitRequestFullScreen || rt.msRequestFullscreen;
        nt = it.exitFullscreen || it.mozCancelFullScreen || it.webkitExitFullscreen || it.msExitFullscreen;
        ENABLE_FULLSCREEN === !1 && (f = !1);
        f && screenfull.isEnabled && (tt = s_oSpriteLibrary.getSprite("but_fullscreen"),
        p = new CToggle(o.x,o.y,tt,s_bFullscreen,s_oStage),
        p.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        tt = s_oSpriteLibrary.getSprite("but_shuffle");
        h = {
            x: CANVAS_WIDTH - tt.width / 2 - 10,
            y: CANVAS_HEIGHT - tt.height / 2
        };
        k = new CGfxButton(h.x,h.y,tt,s_oStage);
        k.addEventListener(ON_MOUSE_UP, this._onShuffle, this);
        tt = s_oSpriteLibrary.getSprite("but_restart");
        s = {
            x: CANVAS_WIDTH - tt.width / 2 - 10,
            y: h.y - tt.height
        };
        b = new CGfxButton(s.x,s.y,tt,s_oStage);
        b.addEventListener(ON_MOUSE_UP, this._onRestart, this);
        tt = s_oSpriteLibrary.getSprite("but_hint");
        v = {
            x: CANVAS_WIDTH - tt.width / 2 - 10,
            y: s.y - tt.height
        };
        w = new CButHint(v.x,v.y,tt,"0",FONT_GAME,"#d7d5d2",28,s_oStage);
        w.addEventListener(ON_MOUSE_UP, this._onHint, this);
        i = new CAreYouSurePanel(s_oStage);
        i.addEventListener(ON_RELEASE_NO, this._onReleaseNoMsgBox, this);
        i.addEventListener(ON_RELEASE_YES, this._onReleaseYesMsgBox, this);
        d = new CWinPanel;
        g = new CGameOverPanel
    }
    ,
    this.unload = function() {
        c.unload();
        c = null;
        DISABLE_SOUND_MOBILE === !1 && (y.unload(),
        y = null);
        f && screenfull.isEnabled && p.unload();
        d.unload();
        g.unload();
        i.unload();
        s_oInterface = null
    }
    ,
    this.refreshButtonPos = function(n, i) {
        t.x = l.x + n;
        t.y = l.y + i;
        r.x = a.x + n;
        r.y = a.y + i;
        w.setPosition(v.x - n, v.y - i);
        b.setPosition(s.x - n, s.y - i);
        k.setPosition(h.x - n, h.y - i);
        c.setPosition(e.x - n, e.y + i);
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && y.setPosition(u.x - n, i + u.y);
        f && screenfull.isEnabled && p.setPosition(o.x - n, o.y + i)
    }
    ,
    this.reset = function() {
        t.text = TEXT_SCORE + " 0"
    }
    ,
    this.refreshTime = function(n) {
        r.text = TEXT_BONUS_TIME + " " + n
    }
    ,
    this.setScore = function(n) {
        t.text = TEXT_SCORE + " " + n
    }
    ,
    this.setHintNum = function(n) {
        w.setText(n)
    }
    ,
    this.showBonusScore = function(n, t, i) {
        new CScoreText(n,t,i)
    }
    ,
    this.gameOver = function(n) {
        g.show(n)
    }
    ,
    this.win = function(n, t) {
        d.show(n, t)
    }
    ,
    this.refreshScore = function(n) {
        t.text = TEXT_SCORE + " " + n
    }
    ,
    this._onReleaseYesMsgBox = function(n) {
        switch (n) {
        case ALERT_FROM_EXIT:
            s_oGame.onExit();
            break;
        case ALERT_FROM_RESTART:
            i.hide();
            s_oGame.onRestartBoard();
            break;
        case ALERT_FROM_SHUFFLE:
            i.hide();
            s_oGame.onShuffleBoard()
        }
    }
    ,
    this._onReleaseNoMsgBox = function() {
        s_oGame.startUpdate()
    }
    ,
    this._onShuffle = function() {
        s_oGame.stopUpdate();
        i.show(TEXT_ALERT_SHUFFLE, ALERT_FROM_SHUFFLE)
    }
    ,
    this._onRestart = function() {
        s_oGame.stopUpdate();
        i.show(TEXT_ALERT_RESTART, ALERT_FROM_RESTART)
    }
    ,
    this._onHint = function() {
        s_oGame.onHintReleased()
    }
    ,
    this._onExit = function() {
        s_oGame.stopUpdate();
        i.show(TEXT_ALERT_EXIT, ALERT_FROM_EXIT)
    }
    ,
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    }
    ,
    this.resetFullscreenBut = function() {
        f && screenfull.isEnabled && p.setActive(s_bFullscreen)
    }
    ,
    this._onFullscreenRelease = function() {
        s_bFullscreen ? nt.call(window.document) : f.call(window.document.documentElement);
        sizeHandler()
    }
    ,
    s_oInterface = this,
    this._init(n),
    this
}
function CWinPanel() {
    var r, u, t, i, f, n;
    this.init = function() {
        var c, l, s, h;
        n = new createjs.Container;
        f = n.on("click", function() {});
        n.visible = !1;
        s_oStage.addChild(n);
        c = s_oSpriteLibrary.getSprite("msg_box");
        l = createBitmap(c);
        n.addChild(l);
        var e = 430
          , o = 60
          , s = CANVAS_WIDTH / 2
          , h = CANVAS_HEIGHT / 2 - 80
          , a = new CTLText(n,s - e / 2,h - o / 2,e,o,50,"center","#000",FONT_GAME,1,2,2,TEXT_CONGRATS,!0,!0,!0,!1);
        a.setOutline(2);
        var v = new CTLText(n,s - e / 2,h - o / 2,e,o,50,"center","#d7d5d2",FONT_GAME,1,2,2,TEXT_CONGRATS,!0,!0,!0,!1)
          , e = 430
          , o = 50
          , s = CANVAS_WIDTH / 2
          , h = CANVAS_HEIGHT / 2;
        r = new CTLText(n,s - e / 2,h - o / 2,e,o,40,"center","#fff",FONT_GAME,1,2,2,TEXT_FINAL_SCORE,!0,!0,!0,!1);
        s = CANVAS_WIDTH / 2;
        h = CANVAS_HEIGHT / 2 + 40;
        u = new CTLText(n,s - e / 2,h - o / 2,e,o,40,"center","#fff",FONT_GAME,1,2,2,TEXT_BEST_SCORE,!0,!0,!0,!1);
        t = new CTextButton(CANVAS_WIDTH / 2 - 140,CANVAS_HEIGHT / 2 + 100,s_oSpriteLibrary.getSprite("but_generic_small"),TEXT_EXIT,FONT_GAME,"#d7d5d2",20,n);
        t.addEventListener(ON_MOUSE_UP, this._onExit, this);
        i = new CTextButton(CANVAS_WIDTH / 2 + 140,CANVAS_HEIGHT / 2 + 100,s_oSpriteLibrary.getSprite("but_generic_small"),TEXT_SHUFFLE,FONT_GAME,"#d7d5d2",20,n);
        i.addEventListener(ON_MOUSE_UP, this._onShuffle, this)
    }
    ;
    this.unload = function() {
        t.unload();
        i.unload();
        n.off("click", f)
    }
    ;
    this.show = function(t, i) {
        r.refreshText(TEXT_FINAL_SCORE + ": " + t);
        u.refreshText(TEXT_BEST_SCORE + ": " + i);
        n.alpha = 0;
        n.visible = !0;
        createjs.Tween.get(n).to({
            alpha: 1
        }, 500, createjs.Ease.cubicOut).call(function() {
            $(s_oMain).trigger("show_interlevel_ad")
        });
        $(s_oMain).trigger("save_score", t);
        $(s_oMain).trigger("share_event", t)
    }
    ;
    this._onShuffle = function() {
        createjs.Tween.get(n).to({
            alpha: 0
        }, 500, createjs.Ease.cubicOut).call(function() {
            n.visible = !1;
            s_oGame.onShuffleBoard()
        })
    }
    ;
    this._onExit = function() {
        createjs.Tween.get(n).to({
            alpha: 0
        }, 500, createjs.Ease.cubicOut).call(function() {
            n.visible = !1;
            s_oMain.gotoMenu()
        })
    }
    ;
    this.init()
}
function CGameOverPanel() {
    var u, r, t, i, f, n;
    this.init = function() {
        var l, a, s;
        n = new createjs.Container;
        f = n.on("click", function() {});
        n.visible = !1;
        s_oStage.addChild(n);
        l = s_oSpriteLibrary.getSprite("msg_box");
        a = createBitmap(l);
        n.addChild(a);
        var e = 430
          , o = 50
          , h = CANVAS_WIDTH / 2
          , c = CANVAS_HEIGHT / 2 - 100
          , v = new CTLText(n,h - e / 2,c - o / 2,e,o,40,"center","#000",FONT_GAME,1,2,2,TEXT_NO_TILES,!0,!0,!0,!1);
        v.setOutline(2);
        var y = new CTLText(n,h - e / 2,c - o / 2,e,o,40,"center","#d7d5d2",FONT_GAME,1,2,2,TEXT_NO_TILES,!0,!0,!0,!1)
          , e = 430
          , o = 30
          , h = CANVAS_WIDTH / 2
          , c = CANVAS_HEIGHT / 2 - 60;
        u = new CTLText(n,h - e / 2,c - o / 2,e,o,30,"center","#d7d5d2",FONT_GAME,1,2,2,TEXT_NO_TILES,!0,!0,!0,!1);
        s = s_oSpriteLibrary.getSprite("but_generic_small");
        t = new CTextButton(CANVAS_WIDTH / 2,CANVAS_HEIGHT / 2 + 100,s,TEXT_SHUFFLE,FONT_GAME,"#d7d5d2",20,n);
        t.addEventListener(ON_MOUSE_UP, this._onShuffle, this);
        i = new CTextButton(CANVAS_WIDTH / 2,t.getY() - s.height,s,TEXT_RESTART,FONT_GAME,"#d7d5d2",20,n);
        i.addEventListener(ON_MOUSE_UP, this._onRestart, this);
        r = new CTextButton(CANVAS_WIDTH / 2,i.getY() - s.height,s,TEXT_EXIT,FONT_GAME,"#d7d5d2",20,n);
        r.addEventListener(ON_MOUSE_UP, this._onExit, this)
    }
    ;
    this.unload = function() {
        r.unload();
        t.unload();
        i.unload();
        n.off("click", f)
    }
    ;
    this.show = function(t) {
        u.refreshText(TEXT_FINAL_SCORE + ": " + t);
        n.alpha = 0;
        n.visible = !0;
        createjs.Tween.get(n).to({
            alpha: 1
        }, 500, createjs.Ease.cubicOut).call(function() {
            $(s_oMain).trigger("show_interlevel_ad")
        });
        $(s_oMain).trigger("save_score", t);
        $(s_oMain).trigger("share_event", t)
    }
    ;
    this._onShuffle = function() {
        s_oGame.onShuffleBoard();
        createjs.Tween.get(n).to({
            alpha: 0
        }, 500, createjs.Ease.cubicOut).call(function() {
            n.visible = !1
        })
    }
    ;
    this._onExit = function() {
        n.visible = !1;
        s_oMain.gotoMenu()
    }
    ;
    this._onRestart = function() {
        s_oGame.onRestartBoard();
        createjs.Tween.get(n).to({
            alpha: 0
        }, 500, createjs.Ease.cubicOut).call(function() {
            n.visible = !1
        })
    }
    ;
    this.init()
}
function CLevelSettings(n) {
    var t, i, r, u;
    this._init = function(n) {
        u = n;
        NUM_LEVELS = Object.keys(u).length;
        t = [];
        r = [];
        for (var f = 0; f < NUM_LEVELS; f++)
            t[f] = u[f],
            r[f] = t[f].label;
        i = ["circle1", "circle1", "circle1", "circle1", "circle2", "circle2", "circle2", "circle2", "circle3", "circle3", "circle3", "circle3", "circle4", "circle4", "circle4", "circle4", "circle5", "circle5", "circle5", "circle5", "circle6", "circle6", "circle6", "circle6", "circle7", "circle7", "circle7", "circle7", "circle8", "circle8", "circle8", "circle8", "circle9", "circle9", "circle9", "circle9", "bamboo1", "bamboo1", "bamboo1", "bamboo1", "bamboo2", "bamboo2", "bamboo2", "bamboo2", "bamboo3", "bamboo3", "bamboo3", "bamboo3", "bamboo4", "bamboo4", "bamboo4", "bamboo4", "bamboo5", "bamboo5", "bamboo5", "bamboo5", "bamboo6", "bamboo6", "bamboo6", "bamboo6", "bamboo7", "bamboo7", "bamboo7", "bamboo7", "bamboo8", "bamboo8", "bamboo8", "bamboo8", "bamboo9", "bamboo9", "bamboo9", "bamboo9", "characters1", "characters1", "characters1", "characters1", "characters2", "characters2", "characters2", "characters2", "characters3", "characters3", "characters3", "characters3", "characters4", "characters4", "characters4", "characters4", "characters5", "characters5", "characters5", "characters5", "characters6", "characters6", "characters6", "characters6", "characters7", "characters7", "characters7", "characters7", "characters8", "characters8", "characters8", "characters8", "characters9", "characters9", "characters9", "characters9", "wind1", "wind1", "wind1", "wind1", "wind2", "wind2", "wind2", "wind2", "wind3", "wind3", "wind3", "wind3", "wind4", "wind4", "wind4", "wind4", "dragon1", "dragon1", "dragon1", "dragon1", "dragon2", "dragon2", "dragon2", "dragon2", "dragon3", "dragon3", "dragon3", "dragon3", "flower1", "flower2", "flower3", "flower4", "season1", "season2", "season3", "season4"]
    }
    ;
    this.getLayoutInfos = function(n) {
        return t[n]
    }
    ;
    this.getShuffledTiles = function() {
        return i = shuffle(i)
    }
    ;
    this.getLayoutNames = function() {
        return r
    }
    ;
    this._init(n)
}
function CLevelMenu() {
    var t, w, u, l, n, f, e, o, s, h, a, y = null, v = null, b, p, i, c, r = null, k = null;
    this._init = function() {
        var ut, u, d, g, rt, it;
        t = 0;
        i = new createjs.Container;
        s_oStage.addChild(i);
        ut = createBitmap(s_oSpriteLibrary.getSprite("bg_menu_level"));
        i.addChild(ut);
        u = s_oSpriteLibrary.getSprite("but_exit");
        e = {
            x: CANVAS_WIDTH - u.width / 2 - 10,
            y: u.height / 2 + 10
        };
        h = new CGfxButton(e.x,e.y,u,i);
        h.addEventListener(ON_MOUSE_UP, this._onExit, this);
        w = u.height;
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && (o = {
            x: h.getX() - u.width,
            y: u.height / 2 + 10
        },
        a = new CToggle(o.x,o.y,s_oSpriteLibrary.getSprite("audio_icon"),s_bAudioActive,s_oStage),
        a.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this));
        d = window.document;
        g = d.documentElement;
        r = g.requestFullscreen || g.mozRequestFullScreen || g.webkitRequestFullScreen || g.msRequestFullscreen;
        k = d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen;
        ENABLE_FULLSCREEN === !1 && (r = !1);
        r && screenfull.isEnabled && (u = s_oSpriteLibrary.getSprite("but_fullscreen"),
        s = {
            x: u.width / 4 + 9,
            y: u.height / 2 + 10
        },
        c = new CToggle(s.x,s.y,u,s_bFullscreen,s_oStage),
        c.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        this._checkBoundLimits();
        l = [];
        var nt = CANVAS_WIDTH - EDGEBOARD_X * 2 - 100
          , st = Math.floor(nt / NUM_COLS_PAGE_LEVEL) / 2
          , ft = 0;
        for (rt = 0; rt < NUM_COLS_PAGE_LEVEL; rt++)
            l.push(ft),
            ft += st * 2;
        n = [];
        this._createNewLevelPage(0, NUM_LEVELS);
        f = {
            x: CANVAS_WIDTH / 2,
            y: n[0].y - n[0].getBounds().height / 2 - 60
        };
        var nt = 500
          , tt = 50
          , et = f.x
          , ot = f.y;
        if (p = new CTLText(i,et - nt / 2,ot - tt / 2,nt,tt,40,"center","#000",FONT_GAME,1,2,2,TEXT_SELECT_LEVEL.toUpperCase(),!0,!0,!0,!1),
        p.setOutline(2),
        b = new CTLText(i,et - nt / 2,ot - tt / 2,nt,tt,40,"center","#d7d5d2",FONT_GAME,1,2,2,TEXT_SELECT_LEVEL.toUpperCase(),!0,!0,!0,!1),
        n.length > 1) {
            for (it = 1; it < n.length; it++)
                n[it].visible = !1;
            y = new CGfxButton(CANVAS_WIDTH / 2 + 320,CANVAS_HEIGHT / 2 + 30,s_oSpriteLibrary.getSprite("arrow_right"),i);
            y.addEventListener(ON_MOUSE_UP, this._onRight, this);
            v = new CGfxButton(CANVAS_WIDTH / 2 - 320,CANVAS_HEIGHT / 2 + 30,s_oSpriteLibrary.getSprite("arrow_left"),i);
            v.addEventListener(ON_MOUSE_UP, this._onLeft, this)
        }
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    }
    ;
    this.unload = function() {
        for (var n = 0; n < u.length; n++)
            u[n].unload();
        for ((DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && a.unload(),
        r && screenfull.isEnabled && c.unload(),
        h.unload(),
        v !== null && (v.unload(),
        y.unload()),
        n = 0; n < u.length; n++)
            u[n].unload();
        s_oStage.removeChild(i);
        s_oLevelMenu = null
    }
    ;
    this.refreshButtonPos = function(n, t) {
        p.setY(f.y + t);
        b.setY(f.y + t);
        h.setPosition(e.x - n, e.y + t);
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && a.setPosition(o.x - n, t + o.y);
        r && screenfull.isEnabled && c.setPosition(s.x + n, s.y + t)
    }
    ;
    this._checkBoundLimits = function() {
        for (var i = s_oSpriteLibrary.getSprite("but_level"), r = 0, f = CANVAS_HEIGHT - EDGEBOARD_Y * 2 - w * 2, n = 0; r < f; )
            r += i.height + 20,
            n++;
        NUM_ROWS_PAGE_LEVEL > n && (NUM_ROWS_PAGE_LEVEL = n);
        for (var t = 0, u = 0, e = CANVAS_WIDTH - EDGEBOARD_X * 2, i = s_oSpriteLibrary.getSprite("but_level"); u < e; )
            u += i.width / 2 + 5,
            t++;
        NUM_COLS_PAGE_LEVEL > t && (NUM_COLS_PAGE_LEVEL = t)
    }
    ;
    this._createNewLevelPage = function(t, r) {
        var f = new createjs.Container, e;
        i.addChild(f);
        n.push(f);
        u = [];
        var o = 0
          , c = 0
          , a = 1
          , v = !1;
        for (e = t; e < r; e++) {
            var h = s_oLevelSettings.getLayoutInfos(e)
              , s = s_oSpriteLibrary.getSprite("but_level_" + e)
              , y = new CButLevel(l[o] + s.width / 2,c + s.height / 2,s,h.name,h.difficulty,FONT_GAME,"#d7d5d2",20,f);
            if (y.addEventListenerWithParams(ON_MOUSE_UP, this._onButLevelRelease, this, [e, h.name]),
            u.push(y),
            o++,
            o === l.length && e < r - 1 && (o = 0,
            c += s.height + 20,
            a++,
            a > NUM_ROWS_PAGE_LEVEL)) {
                v = !0;
                break
            }
        }
        f.x = CANVAS_WIDTH / 2;
        f.y = CANVAS_HEIGHT / 2 + 30;
        f.regX = f.getBounds().width / 2;
        f.regY = f.getBounds().height / 2;
        v && this._createNewLevelPage(e + 1, r)
    }
    ;
    this._onRight = function() {
        n[t].visible = !1;
        t++;
        t >= n.length && (t = 0);
        n[t].visible = !0
    }
    ;
    this._onLeft = function() {
        n[t].visible = !1;
        t--;
        t < 0 && (t = n.length - 1);
        n[t].visible = !0
    }
    ;
    this._onButLevelRelease = function(n) {
        s_oLevelMenu.unload();
        s_oMain.levelSelected(n[0], n[1])
    }
    ;
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    }
    ;
    this.resetFullscreenBut = function() {
        r && screenfull.isEnabled && c.setActive(s_bFullscreen)
    }
    ;
    this._onFullscreenRelease = function() {
        s_bFullscreen ? k.call(window.document) : r.call(window.document.documentElement);
        sizeHandler()
    }
    ;
    this._onExit = function() {
        s_oLevelMenu.unload();
        s_oMain.gotoMenu()
    }
    ;
    s_oLevelMenu = this;
    this._init()
}
function CButLevel(n, t, i, r, u, f, e, o, s) {
    var a, p, y, c, v, w, d, g, h, l, b, nt, k;
    return this._init = function(n, t, i, r, u, f, e, o) {
        var d;
        a = !1;
        c = [];
        v = [];
        h = new createjs.Container;
        h.x = n;
        h.y = t;
        h.regX = i.width / 2;
        h.regY = i.height / 2;
        h.cursor = "pointer";
        k.addChild(h);
        l = createBitmap(i);
        h.addChild(l);
        p = i.width;
        y = i.height;
        var s = 130
          , w = 26
          , g = i.width / 2
          , d = 22;
        nt = new CTLText(h,g - s / 2,d - w / 2,s,w,o,"center",e,f,1,2,2,u.toUpperCase(),!0,!0,!0,!1);
        nt.setShadow("#000000", 2, 2, 4);
        d = y - 18;
        b = new CTLText(h,g - s / 2,d - w / 2,s,w,o,"center",e,f,1,2,2,r.toUpperCase(),!0,!0,!0,!1);
        b.setShadow("#000000", 2, 2, 4);
        this._initListener()
    }
    ,
    this.unload = function() {
        h.off("mousedown", d);
        h.off("pressup", g);
        k.removeChild(h)
    }
    ,
    this.setVisible = function(n) {
        h.visible = n
    }
    ,
    this.enable = function() {
        a = !1;
        l.filters = [];
        l.cache(0, 0, p, y)
    }
    ,
    this.disable = function() {
        a = !0;
        var n = (new createjs.ColorMatrix).adjustSaturation(-100);
        l.filters = [new createjs.ColorMatrixFilter(n)];
        l.cache(0, 0, p, y)
    }
    ,
    this._initListener = function() {
        d = h.on("mousedown", this.buttonDown);
        g = h.on("pressup", this.buttonRelease)
    }
    ,
    this.addEventListener = function(n, t, i) {
        c[n] = t;
        v[n] = i
    }
    ,
    this.addEventListenerWithParams = function(n, t, i, r) {
        c[n] = t;
        v[n] = i;
        w = r
    }
    ,
    this.buttonRelease = function() {
        a || (playSound("click", 1, !1),
        h.scaleX = 1,
        h.scaleY = 1,
        c[ON_MOUSE_UP] && c[ON_MOUSE_UP].call(v[ON_MOUSE_UP], w))
    }
    ,
    this.buttonDown = function() {
        a || (h.scaleX = .9,
        h.scaleY = .9,
        c[ON_MOUSE_DOWN] && c[ON_MOUSE_DOWN].call(v[ON_MOUSE_DOWN], w))
    }
    ,
    this.setPosition = function(n, t) {
        h.x = n;
        h.y = t
    }
    ,
    this.changeText = function(n) {
        b.refreshText(n)
    }
    ,
    this.setX = function(n) {
        h.x = n
    }
    ,
    this.setY = function(n) {
        h.y = n
    }
    ,
    this.getButtonImage = function() {
        return h
    }
    ,
    this.getX = function() {
        return h.x
    }
    ,
    this.getY = function() {
        return h.y
    }
    ,
    k = s,
    this._init(n, t, i, r, u, f, e, o, s),
    this
}
function CCreditsPanel() {
    var e, t, r, o, u, i, f, s, n;
    this._init = function() {
        var y, l;
        n = new createjs.Container;
        n.alpha = 0;
        s_oStage.addChild(n);
        y = new createjs.Shape;
        y.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        n.addChild(y);
        e = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        n.addChild(e);
        i = new createjs.Shape;
        i.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        i.alpha = .01;
        s = i.on("click", this._onLogoButRelease);
        n.addChild(i);
        l = s_oSpriteLibrary.getSprite("but_exit_small");
        f = {
            x: 684,
            y: 174
        };
        r = new CGfxButton(f.x,f.y,l,n);
        r.addEventListener(ON_MOUSE_UP, this.unload, this);
        var h = 430
          , c = 30
          , a = CANVAS_WIDTH / 2
          , v = 226;
        u = new CTLText(n,a - h / 2,v - c / 2,h,c,28,"center","#000",FONT_GAME,1,2,2,TEXT_CREDITS_DEVELOPED,!0,!0,!0,!1);
        u.setOutline(2);
        o = new CTLText(n,a - h / 2,v - c / 2,h,c,28,"center","#d7d5d2",FONT_GAME,1,2,2,TEXT_CREDITS_DEVELOPED,!0,!0,!0,!1);
        l = s_oSpriteLibrary.getSprite("logo_ctl");
        t = createBitmap(l);
        t.regX = l.width / 2;
        t.regY = l.height / 2;
        t.x = CANVAS_WIDTH / 2;
        t.y = CANVAS_HEIGHT / 2;
        n.addChild(t);
        var h = 430
          , c = 30
          , a = CANVAS_WIDTH / 2
          , v = 384;
        u = new CTLText(n,a - h / 2,v - c / 2,h,c,20,"center","#000",FONT_GAME,1,2,2,"www.codethislab.com",!0,!0,!0,!1);
        u.setOutline(2);
        o = new CTLText(n,a - h / 2,v - c / 2,h,c,20,"center","#d7d5d2",FONT_GAME,1,2,2,"www.codethislab.com",!0,!0,!0,!1);
        createjs.Tween.get(n).to({
            alpha: 1
        }, 600, createjs.Ease.cubicOut);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    }
    ;
    this.refreshButtonPos = function() {}
    ;
    this.unload = function() {
        i.off("click", s);
        r.unload();
        r = null;
        s_oStage.removeChild(n)
    }
    ;
    this._onLogoButRelease = function() {
        window.open("http://www.codethislab.com/index.php?&l=en", "_blank")
    }
    ;
    this._init()
}
function CAlertSavingBox(n, t) {
    var e, r, f, i, u;
    this._init = function(n) {
        var f, o, t;
        i = new createjs.Container;
        u.addChild(i);
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.alpha = .5;
        f.on("click", function() {});
        i.addChild(f);
        o = s_oSpriteLibrary.getSprite("msg_box");
        t = createBitmap(o);
        t.x = CANVAS_WIDTH * .5;
        t.y = CANVAS_HEIGHT * .5;
        t.regX = o.width * .5;
        t.regY = o.height * .5;
        i.addChild(t);
        var s = 350
          , h = 220
          , c = CANVAS_WIDTH / 2
          , l = 270
          , a = new CTLText(i,c - s / 2,l - h / 2,s,h,28,"center","#000000",FONT_GAME,1,2,2,n,!0,!0,!0,!1);
        a.setOutline(2);
        e = new CTLText(i,c - s / 2,l - h / 2,s,h,28,"center","#d7d5d2",FONT_GAME,1,2,2,n,!0,!0,!0,!1);
        r = new CGfxButton(CANVAS_WIDTH / 2 + 206,174,s_oSpriteLibrary.getSprite("but_exit_small"),i);
        r.addEventListener(ON_MOUSE_UP, this._onButOk, this)
    }
    ;
    this._onButOk = function() {
        f.unload()
    }
    ;
    this.unload = function() {
        r.unload();
        u.removeChild(i)
    }
    ;
    f = this;
    u = t;
    this._init(n)
}
function CTile(n, t, i, r, u, f, e, o, s) {
    var d, g, v, l, nt, w, tt, ut, y, p, a, b, ft, et, ot, it, c, h, rt, k;
    return this._init = function(n, t, i, r, u, f, e, o) {
        var s, l, a;
        nt = n;
        ut = o;
        h = new createjs.Container;
        h.x = t;
        h.y = i;
        rt.addChild(h);
        s = {
            images: [s_oSpriteLibrary.getSprite("tiles")],
            frames: {
                width: TILE_WIDTH,
                height: TILE_HEIGHT,
                regX: TILE_WIDTH / 2,
                regY: TILE_HEIGHT / 2
            },
            animations: {
                bamboo1: [0, 0],
                bamboo2: [1, 1],
                bamboo3: [2, 2],
                bamboo4: [3, 3],
                bamboo5: [4, 4],
                bamboo6: [5, 5],
                bamboo7: [6, 6],
                bamboo8: [7, 7],
                bamboo9: [8, 8],
                characters1: [9, 9],
                characters2: [10, 10],
                characters3: [11, 11],
                characters4: [12, 12],
                characters5: [13, 13],
                characters6: [14, 14],
                characters7: [15, 15],
                characters8: [16, 16],
                characters9: [17, 17],
                circle1: [18, 18],
                circle2: [19, 19],
                circle3: [20, 20],
                circle4: [21, 21],
                circle5: [22, 22],
                circle6: [23, 23],
                circle7: [24, 24],
                circle8: [25, 25],
                circle9: [26, 26],
                dragon1: [27, 27],
                dragon2: [28, 28],
                dragon3: [29, 29],
                flower1: [30, 30],
                flower2: [31, 31],
                flower3: [32, 32],
                flower4: [33, 33],
                season1: [34, 34],
                season2: [35, 35],
                season3: [36, 36],
                season4: [37, 37],
                wind1: [38, 38],
                wind2: [39, 39],
                wind3: [40, 40],
                wind4: [41, 41]
            }
        };
        l = new createjs.SpriteSheet(s);
        it = createSprite(l, "bamboo1", TILE_WIDTH / 2, TILE_HEIGHT / 2, TILE_WIDTH, TILE_HEIGHT);
        h.addChild(it);
        a = s_oSpriteLibrary.getSprite("selection");
        c = createBitmap(a);
        c.x = -TILE_WIDTH / 2;
        c.y = -TILE_HEIGHT / 2 + 2;
        c.visible = !1;
        h.addChild(c);
        this.initBlocksArray(r, u, f, e);
        ft = h.on("click", this._onTileSelected);
        s_bMobile || (et = h.on("mouseover", this._onTileOver),
        ot = h.on("mouseout", this._onTileOut))
    }
    ,
    this.unload = function() {
        h.off("click", ft);
        s_bMobile || (h.off("mouseover", et),
        h.off("mouseout", ot));
        rt.removeChild(h)
    }
    ,
    this.setValue = function(n) {
        w = n;
        it.gotoAndStop(w);
        this.assignLabel()
    }
    ,
    this.initBlocksArray = function(n, t, i, r) {
        v = !1;
        d = !0;
        l = !1;
        y = [];
        p = [];
        a = [];
        b = [];
        for (var u = 0; u < n.length; u++)
            y.push(n[u]);
        for (u = 0; u < t.length; u++)
            p.push(t[u]);
        for (u = 0; u < i.length; u++)
            a.push(i[u]);
        for (u = 0; u < r.length; u++)
            b.push(r[u]);
        this._checkIfTileIsFree();
        c.visible = !1;
        h.scaleX = h.scaleY = 1;
        h.visible = !0;
        h.alpha = 1
    }
    ,
    this.assignLabel = function() {
        tt = w.indexOf("season") !== -1 ? "season" : w.indexOf("flower") !== -1 ? "flower" : w
    }
    ,
    this.deselect = function() {
        createjs.Tween.removeTweens(h);
        c.visible = !1;
        h.alpha = 1;
        v = !1;
        l = !1
    }
    ,
    this.disable = function() {
        if (l && (l = !1,
        createjs.Tween.removeTweens(h)),
        h.visible = !1,
        v = !1,
        d = !1,
        s_oGame === null)
            s_oHelp.onTileRemoved(b);
        else
            s_oGame.onTileRemoved(b)
    }
    ,
    this.remove = function() {
        d = !1;
        l && (l = !1,
        createjs.Tween.removeTweens(h));
        var n = this;
        createjs.Tween.get(h).to({
            scaleX: .1,
            scaleY: .1
        }, 300, createjs.Ease.backIn).call(function() {
            n.disable()
        })
    }
    ,
    this.showHint = function() {
        l = !0;
        this._playHintAnim()
    }
    ,
    this._playHintAnim = function() {
        createjs.Tween.get(h).to({
            alpha: .5
        }, 600, createjs.Ease.cubicOut).to({
            alpha: 1
        }, 600, createjs.Ease.cubicOut).call(function() {
            k._playHintAnim()
        })
    }
    ,
    this._checkIfTileIsFree = function() {
        g = !1;
        y.length === 0 && a.length === 0 ? g = !0 : p.length === 0 && a.length === 0 && (g = !0)
    }
    ,
    this.removeBlock = function(n) {
        for (var t = 0; t < p.length; t++)
            if (p[t] === n) {
                p.splice(t, 1);
                this._checkIfTileIsFree();
                return
            }
        for (t = 0; t < y.length; t++)
            if (y[t] === n) {
                y.splice(t, 1);
                this._checkIfTileIsFree();
                return
            }
        for (t = 0; t < a.length; t++)
            if (a[t] === n) {
                a.splice(t, 1);
                this._checkIfTileIsFree();
                return
            }
    }
    ,
    this._onTileSelected = function() {
        if (l)
            s_oGame === null ? s_oHelp.removeHint() : s_oGame.removeHint();
        else if (k.isSelectable())
            if (v)
                k.deselect(),
                s_oGame === null ? s_oHelp.onTileDeselected() : s_oGame.onTileDeselected();
            else if (v = !0,
            c.visible = !0,
            s_oGame === null)
                s_oHelp.onTileSelected(nt);
            else
                s_oGame.onTileSelected(nt)
    }
    ,
    this._onTileOver = function() {
        k.isSelectable() && (c.visible = !0)
    }
    ,
    this._onTileOut = function() {
        v === !1 && (c.visible = !1)
    }
    ,
    this.getValue = function() {
        return tt
    }
    ,
    this.isSelectable = function() {
        return g && d ? !0 : !1
    }
    ,
    this.getBlockList = function() {
        return b
    }
    ,
    this.getHeight = function() {
        return ut
    }
    ,
    this.getIndex = function() {
        return nt
    }
    ,
    this.getX = function() {
        return h.x
    }
    ,
    this.getY = function() {
        return h.y
    }
    ,
    k = this,
    rt = s,
    this._init(n, t, i, r, u, f, e, o, s),
    this
}
function CAreYouSurePanel(n) {
    var u, i, r, f, s, e, o, h, t, c;
    this._init = function() {
        var l;
        i = [];
        r = [];
        t = new createjs.Container;
        h = t.on("click", function() {});
        t.visible = !1;
        c.addChild(t);
        l = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        t.addChild(l);
        var n = 430
          , u = 130
          , a = CANVAS_WIDTH / 2
          , v = 220;
        f = new CTLText(t,a - n / 2,v - u / 2,n,u,50,"center","#000",FONT_GAME,1,2,2," ",!0,!0,!0,!1);
        f.setOutline(2);
        s = new CTLText(t,a - n / 2,v - u / 2,n,u,50,"center","#d7d5d2",FONT_GAME,1,2,2," ",!0,!0,!0,!1);
        e = new CGfxButton(CANVAS_WIDTH / 2 + 170,344,s_oSpriteLibrary.getSprite("but_yes"),t);
        e.addEventListener(ON_MOUSE_UP, this._onReleaseYes, this);
        o = new CGfxButton(CANVAS_WIDTH / 2 - 170,344,s_oSpriteLibrary.getSprite("but_no"),t);
        o.addEventListener(ON_MOUSE_UP, this._onReleaseNo, this)
    }
    ;
    this.addEventListener = function(n, t, u) {
        i[n] = t;
        r[n] = u
    }
    ;
    this.unload = function() {
        t.off("click", h);
        o.unload();
        e.unload()
    }
    ;
    this.show = function(n, i) {
        f.refreshText(n);
        s.refreshText(n);
        u = i;
        t.visible = !0;
        t.alpha = 0;
        createjs.Tween.get(t).to({
            alpha: 1
        }, 500, createjs.Ease.cubicOut)
    }
    ;
    this.hide = function() {
        t.visible = !1
    }
    ;
    this._onReleaseYes = function() {
        i[ON_RELEASE_YES] && i[ON_RELEASE_YES].call(r[ON_RELEASE_YES], u)
    }
    ;
    this._onReleaseNo = function() {
        i[ON_RELEASE_NO] && i[ON_RELEASE_NO].call(r[ON_RELEASE_NO], u);
        t.visible = !1
    }
    ;
    c = n;
    this._init(n)
}
function CScoreText(n, t, i) {
    var r;
    this._init = function(n, t, i) {
        r = new createjs.Text("+" + i," 30px " + FONT_GAME,"#d7d5d2");
        r.textAlign = "center";
        r.x = n;
        r.y = t;
        r.alpha = 0;
        r.shadow = new createjs.Shadow("#000000",2,2,2);
        s_oStage.addChild(r);
        var u = this;
        createjs.Tween.get(r).to({
            alpha: 1
        }, 400, createjs.Ease.quadIn).call(function() {
            u.moveUp()
        })
    }
    ;
    this.moveUp = function() {
        var n = r.y - 100
          , t = this;
        createjs.Tween.get(r).to({
            y: n
        }, 1e3, createjs.Ease.sineIn).call(function() {
            t.unload()
        });
        createjs.Tween.get(r).wait(500).to({
            alpha: 0
        }, 500)
    }
    ;
    this.unload = function() {
        s_oStage.removeChild(r)
    }
    ;
    this._init(n, t, i)
}
function CButHint(n, t, i, r, u, f, e, o) {
    var a, y, p, c, v, s, l, h, b, k, w;
    return this._init = function(n, t, i, r, u, f, e, o) {
        a = !1;
        c = [];
        v = [];
        w = o;
        l = createBitmap(i);
        y = i.width;
        p = i.height;
        h = new createjs.Text(r,e + "px " + u,f);
        h.textAlign = "center";
        h.textBaseline = "alphabetic";
        h.x = i.width - 35;
        h.y = i.height - 25;
        s = new createjs.Container;
        s.x = n;
        s.y = t;
        s.regX = i.width / 2;
        s.regY = i.height / 2;
        s.cursor = "pointer";
        s.addChild(l, h);
        w.addChild(s);
        this._initListener()
    }
    ,
    this.unload = function() {
        s.off("mousedown", b);
        s.off("pressup", k);
        w.removeChild(s)
    }
    ,
    this.setVisible = function(n) {
        s.visible = n
    }
    ,
    this.enable = function() {
        a = !1;
        l.filters = [];
        l.cache(0, 0, y, p)
    }
    ,
    this.disable = function() {
        a = !0;
        var n = (new createjs.ColorMatrix).adjustSaturation(-100);
        l.filters = [new createjs.ColorMatrixFilter(n)];
        l.cache(0, 0, y, p)
    }
    ,
    this._initListener = function() {
        b = s.on("mousedown", this.buttonDown);
        k = s.on("pressup", this.buttonRelease)
    }
    ,
    this.addEventListener = function(n, t, i) {
        c[n] = t;
        v[n] = i
    }
    ,
    this.setText = function(n) {
        h.text = n
    }
    ,
    this.buttonRelease = function() {
        a || (playSound("click", 1, !1),
        s.scaleX = 1,
        s.scaleY = 1,
        c[ON_MOUSE_UP] && c[ON_MOUSE_UP].call(v[ON_MOUSE_UP]))
    }
    ,
    this.buttonDown = function() {
        a || (s.scaleX = .9,
        s.scaleY = .9,
        c[ON_MOUSE_DOWN] && c[ON_MOUSE_DOWN].call(v[ON_MOUSE_DOWN]))
    }
    ,
    this.setPosition = function(n, t) {
        s.x = n;
        s.y = t
    }
    ,
    this.setX = function(n) {
        s.x = n
    }
    ,
    this.setY = function(n) {
        s.y = n
    }
    ,
    this.getButtonImage = function() {
        return s
    }
    ,
    this.getX = function() {
        return s.x
    }
    ,
    this.getY = function() {
        return s.y
    }
    ,
    this._init(n, t, i, r, u, f, e, o),
    this
}
function extractHostname(n) {
    var t;
    return t = n.indexOf("://") > -1 ? n.split("/")[2] : n.split("/")[0],
    t = t.split(":")[0],
    t.split("?")[0]
}
function extractRootDomain(n) {
    var t = extractHostname(n)
      , i = t.split(".")
      , r = i.length;
    return r > 2 && (t = i[r - 2] + "." + i[r - 1]),
    t
}
function seekAndDestroy() {
    for (var i = extractRootDomain(PAGE_URL), t = [String.fromCharCode(99, 111, 100, 101, 116, 104, 105, 115, 108, 97, 98, 46, 99, 111, 109), String.fromCharCode(101, 110, 118, 97, 116, 111, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116)], n = 0; n < t.length; n++)
        if (t[n] === i)
            return !0;
    return !1
}
var ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, s_oMenu, s_oGame, s_oInterface, s_oLevelMenu;
(function() {
    "use strict";
    var t = typeof window != "undefined" && typeof window.document != "undefined" ? window.document : {}
      , r = typeof module != "undefined" && module.exports
      , n = function() {
        for (var i, r = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = 0, f = r.length, u = {}; n < f; n++)
            if (i = r[n],
            i && i[1]in t) {
                for (n = 0; n < i.length; n++)
                    u[r[0][n]] = i[n];
                return u
            }
        return !1
    }()
      , u = {
        change: n.fullscreenchange,
        error: n.fullscreenerror
    }
      , i = {
        request: function(i) {
            return new Promise(function(r, u) {
                var f = function() {
                    this.off("change", f);
                    r()
                }
                .bind(this);
                this.on("change", f);
                i = i || t.documentElement;
                Promise.resolve(i[n.requestFullscreen]()).catch(u)
            }
            .bind(this))
        },
        exit: function() {
            return new Promise(function(i, r) {
                if (!this.isFullscreen) {
                    i();
                    return
                }
                var u = function() {
                    this.off("change", u);
                    i()
                }
                .bind(this);
                this.on("change", u);
                Promise.resolve(t[n.exitFullscreen]()).catch(r)
            }
            .bind(this))
        },
        toggle: function(n) {
            return this.isFullscreen ? this.exit() : this.request(n)
        },
        onchange: function(n) {
            this.on("change", n)
        },
        onerror: function(n) {
            this.on("error", n)
        },
        on: function(n, i) {
            var r = u[n];
            r && t.addEventListener(r, i, !1)
        },
        off: function(n, i) {
            var r = u[n];
            r && t.removeEventListener(r, i, !1)
        },
        raw: n
    };
    if (!n) {
        r ? module.exports = {
            isEnabled: !1
        } : window.screenfull = {
            isEnabled: !1
        };
        return
    }
    Object.defineProperties(i, {
        isFullscreen: {
            get: function() {
                return Boolean(t[n.fullscreenElement])
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return t[n.fullscreenElement]
            }
        },
        isEnabled: {
            enumerable: !0,
            get: function() {
                return Boolean(t[n.fullscreenEnabled])
            }
        }
    });
    r ? module.exports = i : window.screenfull = i
}
)();
/*!
 * Platform.js <https://mths.be/platform>
 * Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 * Copyright 2011-2013 John-David Dalton
 * Available under MIT license <https://mths.be/mit>
 */
(function() {
    "use strict";
    function p(n) {
        return n = String(n),
        n.charAt(0).toUpperCase() + n.slice(1)
    }
    function nt(n, t, i) {
        var r = {
            "10.0": "10",
            "6.4": "10 Technical Preview",
            "6.3": "8.1",
            "6.2": "8",
            "6.1": "Server 2008 R2 / 7",
            "6.0": "Server 2008 / Vista",
            "5.2": "Server 2003 / XP 64-bit",
            "5.1": "XP",
            "5.01": "2000 SP1",
            "5.0": "2000",
            "4.0": "NT",
            "4.90": "ME"
        };
        return t && i && /^Win/i.test(n) && !/^Windows Phone /i.test(n) && (r = r[/[\d.]+$/.exec(n)]) && (n = "Windows " + r),
        n = String(n),
        t && i && (n = n.replace(RegExp(t, "i"), i)),
        o(n.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
    }
    function tt(n, t) {
        var r = -1
          , i = n ? n.length : 0;
        if (typeof i == "number" && i > -1 && i <= k)
            while (++r < i)
                t(n[r], r, n);
        else
            s(n, t)
    }
    function o(n) {
        return n = w(n),
        /^(?:webOS|i(?:OS|P))/.test(n) ? n : p(n)
    }
    function s(n, t) {
        for (var i in n)
            g.call(n, i) && t(n[i], i, n)
    }
    function t(n) {
        return n == null ? p(n) : y.call(n).slice(8, -1)
    }
    function it(n, t) {
        var i = n != null ? typeof n[t] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(i) && (i == "object" ? !!n[t] : !0)
    }
    function i(n) {
        return String(n).replace(/([ -])(?!$)/g, "$1?")
    }
    function r(n, t) {
        var i = null;
        return tt(n, function(r, u) {
            i = t(i, r, u, n)
        }),
        i
    }
    function w(n) {
        return String(n).replace(/^ +| +$/g, "")
    }
    function h(n) {
        function ui(t) {
            return r(t, function(t, r) {
                return t || RegExp("\\b" + (r.pattern || i(r)) + "\\b", "i").exec(n) && (r.label || r)
            })
        }
        function fi(t) {
            return r(t, function(t, r, u) {
                return t || (r[p] || r[/^[a-z]+(?: +[a-z]+\b)*/i.exec(p)] || RegExp("\\b" + i(u) + "(?:\\b|\\w*\\d)", "i").exec(n)) && u
            })
        }
        function ei(t) {
            return r(t, function(t, r) {
                return t || RegExp("\\b" + (r.pattern || i(r)) + "\\b", "i").exec(n) && (r.label || r)
            })
        }
        function oi(t) {
            return r(t, function(t, r) {
                var u = r.pattern || i(r);
                return !t && (t = RegExp("\\b" + u + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(n)) && (t = nt(t, u, r.label || r)),
                t
            })
        }
        function wt(t) {
            return r(t, function(t, r) {
                var u = r.pattern || i(r);
                return !t && (t = RegExp("\\b" + u + " *\\d+[.\\w_]*", "i").exec(n) || RegExp("\\b" + u + " *\\w+-[\\w]*", "i").exec(n) || RegExp("\\b" + u + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(n)) && ((t = String(r.label && !RegExp(u, "i").test(r.label) ? r.label : t).split("/"))[1] && !/[\d.]+/.test(t[0]) && (t[0] += " " + t[1]),
                r = r.label || r,
                t = o(t[0].replace(RegExp(u, "i"), r).replace(RegExp("; *(?:" + r + "[_-])?", "i"), " ").replace(RegExp("(" + r + ")[-_.]?(\\w)", "i"), "$1 $2"))),
                t
            })
        }
        function si(t) {
            return r(t, function(t, i) {
                return t || (RegExp(i + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(n) || 0)[1] || null
            })
        }
        function hi() {
            return this.description || ""
        }
        var g = u, ut = n && typeof n == "object" && t(n) != "String", ot, at, tt;
        ut && (g = n,
        n = null);
        ot = g.navigator || {};
        at = ot.userAgent || "";
        n || (n = at);
        var ci = ut || d == b, bt = ut ? !!ot.likeChrome : /\bChrome\b/.test(n) && !/internal|\n/i.test(y.toString()), vt = "Object", kt = ut ? vt : "ScriptBridgingProxyObject", dt = ut ? vt : "Environment", gt = ut && g.java ? "JavaPackage" : t(g.java), ni = ut ? vt : "RuntimeObject", st = /\bJava/.test(gt) && g.java, ti = st && t(g.environment) == dt, ii = st ? "a" : "α", ri = st ? "b" : "β", yt = g.document || {}, ft = g.operamini || g.opera, ht = e.test(ht = ut && ft ? ft["[[Class]]"] : t(ft)) ? ht : ft = null, f, ct = n, v = [], lt = null, et = n == at, a = et && ft && typeof ft.version == "function" && ft.version(), pt, k = ui([{
            label: "EdgeHTML",
            pattern: "Edge"
        }, "Trident", {
            label: "WebKit",
            pattern: "AppleWebKit"
        }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]), c = ei(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
            label: "Microsoft Edge",
            pattern: "Edge"
        }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
            label: "Samsung Internet",
            pattern: "SamsungBrowser"
        }, "SeaMonkey", {
            label: "Silk",
            pattern: "(?:Cloud9|Silk-Accelerated)"
        }, "Sleipnir", "SlimBrowser", {
            label: "SRWare Iron",
            pattern: "Iron"
        }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
            label: "Opera Mini",
            pattern: "OPiOS"
        }, "Opera", {
            label: "Opera",
            pattern: "OPR"
        }, "Chrome", {
            label: "Chrome Mobile",
            pattern: "(?:CriOS|CrMo)"
        }, {
            label: "Firefox",
            pattern: "(?:Firefox|Minefield)"
        }, {
            label: "Firefox for iOS",
            pattern: "FxiOS"
        }, {
            label: "IE",
            pattern: "IEMobile"
        }, {
            label: "IE",
            pattern: "MSIE"
        }, "Safari"]), p = wt([{
            label: "BlackBerry",
            pattern: "BB10"
        }, "BlackBerry", {
            label: "Galaxy S",
            pattern: "GT-I9000"
        }, {
            label: "Galaxy S2",
            pattern: "GT-I9100"
        }, {
            label: "Galaxy S3",
            pattern: "GT-I9300"
        }, {
            label: "Galaxy S4",
            pattern: "GT-I9500"
        }, {
            label: "Galaxy S5",
            pattern: "SM-G900"
        }, {
            label: "Galaxy S6",
            pattern: "SM-G920"
        }, {
            label: "Galaxy S6 Edge",
            pattern: "SM-G925"
        }, {
            label: "Galaxy S7",
            pattern: "SM-G930"
        }, {
            label: "Galaxy S7 Edge",
            pattern: "SM-G935"
        }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
            label: "Kindle Fire",
            pattern: "(?:Cloud9|Silk-Accelerated)"
        }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
            label: "Wii U",
            pattern: "WiiU"
        }, "Wii", "Xbox One", {
            label: "Xbox 360",
            pattern: "Xbox"
        }, "Xoom"]), rt = fi({
            Apple: {
                iPad: 1,
                iPhone: 1,
                iPod: 1
            },
            Archos: {},
            Amazon: {
                Kindle: 1,
                "Kindle Fire": 1
            },
            Asus: {
                Transformer: 1
            },
            "Barnes & Noble": {
                Nook: 1
            },
            BlackBerry: {
                PlayBook: 1
            },
            Google: {
                "Google TV": 1,
                Nexus: 1
            },
            HP: {
                TouchPad: 1
            },
            HTC: {},
            LG: {},
            Microsoft: {
                Xbox: 1,
                "Xbox One": 1
            },
            Motorola: {
                Xoom: 1
            },
            Nintendo: {
                "Wii U": 1,
                Wii: 1
            },
            Nokia: {
                Lumia: 1
            },
            Samsung: {
                "Galaxy S": 1,
                "Galaxy S2": 1,
                "Galaxy S3": 1,
                "Galaxy S4": 1
            },
            Sony: {
                PlayStation: 1,
                "PlayStation Vita": 1
            }
        }), l = oi(["Windows Phone", "Android", "CentOS", {
            label: "Chrome OS",
            pattern: "CrOS"
        }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);
        if (k && (k = [k]),
        rt && !p && (p = wt([rt])),
        (f = /\bGoogle TV\b/.exec(p)) && (p = f[0]),
        /\bSimulator\b/i.test(n) && (p = (p ? p + " " : "") + "Simulator"),
        c == "Opera Mini" && /\bOPiOS\b/.test(n) && v.push("running in Turbo/Uncompressed mode"),
        c == "IE" && /\blike iPhone OS\b/.test(n) ? (f = h(n.replace(/like iPhone OS/, "")),
        rt = f.manufacturer,
        p = f.product) : /^iP/.test(p) ? (c || (c = "Safari"),
        l = "iOS" + ((f = / OS ([\d_]+)/i.exec(n)) ? " " + f[1].replace(/_/g, ".") : "")) : c != "Konqueror" || /buntu/i.test(l) ? rt && rt != "Google" && (/Chrome/.test(c) && !/\bMobile Safari\b/i.test(n) || /\bVita\b/.test(p)) || /\bAndroid\b/.test(l) && /^Chrome/.test(c) && /\bVersion\//i.test(n) ? (c = "Android Browser",
        l = /\bAndroid\b/.test(l) ? l : "Android") : c == "Silk" ? (/\bMobi/i.test(n) || (l = "Android",
        v.unshift("desktop mode")),
        /Accelerated *= *true/i.test(n) && v.unshift("accelerated")) : c == "PaleMoon" && (f = /\bFirefox\/([\d.]+)\b/.exec(n)) ? v.push("identifying as Firefox " + f[1]) : c == "Firefox" && (f = /\b(Mobile|Tablet|TV)\b/i.exec(n)) ? (l || (l = "Firefox OS"),
        p || (p = f[1])) : !c || (f = !/\bMinefield\b/i.test(n) && /\b(?:Firefox|Safari)\b/.exec(c)) ? (c && !p && /[\/,]|^[^(]+?\)/.test(n.slice(n.indexOf(f + "/") + 8)) && (c = null),
        (f = p || rt || l) && (p || rt || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(l)) && (c = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(l) ? l : f) + " Browser")) : c == "Electron" && (f = (/\bChrome\/([\d.]+)\b/.exec(n) || 0)[1]) && v.push("Chromium " + f) : l = "Kubuntu",
        a || (a = si(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", i(c), "(?:Firefox|Minefield|NetFront)"])),
        (f = k == "iCab" && parseFloat(a) > 3 && "WebKit" || /\bOpera\b/.test(c) && (/\bOPR\b/.test(n) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(n) && !/^(?:Trident|EdgeHTML)$/.test(k) && "WebKit" || !k && /\bMSIE\b/i.test(n) && (l == "Mac OS" ? "Tasman" : "Trident") || k == "WebKit" && /\bPlayStation\b(?! Vita\b)/i.test(c) && "NetFront") && (k = [f]),
        c == "IE" && (f = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(n) || 0)[1]) ? (c += " Mobile",
        l = "Windows Phone " + (/\+$/.test(f) ? f : f + ".x"),
        v.unshift("desktop mode")) : /\bWPDesktop\b/i.test(n) ? (c = "IE Mobile",
        l = "Windows Phone 8.x",
        v.unshift("desktop mode"),
        a || (a = (/\brv:([\d.]+)/.exec(n) || 0)[1])) : c != "IE" && k == "Trident" && (f = /\brv:([\d.]+)/.exec(n)) && (c && v.push("identifying as " + c + (a ? " " + a : "")),
        c = "IE",
        a = f[1]),
        et) {
            if (it(g, "global"))
                if (st && (f = st.lang.System,
                ct = f.getProperty("os.arch"),
                l = l || f.getProperty("os.name") + " " + f.getProperty("os.version")),
                ti) {
                    try {
                        a = g.require("ringo/engine").version.join(".");
                        c = "RingoJS"
                    } catch (li) {
                        (f = g.system) && f.global.system == g.system && (c = "Narwhal",
                        l || (l = f[0].os || null))
                    }
                    c || (c = "Rhino")
                } else
                    typeof g.process == "object" && !g.process.browser && (f = g.process) && (typeof f.versions == "object" && (typeof f.versions.electron == "string" ? (v.push("Node " + f.versions.node),
                    c = "Electron",
                    a = f.versions.electron) : typeof f.versions.nw == "string" && (v.push("Chromium " + a, "Node " + f.versions.node),
                    c = "NW.js",
                    a = f.versions.nw)),
                    c || (c = "Node.js",
                    ct = f.arch,
                    l = f.platform,
                    a = /[\d.]+/.exec(f.version),
                    a = a ? a[0] : null));
            else
                t(f = g.runtime) == kt ? (c = "Adobe AIR",
                l = f.flash.system.Capabilities.os) : t(f = g.phantom) == ni ? (c = "PhantomJS",
                a = (f = f.version || null) && f.major + "." + f.minor + "." + f.patch) : typeof yt.documentMode == "number" && (f = /\bTrident\/(\d+)/i.exec(n)) ? (a = [a, yt.documentMode],
                (f = +f[1] + 4) != a[1] && (v.push("IE " + a[1] + " mode"),
                k && (k[1] = ""),
                a[1] = f),
                a = c == "IE" ? String(a[1].toFixed(1)) : a[0]) : typeof yt.documentMode == "number" && /^(?:Chrome|Firefox)\b/.test(c) && (v.push("masking as " + c + " " + a),
                c = "IE",
                a = "11.0",
                k = ["Trident"],
                l = "Windows");
            l = l && o(l)
        }
        if (a && (f = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(a) || /(?:alpha|beta)(?: ?\d)?/i.exec(n + ";" + (et && ot.appMinorVersion)) || /\bMinefield\b/i.test(n) && "a") && (lt = /b/i.test(f) ? "beta" : "alpha",
        a = a.replace(RegExp(f + "\\+?$"), "") + (lt == "beta" ? ri : ii) + (/\d+\+?/.exec(f) || "")),
        c == "Fennec" || c == "Firefox" && /\b(?:Android|Firefox OS)\b/.test(l))
            c = "Firefox Mobile";
        else if (c == "Maxthon" && a)
            a = a.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(p))
            p == "Xbox 360" && (l = null),
            p == "Xbox 360" && /\bIEMobile\b/.test(n) && v.unshift("mobile mode");
        else if ((/^(?:Chrome|IE|Opera)$/.test(c) || c && !p && !/Browser|Mobi/.test(c)) && (l == "Windows CE" || /Mobi/i.test(n)))
            c += " Mobile";
        else if (c == "IE" && et)
            try {
                g.external === null && v.unshift("platform preview")
            } catch (li) {
                v.unshift("embedded")
            }
        else
            (/\bBlackBerry\b/.test(p) || /\bBB10\b/.test(n)) && (f = (RegExp(p.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(n) || 0)[1] || a) ? (f = [f, /BB10/.test(n)],
            l = (f[1] ? (p = null,
            rt = "BlackBerry") : "Device Software") + " " + f[0],
            a = null) : this != s && p != "Wii" && (et && ft || /Opera/.test(c) && /\b(?:MSIE|Firefox)\b/i.test(n) || c == "Firefox" && /\bOS X (?:\d+\.){2,}/.test(l) || c == "IE" && (l && !/^Win/.test(l) && a > 5.5 || /\bWindows XP\b/.test(l) && a > 8 || a == 8 && !/\bTrident\b/.test(n))) && !e.test(f = h.call(s, n.replace(e, "") + ";")) && f.name && (f = "ing as " + f.name + ((f = f.version) ? " " + f : ""),
            e.test(c) ? (/\bIE\b/.test(f) && l == "Mac OS" && (l = null),
            f = "identify" + f) : (f = "mask" + f,
            c = ht ? o(ht.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera",
            /\bIE\b/.test(f) && (l = null),
            et || (a = null)),
            k = ["Presto"],
            v.push(f));
        return (f = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(n) || 0)[1]) && (f = [parseFloat(f.replace(/\.(\d)$/, ".0$1")), f],
        c == "Safari" && f[1].slice(-1) == "+" ? (c = "WebKit Nightly",
        lt = "alpha",
        a = f[1].slice(0, -1)) : (a == f[1] || a == (f[2] = (/\bSafari\/([\d.]+\+?)/i.exec(n) || 0)[1])) && (a = null),
        f[1] = (/\bChrome\/([\d.]+)/i.exec(n) || 0)[1],
        f[0] == 537.36 && f[2] == 537.36 && parseFloat(f[1]) >= 28 && k == "WebKit" && (k = ["Blink"]),
        et && (bt || f[1]) ? (k && (k[1] = "like Chrome"),
        f = f[1] || (f = f[0],
        f < 530 ? 1 : f < 532 ? 2 : f < 532.05 ? 3 : f < 533 ? 4 : f < 534.03 ? 5 : f < 534.07 ? 6 : f < 534.1 ? 7 : f < 534.13 ? 8 : f < 534.16 ? 9 : f < 534.24 ? 10 : f < 534.3 ? 11 : f < 535.01 ? 12 : f < 535.02 ? "13+" : f < 535.07 ? 15 : f < 535.11 ? 16 : f < 535.19 ? 17 : f < 536.05 ? 18 : f < 536.1 ? 19 : f < 537.01 ? 20 : f < 537.11 ? "21+" : f < 537.13 ? 23 : f < 537.18 ? 24 : f < 537.24 ? 25 : f < 537.36 ? 26 : k != "Blink" ? "27" : "28")) : (k && (k[1] = "like Safari"),
        f = (f = f[0],
        f < 400 ? 1 : f < 500 ? 2 : f < 526 ? 3 : f < 533 ? 4 : f < 534 ? "4+" : f < 535 ? 5 : f < 537 ? 6 : f < 538 ? 7 : f < 601 ? 8 : "8")),
        k && (k[1] += " " + (f += typeof f == "number" ? ".x" : /[.+]/.test(f) ? "" : "+")),
        c == "Safari" && (!a || parseInt(a) > 45) && (a = f)),
        c == "Opera" && (f = /\bzbov|zvav$/.exec(l)) ? (c += " ",
        v.unshift("desktop mode"),
        f == "zvav" ? (c += "Mini",
        a = null) : c += "Mobile",
        l = l.replace(RegExp(" *" + f + "$"), "")) : c == "Safari" && /\bChrome\b/.exec(k && k[1]) && (v.unshift("desktop mode"),
        c = "Chrome Mobile",
        a = null,
        /\bOS X\b/.test(l) ? (rt = "Apple",
        l = "iOS 4.3+") : l = null),
        a && a.indexOf(f = /[\d.]+$/.exec(l)) == 0 && n.indexOf("/" + f + "-") > -1 && (l = w(l.replace(f, ""))),
        k && !/\b(?:Avant|Nook)\b/.test(c) && (/Browser|Lunascape|Maxthon/.test(c) || c != "Safari" && /^iOS/.test(l) && /\bSafari\b/.test(k[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(c) && k[1]) && (f = k[k.length - 1]) && v.push(f),
        v.length && (v = ["(" + v.join("; ") + ")"]),
        rt && p && p.indexOf(rt) < 0 && v.push("on " + rt),
        p && v.push((/^on /.test(v[v.length - 1]) ? "" : "on ") + p),
        l && (f = / ([\d.+]+)$/.exec(l),
        pt = f && l.charAt(l.length - f[0].length - 1) == "/",
        l = {
            architecture: 32,
            family: f && !pt ? l.replace(f[0], "") : l,
            version: f ? f[1] : null,
            toString: function() {
                var n = this.version;
                return this.family + (n && !pt ? " " + n : "") + (this.architecture == 64 ? " 64-bit" : "")
            }
        }),
        (f = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(ct)) && !/\bi686\b/i.test(ct) ? (l && (l.architecture = 64,
        l.family = l.family.replace(RegExp(" *" + f), "")),
        c && (/\bWOW64\b/i.test(n) || et && /\w(?:86|32)$/.test(ot.cpuClass || ot.platform) && !/\bWin64; x64\b/i.test(n)) && v.unshift("32-bit")) : l && /^OS X/.test(l.family) && c == "Chrome" && parseFloat(a) >= 39 && (l.architecture = 64),
        n || (n = null),
        tt = {},
        tt.description = n,
        tt.layout = k && k[0],
        tt.manufacturer = rt,
        tt.name = c,
        tt.prerelease = lt,
        tt.product = p,
        tt.ua = n,
        tt.version = c && a,
        tt.os = l || {
            architecture: null,
            family: null,
            version: null,
            toString: function() {
                return "null"
            }
        },
        tt.parse = h,
        tt.toString = hi,
        tt.version && v.unshift(a),
        tt.name && v.unshift(c),
        !l || !c || l == String(l).split(" ")[0] && (l == c.split(" ")[0] || p) || v.push(p ? "(" + l + ")" : "on " + l),
        v.length && (tt.description = v.join(" ")),
        tt
    }
    var c = {
        "function": !0,
        object: !0
    }, u = c[typeof window] && window || this, b = u, l = c[typeof exports] && exports, a = c[typeof module] && module && !module.nodeType && module, n = l && a && typeof global == "object" && global, f;
    n && (n.global === n || n.window === n || n.self === n) && (u = n);
    var k = Math.pow(2, 53) - 1
      , e = /\bOpera/
      , d = this
      , v = Object.prototype
      , g = v.hasOwnProperty
      , y = v.toString;
    f = h();
    typeof define == "function" && typeof define.amd == "object" && define.amd ? (u.platform = f,
    define(function() {
        return f
    })) : l && a ? s(f, function(n, t) {
        l[t] = n
    }) : u.platform = f
}
).call(this);
$(document).ready(function() {
    platform && platform.product === "iPhone" && platform.name.toLowerCase() === "safari" && isIOSLessThen13() && !iosInIframe() && (buildIOSFullscreenPanel(),
    buildIOSMeta())
});
jQuery(window).resize(function() {
    platform && platform.product === "iPhone" && platform.name.toLowerCase() === "safari" && isIOSLessThen13() && !iosInIframe() && iosResize()
});
var s_iScaleFactor = 1, s_iOffsetX, s_iOffsetY, s_bIsIphone = !1, s_bFocus = !0;
if (function(n) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(n) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(n.substr(0, 4))
}(navigator.userAgent || navigator.vendor || window.opera),
$(window).resize(function() {
    sizeHandler()
}),
window.addEventListener("orientationchange", onOrientationChange),
NoClickDelay.prototype = {
    handleEvent: function(n) {
        switch (n.type) {
        case "touchstart":
            this.onTouchStart(n);
            break;
        case "touchmove":
            this.onTouchMove(n);
            break;
        case "touchend":
            this.onTouchEnd(n)
        }
    },
    onTouchStart: function(n) {
        n.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function() {
        this.moved = !0
    },
    onTouchEnd: function(n) {
        var t, i;
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend", this, !1);
        this.moved || (t = document.elementFromPoint(n.changedTouches[0].clientX, n.changedTouches[0].clientY),
        t.nodeType == 3 && (t = t.parentNode),
        i = document.createEvent("MouseEvents"),
        i.initEvent("click", !0, !0),
        t.dispatchEvent(i))
    }
},
function() {
    function n(n) {
        var i = "visible"
          , r = "hidden"
          , u = {
            focus: i,
            focusin: i,
            pageshow: i,
            blur: r,
            focusout: r,
            pagehide: r
        };
        n = n || window.event;
        n.type in u ? document.body.className = u[n.type] : (document.body.className = this[t] ? "hidden" : "visible",
        document.body.className === "hidden" ? (s_oMain.stopUpdate(),
        s_bFocus = !1) : (s_oMain.startUpdate(),
        s_bFocus = !0))
    }
    var t = "hidden";
    t in document ? document.addEventListener("visibilitychange", n) : (t = "mozHidden")in document ? document.addEventListener("mozvisibilitychange", n) : (t = "webkitHidden")in document ? document.addEventListener("webkitvisibilitychange", n) : (t = "msHidden")in document ? document.addEventListener("msvisibilitychange", n) : "onfocusin"in document ? document.onfocusin = document.onfocusout = n : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = n
}(),
screenfull.isEnabled)
    screenfull.on("change", function() {
        s_bFullscreen = screenfull.isFullscreen;
        s_oInterface !== null && s_oInterface.resetFullscreenBut();
        s_oMenu !== null && s_oMenu.resetFullscreenBut();
        s_oLevelMenu !== null && s_oLevelMenu.resetFullscreenBut()
    });
var CANVAS_WIDTH = 960, CANVAS_HEIGHT = 540, EDGEBOARD_X = 128, EDGEBOARD_Y = 42, FPS_TIME = 1e3 / 24, DISABLE_SOUND_MOBILE = !1, FONT_GAME = "TradeGothic", SOUNDTRACK_VOLUME_IN_GAME = 1, STATE_LOADING = 0, STATE_MENU = 1, STATE_HELP = 1, STATE_GAME = 3, ON_MOUSE_DOWN = 0, ON_MOUSE_UP = 1, ON_MOUSE_OVER = 2, ON_MOUSE_OUT = 3, ON_DRAG_START = 4, ON_DRAG_END = 5, ON_MSG_BOX_LEFT_BUT = 6, ON_MSG_BOX_CENTER_BUT = 7, ON_MSG_BOX_RIGHT_BUT = 8, ON_RELEASE_YES = 9, ON_RELEASE_NO = 10, ALERT_FROM_EXIT = 0, ALERT_FROM_RESTART = 1, ALERT_FROM_SHUFFLE = 2, NUM_ROWS_PAGE_LEVEL = 2, NUM_COLS_PAGE_LEVEL = 3, TILE_WIDTH = 60, TILE_HEIGHT = 78, BONUS_TIME, HINT_PENALTY, SCORE_BONUS_LAYOUT = [];
SCORE_BONUS_LAYOUT.easy = 1;
SCORE_BONUS_LAYOUT.medium = 2;
SCORE_BONUS_LAYOUT.hard = 3;
CTLText.prototype = {
    constructor: CTLText,
    __autofit: function() {
        if (this._bFitText) {
            for (var n = this._iFontSize; this._oText.getBounds().height > this._iHeight - this._iPaddingV * 2 || this._oText.getBounds().width > this._iWidth - this._iPaddingH * 2; )
                if (n--,
                this._oText.font = n + "px " + this._szFont,
                this._oText.lineHeight = Math.round(n * this._fLineHeightFactor),
                this.__updateY(),
                this.__verticalAlign(),
                n < 8)
                    break;
            this._iFontSize = n
        }
    },
    __verticalAlign: function() {
        if (this._bVerticalAlign) {
            var n = this._oText.getBounds().height;
            this._oText.y -= (n - this._iHeight) / 2 + this._iPaddingV
        }
    },
    __updateY: function() {
        this._oText.y = this._y + this._iPaddingV;
        switch (this._oText.textBaseline) {
        case "middle":
            this._oText.y += this._oText.lineHeight / 2 + (this._iFontSize * this._fLineHeightFactor - this._iFontSize)
        }
    },
    __createText: function(n) {
        this._bDebug && (this._oDebugShape = new createjs.Shape,
        this._oDebugShape.graphics.beginFill("rgba(255,0,0,0.5)").drawRect(this._x, this._y, this._iWidth, this._iHeight),
        this._oContainer.addChild(this._oDebugShape));
        this._oText = new createjs.Text(n,this._iFontSize + "px " + this._szFont,this._szColor);
        this._oText.textBaseline = "middle";
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this._oText.textAlign = this._szAlign;
        this._oText.lineWidth = this._bMultiline ? this._iWidth - this._iPaddingH * 2 : null;
        switch (this._szAlign) {
        case "center":
            this._oText.x = this._x + this._iWidth / 2;
            break;
        case "left":
            this._oText.x = this._x + this._iPaddingH;
            break;
        case "right":
            this._oText.x = this._x + this._iWidth - this._iPaddingH
        }
        this._oContainer.addChild(this._oText);
        this.refreshText(n)
    },
    setVerticalAlign: function(n) {
        this._bVerticalAlign = n
    },
    setOutline: function(n) {
        this._oText !== null && (this._oText.outline = n)
    },
    setShadow: function(n, t, i, r) {
        this._oText !== null && (this._oText.shadow = new createjs.Shadow(n,t,i,r))
    },
    setColor: function(n) {
        this._oText.color = n
    },
    setAlpha: function(n) {
        this._oText.alpha = n
    },
    setY: function(n) {
        this._oText.y = n;
        this._y = n
    },
    removeTweens: function() {
        createjs.Tween.removeTweens(this._oText)
    },
    getText: function() {
        return this._oText
    },
    getY: function() {
        return this._y
    },
    getFontSize: function() {
        return this._iFontSize
    },
    refreshText: function(n) {
        n === "" && (n = " ");
        this._oText === null && this.__createText(n);
        this._oText.text = n;
        this._oText.font = this._iFontSize + "px " + this._szFont;
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this.__autofit();
        this.__updateY();
        this.__verticalAlign()
    }
};
var s_bMobile, s_bAudioActive = !1, s_iCntTime = 0, s_iTimeElaps = 0, s_iPrevTime = 0, s_iCntFps = 0, s_iCurFps = 0, s_oSoundTrack = null, s_oStage, s_oMain = null, s_oSpriteLibrary, s_oLevelSettings, s_bFullscreen = !1, s_bStorageAvailable = !0, s_aSounds, s_aSoundsInfo;
s_oMenu = null;
s_oGame = null;
s_oInterface = null;
s_oLevelMenu = null;
const getClosestTop = () => {
    let n = window
      , t = !1;
    try {
        while (n.parent.document !== n.document)
            if (n.parent.document)
                n = n.parent;
            else {
                t = !0;
                break
            }
    } catch (i) {
        t = !0
    }
    return {
        topFrame: n,
        err: t
    }
}
  , getBestPageUrl = ({err: n, topFrame: t}) => {
    let i = "";
    if (n)
        try {
            try {
                i = window.top.location.href
            } catch (r) {
                let n = window.location.ancestorOrigins;
                i = n[n.length - 1]
            }
        } catch (r) {
            i = t.document.referrer
        }
    else
        i = t.location.href;
    return i
}
  , TOPFRAMEOBJ = getClosestTop()
  , PAGE_URL = getBestPageUrl(TOPFRAMEOBJ)

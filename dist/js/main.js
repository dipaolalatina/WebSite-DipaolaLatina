/*n*/
isDesktop = function () {
    return window.matchMedia("(min-width: 1080px)").matches
}
/*a*/
isOpen = function () {
    return $("html").hasClass("nav-open")
}
/*r*/
isModalOpen = function () {
    return $("html").hasClass("modal-open")
}
/*l*/
navClose = function () {
    $("html").removeClass("nav-open"), $(".navigation__inner").blur()
}
/*s*/
cancelModal = function () {
    isModalOpen() && $("html").removeClass("modal-open"), $(".modal.active").removeClass("active").blur()
}

/*c*/
scrollToLeft = function (e, t) {
    if (t && $("html").hasClass("loaded") && isDesktop() && !isOpen()) {
        var o = t.scrollLeft;
        gsap.to(t, .3, {
            scrollLeft: o -= e
        })
    }
}

/*Menu*/
$(".event-modal__close-button, .event-modal__background, .event-modal__button-cancel").on("click", cancelModal)
$(".header__button").on("click", (function () {
    isOpen() ? navClose() : ($("html").addClass("nav-open"), setTimeout((function () {
        isOpen() && $(".navigation__inner").focus()
    }), 400))
}))
$(".navigation__background, .navigation__close").on("click", (function () {
    navClose()
}))
/*Menu*/



function prepareScroll() {
    var e = document.querySelector(".scroll-wrap"),
        t = document.querySelector(".hero"),
        o = document.body.parentNode,
        l = document.querySelectorAll("[data-clip]"),
        s = gsap.quickSetter(l, "--scrollOffset");
    if (e || o.classList.add("no-scroll-wrap"), e && !isOpen() && !isModalOpen()) {
        var i, u = function () {
            if (t && isDesktop())
                if (e.scrollLeft > window.innerWidth) gsap.set(l, {
                    "--scrollOffset": 0
                });
                else {
                    var o = Math.min(Math.max(e.scrollLeft / window.innerWidth, 0), 1);
                    o >= 0 && o <= 1 && s(1 - o)
                }
        };
        e.addEventListener("scroll", u, {
            passive: !0
        });
        var d = function () {
            isDesktop() ? void 0 === i && (i = Draggable.create(e, {
                type: "scrollLeft",
                inertia: !0,
                bounds: e,
                allowContextMenu: !0,
                dragClickables: !0,
                zIndexBoost: !1,
                cursor: "grab",
                activeCursor: "grabbing"
            })) : i && (i = void 0, Draggable.get(e).kill())
        };
        d(), $((function () {
            e.scrollLeft = 0, $(window).on("resize", (function () {
                d(), u()
            })), $("body").on("mousewheel", (function (t) {
                isModalOpen() || scrollToLeft(t.deltaY * t.deltaFactor * 5, e)
            })), $(document).on("keyup", (function (t) {
                isModalOpen() || isOpen() || (" " !== t.key && "ArrowRight" !== t.key || scrollToLeft(-window.innerWidth, e), "ArrowLeft" === t.key && scrollToLeft(window.innerWidth, e))
            }))
        }))
    }
}


showScrollIndicator = function () {
    if (isDesktop()) {
        var e = gsap.timeline({
            defaults: {
                ease: Power2.easeOut
            }
        });
        e.addLabel("start", 2), e.fromTo(".scroll-indicator", 1, {
            autoAlpha: 0
        }, {
            autoAlpha: 1
        }, "start"), e.fromTo(".scroll-indicator__line", .3, {
            autoAlpha: 0
        }, {
            autoAlpha: 1
        }, "start"), e.fromTo(".scroll-indicator__line", .2, {
            scaleX: 0
        }, {
            scaleX: 1
        }, "<0.3"), e.to(".scroll-indicator__circle", .3, {
            strokeDashoffset: 0
        }, "<0.4"), e.fromTo(".scroll-indicator__point", .2, {
            autoAlpha: 0
        }, {
            autoAlpha: 1
        }, "<0.1")
    }
}

function loadPage() {
    var loadingScreen = document.querySelector(".loading-screen"),
        dataClips = document.querySelectorAll("[data-clip]"),
        hero = document.querySelector(".hero"),
        scrollWrap = document.querySelector(".scroll-wrap");
    if (!loadingScreen) return document.documentElement.classList.add("loaded"), void(dataClips.length > 0 && (dataClips.forEach((function (e) {
        return e.style.setProperty("--scrollOffset", 1)
    })), hero ? (dataClips.forEach((function (e) {
        return e.style.setProperty("--scrollOffset", 1)
    })), showScrollIndicator()) : dataClips.forEach((function (e) {
        return e.style.setProperty("--scrollOffset", 0)
    }))));

    var r = gsap.timeline({
            onComplete: showScrollIndicator,
            autoRemoveChildren: !0,
            defaults: {
                ease: Power2.easeInOut
            }
        });
    
    r.addLabel("start")
    document.body.setAttribute("style", "overflow: hidden")
    r.call((function () {
        document.documentElement.classList.add("loaded"), document.body.removeAttribute("style")
    }))
    r.to(".loading-screen__children", .5, {
        autoAlpha: 0
    }, "outro+=0.5")
    
    isDesktop() ? hero ? r.fromTo(dataClips, 1, {
        "--scrollOffset": 0
    }, {
        "--scrollOffset": 1
    }, "outro+=0.5") : gsap.set(dataClips, {
        "--scrollOffset": 0,
        immediateRender: !1
    }) : r.call((function () {
        return document.body.removeAttribute("style")
    }))

    r.to(loadingScreen, 1, {
        x: "101%",
        ease: "Power4.easeInOut"
    }, "outro+=0.5")
    r.call((function () {
        isDesktop() && scrollWrap.scrollLeft >= window.innerWidth && gsap.set(dataClips, {
            "--scrollOffset": 0,
            immediateRender: !1
        })
    }))
}

function gdprAlert() {
    var e = document.querySelector(".gdpr-alert");
    if (e) {
        var t = e.querySelector(".gdpr-alert__button"),
            o = localStorage.getItem("oaGdprConsent");
        o ? e.classList.remove("gdpr-alert--active") : e.classList.add("gdpr-alert--active");
        t && t.addEventListener("click", (function () {
            localStorage.setItem("oaGdprConsent", "true"), e.classList.remove("gdpr-alert--active")
        }))
    }
}

prepareScroll();
gdprAlert();
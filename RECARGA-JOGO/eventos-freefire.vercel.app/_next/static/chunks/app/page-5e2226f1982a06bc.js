(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    1538: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 7306));
    },
    7306: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return j;
          },
        });
      var n = a(7437),
        s = a(2265),
        r = a(3145),
        l = a(1994),
        o = a(3335);
      function i() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, o.m6)((0, l.W)(t));
      }
      function c(e) {
        let { prizeImageSrc: t, id: a, isWinningCell: s } = e;
        return (0, n.jsx)("div", {
          className: i(
            "relative w-full aspect-square rounded-lg overflow-hidden",
            "bg-darker-blue border border-dark-blue-bg shadow-lg",
            "flex items-center justify-center",
            s && "animate-diagonal-glow-red"
          ),
          children:
            t &&
            (0, n.jsx)(r.default, {
              src: t || "/placeholder.svg",
              alt: "Prize ".concat(a),
              layout: "fill",
              objectFit: "contain",
              className: "absolute inset-0 z-0",
              priority: !0,
            }),
        });
      }
      let d = (0, s.forwardRef)((e, t) => {
        let {
            prizeImages: a,
            revealedCards: r,
            onScratch: l,
            onRoundEnd: o,
            disabled: d,
            winningDiagonal: u,
          } = e,
          m = (0, s.useRef)(null),
          h = (0, s.useRef)(null),
          x = (0, s.useRef)(null),
          f = (0, s.useRef)(null),
          [g, p] = (0, s.useState)(!1),
          [b, v] = (0, s.useState)(!1),
          [w, y] = (0, s.useState)(!1),
          [j, N] = (0, s.useState)(!1),
          [D, C] = (0, s.useState)(!1),
          S = (0, s.useRef)(null),
          k = (0, s.useCallback)(
            () =>
              new Promise((e) => {
                let t = new window.Image();
                (t.crossOrigin = "anonymous"),
                  (t.src =
                    "https://i.postimg.cc/RZNy8Ng5/Design-sem-nome-24.png"),
                  (t.onload = () => {
                    (f.current = t), v(!0), e(t);
                  }),
                  (t.onerror = () => {
                    console.error("Failed to load scratch mask image."),
                      v(!0),
                      e(null);
                  });
              }),
            []
          ),
          E = (0, s.useCallback)(() => {
            let e = h.current,
              t = x.current;
            e &&
              t &&
              (t.clearRect(0, 0, e.width, e.height),
              (t.globalCompositeOperation = "source-over"),
              f.current && b
                ? t.drawImage(f.current, 0, 0, e.width, e.height)
                : ((t.fillStyle = "#282C34"),
                  t.fillRect(0, 0, e.width, e.height)),
              (t.globalCompositeOperation = "destination-out"),
              y(!1),
              N(!1),
              C(!1));
          }, [b]),
          R = (0, s.useCallback)(() => {
            let e = h.current,
              t = m.current;
            if (!e || !t) return;
            let a = e.getContext("2d");
            if (!a) return;
            x.current = a;
            let n = t.offsetWidth,
              s = t.offsetHeight;
            (e.width === n && e.height === s) || g
              ? w || D || !b || (E(), setTimeout(() => C(!0), 200))
              : ((e.width = n),
                (e.height = s),
                !w && b && (E(), setTimeout(() => C(!0), 200)));
          }, [b, g, w, D, E]);
        (0, s.useEffect)(() => {
          k().then(() => {
            R();
          });
        }, [k, R]),
          (0, s.useEffect)(() => {
            let e = () => R();
            return (
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, [R]);
        let M = (0, s.useCallback)((e) => {
            let t, a;
            let n = h.current;
            if (!n) return { x: 0, y: 0 };
            let s = n.getBoundingClientRect();
            return (
              "touches" in e
                ? ((t = e.touches[0].clientX), (a = e.touches[0].clientY))
                : ((t = e.clientX), (a = e.clientY)),
              { x: t - s.left, y: a - s.top }
            );
          }, []),
          A = (0, s.useCallback)(() => {
            let e = x.current;
            if (!e) return 0;
            let t = e.getImageData(0, 0, e.canvas.width, e.canvas.height),
              a = 0;
            for (let e = 0; e < t.data.length; e += 4)
              0 === t.data[e + 3] && a++;
            return (a / (t.data.length / 4)) * 100;
          }, []),
          T = (0, s.useCallback)((e, t) => {
            let a = x.current;
            a &&
              ((a.lineWidth = 60),
              (a.lineCap = "round"),
              (a.lineJoin = "round"),
              (a.globalCompositeOperation = "destination-out"),
              S.current
                ? (a.beginPath(),
                  a.moveTo(S.current.x, S.current.y),
                  a.lineTo(e, t),
                  a.stroke())
                : (a.beginPath(),
                  a.arc(e, t, 30, 0, 2 * Math.PI, !1),
                  a.fill()),
              (S.current = { x: e, y: t }));
          }, []),
          z = (0, s.useCallback)(
            (e) => {
              if (d || w) return;
              e.preventDefault(),
                e.stopPropagation(),
                (document.body.style.overflow = "hidden"),
                (document.body.style.position = "fixed"),
                (document.body.style.width = "100%"),
                (document.body.style.height = "100%"),
                p(!0),
                N(!0);
              let { x: t, y: a } = M(e);
              (S.current = { x: t, y: a }), T(t, a);
            },
            [d, w, M, T]
          ),
          O = (0, s.useCallback)(
            (e) => {
              if (!g || d || w) return;
              e.preventDefault(), e.stopPropagation();
              let { x: t, y: a } = M(e),
                n = h.current;
              if (!n) return;
              if ((T(t, a), A() >= 85 && !w)) {
                var s;
                y(!0),
                  null === (s = x.current) ||
                    void 0 === s ||
                    s.clearRect(
                      0,
                      0,
                      x.current.canvas.width,
                      x.current.canvas.height
                    ),
                  o();
              }
              let i = n.width / 3,
                c = 3 * Math.floor(a / (n.height / 3)) + Math.floor(t / i);
              r[c] || l(c);
            },
            [g, d, w, M, T, A, r, l, o]
          ),
          P = (0, s.useCallback)(() => {
            if (
              ((document.body.style.overflow = ""),
              (document.body.style.position = ""),
              (document.body.style.width = ""),
              (document.body.style.height = ""),
              p(!1),
              (S.current = null),
              j && !w)
            ) {
              let t = A();
              if (t >= 30 || t > 0) {
                var e;
                y(!0),
                  null === (e = x.current) ||
                    void 0 === e ||
                    e.clearRect(
                      0,
                      0,
                      x.current.canvas.width,
                      x.current.canvas.height
                    ),
                  o();
              }
            }
            N(!1);
          }, [j, w, A, o]);
        (0, s.useImperativeHandle)(t, () => ({
          resetScratchCanvas: () => {
            E(), setTimeout(() => C(!0), 200);
          },
        })),
          (0, s.useEffect)(() => {
            let e = (e) => {
              g && (e.preventDefault(), e.stopPropagation());
            };
            return (
              window.addEventListener("wheel", e, { passive: !1 }),
              window.addEventListener("touchmove", e, { passive: !1 }),
              () => {
                window.removeEventListener("wheel", e),
                  window.removeEventListener("touchmove", e);
              }
            );
          }, [g]),
          (0, s.useEffect)(
            () => () => {
              (document.body.style.overflow = ""),
                (document.body.style.position = ""),
                (document.body.style.width = ""),
                (document.body.style.height = "");
            },
            []
          );
        let F = (0, s.useMemo)(
          () => (u ? ("main" === u ? [0, 4, 8] : [2, 4, 6]) : []),
          [u]
        );
        return (0, n.jsxs)("div", {
          ref: m,
          className: i(
            "relative grid grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-4 bg-darker-blue rounded-xl shadow-2xl border border-red-500/30 w-full mx-auto",
            d && "pointer-events-none opacity-70",
            "main" === u && "diagonal-highlight-main-red",
            "anti" === u && "diagonal-highlight-anti-red"
          ),
          children: [
            Array.from({ length: 9 }).map((e, t) => {
              let s = F.includes(t);
              return (0, n.jsx)(
                c,
                { id: t, prizeImageSrc: D ? a[t] : "", isWinningCell: s },
                t
              );
            }),
            (0, n.jsx)("canvas", {
              ref: h,
              className:
                "absolute inset-0 w-full h-full cursor-pointer z-10 rounded-lg scratch-canvas",
              onMouseDown: z,
              onMouseMove: O,
              onMouseUp: P,
              onMouseLeave: P,
              onTouchStart: z,
              onTouchMove: O,
              onTouchEnd: P,
              onTouchCancel: P,
              style: { display: w ? "none" : "block" },
            }),
          ],
        });
      });
      d.displayName = "ScratchCardGrid";
      var u = a(5293);
      let m = (0, a(535).j)(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                  "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
              },
              size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        h = s.forwardRef((e, t) => {
          let { className: a, variant: s, size: r, asChild: l = !1, ...o } = e,
            c = l ? u.g7 : "button";
          return (0, n.jsx)(c, {
            className: i(m({ variant: s, size: r, className: a })),
            ref: t,
            ...o,
          });
        });
      function x(e) {
        let { message: t, onTryAgain: a, isVisible: s } = e;
        return s
          ? (0, n.jsx)("div", {
              className: "popup-overlay",
              children: (0, n.jsxs)("div", {
                className:
                  "bg-darker-blue p-6 sm:p-8 rounded-xl shadow-2xl text-center max-w-xs sm:max-w-sm w-full border border-purple-accent/50 animate-fade-in-up",
                children: [
                  (0, n.jsx)("p", {
                    className:
                      "text-white-text text-xl sm:text-2xl font-bold mb-6",
                    children: t,
                  }),
                  (0, n.jsx)(h, {
                    onClick: a,
                    className:
                      "bg-purple-accent text-white-text hover:bg-purple-accent/90 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-lg transition-colors duration-300 w-full font-semibold",
                    children: "Tentar novamente",
                  }),
                ],
              }),
            })
          : null;
      }
      h.displayName = "Button";
      var f = (e) => {
        let { from: t, to: a, duration: r } = e,
          [l, o] = (0, s.useState)(t);
        return (
          (0, s.useEffect)(() => {
            let e = null,
              n = (s) => {
                e || (e = s);
                let l = s - e;
                o(Math.floor(t + (a - t) * Math.min(l / r, 1))),
                  l < r ? requestAnimationFrame(n) : o(a);
              };
            requestAnimationFrame(n);
          }, [t, a, r]),
          (0, n.jsxs)("span", { children: [l, "%"] })
        );
      };
      function g(e) {
        let { onClaimReward: t, isVisible: a } = e,
          [l, o] = (0, s.useState)(300),
          [i, c] = (0, s.useState)(!1);
        return ((0, s.useEffect)(() => {
          if (!a) {
            o(300);
            return;
          }
          let e = setInterval(() => {
            o((t) => (t <= 1 ? (clearInterval(e), 0) : t - 1));
          }, 1e3);
          return () => clearInterval(e);
        }, [a]),
        a)
          ? (0, n.jsx)("div", {
              className: "popup-overlay",
              children: (0, n.jsxs)("div", {
                className:
                  "bg-darker-blue p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl text-center max-w-xs sm:max-w-sm md:max-w-md w-full border border-red-500/50 relative overflow-hidden animate-fade-in-up max-h-[90vh] overflow-y-auto",
                children: [
                  (0, n.jsxs)("div", {
                    className: "absolute inset-0 pointer-events-none",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-red-500 rounded-full mix-blend-screen opacity-10 blur-xl animate-pulse",
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-red-500 rounded-full mix-blend-screen opacity-10 blur-xl animate-pulse animation-delay-2000",
                      }),
                    ],
                  }),
                  i &&
                    (0, n.jsxs)("div", {
                      className: "absolute inset-0 pointer-events-none z-50",
                      children: [
                        Array.from({ length: 50 }).map((e, t) =>
                          (0, n.jsx)(
                            "div",
                            {
                              className:
                                "absolute w-2 h-2 bg-red-500 rounded-full animate-confetti",
                              style: {
                                left: "".concat(100 * Math.random(), "%"),
                                animationDelay: "".concat(
                                  0.5 * Math.random(),
                                  "s"
                                ),
                                animationDuration: "".concat(
                                  1 + Math.random(),
                                  "s"
                                ),
                              },
                            },
                            t
                          )
                        ),
                        Array.from({ length: 30 }).map((e, t) =>
                          (0, n.jsx)(
                            "div",
                            {
                              className:
                                "absolute w-2 h-2 bg-yellow-400 rounded-full animate-confetti",
                              style: {
                                left: "".concat(100 * Math.random(), "%"),
                                animationDelay: "".concat(
                                  0.5 * Math.random(),
                                  "s"
                                ),
                                animationDuration: "".concat(
                                  1 + Math.random(),
                                  "s"
                                ),
                              },
                            },
                            "gold-".concat(t)
                          )
                        ),
                      ],
                    }),
                  (0, n.jsx)("p", {
                    className:
                      "text-white-text text-xl sm:text-2xl md:text-3xl font-extrabold mb-2",
                    children: "VOC\xca GANHOU",
                  }),
                  (0, n.jsxs)("p", {
                    className:
                      "text-red-500 text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4",
                    children: [
                      (0, n.jsx)(f, { from: 1, to: 84, duration: 2e3 }),
                      " OFF + B\xf4nus em",
                    ],
                  }),
                  (0, n.jsx)("p", {
                    className:
                      "text-white-text text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6",
                    children: "5600 DIAMANTES!",
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto mb-4 sm:mb-6 animate-pulse-zoom",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "absolute inset-0 -m-4 rounded-full bg-gradient-radial from-blue-500/50 to-transparent blur-xl opacity-70 animate-pulse",
                      }),
                      (0, n.jsx)(r.default, {
                        src: "https://i.postimg.cc/wBvRXkvY/11.png",
                        alt: "Conjunto Itachi",
                        layout: "fill",
                        objectFit: "contain",
                      }),
                    ],
                  }),
                  l > 0 &&
                    (0, n.jsx)("div", {
                      className:
                        "text-white-text text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-dark-blue-bg py-2 px-4 rounded-lg inline-block border border-red-500",
                      children: ""
                        .concat(
                          Math.floor(l / 60)
                            .toString()
                            .padStart(2, "0"),
                          ":"
                        )
                        .concat((l % 60).toString().padStart(2, "0")),
                    }),
                  (0, n.jsx)(h, {
                    onClick: () => {
                      c(!0),
                        setTimeout(() => {
                          window.location.href =
                            "https://recargafreefire-bonus.vercel.app/recargajogo-oficial.vercel.app/index.html";
                        }, 500);
                    },
                    className:
                      "bg-red-500 text-white-text hover:bg-red-500/90 text-lg sm:text-xl px-6 sm:px-8 md:px-10 py-4 sm:py-6 md:py-7 rounded-lg transition-colors duration-300 w-full relative overflow-hidden",
                    disabled: i,
                    children: "RESGATAR RECOMPENSA",
                  }),
                ],
              }),
            })
          : null;
      }
      function p(e) {
        let { isVisible: t, onStart: a } = e,
          [r, l] = (0, s.useState)(!1);
        return ((0, s.useEffect)(() => {
          t && l(!0);
        }, [t]),
        t)
          ? (0, n.jsxs)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center p-4",
              children: [
                (0, n.jsx)("div", {
                  className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
                }),
                (0, n.jsxs)("div", {
                  className:
                    "relative bg-white rounded-2xl shadow-2xl max-w-sm w-full mx-auto p-6 transform transition-all duration-500 flex flex-col ".concat(
                      r ? "scale-100 opacity-100" : "scale-95 opacity-0"
                    ),
                  children: [
                    (0, n.jsx)("div", {
                      className: "w-full mb-6 flex items-center justify-center",
                      children: (0, n.jsx)("img", {
                        src: "https://i.postimg.cc/KjXq9CpW/Design-sem-nome-29.png",
                        alt: "Raspadinha Premiada",
                        className:
                          "w-full h-auto object-contain rounded-xl shadow-lg",
                        style: { boxShadow: "0 8px 24px rgba(0,0,0,0.25)" },
                      }),
                    }),
                    (0, n.jsxs)("h2", {
                      className:
                        "text-gray-900 text-lg sm:text-xl font-bold text-center mb-6 leading-tight",
                      children: [
                        "\uD83C\uDF00 Raspe sua sorte ninja e ganhe at\xe9",
                        " ",
                        (0, n.jsx)("span", {
                          className: "font-bold",
                          style: { color: "#dc2626" },
                          children: "90% de Desconto",
                        }),
                        " ",
                        "em diamantes e itens raros!",
                      ],
                    }),
                    (0, n.jsxs)("button", {
                      onClick: a,
                      className:
                        "w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-200 transform active:scale-95 shadow-lg hover:shadow-xl mb-4 animate-breathe-glow relative overflow-hidden focus:outline-none focus:ring-4 focus:ring-red-300",
                      children: [
                        (0, n.jsx)("span", {
                          className: "relative z-10",
                          children: "COME\xc7AR AGORA",
                        }),
                        (0, n.jsx)("div", {
                          className:
                            "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-200 ease-out sheen-sweep",
                        }),
                      ],
                    }),
                    (0, n.jsx)("p", {
                      className: "text-gray-500 text-xs text-center",
                      children:
                        "\xa9 Garena Online. Todos os direitos reservados.",
                    }),
                  ],
                }),
              ],
            })
          : null;
      }
      function b(e) {
        let { attemptsLeft: t = 5, className: a = "" } = e,
          [r, l] = (0, s.useState)(t),
          [o, i] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            t !== r &&
              (i(!0),
              setTimeout(() => {
                l(t), i(!1);
              }, 150));
          }, [t, r]),
          (0, n.jsxs)("div", {
            className:
              "bg-darker-blue text-white-text px-6 py-3 rounded-full shadow-lg border border-red-500/50 text-base sm:text-lg font-semibold animate-fade-in-up animation-delay-300 transition-all duration-300 "
                .concat(o ? "scale-110 border-red-400" : "", " ")
                .concat(a),
            children: ["\uD83D\uDD79️ Voc\xea tem ", r, " tentativas"],
          })
        );
      }
      let v = [
          "https://i.postimg.cc/nhjvpH64/1.png",
          "https://i.postimg.cc/fLZXcYkC/2.png",
          "https://i.postimg.cc/T3QW5sTc/12.png",
          "https://i.postimg.cc/wBvRXkvY/11.png",
          "https://i.postimg.cc/jdXvXtKV/Design-sem-nome-25.png",
        ],
        w = "https://i.postimg.cc/wBvRXkvY/11.png",
        y = [
          "Ops, n\xe3o foi dessa vez! \uD83E\uDD72",
          "Quase l\xe1! \uD83D\uDE2C Mais uma chance!",
          "Bateu na trave! \uD83D\uDE05 Tente de novo!",
          "Sorte na pr\xf3xima! \uD83C\uDF40",
          "Faltou pouco! \uD83D\uDCAA Bora mais uma?",
          "Opa! \uD83D\uDE0A Mais uma tentativa?",
          "Por pouco! \uD83D\uDE24 N\xe3o desiste!",
          "T\xe1 chegando! \uD83C\uDFAF Vai l\xe1!",
        ];
      function j() {
        let [e, t] = (0, s.useState)(!0),
          [a, r] = (0, s.useState)(5),
          [l, o] = (0, s.useState)(!1),
          [i, c] = (0, s.useState)(!1),
          [u, m] = (0, s.useState)(""),
          [h, f] = (0, s.useState)(Array(9).fill(!1)),
          [j, N] = (0, s.useState)(Array(9).fill("")),
          [D, C] = (0, s.useState)(!1),
          [S, k] = (0, s.useState)(null),
          E = (0, s.useRef)(null),
          R = (0, s.useRef)(null),
          M = (0, s.useCallback)(
            (e) => {
              let t = Array(9).fill(""),
                n = v.filter((e) => e !== w);
              if (e) {
                let e = 0.5 > Math.random() ? "main" : "anti";
                R.current = e;
                let a = [];
                "main" === e ? a.push(0, 4, 8) : a.push(2, 4, 6),
                  a.forEach((e) => {
                    t[e] = w;
                  });
                let s = [...n].sort(() => Math.random() - 0.5),
                  r = 0;
                for (let e = 0; e < 9; e++)
                  !a.includes(e) && ((t[e] = s[r % s.length]), r++);
                console.log(
                  "Terceira tentativa: Pr\xeamio na diagonal ".concat(e, ".")
                );
              } else {
                let e = [...n].sort(() => Math.random() - 0.5);
                for (let a = 0; a < 9; a++) t[a] = e[a % e.length];
                t[0] === t[4] &&
                  t[4] === t[8] &&
                  (t[8] = e[(e.indexOf(t[8]) + 1) % e.length]),
                  t[2] === t[4] &&
                    t[4] === t[6] &&
                    (t[6] = e[(e.indexOf(t[6]) + 1) % e.length]),
                  (R.current = null),
                  console.log(
                    "Tentativa ".concat(6 - a, ": Sem diagonal vencedora.")
                  );
              }
              N(t);
            },
            [a]
          );
        (0, s.useEffect)(() => {
          M(3 === a);
        }, [a, M]);
        let A = (0, s.useCallback)(() => {
            C(!0),
              3 === a
                ? (o(!0), k(R.current))
                : setTimeout(() => {
                    c(!0), m(y[Math.floor(Math.random() * y.length)]);
                  }, 1e3);
          }, [a]),
          T = () => {
            var e;
            f(Array(9).fill(!1)),
              c(!1),
              o(!1),
              C(!1),
              k(null),
              null === (e = E.current) ||
                void 0 === e ||
                e.resetScratchCanvas();
          };
        return (0, n.jsxs)("div", {
          className:
            "min-h-screen h-screen flex flex-col bg-white text-gray-900 relative overflow-hidden",
          children: [
            (0, n.jsx)("header", {
              className:
                "fixed top-0 left-0 right-0 z-50 bg-white h-14 sm:h-16 flex items-center shadow-sm border-b border-gray-100",
              children: (0, n.jsx)("img", {
                src: "https://i.postimg.cc/9XJwYy4d/Design-sem-nome-30.png",
                alt: "Logo",
                className: "h-14 sm:h-16 w-auto ml-3 sm:ml-4",
              }),
            }),
            (0, n.jsx)("div", {
              className: "fixed top-14 sm:top-16 left-0 right-0 z-40",
              children: (0, n.jsx)("img", {
                src: "https://i.postimg.cc/Znw9Yvvz/Design-sem-nome-32.png",
                alt: "Full Width Banner",
                className: "w-full h-20 sm:h-24 md:h-28 object-cover",
              }),
            }),
            (0, n.jsx)("div", {
              className:
                "flex-1 flex items-center justify-center p-4 pt-36 sm:pt-44",
              children: (0, n.jsxs)("div", {
                className:
                  "flex flex-col items-center justify-center w-full max-w-md mx-auto space-y-3 ".concat(
                    e ? "blur-sm brightness-75" : ""
                  ),
                children: [
                  (0, n.jsx)("header", {
                    className: "text-center animate-fade-in-up relative z-30",
                    children: (0, n.jsxs)("h1", {
                      className:
                        "text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-2 leading-tight text-gray-900",
                      children: [
                        (0, n.jsx)("span", {
                          className: "block sm:inline",
                          children: "DESCUBRA SUA",
                        }),
                        " ",
                        (0, n.jsxs)("span", {
                          className: "block sm:inline",
                          children: [
                            (0, n.jsx)("span", {
                              className: "text-red-500 shine-text",
                              children: "SURPRESA",
                            }),
                            " ",
                            (0, n.jsx)("span", {
                              className: "text-red-500 shine-text",
                              children: "NINJA!",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsx)(b, { attemptsLeft: a }),
                  (0, n.jsx)("div", {
                    className:
                      "w-full max-w-sm sm:max-w-md animate-fade-in-up animation-delay-500",
                    children: (0, n.jsx)(d, {
                      ref: E,
                      prizeImages: j,
                      revealedCards: h,
                      onScratch: (e) => {
                        f((t) => {
                          let a = [...t];
                          return (a[e] = !0), a;
                        });
                      },
                      onRoundEnd: A,
                      disabled: D,
                      winningDiagonal: S,
                    }),
                  }),
                  (0, n.jsx)("p", {
                    className:
                      "text-gray-500 text-xs sm:text-sm animate-fade-in-up animation-delay-600 text-center",
                    children:
                      "\xa9 Garena Online. Todos os direitos reservados.",
                  }),
                ],
              }),
            }),
            (0, n.jsx)(p, {
              isVisible: e,
              onStart: () => {
                t(!1), r(5);
              },
            }),
            i &&
              (0, n.jsx)(x, {
                message: u,
                onTryAgain: () => {
                  r((e) => e - 1), T();
                },
                isVisible: i,
              }),
            l && (0, n.jsx)(g, { onClaimReward: () => {}, isVisible: l }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [335, 971, 117, 744], function () {
      return e((e.s = 1538));
    }),
      (_N_E = e.O());
  },
]);

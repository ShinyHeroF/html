/*! For license information please see 920.c7296b7d.chunk.js.LICENSE.txt */
(self.webpackChunk_elt_reapply_insurance =
  self.webpackChunk_elt_reapply_insurance || []).push([
  [920],
  {
    66522: (e, t, r) => {
      "use strict";
      r.d(t, { G: () => s, Z: () => c });
      r(9684), r(44507), r(35136);
      var n = r(11758),
        i = r(783),
        o = r(82499),
        a = r(73600);
      const l = o.ZP.div`
  margin-top: 16px;
  font-family: 'PingFang SC';
  font-size: var(--desc-font-size);
  line-height: var(--desc-line-height);

  a {
    color: var(--blue);
  }
`,
        c = (0, i.memo)((e) => {
          let { clauseLinks: t = [], text: r = "" } = e;
          return (0, a.jsx)(l, {
            children: (0, a.jsx)(n.CQ, { text: r, agreementLinks: t }),
          });
        }),
        s = (0, i.memo)((e) => {
          let { name: t, agreementLinks: r } = e;
          const o = (0, i.useMemo)(() => r.find((e) => e.name === t), [r, t]);
          return o ? (0, a.jsx)(n.vQ, { agreementItem: o }) : null;
        });
    },
    48309: (e, t, r) => {
      "use strict";
      r.d(t, { Y5: () => p, _3: () => d, _W: () => u, bg: () => h });
      r(9684),
        r(44507),
        r(35136),
        r(92997),
        r(30336),
        r(42274),
        r(99136),
        r(68336);
      var n = r(76422),
        i = r(62451),
        o = r(18636),
        a = r(66571),
        l = r(75821);
      function c(e) {
        return e ? ("2" === String(e) ? "\u5973" : "\u7537") : "";
      }
      function s(e, t) {
        var r, n;
        return null !==
          (r =
            null ===
              (n = e.find((e) => {
                let { districtLevel: r } = e;
                return +r === t;
              })) || void 0 === n
              ? void 0
              : n.districtName) && void 0 !== r
          ? r
          : "";
      }
      async function u(e) {
        var t, r, c, u;
        let { data: d, reapplyParams: p, calculateData: h, err: f } = e;
        if (!d) return;
        const { paymentPlanInfo: y, applicantInfo: g } = d,
          { isAutoReapply: m, insureds: v, payFrequency: x } = p,
          { districtInfoList: P } = await (0, a.tp)([
            g.region,
            g.province,
            g.city,
          ]);
        n.Hj.click(l.Q.reapplySubmit, {
          submit_result: null !== f && void 0 !== f ? f : "\u6210\u529f",
          payment_plan: i.FS[x || y.payFrequency],
          is_family_order: d.isFamily,
          family_policy_no: d.familyPolicyNo,
          is_auto_reapplication:
            m === i.Oy.yes
              ? "\u514d\u8d39\u5f00\u901a"
              : "\u6682\u4e0d\u5f00\u901a",
          original_premium: (0, o.k3)(
            null !==
              (t =
                null === h ||
                void 0 === h ||
                null === (r = h.combinationInfo) ||
                void 0 === r
                  ? void 0
                  : r.totalOriginalPremium) && void 0 !== t
              ? t
              : 0
          ),
          order_amount: (0, o.k3)(
            null !==
              (c =
                null === h ||
                void 0 === h ||
                null === (u = h.combinationInfo) ||
                void 0 === u
                  ? void 0
                  : u.totalPremium) && void 0 !== c
              ? c
              : 0
          ),
          number_of_insurant: v.length,
          app_cert_type:
            i.P8[null === g || void 0 === g ? void 0 : g.certiType],
          a_province: s(P, 1),
          a_city: s(P, 2),
          a_county: s(P, 3),
        });
      }
      async function d(e) {
        const {
            applicant: t,
            insuredsInfo: { insuredInfoList: r },
            insureInfo: { orderNo: u },
            paymentPlanInfo: { payFrequency: d },
            isFamily: p,
            familyPolicyNo: h,
          } = e,
          { certificate: f, gender: y, province: g, city: m, region: v } = t,
          { districtInfoList: x } = await (0, a.tp)([g, m, v]);
        r.forEach(async (e) => {
          let { insured: t, originalPremium: r, initialPremium: g } = e;
          const {
              relationType: m,
              isRiskOccupation: v,
              hasMedicalInsure: P,
              certificate: _,
              gender: b,
              province: w,
              city: j,
              region: S,
            } = t,
            { districtInfoList: I } = await (0, a.tp)([w, j, S]);
          n.Hj.click(l.Q.orderInsuredInfo, {
            order_no: u,
            relationship: m,
            original_premium: (0, o.k3)(r),
            order_amount: (0, o.k3)(g),
            is_family_order: p,
            family_policy_no: h,
            has_public_insurance: P,
            app_cert_type: i.P8[f.credentialType],
            insurer_cert_type: i.P8[_.credentialType],
            app_sex: c(y),
            insurer_sex: c(b),
            payment_plan: i.FS[d],
            is_risk_occupation: v
              ? "\u9ad8\u5371\u804c\u4e1a"
              : "\u4e0d\u542b\u9ad8\u5371",
            a_province: s(x, 1),
            a_city: s(x, 2),
            a_county: s(x, 3),
            insur_province: s(I, 1),
            insur_city: s(I, 2),
            insur_county: s(I, 3),
          });
        });
      }
      function p(e, t) {
        let r =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : "push";
        const n = new URLSearchParams(location.search);
        n.delete("paymentOrderId"),
          n.delete("_cpicPayBack"),
          n.delete("from_wxpay"),
          e[r]({ pathname: `/home/${t}`, search: n.toString() });
      }
      function h(e, t) {
        let r =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : "push";
        const n = new URLSearchParams(location.search);
        n.delete("paymentOrderId"),
          n.delete("_cpicPayBack"),
          n.delete("from_wxpay"),
          e[r]({ pathname: `/order/${t}`, search: n.toString() });
      }
    },
    55920: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => Te });
      var n = r(76422),
        i = r(18636),
        o = r(46648),
        a = r(45571),
        l = r(28855),
        c = r(12242),
        s = r(62429),
        u = r(783),
        d = r(28323),
        p = (r(38753), r(44507), r(65194), r(17757)),
        h = r(35520),
        f = r(62451),
        y = r(42234),
        g = r(85425),
        m = r(14306),
        v = r.n(m),
        x = r(65126),
        P = r(85472),
        _ = r(59985);
      var b = r(66522),
        w = r(45797),
        j = r(75821),
        S = r(53191),
        I = r(10846),
        k = r(48309),
        C = r(14098),
        A = r(82744),
        T = r(88748),
        L = r(19818),
        N = r(82499);
      const E = (0, N.ZP)(C.Z)`
  background: var(--navyblue-20);
`,
        O = (0, N.ZP)(A.nu.Div.Visible)``,
        H = N.ZP.div`
  padding: 0 16px calc(64px + 26px + env(safe-area-inset-bottom));
  position: relative;
`,
        U = N.ZP.div`
  text-align: center;
  font-size: var(--content-3-font-size);
  color: #fff;
  height: 56px;
  line-height: 56px;
  background: var(--paracelblue-60);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: var(--font-weight-semibold);

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    height: 50px;
    background: linear-gradient(
      180deg,
      var(--paracelblue-60) 0%,
      rgba(0, 192, 199, 0) 100%
    );
  }

  img {
    margin-right: 5px;
  }

  i {
    display: inline-block;
    width: 56px;
    margin-left: 5px;
    font-style: normal;
    text-align: left;
  }
`,
        R = (0, N.ZP)(U)`
  background: var(--red-60);

  :after {
    background: linear-gradient(
      180deg,
      var(--red-60) 0%,
      rgba(250, 86, 76, 0) 100%
    );
  }
`,
        F = N.ZP.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 8px;

  &:last-of-type {
    margin-bottom: 0;
  }
`,
        Z = (0, N.ZP)("div").attrs({
          "min-height": (e) => e.minHeight || "unset",
        })`
  font-weight: var(--font-weight-semibold);
  font-size: var(--title-2-font-size);
  line-height: 30px;
  color: var(--navyblue-100);
  margin: 4px 0;
  min-height: ${(e) => e["min-height"]};
`,
        Y = N.ZP.div`
  margin-bottom: 20px;
  font-weight: var(--font-weight-regular);
  font-size: var(--content-3-font-size);
  line-height: var(--title-5-line-height);
  color: var(--text-color-dark-60);
`,
        G = N.ZP.div`
  font-weight: var(--font-weight-semibold);
  font-size: var(--title-4-font-size);
  line-height: var(--title-4-line-height);
  color: var(--navyblue-100);
`,
        W =
          (N.ZP.div`
  margin-top: 4px;
  line-height: var(--desc-line-height);
  font-size: var(--desc-font-size);
  color: var(--text-color-60);
`,
          (0, N.ZP)("div").attrs({
            "min-height": (e) => e.minHeight || "unset",
          })`
  margin-top: 8px;
  min-height: ${(e) => e["min-height"]};
`),
        B = N.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: var(--title-5-line-height);
  position: relative;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    border-top: 1px dashed var(--navyblue-30);
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  span,
  i {
    background-color: #fff;
    position: relative;
    z-index: 1;
  }

  span {
    padding-right: 8px;
    color: var(--text-color-dark-80);
  }

  i {
    font-style: normal;
    padding-left: 8px;
    color: var(--text-color-dark-100);
  }
`,
        D = (0, N.ZP)(T.ZP.HalfPixelBorderBottom)`
  padding: 9px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  line-height: var(--title-5-line-height);

  span,
  i {
    background-color: #fff;
    position: relative;
    z-index: 1;
    word-break: break-all;
  }

  span {
    padding-right: 8px;
    color: var(--text-color-dark-80);
    min-width: 48px;
  }

  i {
    font-style: normal;
    padding-left: 8px;
    color: var(--text-color-dark-100);

    &.premium {
      word-break: keep-all;
    }
  }

  &:last-child {
    padding-bottom: 0;
    border-bottom: none;

    &::before {
      display: none;
    }
  }

  &::after {
    display: none;
  }
`,
        z = (0, N.ZP)(D)`
  align-items: center;

  .label {
    margin-right: auto;
  }

  i {
    padding-left: 4px;
  }
`,
        M = (0, N.ZP)(T.ZP.HalfPixelBorderBottom)`
  padding: 4px 0;
  display: flex;
  align-items: flex-start;
  line-height: var(--title-5-line-height);
  justify-content: space-between;

  span,
  i {
    background-color: #fff;
    position: relative;
    z-index: 1;
    word-break: break-all;
  }

  span {
    padding-right: 8px;
    color: var(--text-color-dark-80);
    min-width: 48px;
  }

  i {
    font-style: normal;
    padding-left: 8px;
    color: var(--text-color-dark-100);
  }

  &:last-child {
    padding-bottom: 0;
    border-bottom: none;

    &::before {
      display: none;
    }
  }

  &::after {
    display: none;
  }
`,
        $ = (0, N.ZP)(C.Z.Footer)`
  z-index: 10;
  background: var(--adm-color-white);
`,
        V = (0, N.ZP)(T.ZP.HalfPixelSideBorder).attrs({ side: "top" })`
  padding: 8px 16px;
  background-color: #fff;
`,
        q = (0, N.ZP)(L.Z)`
  display: block;
  width: 100%;
  color: #fff;
  border-radius: 999px;
  height: 48px;
  line-height: 48px;
`,
        Q = N.ZP.i`
  font-size: var(--content-3-font-size);
  font-weight: var(--font-weight-semibold);
  color: var(--text-color-dark-100);
  line-height: var(--title-5-line-height);
`,
        K =
          (N.ZP.i`
  font-size: var(--desc-font-size);
  line-height: var(--desc-line-height);
  color: var(--orange);
`,
          (0, N.ZP)(T.ZP.HalfPixelBorderBottom)`
  padding-top: 8px;
  padding-bottom: 8px;
  &:last-child {
    padding-bottom: 0;
    border-bottom: none;

    &::before {
      display: none;
    }
  }
`),
        J = N.ZP.span`
  display: inline-block;
  font-size: var(--content-3-font-size);
  font-weight: var(--font-weight-semibold);
  color: rgba(12, 30, 61, 1);
  line-height: var(--title-5-line-height);
  font-family: 'PingFang SC-Semibold';
`,
        X = N.ZP.div`
  display: flex;
  align-items: baseline;
  word-break: break-all;
  min-height: 22px;
  > div:first-of-type {
    margin-left: 8px;
  }
`,
        ee = (0, N.ZP)(T.ZP.HalfPixelBorder)`
  padding: 2px 4px;
  margin-left: ${(e) => {
    let { location: t } = e;
    return "right" === t ? "4px" : 0;
  }};
  margin-right: ${(e) => {
    let { location: t } = e;
    return "left" === t ? "8px" : 0;
  }};
  line-height: 12px;
  text-size-adjust: 100%;
  font-size: 11px;
  white-space: nowrap;
  border-radius: 2px;
  --border-radius: 2px;
  opacity: 1;
  --border-opacity: 1;
  border-color: ${(e) => {
    let { type: t } = e;
    return "green" === t
      ? "var(--paracelblue-60)"
      : "blue" === t
      ? "var(--blue-60)"
      : "gray" === t
      ? "var(--text-color-dark-60)"
      : "#ff6433";
  }};
  --border-color: ${(e) => {
    let { type: t } = e;
    return "green" === t
      ? "var(--paracelblue-60)"
      : "blue" === t
      ? "var(--blue-60)"
      : "gray" === t
      ? "var(--text-color-dark-60)"
      : "#ff6433";
  }};
  color: ${(e) => {
    let { type: t } = e;
    return "green" === t
      ? "var(--paracelblue-60)"
      : "blue" === t
      ? "var(--blue-60)"
      : "gray" === t
      ? "var(--text-color-dark-60)"
      : "#ff6433";
  }};
`,
        te = N.ZP.div`
  line-height: 18px;
  font-size: 12px;
  white-space: nowrap;
  color: #ff6433;
`,
        re = N.ZP.div`
  margin-top: 8px;
  div {
    margin-bottom: 4px;
    line-height: 22px;
    font-size: 14px;
    color: var(--text-color-dark-80);
  }
`,
        ne = N.ZP.div`
  margin-top: 4px;
  color: rgba(12, 30, 61, 0.48);
  i {
    font-style: normal;
    margin-left: 4px;
  }
`;
      var ie = r(73600);
      const oe = (0, u.memo)((e) => {
        let {
          name: t,
          certificate: { credentialType: r, credentialNo: n },
          mobile: i,
        } = e;
        return (0, ie.jsxs)(
          F,
          {
            children: [
              (0, ie.jsx)(G, { children: "\u6295\u4fdd\u4eba" }),
              (0, ie.jsxs)(W, {
                minHeight: "110px",
                children: [
                  (0, ie.jsxs)(D, {
                    children: [
                      (0, ie.jsx)("span", { children: "\u59d3\u540d" }),
                      (0, ie.jsx)("i", { children: t }),
                    ],
                  }),
                  (0, ie.jsxs)(D, {
                    children: [
                      (0, ie.jsx)("span", { children: f.P8[r] }),
                      (0, ie.jsx)("i", { children: n }),
                    ],
                  }),
                  (0, ie.jsxs)(D, {
                    children: [
                      (0, ie.jsx)("span", { children: "\u624b\u673a\u53f7" }),
                      (0, ie.jsx)("i", { children: i }),
                    ],
                  }),
                ],
              }),
            ],
          },
          "\u6295\u4fdd\u4eba"
        );
      });
      const ae = r.p + "static/media/time_filled.54933cb4.svg";
      const le = r.p + "static/media/warning_filled.9bce511c.svg";
      function ce(e) {
        let { deadlineTime: t, onTimeout: r } = e;
        const [n, i] = (0, u.useState)(""),
          o = (0, u.useRef)(void 0),
          a = (0, u.useCallback)(() => {
            t &&
              (o.current && clearTimeout(o.current),
              i(
                (function (e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "HH:mm:ss";
                  const r = e.getTime() / 1e3;
                  let n = "00",
                    i = "00",
                    o = "00";
                  const a = Math.floor(r % 60);
                  return (
                    (o = `${a}`.padStart(2, "0")),
                    r >= 60 &&
                      (i = `${Math.floor(((r - a) / 60) % 60)}`.padStart(
                        2,
                        "0"
                      )),
                    r >= 3600 &&
                      (n = `${Math.floor(r / 3600)}`.padStart(2, "0")),
                    "mm:ss" === t
                      ? `${i}:${o}`
                      : "HH:mm:ss" === t
                      ? `${n}:${i}:${o}`
                      : ""
                  );
                })(new Date(t - Date.now()))
              ),
              t > Date.now()
                ? (o.current = setTimeout(() => {
                    (o.current = void 0), a();
                  }, 1e3))
                : "function" === typeof r && r());
          }, [t, r]);
        return (
          (0, u.useEffect)(
            () => (
              a(),
              () => {
                clearTimeout(o.current);
              }
            ),
            [a]
          ),
          (0, ie.jsx)("i", { children: n })
        );
      }
      const se = (0, u.memo)((e) => {
          let { isTimeout: t, ...r } = e;
          return t
            ? (0, ie.jsxs)(R, {
                children: [
                  (0, ie.jsx)("img", { src: le, alt: "warning filled" }),
                  (0, ie.jsx)("span", {
                    children:
                      "\u5f53\u524d\u8ba2\u5355\u5df2\u5931\u6548\uff0c\u8bf7\u91cd\u65b0\u6295\u4fdd",
                  }),
                ],
              })
            : (0, ie.jsxs)(U, {
                children: [
                  (0, ie.jsx)("img", { src: ae, alt: "time filled" }),
                  (0, ie.jsxs)("span", {
                    children: [
                      (0, ie.jsx)("span", {
                        children: "\u5269\u4f59\u65f6\u95f4",
                      }),
                      (0, ie.jsx)(ce, { ...r }),
                    ],
                  }),
                ],
              });
        }),
        ue = (0, u.memo)((e) => {
          let { productName: t, orderNo: r, effectDate: n, expiryDate: i } = e;
          return (0, ie.jsxs)(
            F,
            {
              children: [
                (0, ie.jsx)(Z, { minHeight: "30px", children: t }),
                (0, ie.jsxs)(Y, { children: ["\u8ba2\u5355\u53f7 ", r] }),
                (0, ie.jsxs)(W, {
                  children: [
                    (0, ie.jsxs)(B, {
                      children: [
                        (0, ie.jsx)("span", {
                          children: "\u751f\u6548\u65e5\u671f",
                        }),
                        (0, ie.jsx)("i", { children: (0, _.F8)(n) }),
                      ],
                    }),
                    (0, ie.jsxs)(B, {
                      children: [
                        (0, ie.jsx)("span", {
                          children: "\u7ec8\u6b62\u65e5\u671f",
                        }),
                        (0, ie.jsx)("i", { children: (0, _.F8)(i) }),
                      ],
                    }),
                  ],
                }),
              ],
            },
            "\u4fdd\u969c\u5185\u5bb9"
          );
        });
      r(44298), r(80055);
      const de = (0, u.memo)((e) => {
          let {
            name: t,
            certificate: { credentialType: r, credentialNo: n },
            hasMedicalInsure: i,
            relationType: o,
            insuredCoverageLayout: a,
            optionalLiabilities: l = [],
          } = e;
          return (0, ie.jsxs)(K, {
            children: [
              (0, ie.jsxs)(X, {
                children: [
                  (0, ie.jsx)(J, { children: t }),
                  (0, ie.jsx)(ee, { type: "green", children: f.mj[o] }),
                  i === x.sU.Have
                    ? (0, ie.jsx)(ee, {
                        location: "right",
                        type: "blue",
                        children: "\u6709\u533b\u4fdd",
                      })
                    : (0, ie.jsx)(ee, {
                        location: "right",
                        type: "gray",
                        children: "\u65e0\u533b\u4fdd",
                      }),
                ],
              }),
              "delayering" === a
                ? (0, ie.jsxs)(ie.Fragment, {
                    children: [
                      (0, ie.jsxs)(ne, {
                        children: [
                          (0, ie.jsx)("span", { children: f.P8[r] }),
                          (0, ie.jsx)("i", { children: n }),
                        ],
                      }),
                      (0, ie.jsx)(re, {
                        children: l.map((e) => {
                          let { code: t, liabilityName: r } = e;
                          return (0, ie.jsx)("div", { children: r }, t);
                        }),
                      }),
                    ],
                  })
                : (0, ie.jsxs)(M, {
                    children: [
                      (0, ie.jsx)("span", { children: f.P8[r] }),
                      (0, ie.jsx)("i", { children: n }),
                    ],
                  }),
            ],
          });
        }),
        pe = (0, u.memo)((e) => {
          let { insuredCoverageLayout: t, insuredInfoList: r } = e;
          return (0, ie.jsxs)(
            F,
            {
              children: [
                (0, ie.jsx)(G, { children: "\u88ab\u4fdd\u4eba" }),
                (0, ie.jsx)(W, {
                  minHeight: "50px",
                  children: r.map((e) => {
                    let { insured: r, optionalLiabilities: n } = e;
                    return (0, ie.jsx)(
                      de,
                      {
                        optionalLiabilities: n,
                        insuredCoverageLayout: t,
                        ...r,
                      },
                      `${r.name}${r.certificate.credentialNo}`
                    );
                  }),
                }),
              ],
            },
            "\u88ab\u4fdd\u4eba"
          );
        }),
        he = (0, u.memo)((e) => {
          let {
            totalPremium: t,
            originalTotalPremium: r,
            payFrequency: n,
            insuredInfoList: o = [],
          } = e;
          return (0, ie.jsxs)(
            F,
            {
              children: [
                (0, ie.jsx)(G, { children: "\u4ea4\u8d39\u8ba1\u5212" }),
                (0, ie.jsxs)(W, {
                  minHeight: "70px",
                  children: [
                    (0, ie.jsxs)(
                      D,
                      {
                        children: [
                          (0, ie.jsx)("span", {
                            children: "\u4ea4\u8d39\u65b9\u5f0f",
                          }),
                          (0, ie.jsx)("i", { children: f.FS[n] }),
                        ],
                      },
                      "payFrequency"
                    ),
                    o.length > 1 &&
                      o.map((e, t) => {
                        let { initialPremium: r, insured: o } = e;
                        return (0, ie.jsxs)(
                          D,
                          {
                            children: [
                              (0, ie.jsx)("span", { children: o.name }),
                              (0, ie.jsxs)("i", {
                                className: "premium",
                                children: [
                                  (0, i.k3)(+r),
                                  "\u5143",
                                  +n === f.h8.Monthly ? "/\u6708" : "",
                                ],
                              }),
                            ],
                          },
                          `${o.name}${t}`
                        );
                      }),
                    (0, ie.jsxs)(
                      z,
                      {
                        children: [
                          (0, ie.jsx)("span", {
                            className: "label",
                            children: "\u4fdd\u8d39\u91d1\u989d",
                          }),
                          r > t &&
                            (0, ie.jsxs)(te, {
                              children: [
                                "\u5df2\u4f18\u60e0",
                                (0, i.k3)(+r - +t),
                                "\u5143",
                              ],
                            }),
                          (0, ie.jsxs)(Q, {
                            children: [
                              (0, i.k3)(+t),
                              "\u5143",
                              +n === f.h8.Monthly
                                ? "/\u6708 \u517112\u671f"
                                : "",
                            ],
                          }),
                        ],
                      },
                      "totalPay"
                    ),
                  ],
                }),
              ],
            },
            "\u4ea4\u8d39\u8ba1\u5212"
          );
        });
      var fe = r(76246),
        ye = r(66571),
        ge = r(2487);
      function me(e) {
        const { configs: t, cacheConfig: r } = (0, ge.JY)(),
          n = (0, I.gV)(),
          { data: i, loading: o } = (0, fe.Z)(
            async () => {
              var i;
              if (!e) return null;
              const o = await (async function (e, t) {
                const r = await (0, P.An)({
                  url: p.YC.OrderDetail,
                  params: { orderNo: e },
                  respAbnormalHandler: t,
                });
                if (!r)
                  return (
                    h.TF.reportMessage(
                      "\u91cd\u65b0\u6295\u4fdd: \u8ba2\u5355\u8be6\u60c5\u9875\u63a5\u53e3\u8fd4\u56de\u65e0\u6570\u636e",
                      { orderNo: e }
                    ),
                    r
                  );
                const { applicationFrom: n, orderStatus: i, payStatus: o } = r,
                  {
                    policies: a = [],
                    applicant: l,
                    payFrequency: c,
                    insuredPolicies: s,
                    totalPremium: u,
                    originalTotalPremium: d,
                    denyAppendReasonDesc: y,
                    isFamily: g,
                  } = n || {};
                let m = !1,
                  _ = "",
                  b = "";
                a.some((e) => {
                  let {
                    autoReapply: t,
                    encryptPolicyNo: r,
                    productCode: n,
                  } = e;
                  return (
                    _ || ((_ = n), (b = r)), (m ||= t === f.Oy.yes), m && _
                  );
                });
                let w = x.gV.ToBePaid;
                return (
                  (function () {
                    switch (+i) {
                      case x.iF.Complete:
                      case x.iF.Policying:
                      case x.iF.Refund:
                        return void (w = x.gV.Complete);
                      case x.iF.Canceled:
                      case x.iF.Invalid:
                        return void (w = x.gV.Invalid);
                      case x.iF.ToBePaid:
                        +o === x.P1.Paying && (w = x.gV.Paying);
                    }
                  })(),
                  {
                    ...v()(r, ["payDeadline", "encryptPaymentOrderId"]),
                    ...v()(n, ["familyPolicyNo"]),
                    isFamily: 1 === Number(g) ? x.lI.yes : x.lI.no,
                    policyNo: b,
                    mainProductCode: _,
                    pageOrderStatus: w,
                    insureInfo: {
                      orderNo: e,
                      ...v()(n, ["productName", "effectDate", "expiryDate"]),
                    },
                    applicant: l,
                    insuredsInfo: {
                      denyAppendReasonDesc: y,
                      insuredInfoList: s,
                    },
                    paymentPlanInfo: {
                      totalPremium: u,
                      originalTotalPremium: d,
                      payFrequency: c,
                      insuredInfoList: s,
                    },
                    hasAutoReinsurance: m,
                  }
                );
              })(e, n);
              if (!o) return null;
              const { mainProductCode: a, insuredsInfo: l } = o;
              let c = t[a];
              if (!c) {
                if (((c = await (0, ye.kP)(a)), !c)) return null;
                r(a, c);
              }
              const s =
                null === (i = c.insuredsInfoShowConfigs) || void 0 === i
                  ? void 0
                  : i.insuredCoverageLayout;
              return {
                ...o,
                insuredsInfo: { ...(l || {}), insuredCoverageLayout: s },
              };
            },
            { refreshDeps: [e] }
          );
        return { detail: i || null, loading: o };
      }
      r(42274), r(99136), r(68336);
      var ve = r(27142),
        xe = r(51441),
        Pe = r(96697),
        _e = r(90835);
      function be() {
        be = function () {
          return t;
        };
        var e,
          t = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          l = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function s(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          s({}, "");
        } catch (e) {
          s = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, n) {
          var o = t && t.prototype instanceof m ? t : m,
            a = Object.create(o.prototype),
            l = new T(n || []);
          return i(a, "_invoke", { value: I(e, r, l) }), a;
        }
        function d(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = u;
        var p = "suspendedStart",
          h = "suspendedYield",
          f = "executing",
          y = "completed",
          g = {};
        function m() {}
        function v() {}
        function x() {}
        var P = {};
        s(P, a, function () {
          return this;
        });
        var _ = Object.getPrototypeOf,
          b = _ && _(_(L([])));
        b && b !== r && n.call(b, a) && (P = b);
        var w = (x.prototype = m.prototype = Object.create(P));
        function j(e) {
          ["next", "throw", "return"].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function S(e, t) {
          function r(i, o, a, l) {
            var c = d(e[i], e, o);
            if ("throw" !== c.type) {
              var s = c.arg,
                u = s.value;
              return u && "object" == typeof u && n.call(u, "__await")
                ? t.resolve(u.__await).then(
                    function (e) {
                      r("next", e, a, l);
                    },
                    function (e) {
                      r("throw", e, a, l);
                    }
                  )
                : t.resolve(u).then(
                    function (e) {
                      (s.value = e), a(s);
                    },
                    function (e) {
                      return r("throw", e, a, l);
                    }
                  );
            }
            l(c.arg);
          }
          var o;
          i(this, "_invoke", {
            value: function (e, n) {
              function i() {
                return new t(function (t, i) {
                  r(e, n, t, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function I(t, r, n) {
          var i = p;
          return function (o, a) {
            if (i === f) throw Error("Generator is already running");
            if (i === y) {
              if ("throw" === o) throw a;
              return { value: e, done: !0 };
            }
            for (n.method = o, n.arg = a; ; ) {
              var l = n.delegate;
              if (l) {
                var c = k(l, n);
                if (c) {
                  if (c === g) continue;
                  return c;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (i === p) throw ((i = y), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              i = f;
              var s = d(t, r, n);
              if ("normal" === s.type) {
                if (((i = n.done ? y : h), s.arg === g)) continue;
                return { value: s.arg, done: n.done };
              }
              "throw" === s.type &&
                ((i = y), (n.method = "throw"), (n.arg = s.arg));
            }
          };
        }
        function k(t, r) {
          var n = r.method,
            i = t.iterator[n];
          if (i === e)
            return (
              (r.delegate = null),
              ("throw" === n &&
                t.iterator.return &&
                ((r.method = "return"),
                (r.arg = e),
                k(t, r),
                "throw" === r.method)) ||
                ("return" !== n &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              g
            );
          var o = d(i, t.iterator, r.arg);
          if ("throw" === o.type)
            return (
              (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), g
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((r[t.resultName] = a.value),
                (r.next = t.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = e)),
                (r.delegate = null),
                g)
              : a
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              g);
        }
        function C(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function A(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function T(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(C, this),
            this.reset(!0);
        }
        function L(t) {
          if (t || "" === t) {
            var r = t[a];
            if (r) return r.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var i = -1,
                o = function r() {
                  for (; ++i < t.length; )
                    if (n.call(t, i)) return (r.value = t[i]), (r.done = !1), r;
                  return (r.value = e), (r.done = !0), r;
                };
              return (o.next = o);
            }
          }
          throw new TypeError(typeof t + " is not iterable");
        }
        return (
          (v.prototype = x),
          i(w, "constructor", { value: x, configurable: !0 }),
          i(x, "constructor", { value: v, configurable: !0 }),
          (v.displayName = s(x, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === v || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, x)
                : ((e.__proto__ = x), s(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(w)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          j(S.prototype),
          s(S.prototype, l, function () {
            return this;
          }),
          (t.AsyncIterator = S),
          (t.async = function (e, r, n, i, o) {
            void 0 === o && (o = Promise);
            var a = new S(u(e, r, n, i), o);
            return t.isGeneratorFunction(r)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          j(w),
          s(w, c, "Generator"),
          s(w, a, function () {
            return this;
          }),
          s(w, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = L),
          (T.prototype = {
            constructor: T,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(A),
                !t)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var r = this;
              function i(n, i) {
                return (
                  (l.type = "throw"),
                  (l.arg = t),
                  (r.next = n),
                  i && ((r.method = "next"), (r.arg = e)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  l = a.completion;
                if ("root" === a.tryLoc) return i("end");
                if (a.tryLoc <= this.prev) {
                  var c = n.call(a, "catchLoc"),
                    s = n.call(a, "finallyLoc");
                  if (c && s) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!s)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r];
                if (
                  i.tryLoc <= this.prev &&
                  n.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), g)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                g
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), A(r), g;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var i = n.arg;
                    A(r);
                  }
                  return i;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (t, r, n) {
              return (
                (this.delegate = { iterator: L(t), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = e),
                g
              );
            },
          }),
          t
        );
      }
      var we =
          /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/,
        je = (function () {
          function e(e) {
            (this.getPayResult = e.getPayResult),
              (this.onPreCheck =
                null === e || void 0 === e ? void 0 : e.onPreCheck),
              (this.onCheckAfter =
                null === e || void 0 === e ? void 0 : e.onCheckAfter),
              (this.onDialogShow = e.onDialogShow),
              (this.onDialogClose =
                null === e || void 0 === e ? void 0 : e.onDialogClose),
              (this.onPaySuccess = e.onPaySuccess),
              (this.onPayFailed =
                null === e || void 0 === e ? void 0 : e.onPayFailed),
              (this.onPayTimeout = e.onPayTimeout),
              (this.onCallPayError =
                null === e || void 0 === e ? void 0 : e.onCallPayError),
              (this.env = (0, Pe.dU)()),
              (this.isPolling = !1);
            var t = new URLSearchParams(location.search).get("paymentOrderId");
            (this.payResultParams = t ? { paymentOrderId: t } : {}),
              this.triggerPollingCheck();
          }
          var t = e.prototype;
          return (
            (t.triggerPollingCheck = function () {
              var e = this;
              !1 === this.isPolling && this.callAutoCheck(),
                document.addEventListener("visibilitychange", function () {
                  "visible" === document.visibilityState &&
                    !1 === e.isPolling &&
                    e.callAutoCheck();
                });
            }),
            (t.checkPayStatus = function (e) {
              var t,
                r = e || {},
                n = r.status,
                i = r.returnUrl,
                o = r.overTime,
                a = r.merchantType;
              return 1 === n
                ? (this.onPaySuccess({ returnUrl: i, payStatus: n }), !1)
                : 4 === n || 1 === o
                ? (this.onPayTimeout({ returnUrl: i, payStatus: n }), !1)
                : 6 !== n ||
                  3 === a ||
                  (null === (t = this.onPayFailed) ||
                    void 0 === t ||
                    t.call(this, e),
                  !1);
            }),
            (t.callPay = function (e) {
              if (this.checkPayStatus(e)) {
                if (
                  ((this.payResultParams = {
                    paymentOrderId: e.paymentOrderId,
                  }),
                  3 === e.merchantType)
                )
                  return (
                    e.payUrl && (window.location.href = e.payUrl),
                    5 === e.status && this.autoCheck({ type: "pay" }),
                    !0
                  );
                if (1 !== e.signType || 1 !== e.signStatus || 5 !== e.status) {
                  var t = e.paymentOrderId,
                    r = new URLSearchParams(location.search);
                  if (
                    (t &&
                      (r.set("paymentOrderId", t),
                      r.set(_e.lr, (0, Pe.ai)(e)),
                      history.replaceState(
                        {},
                        document.title,
                        "?" + r.toString()
                      )),
                    e.mergedUrl)
                  ) {
                    var n = new URL(e.mergedUrl);
                    return (
                      e.paySource &&
                        n.searchParams.set("paySource", String(e.paySource)),
                      e.openId && n.searchParams.set("openId", e.openId),
                      void (location.href = n.toString())
                    );
                  }
                  var i = window.wx;
                  if (
                    "WechatMiniProgram" === this.env &&
                    (null === i || void 0 === i ? void 0 : i.miniProgram)
                  ) {
                    var o = encodeURIComponent(e.payUrl),
                      a = encodeURIComponent(location.href);
                    return (
                      i.miniProgram.navigateTo({
                        url:
                          "/pages/payment/index?payUrl=" +
                          o +
                          "&returnUrl=" +
                          a +
                          "&signType=" +
                          e.signType,
                      }),
                      !0
                    );
                  }
                  this.checkPayUrl(e),
                    0 === e.signType
                      ? this.pay(e)
                      : 1 === e.signType && this.sign(e);
                } else this.autoCheck({ type: "sign" });
              }
            }),
            (t.checkPayUrl = function (e) {
              var t;
              if (!e.payUrl)
                throw (
                  (null === (t = this.onCallPayError) ||
                    void 0 === t ||
                    t.call(this, e, "\u83b7\u53d6\u652f\u4ed8URL\u5931\u8d25"),
                  Error(
                    "\u3010PaySdk\u3011\u83b7\u53d6\u652f\u4ed8URL\u5931\u8d25"
                  ))
                );
            }),
            (t.pay = function (e) {
              var t = this;
              if (1 !== e.merchantType) {
                var r;
                if (2 === e.merchantType) {
                  var n = new URLSearchParams(location.search);
                  n.delete(_e.lr),
                    n.append(_e.lr, _e.oi.ALI_H5_PAY),
                    history.replaceState(
                      {},
                      document.title,
                      "?" + n.toString()
                    );
                  var i = window.setTimeout(function () {
                    (location.href = e.payUrl), i && clearTimeout(i);
                  }, 100);
                }
              } else {
                if ("WechatBrowser" === this.env && !we.test(e.payUrl))
                  return void ((r = e.payUrl),
                  new Promise(function (e, t) {
                    var n = window.WeixinJSBridge;
                    if (void 0 !== n) {
                      var i = (function (e) {
                        for (
                          var t = {}, r = e.split('"&'), n = 0, i = r.length;
                          n < i;
                          n++
                        ) {
                          var o = r[n].split('="'),
                            a = o[0],
                            l = o[1];
                          "package_string" === o[0] &&
                            o[1] &&
                            (l =
                              o[1].split("&").find(function (e) {
                                return null === e || void 0 === e
                                  ? void 0
                                  : e.includes("prepay_id=");
                              }) || ""),
                            "string" === typeof l && (l = l.replace('"', "")),
                            (t[a] = l);
                        }
                        return t;
                      })(r);
                      n.invoke(
                        "getBrandWCPayRequest",
                        {
                          appId: i.appId,
                          timeStamp: i.timeStamp,
                          nonceStr: i.nonceStr,
                          package: i.package_string,
                          signType: i.signType,
                          paySign: i.paySign,
                        },
                        function (t) {
                          return e(t.err_msg);
                        }
                      );
                    } else t(Error("\u3010PaySdk\u3011\u6ca1\u6709\u83b7\u53d6\u5230WeixinJSBridge\u5bf9\u8c61"));
                  }))
                    .then(function (r) {
                      var n;
                      "get_brand_wcpay_request:fail" !== r
                        ? t.autoCheck({ type: "pay" })
                        : null === (n = t.onPayFailed) ||
                          void 0 === n ||
                          n.call(t, { returnUrl: e.returnUrl, payStatus: 6 });
                    })
                    .catch(function (r) {
                      var n;
                      throw (
                        (null === (n = t.onCallPayError) ||
                          void 0 === n ||
                          n.call(t, e, r.message),
                        Error(r.message))
                      );
                    });
                var o =
                    e.payUrl +
                    "&redirect_url=" +
                    encodeURIComponent(
                      location.href +
                        "&appLinkUrl=" +
                        encodeURIComponent(e.appLinkUrl || "") +
                        "&appLinkUa=" +
                        (e.appLinkUa || "") +
                        "&" +
                        _e.lr +
                        "=" +
                        _e.oi.WECHAT_H5_PAY
                    ),
                  a = window.setTimeout(function () {
                    (location.href = o), a && clearTimeout(a);
                  }, 100);
              }
            }),
            (t.sign = function (e) {
              var t = window.setTimeout(function () {
                (location.href = e.payUrl), t && clearTimeout(t);
              }, 100);
            }),
            (t.payResult = function (e, t, r) {
              var n = this,
                i = e.type,
                o = (0, xe._T)(e, ["type"]);
              this.getPayResult(
                Object.assign(Object.assign({}, this.payResultParams), o || {})
              )
                .then(function (e) {
                  var t, o;
                  return 1 === e.payStatus
                    ? (null === (t = n.onCheckAfter) ||
                        void 0 === t ||
                        t.call(n, i),
                      void n.onPaySuccess(e))
                    : 4 !== e.payStatus
                    ? 6 === e.payStatus
                      ? (e.errorMsg &&
                          n.onCallPayError &&
                          n.onCallPayError(e, e.errorMsg),
                        void (
                          null === (o = n.onPayFailed) ||
                          void 0 === o ||
                          o.call(n, e)
                        ))
                      : void (null === r || void 0 === r || r(e))
                    : void n.onPayTimeout(e);
                })
                .catch(function () {
                  null === r || void 0 === r || r({});
                });
            }),
            (t.callAutoCheck = function () {
              var e,
                t = new URLSearchParams(location.search),
                r = t.get("paymentOrderId");
              this.payResultParams = r ? { paymentOrderId: r } : {};
              var n = t.get(_e.lr) || "",
                i = decodeURIComponent(t.get("appLinkUrl") || ""),
                o = decodeURIComponent(t.get("appLinkUa") || "");
              if (
                [_e.oi.WECHAT_H5_PAY, _e.oi.ALI_H5_PAY].includes(n) &&
                navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) &&
                !navigator.userAgent
                  .toLocaleLowerCase()
                  .includes(o.toLocaleLowerCase()) &&
                i
              )
                location.href = i;
              else if ((0, Pe.QA)()) {
                var a = (
                  null === (e = t.get(_e.lr)) || void 0 === e
                    ? void 0
                    : e.includes("sign")
                )
                  ? "sign"
                  : "pay";
                this.autoCheck({ type: a });
              }
            }),
            (t.autoCheck = function (e, t) {
              var r,
                n = e.type,
                i = (0, xe._T)(e, ["type"]);
              return (
                void 0 === t && (t = 0),
                (0, xe.mG)(
                  this,
                  void 0,
                  void 0,
                  be().mark(function e() {
                    var o,
                      a = this;
                    return be().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                !(
                                  ("pay" === n && t >= 4) ||
                                  ("sign" === n && t >= 15)
                                )
                              ) {
                                e.next = 8;
                                break;
                              }
                              return (
                                null === (r = this.onCheckAfter) ||
                                  void 0 === r ||
                                  r.call(this, n),
                                (this.isPolling = !1),
                                (o = new URLSearchParams(
                                  location.search
                                )).delete(_e.lr),
                                history.replaceState(
                                  {},
                                  document.title,
                                  "?" + o.toString()
                                ),
                                this.onDialogShow().then(function (e) {
                                  a.payResult(
                                    Object.assign({ type: n }, i),
                                    "checkEnd",
                                    function (t) {
                                      var r;
                                      null === (r = a.onDialogClose) ||
                                        void 0 === r ||
                                        r.call(a, e, n, t),
                                        "sign" === n &&
                                          1 === t.signStatus &&
                                          5 === t.payStatus &&
                                          a.autoCheck(
                                            Object.assign({ type: n }, i)
                                          );
                                    }
                                  );
                                }),
                                e.abrupt("return")
                              );
                            case 8:
                              if (
                                (0 === t &&
                                  this.onPreCheck &&
                                  (this.onPreCheck(n), (this.isPolling = !0)),
                                !(0, Pe.oR)())
                              ) {
                                e.next = 12;
                                break;
                              }
                              return (e.next = 12), (0, Pe._v)(3e3);
                            case 12:
                              this.payResult(
                                Object.assign({ type: n }, i),
                                "checking",
                                function (e) {
                                  var r = t + 1;
                                  if (
                                    4 ===
                                      (null === e || void 0 === e
                                        ? void 0
                                        : e.payStatus) ||
                                    6 ===
                                      (null === e || void 0 === e
                                        ? void 0
                                        : e.payStatus)
                                  )
                                    return (
                                      (r = 15),
                                      void a.autoCheck(
                                        Object.assign({ type: n }, i),
                                        r
                                      )
                                    );
                                  var o = window.setTimeout(function () {
                                    a.autoCheck(
                                      Object.assign({ type: n }, i),
                                      r
                                    ),
                                      o && clearTimeout(o);
                                  }, 1e3);
                                }
                              );
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )
              );
            }),
            e
          );
        })();
      function Se(e, t, r) {
        const n = new URLSearchParams(location.search);
        r && n.append("orderNo", r),
          e.replace(
            { pathname: `/status/${r}`, search: `?${n.toString()}` },
            { code: t ? w.jK.Complete : w.jK.PayAbnomal }
          );
      }
      function Ie(e, t, r) {
        n.Hj.click(j.Q.paymentResult, {
          page_name: "\u8ba2\u5355\u9875",
          order_no: t,
          is_payment_success: Number(r),
          error_type: "",
        }),
          Se(e, r, t);
      }
      function ke(e, t) {
        const r = (0, d.k6)(),
          [n, i] = (0, u.useState)(!1);
        (0, u.useEffect)(() => {
          const e = (0, g.vh)();
          !ve.Z.isWXMiniprogram() ||
            (e.paySource && e.openId) ||
            h.TF.reportError(
              "\u91cd\u65b0\u6295\u4fdd: \u5c0f\u7a0b\u5e8f\u8ba2\u5355\u9875\u7f3a\u5c11\u652f\u4ed8\u53c2\u6570",
              e,
              "p1"
            );
        }, []);
        return {
          isPaymentStatusPolling: n,
          payController: (0, u.useMemo)(
            () =>
              t
                ? new je({
                    getPayResult: async (e) => {
                      const { data: t, msg: r } = await (function (e) {
                        let { paymentOrderId: t } = e;
                        return (0, P.n8)(p.YC.CashierOrderQuery, {
                          paymentOrderId: t,
                        });
                      })(e);
                      if (t) return t;
                      throw new Error(r);
                    },
                    onDialogShow: () =>
                      o.Z.confirm({
                        title: "\u652f\u4ed8\u786e\u8ba4",
                        content:
                          "\u786e\u8ba4\u662f\u5426\u5df2\u7ecf\u5b8c\u6210\u652f\u4ed8\uff1f",
                        cancelText: "\u5c1a\u672a\u5b8c\u6210",
                        confirmText: "\u652f\u4ed8\u5b8c\u6210",
                      }),
                    onPreCheck: async () => {
                      i(!0);
                    },
                    onCheckAfter: () => {
                      i(!1);
                    },
                    onPaySuccess: () => {
                      Ie(r, e, !0);
                    },
                    onPayFailed: () => {
                      Ie(r, e, !1);
                    },
                    onPayTimeout: () => {
                      i(!1);
                    },
                    onCallPayError: (e, t) => {
                      a.Z.show(t);
                    },
                  })
                : null,
            [t, e, r]
          ),
        };
      }
      const Ce = (e) => {
          let { disabled: t, onClick: r, totalPremium: n } = e;
          return (0, ie.jsx)($, {
            children: (0, ie.jsx)(V, {
              children: (0, ie.jsxs)(q, {
                className: "footer-btn",
                disabled: t,
                onClick: r,
                children: [
                  "\u7acb\u5373\u652f\u4ed8 \xa5",
                  (0, i.k3)(n),
                  "\u5143",
                ],
              }),
            }),
          });
        },
        Ae = (0, u.memo)((e) => {
          let { orderNo: t, data: r } = e;
          const i = (0, d.k6)(),
            c = (0, I.gb)(),
            h = (0, s.du)((e) => {
              v(!0),
                (function (e, t) {
                  o.Z.alert({
                    title: "\u8ba2\u5355\u5df2\u5931\u6548",
                    content:
                      "\u672a\u53ca\u65f6\u5b8c\u6210\u652f\u4ed8\uff0c\u8bf7\u91cd\u65b0\u6295\u4fdd",
                    showCloseButton: !1,
                    confirmText: "\u91cd\u65b0\u6295\u4fdd",
                    onConfirm: () => {
                      n.Hj.click("payment_check_popup_click", {
                        scene: "\u8ba2\u5355\u5df2\u5931\u6548",
                        button_name: "\u91cd\u65b0\u6295\u4fdd",
                      }),
                        (0, k.Y5)(t, e);
                    },
                    afterShow() {
                      n.Hj.view("payment_check_popup_view", {
                        scene: "\u8ba2\u5355\u5df2\u5931\u6548",
                      });
                    },
                    destroyOnClose: !0,
                  });
                })(e, i);
            }),
            { clauseLinks: f } = (0, S.z)(
              null === r || void 0 === r ? void 0 : r.mainProductCode
            ),
            [m, v] = (0, u.useState)(!1),
            { isPaymentStatusPolling: C, payController: A } = ke(
              t,
              !(null === r || void 0 === r || !r.pageOrderStatus)
            ),
            [T, L] = (0, u.useState)(!1),
            N = (0, s.du)(async () => {
              L(!0);
              const e = await (async function (e, t) {
                  try {
                    const r = await y.ZP.getIseeBiz();
                    return t(
                      await (0, P.n8)(p.YC.CreatePayOrder, {
                        orderNo: e,
                        paymentOrderType: 9,
                        merchantTypeEnum: 1,
                        returnUrl: (0, _.jr)(r),
                        openId: (0, g.wr)(),
                      })
                    );
                  } catch (r) {
                    console.error(r);
                  }
                })(t, c),
                r = null === e || void 0 === e ? void 0 : e.data;
              if (
                (L(!1),
                n.Hj.click(j.Q.isPolicyReapply, {
                  is_policy_renewable:
                    0 === (null === e || void 0 === e ? void 0 : e.code)
                      ? "\u662f"
                      : "\u5426",
                }),
                !r || (null !== e && void 0 !== e && e.code))
              )
                return void (function (e) {
                  const {
                    code: t,
                    msg: r = "\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
                  } = null !== e && void 0 !== e ? e : {};
                  w.S9.includes(t)
                    ? o.Z.alert({
                        title: "\u8bf7\u7a0d\u540e\u518d\u8bd5",
                        content: r,
                        showCloseButton: !1,
                        confirmText: "\u6211\u77e5\u9053\u4e86",
                      })
                    : a.Z.show({ content: String(r) });
                })(e);
              const { encryptPaymentOrderIdStr: i } = r;
              null === A ||
                void 0 === A ||
                A.callPay({ ...r, paymentOrderId: i });
            }),
            E = (0, s.du)((e) => {
              const {
                policyNo: r,
                pageOrderStatus: o,
                encryptPaymentOrderId: a,
              } = e;
              switch ((n.Hj.view("proposal_info_view"), (0, k._3)(e), o)) {
                case x.gV.Complete:
                  return void Se(i, !0, t);
                case x.gV.Invalid:
                  return void h(r);
                case x.gV.Paying:
                  a &&
                    (null === A ||
                      void 0 === A ||
                      A.autoCheck({ type: "sign", paymentOrderId: a }));
              }
            });
          (0, u.useEffect)(() => {
            r && E(r);
          }, [r, E]);
          const {
              applicant: U,
              payDeadline: R,
              insureInfo: F,
              insuredsInfo: Z,
              pageOrderStatus: Y,
              paymentPlanInfo: G,
              hasAutoReinsurance: W,
            } = r,
            B = (0, _.KT)(W);
          return (0, ie.jsxs)(ie.Fragment, {
            children: [
              (0, ie.jsxs)(O, {
                reportable: {
                  event_id: "page_enter",
                  page_name: "\u8ba2\u5355\u9875",
                },
                children: [
                  x.gV.ToBePaid === Y &&
                    (0, ie.jsx)(se, {
                      isTimeout: m,
                      deadlineTime: R,
                      onTimeout: () => h(r.policyNo),
                    }),
                  (0, ie.jsxs)(H, {
                    children: [
                      (0, ie.jsx)(ue, { ...F }),
                      (0, ie.jsx)(oe, { ...U }),
                      (0, ie.jsx)(pe, { ...Z }),
                      (0, ie.jsx)(he, { ...G }),
                      (0, ie.jsx)(b.Z, { text: B, clauseLinks: f }),
                    ],
                  }),
                  (0, ie.jsx)(Ce, {
                    disabled: m,
                    onClick: N,
                    totalPremium: +G.totalPremium,
                  }),
                ],
              }),
              (0, ie.jsx)(l.Z, { size: "large", loading: C || T }),
            ],
          });
        }),
        Te = (0, u.memo)(() => {
          const { orderNo: e } = (0, d.UO)(),
            { loading: t, detail: r } = me(e);
          return (
            (0, u.useEffect)(
              () => (
                (0, _.wv)(e, "order"),
                (0, _.F0)(e, "order"),
                n.Hj.setExtendsInfo({ page_name: "\u8ba2\u5355\u9875" }),
                () => {
                  o.Z.clear();
                }
              ),
              [e]
            ),
            t || r
              ? (0, ie.jsx)(E, {
                  title: "\u8ba2\u5355\u8be6\u60c5",
                  children: t
                    ? (0, ie.jsx)(l.Z, { loading: !0 })
                    : (0, ie.jsx)(Ae, { orderNo: e, data: r }),
                })
              : (0, ie.jsx)(c.Z, {})
          );
        });
    },
    14306: (e, t, r) => {
      var n = 9007199254740991,
        i = "[object Arguments]",
        o = "[object Function]",
        a = "[object GeneratorFunction]",
        l = "[object Symbol]",
        c = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
        s = "object" == typeof self && self && self.Object === Object && self,
        u = c || s || Function("return this")();
      function d(e, t) {
        for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
        return e;
      }
      var p = Object.prototype,
        h = p.hasOwnProperty,
        f = p.toString,
        y = u.Symbol,
        g = p.propertyIsEnumerable,
        m = y ? y.isConcatSpreadable : void 0,
        v = Math.max;
      function x(e, t, r, n, i) {
        var o = -1,
          a = e.length;
        for (r || (r = P), i || (i = []); ++o < a; ) {
          var l = e[o];
          t > 0 && r(l)
            ? t > 1
              ? x(l, t - 1, r, n, i)
              : d(i, l)
            : n || (i[i.length] = l);
        }
        return i;
      }
      function P(e) {
        return (
          b(e) ||
          (function (e) {
            return (
              (function (e) {
                return (
                  w(e) &&
                  (function (e) {
                    return (
                      null != e &&
                      (function (e) {
                        return (
                          "number" == typeof e && e > -1 && e % 1 == 0 && e <= n
                        );
                      })(e.length) &&
                      !(function (e) {
                        var t = (function (e) {
                          var t = typeof e;
                          return !!e && ("object" == t || "function" == t);
                        })(e)
                          ? f.call(e)
                          : "";
                        return t == o || t == a;
                      })(e)
                    );
                  })(e)
                );
              })(e) &&
              h.call(e, "callee") &&
              (!g.call(e, "callee") || f.call(e) == i)
            );
          })(e) ||
          !!(m && e && e[m])
        );
      }
      function _(e) {
        if (
          "string" == typeof e ||
          (function (e) {
            return "symbol" == typeof e || (w(e) && f.call(e) == l);
          })(e)
        )
          return e;
        var t = e + "";
        return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
      }
      var b = Array.isArray;
      function w(e) {
        return !!e && "object" == typeof e;
      }
      var j,
        S,
        I =
          ((j = function (e, t) {
            return null == e
              ? {}
              : (function (e, t) {
                  return (function (e, t, r) {
                    for (var n = -1, i = t.length, o = {}; ++n < i; ) {
                      var a = t[n],
                        l = e[a];
                      r(l, a) && (o[a] = l);
                    }
                    return o;
                  })((e = Object(e)), t, function (t, r) {
                    return r in e;
                  });
                })(
                  e,
                  (function (e, t) {
                    for (
                      var r = -1, n = e ? e.length : 0, i = Array(n);
                      ++r < n;

                    )
                      i[r] = t(e[r], r, e);
                    return i;
                  })(x(t, 1), _)
                );
          }),
          (S = v(void 0 === S ? j.length - 1 : S, 0)),
          function () {
            for (
              var e = arguments, t = -1, r = v(e.length - S, 0), n = Array(r);
              ++t < r;

            )
              n[t] = e[S + t];
            t = -1;
            for (var i = Array(S + 1); ++t < S; ) i[t] = e[t];
            return (
              (i[S] = n),
              (function (e, t, r) {
                switch (r.length) {
                  case 0:
                    return e.call(t);
                  case 1:
                    return e.call(t, r[0]);
                  case 2:
                    return e.call(t, r[0], r[1]);
                  case 3:
                    return e.call(t, r[0], r[1], r[2]);
                }
                return e.apply(t, r);
              })(j, this, i)
            );
          });
      e.exports = I;
    },
    90835: (e, t, r) => {
      "use strict";
      r.d(t, { Yp: () => o, lr: () => l, oi: () => n, rw: () => i });
      var n,
        i,
        o,
        a,
        l = "_cpicPayBack";
      !(function (e) {
        (e.WECHAT_JS_API_PAY = "pay_wechat_jsApi"),
          (e.WECHAT_H5_PAY = "pay_wechat_h5"),
          (e.WECHAT_MINI_PROGRAM_PAY = "pay_wechat_miniprogram"),
          (e.WECHAT_OFFICIAL_SIGN = "sign_wechat_official_account"),
          (e.WECHAT_H5_SIGN = "sign_wechat_h5"),
          (e.WECHAT_MINI_PROGRAM_SIGN = "sign_wechat_miniprogram"),
          (e.ALI_H5_PAY = "pay_ali_h5"),
          (e.ALI_H5_PAY_SIGN = "sign_pay_ali_h5"),
          (e.BANK_PAY = "pay_bank");
      })(n || (n = {})),
        (function (e) {
          (e[(e.WECHAT = 1)] = "WECHAT"),
            (e[(e.ALI = 2)] = "ALI"),
            (e[(e.BANK = 3)] = "BANK");
        })(i || (i = {})),
        (function (e) {
          (e[(e.NOT_SIGN = 0)] = "NOT_SIGN"), (e[(e.SIGN = 1)] = "SIGN");
        })(o || (o = {})),
        (function (e) {
          (e[(e.WAITING_PAY = 0)] = "WAITING_PAY"),
            (e[(e.PAYING_SUCCESS = 1)] = "PAYING_SUCCESS"),
            (e[(e.REFUND_COMPLETED = 2)] = "REFUND_COMPLETED"),
            (e[(e.REFUND_ING = 3)] = "REFUND_ING"),
            (e[(e.CANCELED = 4)] = "CANCELED"),
            (e[(e.PAYING = 5)] = "PAYING"),
            (e[(e.PAY_FAILED = 6)] = "PAY_FAILED"),
            (e[(e.AUTH_PAY = 7)] = "AUTH_PAY");
        })(a || (a = {}));
    },
    96697: (e, t, r) => {
      "use strict";
      r.d(t, {
        QA: () => l,
        _v: () => a,
        ai: () => s,
        dU: () => o,
        oR: () => c,
      });
      var n,
        i = r(90835);
      !(function (e) {
        (e.WechatMiniProgram = "WechatMiniProgram"),
          (e.WechatBrowser = "WechatBrowser"),
          (e.AliPayBrowser = "AliPayBrowser");
      })(n || (n = {}));
      var o = function () {
          var e = window.navigator.userAgent.toLowerCase();
          return e.indexOf("micromessenger") > -1
            ? e.indexOf("miniprogram") > -1
              ? n.WechatMiniProgram
              : n.WechatBrowser
            : e.indexOf("alipayclient") > -1
            ? n.AliPayBrowser
            : "";
        },
        a = function (e) {
          return new Promise(function (t) {
            return setTimeout(t, e);
          });
        },
        l = function () {
          return !!new URLSearchParams(location.search).get(i.lr);
        },
        c = function () {
          return (
            new URLSearchParams(location.search).get(i.lr) === i.oi.BANK_PAY
          );
        },
        s = function (e) {
          var t,
            r,
            a,
            l,
            c,
            s,
            u = o(),
            d = (((s = {})[i.rw.WECHAT] =
              (((l = {})[n.WechatMiniProgram] =
                (((t = {})[i.Yp.NOT_SIGN] = i.oi.WECHAT_MINI_PROGRAM_PAY),
                (t[i.Yp.SIGN] = i.oi.WECHAT_MINI_PROGRAM_SIGN),
                t)),
              (l[n.WechatBrowser] =
                (((r = {})[i.Yp.NOT_SIGN] = i.oi.WECHAT_JS_API_PAY),
                (r[i.Yp.SIGN] = i.oi.WECHAT_OFFICIAL_SIGN),
                r)),
              (l.default =
                (((a = {})[i.Yp.NOT_SIGN] = i.oi.WECHAT_H5_PAY),
                (a[i.Yp.SIGN] = i.oi.WECHAT_H5_SIGN),
                a)),
              l)),
            (s[i.rw.ALI] = {
              default:
                ((c = {}),
                (c[i.Yp.NOT_SIGN] = i.oi.ALI_H5_PAY),
                (c[i.Yp.SIGN] = i.oi.ALI_H5_PAY_SIGN),
                c),
            }),
            s)[e.merchantType];
          if (!d) return i.oi.WECHAT_H5_PAY;
          var p = d[u] || d.default;
          return p ? p[e.signType] || p[i.Yp.NOT_SIGN] : i.oi.WECHAT_H5_PAY;
        };
    },
  },
]);
//# sourceMappingURL=https://h-h5api.cpic.com.cn/static/reapply_insurance/static/js/920.7c7057ef.js.map

MathJax.Hub.Config({
    extensions: ["tex2jax.js"],
    jax: ["input/TeX", "output/HTML-CSS"],
    // "HTML-CSS": {
    //     styles: {".MathJax_Preview": {visibility: "hidden"}}
    // },
    tex2jax: {
        inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"]
        ]
    },
    TeX: {
        extensions: ["AMSmath.js", "AMSsymbols.js", "http://zenozeng.github.io/MathJax/extra/xyjax.js", "color.js"]
    }
});

(function() {

    // ready from http://youmightnotneedjquery.com/#ready
    function ready(fn) {
        if (document.readyState != 'loading'){
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    var baseURL = "//zenozeng.github.io/MathJax/";

    ready(function() {
        var s;

        s = document.createElement("script");
        s.type = "text/javascript";
        s.src = baseURL + "core/MathJax.js";
        s.onload = function() {
            MathJax.Hub.Config({
                extensions: ["tex2jax.js"],
                jax: ["input/TeX", "output/HTML-CSS"],
                "HTML-CSS": {
                    availableFonts: [],
                    preferredFonts: "TeX",
                    webFont:"",
                    imageFont:"",
                    undefinedFamily:"'Arial Unicode MS',serif"
                },
                tex2jax: {
                    inlineMath: [
                        ["$", "$"],
                        ["\\(", "\\)"]
                    ]
                },
                TeX: {
                    extensions: ["AMSmath.js", "AMSsymbols.js", "//zenozeng.github.io/MathJax/extra/xyjax.js", "color.js"]
                }
            });
        };
        document.head.appendChild(s);
    });

})();

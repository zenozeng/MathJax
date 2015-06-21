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
                config: ["MMLorHTML.js"],
                jax: ["input/TeX","input/MathML","input/AsciiMath","output/HTML-CSS","output/NativeMML", "output/CommonHTML"],
                extensions: ["tex2jax.js","mml2jax.js","asciimath2jax.js","MathMenu.js","MathZoom.js", "CHTML-preview.js"],
                TeX: {
                    extensions: ["AMSmath.js","AMSsymbols.js","noErrors.js","noUndefined.js",
                                 "//zenozeng.github.io/MathJax/extra/xyjax.js",
                                 "color.js"]
                },
                "HTML-CSS": {
                    availableFonts: [],
                    preferredFont: "",
                    webFont: "STIX-Web" // use STIX-Web only
                }
            });
        };
        document.head.appendChild(s);
    });

})();

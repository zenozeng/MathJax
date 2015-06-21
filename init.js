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
        console.log('ready', document.readyState);

        var s;
        s = document.createElement("script");
        s.type = "text/javascript";
        s.src = baseURL + "core/MathJax.js";
        document.head.appendChild(s);

        s = document.createElement("script");
        s.type = "text/x-mathjax-config";
        s.src = baseURL + "config.js";
        document.head.appendChild(s);
    });

});

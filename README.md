# MathJax

MathJax's CDN is a little bit slow in China.
This repo is a self hosted MathJax plus configuration for color and XyJax.

## Usage

Include this in your markdown:

```html
<script src="//zenozeng.github.io/MathJax/init.js"></script>
```

Or if you are using pandoc:

```bash
pandoc index.md -s --mathjax='//zenozeng.github.io/MathJax/init.js' -o index.html
```

## Example

- https://zenozeng.github.io/MathJax/examples/

- https://github.com/zenozeng/MathJax/blob/gh-pages/examples/index.md

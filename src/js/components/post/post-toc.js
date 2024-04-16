import tocbot from "tocbot";

// see: https://github.com/tscanlin/tocbot#usage
export function toc() {
    if (document.querySelector('.content h2')) {
        tocbot.init({
            tocSelector: '#toc-wrapper',
            contentSelector: '.content',
            ignoreSelector: '[data-toc-skip]',
            headingSelector: 'h2, h3, h4, h5',
            orderedList: false,
            scrollSmooth: false
        });
    }
}
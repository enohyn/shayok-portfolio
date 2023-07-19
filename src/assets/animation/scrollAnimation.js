 export const scrollAnim = window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercentage =
        (scrollTop / (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
    const item1 = document.querySelector(".ex-reveal__item:nth-child(1)");
    const item2 = document.querySelector(".ex-reveal__item:nth-child(2)");
    const content = document.querySelector(".ex-reveal__content");

    item1.style.transform = "translate3d(0px, " + -scrollPercentage + "%, 0px)";
    item2.style.transform = "translate3d(0px, " + scrollPercentage + "%, 0px)";
    content.style.transform =
        "translate3d(0px, " + -scrollPercentage * 4 + "%, 0px)";
});

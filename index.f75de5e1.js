"use strict";
const ul = document.querySelector("#thumbs");
const largeImg = document.querySelector("#largeImg");
ul.addEventListener("click", (e)=>{
    e.preventDefault();
    const link = e.target.closest("a");
    largeImg.src = link;
});

//# sourceMappingURL=index.f75de5e1.js.map

var btnExpand=document.querySelector(".js-btn-expand"),btnCollapse=document.querySelector(".js-btn-collapse"),detailsTags=document.getElementsByTagName("details");function toggleContents(){this.classList.contains("js-btn-expand")?(btnCollapse.disabled=!1,detailOpenAttribute(detailsTags,!0)):this.classList.contains("js-btn-collapse")&&(btnExpand.disabled=!1,detailOpenAttribute(detailsTags,!1)),this.disabled=!0}function detailOpenAttribute(t,e){for(var n=0;n<t.length;n++)t[n].open=e}function basicScrollTop(){var t=document.querySelector("#js-btn-totop"),e=function(){0!==window.scrollY&&setTimeout(function(){window.scrollTo(0,window.scrollY-30),e()},5)};window.addEventListener("scroll",debounce(function(){300<=window.scrollY?t.classList.add("is-visible"):t.classList.remove("is-visible")})),t.addEventListener("click",e)}function debounce(n,s){var i;return s=s||100,function(){clearTimeout(i);var t=arguments,e=this;i=setTimeout(function(){n.apply(e,t)},s)}}btnExpand.addEventListener("click",toggleContents),btnCollapse.addEventListener("click",toggleContents),basicScrollTop();
(()=>{var e=document.getElementById("navModal"),l=document.getElementById("openModalImage"),n=document.getElementById("closeModalImage");function d(){e.style.display="none",closeModalImage.style.display="none",openModalImage.style.display="inline-flex"}l.addEventListener("click",(function(){e.style.display="block",openModalImage.style.display="none",closeModalImage.style.display="inline-flex"})),n.addEventListener("click",d),window.addEventListener("click",(function(l){l.target===e&&d()}))})();
import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m,i as f}from"./assets/vendor-77e16229.js";const h=document.querySelector("#datetime-picker"),a=document.querySelector("button[data-start]"),p=document.querySelector("span[data-days]"),y=document.querySelector("span[data-hours]"),g=document.querySelector("span[data-minutes]"),S=document.querySelector("span[data-seconds]");let r=new Date,i=null;a.addEventListener("click",M);const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<r?(f.show({title:"Error",message:"Please choose a data in the future",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",titleSize:"16px",titleLineHeight:"24px",messageColor:"#fff",messageSize:"16px",messageLineHeight:"24px",iconUrl:"./img/error-massage.svg",timeout:5e3}),a.disabled=!0):(i=new Date(t[0]),a.disabled=!1)}};m(h,C);function x(t){const c=n(Math.floor(t/864e5)),d=n(Math.floor(t%864e5/36e5)),u=n(Math.floor(t%864e5%36e5/6e4)),l=n(Math.floor(t%864e5%36e5%6e4/1e3));return{days:c,hours:d,minutes:u,seconds:l}}function n(t){return String(t).padStart(2,"0")}function D({days:t,hours:e,minutes:o,seconds:s}){p.textContent=t,y.textContent=e,g.textContent=o,S.textContent=s}function M(){a.disabled=!0;const t=setInterval(()=>{r=new Date;const e=i-r,o=x(e);D(o),Math.floor(e/1e3)===0&&clearInterval(t)},1e3)}
//# sourceMappingURL=commonHelpers.js.map

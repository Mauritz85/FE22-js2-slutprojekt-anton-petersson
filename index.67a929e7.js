function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,n={},r={},a=t.parcelRequireb1ed;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},t.parcelRequireb1ed=a),(0,a.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>n,set:e=>n=e,enumerable:!0,configurable:!0});var n,r=new Map;n=function(e,t){for(var n=0;n<t.length-1;n+=2)r.set(t[n],{baseUrl:e,path:t[n+1]})}}),a("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["9kOf5","index.67a929e7.js","jqgIu","duck.28d63305.jpg","4sssT","flower.a830cd83.jpg","atWNV","lemon.4ece7dfa.jpg"]'));var l=a("k8Jq9"),o={};o=new URL("duck.28d63305.jpg",import.meta.url).toString();var d={};d=new URL("flower.a830cd83.jpg",import.meta.url).toString();var i={};i=new URL("lemon.4ece7dfa.jpg",import.meta.url).toString();const c=localStorage.getItem("localUser"),u=document.getElementById("register").content.cloneNode(!0),s=document.getElementById("login").content.cloneNode(!0),m=document.getElementById("home").content.cloneNode(!0);async function p(e){e.preventDefault();let t=document.getElementById("username-input"),n=document.getElementById("password-input"),r=document.querySelector('input[name="img-choice"]:checked');await (0,l.addUserToFirebase)(t.value.toLowerCase(),n.value,r.value),""===t.value||""===n.value?alert("Both username and password needs to be filled in"):!0===l.userAdded?location.reload():alert("Username already exists"),alert("You account was successfully created. Please log in to begin.")}async function g(e){let t;e.preventDefault();let n=document.getElementById("username-input"),r=document.getElementById("password-input");document.getElementById("img-select"),await (0,l.userValidation)(n.value.toLowerCase(),r.value),!0==l.userValidated?(t=n.value.toLowerCase(),await (0,l.getUserImg)(n.value),localStorage.setItem("localUser",JSON.stringify(t)),localStorage.setItem("localImg",JSON.stringify(l.userImg)),location.reload()):alert("Username and password did not match. Please try again")}async function y(){let t,n;document.body.innerHTML="",document.body.appendChild(m);let r=localStorage.getItem("localUser"),a=localStorage.getItem("localImg");if("string"!=typeof r||"string"!=typeof a)return;{t=JSON.parse(r),n=JSON.parse(a);let l={},c=document.getElementById("profile-img");"flower"==n&&(l=e(d)),"duck"==n&&(l=e(o)),"lemon"==n&&(l=e(i)),c.src=l}document.getElementById("username-head").innerHTML=t,document.getElementById("home-link").addEventListener("click",b),document.getElementById("member-link").addEventListener("click",v),document.getElementById("delete-link").addEventListener("click",L),document.getElementById("logout-link").addEventListener("click",E),f(t);let c=document.getElementById("entry-input");document.getElementById("entry-btn").addEventListener("click",function(e){e.preventDefault(),(0,l.addEntryToFirebase)(t,c.value),f(t),c.value=""})}async function f(e){await (0,l.getStatusUpdates)(e);let t=document.getElementById("entry-container");if(t.innerHTML="",void 0!=l.entries)for(let n=l.entries.length-1;n>=0;n--){let r=document.createElement("div");r.setAttribute("id","entry-box"),t.append(r);let a=document.createElement("p");a.setAttribute("id","sender-p");let o=document.createElement("p");o.setAttribute("id","entry-p");let d=document.createElement("p");d.setAttribute("id","timestamp-p"),r.append(a,o,d),a.innerHTML=e+":",o.innerHTML=l.entries[n][1].entry,d.innerHTML="("+l.entries[n][1].time+")"}}function E(e){e.preventDefault(),localStorage.removeItem("localUser"),localStorage.removeItem("localImg"),location.reload()}function b(e){e.preventDefault(),location.reload()}async function v(){let e=document.getElementById("four");e.innerHTML="",await (0,l.getMembers)();for(let t=0;t<l.members.length;t++){let n=document.createElement("a");n.innerHTML=l.members[t][0],n.href="#",n.classList.add("member-anchor"),e.append(n)}document.querySelectorAll("a.member-anchor").forEach(t=>t.addEventListener("click",async function(t){t.preventDefault();let n=t.target;e.innerHTML="";let r=document.createElement("h3");if(r.innerHTML=n.innerHTML+"´s status updates",e.append(r),await (0,l.getStatusUpdates)(n.innerHTML),null===l.entries){let t=document.createElement("p");r.innerHTML=n.innerHTML+" has no status updates",e.append(t)}else for(let t=l.entries.length-1;t>=0;t--){let r=document.createElement("div");r.setAttribute("id","entry-box"),e.append(r);let a=document.createElement("p");a.setAttribute("id","sender-p");let o=document.createElement("p");o.setAttribute("id","entry-p");let d=document.createElement("p");d.setAttribute("id","timestamp-p"),r.append(a,o,d),a.innerHTML=n.innerHTML+":",o.innerHTML=l.entries[t][1].entry,d.innerHTML="("+l.entries[t][1].time+")"}}))}async function L(){if(confirm("Are you sure you want to delete your account?")&&c){let e=c.replace(/^"(.*)"$/,"$1");await (0,l.deleteUserFromFirebase)(e),alert("Your account is succesfully deleted"),localStorage.clear(),location.reload()}}"string"==typeof c?(JSON.parse(c),y()):(document.body.innerHTML="",document.body.appendChild(s),document.getElementById("login-btn").addEventListener("click",g),document.getElementById("register-link").addEventListener("click",function(){document.body.innerHTML="",document.body.appendChild(u),document.getElementById("register-btn").addEventListener("click",p)})),document.getElementById("content-box");
//# sourceMappingURL=index.67a929e7.js.map

import{_ as i,r,o as c,c as d,a as e,b as n,w as s,F as h,d as a,e as t}from"./app.dc891b50.js";const u={},_=a(`<h1 id="selectmenusmanager" tabindex="-1"><a class="header-anchor" href="#selectmenusmanager" aria-hidden="true">#</a> SelectMenusManager</h1><p>Create an handler for bot select-menus. The select-menus can be in as many subfolders as desired.</p><h2 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> Constructor</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">SelectMenusManager</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,4),p=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Description"),e("th",null,"Default"),e("th",null,"Optional")])],-1),m=e("td",null,"client",-1),f=t("ShewenyClient"),b=e("td",null,"The client",-1),g=e("td",null,"None",-1),y=e("td",null,"No",-1),v=e("td",null,"options",-1),S=t("SelectMenuOptions"),k=e("td",null,"Options of the select-menus manager",-1),x=e("td",null,"None",-1),M=e("td",null,"No",-1),w=a('<details class="custom-container details"><summary>Properties</summary><ul><li><a href="#client">client</a></li><li><a href="#directory">directory</a></li><li><a href="#selectMenus">selectMenus</a></li></ul></details><details class="custom-container details"><summary>Methods</summary><ul><li><a href="#loadall">loadAll</a></li><li><a href="#unloadall">unloadAll</a></li></ul></details><details class="custom-container details"><summary>Events</summary><ul><li><a href="#cooldownlimit">cooldownLimit</a></li></ul></details><h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><h3 id="client" tabindex="-1"><a class="header-anchor" href="#client" aria-hidden="true">#</a> client</h3><p>The framework client.</p>',6),C=t("Return : "),N=t("ShewenyClient"),R=e("h3",{id:"directory",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#directory","aria-hidden":"true"},"#"),t(" directory")],-1),T=e("p",null,"The directory of selectMenus.",-1),j=t("Return : "),O={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},L=t("String"),A=e("h3",{id:"selectmenus",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#selectmenus","aria-hidden":"true"},"#"),t(" selectMenus")],-1),E=e("p",null,"The collection of loaded selectMenus.",-1),z=t("Return : Collection<"),B=t("Button"),G=t(">"),J=e("h2",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),P=e("h3",{id:"loadall",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#loadall","aria-hidden":"true"},"#"),t(" loadAll()")],-1),W=e("p",null,"Load all select-menus in directory of select-menus.",-1),I=t("Return : "),V={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"},D=t("Promise"),F=t("<Collection<"),U={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"},q=t("Array"),H=t("<"),K={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},Q=t("String"),X=t(">, "),Y=t("SelectMenu"),Z=t(">>"),$=a('<h3 id="unloadall" tabindex="-1"><a class="header-anchor" href="#unloadall" aria-hidden="true">#</a> unloadAll()</h3><p>Unload all select-menus.</p><p>Return : void</p><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><h3 id="cooldownlimit" tabindex="-1"><a class="header-anchor" href="#cooldownlimit" aria-hidden="true">#</a> cooldownLimit</h3><p>Emitted when user hit the cooldown limit.</p><p>Parameters :</p>',7),ee=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Description")])],-1),te=e("td",null,"interaction",-1),ne={href:"https://discord.js.org/#/docs/main/stable/class/CommandInteraction",target:"_blank",rel:"noopener noreferrer"},oe=t("CommandInteraction"),le=e("td",null,"The interaction",-1),se=e("td",null,"time",-1),ae={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"},re=t("Number"),ie=e("td",null,"The time before run again",-1);function ce(de,he){const l=r("RouterLink"),o=r("ExternalLinkIcon");return c(),d(h,null,[_,e("table",null,[p,e("tbody",null,[e("tr",null,[m,e("td",null,[n(l,{to:"/doc/client/ShewenyClient.html"},{default:s(()=>[f]),_:1})]),b,g,y]),e("tr",null,[v,e("td",null,[n(l,{to:"/doc/typedef/ManagerOptions.html#selectmenuoptions"},{default:s(()=>[S]),_:1})]),k,x,M])])]),w,e("p",null,[C,n(l,{to:"/doc/client/ShewenyClient.html"},{default:s(()=>[N]),_:1})]),R,T,e("p",null,[j,e("a",O,[L,n(o)])]),A,E,e("p",null,[z,n(l,{to:"/doc/structures/Button.html"},{default:s(()=>[B]),_:1}),G]),J,P,W,e("p",null,[I,e("a",V,[D,n(o)]),F,e("a",U,[q,n(o)]),H,e("a",K,[Q,n(o)]),X,n(l,{to:"/doc/structures/SelectMenu.html"},{default:s(()=>[Y]),_:1}),Z]),$,e("table",null,[ee,e("tbody",null,[e("tr",null,[te,e("td",null,[e("a",ne,[oe,n(o)])]),le]),e("tr",null,[se,e("td",null,[e("a",ae,[re,n(o)])]),ie])])])],64)}var _e=i(u,[["render",ce],["__file","SelectMenusManager.html.vue"]]);export{_e as default};
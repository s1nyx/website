import{_ as i,r as l,o as d,c,a as e,b as n,w as a,F as h,d as r,e as t}from"./app.dc891b50.js";const _={},u=r(`<h1 id="eventsmanager" tabindex="-1"><a class="header-anchor" href="#eventsmanager" aria-hidden="true">#</a> EventsManager</h1><p>Create an handler for bot events. The events can be in as many subfolders as desired.</p><h2 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> Constructor</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">EventsManager</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,4),p=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Description"),e("th",null,"Default"),e("th",null,"Optional")])],-1),f=e("td",null,"client",-1),v=t("ShewenyClient"),m=e("td",null,"The client",-1),g=e("td",null,"None",-1),b=e("td",null,"No",-1),y=e("td",null,"options",-1),x=t("BaseManagerOptions"),k=e("td",null,"Options of the events manager",-1),R=e("td",null,"None",-1),S=e("td",null,"No",-1),E=r('<details class="custom-container details"><summary>Properties</summary><ul><li><a href="#client">client</a></li><li><a href="#default">default</a></li><li><a href="#directory">directory</a></li><li><a href="#events">events</a></li></ul></details><details class="custom-container details"><summary>Methods</summary><ul><li><a href="#loadall">loadAll</a></li><li><a href="#loadandregisterall">loadAndRegisterAll</a></li><li><a href="#registerAll">registerAll</a></li><li><a href="#unloadall">unloadAll</a></li></ul></details><h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><h3 id="client" tabindex="-1"><a class="header-anchor" href="#client" aria-hidden="true">#</a> client</h3><p>The framework client.</p>',5),O=t("Return : "),A=t("ShewenyClient"),C=e("h3",{id:"default",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#default","aria-hidden":"true"},"#"),t(" default")],-1),M=e("p",null,"The default data of the events.",-1),j=t("Return : "),w=t("EventsManagerDefaultOption"),N=e("h3",{id:"directory",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#directory","aria-hidden":"true"},"#"),t(" directory")],-1),P=e("p",null,"The directory of events.",-1),T=t("Return : "),z={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},G=t("String"),J=e("h3",{id:"events",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#events","aria-hidden":"true"},"#"),t(" events")],-1),L=e("p",null,"The collection of loaded events.",-1),W=t("Return : Collection<"),B=t("Event"),D=t(">"),V=e("h2",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),F=e("h3",{id:"loadall",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#loadall","aria-hidden":"true"},"#"),t(" loadAll()")],-1),I=e("p",null,"Load all inhibitors in directory of events.",-1),U=t("Return : "),q={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"},H=t("Promise"),K=t("<Collection<"),Q={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},X=t("String"),Y=t(", "),Z=t("Event"),$=t(">>"),ee=e("h3",{id:"registerall-events",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#registerall-events","aria-hidden":"true"},"#"),t(" registerAll(events)")],-1),te=e("p",null,"Register loaded events and register them if no events exist.",-1),ne=e("p",null,"Parameters :",-1),oe=t("events (type: Collection<"),ae={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},se=t("String"),le=t(", "),re=t("Event"),ie=t(")>)"),de=t("Return : "),ce={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"},he=t("Promise"),_e=t("<void>"),ue=e("h3",{id:"loadandregisterall",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#loadandregisterall","aria-hidden":"true"},"#"),t(" loadAndRegisterAll()")],-1),pe=e("p",null,"Load and register all events.",-1),fe=t("Return : "),ve={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"},me=t("Promise"),ge=t("<void>"),be=e("h3",{id:"unloadall",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#unloadall","aria-hidden":"true"},"#"),t(" unloadAll()")],-1),ye=e("p",null,"Unload all events.",-1),xe=e("p",null,"Return : void",-1);function ke(Re,Se){const o=l("RouterLink"),s=l("ExternalLinkIcon");return d(),c(h,null,[u,e("table",null,[p,e("tbody",null,[e("tr",null,[f,e("td",null,[n(o,{to:"/doc/client/ShewenyClient.html"},{default:a(()=>[v]),_:1})]),m,g,b]),e("tr",null,[y,e("td",null,[n(o,{to:"/doc/typedef/ManagerOptions.html#basemanageroptions"},{default:a(()=>[x]),_:1})]),k,R,S])])]),E,e("p",null,[O,n(o,{to:"/doc/client/ShewenyClient.html"},{default:a(()=>[A]),_:1})]),C,M,e("p",null,[j,n(o,{to:"/doc/typedef/ManagersDefaultOptions.html#eventsmanagerdefaultoptions"},{default:a(()=>[w]),_:1})]),N,P,e("p",null,[T,e("a",z,[G,n(s)])]),J,L,e("p",null,[W,n(o,{to:"/doc/structures/Event.html"},{default:a(()=>[B]),_:1}),D]),V,F,I,e("p",null,[U,e("a",q,[H,n(s)]),K,e("a",Q,[X,n(s)]),Y,n(o,{to:"/doc/managers/Event.html"},{default:a(()=>[Z]),_:1}),$]),ee,te,ne,e("ul",null,[e("li",null,[oe,e("a",ae,[se,n(s)]),le,n(o,{to:"/doc/structures/Event.html"},{default:a(()=>[re]),_:1}),ie])]),e("p",null,[de,e("a",ce,[he,n(s)]),_e]),ue,pe,e("p",null,[fe,e("a",ve,[me,n(s)]),ge]),be,ye,xe],64)}var Oe=i(_,[["render",ke],["__file","EventsManager.html.vue"]]);export{Oe as default};
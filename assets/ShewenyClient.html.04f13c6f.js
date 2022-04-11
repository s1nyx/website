import{_ as c,r,o as l,c as d,a as e,b as n,w as s,F as h,d as i,e as t}from"./app.dc891b50.js";const _={},u=i(`<h1 id="shewenyclient" tabindex="-1"><a class="header-anchor" href="#shewenyclient" aria-hidden="true">#</a> ShewenyClient</h1><p>The main hub for interacting with the Discord API, and the starting point for any bot.</p><h2 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> Constructor</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">ShewenyClient</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,4),p=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Description"),e("th",null,"Optional")])],-1),m=e("td",null,"options",-1),f=t("ShewenyClientOptions"),b=e("td",null,"The options for the client",-1),g=e("td",null,"No",-1),C=e("td",null,"clientOptions",-1),y={href:"https://discord.js.org/#/docs/main/stable/typedef/ClientOptions",target:"_blank",rel:"noopener noreferrer"},x=t("ClientOptions"),v=e("td",null,"The options for the discord.js client (use first parameter if not provided)",-1),w=e("td",null,"\u2713",-1),S=i('<details class="custom-container details"><summary>Properties</summary><ul><li><a href="#admins">admins</a></li><li><a href="#collections">collections</a></li><li><a href="#connected">connected</a></li><li><a href="#jointhreadsoncreate">joinThreadsOnCreate</a></li><li><a href="#managers">managers</a></li><li><a href="#mode">mode</a></li><li><a href="#util">util</a></li></ul></details><details class="custom-container details"><summary>Methods</summary><ul><li><a href="#awaitready">awaitReady</a></li></ul></details><details class="custom-container details"><summary>Events</summary><ul><li><a href="#interactionbuttoncreate">interactionButtonCreate</a></li><li><a href="#interactioncommandcreate">interactionCommandCreate</a></li><li><a href="#interactioncontextmenucreate">interactionContextMenuCreate</a></li><li><a href="#interactionmessagecomponentcreate">interactionMessageComponentCreate</a></li><li><a href="#interactionselectmenucreate">interactionSelectMenuCreate</a></li></ul></details><h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><h3 id="admins" tabindex="-1"><a class="header-anchor" href="#admins" aria-hidden="true">#</a> admins</h3><p>The admins of the bot (no affected by cooldown and have adminOnly permission).</p>',6),k=t("Return : "),j={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"},M=t("Array"),I=t("<"),R={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},O=t("String"),B=t(">"),P=e("h3",{id:"collections",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#collections","aria-hidden":"true"},"#"),t(" collections")],-1),T=e("p",null,"The collections of commands, events, buttons, select-menus, inhibitors.",-1),E=t("Return : "),W=t("ShewenyClientCollections"),z=e("h3",{id:"connected",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#connected","aria-hidden":"true"},"#"),t(" connected")],-1),G=e("p",null,"Indicate when the client is connected to the Discord API.",-1),J=t("Return : "),N={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"},U=t("Boolean"),A=e("h3",{id:"jointhreadsoncreate",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#jointhreadsoncreate","aria-hidden":"true"},"#"),t(" joinThreadsOnCreate")],-1),L=e("p",null,"If the bot should join threads on create.",-1),V=t("Return : "),D={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"},F=t("Boolean"),q=e("h3",{id:"managers",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#managers","aria-hidden":"true"},"#"),t(" managers")],-1),H=e("p",null,"The managers of the client.",-1),K=t("Return : "),Q=t("ShewenyClientManagers"),X=t("."),Y=e("h3",{id:"mode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mode","aria-hidden":"true"},"#"),t(" mode")],-1),Z=e("p",null,"The mode for run application (development or production).",-1),$=t("Return : "),ee={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"},te=t("String"),ne=e("h3",{id:"util",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#util","aria-hidden":"true"},"#"),t(" util")],-1),oe=e("p",null,"Useful functions for your bot.",-1),ae=t("Return : "),se=t("ClientUtil"),re=t("."),ie=e("h2",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),ce=e("h3",{id:"awaitready",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#awaitready","aria-hidden":"true"},"#"),t(" awaitReady")],-1),le=e("p",null,"Wait for the client to be ready.",-1),de=t("Return "),he={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"},_e=t("Promise"),ue=t("<true>"),pe=e("h2",{id:"events",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#events","aria-hidden":"true"},"#"),t(" Events")],-1),me=e("h3",{id:"interactionbuttoncreate",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#interactionbuttoncreate","aria-hidden":"true"},"#"),t(" interactionButtonCreate")],-1),fe=e("p",null,"Emitted when an interaction button is created.",-1),be=e("p",null,"Parameters :",-1),ge=t("interaction (type : "),Ce={href:"https://discord.js.org/#/docs/main/stable/class/ButtonInteraction",target:"_blank",rel:"noopener noreferrer"},ye=t("ButtonInteraction"),xe=t(")"),ve=e("h3",{id:"interactioncommmandcreate",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#interactioncommmandcreate","aria-hidden":"true"},"#"),t(" interactionCommmandCreate")],-1),we=e("p",null,"Emitted when an Slash Command or Context Menu is created.",-1),Se=e("p",null,"Parameters :",-1),ke=t("interaction (type : "),je={href:"https://discord.js.org/#/docs/main/stable/class/CommandInteraction",target:"_blank",rel:"noopener noreferrer"},Me=t("CommandInteraction"),Ie=t(" or "),Re={href:"https://discord.js.org/#/docs/main/stable/class/ContextMenuInteraction",target:"_blank",rel:"noopener noreferrer"},Oe=t("ContextMenuInteraction"),Be=t("))"),Pe=e("h3",{id:"interactioncontextmenucreate",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#interactioncontextmenucreate","aria-hidden":"true"},"#"),t(" interactionContextMenuCreate")],-1),Te=e("p",null,"Emitted when an interaction Context Menu is created.",-1),Ee=e("p",null,"Parameters :",-1),We=t("interaction (type : "),ze={href:"https://discord.js.org/#/docs/main/stable/class/ContextMenuInteraction",target:"_blank",rel:"noopener noreferrer"},Ge=t("ContextMenuInteraction"),Je=t(")"),Ne=e("h3",{id:"interactionmessagecomponentcreate",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#interactionmessagecomponentcreate","aria-hidden":"true"},"#"),t(" interactionMessageComponentCreate")],-1),Ue=e("p",null,"Emitted when an Message Component interaction is created.",-1),Ae=e("p",null,"Parameters :",-1),Le=t("interaction (type : "),Ve={href:"https://discord.js.org/#/docs/main/stable/class/MessageComponentInteraction",target:"_blank",rel:"noopener noreferrer"},De=t("MessageComponentInteraction"),Fe=t(")"),qe=e("h3",{id:"interactionselectmenucreate",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#interactionselectmenucreate","aria-hidden":"true"},"#"),t(" interactionSelectMenuCreate")],-1),He=e("p",null,"Emitted when an Select Menu interaction is created.",-1),Ke=e("p",null,"Parameters :",-1),Qe=t("interaction (type : "),Xe={href:"https://discord.js.org/#/docs/main/stable/class/SelectMenuInteraction",target:"_blank",rel:"noopener noreferrer"},Ye=t("SelectMenuInteraction"),Ze=t(")");function $e(et,tt){const a=r("RouterLink"),o=r("ExternalLinkIcon");return l(),d(h,null,[u,e("table",null,[p,e("tbody",null,[e("tr",null,[m,e("td",null,[n(a,{to:"/doc/typedef/ShewenyClientOptions.html"},{default:s(()=>[f]),_:1})]),b,g]),e("tr",null,[C,e("td",null,[e("a",y,[x,n(o)])]),v,w])])]),S,e("p",null,[k,e("a",j,[M,n(o)]),I,e("a",R,[O,n(o)]),B]),P,T,e("p",null,[E,n(a,{to:"/doc/typedef/ShewenyClientCollections.html"},{default:s(()=>[W]),_:1})]),z,G,e("p",null,[J,e("a",N,[U,n(o)])]),A,L,e("p",null,[V,e("a",D,[F,n(o)])]),q,H,e("p",null,[K,n(a,{to:"/doc/typedef/ShewenyClientManagers.html"},{default:s(()=>[Q]),_:1}),X]),Y,Z,e("p",null,[$,e("a",ee,[te,n(o)])]),ne,oe,e("p",null,[ae,n(a,{to:"/doc/client/ClientUtil.html"},{default:s(()=>[se]),_:1}),re]),ie,ce,le,e("p",null,[de,e("a",he,[_e,n(o)]),ue]),pe,me,fe,be,e("ul",null,[e("li",null,[ge,e("a",Ce,[ye,n(o)]),xe])]),ve,we,Se,e("ul",null,[e("li",null,[ke,e("a",je,[Me,n(o)]),Ie,e("a",Re,[Oe,n(o)]),Be])]),Pe,Te,Ee,e("ul",null,[e("li",null,[We,e("a",ze,[Ge,n(o)]),Je])]),Ne,Ue,Ae,e("ul",null,[e("li",null,[Le,e("a",Ve,[De,n(o)]),Fe])]),qe,He,Ke,e("ul",null,[e("li",null,[Qe,e("a",Xe,[Ye,n(o)]),Ze])])],64)}var ot=c(_,[["render",$e],["__file","ShewenyClient.html.vue"]]);export{ot as default};
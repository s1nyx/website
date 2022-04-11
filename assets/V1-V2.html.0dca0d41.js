import{_ as e,r as t,o,c as p,a as n,b as c,F as r,e as s,d as l}from"./app.dc891b50.js";const i={},u=n("h1",{id:"updating-from-v1-to-v2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#updating-from-v1-to-v2","aria-hidden":"true"},"#"),s(" Updating from V1 to V2")],-1),d=s("Full changelog is avaiable on "),h={href:"https://github.com/Sheweny/framework/master/dev/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},m=s("Github"),k=l(`<h2 id="sheweny-client" tabindex="-1"><a class="header-anchor" href="#sheweny-client" aria-hidden="true">#</a> Sheweny Client</h2><p>In this new version you will find new options:</p><ul><li><code>joinThreadsOnCreate</code> : This option makes the bot join threads when they are created.</li><li><code>mode</code> : This option allows to run the bot in production or development mode</li></ul><p>The way to access the collections has to change. Instead of <code>client.commands</code>, <code>client.events</code>, <code>client.buttons</code> etc you should do <code>client.collections.commands</code>, <code>client.collections.events</code>, <code>client.collections.buttons</code> etc</p><h2 id="handlers" tabindex="-1"><a class="header-anchor" href="#handlers" aria-hidden="true">#</a> Handlers</h2><h3 id="commands-handler" tabindex="-1"><a class="header-anchor" href="#commands-handler" aria-hidden="true">#</a> Commands handler</h3><p>in version 2 the message commands and interaction commands are loaded at the same time. You no longer need the <code>ApplicationCommandsHandler</code> and <code>MessagesCommandsHandler</code> handlers but only <code>CommandsManager</code>.</p><p>Version 2 also supports slash-command permissions. You can use the <code>registerPermissions</code> function of the CommandsManager class or place the <code>applicationPermissions: true</code> option in the constructor.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Actualy the permissions are only available for guilds. You can put an array of guilds ids in the function but discord no support the permissions for global commands.</p></div><p>Setup in client :</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> ShewenyClient <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;sheweny&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ShewenyClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">intents</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;GUILDS&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">managers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">commands</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">directory</span><span class="token operator">:</span> <span class="token string">&quot;./commands&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">guildId</span><span class="token operator">:</span> <span class="token string">&quot;877090306103840778&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Register commands and context-menus in this guild</span>
      <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">&quot;!&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">applicationPermissions</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>Setup with class :</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> ShewenyClient<span class="token punctuation">,</span> CommandsManager <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;sheweny&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ShewenyClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">intents</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;GUILDS&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> commandsHandler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CommandsManager</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> <span class="token string">&quot;./commands&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">&quot;!&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

commandsHandler<span class="token punctuation">.</span><span class="token function">loadAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  commandsHandler<span class="token punctuation">.</span><span class="token function">registerAllApplicationCommands</span><span class="token punctuation">(</span>
    client<span class="token punctuation">.</span>collections<span class="token punctuation">.</span>commands<span class="token punctuation">,</span>
    <span class="token string">&quot;877090306103840778&quot;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="inhibitors-handler" tabindex="-1"><a class="header-anchor" href="#inhibitors-handler" aria-hidden="true">#</a> Inhibitors handler</h3><p>The <code>InhibitorsHandler</code> class has been renamed to <code>InhibitorsManager</code>.</p><h3 id="events-handler" tabindex="-1"><a class="header-anchor" href="#events-handler" aria-hidden="true">#</a> Events handler</h3><p>The <code>EventsHandler</code> class has been renamed to <code>EventsManager</code>.</p><h3 id="buttons-handler" tabindex="-1"><a class="header-anchor" href="#buttons-handler" aria-hidden="true">#</a> Buttons handler</h3><p>The <code>ButtonsHandler</code> class has been renamed to <code>ButtonsManager</code>.</p><h3 id="selectmenus-handler" tabindex="-1"><a class="header-anchor" href="#selectmenus-handler" aria-hidden="true">#</a> SelectMenus handler</h3><p>The <code>SelectMenusHandler</code> class has been renamed to <code>SelectMenusManager</code>.</p><h2 id="structures" tabindex="-1"><a class="header-anchor" href="#structures" aria-hidden="true">#</a> Structures</h2><h3 id="commands" tabindex="-1"><a class="header-anchor" href="#commands" aria-hidden="true">#</a> Commands</h3><p>In version 2 you no longer need 2 types of structures for your orders. <code>ApplicationCommand</code> and <code>MessageCommand</code> merge to give <code>Command</code></p><p>Version 2 also supports arguments for message commands thanks to a new property: <code>args</code>. The <code>options</code> property for slash-commands is kept.</p><p>It is now necessary to specify the type of command each time in the commands. The available types are : <code>MESSAGE_COMMANDS</code> or <code>SLASH_COMMAND</code> or <code>CONTEXT_MENU_USER</code> or <code>CONTEXT_MENU_MESSAGE</code>.</p>`,26);function b(g,y){const a=t("ExternalLinkIcon");return o(),p(r,null,[u,n("p",null,[n("strong",null,[d,n("a",h,[m,c(a)])])]),k],64)}var v=e(i,[["render",b],["__file","V1-V2.html.vue"]]);export{v as default};

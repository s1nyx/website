import{_ as e,d as n}from"./app.dc891b50.js";const a={},s=n(`<h1 id="project-structure" tabindex="-1"><a class="header-anchor" href="#project-structure" aria-hidden="true">#</a> Project structure</h1><p>Create a directory in which the bot will be.</p><p>Install dependencies and create configuration file (usually called <code>config.json</code>)</p><p>Create a folder with the code of the bot (usualy called <code>src</code>)</p><p>In source directory create <code>index.js</code> file in which will be the client&#39;s declaration.</p><h2 id="commands" tabindex="-1"><a class="header-anchor" href="#commands" aria-hidden="true">#</a> Commands</h2><p>Create directory for the commands (usually called <code>commands</code>).</p><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><p>Create directory for the events (usually called <code>events</code> or <code>listners</code>).</p><h2 id="interactions" tabindex="-1"><a class="header-anchor" href="#interactions" aria-hidden="true">#</a> Interactions</h2><p>Create directory for the buttons and select-menus (usually called <code>interactions</code>).</p><h3 id="buttons" tabindex="-1"><a class="header-anchor" href="#buttons" aria-hidden="true">#</a> Buttons</h3><p>Create directory for the buttons (usually called <code>buttons</code>).</p><h3 id="select-menus" tabindex="-1"><a class="header-anchor" href="#select-menus" aria-hidden="true">#</a> Select-menus</h3><p>Create directory for the select-menus (usually called <code>select-menus</code>).</p><hr><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Folders can contain as many sub-folders as desired</p></div><h2 id="final-structure" tabindex="-1"><a class="header-anchor" href="#final-structure" aria-hidden="true">#</a> Final structure</h2><p>The final structure of the bot :</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bot
   \u2502   config.json
   \u2502   package-lock.json
   \u2502   package.json
   \u2502
   \u251C\u2500\u2500\u2500node_modules
   \u2514\u2500\u2500\u2500src
       \u2502   index.js
       \u2502
       \u251C\u2500\u2500\u2500commands
       \u251C\u2500\u2500\u2500events
       \u2514\u2500\u2500\u2500interactions
           \u251C\u2500\u2500\u2500buttons
           \u2514\u2500\u2500\u2500select-menus
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,20);function r(t,c){return s}var i=e(a,[["render",r],["__file","ProjectStructure.html.vue"]]);export{i as default};

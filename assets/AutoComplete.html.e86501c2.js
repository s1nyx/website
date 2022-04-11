import{_ as c,r as o,o as l,c as u,b as a,w as t,F as r,a as n,e as s}from"./app.dc891b50.js";const i={},k=n("h1",{id:"auto-complete-commands",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#auto-complete-commands","aria-hidden":"true"},"#"),s(" Auto-complete commands")],-1),b=n("p",null,"The auto-complete commands are used to provide auto-complete suggestions for the arguments in application commands.",-1),m=n("div",{class:"custom-container warning"},[n("p",{class:"custom-container-title"},"WARNING"),n("p",null,"For use auto-complete you must have discord.js V13.3.0 or higher and sheweny V3.0.0 or higher.")],-1),d=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" Command "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"sheweny"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"PingCommand"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"Command"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"client"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"("),s("client"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"ping"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"SLASH_COMMAND"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Ping the bot"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"category"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Misc"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"options"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"name"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"description"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"STRING"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"autocomplete"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"theme"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"description"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"STRING"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"autocomplete"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token function"},"execute"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"interaction"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    interaction`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Pong !"'),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"onAutocomplete"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"interaction"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" focusedOption "),n("span",{class:"token operator"},"="),s(" interaction"),n("span",{class:"token punctuation"},"."),s("options"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getFocused"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"let"),s(" choices"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("focusedOption"),n("span",{class:"token punctuation"},"."),s("name "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},'"name"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      choices `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"faq"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"install"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"collection"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"promise"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"debug"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("focusedOption"),n("span",{class:"token punctuation"},"."),s("name "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},'"theme"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      choices `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"halloween"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"christmas"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"summer"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" filtered "),n("span",{class:"token operator"},"="),s(" choices"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"choice"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(`
      choice`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"startsWith"),n("span",{class:"token punctuation"},"("),s("focusedOption"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    interaction`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"respond"),n("span",{class:"token punctuation"},"("),s("filtered"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"choice"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(" choice"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(" choice "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br")])],-1),y=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Command "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"sheweny"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" ShewenyClient "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"sheweny"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" CommandInteraction "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"discord.js"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"PingCommand"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"Command"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),s("client"),n("span",{class:"token operator"},":"),s(" ShewenyClient"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"("),s("client"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
      name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"ping"'),n("span",{class:"token punctuation"},","),s(`
      description`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Ping the bot"'),n("span",{class:"token punctuation"},","),s(`
      type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"SLASH_COMMAND"'),n("span",{class:"token punctuation"},","),s(`
      category`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Misc"'),n("span",{class:"token punctuation"},","),s(`
      options`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"name"'),n("span",{class:"token punctuation"},","),s(`
          description`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"description"'),n("span",{class:"token punctuation"},","),s(`
          type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"STRING"'),n("span",{class:"token punctuation"},","),s(`
          autocomplete`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"theme"'),n("span",{class:"token punctuation"},","),s(`
          description`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"description"'),n("span",{class:"token punctuation"},","),s(`
          type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"STRING"'),n("span",{class:"token punctuation"},","),s(`
          autocomplete`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token function"},"execute"),n("span",{class:"token punctuation"},"("),s("interaction"),n("span",{class:"token operator"},":"),s(" CommandInteraction"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    interaction`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" content"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Pong !"'),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token function"},"onAutocomplete"),n("span",{class:"token punctuation"},"("),s("interaction"),n("span",{class:"token operator"},":"),s(" AutocompleteInteraction"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" focusedOption "),n("span",{class:"token operator"},"="),s(" interaction"),n("span",{class:"token punctuation"},"."),s("options"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getFocused"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"let"),s(" choices"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("focusedOption"),n("span",{class:"token punctuation"},"."),s("name "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},'"name"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      choices `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"faq"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"install"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"collection"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"promise"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"debug"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("focusedOption"),n("span",{class:"token punctuation"},"."),s("name "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},'"theme"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      choices `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"halloween"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"christmas"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"summer"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" filtered "),n("span",{class:"token operator"},"="),s(" choices"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("choice"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(`
      choice`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"startsWith"),n("span",{class:"token punctuation"},"("),s("focusedOption"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    interaction`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"respond"),n("span",{class:"token punctuation"},"("),s("filtered"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("choice"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" name"),n("span",{class:"token operator"},":"),s(" choice"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token operator"},":"),s(" choice "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br")])],-1);function g(h,f){const e=o("CodeGroupItem"),p=o("CodeGroup");return l(),u(r,null,[k,b,m,a(p,null,{default:t(()=>[a(e,{title:"JS CommonJS"},{default:t(()=>[d]),_:1}),a(e,{title:"TS ES Modules"},{default:t(()=>[y]),_:1})]),_:1})],64)}var _=c(i,[["render",g],["__file","AutoComplete.html.vue"]]);export{_ as default};
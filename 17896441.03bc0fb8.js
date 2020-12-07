(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{75:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(24),i=t(22),c=t(81),m=t(80);var o=function(e){var a=e.metadata;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},a.previous&&l.a.createElement(m.a,{className:"pagination-nav__link",to:a.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",a.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a.next&&l.a.createElement(m.a,{className:"pagination-nav__link",to:a.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),l.a.createElement("div",{className:"pagination-nav__label"},a.next.title," \xbb"))))},s=t(79),d=t(77);var u=function(){var e=Object(i.default)().siteConfig.title,a=Object(s.useActivePlugin)({failfast:!0}).pluginId,t=Object(d.useDocsPreferredVersion)(a).savePreferredVersionName,n=Object(s.useActiveVersion)(a),r=Object(s.useDocVersionSuggestions)(a),c=r.latestDocSuggestion,o=r.latestVersionSuggestion;if(!o)return l.a.createElement(l.a.Fragment,null);var u,g=null!=c?c:(u=o).docs.find((function(e){return e.id===u.mainDocId}));return l.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"current"===n.name?l.a.createElement("div",null,"This is unreleased documentation for ",e," ",l.a.createElement("strong",null,n.label)," version."):l.a.createElement("div",null,"This is documentation for ",e," ",l.a.createElement("strong",null,n.label),", which is no longer actively maintained."),l.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",l.a.createElement("strong",null,l.a.createElement(m.a,{to:g.path,onClick:function(){return t(o.name)}},"latest version"))," ","(",o.label,")."))},g=t(98),E=t(78),v=t(62),p=t.n(v);a.default=function(e){var a,t=Object(i.default)().siteConfig,n=t.url,m=t.title,d=t.titleDelimiter,v=e.content,b=v.metadata,f=b.description,h=b.title,N=b.permalink,_=b.editUrl,w=b.lastUpdatedAt,k=b.lastUpdatedBy,j=v.frontMatter,y=j.image,O=j.keywords,x=j.hide_title,A=j.hide_table_of_contents,D=Object(s.useActivePlugin)({failfast:!0}).pluginId,V=Object(s.useVersions)(D),I=Object(s.useActiveVersion)(D),C=V.length>1,S=h?h+" "+d+" "+m:m,T=Object(c.a)(y,{absolute:!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,S),l.a.createElement("meta",{property:"og:title",content:S}),f&&l.a.createElement("meta",{name:"description",content:f}),f&&l.a.createElement("meta",{property:"og:description",content:f}),O&&O.length&&l.a.createElement("meta",{name:"keywords",content:O.join(",")}),y&&l.a.createElement("meta",{property:"og:image",content:T}),y&&l.a.createElement("meta",{property:"twitter:image",content:T}),y&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+h}),N&&l.a.createElement("meta",{property:"og:url",content:n+N}),N&&l.a.createElement("link",{rel:"canonical",href:n+N})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(E.a)("col",(a={},a[p.a.docItemCol]=!A,a))},l.a.createElement(u,null),l.a.createElement("div",{className:p.a.docItemContainer},l.a.createElement("article",null,C&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",I.label)),!x&&l.a.createElement("header",null,l.a.createElement("h1",{className:p.a.docTitle},h)),l.a.createElement("div",{className:"markdown"},l.a.createElement(v,null))),(_||w||k)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},_&&l.a.createElement("a",{href:_,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(w||k)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",w&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*w).toISOString(),className:p.a.docLastUpdatedAt},new Date(1e3*w).toLocaleDateString()),k&&" "),k&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,k)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(o,{metadata:b})))),!A&&v.rightToc&&l.a.createElement("div",{className:"col col--3"},l.a.createElement(g.a,{headings:v.rightToc}))))}}}]);
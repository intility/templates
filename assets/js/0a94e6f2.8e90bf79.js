"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4295],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},387:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={title:"Included Dependencies",sidebar_position:3},c=void 0,u={unversionedId:"getting-started/included-dependencies",id:"getting-started/included-dependencies",title:"Included Dependencies",description:"The template includes some dependencies which are found to be common needs of most FastAPI apps by Intility.",source:"@site/fastapi/getting-started/included-dependencies.mdx",sourceDirName:"getting-started",slug:"/getting-started/included-dependencies",permalink:"/fastapi/getting-started/included-dependencies",draft:!1,editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/fastapi/getting-started/included-dependencies.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Included Dependencies",sidebar_position:3},sidebar:"python",previous:{title:"Project Overview",permalink:"/fastapi/getting-started/project-overview"},next:{title:"Azure configuration",permalink:"/fastapi/setup/authorization"}},s={},p=[{value:"fastapi-azure-auth",id:"fastapi-azure-auth",level:2},{value:"sentry-sdk",id:"sentry-sdk",level:2},{value:"pre-commit",id:"pre-commit",level:2},{value:"flake8",id:"flake8",level:2},{value:"black",id:"black",level:2}],d={toc:p},f="wrapper";function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The template includes some dependencies which are found to be common needs of most FastAPI apps by Intility."),(0,a.kt)("h2",{id:"fastapi-azure-auth"},"fastapi-azure-auth"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://intility.github.io/fastapi-azure-auth/"},"Docs"))),(0,a.kt)("p",null,"Included for projects that select ",(0,a.kt)("inlineCode",{parentName:"p"},"FastAPI Azure Auth (default)")," as their authentication strategy.\nThis project is written and maintained by Intility."),(0,a.kt)("h2",{id:"sentry-sdk"},"sentry-sdk"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.sentry.io/platforms/python/guides/asgi/"},"Docs"))),(0,a.kt)("p",null,"Used for error reporting to Sentry."),(0,a.kt)("h2",{id:"pre-commit"},"pre-commit"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pre-commit.com/"},"Docs"))),(0,a.kt)("p",null,"Pre-commit is a code-checker that will run every time you attempt to commit any changes.\nIt runs different programs, such as .flake8, black etc.,\nall of which can be configured individually through either config files or the ",(0,a.kt)("inlineCode",{parentName:"p"},"pyproject.toml"),"."),(0,a.kt)("admonition",{title:"pre-commit",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"When pre-commit changes something,\nyou must add the modified file before you rerun pre-commit. It only runs on files staged for commit.")),(0,a.kt)("h2",{id:"flake8"},"flake8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://flake8.pycqa.org/en/latest/"},"Docs"))),(0,a.kt)("p",null,"Static code analysis which looks for different things, such as leftover print statements etc."),(0,a.kt)("h2",{id:"black"},"black"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://black.readthedocs.io/en/stable/"},"Docs"))),(0,a.kt)("p",null,"Formats your code. Configuration is limited but can be found in ",(0,a.kt)("inlineCode",{parentName:"p"},"pyproject.toml"),"."))}m.isMDXComponent=!0}}]);
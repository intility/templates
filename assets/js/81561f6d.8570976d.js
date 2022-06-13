"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9791],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7824:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=["components"],l={title:"Installation",sidebar_position:1},p=void 0,s={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"Prerequisites",source:"@site/fastapi/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/fastapi/getting-started/installation",draft:!1,editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/fastapi/getting-started/installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Installation",sidebar_position:1},sidebar:"python",previous:{title:"Introduction",permalink:"/fastapi/"},next:{title:"Project Overview",permalink:"/fastapi/getting-started/project-overview"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Intility <code>Cruft</code>",id:"intility-cruft",level:3},{value:"Create FastAPI App",id:"create-fastapi-app",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Some experience with Python"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://python.org/"},"Python3.9+")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://python-poetry.org/docs/#installation"},"Poetry")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")," and ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"Docker Compose")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git-scm.com/download/"},"Git"))),(0,r.kt)("h3",{id:"intility-cruft"},"Intility ",(0,r.kt)("inlineCode",{parentName:"h3"},"Cruft")),(0,r.kt)("p",null,"You'll need ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cruft/cruft"},"cruft")," in order to use this template."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python -m pip install cruft\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"cruft")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"cruft is a templating language built on top of cookiecutter, which uses jinja templates."))),(0,r.kt)("h2",{id:"create-fastapi-app"},"Create FastAPI App"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"cruft")," to start your project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'python -m cruft create https://github.com/Intility/templates.git --directory="fastapi"\n')),(0,r.kt)("p",null,"A few questions you will be prompted, here with a more verbose description:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"full_name"),": Required for ",(0,r.kt)("inlineCode",{parentName:"li"},"pyproject.toml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"email"),": Required for ",(0,r.kt)("inlineCode",{parentName:"li"},"pyproject.toml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"project_name"),": The folder name, and required for ",(0,r.kt)("inlineCode",{parentName:"li"},"pyproject.toml"),". Keep it short and simple!"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"description"),": Required for ",(0,r.kt)("inlineCode",{parentName:"li"},"pyproject.toml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sqlmodel"),": An ORM for ",(0,r.kt)("inlineCode",{parentName:"li"},"FastAPI"),". Select ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," if you need a database. This will create example APIs,\ninstall ",(0,r.kt)("inlineCode",{parentName:"li"},"alembic")," for migrations, add ",(0,r.kt)("inlineCode",{parentName:"li"},"postgres")," to the ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose")," file etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"authentication_strategy"),": Every API ",(0,r.kt)("em",{parentName:"li"},"must")," have authentication through Azure AD, but which strategy you chose is\nup to you. The options are:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FastAPI Azure Auth (default)"),": Authentication and authorization is done in your FastAPI\napplication. This is the default and recommended authentication strategy, which this tutorial will assume you chose.\nUnder the hood, this uses ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Intility/fastapi-azure-auth"},(0,r.kt)("inlineCode",{parentName:"a"},"fastapi-azure-auth")),",\na library written and maintained by Intility."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Kong (no auth included)"),": The alternative is to use Kong. This removes all authentication\nfrom your FastAPI application, and assume you host your application behind Kong. This tutorial will not cover this\nstrategy."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"include_example_apis"),": Chose whether you want example APIs and tests to be included in the generated files.\nIf this is the first time using this template, ",(0,r.kt)("strong",{parentName:"li"},"select ",(0,r.kt)("inlineCode",{parentName:"strong"},"true")),".")),(0,r.kt)("p",null,"You'll now have a new folder, matching your ",(0,r.kt)("inlineCode",{parentName:"p"},"project_name"),"."))}d.isMDXComponent=!0}}]);
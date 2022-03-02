"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6286],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,d=f["".concat(a,".").concat(m)]||f[m]||l[m]||i;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var p=2;p<i;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4510:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return p},assets:function(){return u},toc:function(){return l},default:function(){return m}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),c=["components"],s={title:"NPM Scripts",sidebar_label:"NPM Scripts",slug:"/NpmScripts",sidebar_position:3},a=void 0,p={unversionedId:"npmScripts",id:"npmScripts",title:"NPM Scripts",description:"",source:"@site/express/npmScripts.mdx",sourceDirName:".",slug:"/NpmScripts",permalink:"/express/NpmScripts",editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/express/npmScripts.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"NPM Scripts",sidebar_label:"NPM Scripts",slug:"/NpmScripts",sidebar_position:3},sidebar:"express",previous:{title:"Getting Started",permalink:"/express/GettingStarted"},next:{title:"Project Structure",permalink:"/express/ProjectStructure"}},u={},l=[],f={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "scripts": {\n        //  Clean up folders generated by `compile` command\n        "clean": "rimraf build",\n        // Compile the TypeScript code into JavaScript code that can be run by Node.JS.\n        "tsc:compile": "tsc",\n        // Coly static files folder into build folder\n        "copy:static": "cp -r src/static/ build/src/",\n        // Compile and copy static files\n        "compile": "run-s tsc:compile copy:static",\n        // Run ESLint code quality check\n        "lint": "eslint src/**/*.ts",\n        // Fix issues reported by ESLint\n        "lint:fix": "eslint src/**/*.ts --fix",\n        // Start the development server by using nodemon for hot reloading\n        "start": "nodemon",\n        // Run tests\n        "test": "jest",\n        // Run tests and watch for changes\n        "test:watch": "jest --watch",\n        // Run tests and emit code coverage reports\n        "test:cov": "jest --coverage"\n    },\n}\n  \n')))}m.isMDXComponent=!0}}]);
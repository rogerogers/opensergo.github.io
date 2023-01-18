"use strict";(self.webpackChunkopensergo_github_io=self.webpackChunkopensergo_github_io||[]).push([[6678],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return b}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(t),b=a,g=d["".concat(p,".").concat(b)]||d[b]||l[b]||o;return t?r.createElement(g,i(i({ref:n},s),{},{components:t})):r.createElement(g,i({ref:n},s))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5359:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={sidebar_position:5},p="Use OpenSergo with Spring Cloud Alibaba",u={unversionedId:"quick-start/java/quick-start-spring-cloud-alibaba",id:"quick-start/java/quick-start-spring-cloud-alibaba",title:"Use OpenSergo with Spring Cloud Alibaba",description:"Spring Cloud Alibaba provides module spring-cloud-starter-opensergo-adapter for integration with OpenSergo traffic routing and fault-tolerance spec.",source:"@site/docs/quick-start/java/quick-start-spring-cloud-alibaba.md",sourceDirName:"quick-start/java",slug:"/quick-start/java/quick-start-spring-cloud-alibaba",permalink:"/docs/quick-start/java/quick-start-spring-cloud-alibaba",editUrl:"https://github.com/opensergo/opensergo.github.io/tree/main/docs/quick-start/java/quick-start-spring-cloud-alibaba.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Use OpenSergo with Sentinel",permalink:"/docs/quick-start/java/quick-start-sentinel"},next:{title:"Use OpenSergo with Apache Dubbo",permalink:"/docs/quick-start/java/quick-start-dubbo"}},s={},l=[],d={toc:l};function b(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-opensergo-with-spring-cloud-alibaba"},"Use OpenSergo with Spring Cloud Alibaba"),(0,o.kt)("p",null,"Spring Cloud Alibaba provides module ",(0,o.kt)("inlineCode",{parentName:"p"},"spring-cloud-starter-opensergo-adapter")," for integration with OpenSergo traffic routing and fault-tolerance spec."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>com.alibaba.cloud</groupId>\n            <artifactId>spring-cloud-alibaba-dependencies</artifactId>\n            <version>2.2.10-RC1</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n\n<dependencies>\n    <dependency>\n        <groupId>com.alibaba.cloud</groupId>\n        <artifactId>spring-cloud-starter-alibaba-governance-routing</artifactId>\n    </dependency>\n    <dependency>\n        <groupId>com.alibaba.cloud</groupId>\n        <artifactId>spring-cloud-starter-opensergo-adapter</artifactId>\n    </dependency>\n</dependencies>\n")))}b.isMDXComponent=!0}}]);
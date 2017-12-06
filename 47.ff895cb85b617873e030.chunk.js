webpackJsonp([47],{fSfT:function(n,o){n.exports="\u5feb\u901f\u4e0a\u624b\n===\nNG ZORRO \u81f4\u529b\u4e8e\u63d0\u4f9b\u7ed9 Angular \u5f00\u53d1\u8005**\u6109\u60a6**\u7684\u5f00\u53d1\u4f53\u9a8c\u3002\n\n---\n> \u5b98\u65b9\u6307\u5357\u5047\u8bbe\u4f60\u5df2\u7ecf\u62e5\u6709\u5df2\u6709 HTML\u3001CSS \u548c JavaScript \u4e2d\u7ea7\u524d\u7aef\u77e5\u8bc6\u5e76\u4e14\u5bf9 Angular \u6846\u67b6\u8db3\u591f\u4e86\u89e3\u3002\u5982\u679c\u4f60\u521a\u5f00\u59cb\u5b66\u4e60\u524d\u7aef\u6216\u8005 Angular\uff0c\u5c06\u7ec4\u4ef6\u4f5c\u4e3a\u7b2c\u4e00\u6b65\u53ef\u80fd\u5e76\u4e0d\u662f\u4e00\u4e2a\u597d\u4e3b\u610f\uff0c\u63a8\u8350\u5148\u5b66\u4e60 <a href=\"http://www.angular.cn\" target=\"_blank\"> Angular </a> \u548c <a href=\"https://www.typescriptlang.org/\" target=\"_blank\"> TypeScript</a>\u3002\n\n\n## \u6807\u51c6\u5f00\u53d1\n\n\u5b9e\u9645\u9879\u76ee\u5f00\u53d1\u4e2d\uff0c\u4f60\u4f1a\u9700\u8981\u5bf9 TypeScript \u4ee3\u7801\u7684\u6784\u5efa\u3001\u8c03\u8bd5\u3001\u4ee3\u7406\u3001\u6253\u5305\u90e8\u7f72\u7b49\u4e00\u7cfb\u5217\u5de5\u7a0b\u5316\u7684\u9700\u6c42\u3002\n\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u4f7f\u7528\u5b98\u65b9\u7684`@angular/cli`\u5de5\u5177\u94fe\u8f85\u52a9\u8fdb\u884c\u5f00\u53d1\uff0c\u4e0b\u9762\u6211\u4eec\u7528\u4e00\u4e2a\u7b80\u5355\u7684\u5b9e\u4f8b\u6765\u8bf4\u660e\u3002\n\n### 1. \u5b89\u88c5\u811a\u624b\u67b6\u5de5\u5177\n\n> \u4f7f\u7528 `@angular/cli` \u524d\uff0c\u52a1\u5fc5\u786e\u8ba4 [Node.js](https://nodejs.org/en/) \u5df2\u7ecf\u5347\u7ea7\u5230 v6.9 \u6216\u4ee5\u4e0a\uff0c\u5f3a\u70c8\u5efa\u8bae\u5347\u7ea7\u81f3\u6700\u65b0\u7248\u672c\u7684 `@angular/cli`\u3002\n\n```bash\n$ npm install -g @angular/cli@latest\n```\n\n\u66f4\u591a\u529f\u80fd\u8bf7\u53c2\u8003 [\u811a\u624b\u67b6\u5de5\u5177](https://github.com/angular/angular-cli) \u548c [CLI Wiki](https://github.com/angular/angular-cli/wiki)\u3002\n\n### 2. \u521b\u5efa\u4e00\u4e2a\u9879\u76ee\n\n\u5728\u521b\u5efa\u9879\u76ee\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd `@angular/cli` \u5df2\u88ab\u6210\u529f\u5b89\u88c5\n```bash\n$ ng new PROJECT-NAME\n```\n\n`@angular/cli` \u4f1a\u81ea\u52a8\u751f\u6210\u4e00\u4e2a\u540d\u79f0\u4e3a `PROJECT-NAME` \u7684\u6587\u4ef6\u5939\uff0c\u5e76\u81ea\u52a8\u5b89\u88c5\u597d\u76f8\u5e94\u4f9d\u8d56\n\n### 3. \u4f7f\u7528\u7ec4\u4ef6\n\n\u73b0\u5728\u9879\u76ee\u4e0b\u5b89\u88c5 ng-zorro-antd\n```bash\n$ cd PROJECT_NAME\n$ npm install ng-zorro-antd --save\n```\n\n\u76f4\u63a5\u7528\u4e0b\u9762\u7684\u4ee3\u7801\u66ff\u6362 `/src/app/app.module.ts` \u7684\u5185\u5bb9\n\n> **\u6ce8\u610f**\uff1a\u5728\u6839 module \u4e2d\u9700\u8981\u4f7f\u7528 `NgZorroAntdModule.forRoot()`\uff0c\u5728\u5b50 module \u9700\u8981\u4f7f\u7528 `NgZorroAntdModule` \n\n```typescript\nimport { BrowserModule } from '@angular/platform-browser';\nimport { BrowserAnimationsModule } from '@angular/platform-browser/animations';\nimport { NgModule } from '@angular/core';\nimport { FormsModule } from '@angular/forms';\nimport { HttpClientModule } from '@angular/common/http';\nimport { NgZorroAntdModule } from 'ng-zorro-antd';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [\n    BrowserModule,\n    FormsModule,\n    HttpClientModule,\n    BrowserAnimationsModule,\n    NgZorroAntdModule.forRoot()\n  ],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { }\n\n```\n\u8fd9\u6837\u5c31\u6210\u529f\u5728\u5168\u5c40\u5f15\u5165\u4e86 ng-zorro-antd\u3002\n\n> `NgZorroAntdModule.forRoot()` \u65b9\u6cd5\u80fd\u591f\u63a5\u53d7\u4e00\u4e2a\u53ef\u9009\u7684\u914d\u7f6e\u5bf9\u8c61\uff0c\u7528\u4e8e\u5f15\u5165\u5916\u90e8\u7684\u5b57\u4f53\u6587\u4ef6\uff0c\u7c7b\u578b\u4e3a `{ extraFontName: string, extraFontUrl: string }`\u3002\n\n\u7528\u4e0b\u9762\u7684\u4ee3\u7801\u66ff\u6362 `/src/app/app.component.html`\n\n```html\n<button nz-button [nzType]=\"'primary'\">\u6d4b\u8bd5\u6309\u94ae</button>\n```\n[\u67e5\u770b](#/components/button)\u6700\u7b80\u5355\u7684Button\u6548\u679c\n\n\n### 4. \u5f00\u53d1\u8c03\u8bd5\n\n\u4e00\u952e\u542f\u52a8\u8c03\u8bd5\n\n```bash\n$ ng serve --port 0 --open\n```\n\n\u5982\u679c\u9700\u8981\u5b9e\u65f6\u8c03\u8bd5AoT\u6548\u679c\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\n\n```bash\n$ ng serve --port 0 --open --aot\n```\n\n### 5. \u6784\u5efa\u548c\u90e8\u7f72\n\n```bash\n$ ng build --prod\n```\n\n\u5165\u53e3\u6587\u4ef6\u4f1a\u6784\u5efa\u5230 `dist` \u76ee\u5f55\u4e2d\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u90e8\u7f72\u5230\u4e0d\u540c\u73af\u5883\u4e2d\u8fdb\u884c\u5f15\u7528\u3002\n\n\n\n## \u4e86\u89e3\u66f4\u591a\n\n\u5982\u679c\u4f60\u60f3\u4e86\u89e3\u66f4\u591aCLI\u5de5\u5177\u94fe\u7684\u529f\u80fd\u548c\u547d\u4ee4\uff0c\u5efa\u8bae\u8bbf\u95ee [Angular CLI](https://github.com/angular/angular-cli) \u4e86\u89e3\u66f4\u591a\n"},qDGv:function(n,o,t){"use strict";function r(n){return l._34(0,[(n()(),l._10(0,0,null,null,1,"nz-markdown",[],null,null,null,c.b,c.a)),l._9(1,4308992,null,0,m.a,[l.l],{nzContent:[0,"nzContent"]},null),(n()(),l._32(-1,null,["\n"]))],function(n,o){n(o,1,0,o.component._markdownCode)},null)}Object.defineProperty(o,"__esModule",{value:!0});var l=t("LMZF"),a=(t("6Xbx"),function(){return function(){this._markdownCode=t("fSfT")}}()),u=t("jlvU"),e=t("1n7c"),p=t("Un6q"),i=t("UHIZ"),s=function(){},g=function(){},c=t("DQNQ"),m=t("AXbG"),d=l._8({encapsulation:2,styles:[],data:{}}),f=l._6("nz-intro-get-started",a,function(n){return l._34(0,[(n()(),l._10(0,0,null,null,1,"nz-intro-get-started",[],null,null,null,r,d)),l._9(1,49152,null,0,a,[],null,null)],null,null)},{},{},[]);t.d(o,"NzIntroGetStartedModuleNgFactory",function(){return _});var _=l._7(g,[],function(n){return l._21([l._22(512,l.k,l._2,[[8,[f]],[3,l.k],l.z]),l._22(4608,p.n,p.m,[l.w,[2,p.v]]),l._22(512,p.c,p.c,[]),l._22(512,u.a,u.a,[]),l._22(512,i.o,i.o,[[2,i.t],[2,i.l]]),l._22(512,s,s,[]),l._22(512,e.a,e.a,[]),l._22(512,g,g,[]),l._22(1024,i.j,function(){return[[{path:"",component:a}]]},[])])})}});
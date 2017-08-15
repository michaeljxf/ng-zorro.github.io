webpackJsonp([32],{"0QB0":function(l,n){l.exports="import {Component, OnInit} from '@angular/core';\nimport {NzNotificationService} from '../../../index.showcase';\n\n@Component({\n  selector  : 'nz-demo-notification-duration',\n  template  : `\n    <button nz-button [nzType]=\"'primary'\" (click)=\"createBasicNotification()\">\u6253\u5f00\u901a\u77e5\u63d0\u793a\u6846</button>\n`,\n  styles    : []\n})\nexport class NzDemoNotificationDurationComponent implements OnInit {\n  createBasicNotification = () => {\n    this._notification.blank('\u8fd9\u662f\u6807\u9898', '\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed', {nzDuration: 0});\n  };\n  constructor(private _notification: NzNotificationService) {\n  }\n\n  ngOnInit() {\n  }\n}\n\n"},"6nys":function(l,n,u){"use strict";function t(l){return b._47(0,[(l()(),b._45(null,["\n    "])),(l()(),b._23(0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0,i=l.component;if("click"===n){t=!1!==b._37(l,2)._onClick()&&t}if("click"===n){t=!1!==i.createBasicNotification()&&t}return t},N.b,N.a)),b._21(1097728,null,0,g.a,[b.r,b.R],{nzType:[0,"nzType"]},null),(l()(),b._45(0,["\u6253\u5f00\u901a\u77e5\u63d0\u793a\u6846"])),(l()(),b._45(null,["\n  "]))],function(l,n){l(n,2,0,"primary")},null)}function i(l){return b._47(0,[(l()(),b._23(0,null,null,1,"nz-demo-notification-basic",[],null,null,null,t,v)),b._21(114688,null,0,z,[h.a],null,null)],function(l,n){l(n,1,0)},null)}function o(l){return I._47(0,[(l()(),I._45(null,["\n    "])),(l()(),I._23(0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0,i=l.component;if("click"===n){t=!1!==I._37(l,2)._onClick()&&t}if("click"===n){t=!1!==i.createNotification("success")&&t}return t},O.b,O.a)),I._21(1097728,null,0,x.a,[I.r,I.R],null,null),(l()(),I._45(0,["\u6210 \u529f"])),(l()(),I._45(null,["\n    "])),(l()(),I._23(0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0,i=l.component;if("click"===n){t=!1!==I._37(l,6)._onClick()&&t}if("click"===n){t=!1!==i.createNotification("info")&&t}return t},O.b,O.a)),I._21(1097728,null,0,x.a,[I.r,I.R],null,null),(l()(),I._45(0,["\u6d88 \u606f"])),(l()(),I._45(null,["\n    "])),(l()(),I._23(0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0,i=l.component;if("click"===n){t=!1!==I._37(l,10)._onClick()&&t}if("click"===n){t=!1!==i.createNotification("warning")&&t}return t},O.b,O.a)),I._21(1097728,null,0,x.a,[I.r,I.R],null,null),(l()(),I._45(0,["\u8b66 \u544a"])),(l()(),I._45(null,["\n    "])),(l()(),I._23(0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0,i=l.component;if("click"===n){t=!1!==I._37(l,14)._onClick()&&t}if("click"===n){t=!1!==i.createNotification("error")&&t}return t},O.b,O.a)),I._21(1097728,null,0,x.a,[I.r,I.R],null,null),(l()(),I._45(0,["\u9519 \u8bef"])),(l()(),I._45(null,["\n"]))],null,null)}function _(l){return I._47(0,[(l()(),I._23(0,null,null,1,"nz-demo-notification-icon",[],null,null,null,o,S)),I._21(114688,null,0,C,[T.a],null,null)],function(l,n){l(n,1,0)},null)}function a(l){return A._47(0,[(l()(),A._45(null,["\n    "])),(l()(),A._23(0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0,i=l.component;if("click"===n){t=!1!==A._37(l,2)._onClick()&&t}if("click"===n){t=!1!==i.createBasicNotification()&&t}return t},j.b,j.a)),A._21(1097728,null,0,P.a,[A.r,A.R],{nzType:[0,"nzType"]},null),(l()(),A._45(0,["\u6253\u5f00\u901a\u77e5\u63d0\u793a\u6846"])),(l()(),A._45(null,["\n"]))],function(l,n){l(n,2,0,"primary")},null)}function c(l){return A._47(0,[(l()(),A._23(0,null,null,1,"nz-demo-notification-duration",[],null,null,null,a,w)),A._21(114688,null,0,R,[L.a],null,null)],function(l,n){l(n,1,0)},null)}function e(l){return F._47(0,[(l()(),F._45(null,["\n    "])),(l()(),F._23(0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0,i=l.component;if("click"===n){t=!1!==F._37(l,2)._onClick()&&t}if("click"===n){t=!1!==i.createBasicNotification()&&t}return t},W.b,W.a)),F._21(1097728,null,0,Z.a,[F.r,F.R],{nzType:[0,"nzType"]},null),(l()(),F._45(0,["\u6253\u5f00\u901a\u77e5\u63d0\u793a\u6846"])),(l()(),F._45(null,["\n"]))],function(l,n){l(n,2,0,"primary")},null)}function r(l){return F._47(0,[(l()(),F._23(0,null,null,1,"nz-demo-notification-html",[],null,null,null,e,E)),F._21(114688,null,0,X,[G.a],null,null)],function(l,n){l(n,1,0)},null)}function s(l){return K._47(0,[(l()(),K._23(0,null,null,401,"article",[],null,null,null,null,null)),(l()(),K._45(null,["\n\n  "])),(l()(),K._23(0,null,null,67,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),K._45(null,["\n    "])),(l()(),K._23(0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),K._45(null,["Notification \u901a\u77e5\u63d0\u9192\u6846"])),(l()(),K._45(null,["\n    "])),(l()(),K._23(0,null,null,57,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),K._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),K._45(null,["\u5168\u5c40\u5c55\u793a\u901a\u77e5\u63d0\u9192\u4fe1\u606f\u3002"])),(l()(),K._45(null,["\n      "])),(l()(),K._23(0,null,null,6,"h2",[["id","\u4f55\u65f6\u4f7f\u7528"]],null,null,null,null,null)),(l()(),K._23(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),K._45(null,["\u4f55\u65f6\u4f7f\u7528"])),(l()(),K._45(null,["\n        "])),(l()(),K._23(0,null,null,1,"a",[["class","anchor"]],null,null,null,null,null)),(l()(),K._45(null,["#"])),(l()(),K._45(null,["\n      "])),(l()(),K._45(null,["\n      "])),(l()(),K._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),K._45(null,["\u5728\u7cfb\u7edf\u53f3\u4e0a\u89d2\u663e\u793a\u901a\u77e5\u63d0\u9192\u4fe1\u606f\u3002\u7ecf\u5e38\u7528\u4e8e\u4ee5\u4e0b\u60c5\u51b5\uff1a"])),(l()(),K._45(null,["\n      "])),(l()(),K._23(0,null,null,13,"ul",[],null,null,null,null,null)),(l()(),K._45(null,["\n        "])),(l()(),K._23(0,null,null,2,"li",[],null,null,null,null,null)),(l()(),K._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),K._45(null,["\u8f83\u4e3a\u590d\u6742\u7684\u901a\u77e5\u5185\u5bb9\u3002"])),(l()(),K._45(null,["\n        "])),(l()(),K._23(0,null,null,2,"li",[],null,null,null,null,null)),(l()(),K._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),K._45(null,["\u5e26\u6709\u4ea4\u4e92\u7684\u901a\u77e5\uff0c\u7ed9\u51fa\u7528\u6237\u4e0b\u4e00\u6b65\u7684\u884c\u52a8\u70b9\u3002"])),(l()(),K._45(null,["\n        "])),(l()(),K._23(0,null,null,2,"li",[],null,null,null,null,null)),(l()(),K._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),K._45(null,["\u7cfb\u7edf\u4e3b\u52a8\u63a8\u9001\u3002"])),(l()(),K._45(null,["\n      "])),(l()(),K._45(null,["\n      "])),(l()(),K._23(0,null,null,3,"h2",[["id","\u5982\u4f55\u4f7f\u7528"]],null,null,null,null,null)),(l()(),K._23(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),K._45(null,["\u5982\u4f55\u4f7f\u7528"])),(l()(),K._45(null,["\n      "])),(l()(),K._45(null,["\n      "])),(l()(),K._23(0,null,null,4,"p",[],null,null,null,null,null)),(l()(),K._45(null,["\u4e0eMessage\u7c7b\u4f3c\uff0c\u5982\u679c\u8981\u4fee\u6539message\u7684\u9ed8\u8ba4\u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u63d0\u4f9b\u5546"])),(l()(),K._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),K._45(null,["NZ_NOTIFICATION_CONFIG"])),(l()(),K._45(null,["\u7684\u503c\u6765\u4fee\u6539\u3002\n      "])),(l()(),K._23(0,null,null,10,"p",[],null,null,null,null,null)),(l()(),K._45(null,["\uff08\u5982\uff1a\u5728\u4f60\u7684\u6a21\u5757\u7684providers\u4e2d\u52a0\u5165 "])),(l()(),K._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),K._45(null,[""," provide: NZ_NOTIFICATION_CONFIG, useValue: "," nzDuration: 3000 "," ",""])),(l()(),K._45(null,["\uff0c"])),(l()(),K._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),K._45(null,["NZ_NOTIFICATION_CONFIG"])),(l()(),K._45(null,["\u53ef\u4ee5\u4ece"])),(l()(),K._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),K._45(null,["ng-zorro-antd"])),(l()(),K._45(null,["\u5bfc\u5165\uff09"])),(l()(),K._45(null,["\n      "])),(l()(),K._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),K._45(null,["\u9ed8\u8ba4\u914d\u7f6e\u4e3a"])),(l()(),K._45(null,["\n      "])),(l()(),K._23(0,null,null,1,"pre",[["style","font-size:12px;"]],null,null,null,null,null)),(l()(),K._45(null,[" ","\n    nzTop                  : '24px',\n    nzRight                : '0px',\n    nzDuration             : 4500,\n    nzMaxStack             : 7,\n    nzPauseOnHover         : true,\n    nzAnimate              : true\n ",""])),(l()(),K._45(null,["\n    "])),(l()(),K._45(null,["\n\n    "])),(l()(),K._23(0,null,null,2,"h2",[],null,null,null,null,null)),(l()(),K._45(null,["\u4ee3\u7801\u6f14\u793a"])),(l()(),K._23(0,null,null,0,"i",[["class","code-box-expand-trigger anticon anticon-appstore"],["title","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801"]],null,null,null,null,null)),(l()(),K._45(null,["\n  "])),(l()(),K._45(null,["\n\n  "])),(l()(),K._23(0,null,null,68,"div",[["nz-row",""]],null,null,null,Q.b,Q.a)),K._21(114688,null,0,U.a,[K.r,K.R],{nzGutter:[0,"nzGutter"]},null),(l()(),K._45(0,["\n    "])),(l()(),K._23(0,null,0,28,"div",[["nz-col",""]],[[4,"padding-left","px"],[4,"padding-right","px"]],null,null,null,null)),K._21(606208,null,0,V.a,[K.r,[2,U.a],K.R],{nzSpan:[0,"nzSpan"]},null),(l()(),K._45(null,["\n      "])),(l()(),K._23(0,null,null,11,"nz-code-box",[["id","components-notification-demo-basic"]],null,null,null,Y.b,Y.a)),K._21(114688,null,0,$.a,[ll.c,K.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),K._45(null,["\n        "])),(l()(),K._23(0,null,0,1,"nz-demo-notification-basic",[["demo",""]],null,null,null,t,v)),K._21(114688,null,0,z,[nl.a],null,null),(l()(),K._45(null,["\n        "])),(l()(),K._23(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),K._45(null,["\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002"])),(l()(),K._45(null,["\n        "])),(l()(),K._45(null,["\n      "])),(l()(),K._45(null,["\n      "])),(l()(),K._23(0,null,null,11,"nz-code-box",[["id","components-notification-demo-icon"]],null,null,null,Y.b,Y.a)),K._21(114688,null,0,$.a,[ll.c,K.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),K._45(null,["\n        "])),(l()(),K._23(0,null,0,1,"nz-demo-notification-icon",[["demo",""]],null,null,null,o,S)),K._21(114688,null,0,C,[nl.a],null,null),(l()(),K._45(null,["\n        "])),(l()(),K._23(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),K._45(null,["\u901a\u77e5\u63d0\u9192\u6846\u5de6\u4fa7\u6709\u56fe\u6807\u3002"])),(l()(),K._45(null,["\n        "])),(l()(),K._45(null,["\n      "])),(l()(),K._45(null,["\n    "])),(l()(),K._45(0,["\n    "])),(l()(),K._23(0,null,0,34,"div",[["nz-col",""]],[[4,"padding-left","px"],[4,"padding-right","px"]],null,null,null,null)),K._21(606208,null,0,V.a,[K.r,[2,U.a],K.R],{nzSpan:[0,"nzSpan"]},null),(l()(),K._45(null,["\n      "])),(l()(),K._23(0,null,null,17,"nz-code-box",[["id","components-notification-demo-duration"]],null,null,null,Y.b,Y.a)),K._21(114688,null,0,$.a,[ll.c,K.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),K._45(null,["\n        "])),(l()(),K._23(0,null,0,1,"nz-demo-notification-duration",[["demo",""]],null,null,null,a,w)),K._21(114688,null,0,R,[nl.a],null,null),(l()(),K._45(null,["\n        "])),(l()(),K._23(0,null,1,10,"div",[["intro",""]],null,null,null,null,null)),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,7,"p",[],null,null,null,null,null)),(l()(),K._45(null,["\u81ea\u5b9a\u4e49\u901a\u77e5\u6846\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6\uff0c\u9ed8\u8ba4"])),(l()(),K._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),K._45(null,["4.5s"])),(l()(),K._45(null,["\uff0c\u53d6\u6d88\u81ea\u52a8\u5173\u95ed\u53ea\u8981\u5c06\u8be5\u503c\u8bbe\u4e3a "])),(l()(),K._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),K._45(null,["0"])),(l()(),K._45(null,[" \u5373\u53ef\u3002"])),(l()(),K._45(null,["\n        "])),(l()(),K._45(null,["\n      "])),(l()(),K._45(null,["\n      "])),(l()(),K._23(0,null,null,11,"nz-code-box",[["id","components-notification-demo-html"]],null,null,null,Y.b,Y.a)),K._21(114688,null,0,$.a,[ll.c,K.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),K._45(null,["\n        "])),(l()(),K._23(0,null,0,1,"nz-demo-notification-html",[["demo",""]],null,null,null,e,E)),K._21(114688,null,0,X,[nl.a],null,null),(l()(),K._45(null,["\n        "])),(l()(),K._23(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),K._45(null,["\u81ea\u5b9a\u4e49\u901a\u77e5\u680f\u5185HTML\uff0c\u6ce8\u610f\u9632\u6b62XSS"])),(l()(),K._45(null,["\n        "])),(l()(),K._45(null,["\n      "])),(l()(),K._45(null,["\n    "])),(l()(),K._45(0,["\n  "])),(l()(),K._45(null,["\n  "])),(l()(),K._23(0,null,null,259,"section",[["class","markdown api-container"]],null,null,null,null,null)),(l()(),K._45(null,["\n    "])),(l()(),K._23(0,null,null,4,"h2",[["id","API"]],null,null,null,null,null)),(l()(),K._23(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),K._45(null,["API"])),(l()(),K._45(null,["\n      "])),(l()(),K._45(null,["\n    "])),(l()(),K._45(null,["\n    "])),(l()(),K._23(0,null,null,2,"h4",[],null,null,null,null,null)),(l()(),K._23(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),K._45(null,["\u5168\u5c40\u914d\u7f6e\uff08NZ_NOTIFICATION_CONFIG\uff09"])),(l()(),K._45(null,["\n    "])),(l()(),K._23(0,null,null,112,"table",[],null,null,null,null,null)),(l()(),K._45(null,["\n      "])),(l()(),K._23(0,null,null,16,"thead",[],null,null,null,null,null)),(l()(),K._45(null,["\n        "])),(l()(),K._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),K._45(null,["\u53c2\u6570"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),K._45(null,["\u7c7b\u578b"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),K._45(null,["\u9ed8\u8ba4\u503c"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),K._45(null,["\u8bf4\u660e"])),(l()(),K._45(null,["\n        "])),(l()(),K._45(null,["\n      "])),(l()(),K._45(null,["\n      "])),(l()(),K._23(0,null,null,91,"tbody",[],null,null,null,null,null)),(l()(),K._45(null,["\n        "])),(l()(),K._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["nzTop"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["String"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["24px"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["\u9876\u90e8\u8ddd\u79bb"])),(l()(),K._45(null,["\n        "])),(l()(),K._45(null,["\n        "])),(l()(),K._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["nzRight"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["String"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["0px"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["\u53f3\u4fa7\u8ddd\u79bb"])),(l()(),K._45(null,["\n        "])),(l()(),K._45(null,["\n        "])),(l()(),K._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["nzDuration"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["Number"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["0"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["\u6301\u7eed\u65f6\u95f4,\u5f53\u8bbe\u7f6e\u4e3a0\u65f6\u4e0d\u6d88\u5931\uff08\u53ef\u7528\u4e8eNzNotificationService\u4e2d\uff09"])),(l()(),K._45(null,["\n        "])),(l()(),K._45(null,["\n        "])),(l()(),K._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["nzMaxStack"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["Number"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["8"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["\u63d0\u793a\u6700\u5927\u5806\u53e0\u6570"])),(l()(),K._45(null,["\n        "])),(l()(),K._45(null,["\n        "])),(l()(),K._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["nzPauseOnHover"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["bool"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["true"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["\u60ac\u505c\u65f6\u505c\u6b62\u5012\u8ba1\u65f6\uff08\u53ef\u7528\u4e8eNzNotificationService\u4e2d\uff09"])),(l()(),K._45(null,["\n        "])),(l()(),K._45(null,["\n        "])),(l()(),K._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["nzAnimate"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["bool"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["true"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["\u5f00\u5173\u52a8\u753b\u6548\u679c\uff08\u53ef\u7528\u4e8eNzNotificationService\u4e2d\uff09"])),(l()(),K._45(null,["\n        "])),(l()(),K._45(null,["\n      "])),(l()(),K._45(null,["\n    "])),(l()(),K._45(null,["\n    "])),(l()(),K._23(0,null,null,2,"h4",[],null,null,null,null,null)),(l()(),K._23(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),K._45(null,["NzNotificationService\u670d\u52a1"])),(l()(),K._45(null,["\n    "])),(l()(),K._23(0,null,null,3,"p",[],null,null,null,null,null)),(l()(),K._45(null,["\u63d0\u793a\uff1a\u4ee5\u4e0boptions\u53c2\u6570\u652f\u6301\u5168\u5c40\u914d\u7f6e\u4e2d\u7684 "])),(l()(),K._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),K._45(null,["nzDuration/nzAnimate/nzPauseOnHover"])),(l()(),K._45(null,["\n    "])),(l()(),K._23(0,null,null,123,"table",[],null,null,null,null,null)),(l()(),K._45(null,["\n      "])),(l()(),K._23(0,null,null,13,"thead",[],null,null,null,null,null)),(l()(),K._45(null,["\n        "])),(l()(),K._23(0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),K._45(null,["\u65b9\u6cd5"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),K._45(null,["\u53c2\u6570"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),K._45(null,["\u8bf4\u660e"])),(l()(),K._45(null,["\n        "])),(l()(),K._45(null,["\n      "])),(l()(),K._45(null,["\n      "])),(l()(),K._23(0,null,null,105,"tbody",[],null,null,null,null,null)),(l()(),K._45(null,["\n        "])),(l()(),K._23(0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["blank"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,2,"td",[],null,null,null,null,null)),(l()(),K._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),K._45(null,["(title: string, content: string, options?: Object)"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["\u4e0d\u5e26\u56fe\u6807\u7684\u63d0\u793a"])),(l()(),K._45(null,["\n        "])),(l()(),K._45(null,["\n        "])),(l()(),K._23(0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["success"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,2,"td",[],null,null,null,null,null)),(l()(),K._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),K._45(null,["(title: string, content: string, options?: Object)"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["\u6210\u529f\u63d0\u793a"])),(l()(),K._45(null,["\n        "])),(l()(),K._45(null,["\n        "])),(l()(),K._23(0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["error"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,2,"td",[],null,null,null,null,null)),(l()(),K._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),K._45(null,["(title: string, content: string, options?: Object)"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["\u5931\u8d25\u63d0\u793a"])),(l()(),K._45(null,["\n        "])),(l()(),K._45(null,["\n        "])),(l()(),K._23(0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["warning"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,2,"td",[],null,null,null,null,null)),(l()(),K._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),K._45(null,["(title: string, content: string, options?: Object)"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["\u8b66\u544a\u63d0\u793a"])),(l()(),K._45(null,["\n        "])),(l()(),K._45(null,["\n        "])),(l()(),K._23(0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["info"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,2,"td",[],null,null,null,null,null)),(l()(),K._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),K._45(null,["(title: string, content: string, options?: Object)"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["\u4fe1\u606f\u63d0\u793a"])),(l()(),K._45(null,["\n        "])),(l()(),K._45(null,["\n        "])),(l()(),K._23(0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["create"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,2,"td",[],null,null,null,null,null)),(l()(),K._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),K._45(null,["(type: string, title: string, content: string, options?: Object)"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["\u63d0\u4f9btype\u5c5e\u6027\uff0c\u53ef\u4f20\u5165'success'\u7b49\u9009\u9879"])),(l()(),K._45(null,["\n        "])),(l()(),K._45(null,["\n        "])),(l()(),K._23(0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["html"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,2,"td",[],null,null,null,null,null)),(l()(),K._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),K._45(null,["(html: string, options?: Object)"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["\u53ef\u4f7f\u7528html\u4ee3\u7801\u6765\u6e32\u67d3\u5185\u5bb9"])),(l()(),K._45(null,["\n        "])),(l()(),K._45(null,["\n        "])),(l()(),K._23(0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["remove"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,2,"td",[],null,null,null,null,null)),(l()(),K._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),K._45(null,["(id?: string)"])),(l()(),K._45(null,["\n          "])),(l()(),K._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),K._45(null,["\u79fb\u9664\u7279\u5b9aid\u7684\u6d88\u606f\uff0c\u5f53id\u4e3a\u7a7a\u65f6\uff0c\u79fb\u9664\u6240\u6709\u6d88\u606f"])),(l()(),K._45(null,["\n        "])),(l()(),K._45(null,["\n      "])),(l()(),K._45(null,["\n    "])),(l()(),K._45(null,["\n  "])),(l()(),K._45(null,["\n"])),(l()(),K._45(null,["\n"]))],function(l,n){var u=n.component;l(n,72,0,8);l(n,75,0,12);l(n,78,0,"\u57fa\u672c",u.NzDemoNotificationBasicCode),l(n,81,0);l(n,91,0,"\u5e26\u6709icon\u7684\u901a\u77e5\u63d0\u9192\u6846",u.NzDemoNotificationIconCode),l(n,94,0);l(n,105,0,12);l(n,108,0,"\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6",u.NzDemoNotificationDurationCode),l(n,111,0);l(n,127,0,"\u81ea\u5b9a\u4e49",u.NzDemoNotificationHtmlCode),l(n,130,0)},function(l,n){l(n,50,0,"{","{","}","}");l(n,63,0,"{","}"),l(n,74,0,K._37(n,75).paddingLeft,K._37(n,75).paddingRight),l(n,104,0,K._37(n,105).paddingLeft,K._37(n,105).paddingRight)})}function f(l){return K._47(0,[(l()(),K._23(0,null,null,1,"nz-demo-notification",[],null,null,null,s,tl)),K._21(114688,null,0,q,[],null,null)],function(l,n){l(n,1,0)},null)}Object.defineProperty(n,"__esModule",{value:!0});var d=function(){function l(){}return l}(),p=["#components-notification-demo-icon .ant-btn{margin-right:1em}"],m=u("01zq"),z=function(){function l(l){this._notification=l}return l.prototype.ngOnInit=function(){},l.prototype.createBasicNotification=function(){this._notification.blank("\u8fd9\u662f\u6807\u9898","\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848")},l.ctorParameters=function(){return[{type:m.d}]},l}(),b=u("/oeL"),N=u("Ab/W"),g=u("X/r7"),h=u("juh1"),k=[],v=b._20({encapsulation:2,styles:k,data:{}}),y=(b._18("nz-demo-notification-basic",z,i,{},{},[]),u("01zq")),C=function(){function l(l){var n=this;this._notification=l,this.createNotification=function(l){n._notification.create(l,"\u8fd9\u662f\u6807\u9898","\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848")}}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[{type:y.d}]},l}(),I=u("/oeL"),O=u("Ab/W"),x=u("X/r7"),T=u("juh1"),D=[],S=I._20({encapsulation:2,styles:D,data:{}}),B=(I._18("nz-demo-notification-icon",C,_,{},{},[]),u("01zq")),R=function(){function l(l){var n=this;this._notification=l,this.createBasicNotification=function(){n._notification.blank("\u8fd9\u662f\u6807\u9898","\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed",{nzDuration:0})}}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[{type:B.d}]},l}(),A=u("/oeL"),j=u("Ab/W"),P=u("X/r7"),L=u("juh1"),H=[],w=A._20({encapsulation:2,styles:H,data:{}}),M=(A._18("nz-demo-notification-duration",R,c,{},{},[]),u("01zq")),X=function(){function l(l){var n=this;this._notification=l,this.createBasicNotification=function(){n._notification.html("<strong>\u81ea\u5b9a\u4e49\u901a\u77e5\u680f\u5185HTML</strong><br><p>HTML</p>")}}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[{type:M.d}]},l}(),F=u("/oeL"),W=u("Ab/W"),Z=u("X/r7"),G=u("juh1"),J=[],E=F._20({encapsulation:2,styles:J,data:{}}),q=(F._18("nz-demo-notification-html",X,r,{},{},[]),function(){function l(){this.NzDemoNotificationBasicCode=u("p/LX"),this.NzDemoNotificationDurationCode=u("0QB0"),this.NzDemoNotificationIconCode=u("ZpxX"),this.NzDemoNotificationHtmlCode=u("TagL")}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()),K=u("/oeL"),Q=u("TOSB"),U=u("9f15"),V=u("FYfR"),Y=u("xfRN"),$=u("d0SC"),ll=u("qbdv"),nl=u("juh1"),ul=[p],tl=K._20({encapsulation:2,styles:ul,data:{}}),il=K._18("nz-demo-notification",q,f,{},{},[]),ol=function(){function l(){}return l}();u.d(n,"NzDemoNotificationModuleNgFactory",function(){return yn});var _l=u("/oeL"),al=u("FkWa"),cl=u("yrl+"),el=u("55J3"),rl=u("n6um"),sl=u("iaO7"),fl=u("FxM8"),dl=u("qbdv"),pl=u("bm2B"),ml=u("p4Sk"),zl=u("KWHd"),bl=u("ofc2"),Nl=u("Ep+3"),gl=u("oe3n"),hl=u("gRBx"),kl=u("8aH3"),vl=u("BIYD"),yl=u("+n5j"),Cl=u("syUv"),Il=u("sQGE"),Ol=u("hJM2"),xl=u("BkNc"),Tl=u("jlvU"),Dl=u("tSZc"),Sl=u("Z7s/"),Bl=u("PWwA"),Rl=u("PAVX"),Al=u("K8P4"),jl=u("R9WC"),Pl=u("ljTE"),Ll=u("ZPRV"),Hl=u("xrsb"),wl=u("g6N7"),Ml=u("Hmg1"),Xl=u("NnGW"),Fl=u("JY8U"),Wl=u("VfTQ"),Zl=u("Vy3b"),Gl=u("nbGD"),Jl=u("E+t3"),El=u("JOWY"),ql=u("83Ua"),Kl=u("XyJX"),Ql=u("Ao/f"),Ul=u("kX/R"),Vl=u("54Is"),Yl=u("N5El"),$l=u("2+5N"),ln=u("9fxl"),nn=u("RNwh"),un=u("4IKa"),tn=u("/grC"),on=u("XDe+"),_n=u("nP2T"),an=u("aWIB"),cn=u("T2co"),en=u("QUju"),rn=u("DcAm"),sn=u("BJRZ"),fn=u("4BBw"),dn=u("/Fr5"),pn=u("PbkE"),mn=u("xECq"),zn=u("/CDc"),bn=u("hKjL"),Nn=u("h617"),gn=u("shv5"),hn=u("ZgIK"),kn=u("IJb3"),vn=u("MgJ2"),yn=_l._19(d,[],function(l){return _l._34([_l._35(512,_l.n,_l._15,[[8,[il,al.a,cl.a,el.a,rl.a,sl.a,fl.a]],[3,_l.n],_l.I]),_l._35(4608,dl.n,dl.m,[_l.E]),_l._35(4608,pl.u,pl.u,[]),_l._35(4608,ml.l,ml.l,[]),_l._35(5120,zl.c,zl.b,[[3,zl.c],_l.K,ml.l]),_l._35(5120,bl.c,bl.b,[[3,bl.c],zl.c]),_l._35(4608,Nl.a,Nl.a,[zl.c,bl.c]),_l._35(5120,gl.c,gl.b,[[3,gl.c]]),_l._35(4608,hl.a,hl.a,[bl.c]),_l._35(4608,kl.a,kl.a,[Nl.a,gl.c,_l.n,hl.a,_l.g,_l.A,_l.K]),_l._35(5120,vl.c,vl.b,[kl.a,dl.c,[3,vl.c]]),_l._35(4608,yl.a,yl.a,[]),_l._35(4608,Cl.a,Cl.a,[_l.g,_l.n]),_l._35(4608,Il.a,Il.a,[]),_l._35(4608,ml.i,ml.i,[]),_l._35(4608,Ol.a,Ol.a,[]),_l._35(512,xl.o,xl.o,[[2,xl.t],[2,xl.l]]),_l._35(512,ol,ol,[]),_l._35(512,dl.b,dl.b,[]),_l._35(512,Tl.a,Tl.a,[]),_l._35(512,Dl.a,Dl.a,[]),_l._35(512,Sl.a,Sl.a,[]),_l._35(512,Bl.a,Bl.a,[]),_l._35(512,pl.s,pl.s,[]),_l._35(512,pl.i,pl.i,[]),_l._35(512,ml.m,ml.m,[]),_l._35(512,Rl.a,Rl.a,[]),_l._35(512,Al.d,Al.d,[]),_l._35(512,jl.a,jl.a,[]),_l._35(512,Pl.a,Pl.a,[]),_l._35(512,Ll.a,Ll.a,[]),_l._35(512,Hl.a,Hl.a,[]),_l._35(512,wl.a,wl.a,[]),_l._35(512,Ml.a,Ml.a,[]),_l._35(512,Xl.a,Xl.a,[]),_l._35(512,Fl.a,Fl.a,[]),_l._35(512,Wl.a,Wl.a,[]),_l._35(512,Zl.a,Zl.a,[]),_l._35(512,Gl.a,Gl.a,[]),_l._35(512,Jl.a,Jl.a,[]),_l._35(512,El.a,El.a,[]),_l._35(512,ql.a,ql.a,[]),_l._35(512,Kl.a,Kl.a,[]),_l._35(512,Ql.a,Ql.a,[]),_l._35(512,Ul.a,Ul.a,[]),_l._35(512,Vl.a,Vl.a,[]),_l._35(512,Yl.a,Yl.a,[]),_l._35(512,$l.a,$l.a,[]),_l._35(512,ln.a,ln.a,[]),_l._35(512,nn.a,nn.a,[]),_l._35(512,un.a,un.a,[]),_l._35(512,tn.a,tn.a,[]),_l._35(512,on.a,on.a,[]),_l._35(512,_n.a,_n.a,[]),_l._35(512,ml.n,ml.n,[]),_l._35(512,ml.k,ml.k,[]),_l._35(512,an.a,an.a,[]),_l._35(512,cn.a,cn.a,[]),_l._35(512,en.a,en.a,[]),_l._35(512,rn.a,rn.a,[]),_l._35(512,sn.a,sn.a,[]),_l._35(512,fn.a,fn.a,[]),_l._35(512,dn.a,dn.a,[]),_l._35(512,pn.a,pn.a,[]),_l._35(512,mn.a,mn.a,[]),_l._35(512,zn.a,zn.a,[]),_l._35(512,bn.a,bn.a,[]),_l._35(512,Nn.a,Nn.a,[]),_l._35(512,gn.a,gn.a,[]),_l._35(512,hn.a,hn.a,[]),_l._35(512,d,d,[]),_l._35(1024,xl.j,function(){return[[{path:"",component:q}]]},[]),_l._35(256,kn.b,{nzDuration:1500,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),_l._35(256,vn.b,{nzTop:"24px",nzRight:"0px",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[])])})},TagL:function(l,n){l.exports="import {Component, OnInit} from '@angular/core';\nimport {NzNotificationService} from '../../../index.showcase';\n\n@Component({\n  selector  : 'nz-demo-notification-html',\n  template  : `\n    <button nz-button [nzType]=\"'primary'\" (click)=\"createBasicNotification()\">\u6253\u5f00\u901a\u77e5\u63d0\u793a\u6846</button>\n`,\n  styles    : []\n})\nexport class NzDemoNotificationHtmlComponent implements OnInit {\n  createBasicNotification = () => {\n    this._notification.html('<strong>\u81ea\u5b9a\u4e49\u901a\u77e5\u680f\u5185HTML</strong><br><p>HTML</p>');\n  };\n  constructor(private _notification: NzNotificationService) {\n  }\n\n  ngOnInit() {\n  }\n}\n\n"},ZpxX:function(l,n){l.exports="import {Component, OnInit} from '@angular/core';\nimport {NzNotificationService} from '../../../index.showcase';\n\n@Component({\n  selector  : 'nz-demo-notification-icon',\n  template  : `\n    <button nz-button (click)=\"createNotification('success')\">\u6210 \u529f</button>\n    <button nz-button (click)=\"createNotification('info')\">\u6d88 \u606f</button>\n    <button nz-button (click)=\"createNotification('warning')\">\u8b66 \u544a</button>\n    <button nz-button (click)=\"createNotification('error')\">\u9519 \u8bef</button>\n`,\n  styles    : []\n})\nexport class NzDemoNotificationIconComponent implements OnInit {\n  createNotification = (type) => {\n    this._notification.create(type, '\u8fd9\u662f\u6807\u9898', '\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848');\n  };\n  constructor(private _notification: NzNotificationService) {\n  }\n\n  ngOnInit() {\n  }\n}\n\n"},"p/LX":function(l,n){l.exports="import {Component, OnInit} from '@angular/core';\nimport {NzNotificationService} from '../../../index.showcase';\n\n@Component({\n  selector  : 'nz-demo-notification-basic',\n  template  : `\n    <button nz-button [nzType]=\"'primary'\" (click)=\"createBasicNotification()\">\u6253\u5f00\u901a\u77e5\u63d0\u793a\u6846</button>\n  `,\n  styles    : []\n})\nexport class NzDemoNotificationBasicComponent implements OnInit {\n\n  constructor(private _notification: NzNotificationService) { }\n\n  ngOnInit() { }\n\n  createBasicNotification() {\n    this._notification.blank('\u8fd9\u662f\u6807\u9898', '\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848');\n  }\n}\n\n"}});
webpackJsonp([31],{"2HdI":function(l,n){l.exports="import {Component, OnInit} from '@angular/core';\nimport {NzMessageService} from '../../../index';\n\n@Component({\n  selector  : 'nz-demo-message-loading',\n  template  : `\n    <button nz-button [nzType]=\"'default'\" (click)=\"createBasicMessage()\">\u663e\u793a\u52a0\u8f7d\u4e2d</button>\n`,\n  styles    : []\n})\nexport class NzDemoMessageLoadingComponent implements OnInit {\n  _id;\n  createBasicMessage = () => {\n    this._id = this._message.loading('\u6b63\u5728\u6267\u884c\u4e2d', { nzDuration: 0 }).messageId;\n    setTimeout(_ => {\n      this._message.remove(this._id);\n    }, 2500)\n  };\n  constructor(private _message: NzMessageService) {\n  }\n\n  ngOnInit() {\n  }\n}\n\n"},"6dou":function(l,n){l.exports="import {Component, OnInit} from '@angular/core';\nimport {NzMessageService} from '../../../index';\n\n@Component({\n  selector  : 'nz-demo-message-icon',\n  template  : `\n    <button nz-button (click)=\"createMessage('success','\u6210\u529f')\">\u663e\u793a\u6210\u529f\u63d0\u793a</button>\n    <button nz-button (click)=\"createMessage('info','\u62a5\u9519')\">\u663e\u793a\u62a5\u9519\u63d0\u793a</button>\n    <button nz-button (click)=\"createMessage('warning','\u8b66\u544a')\">\u663e\u793a\u8b66\u544a\u63d0\u793a</button>\n`,\n  styles    : []\n})\nexport class NzDemoMessageIconComponent implements OnInit {\n  createMessage = (type, text) => {\n    this._message.create(type, `\u8fd9\u662f\u4e00\u6761${text}\u63d0\u793a`);\n  };\n  constructor(private _message: NzMessageService) {\n  }\n\n  ngOnInit() {\n  }\n}\n\n"},RgQR:function(l,n){l.exports="import {Component, OnInit} from '@angular/core';\nimport {NzMessageService} from '../../../index';\n\n@Component({\n  selector  : 'nz-demo-message-duration',\n  template  : `\n    <button nz-button [nzType]=\"'default'\" (click)=\"createBasicMessage()\">\u81ea\u5b9a\u4e49\u65f6\u957f\u63d0\u793a</button>\n`,\n  styles    : []\n})\nexport class NzDemoMessageDurationComponent implements OnInit {\n  createBasicMessage = () => {\n    this._message.success('\u8fd9\u662f\u4e00\u6761\u6210\u529f\u7684\u63d0\u793a,\u5e76\u5c06\u4e8e10\u79d2\u540e\u6d88\u5931', {nzDuration: 10000});\n  };\n  constructor(private _message: NzMessageService) {\n  }\n\n  ngOnInit() {\n  }\n}\n\n"},TLKD:function(l,n,u){"use strict";function e(l){return f._47(0,[(l()(),f._45(null,["\n    "])),(l()(),f._23(0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var e=!0,_=l.component;if("click"===n){e=!1!==f._37(l,2)._onClick()&&e}if("click"===n){e=!1!==_.createBasicMessage()&&e}return e},b.b,b.a)),f._21(1097728,null,0,M.a,[f.r,f.R],{nzType:[0,"nzType"]},null),(l()(),f._45(0,["\u663e\u793a\u666e\u901a\u63d0\u9192"])),(l()(),f._45(null,["\n"]))],function(l,n){l(n,2,0,"primary")},null)}function _(l){return f._47(0,[(l()(),f._23(0,null,null,1,"nz-demo-message-basic",[],null,null,null,e,y)),f._21(114688,null,0,z,[h.b],null,null)],function(l,n){l(n,1,0)},null)}function t(l){return k._47(0,[(l()(),k._45(null,["\n    "])),(l()(),k._23(0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var e=!0,_=l.component;if("click"===n){e=!1!==k._37(l,2)._onClick()&&e}if("click"===n){e=!1!==_.createBasicMessage()&&e}return e},C.b,C.a)),k._21(1097728,null,0,I.a,[k.r,k.R],{nzType:[0,"nzType"]},null),(l()(),k._45(0,["\u81ea\u5b9a\u4e49\u65f6\u957f\u63d0\u793a"])),(l()(),k._45(null,["\n"]))],function(l,n){l(n,2,0,"default")},null)}function a(l){return k._47(0,[(l()(),k._23(0,null,null,1,"nz-demo-message-duration",[],null,null,null,t,D)),k._21(114688,null,0,O,[x.b],null,null)],function(l,n){l(n,1,0)},null)}function o(l){return j._47(0,[(l()(),j._45(null,["\n    "])),(l()(),j._23(0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var e=!0,_=l.component;if("click"===n){e=!1!==j._37(l,2)._onClick()&&e}if("click"===n){e=!1!==_.createMessage("success","\u6210\u529f")&&e}return e},P.b,P.a)),j._21(1097728,null,0,B.a,[j.r,j.R],null,null),(l()(),j._45(0,["\u663e\u793a\u6210\u529f\u63d0\u793a"])),(l()(),j._45(null,["\n    "])),(l()(),j._23(0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var e=!0,_=l.component;if("click"===n){e=!1!==j._37(l,6)._onClick()&&e}if("click"===n){e=!1!==_.createMessage("info","\u62a5\u9519")&&e}return e},P.b,P.a)),j._21(1097728,null,0,B.a,[j.r,j.R],null,null),(l()(),j._45(0,["\u663e\u793a\u62a5\u9519\u63d0\u793a"])),(l()(),j._45(null,["\n    "])),(l()(),j._23(0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var e=!0,_=l.component;if("click"===n){e=!1!==j._37(l,10)._onClick()&&e}if("click"===n){e=!1!==_.createMessage("warning","\u8b66\u544a")&&e}return e},P.b,P.a)),j._21(1097728,null,0,B.a,[j.r,j.R],null,null),(l()(),j._45(0,["\u663e\u793a\u8b66\u544a\u63d0\u793a"])),(l()(),j._45(null,["\n"]))],null,null)}function s(l){return j._47(0,[(l()(),j._23(0,null,null,1,"nz-demo-message-icon",[],null,null,null,o,A)),j._21(114688,null,0,T,[G.b],null,null)],function(l,n){l(n,1,0)},null)}function i(l){return H._47(0,[(l()(),H._45(null,["\n    "])),(l()(),H._23(0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var e=!0,_=l.component;if("click"===n){e=!1!==H._37(l,2)._onClick()&&e}if("click"===n){e=!1!==_.createBasicMessage()&&e}return e},K.b,K.a)),H._21(1097728,null,0,U.a,[H.r,H.R],{nzType:[0,"nzType"]},null),(l()(),H._45(0,["\u663e\u793a\u52a0\u8f7d\u4e2d"])),(l()(),H._45(null,["\n"]))],function(l,n){l(n,2,0,"default")},null)}function c(l){return H._47(0,[(l()(),H._23(0,null,null,1,"nz-demo-message-loading",[],null,null,null,i,Z)),H._21(114688,null,0,F,[E.b],null,null)],function(l,n){l(n,1,0)},null)}function r(l){return J._47(0,[(l()(),J._23(0,null,null,372,"article",[],null,null,null,null,null)),(l()(),J._45(null,["\n\n  "])),(l()(),J._23(0,null,null,62,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),J._45(null,["\n    "])),(l()(),J._23(0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),J._45(null,["Message \u5168\u5c40\u63d0\u793a"])),(l()(),J._45(null,["\n    "])),(l()(),J._23(0,null,null,52,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),J._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),J._45(null,["\u5168\u5c40\u5c55\u793a\u64cd\u4f5c\u53cd\u9988\u4fe1\u606f\u3002"])),(l()(),J._45(null,["\n      "])),(l()(),J._23(0,null,null,6,"h2",[],null,null,null,null,null)),(l()(),J._23(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),J._45(null,["\u4f55\u65f6\u4f7f\u7528"])),(l()(),J._45(null,["\n        "])),(l()(),J._23(0,null,null,1,"a",[["class","anchor"]],null,null,null,null,null)),(l()(),J._45(null,["#"])),(l()(),J._45(null,["\n      "])),(l()(),J._45(null,["\n      "])),(l()(),J._23(0,null,null,9,"ul",[],null,null,null,null,null)),(l()(),J._45(null,["\n        "])),(l()(),J._23(0,null,null,2,"li",[],null,null,null,null,null)),(l()(),J._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),J._45(null,["\u53ef\u63d0\u4f9b\u6210\u529f\u3001\u8b66\u544a\u548c\u9519\u8bef\u7b49\u53cd\u9988\u4fe1\u606f\u3002"])),(l()(),J._45(null,["\n        "])),(l()(),J._23(0,null,null,2,"li",[],null,null,null,null,null)),(l()(),J._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),J._45(null,["\u9876\u90e8\u5c45\u4e2d\u663e\u793a\u5e76\u81ea\u52a8\u6d88\u5931\uff0c\u662f\u4e00\u79cd\u4e0d\u6253\u65ad\u7528\u6237\u64cd\u4f5c\u7684\u8f7b\u91cf\u7ea7\u63d0\u793a\u65b9\u5f0f\u3002"])),(l()(),J._45(null,["\n      "])),(l()(),J._45(null,["\n      "])),(l()(),J._23(0,null,null,5,"h2",[["id","\u5982\u4f55\u4f7f\u7528"]],null,null,null,null,null)),(l()(),J._23(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),J._45(null,["\u5982\u4f55\u4f7f\u7528"])),(l()(),J._23(0,null,null,1,"a",[["class","anchor"]],null,null,null,null,null)),(l()(),J._45(null,["#"])),(l()(),J._45(null,["\n      "])),(l()(),J._45(null,["\n      "])),(l()(),J._23(0,null,null,4,"p",[],null,null,null,null,null)),(l()(),J._45(null,["\u5982\u679c\u8981\u4fee\u6539message\u7684\u9ed8\u8ba4\u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u63d0\u4f9b\u5546"])),(l()(),J._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),J._45(null,["NZ_MESSAGE_CONFIG"])),(l()(),J._45(null,["\u7684\u503c\u6765\u4fee\u6539\u3002\n      "])),(l()(),J._23(0,null,null,10,"p",[],null,null,null,null,null)),(l()(),J._45(null,["\uff08\u5982\uff1a\u5728\u4f60\u7684\u6a21\u5757\u7684providers\u4e2d\u52a0\u5165 "])),(l()(),J._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),J._45(null,[""," provide: NZ_MESSAGE_CONFIG, useValue: "," nzDuration: 3000 "," ",""])),(l()(),J._45(null,["\uff0c"])),(l()(),J._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),J._45(null,["NZ_MESSAGE_CONFIG"])),(l()(),J._45(null,["\u53ef\u4ee5\u901a\u8fc7"])),(l()(),J._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),J._45(null,["NgZorroModule"])),(l()(),J._45(null,["\u6a21\u5757\u5bfc\u5165\uff09"])),(l()(),J._45(null,["\n      "])),(l()(),J._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),J._45(null,["\u9ed8\u8ba4\u914d\u7f6e\u4e3a"])),(l()(),J._45(null,["\n      "])),(l()(),J._23(0,null,null,1,"pre",[["style","font-size:12px;"]],null,null,null,null,null)),(l()(),J._45(null,[" ","\n    nzDuration             : 1500,\n    nzMaxStack             : 7,\n    nzPauseOnHover         : true,\n    nzAnimate              : true\n ",""])),(l()(),J._45(null,["\n    "])),(l()(),J._45(null,["\n    "])),(l()(),J._23(0,null,null,3,"h2",[],null,null,null,null,null)),(l()(),J._45(null,["\u4ee3\u7801\u6f14\u793a"])),(l()(),J._23(0,null,null,0,"i",[["class","code-box-expand-trigger anticon anticon-appstore"],["title","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801"]],null,null,null,null,null)),(l()(),J._45(null,["\n    "])),(l()(),J._45(null,["\n\n  "])),(l()(),J._23(0,null,null,68,"div",[["nz-row",""]],null,null,null,V.b,V.a)),J._21(114688,null,0,Y.a,[J.r,J.R],{nzGutter:[0,"nzGutter"]},null),(l()(),J._45(0,["\n    "])),(l()(),J._23(0,null,0,34,"div",[["nz-col",""]],[[4,"padding-left","px"],[4,"padding-right","px"]],null,null,null,null)),J._21(606208,null,0,W.a,[J.r,[2,Y.a],J.R],{nzSpan:[0,"nzSpan"]},null),(l()(),J._45(null,["\n      "])),(l()(),J._23(0,null,null,11,"nz-code-box",[["id","components-message-demo-basic"]],null,null,null,X.b,X.a)),J._21(114688,null,0,$.a,[ll.c,J.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),J._45(null,["\n        "])),(l()(),J._23(0,null,0,1,"nz-demo-message-basic",[["demo",""]],null,null,null,e,y)),J._21(114688,null,0,z,[nl.b],null,null),(l()(),J._45(null,["\n        "])),(l()(),J._23(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),J._45(null,["\u4fe1\u606f\u63d0\u9192\u53cd\u9988\u3002"])),(l()(),J._45(null,["\n        "])),(l()(),J._45(null,["\n      "])),(l()(),J._45(null,["\n      "])),(l()(),J._23(0,null,null,17,"nz-code-box",[["id","components-message-demo-duration"]],null,null,null,X.b,X.a)),J._21(114688,null,0,$.a,[ll.c,J.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),J._45(null,["\n        "])),(l()(),J._23(0,null,0,1,"nz-demo-message-duration",[["demo",""]],null,null,null,t,D)),J._21(114688,null,0,O,[nl.b],null,null),(l()(),J._45(null,["\n        "])),(l()(),J._23(0,null,1,10,"div",[["intro",""]],null,null,null,null,null)),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,7,"p",[],null,null,null,null,null)),(l()(),J._45(null,["\u81ea\u5b9a\u4e49\u65f6\u957f "])),(l()(),J._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),J._45(null,["10s"])),(l()(),J._45(null,["\uff0c\u9ed8\u8ba4\u65f6\u957f\u4e3a "])),(l()(),J._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),J._45(null,["1.5s"])),(l()(),J._45(null,["\u3002"])),(l()(),J._45(null,["\n        "])),(l()(),J._45(null,["\n      "])),(l()(),J._45(null,["\n    "])),(l()(),J._45(0,["\n    "])),(l()(),J._23(0,null,0,28,"div",[["nz-col",""]],[[4,"padding-left","px"],[4,"padding-right","px"]],null,null,null,null)),J._21(606208,null,0,W.a,[J.r,[2,Y.a],J.R],{nzSpan:[0,"nzSpan"]},null),(l()(),J._45(null,["\n      "])),(l()(),J._23(0,null,null,11,"nz-code-box",[["id","components-message-demo-icon"]],null,null,null,X.b,X.a)),J._21(114688,null,0,$.a,[ll.c,J.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),J._45(null,["\n        "])),(l()(),J._23(0,null,0,1,"nz-demo-message-icon",[["demo",""]],null,null,null,o,A)),J._21(114688,null,0,T,[nl.b],null,null),(l()(),J._45(null,["\n        "])),(l()(),J._23(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),J._45(null,["\u5305\u62ec\u6210\u529f\u3001\u5931\u8d25\u3001\u8b66\u544a\u3002"])),(l()(),J._45(null,["\n        "])),(l()(),J._45(null,["\n      "])),(l()(),J._45(null,["\n      "])),(l()(),J._23(0,null,null,11,"nz-code-box",[["id","components-message-demo-loading"]],null,null,null,X.b,X.a)),J._21(114688,null,0,$.a,[ll.c,J.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),J._45(null,["\n        "])),(l()(),J._23(0,null,0,1,"nz-demo-message-loading",[["demo",""]],null,null,null,i,Z)),J._21(114688,null,0,F,[nl.b],null,null),(l()(),J._45(null,["\n        "])),(l()(),J._23(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),J._45(null,["\u8fdb\u884c\u5168\u5c40 loading\uff0c\u5f02\u6b65\u81ea\u884c\u79fb\u9664\u3002"])),(l()(),J._45(null,["\n        "])),(l()(),J._45(null,["\n      "])),(l()(),J._45(null,["\n    "])),(l()(),J._45(0,["\n  "])),(l()(),J._45(null,["\n  "])),(l()(),J._23(0,null,null,235,"section",[["class","markdown api-container"]],null,null,null,null,null)),(l()(),J._45(null,["\n    "])),(l()(),J._23(0,null,null,6,"h2",[["id","API"]],null,null,null,null,null)),(l()(),J._23(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),J._45(null,["API"])),(l()(),J._45(null,["\n      "])),(l()(),J._23(0,null,null,1,"a",[["class","anchor"]],null,null,null,null,null)),(l()(),J._45(null,["#"])),(l()(),J._45(null,["\n    "])),(l()(),J._45(null,["\n    "])),(l()(),J._23(0,null,null,4,"h4",[],null,null,null,null,null)),(l()(),J._23(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),J._45(null,["\u5168\u5c40\u914d\u7f6e\uff08NZ_MESSAGE_CONFIG\uff09"])),(l()(),J._23(0,null,null,1,"a",[["class","anchor"]],null,null,null,null,null)),(l()(),J._45(null,["#"])),(l()(),J._45(null,["\n    "])),(l()(),J._23(0,null,null,82,"table",[],null,null,null,null,null)),(l()(),J._45(null,["\n      "])),(l()(),J._23(0,null,null,16,"thead",[],null,null,null,null,null)),(l()(),J._45(null,["\n        "])),(l()(),J._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),J._45(null,["\u53c2\u6570"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),J._45(null,["\u7c7b\u578b"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),J._45(null,["\u9ed8\u8ba4\u503c"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),J._45(null,["\u8bf4\u660e"])),(l()(),J._45(null,["\n        "])),(l()(),J._45(null,["\n      "])),(l()(),J._45(null,["\n      "])),(l()(),J._23(0,null,null,61,"tbody",[],null,null,null,null,null)),(l()(),J._45(null,["\n        "])),(l()(),J._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["nzDuration"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["Number"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["0"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["\u6301\u7eed\u65f6\u95f4,\u5f53\u8bbe\u7f6e\u4e3a0\u65f6\u4e0d\u6d88\u5931\uff08\u53ef\u7528\u4e8eNzNotificationService\u4e2d\uff09"])),(l()(),J._45(null,["\n        "])),(l()(),J._45(null,["\n        "])),(l()(),J._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["nzMaxStack"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["Number"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["8"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["\u53ef\u5c55\u793a\u7684\u6700\u5927\u63d0\u793a\u6570\u91cf"])),(l()(),J._45(null,["\n        "])),(l()(),J._45(null,["\n        "])),(l()(),J._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["nzPauseOnHover"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["bool"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["true"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["\u9f20\u6807\u79fb\u4e0a\u65f6\u6682\u505c\u5012\u8ba1\u65f6\uff08\u53ef\u7528\u4e8eNzNotificationService\u4e2d\uff09"])),(l()(),J._45(null,["\n        "])),(l()(),J._45(null,["\n        "])),(l()(),J._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["nzAnimate"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["bool"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["true"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["\u5f00\u5173\u52a8\u753b\u6548\u679c\uff08\u53ef\u7528\u4e8eNzNotificationService\u4e2d\uff09"])),(l()(),J._45(null,["\n        "])),(l()(),J._45(null,["\n      "])),(l()(),J._45(null,["\n    "])),(l()(),J._45(null,["\n    "])),(l()(),J._23(0,null,null,4,"h4",[],null,null,null,null,null)),(l()(),J._23(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),J._45(null,["NzMessageService\u670d\u52a1"])),(l()(),J._23(0,null,null,1,"a",[["class","anchor"]],null,null,null,null,null)),(l()(),J._45(null,["#"])),(l()(),J._45(null,["\n    "])),(l()(),J._23(0,null,null,3,"p",[],null,null,null,null,null)),(l()(),J._45(null,["\u63d0\u793a\uff1a\u4ee5\u4e0boptions\u53c2\u6570\u652f\u6301\u5168\u5c40\u914d\u7f6e\u4e2d\u7684 "])),(l()(),J._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),J._45(null,["nzDuration/nzAnimate/nzPauseOnHover"])),(l()(),J._45(null,["\n    "])),(l()(),J._23(0,null,null,123,"table",[],null,null,null,null,null)),(l()(),J._45(null,["\n      "])),(l()(),J._23(0,null,null,13,"thead",[],null,null,null,null,null)),(l()(),J._45(null,["\n        "])),(l()(),J._23(0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),J._45(null,["\u65b9\u6cd5"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),J._45(null,["\u53c2\u6570"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),J._45(null,["\u8bf4\u660e"])),(l()(),J._45(null,["\n        "])),(l()(),J._45(null,["\n      "])),(l()(),J._45(null,["\n      "])),(l()(),J._23(0,null,null,105,"tbody",[],null,null,null,null,null)),(l()(),J._45(null,["\n        "])),(l()(),J._23(0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["loading"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,2,"td",[],null,null,null,null,null)),(l()(),J._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),J._45(null,["(content: string, options?: Object)"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["\u52a0\u8f7d\u4e2d"])),(l()(),J._45(null,["\n        "])),(l()(),J._45(null,["\n        "])),(l()(),J._23(0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["success"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,2,"td",[],null,null,null,null,null)),(l()(),J._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),J._45(null,["(content: string, options?: Object)"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["\u6210\u529f\u6d88\u606f"])),(l()(),J._45(null,["\n        "])),(l()(),J._45(null,["\n        "])),(l()(),J._23(0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["error"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,2,"td",[],null,null,null,null,null)),(l()(),J._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),J._45(null,["(content: string, options?: Object)"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["\u5931\u8d25\u6d88\u606f"])),(l()(),J._45(null,["\n        "])),(l()(),J._45(null,["\n        "])),(l()(),J._23(0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["warning"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,2,"td",[],null,null,null,null,null)),(l()(),J._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),J._45(null,["(content: string, options?: Object)"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["\u8b66\u544a\u6d88\u606f"])),(l()(),J._45(null,["\n        "])),(l()(),J._45(null,["\n        "])),(l()(),J._23(0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["info"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,2,"td",[],null,null,null,null,null)),(l()(),J._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),J._45(null,["(content: string, options?: Object)"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["\u4fe1\u606f\u6d88\u606f"])),(l()(),J._45(null,["\n        "])),(l()(),J._45(null,["\n        "])),(l()(),J._23(0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["create"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,2,"td",[],null,null,null,null,null)),(l()(),J._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),J._45(null,["(type: string, content: string, options?: Object)"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["\u63d0\u4f9btype\u5c5e\u6027\uff0c\u53ef\u4f20\u5165'success'\u7b49\u9009\u9879"])),(l()(),J._45(null,["\n        "])),(l()(),J._45(null,["\n        "])),(l()(),J._23(0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["html"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,2,"td",[],null,null,null,null,null)),(l()(),J._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),J._45(null,["(html: string, options?: Object)"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["\u53ef\u4f7f\u7528html\u4ee3\u7801\u6765\u6e32\u67d3\u5185\u5bb9"])),(l()(),J._45(null,["\n        "])),(l()(),J._45(null,["\n        "])),(l()(),J._23(0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["remove"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,2,"td",[],null,null,null,null,null)),(l()(),J._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),J._45(null,["(id?: string)"])),(l()(),J._45(null,["\n          "])),(l()(),J._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),J._45(null,["\u79fb\u9664\u7279\u5b9aid\u7684\u6d88\u606f\uff0c\u5f53id\u4e3a\u7a7a\u65f6\uff0c\u79fb\u9664\u6240\u6709\u6d88\u606f"])),(l()(),J._45(null,["\n        "])),(l()(),J._45(null,["\n      "])),(l()(),J._45(null,["\n    "])),(l()(),J._45(null,["\n  "])),(l()(),J._45(null,["\n"])),(l()(),J._45(null,["\n"]))],function(l,n){var u=n.component;l(n,67,0,8);l(n,70,0,12);l(n,73,0,"\u666e\u901a\u63d0\u793a",u.NzDemoMessageBasicCode),l(n,76,0);l(n,86,0,"\u81ea\u5b9a\u4e49\u65f6\u957f\u63d0\u793a",u.NzDemoMessageDurationCode),l(n,89,0);l(n,106,0,12);l(n,109,0,"\u5176\u4ed6\u63d0\u793a\u7c7b\u578b",u.NzDemoMessageIconCode),l(n,112,0);l(n,122,0,"\u52a0\u8f7d\u4e2d",u.NzDemoMessageLoadingCode),l(n,125,0)},function(l,n){l(n,45,0,"{","{","}","}");l(n,58,0,"{","}"),l(n,69,0,J._37(n,70).paddingLeft,J._37(n,70).paddingRight),l(n,105,0,J._37(n,106).paddingLeft,J._37(n,106).paddingRight)})}function d(l){return J._47(0,[(l()(),J._23(0,null,null,1,"nz-demo-message",[],null,null,null,r,el)),J._21(114688,null,0,q,[],null,null)],function(l,n){l(n,1,0)},null)}Object.defineProperty(n,"__esModule",{value:!0});var m=function(){function l(){}return l}(),p=[""],g=u("ORKw"),z=function(){function l(l){this._message=l}return l.prototype.ngOnInit=function(){},l.prototype.createBasicMessage=function(){this._message.info("\u8fd9\u662f\u4e00\u6761\u666e\u901a\u7684\u63d0\u9192")},l.ctorParameters=function(){return[{type:g.a}]},l}(),f=u("/oeL"),b=u("PoiU"),M=u("yojp"),h=u("16cp"),v=[],y=f._20({encapsulation:2,styles:v,data:{}}),N=(f._18("nz-demo-message-basic",z,_,{},{},[]),u("ORKw")),O=function(){function l(l){var n=this;this._message=l,this.createBasicMessage=function(){n._message.success("\u8fd9\u662f\u4e00\u6761\u6210\u529f\u7684\u63d0\u793a,\u5e76\u5c06\u4e8e10\u79d2\u540e\u6d88\u5931",{nzDuration:1e4})}}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[{type:N.a}]},l}(),k=u("/oeL"),C=u("PoiU"),I=u("yojp"),x=u("16cp"),S=[],D=k._20({encapsulation:2,styles:S,data:{}}),R=(k._18("nz-demo-message-duration",O,a,{},{},[]),u("ORKw")),T=function(){function l(l){var n=this;this._message=l,this.createMessage=function(l,u){n._message.create(l,"\u8fd9\u662f\u4e00\u6761"+u+"\u63d0\u793a")}}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[{type:R.a}]},l}(),j=u("/oeL"),P=u("PoiU"),B=u("yojp"),G=u("16cp"),w=[],A=j._20({encapsulation:2,styles:w,data:{}}),L=(j._18("nz-demo-message-icon",T,s,{},{},[]),u("ORKw")),F=function(){function l(l){var n=this;this._message=l,this.createBasicMessage=function(){n._id=n._message.loading("\u6b63\u5728\u6267\u884c\u4e2d",{nzDuration:0}).messageId,setTimeout(function(l){n._message.remove(n._id)},2500)}}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[{type:L.a}]},l}(),H=u("/oeL"),K=u("PoiU"),U=u("yojp"),E=u("16cp"),Q=[],Z=H._20({encapsulation:2,styles:Q,data:{}}),q=(H._18("nz-demo-message-loading",F,c,{},{},[]),function(){function l(){this.NzDemoMessageBasicCode=u("U1ww"),this.NzDemoMessageDurationCode=u("RgQR"),this.NzDemoMessageIconCode=u("6dou"),this.NzDemoMessageLoadingCode=u("2HdI")}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()),J=u("/oeL"),V=u("AQI4"),Y=u("QJaU"),W=u("HzDP"),X=u("xfRN"),$=u("d0SC"),ll=u("qbdv"),nl=u("16cp"),ul=[p],el=J._20({encapsulation:2,styles:ul,data:{}}),_l=J._18("nz-demo-message",q,d,{},{},[]),tl=function(){function l(){}return l}();u.d(n,"NzDemoMessageModuleNgFactory",function(){return vn});var al=u("/oeL"),ol=u("gNns"),sl=u("VMe7"),il=u("ZjYu"),cl=u("BRsn"),rl=u("1w55"),dl=u("tdcY"),ml=u("qbdv"),pl=u("bm2B"),gl=u("p4Sk"),zl=u("YtGb"),fl=u("Bi2f"),bl=u("6lGd"),Ml=u("Dj3/"),hl=u("yK6y"),vl=u("RaX4"),yl=u("Fn2S"),Nl=u("7bMD"),Ol=u("71yQ"),kl=u("jhj7"),Cl=u("4FjH"),Il=u("BkNc"),xl=u("jlvU"),Sl=u("v3Ml"),Dl=u("KvRT"),Rl=u("fFfs"),Tl=u("x1IG"),jl=u("AuvO"),Pl=u("ICnb"),Bl=u("nQgM"),Gl=u("AMM9"),wl=u("Gb4R"),Al=u("ATGq"),Ll=u("rMvC"),Fl=u("x9cu"),Hl=u("PIhm"),Kl=u("G5xS"),Ul=u("tGoV"),El=u("Bd7q"),Ql=u("HbPf"),Zl=u("+dpF"),ql=u("t6og"),Jl=u("0oag"),Vl=u("0MmT"),Yl=u("0SjK"),Wl=u("UWIb"),Xl=u("FP9i"),$l=u("8zAG"),ln=u("OtIO"),nn=u("V5qy"),un=u("BGFw"),en=u("qa79"),_n=u("DJ6J"),tn=u("A6WS"),an=u("4I7f"),on=u("LLhl"),sn=u("+35O"),cn=u("TRYS"),rn=u("NGUZ"),dn=u("Hjq/"),mn=u("Cjk6"),pn=u("6eTp"),gn=u("pORy"),zn=u("aQzP"),fn=u("Pgvs"),bn=u("ZgIK"),Mn=u("mQB5"),hn=u("9rok"),vn=al._19(m,[],function(l){return al._34([al._35(512,al.n,al._15,[[8,[_l,ol.a,sl.a,il.a,cl.a,rl.a,dl.a]],[3,al.n],al.I]),al._35(4608,ml.n,ml.m,[al.E]),al._35(4608,pl.u,pl.u,[]),al._35(4608,gl.h,gl.h,[]),al._35(5120,zl.b,zl.a,[[3,zl.b],al.K,gl.h]),al._35(5120,fl.c,fl.b,[[3,fl.c],zl.b]),al._35(4608,bl.a,bl.a,[zl.b,fl.c]),al._35(5120,Ml.c,Ml.b,[[3,Ml.c]]),al._35(4608,hl.a,hl.a,[fl.c]),al._35(4608,vl.a,vl.a,[bl.a,Ml.c,al.n,hl.a,al.g,al.A,al.K]),al._35(5120,yl.c,yl.b,[vl.a,ml.c,[3,yl.c]]),al._35(4608,Nl.a,Nl.a,[]),al._35(4608,Ol.a,Ol.a,[al.g,al.n]),al._35(4608,kl.a,kl.a,[]),al._35(4608,gl.e,gl.e,[]),al._35(4608,Cl.a,Cl.a,[]),al._35(512,Il.o,Il.o,[[2,Il.t],[2,Il.l]]),al._35(512,tl,tl,[]),al._35(512,ml.b,ml.b,[]),al._35(512,xl.a,xl.a,[]),al._35(512,Sl.a,Sl.a,[]),al._35(512,Dl.a,Dl.a,[]),al._35(512,Rl.a,Rl.a,[]),al._35(512,pl.s,pl.s,[]),al._35(512,pl.i,pl.i,[]),al._35(512,gl.i,gl.i,[]),al._35(512,Tl.a,Tl.a,[]),al._35(512,jl.d,jl.d,[]),al._35(512,Pl.a,Pl.a,[]),al._35(512,Bl.a,Bl.a,[]),al._35(512,Gl.a,Gl.a,[]),al._35(512,wl.a,wl.a,[]),al._35(512,Al.a,Al.a,[]),al._35(512,Ll.a,Ll.a,[]),al._35(512,Fl.a,Fl.a,[]),al._35(512,Hl.a,Hl.a,[]),al._35(512,Kl.a,Kl.a,[]),al._35(512,Ul.a,Ul.a,[]),al._35(512,El.a,El.a,[]),al._35(512,Ql.a,Ql.a,[]),al._35(512,Zl.a,Zl.a,[]),al._35(512,ql.a,ql.a,[]),al._35(512,Jl.a,Jl.a,[]),al._35(512,Vl.a,Vl.a,[]),al._35(512,Yl.a,Yl.a,[]),al._35(512,Wl.a,Wl.a,[]),al._35(512,Xl.a,Xl.a,[]),al._35(512,$l.a,$l.a,[]),al._35(512,ln.a,ln.a,[]),al._35(512,nn.a,nn.a,[]),al._35(512,un.a,un.a,[]),al._35(512,en.a,en.a,[]),al._35(512,_n.a,_n.a,[]),al._35(512,gl.j,gl.j,[]),al._35(512,gl.g,gl.g,[]),al._35(512,tn.a,tn.a,[]),al._35(512,an.a,an.a,[]),al._35(512,on.a,on.a,[]),al._35(512,sn.a,sn.a,[]),al._35(512,cn.a,cn.a,[]),al._35(512,rn.a,rn.a,[]),al._35(512,dn.a,dn.a,[]),al._35(512,mn.a,mn.a,[]),al._35(512,pn.a,pn.a,[]),al._35(512,gn.a,gn.a,[]),al._35(512,zn.a,zn.a,[]),al._35(512,fn.a,fn.a,[]),al._35(512,bn.a,bn.a,[]),al._35(512,m,m,[]),al._35(1024,Il.j,function(){return[[{path:"",component:q}]]},[]),al._35(256,Mn.b,{nzDuration:1500,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),al._35(256,hn.b,{nzTop:"24px",nzRight:"0px",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[])])})},U1ww:function(l,n){l.exports="import {Component, OnInit} from '@angular/core';\nimport {NzMessageService} from '../../../index';\n\n@Component({\n  selector  : 'nz-demo-message-basic',\n  template  : `\n    <button nz-button [nzType]=\"'primary'\" (click)=\"createBasicMessage()\">\u663e\u793a\u666e\u901a\u63d0\u9192</button>\n`,\n  styles    : []\n})\nexport class NzDemoMessageBasicComponent implements OnInit {\n\n  constructor(private _message: NzMessageService) {\n  }\n\n  ngOnInit() {\n  }\n\n  createBasicMessage() {\n    this._message.info('\u8fd9\u662f\u4e00\u6761\u666e\u901a\u7684\u63d0\u9192');\n  }\n}\n\n"}});
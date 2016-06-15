webpackJsonp([4,359],{694:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(a(22),a(21)),p=t(e),o=Object.assign||function(n){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n},c=a(1),u=t(c),l=a(2),i=(t(l),a(1553)),r=t(i);n.exports={content:[["p","\u5728 ",["code","0.11.0"]," \u4ee5\u540e\uff0c",["code","dataSource"]," \u8fdc\u7a0b\u6a21\u5f0f\u88ab\u79fb\u9664\uff0c\u7528\u6237\u53ef\u4ee5\u81ea\u884c\u5b9e\u73b0\u6570\u636e\u8bfb\u53d6\u65b9\u5f0f\u3002"],["p","\u8fd9\u4e2a\u4f8b\u5b50\u901a\u8fc7\u7b80\u5355\u7684 ajax \u8bfb\u53d6\u65b9\u5f0f\uff0c\u6f14\u793a\u4e86\u5982\u4f55\u4ece\u670d\u52a1\u7aef\u8bfb\u53d6\u5e76\u5c55\u73b0\u6570\u636e\uff0c\u5177\u6709\u7b5b\u9009\u3001\u6392\u5e8f\u7b49\u529f\u80fd\u4ee5\u53ca\u9875\u9762 loading \u6548\u679c\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u81ea\u884c\u63a5\u5165\u5176\u4ed6\u6570\u636e\u5904\u7406\u65b9\u5f0f\u3002"],["p","\u53e6\u5916\uff0c\u672c\u4f8b\u4e5f\u5c55\u793a\u4e86\u7b5b\u9009\u6392\u5e8f\u529f\u80fd\u5982\u4f55\u4ea4\u7ed9\u670d\u52a1\u7aef\u5b9e\u73b0\uff0c\u5217\u4e0d\u9700\u8981\u6307\u5b9a\u5177\u4f53\u7684 ",["code","onFilter"]," \u548c ",["code","sorter"]," \u51fd\u6570\uff0c\u800c\u662f\u5728\u628a\u7b5b\u9009\u548c\u6392\u5e8f\u7684\u53c2\u6570\u53d1\u5230\u670d\u52a1\u7aef\u6765\u5904\u7406\u3002"],["p",["strong","\u6ce8\u610f\uff0c\u6b64\u793a\u4f8b\u4f7f\u7528 ",["a",{title:null,href:"https://randomuser.me"},"\u6a21\u62df\u63a5\u53e3"],"\uff0c\u5c55\u793a\u6570\u636e\u53ef\u80fd\u4e0d\u51c6\u786e\uff0c\u8bf7\u6253\u5f00\u7f51\u7edc\u9762\u677f\u67e5\u770b\u8bf7\u6c42\u3002"]]],meta:{order:7,title:"\u8fdc\u7a0b\u52a0\u8f7d\u6570\u636e",filename:"components/table/demo/ajax.md",id:"components-table-demo-ajax"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Table <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> reqwest <span class="token keyword" >from</span> <span class="token string" >\'reqwest\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> columns <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u59d3\u540d\'</span><span class="token punctuation" >,</span>\n  dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'name\'</span><span class="token punctuation" >,</span>\n  sorter<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n  render<span class="token punctuation" >:</span> name <span class="token operator" >=</span><span class="token operator" >></span> <span class="token template-string" ><span class="token string" >`</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>name<span class="token punctuation" >.</span>first<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" > </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>name<span class="token punctuation" >.</span>last<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >,</span>\n  width<span class="token punctuation" >:</span> <span class="token string" >\'20%\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u6027\u522b\'</span><span class="token punctuation" >,</span>\n  dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'gender\'</span><span class="token punctuation" >,</span>\n  filters<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span> text<span class="token punctuation" >:</span> <span class="token string" >\'Male\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'male\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span> text<span class="token punctuation" >:</span> <span class="token string" >\'Female\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'female\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  width<span class="token punctuation" >:</span> <span class="token string" >\'20%\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u90ae\u7bb1\'</span><span class="token punctuation" >,</span>\n  dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'email\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Test <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      data<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      pagination<span class="token punctuation" >:</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      loading<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleTableChange</span><span class="token punctuation" >(</span>pagination<span class="token punctuation" >,</span> filters<span class="token punctuation" >,</span> sorter<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> pager <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>pagination<span class="token punctuation" >;</span>\n    pager<span class="token punctuation" >.</span>current <span class="token operator" >=</span> pagination<span class="token punctuation" >.</span>current<span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      pagination<span class="token punctuation" >:</span> pager<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >fetch</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      results<span class="token punctuation" >:</span> pagination<span class="token punctuation" >.</span>pageSize<span class="token punctuation" >,</span>\n      page<span class="token punctuation" >:</span> pagination<span class="token punctuation" >.</span>current<span class="token punctuation" >,</span>\n      sortField<span class="token punctuation" >:</span> sorter<span class="token punctuation" >.</span>field<span class="token punctuation" >,</span>\n      sortOrder<span class="token punctuation" >:</span> sorter<span class="token punctuation" >.</span>order<span class="token punctuation" >,</span>\n      <span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>filters<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >fetch</span><span class="token punctuation" >(</span>params <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'\u8bf7\u6c42\u53c2\u6570\uff1a\'</span><span class="token punctuation" >,</span> params<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> loading<span class="token punctuation" >:</span> <span class="token boolean" >true</span> <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token function" >reqwest</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      url<span class="token punctuation" >:</span> <span class="token string" >\'http://api.randomuser.me\'</span><span class="token punctuation" >,</span>\n      method<span class="token punctuation" >:</span> <span class="token string" >\'get\'</span><span class="token punctuation" >,</span>\n      data<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        results<span class="token punctuation" >:</span> <span class="token number" >10</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>params<span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'json\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >.</span><span class="token function" >then</span><span class="token punctuation" >(</span>data <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >const</span> pagination <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>pagination<span class="token punctuation" >;</span>\n      <span class="token comment" spellcheck="true">// Read total count from server</span>\n      <span class="token comment" spellcheck="true">// pagination.total = data.totalCount;</span>\n      pagination<span class="token punctuation" >.</span>total <span class="token operator" >=</span> <span class="token number" >200</span><span class="token punctuation" >;</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n        loading<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n        data<span class="token punctuation" >:</span> data<span class="token punctuation" >.</span>results<span class="token punctuation" >,</span>\n        pagination<span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >componentDidMount</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >fetch</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Table</span> <span class="token attr-name" >columns</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>columns<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >rowKey</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>record <span class="token operator" >=</span><span class="token operator" >></span> record<span class="token punctuation" >.</span>registered<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >dataSource</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>data<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >pagination</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>pagination<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >loading</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>loading<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleTableChange<span class="token punctuation" >}</span></span>\n      <span class="token punctuation" >/></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Test</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=[{title:"\u59d3\u540d",dataIndex:"name",sorter:!0,render:function(n){return n.first+" "+n.last},width:"20%"},{title:"\u6027\u522b",dataIndex:"gender",filters:[{text:"Male",value:"male"},{text:"Female",value:"female"}],width:"20%"},{title:"\u90ae\u7bb1",dataIndex:"email"}],s=u["default"].createClass({displayName:"Test",getInitialState:function(){return{data:[],pagination:{},loading:!1}},handleTableChange:function(n,s,a){var t=this.state.pagination;t.current=n.current,this.setState({pagination:t}),this.fetch(o({results:n.pageSize,page:n.current,sortField:a.field,sortOrder:a.order},s))},fetch:function(){var n=this,s=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];console.log("\u8bf7\u6c42\u53c2\u6570\uff1a",s),this.setState({loading:!0}),(0,r["default"])({url:"http://api.randomuser.me",method:"get",data:o({results:10},s),type:"json"}).then(function(s){var a=n.state.pagination;a.total=200,n.setState({loading:!1,data:s.results,pagination:a})})},componentDidMount:function(){this.fetch()},render:function(){return u["default"].createElement(p["default"],{columns:n,rowKey:function(n){return n.registered},dataSource:this.state.data,pagination:this.state.pagination,loading:this.state.loading,onChange:this.handleTableChange})}});return u["default"].createElement(s,null)}}},1553:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__;/*!
	  * Reqwest! A general purpose XHR connection manager
	  * license MIT (c) Dustin Diaz 2015
	  * https://github.com/ded/reqwest
	  */
!function(n,s,a){"undefined"!=typeof module&&module.exports?module.exports=a():(__WEBPACK_AMD_DEFINE_FACTORY__=a,__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof __WEBPACK_AMD_DEFINE_FACTORY__?__WEBPACK_AMD_DEFINE_FACTORY__.call(exports,__webpack_require__,exports,module):__WEBPACK_AMD_DEFINE_FACTORY__,!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}("reqwest",this,function(){function succeed(n){var s=protocolRe.exec(n.url);return s=s&&s[1]||context.location.protocol,httpsRe.test(s)?twoHundo.test(n.request.status):!!n.request.response}function handleReadyState(n,s,a){return function(){return n._aborted?a(n.request):n._timedOut?a(n.request,"Request is aborted: timeout"):void(n.request&&4==n.request[readyState]&&(n.request.onreadystatechange=noop,succeed(n)?s(n.request):a(n.request)))}}function setHeaders(n,s){var a,t=s.headers||{};t.Accept=t.Accept||defaultHeaders.accept[s.type]||defaultHeaders.accept["*"];var e="undefined"!=typeof FormData&&s.data instanceof FormData;s.crossOrigin||t[requestedWith]||(t[requestedWith]=defaultHeaders.requestedWith),t[contentType]||e||(t[contentType]=s.contentType||defaultHeaders.contentType);for(a in t)t.hasOwnProperty(a)&&"setRequestHeader"in n&&n.setRequestHeader(a,t[a])}function setCredentials(n,s){"undefined"!=typeof s.withCredentials&&"undefined"!=typeof n.withCredentials&&(n.withCredentials=!!s.withCredentials)}function generalCallback(n){lastValue=n}function urlappend(n,s){return n+(/\?/.test(n)?"&":"?")+s}function handleJsonp(n,s,a,t){var e=uniqid++,p=n.jsonpCallback||"callback",o=n.jsonpCallbackName||reqwest.getcallbackPrefix(e),c=new RegExp("((^|\\?|&)"+p+")=([^&]+)"),u=t.match(c),l=doc.createElement("script"),i=0,r=-1!==navigator.userAgent.indexOf("MSIE 10.0");return u?"?"===u[3]?t=t.replace(c,"$1="+o):o=u[3]:t=urlappend(t,p+"="+o),context[o]=generalCallback,l.type="text/javascript",l.src=t,l.async=!0,"undefined"==typeof l.onreadystatechange||r||(l.htmlFor=l.id="_reqwest_"+e),l.onload=l.onreadystatechange=function(){return l[readyState]&&"complete"!==l[readyState]&&"loaded"!==l[readyState]||i?!1:(l.onload=l.onreadystatechange=null,l.onclick&&l.onclick(),s(lastValue),lastValue=void 0,head.removeChild(l),void(i=1))},head.appendChild(l),{abort:function(){l.onload=l.onreadystatechange=null,a({},"Request is aborted: timeout",{}),lastValue=void 0,head.removeChild(l),i=1}}}function getRequest(n,s){var a,t=this.o,e=(t.method||"GET").toUpperCase(),p="string"==typeof t?t:t.url,o=t.processData!==!1&&t.data&&"string"!=typeof t.data?reqwest.toQueryString(t.data):t.data||null,c=!1;return"jsonp"!=t.type&&"GET"!=e||!o||(p=urlappend(p,o),o=null),"jsonp"==t.type?handleJsonp(t,n,s,p):(a=t.xhr&&t.xhr(t)||xhr(t),a.open(e,p,t.async!==!1),setHeaders(a,t),setCredentials(a,t),context[xDomainRequest]&&a instanceof context[xDomainRequest]?(a.onload=n,a.onerror=s,a.onprogress=function(){},c=!0):a.onreadystatechange=handleReadyState(this,n,s),t.before&&t.before(a),c?setTimeout(function(){a.send(o)},200):a.send(o),a)}function Reqwest(n,s){this.o=n,this.fn=s,init.apply(this,arguments)}function setType(n){return null!==n?n.match("json")?"json":n.match("javascript")?"js":n.match("text")?"html":n.match("xml")?"xml":void 0:void 0}function init(o,fn){function complete(n){for(o.timeout&&clearTimeout(self.timeout),self.timeout=null;self._completeHandlers.length>0;)self._completeHandlers.shift()(n)}function success(resp){var type=o.type||resp&&setType(resp.getResponseHeader("Content-Type"));resp="jsonp"!==type?self.request:resp;var filteredResponse=globalSetupOptions.dataFilter(resp.responseText,type),r=filteredResponse;try{resp.responseText=r}catch(e){}if(r)switch(type){case"json":try{resp=context.JSON?context.JSON.parse(r):eval("("+r+")")}catch(err){return error(resp,"Could not parse JSON in response",err)}break;case"js":resp=eval(r);break;case"html":resp=r;break;case"xml":resp=resp.responseXML&&resp.responseXML.parseError&&resp.responseXML.parseError.errorCode&&resp.responseXML.parseError.reason?null:resp.responseXML}for(self._responseArgs.resp=resp,self._fulfilled=!0,fn(resp),self._successHandler(resp);self._fulfillmentHandlers.length>0;)resp=self._fulfillmentHandlers.shift()(resp);complete(resp)}function timedOut(){self._timedOut=!0,self.request.abort()}function error(n,s,a){for(n=self.request,self._responseArgs.resp=n,self._responseArgs.msg=s,self._responseArgs.t=a,self._erred=!0;self._errorHandlers.length>0;)self._errorHandlers.shift()(n,s,a);complete(n)}this.url="string"==typeof o?o:o.url,this.timeout=null,this._fulfilled=!1,this._successHandler=function(){},this._fulfillmentHandlers=[],this._errorHandlers=[],this._completeHandlers=[],this._erred=!1,this._responseArgs={};var self=this;fn=fn||function(){},o.timeout&&(this.timeout=setTimeout(function(){timedOut()},o.timeout)),o.success&&(this._successHandler=function(){o.success.apply(o,arguments)}),o.error&&this._errorHandlers.push(function(){o.error.apply(o,arguments)}),o.complete&&this._completeHandlers.push(function(){o.complete.apply(o,arguments)}),this.request=getRequest.call(this,success,error)}function reqwest(n,s){return new Reqwest(n,s)}function normalize(n){return n?n.replace(/\r?\n/g,"\r\n"):""}function serial(n,s){var a,t,e,p,o=n.name,c=n.tagName.toLowerCase(),u=function(n){n&&!n.disabled&&s(o,normalize(n.attributes.value&&n.attributes.value.specified?n.value:n.text))};if(!n.disabled&&o)switch(c){case"input":/reset|button|image|file/i.test(n.type)||(a=/checkbox/i.test(n.type),t=/radio/i.test(n.type),e=n.value,(!(a||t)||n.checked)&&s(o,normalize(a&&""===e?"on":e)));break;case"textarea":s(o,normalize(n.value));break;case"select":if("select-one"===n.type.toLowerCase())u(n.selectedIndex>=0?n.options[n.selectedIndex]:null);else for(p=0;n.length&&p<n.length;p++)n.options[p].selected&&u(n.options[p])}}function eachFormElement(){var n,s,a=this,t=function(n,s){var t,e,p;for(t=0;t<s.length;t++)for(p=n[byTag](s[t]),e=0;e<p.length;e++)serial(p[e],a)};for(s=0;s<arguments.length;s++)n=arguments[s],/input|select|textarea/i.test(n.tagName)&&serial(n,a),t(n,["input","select","textarea"])}function serializeQueryString(){return reqwest.toQueryString(reqwest.serializeArray.apply(null,arguments))}function serializeHash(){var n={};return eachFormElement.apply(function(s,a){s in n?(n[s]&&!isArray(n[s])&&(n[s]=[n[s]]),n[s].push(a)):n[s]=a},arguments),n}function buildParams(n,s,a,t){var e,p,o,c=/\[\]$/;if(isArray(s))for(p=0;s&&p<s.length;p++)o=s[p],a||c.test(n)?t(n,o):buildParams(n+"["+("object"==typeof o?p:"")+"]",o,a,t);else if(s&&"[object Object]"===s.toString())for(e in s)buildParams(n+"["+e+"]",s[e],a,t);else t(n,s)}var context=this;if("window"in context)var doc=document,byTag="getElementsByTagName",head=doc[byTag]("head")[0];else{var XHR2;try{XHR2=__webpack_require__(1564)}catch(ex){throw new Error("Peer dependency `xhr2` required! Please npm install xhr2")}}var httpsRe=/^http/,protocolRe=/(^\w+):\/\//,twoHundo=/^(20\d|1223)$/,readyState="readyState",contentType="Content-Type",requestedWith="X-Requested-With",uniqid=0,callbackPrefix="reqwest_"+ +new Date,lastValue,xmlHttpRequest="XMLHttpRequest",xDomainRequest="XDomainRequest",noop=function(){},isArray="function"==typeof Array.isArray?Array.isArray:function(n){return n instanceof Array},defaultHeaders={contentType:"application/x-www-form-urlencoded",requestedWith:xmlHttpRequest,accept:{"*":"text/javascript, text/html, application/xml, text/xml, */*",xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript",js:"application/javascript, text/javascript"}},xhr=function(n){if(n.crossOrigin===!0){var s=context[xmlHttpRequest]?new XMLHttpRequest:null;if(s&&"withCredentials"in s)return s;if(context[xDomainRequest])return new XDomainRequest;throw new Error("Browser does not support cross-origin requests")}return context[xmlHttpRequest]?new XMLHttpRequest:XHR2?new XHR2:new ActiveXObject("Microsoft.XMLHTTP")},globalSetupOptions={dataFilter:function(n){return n}};return Reqwest.prototype={abort:function(){this._aborted=!0,this.request.abort()},retry:function(){init.call(this,this.o,this.fn)},then:function(n,s){return n=n||function(){},s=s||function(){},this._fulfilled?this._responseArgs.resp=n(this._responseArgs.resp):this._erred?s(this._responseArgs.resp,this._responseArgs.msg,this._responseArgs.t):(this._fulfillmentHandlers.push(n),this._errorHandlers.push(s)),this},always:function(n){return this._fulfilled||this._erred?n(this._responseArgs.resp):this._completeHandlers.push(n),this},fail:function(n){return this._erred?n(this._responseArgs.resp,this._responseArgs.msg,this._responseArgs.t):this._errorHandlers.push(n),this},"catch":function(n){return this.fail(n)}},reqwest.serializeArray=function(){var n=[];return eachFormElement.apply(function(s,a){n.push({name:s,value:a})},arguments),n},reqwest.serialize=function(){if(0===arguments.length)return"";var n,s,a=Array.prototype.slice.call(arguments,0);return n=a.pop(),n&&n.nodeType&&a.push(n)&&(n=null),n&&(n=n.type),s="map"==n?serializeHash:"array"==n?reqwest.serializeArray:serializeQueryString,s.apply(null,a)},reqwest.toQueryString=function(n,s){var a,t,e=s||!1,p=[],o=encodeURIComponent,c=function(n,s){s="function"==typeof s?s():null==s?"":s,p[p.length]=o(n)+"="+o(s)};if(isArray(n))for(t=0;n&&t<n.length;t++)c(n[t].name,n[t].value);else for(a in n)n.hasOwnProperty(a)&&buildParams(a,n[a],e,c);return p.join("&").replace(/%20/g,"+")},reqwest.getcallbackPrefix=function(){return callbackPrefix},reqwest.compat=function(n,s){return n&&(n.type&&(n.method=n.type)&&delete n.type,n.dataType&&(n.type=n.dataType),n.jsonpCallback&&(n.jsonpCallbackName=n.jsonpCallback)&&delete n.jsonpCallback,n.jsonp&&(n.jsonpCallback=n.jsonp)),new Reqwest(n,s)},reqwest.ajaxSetup=function(n){n=n||{};for(var s in n)globalSetupOptions[s]=n[s]},reqwest})},1564:function(n,s){}});
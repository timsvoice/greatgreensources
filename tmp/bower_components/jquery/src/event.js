define(["./core","./var/strundefined","./var/rnotwhite","./var/hasOwn","./var/slice","./event/support","./data/var/data_priv","./core/init","./data/accepts","./selector"],function(e,t,n,i,r,o,a){function s(){return!0}function l(){return!1}function p(){try{return document.activeElement}catch(e){}}var u=/^key/,c=/^(?:mouse|pointer|contextmenu)|click/,d=/^(?:focusinfocus|focusoutblur)$/,f=/^([^.]*)(?:\.(.+)|)$/;return e.event={global:{},add:function(i,r,o,s,l){var p,u,c,d,h,g,v,m,y,b,T,w=a.get(i);if(w)for(o.handler&&(p=o,o=p.handler,l=p.selector),o.guid||(o.guid=e.guid++),(d=w.events)||(d=w.events={}),(u=w.handle)||(u=w.handle=function(n){return typeof e!==t&&e.event.triggered!==n.type?e.event.dispatch.apply(i,arguments):void 0}),r=(r||"").match(n)||[""],h=r.length;h--;)c=f.exec(r[h])||[],y=T=c[1],b=(c[2]||"").split(".").sort(),y&&(v=e.event.special[y]||{},y=(l?v.delegateType:v.bindType)||y,v=e.event.special[y]||{},g=e.extend({type:y,origType:T,data:s,handler:o,guid:o.guid,selector:l,needsContext:l&&e.expr.match.needsContext.test(l),namespace:b.join(".")},p),(m=d[y])||(m=d[y]=[],m.delegateCount=0,v.setup&&v.setup.call(i,s,b,u)!==!1||i.addEventListener&&i.addEventListener(y,u,!1)),v.add&&(v.add.call(i,g),g.handler.guid||(g.handler.guid=o.guid)),l?m.splice(m.delegateCount++,0,g):m.push(g),e.event.global[y]=!0)},remove:function(t,i,r,o,s){var l,p,u,c,d,h,g,v,m,y,b,T=a.hasData(t)&&a.get(t);if(T&&(c=T.events)){for(i=(i||"").match(n)||[""],d=i.length;d--;)if(u=f.exec(i[d])||[],m=b=u[1],y=(u[2]||"").split(".").sort(),m){for(g=e.event.special[m]||{},m=(o?g.delegateType:g.bindType)||m,v=c[m]||[],u=u[2]&&new RegExp("(^|\\.)"+y.join("\\.(?:.*\\.|)")+"(\\.|$)"),p=l=v.length;l--;)h=v[l],!s&&b!==h.origType||r&&r.guid!==h.guid||u&&!u.test(h.namespace)||o&&o!==h.selector&&("**"!==o||!h.selector)||(v.splice(l,1),h.selector&&v.delegateCount--,g.remove&&g.remove.call(t,h));p&&!v.length&&(g.teardown&&g.teardown.call(t,y,T.handle)!==!1||e.removeEvent(t,m,T.handle),delete c[m])}else for(m in c)e.event.remove(t,m+i[d],r,o,!0);e.isEmptyObject(c)&&(delete T.handle,a.remove(t,"events"))}},trigger:function(t,n,r,o){var s,l,p,u,c,f,h,g=[r||document],v=i.call(t,"type")?t.type:t,m=i.call(t,"namespace")?t.namespace.split("."):[];if(l=p=r=r||document,3!==r.nodeType&&8!==r.nodeType&&!d.test(v+e.event.triggered)&&(v.indexOf(".")>=0&&(m=v.split("."),v=m.shift(),m.sort()),c=v.indexOf(":")<0&&"on"+v,t=t[e.expando]?t:new e.Event(v,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=m.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:e.makeArray(n,[t]),h=e.event.special[v]||{},o||!h.trigger||h.trigger.apply(r,n)!==!1)){if(!o&&!h.noBubble&&!e.isWindow(r)){for(u=h.delegateType||v,d.test(u+v)||(l=l.parentNode);l;l=l.parentNode)g.push(l),p=l;p===(r.ownerDocument||document)&&g.push(p.defaultView||p.parentWindow||window)}for(s=0;(l=g[s++])&&!t.isPropagationStopped();)t.type=s>1?u:h.bindType||v,f=(a.get(l,"events")||{})[t.type]&&a.get(l,"handle"),f&&f.apply(l,n),f=c&&l[c],f&&f.apply&&e.acceptData(l)&&(t.result=f.apply(l,n),t.result===!1&&t.preventDefault());return t.type=v,o||t.isDefaultPrevented()||h._default&&h._default.apply(g.pop(),n)!==!1||!e.acceptData(r)||c&&e.isFunction(r[v])&&!e.isWindow(r)&&(p=r[c],p&&(r[c]=null),e.event.triggered=v,r[v](),e.event.triggered=void 0,p&&(r[c]=p)),t.result}},dispatch:function(t){t=e.event.fix(t);var n,i,o,s,l,p=[],u=r.call(arguments),c=(a.get(this,"events")||{})[t.type]||[],d=e.event.special[t.type]||{};if(u[0]=t,t.delegateTarget=this,!d.preDispatch||d.preDispatch.call(this,t)!==!1){for(p=e.event.handlers.call(this,t,c),n=0;(s=p[n++])&&!t.isPropagationStopped();)for(t.currentTarget=s.elem,i=0;(l=s.handlers[i++])&&!t.isImmediatePropagationStopped();)(!t.namespace_re||t.namespace_re.test(l.namespace))&&(t.handleObj=l,t.data=l.data,o=((e.event.special[l.origType]||{}).handle||l.handler).apply(s.elem,u),void 0!==o&&(t.result=o)===!1&&(t.preventDefault(),t.stopPropagation()));return d.postDispatch&&d.postDispatch.call(this,t),t.result}},handlers:function(t,n){var i,r,o,a,s=[],l=n.delegateCount,p=t.target;if(l&&p.nodeType&&(!t.button||"click"!==t.type))for(;p!==this;p=p.parentNode||this)if(p.disabled!==!0||"click"!==t.type){for(r=[],i=0;l>i;i++)a=n[i],o=a.selector+" ",void 0===r[o]&&(r[o]=a.needsContext?e(o,this).index(p)>=0:e.find(o,this,null,[p]).length),r[o]&&r.push(a);r.length&&s.push({elem:p,handlers:r})}return l<n.length&&s.push({elem:this,handlers:n.slice(l)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,r,o=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||document,i=n.documentElement,r=n.body,e.pageX=t.clientX+(i&&i.scrollLeft||r&&r.scrollLeft||0)-(i&&i.clientLeft||r&&r.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||r&&r.scrollTop||0)-(i&&i.clientTop||r&&r.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(t){if(t[e.expando])return t;var n,i,r,o=t.type,a=t,s=this.fixHooks[o];for(s||(this.fixHooks[o]=s=c.test(o)?this.mouseHooks:u.test(o)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,t=new e.Event(a),n=r.length;n--;)i=r[n],t[i]=a[i];return t.target||(t.target=document),3===t.target.nodeType&&(t.target=t.target.parentNode),s.filter?s.filter(t,a):t},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==p()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===p()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&e.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(t){return e.nodeName(t.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(t,n,i,r){var o=e.extend(new e.Event,i,{type:t,isSimulated:!0,originalEvent:{}});r?e.event.trigger(o,null,n):e.event.dispatch.call(n,o),o.isDefaultPrevented()&&i.preventDefault()}},e.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},e.Event=function(t,n){return this instanceof e.Event?(t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&t.returnValue===!1?s:l):this.type=t,n&&e.extend(this,n),this.timeStamp=t&&t.timeStamp||e.now(),this[e.expando]=!0,void 0):new e.Event(t,n)},e.Event.prototype={isDefaultPrevented:l,isPropagationStopped:l,isImmediatePropagationStopped:l,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=s,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=s,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=s,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},e.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,n){e.event.special[t]={delegateType:n,bindType:n,handle:function(t){var i,r=this,o=t.relatedTarget,a=t.handleObj;return(!o||o!==r&&!e.contains(r,o))&&(t.type=a.origType,i=a.handler.apply(this,arguments),t.type=n),i}}}),o.focusinBubbles||e.each({focus:"focusin",blur:"focusout"},function(t,n){var i=function(t){e.event.simulate(n,t.target,e.event.fix(t),!0)};e.event.special[n]={setup:function(){var e=this.ownerDocument||this,r=a.access(e,n);r||e.addEventListener(t,i,!0),a.access(e,n,(r||0)+1)},teardown:function(){var e=this.ownerDocument||this,r=a.access(e,n)-1;r?a.access(e,n,r):(e.removeEventListener(t,i,!0),a.remove(e,n))}}}),e.fn.extend({on:function(t,n,i,r,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(i=i||n,n=void 0);for(s in t)this.on(s,n,i,t[s],o);return this}if(null==i&&null==r?(r=n,i=n=void 0):null==r&&("string"==typeof n?(r=i,i=void 0):(r=i,i=n,n=void 0)),r===!1)r=l;else if(!r)return this;return 1===o&&(a=r,r=function(t){return e().off(t),a.apply(this,arguments)},r.guid=a.guid||(a.guid=e.guid++)),this.each(function(){e.event.add(this,t,r,i,n)})},one:function(e,t,n,i){return this.on(e,t,n,i,1)},off:function(t,n,i){var r,o;if(t&&t.preventDefault&&t.handleObj)return r=t.handleObj,e(t.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof t){for(o in t)this.off(o,n,t[o]);return this}return(n===!1||"function"==typeof n)&&(i=n,n=void 0),i===!1&&(i=l),this.each(function(){e.event.remove(this,t,i,n)})},trigger:function(t,n){return this.each(function(){e.event.trigger(t,n,this)})},triggerHandler:function(t,n){var i=this[0];return i?e.event.trigger(t,n,i,!0):void 0}}),e});
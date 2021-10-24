goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_48169 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_48169(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_48176 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_48176(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__46920 = coll;
var G__46921 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__46920,G__46921) : shadow.dom.lazy_native_coll_seq.call(null,G__46920,G__46921));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__46962 = arguments.length;
switch (G__46962) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__46974 = arguments.length;
switch (G__46974) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__46978 = arguments.length;
switch (G__46978) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__46988 = arguments.length;
switch (G__46988) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47000 = arguments.length;
switch (G__47000) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47019 = arguments.length;
switch (G__47019) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47027){if((e47027 instanceof Object)){
var e = e47027;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47027;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47041 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47042 = null;
var count__47043 = (0);
var i__47044 = (0);
while(true){
if((i__47044 < count__47043)){
var el = chunk__47042.cljs$core$IIndexed$_nth$arity$2(null,i__47044);
var handler_48232__$1 = ((function (seq__47041,chunk__47042,count__47043,i__47044,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47041,chunk__47042,count__47043,i__47044,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48232__$1);


var G__48235 = seq__47041;
var G__48236 = chunk__47042;
var G__48237 = count__47043;
var G__48238 = (i__47044 + (1));
seq__47041 = G__48235;
chunk__47042 = G__48236;
count__47043 = G__48237;
i__47044 = G__48238;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47041);
if(temp__5753__auto__){
var seq__47041__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47041__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47041__$1);
var G__48239 = cljs.core.chunk_rest(seq__47041__$1);
var G__48240 = c__4556__auto__;
var G__48241 = cljs.core.count(c__4556__auto__);
var G__48242 = (0);
seq__47041 = G__48239;
chunk__47042 = G__48240;
count__47043 = G__48241;
i__47044 = G__48242;
continue;
} else {
var el = cljs.core.first(seq__47041__$1);
var handler_48243__$1 = ((function (seq__47041,chunk__47042,count__47043,i__47044,el,seq__47041__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47041,chunk__47042,count__47043,i__47044,el,seq__47041__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48243__$1);


var G__48246 = cljs.core.next(seq__47041__$1);
var G__48247 = null;
var G__48248 = (0);
var G__48249 = (0);
seq__47041 = G__48246;
chunk__47042 = G__48247;
count__47043 = G__48248;
i__47044 = G__48249;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47069 = arguments.length;
switch (G__47069) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47084 = cljs.core.seq(events);
var chunk__47085 = null;
var count__47086 = (0);
var i__47087 = (0);
while(true){
if((i__47087 < count__47086)){
var vec__47108 = chunk__47085.cljs$core$IIndexed$_nth$arity$2(null,i__47087);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47108,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47108,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48261 = seq__47084;
var G__48262 = chunk__47085;
var G__48263 = count__47086;
var G__48264 = (i__47087 + (1));
seq__47084 = G__48261;
chunk__47085 = G__48262;
count__47086 = G__48263;
i__47087 = G__48264;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47084);
if(temp__5753__auto__){
var seq__47084__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47084__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47084__$1);
var G__48265 = cljs.core.chunk_rest(seq__47084__$1);
var G__48266 = c__4556__auto__;
var G__48267 = cljs.core.count(c__4556__auto__);
var G__48268 = (0);
seq__47084 = G__48265;
chunk__47085 = G__48266;
count__47086 = G__48267;
i__47087 = G__48268;
continue;
} else {
var vec__47120 = cljs.core.first(seq__47084__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47120,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47120,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48271 = cljs.core.next(seq__47084__$1);
var G__48272 = null;
var G__48273 = (0);
var G__48274 = (0);
seq__47084 = G__48271;
chunk__47085 = G__48272;
count__47086 = G__48273;
i__47087 = G__48274;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47125 = cljs.core.seq(styles);
var chunk__47126 = null;
var count__47127 = (0);
var i__47128 = (0);
while(true){
if((i__47128 < count__47127)){
var vec__47145 = chunk__47126.cljs$core$IIndexed$_nth$arity$2(null,i__47128);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47145,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47145,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48283 = seq__47125;
var G__48284 = chunk__47126;
var G__48285 = count__47127;
var G__48286 = (i__47128 + (1));
seq__47125 = G__48283;
chunk__47126 = G__48284;
count__47127 = G__48285;
i__47128 = G__48286;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47125);
if(temp__5753__auto__){
var seq__47125__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47125__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47125__$1);
var G__48293 = cljs.core.chunk_rest(seq__47125__$1);
var G__48294 = c__4556__auto__;
var G__48295 = cljs.core.count(c__4556__auto__);
var G__48296 = (0);
seq__47125 = G__48293;
chunk__47126 = G__48294;
count__47127 = G__48295;
i__47128 = G__48296;
continue;
} else {
var vec__47155 = cljs.core.first(seq__47125__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47155,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47155,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48303 = cljs.core.next(seq__47125__$1);
var G__48304 = null;
var G__48305 = (0);
var G__48306 = (0);
seq__47125 = G__48303;
chunk__47126 = G__48304;
count__47127 = G__48305;
i__47128 = G__48306;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47161_48308 = key;
var G__47161_48309__$1 = (((G__47161_48308 instanceof cljs.core.Keyword))?G__47161_48308.fqn:null);
switch (G__47161_48309__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48313 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_48313,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_48313,"aria-");
}
})())){
el.setAttribute(ks_48313,value);
} else {
(el[ks_48313] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47185){
var map__47186 = p__47185;
var map__47186__$1 = (((((!((map__47186 == null))))?(((((map__47186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47186):map__47186);
var props = map__47186__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47186__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47192 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47192,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47192,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47192,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47195 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47195,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47195;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47198 = arguments.length;
switch (G__47198) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47203){
var vec__47204 = p__47203;
var seq__47205 = cljs.core.seq(vec__47204);
var first__47206 = cljs.core.first(seq__47205);
var seq__47205__$1 = cljs.core.next(seq__47205);
var nn = first__47206;
var first__47206__$1 = cljs.core.first(seq__47205__$1);
var seq__47205__$2 = cljs.core.next(seq__47205__$1);
var np = first__47206__$1;
var nc = seq__47205__$2;
var node = vec__47204;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47210 = nn;
var G__47211 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47210,G__47211) : create_fn.call(null,G__47210,G__47211));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47213 = nn;
var G__47214 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47213,G__47214) : create_fn.call(null,G__47213,G__47214));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47218 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47218,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47218,(1),null);
var seq__47222_48367 = cljs.core.seq(node_children);
var chunk__47223_48368 = null;
var count__47224_48369 = (0);
var i__47225_48370 = (0);
while(true){
if((i__47225_48370 < count__47224_48369)){
var child_struct_48371 = chunk__47223_48368.cljs$core$IIndexed$_nth$arity$2(null,i__47225_48370);
var children_48372 = shadow.dom.dom_node(child_struct_48371);
if(cljs.core.seq_QMARK_(children_48372)){
var seq__47272_48373 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48372));
var chunk__47274_48374 = null;
var count__47275_48375 = (0);
var i__47276_48376 = (0);
while(true){
if((i__47276_48376 < count__47275_48375)){
var child_48381 = chunk__47274_48374.cljs$core$IIndexed$_nth$arity$2(null,i__47276_48376);
if(cljs.core.truth_(child_48381)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48381);


var G__48382 = seq__47272_48373;
var G__48383 = chunk__47274_48374;
var G__48384 = count__47275_48375;
var G__48385 = (i__47276_48376 + (1));
seq__47272_48373 = G__48382;
chunk__47274_48374 = G__48383;
count__47275_48375 = G__48384;
i__47276_48376 = G__48385;
continue;
} else {
var G__48389 = seq__47272_48373;
var G__48390 = chunk__47274_48374;
var G__48391 = count__47275_48375;
var G__48392 = (i__47276_48376 + (1));
seq__47272_48373 = G__48389;
chunk__47274_48374 = G__48390;
count__47275_48375 = G__48391;
i__47276_48376 = G__48392;
continue;
}
} else {
var temp__5753__auto___48393 = cljs.core.seq(seq__47272_48373);
if(temp__5753__auto___48393){
var seq__47272_48398__$1 = temp__5753__auto___48393;
if(cljs.core.chunked_seq_QMARK_(seq__47272_48398__$1)){
var c__4556__auto___48399 = cljs.core.chunk_first(seq__47272_48398__$1);
var G__48400 = cljs.core.chunk_rest(seq__47272_48398__$1);
var G__48401 = c__4556__auto___48399;
var G__48402 = cljs.core.count(c__4556__auto___48399);
var G__48403 = (0);
seq__47272_48373 = G__48400;
chunk__47274_48374 = G__48401;
count__47275_48375 = G__48402;
i__47276_48376 = G__48403;
continue;
} else {
var child_48404 = cljs.core.first(seq__47272_48398__$1);
if(cljs.core.truth_(child_48404)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48404);


var G__48406 = cljs.core.next(seq__47272_48398__$1);
var G__48407 = null;
var G__48408 = (0);
var G__48409 = (0);
seq__47272_48373 = G__48406;
chunk__47274_48374 = G__48407;
count__47275_48375 = G__48408;
i__47276_48376 = G__48409;
continue;
} else {
var G__48410 = cljs.core.next(seq__47272_48398__$1);
var G__48411 = null;
var G__48412 = (0);
var G__48413 = (0);
seq__47272_48373 = G__48410;
chunk__47274_48374 = G__48411;
count__47275_48375 = G__48412;
i__47276_48376 = G__48413;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48372);
}


var G__48415 = seq__47222_48367;
var G__48416 = chunk__47223_48368;
var G__48417 = count__47224_48369;
var G__48418 = (i__47225_48370 + (1));
seq__47222_48367 = G__48415;
chunk__47223_48368 = G__48416;
count__47224_48369 = G__48417;
i__47225_48370 = G__48418;
continue;
} else {
var temp__5753__auto___48423 = cljs.core.seq(seq__47222_48367);
if(temp__5753__auto___48423){
var seq__47222_48424__$1 = temp__5753__auto___48423;
if(cljs.core.chunked_seq_QMARK_(seq__47222_48424__$1)){
var c__4556__auto___48425 = cljs.core.chunk_first(seq__47222_48424__$1);
var G__48426 = cljs.core.chunk_rest(seq__47222_48424__$1);
var G__48427 = c__4556__auto___48425;
var G__48428 = cljs.core.count(c__4556__auto___48425);
var G__48429 = (0);
seq__47222_48367 = G__48426;
chunk__47223_48368 = G__48427;
count__47224_48369 = G__48428;
i__47225_48370 = G__48429;
continue;
} else {
var child_struct_48430 = cljs.core.first(seq__47222_48424__$1);
var children_48431 = shadow.dom.dom_node(child_struct_48430);
if(cljs.core.seq_QMARK_(children_48431)){
var seq__47290_48432 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48431));
var chunk__47292_48433 = null;
var count__47293_48434 = (0);
var i__47294_48435 = (0);
while(true){
if((i__47294_48435 < count__47293_48434)){
var child_48438 = chunk__47292_48433.cljs$core$IIndexed$_nth$arity$2(null,i__47294_48435);
if(cljs.core.truth_(child_48438)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48438);


var G__48440 = seq__47290_48432;
var G__48441 = chunk__47292_48433;
var G__48442 = count__47293_48434;
var G__48443 = (i__47294_48435 + (1));
seq__47290_48432 = G__48440;
chunk__47292_48433 = G__48441;
count__47293_48434 = G__48442;
i__47294_48435 = G__48443;
continue;
} else {
var G__48444 = seq__47290_48432;
var G__48445 = chunk__47292_48433;
var G__48446 = count__47293_48434;
var G__48447 = (i__47294_48435 + (1));
seq__47290_48432 = G__48444;
chunk__47292_48433 = G__48445;
count__47293_48434 = G__48446;
i__47294_48435 = G__48447;
continue;
}
} else {
var temp__5753__auto___48448__$1 = cljs.core.seq(seq__47290_48432);
if(temp__5753__auto___48448__$1){
var seq__47290_48450__$1 = temp__5753__auto___48448__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47290_48450__$1)){
var c__4556__auto___48451 = cljs.core.chunk_first(seq__47290_48450__$1);
var G__48453 = cljs.core.chunk_rest(seq__47290_48450__$1);
var G__48454 = c__4556__auto___48451;
var G__48455 = cljs.core.count(c__4556__auto___48451);
var G__48456 = (0);
seq__47290_48432 = G__48453;
chunk__47292_48433 = G__48454;
count__47293_48434 = G__48455;
i__47294_48435 = G__48456;
continue;
} else {
var child_48460 = cljs.core.first(seq__47290_48450__$1);
if(cljs.core.truth_(child_48460)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48460);


var G__48461 = cljs.core.next(seq__47290_48450__$1);
var G__48462 = null;
var G__48463 = (0);
var G__48464 = (0);
seq__47290_48432 = G__48461;
chunk__47292_48433 = G__48462;
count__47293_48434 = G__48463;
i__47294_48435 = G__48464;
continue;
} else {
var G__48465 = cljs.core.next(seq__47290_48450__$1);
var G__48466 = null;
var G__48467 = (0);
var G__48468 = (0);
seq__47290_48432 = G__48465;
chunk__47292_48433 = G__48466;
count__47293_48434 = G__48467;
i__47294_48435 = G__48468;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48431);
}


var G__48469 = cljs.core.next(seq__47222_48424__$1);
var G__48470 = null;
var G__48471 = (0);
var G__48472 = (0);
seq__47222_48367 = G__48469;
chunk__47223_48368 = G__48470;
count__47224_48369 = G__48471;
i__47225_48370 = G__48472;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47318 = cljs.core.seq(node);
var chunk__47319 = null;
var count__47320 = (0);
var i__47321 = (0);
while(true){
if((i__47321 < count__47320)){
var n = chunk__47319.cljs$core$IIndexed$_nth$arity$2(null,i__47321);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48484 = seq__47318;
var G__48485 = chunk__47319;
var G__48486 = count__47320;
var G__48487 = (i__47321 + (1));
seq__47318 = G__48484;
chunk__47319 = G__48485;
count__47320 = G__48486;
i__47321 = G__48487;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47318);
if(temp__5753__auto__){
var seq__47318__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47318__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47318__$1);
var G__48488 = cljs.core.chunk_rest(seq__47318__$1);
var G__48489 = c__4556__auto__;
var G__48490 = cljs.core.count(c__4556__auto__);
var G__48491 = (0);
seq__47318 = G__48488;
chunk__47319 = G__48489;
count__47320 = G__48490;
i__47321 = G__48491;
continue;
} else {
var n = cljs.core.first(seq__47318__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48492 = cljs.core.next(seq__47318__$1);
var G__48493 = null;
var G__48494 = (0);
var G__48495 = (0);
seq__47318 = G__48492;
chunk__47319 = G__48493;
count__47320 = G__48494;
i__47321 = G__48495;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47345 = arguments.length;
switch (G__47345) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__47356 = arguments.length;
switch (G__47356) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__47365 = arguments.length;
switch (G__47365) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48518 = arguments.length;
var i__4737__auto___48519 = (0);
while(true){
if((i__4737__auto___48519 < len__4736__auto___48518)){
args__4742__auto__.push((arguments[i__4737__auto___48519]));

var G__48520 = (i__4737__auto___48519 + (1));
i__4737__auto___48519 = G__48520;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__47384_48523 = cljs.core.seq(nodes);
var chunk__47385_48524 = null;
var count__47386_48525 = (0);
var i__47387_48526 = (0);
while(true){
if((i__47387_48526 < count__47386_48525)){
var node_48532 = chunk__47385_48524.cljs$core$IIndexed$_nth$arity$2(null,i__47387_48526);
fragment.appendChild(shadow.dom._to_dom(node_48532));


var G__48536 = seq__47384_48523;
var G__48537 = chunk__47385_48524;
var G__48538 = count__47386_48525;
var G__48539 = (i__47387_48526 + (1));
seq__47384_48523 = G__48536;
chunk__47385_48524 = G__48537;
count__47386_48525 = G__48538;
i__47387_48526 = G__48539;
continue;
} else {
var temp__5753__auto___48540 = cljs.core.seq(seq__47384_48523);
if(temp__5753__auto___48540){
var seq__47384_48543__$1 = temp__5753__auto___48540;
if(cljs.core.chunked_seq_QMARK_(seq__47384_48543__$1)){
var c__4556__auto___48546 = cljs.core.chunk_first(seq__47384_48543__$1);
var G__48547 = cljs.core.chunk_rest(seq__47384_48543__$1);
var G__48548 = c__4556__auto___48546;
var G__48549 = cljs.core.count(c__4556__auto___48546);
var G__48550 = (0);
seq__47384_48523 = G__48547;
chunk__47385_48524 = G__48548;
count__47386_48525 = G__48549;
i__47387_48526 = G__48550;
continue;
} else {
var node_48556 = cljs.core.first(seq__47384_48543__$1);
fragment.appendChild(shadow.dom._to_dom(node_48556));


var G__48557 = cljs.core.next(seq__47384_48543__$1);
var G__48558 = null;
var G__48559 = (0);
var G__48560 = (0);
seq__47384_48523 = G__48557;
chunk__47385_48524 = G__48558;
count__47386_48525 = G__48559;
i__47387_48526 = G__48560;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47380){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47380));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47400_48562 = cljs.core.seq(scripts);
var chunk__47401_48563 = null;
var count__47402_48564 = (0);
var i__47403_48565 = (0);
while(true){
if((i__47403_48565 < count__47402_48564)){
var vec__47418_48566 = chunk__47401_48563.cljs$core$IIndexed$_nth$arity$2(null,i__47403_48565);
var script_tag_48567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47418_48566,(0),null);
var script_body_48568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47418_48566,(1),null);
eval(script_body_48568);


var G__48569 = seq__47400_48562;
var G__48570 = chunk__47401_48563;
var G__48571 = count__47402_48564;
var G__48572 = (i__47403_48565 + (1));
seq__47400_48562 = G__48569;
chunk__47401_48563 = G__48570;
count__47402_48564 = G__48571;
i__47403_48565 = G__48572;
continue;
} else {
var temp__5753__auto___48573 = cljs.core.seq(seq__47400_48562);
if(temp__5753__auto___48573){
var seq__47400_48574__$1 = temp__5753__auto___48573;
if(cljs.core.chunked_seq_QMARK_(seq__47400_48574__$1)){
var c__4556__auto___48575 = cljs.core.chunk_first(seq__47400_48574__$1);
var G__48576 = cljs.core.chunk_rest(seq__47400_48574__$1);
var G__48577 = c__4556__auto___48575;
var G__48578 = cljs.core.count(c__4556__auto___48575);
var G__48579 = (0);
seq__47400_48562 = G__48576;
chunk__47401_48563 = G__48577;
count__47402_48564 = G__48578;
i__47403_48565 = G__48579;
continue;
} else {
var vec__47426_48580 = cljs.core.first(seq__47400_48574__$1);
var script_tag_48581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47426_48580,(0),null);
var script_body_48582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47426_48580,(1),null);
eval(script_body_48582);


var G__48583 = cljs.core.next(seq__47400_48574__$1);
var G__48584 = null;
var G__48585 = (0);
var G__48586 = (0);
seq__47400_48562 = G__48583;
chunk__47401_48563 = G__48584;
count__47402_48564 = G__48585;
i__47403_48565 = G__48586;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47431){
var vec__47434 = p__47431;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47434,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47434,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__47453 = arguments.length;
switch (G__47453) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__47476 = cljs.core.seq(style_keys);
var chunk__47477 = null;
var count__47478 = (0);
var i__47479 = (0);
while(true){
if((i__47479 < count__47478)){
var it = chunk__47477.cljs$core$IIndexed$_nth$arity$2(null,i__47479);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48605 = seq__47476;
var G__48606 = chunk__47477;
var G__48607 = count__47478;
var G__48608 = (i__47479 + (1));
seq__47476 = G__48605;
chunk__47477 = G__48606;
count__47478 = G__48607;
i__47479 = G__48608;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47476);
if(temp__5753__auto__){
var seq__47476__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47476__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47476__$1);
var G__48609 = cljs.core.chunk_rest(seq__47476__$1);
var G__48610 = c__4556__auto__;
var G__48611 = cljs.core.count(c__4556__auto__);
var G__48612 = (0);
seq__47476 = G__48609;
chunk__47477 = G__48610;
count__47478 = G__48611;
i__47479 = G__48612;
continue;
} else {
var it = cljs.core.first(seq__47476__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48613 = cljs.core.next(seq__47476__$1);
var G__48614 = null;
var G__48615 = (0);
var G__48616 = (0);
seq__47476 = G__48613;
chunk__47477 = G__48614;
count__47478 = G__48615;
i__47479 = G__48616;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47487,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47507 = k47487;
var G__47507__$1 = (((G__47507 instanceof cljs.core.Keyword))?G__47507.fqn:null);
switch (G__47507__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47487,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47512){
var vec__47513 = p__47512;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47513,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47513,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47486){
var self__ = this;
var G__47486__$1 = this;
return (new cljs.core.RecordIter((0),G__47486__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47488,other47489){
var self__ = this;
var this47488__$1 = this;
return (((!((other47489 == null)))) && ((this47488__$1.constructor === other47489.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47488__$1.x,other47489.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47488__$1.y,other47489.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47488__$1.__extmap,other47489.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47486){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47544 = cljs.core.keyword_identical_QMARK_;
var expr__47545 = k__4388__auto__;
if(cljs.core.truth_((pred__47544.cljs$core$IFn$_invoke$arity$2 ? pred__47544.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__47545) : pred__47544.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__47545)))){
return (new shadow.dom.Coordinate(G__47486,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47544.cljs$core$IFn$_invoke$arity$2 ? pred__47544.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__47545) : pred__47544.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__47545)))){
return (new shadow.dom.Coordinate(self__.x,G__47486,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47486),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47486){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__47486,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__47493){
var extmap__4419__auto__ = (function (){var G__47561 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47493,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__47493)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47561);
} else {
return G__47561;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__47493),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__47493),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47575,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47584 = k47575;
var G__47584__$1 = (((G__47584 instanceof cljs.core.Keyword))?G__47584.fqn:null);
switch (G__47584__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47575,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47588){
var vec__47590 = p__47588;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47590,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47590,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47574){
var self__ = this;
var G__47574__$1 = this;
return (new cljs.core.RecordIter((0),G__47574__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47576,other47577){
var self__ = this;
var this47576__$1 = this;
return (((!((other47577 == null)))) && ((this47576__$1.constructor === other47577.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47576__$1.w,other47577.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47576__$1.h,other47577.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47576__$1.__extmap,other47577.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47574){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47618 = cljs.core.keyword_identical_QMARK_;
var expr__47619 = k__4388__auto__;
if(cljs.core.truth_((pred__47618.cljs$core$IFn$_invoke$arity$2 ? pred__47618.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__47619) : pred__47618.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__47619)))){
return (new shadow.dom.Size(G__47574,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47618.cljs$core$IFn$_invoke$arity$2 ? pred__47618.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__47619) : pred__47618.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__47619)))){
return (new shadow.dom.Size(self__.w,G__47574,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47574),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47574){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__47574,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__47578){
var extmap__4419__auto__ = (function (){var G__47654 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47578,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__47578)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47654);
} else {
return G__47654;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__47578),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__47578),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__48702 = (i + (1));
var G__48703 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48702;
ret = G__48703;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47712){
var vec__47713 = p__47712;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47713,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47713,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__47733 = arguments.length;
switch (G__47733) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__48722 = ps;
var G__48723 = (i + (1));
el__$1 = G__48722;
i = G__48723;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__47824 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47824,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47824,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47824,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__47831_48729 = cljs.core.seq(props);
var chunk__47832_48730 = null;
var count__47833_48731 = (0);
var i__47834_48732 = (0);
while(true){
if((i__47834_48732 < count__47833_48731)){
var vec__47876_48735 = chunk__47832_48730.cljs$core$IIndexed$_nth$arity$2(null,i__47834_48732);
var k_48736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47876_48735,(0),null);
var v_48737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47876_48735,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_48736);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48736),v_48737);


var G__48741 = seq__47831_48729;
var G__48742 = chunk__47832_48730;
var G__48743 = count__47833_48731;
var G__48744 = (i__47834_48732 + (1));
seq__47831_48729 = G__48741;
chunk__47832_48730 = G__48742;
count__47833_48731 = G__48743;
i__47834_48732 = G__48744;
continue;
} else {
var temp__5753__auto___48745 = cljs.core.seq(seq__47831_48729);
if(temp__5753__auto___48745){
var seq__47831_48746__$1 = temp__5753__auto___48745;
if(cljs.core.chunked_seq_QMARK_(seq__47831_48746__$1)){
var c__4556__auto___48747 = cljs.core.chunk_first(seq__47831_48746__$1);
var G__48748 = cljs.core.chunk_rest(seq__47831_48746__$1);
var G__48749 = c__4556__auto___48747;
var G__48750 = cljs.core.count(c__4556__auto___48747);
var G__48751 = (0);
seq__47831_48729 = G__48748;
chunk__47832_48730 = G__48749;
count__47833_48731 = G__48750;
i__47834_48732 = G__48751;
continue;
} else {
var vec__47900_48753 = cljs.core.first(seq__47831_48746__$1);
var k_48754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47900_48753,(0),null);
var v_48755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47900_48753,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_48754);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48754),v_48755);


var G__48759 = cljs.core.next(seq__47831_48746__$1);
var G__48760 = null;
var G__48761 = (0);
var G__48762 = (0);
seq__47831_48729 = G__48759;
chunk__47832_48730 = G__48760;
count__47833_48731 = G__48761;
i__47834_48732 = G__48762;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__47932 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47932,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47932,(1),null);
var seq__47938_48768 = cljs.core.seq(node_children);
var chunk__47940_48769 = null;
var count__47941_48770 = (0);
var i__47942_48771 = (0);
while(true){
if((i__47942_48771 < count__47941_48770)){
var child_struct_48772 = chunk__47940_48769.cljs$core$IIndexed$_nth$arity$2(null,i__47942_48771);
if((!((child_struct_48772 == null)))){
if(typeof child_struct_48772 === 'string'){
var text_48773 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48773),child_struct_48772].join(''));
} else {
var children_48774 = shadow.dom.svg_node(child_struct_48772);
if(cljs.core.seq_QMARK_(children_48774)){
var seq__48016_48775 = cljs.core.seq(children_48774);
var chunk__48018_48776 = null;
var count__48019_48777 = (0);
var i__48020_48778 = (0);
while(true){
if((i__48020_48778 < count__48019_48777)){
var child_48780 = chunk__48018_48776.cljs$core$IIndexed$_nth$arity$2(null,i__48020_48778);
if(cljs.core.truth_(child_48780)){
node.appendChild(child_48780);


var G__48781 = seq__48016_48775;
var G__48782 = chunk__48018_48776;
var G__48783 = count__48019_48777;
var G__48784 = (i__48020_48778 + (1));
seq__48016_48775 = G__48781;
chunk__48018_48776 = G__48782;
count__48019_48777 = G__48783;
i__48020_48778 = G__48784;
continue;
} else {
var G__48786 = seq__48016_48775;
var G__48787 = chunk__48018_48776;
var G__48788 = count__48019_48777;
var G__48789 = (i__48020_48778 + (1));
seq__48016_48775 = G__48786;
chunk__48018_48776 = G__48787;
count__48019_48777 = G__48788;
i__48020_48778 = G__48789;
continue;
}
} else {
var temp__5753__auto___48790 = cljs.core.seq(seq__48016_48775);
if(temp__5753__auto___48790){
var seq__48016_48791__$1 = temp__5753__auto___48790;
if(cljs.core.chunked_seq_QMARK_(seq__48016_48791__$1)){
var c__4556__auto___48792 = cljs.core.chunk_first(seq__48016_48791__$1);
var G__48793 = cljs.core.chunk_rest(seq__48016_48791__$1);
var G__48794 = c__4556__auto___48792;
var G__48795 = cljs.core.count(c__4556__auto___48792);
var G__48796 = (0);
seq__48016_48775 = G__48793;
chunk__48018_48776 = G__48794;
count__48019_48777 = G__48795;
i__48020_48778 = G__48796;
continue;
} else {
var child_48797 = cljs.core.first(seq__48016_48791__$1);
if(cljs.core.truth_(child_48797)){
node.appendChild(child_48797);


var G__48798 = cljs.core.next(seq__48016_48791__$1);
var G__48799 = null;
var G__48800 = (0);
var G__48801 = (0);
seq__48016_48775 = G__48798;
chunk__48018_48776 = G__48799;
count__48019_48777 = G__48800;
i__48020_48778 = G__48801;
continue;
} else {
var G__48803 = cljs.core.next(seq__48016_48791__$1);
var G__48804 = null;
var G__48805 = (0);
var G__48806 = (0);
seq__48016_48775 = G__48803;
chunk__48018_48776 = G__48804;
count__48019_48777 = G__48805;
i__48020_48778 = G__48806;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48774);
}
}


var G__48808 = seq__47938_48768;
var G__48809 = chunk__47940_48769;
var G__48810 = count__47941_48770;
var G__48811 = (i__47942_48771 + (1));
seq__47938_48768 = G__48808;
chunk__47940_48769 = G__48809;
count__47941_48770 = G__48810;
i__47942_48771 = G__48811;
continue;
} else {
var G__48812 = seq__47938_48768;
var G__48813 = chunk__47940_48769;
var G__48814 = count__47941_48770;
var G__48815 = (i__47942_48771 + (1));
seq__47938_48768 = G__48812;
chunk__47940_48769 = G__48813;
count__47941_48770 = G__48814;
i__47942_48771 = G__48815;
continue;
}
} else {
var temp__5753__auto___48816 = cljs.core.seq(seq__47938_48768);
if(temp__5753__auto___48816){
var seq__47938_48821__$1 = temp__5753__auto___48816;
if(cljs.core.chunked_seq_QMARK_(seq__47938_48821__$1)){
var c__4556__auto___48823 = cljs.core.chunk_first(seq__47938_48821__$1);
var G__48824 = cljs.core.chunk_rest(seq__47938_48821__$1);
var G__48825 = c__4556__auto___48823;
var G__48826 = cljs.core.count(c__4556__auto___48823);
var G__48827 = (0);
seq__47938_48768 = G__48824;
chunk__47940_48769 = G__48825;
count__47941_48770 = G__48826;
i__47942_48771 = G__48827;
continue;
} else {
var child_struct_48832 = cljs.core.first(seq__47938_48821__$1);
if((!((child_struct_48832 == null)))){
if(typeof child_struct_48832 === 'string'){
var text_48834 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48834),child_struct_48832].join(''));
} else {
var children_48835 = shadow.dom.svg_node(child_struct_48832);
if(cljs.core.seq_QMARK_(children_48835)){
var seq__48042_48840 = cljs.core.seq(children_48835);
var chunk__48044_48841 = null;
var count__48045_48842 = (0);
var i__48046_48843 = (0);
while(true){
if((i__48046_48843 < count__48045_48842)){
var child_48845 = chunk__48044_48841.cljs$core$IIndexed$_nth$arity$2(null,i__48046_48843);
if(cljs.core.truth_(child_48845)){
node.appendChild(child_48845);


var G__48846 = seq__48042_48840;
var G__48847 = chunk__48044_48841;
var G__48848 = count__48045_48842;
var G__48849 = (i__48046_48843 + (1));
seq__48042_48840 = G__48846;
chunk__48044_48841 = G__48847;
count__48045_48842 = G__48848;
i__48046_48843 = G__48849;
continue;
} else {
var G__48850 = seq__48042_48840;
var G__48851 = chunk__48044_48841;
var G__48852 = count__48045_48842;
var G__48853 = (i__48046_48843 + (1));
seq__48042_48840 = G__48850;
chunk__48044_48841 = G__48851;
count__48045_48842 = G__48852;
i__48046_48843 = G__48853;
continue;
}
} else {
var temp__5753__auto___48855__$1 = cljs.core.seq(seq__48042_48840);
if(temp__5753__auto___48855__$1){
var seq__48042_48856__$1 = temp__5753__auto___48855__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48042_48856__$1)){
var c__4556__auto___48857 = cljs.core.chunk_first(seq__48042_48856__$1);
var G__48859 = cljs.core.chunk_rest(seq__48042_48856__$1);
var G__48860 = c__4556__auto___48857;
var G__48861 = cljs.core.count(c__4556__auto___48857);
var G__48862 = (0);
seq__48042_48840 = G__48859;
chunk__48044_48841 = G__48860;
count__48045_48842 = G__48861;
i__48046_48843 = G__48862;
continue;
} else {
var child_48863 = cljs.core.first(seq__48042_48856__$1);
if(cljs.core.truth_(child_48863)){
node.appendChild(child_48863);


var G__48864 = cljs.core.next(seq__48042_48856__$1);
var G__48865 = null;
var G__48866 = (0);
var G__48867 = (0);
seq__48042_48840 = G__48864;
chunk__48044_48841 = G__48865;
count__48045_48842 = G__48866;
i__48046_48843 = G__48867;
continue;
} else {
var G__48868 = cljs.core.next(seq__48042_48856__$1);
var G__48869 = null;
var G__48870 = (0);
var G__48871 = (0);
seq__48042_48840 = G__48868;
chunk__48044_48841 = G__48869;
count__48045_48842 = G__48870;
i__48046_48843 = G__48871;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48835);
}
}


var G__48874 = cljs.core.next(seq__47938_48821__$1);
var G__48875 = null;
var G__48876 = (0);
var G__48877 = (0);
seq__47938_48768 = G__48874;
chunk__47940_48769 = G__48875;
count__47941_48770 = G__48876;
i__47942_48771 = G__48877;
continue;
} else {
var G__48879 = cljs.core.next(seq__47938_48821__$1);
var G__48880 = null;
var G__48881 = (0);
var G__48882 = (0);
seq__47938_48768 = G__48879;
chunk__47940_48769 = G__48880;
count__47941_48770 = G__48881;
i__47942_48771 = G__48882;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48888 = arguments.length;
var i__4737__auto___48889 = (0);
while(true){
if((i__4737__auto___48889 < len__4736__auto___48888)){
args__4742__auto__.push((arguments[i__4737__auto___48889]));

var G__48890 = (i__4737__auto___48889 + (1));
i__4737__auto___48889 = G__48890;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48073){
var G__48074 = cljs.core.first(seq48073);
var seq48073__$1 = cljs.core.next(seq48073);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48074,seq48073__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48096 = arguments.length;
switch (G__48096) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__43979__auto___48902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43980__auto__ = (function (){var switch__43818__auto__ = (function (state_48115){
var state_val_48116 = (state_48115[(1)]);
if((state_val_48116 === (1))){
var state_48115__$1 = state_48115;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48115__$1,(2),once_or_cleanup);
} else {
if((state_val_48116 === (2))){
var inst_48112 = (state_48115[(2)]);
var inst_48113 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48115__$1 = (function (){var statearr_48123 = state_48115;
(statearr_48123[(7)] = inst_48112);

return statearr_48123;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48115__$1,inst_48113);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__43819__auto__ = null;
var shadow$dom$state_machine__43819__auto____0 = (function (){
var statearr_48126 = [null,null,null,null,null,null,null,null];
(statearr_48126[(0)] = shadow$dom$state_machine__43819__auto__);

(statearr_48126[(1)] = (1));

return statearr_48126;
});
var shadow$dom$state_machine__43819__auto____1 = (function (state_48115){
while(true){
var ret_value__43820__auto__ = (function (){try{while(true){
var result__43821__auto__ = switch__43818__auto__(state_48115);
if(cljs.core.keyword_identical_QMARK_(result__43821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43821__auto__;
}
break;
}
}catch (e48129){var ex__43822__auto__ = e48129;
var statearr_48131_48920 = state_48115;
(statearr_48131_48920[(2)] = ex__43822__auto__);


if(cljs.core.seq((state_48115[(4)]))){
var statearr_48134_48922 = state_48115;
(statearr_48134_48922[(1)] = cljs.core.first((state_48115[(4)])));

} else {
throw ex__43822__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48925 = state_48115;
state_48115 = G__48925;
continue;
} else {
return ret_value__43820__auto__;
}
break;
}
});
shadow$dom$state_machine__43819__auto__ = function(state_48115){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__43819__auto____0.call(this);
case 1:
return shadow$dom$state_machine__43819__auto____1.call(this,state_48115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__43819__auto____0;
shadow$dom$state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__43819__auto____1;
return shadow$dom$state_machine__43819__auto__;
})()
})();
var state__43981__auto__ = (function (){var statearr_48140 = f__43980__auto__();
(statearr_48140[(6)] = c__43979__auto___48902);

return statearr_48140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43981__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

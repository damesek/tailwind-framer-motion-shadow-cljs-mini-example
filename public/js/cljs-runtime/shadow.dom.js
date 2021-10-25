goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_47578 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_47578(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_47596 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_47596(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__46739 = coll;
var G__46740 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__46739,G__46740) : shadow.dom.lazy_native_coll_seq.call(null,G__46739,G__46740));
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
var G__46751 = arguments.length;
switch (G__46751) {
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
var G__46754 = arguments.length;
switch (G__46754) {
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
var G__46759 = arguments.length;
switch (G__46759) {
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
var G__46766 = arguments.length;
switch (G__46766) {
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
var G__46772 = arguments.length;
switch (G__46772) {
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
var G__46779 = arguments.length;
switch (G__46779) {
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
}catch (e46782){if((e46782 instanceof Object)){
var e = e46782;
return console.log("didnt support attachEvent",el,e);
} else {
throw e46782;

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
var seq__46794 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__46795 = null;
var count__46796 = (0);
var i__46797 = (0);
while(true){
if((i__46797 < count__46796)){
var el = chunk__46795.cljs$core$IIndexed$_nth$arity$2(null,i__46797);
var handler_47739__$1 = ((function (seq__46794,chunk__46795,count__46796,i__46797,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46794,chunk__46795,count__46796,i__46797,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47739__$1);


var G__47769 = seq__46794;
var G__47770 = chunk__46795;
var G__47771 = count__46796;
var G__47772 = (i__46797 + (1));
seq__46794 = G__47769;
chunk__46795 = G__47770;
count__46796 = G__47771;
i__46797 = G__47772;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46794);
if(temp__5753__auto__){
var seq__46794__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46794__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46794__$1);
var G__47778 = cljs.core.chunk_rest(seq__46794__$1);
var G__47779 = c__4556__auto__;
var G__47780 = cljs.core.count(c__4556__auto__);
var G__47781 = (0);
seq__46794 = G__47778;
chunk__46795 = G__47779;
count__46796 = G__47780;
i__46797 = G__47781;
continue;
} else {
var el = cljs.core.first(seq__46794__$1);
var handler_47783__$1 = ((function (seq__46794,chunk__46795,count__46796,i__46797,el,seq__46794__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46794,chunk__46795,count__46796,i__46797,el,seq__46794__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47783__$1);


var G__47797 = cljs.core.next(seq__46794__$1);
var G__47798 = null;
var G__47799 = (0);
var G__47800 = (0);
seq__46794 = G__47797;
chunk__46795 = G__47798;
count__46796 = G__47799;
i__46797 = G__47800;
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
var G__46833 = arguments.length;
switch (G__46833) {
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
var seq__46839 = cljs.core.seq(events);
var chunk__46840 = null;
var count__46841 = (0);
var i__46842 = (0);
while(true){
if((i__46842 < count__46841)){
var vec__46856 = chunk__46840.cljs$core$IIndexed$_nth$arity$2(null,i__46842);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46856,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46856,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47832 = seq__46839;
var G__47833 = chunk__46840;
var G__47834 = count__46841;
var G__47835 = (i__46842 + (1));
seq__46839 = G__47832;
chunk__46840 = G__47833;
count__46841 = G__47834;
i__46842 = G__47835;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46839);
if(temp__5753__auto__){
var seq__46839__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46839__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46839__$1);
var G__47846 = cljs.core.chunk_rest(seq__46839__$1);
var G__47847 = c__4556__auto__;
var G__47848 = cljs.core.count(c__4556__auto__);
var G__47849 = (0);
seq__46839 = G__47846;
chunk__46840 = G__47847;
count__46841 = G__47848;
i__46842 = G__47849;
continue;
} else {
var vec__46862 = cljs.core.first(seq__46839__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46862,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46862,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47873 = cljs.core.next(seq__46839__$1);
var G__47874 = null;
var G__47875 = (0);
var G__47876 = (0);
seq__46839 = G__47873;
chunk__46840 = G__47874;
count__46841 = G__47875;
i__46842 = G__47876;
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
var seq__46866 = cljs.core.seq(styles);
var chunk__46867 = null;
var count__46868 = (0);
var i__46869 = (0);
while(true){
if((i__46869 < count__46868)){
var vec__46881 = chunk__46867.cljs$core$IIndexed$_nth$arity$2(null,i__46869);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46881,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46881,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47885 = seq__46866;
var G__47886 = chunk__46867;
var G__47887 = count__46868;
var G__47888 = (i__46869 + (1));
seq__46866 = G__47885;
chunk__46867 = G__47886;
count__46868 = G__47887;
i__46869 = G__47888;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46866);
if(temp__5753__auto__){
var seq__46866__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46866__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46866__$1);
var G__47889 = cljs.core.chunk_rest(seq__46866__$1);
var G__47890 = c__4556__auto__;
var G__47891 = cljs.core.count(c__4556__auto__);
var G__47892 = (0);
seq__46866 = G__47889;
chunk__46867 = G__47890;
count__46868 = G__47891;
i__46869 = G__47892;
continue;
} else {
var vec__46886 = cljs.core.first(seq__46866__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46886,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46886,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47897 = cljs.core.next(seq__46866__$1);
var G__47898 = null;
var G__47899 = (0);
var G__47900 = (0);
seq__46866 = G__47897;
chunk__46867 = G__47898;
count__46868 = G__47899;
i__46869 = G__47900;
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
var G__46902_47903 = key;
var G__46902_47904__$1 = (((G__46902_47903 instanceof cljs.core.Keyword))?G__46902_47903.fqn:null);
switch (G__46902_47904__$1) {
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
var ks_47914 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_47914,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_47914,"aria-");
}
})())){
el.setAttribute(ks_47914,value);
} else {
(el[ks_47914] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__46928){
var map__46929 = p__46928;
var map__46929__$1 = (((((!((map__46929 == null))))?(((((map__46929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46929):map__46929);
var props = map__46929__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46929__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__46934 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46934,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46934,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46934,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__46940 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__46940,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__46940;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__46946 = arguments.length;
switch (G__46946) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__46955){
var vec__46958 = p__46955;
var seq__46959 = cljs.core.seq(vec__46958);
var first__46960 = cljs.core.first(seq__46959);
var seq__46959__$1 = cljs.core.next(seq__46959);
var nn = first__46960;
var first__46960__$1 = cljs.core.first(seq__46959__$1);
var seq__46959__$2 = cljs.core.next(seq__46959__$1);
var np = first__46960__$1;
var nc = seq__46959__$2;
var node = vec__46958;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46963 = nn;
var G__46964 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46963,G__46964) : create_fn.call(null,G__46963,G__46964));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46967 = nn;
var G__46968 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46967,G__46968) : create_fn.call(null,G__46967,G__46968));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__46972 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46972,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46972,(1),null);
var seq__46976_47976 = cljs.core.seq(node_children);
var chunk__46977_47977 = null;
var count__46978_47978 = (0);
var i__46979_47979 = (0);
while(true){
if((i__46979_47979 < count__46978_47978)){
var child_struct_47980 = chunk__46977_47977.cljs$core$IIndexed$_nth$arity$2(null,i__46979_47979);
var children_47981 = shadow.dom.dom_node(child_struct_47980);
if(cljs.core.seq_QMARK_(children_47981)){
var seq__47015_47984 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47981));
var chunk__47017_47985 = null;
var count__47018_47986 = (0);
var i__47019_47987 = (0);
while(true){
if((i__47019_47987 < count__47018_47986)){
var child_47990 = chunk__47017_47985.cljs$core$IIndexed$_nth$arity$2(null,i__47019_47987);
if(cljs.core.truth_(child_47990)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47990);


var G__47992 = seq__47015_47984;
var G__47993 = chunk__47017_47985;
var G__47994 = count__47018_47986;
var G__47995 = (i__47019_47987 + (1));
seq__47015_47984 = G__47992;
chunk__47017_47985 = G__47993;
count__47018_47986 = G__47994;
i__47019_47987 = G__47995;
continue;
} else {
var G__48000 = seq__47015_47984;
var G__48001 = chunk__47017_47985;
var G__48002 = count__47018_47986;
var G__48003 = (i__47019_47987 + (1));
seq__47015_47984 = G__48000;
chunk__47017_47985 = G__48001;
count__47018_47986 = G__48002;
i__47019_47987 = G__48003;
continue;
}
} else {
var temp__5753__auto___48004 = cljs.core.seq(seq__47015_47984);
if(temp__5753__auto___48004){
var seq__47015_48005__$1 = temp__5753__auto___48004;
if(cljs.core.chunked_seq_QMARK_(seq__47015_48005__$1)){
var c__4556__auto___48006 = cljs.core.chunk_first(seq__47015_48005__$1);
var G__48008 = cljs.core.chunk_rest(seq__47015_48005__$1);
var G__48009 = c__4556__auto___48006;
var G__48010 = cljs.core.count(c__4556__auto___48006);
var G__48011 = (0);
seq__47015_47984 = G__48008;
chunk__47017_47985 = G__48009;
count__47018_47986 = G__48010;
i__47019_47987 = G__48011;
continue;
} else {
var child_48020 = cljs.core.first(seq__47015_48005__$1);
if(cljs.core.truth_(child_48020)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48020);


var G__48021 = cljs.core.next(seq__47015_48005__$1);
var G__48022 = null;
var G__48023 = (0);
var G__48024 = (0);
seq__47015_47984 = G__48021;
chunk__47017_47985 = G__48022;
count__47018_47986 = G__48023;
i__47019_47987 = G__48024;
continue;
} else {
var G__48027 = cljs.core.next(seq__47015_48005__$1);
var G__48028 = null;
var G__48029 = (0);
var G__48030 = (0);
seq__47015_47984 = G__48027;
chunk__47017_47985 = G__48028;
count__47018_47986 = G__48029;
i__47019_47987 = G__48030;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47981);
}


var G__48032 = seq__46976_47976;
var G__48033 = chunk__46977_47977;
var G__48034 = count__46978_47978;
var G__48035 = (i__46979_47979 + (1));
seq__46976_47976 = G__48032;
chunk__46977_47977 = G__48033;
count__46978_47978 = G__48034;
i__46979_47979 = G__48035;
continue;
} else {
var temp__5753__auto___48037 = cljs.core.seq(seq__46976_47976);
if(temp__5753__auto___48037){
var seq__46976_48039__$1 = temp__5753__auto___48037;
if(cljs.core.chunked_seq_QMARK_(seq__46976_48039__$1)){
var c__4556__auto___48040 = cljs.core.chunk_first(seq__46976_48039__$1);
var G__48042 = cljs.core.chunk_rest(seq__46976_48039__$1);
var G__48043 = c__4556__auto___48040;
var G__48044 = cljs.core.count(c__4556__auto___48040);
var G__48045 = (0);
seq__46976_47976 = G__48042;
chunk__46977_47977 = G__48043;
count__46978_47978 = G__48044;
i__46979_47979 = G__48045;
continue;
} else {
var child_struct_48052 = cljs.core.first(seq__46976_48039__$1);
var children_48053 = shadow.dom.dom_node(child_struct_48052);
if(cljs.core.seq_QMARK_(children_48053)){
var seq__47034_48054 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48053));
var chunk__47036_48055 = null;
var count__47037_48056 = (0);
var i__47038_48057 = (0);
while(true){
if((i__47038_48057 < count__47037_48056)){
var child_48058 = chunk__47036_48055.cljs$core$IIndexed$_nth$arity$2(null,i__47038_48057);
if(cljs.core.truth_(child_48058)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48058);


var G__48061 = seq__47034_48054;
var G__48062 = chunk__47036_48055;
var G__48063 = count__47037_48056;
var G__48064 = (i__47038_48057 + (1));
seq__47034_48054 = G__48061;
chunk__47036_48055 = G__48062;
count__47037_48056 = G__48063;
i__47038_48057 = G__48064;
continue;
} else {
var G__48065 = seq__47034_48054;
var G__48066 = chunk__47036_48055;
var G__48067 = count__47037_48056;
var G__48068 = (i__47038_48057 + (1));
seq__47034_48054 = G__48065;
chunk__47036_48055 = G__48066;
count__47037_48056 = G__48067;
i__47038_48057 = G__48068;
continue;
}
} else {
var temp__5753__auto___48069__$1 = cljs.core.seq(seq__47034_48054);
if(temp__5753__auto___48069__$1){
var seq__47034_48071__$1 = temp__5753__auto___48069__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47034_48071__$1)){
var c__4556__auto___48073 = cljs.core.chunk_first(seq__47034_48071__$1);
var G__48075 = cljs.core.chunk_rest(seq__47034_48071__$1);
var G__48076 = c__4556__auto___48073;
var G__48077 = cljs.core.count(c__4556__auto___48073);
var G__48078 = (0);
seq__47034_48054 = G__48075;
chunk__47036_48055 = G__48076;
count__47037_48056 = G__48077;
i__47038_48057 = G__48078;
continue;
} else {
var child_48080 = cljs.core.first(seq__47034_48071__$1);
if(cljs.core.truth_(child_48080)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48080);


var G__48081 = cljs.core.next(seq__47034_48071__$1);
var G__48082 = null;
var G__48083 = (0);
var G__48084 = (0);
seq__47034_48054 = G__48081;
chunk__47036_48055 = G__48082;
count__47037_48056 = G__48083;
i__47038_48057 = G__48084;
continue;
} else {
var G__48085 = cljs.core.next(seq__47034_48071__$1);
var G__48086 = null;
var G__48087 = (0);
var G__48088 = (0);
seq__47034_48054 = G__48085;
chunk__47036_48055 = G__48086;
count__47037_48056 = G__48087;
i__47038_48057 = G__48088;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48053);
}


var G__48097 = cljs.core.next(seq__46976_48039__$1);
var G__48098 = null;
var G__48099 = (0);
var G__48100 = (0);
seq__46976_47976 = G__48097;
chunk__46977_47977 = G__48098;
count__46978_47978 = G__48099;
i__46979_47979 = G__48100;
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
var seq__47050 = cljs.core.seq(node);
var chunk__47051 = null;
var count__47052 = (0);
var i__47053 = (0);
while(true){
if((i__47053 < count__47052)){
var n = chunk__47051.cljs$core$IIndexed$_nth$arity$2(null,i__47053);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48116 = seq__47050;
var G__48117 = chunk__47051;
var G__48118 = count__47052;
var G__48119 = (i__47053 + (1));
seq__47050 = G__48116;
chunk__47051 = G__48117;
count__47052 = G__48118;
i__47053 = G__48119;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47050);
if(temp__5753__auto__){
var seq__47050__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47050__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47050__$1);
var G__48120 = cljs.core.chunk_rest(seq__47050__$1);
var G__48121 = c__4556__auto__;
var G__48122 = cljs.core.count(c__4556__auto__);
var G__48123 = (0);
seq__47050 = G__48120;
chunk__47051 = G__48121;
count__47052 = G__48122;
i__47053 = G__48123;
continue;
} else {
var n = cljs.core.first(seq__47050__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48125 = cljs.core.next(seq__47050__$1);
var G__48126 = null;
var G__48127 = (0);
var G__48128 = (0);
seq__47050 = G__48125;
chunk__47051 = G__48126;
count__47052 = G__48127;
i__47053 = G__48128;
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
var G__47067 = arguments.length;
switch (G__47067) {
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
var G__47071 = arguments.length;
switch (G__47071) {
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
var G__47080 = arguments.length;
switch (G__47080) {
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
var len__4736__auto___48171 = arguments.length;
var i__4737__auto___48172 = (0);
while(true){
if((i__4737__auto___48172 < len__4736__auto___48171)){
args__4742__auto__.push((arguments[i__4737__auto___48172]));

var G__48173 = (i__4737__auto___48172 + (1));
i__4737__auto___48172 = G__48173;
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
var seq__47095_48188 = cljs.core.seq(nodes);
var chunk__47096_48189 = null;
var count__47097_48190 = (0);
var i__47098_48191 = (0);
while(true){
if((i__47098_48191 < count__47097_48190)){
var node_48192 = chunk__47096_48189.cljs$core$IIndexed$_nth$arity$2(null,i__47098_48191);
fragment.appendChild(shadow.dom._to_dom(node_48192));


var G__48199 = seq__47095_48188;
var G__48200 = chunk__47096_48189;
var G__48201 = count__47097_48190;
var G__48202 = (i__47098_48191 + (1));
seq__47095_48188 = G__48199;
chunk__47096_48189 = G__48200;
count__47097_48190 = G__48201;
i__47098_48191 = G__48202;
continue;
} else {
var temp__5753__auto___48207 = cljs.core.seq(seq__47095_48188);
if(temp__5753__auto___48207){
var seq__47095_48208__$1 = temp__5753__auto___48207;
if(cljs.core.chunked_seq_QMARK_(seq__47095_48208__$1)){
var c__4556__auto___48209 = cljs.core.chunk_first(seq__47095_48208__$1);
var G__48210 = cljs.core.chunk_rest(seq__47095_48208__$1);
var G__48211 = c__4556__auto___48209;
var G__48212 = cljs.core.count(c__4556__auto___48209);
var G__48213 = (0);
seq__47095_48188 = G__48210;
chunk__47096_48189 = G__48211;
count__47097_48190 = G__48212;
i__47098_48191 = G__48213;
continue;
} else {
var node_48215 = cljs.core.first(seq__47095_48208__$1);
fragment.appendChild(shadow.dom._to_dom(node_48215));


var G__48216 = cljs.core.next(seq__47095_48208__$1);
var G__48217 = null;
var G__48218 = (0);
var G__48219 = (0);
seq__47095_48188 = G__48216;
chunk__47096_48189 = G__48217;
count__47097_48190 = G__48218;
i__47098_48191 = G__48219;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47090){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47090));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47110_48227 = cljs.core.seq(scripts);
var chunk__47111_48228 = null;
var count__47112_48229 = (0);
var i__47113_48230 = (0);
while(true){
if((i__47113_48230 < count__47112_48229)){
var vec__47123_48236 = chunk__47111_48228.cljs$core$IIndexed$_nth$arity$2(null,i__47113_48230);
var script_tag_48237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47123_48236,(0),null);
var script_body_48238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47123_48236,(1),null);
eval(script_body_48238);


var G__48261 = seq__47110_48227;
var G__48262 = chunk__47111_48228;
var G__48263 = count__47112_48229;
var G__48264 = (i__47113_48230 + (1));
seq__47110_48227 = G__48261;
chunk__47111_48228 = G__48262;
count__47112_48229 = G__48263;
i__47113_48230 = G__48264;
continue;
} else {
var temp__5753__auto___48265 = cljs.core.seq(seq__47110_48227);
if(temp__5753__auto___48265){
var seq__47110_48266__$1 = temp__5753__auto___48265;
if(cljs.core.chunked_seq_QMARK_(seq__47110_48266__$1)){
var c__4556__auto___48267 = cljs.core.chunk_first(seq__47110_48266__$1);
var G__48268 = cljs.core.chunk_rest(seq__47110_48266__$1);
var G__48269 = c__4556__auto___48267;
var G__48270 = cljs.core.count(c__4556__auto___48267);
var G__48271 = (0);
seq__47110_48227 = G__48268;
chunk__47111_48228 = G__48269;
count__47112_48229 = G__48270;
i__47113_48230 = G__48271;
continue;
} else {
var vec__47126_48272 = cljs.core.first(seq__47110_48266__$1);
var script_tag_48273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47126_48272,(0),null);
var script_body_48274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47126_48272,(1),null);
eval(script_body_48274);


var G__48276 = cljs.core.next(seq__47110_48266__$1);
var G__48277 = null;
var G__48278 = (0);
var G__48279 = (0);
seq__47110_48227 = G__48276;
chunk__47111_48228 = G__48277;
count__47112_48229 = G__48278;
i__47113_48230 = G__48279;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47129){
var vec__47130 = p__47129;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47130,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47130,(1),null);
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
var G__47141 = arguments.length;
switch (G__47141) {
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
var seq__47163 = cljs.core.seq(style_keys);
var chunk__47164 = null;
var count__47165 = (0);
var i__47166 = (0);
while(true){
if((i__47166 < count__47165)){
var it = chunk__47164.cljs$core$IIndexed$_nth$arity$2(null,i__47166);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48316 = seq__47163;
var G__48317 = chunk__47164;
var G__48318 = count__47165;
var G__48319 = (i__47166 + (1));
seq__47163 = G__48316;
chunk__47164 = G__48317;
count__47165 = G__48318;
i__47166 = G__48319;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47163);
if(temp__5753__auto__){
var seq__47163__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47163__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47163__$1);
var G__48320 = cljs.core.chunk_rest(seq__47163__$1);
var G__48321 = c__4556__auto__;
var G__48322 = cljs.core.count(c__4556__auto__);
var G__48323 = (0);
seq__47163 = G__48320;
chunk__47164 = G__48321;
count__47165 = G__48322;
i__47166 = G__48323;
continue;
} else {
var it = cljs.core.first(seq__47163__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48325 = cljs.core.next(seq__47163__$1);
var G__48326 = null;
var G__48327 = (0);
var G__48328 = (0);
seq__47163 = G__48325;
chunk__47164 = G__48326;
count__47165 = G__48327;
i__47166 = G__48328;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47170,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47175 = k47170;
var G__47175__$1 = (((G__47175 instanceof cljs.core.Keyword))?G__47175.fqn:null);
switch (G__47175__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47170,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47179){
var vec__47180 = p__47179;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47180,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47180,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47169){
var self__ = this;
var G__47169__$1 = this;
return (new cljs.core.RecordIter((0),G__47169__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47171,other47172){
var self__ = this;
var this47171__$1 = this;
return (((!((other47172 == null)))) && ((this47171__$1.constructor === other47172.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47171__$1.x,other47172.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47171__$1.y,other47172.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47171__$1.__extmap,other47172.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47169){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47199 = cljs.core.keyword_identical_QMARK_;
var expr__47200 = k__4388__auto__;
if(cljs.core.truth_((pred__47199.cljs$core$IFn$_invoke$arity$2 ? pred__47199.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__47200) : pred__47199.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__47200)))){
return (new shadow.dom.Coordinate(G__47169,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47199.cljs$core$IFn$_invoke$arity$2 ? pred__47199.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__47200) : pred__47199.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__47200)))){
return (new shadow.dom.Coordinate(self__.x,G__47169,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47169),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47169){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__47169,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__47173){
var extmap__4419__auto__ = (function (){var G__47209 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47173,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__47173)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47209);
} else {
return G__47209;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__47173),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__47173),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47223,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47237 = k47223;
var G__47237__$1 = (((G__47237 instanceof cljs.core.Keyword))?G__47237.fqn:null);
switch (G__47237__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47223,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47239){
var vec__47240 = p__47239;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47240,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47240,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47222){
var self__ = this;
var G__47222__$1 = this;
return (new cljs.core.RecordIter((0),G__47222__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47224,other47225){
var self__ = this;
var this47224__$1 = this;
return (((!((other47225 == null)))) && ((this47224__$1.constructor === other47225.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47224__$1.w,other47225.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47224__$1.h,other47225.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47224__$1.__extmap,other47225.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47222){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47255 = cljs.core.keyword_identical_QMARK_;
var expr__47256 = k__4388__auto__;
if(cljs.core.truth_((pred__47255.cljs$core$IFn$_invoke$arity$2 ? pred__47255.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__47256) : pred__47255.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__47256)))){
return (new shadow.dom.Size(G__47222,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47255.cljs$core$IFn$_invoke$arity$2 ? pred__47255.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__47256) : pred__47255.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__47256)))){
return (new shadow.dom.Size(self__.w,G__47222,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47222),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47222){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__47222,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__47230){
var extmap__4419__auto__ = (function (){var G__47265 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47230,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__47230)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47265);
} else {
return G__47265;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__47230),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__47230),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__48451 = (i + (1));
var G__48452 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48451;
ret = G__48452;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47292){
var vec__47293 = p__47292;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47293,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47293,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__47306 = arguments.length;
switch (G__47306) {
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
var G__48458 = ps;
var G__48459 = (i + (1));
el__$1 = G__48458;
i = G__48459;
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
var vec__47366 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47366,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47366,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47366,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__47369_48463 = cljs.core.seq(props);
var chunk__47370_48464 = null;
var count__47371_48465 = (0);
var i__47372_48466 = (0);
while(true){
if((i__47372_48466 < count__47371_48465)){
var vec__47386_48467 = chunk__47370_48464.cljs$core$IIndexed$_nth$arity$2(null,i__47372_48466);
var k_48468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47386_48467,(0),null);
var v_48469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47386_48467,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_48468);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48468),v_48469);


var G__48470 = seq__47369_48463;
var G__48471 = chunk__47370_48464;
var G__48472 = count__47371_48465;
var G__48473 = (i__47372_48466 + (1));
seq__47369_48463 = G__48470;
chunk__47370_48464 = G__48471;
count__47371_48465 = G__48472;
i__47372_48466 = G__48473;
continue;
} else {
var temp__5753__auto___48475 = cljs.core.seq(seq__47369_48463);
if(temp__5753__auto___48475){
var seq__47369_48479__$1 = temp__5753__auto___48475;
if(cljs.core.chunked_seq_QMARK_(seq__47369_48479__$1)){
var c__4556__auto___48480 = cljs.core.chunk_first(seq__47369_48479__$1);
var G__48481 = cljs.core.chunk_rest(seq__47369_48479__$1);
var G__48482 = c__4556__auto___48480;
var G__48483 = cljs.core.count(c__4556__auto___48480);
var G__48484 = (0);
seq__47369_48463 = G__48481;
chunk__47370_48464 = G__48482;
count__47371_48465 = G__48483;
i__47372_48466 = G__48484;
continue;
} else {
var vec__47393_48485 = cljs.core.first(seq__47369_48479__$1);
var k_48486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47393_48485,(0),null);
var v_48487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47393_48485,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_48486);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48486),v_48487);


var G__48492 = cljs.core.next(seq__47369_48479__$1);
var G__48493 = null;
var G__48494 = (0);
var G__48495 = (0);
seq__47369_48463 = G__48492;
chunk__47370_48464 = G__48493;
count__47371_48465 = G__48494;
i__47372_48466 = G__48495;
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
var vec__47403 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47403,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47403,(1),null);
var seq__47406_48498 = cljs.core.seq(node_children);
var chunk__47408_48499 = null;
var count__47409_48500 = (0);
var i__47410_48501 = (0);
while(true){
if((i__47410_48501 < count__47409_48500)){
var child_struct_48502 = chunk__47408_48499.cljs$core$IIndexed$_nth$arity$2(null,i__47410_48501);
if((!((child_struct_48502 == null)))){
if(typeof child_struct_48502 === 'string'){
var text_48504 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48504),child_struct_48502].join(''));
} else {
var children_48506 = shadow.dom.svg_node(child_struct_48502);
if(cljs.core.seq_QMARK_(children_48506)){
var seq__47453_48507 = cljs.core.seq(children_48506);
var chunk__47455_48508 = null;
var count__47456_48509 = (0);
var i__47457_48510 = (0);
while(true){
if((i__47457_48510 < count__47456_48509)){
var child_48511 = chunk__47455_48508.cljs$core$IIndexed$_nth$arity$2(null,i__47457_48510);
if(cljs.core.truth_(child_48511)){
node.appendChild(child_48511);


var G__48512 = seq__47453_48507;
var G__48513 = chunk__47455_48508;
var G__48514 = count__47456_48509;
var G__48515 = (i__47457_48510 + (1));
seq__47453_48507 = G__48512;
chunk__47455_48508 = G__48513;
count__47456_48509 = G__48514;
i__47457_48510 = G__48515;
continue;
} else {
var G__48517 = seq__47453_48507;
var G__48518 = chunk__47455_48508;
var G__48519 = count__47456_48509;
var G__48520 = (i__47457_48510 + (1));
seq__47453_48507 = G__48517;
chunk__47455_48508 = G__48518;
count__47456_48509 = G__48519;
i__47457_48510 = G__48520;
continue;
}
} else {
var temp__5753__auto___48521 = cljs.core.seq(seq__47453_48507);
if(temp__5753__auto___48521){
var seq__47453_48522__$1 = temp__5753__auto___48521;
if(cljs.core.chunked_seq_QMARK_(seq__47453_48522__$1)){
var c__4556__auto___48523 = cljs.core.chunk_first(seq__47453_48522__$1);
var G__48524 = cljs.core.chunk_rest(seq__47453_48522__$1);
var G__48525 = c__4556__auto___48523;
var G__48526 = cljs.core.count(c__4556__auto___48523);
var G__48527 = (0);
seq__47453_48507 = G__48524;
chunk__47455_48508 = G__48525;
count__47456_48509 = G__48526;
i__47457_48510 = G__48527;
continue;
} else {
var child_48528 = cljs.core.first(seq__47453_48522__$1);
if(cljs.core.truth_(child_48528)){
node.appendChild(child_48528);


var G__48529 = cljs.core.next(seq__47453_48522__$1);
var G__48530 = null;
var G__48531 = (0);
var G__48532 = (0);
seq__47453_48507 = G__48529;
chunk__47455_48508 = G__48530;
count__47456_48509 = G__48531;
i__47457_48510 = G__48532;
continue;
} else {
var G__48533 = cljs.core.next(seq__47453_48522__$1);
var G__48534 = null;
var G__48535 = (0);
var G__48536 = (0);
seq__47453_48507 = G__48533;
chunk__47455_48508 = G__48534;
count__47456_48509 = G__48535;
i__47457_48510 = G__48536;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48506);
}
}


var G__48538 = seq__47406_48498;
var G__48539 = chunk__47408_48499;
var G__48540 = count__47409_48500;
var G__48541 = (i__47410_48501 + (1));
seq__47406_48498 = G__48538;
chunk__47408_48499 = G__48539;
count__47409_48500 = G__48540;
i__47410_48501 = G__48541;
continue;
} else {
var G__48542 = seq__47406_48498;
var G__48543 = chunk__47408_48499;
var G__48544 = count__47409_48500;
var G__48545 = (i__47410_48501 + (1));
seq__47406_48498 = G__48542;
chunk__47408_48499 = G__48543;
count__47409_48500 = G__48544;
i__47410_48501 = G__48545;
continue;
}
} else {
var temp__5753__auto___48546 = cljs.core.seq(seq__47406_48498);
if(temp__5753__auto___48546){
var seq__47406_48547__$1 = temp__5753__auto___48546;
if(cljs.core.chunked_seq_QMARK_(seq__47406_48547__$1)){
var c__4556__auto___48548 = cljs.core.chunk_first(seq__47406_48547__$1);
var G__48552 = cljs.core.chunk_rest(seq__47406_48547__$1);
var G__48553 = c__4556__auto___48548;
var G__48554 = cljs.core.count(c__4556__auto___48548);
var G__48555 = (0);
seq__47406_48498 = G__48552;
chunk__47408_48499 = G__48553;
count__47409_48500 = G__48554;
i__47410_48501 = G__48555;
continue;
} else {
var child_struct_48556 = cljs.core.first(seq__47406_48547__$1);
if((!((child_struct_48556 == null)))){
if(typeof child_struct_48556 === 'string'){
var text_48557 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48557),child_struct_48556].join(''));
} else {
var children_48558 = shadow.dom.svg_node(child_struct_48556);
if(cljs.core.seq_QMARK_(children_48558)){
var seq__47469_48559 = cljs.core.seq(children_48558);
var chunk__47471_48560 = null;
var count__47472_48561 = (0);
var i__47473_48562 = (0);
while(true){
if((i__47473_48562 < count__47472_48561)){
var child_48567 = chunk__47471_48560.cljs$core$IIndexed$_nth$arity$2(null,i__47473_48562);
if(cljs.core.truth_(child_48567)){
node.appendChild(child_48567);


var G__48569 = seq__47469_48559;
var G__48570 = chunk__47471_48560;
var G__48571 = count__47472_48561;
var G__48572 = (i__47473_48562 + (1));
seq__47469_48559 = G__48569;
chunk__47471_48560 = G__48570;
count__47472_48561 = G__48571;
i__47473_48562 = G__48572;
continue;
} else {
var G__48573 = seq__47469_48559;
var G__48574 = chunk__47471_48560;
var G__48575 = count__47472_48561;
var G__48576 = (i__47473_48562 + (1));
seq__47469_48559 = G__48573;
chunk__47471_48560 = G__48574;
count__47472_48561 = G__48575;
i__47473_48562 = G__48576;
continue;
}
} else {
var temp__5753__auto___48593__$1 = cljs.core.seq(seq__47469_48559);
if(temp__5753__auto___48593__$1){
var seq__47469_48594__$1 = temp__5753__auto___48593__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47469_48594__$1)){
var c__4556__auto___48595 = cljs.core.chunk_first(seq__47469_48594__$1);
var G__48596 = cljs.core.chunk_rest(seq__47469_48594__$1);
var G__48597 = c__4556__auto___48595;
var G__48598 = cljs.core.count(c__4556__auto___48595);
var G__48599 = (0);
seq__47469_48559 = G__48596;
chunk__47471_48560 = G__48597;
count__47472_48561 = G__48598;
i__47473_48562 = G__48599;
continue;
} else {
var child_48601 = cljs.core.first(seq__47469_48594__$1);
if(cljs.core.truth_(child_48601)){
node.appendChild(child_48601);


var G__48606 = cljs.core.next(seq__47469_48594__$1);
var G__48607 = null;
var G__48608 = (0);
var G__48609 = (0);
seq__47469_48559 = G__48606;
chunk__47471_48560 = G__48607;
count__47472_48561 = G__48608;
i__47473_48562 = G__48609;
continue;
} else {
var G__48615 = cljs.core.next(seq__47469_48594__$1);
var G__48616 = null;
var G__48617 = (0);
var G__48618 = (0);
seq__47469_48559 = G__48615;
chunk__47471_48560 = G__48616;
count__47472_48561 = G__48617;
i__47473_48562 = G__48618;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48558);
}
}


var G__48619 = cljs.core.next(seq__47406_48547__$1);
var G__48620 = null;
var G__48621 = (0);
var G__48622 = (0);
seq__47406_48498 = G__48619;
chunk__47408_48499 = G__48620;
count__47409_48500 = G__48621;
i__47410_48501 = G__48622;
continue;
} else {
var G__48623 = cljs.core.next(seq__47406_48547__$1);
var G__48624 = null;
var G__48625 = (0);
var G__48626 = (0);
seq__47406_48498 = G__48623;
chunk__47408_48499 = G__48624;
count__47409_48500 = G__48625;
i__47410_48501 = G__48626;
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
var len__4736__auto___48653 = arguments.length;
var i__4737__auto___48654 = (0);
while(true){
if((i__4737__auto___48654 < len__4736__auto___48653)){
args__4742__auto__.push((arguments[i__4737__auto___48654]));

var G__48659 = (i__4737__auto___48654 + (1));
i__4737__auto___48654 = G__48659;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq47493){
var G__47494 = cljs.core.first(seq47493);
var seq47493__$1 = cljs.core.next(seq47493);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47494,seq47493__$1);
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
var G__47510 = arguments.length;
switch (G__47510) {
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
var c__43729__auto___48691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43730__auto__ = (function (){var switch__43594__auto__ = (function (state_47533){
var state_val_47535 = (state_47533[(1)]);
if((state_val_47535 === (1))){
var state_47533__$1 = state_47533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47533__$1,(2),once_or_cleanup);
} else {
if((state_val_47535 === (2))){
var inst_47529 = (state_47533[(2)]);
var inst_47530 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_47533__$1 = (function (){var statearr_47543 = state_47533;
(statearr_47543[(7)] = inst_47529);

return statearr_47543;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47533__$1,inst_47530);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__43595__auto__ = null;
var shadow$dom$state_machine__43595__auto____0 = (function (){
var statearr_47552 = [null,null,null,null,null,null,null,null];
(statearr_47552[(0)] = shadow$dom$state_machine__43595__auto__);

(statearr_47552[(1)] = (1));

return statearr_47552;
});
var shadow$dom$state_machine__43595__auto____1 = (function (state_47533){
while(true){
var ret_value__43596__auto__ = (function (){try{while(true){
var result__43597__auto__ = switch__43594__auto__(state_47533);
if(cljs.core.keyword_identical_QMARK_(result__43597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43597__auto__;
}
break;
}
}catch (e47553){var ex__43598__auto__ = e47553;
var statearr_47554_48718 = state_47533;
(statearr_47554_48718[(2)] = ex__43598__auto__);


if(cljs.core.seq((state_47533[(4)]))){
var statearr_47556_48719 = state_47533;
(statearr_47556_48719[(1)] = cljs.core.first((state_47533[(4)])));

} else {
throw ex__43598__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48721 = state_47533;
state_47533 = G__48721;
continue;
} else {
return ret_value__43596__auto__;
}
break;
}
});
shadow$dom$state_machine__43595__auto__ = function(state_47533){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__43595__auto____0.call(this);
case 1:
return shadow$dom$state_machine__43595__auto____1.call(this,state_47533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__43595__auto____0;
shadow$dom$state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__43595__auto____1;
return shadow$dom$state_machine__43595__auto__;
})()
})();
var state__43731__auto__ = (function (){var statearr_47559 = f__43730__auto__();
(statearr_47559[(6)] = c__43729__auto___48691);

return statearr_47559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43731__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

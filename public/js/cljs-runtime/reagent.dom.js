goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__51617 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__51618 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__51618);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__51620 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__51621 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__51621);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__51620);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__51617);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__51631 = arguments.length;
switch (G__51631) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__51636 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51636,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51636,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__51648_51674 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__51649_51675 = null;
var count__51650_51676 = (0);
var i__51651_51677 = (0);
while(true){
if((i__51651_51677 < count__51650_51676)){
var vec__51659_51679 = chunk__51649_51675.cljs$core$IIndexed$_nth$arity$2(null,i__51651_51677);
var container_51680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51659_51679,(0),null);
var comp_51681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51659_51679,(1),null);
reagent.dom.re_render_component(comp_51681,container_51680);


var G__51683 = seq__51648_51674;
var G__51684 = chunk__51649_51675;
var G__51685 = count__51650_51676;
var G__51686 = (i__51651_51677 + (1));
seq__51648_51674 = G__51683;
chunk__51649_51675 = G__51684;
count__51650_51676 = G__51685;
i__51651_51677 = G__51686;
continue;
} else {
var temp__5753__auto___51688 = cljs.core.seq(seq__51648_51674);
if(temp__5753__auto___51688){
var seq__51648_51689__$1 = temp__5753__auto___51688;
if(cljs.core.chunked_seq_QMARK_(seq__51648_51689__$1)){
var c__4556__auto___51691 = cljs.core.chunk_first(seq__51648_51689__$1);
var G__51692 = cljs.core.chunk_rest(seq__51648_51689__$1);
var G__51693 = c__4556__auto___51691;
var G__51694 = cljs.core.count(c__4556__auto___51691);
var G__51695 = (0);
seq__51648_51674 = G__51692;
chunk__51649_51675 = G__51693;
count__51650_51676 = G__51694;
i__51651_51677 = G__51695;
continue;
} else {
var vec__51662_51696 = cljs.core.first(seq__51648_51689__$1);
var container_51697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51662_51696,(0),null);
var comp_51698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51662_51696,(1),null);
reagent.dom.re_render_component(comp_51698,container_51697);


var G__51699 = cljs.core.next(seq__51648_51689__$1);
var G__51700 = null;
var G__51701 = (0);
var G__51702 = (0);
seq__51648_51674 = G__51699;
chunk__51649_51675 = G__51700;
count__51650_51676 = G__51701;
i__51651_51677 = G__51702;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map

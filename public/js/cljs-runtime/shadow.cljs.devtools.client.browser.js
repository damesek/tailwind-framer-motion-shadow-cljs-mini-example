goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51244 = arguments.length;
var i__4737__auto___51245 = (0);
while(true){
if((i__4737__auto___51245 < len__4736__auto___51244)){
args__4742__auto__.push((arguments[i__4737__auto___51245]));

var G__51246 = (i__4737__auto___51245 + (1));
i__4737__auto___51245 = G__51246;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50999){
var G__51000 = cljs.core.first(seq50999);
var seq50999__$1 = cljs.core.next(seq50999);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51000,seq50999__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__51004 = cljs.core.seq(sources);
var chunk__51005 = null;
var count__51006 = (0);
var i__51007 = (0);
while(true){
if((i__51007 < count__51006)){
var map__51017 = chunk__51005.cljs$core$IIndexed$_nth$arity$2(null,i__51007);
var map__51017__$1 = (((((!((map__51017 == null))))?(((((map__51017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51017):map__51017);
var src = map__51017__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51017__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51017__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51017__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51017__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51020){var e_51252 = e51020;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51252);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51252.message)].join('')));
}

var G__51253 = seq__51004;
var G__51254 = chunk__51005;
var G__51255 = count__51006;
var G__51256 = (i__51007 + (1));
seq__51004 = G__51253;
chunk__51005 = G__51254;
count__51006 = G__51255;
i__51007 = G__51256;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51004);
if(temp__5753__auto__){
var seq__51004__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51004__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51004__$1);
var G__51257 = cljs.core.chunk_rest(seq__51004__$1);
var G__51258 = c__4556__auto__;
var G__51259 = cljs.core.count(c__4556__auto__);
var G__51260 = (0);
seq__51004 = G__51257;
chunk__51005 = G__51258;
count__51006 = G__51259;
i__51007 = G__51260;
continue;
} else {
var map__51021 = cljs.core.first(seq__51004__$1);
var map__51021__$1 = (((((!((map__51021 == null))))?(((((map__51021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51021):map__51021);
var src = map__51021__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51021__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51021__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51021__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51021__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51023){var e_51263 = e51023;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51263);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51263.message)].join('')));
}

var G__51264 = cljs.core.next(seq__51004__$1);
var G__51265 = null;
var G__51266 = (0);
var G__51267 = (0);
seq__51004 = G__51264;
chunk__51005 = G__51265;
count__51006 = G__51266;
i__51007 = G__51267;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__51026 = cljs.core.seq(js_requires);
var chunk__51027 = null;
var count__51028 = (0);
var i__51029 = (0);
while(true){
if((i__51029 < count__51028)){
var js_ns = chunk__51027.cljs$core$IIndexed$_nth$arity$2(null,i__51029);
var require_str_51268 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51268);


var G__51271 = seq__51026;
var G__51272 = chunk__51027;
var G__51273 = count__51028;
var G__51274 = (i__51029 + (1));
seq__51026 = G__51271;
chunk__51027 = G__51272;
count__51028 = G__51273;
i__51029 = G__51274;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51026);
if(temp__5753__auto__){
var seq__51026__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51026__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51026__$1);
var G__51275 = cljs.core.chunk_rest(seq__51026__$1);
var G__51276 = c__4556__auto__;
var G__51277 = cljs.core.count(c__4556__auto__);
var G__51278 = (0);
seq__51026 = G__51275;
chunk__51027 = G__51276;
count__51028 = G__51277;
i__51029 = G__51278;
continue;
} else {
var js_ns = cljs.core.first(seq__51026__$1);
var require_str_51279 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51279);


var G__51280 = cljs.core.next(seq__51026__$1);
var G__51281 = null;
var G__51282 = (0);
var G__51283 = (0);
seq__51026 = G__51280;
chunk__51027 = G__51281;
count__51028 = G__51282;
i__51029 = G__51283;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__51033){
var map__51034 = p__51033;
var map__51034__$1 = (((((!((map__51034 == null))))?(((((map__51034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51034):map__51034);
var msg = map__51034__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51034__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51034__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51037(s__51038){
return (new cljs.core.LazySeq(null,(function (){
var s__51038__$1 = s__51038;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51038__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__51043 = cljs.core.first(xs__6308__auto__);
var map__51043__$1 = (((((!((map__51043 == null))))?(((((map__51043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51043):map__51043);
var src = map__51043__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51043__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51043__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__51038__$1,map__51043,map__51043__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__51034,map__51034__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51037_$_iter__51039(s__51040){
return (new cljs.core.LazySeq(null,((function (s__51038__$1,map__51043,map__51043__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__51034,map__51034__$1,msg,info,reload_info){
return (function (){
var s__51040__$1 = s__51040;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__51040__$1);
if(temp__5753__auto____$1){
var s__51040__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51040__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51040__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51042 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51041 = (0);
while(true){
if((i__51041 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__51041);
cljs.core.chunk_append(b__51042,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__51285 = (i__51041 + (1));
i__51041 = G__51285;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51042),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51037_$_iter__51039(cljs.core.chunk_rest(s__51040__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51042),null);
}
} else {
var warning = cljs.core.first(s__51040__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51037_$_iter__51039(cljs.core.rest(s__51040__$2)));
}
} else {
return null;
}
break;
}
});})(s__51038__$1,map__51043,map__51043__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__51034,map__51034__$1,msg,info,reload_info))
,null,null));
});})(s__51038__$1,map__51043,map__51043__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__51034,map__51034__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51037(cljs.core.rest(s__51038__$1)));
} else {
var G__51289 = cljs.core.rest(s__51038__$1);
s__51038__$1 = G__51289;
continue;
}
} else {
var G__51290 = cljs.core.rest(s__51038__$1);
s__51038__$1 = G__51290;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__51046_51294 = cljs.core.seq(warnings);
var chunk__51047_51295 = null;
var count__51048_51296 = (0);
var i__51049_51297 = (0);
while(true){
if((i__51049_51297 < count__51048_51296)){
var map__51058_51298 = chunk__51047_51295.cljs$core$IIndexed$_nth$arity$2(null,i__51049_51297);
var map__51058_51299__$1 = (((((!((map__51058_51298 == null))))?(((((map__51058_51298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51058_51298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51058_51298):map__51058_51298);
var w_51300 = map__51058_51299__$1;
var msg_51301__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51058_51299__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51058_51299__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51058_51299__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51058_51299__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51304)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51302),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51303),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51301__$1)].join(''));


var G__51305 = seq__51046_51294;
var G__51306 = chunk__51047_51295;
var G__51307 = count__51048_51296;
var G__51308 = (i__51049_51297 + (1));
seq__51046_51294 = G__51305;
chunk__51047_51295 = G__51306;
count__51048_51296 = G__51307;
i__51049_51297 = G__51308;
continue;
} else {
var temp__5753__auto___51309 = cljs.core.seq(seq__51046_51294);
if(temp__5753__auto___51309){
var seq__51046_51310__$1 = temp__5753__auto___51309;
if(cljs.core.chunked_seq_QMARK_(seq__51046_51310__$1)){
var c__4556__auto___51311 = cljs.core.chunk_first(seq__51046_51310__$1);
var G__51312 = cljs.core.chunk_rest(seq__51046_51310__$1);
var G__51313 = c__4556__auto___51311;
var G__51314 = cljs.core.count(c__4556__auto___51311);
var G__51315 = (0);
seq__51046_51294 = G__51312;
chunk__51047_51295 = G__51313;
count__51048_51296 = G__51314;
i__51049_51297 = G__51315;
continue;
} else {
var map__51062_51316 = cljs.core.first(seq__51046_51310__$1);
var map__51062_51317__$1 = (((((!((map__51062_51316 == null))))?(((((map__51062_51316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51062_51316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51062_51316):map__51062_51316);
var w_51318 = map__51062_51317__$1;
var msg_51319__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51062_51317__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51062_51317__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51062_51317__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51062_51317__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51322)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51320),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51321),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51319__$1)].join(''));


var G__51324 = cljs.core.next(seq__51046_51310__$1);
var G__51325 = null;
var G__51326 = (0);
var G__51327 = (0);
seq__51046_51294 = G__51324;
chunk__51047_51295 = G__51325;
count__51048_51296 = G__51326;
i__51049_51297 = G__51327;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__51030_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__51030_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__51074){
var map__51075 = p__51074;
var map__51075__$1 = (((((!((map__51075 == null))))?(((((map__51075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51075):map__51075);
var msg = map__51075__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51075__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__51077 = cljs.core.seq(updates);
var chunk__51079 = null;
var count__51080 = (0);
var i__51081 = (0);
while(true){
if((i__51081 < count__51080)){
var path = chunk__51079.cljs$core$IIndexed$_nth$arity$2(null,i__51081);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51166_51328 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51170_51329 = null;
var count__51171_51330 = (0);
var i__51172_51331 = (0);
while(true){
if((i__51172_51331 < count__51171_51330)){
var node_51333 = chunk__51170_51329.cljs$core$IIndexed$_nth$arity$2(null,i__51172_51331);
if(cljs.core.not(node_51333.shadow$old)){
var path_match_51335 = shadow.cljs.devtools.client.browser.match_paths(node_51333.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51335)){
var new_link_51336 = (function (){var G__51178 = node_51333.cloneNode(true);
G__51178.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51335),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51178;
})();
(node_51333.shadow$old = true);

(new_link_51336.onload = ((function (seq__51166_51328,chunk__51170_51329,count__51171_51330,i__51172_51331,seq__51077,chunk__51079,count__51080,i__51081,new_link_51336,path_match_51335,node_51333,path,map__51075,map__51075__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51333);
});})(seq__51166_51328,chunk__51170_51329,count__51171_51330,i__51172_51331,seq__51077,chunk__51079,count__51080,i__51081,new_link_51336,path_match_51335,node_51333,path,map__51075,map__51075__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51335], 0));

goog.dom.insertSiblingAfter(new_link_51336,node_51333);


var G__51337 = seq__51166_51328;
var G__51338 = chunk__51170_51329;
var G__51339 = count__51171_51330;
var G__51340 = (i__51172_51331 + (1));
seq__51166_51328 = G__51337;
chunk__51170_51329 = G__51338;
count__51171_51330 = G__51339;
i__51172_51331 = G__51340;
continue;
} else {
var G__51341 = seq__51166_51328;
var G__51342 = chunk__51170_51329;
var G__51343 = count__51171_51330;
var G__51344 = (i__51172_51331 + (1));
seq__51166_51328 = G__51341;
chunk__51170_51329 = G__51342;
count__51171_51330 = G__51343;
i__51172_51331 = G__51344;
continue;
}
} else {
var G__51345 = seq__51166_51328;
var G__51346 = chunk__51170_51329;
var G__51347 = count__51171_51330;
var G__51348 = (i__51172_51331 + (1));
seq__51166_51328 = G__51345;
chunk__51170_51329 = G__51346;
count__51171_51330 = G__51347;
i__51172_51331 = G__51348;
continue;
}
} else {
var temp__5753__auto___51349 = cljs.core.seq(seq__51166_51328);
if(temp__5753__auto___51349){
var seq__51166_51350__$1 = temp__5753__auto___51349;
if(cljs.core.chunked_seq_QMARK_(seq__51166_51350__$1)){
var c__4556__auto___51351 = cljs.core.chunk_first(seq__51166_51350__$1);
var G__51352 = cljs.core.chunk_rest(seq__51166_51350__$1);
var G__51353 = c__4556__auto___51351;
var G__51354 = cljs.core.count(c__4556__auto___51351);
var G__51355 = (0);
seq__51166_51328 = G__51352;
chunk__51170_51329 = G__51353;
count__51171_51330 = G__51354;
i__51172_51331 = G__51355;
continue;
} else {
var node_51356 = cljs.core.first(seq__51166_51350__$1);
if(cljs.core.not(node_51356.shadow$old)){
var path_match_51357 = shadow.cljs.devtools.client.browser.match_paths(node_51356.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51357)){
var new_link_51358 = (function (){var G__51179 = node_51356.cloneNode(true);
G__51179.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51357),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51179;
})();
(node_51356.shadow$old = true);

(new_link_51358.onload = ((function (seq__51166_51328,chunk__51170_51329,count__51171_51330,i__51172_51331,seq__51077,chunk__51079,count__51080,i__51081,new_link_51358,path_match_51357,node_51356,seq__51166_51350__$1,temp__5753__auto___51349,path,map__51075,map__51075__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51356);
});})(seq__51166_51328,chunk__51170_51329,count__51171_51330,i__51172_51331,seq__51077,chunk__51079,count__51080,i__51081,new_link_51358,path_match_51357,node_51356,seq__51166_51350__$1,temp__5753__auto___51349,path,map__51075,map__51075__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51357], 0));

goog.dom.insertSiblingAfter(new_link_51358,node_51356);


var G__51359 = cljs.core.next(seq__51166_51350__$1);
var G__51360 = null;
var G__51361 = (0);
var G__51362 = (0);
seq__51166_51328 = G__51359;
chunk__51170_51329 = G__51360;
count__51171_51330 = G__51361;
i__51172_51331 = G__51362;
continue;
} else {
var G__51363 = cljs.core.next(seq__51166_51350__$1);
var G__51364 = null;
var G__51365 = (0);
var G__51366 = (0);
seq__51166_51328 = G__51363;
chunk__51170_51329 = G__51364;
count__51171_51330 = G__51365;
i__51172_51331 = G__51366;
continue;
}
} else {
var G__51367 = cljs.core.next(seq__51166_51350__$1);
var G__51368 = null;
var G__51369 = (0);
var G__51370 = (0);
seq__51166_51328 = G__51367;
chunk__51170_51329 = G__51368;
count__51171_51330 = G__51369;
i__51172_51331 = G__51370;
continue;
}
}
} else {
}
}
break;
}


var G__51371 = seq__51077;
var G__51372 = chunk__51079;
var G__51373 = count__51080;
var G__51374 = (i__51081 + (1));
seq__51077 = G__51371;
chunk__51079 = G__51372;
count__51080 = G__51373;
i__51081 = G__51374;
continue;
} else {
var G__51375 = seq__51077;
var G__51376 = chunk__51079;
var G__51377 = count__51080;
var G__51378 = (i__51081 + (1));
seq__51077 = G__51375;
chunk__51079 = G__51376;
count__51080 = G__51377;
i__51081 = G__51378;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51077);
if(temp__5753__auto__){
var seq__51077__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51077__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51077__$1);
var G__51379 = cljs.core.chunk_rest(seq__51077__$1);
var G__51380 = c__4556__auto__;
var G__51381 = cljs.core.count(c__4556__auto__);
var G__51382 = (0);
seq__51077 = G__51379;
chunk__51079 = G__51380;
count__51080 = G__51381;
i__51081 = G__51382;
continue;
} else {
var path = cljs.core.first(seq__51077__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51182_51383 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51186_51384 = null;
var count__51187_51385 = (0);
var i__51188_51386 = (0);
while(true){
if((i__51188_51386 < count__51187_51385)){
var node_51387 = chunk__51186_51384.cljs$core$IIndexed$_nth$arity$2(null,i__51188_51386);
if(cljs.core.not(node_51387.shadow$old)){
var path_match_51388 = shadow.cljs.devtools.client.browser.match_paths(node_51387.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51388)){
var new_link_51389 = (function (){var G__51194 = node_51387.cloneNode(true);
G__51194.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51388),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51194;
})();
(node_51387.shadow$old = true);

(new_link_51389.onload = ((function (seq__51182_51383,chunk__51186_51384,count__51187_51385,i__51188_51386,seq__51077,chunk__51079,count__51080,i__51081,new_link_51389,path_match_51388,node_51387,path,seq__51077__$1,temp__5753__auto__,map__51075,map__51075__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51387);
});})(seq__51182_51383,chunk__51186_51384,count__51187_51385,i__51188_51386,seq__51077,chunk__51079,count__51080,i__51081,new_link_51389,path_match_51388,node_51387,path,seq__51077__$1,temp__5753__auto__,map__51075,map__51075__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51388], 0));

goog.dom.insertSiblingAfter(new_link_51389,node_51387);


var G__51390 = seq__51182_51383;
var G__51391 = chunk__51186_51384;
var G__51392 = count__51187_51385;
var G__51393 = (i__51188_51386 + (1));
seq__51182_51383 = G__51390;
chunk__51186_51384 = G__51391;
count__51187_51385 = G__51392;
i__51188_51386 = G__51393;
continue;
} else {
var G__51394 = seq__51182_51383;
var G__51395 = chunk__51186_51384;
var G__51396 = count__51187_51385;
var G__51397 = (i__51188_51386 + (1));
seq__51182_51383 = G__51394;
chunk__51186_51384 = G__51395;
count__51187_51385 = G__51396;
i__51188_51386 = G__51397;
continue;
}
} else {
var G__51398 = seq__51182_51383;
var G__51399 = chunk__51186_51384;
var G__51400 = count__51187_51385;
var G__51401 = (i__51188_51386 + (1));
seq__51182_51383 = G__51398;
chunk__51186_51384 = G__51399;
count__51187_51385 = G__51400;
i__51188_51386 = G__51401;
continue;
}
} else {
var temp__5753__auto___51402__$1 = cljs.core.seq(seq__51182_51383);
if(temp__5753__auto___51402__$1){
var seq__51182_51403__$1 = temp__5753__auto___51402__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51182_51403__$1)){
var c__4556__auto___51404 = cljs.core.chunk_first(seq__51182_51403__$1);
var G__51405 = cljs.core.chunk_rest(seq__51182_51403__$1);
var G__51406 = c__4556__auto___51404;
var G__51407 = cljs.core.count(c__4556__auto___51404);
var G__51408 = (0);
seq__51182_51383 = G__51405;
chunk__51186_51384 = G__51406;
count__51187_51385 = G__51407;
i__51188_51386 = G__51408;
continue;
} else {
var node_51409 = cljs.core.first(seq__51182_51403__$1);
if(cljs.core.not(node_51409.shadow$old)){
var path_match_51410 = shadow.cljs.devtools.client.browser.match_paths(node_51409.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51410)){
var new_link_51411 = (function (){var G__51199 = node_51409.cloneNode(true);
G__51199.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51410),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51199;
})();
(node_51409.shadow$old = true);

(new_link_51411.onload = ((function (seq__51182_51383,chunk__51186_51384,count__51187_51385,i__51188_51386,seq__51077,chunk__51079,count__51080,i__51081,new_link_51411,path_match_51410,node_51409,seq__51182_51403__$1,temp__5753__auto___51402__$1,path,seq__51077__$1,temp__5753__auto__,map__51075,map__51075__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51409);
});})(seq__51182_51383,chunk__51186_51384,count__51187_51385,i__51188_51386,seq__51077,chunk__51079,count__51080,i__51081,new_link_51411,path_match_51410,node_51409,seq__51182_51403__$1,temp__5753__auto___51402__$1,path,seq__51077__$1,temp__5753__auto__,map__51075,map__51075__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51410], 0));

goog.dom.insertSiblingAfter(new_link_51411,node_51409);


var G__51412 = cljs.core.next(seq__51182_51403__$1);
var G__51413 = null;
var G__51414 = (0);
var G__51415 = (0);
seq__51182_51383 = G__51412;
chunk__51186_51384 = G__51413;
count__51187_51385 = G__51414;
i__51188_51386 = G__51415;
continue;
} else {
var G__51416 = cljs.core.next(seq__51182_51403__$1);
var G__51417 = null;
var G__51418 = (0);
var G__51419 = (0);
seq__51182_51383 = G__51416;
chunk__51186_51384 = G__51417;
count__51187_51385 = G__51418;
i__51188_51386 = G__51419;
continue;
}
} else {
var G__51420 = cljs.core.next(seq__51182_51403__$1);
var G__51421 = null;
var G__51422 = (0);
var G__51423 = (0);
seq__51182_51383 = G__51420;
chunk__51186_51384 = G__51421;
count__51187_51385 = G__51422;
i__51188_51386 = G__51423;
continue;
}
}
} else {
}
}
break;
}


var G__51424 = cljs.core.next(seq__51077__$1);
var G__51425 = null;
var G__51426 = (0);
var G__51427 = (0);
seq__51077 = G__51424;
chunk__51079 = G__51425;
count__51080 = G__51426;
i__51081 = G__51427;
continue;
} else {
var G__51428 = cljs.core.next(seq__51077__$1);
var G__51429 = null;
var G__51430 = (0);
var G__51431 = (0);
seq__51077 = G__51428;
chunk__51079 = G__51429;
count__51080 = G__51430;
i__51081 = G__51431;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__51202){
var map__51203 = p__51202;
var map__51203__$1 = (((((!((map__51203 == null))))?(((((map__51203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51203):map__51203);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51203__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__51205){
var map__51206 = p__51205;
var map__51206__$1 = (((((!((map__51206 == null))))?(((((map__51206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51206):map__51206);
var _ = map__51206__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51206__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__51208,done,error){
var map__51209 = p__51208;
var map__51209__$1 = (((((!((map__51209 == null))))?(((((map__51209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51209):map__51209);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51209__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__51211,done,error){
var map__51212 = p__51211;
var map__51212__$1 = (((((!((map__51212 == null))))?(((((map__51212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51212):map__51212);
var msg = map__51212__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51212__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51212__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51212__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__51218){
var map__51219 = p__51218;
var map__51219__$1 = (((((!((map__51219 == null))))?(((((map__51219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51219):map__51219);
var src = map__51219__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51219__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__51221 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__51221) : done.call(null,G__51221));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__51225){
var map__51226 = p__51225;
var map__51226__$1 = (((((!((map__51226 == null))))?(((((map__51226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51226):map__51226);
var msg__$1 = map__51226__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51226__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e51228){var ex = e51228;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__51229){
var map__51230 = p__51229;
var map__51230__$1 = (((((!((map__51230 == null))))?(((((map__51230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51230):map__51230);
var env = map__51230__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51230__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__51235){
var map__51236 = p__51235;
var map__51236__$1 = (((((!((map__51236 == null))))?(((((map__51236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51236):map__51236);
var msg = map__51236__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51236__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__51238){
var map__51239 = p__51238;
var map__51239__$1 = (((((!((map__51239 == null))))?(((((map__51239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51239):map__51239);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51239__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51239__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__51241){
var map__51242 = p__51241;
var map__51242__$1 = (((((!((map__51242 == null))))?(((((map__51242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51242):map__51242);
var svc = map__51242__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51242__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

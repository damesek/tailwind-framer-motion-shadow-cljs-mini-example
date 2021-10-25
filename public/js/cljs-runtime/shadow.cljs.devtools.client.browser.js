goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51187 = arguments.length;
var i__4737__auto___51188 = (0);
while(true){
if((i__4737__auto___51188 < len__4736__auto___51187)){
args__4742__auto__.push((arguments[i__4737__auto___51188]));

var G__51189 = (i__4737__auto___51188 + (1));
i__4737__auto___51188 = G__51189;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50924){
var G__50925 = cljs.core.first(seq50924);
var seq50924__$1 = cljs.core.next(seq50924);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50925,seq50924__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__50928 = cljs.core.seq(sources);
var chunk__50929 = null;
var count__50930 = (0);
var i__50931 = (0);
while(true){
if((i__50931 < count__50930)){
var map__50940 = chunk__50929.cljs$core$IIndexed$_nth$arity$2(null,i__50931);
var map__50940__$1 = (((((!((map__50940 == null))))?(((((map__50940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50940):map__50940);
var src = map__50940__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50940__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50940__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50940__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50940__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50945){var e_51193 = e50945;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51193);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51193.message)].join('')));
}

var G__51197 = seq__50928;
var G__51198 = chunk__50929;
var G__51199 = count__50930;
var G__51200 = (i__50931 + (1));
seq__50928 = G__51197;
chunk__50929 = G__51198;
count__50930 = G__51199;
i__50931 = G__51200;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50928);
if(temp__5753__auto__){
var seq__50928__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50928__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50928__$1);
var G__51203 = cljs.core.chunk_rest(seq__50928__$1);
var G__51204 = c__4556__auto__;
var G__51205 = cljs.core.count(c__4556__auto__);
var G__51206 = (0);
seq__50928 = G__51203;
chunk__50929 = G__51204;
count__50930 = G__51205;
i__50931 = G__51206;
continue;
} else {
var map__50948 = cljs.core.first(seq__50928__$1);
var map__50948__$1 = (((((!((map__50948 == null))))?(((((map__50948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50948):map__50948);
var src = map__50948__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50948__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50948__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50948__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50948__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50951){var e_51210 = e50951;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51210);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51210.message)].join('')));
}

var G__51212 = cljs.core.next(seq__50928__$1);
var G__51213 = null;
var G__51214 = (0);
var G__51215 = (0);
seq__50928 = G__51212;
chunk__50929 = G__51213;
count__50930 = G__51214;
i__50931 = G__51215;
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
var seq__50955 = cljs.core.seq(js_requires);
var chunk__50956 = null;
var count__50957 = (0);
var i__50958 = (0);
while(true){
if((i__50958 < count__50957)){
var js_ns = chunk__50956.cljs$core$IIndexed$_nth$arity$2(null,i__50958);
var require_str_51216 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51216);


var G__51219 = seq__50955;
var G__51220 = chunk__50956;
var G__51221 = count__50957;
var G__51222 = (i__50958 + (1));
seq__50955 = G__51219;
chunk__50956 = G__51220;
count__50957 = G__51221;
i__50958 = G__51222;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50955);
if(temp__5753__auto__){
var seq__50955__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50955__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50955__$1);
var G__51223 = cljs.core.chunk_rest(seq__50955__$1);
var G__51224 = c__4556__auto__;
var G__51225 = cljs.core.count(c__4556__auto__);
var G__51226 = (0);
seq__50955 = G__51223;
chunk__50956 = G__51224;
count__50957 = G__51225;
i__50958 = G__51226;
continue;
} else {
var js_ns = cljs.core.first(seq__50955__$1);
var require_str_51227 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51227);


var G__51228 = cljs.core.next(seq__50955__$1);
var G__51229 = null;
var G__51230 = (0);
var G__51231 = (0);
seq__50955 = G__51228;
chunk__50956 = G__51229;
count__50957 = G__51230;
i__50958 = G__51231;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__50962){
var map__50963 = p__50962;
var map__50963__$1 = (((((!((map__50963 == null))))?(((((map__50963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50963):map__50963);
var msg = map__50963__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50963__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50963__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50966(s__50967){
return (new cljs.core.LazySeq(null,(function (){
var s__50967__$1 = s__50967;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50967__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__50972 = cljs.core.first(xs__6308__auto__);
var map__50972__$1 = (((((!((map__50972 == null))))?(((((map__50972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50972):map__50972);
var src = map__50972__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50972__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50972__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__50967__$1,map__50972,map__50972__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50963,map__50963__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50966_$_iter__50968(s__50969){
return (new cljs.core.LazySeq(null,((function (s__50967__$1,map__50972,map__50972__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50963,map__50963__$1,msg,info,reload_info){
return (function (){
var s__50969__$1 = s__50969;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__50969__$1);
if(temp__5753__auto____$1){
var s__50969__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50969__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__50969__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__50971 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__50970 = (0);
while(true){
if((i__50970 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__50970);
cljs.core.chunk_append(b__50971,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__51240 = (i__50970 + (1));
i__50970 = G__51240;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50971),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50966_$_iter__50968(cljs.core.chunk_rest(s__50969__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50971),null);
}
} else {
var warning = cljs.core.first(s__50969__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50966_$_iter__50968(cljs.core.rest(s__50969__$2)));
}
} else {
return null;
}
break;
}
});})(s__50967__$1,map__50972,map__50972__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50963,map__50963__$1,msg,info,reload_info))
,null,null));
});})(s__50967__$1,map__50972,map__50972__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50963,map__50963__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50966(cljs.core.rest(s__50967__$1)));
} else {
var G__51250 = cljs.core.rest(s__50967__$1);
s__50967__$1 = G__51250;
continue;
}
} else {
var G__51254 = cljs.core.rest(s__50967__$1);
s__50967__$1 = G__51254;
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
var seq__50978_51257 = cljs.core.seq(warnings);
var chunk__50979_51258 = null;
var count__50980_51259 = (0);
var i__50981_51260 = (0);
while(true){
if((i__50981_51260 < count__50980_51259)){
var map__50989_51262 = chunk__50979_51258.cljs$core$IIndexed$_nth$arity$2(null,i__50981_51260);
var map__50989_51263__$1 = (((((!((map__50989_51262 == null))))?(((((map__50989_51262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50989_51262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50989_51262):map__50989_51262);
var w_51264 = map__50989_51263__$1;
var msg_51265__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50989_51263__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51266 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50989_51263__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50989_51263__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50989_51263__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51268)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51266),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51267),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51265__$1)].join(''));


var G__51269 = seq__50978_51257;
var G__51270 = chunk__50979_51258;
var G__51271 = count__50980_51259;
var G__51272 = (i__50981_51260 + (1));
seq__50978_51257 = G__51269;
chunk__50979_51258 = G__51270;
count__50980_51259 = G__51271;
i__50981_51260 = G__51272;
continue;
} else {
var temp__5753__auto___51273 = cljs.core.seq(seq__50978_51257);
if(temp__5753__auto___51273){
var seq__50978_51274__$1 = temp__5753__auto___51273;
if(cljs.core.chunked_seq_QMARK_(seq__50978_51274__$1)){
var c__4556__auto___51275 = cljs.core.chunk_first(seq__50978_51274__$1);
var G__51276 = cljs.core.chunk_rest(seq__50978_51274__$1);
var G__51277 = c__4556__auto___51275;
var G__51278 = cljs.core.count(c__4556__auto___51275);
var G__51279 = (0);
seq__50978_51257 = G__51276;
chunk__50979_51258 = G__51277;
count__50980_51259 = G__51278;
i__50981_51260 = G__51279;
continue;
} else {
var map__50993_51280 = cljs.core.first(seq__50978_51274__$1);
var map__50993_51281__$1 = (((((!((map__50993_51280 == null))))?(((((map__50993_51280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50993_51280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50993_51280):map__50993_51280);
var w_51282 = map__50993_51281__$1;
var msg_51283__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50993_51281__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50993_51281__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50993_51281__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50993_51281__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51286)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51284),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51285),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51283__$1)].join(''));


var G__51288 = cljs.core.next(seq__50978_51274__$1);
var G__51289 = null;
var G__51290 = (0);
var G__51291 = (0);
seq__50978_51257 = G__51288;
chunk__50979_51258 = G__51289;
count__50980_51259 = G__51290;
i__50981_51260 = G__51291;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__50961_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50961_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__51002){
var map__51003 = p__51002;
var map__51003__$1 = (((((!((map__51003 == null))))?(((((map__51003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51003):map__51003);
var msg = map__51003__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51003__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__51006 = cljs.core.seq(updates);
var chunk__51008 = null;
var count__51009 = (0);
var i__51010 = (0);
while(true){
if((i__51010 < count__51009)){
var path = chunk__51008.cljs$core$IIndexed$_nth$arity$2(null,i__51010);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51047_51297 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51051_51298 = null;
var count__51052_51299 = (0);
var i__51053_51300 = (0);
while(true){
if((i__51053_51300 < count__51052_51299)){
var node_51301 = chunk__51051_51298.cljs$core$IIndexed$_nth$arity$2(null,i__51053_51300);
if(cljs.core.not(node_51301.shadow$old)){
var path_match_51302 = shadow.cljs.devtools.client.browser.match_paths(node_51301.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51302)){
var new_link_51303 = (function (){var G__51068 = node_51301.cloneNode(true);
G__51068.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51302),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51068;
})();
(node_51301.shadow$old = true);

(new_link_51303.onload = ((function (seq__51047_51297,chunk__51051_51298,count__51052_51299,i__51053_51300,seq__51006,chunk__51008,count__51009,i__51010,new_link_51303,path_match_51302,node_51301,path,map__51003,map__51003__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51301);
});})(seq__51047_51297,chunk__51051_51298,count__51052_51299,i__51053_51300,seq__51006,chunk__51008,count__51009,i__51010,new_link_51303,path_match_51302,node_51301,path,map__51003,map__51003__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51302], 0));

goog.dom.insertSiblingAfter(new_link_51303,node_51301);


var G__51304 = seq__51047_51297;
var G__51305 = chunk__51051_51298;
var G__51306 = count__51052_51299;
var G__51307 = (i__51053_51300 + (1));
seq__51047_51297 = G__51304;
chunk__51051_51298 = G__51305;
count__51052_51299 = G__51306;
i__51053_51300 = G__51307;
continue;
} else {
var G__51308 = seq__51047_51297;
var G__51309 = chunk__51051_51298;
var G__51310 = count__51052_51299;
var G__51311 = (i__51053_51300 + (1));
seq__51047_51297 = G__51308;
chunk__51051_51298 = G__51309;
count__51052_51299 = G__51310;
i__51053_51300 = G__51311;
continue;
}
} else {
var G__51312 = seq__51047_51297;
var G__51313 = chunk__51051_51298;
var G__51314 = count__51052_51299;
var G__51315 = (i__51053_51300 + (1));
seq__51047_51297 = G__51312;
chunk__51051_51298 = G__51313;
count__51052_51299 = G__51314;
i__51053_51300 = G__51315;
continue;
}
} else {
var temp__5753__auto___51316 = cljs.core.seq(seq__51047_51297);
if(temp__5753__auto___51316){
var seq__51047_51317__$1 = temp__5753__auto___51316;
if(cljs.core.chunked_seq_QMARK_(seq__51047_51317__$1)){
var c__4556__auto___51318 = cljs.core.chunk_first(seq__51047_51317__$1);
var G__51319 = cljs.core.chunk_rest(seq__51047_51317__$1);
var G__51320 = c__4556__auto___51318;
var G__51321 = cljs.core.count(c__4556__auto___51318);
var G__51322 = (0);
seq__51047_51297 = G__51319;
chunk__51051_51298 = G__51320;
count__51052_51299 = G__51321;
i__51053_51300 = G__51322;
continue;
} else {
var node_51323 = cljs.core.first(seq__51047_51317__$1);
if(cljs.core.not(node_51323.shadow$old)){
var path_match_51324 = shadow.cljs.devtools.client.browser.match_paths(node_51323.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51324)){
var new_link_51325 = (function (){var G__51072 = node_51323.cloneNode(true);
G__51072.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51324),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51072;
})();
(node_51323.shadow$old = true);

(new_link_51325.onload = ((function (seq__51047_51297,chunk__51051_51298,count__51052_51299,i__51053_51300,seq__51006,chunk__51008,count__51009,i__51010,new_link_51325,path_match_51324,node_51323,seq__51047_51317__$1,temp__5753__auto___51316,path,map__51003,map__51003__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51323);
});})(seq__51047_51297,chunk__51051_51298,count__51052_51299,i__51053_51300,seq__51006,chunk__51008,count__51009,i__51010,new_link_51325,path_match_51324,node_51323,seq__51047_51317__$1,temp__5753__auto___51316,path,map__51003,map__51003__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51324], 0));

goog.dom.insertSiblingAfter(new_link_51325,node_51323);


var G__51326 = cljs.core.next(seq__51047_51317__$1);
var G__51327 = null;
var G__51328 = (0);
var G__51329 = (0);
seq__51047_51297 = G__51326;
chunk__51051_51298 = G__51327;
count__51052_51299 = G__51328;
i__51053_51300 = G__51329;
continue;
} else {
var G__51330 = cljs.core.next(seq__51047_51317__$1);
var G__51331 = null;
var G__51332 = (0);
var G__51333 = (0);
seq__51047_51297 = G__51330;
chunk__51051_51298 = G__51331;
count__51052_51299 = G__51332;
i__51053_51300 = G__51333;
continue;
}
} else {
var G__51334 = cljs.core.next(seq__51047_51317__$1);
var G__51335 = null;
var G__51336 = (0);
var G__51337 = (0);
seq__51047_51297 = G__51334;
chunk__51051_51298 = G__51335;
count__51052_51299 = G__51336;
i__51053_51300 = G__51337;
continue;
}
}
} else {
}
}
break;
}


var G__51338 = seq__51006;
var G__51339 = chunk__51008;
var G__51340 = count__51009;
var G__51341 = (i__51010 + (1));
seq__51006 = G__51338;
chunk__51008 = G__51339;
count__51009 = G__51340;
i__51010 = G__51341;
continue;
} else {
var G__51344 = seq__51006;
var G__51345 = chunk__51008;
var G__51346 = count__51009;
var G__51347 = (i__51010 + (1));
seq__51006 = G__51344;
chunk__51008 = G__51345;
count__51009 = G__51346;
i__51010 = G__51347;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51006);
if(temp__5753__auto__){
var seq__51006__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51006__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51006__$1);
var G__51348 = cljs.core.chunk_rest(seq__51006__$1);
var G__51349 = c__4556__auto__;
var G__51350 = cljs.core.count(c__4556__auto__);
var G__51351 = (0);
seq__51006 = G__51348;
chunk__51008 = G__51349;
count__51009 = G__51350;
i__51010 = G__51351;
continue;
} else {
var path = cljs.core.first(seq__51006__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51080_51352 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51084_51353 = null;
var count__51085_51354 = (0);
var i__51086_51355 = (0);
while(true){
if((i__51086_51355 < count__51085_51354)){
var node_51356 = chunk__51084_51353.cljs$core$IIndexed$_nth$arity$2(null,i__51086_51355);
if(cljs.core.not(node_51356.shadow$old)){
var path_match_51361 = shadow.cljs.devtools.client.browser.match_paths(node_51356.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51361)){
var new_link_51362 = (function (){var G__51105 = node_51356.cloneNode(true);
G__51105.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51361),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51105;
})();
(node_51356.shadow$old = true);

(new_link_51362.onload = ((function (seq__51080_51352,chunk__51084_51353,count__51085_51354,i__51086_51355,seq__51006,chunk__51008,count__51009,i__51010,new_link_51362,path_match_51361,node_51356,path,seq__51006__$1,temp__5753__auto__,map__51003,map__51003__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51356);
});})(seq__51080_51352,chunk__51084_51353,count__51085_51354,i__51086_51355,seq__51006,chunk__51008,count__51009,i__51010,new_link_51362,path_match_51361,node_51356,path,seq__51006__$1,temp__5753__auto__,map__51003,map__51003__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51361], 0));

goog.dom.insertSiblingAfter(new_link_51362,node_51356);


var G__51363 = seq__51080_51352;
var G__51364 = chunk__51084_51353;
var G__51365 = count__51085_51354;
var G__51366 = (i__51086_51355 + (1));
seq__51080_51352 = G__51363;
chunk__51084_51353 = G__51364;
count__51085_51354 = G__51365;
i__51086_51355 = G__51366;
continue;
} else {
var G__51367 = seq__51080_51352;
var G__51368 = chunk__51084_51353;
var G__51369 = count__51085_51354;
var G__51370 = (i__51086_51355 + (1));
seq__51080_51352 = G__51367;
chunk__51084_51353 = G__51368;
count__51085_51354 = G__51369;
i__51086_51355 = G__51370;
continue;
}
} else {
var G__51371 = seq__51080_51352;
var G__51372 = chunk__51084_51353;
var G__51373 = count__51085_51354;
var G__51374 = (i__51086_51355 + (1));
seq__51080_51352 = G__51371;
chunk__51084_51353 = G__51372;
count__51085_51354 = G__51373;
i__51086_51355 = G__51374;
continue;
}
} else {
var temp__5753__auto___51376__$1 = cljs.core.seq(seq__51080_51352);
if(temp__5753__auto___51376__$1){
var seq__51080_51377__$1 = temp__5753__auto___51376__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51080_51377__$1)){
var c__4556__auto___51378 = cljs.core.chunk_first(seq__51080_51377__$1);
var G__51379 = cljs.core.chunk_rest(seq__51080_51377__$1);
var G__51380 = c__4556__auto___51378;
var G__51381 = cljs.core.count(c__4556__auto___51378);
var G__51382 = (0);
seq__51080_51352 = G__51379;
chunk__51084_51353 = G__51380;
count__51085_51354 = G__51381;
i__51086_51355 = G__51382;
continue;
} else {
var node_51383 = cljs.core.first(seq__51080_51377__$1);
if(cljs.core.not(node_51383.shadow$old)){
var path_match_51384 = shadow.cljs.devtools.client.browser.match_paths(node_51383.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51384)){
var new_link_51385 = (function (){var G__51114 = node_51383.cloneNode(true);
G__51114.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51384),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51114;
})();
(node_51383.shadow$old = true);

(new_link_51385.onload = ((function (seq__51080_51352,chunk__51084_51353,count__51085_51354,i__51086_51355,seq__51006,chunk__51008,count__51009,i__51010,new_link_51385,path_match_51384,node_51383,seq__51080_51377__$1,temp__5753__auto___51376__$1,path,seq__51006__$1,temp__5753__auto__,map__51003,map__51003__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51383);
});})(seq__51080_51352,chunk__51084_51353,count__51085_51354,i__51086_51355,seq__51006,chunk__51008,count__51009,i__51010,new_link_51385,path_match_51384,node_51383,seq__51080_51377__$1,temp__5753__auto___51376__$1,path,seq__51006__$1,temp__5753__auto__,map__51003,map__51003__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51384], 0));

goog.dom.insertSiblingAfter(new_link_51385,node_51383);


var G__51386 = cljs.core.next(seq__51080_51377__$1);
var G__51387 = null;
var G__51388 = (0);
var G__51389 = (0);
seq__51080_51352 = G__51386;
chunk__51084_51353 = G__51387;
count__51085_51354 = G__51388;
i__51086_51355 = G__51389;
continue;
} else {
var G__51390 = cljs.core.next(seq__51080_51377__$1);
var G__51391 = null;
var G__51392 = (0);
var G__51393 = (0);
seq__51080_51352 = G__51390;
chunk__51084_51353 = G__51391;
count__51085_51354 = G__51392;
i__51086_51355 = G__51393;
continue;
}
} else {
var G__51394 = cljs.core.next(seq__51080_51377__$1);
var G__51395 = null;
var G__51396 = (0);
var G__51397 = (0);
seq__51080_51352 = G__51394;
chunk__51084_51353 = G__51395;
count__51085_51354 = G__51396;
i__51086_51355 = G__51397;
continue;
}
}
} else {
}
}
break;
}


var G__51398 = cljs.core.next(seq__51006__$1);
var G__51399 = null;
var G__51400 = (0);
var G__51401 = (0);
seq__51006 = G__51398;
chunk__51008 = G__51399;
count__51009 = G__51400;
i__51010 = G__51401;
continue;
} else {
var G__51402 = cljs.core.next(seq__51006__$1);
var G__51403 = null;
var G__51404 = (0);
var G__51405 = (0);
seq__51006 = G__51402;
chunk__51008 = G__51403;
count__51009 = G__51404;
i__51010 = G__51405;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__51130){
var map__51132 = p__51130;
var map__51132__$1 = (((((!((map__51132 == null))))?(((((map__51132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51132):map__51132);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51132__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__51140){
var map__51141 = p__51140;
var map__51141__$1 = (((((!((map__51141 == null))))?(((((map__51141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51141):map__51141);
var _ = map__51141__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51141__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__51143,done,error){
var map__51144 = p__51143;
var map__51144__$1 = (((((!((map__51144 == null))))?(((((map__51144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51144):map__51144);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51144__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__51146,done,error){
var map__51147 = p__51146;
var map__51147__$1 = (((((!((map__51147 == null))))?(((((map__51147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51147):map__51147);
var msg = map__51147__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51147__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51147__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51147__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__51149){
var map__51150 = p__51149;
var map__51150__$1 = (((((!((map__51150 == null))))?(((((map__51150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51150):map__51150);
var src = map__51150__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51150__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__51156 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__51156) : done.call(null,G__51156));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__51159){
var map__51160 = p__51159;
var map__51160__$1 = (((((!((map__51160 == null))))?(((((map__51160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51160):map__51160);
var msg__$1 = map__51160__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51160__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e51162){var ex = e51162;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__51163){
var map__51164 = p__51163;
var map__51164__$1 = (((((!((map__51164 == null))))?(((((map__51164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51164):map__51164);
var env = map__51164__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51164__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__51166){
var map__51167 = p__51166;
var map__51167__$1 = (((((!((map__51167 == null))))?(((((map__51167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51167):map__51167);
var msg = map__51167__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51167__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__51171){
var map__51172 = p__51171;
var map__51172__$1 = (((((!((map__51172 == null))))?(((((map__51172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51172):map__51172);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51172__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51172__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__51177){
var map__51178 = p__51177;
var map__51178__$1 = (((((!((map__51178 == null))))?(((((map__51178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51178):map__51178);
var svc = map__51178__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51178__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

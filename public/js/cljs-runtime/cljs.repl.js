goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49987){
var map__49988 = p__49987;
var map__49988__$1 = (((((!((map__49988 == null))))?(((((map__49988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49988):map__49988);
var m = map__49988__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49988__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49988__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49993_50273 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49994_50274 = null;
var count__49995_50275 = (0);
var i__49996_50276 = (0);
while(true){
if((i__49996_50276 < count__49995_50275)){
var f_50277 = chunk__49994_50274.cljs$core$IIndexed$_nth$arity$2(null,i__49996_50276);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50277], 0));


var G__50279 = seq__49993_50273;
var G__50280 = chunk__49994_50274;
var G__50281 = count__49995_50275;
var G__50282 = (i__49996_50276 + (1));
seq__49993_50273 = G__50279;
chunk__49994_50274 = G__50280;
count__49995_50275 = G__50281;
i__49996_50276 = G__50282;
continue;
} else {
var temp__5753__auto___50283 = cljs.core.seq(seq__49993_50273);
if(temp__5753__auto___50283){
var seq__49993_50284__$1 = temp__5753__auto___50283;
if(cljs.core.chunked_seq_QMARK_(seq__49993_50284__$1)){
var c__4556__auto___50285 = cljs.core.chunk_first(seq__49993_50284__$1);
var G__50286 = cljs.core.chunk_rest(seq__49993_50284__$1);
var G__50287 = c__4556__auto___50285;
var G__50288 = cljs.core.count(c__4556__auto___50285);
var G__50289 = (0);
seq__49993_50273 = G__50286;
chunk__49994_50274 = G__50287;
count__49995_50275 = G__50288;
i__49996_50276 = G__50289;
continue;
} else {
var f_50290 = cljs.core.first(seq__49993_50284__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50290], 0));


var G__50291 = cljs.core.next(seq__49993_50284__$1);
var G__50292 = null;
var G__50293 = (0);
var G__50294 = (0);
seq__49993_50273 = G__50291;
chunk__49994_50274 = G__50292;
count__49995_50275 = G__50293;
i__49996_50276 = G__50294;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50295 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_50295], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_50295)))?cljs.core.second(arglists_50295):arglists_50295)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50001_50301 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50002_50302 = null;
var count__50003_50303 = (0);
var i__50004_50304 = (0);
while(true){
if((i__50004_50304 < count__50003_50303)){
var vec__50017_50306 = chunk__50002_50302.cljs$core$IIndexed$_nth$arity$2(null,i__50004_50304);
var name_50307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50017_50306,(0),null);
var map__50020_50308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50017_50306,(1),null);
var map__50020_50309__$1 = (((((!((map__50020_50308 == null))))?(((((map__50020_50308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50020_50308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50020_50308):map__50020_50308);
var doc_50310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50020_50309__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50020_50309__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50307], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50311], 0));

if(cljs.core.truth_(doc_50310)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50310], 0));
} else {
}


var G__50313 = seq__50001_50301;
var G__50314 = chunk__50002_50302;
var G__50315 = count__50003_50303;
var G__50316 = (i__50004_50304 + (1));
seq__50001_50301 = G__50313;
chunk__50002_50302 = G__50314;
count__50003_50303 = G__50315;
i__50004_50304 = G__50316;
continue;
} else {
var temp__5753__auto___50317 = cljs.core.seq(seq__50001_50301);
if(temp__5753__auto___50317){
var seq__50001_50318__$1 = temp__5753__auto___50317;
if(cljs.core.chunked_seq_QMARK_(seq__50001_50318__$1)){
var c__4556__auto___50319 = cljs.core.chunk_first(seq__50001_50318__$1);
var G__50320 = cljs.core.chunk_rest(seq__50001_50318__$1);
var G__50321 = c__4556__auto___50319;
var G__50322 = cljs.core.count(c__4556__auto___50319);
var G__50323 = (0);
seq__50001_50301 = G__50320;
chunk__50002_50302 = G__50321;
count__50003_50303 = G__50322;
i__50004_50304 = G__50323;
continue;
} else {
var vec__50023_50325 = cljs.core.first(seq__50001_50318__$1);
var name_50326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50023_50325,(0),null);
var map__50026_50327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50023_50325,(1),null);
var map__50026_50328__$1 = (((((!((map__50026_50327 == null))))?(((((map__50026_50327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50026_50327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50026_50327):map__50026_50327);
var doc_50329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50026_50328__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50026_50328__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50326], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50330], 0));

if(cljs.core.truth_(doc_50329)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50329], 0));
} else {
}


var G__50335 = cljs.core.next(seq__50001_50318__$1);
var G__50336 = null;
var G__50337 = (0);
var G__50338 = (0);
seq__50001_50301 = G__50335;
chunk__50002_50302 = G__50336;
count__50003_50303 = G__50337;
i__50004_50304 = G__50338;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__50031 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50032 = null;
var count__50033 = (0);
var i__50034 = (0);
while(true){
if((i__50034 < count__50033)){
var role = chunk__50032.cljs$core$IIndexed$_nth$arity$2(null,i__50034);
var temp__5753__auto___50341__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___50341__$1)){
var spec_50342 = temp__5753__auto___50341__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50342)], 0));
} else {
}


var G__50343 = seq__50031;
var G__50344 = chunk__50032;
var G__50345 = count__50033;
var G__50346 = (i__50034 + (1));
seq__50031 = G__50343;
chunk__50032 = G__50344;
count__50033 = G__50345;
i__50034 = G__50346;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__50031);
if(temp__5753__auto____$1){
var seq__50031__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50031__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50031__$1);
var G__50347 = cljs.core.chunk_rest(seq__50031__$1);
var G__50348 = c__4556__auto__;
var G__50349 = cljs.core.count(c__4556__auto__);
var G__50350 = (0);
seq__50031 = G__50347;
chunk__50032 = G__50348;
count__50033 = G__50349;
i__50034 = G__50350;
continue;
} else {
var role = cljs.core.first(seq__50031__$1);
var temp__5753__auto___50351__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___50351__$2)){
var spec_50353 = temp__5753__auto___50351__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50353)], 0));
} else {
}


var G__50354 = cljs.core.next(seq__50031__$1);
var G__50355 = null;
var G__50356 = (0);
var G__50357 = (0);
seq__50031 = G__50354;
chunk__50032 = G__50355;
count__50033 = G__50356;
i__50034 = G__50357;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__50359 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__50360 = cljs.core.ex_cause(t);
via = G__50359;
t = G__50360;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__50076 = datafied_throwable;
var map__50076__$1 = (((((!((map__50076 == null))))?(((((map__50076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50076):map__50076);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50076__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50076__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50076__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50077 = cljs.core.last(via);
var map__50077__$1 = (((((!((map__50077 == null))))?(((((map__50077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50077):map__50077);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50077__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50077__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50077__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50078 = data;
var map__50078__$1 = (((((!((map__50078 == null))))?(((((map__50078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50078):map__50078);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50078__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50078__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50078__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50079 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__50079__$1 = (((((!((map__50079 == null))))?(((((map__50079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50079):map__50079);
var top_data = map__50079__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50079__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__50097 = phase;
var G__50097__$1 = (((G__50097 instanceof cljs.core.Keyword))?G__50097.fqn:null);
switch (G__50097__$1) {
case "read-source":
var map__50098 = data;
var map__50098__$1 = (((((!((map__50098 == null))))?(((((map__50098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50098):map__50098);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50098__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50098__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50100 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__50100__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50100,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50100);
var G__50100__$2 = (cljs.core.truth_((function (){var fexpr__50102 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50102.cljs$core$IFn$_invoke$arity$1 ? fexpr__50102.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50102.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50100__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50100__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50100__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50100__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__50106 = top_data;
var G__50106__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50106,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50106);
var G__50106__$2 = (cljs.core.truth_((function (){var fexpr__50107 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50107.cljs$core$IFn$_invoke$arity$1 ? fexpr__50107.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50107.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50106__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50106__$1);
var G__50106__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50106__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50106__$2);
var G__50106__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50106__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50106__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50106__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50106__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__50108 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50108,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50108,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50108,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50108,(3),null);
var G__50111 = top_data;
var G__50111__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50111,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50111);
var G__50111__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50111__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50111__$1);
var G__50111__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50111__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50111__$2);
var G__50111__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50111__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50111__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50111__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50111__$4;
}

break;
case "execution":
var vec__50112 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50112,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50112,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50112,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50112,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50068_SHARP_){
var or__4126__auto__ = (p1__50068_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__50136 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50136.cljs$core$IFn$_invoke$arity$1 ? fexpr__50136.cljs$core$IFn$_invoke$arity$1(p1__50068_SHARP_) : fexpr__50136.call(null,p1__50068_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__50139 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50139__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50139,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50139);
var G__50139__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50139__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50139__$1);
var G__50139__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50139__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50139__$2);
var G__50139__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50139__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50139__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50139__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50139__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50097__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50153){
var map__50158 = p__50153;
var map__50158__$1 = (((((!((map__50158 == null))))?(((((map__50158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50158):map__50158);
var triage_data = map__50158__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50158__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50158__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50158__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50158__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50158__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50158__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50158__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50158__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__50197 = phase;
var G__50197__$1 = (((G__50197 instanceof cljs.core.Keyword))?G__50197.fqn:null);
switch (G__50197__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__50198 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__50199 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50200 = loc;
var G__50201 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50203_50396 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50204_50397 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50205_50398 = true;
var _STAR_print_fn_STAR__temp_val__50206_50399 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50205_50398);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50206_50399);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50151_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50151_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50204_50397);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50203_50396);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50198,G__50199,G__50200,G__50201) : format.call(null,G__50198,G__50199,G__50200,G__50201));

break;
case "macroexpansion":
var G__50207 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__50208 = cause_type;
var G__50209 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50210 = loc;
var G__50211 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50207,G__50208,G__50209,G__50210,G__50211) : format.call(null,G__50207,G__50208,G__50209,G__50210,G__50211));

break;
case "compile-syntax-check":
var G__50212 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__50213 = cause_type;
var G__50214 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50215 = loc;
var G__50216 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50212,G__50213,G__50214,G__50215,G__50216) : format.call(null,G__50212,G__50213,G__50214,G__50215,G__50216));

break;
case "compilation":
var G__50221 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__50222 = cause_type;
var G__50223 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50224 = loc;
var G__50225 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50221,G__50222,G__50223,G__50224,G__50225) : format.call(null,G__50221,G__50222,G__50223,G__50224,G__50225));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__50229 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__50230 = symbol;
var G__50231 = loc;
var G__50232 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50233_50404 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50234_50405 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50235_50406 = true;
var _STAR_print_fn_STAR__temp_val__50236_50407 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50235_50406);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50236_50407);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50152_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50152_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50234_50405);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50233_50404);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50229,G__50230,G__50231,G__50232) : format.call(null,G__50229,G__50230,G__50231,G__50232));
} else {
var G__50251 = "Execution error%s at %s(%s).\n%s\n";
var G__50252 = cause_type;
var G__50253 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50254 = loc;
var G__50255 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50251,G__50252,G__50253,G__50254,G__50255) : format.call(null,G__50251,G__50252,G__50253,G__50254,G__50255));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50197__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

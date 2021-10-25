goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49845){
var map__49847 = p__49845;
var map__49847__$1 = (((((!((map__49847 == null))))?(((((map__49847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49847):map__49847);
var m = map__49847__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49847__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49847__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__49853_50069 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49854_50070 = null;
var count__49855_50071 = (0);
var i__49856_50072 = (0);
while(true){
if((i__49856_50072 < count__49855_50071)){
var f_50073 = chunk__49854_50070.cljs$core$IIndexed$_nth$arity$2(null,i__49856_50072);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50073], 0));


var G__50075 = seq__49853_50069;
var G__50076 = chunk__49854_50070;
var G__50077 = count__49855_50071;
var G__50078 = (i__49856_50072 + (1));
seq__49853_50069 = G__50075;
chunk__49854_50070 = G__50076;
count__49855_50071 = G__50077;
i__49856_50072 = G__50078;
continue;
} else {
var temp__5753__auto___50079 = cljs.core.seq(seq__49853_50069);
if(temp__5753__auto___50079){
var seq__49853_50080__$1 = temp__5753__auto___50079;
if(cljs.core.chunked_seq_QMARK_(seq__49853_50080__$1)){
var c__4556__auto___50081 = cljs.core.chunk_first(seq__49853_50080__$1);
var G__50082 = cljs.core.chunk_rest(seq__49853_50080__$1);
var G__50083 = c__4556__auto___50081;
var G__50084 = cljs.core.count(c__4556__auto___50081);
var G__50085 = (0);
seq__49853_50069 = G__50082;
chunk__49854_50070 = G__50083;
count__49855_50071 = G__50084;
i__49856_50072 = G__50085;
continue;
} else {
var f_50087 = cljs.core.first(seq__49853_50080__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50087], 0));


var G__50088 = cljs.core.next(seq__49853_50080__$1);
var G__50089 = null;
var G__50090 = (0);
var G__50091 = (0);
seq__49853_50069 = G__50088;
chunk__49854_50070 = G__50089;
count__49855_50071 = G__50090;
i__49856_50072 = G__50091;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50096 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_50096], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_50096)))?cljs.core.second(arglists_50096):arglists_50096)], 0));
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
var seq__49860_50103 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49861_50104 = null;
var count__49862_50105 = (0);
var i__49863_50106 = (0);
while(true){
if((i__49863_50106 < count__49862_50105)){
var vec__49877_50107 = chunk__49861_50104.cljs$core$IIndexed$_nth$arity$2(null,i__49863_50106);
var name_50108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49877_50107,(0),null);
var map__49880_50109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49877_50107,(1),null);
var map__49880_50110__$1 = (((((!((map__49880_50109 == null))))?(((((map__49880_50109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49880_50109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49880_50109):map__49880_50109);
var doc_50111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49880_50110__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49880_50110__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50108], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50112], 0));

if(cljs.core.truth_(doc_50111)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50111], 0));
} else {
}


var G__50117 = seq__49860_50103;
var G__50118 = chunk__49861_50104;
var G__50119 = count__49862_50105;
var G__50120 = (i__49863_50106 + (1));
seq__49860_50103 = G__50117;
chunk__49861_50104 = G__50118;
count__49862_50105 = G__50119;
i__49863_50106 = G__50120;
continue;
} else {
var temp__5753__auto___50122 = cljs.core.seq(seq__49860_50103);
if(temp__5753__auto___50122){
var seq__49860_50123__$1 = temp__5753__auto___50122;
if(cljs.core.chunked_seq_QMARK_(seq__49860_50123__$1)){
var c__4556__auto___50124 = cljs.core.chunk_first(seq__49860_50123__$1);
var G__50126 = cljs.core.chunk_rest(seq__49860_50123__$1);
var G__50127 = c__4556__auto___50124;
var G__50128 = cljs.core.count(c__4556__auto___50124);
var G__50129 = (0);
seq__49860_50103 = G__50126;
chunk__49861_50104 = G__50127;
count__49862_50105 = G__50128;
i__49863_50106 = G__50129;
continue;
} else {
var vec__49886_50130 = cljs.core.first(seq__49860_50123__$1);
var name_50131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49886_50130,(0),null);
var map__49889_50132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49886_50130,(1),null);
var map__49889_50133__$1 = (((((!((map__49889_50132 == null))))?(((((map__49889_50132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49889_50132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49889_50132):map__49889_50132);
var doc_50134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49889_50133__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50135 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49889_50133__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50131], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50135], 0));

if(cljs.core.truth_(doc_50134)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50134], 0));
} else {
}


var G__50136 = cljs.core.next(seq__49860_50123__$1);
var G__50137 = null;
var G__50138 = (0);
var G__50139 = (0);
seq__49860_50103 = G__50136;
chunk__49861_50104 = G__50137;
count__49862_50105 = G__50138;
i__49863_50106 = G__50139;
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

var seq__49892 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49893 = null;
var count__49894 = (0);
var i__49895 = (0);
while(true){
if((i__49895 < count__49894)){
var role = chunk__49893.cljs$core$IIndexed$_nth$arity$2(null,i__49895);
var temp__5753__auto___50141__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___50141__$1)){
var spec_50142 = temp__5753__auto___50141__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50142)], 0));
} else {
}


var G__50143 = seq__49892;
var G__50144 = chunk__49893;
var G__50145 = count__49894;
var G__50146 = (i__49895 + (1));
seq__49892 = G__50143;
chunk__49893 = G__50144;
count__49894 = G__50145;
i__49895 = G__50146;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__49892);
if(temp__5753__auto____$1){
var seq__49892__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__49892__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49892__$1);
var G__50148 = cljs.core.chunk_rest(seq__49892__$1);
var G__50149 = c__4556__auto__;
var G__50150 = cljs.core.count(c__4556__auto__);
var G__50151 = (0);
seq__49892 = G__50148;
chunk__49893 = G__50149;
count__49894 = G__50150;
i__49895 = G__50151;
continue;
} else {
var role = cljs.core.first(seq__49892__$1);
var temp__5753__auto___50154__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___50154__$2)){
var spec_50156 = temp__5753__auto___50154__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50156)], 0));
} else {
}


var G__50157 = cljs.core.next(seq__49892__$1);
var G__50158 = null;
var G__50159 = (0);
var G__50160 = (0);
seq__49892 = G__50157;
chunk__49893 = G__50158;
count__49894 = G__50159;
i__49895 = G__50160;
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
var G__50167 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__50168 = cljs.core.ex_cause(t);
via = G__50167;
t = G__50168;
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
var map__49902 = datafied_throwable;
var map__49902__$1 = (((((!((map__49902 == null))))?(((((map__49902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49902):map__49902);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49902__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49902__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49902__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__49903 = cljs.core.last(via);
var map__49903__$1 = (((((!((map__49903 == null))))?(((((map__49903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49903):map__49903);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49903__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49903__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49903__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__49904 = data;
var map__49904__$1 = (((((!((map__49904 == null))))?(((((map__49904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49904):map__49904);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49904__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49904__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49904__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__49905 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__49905__$1 = (((((!((map__49905 == null))))?(((((map__49905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49905):map__49905);
var top_data = map__49905__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49905__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__49912 = phase;
var G__49912__$1 = (((G__49912 instanceof cljs.core.Keyword))?G__49912.fqn:null);
switch (G__49912__$1) {
case "read-source":
var map__49915 = data;
var map__49915__$1 = (((((!((map__49915 == null))))?(((((map__49915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49915):map__49915);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49915__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49915__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__49917 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__49917__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49917,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49917);
var G__49917__$2 = (cljs.core.truth_((function (){var fexpr__49918 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49918.cljs$core$IFn$_invoke$arity$1 ? fexpr__49918.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49918.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49917__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49917__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49917__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49917__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__49919 = top_data;
var G__49919__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49919,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49919);
var G__49919__$2 = (cljs.core.truth_((function (){var fexpr__49920 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49920.cljs$core$IFn$_invoke$arity$1 ? fexpr__49920.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49920.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49919__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49919__$1);
var G__49919__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49919__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49919__$2);
var G__49919__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49919__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49919__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49919__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49919__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__49921 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49921,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49921,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49921,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49921,(3),null);
var G__49924 = top_data;
var G__49924__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49924,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__49924);
var G__49924__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49924__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__49924__$1);
var G__49924__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49924__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__49924__$2);
var G__49924__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49924__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49924__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49924__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49924__$4;
}

break;
case "execution":
var vec__49925 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49925,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49925,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49925,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49925,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49901_SHARP_){
var or__4126__auto__ = (p1__49901_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__49929 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49929.cljs$core$IFn$_invoke$arity$1 ? fexpr__49929.cljs$core$IFn$_invoke$arity$1(p1__49901_SHARP_) : fexpr__49929.call(null,p1__49901_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__49930 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__49930__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49930,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__49930);
var G__49930__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49930__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49930__$1);
var G__49930__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49930__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__49930__$2);
var G__49930__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49930__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__49930__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49930__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49930__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49912__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__49952){
var map__49953 = p__49952;
var map__49953__$1 = (((((!((map__49953 == null))))?(((((map__49953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49953):map__49953);
var triage_data = map__49953__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49953__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49953__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49953__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49953__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49953__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49953__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49953__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49953__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__49976 = phase;
var G__49976__$1 = (((G__49976 instanceof cljs.core.Keyword))?G__49976.fqn:null);
switch (G__49976__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__49977 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__49978 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49979 = loc;
var G__49980 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49989_50207 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49990_50208 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49991_50209 = true;
var _STAR_print_fn_STAR__temp_val__49992_50210 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49991_50209);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49992_50210);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49950_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49950_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49990_50208);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49989_50207);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49977,G__49978,G__49979,G__49980) : format.call(null,G__49977,G__49978,G__49979,G__49980));

break;
case "macroexpansion":
var G__50010 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__50011 = cause_type;
var G__50012 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50013 = loc;
var G__50014 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50010,G__50011,G__50012,G__50013,G__50014) : format.call(null,G__50010,G__50011,G__50012,G__50013,G__50014));

break;
case "compile-syntax-check":
var G__50015 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__50016 = cause_type;
var G__50017 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50018 = loc;
var G__50019 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50015,G__50016,G__50017,G__50018,G__50019) : format.call(null,G__50015,G__50016,G__50017,G__50018,G__50019));

break;
case "compilation":
var G__50020 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__50021 = cause_type;
var G__50022 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50023 = loc;
var G__50024 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50020,G__50021,G__50022,G__50023,G__50024) : format.call(null,G__50020,G__50021,G__50022,G__50023,G__50024));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__50025 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__50026 = symbol;
var G__50027 = loc;
var G__50028 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50029_50225 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50030_50226 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50031_50227 = true;
var _STAR_print_fn_STAR__temp_val__50032_50228 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50031_50227);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50032_50228);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49951_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49951_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50030_50226);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50029_50225);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50025,G__50026,G__50027,G__50028) : format.call(null,G__50025,G__50026,G__50027,G__50028));
} else {
var G__50040 = "Execution error%s at %s(%s).\n%s\n";
var G__50041 = cause_type;
var G__50042 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50043 = loc;
var G__50044 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50040,G__50041,G__50042,G__50043,G__50044) : format.call(null,G__50040,G__50041,G__50042,G__50043,G__50044));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49976__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

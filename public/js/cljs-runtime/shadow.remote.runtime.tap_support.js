goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__50412,p__50413){
var map__50415 = p__50412;
var map__50415__$1 = (((((!((map__50415 == null))))?(((((map__50415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50415):map__50415);
var svc = map__50415__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50415__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50415__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50415__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__50416 = p__50413;
var map__50416__$1 = (((((!((map__50416 == null))))?(((((map__50416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50416):map__50416);
var msg = map__50416__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50416__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50416__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50416__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50416__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__50425,p__50426){
var map__50427 = p__50425;
var map__50427__$1 = (((((!((map__50427 == null))))?(((((map__50427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50427):map__50427);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50427__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__50428 = p__50426;
var map__50428__$1 = (((((!((map__50428 == null))))?(((((map__50428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50428):map__50428);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50428__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__50437,p__50438){
var map__50439 = p__50437;
var map__50439__$1 = (((((!((map__50439 == null))))?(((((map__50439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50439):map__50439);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50439__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50439__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__50440 = p__50438;
var map__50440__$1 = (((((!((map__50440 == null))))?(((((map__50440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50440):map__50440);
var msg = map__50440__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50440__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__50446,tid){
var map__50448 = p__50446;
var map__50448__$1 = (((((!((map__50448 == null))))?(((((map__50448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50448):map__50448);
var svc = map__50448__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50448__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__50459 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__50460 = null;
var count__50461 = (0);
var i__50462 = (0);
while(true){
if((i__50462 < count__50461)){
var vec__50481 = chunk__50460.cljs$core$IIndexed$_nth$arity$2(null,i__50462);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50481,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50481,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__50499 = seq__50459;
var G__50500 = chunk__50460;
var G__50501 = count__50461;
var G__50502 = (i__50462 + (1));
seq__50459 = G__50499;
chunk__50460 = G__50500;
count__50461 = G__50501;
i__50462 = G__50502;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50459);
if(temp__5753__auto__){
var seq__50459__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50459__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50459__$1);
var G__50503 = cljs.core.chunk_rest(seq__50459__$1);
var G__50504 = c__4556__auto__;
var G__50505 = cljs.core.count(c__4556__auto__);
var G__50506 = (0);
seq__50459 = G__50503;
chunk__50460 = G__50504;
count__50461 = G__50505;
i__50462 = G__50506;
continue;
} else {
var vec__50485 = cljs.core.first(seq__50459__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50485,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50485,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__50507 = cljs.core.next(seq__50459__$1);
var G__50508 = null;
var G__50509 = (0);
var G__50510 = (0);
seq__50459 = G__50507;
chunk__50460 = G__50508;
count__50461 = G__50509;
i__50462 = G__50510;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__50451_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__50451_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__50452_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__50452_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__50453_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__50453_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__50455_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__50455_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__50494){
var map__50495 = p__50494;
var map__50495__$1 = (((((!((map__50495 == null))))?(((((map__50495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50495):map__50495);
var svc = map__50495__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50495__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50495__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map

goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__43807 = arguments.length;
switch (G__43807) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43808 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43808 = (function (f,blockable,meta43809){
this.f = f;
this.blockable = blockable;
this.meta43809 = meta43809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43810,meta43809__$1){
var self__ = this;
var _43810__$1 = this;
return (new cljs.core.async.t_cljs$core$async43808(self__.f,self__.blockable,meta43809__$1));
}));

(cljs.core.async.t_cljs$core$async43808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43810){
var self__ = this;
var _43810__$1 = this;
return self__.meta43809;
}));

(cljs.core.async.t_cljs$core$async43808.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43808.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43808.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async43808.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async43808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43809","meta43809",43561381,null)], null);
}));

(cljs.core.async.t_cljs$core$async43808.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43808.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43808");

(cljs.core.async.t_cljs$core$async43808.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43808");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43808.
 */
cljs.core.async.__GT_t_cljs$core$async43808 = (function cljs$core$async$__GT_t_cljs$core$async43808(f__$1,blockable__$1,meta43809){
return (new cljs.core.async.t_cljs$core$async43808(f__$1,blockable__$1,meta43809));
});

}

return (new cljs.core.async.t_cljs$core$async43808(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__43833 = arguments.length;
switch (G__43833) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__43835 = arguments.length;
switch (G__43835) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__43840 = arguments.length;
switch (G__43840) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_46743 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46743) : fn1.call(null,val_46743));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46743) : fn1.call(null,val_46743));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__43849 = arguments.length;
switch (G__43849) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___46762 = n;
var x_46763 = (0);
while(true){
if((x_46763 < n__4613__auto___46762)){
(a[x_46763] = x_46763);

var G__46764 = (x_46763 + (1));
x_46763 = G__46764;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43873 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43873 = (function (flag,meta43874){
this.flag = flag;
this.meta43874 = meta43874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43875,meta43874__$1){
var self__ = this;
var _43875__$1 = this;
return (new cljs.core.async.t_cljs$core$async43873(self__.flag,meta43874__$1));
}));

(cljs.core.async.t_cljs$core$async43873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43875){
var self__ = this;
var _43875__$1 = this;
return self__.meta43874;
}));

(cljs.core.async.t_cljs$core$async43873.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43873.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43873.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43873.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async43873.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43874","meta43874",-1144896625,null)], null);
}));

(cljs.core.async.t_cljs$core$async43873.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43873");

(cljs.core.async.t_cljs$core$async43873.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43873");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43873.
 */
cljs.core.async.__GT_t_cljs$core$async43873 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43873(flag__$1,meta43874){
return (new cljs.core.async.t_cljs$core$async43873(flag__$1,meta43874));
});

}

return (new cljs.core.async.t_cljs$core$async43873(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43886 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43886 = (function (flag,cb,meta43887){
this.flag = flag;
this.cb = cb;
this.meta43887 = meta43887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43888,meta43887__$1){
var self__ = this;
var _43888__$1 = this;
return (new cljs.core.async.t_cljs$core$async43886(self__.flag,self__.cb,meta43887__$1));
}));

(cljs.core.async.t_cljs$core$async43886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43888){
var self__ = this;
var _43888__$1 = this;
return self__.meta43887;
}));

(cljs.core.async.t_cljs$core$async43886.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43886.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43886.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43886.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async43886.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43887","meta43887",1635683643,null)], null);
}));

(cljs.core.async.t_cljs$core$async43886.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43886");

(cljs.core.async.t_cljs$core$async43886.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43886");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43886.
 */
cljs.core.async.__GT_t_cljs$core$async43886 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43886(flag__$1,cb__$1,meta43887){
return (new cljs.core.async.t_cljs$core$async43886(flag__$1,cb__$1,meta43887));
});

}

return (new cljs.core.async.t_cljs$core$async43886(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43914_SHARP_){
var G__43925 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43914_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43925) : fret.call(null,G__43925));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43915_SHARP_){
var G__43928 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43915_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43928) : fret.call(null,G__43928));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__46781 = (i + (1));
i = G__46781;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___46783 = arguments.length;
var i__4737__auto___46784 = (0);
while(true){
if((i__4737__auto___46784 < len__4736__auto___46783)){
args__4742__auto__.push((arguments[i__4737__auto___46784]));

var G__46785 = (i__4737__auto___46784 + (1));
i__4737__auto___46784 = G__46785;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43946){
var map__43948 = p__43946;
var map__43948__$1 = (((((!((map__43948 == null))))?(((((map__43948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43948):map__43948);
var opts = map__43948__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43940){
var G__43941 = cljs.core.first(seq43940);
var seq43940__$1 = cljs.core.next(seq43940);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43941,seq43940__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__43967 = arguments.length;
switch (G__43967) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__43729__auto___46807 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43730__auto__ = (function (){var switch__43594__auto__ = (function (state_44016){
var state_val_44018 = (state_44016[(1)]);
if((state_val_44018 === (7))){
var inst_44011 = (state_44016[(2)]);
var state_44016__$1 = state_44016;
var statearr_44024_46814 = state_44016__$1;
(statearr_44024_46814[(2)] = inst_44011);

(statearr_44024_46814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44018 === (1))){
var state_44016__$1 = state_44016;
var statearr_44025_46815 = state_44016__$1;
(statearr_44025_46815[(2)] = null);

(statearr_44025_46815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44018 === (4))){
var inst_43981 = (state_44016[(7)]);
var inst_43981__$1 = (state_44016[(2)]);
var inst_43991 = (inst_43981__$1 == null);
var state_44016__$1 = (function (){var statearr_44030 = state_44016;
(statearr_44030[(7)] = inst_43981__$1);

return statearr_44030;
})();
if(cljs.core.truth_(inst_43991)){
var statearr_44031_46820 = state_44016__$1;
(statearr_44031_46820[(1)] = (5));

} else {
var statearr_44032_46821 = state_44016__$1;
(statearr_44032_46821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44018 === (13))){
var state_44016__$1 = state_44016;
var statearr_44037_46825 = state_44016__$1;
(statearr_44037_46825[(2)] = null);

(statearr_44037_46825[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44018 === (6))){
var inst_43981 = (state_44016[(7)]);
var state_44016__$1 = state_44016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44016__$1,(11),to,inst_43981);
} else {
if((state_val_44018 === (3))){
var inst_44014 = (state_44016[(2)]);
var state_44016__$1 = state_44016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44016__$1,inst_44014);
} else {
if((state_val_44018 === (12))){
var state_44016__$1 = state_44016;
var statearr_44044_46826 = state_44016__$1;
(statearr_44044_46826[(2)] = null);

(statearr_44044_46826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44018 === (2))){
var state_44016__$1 = state_44016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44016__$1,(4),from);
} else {
if((state_val_44018 === (11))){
var inst_44004 = (state_44016[(2)]);
var state_44016__$1 = state_44016;
if(cljs.core.truth_(inst_44004)){
var statearr_44048_46828 = state_44016__$1;
(statearr_44048_46828[(1)] = (12));

} else {
var statearr_44049_46829 = state_44016__$1;
(statearr_44049_46829[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44018 === (9))){
var state_44016__$1 = state_44016;
var statearr_44050_46831 = state_44016__$1;
(statearr_44050_46831[(2)] = null);

(statearr_44050_46831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44018 === (5))){
var state_44016__$1 = state_44016;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44052_46834 = state_44016__$1;
(statearr_44052_46834[(1)] = (8));

} else {
var statearr_44055_46836 = state_44016__$1;
(statearr_44055_46836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44018 === (14))){
var inst_44009 = (state_44016[(2)]);
var state_44016__$1 = state_44016;
var statearr_44057_46837 = state_44016__$1;
(statearr_44057_46837[(2)] = inst_44009);

(statearr_44057_46837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44018 === (10))){
var inst_44001 = (state_44016[(2)]);
var state_44016__$1 = state_44016;
var statearr_44058_46851 = state_44016__$1;
(statearr_44058_46851[(2)] = inst_44001);

(statearr_44058_46851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44018 === (8))){
var inst_43998 = cljs.core.async.close_BANG_(to);
var state_44016__$1 = state_44016;
var statearr_44065_46852 = state_44016__$1;
(statearr_44065_46852[(2)] = inst_43998);

(statearr_44065_46852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43595__auto__ = null;
var cljs$core$async$state_machine__43595__auto____0 = (function (){
var statearr_44066 = [null,null,null,null,null,null,null,null];
(statearr_44066[(0)] = cljs$core$async$state_machine__43595__auto__);

(statearr_44066[(1)] = (1));

return statearr_44066;
});
var cljs$core$async$state_machine__43595__auto____1 = (function (state_44016){
while(true){
var ret_value__43596__auto__ = (function (){try{while(true){
var result__43597__auto__ = switch__43594__auto__(state_44016);
if(cljs.core.keyword_identical_QMARK_(result__43597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43597__auto__;
}
break;
}
}catch (e44067){var ex__43598__auto__ = e44067;
var statearr_44068_46859 = state_44016;
(statearr_44068_46859[(2)] = ex__43598__auto__);


if(cljs.core.seq((state_44016[(4)]))){
var statearr_44069_46860 = state_44016;
(statearr_44069_46860[(1)] = cljs.core.first((state_44016[(4)])));

} else {
throw ex__43598__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46861 = state_44016;
state_44016 = G__46861;
continue;
} else {
return ret_value__43596__auto__;
}
break;
}
});
cljs$core$async$state_machine__43595__auto__ = function(state_44016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43595__auto____1.call(this,state_44016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43595__auto____0;
cljs$core$async$state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43595__auto____1;
return cljs$core$async$state_machine__43595__auto__;
})()
})();
var state__43731__auto__ = (function (){var statearr_44071 = f__43730__auto__();
(statearr_44071[(6)] = c__43729__auto___46807);

return statearr_44071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43731__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__44075){
var vec__44076 = p__44075;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44076,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44076,(1),null);
var job = vec__44076;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__43729__auto___46873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43730__auto__ = (function (){var switch__43594__auto__ = (function (state_44083){
var state_val_44084 = (state_44083[(1)]);
if((state_val_44084 === (1))){
var state_44083__$1 = state_44083;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44083__$1,(2),res,v);
} else {
if((state_val_44084 === (2))){
var inst_44080 = (state_44083[(2)]);
var inst_44081 = cljs.core.async.close_BANG_(res);
var state_44083__$1 = (function (){var statearr_44088 = state_44083;
(statearr_44088[(7)] = inst_44080);

return statearr_44088;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44083__$1,inst_44081);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____0 = (function (){
var statearr_44090 = [null,null,null,null,null,null,null,null];
(statearr_44090[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__);

(statearr_44090[(1)] = (1));

return statearr_44090;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____1 = (function (state_44083){
while(true){
var ret_value__43596__auto__ = (function (){try{while(true){
var result__43597__auto__ = switch__43594__auto__(state_44083);
if(cljs.core.keyword_identical_QMARK_(result__43597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43597__auto__;
}
break;
}
}catch (e44091){var ex__43598__auto__ = e44091;
var statearr_44092_46880 = state_44083;
(statearr_44092_46880[(2)] = ex__43598__auto__);


if(cljs.core.seq((state_44083[(4)]))){
var statearr_44093_46884 = state_44083;
(statearr_44093_46884[(1)] = cljs.core.first((state_44083[(4)])));

} else {
throw ex__43598__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46885 = state_44083;
state_44083 = G__46885;
continue;
} else {
return ret_value__43596__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__ = function(state_44083){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____1.call(this,state_44083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__;
})()
})();
var state__43731__auto__ = (function (){var statearr_44094 = f__43730__auto__();
(statearr_44094[(6)] = c__43729__auto___46873);

return statearr_44094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43731__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__44097){
var vec__44099 = p__44097;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44099,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44099,(1),null);
var job = vec__44099;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___46889 = n;
var __46890 = (0);
while(true){
if((__46890 < n__4613__auto___46889)){
var G__44103_46892 = type;
var G__44103_46893__$1 = (((G__44103_46892 instanceof cljs.core.Keyword))?G__44103_46892.fqn:null);
switch (G__44103_46893__$1) {
case "compute":
var c__43729__auto___46896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46890,c__43729__auto___46896,G__44103_46892,G__44103_46893__$1,n__4613__auto___46889,jobs,results,process,async){
return (function (){
var f__43730__auto__ = (function (){var switch__43594__auto__ = ((function (__46890,c__43729__auto___46896,G__44103_46892,G__44103_46893__$1,n__4613__auto___46889,jobs,results,process,async){
return (function (state_44116){
var state_val_44117 = (state_44116[(1)]);
if((state_val_44117 === (1))){
var state_44116__$1 = state_44116;
var statearr_44118_46903 = state_44116__$1;
(statearr_44118_46903[(2)] = null);

(statearr_44118_46903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44117 === (2))){
var state_44116__$1 = state_44116;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44116__$1,(4),jobs);
} else {
if((state_val_44117 === (3))){
var inst_44114 = (state_44116[(2)]);
var state_44116__$1 = state_44116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44116__$1,inst_44114);
} else {
if((state_val_44117 === (4))){
var inst_44106 = (state_44116[(2)]);
var inst_44107 = process(inst_44106);
var state_44116__$1 = state_44116;
if(cljs.core.truth_(inst_44107)){
var statearr_44119_46906 = state_44116__$1;
(statearr_44119_46906[(1)] = (5));

} else {
var statearr_44120_46907 = state_44116__$1;
(statearr_44120_46907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44117 === (5))){
var state_44116__$1 = state_44116;
var statearr_44121_46908 = state_44116__$1;
(statearr_44121_46908[(2)] = null);

(statearr_44121_46908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44117 === (6))){
var state_44116__$1 = state_44116;
var statearr_44128_46909 = state_44116__$1;
(statearr_44128_46909[(2)] = null);

(statearr_44128_46909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44117 === (7))){
var inst_44112 = (state_44116[(2)]);
var state_44116__$1 = state_44116;
var statearr_44129_46910 = state_44116__$1;
(statearr_44129_46910[(2)] = inst_44112);

(statearr_44129_46910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46890,c__43729__auto___46896,G__44103_46892,G__44103_46893__$1,n__4613__auto___46889,jobs,results,process,async))
;
return ((function (__46890,switch__43594__auto__,c__43729__auto___46896,G__44103_46892,G__44103_46893__$1,n__4613__auto___46889,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____0 = (function (){
var statearr_44130 = [null,null,null,null,null,null,null];
(statearr_44130[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__);

(statearr_44130[(1)] = (1));

return statearr_44130;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____1 = (function (state_44116){
while(true){
var ret_value__43596__auto__ = (function (){try{while(true){
var result__43597__auto__ = switch__43594__auto__(state_44116);
if(cljs.core.keyword_identical_QMARK_(result__43597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43597__auto__;
}
break;
}
}catch (e44131){var ex__43598__auto__ = e44131;
var statearr_44132_46914 = state_44116;
(statearr_44132_46914[(2)] = ex__43598__auto__);


if(cljs.core.seq((state_44116[(4)]))){
var statearr_44133_46916 = state_44116;
(statearr_44133_46916[(1)] = cljs.core.first((state_44116[(4)])));

} else {
throw ex__43598__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46917 = state_44116;
state_44116 = G__46917;
continue;
} else {
return ret_value__43596__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__ = function(state_44116){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____1.call(this,state_44116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__;
})()
;})(__46890,switch__43594__auto__,c__43729__auto___46896,G__44103_46892,G__44103_46893__$1,n__4613__auto___46889,jobs,results,process,async))
})();
var state__43731__auto__ = (function (){var statearr_44134 = f__43730__auto__();
(statearr_44134[(6)] = c__43729__auto___46896);

return statearr_44134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43731__auto__);
});})(__46890,c__43729__auto___46896,G__44103_46892,G__44103_46893__$1,n__4613__auto___46889,jobs,results,process,async))
);


break;
case "async":
var c__43729__auto___46919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46890,c__43729__auto___46919,G__44103_46892,G__44103_46893__$1,n__4613__auto___46889,jobs,results,process,async){
return (function (){
var f__43730__auto__ = (function (){var switch__43594__auto__ = ((function (__46890,c__43729__auto___46919,G__44103_46892,G__44103_46893__$1,n__4613__auto___46889,jobs,results,process,async){
return (function (state_44150){
var state_val_44151 = (state_44150[(1)]);
if((state_val_44151 === (1))){
var state_44150__$1 = state_44150;
var statearr_44153_46921 = state_44150__$1;
(statearr_44153_46921[(2)] = null);

(statearr_44153_46921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44151 === (2))){
var state_44150__$1 = state_44150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44150__$1,(4),jobs);
} else {
if((state_val_44151 === (3))){
var inst_44147 = (state_44150[(2)]);
var state_44150__$1 = state_44150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44150__$1,inst_44147);
} else {
if((state_val_44151 === (4))){
var inst_44138 = (state_44150[(2)]);
var inst_44139 = async(inst_44138);
var state_44150__$1 = state_44150;
if(cljs.core.truth_(inst_44139)){
var statearr_44154_46922 = state_44150__$1;
(statearr_44154_46922[(1)] = (5));

} else {
var statearr_44155_46923 = state_44150__$1;
(statearr_44155_46923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44151 === (5))){
var state_44150__$1 = state_44150;
var statearr_44156_46924 = state_44150__$1;
(statearr_44156_46924[(2)] = null);

(statearr_44156_46924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44151 === (6))){
var state_44150__$1 = state_44150;
var statearr_44157_46926 = state_44150__$1;
(statearr_44157_46926[(2)] = null);

(statearr_44157_46926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44151 === (7))){
var inst_44145 = (state_44150[(2)]);
var state_44150__$1 = state_44150;
var statearr_44158_46927 = state_44150__$1;
(statearr_44158_46927[(2)] = inst_44145);

(statearr_44158_46927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46890,c__43729__auto___46919,G__44103_46892,G__44103_46893__$1,n__4613__auto___46889,jobs,results,process,async))
;
return ((function (__46890,switch__43594__auto__,c__43729__auto___46919,G__44103_46892,G__44103_46893__$1,n__4613__auto___46889,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____0 = (function (){
var statearr_44159 = [null,null,null,null,null,null,null];
(statearr_44159[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__);

(statearr_44159[(1)] = (1));

return statearr_44159;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____1 = (function (state_44150){
while(true){
var ret_value__43596__auto__ = (function (){try{while(true){
var result__43597__auto__ = switch__43594__auto__(state_44150);
if(cljs.core.keyword_identical_QMARK_(result__43597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43597__auto__;
}
break;
}
}catch (e44163){var ex__43598__auto__ = e44163;
var statearr_44164_46931 = state_44150;
(statearr_44164_46931[(2)] = ex__43598__auto__);


if(cljs.core.seq((state_44150[(4)]))){
var statearr_44165_46932 = state_44150;
(statearr_44165_46932[(1)] = cljs.core.first((state_44150[(4)])));

} else {
throw ex__43598__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46933 = state_44150;
state_44150 = G__46933;
continue;
} else {
return ret_value__43596__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__ = function(state_44150){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____1.call(this,state_44150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__;
})()
;})(__46890,switch__43594__auto__,c__43729__auto___46919,G__44103_46892,G__44103_46893__$1,n__4613__auto___46889,jobs,results,process,async))
})();
var state__43731__auto__ = (function (){var statearr_44166 = f__43730__auto__();
(statearr_44166[(6)] = c__43729__auto___46919);

return statearr_44166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43731__auto__);
});})(__46890,c__43729__auto___46919,G__44103_46892,G__44103_46893__$1,n__4613__auto___46889,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44103_46893__$1)].join('')));

}

var G__46941 = (__46890 + (1));
__46890 = G__46941;
continue;
} else {
}
break;
}

var c__43729__auto___46942 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43730__auto__ = (function (){var switch__43594__auto__ = (function (state_44188){
var state_val_44189 = (state_44188[(1)]);
if((state_val_44189 === (7))){
var inst_44184 = (state_44188[(2)]);
var state_44188__$1 = state_44188;
var statearr_44190_46943 = state_44188__$1;
(statearr_44190_46943[(2)] = inst_44184);

(statearr_44190_46943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44189 === (1))){
var state_44188__$1 = state_44188;
var statearr_44191_46945 = state_44188__$1;
(statearr_44191_46945[(2)] = null);

(statearr_44191_46945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44189 === (4))){
var inst_44169 = (state_44188[(7)]);
var inst_44169__$1 = (state_44188[(2)]);
var inst_44170 = (inst_44169__$1 == null);
var state_44188__$1 = (function (){var statearr_44192 = state_44188;
(statearr_44192[(7)] = inst_44169__$1);

return statearr_44192;
})();
if(cljs.core.truth_(inst_44170)){
var statearr_44193_46948 = state_44188__$1;
(statearr_44193_46948[(1)] = (5));

} else {
var statearr_44194_46949 = state_44188__$1;
(statearr_44194_46949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44189 === (6))){
var inst_44169 = (state_44188[(7)]);
var inst_44174 = (state_44188[(8)]);
var inst_44174__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44175 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44176 = [inst_44169,inst_44174__$1];
var inst_44177 = (new cljs.core.PersistentVector(null,2,(5),inst_44175,inst_44176,null));
var state_44188__$1 = (function (){var statearr_44195 = state_44188;
(statearr_44195[(8)] = inst_44174__$1);

return statearr_44195;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44188__$1,(8),jobs,inst_44177);
} else {
if((state_val_44189 === (3))){
var inst_44186 = (state_44188[(2)]);
var state_44188__$1 = state_44188;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44188__$1,inst_44186);
} else {
if((state_val_44189 === (2))){
var state_44188__$1 = state_44188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44188__$1,(4),from);
} else {
if((state_val_44189 === (9))){
var inst_44181 = (state_44188[(2)]);
var state_44188__$1 = (function (){var statearr_44196 = state_44188;
(statearr_44196[(9)] = inst_44181);

return statearr_44196;
})();
var statearr_44197_46950 = state_44188__$1;
(statearr_44197_46950[(2)] = null);

(statearr_44197_46950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44189 === (5))){
var inst_44172 = cljs.core.async.close_BANG_(jobs);
var state_44188__$1 = state_44188;
var statearr_44201_46953 = state_44188__$1;
(statearr_44201_46953[(2)] = inst_44172);

(statearr_44201_46953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44189 === (8))){
var inst_44174 = (state_44188[(8)]);
var inst_44179 = (state_44188[(2)]);
var state_44188__$1 = (function (){var statearr_44202 = state_44188;
(statearr_44202[(10)] = inst_44179);

return statearr_44202;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44188__$1,(9),results,inst_44174);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____0 = (function (){
var statearr_44203 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44203[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__);

(statearr_44203[(1)] = (1));

return statearr_44203;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____1 = (function (state_44188){
while(true){
var ret_value__43596__auto__ = (function (){try{while(true){
var result__43597__auto__ = switch__43594__auto__(state_44188);
if(cljs.core.keyword_identical_QMARK_(result__43597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43597__auto__;
}
break;
}
}catch (e44204){var ex__43598__auto__ = e44204;
var statearr_44205_46969 = state_44188;
(statearr_44205_46969[(2)] = ex__43598__auto__);


if(cljs.core.seq((state_44188[(4)]))){
var statearr_44206_46970 = state_44188;
(statearr_44206_46970[(1)] = cljs.core.first((state_44188[(4)])));

} else {
throw ex__43598__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46975 = state_44188;
state_44188 = G__46975;
continue;
} else {
return ret_value__43596__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__ = function(state_44188){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____1.call(this,state_44188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__;
})()
})();
var state__43731__auto__ = (function (){var statearr_44210 = f__43730__auto__();
(statearr_44210[(6)] = c__43729__auto___46942);

return statearr_44210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43731__auto__);
}));


var c__43729__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43730__auto__ = (function (){var switch__43594__auto__ = (function (state_44252){
var state_val_44253 = (state_44252[(1)]);
if((state_val_44253 === (7))){
var inst_44248 = (state_44252[(2)]);
var state_44252__$1 = state_44252;
var statearr_44254_46990 = state_44252__$1;
(statearr_44254_46990[(2)] = inst_44248);

(statearr_44254_46990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44253 === (20))){
var state_44252__$1 = state_44252;
var statearr_44256_46992 = state_44252__$1;
(statearr_44256_46992[(2)] = null);

(statearr_44256_46992[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44253 === (1))){
var state_44252__$1 = state_44252;
var statearr_44260_46993 = state_44252__$1;
(statearr_44260_46993[(2)] = null);

(statearr_44260_46993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44253 === (4))){
var inst_44216 = (state_44252[(7)]);
var inst_44216__$1 = (state_44252[(2)]);
var inst_44218 = (inst_44216__$1 == null);
var state_44252__$1 = (function (){var statearr_44268 = state_44252;
(statearr_44268[(7)] = inst_44216__$1);

return statearr_44268;
})();
if(cljs.core.truth_(inst_44218)){
var statearr_44269_47002 = state_44252__$1;
(statearr_44269_47002[(1)] = (5));

} else {
var statearr_44270_47004 = state_44252__$1;
(statearr_44270_47004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44253 === (15))){
var inst_44230 = (state_44252[(8)]);
var state_44252__$1 = state_44252;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44252__$1,(18),to,inst_44230);
} else {
if((state_val_44253 === (21))){
var inst_44243 = (state_44252[(2)]);
var state_44252__$1 = state_44252;
var statearr_44274_47008 = state_44252__$1;
(statearr_44274_47008[(2)] = inst_44243);

(statearr_44274_47008[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44253 === (13))){
var inst_44245 = (state_44252[(2)]);
var state_44252__$1 = (function (){var statearr_44276 = state_44252;
(statearr_44276[(9)] = inst_44245);

return statearr_44276;
})();
var statearr_44277_47009 = state_44252__$1;
(statearr_44277_47009[(2)] = null);

(statearr_44277_47009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44253 === (6))){
var inst_44216 = (state_44252[(7)]);
var state_44252__$1 = state_44252;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44252__$1,(11),inst_44216);
} else {
if((state_val_44253 === (17))){
var inst_44238 = (state_44252[(2)]);
var state_44252__$1 = state_44252;
if(cljs.core.truth_(inst_44238)){
var statearr_44278_47011 = state_44252__$1;
(statearr_44278_47011[(1)] = (19));

} else {
var statearr_44279_47012 = state_44252__$1;
(statearr_44279_47012[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44253 === (3))){
var inst_44250 = (state_44252[(2)]);
var state_44252__$1 = state_44252;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44252__$1,inst_44250);
} else {
if((state_val_44253 === (12))){
var inst_44227 = (state_44252[(10)]);
var state_44252__$1 = state_44252;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44252__$1,(14),inst_44227);
} else {
if((state_val_44253 === (2))){
var state_44252__$1 = state_44252;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44252__$1,(4),results);
} else {
if((state_val_44253 === (19))){
var state_44252__$1 = state_44252;
var statearr_44280_47014 = state_44252__$1;
(statearr_44280_47014[(2)] = null);

(statearr_44280_47014[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44253 === (11))){
var inst_44227 = (state_44252[(2)]);
var state_44252__$1 = (function (){var statearr_44284 = state_44252;
(statearr_44284[(10)] = inst_44227);

return statearr_44284;
})();
var statearr_44285_47021 = state_44252__$1;
(statearr_44285_47021[(2)] = null);

(statearr_44285_47021[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44253 === (9))){
var state_44252__$1 = state_44252;
var statearr_44288_47022 = state_44252__$1;
(statearr_44288_47022[(2)] = null);

(statearr_44288_47022[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44253 === (5))){
var state_44252__$1 = state_44252;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44289_47023 = state_44252__$1;
(statearr_44289_47023[(1)] = (8));

} else {
var statearr_44290_47025 = state_44252__$1;
(statearr_44290_47025[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44253 === (14))){
var inst_44230 = (state_44252[(8)]);
var inst_44230__$1 = (state_44252[(2)]);
var inst_44231 = (inst_44230__$1 == null);
var inst_44232 = cljs.core.not(inst_44231);
var state_44252__$1 = (function (){var statearr_44296 = state_44252;
(statearr_44296[(8)] = inst_44230__$1);

return statearr_44296;
})();
if(inst_44232){
var statearr_44297_47026 = state_44252__$1;
(statearr_44297_47026[(1)] = (15));

} else {
var statearr_44298_47027 = state_44252__$1;
(statearr_44298_47027[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44253 === (16))){
var state_44252__$1 = state_44252;
var statearr_44299_47028 = state_44252__$1;
(statearr_44299_47028[(2)] = false);

(statearr_44299_47028[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44253 === (10))){
var inst_44224 = (state_44252[(2)]);
var state_44252__$1 = state_44252;
var statearr_44300_47029 = state_44252__$1;
(statearr_44300_47029[(2)] = inst_44224);

(statearr_44300_47029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44253 === (18))){
var inst_44235 = (state_44252[(2)]);
var state_44252__$1 = state_44252;
var statearr_44301_47030 = state_44252__$1;
(statearr_44301_47030[(2)] = inst_44235);

(statearr_44301_47030[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44253 === (8))){
var inst_44221 = cljs.core.async.close_BANG_(to);
var state_44252__$1 = state_44252;
var statearr_44302_47031 = state_44252__$1;
(statearr_44302_47031[(2)] = inst_44221);

(statearr_44302_47031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____0 = (function (){
var statearr_44304 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44304[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__);

(statearr_44304[(1)] = (1));

return statearr_44304;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____1 = (function (state_44252){
while(true){
var ret_value__43596__auto__ = (function (){try{while(true){
var result__43597__auto__ = switch__43594__auto__(state_44252);
if(cljs.core.keyword_identical_QMARK_(result__43597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43597__auto__;
}
break;
}
}catch (e44307){var ex__43598__auto__ = e44307;
var statearr_44308_47032 = state_44252;
(statearr_44308_47032[(2)] = ex__43598__auto__);


if(cljs.core.seq((state_44252[(4)]))){
var statearr_44310_47033 = state_44252;
(statearr_44310_47033[(1)] = cljs.core.first((state_44252[(4)])));

} else {
throw ex__43598__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47040 = state_44252;
state_44252 = G__47040;
continue;
} else {
return ret_value__43596__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__ = function(state_44252){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____1.call(this,state_44252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43595__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43595__auto__;
})()
})();
var state__43731__auto__ = (function (){var statearr_44313 = f__43730__auto__();
(statearr_44313[(6)] = c__43729__auto__);

return statearr_44313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43731__auto__);
}));

return c__43729__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__44318 = arguments.length;
switch (G__44318) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__44328 = arguments.length;
switch (G__44328) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__44335 = arguments.length;
switch (G__44335) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__43729__auto___47055 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43730__auto__ = (function (){var switch__43594__auto__ = (function (state_44389){
var state_val_44390 = (state_44389[(1)]);
if((state_val_44390 === (7))){
var inst_44381 = (state_44389[(2)]);
var state_44389__$1 = state_44389;
var statearr_44406_47056 = state_44389__$1;
(statearr_44406_47056[(2)] = inst_44381);

(statearr_44406_47056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44390 === (1))){
var state_44389__$1 = state_44389;
var statearr_44411_47060 = state_44389__$1;
(statearr_44411_47060[(2)] = null);

(statearr_44411_47060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44390 === (4))){
var inst_44361 = (state_44389[(7)]);
var inst_44361__$1 = (state_44389[(2)]);
var inst_44362 = (inst_44361__$1 == null);
var state_44389__$1 = (function (){var statearr_44412 = state_44389;
(statearr_44412[(7)] = inst_44361__$1);

return statearr_44412;
})();
if(cljs.core.truth_(inst_44362)){
var statearr_44413_47061 = state_44389__$1;
(statearr_44413_47061[(1)] = (5));

} else {
var statearr_44415_47062 = state_44389__$1;
(statearr_44415_47062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44390 === (13))){
var state_44389__$1 = state_44389;
var statearr_44416_47063 = state_44389__$1;
(statearr_44416_47063[(2)] = null);

(statearr_44416_47063[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44390 === (6))){
var inst_44361 = (state_44389[(7)]);
var inst_44368 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44361) : p.call(null,inst_44361));
var state_44389__$1 = state_44389;
if(cljs.core.truth_(inst_44368)){
var statearr_44418_47068 = state_44389__$1;
(statearr_44418_47068[(1)] = (9));

} else {
var statearr_44419_47069 = state_44389__$1;
(statearr_44419_47069[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44390 === (3))){
var inst_44387 = (state_44389[(2)]);
var state_44389__$1 = state_44389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44389__$1,inst_44387);
} else {
if((state_val_44390 === (12))){
var state_44389__$1 = state_44389;
var statearr_44420_47073 = state_44389__$1;
(statearr_44420_47073[(2)] = null);

(statearr_44420_47073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44390 === (2))){
var state_44389__$1 = state_44389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44389__$1,(4),ch);
} else {
if((state_val_44390 === (11))){
var inst_44361 = (state_44389[(7)]);
var inst_44372 = (state_44389[(2)]);
var state_44389__$1 = state_44389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44389__$1,(8),inst_44372,inst_44361);
} else {
if((state_val_44390 === (9))){
var state_44389__$1 = state_44389;
var statearr_44421_47074 = state_44389__$1;
(statearr_44421_47074[(2)] = tc);

(statearr_44421_47074[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44390 === (5))){
var inst_44364 = cljs.core.async.close_BANG_(tc);
var inst_44365 = cljs.core.async.close_BANG_(fc);
var state_44389__$1 = (function (){var statearr_44422 = state_44389;
(statearr_44422[(8)] = inst_44364);

return statearr_44422;
})();
var statearr_44423_47075 = state_44389__$1;
(statearr_44423_47075[(2)] = inst_44365);

(statearr_44423_47075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44390 === (14))){
var inst_44379 = (state_44389[(2)]);
var state_44389__$1 = state_44389;
var statearr_44424_47076 = state_44389__$1;
(statearr_44424_47076[(2)] = inst_44379);

(statearr_44424_47076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44390 === (10))){
var state_44389__$1 = state_44389;
var statearr_44429_47078 = state_44389__$1;
(statearr_44429_47078[(2)] = fc);

(statearr_44429_47078[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44390 === (8))){
var inst_44374 = (state_44389[(2)]);
var state_44389__$1 = state_44389;
if(cljs.core.truth_(inst_44374)){
var statearr_44430_47081 = state_44389__$1;
(statearr_44430_47081[(1)] = (12));

} else {
var statearr_44431_47082 = state_44389__$1;
(statearr_44431_47082[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43595__auto__ = null;
var cljs$core$async$state_machine__43595__auto____0 = (function (){
var statearr_44432 = [null,null,null,null,null,null,null,null,null];
(statearr_44432[(0)] = cljs$core$async$state_machine__43595__auto__);

(statearr_44432[(1)] = (1));

return statearr_44432;
});
var cljs$core$async$state_machine__43595__auto____1 = (function (state_44389){
while(true){
var ret_value__43596__auto__ = (function (){try{while(true){
var result__43597__auto__ = switch__43594__auto__(state_44389);
if(cljs.core.keyword_identical_QMARK_(result__43597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43597__auto__;
}
break;
}
}catch (e44433){var ex__43598__auto__ = e44433;
var statearr_44434_47083 = state_44389;
(statearr_44434_47083[(2)] = ex__43598__auto__);


if(cljs.core.seq((state_44389[(4)]))){
var statearr_44435_47084 = state_44389;
(statearr_44435_47084[(1)] = cljs.core.first((state_44389[(4)])));

} else {
throw ex__43598__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47085 = state_44389;
state_44389 = G__47085;
continue;
} else {
return ret_value__43596__auto__;
}
break;
}
});
cljs$core$async$state_machine__43595__auto__ = function(state_44389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43595__auto____1.call(this,state_44389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43595__auto____0;
cljs$core$async$state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43595__auto____1;
return cljs$core$async$state_machine__43595__auto__;
})()
})();
var state__43731__auto__ = (function (){var statearr_44436 = f__43730__auto__();
(statearr_44436[(6)] = c__43729__auto___47055);

return statearr_44436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43731__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__43729__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43730__auto__ = (function (){var switch__43594__auto__ = (function (state_44467){
var state_val_44468 = (state_44467[(1)]);
if((state_val_44468 === (7))){
var inst_44463 = (state_44467[(2)]);
var state_44467__$1 = state_44467;
var statearr_44469_47086 = state_44467__$1;
(statearr_44469_47086[(2)] = inst_44463);

(statearr_44469_47086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44468 === (1))){
var inst_44437 = init;
var inst_44438 = inst_44437;
var state_44467__$1 = (function (){var statearr_44473 = state_44467;
(statearr_44473[(7)] = inst_44438);

return statearr_44473;
})();
var statearr_44474_47087 = state_44467__$1;
(statearr_44474_47087[(2)] = null);

(statearr_44474_47087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44468 === (4))){
var inst_44447 = (state_44467[(8)]);
var inst_44447__$1 = (state_44467[(2)]);
var inst_44448 = (inst_44447__$1 == null);
var state_44467__$1 = (function (){var statearr_44475 = state_44467;
(statearr_44475[(8)] = inst_44447__$1);

return statearr_44475;
})();
if(cljs.core.truth_(inst_44448)){
var statearr_44476_47088 = state_44467__$1;
(statearr_44476_47088[(1)] = (5));

} else {
var statearr_44477_47089 = state_44467__$1;
(statearr_44477_47089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44468 === (6))){
var inst_44438 = (state_44467[(7)]);
var inst_44447 = (state_44467[(8)]);
var inst_44451 = (state_44467[(9)]);
var inst_44451__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44438,inst_44447) : f.call(null,inst_44438,inst_44447));
var inst_44452 = cljs.core.reduced_QMARK_(inst_44451__$1);
var state_44467__$1 = (function (){var statearr_44478 = state_44467;
(statearr_44478[(9)] = inst_44451__$1);

return statearr_44478;
})();
if(inst_44452){
var statearr_44479_47091 = state_44467__$1;
(statearr_44479_47091[(1)] = (8));

} else {
var statearr_44480_47092 = state_44467__$1;
(statearr_44480_47092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44468 === (3))){
var inst_44465 = (state_44467[(2)]);
var state_44467__$1 = state_44467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44467__$1,inst_44465);
} else {
if((state_val_44468 === (2))){
var state_44467__$1 = state_44467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44467__$1,(4),ch);
} else {
if((state_val_44468 === (9))){
var inst_44451 = (state_44467[(9)]);
var inst_44438 = inst_44451;
var state_44467__$1 = (function (){var statearr_44481 = state_44467;
(statearr_44481[(7)] = inst_44438);

return statearr_44481;
})();
var statearr_44482_47094 = state_44467__$1;
(statearr_44482_47094[(2)] = null);

(statearr_44482_47094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44468 === (5))){
var inst_44438 = (state_44467[(7)]);
var state_44467__$1 = state_44467;
var statearr_44483_47100 = state_44467__$1;
(statearr_44483_47100[(2)] = inst_44438);

(statearr_44483_47100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44468 === (10))){
var inst_44461 = (state_44467[(2)]);
var state_44467__$1 = state_44467;
var statearr_44487_47101 = state_44467__$1;
(statearr_44487_47101[(2)] = inst_44461);

(statearr_44487_47101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44468 === (8))){
var inst_44451 = (state_44467[(9)]);
var inst_44457 = cljs.core.deref(inst_44451);
var state_44467__$1 = state_44467;
var statearr_44488_47102 = state_44467__$1;
(statearr_44488_47102[(2)] = inst_44457);

(statearr_44488_47102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__43595__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43595__auto____0 = (function (){
var statearr_44489 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44489[(0)] = cljs$core$async$reduce_$_state_machine__43595__auto__);

(statearr_44489[(1)] = (1));

return statearr_44489;
});
var cljs$core$async$reduce_$_state_machine__43595__auto____1 = (function (state_44467){
while(true){
var ret_value__43596__auto__ = (function (){try{while(true){
var result__43597__auto__ = switch__43594__auto__(state_44467);
if(cljs.core.keyword_identical_QMARK_(result__43597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43597__auto__;
}
break;
}
}catch (e44490){var ex__43598__auto__ = e44490;
var statearr_44491_47117 = state_44467;
(statearr_44491_47117[(2)] = ex__43598__auto__);


if(cljs.core.seq((state_44467[(4)]))){
var statearr_44495_47118 = state_44467;
(statearr_44495_47118[(1)] = cljs.core.first((state_44467[(4)])));

} else {
throw ex__43598__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47122 = state_44467;
state_44467 = G__47122;
continue;
} else {
return ret_value__43596__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43595__auto__ = function(state_44467){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43595__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43595__auto____1.call(this,state_44467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43595__auto____0;
cljs$core$async$reduce_$_state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43595__auto____1;
return cljs$core$async$reduce_$_state_machine__43595__auto__;
})()
})();
var state__43731__auto__ = (function (){var statearr_44499 = f__43730__auto__();
(statearr_44499[(6)] = c__43729__auto__);

return statearr_44499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43731__auto__);
}));

return c__43729__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__43729__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43730__auto__ = (function (){var switch__43594__auto__ = (function (state_44508){
var state_val_44509 = (state_44508[(1)]);
if((state_val_44509 === (1))){
var inst_44503 = cljs.core.async.reduce(f__$1,init,ch);
var state_44508__$1 = state_44508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44508__$1,(2),inst_44503);
} else {
if((state_val_44509 === (2))){
var inst_44505 = (state_44508[(2)]);
var inst_44506 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44505) : f__$1.call(null,inst_44505));
var state_44508__$1 = state_44508;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44508__$1,inst_44506);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__43595__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43595__auto____0 = (function (){
var statearr_44512 = [null,null,null,null,null,null,null];
(statearr_44512[(0)] = cljs$core$async$transduce_$_state_machine__43595__auto__);

(statearr_44512[(1)] = (1));

return statearr_44512;
});
var cljs$core$async$transduce_$_state_machine__43595__auto____1 = (function (state_44508){
while(true){
var ret_value__43596__auto__ = (function (){try{while(true){
var result__43597__auto__ = switch__43594__auto__(state_44508);
if(cljs.core.keyword_identical_QMARK_(result__43597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43597__auto__;
}
break;
}
}catch (e44513){var ex__43598__auto__ = e44513;
var statearr_44514_47134 = state_44508;
(statearr_44514_47134[(2)] = ex__43598__auto__);


if(cljs.core.seq((state_44508[(4)]))){
var statearr_44515_47135 = state_44508;
(statearr_44515_47135[(1)] = cljs.core.first((state_44508[(4)])));

} else {
throw ex__43598__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47136 = state_44508;
state_44508 = G__47136;
continue;
} else {
return ret_value__43596__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43595__auto__ = function(state_44508){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43595__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43595__auto____1.call(this,state_44508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43595__auto____0;
cljs$core$async$transduce_$_state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43595__auto____1;
return cljs$core$async$transduce_$_state_machine__43595__auto__;
})()
})();
var state__43731__auto__ = (function (){var statearr_44522 = f__43730__auto__();
(statearr_44522[(6)] = c__43729__auto__);

return statearr_44522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43731__auto__);
}));

return c__43729__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__44524 = arguments.length;
switch (G__44524) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__43729__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43730__auto__ = (function (){var switch__43594__auto__ = (function (state_44549){
var state_val_44550 = (state_44549[(1)]);
if((state_val_44550 === (7))){
var inst_44531 = (state_44549[(2)]);
var state_44549__$1 = state_44549;
var statearr_44551_47149 = state_44549__$1;
(statearr_44551_47149[(2)] = inst_44531);

(statearr_44551_47149[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (1))){
var inst_44525 = cljs.core.seq(coll);
var inst_44526 = inst_44525;
var state_44549__$1 = (function (){var statearr_44552 = state_44549;
(statearr_44552[(7)] = inst_44526);

return statearr_44552;
})();
var statearr_44553_47150 = state_44549__$1;
(statearr_44553_47150[(2)] = null);

(statearr_44553_47150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (4))){
var inst_44526 = (state_44549[(7)]);
var inst_44529 = cljs.core.first(inst_44526);
var state_44549__$1 = state_44549;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44549__$1,(7),ch,inst_44529);
} else {
if((state_val_44550 === (13))){
var inst_44543 = (state_44549[(2)]);
var state_44549__$1 = state_44549;
var statearr_44554_47151 = state_44549__$1;
(statearr_44554_47151[(2)] = inst_44543);

(statearr_44554_47151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (6))){
var inst_44534 = (state_44549[(2)]);
var state_44549__$1 = state_44549;
if(cljs.core.truth_(inst_44534)){
var statearr_44555_47153 = state_44549__$1;
(statearr_44555_47153[(1)] = (8));

} else {
var statearr_44557_47154 = state_44549__$1;
(statearr_44557_47154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (3))){
var inst_44547 = (state_44549[(2)]);
var state_44549__$1 = state_44549;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44549__$1,inst_44547);
} else {
if((state_val_44550 === (12))){
var state_44549__$1 = state_44549;
var statearr_44559_47155 = state_44549__$1;
(statearr_44559_47155[(2)] = null);

(statearr_44559_47155[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (2))){
var inst_44526 = (state_44549[(7)]);
var state_44549__$1 = state_44549;
if(cljs.core.truth_(inst_44526)){
var statearr_44560_47156 = state_44549__$1;
(statearr_44560_47156[(1)] = (4));

} else {
var statearr_44561_47157 = state_44549__$1;
(statearr_44561_47157[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (11))){
var inst_44540 = cljs.core.async.close_BANG_(ch);
var state_44549__$1 = state_44549;
var statearr_44563_47158 = state_44549__$1;
(statearr_44563_47158[(2)] = inst_44540);

(statearr_44563_47158[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (9))){
var state_44549__$1 = state_44549;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44567_47159 = state_44549__$1;
(statearr_44567_47159[(1)] = (11));

} else {
var statearr_44568_47160 = state_44549__$1;
(statearr_44568_47160[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (5))){
var inst_44526 = (state_44549[(7)]);
var state_44549__$1 = state_44549;
var statearr_44569_47162 = state_44549__$1;
(statearr_44569_47162[(2)] = inst_44526);

(statearr_44569_47162[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (10))){
var inst_44545 = (state_44549[(2)]);
var state_44549__$1 = state_44549;
var statearr_44570_47167 = state_44549__$1;
(statearr_44570_47167[(2)] = inst_44545);

(statearr_44570_47167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (8))){
var inst_44526 = (state_44549[(7)]);
var inst_44536 = cljs.core.next(inst_44526);
var inst_44526__$1 = inst_44536;
var state_44549__$1 = (function (){var statearr_44576 = state_44549;
(statearr_44576[(7)] = inst_44526__$1);

return statearr_44576;
})();
var statearr_44577_47168 = state_44549__$1;
(statearr_44577_47168[(2)] = null);

(statearr_44577_47168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43595__auto__ = null;
var cljs$core$async$state_machine__43595__auto____0 = (function (){
var statearr_44585 = [null,null,null,null,null,null,null,null];
(statearr_44585[(0)] = cljs$core$async$state_machine__43595__auto__);

(statearr_44585[(1)] = (1));

return statearr_44585;
});
var cljs$core$async$state_machine__43595__auto____1 = (function (state_44549){
while(true){
var ret_value__43596__auto__ = (function (){try{while(true){
var result__43597__auto__ = switch__43594__auto__(state_44549);
if(cljs.core.keyword_identical_QMARK_(result__43597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43597__auto__;
}
break;
}
}catch (e44586){var ex__43598__auto__ = e44586;
var statearr_44587_47174 = state_44549;
(statearr_44587_47174[(2)] = ex__43598__auto__);


if(cljs.core.seq((state_44549[(4)]))){
var statearr_44588_47176 = state_44549;
(statearr_44588_47176[(1)] = cljs.core.first((state_44549[(4)])));

} else {
throw ex__43598__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47178 = state_44549;
state_44549 = G__47178;
continue;
} else {
return ret_value__43596__auto__;
}
break;
}
});
cljs$core$async$state_machine__43595__auto__ = function(state_44549){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43595__auto____1.call(this,state_44549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43595__auto____0;
cljs$core$async$state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43595__auto____1;
return cljs$core$async$state_machine__43595__auto__;
})()
})();
var state__43731__auto__ = (function (){var statearr_44592 = f__43730__auto__();
(statearr_44592[(6)] = c__43729__auto__);

return statearr_44592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43731__auto__);
}));

return c__43729__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__44600 = arguments.length;
switch (G__44600) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_47184 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_47184(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47186 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_47186(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47192 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_47192(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47198 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_47198(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44626 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44626 = (function (ch,cs,meta44627){
this.ch = ch;
this.cs = cs;
this.meta44627 = meta44627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44628,meta44627__$1){
var self__ = this;
var _44628__$1 = this;
return (new cljs.core.async.t_cljs$core$async44626(self__.ch,self__.cs,meta44627__$1));
}));

(cljs.core.async.t_cljs$core$async44626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44628){
var self__ = this;
var _44628__$1 = this;
return self__.meta44627;
}));

(cljs.core.async.t_cljs$core$async44626.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44626.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44626.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44626.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async44626.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async44626.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async44626.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44627","meta44627",635488054,null)], null);
}));

(cljs.core.async.t_cljs$core$async44626.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44626.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44626");

(cljs.core.async.t_cljs$core$async44626.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44626");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44626.
 */
cljs.core.async.__GT_t_cljs$core$async44626 = (function cljs$core$async$mult_$___GT_t_cljs$core$async44626(ch__$1,cs__$1,meta44627){
return (new cljs.core.async.t_cljs$core$async44626(ch__$1,cs__$1,meta44627));
});

}

return (new cljs.core.async.t_cljs$core$async44626(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__43729__auto___47208 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43730__auto__ = (function (){var switch__43594__auto__ = (function (state_44827){
var state_val_44828 = (state_44827[(1)]);
if((state_val_44828 === (7))){
var inst_44823 = (state_44827[(2)]);
var state_44827__$1 = state_44827;
var statearr_44829_47210 = state_44827__$1;
(statearr_44829_47210[(2)] = inst_44823);

(statearr_44829_47210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (20))){
var inst_44702 = (state_44827[(7)]);
var inst_44714 = cljs.core.first(inst_44702);
var inst_44715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44714,(0),null);
var inst_44716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44714,(1),null);
var state_44827__$1 = (function (){var statearr_44830 = state_44827;
(statearr_44830[(8)] = inst_44715);

return statearr_44830;
})();
if(cljs.core.truth_(inst_44716)){
var statearr_44831_47215 = state_44827__$1;
(statearr_44831_47215[(1)] = (22));

} else {
var statearr_44832_47217 = state_44827__$1;
(statearr_44832_47217[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (27))){
var inst_44751 = (state_44827[(9)]);
var inst_44669 = (state_44827[(10)]);
var inst_44764 = (state_44827[(11)]);
var inst_44753 = (state_44827[(12)]);
var inst_44764__$1 = cljs.core._nth(inst_44751,inst_44753);
var inst_44765 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44764__$1,inst_44669,done);
var state_44827__$1 = (function (){var statearr_44836 = state_44827;
(statearr_44836[(11)] = inst_44764__$1);

return statearr_44836;
})();
if(cljs.core.truth_(inst_44765)){
var statearr_44837_47218 = state_44827__$1;
(statearr_44837_47218[(1)] = (30));

} else {
var statearr_44838_47219 = state_44827__$1;
(statearr_44838_47219[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (1))){
var state_44827__$1 = state_44827;
var statearr_44841_47221 = state_44827__$1;
(statearr_44841_47221[(2)] = null);

(statearr_44841_47221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (24))){
var inst_44702 = (state_44827[(7)]);
var inst_44721 = (state_44827[(2)]);
var inst_44722 = cljs.core.next(inst_44702);
var inst_44679 = inst_44722;
var inst_44680 = null;
var inst_44681 = (0);
var inst_44682 = (0);
var state_44827__$1 = (function (){var statearr_44844 = state_44827;
(statearr_44844[(13)] = inst_44721);

(statearr_44844[(14)] = inst_44679);

(statearr_44844[(15)] = inst_44681);

(statearr_44844[(16)] = inst_44680);

(statearr_44844[(17)] = inst_44682);

return statearr_44844;
})();
var statearr_44845_47235 = state_44827__$1;
(statearr_44845_47235[(2)] = null);

(statearr_44845_47235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (39))){
var state_44827__$1 = state_44827;
var statearr_44855_47236 = state_44827__$1;
(statearr_44855_47236[(2)] = null);

(statearr_44855_47236[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (4))){
var inst_44669 = (state_44827[(10)]);
var inst_44669__$1 = (state_44827[(2)]);
var inst_44670 = (inst_44669__$1 == null);
var state_44827__$1 = (function (){var statearr_44856 = state_44827;
(statearr_44856[(10)] = inst_44669__$1);

return statearr_44856;
})();
if(cljs.core.truth_(inst_44670)){
var statearr_44857_47248 = state_44827__$1;
(statearr_44857_47248[(1)] = (5));

} else {
var statearr_44858_47249 = state_44827__$1;
(statearr_44858_47249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (15))){
var inst_44679 = (state_44827[(14)]);
var inst_44681 = (state_44827[(15)]);
var inst_44680 = (state_44827[(16)]);
var inst_44682 = (state_44827[(17)]);
var inst_44698 = (state_44827[(2)]);
var inst_44699 = (inst_44682 + (1));
var tmp44846 = inst_44679;
var tmp44847 = inst_44681;
var tmp44848 = inst_44680;
var inst_44679__$1 = tmp44846;
var inst_44680__$1 = tmp44848;
var inst_44681__$1 = tmp44847;
var inst_44682__$1 = inst_44699;
var state_44827__$1 = (function (){var statearr_44859 = state_44827;
(statearr_44859[(14)] = inst_44679__$1);

(statearr_44859[(18)] = inst_44698);

(statearr_44859[(15)] = inst_44681__$1);

(statearr_44859[(16)] = inst_44680__$1);

(statearr_44859[(17)] = inst_44682__$1);

return statearr_44859;
})();
var statearr_44860_47250 = state_44827__$1;
(statearr_44860_47250[(2)] = null);

(statearr_44860_47250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (21))){
var inst_44725 = (state_44827[(2)]);
var state_44827__$1 = state_44827;
var statearr_44868_47251 = state_44827__$1;
(statearr_44868_47251[(2)] = inst_44725);

(statearr_44868_47251[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (31))){
var inst_44764 = (state_44827[(11)]);
var inst_44768 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44764);
var state_44827__$1 = state_44827;
var statearr_44870_47252 = state_44827__$1;
(statearr_44870_47252[(2)] = inst_44768);

(statearr_44870_47252[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (32))){
var inst_44750 = (state_44827[(19)]);
var inst_44752 = (state_44827[(20)]);
var inst_44751 = (state_44827[(9)]);
var inst_44753 = (state_44827[(12)]);
var inst_44770 = (state_44827[(2)]);
var inst_44772 = (inst_44753 + (1));
var tmp44863 = inst_44750;
var tmp44864 = inst_44752;
var tmp44865 = inst_44751;
var inst_44750__$1 = tmp44863;
var inst_44751__$1 = tmp44865;
var inst_44752__$1 = tmp44864;
var inst_44753__$1 = inst_44772;
var state_44827__$1 = (function (){var statearr_44873 = state_44827;
(statearr_44873[(19)] = inst_44750__$1);

(statearr_44873[(20)] = inst_44752__$1);

(statearr_44873[(9)] = inst_44751__$1);

(statearr_44873[(21)] = inst_44770);

(statearr_44873[(12)] = inst_44753__$1);

return statearr_44873;
})();
var statearr_44874_47254 = state_44827__$1;
(statearr_44874_47254[(2)] = null);

(statearr_44874_47254[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (40))){
var inst_44786 = (state_44827[(22)]);
var inst_44794 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44786);
var state_44827__$1 = state_44827;
var statearr_44875_47258 = state_44827__$1;
(statearr_44875_47258[(2)] = inst_44794);

(statearr_44875_47258[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (33))){
var inst_44775 = (state_44827[(23)]);
var inst_44777 = cljs.core.chunked_seq_QMARK_(inst_44775);
var state_44827__$1 = state_44827;
if(inst_44777){
var statearr_44879_47259 = state_44827__$1;
(statearr_44879_47259[(1)] = (36));

} else {
var statearr_44880_47260 = state_44827__$1;
(statearr_44880_47260[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (13))){
var inst_44692 = (state_44827[(24)]);
var inst_44695 = cljs.core.async.close_BANG_(inst_44692);
var state_44827__$1 = state_44827;
var statearr_44887_47262 = state_44827__$1;
(statearr_44887_47262[(2)] = inst_44695);

(statearr_44887_47262[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (22))){
var inst_44715 = (state_44827[(8)]);
var inst_44718 = cljs.core.async.close_BANG_(inst_44715);
var state_44827__$1 = state_44827;
var statearr_44888_47264 = state_44827__$1;
(statearr_44888_47264[(2)] = inst_44718);

(statearr_44888_47264[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (36))){
var inst_44775 = (state_44827[(23)]);
var inst_44779 = cljs.core.chunk_first(inst_44775);
var inst_44780 = cljs.core.chunk_rest(inst_44775);
var inst_44782 = cljs.core.count(inst_44779);
var inst_44750 = inst_44780;
var inst_44751 = inst_44779;
var inst_44752 = inst_44782;
var inst_44753 = (0);
var state_44827__$1 = (function (){var statearr_44890 = state_44827;
(statearr_44890[(19)] = inst_44750);

(statearr_44890[(20)] = inst_44752);

(statearr_44890[(9)] = inst_44751);

(statearr_44890[(12)] = inst_44753);

return statearr_44890;
})();
var statearr_44891_47266 = state_44827__$1;
(statearr_44891_47266[(2)] = null);

(statearr_44891_47266[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (41))){
var inst_44775 = (state_44827[(23)]);
var inst_44796 = (state_44827[(2)]);
var inst_44797 = cljs.core.next(inst_44775);
var inst_44750 = inst_44797;
var inst_44751 = null;
var inst_44752 = (0);
var inst_44753 = (0);
var state_44827__$1 = (function (){var statearr_44892 = state_44827;
(statearr_44892[(19)] = inst_44750);

(statearr_44892[(20)] = inst_44752);

(statearr_44892[(25)] = inst_44796);

(statearr_44892[(9)] = inst_44751);

(statearr_44892[(12)] = inst_44753);

return statearr_44892;
})();
var statearr_44893_47268 = state_44827__$1;
(statearr_44893_47268[(2)] = null);

(statearr_44893_47268[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (43))){
var state_44827__$1 = state_44827;
var statearr_44899_47269 = state_44827__$1;
(statearr_44899_47269[(2)] = null);

(statearr_44899_47269[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (29))){
var inst_44807 = (state_44827[(2)]);
var state_44827__$1 = state_44827;
var statearr_44901_47271 = state_44827__$1;
(statearr_44901_47271[(2)] = inst_44807);

(statearr_44901_47271[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (44))){
var inst_44820 = (state_44827[(2)]);
var state_44827__$1 = (function (){var statearr_44902 = state_44827;
(statearr_44902[(26)] = inst_44820);

return statearr_44902;
})();
var statearr_44903_47274 = state_44827__$1;
(statearr_44903_47274[(2)] = null);

(statearr_44903_47274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (6))){
var inst_44738 = (state_44827[(27)]);
var inst_44737 = cljs.core.deref(cs);
var inst_44738__$1 = cljs.core.keys(inst_44737);
var inst_44740 = cljs.core.count(inst_44738__$1);
var inst_44744 = cljs.core.reset_BANG_(dctr,inst_44740);
var inst_44749 = cljs.core.seq(inst_44738__$1);
var inst_44750 = inst_44749;
var inst_44751 = null;
var inst_44752 = (0);
var inst_44753 = (0);
var state_44827__$1 = (function (){var statearr_44908 = state_44827;
(statearr_44908[(28)] = inst_44744);

(statearr_44908[(19)] = inst_44750);

(statearr_44908[(20)] = inst_44752);

(statearr_44908[(9)] = inst_44751);

(statearr_44908[(27)] = inst_44738__$1);

(statearr_44908[(12)] = inst_44753);

return statearr_44908;
})();
var statearr_44909_47280 = state_44827__$1;
(statearr_44909_47280[(2)] = null);

(statearr_44909_47280[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (28))){
var inst_44775 = (state_44827[(23)]);
var inst_44750 = (state_44827[(19)]);
var inst_44775__$1 = cljs.core.seq(inst_44750);
var state_44827__$1 = (function (){var statearr_44911 = state_44827;
(statearr_44911[(23)] = inst_44775__$1);

return statearr_44911;
})();
if(inst_44775__$1){
var statearr_44912_47281 = state_44827__$1;
(statearr_44912_47281[(1)] = (33));

} else {
var statearr_44913_47282 = state_44827__$1;
(statearr_44913_47282[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (25))){
var inst_44752 = (state_44827[(20)]);
var inst_44753 = (state_44827[(12)]);
var inst_44756 = (inst_44753 < inst_44752);
var inst_44757 = inst_44756;
var state_44827__$1 = state_44827;
if(cljs.core.truth_(inst_44757)){
var statearr_44916_47283 = state_44827__$1;
(statearr_44916_47283[(1)] = (27));

} else {
var statearr_44917_47284 = state_44827__$1;
(statearr_44917_47284[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (34))){
var state_44827__$1 = state_44827;
var statearr_44920_47285 = state_44827__$1;
(statearr_44920_47285[(2)] = null);

(statearr_44920_47285[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (17))){
var state_44827__$1 = state_44827;
var statearr_44923_47290 = state_44827__$1;
(statearr_44923_47290[(2)] = null);

(statearr_44923_47290[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (3))){
var inst_44825 = (state_44827[(2)]);
var state_44827__$1 = state_44827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44827__$1,inst_44825);
} else {
if((state_val_44828 === (12))){
var inst_44730 = (state_44827[(2)]);
var state_44827__$1 = state_44827;
var statearr_44924_47291 = state_44827__$1;
(statearr_44924_47291[(2)] = inst_44730);

(statearr_44924_47291[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (2))){
var state_44827__$1 = state_44827;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44827__$1,(4),ch);
} else {
if((state_val_44828 === (23))){
var state_44827__$1 = state_44827;
var statearr_44980_47298 = state_44827__$1;
(statearr_44980_47298[(2)] = null);

(statearr_44980_47298[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (35))){
var inst_44804 = (state_44827[(2)]);
var state_44827__$1 = state_44827;
var statearr_44981_47304 = state_44827__$1;
(statearr_44981_47304[(2)] = inst_44804);

(statearr_44981_47304[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (19))){
var inst_44702 = (state_44827[(7)]);
var inst_44706 = cljs.core.chunk_first(inst_44702);
var inst_44707 = cljs.core.chunk_rest(inst_44702);
var inst_44708 = cljs.core.count(inst_44706);
var inst_44679 = inst_44707;
var inst_44680 = inst_44706;
var inst_44681 = inst_44708;
var inst_44682 = (0);
var state_44827__$1 = (function (){var statearr_44993 = state_44827;
(statearr_44993[(14)] = inst_44679);

(statearr_44993[(15)] = inst_44681);

(statearr_44993[(16)] = inst_44680);

(statearr_44993[(17)] = inst_44682);

return statearr_44993;
})();
var statearr_45000_47307 = state_44827__$1;
(statearr_45000_47307[(2)] = null);

(statearr_45000_47307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (11))){
var inst_44679 = (state_44827[(14)]);
var inst_44702 = (state_44827[(7)]);
var inst_44702__$1 = cljs.core.seq(inst_44679);
var state_44827__$1 = (function (){var statearr_45006 = state_44827;
(statearr_45006[(7)] = inst_44702__$1);

return statearr_45006;
})();
if(inst_44702__$1){
var statearr_45007_47312 = state_44827__$1;
(statearr_45007_47312[(1)] = (16));

} else {
var statearr_45008_47313 = state_44827__$1;
(statearr_45008_47313[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (9))){
var inst_44732 = (state_44827[(2)]);
var state_44827__$1 = state_44827;
var statearr_45009_47320 = state_44827__$1;
(statearr_45009_47320[(2)] = inst_44732);

(statearr_45009_47320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (5))){
var inst_44677 = cljs.core.deref(cs);
var inst_44678 = cljs.core.seq(inst_44677);
var inst_44679 = inst_44678;
var inst_44680 = null;
var inst_44681 = (0);
var inst_44682 = (0);
var state_44827__$1 = (function (){var statearr_45010 = state_44827;
(statearr_45010[(14)] = inst_44679);

(statearr_45010[(15)] = inst_44681);

(statearr_45010[(16)] = inst_44680);

(statearr_45010[(17)] = inst_44682);

return statearr_45010;
})();
var statearr_45011_47341 = state_44827__$1;
(statearr_45011_47341[(2)] = null);

(statearr_45011_47341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (14))){
var state_44827__$1 = state_44827;
var statearr_45012_47342 = state_44827__$1;
(statearr_45012_47342[(2)] = null);

(statearr_45012_47342[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (45))){
var inst_44817 = (state_44827[(2)]);
var state_44827__$1 = state_44827;
var statearr_45014_47343 = state_44827__$1;
(statearr_45014_47343[(2)] = inst_44817);

(statearr_45014_47343[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (26))){
var inst_44738 = (state_44827[(27)]);
var inst_44809 = (state_44827[(2)]);
var inst_44810 = cljs.core.seq(inst_44738);
var state_44827__$1 = (function (){var statearr_45017 = state_44827;
(statearr_45017[(29)] = inst_44809);

return statearr_45017;
})();
if(inst_44810){
var statearr_45023_47345 = state_44827__$1;
(statearr_45023_47345[(1)] = (42));

} else {
var statearr_45024_47351 = state_44827__$1;
(statearr_45024_47351[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (16))){
var inst_44702 = (state_44827[(7)]);
var inst_44704 = cljs.core.chunked_seq_QMARK_(inst_44702);
var state_44827__$1 = state_44827;
if(inst_44704){
var statearr_45025_47352 = state_44827__$1;
(statearr_45025_47352[(1)] = (19));

} else {
var statearr_45028_47353 = state_44827__$1;
(statearr_45028_47353[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (38))){
var inst_44801 = (state_44827[(2)]);
var state_44827__$1 = state_44827;
var statearr_45035_47356 = state_44827__$1;
(statearr_45035_47356[(2)] = inst_44801);

(statearr_45035_47356[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (30))){
var state_44827__$1 = state_44827;
var statearr_45036_47357 = state_44827__$1;
(statearr_45036_47357[(2)] = null);

(statearr_45036_47357[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (10))){
var inst_44680 = (state_44827[(16)]);
var inst_44682 = (state_44827[(17)]);
var inst_44691 = cljs.core._nth(inst_44680,inst_44682);
var inst_44692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44691,(0),null);
var inst_44693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44691,(1),null);
var state_44827__$1 = (function (){var statearr_45041 = state_44827;
(statearr_45041[(24)] = inst_44692);

return statearr_45041;
})();
if(cljs.core.truth_(inst_44693)){
var statearr_45042_47358 = state_44827__$1;
(statearr_45042_47358[(1)] = (13));

} else {
var statearr_45043_47360 = state_44827__$1;
(statearr_45043_47360[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (18))){
var inst_44728 = (state_44827[(2)]);
var state_44827__$1 = state_44827;
var statearr_45044_47361 = state_44827__$1;
(statearr_45044_47361[(2)] = inst_44728);

(statearr_45044_47361[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (42))){
var state_44827__$1 = state_44827;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44827__$1,(45),dchan);
} else {
if((state_val_44828 === (37))){
var inst_44775 = (state_44827[(23)]);
var inst_44786 = (state_44827[(22)]);
var inst_44669 = (state_44827[(10)]);
var inst_44786__$1 = cljs.core.first(inst_44775);
var inst_44791 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44786__$1,inst_44669,done);
var state_44827__$1 = (function (){var statearr_45053 = state_44827;
(statearr_45053[(22)] = inst_44786__$1);

return statearr_45053;
})();
if(cljs.core.truth_(inst_44791)){
var statearr_45054_47362 = state_44827__$1;
(statearr_45054_47362[(1)] = (39));

} else {
var statearr_45055_47363 = state_44827__$1;
(statearr_45055_47363[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (8))){
var inst_44681 = (state_44827[(15)]);
var inst_44682 = (state_44827[(17)]);
var inst_44684 = (inst_44682 < inst_44681);
var inst_44685 = inst_44684;
var state_44827__$1 = state_44827;
if(cljs.core.truth_(inst_44685)){
var statearr_45059_47364 = state_44827__$1;
(statearr_45059_47364[(1)] = (10));

} else {
var statearr_45060_47365 = state_44827__$1;
(statearr_45060_47365[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__43595__auto__ = null;
var cljs$core$async$mult_$_state_machine__43595__auto____0 = (function (){
var statearr_45061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45061[(0)] = cljs$core$async$mult_$_state_machine__43595__auto__);

(statearr_45061[(1)] = (1));

return statearr_45061;
});
var cljs$core$async$mult_$_state_machine__43595__auto____1 = (function (state_44827){
while(true){
var ret_value__43596__auto__ = (function (){try{while(true){
var result__43597__auto__ = switch__43594__auto__(state_44827);
if(cljs.core.keyword_identical_QMARK_(result__43597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43597__auto__;
}
break;
}
}catch (e45063){var ex__43598__auto__ = e45063;
var statearr_45064_47376 = state_44827;
(statearr_45064_47376[(2)] = ex__43598__auto__);


if(cljs.core.seq((state_44827[(4)]))){
var statearr_45067_47377 = state_44827;
(statearr_45067_47377[(1)] = cljs.core.first((state_44827[(4)])));

} else {
throw ex__43598__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47378 = state_44827;
state_44827 = G__47378;
continue;
} else {
return ret_value__43596__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43595__auto__ = function(state_44827){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43595__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43595__auto____1.call(this,state_44827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43595__auto____0;
cljs$core$async$mult_$_state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43595__auto____1;
return cljs$core$async$mult_$_state_machine__43595__auto__;
})()
})();
var state__43731__auto__ = (function (){var statearr_45084 = f__43730__auto__();
(statearr_45084[(6)] = c__43729__auto___47208);

return statearr_45084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43731__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__45087 = arguments.length;
switch (G__45087) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_47389 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_47389(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_47399 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_47399(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_47401 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_47401(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_47412 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_47412(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_47421 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_47421(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47425 = arguments.length;
var i__4737__auto___47426 = (0);
while(true){
if((i__4737__auto___47426 < len__4736__auto___47425)){
args__4742__auto__.push((arguments[i__4737__auto___47426]));

var G__47427 = (i__4737__auto___47426 + (1));
i__4737__auto___47426 = G__47427;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45126){
var map__45127 = p__45126;
var map__45127__$1 = (((((!((map__45127 == null))))?(((((map__45127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45127):map__45127);
var opts = map__45127__$1;
var statearr_45129_47432 = state;
(statearr_45129_47432[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45130_47433 = state;
(statearr_45130_47433[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_45131_47443 = state;
(statearr_45131_47443[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45122){
var G__45123 = cljs.core.first(seq45122);
var seq45122__$1 = cljs.core.next(seq45122);
var G__45124 = cljs.core.first(seq45122__$1);
var seq45122__$2 = cljs.core.next(seq45122__$1);
var G__45125 = cljs.core.first(seq45122__$2);
var seq45122__$3 = cljs.core.next(seq45122__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45123,G__45124,G__45125,seq45122__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45146 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45146 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45147){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45147 = meta45147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45148,meta45147__$1){
var self__ = this;
var _45148__$1 = this;
return (new cljs.core.async.t_cljs$core$async45146(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45147__$1));
}));

(cljs.core.async.t_cljs$core$async45146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45148){
var self__ = this;
var _45148__$1 = this;
return self__.meta45147;
}));

(cljs.core.async.t_cljs$core$async45146.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45146.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45146.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45146.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45146.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45146.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45146.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45146.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45147","meta45147",-1865714606,null)], null);
}));

(cljs.core.async.t_cljs$core$async45146.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45146");

(cljs.core.async.t_cljs$core$async45146.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45146");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45146.
 */
cljs.core.async.__GT_t_cljs$core$async45146 = (function cljs$core$async$mix_$___GT_t_cljs$core$async45146(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45147){
return (new cljs.core.async.t_cljs$core$async45146(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45147));
});

}

return (new cljs.core.async.t_cljs$core$async45146(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43729__auto___47512 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43730__auto__ = (function (){var switch__43594__auto__ = (function (state_45260){
var state_val_45261 = (state_45260[(1)]);
if((state_val_45261 === (7))){
var inst_45175 = (state_45260[(2)]);
var state_45260__$1 = state_45260;
var statearr_45264_47513 = state_45260__$1;
(statearr_45264_47513[(2)] = inst_45175);

(statearr_45264_47513[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (20))){
var inst_45187 = (state_45260[(7)]);
var state_45260__$1 = state_45260;
var statearr_45265_47516 = state_45260__$1;
(statearr_45265_47516[(2)] = inst_45187);

(statearr_45265_47516[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (27))){
var state_45260__$1 = state_45260;
var statearr_45267_47520 = state_45260__$1;
(statearr_45267_47520[(2)] = null);

(statearr_45267_47520[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (1))){
var inst_45160 = (state_45260[(8)]);
var inst_45160__$1 = calc_state();
var inst_45162 = (inst_45160__$1 == null);
var inst_45163 = cljs.core.not(inst_45162);
var state_45260__$1 = (function (){var statearr_45268 = state_45260;
(statearr_45268[(8)] = inst_45160__$1);

return statearr_45268;
})();
if(inst_45163){
var statearr_45270_47526 = state_45260__$1;
(statearr_45270_47526[(1)] = (2));

} else {
var statearr_45272_47527 = state_45260__$1;
(statearr_45272_47527[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (24))){
var inst_45220 = (state_45260[(9)]);
var inst_45234 = (state_45260[(10)]);
var inst_45211 = (state_45260[(11)]);
var inst_45234__$1 = (inst_45211.cljs$core$IFn$_invoke$arity$1 ? inst_45211.cljs$core$IFn$_invoke$arity$1(inst_45220) : inst_45211.call(null,inst_45220));
var state_45260__$1 = (function (){var statearr_45274 = state_45260;
(statearr_45274[(10)] = inst_45234__$1);

return statearr_45274;
})();
if(cljs.core.truth_(inst_45234__$1)){
var statearr_45275_47538 = state_45260__$1;
(statearr_45275_47538[(1)] = (29));

} else {
var statearr_45276_47539 = state_45260__$1;
(statearr_45276_47539[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (4))){
var inst_45178 = (state_45260[(2)]);
var state_45260__$1 = state_45260;
if(cljs.core.truth_(inst_45178)){
var statearr_45277_47540 = state_45260__$1;
(statearr_45277_47540[(1)] = (8));

} else {
var statearr_45284_47541 = state_45260__$1;
(statearr_45284_47541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (15))){
var inst_45205 = (state_45260[(2)]);
var state_45260__$1 = state_45260;
if(cljs.core.truth_(inst_45205)){
var statearr_45285_47544 = state_45260__$1;
(statearr_45285_47544[(1)] = (19));

} else {
var statearr_45286_47545 = state_45260__$1;
(statearr_45286_47545[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (21))){
var inst_45210 = (state_45260[(12)]);
var inst_45210__$1 = (state_45260[(2)]);
var inst_45211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45210__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45210__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45210__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45260__$1 = (function (){var statearr_45287 = state_45260;
(statearr_45287[(13)] = inst_45212);

(statearr_45287[(12)] = inst_45210__$1);

(statearr_45287[(11)] = inst_45211);

return statearr_45287;
})();
return cljs.core.async.ioc_alts_BANG_(state_45260__$1,(22),inst_45213);
} else {
if((state_val_45261 === (31))){
var inst_45242 = (state_45260[(2)]);
var state_45260__$1 = state_45260;
if(cljs.core.truth_(inst_45242)){
var statearr_45288_47549 = state_45260__$1;
(statearr_45288_47549[(1)] = (32));

} else {
var statearr_45289_47550 = state_45260__$1;
(statearr_45289_47550[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (32))){
var inst_45219 = (state_45260[(14)]);
var state_45260__$1 = state_45260;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45260__$1,(35),out,inst_45219);
} else {
if((state_val_45261 === (33))){
var inst_45210 = (state_45260[(12)]);
var inst_45187 = inst_45210;
var state_45260__$1 = (function (){var statearr_45300 = state_45260;
(statearr_45300[(7)] = inst_45187);

return statearr_45300;
})();
var statearr_45301_47582 = state_45260__$1;
(statearr_45301_47582[(2)] = null);

(statearr_45301_47582[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (13))){
var inst_45187 = (state_45260[(7)]);
var inst_45194 = inst_45187.cljs$lang$protocol_mask$partition0$;
var inst_45195 = (inst_45194 & (64));
var inst_45196 = inst_45187.cljs$core$ISeq$;
var inst_45197 = (cljs.core.PROTOCOL_SENTINEL === inst_45196);
var inst_45198 = ((inst_45195) || (inst_45197));
var state_45260__$1 = state_45260;
if(cljs.core.truth_(inst_45198)){
var statearr_45302_47584 = state_45260__$1;
(statearr_45302_47584[(1)] = (16));

} else {
var statearr_45303_47585 = state_45260__$1;
(statearr_45303_47585[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (22))){
var inst_45220 = (state_45260[(9)]);
var inst_45219 = (state_45260[(14)]);
var inst_45218 = (state_45260[(2)]);
var inst_45219__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45218,(0),null);
var inst_45220__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45218,(1),null);
var inst_45221 = (inst_45219__$1 == null);
var inst_45222 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45220__$1,change);
var inst_45223 = ((inst_45221) || (inst_45222));
var state_45260__$1 = (function (){var statearr_45304 = state_45260;
(statearr_45304[(9)] = inst_45220__$1);

(statearr_45304[(14)] = inst_45219__$1);

return statearr_45304;
})();
if(cljs.core.truth_(inst_45223)){
var statearr_45305_47590 = state_45260__$1;
(statearr_45305_47590[(1)] = (23));

} else {
var statearr_45306_47591 = state_45260__$1;
(statearr_45306_47591[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (36))){
var inst_45210 = (state_45260[(12)]);
var inst_45187 = inst_45210;
var state_45260__$1 = (function (){var statearr_45307 = state_45260;
(statearr_45307[(7)] = inst_45187);

return statearr_45307;
})();
var statearr_45308_47592 = state_45260__$1;
(statearr_45308_47592[(2)] = null);

(statearr_45308_47592[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (29))){
var inst_45234 = (state_45260[(10)]);
var state_45260__$1 = state_45260;
var statearr_45309_47594 = state_45260__$1;
(statearr_45309_47594[(2)] = inst_45234);

(statearr_45309_47594[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (6))){
var state_45260__$1 = state_45260;
var statearr_45314_47595 = state_45260__$1;
(statearr_45314_47595[(2)] = false);

(statearr_45314_47595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (28))){
var inst_45230 = (state_45260[(2)]);
var inst_45231 = calc_state();
var inst_45187 = inst_45231;
var state_45260__$1 = (function (){var statearr_45316 = state_45260;
(statearr_45316[(15)] = inst_45230);

(statearr_45316[(7)] = inst_45187);

return statearr_45316;
})();
var statearr_45317_47597 = state_45260__$1;
(statearr_45317_47597[(2)] = null);

(statearr_45317_47597[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (25))){
var inst_45256 = (state_45260[(2)]);
var state_45260__$1 = state_45260;
var statearr_45318_47598 = state_45260__$1;
(statearr_45318_47598[(2)] = inst_45256);

(statearr_45318_47598[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (34))){
var inst_45254 = (state_45260[(2)]);
var state_45260__$1 = state_45260;
var statearr_45320_47666 = state_45260__$1;
(statearr_45320_47666[(2)] = inst_45254);

(statearr_45320_47666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (17))){
var state_45260__$1 = state_45260;
var statearr_45324_47668 = state_45260__$1;
(statearr_45324_47668[(2)] = false);

(statearr_45324_47668[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (3))){
var state_45260__$1 = state_45260;
var statearr_45325_47678 = state_45260__$1;
(statearr_45325_47678[(2)] = false);

(statearr_45325_47678[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (12))){
var inst_45258 = (state_45260[(2)]);
var state_45260__$1 = state_45260;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45260__$1,inst_45258);
} else {
if((state_val_45261 === (2))){
var inst_45160 = (state_45260[(8)]);
var inst_45167 = inst_45160.cljs$lang$protocol_mask$partition0$;
var inst_45168 = (inst_45167 & (64));
var inst_45169 = inst_45160.cljs$core$ISeq$;
var inst_45170 = (cljs.core.PROTOCOL_SENTINEL === inst_45169);
var inst_45171 = ((inst_45168) || (inst_45170));
var state_45260__$1 = state_45260;
if(cljs.core.truth_(inst_45171)){
var statearr_45326_47684 = state_45260__$1;
(statearr_45326_47684[(1)] = (5));

} else {
var statearr_45330_47685 = state_45260__$1;
(statearr_45330_47685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (23))){
var inst_45219 = (state_45260[(14)]);
var inst_45225 = (inst_45219 == null);
var state_45260__$1 = state_45260;
if(cljs.core.truth_(inst_45225)){
var statearr_45331_47690 = state_45260__$1;
(statearr_45331_47690[(1)] = (26));

} else {
var statearr_45332_47693 = state_45260__$1;
(statearr_45332_47693[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (35))){
var inst_45245 = (state_45260[(2)]);
var state_45260__$1 = state_45260;
if(cljs.core.truth_(inst_45245)){
var statearr_45333_47695 = state_45260__$1;
(statearr_45333_47695[(1)] = (36));

} else {
var statearr_45334_47699 = state_45260__$1;
(statearr_45334_47699[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (19))){
var inst_45187 = (state_45260[(7)]);
var inst_45207 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45187);
var state_45260__$1 = state_45260;
var statearr_45335_47703 = state_45260__$1;
(statearr_45335_47703[(2)] = inst_45207);

(statearr_45335_47703[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (11))){
var inst_45187 = (state_45260[(7)]);
var inst_45191 = (inst_45187 == null);
var inst_45192 = cljs.core.not(inst_45191);
var state_45260__$1 = state_45260;
if(inst_45192){
var statearr_45341_47707 = state_45260__$1;
(statearr_45341_47707[(1)] = (13));

} else {
var statearr_45342_47712 = state_45260__$1;
(statearr_45342_47712[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (9))){
var inst_45160 = (state_45260[(8)]);
var state_45260__$1 = state_45260;
var statearr_45344_47728 = state_45260__$1;
(statearr_45344_47728[(2)] = inst_45160);

(statearr_45344_47728[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (5))){
var state_45260__$1 = state_45260;
var statearr_45345_47736 = state_45260__$1;
(statearr_45345_47736[(2)] = true);

(statearr_45345_47736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (14))){
var state_45260__$1 = state_45260;
var statearr_45346_47741 = state_45260__$1;
(statearr_45346_47741[(2)] = false);

(statearr_45346_47741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (26))){
var inst_45220 = (state_45260[(9)]);
var inst_45227 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45220);
var state_45260__$1 = state_45260;
var statearr_45351_47748 = state_45260__$1;
(statearr_45351_47748[(2)] = inst_45227);

(statearr_45351_47748[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (16))){
var state_45260__$1 = state_45260;
var statearr_45352_47751 = state_45260__$1;
(statearr_45352_47751[(2)] = true);

(statearr_45352_47751[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (38))){
var inst_45250 = (state_45260[(2)]);
var state_45260__$1 = state_45260;
var statearr_45353_47753 = state_45260__$1;
(statearr_45353_47753[(2)] = inst_45250);

(statearr_45353_47753[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (30))){
var inst_45220 = (state_45260[(9)]);
var inst_45212 = (state_45260[(13)]);
var inst_45211 = (state_45260[(11)]);
var inst_45237 = cljs.core.empty_QMARK_(inst_45211);
var inst_45238 = (inst_45212.cljs$core$IFn$_invoke$arity$1 ? inst_45212.cljs$core$IFn$_invoke$arity$1(inst_45220) : inst_45212.call(null,inst_45220));
var inst_45239 = cljs.core.not(inst_45238);
var inst_45240 = ((inst_45237) && (inst_45239));
var state_45260__$1 = state_45260;
var statearr_45354_47759 = state_45260__$1;
(statearr_45354_47759[(2)] = inst_45240);

(statearr_45354_47759[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (10))){
var inst_45160 = (state_45260[(8)]);
var inst_45183 = (state_45260[(2)]);
var inst_45184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45183,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45183,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45183,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45187 = inst_45160;
var state_45260__$1 = (function (){var statearr_45355 = state_45260;
(statearr_45355[(16)] = inst_45184);

(statearr_45355[(7)] = inst_45187);

(statearr_45355[(17)] = inst_45186);

(statearr_45355[(18)] = inst_45185);

return statearr_45355;
})();
var statearr_45356_47765 = state_45260__$1;
(statearr_45356_47765[(2)] = null);

(statearr_45356_47765[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (18))){
var inst_45202 = (state_45260[(2)]);
var state_45260__$1 = state_45260;
var statearr_45357_47767 = state_45260__$1;
(statearr_45357_47767[(2)] = inst_45202);

(statearr_45357_47767[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (37))){
var state_45260__$1 = state_45260;
var statearr_45358_47768 = state_45260__$1;
(statearr_45358_47768[(2)] = null);

(statearr_45358_47768[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45261 === (8))){
var inst_45160 = (state_45260[(8)]);
var inst_45180 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45160);
var state_45260__$1 = state_45260;
var statearr_45359_47804 = state_45260__$1;
(statearr_45359_47804[(2)] = inst_45180);

(statearr_45359_47804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__43595__auto__ = null;
var cljs$core$async$mix_$_state_machine__43595__auto____0 = (function (){
var statearr_45360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45360[(0)] = cljs$core$async$mix_$_state_machine__43595__auto__);

(statearr_45360[(1)] = (1));

return statearr_45360;
});
var cljs$core$async$mix_$_state_machine__43595__auto____1 = (function (state_45260){
while(true){
var ret_value__43596__auto__ = (function (){try{while(true){
var result__43597__auto__ = switch__43594__auto__(state_45260);
if(cljs.core.keyword_identical_QMARK_(result__43597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43597__auto__;
}
break;
}
}catch (e45361){var ex__43598__auto__ = e45361;
var statearr_45362_47821 = state_45260;
(statearr_45362_47821[(2)] = ex__43598__auto__);


if(cljs.core.seq((state_45260[(4)]))){
var statearr_45363_47823 = state_45260;
(statearr_45363_47823[(1)] = cljs.core.first((state_45260[(4)])));

} else {
throw ex__43598__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47824 = state_45260;
state_45260 = G__47824;
continue;
} else {
return ret_value__43596__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43595__auto__ = function(state_45260){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43595__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43595__auto____1.call(this,state_45260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43595__auto____0;
cljs$core$async$mix_$_state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43595__auto____1;
return cljs$core$async$mix_$_state_machine__43595__auto__;
})()
})();
var state__43731__auto__ = (function (){var statearr_45364 = f__43730__auto__();
(statearr_45364[(6)] = c__43729__auto___47512);

return statearr_45364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43731__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_47844 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_47844(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_47884 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_47884(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_47901 = (function() {
var G__47902 = null;
var G__47902__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__47902__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__47902 = function(p,v){
switch(arguments.length){
case 1:
return G__47902__1.call(this,p);
case 2:
return G__47902__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47902.cljs$core$IFn$_invoke$arity$1 = G__47902__1;
G__47902.cljs$core$IFn$_invoke$arity$2 = G__47902__2;
return G__47902;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45389 = arguments.length;
switch (G__45389) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47901(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47901(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__45409 = arguments.length;
switch (G__45409) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__45399_SHARP_){
if(cljs.core.truth_((p1__45399_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45399_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45399_SHARP_.call(null,topic)))){
return p1__45399_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45399_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45414 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45414 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45415){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45415 = meta45415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45416,meta45415__$1){
var self__ = this;
var _45416__$1 = this;
return (new cljs.core.async.t_cljs$core$async45414(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45415__$1));
}));

(cljs.core.async.t_cljs$core$async45414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45416){
var self__ = this;
var _45416__$1 = this;
return self__.meta45415;
}));

(cljs.core.async.t_cljs$core$async45414.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45414.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45414.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45414.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async45414.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async45414.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async45414.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async45414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45415","meta45415",2101621978,null)], null);
}));

(cljs.core.async.t_cljs$core$async45414.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45414");

(cljs.core.async.t_cljs$core$async45414.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45414");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45414.
 */
cljs.core.async.__GT_t_cljs$core$async45414 = (function cljs$core$async$__GT_t_cljs$core$async45414(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45415){
return (new cljs.core.async.t_cljs$core$async45414(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45415));
});

}

return (new cljs.core.async.t_cljs$core$async45414(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43729__auto___47933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43730__auto__ = (function (){var switch__43594__auto__ = (function (state_45522){
var state_val_45523 = (state_45522[(1)]);
if((state_val_45523 === (7))){
var inst_45517 = (state_45522[(2)]);
var state_45522__$1 = state_45522;
var statearr_45525_47934 = state_45522__$1;
(statearr_45525_47934[(2)] = inst_45517);

(statearr_45525_47934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (20))){
var state_45522__$1 = state_45522;
var statearr_45526_47939 = state_45522__$1;
(statearr_45526_47939[(2)] = null);

(statearr_45526_47939[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (1))){
var state_45522__$1 = state_45522;
var statearr_45528_47951 = state_45522__$1;
(statearr_45528_47951[(2)] = null);

(statearr_45528_47951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (24))){
var inst_45498 = (state_45522[(7)]);
var inst_45509 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45498);
var state_45522__$1 = state_45522;
var statearr_45531_47953 = state_45522__$1;
(statearr_45531_47953[(2)] = inst_45509);

(statearr_45531_47953[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (4))){
var inst_45444 = (state_45522[(8)]);
var inst_45444__$1 = (state_45522[(2)]);
var inst_45445 = (inst_45444__$1 == null);
var state_45522__$1 = (function (){var statearr_45534 = state_45522;
(statearr_45534[(8)] = inst_45444__$1);

return statearr_45534;
})();
if(cljs.core.truth_(inst_45445)){
var statearr_45535_47954 = state_45522__$1;
(statearr_45535_47954[(1)] = (5));

} else {
var statearr_45536_47955 = state_45522__$1;
(statearr_45536_47955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (15))){
var inst_45492 = (state_45522[(2)]);
var state_45522__$1 = state_45522;
var statearr_45538_47956 = state_45522__$1;
(statearr_45538_47956[(2)] = inst_45492);

(statearr_45538_47956[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (21))){
var inst_45514 = (state_45522[(2)]);
var state_45522__$1 = (function (){var statearr_45539 = state_45522;
(statearr_45539[(9)] = inst_45514);

return statearr_45539;
})();
var statearr_45540_47958 = state_45522__$1;
(statearr_45540_47958[(2)] = null);

(statearr_45540_47958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (13))){
var inst_45470 = (state_45522[(10)]);
var inst_45473 = cljs.core.chunked_seq_QMARK_(inst_45470);
var state_45522__$1 = state_45522;
if(inst_45473){
var statearr_45541_47966 = state_45522__$1;
(statearr_45541_47966[(1)] = (16));

} else {
var statearr_45542_47971 = state_45522__$1;
(statearr_45542_47971[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (22))){
var inst_45504 = (state_45522[(2)]);
var state_45522__$1 = state_45522;
if(cljs.core.truth_(inst_45504)){
var statearr_45544_47973 = state_45522__$1;
(statearr_45544_47973[(1)] = (23));

} else {
var statearr_45545_47974 = state_45522__$1;
(statearr_45545_47974[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (6))){
var inst_45500 = (state_45522[(11)]);
var inst_45444 = (state_45522[(8)]);
var inst_45498 = (state_45522[(7)]);
var inst_45498__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_45444) : topic_fn.call(null,inst_45444));
var inst_45499 = cljs.core.deref(mults);
var inst_45500__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45499,inst_45498__$1);
var state_45522__$1 = (function (){var statearr_45557 = state_45522;
(statearr_45557[(11)] = inst_45500__$1);

(statearr_45557[(7)] = inst_45498__$1);

return statearr_45557;
})();
if(cljs.core.truth_(inst_45500__$1)){
var statearr_45558_47989 = state_45522__$1;
(statearr_45558_47989[(1)] = (19));

} else {
var statearr_45561_47991 = state_45522__$1;
(statearr_45561_47991[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (25))){
var inst_45511 = (state_45522[(2)]);
var state_45522__$1 = state_45522;
var statearr_45562_47999 = state_45522__$1;
(statearr_45562_47999[(2)] = inst_45511);

(statearr_45562_47999[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (17))){
var inst_45470 = (state_45522[(10)]);
var inst_45482 = cljs.core.first(inst_45470);
var inst_45484 = cljs.core.async.muxch_STAR_(inst_45482);
var inst_45485 = cljs.core.async.close_BANG_(inst_45484);
var inst_45486 = cljs.core.next(inst_45470);
var inst_45456 = inst_45486;
var inst_45457 = null;
var inst_45458 = (0);
var inst_45459 = (0);
var state_45522__$1 = (function (){var statearr_45570 = state_45522;
(statearr_45570[(12)] = inst_45458);

(statearr_45570[(13)] = inst_45457);

(statearr_45570[(14)] = inst_45485);

(statearr_45570[(15)] = inst_45459);

(statearr_45570[(16)] = inst_45456);

return statearr_45570;
})();
var statearr_45572_48051 = state_45522__$1;
(statearr_45572_48051[(2)] = null);

(statearr_45572_48051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (3))){
var inst_45519 = (state_45522[(2)]);
var state_45522__$1 = state_45522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45522__$1,inst_45519);
} else {
if((state_val_45523 === (12))){
var inst_45494 = (state_45522[(2)]);
var state_45522__$1 = state_45522;
var statearr_45574_48059 = state_45522__$1;
(statearr_45574_48059[(2)] = inst_45494);

(statearr_45574_48059[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (2))){
var state_45522__$1 = state_45522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45522__$1,(4),ch);
} else {
if((state_val_45523 === (23))){
var state_45522__$1 = state_45522;
var statearr_45576_48070 = state_45522__$1;
(statearr_45576_48070[(2)] = null);

(statearr_45576_48070[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (19))){
var inst_45500 = (state_45522[(11)]);
var inst_45444 = (state_45522[(8)]);
var inst_45502 = cljs.core.async.muxch_STAR_(inst_45500);
var state_45522__$1 = state_45522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45522__$1,(22),inst_45502,inst_45444);
} else {
if((state_val_45523 === (11))){
var inst_45470 = (state_45522[(10)]);
var inst_45456 = (state_45522[(16)]);
var inst_45470__$1 = cljs.core.seq(inst_45456);
var state_45522__$1 = (function (){var statearr_45580 = state_45522;
(statearr_45580[(10)] = inst_45470__$1);

return statearr_45580;
})();
if(inst_45470__$1){
var statearr_45581_48090 = state_45522__$1;
(statearr_45581_48090[(1)] = (13));

} else {
var statearr_45582_48096 = state_45522__$1;
(statearr_45582_48096[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (9))){
var inst_45496 = (state_45522[(2)]);
var state_45522__$1 = state_45522;
var statearr_45583_48102 = state_45522__$1;
(statearr_45583_48102[(2)] = inst_45496);

(statearr_45583_48102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (5))){
var inst_45452 = cljs.core.deref(mults);
var inst_45453 = cljs.core.vals(inst_45452);
var inst_45454 = cljs.core.seq(inst_45453);
var inst_45456 = inst_45454;
var inst_45457 = null;
var inst_45458 = (0);
var inst_45459 = (0);
var state_45522__$1 = (function (){var statearr_45589 = state_45522;
(statearr_45589[(12)] = inst_45458);

(statearr_45589[(13)] = inst_45457);

(statearr_45589[(15)] = inst_45459);

(statearr_45589[(16)] = inst_45456);

return statearr_45589;
})();
var statearr_45591_48105 = state_45522__$1;
(statearr_45591_48105[(2)] = null);

(statearr_45591_48105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (14))){
var state_45522__$1 = state_45522;
var statearr_45600_48109 = state_45522__$1;
(statearr_45600_48109[(2)] = null);

(statearr_45600_48109[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (16))){
var inst_45470 = (state_45522[(10)]);
var inst_45477 = cljs.core.chunk_first(inst_45470);
var inst_45478 = cljs.core.chunk_rest(inst_45470);
var inst_45479 = cljs.core.count(inst_45477);
var inst_45456 = inst_45478;
var inst_45457 = inst_45477;
var inst_45458 = inst_45479;
var inst_45459 = (0);
var state_45522__$1 = (function (){var statearr_45603 = state_45522;
(statearr_45603[(12)] = inst_45458);

(statearr_45603[(13)] = inst_45457);

(statearr_45603[(15)] = inst_45459);

(statearr_45603[(16)] = inst_45456);

return statearr_45603;
})();
var statearr_45606_48115 = state_45522__$1;
(statearr_45606_48115[(2)] = null);

(statearr_45606_48115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (10))){
var inst_45458 = (state_45522[(12)]);
var inst_45457 = (state_45522[(13)]);
var inst_45459 = (state_45522[(15)]);
var inst_45456 = (state_45522[(16)]);
var inst_45464 = cljs.core._nth(inst_45457,inst_45459);
var inst_45465 = cljs.core.async.muxch_STAR_(inst_45464);
var inst_45466 = cljs.core.async.close_BANG_(inst_45465);
var inst_45467 = (inst_45459 + (1));
var tmp45596 = inst_45458;
var tmp45597 = inst_45457;
var tmp45598 = inst_45456;
var inst_45456__$1 = tmp45598;
var inst_45457__$1 = tmp45597;
var inst_45458__$1 = tmp45596;
var inst_45459__$1 = inst_45467;
var state_45522__$1 = (function (){var statearr_45608 = state_45522;
(statearr_45608[(12)] = inst_45458__$1);

(statearr_45608[(13)] = inst_45457__$1);

(statearr_45608[(17)] = inst_45466);

(statearr_45608[(15)] = inst_45459__$1);

(statearr_45608[(16)] = inst_45456__$1);

return statearr_45608;
})();
var statearr_45609_48147 = state_45522__$1;
(statearr_45609_48147[(2)] = null);

(statearr_45609_48147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (18))){
var inst_45489 = (state_45522[(2)]);
var state_45522__$1 = state_45522;
var statearr_45611_48151 = state_45522__$1;
(statearr_45611_48151[(2)] = inst_45489);

(statearr_45611_48151[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (8))){
var inst_45458 = (state_45522[(12)]);
var inst_45459 = (state_45522[(15)]);
var inst_45461 = (inst_45459 < inst_45458);
var inst_45462 = inst_45461;
var state_45522__$1 = state_45522;
if(cljs.core.truth_(inst_45462)){
var statearr_45617_48155 = state_45522__$1;
(statearr_45617_48155[(1)] = (10));

} else {
var statearr_45619_48157 = state_45522__$1;
(statearr_45619_48157[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43595__auto__ = null;
var cljs$core$async$state_machine__43595__auto____0 = (function (){
var statearr_45622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45622[(0)] = cljs$core$async$state_machine__43595__auto__);

(statearr_45622[(1)] = (1));

return statearr_45622;
});
var cljs$core$async$state_machine__43595__auto____1 = (function (state_45522){
while(true){
var ret_value__43596__auto__ = (function (){try{while(true){
var result__43597__auto__ = switch__43594__auto__(state_45522);
if(cljs.core.keyword_identical_QMARK_(result__43597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43597__auto__;
}
break;
}
}catch (e45624){var ex__43598__auto__ = e45624;
var statearr_45625_48165 = state_45522;
(statearr_45625_48165[(2)] = ex__43598__auto__);


if(cljs.core.seq((state_45522[(4)]))){
var statearr_45627_48166 = state_45522;
(statearr_45627_48166[(1)] = cljs.core.first((state_45522[(4)])));

} else {
throw ex__43598__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48169 = state_45522;
state_45522 = G__48169;
continue;
} else {
return ret_value__43596__auto__;
}
break;
}
});
cljs$core$async$state_machine__43595__auto__ = function(state_45522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43595__auto____1.call(this,state_45522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43595__auto____0;
cljs$core$async$state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43595__auto____1;
return cljs$core$async$state_machine__43595__auto__;
})()
})();
var state__43731__auto__ = (function (){var statearr_45628 = f__43730__auto__();
(statearr_45628[(6)] = c__43729__auto___47933);

return statearr_45628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43731__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__45631 = arguments.length;
switch (G__45631) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__45652 = arguments.length;
switch (G__45652) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__45669 = arguments.length;
switch (G__45669) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__43729__auto___48253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43730__auto__ = (function (){var switch__43594__auto__ = (function (state_45729){
var state_val_45730 = (state_45729[(1)]);
if((state_val_45730 === (7))){
var state_45729__$1 = state_45729;
var statearr_45735_48258 = state_45729__$1;
(statearr_45735_48258[(2)] = null);

(statearr_45735_48258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45730 === (1))){
var state_45729__$1 = state_45729;
var statearr_45736_48259 = state_45729__$1;
(statearr_45736_48259[(2)] = null);

(statearr_45736_48259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45730 === (4))){
var inst_45679 = (state_45729[(7)]);
var inst_45678 = (state_45729[(8)]);
var inst_45681 = (inst_45679 < inst_45678);
var state_45729__$1 = state_45729;
if(cljs.core.truth_(inst_45681)){
var statearr_45740_48260 = state_45729__$1;
(statearr_45740_48260[(1)] = (6));

} else {
var statearr_45742_48275 = state_45729__$1;
(statearr_45742_48275[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45730 === (15))){
var inst_45714 = (state_45729[(9)]);
var inst_45720 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_45714);
var state_45729__$1 = state_45729;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45729__$1,(17),out,inst_45720);
} else {
if((state_val_45730 === (13))){
var inst_45714 = (state_45729[(9)]);
var inst_45714__$1 = (state_45729[(2)]);
var inst_45715 = cljs.core.some(cljs.core.nil_QMARK_,inst_45714__$1);
var state_45729__$1 = (function (){var statearr_45743 = state_45729;
(statearr_45743[(9)] = inst_45714__$1);

return statearr_45743;
})();
if(cljs.core.truth_(inst_45715)){
var statearr_45744_48280 = state_45729__$1;
(statearr_45744_48280[(1)] = (14));

} else {
var statearr_45746_48284 = state_45729__$1;
(statearr_45746_48284[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45730 === (6))){
var state_45729__$1 = state_45729;
var statearr_45748_48285 = state_45729__$1;
(statearr_45748_48285[(2)] = null);

(statearr_45748_48285[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45730 === (17))){
var inst_45722 = (state_45729[(2)]);
var state_45729__$1 = (function (){var statearr_45758 = state_45729;
(statearr_45758[(10)] = inst_45722);

return statearr_45758;
})();
var statearr_45760_48290 = state_45729__$1;
(statearr_45760_48290[(2)] = null);

(statearr_45760_48290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45730 === (3))){
var inst_45727 = (state_45729[(2)]);
var state_45729__$1 = state_45729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45729__$1,inst_45727);
} else {
if((state_val_45730 === (12))){
var _ = (function (){var statearr_45761 = state_45729;
(statearr_45761[(4)] = cljs.core.rest((state_45729[(4)])));

return statearr_45761;
})();
var state_45729__$1 = state_45729;
var ex45755 = (state_45729__$1[(2)]);
var statearr_45762_48294 = state_45729__$1;
(statearr_45762_48294[(5)] = ex45755);


if((ex45755 instanceof Object)){
var statearr_45763_48297 = state_45729__$1;
(statearr_45763_48297[(1)] = (11));

(statearr_45763_48297[(5)] = null);

} else {
throw ex45755;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45730 === (2))){
var inst_45677 = cljs.core.reset_BANG_(dctr,cnt);
var inst_45678 = cnt;
var inst_45679 = (0);
var state_45729__$1 = (function (){var statearr_45768 = state_45729;
(statearr_45768[(11)] = inst_45677);

(statearr_45768[(7)] = inst_45679);

(statearr_45768[(8)] = inst_45678);

return statearr_45768;
})();
var statearr_45773_48302 = state_45729__$1;
(statearr_45773_48302[(2)] = null);

(statearr_45773_48302[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45730 === (11))){
var inst_45690 = (state_45729[(2)]);
var inst_45693 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_45729__$1 = (function (){var statearr_45778 = state_45729;
(statearr_45778[(12)] = inst_45690);

return statearr_45778;
})();
var statearr_45779_48305 = state_45729__$1;
(statearr_45779_48305[(2)] = inst_45693);

(statearr_45779_48305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45730 === (9))){
var inst_45679 = (state_45729[(7)]);
var _ = (function (){var statearr_45780 = state_45729;
(statearr_45780[(4)] = cljs.core.cons((12),(state_45729[(4)])));

return statearr_45780;
})();
var inst_45699 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_45679) : chs__$1.call(null,inst_45679));
var inst_45700 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_45679) : done.call(null,inst_45679));
var inst_45701 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_45699,inst_45700);
var ___$1 = (function (){var statearr_45785 = state_45729;
(statearr_45785[(4)] = cljs.core.rest((state_45729[(4)])));

return statearr_45785;
})();
var state_45729__$1 = state_45729;
var statearr_45786_48308 = state_45729__$1;
(statearr_45786_48308[(2)] = inst_45701);

(statearr_45786_48308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45730 === (5))){
var inst_45711 = (state_45729[(2)]);
var state_45729__$1 = (function (){var statearr_45787 = state_45729;
(statearr_45787[(13)] = inst_45711);

return statearr_45787;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45729__$1,(13),dchan);
} else {
if((state_val_45730 === (14))){
var inst_45717 = cljs.core.async.close_BANG_(out);
var state_45729__$1 = state_45729;
var statearr_45788_48324 = state_45729__$1;
(statearr_45788_48324[(2)] = inst_45717);

(statearr_45788_48324[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45730 === (16))){
var inst_45725 = (state_45729[(2)]);
var state_45729__$1 = state_45729;
var statearr_45789_48329 = state_45729__$1;
(statearr_45789_48329[(2)] = inst_45725);

(statearr_45789_48329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45730 === (10))){
var inst_45679 = (state_45729[(7)]);
var inst_45704 = (state_45729[(2)]);
var inst_45705 = (inst_45679 + (1));
var inst_45679__$1 = inst_45705;
var state_45729__$1 = (function (){var statearr_45794 = state_45729;
(statearr_45794[(7)] = inst_45679__$1);

(statearr_45794[(14)] = inst_45704);

return statearr_45794;
})();
var statearr_45796_48330 = state_45729__$1;
(statearr_45796_48330[(2)] = null);

(statearr_45796_48330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45730 === (8))){
var inst_45709 = (state_45729[(2)]);
var state_45729__$1 = state_45729;
var statearr_45797_48335 = state_45729__$1;
(statearr_45797_48335[(2)] = inst_45709);

(statearr_45797_48335[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43595__auto__ = null;
var cljs$core$async$state_machine__43595__auto____0 = (function (){
var statearr_45798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45798[(0)] = cljs$core$async$state_machine__43595__auto__);

(statearr_45798[(1)] = (1));

return statearr_45798;
});
var cljs$core$async$state_machine__43595__auto____1 = (function (state_45729){
while(true){
var ret_value__43596__auto__ = (function (){try{while(true){
var result__43597__auto__ = switch__43594__auto__(state_45729);
if(cljs.core.keyword_identical_QMARK_(result__43597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43597__auto__;
}
break;
}
}catch (e45799){var ex__43598__auto__ = e45799;
var statearr_45800_48339 = state_45729;
(statearr_45800_48339[(2)] = ex__43598__auto__);


if(cljs.core.seq((state_45729[(4)]))){
var statearr_45801_48340 = state_45729;
(statearr_45801_48340[(1)] = cljs.core.first((state_45729[(4)])));

} else {
throw ex__43598__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48341 = state_45729;
state_45729 = G__48341;
continue;
} else {
return ret_value__43596__auto__;
}
break;
}
});
cljs$core$async$state_machine__43595__auto__ = function(state_45729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43595__auto____1.call(this,state_45729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43595__auto____0;
cljs$core$async$state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43595__auto____1;
return cljs$core$async$state_machine__43595__auto__;
})()
})();
var state__43731__auto__ = (function (){var statearr_45802 = f__43730__auto__();
(statearr_45802[(6)] = c__43729__auto___48253);

return statearr_45802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43731__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__45805 = arguments.length;
switch (G__45805) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43729__auto___48349 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43730__auto__ = (function (){var switch__43594__auto__ = (function (state_45846){
var state_val_45847 = (state_45846[(1)]);
if((state_val_45847 === (7))){
var inst_45824 = (state_45846[(7)]);
var inst_45823 = (state_45846[(8)]);
var inst_45823__$1 = (state_45846[(2)]);
var inst_45824__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45823__$1,(0),null);
var inst_45825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45823__$1,(1),null);
var inst_45826 = (inst_45824__$1 == null);
var state_45846__$1 = (function (){var statearr_45848 = state_45846;
(statearr_45848[(9)] = inst_45825);

(statearr_45848[(7)] = inst_45824__$1);

(statearr_45848[(8)] = inst_45823__$1);

return statearr_45848;
})();
if(cljs.core.truth_(inst_45826)){
var statearr_45849_48355 = state_45846__$1;
(statearr_45849_48355[(1)] = (8));

} else {
var statearr_45850_48358 = state_45846__$1;
(statearr_45850_48358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45847 === (1))){
var inst_45809 = cljs.core.vec(chs);
var inst_45810 = inst_45809;
var state_45846__$1 = (function (){var statearr_45851 = state_45846;
(statearr_45851[(10)] = inst_45810);

return statearr_45851;
})();
var statearr_45856_48359 = state_45846__$1;
(statearr_45856_48359[(2)] = null);

(statearr_45856_48359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45847 === (4))){
var inst_45810 = (state_45846[(10)]);
var state_45846__$1 = state_45846;
return cljs.core.async.ioc_alts_BANG_(state_45846__$1,(7),inst_45810);
} else {
if((state_val_45847 === (6))){
var inst_45842 = (state_45846[(2)]);
var state_45846__$1 = state_45846;
var statearr_45857_48366 = state_45846__$1;
(statearr_45857_48366[(2)] = inst_45842);

(statearr_45857_48366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45847 === (3))){
var inst_45844 = (state_45846[(2)]);
var state_45846__$1 = state_45846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45846__$1,inst_45844);
} else {
if((state_val_45847 === (2))){
var inst_45810 = (state_45846[(10)]);
var inst_45814 = cljs.core.count(inst_45810);
var inst_45815 = (inst_45814 > (0));
var state_45846__$1 = state_45846;
if(cljs.core.truth_(inst_45815)){
var statearr_45865_48369 = state_45846__$1;
(statearr_45865_48369[(1)] = (4));

} else {
var statearr_45866_48370 = state_45846__$1;
(statearr_45866_48370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45847 === (11))){
var inst_45810 = (state_45846[(10)]);
var inst_45834 = (state_45846[(2)]);
var tmp45859 = inst_45810;
var inst_45810__$1 = tmp45859;
var state_45846__$1 = (function (){var statearr_45871 = state_45846;
(statearr_45871[(10)] = inst_45810__$1);

(statearr_45871[(11)] = inst_45834);

return statearr_45871;
})();
var statearr_45872_48374 = state_45846__$1;
(statearr_45872_48374[(2)] = null);

(statearr_45872_48374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45847 === (9))){
var inst_45824 = (state_45846[(7)]);
var state_45846__$1 = state_45846;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45846__$1,(11),out,inst_45824);
} else {
if((state_val_45847 === (5))){
var inst_45840 = cljs.core.async.close_BANG_(out);
var state_45846__$1 = state_45846;
var statearr_45877_48375 = state_45846__$1;
(statearr_45877_48375[(2)] = inst_45840);

(statearr_45877_48375[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45847 === (10))){
var inst_45837 = (state_45846[(2)]);
var state_45846__$1 = state_45846;
var statearr_45881_48376 = state_45846__$1;
(statearr_45881_48376[(2)] = inst_45837);

(statearr_45881_48376[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45847 === (8))){
var inst_45810 = (state_45846[(10)]);
var inst_45825 = (state_45846[(9)]);
var inst_45824 = (state_45846[(7)]);
var inst_45823 = (state_45846[(8)]);
var inst_45829 = (function (){var cs = inst_45810;
var vec__45819 = inst_45823;
var v = inst_45824;
var c = inst_45825;
return (function (p1__45803_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__45803_SHARP_);
});
})();
var inst_45830 = cljs.core.filterv(inst_45829,inst_45810);
var inst_45810__$1 = inst_45830;
var state_45846__$1 = (function (){var statearr_45885 = state_45846;
(statearr_45885[(10)] = inst_45810__$1);

return statearr_45885;
})();
var statearr_45886_48383 = state_45846__$1;
(statearr_45886_48383[(2)] = null);

(statearr_45886_48383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43595__auto__ = null;
var cljs$core$async$state_machine__43595__auto____0 = (function (){
var statearr_45887 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45887[(0)] = cljs$core$async$state_machine__43595__auto__);

(statearr_45887[(1)] = (1));

return statearr_45887;
});
var cljs$core$async$state_machine__43595__auto____1 = (function (state_45846){
while(true){
var ret_value__43596__auto__ = (function (){try{while(true){
var result__43597__auto__ = switch__43594__auto__(state_45846);
if(cljs.core.keyword_identical_QMARK_(result__43597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43597__auto__;
}
break;
}
}catch (e45892){var ex__43598__auto__ = e45892;
var statearr_45893_48386 = state_45846;
(statearr_45893_48386[(2)] = ex__43598__auto__);


if(cljs.core.seq((state_45846[(4)]))){
var statearr_45894_48387 = state_45846;
(statearr_45894_48387[(1)] = cljs.core.first((state_45846[(4)])));

} else {
throw ex__43598__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48390 = state_45846;
state_45846 = G__48390;
continue;
} else {
return ret_value__43596__auto__;
}
break;
}
});
cljs$core$async$state_machine__43595__auto__ = function(state_45846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43595__auto____1.call(this,state_45846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43595__auto____0;
cljs$core$async$state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43595__auto____1;
return cljs$core$async$state_machine__43595__auto__;
})()
})();
var state__43731__auto__ = (function (){var statearr_45895 = f__43730__auto__();
(statearr_45895[(6)] = c__43729__auto___48349);

return statearr_45895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43731__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__45900 = arguments.length;
switch (G__45900) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43729__auto___48395 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43730__auto__ = (function (){var switch__43594__auto__ = (function (state_45929){
var state_val_45930 = (state_45929[(1)]);
if((state_val_45930 === (7))){
var inst_45909 = (state_45929[(7)]);
var inst_45909__$1 = (state_45929[(2)]);
var inst_45910 = (inst_45909__$1 == null);
var inst_45911 = cljs.core.not(inst_45910);
var state_45929__$1 = (function (){var statearr_45931 = state_45929;
(statearr_45931[(7)] = inst_45909__$1);

return statearr_45931;
})();
if(inst_45911){
var statearr_45932_48400 = state_45929__$1;
(statearr_45932_48400[(1)] = (8));

} else {
var statearr_45933_48401 = state_45929__$1;
(statearr_45933_48401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45930 === (1))){
var inst_45901 = (0);
var state_45929__$1 = (function (){var statearr_45934 = state_45929;
(statearr_45934[(8)] = inst_45901);

return statearr_45934;
})();
var statearr_45935_48402 = state_45929__$1;
(statearr_45935_48402[(2)] = null);

(statearr_45935_48402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45930 === (4))){
var state_45929__$1 = state_45929;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45929__$1,(7),ch);
} else {
if((state_val_45930 === (6))){
var inst_45924 = (state_45929[(2)]);
var state_45929__$1 = state_45929;
var statearr_45936_48407 = state_45929__$1;
(statearr_45936_48407[(2)] = inst_45924);

(statearr_45936_48407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45930 === (3))){
var inst_45926 = (state_45929[(2)]);
var inst_45927 = cljs.core.async.close_BANG_(out);
var state_45929__$1 = (function (){var statearr_45937 = state_45929;
(statearr_45937[(9)] = inst_45926);

return statearr_45937;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45929__$1,inst_45927);
} else {
if((state_val_45930 === (2))){
var inst_45901 = (state_45929[(8)]);
var inst_45904 = (inst_45901 < n);
var state_45929__$1 = state_45929;
if(cljs.core.truth_(inst_45904)){
var statearr_45941_48411 = state_45929__$1;
(statearr_45941_48411[(1)] = (4));

} else {
var statearr_45942_48412 = state_45929__$1;
(statearr_45942_48412[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45930 === (11))){
var inst_45901 = (state_45929[(8)]);
var inst_45914 = (state_45929[(2)]);
var inst_45915 = (inst_45901 + (1));
var inst_45901__$1 = inst_45915;
var state_45929__$1 = (function (){var statearr_45943 = state_45929;
(statearr_45943[(8)] = inst_45901__$1);

(statearr_45943[(10)] = inst_45914);

return statearr_45943;
})();
var statearr_45944_48413 = state_45929__$1;
(statearr_45944_48413[(2)] = null);

(statearr_45944_48413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45930 === (9))){
var state_45929__$1 = state_45929;
var statearr_45945_48414 = state_45929__$1;
(statearr_45945_48414[(2)] = null);

(statearr_45945_48414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45930 === (5))){
var state_45929__$1 = state_45929;
var statearr_45948_48417 = state_45929__$1;
(statearr_45948_48417[(2)] = null);

(statearr_45948_48417[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45930 === (10))){
var inst_45919 = (state_45929[(2)]);
var state_45929__$1 = state_45929;
var statearr_45950_48420 = state_45929__$1;
(statearr_45950_48420[(2)] = inst_45919);

(statearr_45950_48420[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45930 === (8))){
var inst_45909 = (state_45929[(7)]);
var state_45929__$1 = state_45929;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45929__$1,(11),out,inst_45909);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43595__auto__ = null;
var cljs$core$async$state_machine__43595__auto____0 = (function (){
var statearr_45954 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45954[(0)] = cljs$core$async$state_machine__43595__auto__);

(statearr_45954[(1)] = (1));

return statearr_45954;
});
var cljs$core$async$state_machine__43595__auto____1 = (function (state_45929){
while(true){
var ret_value__43596__auto__ = (function (){try{while(true){
var result__43597__auto__ = switch__43594__auto__(state_45929);
if(cljs.core.keyword_identical_QMARK_(result__43597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43597__auto__;
}
break;
}
}catch (e45958){var ex__43598__auto__ = e45958;
var statearr_45959_48429 = state_45929;
(statearr_45959_48429[(2)] = ex__43598__auto__);


if(cljs.core.seq((state_45929[(4)]))){
var statearr_45962_48430 = state_45929;
(statearr_45962_48430[(1)] = cljs.core.first((state_45929[(4)])));

} else {
throw ex__43598__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48431 = state_45929;
state_45929 = G__48431;
continue;
} else {
return ret_value__43596__auto__;
}
break;
}
});
cljs$core$async$state_machine__43595__auto__ = function(state_45929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43595__auto____1.call(this,state_45929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43595__auto____0;
cljs$core$async$state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43595__auto____1;
return cljs$core$async$state_machine__43595__auto__;
})()
})();
var state__43731__auto__ = (function (){var statearr_45963 = f__43730__auto__();
(statearr_45963[(6)] = c__43729__auto___48395);

return statearr_45963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43731__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45965 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45965 = (function (f,ch,meta45966){
this.f = f;
this.ch = ch;
this.meta45966 = meta45966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45967,meta45966__$1){
var self__ = this;
var _45967__$1 = this;
return (new cljs.core.async.t_cljs$core$async45965(self__.f,self__.ch,meta45966__$1));
}));

(cljs.core.async.t_cljs$core$async45965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45967){
var self__ = this;
var _45967__$1 = this;
return self__.meta45966;
}));

(cljs.core.async.t_cljs$core$async45965.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45965.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45965.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45965.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45965.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45982 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45982 = (function (f,ch,meta45966,_,fn1,meta45983){
this.f = f;
this.ch = ch;
this.meta45966 = meta45966;
this._ = _;
this.fn1 = fn1;
this.meta45983 = meta45983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45984,meta45983__$1){
var self__ = this;
var _45984__$1 = this;
return (new cljs.core.async.t_cljs$core$async45982(self__.f,self__.ch,self__.meta45966,self__._,self__.fn1,meta45983__$1));
}));

(cljs.core.async.t_cljs$core$async45982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45984){
var self__ = this;
var _45984__$1 = this;
return self__.meta45983;
}));

(cljs.core.async.t_cljs$core$async45982.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45982.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async45982.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45982.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__45964_SHARP_){
var G__46000 = (((p1__45964_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__45964_SHARP_) : self__.f.call(null,p1__45964_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46000) : f1.call(null,G__46000));
});
}));

(cljs.core.async.t_cljs$core$async45982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45966","meta45966",-2016086229,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45965","cljs.core.async/t_cljs$core$async45965",-401949778,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45983","meta45983",1056955343,null)], null);
}));

(cljs.core.async.t_cljs$core$async45982.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45982");

(cljs.core.async.t_cljs$core$async45982.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45982");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45982.
 */
cljs.core.async.__GT_t_cljs$core$async45982 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45982(f__$1,ch__$1,meta45966__$1,___$2,fn1__$1,meta45983){
return (new cljs.core.async.t_cljs$core$async45982(f__$1,ch__$1,meta45966__$1,___$2,fn1__$1,meta45983));
});

}

return (new cljs.core.async.t_cljs$core$async45982(self__.f,self__.ch,self__.meta45966,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46017 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46017) : self__.f.call(null,G__46017));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async45965.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45965.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async45965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45966","meta45966",-2016086229,null)], null);
}));

(cljs.core.async.t_cljs$core$async45965.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45965");

(cljs.core.async.t_cljs$core$async45965.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45965");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45965.
 */
cljs.core.async.__GT_t_cljs$core$async45965 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45965(f__$1,ch__$1,meta45966){
return (new cljs.core.async.t_cljs$core$async45965(f__$1,ch__$1,meta45966));
});

}

return (new cljs.core.async.t_cljs$core$async45965(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46037 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46037 = (function (f,ch,meta46038){
this.f = f;
this.ch = ch;
this.meta46038 = meta46038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46039,meta46038__$1){
var self__ = this;
var _46039__$1 = this;
return (new cljs.core.async.t_cljs$core$async46037(self__.f,self__.ch,meta46038__$1));
}));

(cljs.core.async.t_cljs$core$async46037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46039){
var self__ = this;
var _46039__$1 = this;
return self__.meta46038;
}));

(cljs.core.async.t_cljs$core$async46037.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46037.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46037.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46037.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46037.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46037.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async46037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46038","meta46038",-1784008288,null)], null);
}));

(cljs.core.async.t_cljs$core$async46037.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46037");

(cljs.core.async.t_cljs$core$async46037.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46037");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46037.
 */
cljs.core.async.__GT_t_cljs$core$async46037 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46037(f__$1,ch__$1,meta46038){
return (new cljs.core.async.t_cljs$core$async46037(f__$1,ch__$1,meta46038));
});

}

return (new cljs.core.async.t_cljs$core$async46037(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46061 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46061 = (function (p,ch,meta46062){
this.p = p;
this.ch = ch;
this.meta46062 = meta46062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46063,meta46062__$1){
var self__ = this;
var _46063__$1 = this;
return (new cljs.core.async.t_cljs$core$async46061(self__.p,self__.ch,meta46062__$1));
}));

(cljs.core.async.t_cljs$core$async46061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46063){
var self__ = this;
var _46063__$1 = this;
return self__.meta46062;
}));

(cljs.core.async.t_cljs$core$async46061.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46061.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46061.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46061.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46061.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46061.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46061.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async46061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46062","meta46062",-1913453980,null)], null);
}));

(cljs.core.async.t_cljs$core$async46061.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46061");

(cljs.core.async.t_cljs$core$async46061.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46061");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46061.
 */
cljs.core.async.__GT_t_cljs$core$async46061 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46061(p__$1,ch__$1,meta46062){
return (new cljs.core.async.t_cljs$core$async46061(p__$1,ch__$1,meta46062));
});

}

return (new cljs.core.async.t_cljs$core$async46061(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__46108 = arguments.length;
switch (G__46108) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43729__auto___48586 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43730__auto__ = (function (){var switch__43594__auto__ = (function (state_46158){
var state_val_46159 = (state_46158[(1)]);
if((state_val_46159 === (7))){
var inst_46154 = (state_46158[(2)]);
var state_46158__$1 = state_46158;
var statearr_46160_48589 = state_46158__$1;
(statearr_46160_48589[(2)] = inst_46154);

(statearr_46160_48589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46159 === (1))){
var state_46158__$1 = state_46158;
var statearr_46164_48592 = state_46158__$1;
(statearr_46164_48592[(2)] = null);

(statearr_46164_48592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46159 === (4))){
var inst_46140 = (state_46158[(7)]);
var inst_46140__$1 = (state_46158[(2)]);
var inst_46141 = (inst_46140__$1 == null);
var state_46158__$1 = (function (){var statearr_46172 = state_46158;
(statearr_46172[(7)] = inst_46140__$1);

return statearr_46172;
})();
if(cljs.core.truth_(inst_46141)){
var statearr_46173_48605 = state_46158__$1;
(statearr_46173_48605[(1)] = (5));

} else {
var statearr_46174_48614 = state_46158__$1;
(statearr_46174_48614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46159 === (6))){
var inst_46140 = (state_46158[(7)]);
var inst_46145 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46140) : p.call(null,inst_46140));
var state_46158__$1 = state_46158;
if(cljs.core.truth_(inst_46145)){
var statearr_46176_48666 = state_46158__$1;
(statearr_46176_48666[(1)] = (8));

} else {
var statearr_46177_48667 = state_46158__$1;
(statearr_46177_48667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46159 === (3))){
var inst_46156 = (state_46158[(2)]);
var state_46158__$1 = state_46158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46158__$1,inst_46156);
} else {
if((state_val_46159 === (2))){
var state_46158__$1 = state_46158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46158__$1,(4),ch);
} else {
if((state_val_46159 === (11))){
var inst_46148 = (state_46158[(2)]);
var state_46158__$1 = state_46158;
var statearr_46178_48676 = state_46158__$1;
(statearr_46178_48676[(2)] = inst_46148);

(statearr_46178_48676[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46159 === (9))){
var state_46158__$1 = state_46158;
var statearr_46179_48677 = state_46158__$1;
(statearr_46179_48677[(2)] = null);

(statearr_46179_48677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46159 === (5))){
var inst_46143 = cljs.core.async.close_BANG_(out);
var state_46158__$1 = state_46158;
var statearr_46183_48678 = state_46158__$1;
(statearr_46183_48678[(2)] = inst_46143);

(statearr_46183_48678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46159 === (10))){
var inst_46151 = (state_46158[(2)]);
var state_46158__$1 = (function (){var statearr_46184 = state_46158;
(statearr_46184[(8)] = inst_46151);

return statearr_46184;
})();
var statearr_46185_48680 = state_46158__$1;
(statearr_46185_48680[(2)] = null);

(statearr_46185_48680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46159 === (8))){
var inst_46140 = (state_46158[(7)]);
var state_46158__$1 = state_46158;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46158__$1,(11),out,inst_46140);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43595__auto__ = null;
var cljs$core$async$state_machine__43595__auto____0 = (function (){
var statearr_46187 = [null,null,null,null,null,null,null,null,null];
(statearr_46187[(0)] = cljs$core$async$state_machine__43595__auto__);

(statearr_46187[(1)] = (1));

return statearr_46187;
});
var cljs$core$async$state_machine__43595__auto____1 = (function (state_46158){
while(true){
var ret_value__43596__auto__ = (function (){try{while(true){
var result__43597__auto__ = switch__43594__auto__(state_46158);
if(cljs.core.keyword_identical_QMARK_(result__43597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43597__auto__;
}
break;
}
}catch (e46197){var ex__43598__auto__ = e46197;
var statearr_46198_48706 = state_46158;
(statearr_46198_48706[(2)] = ex__43598__auto__);


if(cljs.core.seq((state_46158[(4)]))){
var statearr_46199_48707 = state_46158;
(statearr_46199_48707[(1)] = cljs.core.first((state_46158[(4)])));

} else {
throw ex__43598__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48708 = state_46158;
state_46158 = G__48708;
continue;
} else {
return ret_value__43596__auto__;
}
break;
}
});
cljs$core$async$state_machine__43595__auto__ = function(state_46158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43595__auto____1.call(this,state_46158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43595__auto____0;
cljs$core$async$state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43595__auto____1;
return cljs$core$async$state_machine__43595__auto__;
})()
})();
var state__43731__auto__ = (function (){var statearr_46206 = f__43730__auto__();
(statearr_46206[(6)] = c__43729__auto___48586);

return statearr_46206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43731__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46212 = arguments.length;
switch (G__46212) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__43729__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43730__auto__ = (function (){var switch__43594__auto__ = (function (state_46289){
var state_val_46290 = (state_46289[(1)]);
if((state_val_46290 === (7))){
var inst_46284 = (state_46289[(2)]);
var state_46289__$1 = state_46289;
var statearr_46301_48763 = state_46289__$1;
(statearr_46301_48763[(2)] = inst_46284);

(statearr_46301_48763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46290 === (20))){
var inst_46253 = (state_46289[(7)]);
var inst_46265 = (state_46289[(2)]);
var inst_46266 = cljs.core.next(inst_46253);
var inst_46235 = inst_46266;
var inst_46236 = null;
var inst_46237 = (0);
var inst_46238 = (0);
var state_46289__$1 = (function (){var statearr_46302 = state_46289;
(statearr_46302[(8)] = inst_46236);

(statearr_46302[(9)] = inst_46265);

(statearr_46302[(10)] = inst_46237);

(statearr_46302[(11)] = inst_46235);

(statearr_46302[(12)] = inst_46238);

return statearr_46302;
})();
var statearr_46303_48765 = state_46289__$1;
(statearr_46303_48765[(2)] = null);

(statearr_46303_48765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46290 === (1))){
var state_46289__$1 = state_46289;
var statearr_46304_48766 = state_46289__$1;
(statearr_46304_48766[(2)] = null);

(statearr_46304_48766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46290 === (4))){
var inst_46224 = (state_46289[(13)]);
var inst_46224__$1 = (state_46289[(2)]);
var inst_46225 = (inst_46224__$1 == null);
var state_46289__$1 = (function (){var statearr_46309 = state_46289;
(statearr_46309[(13)] = inst_46224__$1);

return statearr_46309;
})();
if(cljs.core.truth_(inst_46225)){
var statearr_46311_48768 = state_46289__$1;
(statearr_46311_48768[(1)] = (5));

} else {
var statearr_46312_48772 = state_46289__$1;
(statearr_46312_48772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46290 === (15))){
var state_46289__$1 = state_46289;
var statearr_46318_48776 = state_46289__$1;
(statearr_46318_48776[(2)] = null);

(statearr_46318_48776[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46290 === (21))){
var state_46289__$1 = state_46289;
var statearr_46320_48777 = state_46289__$1;
(statearr_46320_48777[(2)] = null);

(statearr_46320_48777[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46290 === (13))){
var inst_46236 = (state_46289[(8)]);
var inst_46237 = (state_46289[(10)]);
var inst_46235 = (state_46289[(11)]);
var inst_46238 = (state_46289[(12)]);
var inst_46246 = (state_46289[(2)]);
var inst_46247 = (inst_46238 + (1));
var tmp46313 = inst_46236;
var tmp46314 = inst_46237;
var tmp46315 = inst_46235;
var inst_46235__$1 = tmp46315;
var inst_46236__$1 = tmp46313;
var inst_46237__$1 = tmp46314;
var inst_46238__$1 = inst_46247;
var state_46289__$1 = (function (){var statearr_46325 = state_46289;
(statearr_46325[(8)] = inst_46236__$1);

(statearr_46325[(14)] = inst_46246);

(statearr_46325[(10)] = inst_46237__$1);

(statearr_46325[(11)] = inst_46235__$1);

(statearr_46325[(12)] = inst_46238__$1);

return statearr_46325;
})();
var statearr_46332_48778 = state_46289__$1;
(statearr_46332_48778[(2)] = null);

(statearr_46332_48778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46290 === (22))){
var state_46289__$1 = state_46289;
var statearr_46346_48779 = state_46289__$1;
(statearr_46346_48779[(2)] = null);

(statearr_46346_48779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46290 === (6))){
var inst_46224 = (state_46289[(13)]);
var inst_46233 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46224) : f.call(null,inst_46224));
var inst_46234 = cljs.core.seq(inst_46233);
var inst_46235 = inst_46234;
var inst_46236 = null;
var inst_46237 = (0);
var inst_46238 = (0);
var state_46289__$1 = (function (){var statearr_46347 = state_46289;
(statearr_46347[(8)] = inst_46236);

(statearr_46347[(10)] = inst_46237);

(statearr_46347[(11)] = inst_46235);

(statearr_46347[(12)] = inst_46238);

return statearr_46347;
})();
var statearr_46349_48781 = state_46289__$1;
(statearr_46349_48781[(2)] = null);

(statearr_46349_48781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46290 === (17))){
var inst_46253 = (state_46289[(7)]);
var inst_46257 = cljs.core.chunk_first(inst_46253);
var inst_46258 = cljs.core.chunk_rest(inst_46253);
var inst_46259 = cljs.core.count(inst_46257);
var inst_46235 = inst_46258;
var inst_46236 = inst_46257;
var inst_46237 = inst_46259;
var inst_46238 = (0);
var state_46289__$1 = (function (){var statearr_46350 = state_46289;
(statearr_46350[(8)] = inst_46236);

(statearr_46350[(10)] = inst_46237);

(statearr_46350[(11)] = inst_46235);

(statearr_46350[(12)] = inst_46238);

return statearr_46350;
})();
var statearr_46351_48784 = state_46289__$1;
(statearr_46351_48784[(2)] = null);

(statearr_46351_48784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46290 === (3))){
var inst_46286 = (state_46289[(2)]);
var state_46289__$1 = state_46289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46289__$1,inst_46286);
} else {
if((state_val_46290 === (12))){
var inst_46274 = (state_46289[(2)]);
var state_46289__$1 = state_46289;
var statearr_46352_48786 = state_46289__$1;
(statearr_46352_48786[(2)] = inst_46274);

(statearr_46352_48786[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46290 === (2))){
var state_46289__$1 = state_46289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46289__$1,(4),in$);
} else {
if((state_val_46290 === (23))){
var inst_46282 = (state_46289[(2)]);
var state_46289__$1 = state_46289;
var statearr_46353_48787 = state_46289__$1;
(statearr_46353_48787[(2)] = inst_46282);

(statearr_46353_48787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46290 === (19))){
var inst_46269 = (state_46289[(2)]);
var state_46289__$1 = state_46289;
var statearr_46356_48793 = state_46289__$1;
(statearr_46356_48793[(2)] = inst_46269);

(statearr_46356_48793[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46290 === (11))){
var inst_46253 = (state_46289[(7)]);
var inst_46235 = (state_46289[(11)]);
var inst_46253__$1 = cljs.core.seq(inst_46235);
var state_46289__$1 = (function (){var statearr_46362 = state_46289;
(statearr_46362[(7)] = inst_46253__$1);

return statearr_46362;
})();
if(inst_46253__$1){
var statearr_46363_48797 = state_46289__$1;
(statearr_46363_48797[(1)] = (14));

} else {
var statearr_46364_48799 = state_46289__$1;
(statearr_46364_48799[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46290 === (9))){
var inst_46276 = (state_46289[(2)]);
var inst_46277 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46289__$1 = (function (){var statearr_46365 = state_46289;
(statearr_46365[(15)] = inst_46276);

return statearr_46365;
})();
if(cljs.core.truth_(inst_46277)){
var statearr_46382_48807 = state_46289__$1;
(statearr_46382_48807[(1)] = (21));

} else {
var statearr_46383_48814 = state_46289__$1;
(statearr_46383_48814[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46290 === (5))){
var inst_46227 = cljs.core.async.close_BANG_(out);
var state_46289__$1 = state_46289;
var statearr_46388_48816 = state_46289__$1;
(statearr_46388_48816[(2)] = inst_46227);

(statearr_46388_48816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46290 === (14))){
var inst_46253 = (state_46289[(7)]);
var inst_46255 = cljs.core.chunked_seq_QMARK_(inst_46253);
var state_46289__$1 = state_46289;
if(inst_46255){
var statearr_46399_48821 = state_46289__$1;
(statearr_46399_48821[(1)] = (17));

} else {
var statearr_46400_48822 = state_46289__$1;
(statearr_46400_48822[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46290 === (16))){
var inst_46272 = (state_46289[(2)]);
var state_46289__$1 = state_46289;
var statearr_46403_48825 = state_46289__$1;
(statearr_46403_48825[(2)] = inst_46272);

(statearr_46403_48825[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46290 === (10))){
var inst_46236 = (state_46289[(8)]);
var inst_46238 = (state_46289[(12)]);
var inst_46244 = cljs.core._nth(inst_46236,inst_46238);
var state_46289__$1 = state_46289;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46289__$1,(13),out,inst_46244);
} else {
if((state_val_46290 === (18))){
var inst_46253 = (state_46289[(7)]);
var inst_46263 = cljs.core.first(inst_46253);
var state_46289__$1 = state_46289;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46289__$1,(20),out,inst_46263);
} else {
if((state_val_46290 === (8))){
var inst_46237 = (state_46289[(10)]);
var inst_46238 = (state_46289[(12)]);
var inst_46240 = (inst_46238 < inst_46237);
var inst_46241 = inst_46240;
var state_46289__$1 = state_46289;
if(cljs.core.truth_(inst_46241)){
var statearr_46406_48835 = state_46289__$1;
(statearr_46406_48835[(1)] = (10));

} else {
var statearr_46407_48837 = state_46289__$1;
(statearr_46407_48837[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43595__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43595__auto____0 = (function (){
var statearr_46408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46408[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43595__auto__);

(statearr_46408[(1)] = (1));

return statearr_46408;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43595__auto____1 = (function (state_46289){
while(true){
var ret_value__43596__auto__ = (function (){try{while(true){
var result__43597__auto__ = switch__43594__auto__(state_46289);
if(cljs.core.keyword_identical_QMARK_(result__43597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43597__auto__;
}
break;
}
}catch (e46409){var ex__43598__auto__ = e46409;
var statearr_46410_48844 = state_46289;
(statearr_46410_48844[(2)] = ex__43598__auto__);


if(cljs.core.seq((state_46289[(4)]))){
var statearr_46411_48849 = state_46289;
(statearr_46411_48849[(1)] = cljs.core.first((state_46289[(4)])));

} else {
throw ex__43598__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48854 = state_46289;
state_46289 = G__48854;
continue;
} else {
return ret_value__43596__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43595__auto__ = function(state_46289){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43595__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43595__auto____1.call(this,state_46289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43595__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43595__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43595__auto__;
})()
})();
var state__43731__auto__ = (function (){var statearr_46414 = f__43730__auto__();
(statearr_46414[(6)] = c__43729__auto__);

return statearr_46414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43731__auto__);
}));

return c__43729__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46418 = arguments.length;
switch (G__46418) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__46420 = arguments.length;
switch (G__46420) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__46423 = arguments.length;
switch (G__46423) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43729__auto___48935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43730__auto__ = (function (){var switch__43594__auto__ = (function (state_46449){
var state_val_46450 = (state_46449[(1)]);
if((state_val_46450 === (7))){
var inst_46444 = (state_46449[(2)]);
var state_46449__$1 = state_46449;
var statearr_46451_48940 = state_46449__$1;
(statearr_46451_48940[(2)] = inst_46444);

(statearr_46451_48940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46450 === (1))){
var inst_46426 = null;
var state_46449__$1 = (function (){var statearr_46453 = state_46449;
(statearr_46453[(7)] = inst_46426);

return statearr_46453;
})();
var statearr_46454_48942 = state_46449__$1;
(statearr_46454_48942[(2)] = null);

(statearr_46454_48942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46450 === (4))){
var inst_46429 = (state_46449[(8)]);
var inst_46429__$1 = (state_46449[(2)]);
var inst_46430 = (inst_46429__$1 == null);
var inst_46431 = cljs.core.not(inst_46430);
var state_46449__$1 = (function (){var statearr_46460 = state_46449;
(statearr_46460[(8)] = inst_46429__$1);

return statearr_46460;
})();
if(inst_46431){
var statearr_46461_48951 = state_46449__$1;
(statearr_46461_48951[(1)] = (5));

} else {
var statearr_46462_48952 = state_46449__$1;
(statearr_46462_48952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46450 === (6))){
var state_46449__$1 = state_46449;
var statearr_46463_48953 = state_46449__$1;
(statearr_46463_48953[(2)] = null);

(statearr_46463_48953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46450 === (3))){
var inst_46446 = (state_46449[(2)]);
var inst_46447 = cljs.core.async.close_BANG_(out);
var state_46449__$1 = (function (){var statearr_46464 = state_46449;
(statearr_46464[(9)] = inst_46446);

return statearr_46464;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46449__$1,inst_46447);
} else {
if((state_val_46450 === (2))){
var state_46449__$1 = state_46449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46449__$1,(4),ch);
} else {
if((state_val_46450 === (11))){
var inst_46429 = (state_46449[(8)]);
var inst_46438 = (state_46449[(2)]);
var inst_46426 = inst_46429;
var state_46449__$1 = (function (){var statearr_46465 = state_46449;
(statearr_46465[(10)] = inst_46438);

(statearr_46465[(7)] = inst_46426);

return statearr_46465;
})();
var statearr_46466_48964 = state_46449__$1;
(statearr_46466_48964[(2)] = null);

(statearr_46466_48964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46450 === (9))){
var inst_46429 = (state_46449[(8)]);
var state_46449__$1 = state_46449;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46449__$1,(11),out,inst_46429);
} else {
if((state_val_46450 === (5))){
var inst_46429 = (state_46449[(8)]);
var inst_46426 = (state_46449[(7)]);
var inst_46433 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46429,inst_46426);
var state_46449__$1 = state_46449;
if(inst_46433){
var statearr_46469_48973 = state_46449__$1;
(statearr_46469_48973[(1)] = (8));

} else {
var statearr_46470_48977 = state_46449__$1;
(statearr_46470_48977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46450 === (10))){
var inst_46441 = (state_46449[(2)]);
var state_46449__$1 = state_46449;
var statearr_46471_48981 = state_46449__$1;
(statearr_46471_48981[(2)] = inst_46441);

(statearr_46471_48981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46450 === (8))){
var inst_46426 = (state_46449[(7)]);
var tmp46468 = inst_46426;
var inst_46426__$1 = tmp46468;
var state_46449__$1 = (function (){var statearr_46473 = state_46449;
(statearr_46473[(7)] = inst_46426__$1);

return statearr_46473;
})();
var statearr_46474_48983 = state_46449__$1;
(statearr_46474_48983[(2)] = null);

(statearr_46474_48983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43595__auto__ = null;
var cljs$core$async$state_machine__43595__auto____0 = (function (){
var statearr_46483 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46483[(0)] = cljs$core$async$state_machine__43595__auto__);

(statearr_46483[(1)] = (1));

return statearr_46483;
});
var cljs$core$async$state_machine__43595__auto____1 = (function (state_46449){
while(true){
var ret_value__43596__auto__ = (function (){try{while(true){
var result__43597__auto__ = switch__43594__auto__(state_46449);
if(cljs.core.keyword_identical_QMARK_(result__43597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43597__auto__;
}
break;
}
}catch (e46484){var ex__43598__auto__ = e46484;
var statearr_46489_48990 = state_46449;
(statearr_46489_48990[(2)] = ex__43598__auto__);


if(cljs.core.seq((state_46449[(4)]))){
var statearr_46490_48994 = state_46449;
(statearr_46490_48994[(1)] = cljs.core.first((state_46449[(4)])));

} else {
throw ex__43598__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49002 = state_46449;
state_46449 = G__49002;
continue;
} else {
return ret_value__43596__auto__;
}
break;
}
});
cljs$core$async$state_machine__43595__auto__ = function(state_46449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43595__auto____1.call(this,state_46449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43595__auto____0;
cljs$core$async$state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43595__auto____1;
return cljs$core$async$state_machine__43595__auto__;
})()
})();
var state__43731__auto__ = (function (){var statearr_46504 = f__43730__auto__();
(statearr_46504[(6)] = c__43729__auto___48935);

return statearr_46504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43731__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46506 = arguments.length;
switch (G__46506) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43729__auto___49025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43730__auto__ = (function (){var switch__43594__auto__ = (function (state_46548){
var state_val_46549 = (state_46548[(1)]);
if((state_val_46549 === (7))){
var inst_46544 = (state_46548[(2)]);
var state_46548__$1 = state_46548;
var statearr_46550_49029 = state_46548__$1;
(statearr_46550_49029[(2)] = inst_46544);

(statearr_46550_49029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46549 === (1))){
var inst_46507 = (new Array(n));
var inst_46508 = inst_46507;
var inst_46509 = (0);
var state_46548__$1 = (function (){var statearr_46551 = state_46548;
(statearr_46551[(7)] = inst_46508);

(statearr_46551[(8)] = inst_46509);

return statearr_46551;
})();
var statearr_46552_49038 = state_46548__$1;
(statearr_46552_49038[(2)] = null);

(statearr_46552_49038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46549 === (4))){
var inst_46513 = (state_46548[(9)]);
var inst_46513__$1 = (state_46548[(2)]);
var inst_46514 = (inst_46513__$1 == null);
var inst_46515 = cljs.core.not(inst_46514);
var state_46548__$1 = (function (){var statearr_46553 = state_46548;
(statearr_46553[(9)] = inst_46513__$1);

return statearr_46553;
})();
if(inst_46515){
var statearr_46554_49041 = state_46548__$1;
(statearr_46554_49041[(1)] = (5));

} else {
var statearr_46555_49042 = state_46548__$1;
(statearr_46555_49042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46549 === (15))){
var inst_46538 = (state_46548[(2)]);
var state_46548__$1 = state_46548;
var statearr_46557_49043 = state_46548__$1;
(statearr_46557_49043[(2)] = inst_46538);

(statearr_46557_49043[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46549 === (13))){
var state_46548__$1 = state_46548;
var statearr_46558_49044 = state_46548__$1;
(statearr_46558_49044[(2)] = null);

(statearr_46558_49044[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46549 === (6))){
var inst_46509 = (state_46548[(8)]);
var inst_46534 = (inst_46509 > (0));
var state_46548__$1 = state_46548;
if(cljs.core.truth_(inst_46534)){
var statearr_46560_49045 = state_46548__$1;
(statearr_46560_49045[(1)] = (12));

} else {
var statearr_46561_49050 = state_46548__$1;
(statearr_46561_49050[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46549 === (3))){
var inst_46546 = (state_46548[(2)]);
var state_46548__$1 = state_46548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46548__$1,inst_46546);
} else {
if((state_val_46549 === (12))){
var inst_46508 = (state_46548[(7)]);
var inst_46536 = cljs.core.vec(inst_46508);
var state_46548__$1 = state_46548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46548__$1,(15),out,inst_46536);
} else {
if((state_val_46549 === (2))){
var state_46548__$1 = state_46548;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46548__$1,(4),ch);
} else {
if((state_val_46549 === (11))){
var inst_46527 = (state_46548[(2)]);
var inst_46528 = (new Array(n));
var inst_46508 = inst_46528;
var inst_46509 = (0);
var state_46548__$1 = (function (){var statearr_46562 = state_46548;
(statearr_46562[(7)] = inst_46508);

(statearr_46562[(8)] = inst_46509);

(statearr_46562[(10)] = inst_46527);

return statearr_46562;
})();
var statearr_46563_49077 = state_46548__$1;
(statearr_46563_49077[(2)] = null);

(statearr_46563_49077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46549 === (9))){
var inst_46508 = (state_46548[(7)]);
var inst_46525 = cljs.core.vec(inst_46508);
var state_46548__$1 = state_46548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46548__$1,(11),out,inst_46525);
} else {
if((state_val_46549 === (5))){
var inst_46513 = (state_46548[(9)]);
var inst_46508 = (state_46548[(7)]);
var inst_46518 = (state_46548[(11)]);
var inst_46509 = (state_46548[(8)]);
var inst_46517 = (inst_46508[inst_46509] = inst_46513);
var inst_46518__$1 = (inst_46509 + (1));
var inst_46520 = (inst_46518__$1 < n);
var state_46548__$1 = (function (){var statearr_46568 = state_46548;
(statearr_46568[(12)] = inst_46517);

(statearr_46568[(11)] = inst_46518__$1);

return statearr_46568;
})();
if(cljs.core.truth_(inst_46520)){
var statearr_46569_49088 = state_46548__$1;
(statearr_46569_49088[(1)] = (8));

} else {
var statearr_46570_49089 = state_46548__$1;
(statearr_46570_49089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46549 === (14))){
var inst_46541 = (state_46548[(2)]);
var inst_46542 = cljs.core.async.close_BANG_(out);
var state_46548__$1 = (function (){var statearr_46573 = state_46548;
(statearr_46573[(13)] = inst_46541);

return statearr_46573;
})();
var statearr_46574_49093 = state_46548__$1;
(statearr_46574_49093[(2)] = inst_46542);

(statearr_46574_49093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46549 === (10))){
var inst_46532 = (state_46548[(2)]);
var state_46548__$1 = state_46548;
var statearr_46575_49094 = state_46548__$1;
(statearr_46575_49094[(2)] = inst_46532);

(statearr_46575_49094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46549 === (8))){
var inst_46508 = (state_46548[(7)]);
var inst_46518 = (state_46548[(11)]);
var tmp46572 = inst_46508;
var inst_46508__$1 = tmp46572;
var inst_46509 = inst_46518;
var state_46548__$1 = (function (){var statearr_46576 = state_46548;
(statearr_46576[(7)] = inst_46508__$1);

(statearr_46576[(8)] = inst_46509);

return statearr_46576;
})();
var statearr_46578_49107 = state_46548__$1;
(statearr_46578_49107[(2)] = null);

(statearr_46578_49107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43595__auto__ = null;
var cljs$core$async$state_machine__43595__auto____0 = (function (){
var statearr_46579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46579[(0)] = cljs$core$async$state_machine__43595__auto__);

(statearr_46579[(1)] = (1));

return statearr_46579;
});
var cljs$core$async$state_machine__43595__auto____1 = (function (state_46548){
while(true){
var ret_value__43596__auto__ = (function (){try{while(true){
var result__43597__auto__ = switch__43594__auto__(state_46548);
if(cljs.core.keyword_identical_QMARK_(result__43597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43597__auto__;
}
break;
}
}catch (e46580){var ex__43598__auto__ = e46580;
var statearr_46581_49112 = state_46548;
(statearr_46581_49112[(2)] = ex__43598__auto__);


if(cljs.core.seq((state_46548[(4)]))){
var statearr_46583_49128 = state_46548;
(statearr_46583_49128[(1)] = cljs.core.first((state_46548[(4)])));

} else {
throw ex__43598__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49131 = state_46548;
state_46548 = G__49131;
continue;
} else {
return ret_value__43596__auto__;
}
break;
}
});
cljs$core$async$state_machine__43595__auto__ = function(state_46548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43595__auto____1.call(this,state_46548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43595__auto____0;
cljs$core$async$state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43595__auto____1;
return cljs$core$async$state_machine__43595__auto__;
})()
})();
var state__43731__auto__ = (function (){var statearr_46585 = f__43730__auto__();
(statearr_46585[(6)] = c__43729__auto___49025);

return statearr_46585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43731__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46591 = arguments.length;
switch (G__46591) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43729__auto___49144 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43730__auto__ = (function (){var switch__43594__auto__ = (function (state_46634){
var state_val_46635 = (state_46634[(1)]);
if((state_val_46635 === (7))){
var inst_46630 = (state_46634[(2)]);
var state_46634__$1 = state_46634;
var statearr_46637_49153 = state_46634__$1;
(statearr_46637_49153[(2)] = inst_46630);

(statearr_46637_49153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46635 === (1))){
var inst_46592 = [];
var inst_46593 = inst_46592;
var inst_46594 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46634__$1 = (function (){var statearr_46638 = state_46634;
(statearr_46638[(7)] = inst_46594);

(statearr_46638[(8)] = inst_46593);

return statearr_46638;
})();
var statearr_46639_49162 = state_46634__$1;
(statearr_46639_49162[(2)] = null);

(statearr_46639_49162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46635 === (4))){
var inst_46598 = (state_46634[(9)]);
var inst_46598__$1 = (state_46634[(2)]);
var inst_46599 = (inst_46598__$1 == null);
var inst_46600 = cljs.core.not(inst_46599);
var state_46634__$1 = (function (){var statearr_46640 = state_46634;
(statearr_46640[(9)] = inst_46598__$1);

return statearr_46640;
})();
if(inst_46600){
var statearr_46643_49173 = state_46634__$1;
(statearr_46643_49173[(1)] = (5));

} else {
var statearr_46645_49174 = state_46634__$1;
(statearr_46645_49174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46635 === (15))){
var inst_46624 = (state_46634[(2)]);
var state_46634__$1 = state_46634;
var statearr_46646_49177 = state_46634__$1;
(statearr_46646_49177[(2)] = inst_46624);

(statearr_46646_49177[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46635 === (13))){
var state_46634__$1 = state_46634;
var statearr_46647_49185 = state_46634__$1;
(statearr_46647_49185[(2)] = null);

(statearr_46647_49185[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46635 === (6))){
var inst_46593 = (state_46634[(8)]);
var inst_46619 = inst_46593.length;
var inst_46620 = (inst_46619 > (0));
var state_46634__$1 = state_46634;
if(cljs.core.truth_(inst_46620)){
var statearr_46648_49189 = state_46634__$1;
(statearr_46648_49189[(1)] = (12));

} else {
var statearr_46649_49190 = state_46634__$1;
(statearr_46649_49190[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46635 === (3))){
var inst_46632 = (state_46634[(2)]);
var state_46634__$1 = state_46634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46634__$1,inst_46632);
} else {
if((state_val_46635 === (12))){
var inst_46593 = (state_46634[(8)]);
var inst_46622 = cljs.core.vec(inst_46593);
var state_46634__$1 = state_46634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46634__$1,(15),out,inst_46622);
} else {
if((state_val_46635 === (2))){
var state_46634__$1 = state_46634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46634__$1,(4),ch);
} else {
if((state_val_46635 === (11))){
var inst_46602 = (state_46634[(10)]);
var inst_46598 = (state_46634[(9)]);
var inst_46612 = (state_46634[(2)]);
var inst_46613 = [];
var inst_46614 = inst_46613.push(inst_46598);
var inst_46593 = inst_46613;
var inst_46594 = inst_46602;
var state_46634__$1 = (function (){var statearr_46650 = state_46634;
(statearr_46650[(11)] = inst_46614);

(statearr_46650[(7)] = inst_46594);

(statearr_46650[(8)] = inst_46593);

(statearr_46650[(12)] = inst_46612);

return statearr_46650;
})();
var statearr_46651_49198 = state_46634__$1;
(statearr_46651_49198[(2)] = null);

(statearr_46651_49198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46635 === (9))){
var inst_46593 = (state_46634[(8)]);
var inst_46610 = cljs.core.vec(inst_46593);
var state_46634__$1 = state_46634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46634__$1,(11),out,inst_46610);
} else {
if((state_val_46635 === (5))){
var inst_46594 = (state_46634[(7)]);
var inst_46602 = (state_46634[(10)]);
var inst_46598 = (state_46634[(9)]);
var inst_46602__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46598) : f.call(null,inst_46598));
var inst_46603 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46602__$1,inst_46594);
var inst_46604 = cljs.core.keyword_identical_QMARK_(inst_46594,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46605 = ((inst_46603) || (inst_46604));
var state_46634__$1 = (function (){var statearr_46652 = state_46634;
(statearr_46652[(10)] = inst_46602__$1);

return statearr_46652;
})();
if(cljs.core.truth_(inst_46605)){
var statearr_46653_49208 = state_46634__$1;
(statearr_46653_49208[(1)] = (8));

} else {
var statearr_46656_49209 = state_46634__$1;
(statearr_46656_49209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46635 === (14))){
var inst_46627 = (state_46634[(2)]);
var inst_46628 = cljs.core.async.close_BANG_(out);
var state_46634__$1 = (function (){var statearr_46662 = state_46634;
(statearr_46662[(13)] = inst_46627);

return statearr_46662;
})();
var statearr_46665_49210 = state_46634__$1;
(statearr_46665_49210[(2)] = inst_46628);

(statearr_46665_49210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46635 === (10))){
var inst_46617 = (state_46634[(2)]);
var state_46634__$1 = state_46634;
var statearr_46667_49213 = state_46634__$1;
(statearr_46667_49213[(2)] = inst_46617);

(statearr_46667_49213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46635 === (8))){
var inst_46593 = (state_46634[(8)]);
var inst_46602 = (state_46634[(10)]);
var inst_46598 = (state_46634[(9)]);
var inst_46607 = inst_46593.push(inst_46598);
var tmp46658 = inst_46593;
var inst_46593__$1 = tmp46658;
var inst_46594 = inst_46602;
var state_46634__$1 = (function (){var statearr_46670 = state_46634;
(statearr_46670[(7)] = inst_46594);

(statearr_46670[(8)] = inst_46593__$1);

(statearr_46670[(14)] = inst_46607);

return statearr_46670;
})();
var statearr_46673_49217 = state_46634__$1;
(statearr_46673_49217[(2)] = null);

(statearr_46673_49217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43595__auto__ = null;
var cljs$core$async$state_machine__43595__auto____0 = (function (){
var statearr_46675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46675[(0)] = cljs$core$async$state_machine__43595__auto__);

(statearr_46675[(1)] = (1));

return statearr_46675;
});
var cljs$core$async$state_machine__43595__auto____1 = (function (state_46634){
while(true){
var ret_value__43596__auto__ = (function (){try{while(true){
var result__43597__auto__ = switch__43594__auto__(state_46634);
if(cljs.core.keyword_identical_QMARK_(result__43597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43597__auto__;
}
break;
}
}catch (e46676){var ex__43598__auto__ = e46676;
var statearr_46677_49221 = state_46634;
(statearr_46677_49221[(2)] = ex__43598__auto__);


if(cljs.core.seq((state_46634[(4)]))){
var statearr_46678_49222 = state_46634;
(statearr_46678_49222[(1)] = cljs.core.first((state_46634[(4)])));

} else {
throw ex__43598__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49223 = state_46634;
state_46634 = G__49223;
continue;
} else {
return ret_value__43596__auto__;
}
break;
}
});
cljs$core$async$state_machine__43595__auto__ = function(state_46634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43595__auto____1.call(this,state_46634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43595__auto____0;
cljs$core$async$state_machine__43595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43595__auto____1;
return cljs$core$async$state_machine__43595__auto__;
})()
})();
var state__43731__auto__ = (function (){var statearr_46679 = f__43730__auto__();
(statearr_46679[(6)] = c__43729__auto___49144);

return statearr_46679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43731__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

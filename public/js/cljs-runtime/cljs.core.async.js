goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__44077 = arguments.length;
switch (G__44077) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44080 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44080 = (function (f,blockable,meta44081){
this.f = f;
this.blockable = blockable;
this.meta44081 = meta44081;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44082,meta44081__$1){
var self__ = this;
var _44082__$1 = this;
return (new cljs.core.async.t_cljs$core$async44080(self__.f,self__.blockable,meta44081__$1));
}));

(cljs.core.async.t_cljs$core$async44080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44082){
var self__ = this;
var _44082__$1 = this;
return self__.meta44081;
}));

(cljs.core.async.t_cljs$core$async44080.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44080.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44080.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async44080.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async44080.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44081","meta44081",371198113,null)], null);
}));

(cljs.core.async.t_cljs$core$async44080.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44080.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44080");

(cljs.core.async.t_cljs$core$async44080.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44080");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44080.
 */
cljs.core.async.__GT_t_cljs$core$async44080 = (function cljs$core$async$__GT_t_cljs$core$async44080(f__$1,blockable__$1,meta44081){
return (new cljs.core.async.t_cljs$core$async44080(f__$1,blockable__$1,meta44081));
});

}

return (new cljs.core.async.t_cljs$core$async44080(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__44131 = arguments.length;
switch (G__44131) {
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
var G__44144 = arguments.length;
switch (G__44144) {
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
var G__44156 = arguments.length;
switch (G__44156) {
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
var val_46913 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46913) : fn1.call(null,val_46913));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46913) : fn1.call(null,val_46913));
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
var G__44163 = arguments.length;
switch (G__44163) {
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
var n__4613__auto___46916 = n;
var x_46917 = (0);
while(true){
if((x_46917 < n__4613__auto___46916)){
(a[x_46917] = x_46917);

var G__46918 = (x_46917 + (1));
x_46917 = G__46918;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44174 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44174 = (function (flag,meta44175){
this.flag = flag;
this.meta44175 = meta44175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44176,meta44175__$1){
var self__ = this;
var _44176__$1 = this;
return (new cljs.core.async.t_cljs$core$async44174(self__.flag,meta44175__$1));
}));

(cljs.core.async.t_cljs$core$async44174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44176){
var self__ = this;
var _44176__$1 = this;
return self__.meta44175;
}));

(cljs.core.async.t_cljs$core$async44174.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44174.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44174.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44174.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async44174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44175","meta44175",1143227,null)], null);
}));

(cljs.core.async.t_cljs$core$async44174.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44174");

(cljs.core.async.t_cljs$core$async44174.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44174");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44174.
 */
cljs.core.async.__GT_t_cljs$core$async44174 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44174(flag__$1,meta44175){
return (new cljs.core.async.t_cljs$core$async44174(flag__$1,meta44175));
});

}

return (new cljs.core.async.t_cljs$core$async44174(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44197 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44197 = (function (flag,cb,meta44198){
this.flag = flag;
this.cb = cb;
this.meta44198 = meta44198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44199,meta44198__$1){
var self__ = this;
var _44199__$1 = this;
return (new cljs.core.async.t_cljs$core$async44197(self__.flag,self__.cb,meta44198__$1));
}));

(cljs.core.async.t_cljs$core$async44197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44199){
var self__ = this;
var _44199__$1 = this;
return self__.meta44198;
}));

(cljs.core.async.t_cljs$core$async44197.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44197.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44197.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44197.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async44197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44198","meta44198",116850789,null)], null);
}));

(cljs.core.async.t_cljs$core$async44197.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44197.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44197");

(cljs.core.async.t_cljs$core$async44197.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44197");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44197.
 */
cljs.core.async.__GT_t_cljs$core$async44197 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44197(flag__$1,cb__$1,meta44198){
return (new cljs.core.async.t_cljs$core$async44197(flag__$1,cb__$1,meta44198));
});

}

return (new cljs.core.async.t_cljs$core$async44197(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__44253_SHARP_){
var G__44258 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44253_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44258) : fret.call(null,G__44258));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44254_SHARP_){
var G__44261 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44254_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44261) : fret.call(null,G__44261));
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
var G__46959 = (i + (1));
i = G__46959;
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
var len__4736__auto___46964 = arguments.length;
var i__4737__auto___46965 = (0);
while(true){
if((i__4737__auto___46965 < len__4736__auto___46964)){
args__4742__auto__.push((arguments[i__4737__auto___46965]));

var G__46967 = (i__4737__auto___46965 + (1));
i__4737__auto___46965 = G__46967;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44271){
var map__44272 = p__44271;
var map__44272__$1 = (((((!((map__44272 == null))))?(((((map__44272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44272):map__44272);
var opts = map__44272__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44266){
var G__44267 = cljs.core.first(seq44266);
var seq44266__$1 = cljs.core.next(seq44266);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44267,seq44266__$1);
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
var G__44282 = arguments.length;
switch (G__44282) {
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
var c__43979__auto___46979 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43980__auto__ = (function (){var switch__43818__auto__ = (function (state_44341){
var state_val_44345 = (state_44341[(1)]);
if((state_val_44345 === (7))){
var inst_44327 = (state_44341[(2)]);
var state_44341__$1 = state_44341;
var statearr_44346_46981 = state_44341__$1;
(statearr_44346_46981[(2)] = inst_44327);

(statearr_44346_46981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44345 === (1))){
var state_44341__$1 = state_44341;
var statearr_44347_46982 = state_44341__$1;
(statearr_44347_46982[(2)] = null);

(statearr_44347_46982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44345 === (4))){
var inst_44300 = (state_44341[(7)]);
var inst_44300__$1 = (state_44341[(2)]);
var inst_44305 = (inst_44300__$1 == null);
var state_44341__$1 = (function (){var statearr_44348 = state_44341;
(statearr_44348[(7)] = inst_44300__$1);

return statearr_44348;
})();
if(cljs.core.truth_(inst_44305)){
var statearr_44349_46983 = state_44341__$1;
(statearr_44349_46983[(1)] = (5));

} else {
var statearr_44350_46985 = state_44341__$1;
(statearr_44350_46985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44345 === (13))){
var state_44341__$1 = state_44341;
var statearr_44351_46987 = state_44341__$1;
(statearr_44351_46987[(2)] = null);

(statearr_44351_46987[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44345 === (6))){
var inst_44300 = (state_44341[(7)]);
var state_44341__$1 = state_44341;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44341__$1,(11),to,inst_44300);
} else {
if((state_val_44345 === (3))){
var inst_44330 = (state_44341[(2)]);
var state_44341__$1 = state_44341;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44341__$1,inst_44330);
} else {
if((state_val_44345 === (12))){
var state_44341__$1 = state_44341;
var statearr_44352_46989 = state_44341__$1;
(statearr_44352_46989[(2)] = null);

(statearr_44352_46989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44345 === (2))){
var state_44341__$1 = state_44341;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44341__$1,(4),from);
} else {
if((state_val_44345 === (11))){
var inst_44320 = (state_44341[(2)]);
var state_44341__$1 = state_44341;
if(cljs.core.truth_(inst_44320)){
var statearr_44353_46990 = state_44341__$1;
(statearr_44353_46990[(1)] = (12));

} else {
var statearr_44354_46991 = state_44341__$1;
(statearr_44354_46991[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44345 === (9))){
var state_44341__$1 = state_44341;
var statearr_44355_46992 = state_44341__$1;
(statearr_44355_46992[(2)] = null);

(statearr_44355_46992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44345 === (5))){
var state_44341__$1 = state_44341;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44359_46993 = state_44341__$1;
(statearr_44359_46993[(1)] = (8));

} else {
var statearr_44360_46994 = state_44341__$1;
(statearr_44360_46994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44345 === (14))){
var inst_44325 = (state_44341[(2)]);
var state_44341__$1 = state_44341;
var statearr_44364_46996 = state_44341__$1;
(statearr_44364_46996[(2)] = inst_44325);

(statearr_44364_46996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44345 === (10))){
var inst_44317 = (state_44341[(2)]);
var state_44341__$1 = state_44341;
var statearr_44365_46997 = state_44341__$1;
(statearr_44365_46997[(2)] = inst_44317);

(statearr_44365_46997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44345 === (8))){
var inst_44311 = cljs.core.async.close_BANG_(to);
var state_44341__$1 = state_44341;
var statearr_44366_46998 = state_44341__$1;
(statearr_44366_46998[(2)] = inst_44311);

(statearr_44366_46998[(1)] = (10));


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
var cljs$core$async$state_machine__43819__auto__ = null;
var cljs$core$async$state_machine__43819__auto____0 = (function (){
var statearr_44367 = [null,null,null,null,null,null,null,null];
(statearr_44367[(0)] = cljs$core$async$state_machine__43819__auto__);

(statearr_44367[(1)] = (1));

return statearr_44367;
});
var cljs$core$async$state_machine__43819__auto____1 = (function (state_44341){
while(true){
var ret_value__43820__auto__ = (function (){try{while(true){
var result__43821__auto__ = switch__43818__auto__(state_44341);
if(cljs.core.keyword_identical_QMARK_(result__43821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43821__auto__;
}
break;
}
}catch (e44368){var ex__43822__auto__ = e44368;
var statearr_44373_47001 = state_44341;
(statearr_44373_47001[(2)] = ex__43822__auto__);


if(cljs.core.seq((state_44341[(4)]))){
var statearr_44374_47002 = state_44341;
(statearr_44374_47002[(1)] = cljs.core.first((state_44341[(4)])));

} else {
throw ex__43822__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47003 = state_44341;
state_44341 = G__47003;
continue;
} else {
return ret_value__43820__auto__;
}
break;
}
});
cljs$core$async$state_machine__43819__auto__ = function(state_44341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43819__auto____1.call(this,state_44341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43819__auto____0;
cljs$core$async$state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43819__auto____1;
return cljs$core$async$state_machine__43819__auto__;
})()
})();
var state__43981__auto__ = (function (){var statearr_44375 = f__43980__auto__();
(statearr_44375[(6)] = c__43979__auto___46979);

return statearr_44375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43981__auto__);
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
var process = (function (p__44380){
var vec__44381 = p__44380;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44381,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44381,(1),null);
var job = vec__44381;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__43979__auto___47012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43980__auto__ = (function (){var switch__43818__auto__ = (function (state_44388){
var state_val_44389 = (state_44388[(1)]);
if((state_val_44389 === (1))){
var state_44388__$1 = state_44388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44388__$1,(2),res,v);
} else {
if((state_val_44389 === (2))){
var inst_44385 = (state_44388[(2)]);
var inst_44386 = cljs.core.async.close_BANG_(res);
var state_44388__$1 = (function (){var statearr_44394 = state_44388;
(statearr_44394[(7)] = inst_44385);

return statearr_44394;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44388__$1,inst_44386);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____0 = (function (){
var statearr_44396 = [null,null,null,null,null,null,null,null];
(statearr_44396[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__);

(statearr_44396[(1)] = (1));

return statearr_44396;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____1 = (function (state_44388){
while(true){
var ret_value__43820__auto__ = (function (){try{while(true){
var result__43821__auto__ = switch__43818__auto__(state_44388);
if(cljs.core.keyword_identical_QMARK_(result__43821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43821__auto__;
}
break;
}
}catch (e44397){var ex__43822__auto__ = e44397;
var statearr_44398_47020 = state_44388;
(statearr_44398_47020[(2)] = ex__43822__auto__);


if(cljs.core.seq((state_44388[(4)]))){
var statearr_44399_47021 = state_44388;
(statearr_44399_47021[(1)] = cljs.core.first((state_44388[(4)])));

} else {
throw ex__43822__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47022 = state_44388;
state_44388 = G__47022;
continue;
} else {
return ret_value__43820__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__ = function(state_44388){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____1.call(this,state_44388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__;
})()
})();
var state__43981__auto__ = (function (){var statearr_44400 = f__43980__auto__();
(statearr_44400[(6)] = c__43979__auto___47012);

return statearr_44400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43981__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__44401){
var vec__44402 = p__44401;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44402,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44402,(1),null);
var job = vec__44402;
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
var n__4613__auto___47026 = n;
var __47028 = (0);
while(true){
if((__47028 < n__4613__auto___47026)){
var G__44409_47029 = type;
var G__44409_47030__$1 = (((G__44409_47029 instanceof cljs.core.Keyword))?G__44409_47029.fqn:null);
switch (G__44409_47030__$1) {
case "compute":
var c__43979__auto___47035 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47028,c__43979__auto___47035,G__44409_47029,G__44409_47030__$1,n__4613__auto___47026,jobs,results,process,async){
return (function (){
var f__43980__auto__ = (function (){var switch__43818__auto__ = ((function (__47028,c__43979__auto___47035,G__44409_47029,G__44409_47030__$1,n__4613__auto___47026,jobs,results,process,async){
return (function (state_44422){
var state_val_44423 = (state_44422[(1)]);
if((state_val_44423 === (1))){
var state_44422__$1 = state_44422;
var statearr_44424_47036 = state_44422__$1;
(statearr_44424_47036[(2)] = null);

(statearr_44424_47036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44423 === (2))){
var state_44422__$1 = state_44422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44422__$1,(4),jobs);
} else {
if((state_val_44423 === (3))){
var inst_44420 = (state_44422[(2)]);
var state_44422__$1 = state_44422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44422__$1,inst_44420);
} else {
if((state_val_44423 === (4))){
var inst_44412 = (state_44422[(2)]);
var inst_44413 = process(inst_44412);
var state_44422__$1 = state_44422;
if(cljs.core.truth_(inst_44413)){
var statearr_44425_47039 = state_44422__$1;
(statearr_44425_47039[(1)] = (5));

} else {
var statearr_44426_47040 = state_44422__$1;
(statearr_44426_47040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44423 === (5))){
var state_44422__$1 = state_44422;
var statearr_44427_47045 = state_44422__$1;
(statearr_44427_47045[(2)] = null);

(statearr_44427_47045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44423 === (6))){
var state_44422__$1 = state_44422;
var statearr_44429_47046 = state_44422__$1;
(statearr_44429_47046[(2)] = null);

(statearr_44429_47046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44423 === (7))){
var inst_44418 = (state_44422[(2)]);
var state_44422__$1 = state_44422;
var statearr_44431_47049 = state_44422__$1;
(statearr_44431_47049[(2)] = inst_44418);

(statearr_44431_47049[(1)] = (3));


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
});})(__47028,c__43979__auto___47035,G__44409_47029,G__44409_47030__$1,n__4613__auto___47026,jobs,results,process,async))
;
return ((function (__47028,switch__43818__auto__,c__43979__auto___47035,G__44409_47029,G__44409_47030__$1,n__4613__auto___47026,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____0 = (function (){
var statearr_44432 = [null,null,null,null,null,null,null];
(statearr_44432[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__);

(statearr_44432[(1)] = (1));

return statearr_44432;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____1 = (function (state_44422){
while(true){
var ret_value__43820__auto__ = (function (){try{while(true){
var result__43821__auto__ = switch__43818__auto__(state_44422);
if(cljs.core.keyword_identical_QMARK_(result__43821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43821__auto__;
}
break;
}
}catch (e44433){var ex__43822__auto__ = e44433;
var statearr_44434_47055 = state_44422;
(statearr_44434_47055[(2)] = ex__43822__auto__);


if(cljs.core.seq((state_44422[(4)]))){
var statearr_44435_47056 = state_44422;
(statearr_44435_47056[(1)] = cljs.core.first((state_44422[(4)])));

} else {
throw ex__43822__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47060 = state_44422;
state_44422 = G__47060;
continue;
} else {
return ret_value__43820__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__ = function(state_44422){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____1.call(this,state_44422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__;
})()
;})(__47028,switch__43818__auto__,c__43979__auto___47035,G__44409_47029,G__44409_47030__$1,n__4613__auto___47026,jobs,results,process,async))
})();
var state__43981__auto__ = (function (){var statearr_44440 = f__43980__auto__();
(statearr_44440[(6)] = c__43979__auto___47035);

return statearr_44440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43981__auto__);
});})(__47028,c__43979__auto___47035,G__44409_47029,G__44409_47030__$1,n__4613__auto___47026,jobs,results,process,async))
);


break;
case "async":
var c__43979__auto___47061 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47028,c__43979__auto___47061,G__44409_47029,G__44409_47030__$1,n__4613__auto___47026,jobs,results,process,async){
return (function (){
var f__43980__auto__ = (function (){var switch__43818__auto__ = ((function (__47028,c__43979__auto___47061,G__44409_47029,G__44409_47030__$1,n__4613__auto___47026,jobs,results,process,async){
return (function (state_44454){
var state_val_44455 = (state_44454[(1)]);
if((state_val_44455 === (1))){
var state_44454__$1 = state_44454;
var statearr_44456_47062 = state_44454__$1;
(statearr_44456_47062[(2)] = null);

(statearr_44456_47062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44455 === (2))){
var state_44454__$1 = state_44454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44454__$1,(4),jobs);
} else {
if((state_val_44455 === (3))){
var inst_44452 = (state_44454[(2)]);
var state_44454__$1 = state_44454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44454__$1,inst_44452);
} else {
if((state_val_44455 === (4))){
var inst_44444 = (state_44454[(2)]);
var inst_44445 = async(inst_44444);
var state_44454__$1 = state_44454;
if(cljs.core.truth_(inst_44445)){
var statearr_44457_47064 = state_44454__$1;
(statearr_44457_47064[(1)] = (5));

} else {
var statearr_44458_47066 = state_44454__$1;
(statearr_44458_47066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44455 === (5))){
var state_44454__$1 = state_44454;
var statearr_44463_47070 = state_44454__$1;
(statearr_44463_47070[(2)] = null);

(statearr_44463_47070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44455 === (6))){
var state_44454__$1 = state_44454;
var statearr_44464_47073 = state_44454__$1;
(statearr_44464_47073[(2)] = null);

(statearr_44464_47073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44455 === (7))){
var inst_44450 = (state_44454[(2)]);
var state_44454__$1 = state_44454;
var statearr_44465_47075 = state_44454__$1;
(statearr_44465_47075[(2)] = inst_44450);

(statearr_44465_47075[(1)] = (3));


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
});})(__47028,c__43979__auto___47061,G__44409_47029,G__44409_47030__$1,n__4613__auto___47026,jobs,results,process,async))
;
return ((function (__47028,switch__43818__auto__,c__43979__auto___47061,G__44409_47029,G__44409_47030__$1,n__4613__auto___47026,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____0 = (function (){
var statearr_44472 = [null,null,null,null,null,null,null];
(statearr_44472[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__);

(statearr_44472[(1)] = (1));

return statearr_44472;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____1 = (function (state_44454){
while(true){
var ret_value__43820__auto__ = (function (){try{while(true){
var result__43821__auto__ = switch__43818__auto__(state_44454);
if(cljs.core.keyword_identical_QMARK_(result__43821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43821__auto__;
}
break;
}
}catch (e44473){var ex__43822__auto__ = e44473;
var statearr_44474_47076 = state_44454;
(statearr_44474_47076[(2)] = ex__43822__auto__);


if(cljs.core.seq((state_44454[(4)]))){
var statearr_44481_47077 = state_44454;
(statearr_44481_47077[(1)] = cljs.core.first((state_44454[(4)])));

} else {
throw ex__43822__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47081 = state_44454;
state_44454 = G__47081;
continue;
} else {
return ret_value__43820__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__ = function(state_44454){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____1.call(this,state_44454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__;
})()
;})(__47028,switch__43818__auto__,c__43979__auto___47061,G__44409_47029,G__44409_47030__$1,n__4613__auto___47026,jobs,results,process,async))
})();
var state__43981__auto__ = (function (){var statearr_44482 = f__43980__auto__();
(statearr_44482[(6)] = c__43979__auto___47061);

return statearr_44482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43981__auto__);
});})(__47028,c__43979__auto___47061,G__44409_47029,G__44409_47030__$1,n__4613__auto___47026,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44409_47030__$1)].join('')));

}

var G__47091 = (__47028 + (1));
__47028 = G__47091;
continue;
} else {
}
break;
}

var c__43979__auto___47095 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43980__auto__ = (function (){var switch__43818__auto__ = (function (state_44520){
var state_val_44521 = (state_44520[(1)]);
if((state_val_44521 === (7))){
var inst_44516 = (state_44520[(2)]);
var state_44520__$1 = state_44520;
var statearr_44525_47097 = state_44520__$1;
(statearr_44525_47097[(2)] = inst_44516);

(statearr_44525_47097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44521 === (1))){
var state_44520__$1 = state_44520;
var statearr_44526_47105 = state_44520__$1;
(statearr_44526_47105[(2)] = null);

(statearr_44526_47105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44521 === (4))){
var inst_44489 = (state_44520[(7)]);
var inst_44489__$1 = (state_44520[(2)]);
var inst_44490 = (inst_44489__$1 == null);
var state_44520__$1 = (function (){var statearr_44528 = state_44520;
(statearr_44528[(7)] = inst_44489__$1);

return statearr_44528;
})();
if(cljs.core.truth_(inst_44490)){
var statearr_44530_47111 = state_44520__$1;
(statearr_44530_47111[(1)] = (5));

} else {
var statearr_44532_47113 = state_44520__$1;
(statearr_44532_47113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44521 === (6))){
var inst_44489 = (state_44520[(7)]);
var inst_44494 = (state_44520[(8)]);
var inst_44494__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44507 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44508 = [inst_44489,inst_44494__$1];
var inst_44509 = (new cljs.core.PersistentVector(null,2,(5),inst_44507,inst_44508,null));
var state_44520__$1 = (function (){var statearr_44534 = state_44520;
(statearr_44534[(8)] = inst_44494__$1);

return statearr_44534;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44520__$1,(8),jobs,inst_44509);
} else {
if((state_val_44521 === (3))){
var inst_44518 = (state_44520[(2)]);
var state_44520__$1 = state_44520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44520__$1,inst_44518);
} else {
if((state_val_44521 === (2))){
var state_44520__$1 = state_44520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44520__$1,(4),from);
} else {
if((state_val_44521 === (9))){
var inst_44513 = (state_44520[(2)]);
var state_44520__$1 = (function (){var statearr_44535 = state_44520;
(statearr_44535[(9)] = inst_44513);

return statearr_44535;
})();
var statearr_44540_47123 = state_44520__$1;
(statearr_44540_47123[(2)] = null);

(statearr_44540_47123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44521 === (5))){
var inst_44492 = cljs.core.async.close_BANG_(jobs);
var state_44520__$1 = state_44520;
var statearr_44541_47124 = state_44520__$1;
(statearr_44541_47124[(2)] = inst_44492);

(statearr_44541_47124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44521 === (8))){
var inst_44494 = (state_44520[(8)]);
var inst_44511 = (state_44520[(2)]);
var state_44520__$1 = (function (){var statearr_44545 = state_44520;
(statearr_44545[(10)] = inst_44511);

return statearr_44545;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44520__$1,(9),results,inst_44494);
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
var cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____0 = (function (){
var statearr_44546 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44546[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__);

(statearr_44546[(1)] = (1));

return statearr_44546;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____1 = (function (state_44520){
while(true){
var ret_value__43820__auto__ = (function (){try{while(true){
var result__43821__auto__ = switch__43818__auto__(state_44520);
if(cljs.core.keyword_identical_QMARK_(result__43821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43821__auto__;
}
break;
}
}catch (e44547){var ex__43822__auto__ = e44547;
var statearr_44548_47133 = state_44520;
(statearr_44548_47133[(2)] = ex__43822__auto__);


if(cljs.core.seq((state_44520[(4)]))){
var statearr_44549_47138 = state_44520;
(statearr_44549_47138[(1)] = cljs.core.first((state_44520[(4)])));

} else {
throw ex__43822__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47142 = state_44520;
state_44520 = G__47142;
continue;
} else {
return ret_value__43820__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__ = function(state_44520){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____1.call(this,state_44520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__;
})()
})();
var state__43981__auto__ = (function (){var statearr_44550 = f__43980__auto__();
(statearr_44550[(6)] = c__43979__auto___47095);

return statearr_44550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43981__auto__);
}));


var c__43979__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43980__auto__ = (function (){var switch__43818__auto__ = (function (state_44588){
var state_val_44590 = (state_44588[(1)]);
if((state_val_44590 === (7))){
var inst_44584 = (state_44588[(2)]);
var state_44588__$1 = state_44588;
var statearr_44601_47149 = state_44588__$1;
(statearr_44601_47149[(2)] = inst_44584);

(statearr_44601_47149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44590 === (20))){
var state_44588__$1 = state_44588;
var statearr_44606_47154 = state_44588__$1;
(statearr_44606_47154[(2)] = null);

(statearr_44606_47154[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44590 === (1))){
var state_44588__$1 = state_44588;
var statearr_44607_47158 = state_44588__$1;
(statearr_44607_47158[(2)] = null);

(statearr_44607_47158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44590 === (4))){
var inst_44553 = (state_44588[(7)]);
var inst_44553__$1 = (state_44588[(2)]);
var inst_44554 = (inst_44553__$1 == null);
var state_44588__$1 = (function (){var statearr_44611 = state_44588;
(statearr_44611[(7)] = inst_44553__$1);

return statearr_44611;
})();
if(cljs.core.truth_(inst_44554)){
var statearr_44612_47159 = state_44588__$1;
(statearr_44612_47159[(1)] = (5));

} else {
var statearr_44613_47160 = state_44588__$1;
(statearr_44613_47160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44590 === (15))){
var inst_44566 = (state_44588[(8)]);
var state_44588__$1 = state_44588;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44588__$1,(18),to,inst_44566);
} else {
if((state_val_44590 === (21))){
var inst_44579 = (state_44588[(2)]);
var state_44588__$1 = state_44588;
var statearr_44614_47163 = state_44588__$1;
(statearr_44614_47163[(2)] = inst_44579);

(statearr_44614_47163[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44590 === (13))){
var inst_44581 = (state_44588[(2)]);
var state_44588__$1 = (function (){var statearr_44615 = state_44588;
(statearr_44615[(9)] = inst_44581);

return statearr_44615;
})();
var statearr_44616_47166 = state_44588__$1;
(statearr_44616_47166[(2)] = null);

(statearr_44616_47166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44590 === (6))){
var inst_44553 = (state_44588[(7)]);
var state_44588__$1 = state_44588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44588__$1,(11),inst_44553);
} else {
if((state_val_44590 === (17))){
var inst_44574 = (state_44588[(2)]);
var state_44588__$1 = state_44588;
if(cljs.core.truth_(inst_44574)){
var statearr_44617_47167 = state_44588__$1;
(statearr_44617_47167[(1)] = (19));

} else {
var statearr_44618_47168 = state_44588__$1;
(statearr_44618_47168[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44590 === (3))){
var inst_44586 = (state_44588[(2)]);
var state_44588__$1 = state_44588;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44588__$1,inst_44586);
} else {
if((state_val_44590 === (12))){
var inst_44563 = (state_44588[(10)]);
var state_44588__$1 = state_44588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44588__$1,(14),inst_44563);
} else {
if((state_val_44590 === (2))){
var state_44588__$1 = state_44588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44588__$1,(4),results);
} else {
if((state_val_44590 === (19))){
var state_44588__$1 = state_44588;
var statearr_44619_47170 = state_44588__$1;
(statearr_44619_47170[(2)] = null);

(statearr_44619_47170[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44590 === (11))){
var inst_44563 = (state_44588[(2)]);
var state_44588__$1 = (function (){var statearr_44620 = state_44588;
(statearr_44620[(10)] = inst_44563);

return statearr_44620;
})();
var statearr_44621_47171 = state_44588__$1;
(statearr_44621_47171[(2)] = null);

(statearr_44621_47171[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44590 === (9))){
var state_44588__$1 = state_44588;
var statearr_44624_47172 = state_44588__$1;
(statearr_44624_47172[(2)] = null);

(statearr_44624_47172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44590 === (5))){
var state_44588__$1 = state_44588;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44625_47175 = state_44588__$1;
(statearr_44625_47175[(1)] = (8));

} else {
var statearr_44627_47176 = state_44588__$1;
(statearr_44627_47176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44590 === (14))){
var inst_44566 = (state_44588[(8)]);
var inst_44566__$1 = (state_44588[(2)]);
var inst_44567 = (inst_44566__$1 == null);
var inst_44568 = cljs.core.not(inst_44567);
var state_44588__$1 = (function (){var statearr_44631 = state_44588;
(statearr_44631[(8)] = inst_44566__$1);

return statearr_44631;
})();
if(inst_44568){
var statearr_44632_47178 = state_44588__$1;
(statearr_44632_47178[(1)] = (15));

} else {
var statearr_44633_47179 = state_44588__$1;
(statearr_44633_47179[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44590 === (16))){
var state_44588__$1 = state_44588;
var statearr_44634_47180 = state_44588__$1;
(statearr_44634_47180[(2)] = false);

(statearr_44634_47180[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44590 === (10))){
var inst_44560 = (state_44588[(2)]);
var state_44588__$1 = state_44588;
var statearr_44636_47181 = state_44588__$1;
(statearr_44636_47181[(2)] = inst_44560);

(statearr_44636_47181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44590 === (18))){
var inst_44571 = (state_44588[(2)]);
var state_44588__$1 = state_44588;
var statearr_44640_47182 = state_44588__$1;
(statearr_44640_47182[(2)] = inst_44571);

(statearr_44640_47182[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44590 === (8))){
var inst_44557 = cljs.core.async.close_BANG_(to);
var state_44588__$1 = state_44588;
var statearr_44641_47183 = state_44588__$1;
(statearr_44641_47183[(2)] = inst_44557);

(statearr_44641_47183[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____0 = (function (){
var statearr_44642 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44642[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__);

(statearr_44642[(1)] = (1));

return statearr_44642;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____1 = (function (state_44588){
while(true){
var ret_value__43820__auto__ = (function (){try{while(true){
var result__43821__auto__ = switch__43818__auto__(state_44588);
if(cljs.core.keyword_identical_QMARK_(result__43821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43821__auto__;
}
break;
}
}catch (e44643){var ex__43822__auto__ = e44643;
var statearr_44645_47188 = state_44588;
(statearr_44645_47188[(2)] = ex__43822__auto__);


if(cljs.core.seq((state_44588[(4)]))){
var statearr_44646_47190 = state_44588;
(statearr_44646_47190[(1)] = cljs.core.first((state_44588[(4)])));

} else {
throw ex__43822__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47191 = state_44588;
state_44588 = G__47191;
continue;
} else {
return ret_value__43820__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__ = function(state_44588){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____1.call(this,state_44588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43819__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43819__auto__;
})()
})();
var state__43981__auto__ = (function (){var statearr_44648 = f__43980__auto__();
(statearr_44648[(6)] = c__43979__auto__);

return statearr_44648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43981__auto__);
}));

return c__43979__auto__;
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
var G__44652 = arguments.length;
switch (G__44652) {
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
var G__44658 = arguments.length;
switch (G__44658) {
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
var G__44673 = arguments.length;
switch (G__44673) {
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
var c__43979__auto___47212 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43980__auto__ = (function (){var switch__43818__auto__ = (function (state_44706){
var state_val_44707 = (state_44706[(1)]);
if((state_val_44707 === (7))){
var inst_44702 = (state_44706[(2)]);
var state_44706__$1 = state_44706;
var statearr_44715_47215 = state_44706__$1;
(statearr_44715_47215[(2)] = inst_44702);

(statearr_44715_47215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (1))){
var state_44706__$1 = state_44706;
var statearr_44717_47217 = state_44706__$1;
(statearr_44717_47217[(2)] = null);

(statearr_44717_47217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (4))){
var inst_44683 = (state_44706[(7)]);
var inst_44683__$1 = (state_44706[(2)]);
var inst_44684 = (inst_44683__$1 == null);
var state_44706__$1 = (function (){var statearr_44718 = state_44706;
(statearr_44718[(7)] = inst_44683__$1);

return statearr_44718;
})();
if(cljs.core.truth_(inst_44684)){
var statearr_44719_47221 = state_44706__$1;
(statearr_44719_47221[(1)] = (5));

} else {
var statearr_44720_47230 = state_44706__$1;
(statearr_44720_47230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (13))){
var state_44706__$1 = state_44706;
var statearr_44721_47231 = state_44706__$1;
(statearr_44721_47231[(2)] = null);

(statearr_44721_47231[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (6))){
var inst_44683 = (state_44706[(7)]);
var inst_44689 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44683) : p.call(null,inst_44683));
var state_44706__$1 = state_44706;
if(cljs.core.truth_(inst_44689)){
var statearr_44722_47243 = state_44706__$1;
(statearr_44722_47243[(1)] = (9));

} else {
var statearr_44724_47244 = state_44706__$1;
(statearr_44724_47244[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (3))){
var inst_44704 = (state_44706[(2)]);
var state_44706__$1 = state_44706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44706__$1,inst_44704);
} else {
if((state_val_44707 === (12))){
var state_44706__$1 = state_44706;
var statearr_44726_47245 = state_44706__$1;
(statearr_44726_47245[(2)] = null);

(statearr_44726_47245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (2))){
var state_44706__$1 = state_44706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44706__$1,(4),ch);
} else {
if((state_val_44707 === (11))){
var inst_44683 = (state_44706[(7)]);
var inst_44693 = (state_44706[(2)]);
var state_44706__$1 = state_44706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44706__$1,(8),inst_44693,inst_44683);
} else {
if((state_val_44707 === (9))){
var state_44706__$1 = state_44706;
var statearr_44730_47247 = state_44706__$1;
(statearr_44730_47247[(2)] = tc);

(statearr_44730_47247[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (5))){
var inst_44686 = cljs.core.async.close_BANG_(tc);
var inst_44687 = cljs.core.async.close_BANG_(fc);
var state_44706__$1 = (function (){var statearr_44739 = state_44706;
(statearr_44739[(8)] = inst_44686);

return statearr_44739;
})();
var statearr_44740_47248 = state_44706__$1;
(statearr_44740_47248[(2)] = inst_44687);

(statearr_44740_47248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (14))){
var inst_44700 = (state_44706[(2)]);
var state_44706__$1 = state_44706;
var statearr_44742_47249 = state_44706__$1;
(statearr_44742_47249[(2)] = inst_44700);

(statearr_44742_47249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (10))){
var state_44706__$1 = state_44706;
var statearr_44744_47254 = state_44706__$1;
(statearr_44744_47254[(2)] = fc);

(statearr_44744_47254[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (8))){
var inst_44695 = (state_44706[(2)]);
var state_44706__$1 = state_44706;
if(cljs.core.truth_(inst_44695)){
var statearr_44745_47255 = state_44706__$1;
(statearr_44745_47255[(1)] = (12));

} else {
var statearr_44746_47256 = state_44706__$1;
(statearr_44746_47256[(1)] = (13));

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
var cljs$core$async$state_machine__43819__auto__ = null;
var cljs$core$async$state_machine__43819__auto____0 = (function (){
var statearr_44747 = [null,null,null,null,null,null,null,null,null];
(statearr_44747[(0)] = cljs$core$async$state_machine__43819__auto__);

(statearr_44747[(1)] = (1));

return statearr_44747;
});
var cljs$core$async$state_machine__43819__auto____1 = (function (state_44706){
while(true){
var ret_value__43820__auto__ = (function (){try{while(true){
var result__43821__auto__ = switch__43818__auto__(state_44706);
if(cljs.core.keyword_identical_QMARK_(result__43821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43821__auto__;
}
break;
}
}catch (e44748){var ex__43822__auto__ = e44748;
var statearr_44749_47264 = state_44706;
(statearr_44749_47264[(2)] = ex__43822__auto__);


if(cljs.core.seq((state_44706[(4)]))){
var statearr_44750_47265 = state_44706;
(statearr_44750_47265[(1)] = cljs.core.first((state_44706[(4)])));

} else {
throw ex__43822__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47266 = state_44706;
state_44706 = G__47266;
continue;
} else {
return ret_value__43820__auto__;
}
break;
}
});
cljs$core$async$state_machine__43819__auto__ = function(state_44706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43819__auto____1.call(this,state_44706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43819__auto____0;
cljs$core$async$state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43819__auto____1;
return cljs$core$async$state_machine__43819__auto__;
})()
})();
var state__43981__auto__ = (function (){var statearr_44754 = f__43980__auto__();
(statearr_44754[(6)] = c__43979__auto___47212);

return statearr_44754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43981__auto__);
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
var c__43979__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43980__auto__ = (function (){var switch__43818__auto__ = (function (state_44777){
var state_val_44778 = (state_44777[(1)]);
if((state_val_44778 === (7))){
var inst_44773 = (state_44777[(2)]);
var state_44777__$1 = state_44777;
var statearr_44780_47267 = state_44777__$1;
(statearr_44780_47267[(2)] = inst_44773);

(statearr_44780_47267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44778 === (1))){
var inst_44755 = init;
var inst_44756 = inst_44755;
var state_44777__$1 = (function (){var statearr_44781 = state_44777;
(statearr_44781[(7)] = inst_44756);

return statearr_44781;
})();
var statearr_44786_47269 = state_44777__$1;
(statearr_44786_47269[(2)] = null);

(statearr_44786_47269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44778 === (4))){
var inst_44759 = (state_44777[(8)]);
var inst_44759__$1 = (state_44777[(2)]);
var inst_44760 = (inst_44759__$1 == null);
var state_44777__$1 = (function (){var statearr_44787 = state_44777;
(statearr_44787[(8)] = inst_44759__$1);

return statearr_44787;
})();
if(cljs.core.truth_(inst_44760)){
var statearr_44790_47270 = state_44777__$1;
(statearr_44790_47270[(1)] = (5));

} else {
var statearr_44791_47271 = state_44777__$1;
(statearr_44791_47271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44778 === (6))){
var inst_44763 = (state_44777[(9)]);
var inst_44756 = (state_44777[(7)]);
var inst_44759 = (state_44777[(8)]);
var inst_44763__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44756,inst_44759) : f.call(null,inst_44756,inst_44759));
var inst_44764 = cljs.core.reduced_QMARK_(inst_44763__$1);
var state_44777__$1 = (function (){var statearr_44795 = state_44777;
(statearr_44795[(9)] = inst_44763__$1);

return statearr_44795;
})();
if(inst_44764){
var statearr_44800_47280 = state_44777__$1;
(statearr_44800_47280[(1)] = (8));

} else {
var statearr_44801_47281 = state_44777__$1;
(statearr_44801_47281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44778 === (3))){
var inst_44775 = (state_44777[(2)]);
var state_44777__$1 = state_44777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44777__$1,inst_44775);
} else {
if((state_val_44778 === (2))){
var state_44777__$1 = state_44777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44777__$1,(4),ch);
} else {
if((state_val_44778 === (9))){
var inst_44763 = (state_44777[(9)]);
var inst_44756 = inst_44763;
var state_44777__$1 = (function (){var statearr_44802 = state_44777;
(statearr_44802[(7)] = inst_44756);

return statearr_44802;
})();
var statearr_44803_47287 = state_44777__$1;
(statearr_44803_47287[(2)] = null);

(statearr_44803_47287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44778 === (5))){
var inst_44756 = (state_44777[(7)]);
var state_44777__$1 = state_44777;
var statearr_44804_47288 = state_44777__$1;
(statearr_44804_47288[(2)] = inst_44756);

(statearr_44804_47288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44778 === (10))){
var inst_44771 = (state_44777[(2)]);
var state_44777__$1 = state_44777;
var statearr_44805_47289 = state_44777__$1;
(statearr_44805_47289[(2)] = inst_44771);

(statearr_44805_47289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44778 === (8))){
var inst_44763 = (state_44777[(9)]);
var inst_44766 = cljs.core.deref(inst_44763);
var state_44777__$1 = state_44777;
var statearr_44808_47296 = state_44777__$1;
(statearr_44808_47296[(2)] = inst_44766);

(statearr_44808_47296[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__43819__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43819__auto____0 = (function (){
var statearr_44809 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44809[(0)] = cljs$core$async$reduce_$_state_machine__43819__auto__);

(statearr_44809[(1)] = (1));

return statearr_44809;
});
var cljs$core$async$reduce_$_state_machine__43819__auto____1 = (function (state_44777){
while(true){
var ret_value__43820__auto__ = (function (){try{while(true){
var result__43821__auto__ = switch__43818__auto__(state_44777);
if(cljs.core.keyword_identical_QMARK_(result__43821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43821__auto__;
}
break;
}
}catch (e44810){var ex__43822__auto__ = e44810;
var statearr_44811_47298 = state_44777;
(statearr_44811_47298[(2)] = ex__43822__auto__);


if(cljs.core.seq((state_44777[(4)]))){
var statearr_44812_47299 = state_44777;
(statearr_44812_47299[(1)] = cljs.core.first((state_44777[(4)])));

} else {
throw ex__43822__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47300 = state_44777;
state_44777 = G__47300;
continue;
} else {
return ret_value__43820__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43819__auto__ = function(state_44777){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43819__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43819__auto____1.call(this,state_44777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43819__auto____0;
cljs$core$async$reduce_$_state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43819__auto____1;
return cljs$core$async$reduce_$_state_machine__43819__auto__;
})()
})();
var state__43981__auto__ = (function (){var statearr_44815 = f__43980__auto__();
(statearr_44815[(6)] = c__43979__auto__);

return statearr_44815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43981__auto__);
}));

return c__43979__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__43979__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43980__auto__ = (function (){var switch__43818__auto__ = (function (state_44822){
var state_val_44823 = (state_44822[(1)]);
if((state_val_44823 === (1))){
var inst_44817 = cljs.core.async.reduce(f__$1,init,ch);
var state_44822__$1 = state_44822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44822__$1,(2),inst_44817);
} else {
if((state_val_44823 === (2))){
var inst_44819 = (state_44822[(2)]);
var inst_44820 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44819) : f__$1.call(null,inst_44819));
var state_44822__$1 = state_44822;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44822__$1,inst_44820);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__43819__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43819__auto____0 = (function (){
var statearr_44833 = [null,null,null,null,null,null,null];
(statearr_44833[(0)] = cljs$core$async$transduce_$_state_machine__43819__auto__);

(statearr_44833[(1)] = (1));

return statearr_44833;
});
var cljs$core$async$transduce_$_state_machine__43819__auto____1 = (function (state_44822){
while(true){
var ret_value__43820__auto__ = (function (){try{while(true){
var result__43821__auto__ = switch__43818__auto__(state_44822);
if(cljs.core.keyword_identical_QMARK_(result__43821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43821__auto__;
}
break;
}
}catch (e44835){var ex__43822__auto__ = e44835;
var statearr_44836_47309 = state_44822;
(statearr_44836_47309[(2)] = ex__43822__auto__);


if(cljs.core.seq((state_44822[(4)]))){
var statearr_44838_47310 = state_44822;
(statearr_44838_47310[(1)] = cljs.core.first((state_44822[(4)])));

} else {
throw ex__43822__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47311 = state_44822;
state_44822 = G__47311;
continue;
} else {
return ret_value__43820__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43819__auto__ = function(state_44822){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43819__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43819__auto____1.call(this,state_44822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43819__auto____0;
cljs$core$async$transduce_$_state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43819__auto____1;
return cljs$core$async$transduce_$_state_machine__43819__auto__;
})()
})();
var state__43981__auto__ = (function (){var statearr_44841 = f__43980__auto__();
(statearr_44841[(6)] = c__43979__auto__);

return statearr_44841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43981__auto__);
}));

return c__43979__auto__;
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
var G__44845 = arguments.length;
switch (G__44845) {
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
var c__43979__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43980__auto__ = (function (){var switch__43818__auto__ = (function (state_44876){
var state_val_44877 = (state_44876[(1)]);
if((state_val_44877 === (7))){
var inst_44857 = (state_44876[(2)]);
var state_44876__$1 = state_44876;
var statearr_44880_47315 = state_44876__$1;
(statearr_44880_47315[(2)] = inst_44857);

(statearr_44880_47315[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44877 === (1))){
var inst_44849 = cljs.core.seq(coll);
var inst_44850 = inst_44849;
var state_44876__$1 = (function (){var statearr_44881 = state_44876;
(statearr_44881[(7)] = inst_44850);

return statearr_44881;
})();
var statearr_44882_47317 = state_44876__$1;
(statearr_44882_47317[(2)] = null);

(statearr_44882_47317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44877 === (4))){
var inst_44850 = (state_44876[(7)]);
var inst_44855 = cljs.core.first(inst_44850);
var state_44876__$1 = state_44876;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44876__$1,(7),ch,inst_44855);
} else {
if((state_val_44877 === (13))){
var inst_44870 = (state_44876[(2)]);
var state_44876__$1 = state_44876;
var statearr_44892_47322 = state_44876__$1;
(statearr_44892_47322[(2)] = inst_44870);

(statearr_44892_47322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44877 === (6))){
var inst_44860 = (state_44876[(2)]);
var state_44876__$1 = state_44876;
if(cljs.core.truth_(inst_44860)){
var statearr_44906_47323 = state_44876__$1;
(statearr_44906_47323[(1)] = (8));

} else {
var statearr_44909_47324 = state_44876__$1;
(statearr_44909_47324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44877 === (3))){
var inst_44874 = (state_44876[(2)]);
var state_44876__$1 = state_44876;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44876__$1,inst_44874);
} else {
if((state_val_44877 === (12))){
var state_44876__$1 = state_44876;
var statearr_44915_47325 = state_44876__$1;
(statearr_44915_47325[(2)] = null);

(statearr_44915_47325[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44877 === (2))){
var inst_44850 = (state_44876[(7)]);
var state_44876__$1 = state_44876;
if(cljs.core.truth_(inst_44850)){
var statearr_44916_47326 = state_44876__$1;
(statearr_44916_47326[(1)] = (4));

} else {
var statearr_44917_47327 = state_44876__$1;
(statearr_44917_47327[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44877 === (11))){
var inst_44867 = cljs.core.async.close_BANG_(ch);
var state_44876__$1 = state_44876;
var statearr_44925_47331 = state_44876__$1;
(statearr_44925_47331[(2)] = inst_44867);

(statearr_44925_47331[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44877 === (9))){
var state_44876__$1 = state_44876;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44928_47333 = state_44876__$1;
(statearr_44928_47333[(1)] = (11));

} else {
var statearr_44929_47334 = state_44876__$1;
(statearr_44929_47334[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44877 === (5))){
var inst_44850 = (state_44876[(7)]);
var state_44876__$1 = state_44876;
var statearr_44936_47342 = state_44876__$1;
(statearr_44936_47342[(2)] = inst_44850);

(statearr_44936_47342[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44877 === (10))){
var inst_44872 = (state_44876[(2)]);
var state_44876__$1 = state_44876;
var statearr_44941_47349 = state_44876__$1;
(statearr_44941_47349[(2)] = inst_44872);

(statearr_44941_47349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44877 === (8))){
var inst_44850 = (state_44876[(7)]);
var inst_44862 = cljs.core.next(inst_44850);
var inst_44850__$1 = inst_44862;
var state_44876__$1 = (function (){var statearr_44944 = state_44876;
(statearr_44944[(7)] = inst_44850__$1);

return statearr_44944;
})();
var statearr_44945_47352 = state_44876__$1;
(statearr_44945_47352[(2)] = null);

(statearr_44945_47352[(1)] = (2));


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
var cljs$core$async$state_machine__43819__auto__ = null;
var cljs$core$async$state_machine__43819__auto____0 = (function (){
var statearr_44952 = [null,null,null,null,null,null,null,null];
(statearr_44952[(0)] = cljs$core$async$state_machine__43819__auto__);

(statearr_44952[(1)] = (1));

return statearr_44952;
});
var cljs$core$async$state_machine__43819__auto____1 = (function (state_44876){
while(true){
var ret_value__43820__auto__ = (function (){try{while(true){
var result__43821__auto__ = switch__43818__auto__(state_44876);
if(cljs.core.keyword_identical_QMARK_(result__43821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43821__auto__;
}
break;
}
}catch (e44959){var ex__43822__auto__ = e44959;
var statearr_44961_47355 = state_44876;
(statearr_44961_47355[(2)] = ex__43822__auto__);


if(cljs.core.seq((state_44876[(4)]))){
var statearr_44962_47357 = state_44876;
(statearr_44962_47357[(1)] = cljs.core.first((state_44876[(4)])));

} else {
throw ex__43822__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47358 = state_44876;
state_44876 = G__47358;
continue;
} else {
return ret_value__43820__auto__;
}
break;
}
});
cljs$core$async$state_machine__43819__auto__ = function(state_44876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43819__auto____1.call(this,state_44876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43819__auto____0;
cljs$core$async$state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43819__auto____1;
return cljs$core$async$state_machine__43819__auto__;
})()
})();
var state__43981__auto__ = (function (){var statearr_44967 = f__43980__auto__();
(statearr_44967[(6)] = c__43979__auto__);

return statearr_44967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43981__auto__);
}));

return c__43979__auto__;
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
var G__44975 = arguments.length;
switch (G__44975) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_47363 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_47363(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47368 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_47368(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47377 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_47377(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47378 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_47378(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45074 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45074 = (function (ch,cs,meta45075){
this.ch = ch;
this.cs = cs;
this.meta45075 = meta45075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45076,meta45075__$1){
var self__ = this;
var _45076__$1 = this;
return (new cljs.core.async.t_cljs$core$async45074(self__.ch,self__.cs,meta45075__$1));
}));

(cljs.core.async.t_cljs$core$async45074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45076){
var self__ = this;
var _45076__$1 = this;
return self__.meta45075;
}));

(cljs.core.async.t_cljs$core$async45074.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45074.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45074.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45074.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async45074.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async45074.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async45074.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45075","meta45075",-2072375312,null)], null);
}));

(cljs.core.async.t_cljs$core$async45074.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45074.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45074");

(cljs.core.async.t_cljs$core$async45074.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45074");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45074.
 */
cljs.core.async.__GT_t_cljs$core$async45074 = (function cljs$core$async$mult_$___GT_t_cljs$core$async45074(ch__$1,cs__$1,meta45075){
return (new cljs.core.async.t_cljs$core$async45074(ch__$1,cs__$1,meta45075));
});

}

return (new cljs.core.async.t_cljs$core$async45074(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__43979__auto___47395 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43980__auto__ = (function (){var switch__43818__auto__ = (function (state_45267){
var state_val_45268 = (state_45267[(1)]);
if((state_val_45268 === (7))){
var inst_45263 = (state_45267[(2)]);
var state_45267__$1 = state_45267;
var statearr_45273_47398 = state_45267__$1;
(statearr_45273_47398[(2)] = inst_45263);

(statearr_45273_47398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (20))){
var inst_45137 = (state_45267[(7)]);
var inst_45160 = cljs.core.first(inst_45137);
var inst_45161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45160,(0),null);
var inst_45162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45160,(1),null);
var state_45267__$1 = (function (){var statearr_45274 = state_45267;
(statearr_45274[(8)] = inst_45161);

return statearr_45274;
})();
if(cljs.core.truth_(inst_45162)){
var statearr_45275_47407 = state_45267__$1;
(statearr_45275_47407[(1)] = (22));

} else {
var statearr_45276_47408 = state_45267__$1;
(statearr_45276_47408[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (27))){
var inst_45198 = (state_45267[(9)]);
var inst_45212 = (state_45267[(10)]);
var inst_45196 = (state_45267[(11)]);
var inst_45105 = (state_45267[(12)]);
var inst_45212__$1 = cljs.core._nth(inst_45196,inst_45198);
var inst_45213 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45212__$1,inst_45105,done);
var state_45267__$1 = (function (){var statearr_45281 = state_45267;
(statearr_45281[(10)] = inst_45212__$1);

return statearr_45281;
})();
if(cljs.core.truth_(inst_45213)){
var statearr_45282_47415 = state_45267__$1;
(statearr_45282_47415[(1)] = (30));

} else {
var statearr_45287_47416 = state_45267__$1;
(statearr_45287_47416[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (1))){
var state_45267__$1 = state_45267;
var statearr_45288_47417 = state_45267__$1;
(statearr_45288_47417[(2)] = null);

(statearr_45288_47417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (24))){
var inst_45137 = (state_45267[(7)]);
var inst_45167 = (state_45267[(2)]);
var inst_45172 = cljs.core.next(inst_45137);
var inst_45114 = inst_45172;
var inst_45115 = null;
var inst_45116 = (0);
var inst_45117 = (0);
var state_45267__$1 = (function (){var statearr_45289 = state_45267;
(statearr_45289[(13)] = inst_45115);

(statearr_45289[(14)] = inst_45117);

(statearr_45289[(15)] = inst_45116);

(statearr_45289[(16)] = inst_45167);

(statearr_45289[(17)] = inst_45114);

return statearr_45289;
})();
var statearr_45294_47425 = state_45267__$1;
(statearr_45294_47425[(2)] = null);

(statearr_45294_47425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (39))){
var state_45267__$1 = state_45267;
var statearr_45298_47430 = state_45267__$1;
(statearr_45298_47430[(2)] = null);

(statearr_45298_47430[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (4))){
var inst_45105 = (state_45267[(12)]);
var inst_45105__$1 = (state_45267[(2)]);
var inst_45106 = (inst_45105__$1 == null);
var state_45267__$1 = (function (){var statearr_45299 = state_45267;
(statearr_45299[(12)] = inst_45105__$1);

return statearr_45299;
})();
if(cljs.core.truth_(inst_45106)){
var statearr_45300_47438 = state_45267__$1;
(statearr_45300_47438[(1)] = (5));

} else {
var statearr_45301_47439 = state_45267__$1;
(statearr_45301_47439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (15))){
var inst_45115 = (state_45267[(13)]);
var inst_45117 = (state_45267[(14)]);
var inst_45116 = (state_45267[(15)]);
var inst_45114 = (state_45267[(17)]);
var inst_45133 = (state_45267[(2)]);
var inst_45134 = (inst_45117 + (1));
var tmp45295 = inst_45115;
var tmp45296 = inst_45116;
var tmp45297 = inst_45114;
var inst_45114__$1 = tmp45297;
var inst_45115__$1 = tmp45295;
var inst_45116__$1 = tmp45296;
var inst_45117__$1 = inst_45134;
var state_45267__$1 = (function (){var statearr_45306 = state_45267;
(statearr_45306[(13)] = inst_45115__$1);

(statearr_45306[(14)] = inst_45117__$1);

(statearr_45306[(15)] = inst_45116__$1);

(statearr_45306[(18)] = inst_45133);

(statearr_45306[(17)] = inst_45114__$1);

return statearr_45306;
})();
var statearr_45307_47444 = state_45267__$1;
(statearr_45307_47444[(2)] = null);

(statearr_45307_47444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (21))){
var inst_45175 = (state_45267[(2)]);
var state_45267__$1 = state_45267;
var statearr_45314_47447 = state_45267__$1;
(statearr_45314_47447[(2)] = inst_45175);

(statearr_45314_47447[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (31))){
var inst_45212 = (state_45267[(10)]);
var inst_45216 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45212);
var state_45267__$1 = state_45267;
var statearr_45321_47450 = state_45267__$1;
(statearr_45321_47450[(2)] = inst_45216);

(statearr_45321_47450[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (32))){
var inst_45198 = (state_45267[(9)]);
var inst_45196 = (state_45267[(11)]);
var inst_45195 = (state_45267[(19)]);
var inst_45197 = (state_45267[(20)]);
var inst_45218 = (state_45267[(2)]);
var inst_45219 = (inst_45198 + (1));
var tmp45309 = inst_45196;
var tmp45310 = inst_45195;
var tmp45311 = inst_45197;
var inst_45195__$1 = tmp45310;
var inst_45196__$1 = tmp45309;
var inst_45197__$1 = tmp45311;
var inst_45198__$1 = inst_45219;
var state_45267__$1 = (function (){var statearr_45322 = state_45267;
(statearr_45322[(9)] = inst_45198__$1);

(statearr_45322[(11)] = inst_45196__$1);

(statearr_45322[(21)] = inst_45218);

(statearr_45322[(19)] = inst_45195__$1);

(statearr_45322[(20)] = inst_45197__$1);

return statearr_45322;
})();
var statearr_45323_47455 = state_45267__$1;
(statearr_45323_47455[(2)] = null);

(statearr_45323_47455[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (40))){
var inst_45236 = (state_45267[(22)]);
var inst_45240 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45236);
var state_45267__$1 = state_45267;
var statearr_45324_47456 = state_45267__$1;
(statearr_45324_47456[(2)] = inst_45240);

(statearr_45324_47456[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (33))){
var inst_45222 = (state_45267[(23)]);
var inst_45224 = cljs.core.chunked_seq_QMARK_(inst_45222);
var state_45267__$1 = state_45267;
if(inst_45224){
var statearr_45325_47460 = state_45267__$1;
(statearr_45325_47460[(1)] = (36));

} else {
var statearr_45326_47461 = state_45267__$1;
(statearr_45326_47461[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (13))){
var inst_45127 = (state_45267[(24)]);
var inst_45130 = cljs.core.async.close_BANG_(inst_45127);
var state_45267__$1 = state_45267;
var statearr_45332_47463 = state_45267__$1;
(statearr_45332_47463[(2)] = inst_45130);

(statearr_45332_47463[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (22))){
var inst_45161 = (state_45267[(8)]);
var inst_45164 = cljs.core.async.close_BANG_(inst_45161);
var state_45267__$1 = state_45267;
var statearr_45335_47464 = state_45267__$1;
(statearr_45335_47464[(2)] = inst_45164);

(statearr_45335_47464[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (36))){
var inst_45222 = (state_45267[(23)]);
var inst_45228 = cljs.core.chunk_first(inst_45222);
var inst_45230 = cljs.core.chunk_rest(inst_45222);
var inst_45231 = cljs.core.count(inst_45228);
var inst_45195 = inst_45230;
var inst_45196 = inst_45228;
var inst_45197 = inst_45231;
var inst_45198 = (0);
var state_45267__$1 = (function (){var statearr_45337 = state_45267;
(statearr_45337[(9)] = inst_45198);

(statearr_45337[(11)] = inst_45196);

(statearr_45337[(19)] = inst_45195);

(statearr_45337[(20)] = inst_45197);

return statearr_45337;
})();
var statearr_45339_47466 = state_45267__$1;
(statearr_45339_47466[(2)] = null);

(statearr_45339_47466[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (41))){
var inst_45222 = (state_45267[(23)]);
var inst_45242 = (state_45267[(2)]);
var inst_45243 = cljs.core.next(inst_45222);
var inst_45195 = inst_45243;
var inst_45196 = null;
var inst_45197 = (0);
var inst_45198 = (0);
var state_45267__$1 = (function (){var statearr_45344 = state_45267;
(statearr_45344[(9)] = inst_45198);

(statearr_45344[(25)] = inst_45242);

(statearr_45344[(11)] = inst_45196);

(statearr_45344[(19)] = inst_45195);

(statearr_45344[(20)] = inst_45197);

return statearr_45344;
})();
var statearr_45345_47471 = state_45267__$1;
(statearr_45345_47471[(2)] = null);

(statearr_45345_47471[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (43))){
var state_45267__$1 = state_45267;
var statearr_45346_47472 = state_45267__$1;
(statearr_45346_47472[(2)] = null);

(statearr_45346_47472[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (29))){
var inst_45251 = (state_45267[(2)]);
var state_45267__$1 = state_45267;
var statearr_45347_47475 = state_45267__$1;
(statearr_45347_47475[(2)] = inst_45251);

(statearr_45347_47475[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (44))){
var inst_45260 = (state_45267[(2)]);
var state_45267__$1 = (function (){var statearr_45348 = state_45267;
(statearr_45348[(26)] = inst_45260);

return statearr_45348;
})();
var statearr_45349_47482 = state_45267__$1;
(statearr_45349_47482[(2)] = null);

(statearr_45349_47482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (6))){
var inst_45186 = (state_45267[(27)]);
var inst_45185 = cljs.core.deref(cs);
var inst_45186__$1 = cljs.core.keys(inst_45185);
var inst_45187 = cljs.core.count(inst_45186__$1);
var inst_45188 = cljs.core.reset_BANG_(dctr,inst_45187);
var inst_45193 = cljs.core.seq(inst_45186__$1);
var inst_45195 = inst_45193;
var inst_45196 = null;
var inst_45197 = (0);
var inst_45198 = (0);
var state_45267__$1 = (function (){var statearr_45350 = state_45267;
(statearr_45350[(9)] = inst_45198);

(statearr_45350[(28)] = inst_45188);

(statearr_45350[(11)] = inst_45196);

(statearr_45350[(19)] = inst_45195);

(statearr_45350[(27)] = inst_45186__$1);

(statearr_45350[(20)] = inst_45197);

return statearr_45350;
})();
var statearr_45352_47485 = state_45267__$1;
(statearr_45352_47485[(2)] = null);

(statearr_45352_47485[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (28))){
var inst_45222 = (state_45267[(23)]);
var inst_45195 = (state_45267[(19)]);
var inst_45222__$1 = cljs.core.seq(inst_45195);
var state_45267__$1 = (function (){var statearr_45357 = state_45267;
(statearr_45357[(23)] = inst_45222__$1);

return statearr_45357;
})();
if(inst_45222__$1){
var statearr_45359_47490 = state_45267__$1;
(statearr_45359_47490[(1)] = (33));

} else {
var statearr_45360_47491 = state_45267__$1;
(statearr_45360_47491[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (25))){
var inst_45198 = (state_45267[(9)]);
var inst_45197 = (state_45267[(20)]);
var inst_45205 = (inst_45198 < inst_45197);
var inst_45206 = inst_45205;
var state_45267__$1 = state_45267;
if(cljs.core.truth_(inst_45206)){
var statearr_45363_47498 = state_45267__$1;
(statearr_45363_47498[(1)] = (27));

} else {
var statearr_45364_47499 = state_45267__$1;
(statearr_45364_47499[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (34))){
var state_45267__$1 = state_45267;
var statearr_45365_47500 = state_45267__$1;
(statearr_45365_47500[(2)] = null);

(statearr_45365_47500[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (17))){
var state_45267__$1 = state_45267;
var statearr_45366_47503 = state_45267__$1;
(statearr_45366_47503[(2)] = null);

(statearr_45366_47503[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (3))){
var inst_45265 = (state_45267[(2)]);
var state_45267__$1 = state_45267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45267__$1,inst_45265);
} else {
if((state_val_45268 === (12))){
var inst_45181 = (state_45267[(2)]);
var state_45267__$1 = state_45267;
var statearr_45367_47508 = state_45267__$1;
(statearr_45367_47508[(2)] = inst_45181);

(statearr_45367_47508[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (2))){
var state_45267__$1 = state_45267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45267__$1,(4),ch);
} else {
if((state_val_45268 === (23))){
var state_45267__$1 = state_45267;
var statearr_45368_47516 = state_45267__$1;
(statearr_45368_47516[(2)] = null);

(statearr_45368_47516[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (35))){
var inst_45249 = (state_45267[(2)]);
var state_45267__$1 = state_45267;
var statearr_45373_47517 = state_45267__$1;
(statearr_45373_47517[(2)] = inst_45249);

(statearr_45373_47517[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (19))){
var inst_45137 = (state_45267[(7)]);
var inst_45147 = cljs.core.chunk_first(inst_45137);
var inst_45148 = cljs.core.chunk_rest(inst_45137);
var inst_45149 = cljs.core.count(inst_45147);
var inst_45114 = inst_45148;
var inst_45115 = inst_45147;
var inst_45116 = inst_45149;
var inst_45117 = (0);
var state_45267__$1 = (function (){var statearr_45375 = state_45267;
(statearr_45375[(13)] = inst_45115);

(statearr_45375[(14)] = inst_45117);

(statearr_45375[(15)] = inst_45116);

(statearr_45375[(17)] = inst_45114);

return statearr_45375;
})();
var statearr_45376_47522 = state_45267__$1;
(statearr_45376_47522[(2)] = null);

(statearr_45376_47522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (11))){
var inst_45137 = (state_45267[(7)]);
var inst_45114 = (state_45267[(17)]);
var inst_45137__$1 = cljs.core.seq(inst_45114);
var state_45267__$1 = (function (){var statearr_45378 = state_45267;
(statearr_45378[(7)] = inst_45137__$1);

return statearr_45378;
})();
if(inst_45137__$1){
var statearr_45380_47526 = state_45267__$1;
(statearr_45380_47526[(1)] = (16));

} else {
var statearr_45381_47527 = state_45267__$1;
(statearr_45381_47527[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (9))){
var inst_45183 = (state_45267[(2)]);
var state_45267__$1 = state_45267;
var statearr_45386_47529 = state_45267__$1;
(statearr_45386_47529[(2)] = inst_45183);

(statearr_45386_47529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (5))){
var inst_45112 = cljs.core.deref(cs);
var inst_45113 = cljs.core.seq(inst_45112);
var inst_45114 = inst_45113;
var inst_45115 = null;
var inst_45116 = (0);
var inst_45117 = (0);
var state_45267__$1 = (function (){var statearr_45387 = state_45267;
(statearr_45387[(13)] = inst_45115);

(statearr_45387[(14)] = inst_45117);

(statearr_45387[(15)] = inst_45116);

(statearr_45387[(17)] = inst_45114);

return statearr_45387;
})();
var statearr_45391_47533 = state_45267__$1;
(statearr_45391_47533[(2)] = null);

(statearr_45391_47533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (14))){
var state_45267__$1 = state_45267;
var statearr_45393_47534 = state_45267__$1;
(statearr_45393_47534[(2)] = null);

(statearr_45393_47534[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (45))){
var inst_45257 = (state_45267[(2)]);
var state_45267__$1 = state_45267;
var statearr_45394_47536 = state_45267__$1;
(statearr_45394_47536[(2)] = inst_45257);

(statearr_45394_47536[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (26))){
var inst_45186 = (state_45267[(27)]);
var inst_45253 = (state_45267[(2)]);
var inst_45254 = cljs.core.seq(inst_45186);
var state_45267__$1 = (function (){var statearr_45396 = state_45267;
(statearr_45396[(29)] = inst_45253);

return statearr_45396;
})();
if(inst_45254){
var statearr_45398_47538 = state_45267__$1;
(statearr_45398_47538[(1)] = (42));

} else {
var statearr_45399_47539 = state_45267__$1;
(statearr_45399_47539[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (16))){
var inst_45137 = (state_45267[(7)]);
var inst_45139 = cljs.core.chunked_seq_QMARK_(inst_45137);
var state_45267__$1 = state_45267;
if(inst_45139){
var statearr_45405_47547 = state_45267__$1;
(statearr_45405_47547[(1)] = (19));

} else {
var statearr_45407_47548 = state_45267__$1;
(statearr_45407_47548[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (38))){
var inst_45246 = (state_45267[(2)]);
var state_45267__$1 = state_45267;
var statearr_45408_47550 = state_45267__$1;
(statearr_45408_47550[(2)] = inst_45246);

(statearr_45408_47550[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (30))){
var state_45267__$1 = state_45267;
var statearr_45409_47551 = state_45267__$1;
(statearr_45409_47551[(2)] = null);

(statearr_45409_47551[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (10))){
var inst_45115 = (state_45267[(13)]);
var inst_45117 = (state_45267[(14)]);
var inst_45126 = cljs.core._nth(inst_45115,inst_45117);
var inst_45127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45126,(0),null);
var inst_45128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45126,(1),null);
var state_45267__$1 = (function (){var statearr_45410 = state_45267;
(statearr_45410[(24)] = inst_45127);

return statearr_45410;
})();
if(cljs.core.truth_(inst_45128)){
var statearr_45411_47555 = state_45267__$1;
(statearr_45411_47555[(1)] = (13));

} else {
var statearr_45413_47558 = state_45267__$1;
(statearr_45413_47558[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (18))){
var inst_45179 = (state_45267[(2)]);
var state_45267__$1 = state_45267;
var statearr_45416_47559 = state_45267__$1;
(statearr_45416_47559[(2)] = inst_45179);

(statearr_45416_47559[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (42))){
var state_45267__$1 = state_45267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45267__$1,(45),dchan);
} else {
if((state_val_45268 === (37))){
var inst_45236 = (state_45267[(22)]);
var inst_45222 = (state_45267[(23)]);
var inst_45105 = (state_45267[(12)]);
var inst_45236__$1 = cljs.core.first(inst_45222);
var inst_45237 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45236__$1,inst_45105,done);
var state_45267__$1 = (function (){var statearr_45419 = state_45267;
(statearr_45419[(22)] = inst_45236__$1);

return statearr_45419;
})();
if(cljs.core.truth_(inst_45237)){
var statearr_45420_47562 = state_45267__$1;
(statearr_45420_47562[(1)] = (39));

} else {
var statearr_45421_47563 = state_45267__$1;
(statearr_45421_47563[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45268 === (8))){
var inst_45117 = (state_45267[(14)]);
var inst_45116 = (state_45267[(15)]);
var inst_45120 = (inst_45117 < inst_45116);
var inst_45121 = inst_45120;
var state_45267__$1 = state_45267;
if(cljs.core.truth_(inst_45121)){
var statearr_45423_47564 = state_45267__$1;
(statearr_45423_47564[(1)] = (10));

} else {
var statearr_45424_47565 = state_45267__$1;
(statearr_45424_47565[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__43819__auto__ = null;
var cljs$core$async$mult_$_state_machine__43819__auto____0 = (function (){
var statearr_45427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45427[(0)] = cljs$core$async$mult_$_state_machine__43819__auto__);

(statearr_45427[(1)] = (1));

return statearr_45427;
});
var cljs$core$async$mult_$_state_machine__43819__auto____1 = (function (state_45267){
while(true){
var ret_value__43820__auto__ = (function (){try{while(true){
var result__43821__auto__ = switch__43818__auto__(state_45267);
if(cljs.core.keyword_identical_QMARK_(result__43821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43821__auto__;
}
break;
}
}catch (e45429){var ex__43822__auto__ = e45429;
var statearr_45430_47572 = state_45267;
(statearr_45430_47572[(2)] = ex__43822__auto__);


if(cljs.core.seq((state_45267[(4)]))){
var statearr_45433_47573 = state_45267;
(statearr_45433_47573[(1)] = cljs.core.first((state_45267[(4)])));

} else {
throw ex__43822__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47579 = state_45267;
state_45267 = G__47579;
continue;
} else {
return ret_value__43820__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43819__auto__ = function(state_45267){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43819__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43819__auto____1.call(this,state_45267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43819__auto____0;
cljs$core$async$mult_$_state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43819__auto____1;
return cljs$core$async$mult_$_state_machine__43819__auto__;
})()
})();
var state__43981__auto__ = (function (){var statearr_45434 = f__43980__auto__();
(statearr_45434[(6)] = c__43979__auto___47395);

return statearr_45434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43981__auto__);
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
var G__45436 = arguments.length;
switch (G__45436) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_47586 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_47586(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_47593 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_47593(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_47599 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_47599(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_47601 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_47601(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_47605 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_47605(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47610 = arguments.length;
var i__4737__auto___47611 = (0);
while(true){
if((i__4737__auto___47611 < len__4736__auto___47610)){
args__4742__auto__.push((arguments[i__4737__auto___47611]));

var G__47612 = (i__4737__auto___47611 + (1));
i__4737__auto___47611 = G__47612;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45485){
var map__45486 = p__45485;
var map__45486__$1 = (((((!((map__45486 == null))))?(((((map__45486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45486):map__45486);
var opts = map__45486__$1;
var statearr_45489_47616 = state;
(statearr_45489_47616[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45491_47617 = state;
(statearr_45491_47617[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_45492_47623 = state;
(statearr_45492_47623[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45480){
var G__45481 = cljs.core.first(seq45480);
var seq45480__$1 = cljs.core.next(seq45480);
var G__45482 = cljs.core.first(seq45480__$1);
var seq45480__$2 = cljs.core.next(seq45480__$1);
var G__45483 = cljs.core.first(seq45480__$2);
var seq45480__$3 = cljs.core.next(seq45480__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45481,G__45482,G__45483,seq45480__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45498 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45498 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45499){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45499 = meta45499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45500,meta45499__$1){
var self__ = this;
var _45500__$1 = this;
return (new cljs.core.async.t_cljs$core$async45498(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45499__$1));
}));

(cljs.core.async.t_cljs$core$async45498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45500){
var self__ = this;
var _45500__$1 = this;
return self__.meta45499;
}));

(cljs.core.async.t_cljs$core$async45498.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45498.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45498.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45498.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45498.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45498.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45498.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45498.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45498.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45499","meta45499",165432032,null)], null);
}));

(cljs.core.async.t_cljs$core$async45498.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45498.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45498");

(cljs.core.async.t_cljs$core$async45498.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45498");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45498.
 */
cljs.core.async.__GT_t_cljs$core$async45498 = (function cljs$core$async$mix_$___GT_t_cljs$core$async45498(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45499){
return (new cljs.core.async.t_cljs$core$async45498(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45499));
});

}

return (new cljs.core.async.t_cljs$core$async45498(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43979__auto___47701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43980__auto__ = (function (){var switch__43818__auto__ = (function (state_45631){
var state_val_45632 = (state_45631[(1)]);
if((state_val_45632 === (7))){
var inst_45536 = (state_45631[(2)]);
var state_45631__$1 = state_45631;
var statearr_45636_47707 = state_45631__$1;
(statearr_45636_47707[(2)] = inst_45536);

(statearr_45636_47707[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (20))){
var inst_45548 = (state_45631[(7)]);
var state_45631__$1 = state_45631;
var statearr_45637_47708 = state_45631__$1;
(statearr_45637_47708[(2)] = inst_45548);

(statearr_45637_47708[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (27))){
var state_45631__$1 = state_45631;
var statearr_45639_47720 = state_45631__$1;
(statearr_45639_47720[(2)] = null);

(statearr_45639_47720[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (1))){
var inst_45523 = (state_45631[(8)]);
var inst_45523__$1 = calc_state();
var inst_45525 = (inst_45523__$1 == null);
var inst_45526 = cljs.core.not(inst_45525);
var state_45631__$1 = (function (){var statearr_45643 = state_45631;
(statearr_45643[(8)] = inst_45523__$1);

return statearr_45643;
})();
if(inst_45526){
var statearr_45644_47729 = state_45631__$1;
(statearr_45644_47729[(1)] = (2));

} else {
var statearr_45645_47732 = state_45631__$1;
(statearr_45645_47732[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (24))){
var inst_45572 = (state_45631[(9)]);
var inst_45599 = (state_45631[(10)]);
var inst_45581 = (state_45631[(11)]);
var inst_45599__$1 = (inst_45572.cljs$core$IFn$_invoke$arity$1 ? inst_45572.cljs$core$IFn$_invoke$arity$1(inst_45581) : inst_45572.call(null,inst_45581));
var state_45631__$1 = (function (){var statearr_45646 = state_45631;
(statearr_45646[(10)] = inst_45599__$1);

return statearr_45646;
})();
if(cljs.core.truth_(inst_45599__$1)){
var statearr_45648_47741 = state_45631__$1;
(statearr_45648_47741[(1)] = (29));

} else {
var statearr_45649_47742 = state_45631__$1;
(statearr_45649_47742[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (4))){
var inst_45539 = (state_45631[(2)]);
var state_45631__$1 = state_45631;
if(cljs.core.truth_(inst_45539)){
var statearr_45650_47747 = state_45631__$1;
(statearr_45650_47747[(1)] = (8));

} else {
var statearr_45651_47749 = state_45631__$1;
(statearr_45651_47749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (15))){
var inst_45566 = (state_45631[(2)]);
var state_45631__$1 = state_45631;
if(cljs.core.truth_(inst_45566)){
var statearr_45656_47750 = state_45631__$1;
(statearr_45656_47750[(1)] = (19));

} else {
var statearr_45657_47751 = state_45631__$1;
(statearr_45657_47751[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (21))){
var inst_45571 = (state_45631[(12)]);
var inst_45571__$1 = (state_45631[(2)]);
var inst_45572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45571__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45571__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45571__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45631__$1 = (function (){var statearr_45664 = state_45631;
(statearr_45664[(12)] = inst_45571__$1);

(statearr_45664[(13)] = inst_45573);

(statearr_45664[(9)] = inst_45572);

return statearr_45664;
})();
return cljs.core.async.ioc_alts_BANG_(state_45631__$1,(22),inst_45574);
} else {
if((state_val_45632 === (31))){
var inst_45608 = (state_45631[(2)]);
var state_45631__$1 = state_45631;
if(cljs.core.truth_(inst_45608)){
var statearr_45673_47763 = state_45631__$1;
(statearr_45673_47763[(1)] = (32));

} else {
var statearr_45674_47764 = state_45631__$1;
(statearr_45674_47764[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (32))){
var inst_45580 = (state_45631[(14)]);
var state_45631__$1 = state_45631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45631__$1,(35),out,inst_45580);
} else {
if((state_val_45632 === (33))){
var inst_45571 = (state_45631[(12)]);
var inst_45548 = inst_45571;
var state_45631__$1 = (function (){var statearr_45679 = state_45631;
(statearr_45679[(7)] = inst_45548);

return statearr_45679;
})();
var statearr_45681_47782 = state_45631__$1;
(statearr_45681_47782[(2)] = null);

(statearr_45681_47782[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (13))){
var inst_45548 = (state_45631[(7)]);
var inst_45555 = inst_45548.cljs$lang$protocol_mask$partition0$;
var inst_45556 = (inst_45555 & (64));
var inst_45557 = inst_45548.cljs$core$ISeq$;
var inst_45558 = (cljs.core.PROTOCOL_SENTINEL === inst_45557);
var inst_45559 = ((inst_45556) || (inst_45558));
var state_45631__$1 = state_45631;
if(cljs.core.truth_(inst_45559)){
var statearr_45684_47790 = state_45631__$1;
(statearr_45684_47790[(1)] = (16));

} else {
var statearr_45685_47791 = state_45631__$1;
(statearr_45685_47791[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (22))){
var inst_45580 = (state_45631[(14)]);
var inst_45581 = (state_45631[(11)]);
var inst_45579 = (state_45631[(2)]);
var inst_45580__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45579,(0),null);
var inst_45581__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45579,(1),null);
var inst_45582 = (inst_45580__$1 == null);
var inst_45583 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45581__$1,change);
var inst_45584 = ((inst_45582) || (inst_45583));
var state_45631__$1 = (function (){var statearr_45686 = state_45631;
(statearr_45686[(14)] = inst_45580__$1);

(statearr_45686[(11)] = inst_45581__$1);

return statearr_45686;
})();
if(cljs.core.truth_(inst_45584)){
var statearr_45688_47803 = state_45631__$1;
(statearr_45688_47803[(1)] = (23));

} else {
var statearr_45689_47804 = state_45631__$1;
(statearr_45689_47804[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (36))){
var inst_45571 = (state_45631[(12)]);
var inst_45548 = inst_45571;
var state_45631__$1 = (function (){var statearr_45691 = state_45631;
(statearr_45691[(7)] = inst_45548);

return statearr_45691;
})();
var statearr_45692_47805 = state_45631__$1;
(statearr_45692_47805[(2)] = null);

(statearr_45692_47805[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (29))){
var inst_45599 = (state_45631[(10)]);
var state_45631__$1 = state_45631;
var statearr_45694_47810 = state_45631__$1;
(statearr_45694_47810[(2)] = inst_45599);

(statearr_45694_47810[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (6))){
var state_45631__$1 = state_45631;
var statearr_45696_47812 = state_45631__$1;
(statearr_45696_47812[(2)] = false);

(statearr_45696_47812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (28))){
var inst_45592 = (state_45631[(2)]);
var inst_45596 = calc_state();
var inst_45548 = inst_45596;
var state_45631__$1 = (function (){var statearr_45697 = state_45631;
(statearr_45697[(7)] = inst_45548);

(statearr_45697[(15)] = inst_45592);

return statearr_45697;
})();
var statearr_45698_47815 = state_45631__$1;
(statearr_45698_47815[(2)] = null);

(statearr_45698_47815[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (25))){
var inst_45625 = (state_45631[(2)]);
var state_45631__$1 = state_45631;
var statearr_45701_47818 = state_45631__$1;
(statearr_45701_47818[(2)] = inst_45625);

(statearr_45701_47818[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (34))){
var inst_45623 = (state_45631[(2)]);
var state_45631__$1 = state_45631;
var statearr_45704_47820 = state_45631__$1;
(statearr_45704_47820[(2)] = inst_45623);

(statearr_45704_47820[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (17))){
var state_45631__$1 = state_45631;
var statearr_45706_47822 = state_45631__$1;
(statearr_45706_47822[(2)] = false);

(statearr_45706_47822[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (3))){
var state_45631__$1 = state_45631;
var statearr_45708_47823 = state_45631__$1;
(statearr_45708_47823[(2)] = false);

(statearr_45708_47823[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (12))){
var inst_45627 = (state_45631[(2)]);
var state_45631__$1 = state_45631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45631__$1,inst_45627);
} else {
if((state_val_45632 === (2))){
var inst_45523 = (state_45631[(8)]);
var inst_45528 = inst_45523.cljs$lang$protocol_mask$partition0$;
var inst_45529 = (inst_45528 & (64));
var inst_45530 = inst_45523.cljs$core$ISeq$;
var inst_45531 = (cljs.core.PROTOCOL_SENTINEL === inst_45530);
var inst_45532 = ((inst_45529) || (inst_45531));
var state_45631__$1 = state_45631;
if(cljs.core.truth_(inst_45532)){
var statearr_45715_47839 = state_45631__$1;
(statearr_45715_47839[(1)] = (5));

} else {
var statearr_45717_47848 = state_45631__$1;
(statearr_45717_47848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (23))){
var inst_45580 = (state_45631[(14)]);
var inst_45587 = (inst_45580 == null);
var state_45631__$1 = state_45631;
if(cljs.core.truth_(inst_45587)){
var statearr_45718_47853 = state_45631__$1;
(statearr_45718_47853[(1)] = (26));

} else {
var statearr_45719_47855 = state_45631__$1;
(statearr_45719_47855[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (35))){
var inst_45612 = (state_45631[(2)]);
var state_45631__$1 = state_45631;
if(cljs.core.truth_(inst_45612)){
var statearr_45723_47862 = state_45631__$1;
(statearr_45723_47862[(1)] = (36));

} else {
var statearr_45724_47863 = state_45631__$1;
(statearr_45724_47863[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (19))){
var inst_45548 = (state_45631[(7)]);
var inst_45568 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45548);
var state_45631__$1 = state_45631;
var statearr_45726_47868 = state_45631__$1;
(statearr_45726_47868[(2)] = inst_45568);

(statearr_45726_47868[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (11))){
var inst_45548 = (state_45631[(7)]);
var inst_45552 = (inst_45548 == null);
var inst_45553 = cljs.core.not(inst_45552);
var state_45631__$1 = state_45631;
if(inst_45553){
var statearr_45731_47880 = state_45631__$1;
(statearr_45731_47880[(1)] = (13));

} else {
var statearr_45735_47886 = state_45631__$1;
(statearr_45735_47886[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (9))){
var inst_45523 = (state_45631[(8)]);
var state_45631__$1 = state_45631;
var statearr_45737_47890 = state_45631__$1;
(statearr_45737_47890[(2)] = inst_45523);

(statearr_45737_47890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (5))){
var state_45631__$1 = state_45631;
var statearr_45740_47898 = state_45631__$1;
(statearr_45740_47898[(2)] = true);

(statearr_45740_47898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (14))){
var state_45631__$1 = state_45631;
var statearr_45741_47908 = state_45631__$1;
(statearr_45741_47908[(2)] = false);

(statearr_45741_47908[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (26))){
var inst_45581 = (state_45631[(11)]);
var inst_45589 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45581);
var state_45631__$1 = state_45631;
var statearr_45746_47910 = state_45631__$1;
(statearr_45746_47910[(2)] = inst_45589);

(statearr_45746_47910[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (16))){
var state_45631__$1 = state_45631;
var statearr_45749_47916 = state_45631__$1;
(statearr_45749_47916[(2)] = true);

(statearr_45749_47916[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (38))){
var inst_45617 = (state_45631[(2)]);
var state_45631__$1 = state_45631;
var statearr_45752_47919 = state_45631__$1;
(statearr_45752_47919[(2)] = inst_45617);

(statearr_45752_47919[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (30))){
var inst_45573 = (state_45631[(13)]);
var inst_45572 = (state_45631[(9)]);
var inst_45581 = (state_45631[(11)]);
var inst_45603 = cljs.core.empty_QMARK_(inst_45572);
var inst_45604 = (inst_45573.cljs$core$IFn$_invoke$arity$1 ? inst_45573.cljs$core$IFn$_invoke$arity$1(inst_45581) : inst_45573.call(null,inst_45581));
var inst_45605 = cljs.core.not(inst_45604);
var inst_45606 = ((inst_45603) && (inst_45605));
var state_45631__$1 = state_45631;
var statearr_45753_47925 = state_45631__$1;
(statearr_45753_47925[(2)] = inst_45606);

(statearr_45753_47925[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (10))){
var inst_45523 = (state_45631[(8)]);
var inst_45544 = (state_45631[(2)]);
var inst_45545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45544,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45544,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45544,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45548 = inst_45523;
var state_45631__$1 = (function (){var statearr_45756 = state_45631;
(statearr_45756[(16)] = inst_45546);

(statearr_45756[(17)] = inst_45545);

(statearr_45756[(18)] = inst_45547);

(statearr_45756[(7)] = inst_45548);

return statearr_45756;
})();
var statearr_45759_47929 = state_45631__$1;
(statearr_45759_47929[(2)] = null);

(statearr_45759_47929[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (18))){
var inst_45563 = (state_45631[(2)]);
var state_45631__$1 = state_45631;
var statearr_45764_47935 = state_45631__$1;
(statearr_45764_47935[(2)] = inst_45563);

(statearr_45764_47935[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (37))){
var state_45631__$1 = state_45631;
var statearr_45765_47944 = state_45631__$1;
(statearr_45765_47944[(2)] = null);

(statearr_45765_47944[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45632 === (8))){
var inst_45523 = (state_45631[(8)]);
var inst_45541 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45523);
var state_45631__$1 = state_45631;
var statearr_45766_47947 = state_45631__$1;
(statearr_45766_47947[(2)] = inst_45541);

(statearr_45766_47947[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__43819__auto__ = null;
var cljs$core$async$mix_$_state_machine__43819__auto____0 = (function (){
var statearr_45769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45769[(0)] = cljs$core$async$mix_$_state_machine__43819__auto__);

(statearr_45769[(1)] = (1));

return statearr_45769;
});
var cljs$core$async$mix_$_state_machine__43819__auto____1 = (function (state_45631){
while(true){
var ret_value__43820__auto__ = (function (){try{while(true){
var result__43821__auto__ = switch__43818__auto__(state_45631);
if(cljs.core.keyword_identical_QMARK_(result__43821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43821__auto__;
}
break;
}
}catch (e45771){var ex__43822__auto__ = e45771;
var statearr_45776_47965 = state_45631;
(statearr_45776_47965[(2)] = ex__43822__auto__);


if(cljs.core.seq((state_45631[(4)]))){
var statearr_45777_47968 = state_45631;
(statearr_45777_47968[(1)] = cljs.core.first((state_45631[(4)])));

} else {
throw ex__43822__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47971 = state_45631;
state_45631 = G__47971;
continue;
} else {
return ret_value__43820__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43819__auto__ = function(state_45631){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43819__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43819__auto____1.call(this,state_45631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43819__auto____0;
cljs$core$async$mix_$_state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43819__auto____1;
return cljs$core$async$mix_$_state_machine__43819__auto__;
})()
})();
var state__43981__auto__ = (function (){var statearr_45782 = f__43980__auto__();
(statearr_45782[(6)] = c__43979__auto___47701);

return statearr_45782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43981__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_47986 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_47986(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_47997 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_47997(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_48007 = (function() {
var G__48008 = null;
var G__48008__1 = (function (p){
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
var G__48008__2 = (function (p,v){
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
G__48008 = function(p,v){
switch(arguments.length){
case 1:
return G__48008__1.call(this,p);
case 2:
return G__48008__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48008.cljs$core$IFn$_invoke$arity$1 = G__48008__1;
G__48008.cljs$core$IFn$_invoke$arity$2 = G__48008__2;
return G__48008;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45807 = arguments.length;
switch (G__45807) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48007(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48007(p,v);
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
var G__45828 = arguments.length;
switch (G__45828) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__45825_SHARP_){
if(cljs.core.truth_((p1__45825_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45825_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45825_SHARP_.call(null,topic)))){
return p1__45825_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45825_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45832 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45832 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45833){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45833 = meta45833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45834,meta45833__$1){
var self__ = this;
var _45834__$1 = this;
return (new cljs.core.async.t_cljs$core$async45832(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45833__$1));
}));

(cljs.core.async.t_cljs$core$async45832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45834){
var self__ = this;
var _45834__$1 = this;
return self__.meta45833;
}));

(cljs.core.async.t_cljs$core$async45832.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45832.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45832.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45832.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async45832.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async45832.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async45832.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async45832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45833","meta45833",-412876196,null)], null);
}));

(cljs.core.async.t_cljs$core$async45832.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45832");

(cljs.core.async.t_cljs$core$async45832.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45832");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45832.
 */
cljs.core.async.__GT_t_cljs$core$async45832 = (function cljs$core$async$__GT_t_cljs$core$async45832(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45833){
return (new cljs.core.async.t_cljs$core$async45832(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45833));
});

}

return (new cljs.core.async.t_cljs$core$async45832(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43979__auto___48065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43980__auto__ = (function (){var switch__43818__auto__ = (function (state_45921){
var state_val_45922 = (state_45921[(1)]);
if((state_val_45922 === (7))){
var inst_45917 = (state_45921[(2)]);
var state_45921__$1 = state_45921;
var statearr_45926_48067 = state_45921__$1;
(statearr_45926_48067[(2)] = inst_45917);

(statearr_45926_48067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45922 === (20))){
var state_45921__$1 = state_45921;
var statearr_45928_48070 = state_45921__$1;
(statearr_45928_48070[(2)] = null);

(statearr_45928_48070[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45922 === (1))){
var state_45921__$1 = state_45921;
var statearr_45929_48071 = state_45921__$1;
(statearr_45929_48071[(2)] = null);

(statearr_45929_48071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45922 === (24))){
var inst_45900 = (state_45921[(7)]);
var inst_45909 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45900);
var state_45921__$1 = state_45921;
var statearr_45930_48072 = state_45921__$1;
(statearr_45930_48072[(2)] = inst_45909);

(statearr_45930_48072[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45922 === (4))){
var inst_45850 = (state_45921[(8)]);
var inst_45850__$1 = (state_45921[(2)]);
var inst_45852 = (inst_45850__$1 == null);
var state_45921__$1 = (function (){var statearr_45931 = state_45921;
(statearr_45931[(8)] = inst_45850__$1);

return statearr_45931;
})();
if(cljs.core.truth_(inst_45852)){
var statearr_45932_48075 = state_45921__$1;
(statearr_45932_48075[(1)] = (5));

} else {
var statearr_45933_48076 = state_45921__$1;
(statearr_45933_48076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45922 === (15))){
var inst_45894 = (state_45921[(2)]);
var state_45921__$1 = state_45921;
var statearr_45936_48081 = state_45921__$1;
(statearr_45936_48081[(2)] = inst_45894);

(statearr_45936_48081[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45922 === (21))){
var inst_45914 = (state_45921[(2)]);
var state_45921__$1 = (function (){var statearr_45938 = state_45921;
(statearr_45938[(9)] = inst_45914);

return statearr_45938;
})();
var statearr_45939_48085 = state_45921__$1;
(statearr_45939_48085[(2)] = null);

(statearr_45939_48085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45922 === (13))){
var inst_45876 = (state_45921[(10)]);
var inst_45878 = cljs.core.chunked_seq_QMARK_(inst_45876);
var state_45921__$1 = state_45921;
if(inst_45878){
var statearr_45940_48089 = state_45921__$1;
(statearr_45940_48089[(1)] = (16));

} else {
var statearr_45941_48090 = state_45921__$1;
(statearr_45941_48090[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45922 === (22))){
var inst_45906 = (state_45921[(2)]);
var state_45921__$1 = state_45921;
if(cljs.core.truth_(inst_45906)){
var statearr_45942_48095 = state_45921__$1;
(statearr_45942_48095[(1)] = (23));

} else {
var statearr_45943_48097 = state_45921__$1;
(statearr_45943_48097[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45922 === (6))){
var inst_45902 = (state_45921[(11)]);
var inst_45850 = (state_45921[(8)]);
var inst_45900 = (state_45921[(7)]);
var inst_45900__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_45850) : topic_fn.call(null,inst_45850));
var inst_45901 = cljs.core.deref(mults);
var inst_45902__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45901,inst_45900__$1);
var state_45921__$1 = (function (){var statearr_45947 = state_45921;
(statearr_45947[(11)] = inst_45902__$1);

(statearr_45947[(7)] = inst_45900__$1);

return statearr_45947;
})();
if(cljs.core.truth_(inst_45902__$1)){
var statearr_45948_48102 = state_45921__$1;
(statearr_45948_48102[(1)] = (19));

} else {
var statearr_45949_48105 = state_45921__$1;
(statearr_45949_48105[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45922 === (25))){
var inst_45911 = (state_45921[(2)]);
var state_45921__$1 = state_45921;
var statearr_45950_48110 = state_45921__$1;
(statearr_45950_48110[(2)] = inst_45911);

(statearr_45950_48110[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45922 === (17))){
var inst_45876 = (state_45921[(10)]);
var inst_45885 = cljs.core.first(inst_45876);
var inst_45886 = cljs.core.async.muxch_STAR_(inst_45885);
var inst_45887 = cljs.core.async.close_BANG_(inst_45886);
var inst_45888 = cljs.core.next(inst_45876);
var inst_45861 = inst_45888;
var inst_45862 = null;
var inst_45863 = (0);
var inst_45864 = (0);
var state_45921__$1 = (function (){var statearr_45952 = state_45921;
(statearr_45952[(12)] = inst_45861);

(statearr_45952[(13)] = inst_45887);

(statearr_45952[(14)] = inst_45863);

(statearr_45952[(15)] = inst_45864);

(statearr_45952[(16)] = inst_45862);

return statearr_45952;
})();
var statearr_45953_48125 = state_45921__$1;
(statearr_45953_48125[(2)] = null);

(statearr_45953_48125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45922 === (3))){
var inst_45919 = (state_45921[(2)]);
var state_45921__$1 = state_45921;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45921__$1,inst_45919);
} else {
if((state_val_45922 === (12))){
var inst_45896 = (state_45921[(2)]);
var state_45921__$1 = state_45921;
var statearr_45954_48130 = state_45921__$1;
(statearr_45954_48130[(2)] = inst_45896);

(statearr_45954_48130[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45922 === (2))){
var state_45921__$1 = state_45921;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45921__$1,(4),ch);
} else {
if((state_val_45922 === (23))){
var state_45921__$1 = state_45921;
var statearr_45955_48137 = state_45921__$1;
(statearr_45955_48137[(2)] = null);

(statearr_45955_48137[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45922 === (19))){
var inst_45902 = (state_45921[(11)]);
var inst_45850 = (state_45921[(8)]);
var inst_45904 = cljs.core.async.muxch_STAR_(inst_45902);
var state_45921__$1 = state_45921;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45921__$1,(22),inst_45904,inst_45850);
} else {
if((state_val_45922 === (11))){
var inst_45861 = (state_45921[(12)]);
var inst_45876 = (state_45921[(10)]);
var inst_45876__$1 = cljs.core.seq(inst_45861);
var state_45921__$1 = (function (){var statearr_45957 = state_45921;
(statearr_45957[(10)] = inst_45876__$1);

return statearr_45957;
})();
if(inst_45876__$1){
var statearr_45958_48148 = state_45921__$1;
(statearr_45958_48148[(1)] = (13));

} else {
var statearr_45959_48149 = state_45921__$1;
(statearr_45959_48149[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45922 === (9))){
var inst_45898 = (state_45921[(2)]);
var state_45921__$1 = state_45921;
var statearr_45960_48153 = state_45921__$1;
(statearr_45960_48153[(2)] = inst_45898);

(statearr_45960_48153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45922 === (5))){
var inst_45858 = cljs.core.deref(mults);
var inst_45859 = cljs.core.vals(inst_45858);
var inst_45860 = cljs.core.seq(inst_45859);
var inst_45861 = inst_45860;
var inst_45862 = null;
var inst_45863 = (0);
var inst_45864 = (0);
var state_45921__$1 = (function (){var statearr_45961 = state_45921;
(statearr_45961[(12)] = inst_45861);

(statearr_45961[(14)] = inst_45863);

(statearr_45961[(15)] = inst_45864);

(statearr_45961[(16)] = inst_45862);

return statearr_45961;
})();
var statearr_45962_48164 = state_45921__$1;
(statearr_45962_48164[(2)] = null);

(statearr_45962_48164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45922 === (14))){
var state_45921__$1 = state_45921;
var statearr_45966_48170 = state_45921__$1;
(statearr_45966_48170[(2)] = null);

(statearr_45966_48170[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45922 === (16))){
var inst_45876 = (state_45921[(10)]);
var inst_45880 = cljs.core.chunk_first(inst_45876);
var inst_45881 = cljs.core.chunk_rest(inst_45876);
var inst_45882 = cljs.core.count(inst_45880);
var inst_45861 = inst_45881;
var inst_45862 = inst_45880;
var inst_45863 = inst_45882;
var inst_45864 = (0);
var state_45921__$1 = (function (){var statearr_45971 = state_45921;
(statearr_45971[(12)] = inst_45861);

(statearr_45971[(14)] = inst_45863);

(statearr_45971[(15)] = inst_45864);

(statearr_45971[(16)] = inst_45862);

return statearr_45971;
})();
var statearr_45973_48181 = state_45921__$1;
(statearr_45973_48181[(2)] = null);

(statearr_45973_48181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45922 === (10))){
var inst_45861 = (state_45921[(12)]);
var inst_45863 = (state_45921[(14)]);
var inst_45864 = (state_45921[(15)]);
var inst_45862 = (state_45921[(16)]);
var inst_45870 = cljs.core._nth(inst_45862,inst_45864);
var inst_45871 = cljs.core.async.muxch_STAR_(inst_45870);
var inst_45872 = cljs.core.async.close_BANG_(inst_45871);
var inst_45873 = (inst_45864 + (1));
var tmp45963 = inst_45861;
var tmp45964 = inst_45863;
var tmp45965 = inst_45862;
var inst_45861__$1 = tmp45963;
var inst_45862__$1 = tmp45965;
var inst_45863__$1 = tmp45964;
var inst_45864__$1 = inst_45873;
var state_45921__$1 = (function (){var statearr_45976 = state_45921;
(statearr_45976[(12)] = inst_45861__$1);

(statearr_45976[(17)] = inst_45872);

(statearr_45976[(14)] = inst_45863__$1);

(statearr_45976[(15)] = inst_45864__$1);

(statearr_45976[(16)] = inst_45862__$1);

return statearr_45976;
})();
var statearr_45977_48186 = state_45921__$1;
(statearr_45977_48186[(2)] = null);

(statearr_45977_48186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45922 === (18))){
var inst_45891 = (state_45921[(2)]);
var state_45921__$1 = state_45921;
var statearr_45979_48187 = state_45921__$1;
(statearr_45979_48187[(2)] = inst_45891);

(statearr_45979_48187[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45922 === (8))){
var inst_45863 = (state_45921[(14)]);
var inst_45864 = (state_45921[(15)]);
var inst_45866 = (inst_45864 < inst_45863);
var inst_45867 = inst_45866;
var state_45921__$1 = state_45921;
if(cljs.core.truth_(inst_45867)){
var statearr_45980_48188 = state_45921__$1;
(statearr_45980_48188[(1)] = (10));

} else {
var statearr_45981_48189 = state_45921__$1;
(statearr_45981_48189[(1)] = (11));

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
var cljs$core$async$state_machine__43819__auto__ = null;
var cljs$core$async$state_machine__43819__auto____0 = (function (){
var statearr_45982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45982[(0)] = cljs$core$async$state_machine__43819__auto__);

(statearr_45982[(1)] = (1));

return statearr_45982;
});
var cljs$core$async$state_machine__43819__auto____1 = (function (state_45921){
while(true){
var ret_value__43820__auto__ = (function (){try{while(true){
var result__43821__auto__ = switch__43818__auto__(state_45921);
if(cljs.core.keyword_identical_QMARK_(result__43821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43821__auto__;
}
break;
}
}catch (e45983){var ex__43822__auto__ = e45983;
var statearr_45985_48193 = state_45921;
(statearr_45985_48193[(2)] = ex__43822__auto__);


if(cljs.core.seq((state_45921[(4)]))){
var statearr_45986_48199 = state_45921;
(statearr_45986_48199[(1)] = cljs.core.first((state_45921[(4)])));

} else {
throw ex__43822__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48202 = state_45921;
state_45921 = G__48202;
continue;
} else {
return ret_value__43820__auto__;
}
break;
}
});
cljs$core$async$state_machine__43819__auto__ = function(state_45921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43819__auto____1.call(this,state_45921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43819__auto____0;
cljs$core$async$state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43819__auto____1;
return cljs$core$async$state_machine__43819__auto__;
})()
})();
var state__43981__auto__ = (function (){var statearr_45988 = f__43980__auto__();
(statearr_45988[(6)] = c__43979__auto___48065);

return statearr_45988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43981__auto__);
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
var G__45990 = arguments.length;
switch (G__45990) {
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
var G__45994 = arguments.length;
switch (G__45994) {
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
var G__46000 = arguments.length;
switch (G__46000) {
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
var c__43979__auto___48220 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43980__auto__ = (function (){var switch__43818__auto__ = (function (state_46059){
var state_val_46060 = (state_46059[(1)]);
if((state_val_46060 === (7))){
var state_46059__$1 = state_46059;
var statearr_46061_48221 = state_46059__$1;
(statearr_46061_48221[(2)] = null);

(statearr_46061_48221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46060 === (1))){
var state_46059__$1 = state_46059;
var statearr_46062_48223 = state_46059__$1;
(statearr_46062_48223[(2)] = null);

(statearr_46062_48223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46060 === (4))){
var inst_46019 = (state_46059[(7)]);
var inst_46018 = (state_46059[(8)]);
var inst_46021 = (inst_46019 < inst_46018);
var state_46059__$1 = state_46059;
if(cljs.core.truth_(inst_46021)){
var statearr_46063_48233 = state_46059__$1;
(statearr_46063_48233[(1)] = (6));

} else {
var statearr_46064_48234 = state_46059__$1;
(statearr_46064_48234[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46060 === (15))){
var inst_46045 = (state_46059[(9)]);
var inst_46050 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_46045);
var state_46059__$1 = state_46059;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46059__$1,(17),out,inst_46050);
} else {
if((state_val_46060 === (13))){
var inst_46045 = (state_46059[(9)]);
var inst_46045__$1 = (state_46059[(2)]);
var inst_46046 = cljs.core.some(cljs.core.nil_QMARK_,inst_46045__$1);
var state_46059__$1 = (function (){var statearr_46066 = state_46059;
(statearr_46066[(9)] = inst_46045__$1);

return statearr_46066;
})();
if(cljs.core.truth_(inst_46046)){
var statearr_46067_48244 = state_46059__$1;
(statearr_46067_48244[(1)] = (14));

} else {
var statearr_46068_48245 = state_46059__$1;
(statearr_46068_48245[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46060 === (6))){
var state_46059__$1 = state_46059;
var statearr_46071_48250 = state_46059__$1;
(statearr_46071_48250[(2)] = null);

(statearr_46071_48250[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46060 === (17))){
var inst_46052 = (state_46059[(2)]);
var state_46059__$1 = (function (){var statearr_46074 = state_46059;
(statearr_46074[(10)] = inst_46052);

return statearr_46074;
})();
var statearr_46075_48255 = state_46059__$1;
(statearr_46075_48255[(2)] = null);

(statearr_46075_48255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46060 === (3))){
var inst_46057 = (state_46059[(2)]);
var state_46059__$1 = state_46059;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46059__$1,inst_46057);
} else {
if((state_val_46060 === (12))){
var _ = (function (){var statearr_46076 = state_46059;
(statearr_46076[(4)] = cljs.core.rest((state_46059[(4)])));

return statearr_46076;
})();
var state_46059__$1 = state_46059;
var ex46073 = (state_46059__$1[(2)]);
var statearr_46077_48256 = state_46059__$1;
(statearr_46077_48256[(5)] = ex46073);


if((ex46073 instanceof Object)){
var statearr_46078_48257 = state_46059__$1;
(statearr_46078_48257[(1)] = (11));

(statearr_46078_48257[(5)] = null);

} else {
throw ex46073;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46060 === (2))){
var inst_46017 = cljs.core.reset_BANG_(dctr,cnt);
var inst_46018 = cnt;
var inst_46019 = (0);
var state_46059__$1 = (function (){var statearr_46079 = state_46059;
(statearr_46079[(7)] = inst_46019);

(statearr_46079[(11)] = inst_46017);

(statearr_46079[(8)] = inst_46018);

return statearr_46079;
})();
var statearr_46080_48260 = state_46059__$1;
(statearr_46080_48260[(2)] = null);

(statearr_46080_48260[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46060 === (11))){
var inst_46023 = (state_46059[(2)]);
var inst_46024 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46059__$1 = (function (){var statearr_46087 = state_46059;
(statearr_46087[(12)] = inst_46023);

return statearr_46087;
})();
var statearr_46088_48307 = state_46059__$1;
(statearr_46088_48307[(2)] = inst_46024);

(statearr_46088_48307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46060 === (9))){
var inst_46019 = (state_46059[(7)]);
var _ = (function (){var statearr_46089 = state_46059;
(statearr_46089[(4)] = cljs.core.cons((12),(state_46059[(4)])));

return statearr_46089;
})();
var inst_46030 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_46019) : chs__$1.call(null,inst_46019));
var inst_46031 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_46019) : done.call(null,inst_46019));
var inst_46032 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46030,inst_46031);
var ___$1 = (function (){var statearr_46090 = state_46059;
(statearr_46090[(4)] = cljs.core.rest((state_46059[(4)])));

return statearr_46090;
})();
var state_46059__$1 = state_46059;
var statearr_46091_48312 = state_46059__$1;
(statearr_46091_48312[(2)] = inst_46032);

(statearr_46091_48312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46060 === (5))){
var inst_46043 = (state_46059[(2)]);
var state_46059__$1 = (function (){var statearr_46092 = state_46059;
(statearr_46092[(13)] = inst_46043);

return statearr_46092;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46059__$1,(13),dchan);
} else {
if((state_val_46060 === (14))){
var inst_46048 = cljs.core.async.close_BANG_(out);
var state_46059__$1 = state_46059;
var statearr_46095_48320 = state_46059__$1;
(statearr_46095_48320[(2)] = inst_46048);

(statearr_46095_48320[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46060 === (16))){
var inst_46055 = (state_46059[(2)]);
var state_46059__$1 = state_46059;
var statearr_46097_48322 = state_46059__$1;
(statearr_46097_48322[(2)] = inst_46055);

(statearr_46097_48322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46060 === (10))){
var inst_46019 = (state_46059[(7)]);
var inst_46035 = (state_46059[(2)]);
var inst_46037 = (inst_46019 + (1));
var inst_46019__$1 = inst_46037;
var state_46059__$1 = (function (){var statearr_46098 = state_46059;
(statearr_46098[(14)] = inst_46035);

(statearr_46098[(7)] = inst_46019__$1);

return statearr_46098;
})();
var statearr_46100_48330 = state_46059__$1;
(statearr_46100_48330[(2)] = null);

(statearr_46100_48330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46060 === (8))){
var inst_46041 = (state_46059[(2)]);
var state_46059__$1 = state_46059;
var statearr_46101_48335 = state_46059__$1;
(statearr_46101_48335[(2)] = inst_46041);

(statearr_46101_48335[(1)] = (5));


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
var cljs$core$async$state_machine__43819__auto__ = null;
var cljs$core$async$state_machine__43819__auto____0 = (function (){
var statearr_46102 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46102[(0)] = cljs$core$async$state_machine__43819__auto__);

(statearr_46102[(1)] = (1));

return statearr_46102;
});
var cljs$core$async$state_machine__43819__auto____1 = (function (state_46059){
while(true){
var ret_value__43820__auto__ = (function (){try{while(true){
var result__43821__auto__ = switch__43818__auto__(state_46059);
if(cljs.core.keyword_identical_QMARK_(result__43821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43821__auto__;
}
break;
}
}catch (e46105){var ex__43822__auto__ = e46105;
var statearr_46106_48346 = state_46059;
(statearr_46106_48346[(2)] = ex__43822__auto__);


if(cljs.core.seq((state_46059[(4)]))){
var statearr_46107_48353 = state_46059;
(statearr_46107_48353[(1)] = cljs.core.first((state_46059[(4)])));

} else {
throw ex__43822__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48356 = state_46059;
state_46059 = G__48356;
continue;
} else {
return ret_value__43820__auto__;
}
break;
}
});
cljs$core$async$state_machine__43819__auto__ = function(state_46059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43819__auto____1.call(this,state_46059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43819__auto____0;
cljs$core$async$state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43819__auto____1;
return cljs$core$async$state_machine__43819__auto__;
})()
})();
var state__43981__auto__ = (function (){var statearr_46110 = f__43980__auto__();
(statearr_46110[(6)] = c__43979__auto___48220);

return statearr_46110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43981__auto__);
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
var G__46113 = arguments.length;
switch (G__46113) {
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
var c__43979__auto___48366 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43980__auto__ = (function (){var switch__43818__auto__ = (function (state_46145){
var state_val_46146 = (state_46145[(1)]);
if((state_val_46146 === (7))){
var inst_46124 = (state_46145[(7)]);
var inst_46125 = (state_46145[(8)]);
var inst_46124__$1 = (state_46145[(2)]);
var inst_46125__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46124__$1,(0),null);
var inst_46126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46124__$1,(1),null);
var inst_46127 = (inst_46125__$1 == null);
var state_46145__$1 = (function (){var statearr_46147 = state_46145;
(statearr_46147[(9)] = inst_46126);

(statearr_46147[(7)] = inst_46124__$1);

(statearr_46147[(8)] = inst_46125__$1);

return statearr_46147;
})();
if(cljs.core.truth_(inst_46127)){
var statearr_46148_48405 = state_46145__$1;
(statearr_46148_48405[(1)] = (8));

} else {
var statearr_46149_48414 = state_46145__$1;
(statearr_46149_48414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46146 === (1))){
var inst_46114 = cljs.core.vec(chs);
var inst_46115 = inst_46114;
var state_46145__$1 = (function (){var statearr_46150 = state_46145;
(statearr_46150[(10)] = inst_46115);

return statearr_46150;
})();
var statearr_46151_48439 = state_46145__$1;
(statearr_46151_48439[(2)] = null);

(statearr_46151_48439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46146 === (4))){
var inst_46115 = (state_46145[(10)]);
var state_46145__$1 = state_46145;
return cljs.core.async.ioc_alts_BANG_(state_46145__$1,(7),inst_46115);
} else {
if((state_val_46146 === (6))){
var inst_46141 = (state_46145[(2)]);
var state_46145__$1 = state_46145;
var statearr_46152_48449 = state_46145__$1;
(statearr_46152_48449[(2)] = inst_46141);

(statearr_46152_48449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46146 === (3))){
var inst_46143 = (state_46145[(2)]);
var state_46145__$1 = state_46145;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46145__$1,inst_46143);
} else {
if((state_val_46146 === (2))){
var inst_46115 = (state_46145[(10)]);
var inst_46117 = cljs.core.count(inst_46115);
var inst_46118 = (inst_46117 > (0));
var state_46145__$1 = state_46145;
if(cljs.core.truth_(inst_46118)){
var statearr_46155_48479 = state_46145__$1;
(statearr_46155_48479[(1)] = (4));

} else {
var statearr_46156_48480 = state_46145__$1;
(statearr_46156_48480[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46146 === (11))){
var inst_46115 = (state_46145[(10)]);
var inst_46134 = (state_46145[(2)]);
var tmp46153 = inst_46115;
var inst_46115__$1 = tmp46153;
var state_46145__$1 = (function (){var statearr_46157 = state_46145;
(statearr_46157[(11)] = inst_46134);

(statearr_46157[(10)] = inst_46115__$1);

return statearr_46157;
})();
var statearr_46158_48482 = state_46145__$1;
(statearr_46158_48482[(2)] = null);

(statearr_46158_48482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46146 === (9))){
var inst_46125 = (state_46145[(8)]);
var state_46145__$1 = state_46145;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46145__$1,(11),out,inst_46125);
} else {
if((state_val_46146 === (5))){
var inst_46139 = cljs.core.async.close_BANG_(out);
var state_46145__$1 = state_46145;
var statearr_46159_48496 = state_46145__$1;
(statearr_46159_48496[(2)] = inst_46139);

(statearr_46159_48496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46146 === (10))){
var inst_46137 = (state_46145[(2)]);
var state_46145__$1 = state_46145;
var statearr_46163_48497 = state_46145__$1;
(statearr_46163_48497[(2)] = inst_46137);

(statearr_46163_48497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46146 === (8))){
var inst_46126 = (state_46145[(9)]);
var inst_46124 = (state_46145[(7)]);
var inst_46125 = (state_46145[(8)]);
var inst_46115 = (state_46145[(10)]);
var inst_46129 = (function (){var cs = inst_46115;
var vec__46120 = inst_46124;
var v = inst_46125;
var c = inst_46126;
return (function (p1__46111_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46111_SHARP_);
});
})();
var inst_46130 = cljs.core.filterv(inst_46129,inst_46115);
var inst_46115__$1 = inst_46130;
var state_46145__$1 = (function (){var statearr_46164 = state_46145;
(statearr_46164[(10)] = inst_46115__$1);

return statearr_46164;
})();
var statearr_46165_48502 = state_46145__$1;
(statearr_46165_48502[(2)] = null);

(statearr_46165_48502[(1)] = (2));


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
var cljs$core$async$state_machine__43819__auto__ = null;
var cljs$core$async$state_machine__43819__auto____0 = (function (){
var statearr_46168 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46168[(0)] = cljs$core$async$state_machine__43819__auto__);

(statearr_46168[(1)] = (1));

return statearr_46168;
});
var cljs$core$async$state_machine__43819__auto____1 = (function (state_46145){
while(true){
var ret_value__43820__auto__ = (function (){try{while(true){
var result__43821__auto__ = switch__43818__auto__(state_46145);
if(cljs.core.keyword_identical_QMARK_(result__43821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43821__auto__;
}
break;
}
}catch (e46171){var ex__43822__auto__ = e46171;
var statearr_46172_48506 = state_46145;
(statearr_46172_48506[(2)] = ex__43822__auto__);


if(cljs.core.seq((state_46145[(4)]))){
var statearr_46174_48507 = state_46145;
(statearr_46174_48507[(1)] = cljs.core.first((state_46145[(4)])));

} else {
throw ex__43822__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48510 = state_46145;
state_46145 = G__48510;
continue;
} else {
return ret_value__43820__auto__;
}
break;
}
});
cljs$core$async$state_machine__43819__auto__ = function(state_46145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43819__auto____1.call(this,state_46145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43819__auto____0;
cljs$core$async$state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43819__auto____1;
return cljs$core$async$state_machine__43819__auto__;
})()
})();
var state__43981__auto__ = (function (){var statearr_46177 = f__43980__auto__();
(statearr_46177[(6)] = c__43979__auto___48366);

return statearr_46177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43981__auto__);
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
var G__46184 = arguments.length;
switch (G__46184) {
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
var c__43979__auto___48517 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43980__auto__ = (function (){var switch__43818__auto__ = (function (state_46217){
var state_val_46218 = (state_46217[(1)]);
if((state_val_46218 === (7))){
var inst_46195 = (state_46217[(7)]);
var inst_46195__$1 = (state_46217[(2)]);
var inst_46196 = (inst_46195__$1 == null);
var inst_46197 = cljs.core.not(inst_46196);
var state_46217__$1 = (function (){var statearr_46228 = state_46217;
(statearr_46228[(7)] = inst_46195__$1);

return statearr_46228;
})();
if(inst_46197){
var statearr_46229_48522 = state_46217__$1;
(statearr_46229_48522[(1)] = (8));

} else {
var statearr_46230_48528 = state_46217__$1;
(statearr_46230_48528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46218 === (1))){
var inst_46190 = (0);
var state_46217__$1 = (function (){var statearr_46232 = state_46217;
(statearr_46232[(8)] = inst_46190);

return statearr_46232;
})();
var statearr_46234_48553 = state_46217__$1;
(statearr_46234_48553[(2)] = null);

(statearr_46234_48553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46218 === (4))){
var state_46217__$1 = state_46217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46217__$1,(7),ch);
} else {
if((state_val_46218 === (6))){
var inst_46212 = (state_46217[(2)]);
var state_46217__$1 = state_46217;
var statearr_46235_48561 = state_46217__$1;
(statearr_46235_48561[(2)] = inst_46212);

(statearr_46235_48561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46218 === (3))){
var inst_46214 = (state_46217[(2)]);
var inst_46215 = cljs.core.async.close_BANG_(out);
var state_46217__$1 = (function (){var statearr_46241 = state_46217;
(statearr_46241[(9)] = inst_46214);

return statearr_46241;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46217__$1,inst_46215);
} else {
if((state_val_46218 === (2))){
var inst_46190 = (state_46217[(8)]);
var inst_46192 = (inst_46190 < n);
var state_46217__$1 = state_46217;
if(cljs.core.truth_(inst_46192)){
var statearr_46243_48587 = state_46217__$1;
(statearr_46243_48587[(1)] = (4));

} else {
var statearr_46244_48588 = state_46217__$1;
(statearr_46244_48588[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46218 === (11))){
var inst_46190 = (state_46217[(8)]);
var inst_46200 = (state_46217[(2)]);
var inst_46201 = (inst_46190 + (1));
var inst_46190__$1 = inst_46201;
var state_46217__$1 = (function (){var statearr_46245 = state_46217;
(statearr_46245[(10)] = inst_46200);

(statearr_46245[(8)] = inst_46190__$1);

return statearr_46245;
})();
var statearr_46246_48598 = state_46217__$1;
(statearr_46246_48598[(2)] = null);

(statearr_46246_48598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46218 === (9))){
var state_46217__$1 = state_46217;
var statearr_46247_48602 = state_46217__$1;
(statearr_46247_48602[(2)] = null);

(statearr_46247_48602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46218 === (5))){
var state_46217__$1 = state_46217;
var statearr_46251_48604 = state_46217__$1;
(statearr_46251_48604[(2)] = null);

(statearr_46251_48604[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46218 === (10))){
var inst_46209 = (state_46217[(2)]);
var state_46217__$1 = state_46217;
var statearr_46252_48624 = state_46217__$1;
(statearr_46252_48624[(2)] = inst_46209);

(statearr_46252_48624[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46218 === (8))){
var inst_46195 = (state_46217[(7)]);
var state_46217__$1 = state_46217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46217__$1,(11),out,inst_46195);
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
var cljs$core$async$state_machine__43819__auto__ = null;
var cljs$core$async$state_machine__43819__auto____0 = (function (){
var statearr_46253 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46253[(0)] = cljs$core$async$state_machine__43819__auto__);

(statearr_46253[(1)] = (1));

return statearr_46253;
});
var cljs$core$async$state_machine__43819__auto____1 = (function (state_46217){
while(true){
var ret_value__43820__auto__ = (function (){try{while(true){
var result__43821__auto__ = switch__43818__auto__(state_46217);
if(cljs.core.keyword_identical_QMARK_(result__43821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43821__auto__;
}
break;
}
}catch (e46254){var ex__43822__auto__ = e46254;
var statearr_46258_48630 = state_46217;
(statearr_46258_48630[(2)] = ex__43822__auto__);


if(cljs.core.seq((state_46217[(4)]))){
var statearr_46259_48632 = state_46217;
(statearr_46259_48632[(1)] = cljs.core.first((state_46217[(4)])));

} else {
throw ex__43822__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48635 = state_46217;
state_46217 = G__48635;
continue;
} else {
return ret_value__43820__auto__;
}
break;
}
});
cljs$core$async$state_machine__43819__auto__ = function(state_46217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43819__auto____1.call(this,state_46217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43819__auto____0;
cljs$core$async$state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43819__auto____1;
return cljs$core$async$state_machine__43819__auto__;
})()
})();
var state__43981__auto__ = (function (){var statearr_46262 = f__43980__auto__();
(statearr_46262[(6)] = c__43979__auto___48517);

return statearr_46262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43981__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46269 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46269 = (function (f,ch,meta46270){
this.f = f;
this.ch = ch;
this.meta46270 = meta46270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46271,meta46270__$1){
var self__ = this;
var _46271__$1 = this;
return (new cljs.core.async.t_cljs$core$async46269(self__.f,self__.ch,meta46270__$1));
}));

(cljs.core.async.t_cljs$core$async46269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46271){
var self__ = this;
var _46271__$1 = this;
return self__.meta46270;
}));

(cljs.core.async.t_cljs$core$async46269.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46269.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46269.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46269.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46269.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46285 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46285 = (function (f,ch,meta46270,_,fn1,meta46286){
this.f = f;
this.ch = ch;
this.meta46270 = meta46270;
this._ = _;
this.fn1 = fn1;
this.meta46286 = meta46286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46287,meta46286__$1){
var self__ = this;
var _46287__$1 = this;
return (new cljs.core.async.t_cljs$core$async46285(self__.f,self__.ch,self__.meta46270,self__._,self__.fn1,meta46286__$1));
}));

(cljs.core.async.t_cljs$core$async46285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46287){
var self__ = this;
var _46287__$1 = this;
return self__.meta46286;
}));

(cljs.core.async.t_cljs$core$async46285.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46285.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async46285.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46285.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__46268_SHARP_){
var G__46289 = (((p1__46268_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46268_SHARP_) : self__.f.call(null,p1__46268_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46289) : f1.call(null,G__46289));
});
}));

(cljs.core.async.t_cljs$core$async46285.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46270","meta46270",-1814830819,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46269","cljs.core.async/t_cljs$core$async46269",-592193067,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46286","meta46286",1094088459,null)], null);
}));

(cljs.core.async.t_cljs$core$async46285.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46285.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46285");

(cljs.core.async.t_cljs$core$async46285.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46285");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46285.
 */
cljs.core.async.__GT_t_cljs$core$async46285 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46285(f__$1,ch__$1,meta46270__$1,___$2,fn1__$1,meta46286){
return (new cljs.core.async.t_cljs$core$async46285(f__$1,ch__$1,meta46270__$1,___$2,fn1__$1,meta46286));
});

}

return (new cljs.core.async.t_cljs$core$async46285(self__.f,self__.ch,self__.meta46270,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46298 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46298) : self__.f.call(null,G__46298));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async46269.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46269.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async46269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46270","meta46270",-1814830819,null)], null);
}));

(cljs.core.async.t_cljs$core$async46269.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46269");

(cljs.core.async.t_cljs$core$async46269.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46269");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46269.
 */
cljs.core.async.__GT_t_cljs$core$async46269 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46269(f__$1,ch__$1,meta46270){
return (new cljs.core.async.t_cljs$core$async46269(f__$1,ch__$1,meta46270));
});

}

return (new cljs.core.async.t_cljs$core$async46269(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46320 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46320 = (function (f,ch,meta46321){
this.f = f;
this.ch = ch;
this.meta46321 = meta46321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46322,meta46321__$1){
var self__ = this;
var _46322__$1 = this;
return (new cljs.core.async.t_cljs$core$async46320(self__.f,self__.ch,meta46321__$1));
}));

(cljs.core.async.t_cljs$core$async46320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46322){
var self__ = this;
var _46322__$1 = this;
return self__.meta46321;
}));

(cljs.core.async.t_cljs$core$async46320.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46320.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46320.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46320.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46320.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46320.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async46320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46321","meta46321",1352979327,null)], null);
}));

(cljs.core.async.t_cljs$core$async46320.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46320");

(cljs.core.async.t_cljs$core$async46320.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46320");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46320.
 */
cljs.core.async.__GT_t_cljs$core$async46320 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46320(f__$1,ch__$1,meta46321){
return (new cljs.core.async.t_cljs$core$async46320(f__$1,ch__$1,meta46321));
});

}

return (new cljs.core.async.t_cljs$core$async46320(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46344 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46344 = (function (p,ch,meta46345){
this.p = p;
this.ch = ch;
this.meta46345 = meta46345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46346,meta46345__$1){
var self__ = this;
var _46346__$1 = this;
return (new cljs.core.async.t_cljs$core$async46344(self__.p,self__.ch,meta46345__$1));
}));

(cljs.core.async.t_cljs$core$async46344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46346){
var self__ = this;
var _46346__$1 = this;
return self__.meta46345;
}));

(cljs.core.async.t_cljs$core$async46344.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46344.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46344.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46344.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46344.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46344.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46344.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async46344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46345","meta46345",436257189,null)], null);
}));

(cljs.core.async.t_cljs$core$async46344.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46344");

(cljs.core.async.t_cljs$core$async46344.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46344");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46344.
 */
cljs.core.async.__GT_t_cljs$core$async46344 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46344(p__$1,ch__$1,meta46345){
return (new cljs.core.async.t_cljs$core$async46344(p__$1,ch__$1,meta46345));
});

}

return (new cljs.core.async.t_cljs$core$async46344(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46358 = arguments.length;
switch (G__46358) {
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
var c__43979__auto___48681 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43980__auto__ = (function (){var switch__43818__auto__ = (function (state_46385){
var state_val_46386 = (state_46385[(1)]);
if((state_val_46386 === (7))){
var inst_46380 = (state_46385[(2)]);
var state_46385__$1 = state_46385;
var statearr_46387_48688 = state_46385__$1;
(statearr_46387_48688[(2)] = inst_46380);

(statearr_46387_48688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46386 === (1))){
var state_46385__$1 = state_46385;
var statearr_46390_48691 = state_46385__$1;
(statearr_46390_48691[(2)] = null);

(statearr_46390_48691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46386 === (4))){
var inst_46364 = (state_46385[(7)]);
var inst_46364__$1 = (state_46385[(2)]);
var inst_46365 = (inst_46364__$1 == null);
var state_46385__$1 = (function (){var statearr_46394 = state_46385;
(statearr_46394[(7)] = inst_46364__$1);

return statearr_46394;
})();
if(cljs.core.truth_(inst_46365)){
var statearr_46397_48692 = state_46385__$1;
(statearr_46397_48692[(1)] = (5));

} else {
var statearr_46398_48693 = state_46385__$1;
(statearr_46398_48693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46386 === (6))){
var inst_46364 = (state_46385[(7)]);
var inst_46369 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46364) : p.call(null,inst_46364));
var state_46385__$1 = state_46385;
if(cljs.core.truth_(inst_46369)){
var statearr_46399_48695 = state_46385__$1;
(statearr_46399_48695[(1)] = (8));

} else {
var statearr_46400_48696 = state_46385__$1;
(statearr_46400_48696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46386 === (3))){
var inst_46382 = (state_46385[(2)]);
var state_46385__$1 = state_46385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46385__$1,inst_46382);
} else {
if((state_val_46386 === (2))){
var state_46385__$1 = state_46385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46385__$1,(4),ch);
} else {
if((state_val_46386 === (11))){
var inst_46373 = (state_46385[(2)]);
var state_46385__$1 = state_46385;
var statearr_46407_48697 = state_46385__$1;
(statearr_46407_48697[(2)] = inst_46373);

(statearr_46407_48697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46386 === (9))){
var state_46385__$1 = state_46385;
var statearr_46409_48704 = state_46385__$1;
(statearr_46409_48704[(2)] = null);

(statearr_46409_48704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46386 === (5))){
var inst_46367 = cljs.core.async.close_BANG_(out);
var state_46385__$1 = state_46385;
var statearr_46411_48706 = state_46385__$1;
(statearr_46411_48706[(2)] = inst_46367);

(statearr_46411_48706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46386 === (10))){
var inst_46377 = (state_46385[(2)]);
var state_46385__$1 = (function (){var statearr_46412 = state_46385;
(statearr_46412[(8)] = inst_46377);

return statearr_46412;
})();
var statearr_46413_48707 = state_46385__$1;
(statearr_46413_48707[(2)] = null);

(statearr_46413_48707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46386 === (8))){
var inst_46364 = (state_46385[(7)]);
var state_46385__$1 = state_46385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46385__$1,(11),out,inst_46364);
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
var cljs$core$async$state_machine__43819__auto__ = null;
var cljs$core$async$state_machine__43819__auto____0 = (function (){
var statearr_46417 = [null,null,null,null,null,null,null,null,null];
(statearr_46417[(0)] = cljs$core$async$state_machine__43819__auto__);

(statearr_46417[(1)] = (1));

return statearr_46417;
});
var cljs$core$async$state_machine__43819__auto____1 = (function (state_46385){
while(true){
var ret_value__43820__auto__ = (function (){try{while(true){
var result__43821__auto__ = switch__43818__auto__(state_46385);
if(cljs.core.keyword_identical_QMARK_(result__43821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43821__auto__;
}
break;
}
}catch (e46418){var ex__43822__auto__ = e46418;
var statearr_46425_48712 = state_46385;
(statearr_46425_48712[(2)] = ex__43822__auto__);


if(cljs.core.seq((state_46385[(4)]))){
var statearr_46426_48713 = state_46385;
(statearr_46426_48713[(1)] = cljs.core.first((state_46385[(4)])));

} else {
throw ex__43822__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48717 = state_46385;
state_46385 = G__48717;
continue;
} else {
return ret_value__43820__auto__;
}
break;
}
});
cljs$core$async$state_machine__43819__auto__ = function(state_46385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43819__auto____1.call(this,state_46385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43819__auto____0;
cljs$core$async$state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43819__auto____1;
return cljs$core$async$state_machine__43819__auto__;
})()
})();
var state__43981__auto__ = (function (){var statearr_46429 = f__43980__auto__();
(statearr_46429[(6)] = c__43979__auto___48681);

return statearr_46429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43981__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46434 = arguments.length;
switch (G__46434) {
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
var c__43979__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43980__auto__ = (function (){var switch__43818__auto__ = (function (state_46513){
var state_val_46514 = (state_46513[(1)]);
if((state_val_46514 === (7))){
var inst_46509 = (state_46513[(2)]);
var state_46513__$1 = state_46513;
var statearr_46518_48728 = state_46513__$1;
(statearr_46518_48728[(2)] = inst_46509);

(statearr_46518_48728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (20))){
var inst_46475 = (state_46513[(7)]);
var inst_46486 = (state_46513[(2)]);
var inst_46487 = cljs.core.next(inst_46475);
var inst_46461 = inst_46487;
var inst_46462 = null;
var inst_46463 = (0);
var inst_46464 = (0);
var state_46513__$1 = (function (){var statearr_46526 = state_46513;
(statearr_46526[(8)] = inst_46464);

(statearr_46526[(9)] = inst_46486);

(statearr_46526[(10)] = inst_46461);

(statearr_46526[(11)] = inst_46462);

(statearr_46526[(12)] = inst_46463);

return statearr_46526;
})();
var statearr_46529_48738 = state_46513__$1;
(statearr_46529_48738[(2)] = null);

(statearr_46529_48738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (1))){
var state_46513__$1 = state_46513;
var statearr_46530_48740 = state_46513__$1;
(statearr_46530_48740[(2)] = null);

(statearr_46530_48740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (4))){
var inst_46450 = (state_46513[(13)]);
var inst_46450__$1 = (state_46513[(2)]);
var inst_46451 = (inst_46450__$1 == null);
var state_46513__$1 = (function (){var statearr_46531 = state_46513;
(statearr_46531[(13)] = inst_46450__$1);

return statearr_46531;
})();
if(cljs.core.truth_(inst_46451)){
var statearr_46532_48752 = state_46513__$1;
(statearr_46532_48752[(1)] = (5));

} else {
var statearr_46533_48756 = state_46513__$1;
(statearr_46533_48756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (15))){
var state_46513__$1 = state_46513;
var statearr_46538_48757 = state_46513__$1;
(statearr_46538_48757[(2)] = null);

(statearr_46538_48757[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (21))){
var state_46513__$1 = state_46513;
var statearr_46541_48758 = state_46513__$1;
(statearr_46541_48758[(2)] = null);

(statearr_46541_48758[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (13))){
var inst_46464 = (state_46513[(8)]);
var inst_46461 = (state_46513[(10)]);
var inst_46462 = (state_46513[(11)]);
var inst_46463 = (state_46513[(12)]);
var inst_46471 = (state_46513[(2)]);
var inst_46472 = (inst_46464 + (1));
var tmp46534 = inst_46461;
var tmp46535 = inst_46462;
var tmp46536 = inst_46463;
var inst_46461__$1 = tmp46534;
var inst_46462__$1 = tmp46535;
var inst_46463__$1 = tmp46536;
var inst_46464__$1 = inst_46472;
var state_46513__$1 = (function (){var statearr_46548 = state_46513;
(statearr_46548[(8)] = inst_46464__$1);

(statearr_46548[(14)] = inst_46471);

(statearr_46548[(10)] = inst_46461__$1);

(statearr_46548[(11)] = inst_46462__$1);

(statearr_46548[(12)] = inst_46463__$1);

return statearr_46548;
})();
var statearr_46549_48779 = state_46513__$1;
(statearr_46549_48779[(2)] = null);

(statearr_46549_48779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (22))){
var state_46513__$1 = state_46513;
var statearr_46550_48785 = state_46513__$1;
(statearr_46550_48785[(2)] = null);

(statearr_46550_48785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (6))){
var inst_46450 = (state_46513[(13)]);
var inst_46459 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46450) : f.call(null,inst_46450));
var inst_46460 = cljs.core.seq(inst_46459);
var inst_46461 = inst_46460;
var inst_46462 = null;
var inst_46463 = (0);
var inst_46464 = (0);
var state_46513__$1 = (function (){var statearr_46554 = state_46513;
(statearr_46554[(8)] = inst_46464);

(statearr_46554[(10)] = inst_46461);

(statearr_46554[(11)] = inst_46462);

(statearr_46554[(12)] = inst_46463);

return statearr_46554;
})();
var statearr_46559_48802 = state_46513__$1;
(statearr_46559_48802[(2)] = null);

(statearr_46559_48802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (17))){
var inst_46475 = (state_46513[(7)]);
var inst_46479 = cljs.core.chunk_first(inst_46475);
var inst_46480 = cljs.core.chunk_rest(inst_46475);
var inst_46481 = cljs.core.count(inst_46479);
var inst_46461 = inst_46480;
var inst_46462 = inst_46479;
var inst_46463 = inst_46481;
var inst_46464 = (0);
var state_46513__$1 = (function (){var statearr_46568 = state_46513;
(statearr_46568[(8)] = inst_46464);

(statearr_46568[(10)] = inst_46461);

(statearr_46568[(11)] = inst_46462);

(statearr_46568[(12)] = inst_46463);

return statearr_46568;
})();
var statearr_46569_48822 = state_46513__$1;
(statearr_46569_48822[(2)] = null);

(statearr_46569_48822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (3))){
var inst_46511 = (state_46513[(2)]);
var state_46513__$1 = state_46513;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46513__$1,inst_46511);
} else {
if((state_val_46514 === (12))){
var inst_46496 = (state_46513[(2)]);
var state_46513__$1 = state_46513;
var statearr_46578_48844 = state_46513__$1;
(statearr_46578_48844[(2)] = inst_46496);

(statearr_46578_48844[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (2))){
var state_46513__$1 = state_46513;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46513__$1,(4),in$);
} else {
if((state_val_46514 === (23))){
var inst_46507 = (state_46513[(2)]);
var state_46513__$1 = state_46513;
var statearr_46579_48854 = state_46513__$1;
(statearr_46579_48854[(2)] = inst_46507);

(statearr_46579_48854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (19))){
var inst_46490 = (state_46513[(2)]);
var state_46513__$1 = state_46513;
var statearr_46580_48858 = state_46513__$1;
(statearr_46580_48858[(2)] = inst_46490);

(statearr_46580_48858[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (11))){
var inst_46461 = (state_46513[(10)]);
var inst_46475 = (state_46513[(7)]);
var inst_46475__$1 = cljs.core.seq(inst_46461);
var state_46513__$1 = (function (){var statearr_46581 = state_46513;
(statearr_46581[(7)] = inst_46475__$1);

return statearr_46581;
})();
if(inst_46475__$1){
var statearr_46585_48872 = state_46513__$1;
(statearr_46585_48872[(1)] = (14));

} else {
var statearr_46586_48873 = state_46513__$1;
(statearr_46586_48873[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (9))){
var inst_46498 = (state_46513[(2)]);
var inst_46499 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46513__$1 = (function (){var statearr_46589 = state_46513;
(statearr_46589[(15)] = inst_46498);

return statearr_46589;
})();
if(cljs.core.truth_(inst_46499)){
var statearr_46590_48883 = state_46513__$1;
(statearr_46590_48883[(1)] = (21));

} else {
var statearr_46591_48884 = state_46513__$1;
(statearr_46591_48884[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (5))){
var inst_46453 = cljs.core.async.close_BANG_(out);
var state_46513__$1 = state_46513;
var statearr_46592_48885 = state_46513__$1;
(statearr_46592_48885[(2)] = inst_46453);

(statearr_46592_48885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (14))){
var inst_46475 = (state_46513[(7)]);
var inst_46477 = cljs.core.chunked_seq_QMARK_(inst_46475);
var state_46513__$1 = state_46513;
if(inst_46477){
var statearr_46593_48886 = state_46513__$1;
(statearr_46593_48886[(1)] = (17));

} else {
var statearr_46594_48887 = state_46513__$1;
(statearr_46594_48887[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (16))){
var inst_46493 = (state_46513[(2)]);
var state_46513__$1 = state_46513;
var statearr_46596_48891 = state_46513__$1;
(statearr_46596_48891[(2)] = inst_46493);

(statearr_46596_48891[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (10))){
var inst_46464 = (state_46513[(8)]);
var inst_46462 = (state_46513[(11)]);
var inst_46469 = cljs.core._nth(inst_46462,inst_46464);
var state_46513__$1 = state_46513;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46513__$1,(13),out,inst_46469);
} else {
if((state_val_46514 === (18))){
var inst_46475 = (state_46513[(7)]);
var inst_46484 = cljs.core.first(inst_46475);
var state_46513__$1 = state_46513;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46513__$1,(20),out,inst_46484);
} else {
if((state_val_46514 === (8))){
var inst_46464 = (state_46513[(8)]);
var inst_46463 = (state_46513[(12)]);
var inst_46466 = (inst_46464 < inst_46463);
var inst_46467 = inst_46466;
var state_46513__$1 = state_46513;
if(cljs.core.truth_(inst_46467)){
var statearr_46597_48897 = state_46513__$1;
(statearr_46597_48897[(1)] = (10));

} else {
var statearr_46598_48898 = state_46513__$1;
(statearr_46598_48898[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__43819__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43819__auto____0 = (function (){
var statearr_46599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46599[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43819__auto__);

(statearr_46599[(1)] = (1));

return statearr_46599;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43819__auto____1 = (function (state_46513){
while(true){
var ret_value__43820__auto__ = (function (){try{while(true){
var result__43821__auto__ = switch__43818__auto__(state_46513);
if(cljs.core.keyword_identical_QMARK_(result__43821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43821__auto__;
}
break;
}
}catch (e46600){var ex__43822__auto__ = e46600;
var statearr_46601_48899 = state_46513;
(statearr_46601_48899[(2)] = ex__43822__auto__);


if(cljs.core.seq((state_46513[(4)]))){
var statearr_46602_48900 = state_46513;
(statearr_46602_48900[(1)] = cljs.core.first((state_46513[(4)])));

} else {
throw ex__43822__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48901 = state_46513;
state_46513 = G__48901;
continue;
} else {
return ret_value__43820__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43819__auto__ = function(state_46513){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43819__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43819__auto____1.call(this,state_46513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43819__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43819__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43819__auto__;
})()
})();
var state__43981__auto__ = (function (){var statearr_46603 = f__43980__auto__();
(statearr_46603[(6)] = c__43979__auto__);

return statearr_46603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43981__auto__);
}));

return c__43979__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46605 = arguments.length;
switch (G__46605) {
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
var G__46607 = arguments.length;
switch (G__46607) {
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
var G__46609 = arguments.length;
switch (G__46609) {
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
var c__43979__auto___48933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43980__auto__ = (function (){var switch__43818__auto__ = (function (state_46634){
var state_val_46635 = (state_46634[(1)]);
if((state_val_46635 === (7))){
var inst_46629 = (state_46634[(2)]);
var state_46634__$1 = state_46634;
var statearr_46636_48937 = state_46634__$1;
(statearr_46636_48937[(2)] = inst_46629);

(statearr_46636_48937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46635 === (1))){
var inst_46610 = null;
var state_46634__$1 = (function (){var statearr_46637 = state_46634;
(statearr_46637[(7)] = inst_46610);

return statearr_46637;
})();
var statearr_46638_48938 = state_46634__$1;
(statearr_46638_48938[(2)] = null);

(statearr_46638_48938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46635 === (4))){
var inst_46614 = (state_46634[(8)]);
var inst_46614__$1 = (state_46634[(2)]);
var inst_46615 = (inst_46614__$1 == null);
var inst_46616 = cljs.core.not(inst_46615);
var state_46634__$1 = (function (){var statearr_46640 = state_46634;
(statearr_46640[(8)] = inst_46614__$1);

return statearr_46640;
})();
if(inst_46616){
var statearr_46641_48939 = state_46634__$1;
(statearr_46641_48939[(1)] = (5));

} else {
var statearr_46642_48940 = state_46634__$1;
(statearr_46642_48940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46635 === (6))){
var state_46634__$1 = state_46634;
var statearr_46643_48941 = state_46634__$1;
(statearr_46643_48941[(2)] = null);

(statearr_46643_48941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46635 === (3))){
var inst_46631 = (state_46634[(2)]);
var inst_46632 = cljs.core.async.close_BANG_(out);
var state_46634__$1 = (function (){var statearr_46652 = state_46634;
(statearr_46652[(9)] = inst_46631);

return statearr_46652;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46634__$1,inst_46632);
} else {
if((state_val_46635 === (2))){
var state_46634__$1 = state_46634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46634__$1,(4),ch);
} else {
if((state_val_46635 === (11))){
var inst_46614 = (state_46634[(8)]);
var inst_46623 = (state_46634[(2)]);
var inst_46610 = inst_46614;
var state_46634__$1 = (function (){var statearr_46657 = state_46634;
(statearr_46657[(10)] = inst_46623);

(statearr_46657[(7)] = inst_46610);

return statearr_46657;
})();
var statearr_46662_48966 = state_46634__$1;
(statearr_46662_48966[(2)] = null);

(statearr_46662_48966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46635 === (9))){
var inst_46614 = (state_46634[(8)]);
var state_46634__$1 = state_46634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46634__$1,(11),out,inst_46614);
} else {
if((state_val_46635 === (5))){
var inst_46614 = (state_46634[(8)]);
var inst_46610 = (state_46634[(7)]);
var inst_46618 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46614,inst_46610);
var state_46634__$1 = state_46634;
if(inst_46618){
var statearr_46670_48967 = state_46634__$1;
(statearr_46670_48967[(1)] = (8));

} else {
var statearr_46671_48968 = state_46634__$1;
(statearr_46671_48968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46635 === (10))){
var inst_46626 = (state_46634[(2)]);
var state_46634__$1 = state_46634;
var statearr_46673_48969 = state_46634__$1;
(statearr_46673_48969[(2)] = inst_46626);

(statearr_46673_48969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46635 === (8))){
var inst_46610 = (state_46634[(7)]);
var tmp46668 = inst_46610;
var inst_46610__$1 = tmp46668;
var state_46634__$1 = (function (){var statearr_46674 = state_46634;
(statearr_46674[(7)] = inst_46610__$1);

return statearr_46674;
})();
var statearr_46675_48970 = state_46634__$1;
(statearr_46675_48970[(2)] = null);

(statearr_46675_48970[(1)] = (2));


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
var cljs$core$async$state_machine__43819__auto__ = null;
var cljs$core$async$state_machine__43819__auto____0 = (function (){
var statearr_46676 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46676[(0)] = cljs$core$async$state_machine__43819__auto__);

(statearr_46676[(1)] = (1));

return statearr_46676;
});
var cljs$core$async$state_machine__43819__auto____1 = (function (state_46634){
while(true){
var ret_value__43820__auto__ = (function (){try{while(true){
var result__43821__auto__ = switch__43818__auto__(state_46634);
if(cljs.core.keyword_identical_QMARK_(result__43821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43821__auto__;
}
break;
}
}catch (e46677){var ex__43822__auto__ = e46677;
var statearr_46678_48999 = state_46634;
(statearr_46678_48999[(2)] = ex__43822__auto__);


if(cljs.core.seq((state_46634[(4)]))){
var statearr_46679_49000 = state_46634;
(statearr_46679_49000[(1)] = cljs.core.first((state_46634[(4)])));

} else {
throw ex__43822__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49005 = state_46634;
state_46634 = G__49005;
continue;
} else {
return ret_value__43820__auto__;
}
break;
}
});
cljs$core$async$state_machine__43819__auto__ = function(state_46634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43819__auto____1.call(this,state_46634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43819__auto____0;
cljs$core$async$state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43819__auto____1;
return cljs$core$async$state_machine__43819__auto__;
})()
})();
var state__43981__auto__ = (function (){var statearr_46680 = f__43980__auto__();
(statearr_46680[(6)] = c__43979__auto___48933);

return statearr_46680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43981__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46683 = arguments.length;
switch (G__46683) {
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
var c__43979__auto___49011 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43980__auto__ = (function (){var switch__43818__auto__ = (function (state_46723){
var state_val_46724 = (state_46723[(1)]);
if((state_val_46724 === (7))){
var inst_46719 = (state_46723[(2)]);
var state_46723__$1 = state_46723;
var statearr_46726_49013 = state_46723__$1;
(statearr_46726_49013[(2)] = inst_46719);

(statearr_46726_49013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46724 === (1))){
var inst_46685 = (new Array(n));
var inst_46686 = inst_46685;
var inst_46687 = (0);
var state_46723__$1 = (function (){var statearr_46728 = state_46723;
(statearr_46728[(7)] = inst_46687);

(statearr_46728[(8)] = inst_46686);

return statearr_46728;
})();
var statearr_46729_49014 = state_46723__$1;
(statearr_46729_49014[(2)] = null);

(statearr_46729_49014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46724 === (4))){
var inst_46690 = (state_46723[(9)]);
var inst_46690__$1 = (state_46723[(2)]);
var inst_46692 = (inst_46690__$1 == null);
var inst_46693 = cljs.core.not(inst_46692);
var state_46723__$1 = (function (){var statearr_46731 = state_46723;
(statearr_46731[(9)] = inst_46690__$1);

return statearr_46731;
})();
if(inst_46693){
var statearr_46732_49016 = state_46723__$1;
(statearr_46732_49016[(1)] = (5));

} else {
var statearr_46733_49018 = state_46723__$1;
(statearr_46733_49018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46724 === (15))){
var inst_46713 = (state_46723[(2)]);
var state_46723__$1 = state_46723;
var statearr_46735_49019 = state_46723__$1;
(statearr_46735_49019[(2)] = inst_46713);

(statearr_46735_49019[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46724 === (13))){
var state_46723__$1 = state_46723;
var statearr_46736_49020 = state_46723__$1;
(statearr_46736_49020[(2)] = null);

(statearr_46736_49020[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46724 === (6))){
var inst_46687 = (state_46723[(7)]);
var inst_46709 = (inst_46687 > (0));
var state_46723__$1 = state_46723;
if(cljs.core.truth_(inst_46709)){
var statearr_46737_49024 = state_46723__$1;
(statearr_46737_49024[(1)] = (12));

} else {
var statearr_46738_49025 = state_46723__$1;
(statearr_46738_49025[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46724 === (3))){
var inst_46721 = (state_46723[(2)]);
var state_46723__$1 = state_46723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46723__$1,inst_46721);
} else {
if((state_val_46724 === (12))){
var inst_46686 = (state_46723[(8)]);
var inst_46711 = cljs.core.vec(inst_46686);
var state_46723__$1 = state_46723;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46723__$1,(15),out,inst_46711);
} else {
if((state_val_46724 === (2))){
var state_46723__$1 = state_46723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46723__$1,(4),ch);
} else {
if((state_val_46724 === (11))){
var inst_46703 = (state_46723[(2)]);
var inst_46704 = (new Array(n));
var inst_46686 = inst_46704;
var inst_46687 = (0);
var state_46723__$1 = (function (){var statearr_46740 = state_46723;
(statearr_46740[(7)] = inst_46687);

(statearr_46740[(8)] = inst_46686);

(statearr_46740[(10)] = inst_46703);

return statearr_46740;
})();
var statearr_46741_49028 = state_46723__$1;
(statearr_46741_49028[(2)] = null);

(statearr_46741_49028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46724 === (9))){
var inst_46686 = (state_46723[(8)]);
var inst_46701 = cljs.core.vec(inst_46686);
var state_46723__$1 = state_46723;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46723__$1,(11),out,inst_46701);
} else {
if((state_val_46724 === (5))){
var inst_46696 = (state_46723[(11)]);
var inst_46687 = (state_46723[(7)]);
var inst_46686 = (state_46723[(8)]);
var inst_46690 = (state_46723[(9)]);
var inst_46695 = (inst_46686[inst_46687] = inst_46690);
var inst_46696__$1 = (inst_46687 + (1));
var inst_46697 = (inst_46696__$1 < n);
var state_46723__$1 = (function (){var statearr_46743 = state_46723;
(statearr_46743[(11)] = inst_46696__$1);

(statearr_46743[(12)] = inst_46695);

return statearr_46743;
})();
if(cljs.core.truth_(inst_46697)){
var statearr_46750_49029 = state_46723__$1;
(statearr_46750_49029[(1)] = (8));

} else {
var statearr_46751_49030 = state_46723__$1;
(statearr_46751_49030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46724 === (14))){
var inst_46716 = (state_46723[(2)]);
var inst_46717 = cljs.core.async.close_BANG_(out);
var state_46723__$1 = (function (){var statearr_46753 = state_46723;
(statearr_46753[(13)] = inst_46716);

return statearr_46753;
})();
var statearr_46754_49031 = state_46723__$1;
(statearr_46754_49031[(2)] = inst_46717);

(statearr_46754_49031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46724 === (10))){
var inst_46707 = (state_46723[(2)]);
var state_46723__$1 = state_46723;
var statearr_46755_49032 = state_46723__$1;
(statearr_46755_49032[(2)] = inst_46707);

(statearr_46755_49032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46724 === (8))){
var inst_46696 = (state_46723[(11)]);
var inst_46686 = (state_46723[(8)]);
var tmp46752 = inst_46686;
var inst_46686__$1 = tmp46752;
var inst_46687 = inst_46696;
var state_46723__$1 = (function (){var statearr_46756 = state_46723;
(statearr_46756[(7)] = inst_46687);

(statearr_46756[(8)] = inst_46686__$1);

return statearr_46756;
})();
var statearr_46757_49036 = state_46723__$1;
(statearr_46757_49036[(2)] = null);

(statearr_46757_49036[(1)] = (2));


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
var cljs$core$async$state_machine__43819__auto__ = null;
var cljs$core$async$state_machine__43819__auto____0 = (function (){
var statearr_46758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46758[(0)] = cljs$core$async$state_machine__43819__auto__);

(statearr_46758[(1)] = (1));

return statearr_46758;
});
var cljs$core$async$state_machine__43819__auto____1 = (function (state_46723){
while(true){
var ret_value__43820__auto__ = (function (){try{while(true){
var result__43821__auto__ = switch__43818__auto__(state_46723);
if(cljs.core.keyword_identical_QMARK_(result__43821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43821__auto__;
}
break;
}
}catch (e46760){var ex__43822__auto__ = e46760;
var statearr_46762_49039 = state_46723;
(statearr_46762_49039[(2)] = ex__43822__auto__);


if(cljs.core.seq((state_46723[(4)]))){
var statearr_46763_49040 = state_46723;
(statearr_46763_49040[(1)] = cljs.core.first((state_46723[(4)])));

} else {
throw ex__43822__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49041 = state_46723;
state_46723 = G__49041;
continue;
} else {
return ret_value__43820__auto__;
}
break;
}
});
cljs$core$async$state_machine__43819__auto__ = function(state_46723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43819__auto____1.call(this,state_46723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43819__auto____0;
cljs$core$async$state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43819__auto____1;
return cljs$core$async$state_machine__43819__auto__;
})()
})();
var state__43981__auto__ = (function (){var statearr_46764 = f__43980__auto__();
(statearr_46764[(6)] = c__43979__auto___49011);

return statearr_46764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43981__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46772 = arguments.length;
switch (G__46772) {
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
var c__43979__auto___49046 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43980__auto__ = (function (){var switch__43818__auto__ = (function (state_46821){
var state_val_46822 = (state_46821[(1)]);
if((state_val_46822 === (7))){
var inst_46813 = (state_46821[(2)]);
var state_46821__$1 = state_46821;
var statearr_46823_49050 = state_46821__$1;
(statearr_46823_49050[(2)] = inst_46813);

(statearr_46823_49050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46822 === (1))){
var inst_46773 = [];
var inst_46774 = inst_46773;
var inst_46775 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46821__$1 = (function (){var statearr_46826 = state_46821;
(statearr_46826[(7)] = inst_46774);

(statearr_46826[(8)] = inst_46775);

return statearr_46826;
})();
var statearr_46829_49052 = state_46821__$1;
(statearr_46829_49052[(2)] = null);

(statearr_46829_49052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46822 === (4))){
var inst_46778 = (state_46821[(9)]);
var inst_46778__$1 = (state_46821[(2)]);
var inst_46779 = (inst_46778__$1 == null);
var inst_46780 = cljs.core.not(inst_46779);
var state_46821__$1 = (function (){var statearr_46831 = state_46821;
(statearr_46831[(9)] = inst_46778__$1);

return statearr_46831;
})();
if(inst_46780){
var statearr_46832_49055 = state_46821__$1;
(statearr_46832_49055[(1)] = (5));

} else {
var statearr_46833_49061 = state_46821__$1;
(statearr_46833_49061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46822 === (15))){
var inst_46807 = (state_46821[(2)]);
var state_46821__$1 = state_46821;
var statearr_46834_49062 = state_46821__$1;
(statearr_46834_49062[(2)] = inst_46807);

(statearr_46834_49062[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46822 === (13))){
var state_46821__$1 = state_46821;
var statearr_46835_49066 = state_46821__$1;
(statearr_46835_49066[(2)] = null);

(statearr_46835_49066[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46822 === (6))){
var inst_46774 = (state_46821[(7)]);
var inst_46802 = inst_46774.length;
var inst_46803 = (inst_46802 > (0));
var state_46821__$1 = state_46821;
if(cljs.core.truth_(inst_46803)){
var statearr_46836_49069 = state_46821__$1;
(statearr_46836_49069[(1)] = (12));

} else {
var statearr_46837_49071 = state_46821__$1;
(statearr_46837_49071[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46822 === (3))){
var inst_46815 = (state_46821[(2)]);
var state_46821__$1 = state_46821;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46821__$1,inst_46815);
} else {
if((state_val_46822 === (12))){
var inst_46774 = (state_46821[(7)]);
var inst_46805 = cljs.core.vec(inst_46774);
var state_46821__$1 = state_46821;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46821__$1,(15),out,inst_46805);
} else {
if((state_val_46822 === (2))){
var state_46821__$1 = state_46821;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46821__$1,(4),ch);
} else {
if((state_val_46822 === (11))){
var inst_46783 = (state_46821[(10)]);
var inst_46778 = (state_46821[(9)]);
var inst_46795 = (state_46821[(2)]);
var inst_46796 = [];
var inst_46797 = inst_46796.push(inst_46778);
var inst_46774 = inst_46796;
var inst_46775 = inst_46783;
var state_46821__$1 = (function (){var statearr_46844 = state_46821;
(statearr_46844[(7)] = inst_46774);

(statearr_46844[(11)] = inst_46797);

(statearr_46844[(12)] = inst_46795);

(statearr_46844[(8)] = inst_46775);

return statearr_46844;
})();
var statearr_46846_49079 = state_46821__$1;
(statearr_46846_49079[(2)] = null);

(statearr_46846_49079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46822 === (9))){
var inst_46774 = (state_46821[(7)]);
var inst_46793 = cljs.core.vec(inst_46774);
var state_46821__$1 = state_46821;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46821__$1,(11),out,inst_46793);
} else {
if((state_val_46822 === (5))){
var inst_46783 = (state_46821[(10)]);
var inst_46775 = (state_46821[(8)]);
var inst_46778 = (state_46821[(9)]);
var inst_46783__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46778) : f.call(null,inst_46778));
var inst_46786 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46783__$1,inst_46775);
var inst_46787 = cljs.core.keyword_identical_QMARK_(inst_46775,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46788 = ((inst_46786) || (inst_46787));
var state_46821__$1 = (function (){var statearr_46850 = state_46821;
(statearr_46850[(10)] = inst_46783__$1);

return statearr_46850;
})();
if(cljs.core.truth_(inst_46788)){
var statearr_46851_49084 = state_46821__$1;
(statearr_46851_49084[(1)] = (8));

} else {
var statearr_46852_49085 = state_46821__$1;
(statearr_46852_49085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46822 === (14))){
var inst_46810 = (state_46821[(2)]);
var inst_46811 = cljs.core.async.close_BANG_(out);
var state_46821__$1 = (function (){var statearr_46854 = state_46821;
(statearr_46854[(13)] = inst_46810);

return statearr_46854;
})();
var statearr_46855_49096 = state_46821__$1;
(statearr_46855_49096[(2)] = inst_46811);

(statearr_46855_49096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46822 === (10))){
var inst_46800 = (state_46821[(2)]);
var state_46821__$1 = state_46821;
var statearr_46856_49102 = state_46821__$1;
(statearr_46856_49102[(2)] = inst_46800);

(statearr_46856_49102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46822 === (8))){
var inst_46774 = (state_46821[(7)]);
var inst_46783 = (state_46821[(10)]);
var inst_46778 = (state_46821[(9)]);
var inst_46790 = inst_46774.push(inst_46778);
var tmp46853 = inst_46774;
var inst_46774__$1 = tmp46853;
var inst_46775 = inst_46783;
var state_46821__$1 = (function (){var statearr_46859 = state_46821;
(statearr_46859[(7)] = inst_46774__$1);

(statearr_46859[(8)] = inst_46775);

(statearr_46859[(14)] = inst_46790);

return statearr_46859;
})();
var statearr_46863_49103 = state_46821__$1;
(statearr_46863_49103[(2)] = null);

(statearr_46863_49103[(1)] = (2));


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
var cljs$core$async$state_machine__43819__auto__ = null;
var cljs$core$async$state_machine__43819__auto____0 = (function (){
var statearr_46868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46868[(0)] = cljs$core$async$state_machine__43819__auto__);

(statearr_46868[(1)] = (1));

return statearr_46868;
});
var cljs$core$async$state_machine__43819__auto____1 = (function (state_46821){
while(true){
var ret_value__43820__auto__ = (function (){try{while(true){
var result__43821__auto__ = switch__43818__auto__(state_46821);
if(cljs.core.keyword_identical_QMARK_(result__43821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43821__auto__;
}
break;
}
}catch (e46869){var ex__43822__auto__ = e46869;
var statearr_46870_49107 = state_46821;
(statearr_46870_49107[(2)] = ex__43822__auto__);


if(cljs.core.seq((state_46821[(4)]))){
var statearr_46871_49108 = state_46821;
(statearr_46871_49108[(1)] = cljs.core.first((state_46821[(4)])));

} else {
throw ex__43822__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49109 = state_46821;
state_46821 = G__49109;
continue;
} else {
return ret_value__43820__auto__;
}
break;
}
});
cljs$core$async$state_machine__43819__auto__ = function(state_46821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43819__auto____1.call(this,state_46821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43819__auto____0;
cljs$core$async$state_machine__43819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43819__auto____1;
return cljs$core$async$state_machine__43819__auto__;
})()
})();
var state__43981__auto__ = (function (){var statearr_46872 = f__43980__auto__();
(statearr_46872[(6)] = c__43979__auto___49046);

return statearr_46872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43981__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

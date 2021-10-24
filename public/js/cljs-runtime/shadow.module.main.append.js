
shadow.cljs.devtools.client.env.module_loaded('main');

try { tailwind.app.init(); } catch (e) { console.error("An error occurred when calling (tailwind.app/init)"); throw(e); }
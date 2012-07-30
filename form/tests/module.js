define([
'doh/main',
'require'
], function(doh, require){

	if(doh.isBrowser){
		doh.register("widgets.test", require.toUrl("./test.html"), 30000);
	}

});

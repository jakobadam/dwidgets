var profile = {
    basePath: '..',
    stripConsole: "all",
    resourceTags: {
		test: function(filename, mid){
			return /test/.test(mid);
		},
        amd: function(filename, mid){
            return /\.js$/.test(filename);
        }
    }
};
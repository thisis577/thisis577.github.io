var exec = require('child_process').exec;
hexo.on('new', function(data) {
    exec('hexo server'); // start preview server
	console.log('running hexo server....');
    setTimeout(function() {
    	// open preview url
        exec('start "Google Chrome" "http://localhost:4000"');
        // open with editor
        exec('start "subl.exe" '+data.path);
    }, 3000);
});
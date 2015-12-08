function FileUtils(){
	'use strict';
}


FileUtils.__proto__.getFileProperties = function(file){
'use strict';
var properties = {};
	console.log(file);
properties={
	name:file.name,
	lastModified:file.lastModified,
	lastModifiedDate:file.lastModifiedDate,	
	size:file.size,
	type:file.type
	
};

return properties;

}




FileUtils.__proto__.getAudioOrVideoDuration = function(file,callback){
'use strict';
 var targetElement
	, sourceElement
	, file_reader = new FileReader();
try{ 
 if( (file.type.split('/')[0]==='audio') ||  (file.type.split('/')[0]==='video') ){
	targetElement = document.createElement(file.type.split('/')[0]);
	targetElement.id = 'durationElement';

	targetElement.onloadedmetadata = function(){
		callback(null,targetElement.duration);
	}
	 targetElement.src = URL.createObjectURL(file);
	}else{
	throw 'Only audio or video files are allowed';
 }
}catch(err){
	callback(err,result);
}



 }


FileUtils.__proto__.getVideoSanpShot = function (file, options, callback) {
	'use strict';

	var canvas
		, canvasContext
		, img;

		if(!(options.canvas || options.image)){
			canvas = document.createElement('canvas');
				canvas.width = 400;
				canvas.height = 300;
			canvasContext = canvas.getContext('2d');
		}


	if(options.canvas){
		canvas = options.canvas;
		canvasContext = options.getContext('2d');
	}

  canvasContext.fillRect(0,0,canvas.width,canvas.height);
  canvasContext.drawImage(file,0,0,canvas.width,canvas.height);

    callback(canvas.toDataURL());

};

FileUtils.__proto__.downloadSanpshot = function(file){
	var a = document.createElement('a')
		, canvas;

	canvas = document.createElement('canvas');
	canvas.width = 400;
	canvas.height = 300;
	canvasContext = canvas.getContext('2d');

	canvasContext.fillRect(0,0,canvas.width,canvas.height);
	canvasContext.drawImage(file,0,0,canvas.width,canvas.height);
	a.href = canvas.toDataURL();
	a.download = true;
	a.click();
	delete a;

};


FileUtils.__proto__.playVideoOrAudioFile = function(file,videoElement){
  'use strict';

  if( (file.type.split('/')[0]==='audio') ||  (file.type.split('/')[0]==='video') ){
    videoElement.src = URL.createObjectURL(file);
  }else{
    throw 'only audio or video files allowed';
  }

}




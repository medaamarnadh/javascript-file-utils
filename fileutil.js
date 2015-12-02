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
	
} 

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




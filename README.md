# javascript-file-utils
This is a utility plugin which facilitates some utility function that are using in daily basis .
It has two utility functions now 

# 1) getFileProperties 
  Used to get the file properties which we have uploaded for example 
        FileUtils.getFileProperties(file)           //file is a file object 
        If we send like this then the function will give results as below 
          {
            name: "3720.mp3",
            lastModified: 1449051859199, 
            lastModifiedDate: Wed Dec 02 2015 15:54:19 GMT+0530 (IST), 
            size: 21064, type: "audio/mp3"
          }

# 2)getAudioOrVideoDuration
      Used to get duration of the file uploaded only audio and video files are supported for this function.
        Example 
          FileUtils.getAudioOrVideoDuration(f,function(err,result){
		        if(err){
			        console.log('Error:');
			        console.log(err);
		        }else{
			        console.log('Result:'+result);
		        }
	        });
	The out put in the console will be    Result:2.037551

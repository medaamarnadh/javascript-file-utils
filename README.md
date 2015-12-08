# javascript-file-utils
This is a utility plugin which facilitates some utility function that are using in daily basis .
It has two utility functions now
 
 
 To install this library from bower components .
  use bower install javascript-file-utils
  
  

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
          FileUtils.getAudioOrVideoDuration(file,function(err,result){               //file is a file object
		        if(err){
			        console.log('Error:');
			        console.log(err);
		        }else{
			        console.log('Result:'+result);
		        }
	        });
	The out put in the console will be    Result:2.037551
Take a look at the example which is given then you will understand it better

# 3)downloadSnapshot
			Used to download a snapshot from currently playing video .
				Example
					FileUtils.downloadSnapshot(videoElement)
					
# 4)getVideoSnapshot
      Used to take a snap shot in the form of base64 format . 
      You can directly put the result into image tag src attribute 
        Example
          var takeSnapShot = function(evt){
            'use strict';          
              var videoElement = document.getElementById('videoElement');
            FileUtils.getVideoSnapshot(videoElement,{},function(dataurl){
                  console.log(dataurl);
                  var image = document.getElementById('image');
                  console.log(dataurl);
                  image.src = dataurl;
              });
          
          };
          
# 5)playVideoFile 
      Used to play the uploaded video file. We just need to send two arguments .One is video file another one is video element.
        Example          
          var playVideoFile = function(evt){
	            'use strict';
                var videoElement = document.getElementById('videoElement');
                var videoFile = document.getElementById('files').files[0];
                console.log(document.getElementById('files').files[0]);
                FileUtils.playVideoOrAudioFile(videoFile,videoElement);
          };

Take a look at the index.html file for example.

Note:To make index.html file works fine .Please upload a video file as a first step.
          

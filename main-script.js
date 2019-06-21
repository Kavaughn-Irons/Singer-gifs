 var classCount = 0;  
    var theInput = [];
    var urlArray = [];

    function addButton(input){  
    urlArray = [];
    var APIKey = "CGXu8vlxJsQKdpB449EGKD7uIormcIan";
    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+input+"&api_key="+APIKey;
      
    // We then created an AJAX call
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {

           

            var gif = response.data;
            $(".imageContainer").empty();
            for(var i = 0; i < gif.length; i++){
            
                $(".imageContainer").append("<div style='float: left; margin-right: 5px;'><img isStill='true' class='image"+i+"' src='"+gif[i].images.fixed_height_still.url+"'><h4 style='float: none;'>Rating: "+gif[i].rating+"</h4></div>");
            
                $(".image"+i).on("click",function(){

                    var thisImage = this;
                    var classImage = this.getAttribute("class");
                    var classNum = classImage.substring(classImage.length-1,classImage.length);
                    
                    if(this.getAttribute("isStill") === "true"){
                    this.setAttribute("src",gif[classNum].images.fixed_height.url);
                    this.setAttribute("isStill","false");
                    } else if(this.getAttribute("isStill") === "false"){
                    this.setAttribute("src",gif[classNum].images.fixed_height_still.url);
                    this.setAttribute("isStill","true");
                    }
                                    
                });


            }

            
        });
    }
     
    function myTopic(){
        
        var topics = ["Michael Jackson","Chris Brown","Katy Perry","Taylor Swift","Adele","Whitney Houston","Prince","Mariah Carey"];
        
        for(var i = 0; i < topics.length; i++){
            var temp = topics[i];
            
            $(".buttonContainer").append("<button type='button' class='btn btn-primary "+classCount+"' style='margin-left: 5px; margin-bottom: 5px;'>"+topics[i]+"</button>");

            $("."+String(classCount)).on("click",function(){
                var theSinger = this.getAttribute("class")
                var getClassNum = theSinger.substring(theSinger.length-1,theSinger.length);
                var complete = topics[getClassNum];
                addButton(complete);
                                                           
            });
            classCount++;
        }
        
    }
      
    myTopic();
      
    $(".adder").on("click",function(){
         
        var temp = $("#gifName").val();
        
        $(".buttonContainer").append("<button type='button' class='btn btn-primary "+classCount+"' style='margin-left: 5px; margin-bottom: 5px;'>"+$("#gifName").val()+"</button>");

        $("."+String(classCount)).on("click",function(){addButton(temp);});
        classCount++;
        
        
    });
      
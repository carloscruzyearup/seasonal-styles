function StylePage(season) {
        switch(season){
        
            case "Spring":
                $("html").css("background-color","#2B7129");
                $("#wear").attr("src","images/spring-wear.jpg");
                $("#logo").attr("src","images/spring.gif");
                $("header h3").text("Spring time is a fun time!");
            break; 

            case "Summer":
                $("html").css("background-color","#EBA52B");
                $("#wear").attr("src","images/summer-wear.jpg");
                $("#logo").attr("src","images/summer.gif");
                $("header h3").text("Summer, gone before you know it.");
            break; 

            case "Fall":
                $("html").css("background-color","#A81124");
                $("#wear").attr("src","images/fall-wear.jpg");
                $("#logo").attr("src","images/fall.gif");
                $("header h3").text("Fall time is the time for scarves.");
            break; 

            case "Winter": 
                $("html").css("background-color","#005393");
                $("#wear").attr("src","images/winter-wear.jpg");
                $("#logo").attr("src","images/winter.gif");
                $("header h3").text("Winter, time to sit next to the fireplace.");
            break; 

			default:
                $("html").css("background-color","black");
                $("#wear").attr("src","images/hanger.jpg");
                $("#logo").attr("src","images/four-seasons.gif");
                $("header h3").text("Default is always the best outfit");
        }
}

$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element

		StylePage(season);
      
    });
});
            

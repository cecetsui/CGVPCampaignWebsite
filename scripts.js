$(document).ready(function(){ 
    var scroll_pos = 0;
    var animation_begin_pos = 0; //where to begin animation
    var animation_end_pos = 1000; //where to stop animation
    var beginning_color = new $.Color( 'rgb(255,255,255)' ); //Set up color
    var ending_color = new $.Color( 'rgb(230,230,250)' ); ;//what color it should end up being
    jQuery(document).scroll(function() {
        scroll_pos = $(this).scrollTop(); 
        if(scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos ) { 
            //calculate what color it should be based upon the scroll; The math involved is taken from StackOverflow
            var percentScrolled = scroll_pos / ( animation_end_pos - animation_begin_pos );
            var newRed = beginning_color.red() + ( ( ending_color.red() - beginning_color.red() ) * percentScrolled );
            var newGreen = beginning_color.green() + ( ( ending_color.green() - beginning_color.green() ) * percentScrolled );
            var newBlue = beginning_color.blue() + ( ( ending_color.blue() - beginning_color.blue() ) * percentScrolled );
            var newColor = new $.Color( newRed, newGreen, newBlue );
            //change to the new color
            jQuery('div').animate({ backgroundColor: newColor }, 0);
            //if at the end of the div
        } else if ( scroll_pos > animation_end_pos ) {
             jQuery('div').animate({ backgroundColor: ending_color }, 0);
             //if at the bginning of the div
        } else if ( scroll_pos < animation_begin_pos ) {
             jQuery('div').animate({ backgroundColor: beginning_color }, 0);
        } else { }
    });
});

jQuery(function () {
	//If we clicked on a link where the link located a point on the page
	jQuery('a[href^="#"]').click(function(event) {
	var id = $(this).attr("href");
	var offset = 20;
	var target = $(id).offset().top - offset;
	//then animate the scroll
	jQuery('html, body').animate({scrollTop:target}, 1500);
	});

});

//When the button under community is hit, show the detailed version of platform.
function showCommunity() {
	if (document.getElementById("com2").innerHTML == "Learn More!") {
	document.getElementById("com2").innerHTML = "Collapse";
	document.getElementById("com").innerHTML = "I would like to bridge the gap between the student community and SOAC (Student Organizations and Appointments Committee). Through raising awareness about SOAC appointments, policies, and procedures, I hope to: <li> * increase awareness of opportunities students have to be on on-campus boards</li> <li> * create more transparency of SOAC during the application and constitution process</li> <li> * establish a stronger relation between the student body and the organizations on campus</li> <br>In order to <b>accomplish</b> this, I seek to:<li> * improve upon the existing website to include a visual component to understand SOAC procedures and appointments</li><li> * create an online, interactive calendar to reflect upcoming appointments and upcoming events for organizations</li>";
	}
	else {
		document.getElementById("com").innerHTML = "";
		document.getElementById("com2").innerHTML = "Learn More!";
	}
};

//When the button under efficiency is hit, show the detailed version of platform.
function showEff() {
	if (document.getElementById("eff2").innerHTML == "Learn More!") {
	document.getElementById("eff2").innerHTML = "Collapse";
	document.getElementById("eff").innerHTML = "" +
	"The application and constitution process can be long and frustrating. In addition, overprogramming is a large issue on Wellesley's campus, but organizations seeking to collaborate have no real guided means of finding other organizations seeking to co-host. I want to make these processes more streamlined, which will in turn:" +
	"<br><li> * limit the amount of confusion in applying for constitution</li><li> * create a much more collaborative process between SOAC and the applicant</li>"+
	"<li> * raise more awareness about the \"Do Less\" campaign and hopefully focus on the issue of overprogramming</li><br>"+
	"In order to <b>accomplish</b> this, I seek to:<br>" +
	"<li> * create a visual, step by step, timeline for applicants to visually see what they need to submit and the deadlines for each submission</li>" +
	"<li> * create a committee focusing on the existing procedures, taking into account the pluses/deltas of the process before</li>"+
	"<li> * reach out to previous applicants to obtain feedback regarding the process</li>"+
	"<li> * create a visual online platform that allows organizations to find and seek collaborations for similar events</li>";
	}
	else {
		document.getElementById("eff").innerHTML = "";
		document.getElementById("eff2").innerHTML = "Learn More!";
	}
};

//When the button under clarity is hit, show the detailed version of platform.
function showClarity() {
	if (document.getElementById("clar2").innerHTML == "Learn More!") {
	document.getElementById("clar2").innerHTML = "Collapse";
	document.getElementById("clar").innerHTML = "" +
	"I hope to increase transparency between SOAC and the student body. Understanding the importance of the connection between SOAC and the student body, I desire clarity and transparency of SOAC so as to:" +
	"<li> * limit the amount of confusion during the process of constitution or appointments</li>"+
	"<li> * raise awareness about the \"Do Less\" campaign and the connection between the student body and organizations/appointments</li>"+
	"<li> * help students find their niche on campus</li><br>In order to <b>accomplish</b> this, I seek to:"+
	"<li> * improve upon the website so as to make SOAC more of a resource through improving upon/adding in monthly calendars, timelines, clear contact information, etc.</li>"+
	"<li> * create a more thorough visual/guideline of what SOAC looks for in applicants for organizations and appointments</li>"+
	"<li> * raise more awareness about the organizations and events on campus through statistics in order to show the needed movement towards \"Do Less\"</li>"+
	"<li> * increase in-person and social media presence of SOAC</li>";
	}
	else {
		document.getElementById("clar").innerHTML = "";
		document.getElementById("clar2").innerHTML = "Learn More!";
	}
};

//When the button under experience is hit, show the detailed version of platform.
function showExperience() {
	if (document.getElementById("exp2").innerHTML == "Learn More!") {
	document.getElementById("exp2").innerHTML = "Collapse";
	document.getElementById("exp").innerHTML = ""+
	"The CGVP's duties are inclusive of chairing SOAC and sitting on Senate Cabinet. I was a senator my first year, and have been with SOAC for two years. I served as the Senator General Member my first year on SOAC. I now currently serve as the Organizations Coordinator. As the SOAC Organizations Coordinator, I work alongside the CGVP, and am now familiar with all the procedures and processes of SOAC. I am also familar with organizations' feedback, history of constitution, and appointments procedures and policies. In addition to the duties of the Organizations Coordinator, I have also:"+
	"<li> * implemented Organizations of the Week so as to increase awareness about all the awesome organizations on campus</li>"+
	"<li> * implemented Monthly Calendars so as to increase awarness about the events held on campus</li>"+
	"<li> * reached out about what SOAC seeks during the process of constitution through workshops and individual meetings</li>"+
	"<li> * improved the process for signing-up for and coordinating the Organizations Fair with maps and table number delegation (limiting the stress needed to find a table and leaving unconstituted organizations room to participate [in the larger fair in the Fall])</li><br>"+
	"From performing the duties of the Organizations Coordinator, my two years on SOAC, and my year as a Senator, I find that I have gathered enough experience to understand and perform the duties of CGVP. In particular, this experience is valuable when:"+
	"<li> * creating a more streamlined process for appointments and constitution</li>"+
	"<li> * understanding the organizations' position when applying for constitution or fulfilling their two semester trial for constitution</li>"+
	"<li> * increasing transparency and clarity between SOAC and the student body</li>"+
	"<li> * understanding and knowing the contacts for the needs of organizations and appointments</li>"+
	"<li> * fully understanding the background of previous years' applications for constitution</li>"+
	"<li> * understanding the role of CGVP and how to best put forth my platform</li>"+
	"<br>I hope to use my experience as a means of performing my best if elected as CGVP.";
	}
	else {
		document.getElementById("exp").innerHTML = "";
		document.getElementById("exp2").innerHTML = "Learn More!";
	}
};


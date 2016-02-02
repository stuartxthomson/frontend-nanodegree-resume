/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
   "name" : "Stuart Thomson",
   "role" : "Web developer",
   "contacts" : {
     "mobile" : "780-999-3199",
     "email" : "stuartt@gmail.com",
     "github" : "stuartxthomson",
     "twitter" : "@stuartxthomson",
     "location" : "Edmonton, Alberta"
   },
   "welcomeMessage" : "Welcome to my wonderful resume!",
   "skills" : [
     "writing", "HTML5", "CSS", "Javacript (kinda)"
   ],
   "bioPic" : "images/stuart.jpg"
 }

 var education = {
   "schools" : [
     {
       "name" : "Algonquin College",
       "city" : "Ottawa, Ontario",
       "degree" : "Diploma",
       "majors" : "Journalism",
       "dates" : 2010,
       "url" : "http://www.algonquincollege.com"
     },
     {
       "name" : "Algonquin College",
       "city" : "Ottawa, Ontario",
       "degree" : "Diploma",
       "majors" : "Aboriginal Studies",
       "dates" : 2009,
       "url" : "http://www.algonquincollege.com"
     }
   ]
 }

 var work = {
   "jobs" : [
     {
       "employer" : "Edmonton Journal",
       "title" : "Website editor",
       "dates" : "October, 2011 - Present",
       "location" : "Edmonton, Alberta",
       "description" : "I've worked on web strategy, ebooks, mini-documentaries, and edited hundreds of stories in that time. I am currently responsible for the Edmonton Journal's website, the main twitter feed and the paper's Facebook page. A memo I wrote about getting the most out of Facebook was quickly adopted by Postmedia as the strategy for the whole chain of newspapers."
     },
     {
       "employer" : "Whitecourt Star",
       "title" : "Reporter/Editor",
       "dates" : "September, 2010 - October, 2011",
       "location" : "Whitecourt, Alberta",
       "description" : "Reported on and photographed the communities surrounding Whitecourt and Mayerthorpe."
     }
   ]
 }

 var projects = {
   "projects" : [
     {
       "title" : "Sample Project I",
       "dates" : "2014",
       "description" : "Here will go a description of the project.",
       "images" : [
         "images/photo1.jpg",
         "images/photo2.jpeg"
       ]
     }
   ]
 }

 $("#header").append(HTMLheaderName.replace("%data%", bio.name));

 if(bio.skills.length > 0) {

   $("#header").append(HTMLskillsStart);

   var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
   $("#skills").append(formattedSkill);

   formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
   $("#skills").append(formattedSkill);

   formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
   $("#skills").append(formattedSkill);

   formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
   $("#skills").append(formattedSkill);
 }

function displayWork() {

 for (job in work.jobs) {
   $("#workExperience").append(HTMLworkStart);

   var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
   var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
   var formattedEmployerTitle = formattedEmployer + formattedTitle;

   var formattedworkDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);

   var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

   var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

   $(".work-entry:last").append(formattedEmployerTitle);
   $(".work-entry:last").append(formattedworkDate);
   $(".work-entry:last").append(formattedworkLocation);
   $(".work-entry:last").append(formattedworkDescription);
 }

}

displayWork();

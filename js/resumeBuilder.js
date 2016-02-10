/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Stuart Thomson",
    "role": "Web developer",
    "contacts": {
        "mobile": "780-999-3199",
        "email": "stuartt@gmail.com",
        "github": "stuartxthomson",
        "twitter": "@stuartxthomson",
        "location": "Edmonton, Alberta"
    },
    "welcomeMessage": "Welcome to my wonderful resume!",
    "skills": ["Writing", "HTML5", "CSS", "Javacript (kinda)"],
    "biopic": "images/stuart.jpg"
};
var education = {
    "schools": [{
        "name": "Algonquin College",
        "location": "Ottawa, Ontario",
        "degree": "Diploma",
        "majors": ["Journalism"],
        "dates": "2010",
        "url": "http://www.algonquincollege.com"
    }, {
        "name": "Algonquin College",
        "location": "Ottawa, Ontario",
        "degree": "Diploma",
        "majors": ["Aboriginal Studies"],
        "dates": "2009",
        "url": "http://www.algonquincollege.com"
    }],
    "onlineCourses": [{
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "date": "2015-16",
      "url": "http://www.udacity.com"
    }]
};
var work = {
    "jobs": [{
        "employer": "Edmonton Journal",
        "title": "Website editor",
        "dates": "October, 2011 - Present",
        "location": "Edmonton, Alberta",
        "description": "I've worked on web strategy, ebooks, mini-documentaries, and edited hundreds of stories. I am currently responsible for the Edmonton Journal's website, the main twitter feed and the paper's Facebook page."
    }, {
        "employer": "Whitecourt Star",
        "title": "Reporter/Editor",
        "dates": "September, 2010 - October, 2011",
        "location": "Whitecourt, Alberta",
        "description": "Reported on and photographed the communities surrounding Whitecourt and Mayerthorpe."
    }]
};
var projects = {
    "projects": [{
        "title": "Sample Project I",
        "dates": "2014",
        "description": "Here will go a description of the project."
            //  "images" : [
            //    "images/photo1.jpg",
            //    "images/photo2.jpeg"
            //  ]
    }]
};

bio.display = function() {
  $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
  $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
  $("#header").append(HTMLbiopic.replace("%data%", bio.biopic));
  $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    if (bio.skills.length > 0) {
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
    var formattedContacts = [];
    formattedContacts.push(HTMLemail.replace("%data%", bio.contacts.email));
    // formattedContacts.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    formattedContacts.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContacts.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    formattedContacts.push(HTMLlocation.replace("%data%", bio.contacts.location));
    for (var item in formattedContacts) {
        $("#topContacts").append(formattedContacts[item]);
        $("#footerContacts").append(formattedContacts[item]);
    }
};
bio.display();
work.display = function() {
    for (var job in work.jobs) {
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
};
work.display();
projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedprojectTitle);
        var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedprojectDates);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedprojectDescription);
        // if (projects.projects[project].images.length > 0) {
        //   for (image in projects.projects[project].images) {
        //     var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        //     $(".project-entry:last").append(formattedprojectImage);
        //   }
        // }
    }
};
projects.display();
education.display = function() {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedschoolCity = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        // var formattedschoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

        $(".education-entry:last").append(formattedschoolName + formattedschoolDegree);
        $(".education-entry:last").append(formattedschoolDates);
        $(".education-entry:last").append(formattedschoolCity);

        if (education.schools[school].majors.length > 0) {
          for (var major in education.schools[school].majors){
            var formattedschoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
          }
          $(".education-entry:last").append(formattedschoolMajors);
        }

        /*    $(".education-entry:last").append(formattedschoolDegree); */

    }
    for (var course in education.onlineCourses) {
      $("#education").append(HTMLonlineClasses);
      $("#education").append(HTMLschoolStart);
      var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title)
      var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school)
      var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date)
      var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url)

      // $(".education-entry:last").append(HTMLonlineClasses);
      $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);
      // $(".education-entry:last").append(formattedonlineSchool);
      $(".education-entry:last").append(formattedonlineDates);
      $(".education-entry:last").append(formattedonlineURL);

    }

};

// var HTMLonlineClasses = '<h3>Online Classes</h3>';
// var HTMLonlineTitle = '<a href="#">%data%';
// var HTMLonlineSchool = ' - %data%</a>';
// var HTMLonlineDates = '<div class="date-text">%data%</div>';
// var HTMLonlineURL = '<br><a href="#">%data%</a>';

education.display();
$("#mapDiv").append(googleMap);

function inName() {
    var name = window.name;
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
var name = $("#name").text();
$('#main').append(internationalizeButton);

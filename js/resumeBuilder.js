//----------------------------------- JSON -------------------------------------------------
var bio = {
  "name": "Désirée Melusine",
  "role": " - Junior Front-End Developer -",
  "welcomeMessage": "I'm a self-learner and eternal curious! If there is a need, an idea, an aim, a passion for the work and the right mindset, the challenges will be defeat by our creative minds and they will become our tools to succeed.",
  "biopic": "images/me.jpg",
  "contacts": {
    "mobile": "351 938897705",
    "email": "demelusine@gmail.com",
    "location": "Lisboa",
    "github": "https://github.com/Desireemelusine",
    "linkedin": "https://www.linkedin.com/in/desiree-melusine"
  },
  "skills": ["HTML5", "CSS", "JavaScript", "Bootstrap", "jQuery", "JSON", "WebResponsive", "Illustrator", "Photoshop", "Indesign", "3Dmax", "Solidworks", "Português", "English", "French", "Spanish"]
}

var education = {
  "schools": [
    {
      "degree": "Industrial Design - Product Design",
      "year": 2008,
      "name": "Belas Artes",
      "major": ["Bachelor"],
      "location": "São Paulo, Brasil"
    },
    {
      "degree": "Business Development and Managment",
      "year": 2007,
      "name": "Sebrae",
      "major": ["Advanced Studies"],
      "location": "São Paulo, Brasil"
    },
    {
      "degree": "Executive Coaching",
      "year": 2017,
      "name": "Cegoc",
      "major": ["Advanced Certification accredited by IFC ( International Coach Federation )"],
      "location": "Lisboa, Portugal"
    }
  ],
  "onlineCourses": [
    {
      "title": "Nanodegree in Front-End Developer",
      "dates": "2018 | Nanodegree",
      "school": "Udacity",
      "url": "https://eu.udacity.com/"
    }
 ]
}

var work = {
  "jobs": [
    {
      "employer": "Product Design",
      "title": "Packaging Design for a line of chocolate products, produced in Europe but focused on the Brazilian wholesale market",
      "location": "Lisboa",
      "dates":"2017-2018",
      "description":"Market study and product lifecycle, logo and brand development, packaging adequacy and labeling based on policies, laws, and requirements.",
      "images": "images/fry.jpg"
    },
    {
      "employer": "Business Development and Product Design",
      "title": "Business Development of an aesthetic space in Lisbon, exclusively focused on the international market with a line of private label cosmetic products",
      "location": "Lisboa",
      "dates":"2012-2017",
      "description":"The main role was to gain experience in company management, develop experience in the human resources sector, customer relationship x service x employee, work leadership, high performance, training and the whole human relationship (people care) to raise the company's results through a motivational, sustainable and inspiring environment.",
      "images": "images/fry.jpg"
    },
    {
      "employer": "Business Development and Product Development",
      "title": "Responsable for the business development of 27 Gourmet Products for the Portuguese Market and also the product development, brand, packaging and logistics",
      "location": "Lisboa",
      "dates":"2012-2017",
      "description": "Logo and Brand Development | Market research, product development based on market, policies, laws, and requirements.  Product Family Development | Tea, Coffee, Chocolate, and Dragges (27 products).  Packaging and Catalog Development | Prototyping, labeling, catalog, promotional stand for stores, samples, product photo sessions direction, website development and e-commerce.  Business Manager and Implementation of the Product in the Portuguese Market | Management of national and international suppliers, logistics management, stock control,inventory, Online sales management, production control - monitoring - parcel delivery company within more than 60 points of sale in Portugal",
      "images": "images/fry.jpg"
    },
    {
      "employer": "Product Development and Production",
      "title": "Product design and development in the following areas: Fashion|Swimwear, Home Deco|Ceramic, Jewelry|Silver Jewelry",
      "location": "São Paulo",
      "dates":"2002-2011",
      "description": "Product | Market research, collection development, product lifecycle testing, catalog and merchandising material. Management | Suppliers, purchasing, logistics, monitoring and production Control",
      "images": "images/fry.jpg"
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "Personal Portfolio",
      "dates": "05/2018",
      "description": "I developed a personal portfolio page from the ground using:HTML - CSS - Bootstrap. The page is fully responsive and works on mobile, tablet and desktop browsers: @media screen and (max-width: 500px)| @media screen and (min-width: 501px) | @media screen and (min-width: 1000px)",
      "link": "https://desireemelusine.github.io/test_webportfolio/",
      "image": "images/projectOne.jpg"
    }
  ]
}
//----------------------------------- END JSON -------------------------------------------------

/* I decided to present in both ways just as a remind of the different construction.Nevertheless the .forEach is in my opnion the correct one. Read text above.
forEach or for loops are preferred over for-in loops when iterating over an array.for-in loops are used to loop over keys in an object.
This can be error prone because for-in does not loop from 0 to length - 1 but over all the present keys in the object and its prototype chain.
If possible, organize data so it is not necessary to iterate over objects.
If that isn't possible, wrap the content of the for-in loop in a conditional statement to prevent it from from iterating over the prototype chain.
*/

//bio
bio.display = function(){
  var formatted_name = HTMLheaderName.replace("%data%", bio.name);
  var formatted_role = HTMLheaderRole.replace("%data%", bio.role);
  var formatted_message = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
  var formatted_biopic = HTMLbioPic.replace("%data%",bio.biopic);
  $("#header").prepend(formatted_biopic).prepend(formatted_message).prepend(formatted_role).prepend(formatted_name);
  var formatted_contacts = HTMLcontactGeneric.replace("%data%", bio.contacts);
  var formatted_mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formatted_email = HTMLemail.replace("%data%", bio.contacts.email);
  var formatted_location = HTMLlocation.replace("%data%", bio.contacts.location);
  var formatted_linkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
  var formatted_github = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#footerContacts").append(formatted_mobile).append(formatted_email).append(formatted_location).append(formatted_linkedin).append(formatted_github);

  if (bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    var formatted_skills = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formatted_skills);
    var formatted_skills = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formatted_skills);
    var formatted_skills = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formatted_skills);
    var formatted_skills = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formatted_skills);
    var formatted_skills = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formatted_skills);
    var formatted_skills = HTMLskills.replace("%data%", bio.skills[5]);
    $("#skills").append(formatted_skills);
    var formatted_skills = HTMLskills.replace("%data%", bio.skills[6]);
    $("#skills").append(formatted_skills);
    var formatted_skills = HTMLskills.replace("%data%", bio.skills[7]);
    $("#skills").append(formatted_skills);
    var formatted_skills = HTMLskills.replace("%data%", bio.skills[8]);
    $("#skills").append(formatted_skills);
    var formatted_skills = HTMLskills.replace("%data%", bio.skills[09]);
    $("#skills").append(formatted_skills);
    var formatted_skills = HTMLskills.replace("%data%", bio.skills[10]);
    $("#skills").append(formatted_skills);
    var formatted_skills = HTMLskills.replace("%data%", bio.skills[11]);
    $("#skills").append(formatted_skills);
    var formatted_skills = HTMLskills.replace("%data%", bio.skills[12]);
    $("#skills").append(formatted_skills);
    var formatted_skills = HTMLskills.replace("%data%", bio.skills[13]);
    $("#skills").append(formatted_skills);
    var formatted_skills = HTMLskills.replace("%data%", bio.skills[14]);
    $("#skills").append(formatted_skills);
    var formatted_skills = HTMLskills.replace("%data%", bio.skills[15]);
    $("#skills").append(formatted_skills);
  }
}
bio.display();

// work
work.display = function(){
  work.jobs.forEach(function(indexjob){
    $("#workExperience").append(HTMLworkStart);
    var formatted_workEmployer = HTMLworkEmployer.replace("%data%", indexjob.employer);
    var formatted_workTitle = HTMLworkTitle.replace("%data%", indexjob.title);
    var formatted_employerTitle =  formatted_workEmployer + formatted_workTitle;
    $(".work-entry:last").append(formatted_employerTitle);
    var formatted_workDate =  HTMLworkDates.replace("%data%",indexjob.dates);
    $(".work-entry:last").append(formatted_workDate);
    var formatted_workLocation = HTMLworkLocation.replace("%data%", indexjob.location);
    $(".work-entry:last").append(formatted_workLocation);
    var formatted_workDescription = HTMLworkDescription.replace("%data%", indexjob.description);
    $(".work-entry:last").append(formatted_workDescription);
    })
}
work.display();

//projects
projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formatted_projTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formatted_projTitle);
    var formatted_projDates = HTMLprojectDates.replace ("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formatted_projDates);
    var formatted_projDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formatted_projDescription);
    var formatted_projLink =HTMLprojectLink.replace("%data%", projects.projects[project].link);
    $(".project-entry:last").append(formatted_projLink);
    var formatted_projImage =HTMLprojectImage.replace("%data%", projects.projects[project].image);
    $(".project-entry:last").append(formatted_projImage);
  }
}
projects.display();

// education
education.display = function(){
  education.schools.forEach(function(indexEdu){
    $("#education").append(HTMLschoolStart);
    var formatted_degree = HTMLschoolDegree.replace("%data%", indexEdu.degree);
    $(".education-entry:last").append(formatted_degree);
    var formatted_eduName = HTMLschoolName.replace("%data%", indexEdu.name);
    $(".education-entry:last").append(formatted_eduName);
    var formatted_major = HTMLschoolMajor.replace("%data%", indexEdu.major);
    $(".education-entry:last").append(formatted_major);
    var formatted_eduDates = HTMLschoolDates.replace("%data%", indexEdu.year);
    $(".education-entry:last").append(formatted_eduDates);
    var formatted_eduLocation = HTMLschoolLocation.replace("%data%", indexEdu.location);
    $(".education-entry:last").append(formatted_eduLocation);
  })
  education.onlineCourses.forEach(function(indexOnedu){
    $("#education").append(HTMLonlineClasses);
    var formatted_onTitle = HTMLonlineTitle.replace("%data%", indexOnedu.title);
    $("#education").append(formatted_onTitle);
    var formatted_onSchool = HTMLonlineSchool.replace("%data%", indexOnedu.school);
    $("#education").append(formatted_onSchool);
    var formatted_onDate = HTMLonlineDates.replace("%data%", indexOnedu.dates);
    $("#education").append(formatted_onDate);
    var formatted_onUrl = HTMLonlineURL.replace("%data%", indexOnedu.url);
    $("#education").append(formatted_onUrl);
  })
}
education.display();


$("#mapDiv").append(googleMap);

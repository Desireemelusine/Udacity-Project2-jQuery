var bio = {
  "name": "Désirée Melusine",
  "role": "Junior Front-End Developer",
  "welcomeMessage": "I'm a self-learner and eternal curious! If there is a need, an idea, an aim, a passion for the work and the right mindset, the challenges will be defeat by our creative minds and they will become our tools to succeed.",
  "contacts": {
    "mobile": "351 938897705",
    "email": "demelusine@gmail.com",
    "location": "Portugal",
    "github": "https://github.com/Desireemelusine",
    "linkedin": "https://www.linkedin.com/in/desiree-melusine"
  },
  "skills": ["HTML5", "CSS", "JavaScript", "Bootstrap", "jQuery", "JSON", "Git", "gitHub"]
}


var education = {
  "schools": [
    {
      "degree": "Executive Coaching",
      "year": 2017,
      "name": "Cegoc - Lisboa|Portugal",
      "Major": ["Advanced Certification accredited by IFC ( International Coach Federation )"],
      "url": "https://www.cegoc.pt/curso-formacao/escola-coaching-executivo/"
    },
    {
      "degree": "Industrial Design - Product Design",
      "year": 2008,
      "name": "Belas Artes - São Paulo|Brasil",
      "Major": ["Bachelor"],
      "url": "http://www.belasartes.br/site/"
    },
    {
      "degree": "Business Development and Managment",
      "year": 2007,
      "name": "Sebrae - São Paulo|Brasil",
      "Major": ["Advanced Studies"],
      "url": "http://www.sebrae.com.br"
    }
  ],
  "OnlineCourses": [
    {
      "title": "Nanodegree in Front-End Developer",
      "dates": 2018,
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
      "location": "Portugal",
      "dates":"2017-2018",
      "description":"Market study and product lifecycle, logo and brand development, packaging adequacy and labeling based on policies, laws, and requirements.",
      "images": "images/fry.jpg"
    },
    {
      "employer": "Business Development and Product Design",
      "title": "Business Development of an aesthetic space in Lisbon, exclusively focused on the international market with a line of private label cosmetic products",
      "location": "Portugal",
      "dates":"2012-2017",
      "description":"The main role was to gain experience in company management, develop experience in the human resources sector, customer relationship x service x employee, work leadership, high performance, training and the whole human relationship (people care) to raise the company's results through a motivational, sustainable and inspiring environment.",
      "images": "images/fry.jpg"
    },
    {
      "employer": "Business Development and Product Development",
      "title": "Responsable for the business development of 27 Gourmet Products for the Portuguese Market and also the product development, brand, packaging and logistics",
      "location": "Portugal",
      "dates":"2012-2017",
      "description": "Logo and Brand Development | Market research, product development based on market, policies, laws, and requirements.  Product Family Development | Tea, Coffee, Chocolate, and Dragges (27 products).  Packaging and Catalog Development | Prototyping, labeling, catalog, promotional stand for stores, samples, product photo sessions direction, website development and e-commerce.  Business Manager and Implementation of the Product in the Portuguese Market | Management of national and international suppliers, logistics management, stock control,inventory, Online sales management, production control - monitoring - parcel delivery company within more than 60 points of sale in Portugal",
      "images": "images/fry.jpg"
    },
    {
      "employer": "Product Development and Production",
      "title": "Product design and development in the following areas: Fashion|Swimwear, Home Deco|Ceramic, Jewelry|Silver Jewelry",
      "location": "Brazil",
      "dates":"2002-2011",
      "description": "Product | Market research, collection development, product lifecycle testing, catalog and merchandising material. Management | Suppliers, purchasing, logistics, monitoring and production Control",
      "images": "images/fry.jpg"
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "Project1",
      "dates": "03/2018",
      "description": "This is a project related to HTML and CSS.",
      "images": "images/fry.jpg"
    }
  ]
}

var formatted_name = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formatted_name);

// bio.skills
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
  var formatted_skills = HTMLskills.replace("%data%", bio.skills[6]);
  $("#skills").append(formatted_skills);
  var formatted_skills = HTMLskills.replace("%data%", bio.skills[7]);
  $("#skills").append(formatted_skills);
  var formatted_skills = HTMLskills.replace("%data%", bio.skills[8]);
  $("#skills").append(formatted_skills);
}
// work
function displayWork(){
  for(indexjob in work.jobs) {
  $("#workExperience").append(HTMLworkStart);
  var formatted_workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[indexjob].employer);
  var formatted_workTitle = HTMLworkTitle.replace("%data", work.jobs[indexjob].title);
  var formatted_employerTitle =  formatted_workEmployer + formatted_workTitle;
  $(".work-entry:last").append(formatted_employerTitle);
  var formatted_workDate =  HTMLworkDates.replace("%data%",work.jobs[indexjob].dates);
  // var formatted_workLocation = HTMLworkLocation.replace("%data%", work.jobs[indexjob].location);
  $(".work-entry:last").append(formatted_workDate);
  var formatted_workDescription = HTMLworkDescription.replace("%data%", work.jobs[indexjob].description);
  $(".work-entry:last").append(formatted_workDescription);
  }
}
displayWork();


/*function inName(splitName){
  var splitName = formatted_name.split(" ");
  console.log(splitName);
  splitName[0] = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1).toLowerCase();
  splitName[1] = splitName[1].toUpperCase();
  return splitName[0] + " " + splitName[1];
}*


/*function inName(name){
  name = name.split(" ");
  console.log(name);
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  name[1] = name[1].toUpperCase();
  return name[0] + " " + name[1];
}*/
// $("#main").append(internationalizeButton);

projects.display = function() {
for (project in projects.projects) {
  $("#projects").append(HTMLprojectStart);
  var formatted_projTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
  $(".project-entry:last").append(formatted_projTitle);
  var formatted_projDates = HTMLprojectDates.replace ("%data%", projects.projects[project].dates);
  $(".project-entry:last").append(formatted_projDates);
  var formatted_projDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
  $(".project-entry:last").append(formatted_projDescription);
  var formatted_projImage =HTMLprojectImage.replace("%data%", projects.projects[project].image);
  $(".project-entry:last").append(formatted_projImage);
}

}
projects.display();

$("#mapDiv").append(googleMap);

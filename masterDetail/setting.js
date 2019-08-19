var FHIRrootURL = "http://hapi.fhir.org/baseR4";
// Org 135706

// "http://hapi.fhir.org/baseDstu3"

// "http://hapi.fhir.org";

/* 
post Patioent, Observation....
 http://hapi.fhir.org/baseDstu3/Patient
 http://hapi.fhir.org/baseR4/Observation/137017

get org 1856069  patient 2025774
http://hapi.fhir.org/baseDstu3/Patient/2025774

?organization=1856069


http://hapi.fhir.org/baseDstu3/Patient?organization=1856069

get patient 1856173 observations
   http://hapi.fhir.org/baseDstu3/Observation?subject=1856173
  
取得組織所屬病人
http://hapi.fhir.org/baseDstu3/Patient?organization=1905582

取得附屬組織
http://hapi.fhir.org/baseDstu3/Organization?partof=1905554


*/
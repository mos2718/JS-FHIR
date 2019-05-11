﻿var a= 
{
    "resourceType": "Observation",
   
   
  "status": "entered-in-error",
  "category": [
    {
        "coding": [
          {
              "system": "http://terminology.hl7.org/CodeSystem/observation-category",
              "code": "vital-signs",
              "display": "Vital Signs"
          }
        ]
    }
  ],
  "code": {
      "coding": [
        {
            "system": "http://acme.lab",
            "code": "BT",
            "display": "Body temperature"
        },
        {
            "system": "http://loinc.org",
            "code": "8310-5",
            "display": "Body temperature"
        },
        {
            "system": "http://loinc.org",
            "code": "8331-1",
            "display": "Oral temperature"
        },
        {
            "system": "http://snomed.info/sct",
            "code": "56342008",
            "display": "Temperature taking"
        }
      ],
      "text": "Temperature"
  },
  "subject": {
      "reference": "Patient/1856173",
   },
  "issued": "2018-04-04T13:27:00+01:00",
 
  "valueQuantity": {
      "value": 39,
      "unit": "degrees C",
      "system": "http://unitsofmeasure.org",
      "code": "Cel"
  },
  "interpretation": [
    {
        "coding": [
          {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
              "code": "H"
          }
        ]
    }
  ],
  "bodySite": {
      "coding": [
        {
            "system": "http://snomed.info/sct",
            "code": "74262004",
            "display": "Oral cavity"
        }
      ]
  },
  "method": {
      "coding": [
        {
            "system": "http://snomed.info/sct",
            "code": "89003005",
            "display": "Oral temperature taking"
        }
      ]
  },
  "referenceRange": [
    {
        "high": {
            "value": 38.2,
            "unit": "degrees C"
        }
    }
  ]
}
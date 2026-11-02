// Recovered application schema and API field mapping from the backed-up application bundle.
export const applicationDefaults = {
  "positionAppliedFor": "Domiciliary Care Assistant",
  "personal": {
    "title": "",
    "forenames": "",
    "surname": "",
    "address": "",
    "postcode": "",
    "email": "",
    "niNumber": "",
    "homePhone": "",
    "workPhone": "",
    "mobilePhone": "",
    "drivingLicence": "no"
  },
  "education": {
    "schoolsAttended": "",
    "schoolQualifications": "",
    "collegeUniversity": "",
    "collegeQualifications": "",
    "otherTraining": ""
  },
  "drivingLicence": {
    "currentDrivingLicence": "no",
    "licenceGroups": "",
    "licenceExpiryDate": "",
    "licenceEndorsements": ""
  },
  "professional": {
    "ukWorkRestrictions": "no",
    "ukWorkRestrictionsDetails": "",
    "nursingRegistrationNumber": "",
    "nisccCertificateNumber": "",
    "cannotWorkRegulatedActivity": ""
  },
  "otherEmployment": "",
  "leisureInterests": "",
  "generalComments": "",
  "employmentHistory": [
    {
      "fromDate": "",
      "toDate": "",
      "employerName": "",
      "employerAddress": "",
      "jobTitle": "",
      "duties": "",
      "salary": "",
      "reasonForLeaving": ""
    }
  ],
  "employmentGaps": [
    {
      "fromDate": "",
      "toDate": "",
      "reason": "",
      "details": ""
    }
  ],
  "references": {
    "reference1": {
      "name": "",
      "position": "",
      "organisation": "",
      "email": "",
      "address": "",
      "postcode": "",
      "telephone": "",
      "may_contact_before_interview": false
    },
    "reference2": {
      "name": "",
      "position": "",
      "organisation": "",
      "email": "",
      "address": "",
      "postcode": "",
      "telephone": "",
      "may_contact_before_interview": false
    }
  },
  "criminalRecords": {
    "authoriseCriminalRecordsCheck": "yes",
    "convictedOrCautioned": "no",
    "convictionDetails": ""
  },
  "declaration": {
    "confirmed": false,
    "fullName": "",
    "signedOn": ""
  }
};

export type ApplicationValues = typeof applicationDefaults;

const yes = (value: string) => value === "yes";

export function toApplicationData(values: ApplicationValues){return{positionAppliedFor:values.positionAppliedFor,personal_details:{title:values.personal.title,forenames:values.personal.forenames,surname:values.personal.surname,address:values.personal.address,postcode:values.personal.postcode,email:values.personal.email,ni_number:values.personal.niNumber,home_phone:values.personal.homePhone,work_phone:values.personal.workPhone,phone:values.personal.mobilePhone,driving_licence:yes(values.drivingLicence.currentDrivingLicence)},education:{schools_attended:values.education.schoolsAttended,school_qualifications:values.education.schoolQualifications,college_university:values.education.collegeUniversity,college_qualifications:values.education.collegeQualifications,other_training:values.education.otherTraining},driving_licence:{current_driving_licence:yes(values.drivingLicence.currentDrivingLicence),licence_groups:values.drivingLicence.licenceGroups,licence_expiry_date:values.drivingLicence.licenceExpiryDate,licence_endorsements:values.drivingLicence.licenceEndorsements},professional:{uk_work_restrictions:yes(values.professional.ukWorkRestrictions),uk_work_restrictions_details:values.professional.ukWorkRestrictionsDetails,nursing_registration_number:values.professional.nursingRegistrationNumber,niscc_certificate_number:values.professional.nisccCertificateNumber,cannot_work_regulated_activity:values.professional.cannotWorkRegulatedActivity},other_employment:values.otherEmployment,leisure_interests:values.leisureInterests,employment_history:values.employmentHistory,employment_gaps:values.employmentGaps.map(values=>({fromDate:values.fromDate,toDate:values.toDate,reason:values.reason||values.details||""})),references:{reference1:values.references.reference1,reference2:values.references.reference2},criminal_records:{authorise_criminal_records_check:yes(values.criminalRecords.authoriseCriminalRecordsCheck),convicted_or_cautioned:yes(values.criminalRecords.convictedOrCautioned),conviction_details:values.criminalRecords.convictionDetails},declaration:{confirmed:values.declaration.confirmed,full_name:values.declaration.fullName,signed_on:values.declaration.signedOn}}}

export const applicationFieldAliases: Record<string, string> = {
  "positionAppliedFor": "positionAppliedFor",
  "address": "personal.address",
  "postcode": "personal.postcode",
  "niNumber": "personal.niNumber",
  "title": "personal.title",
  "forenames": "personal.forenames",
  "surname": "personal.surname",
  "emailAddress": "personal.email",
  "homePhone": "personal.homePhone",
  "workPhone": "personal.workPhone",
  "mobilePhone": "personal.mobilePhone",
  "schoolsAttended": "education.schoolsAttended",
  "schoolQualifications": "education.schoolQualifications",
  "collegeUniversity": "education.collegeUniversity",
  "collegeQualifications": "education.collegeQualifications",
  "otherTraining": "education.otherTraining",
  "currentDrivingLicence": "drivingLicence.currentDrivingLicence",
  "licenceGroups": "drivingLicence.licenceGroups",
  "licenceExpiryDate": "drivingLicence.licenceExpiryDate",
  "licenceEndorsements": "drivingLicence.licenceEndorsements",
  "ukWorkRestrictions": "professional.ukWorkRestrictions",
  "ukWorkRestrictionsDetails": "professional.ukWorkRestrictionsDetails",
  "nursingRegistrationNumber": "professional.nursingRegistrationNumber",
  "nisccCertificateNumber": "professional.nisccCertificateNumber",
  "cannotWorkRegulatedActivity": "professional.cannotWorkRegulatedActivity",
  "otherEmployment": "otherEmployment",
  "leisureInterests": "leisureInterests",
  "generalComments": "generalComments",
  "authoriseCriminalRecordsCheck": "criminalRecords.authoriseCriminalRecordsCheck",
  "convictedOrCautioned": "criminalRecords.convictedOrCautioned",
  "convictionDetails": "criminalRecords.convictionDetails",
  "declarationConfirmed": "declaration.confirmed",
  "photograph": "photograph"
};

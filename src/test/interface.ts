export enum ClaimType {
  MEDICAL = 'Medical',
  ACCIDENT = 'Accident',
  THEFT = 'Theft',
  PROPERTY_Damage = 'Property',
}

export enum ClaimStatus {
  PENDING = 'Pending',
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
}

export interface ClaimForm {
  name: string; // The name of the claimant
  email: string; // The email address of the claimant
  amount: number; // The monetary value of the claim
  dateOfIncident: string; // The date of the incident (can be stored as a string in 'YYYY-MM-DD' format)
  description: string; // A brief description of the incident
  claimType: ClaimType;
  status: ClaimStatus;
}

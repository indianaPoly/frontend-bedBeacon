export type OS = 'Windows' | 'MacOS' | 'iOS' | 'Android' | 'Linux' | 'Unknown';

export interface HospitalDataProp {
  name: string;
  emergencyGeneralWard: number;
  generalWard: number;
  distance: number;
  location: string;
  callNumber: string;
  hospitalCode: string;
  image: string;
}

export interface Position {
  latitude: string;
  longitude: string;
}

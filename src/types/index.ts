export type OS = 'Windows' | 'MacOS' | 'iOS' | 'Android' | 'Linux' | 'Unknown';

export type Room = {
  roomName: string;
  availableRooms: number;
};

type SurgeryUnit = {
  surgeryName: string;
  feasible: boolean;
};

export type MedicalFeasibilityIndex = Array<SurgeryUnit>;

export interface HospitalDataProp {
  name: string;
  emergencyGeneralWard?: number;
  generalWard?: number;
  distance: number;
  location: string;
  callNumber: string;
  hospitalCode: string;
  image?: string;
}

export interface DetailHospitalDataProp extends HospitalDataProp {
  hospitalLink: string;
  hospitalOpen: boolean;
  hospitalRoomData: Room[];
}

export interface Position {
  latitude: string;
  longitude: string;
}

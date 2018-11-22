export class VehicleEntity {

  registrationNumber: string;
  fin: string;
  kbaNr: string;
  year: Date;
  type: string;
  mileage: string;
  mileagePlausible: number;
  power: string;
  cylinder: string;
  beltChanged: string;

  previousOwners: string;
  autoType: string;
  body: string;
  doorsSits: string;
  fuel: string;
  emissionClass: string;
  environmentalBadge: string;
  driveType: string;
  gear: string;
  colour: string;
  colourInterior: string;
  unpholstery: string;
  keysNumber: string;
  smokingVehicle: number;
  vehicleDocuments: string;
  serviceBookAvailable: number;
  perfectlyMaintained:number;
  vehicleRegistration: number;
  nextHU: string;
  lastService: string;
  inspectionCondition: string;
  vehicleRoadworthy: number;
  vehicleReadyToDrive: number;
  generalCondition: string;
  chassisCondition: string;
  outerCondition: string;
  innerCondition: string;

  public constructor() {
    this.registrationNumber = '';
    this.fin = '';
    this.kbaNr = '';
    this.year = new Date();
    this.mileage = '';
    this.power = '';
    this.cylinder = '';
    this.beltChanged = '';
  }
}
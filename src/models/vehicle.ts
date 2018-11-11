export class VehicleEntity {

  FIN: string;
  year: Date;
  type: string;
  body: string;
  fuel: string;
  emission: string;

  public constructor() {
    this.FIN = '';
    this.year = new Date();
    this.body = '';
    this.fuel = '';
    this.emission = '';
  }
}
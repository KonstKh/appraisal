import { UploadFile } from '../../node_modules/antd/lib/upload/interface';

export class Documents {
  damages: DamageDocumentation[];
  images: {};
  previewVisible: boolean;
  previewImage: string;

  public constructor() {
    this.images = {
      frontLeft: {},
        frontRight: {},
        rearLeft: {},
        rearRigth: {},
        front: {},
        frontBehind: {},
        frontSide: {},
        driverSteering: {},
        driverSeat: {},
        passengerSeat: {},
        centerConsole: {},
        speedometer: {},
        backSeat: {},
        trunk: {},
        rim: {},
        secondSetTires: {},
        misc: {},
        damage_0: {},
        vehicleRegistration: {},
        serviceBook: {},
        bills: {}
    };
    this.damages = [new DamageDocumentation()];
    this.previewImage = '';
    this.previewVisible = false;
  }
}
export class DamageDocumentation {

  name: string;
  component: string;
  position: string;
  fileList: UploadFile[];
  description: string;

  public constructor() {
    this.name = '';
    this.component = '';
    this.position = '';
    this.description = '';
    this.fileList = [];
  }
}

import { UploadFile } from '../../node_modules/antd/lib/upload/interface';

export class DocumentsEntity {
  damages: DamageDocumentation[];
  images: {};
  damageComponents: number;

  public constructor() {
    this.damages = [new DamageDocumentation()]
  }
}

export class DamageDocumentation {

  name: string;
  position: string;
  fileList: UploadFile[];
  description: string;

  public constructor() {
    this.name = '';
    this.position = '';
    this.description = '';
    this.fileList = [];
  }
}

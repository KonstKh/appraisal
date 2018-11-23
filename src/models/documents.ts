import { UploadFile } from '../../node_modules/antd/lib/upload/interface';

export class DocumentsEntity {
  damageDocumentation: DamageDocumentation[];

  public constructor() {
    this.damageDocumentation = new DamageDocumentation()[1]
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

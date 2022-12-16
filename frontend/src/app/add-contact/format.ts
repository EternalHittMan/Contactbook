import {Model} from "../model";

export interface Format {

  name: string,
  job: string,
  photo: string | null,

  favorite: boolean,

  items: Model[]


}

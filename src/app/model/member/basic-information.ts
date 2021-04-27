import {Education} from '../enumPack/education.enum';

export interface BasicInformation {
  idBasic?: number;
  name?: string;
  surname?: string;
  pesel?: string;
  idNumber?: string;
  age?: string;
  education?: Education;
}

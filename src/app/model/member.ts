import {BasicInformation} from './member/basic-information';
import {ContactDetails} from './member/contact-details';
import {LaborMarketStatus} from './member/labor-market-status';
import {DirectionOfEducation} from './member/direction-of-education';
import {AdditionalInformation} from './member/additional-information';
import {Statement} from './member/statement';
import {Project} from './project';

export interface Member {
  project?: Project;
  idMember?: number;
  basicInformation?: BasicInformation;
  contactDetails?: ContactDetails;
  laborMarketStatus?: LaborMarketStatus;
  directionOfEducation?: DirectionOfEducation;
  additionalInformation?: AdditionalInformation;
  statement?: Statement;
}

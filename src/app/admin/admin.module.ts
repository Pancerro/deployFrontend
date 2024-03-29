import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PanelComponent } from './panel/panel.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SummaryComponent } from './panel/summary/summary.component';
import { DepartmentComponent } from './panel/department/department.component';
import { MemberComponent } from './panel/member/member.component';

import { NoDataPipe } from '../pipe/no-data.pipe';
import { ModalModule } from '../dialog/modal.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SortDirective } from './directive/sort.directive';
import { ExportAsModule } from 'ngx-export-as';
import {FilterBadgePipe} from '../pipe/filter-badge.pipe';
import { ProjectComponent } from './panel/project/project.component';
import { OptionsComponent } from './panel/options/options.component';
import {LoadingPipe} from '../pipe/loading.pipe';
import {RouterModule} from '@angular/router';




@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [LoginComponent, PanelComponent, SummaryComponent, DepartmentComponent, MemberComponent, NoDataPipe, LoadingPipe, FilterBadgePipe, SortDirective, ProjectComponent, OptionsComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    ModalModule,
    Ng2SearchPipeModule,
    ExportAsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{path: '', component: PanelComponent}])

  ],
  bootstrap: [PanelComponent]
})

export class AdminModule { }

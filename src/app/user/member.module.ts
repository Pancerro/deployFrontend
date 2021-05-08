import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from '../dialog/modal.module';
import {RouterModule} from '@angular/router';



@NgModule({
    declarations: [FormComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        ModalModule,
        RouterModule.forChild([{path: '', component: FormComponent}])
    ],
    providers: [],
    exports: [
    ]
})
export class MemberModule { }

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Member} from '../../../model/member';
import {Project} from "../../../model/project";

@Component({
  selector: 'app-start-form',
  templateUrl: './start-form.component.html',
  styleUrls: ['./start-form.component.css']
})
export class StartFormComponent implements OnInit {
  constructor() { }
  @Input() member: Member;
  @Input() project: Project;
  @Input() editMode: boolean;
  @Output() nextStep = new EventEmitter<number>();
  private step = 0;
  ngOnInit() {
  }
  public next(): void {
    this.nextStep.emit(this.step + 1);
  }

}

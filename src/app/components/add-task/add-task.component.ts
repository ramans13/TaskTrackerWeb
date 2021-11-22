import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Tasks } from 'src/app/task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
 @Output() onAddTask : EventEmitter<Tasks> = new EventEmitter();
  text : string ;
  day : string;
  reminder : boolean = false
  subscription : Subscription;
  showAddTask : boolean;


  constructor(private uiservices : UiService) {
    this.subscription = this.uiservices.onToggle().subscribe((value) =>{this.showAddTask= value});


  }

  ngOnInit(): void {
  }

  onSubmit(){ 
    if(!this.text){
      alert('Please add a task');
      return;
    }

    const newTask : Tasks  = {
      text : this.text,
      day : this.day,
       reminder : this.reminder
    }
    this.onAddTask.emit(newTask);

    this.text = '',
    this.day = '',
    this.reminder = false
  }

}

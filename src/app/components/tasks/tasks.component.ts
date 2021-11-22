import { Component, OnInit, Input } from '@angular/core';
import { Tasks } from '../../task'
import { TaskService } from 'src/app/services/task.service';
import { faIntercom } from '@fortawesome/free-brands-svg-icons';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Tasks[] = [];

  constructor(private taskservice : TaskService) { }

  ngOnInit(): void {

    this.taskservice.getTasks().subscribe((tasks)=>{
      this.tasks=tasks
    })
  }
    deleteTask(task :Tasks){
      this.taskservice.deleteTask(task).subscribe((t)=>{

        this.tasks = this.tasks.filter((t)=> t._id !== task._id);

      })
    }
    toggleReminder(task:Tasks) {

      task.reminder = !task.reminder

       this.taskservice.toggleReminder(task).subscribe();

    }

    addTask(task:Tasks){

      this.taskservice.addTask(task).subscribe((task)=>{
        this.tasks.push(task)
      });


    }

}

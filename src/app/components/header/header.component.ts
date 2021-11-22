import { Component, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title : string= 'Task Tracker';
  showAddTask : boolean = false;
  subscription : Subscription

  color: string = 'green';
  constructor( private uiservice : UiService, private Router : Router) {
    this.subscription = this.uiservice.onToggle().subscribe((value)=>{
      this.showAddTask= value;
    })
   }

  ngOnInit(): void {
  }
toggleAddTasks(){
this.uiservice.toggleAddTask();
}

hasRoute(route : string) : boolean{
return this.Router.url === route;

}
}

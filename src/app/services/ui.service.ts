import { Injectable } from '@angular/core';
import { Observable, observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showTaskAdd : boolean= false ;
  private subject = new Subject<any>();

  constructor() {

  }

  toggleAddTask(){
  this.showTaskAdd = !this.showTaskAdd
  this.subject.next(this.showTaskAdd);
}
   onToggle():Observable<any>{
     return this.subject.asObservable()
   }

}

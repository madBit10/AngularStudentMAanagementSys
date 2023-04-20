import { Component, ɵisObservable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularfirebase-student-app';
  description = 'Angular-Fire-Student-App';

  itemValue = '';
  items : Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
  }
}

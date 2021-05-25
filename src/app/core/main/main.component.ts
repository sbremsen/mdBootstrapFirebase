import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
// import { map } from 'rxjs/operators';
import { Content } from '../models/content.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  content: Content;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    // if(this.user) {
    //   debugger;
    //   const content = this.getContent(this.user.uid);
    //   console.log(content);
    // }


  }

  getContent(userId: string) {
    return this.db.list(`userContent/${userId}`)
    .snapshotChanges().forEach(snapshot=> {
      snapshot.forEach(keys => {
        console.log(keys.payload.key);
      })
    });
  }

  get user() {
    return this.afAuth.auth.currentUser;
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-student',
  templateUrl: 'student.html'
})
export class StudentPage {
  students: any;

  constructor(public navCtrl: NavController, public servicio: UserServiceProvider) {

  }

  ionViewDidLoad(){
    this.servicio.getStudents().subscribe(
      (data) => {
        console.log(JSON.stringify(data));
        this.students = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

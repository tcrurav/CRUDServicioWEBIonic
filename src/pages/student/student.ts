import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ConvalidacionesPage } from '../convalidaciones/convalidaciones';

@Component({
  selector: 'page-student',
  templateUrl: 'student.html'
})
export class StudentPage {
  students: any;

  constructor(public navCtrl: NavController, 
              public servicio: UserServiceProvider,
              public navParams: NavParams) {
  }

  showConvalidaciones(student){
    this.navCtrl.push(ConvalidacionesPage, { student: student });
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

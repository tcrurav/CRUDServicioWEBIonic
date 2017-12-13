import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-convalidaciones',
  templateUrl: 'convalidaciones.html'
})
export class ConvalidacionesPage {
  convalidaciones: any;
  student: any;

  constructor(public navCtrl: NavController, 
              public servicio: UserServiceProvider,
              public navParams: NavParams) {
    this.student = navParams.get('student');
  }

  ionViewDidLoad(){
    this.servicio.getConvalidaciones(this.student).subscribe(
      (data) => {
        // console.log(JSON.stringify(data));
        this.convalidaciones = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

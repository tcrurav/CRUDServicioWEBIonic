import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-add-student',
  templateUrl: 'add-student.html'
})
export class AddStudentPage {
  myForm: FormGroup;

  constructor(public navCtrl: NavController, 
              public service: UserServiceProvider,
              public fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]]    
    });
  }

  postStudent(){
    var student = {
      nombre: this.myForm.get('name').value,
      apellidos: this.myForm.get('surname').value
    }
    this.service.postStudent(student).subscribe( 
      (data) => {
        //Aquí deberías mostrar una ventana modal que dijera que se ha guardado la información
        console.log(data);
      }, 
      (error) => {
        //Aquí deberías mostrar una ventana modal que mostrara un error
        console.log(error);
      }
    );
  }

}

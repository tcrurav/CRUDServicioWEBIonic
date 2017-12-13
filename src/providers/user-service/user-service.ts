import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }

  getStudents(){
    return this.http.get("http://localhost:8080/Alumnos-1.0-SNAPSHOT/webresources/org.ieselrincon.alumnos.alumno");
  }

  getConvalidaciones(student){
    return this.http.get(
      "http://localhost:8080/Alumnos-1.0-SNAPSHOT/webresources/org.ieselrincon.alumnos.convalidacion"
      + "/student/" + student.pkId
    );
  }

  postStudent(student){
    return this.http.post("http://localhost:8080/Alumnos-1.0-SNAPSHOT/webresources/org.ieselrincon.alumnos.alumno",
      student,
      {
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}

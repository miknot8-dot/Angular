import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
    loginData: any = 
    {
      "username": "",
      "useremail": "",
      "password": ""
  
    }

    ///// inject http new method
    http = inject(HttpClient)

    //// old method

     onClick() {
      this.http.post("http://localhost:3000/users", this.loginData).subscribe((res:any)=> {
        console.log(res)
      })
      
    }
   
}



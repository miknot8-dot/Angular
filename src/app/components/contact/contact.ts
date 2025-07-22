import { Component } from '@angular/core';
import { Form } from '../UI/form/form';
import { Login } from '../UI/login/login';

@Component({
  selector: 'app-contact',
  imports: [Form, Login],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

}

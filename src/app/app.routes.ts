import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';

export const routes: Routes = [

  {
    path:'',
    component:Home
  },
  {
    path:'about',
    component:About
  },

  {
    path:'contact',
    component:Contact
  }

];

import { Routes } from '@angular/router';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
    {path: '', component: IntroPageComponent},
    {path: 'contact', component: ContactPageComponent}
];

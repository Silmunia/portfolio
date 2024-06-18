import { Routes } from '@angular/router';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
    {path: '', component: IntroPageComponent},
    {path: 'projects', component: ProjectPageComponent},
    {path: 'contact', component: ContactPageComponent}
];

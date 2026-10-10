import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/404/404.component';
import { ContentComponent } from './pages/content/content.component';

export const routes: Routes = [
    {
        path: 'content/:id',
        component: ContentComponent,
    },
    {
        path: 'content',
        component: ContentComponent,
    },
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    },
];

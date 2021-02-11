import { Routes } from '@angular/router';
import { ArchiveComponent } from '../components/archive/archive.component';
import { HomeArchiveComponent } from '../components/home-archive/home-archive.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';

export let appRoutes: Routes = [
    {
        path: '',
        component: HomeArchiveComponent,
    },
    {
        path: 'archive/:year/:month',
        component: ArchiveComponent,
    },
    {
        path: '**',
        component: NotfoundComponent,
    }
];

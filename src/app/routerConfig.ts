// routerConfig.ts
import { Routes } from '@angular/router';
// import { CreateComponent } from './components/create/create.component';
// import { EditComponent } from './components/edit/edit.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BlogComponent } from './blog/blog/blog.component';
// import { LazyComponent } from './lazy/lazy/lazy.component';

const appRoutes: Routes = [
    {
        path: '',
        component: AboutMeComponent
    },
    //   {
    //     path: 'edit/:id',
    //     component: EditComponent
    //   },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'lazy',
        // component: LazyComponent
        loadChildren: './lazy/lazy.module#LazyModule'
    }
];
export { appRoutes };

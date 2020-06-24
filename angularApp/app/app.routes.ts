import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', redirectTo: 'countries', pathMatch: 'full'
    },
    {
        path: 'countries', loadChildren: './countries/country.module#CountryModule'
    }
];

export const AppRoutes = RouterModule.forRoot(routes);

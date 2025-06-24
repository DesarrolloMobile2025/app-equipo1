import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },  // Cambié 'home' por 'main'
  {
    path: 'product-list',
    loadComponent: () => import('./product-list/product-list.page').then(m => m.ProductListPage)
  },
  {
    path: 'main',
    loadComponent: () => import('./main/main.page').then(m => m.MainPage)
  },
{
path: 'contact',
loadComponent: () => import('./contact/contact.component').then(m =>
m.ContactComponent)
},
{
path: 'profile',
loadComponent: () => import('./profile/profile.component').then(m =>
m.ProfileComponent)
},
{
path: 'location',
loadComponent: () => import('./location/location.component').then(m =>
m.LocationComponent)
},
{
  path: 'turns',
  loadComponent: () => import('./turns/turns.component').then(m => m.TurnsComponent)
},
{
  path: 'history',
  loadComponent: () => import('./history/history.component').then(m => m.HistoryComponent)
}
];

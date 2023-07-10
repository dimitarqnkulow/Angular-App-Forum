import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { DetailedThemeComponent } from './detailed-theme/detailed-theme.component';

const routes: Routes = [
  {
    path: 'themes',
    children: [{ path: '', pathMatch: 'full', component: MainComponent }],
  },
  { path: ':themeId', component: DetailedThemeComponent },
  {
    path: 'new-theme',
    component: NewThemeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingComponent {}

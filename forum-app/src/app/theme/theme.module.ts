import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeRoutingComponent } from './theme.routing.module';

@NgModule({
  declarations: [NewThemeComponent],
  imports: [CommonModule, ThemeRoutingComponent],
})
export class ThemeModule {}

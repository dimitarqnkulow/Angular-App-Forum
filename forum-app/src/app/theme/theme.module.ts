import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeRoutingComponent } from './theme.routing.module';
import { DetailedThemeComponent } from './detailed-theme/detailed-theme.component';

@NgModule({
  declarations: [NewThemeComponent, DetailedThemeComponent],
  imports: [CommonModule, ThemeRoutingComponent],
})
export class ThemeModule {}

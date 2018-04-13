import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideNavComponent} from './side-nav.component';
import {MatButtonModule, MatIconModule, MatListModule} from '@angular/material';
import {SideNavActions} from './side-nav.actions';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [SideNavComponent],
  exports: [SideNavComponent],
  providers: [SideNavActions]
})
export class SideNavModule {
}
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserService} from './user.service';
import {UserEffects} from './user.effects';
import {UserActions} from './user.actions';
import {CoreModule} from '../core/core.module';
import {ArticlesService} from '../articles/articles.service';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [],
  providers: [
    UserService,
    UserEffects,
    UserActions,
    ArticlesService
  ]
})
export class UserModule {
}

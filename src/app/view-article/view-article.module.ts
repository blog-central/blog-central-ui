import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ViewArticleComponent} from './view-article.component';
import {ArticleRendererComponent} from './article-renderer/article-renderer.component';
import {ViewArticleActions} from './view-article.actions';
import {StoreModule} from '@ngrx/store';
import {reducer} from './view-article.reducer';
import {ViewArticleEffects} from './view-article.effects';
import {EffectsModule} from '@ngrx/effects';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {MarkdownModule} from 'ngx-markdown';
import {AddCommentComponent} from './add-comment/add-comment.component';
import {CommentsService} from './comments.service';
import {CommentListComponent} from './comment-list/comment-list.component';
import {CommentCardComponent} from './comment-card/comment-card.component';
import {CoreModule} from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: ViewArticleComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    StoreModule.forFeature('viewArticle', reducer),
    EffectsModule.forFeature([ViewArticleEffects])
  ],
  declarations: [
    ViewArticleComponent,
    ArticleRendererComponent,
    AddCommentComponent,
    CommentListComponent,
    CommentCardComponent
  ],
  providers: [
    ViewArticleActions,
    ViewArticleEffects,
    CommentsService
  ]
})
export class ViewArticleModule {
}

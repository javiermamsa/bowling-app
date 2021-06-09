import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { ScoreService } from './shared/score.service';
import { ScoreHistory } from './shared/score-history.service';
import { ScoreListComponent } from './score-list/score-list.component';
import { ScoreDetailComponent } from './score-list/score-detail/score-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ScoreListComponent,
    ScoreDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ScoreService, ScoreHistory],
  bootstrap: [AppComponent]
})
export class AppModule { }

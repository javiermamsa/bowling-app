import { Component, OnInit } from '@angular/core';
import { ScoreHistory } from '../shared/score-history.service';
import { Score } from '../shared/score.model';

@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.css']
})
export class ScoreListComponent implements OnInit {
  scores: Score[] = [];

  constructor(private scoreHistoryService: ScoreHistory) { }

  ngOnInit() {
    this.scores = this.scoreHistoryService.getAllScores();
    this.scoreHistoryService.allScoresChanged
      .subscribe(
        (scores: Score[]) => {
          this.scores = scores;
      });
  }
}

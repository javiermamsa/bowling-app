import { Component, Input, OnInit } from '@angular/core';
import { ScoreHistory } from 'src/app/shared/score-history.service';
import { Score } from 'src/app/shared/score.model';

@Component({
  selector: 'app-score-detail',
  templateUrl: './score-detail.component.html',
  styleUrls: ['./score-detail.component.css']
})
export class ScoreDetailComponent implements OnInit {
  @Input() id!: number;
  score!: Score;
  currentScore: number[] = [];
  hasStrike = false;
  hasSpare = false;
  total = 0;

  constructor(private scoreHistoryService: ScoreHistory) { }

  ngOnInit() {
    this.score = this.scoreHistoryService.getScore(this.id);
    this.currentScore = this.score.getScore();
    this.hasSpare = this.score.hasSpare();
    this.hasStrike = this.score.hasStrike();
    this.total = this.scoreHistoryService.getSumScore(this.id);
  }

}

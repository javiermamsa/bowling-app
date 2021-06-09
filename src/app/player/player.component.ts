import { Component, OnInit } from '@angular/core';
import { ScoreHistory } from '../shared/score-history.service';
import { ScoreService } from '../shared/score.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  currentPoint = 0;
  previousPoint = 0;
  isGameOver = false;

  constructor(private scoreService: ScoreService,
              private scoreHistoryService: ScoreHistory) { }

  ngOnInit() {
    this.scoreService.currentPointsChanged
      .subscribe(
        (points:number) => {
          this.previousPoint = points;
        }
      );
  }

  onRollingTheBall() {
    this.currentPoint = (Math.floor(Math.random()*(10 - this.previousPoint)) + 1);
    this.scoreService.setCurrentPoints(this.currentPoint);

    this.scoreHistoryService.isGameOver.subscribe(
      (isGameOver: boolean) => {
        this.isGameOver = isGameOver;
      }
    )
  }
}

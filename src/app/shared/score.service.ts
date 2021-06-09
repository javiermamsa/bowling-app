import { EventEmitter, Injectable } from "@angular/core";
import { ScoreHistory } from "./score-history.service";
import { Score } from "./score.model";

@Injectable()
export class ScoreService {
    counter = 0;
    points = 0;
    currentScore!: Score;
    currentScoreChanged = new EventEmitter<Score>();
    currentPointsChanged = new EventEmitter<number>();

    constructor(private scoreHistoryService: ScoreHistory) {}

    setCurrentPoints(points:number) {
        this.points = points;

        if (this.counter === 0) {
            this.currentScore = new Score([points]);
        } else {
            this.currentScore.addPoint(points);
        }

        this.currentPointsChanged.emit(this.points);
        this.currentScoreChanged.emit(this.currentScore);
        this.counter++;

        if(this.currentScore.hasStrike() || this.currentScore.hasSpare() || this.counter === 2) {
            this.hasFinishedTheTurn(this.currentScore);
        }
    }

    getCurrentPoints() {
        return this.points;
    }

    hasFinishedTheTurn(score: Score) {
        this.scoreHistoryService.addScore(score);
        this.counter = 0
    }
}
import { EventEmitter } from "@angular/core";
import { Score, maxPoints } from "./score.model";

export class ScoreHistory {
    allScores:Score[] = [];
    sumScore = 0;
    allSumScore: number[] = [];
    allScoresChanged = new EventEmitter<Score[]>();
    isGameOver = new EventEmitter<boolean>();

    constructor() { }

    addScore(score:Score) {
        this.allScores.push(score);
        this.allScoresChanged.emit(this.allScores);
        this.sumScore += score.getTotal();
        this.allSumScore.push(this.sumScore);

        if (this.allScores.length >= maxPoints) this.isGameOver.emit(true);
    }

    getAllScores() {
        return this.allScores;
    }

    getScore(index: number) {
        return this.allScores[index];
    }

    getSumScore(index: number) {
        return this.allSumScore[index];
    }
}
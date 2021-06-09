export const maxPoints = 10;

export class Score {
    constructor(private score:number[]) {}

    addPoint(point: number) {
        this.score.push(point);
    }

    getTotal() {
        return this.score.reduce((acc, val)=> {return acc + val});
    }

    getScore() {
        return this.score;
    }

    hasStrike() {
        return this.score[0] === maxPoints;
    }

    hasSpare() {
        return !this.hasStrike() && this.getTotal() === maxPoints;
    }
}
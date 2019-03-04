import { QuarterStats } from "./quarterStats";

export class MatchStats{
    constructor(public team1Name: string, public team2Name: string, quarterStats: QuarterStats[]){

    }
}
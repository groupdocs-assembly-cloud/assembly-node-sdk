import { TeamStats } from "./teamStats";

export class QuarterStats {
    constructor(public Quarter: number, public team1Stats : TeamStats, 
        public team2Stats : TeamStats){

    }
}
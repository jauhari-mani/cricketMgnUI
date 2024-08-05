export class Match {
    dateOfMatch: Date;
    price: number;
    totalFees: number;
    carCompensation: number;
    playGround: string;
    perPersonContribution: number;
    playersPlayed: any[];
    playersWhoTookTheirCar: any[];

    constructor(){
        this.dateOfMatch = new Date();
        this.price = 0.0;
        this.totalFees = 0.0;
        this.carCompensation = 0.0;
        this.playGround = "";
        this.perPersonContribution = 0.0;
        this.playersPlayed = [];
        this.playersWhoTookTheirCar = [];
    }

}

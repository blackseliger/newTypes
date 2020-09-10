import Buyable from './Buyable';

export default class Movie implements Buyable {
    readonly name: string;
    readonly year: number;
    readonly country: string;
    readonly slogan: string;
    readonly style: string;
    readonly time: number;
    
    constructor(name: string, year: number, country: string, slogan: string, style: string, time: number){
        this.name = name;
        this.year = year;
        this.country = country;
        this.slogan = slogan;
        this.style = style;
        this.time = time;
    }
}

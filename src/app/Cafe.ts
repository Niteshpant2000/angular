export class Cafe{
    cafeID!:number;
    name!:string;
    description!:string;
    avg_cost!:number;
    menu!:string[];
    banner!:string;
    constructor(cafeID:number,name:string,description:string,avg_cost:number,menu:string[],banner:string){
        this.cafeID=cafeID;
        this.name=name;
        this.description=description;
        this.avg_cost=avg_cost;
        this.menu=menu;
        this.banner=banner;
    }

}
export class Quotes {
    showDescription: boolean;
    constructor(public id: number,public author: string,public publisher:string,public quote: string,public publishDate: Date){
        this.showDescription=false;
    }


//     id!: number;
//     author!: string;
//     publisher!: string;
//     quote!: string;
   //publishDate!: Date;
}

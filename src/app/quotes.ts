export class Quotes {

    public likeButton: number | undefined;
    public dislikeButton: number | undefined;

    
    constructor(public id: number, public author: string, public publisher: string, public quote: string, public postDate: Date) {
        
    }
   

    //     id!: number;
    //     author!: string;
    //     publisher!: string;
    //     quote!: string;
    //fullDate!: Date;
}

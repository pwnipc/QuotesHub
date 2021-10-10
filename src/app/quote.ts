export class Quote {
    showDescription!: boolean;
    constructor(public qid: number, public qtitle: string, public qauthor: string, public qsubmitter:string, public qdescription: string, public qupvote: number, public qdownvote:number, public postdate: Date ){
        this.showDescription = false;
    }
}

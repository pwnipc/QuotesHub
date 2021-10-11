export class Quote {
    showDescription!: boolean;
    qupvote!: number;
    qdownvote!: number;
    highestVote! : boolean;
    constructor(public qid: number, public qtitle: string, public qauthor: string, public qsubmitter:string, public qdescription: string,  public postdate: Date ){
        this.showDescription = false;
        this.qupvote = 0;
        this.qdownvote = 0;
        this.highestVote = false;
    }
}

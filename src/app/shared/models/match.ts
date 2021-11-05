export class Match{
constructor(
   public  teamOne:string,
   public  teamTwo:string,
   public  scoreTwo:string,
   public  scoreOne:string
){}

somme2(){
    return this.scoreOne + this.scoreTwo ;
}


}
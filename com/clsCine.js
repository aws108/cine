class clsCine{

    constructor(){
        this.sala1;
        this.sala2;
        this.CreateSalas();
        this.DrawSalas();
    }

    CreateSalas(){
        this.sala1 = new clsSala("1",8);
        this.sala2 = new clsSala("2",25);
    }

    DrawSalas(){
        this.sala1.DrawAsientos(); //pinta sala con 8 asientos
    }
    
}
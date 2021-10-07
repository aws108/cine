class clsSala{
    constructor(pID, pNumerodeasientos){
        this.number = pID;
        this.num_asientos = pNumerodeasientos;
        this.asientos = [];
        this.containerHTML = document.getElementById("grid"); //va al html y en concreto al grid
        this.CreateAsientos();
    }

    //Guarda cada asiento en el array
    CreateAsientos(){
        for(var i=0; i<this.num_asientos; i++){ //num_asientos es el total de asientos en la sala
            var tA = new clsAsiento(i);
            this.asientos.push(tA) //cada asiento i
        }
    }

    DrawAsientos(){
        for(var i=0; i<this.num_asientos; i++){ //num_asientos es el total de asientos en la sala
            var tA = this.asientos[i]; //dame cada asiento
            var tCell = tA.Draw() //pinta cada asiento
            this.containerHTML.appendChild(tCell); //al grid le pone la celda del asiento
        } 
    }

    EraseAsientos(){
        this.containerHTML.innerHTML = "";
    }
}
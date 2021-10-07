class clsAsiento{
    constructor(pNumberAsiento){
        this.number = pNumberAsiento;
        this.ocuppied = 0; // 0 = libre, 1 = ocupado, 2 = temporalmente fuera de servicio
    }

    ReservarAsiento(){
        this.occupied = 1;
    }

    Draw(){
        let cell = document.createElement("div"); //div por cada asiento
            cell.innerHTML = "Asiento:" + this.number;
            cell.className = "cell";
            cell.id = "Asiento"+this.number;
            return cell;
    }

}
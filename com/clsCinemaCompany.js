//las variables privadas son _q y los métodos son _totest(); 
//Lo privado solo se ve dentro de una misma clase. Otras clases no pueden llamar a métodos privados 

class clsCinemaCompany{
    constructor(){
        this.cine; //sólo tiene 1 cine la compañía
        //this.CreateFrontEnd();
        this.CreateCines();
    }

    CreateCines(){
        this.cine = new clsCine();
    }


}
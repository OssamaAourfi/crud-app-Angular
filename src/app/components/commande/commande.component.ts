import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  myArray :any =[];
  myCommande: any = {
    id  :'',
    name : '',
    prix :''
  };
  myCondition = false ;

 

  constructor(private myVar:CommandeService) { }

  ngOnInit(){
    this.getCommande();
  }
//Methode GET
  getCommande(){
    this.myVar.getAll()
    .subscribe(data =>{
      this.myArray=data;
    }) 
  }

 //Mehode DELETE
 deleteCommande(id: any){
   this.myVar.delete(id)
   .subscribe(()=>{
     this.myArray = this.myArray.filter
     ((myVaribale: { id: any; }) =>myVaribale.id !=id)
   })
 } 
 //Methode POST

 postCommande(){
   this.myVar.AddCommande(this.myCommande)
   .subscribe((myVariable)=>{
     this.myArray=[myVariable,...this.myArray];
     this.clearInput();
   })

 }
 //Vider les inputs
 clearInput(){
   this.myCommande ={
    id  :'',
    name : '',
    prix :''
   }
 }
 //edit Commandes

 editCommande(myVariable: any){
   this.myCommande=myVariable;
   this.myCondition=true;
 }

 //update Commandes
 updateMycommande(){
   this.myVar.updateCommande(this.myCommande)
   .subscribe(commande=>{
     this.clearInput();
     this.myCondition=false;
   })
 }



}




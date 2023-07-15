import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../../products/model/Product';


// const ELEMENT_DATA: Product[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];


@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.css']
})
export class ViewClientsComponent implements OnInit {

  public formParent: FormGroup = new FormGroup({}); //Creamos el formulario padre y lo inicializamos
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;

  constructor(private dialogRef: MatDialogRef<ViewClientsComponent>) { }


  ngOnInit(): void {
    this.initFormParent();
  }

  save(){
    this.dialogRef.close(this.formParent);

  }

  private initFormParent(): void {
    //crea el formulario padre y lo asigna a la variable formParent
    this.formParent = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', []),
      city: new FormControl('', []),
      company: new FormControl('', []),
      phone: new FormControl('', []),
      email: new FormControl('', []),
      description: new FormControl('', []),
    });
  }

  private initFormPrice(): FormGroup {
    //devuelve un formulario hijo
    return new FormGroup({
      description: new FormControl(''),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
    });
  }

  public addPrice(): void {
    //método que al pulsar en el botón de añadir precio añadirá un nueve elemento price al array prices
    const refPrices = <FormArray>this.formParent.get('prices');
    refPrices.push(this.initFormPrice());
  }

  public getCtrl(key: string, form: FormGroup) {
    return <FormArray>form.get(key); //con esto devolvemos la propiedad key del formulario form
  }
}
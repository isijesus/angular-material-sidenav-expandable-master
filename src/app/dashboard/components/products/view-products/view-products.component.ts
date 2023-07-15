import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  public formParent: FormGroup = new FormGroup({}); //Creamos el formulario padre y lo inicializamos
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;




  ngOnInit(): void {
    this.initFormParent();
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
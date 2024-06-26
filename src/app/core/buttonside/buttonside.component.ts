import { Component, OnInit } from '@angular/core';
import { Lavorazione } from '../../models/InterfaceLogin/interfaceLogin';
import { TableService } from '../../service/table.service';
import { FormGroup, FormBuilder} from '@angular/forms';
@Component({
  selector: 'buttonside',
  standalone: true,
  imports: [],
  templateUrl: './buttonside.component.html',
  styleUrl: './buttonside.component.scss'
})
export class ButtonsideComponent{
lavorazioni?: Lavorazione[] = [];

constructor(private tableService: TableService) {
  this.getLavorazioni()
}

getLavorazioni() {
  this.tableService.getLavorazioni().subscribe({next: (data) => {
    this.lavorazioni = data;
    console.log(this.lavorazioni);  
  }, error:(e)=>{
    console.log(e);
  }});

}
}

import { Component, Input } from '@angular/core';
import { IPlanetRowModel } from '../../model/planet.row.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() data: IPlanetRowModel[] | null = [];
}

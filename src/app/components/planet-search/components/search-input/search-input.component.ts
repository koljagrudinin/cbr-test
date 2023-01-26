import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { isDefined } from '../../../../helpers/isDefined';
import { ParameterTypeEnum } from '../../model/filter-parameter-type.enum';
import { IPlanetFilterModel } from '../../model/planet-filter.model';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnChanges {

  @Input() filterModel: IPlanetFilterModel = {};

  @Output() onSearch = new EventEmitter<IPlanetFilterModel>();

  form = new FormGroup({
    name: new FormControl(''),
    parameterType: new FormControl(0),
    from: new FormControl<number | null>(null, [Validators.pattern('^\-?\\d{0,}$')]),
    to: new FormControl<number | null>(null, [Validators.pattern('^\-?\\d{0,}$')])
  })

  filterOptions: { value: ParameterTypeEnum, description: string }[] = [{
    value: Number(ParameterTypeEnum.Diameter),
    description: 'Фильтровать по диаметру'
  }, {
    value: Number(ParameterTypeEnum.CountOfPeople),
    description: 'Фильтровать по количеству людей'
  }]

  ngOnChanges(): void {
    this.form.patchValue(this.filterModel);
  }

  public search() {
    if (this.form.valid) {
      this.onSearch.next({
        ...this.form.value,
        parameterType: isDefined(this.form.value.parameterType) ? Number(this.form.value.parameterType) : null,
      });
    }
  }

  public clearFilters() {
    this.form.patchValue({
      from: null,
      name: null,
      parameterType: null,
      to: null
    })
  }
}

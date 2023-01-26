import { EnvironmentInjector, Injectable } from '@angular/core';
import { BehaviorSubject, delay, EMPTY, filter, from, Observable, of, tap } from 'rxjs';
import { IPlanetFilterModel } from '../model/planet-filter.model';
import { serverResponse } from './mock';
import { IPlanetRowModel } from '../model/planet.row.model';
import { isDevMode } from '@angular/core';
import { ParameterTypeEnum } from '../model/filter-parameter-type.enum';
import { isDefined } from '../../../helpers/isDefined';

export const VALUE_UNKNOWN = "unknown";


@Injectable({
  providedIn: 'root'
})
export class PlanetsFilterService {
  tableData$ = new BehaviorSubject<IPlanetRowModel[]>([]);

  constructor() { }

  filterData(filterValue: IPlanetFilterModel): Observable<null> {
    //TODO change to API, MOCKED DATA

    console.log(isDefined(filterValue.name), isDefined(filterValue.parameterType), filterValue.parameterType, isDefined(filterValue.from), isDefined(filterValue.to));

    if (isDevMode()) {
      return of(null).pipe(
        delay(500),
        tap(() => {
          filterValue.name = filterValue.name?.toLowerCase();

          const result = serverResponse.results.filter(item => {
            let isAppliable = true;

            if (isDefined(filterValue.name) && filterValue.name.length > 0) {
              isAppliable &&= item.name.toLowerCase().indexOf(filterValue.name) >= 0
            }

            if (isDefined(filterValue.parameterType)) {
              switch (filterValue.parameterType) {
                case ParameterTypeEnum.CountOfPeople: {
                  if (isDefined(filterValue.from)) {
                    isAppliable &&= item.population !== VALUE_UNKNOWN && filterValue.from <= Number(item.population)
                  }

                  if (isDefined(filterValue.to)) {
                    isAppliable &&= item.population !== VALUE_UNKNOWN && filterValue.to >= Number(item.population)
                  }
                } break;
                case ParameterTypeEnum.Diameter: {
                  if (isDefined(filterValue.from)) {
                    isAppliable &&= item.diameter !== VALUE_UNKNOWN && filterValue.from <= Number(item.diameter)
                  }

                  if (isDefined(filterValue.to)) {
                    isAppliable &&= item.diameter !== VALUE_UNKNOWN && filterValue.to >= Number(item.diameter)
                  }
                } break;
              }
            }

            return isAppliable;
          });
          this.tableData$.next(result.map((value) => value as unknown as IPlanetRowModel));
        })
      )
    }

    throw new Error("Not implemented");
  }
}

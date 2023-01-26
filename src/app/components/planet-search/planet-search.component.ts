import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, take, takeUntil, tap } from 'rxjs';
import { IPlanetFilterModel } from './model/planet-filter.model';
import { getNumberOrNull } from '../../helpers/getNumberOrNull';
import { IPlanetRowModel } from './model/planet.row.model';
import { PlanetsFilterService } from './services/planets-filter.service';

@Component({
  selector: 'app-planet-search',
  templateUrl: './planet-search.component.html',
  styleUrls: ['./planet-search.component.scss']
})
export class PlanetSearchComponent implements OnInit, OnDestroy {

  filterModel: IPlanetFilterModel = {};

  private destroy$ = new Subject<boolean>();

  tableData$: Observable<IPlanetRowModel[]> = this.planetsFilterService.tableData$;

  constructor(private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private planetsFilterService: PlanetsFilterService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.pipe(
      takeUntil(this.destroy$),
      take(1),
      tap(paramMap => {
        const formFromUrl = {
          name: paramMap.get('name'),
          parameterType: getNumberOrNull(paramMap, 'parameterType'),
          from: getNumberOrNull(paramMap, 'from'),
          to: getNumberOrNull(paramMap, 'to')
        }
        this.filterModel = formFromUrl;
      }),
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true)
  }

  search(filterValue: IPlanetFilterModel): void {
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: filterValue,
        queryParamsHandling: 'merge',
      });

    this.planetsFilterService.filterData(filterValue).subscribe();
    //Было бы красивее с NgRx
  }
}

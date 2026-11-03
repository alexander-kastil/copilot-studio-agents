import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { map, of, switchMap, take } from 'rxjs';
import { CatalogItem } from '../../catalog-item.model';
import { FoodEntityService } from '../../state/catalog/food-entity.service';
import { FoodEditComponent } from '../food-edit/food-edit.component';

@Component({
  selector: 'app-food-edit-page',
  templateUrl: './food-edit-page.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FoodEditComponent, AsyncPipe],
})
export class FoodEditPageComponent {
  foodES = inject(FoodEntityService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  food$ = this.route.paramMap.pipe(
    switchMap((params) => {
      const id = params.get('id');
      if (id === null) {
        return of(new CatalogItem());
      }
      return this.foodES.getByKey(+id);
    }),
  );

  save(original: CatalogItem, form: CatalogItem) {
    const item = { ...original, ...form };
    const done = item.id == 0 ? this.foodES.add(item) : this.foodES.update(item);
    done.pipe(take(1)).subscribe(() => this.back());
  }

  back() {
    this.router.navigate(['/food/catalog']);
  }
}

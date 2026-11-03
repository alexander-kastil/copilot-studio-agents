import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { CatalogItem } from '../../catalog-item.model';
import { FoodEntityService } from '../../state/catalog/food-entity.service';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { FoodListComponent } from '../food-list/food-list.component';
import { AILoggerService } from '../../../logger/ai-logger.service';

@Component({
  selector: 'app-food-container',
  templateUrl: './food-container.component.html',
  styleUrls: ['./food-container.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    FoodListComponent,
    AsyncPipe
],
})
export class FoodContainerComponent implements OnInit {
  foodES = inject(FoodEntityService);
  logger = inject(AILoggerService);
  router = inject(Router);
  food = this.foodES.entities$;
  selected: CatalogItem | null = null;

  ngOnInit() {
    this.foodES.loaded$.subscribe((loaded) => {
      if (!loaded) {
        this.foodES.getAll();
        this.logger.logEvent('loaded data food from catalog');
      }
    });
  }

  addFood(item: CatalogItem) {
    this.router.navigate(['/food/catalog/new']);
  }

  selectFood(f: CatalogItem) {
    this.router.navigate(['/food/catalog/edit', f.id]);
  }

  deleteFood(f: CatalogItem) {
    this.foodES.delete(f.id);
  }
}

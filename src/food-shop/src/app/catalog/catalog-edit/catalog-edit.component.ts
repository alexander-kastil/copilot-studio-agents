import { ChangeDetectionStrategy, Component, effect, inject, input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { CommandRowDirective } from 'src/app/shared/formatting/formatting-directives';
import { catalogStore } from '../state/catalog.store';

@Component({
  selector: 'app-catalog-edit',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    CommandRowDirective
  ],
  templateUrl: './catalog-edit.component.html',
  styleUrl: './catalog-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogEditComponent {
  store = inject(catalogStore);
  fb = inject(FormBuilder);
  router = inject(Router);
  id = input.required<number>();

  form = this.fb.group({
    id: 0,
    name: ["", [Validators.required, Validators.minLength(3)]],
    inStock: [0, [Validators.required, Validators.min(1)]],
    price: 0,
    description: [""],
    code: [""],
    pictureUrl: [""]
  });

  constructor() {
    // Load form when id input changes
    effect(() => {
      const itemId = this.id();
      if (itemId !== 0) {
        const item = this.store.getById(itemId);
        if (item) {
          this.form.setValue(item);
        }
      } else {
        this.form.reset();
      }
    }, { allowSignalWrites: true });
  }

  saveForm(form: FormGroup) {
    if (this.id() !== 0) {
      // Update existing item
      this.store.update(form.value);
    } else {
      // Add new item
      this.store.add(form.value);
    }
    // Navigate after save
    this.router.navigate(["/catalog"]);
  }
}

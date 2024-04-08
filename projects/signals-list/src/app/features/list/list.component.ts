import { Component, inject } from '@angular/core';
import { PetsService } from '../../core/service/pets.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  template: `
    <div class="list-container">
      @for (pet of petsService.petsSignal(); track $index) {
        <p>Id: {{ pet.id }}</p>
        <p>Name: {{ pet.name }}</p>
        <p>Breed: {{ pet.breed }}</p>
        <p>Caregiver:{{ pet.careGiver }}</p>
        <img src="{{ pet.imageUrl }}" alt="pet image" />
      }
    </div>
  `,
  styles: ``,
})
export class ListComponent {
  petsService = inject(PetsService);
}

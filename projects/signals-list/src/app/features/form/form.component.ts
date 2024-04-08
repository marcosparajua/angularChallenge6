import { Component, inject } from '@angular/core';
import { PetsService } from '../../core/service/pets.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  template: `
    <div class="form-container">
      <input
        type="text"
        class="form-input"
        placeholder="Name"
        [value]="name"
        (keyup)="updatePet($event, 'name')"
      /><input
        type="text"
        class="form-input"
        placeholder="Breed"
        [value]="breed"
        (keyup)="updatePet($event, 'breed')"
      /><input
        type="text"
        class="form-input"
        placeholder="Image Url"
        [value]="imgUrl"
        (keyup)="updatePet($event, 'imgUrl')"
      /><input
        type="text"
        class="form-input"
        placeholder="Caregiver"
        [value]="careGiver"
        (keyup)="updatePet($event, 'careGiver')"
      />
      <button (click)="addPet()">Add Pet</button>
    </div>
  `,
  styles: `
    .form-container {
      display: flex;
      margin-inline: 2.5rem;

      gap: 0.5rem;
    }
  `,
})
export class FormComponent {
  petsService = inject(PetsService);
  name = '';
  breed = '';
  imgUrl = '';
  careGiver = '';

  updatePet(event: Event, field: string) {
    const target = event.target as HTMLInputElement;
    switch (field) {
      case 'name':
        this.name = target.value;
        break;
      case 'breed':
        this.breed = target.value;
        break;
      case 'imgUrl':
        this.imgUrl = target.value;
        break;
      case 'careGiver':
        this.careGiver = target.value;
        break;
      default:
        break;
    }
  }

  addPet() {
    this.petsService.addPet(this.name, this.breed, this.careGiver, this.imgUrl);

    this.name = '';
    this.breed = '';
    this.imgUrl = '';
    this.careGiver = '';
  }
}

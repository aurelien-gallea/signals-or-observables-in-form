import { ChangeDetectionStrategy, Component, computed, effect, inject, signal, WritableSignal } from '@angular/core';
import { Book } from '../../core/models/Book.model';
import { MyRessourceServiceService } from '../../services/http/my-ressource-service.service';
import { tap } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-with-signals',
  imports: [FormsModule],
  templateUrl: './form-with-signals.component.html',
  styleUrl: './form-with-signals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormWithSignalsComponent {

  myService = inject(MyRessourceServiceService);
  
  readonly code : WritableSignal<string> = signal("0460");
  readonly date : WritableSignal<string> = signal(this.getPreviousMonth());
  readonly number : WritableSignal<number | null> = signal(null);
  previousCode = this.code();
  previousDate = this.date();
  setPreviousCode = () => this.previousCode = this.code();
  setPreviousDate = () => this.previousDate = this.date();
  //observer
  readonly shouldFetchNumber = effect(() => {
    const refreshNeeded = (this.code() !== this.previousCode ||
                         this.date() !== this.previousDate)
    if(refreshNeeded) {
    this.updatePreviousValues()
    this.updateNumberInputValue()
    }
  })

  updatePreviousValues() {
    this.setPreviousCode();
    this.setPreviousDate();
  }

  updateNumberInputValue() {
    const dto : Partial<Book> = {
    codeGenre : this.code(),
    datePublication : new Date(this.date())
    }

  // renvoie un tableau
    this.myService.findByMonth(dto).pipe(
      tap((p) =>
      this.number.set(p.length > 0 ? p[0].codeLot : null)
      )
    ).subscribe()
  }

  ngOnInit(): void {
    this.updateNumberInputValue();
  }

  getPreviousMonth() {
    const date = new Date();
    date.setMonth(date.getMonth() -1)
    return date.toISOString().substring(0,7)
  }
  
}

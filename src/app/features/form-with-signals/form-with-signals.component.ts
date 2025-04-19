import { Component, computed, effect, inject, signal, WritableSignal } from '@angular/core';
import { MyRessourceServiceService } from '../../services/http/my-ressource-service.service';
import { Book } from '../../core/models/Book.model';
import { delay, distinctUntilChanged, tap } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-with-signals',
  imports: [FormsModule],
  templateUrl: './form-with-signals.component.html',
  styleUrl: './form-with-signals.component.scss'
})
export class FormWithSignalsComponent {

  // DI
  myService = inject(MyRessourceServiceService);

  readonly code = signal("0460");
  readonly date = signal(this.getPreviousMonth());
  readonly number : WritableSignal<number | null> = signal(null);

  //observer
  readonly shouldFetchNumber = effect(() => {
    console.log("change");
    this.updateNumberInputValue();

  })

  updateNumberInputValue() {
    this.number.set(null);

    const dto : Partial<Book> = {
    codeGenre : this.code(),
    datePublication : new Date(this.date())
    }

    // renvoie un tableau
    this.myService.findByMonth(dto).pipe(
      delay(300)
    ).subscribe( {
      next: (p)=>
        {
        this.number.set(p.length > 0 ? p[0].codeLot : null)
        console.log(p)
      }
      }
    )
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

import { ChangeDetectionStrategy, Component, computed, effect, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { MyRessourceServiceService } from '../../services/http/my-ressource-service.service';
import { Book } from '../../core/models/Book.model';
import { delay, distinctUntilChanged, tap } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-with-signals',
  imports: [FormsModule],
  templateUrl: './form-with-signals.component.html',
  styleUrl: './form-with-signals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormWithSignalsComponent implements OnInit {

  // DI
  myService = inject(MyRessourceServiceService);

  readonly code = signal("0460");
  readonly date = signal(this.getPreviousMonth());
  readonly number : WritableSignal<number | null> = signal(null);

  ngOnInit(): void {
    this.updateNumberInputValue();
  }

  //1st option

  // readonly shouldFetchNumber = effect(() => {
  //   this.updateNumberInputValue();
  // })

  //2nd option
  onHandleChange()  {   
    this.updateNumberInputValue();
  }

  onHandleInput() {
    console.log("touched");
  }

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
  
  getPreviousMonth() {
    const date = new Date();
    date.setMonth(date.getMonth() -1)
    return date.toISOString().substring(0,7)
  }

  
}

import {
    Component,
    EventEmitter,
    Injectable,
    Input,
    Output,
} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
    awayScore,
    homeScore,
} from '../../state/scoreboard/scoreboard.actions';
import {
    selectAwayScore,
    selectHomeScore,
} from '../../state/scoreboard/scoreboard.selector';

@Component({
    selector: 'app-scoreboard',
    templateUrl: './scoreboard.component.html',
    styleUrls: ['./scoreboard.component.scss'],
})
@Injectable({ providedIn: 'root' })
export class ScoreboardComponent {
    @Input() home: Number = 0;
    @Input() away: Number = 0;

    @Output() increaseHome = new EventEmitter();
    @Output() increaseAway = new EventEmitter();

    homeScore$: Observable<Number>;
    awayScore$: Observable<Number>;

    constructor(private store: Store) {
        this.homeScore$ = this.store.pipe(select(selectHomeScore));
        this.awayScore$ = this.store.pipe(select(selectAwayScore));
    }

    handleHomeClick() {
        this.store.dispatch(homeScore());
    }
    handleAwayClick() {
        this.store.dispatch(awayScore());
    }
}

import { BuchungType } from './buchung-type.enum';
import { Umsatz } from './umsatz';

export interface Buchung {
    type: BuchungType;
    verwendung?: string;
    empfaenger?: string;
    umsaetze: Umsatz[];
}

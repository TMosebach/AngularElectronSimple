import { AssetRef } from './asset-ref';
import { KontoRef } from './konto-ref';

export interface Umsatz {
    konto: KontoRef;
    valuta: Date;
    betrag: number;
    menge?: number;
    asset?: AssetRef;
}

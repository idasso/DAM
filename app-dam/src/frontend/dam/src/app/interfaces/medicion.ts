import { IonDatetime } from "@ionic/angular"

export interface Medicion {
    medicionId: number,
    fecha: IonDatetime,
    valor: string,
    dispositivoId: number
}
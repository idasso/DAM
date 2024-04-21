import { IonDatetime } from "@ionic/angular"

export interface LogRiego {
    logRiegoId: number,
    apertura: number,
    fecha: IonDatetime,
    electrovalvulaId: number
}
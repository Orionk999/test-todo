import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'all' | 'finished' | 'todo';


export const setFiltro = createAction(
    '[Filtro] Set Filtro',
    props<{ filtro: filtrosValidos }>()
);


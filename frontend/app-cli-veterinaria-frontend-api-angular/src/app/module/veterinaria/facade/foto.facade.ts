/*
 * @fileoverview    {FotoFacade}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
import { Injectable } from '@angular/core';
import { GenericFacade } from '@app/module/essential/facade/generic.facade';
import { FotoViewModel } from '../model/foto.model';
import { FotoState } from '../state/foto.state';
import { FotoService } from '../service/foto.service';

/**
 * TODO: Description of {@code FotoFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class FotoFacade extends GenericFacade<FotoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: FotoService,
        entityState: FotoState) {
        super(entityService, entityState);
    }

}

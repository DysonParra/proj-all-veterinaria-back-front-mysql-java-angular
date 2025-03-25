/*
 * @fileoverview    {MascotaFacade}
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
import { MascotaViewModel } from '../model/mascota.model';
import { MascotaState } from '../state/mascota.state';
import { MascotaService } from '../service/mascota.service';

/**
 * TODO: Description of {@code MascotaFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class MascotaFacade extends GenericFacade<MascotaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: MascotaService,
        entityState: MascotaState) {
        super(entityService, entityState);
    }

}

/*
 * @fileoverview    {ChatDetalleFacade}
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
import { ChatDetalleViewModel } from '../model/chat-detalle.model';
import { ChatDetalleState } from '../state/chat-detalle.state';
import { ChatDetalleService } from '../service/chat-detalle.service';

/**
 * TODO: Description of {@code ChatDetalleFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ChatDetalleFacade extends GenericFacade<ChatDetalleViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: ChatDetalleService,
        entityState: ChatDetalleState) {
        super(entityService, entityState);
    }

}

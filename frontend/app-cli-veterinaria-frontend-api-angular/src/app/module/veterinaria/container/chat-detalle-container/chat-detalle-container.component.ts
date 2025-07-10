/*
 * @overview        {ChatDetalleContainerComponent}
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
import { Component } from '@angular/core';
import { GenericContainerComponent } from '@app/module/essential/container/generic-container.component';
import { ChatDetalleViewModel } from '../../model/chat-detalle.model';
import { ChatDetalleFacade } from '../../facade/chat-detalle.facade';

/**
 * TODO: Description of {@code ChatDetalleContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-chat-detalle-container',
    templateUrl: './chat-detalle-container.component.html',
    standalone: false,
    styleUrls: ['./chat-detalle-container.component.css']
})
export class ChatDetalleContainerComponent extends GenericContainerComponent<ChatDetalleViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ChatDetalleViewModel,
        entityFacade: ChatDetalleFacade) {
        super(entityInstance, entityFacade);
    }

}

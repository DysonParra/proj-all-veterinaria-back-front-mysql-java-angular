/*
 * @fileoverview    {ChatDetalleComponent}
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
import { GenericComponent } from '@app/module/essential/component/generic.component';
import { ChatDetalleViewModel } from '../../model/chat-detalle.model';

/**
 * TODO: Description of {@code ChatDetalleComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-chat-detalle',
    templateUrl: './chat-detalle.component.html',
    standalone: false,
    styleUrls: ['./chat-detalle.component.css']
})
export class ChatDetalleComponent extends GenericComponent<ChatDetalleViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ChatDetalleViewModel) {
        super(entityInstance);
    }

}

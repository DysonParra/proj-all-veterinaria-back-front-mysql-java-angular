/*
 * @fileoverview    {ChatContainerComponent}
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
import { ChatViewModel } from '../../model/chat.model';
import { ChatFacade } from '../../facade/chat.facade';

/**
 * TODO: Description of {@code ChatContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-chat-container',
    templateUrl: './chat-container.component.html',
    standalone: false,
    styleUrls: ['./chat-container.component.css']
})
export class ChatContainerComponent extends GenericContainerComponent<ChatViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ChatViewModel,
        entityFacade: ChatFacade) {
        super(entityInstance, entityFacade);
    }

}

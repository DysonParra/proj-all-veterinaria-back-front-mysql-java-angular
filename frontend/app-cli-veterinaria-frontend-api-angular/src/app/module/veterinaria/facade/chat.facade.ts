/*
 * @fileoverview    {ChatFacade}
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
import { ChatViewModel } from '../model/chat.model';
import { ChatState } from '../state/chat.state';
import { ChatService } from '../service/chat.service';

/**
 * TODO: Description of {@code ChatFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ChatFacade extends GenericFacade<ChatViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: ChatService,
        entityState: ChatState) {
        super(entityService, entityState);
    }

}

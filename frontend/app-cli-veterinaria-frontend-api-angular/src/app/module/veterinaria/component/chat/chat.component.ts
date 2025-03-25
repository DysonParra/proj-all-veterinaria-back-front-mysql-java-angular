/*
 * @fileoverview    {ChatComponent}
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
import { ChatViewModel } from '../../model/chat.model';

/**
 * TODO: Description of {@code ChatComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    standalone: false,
    styleUrls: ['./chat.component.css']
})
export class ChatComponent extends GenericComponent<ChatViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ChatViewModel) {
        super(entityInstance);
    }

}

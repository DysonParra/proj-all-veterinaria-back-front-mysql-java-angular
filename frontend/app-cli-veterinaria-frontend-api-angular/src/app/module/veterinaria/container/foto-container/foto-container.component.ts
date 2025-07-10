/*
 * @overview        {FotoContainerComponent}
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
import { FotoViewModel } from '../../model/foto.model';
import { FotoFacade } from '../../facade/foto.facade';

/**
 * TODO: Description of {@code FotoContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-foto-container',
    templateUrl: './foto-container.component.html',
    standalone: false,
    styleUrls: ['./foto-container.component.css']
})
export class FotoContainerComponent extends GenericContainerComponent<FotoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: FotoViewModel,
        entityFacade: FotoFacade) {
        super(entityInstance, entityFacade);
    }

}

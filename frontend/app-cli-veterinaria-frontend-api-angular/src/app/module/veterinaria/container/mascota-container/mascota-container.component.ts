/*
 * @overview        {MascotaContainerComponent}
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
import { MascotaViewModel } from '../../model/mascota.model';
import { MascotaFacade } from '../../facade/mascota.facade';

/**
 * TODO: Description of {@code MascotaContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-mascota-container',
    templateUrl: './mascota-container.component.html',
    standalone: false,
    styleUrls: ['./mascota-container.component.css']
})
export class MascotaContainerComponent extends GenericContainerComponent<MascotaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MascotaViewModel,
        entityFacade: MascotaFacade) {
        super(entityInstance, entityFacade);
    }

}

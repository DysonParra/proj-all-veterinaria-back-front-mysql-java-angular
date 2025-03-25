/*
 * @fileoverview    {MascotaComponent}
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
import { MascotaViewModel } from '../../model/mascota.model';

/**
 * TODO: Description of {@code MascotaComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-mascota',
    templateUrl: './mascota.component.html',
    standalone: false,
    styleUrls: ['./mascota.component.css']
})
export class MascotaComponent extends GenericComponent<MascotaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MascotaViewModel) {
        super(entityInstance);
    }

}

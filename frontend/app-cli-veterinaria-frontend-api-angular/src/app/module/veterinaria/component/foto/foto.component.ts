/*
 * @overview        {FotoComponent}
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
import { FotoViewModel } from '../../model/foto.model';

/**
 * TODO: Description of {@code FotoComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-foto',
    templateUrl: './foto.component.html',
    standalone: false,
    styleUrls: ['./foto.component.css']
})
export class FotoComponent extends GenericComponent<FotoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: FotoViewModel) {
        super(entityInstance);
    }

}

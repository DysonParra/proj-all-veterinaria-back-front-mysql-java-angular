/*
 * @overview        {VeterinariaRoutingModule}
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
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatViewComponent } from './view/chat-view/chat-view.component';
import { ChatDetalleViewComponent } from './view/chat-detalle-view/chat-detalle-view.component';
import { FotoViewComponent } from './view/foto-view/foto-view.component';
import { MascotaViewComponent } from './view/mascota-view/mascota-view.component';
import { PersonaViewComponent } from './view/persona-view/persona-view.component';

const routes: Routes = [
    {
        path: 'chat',
        component: ChatViewComponent
    },
    {
        path: 'chat-detalle',
        component: ChatDetalleViewComponent
    },
    {
        path: 'foto',
        component: FotoViewComponent
    },
    {
        path: 'mascota',
        component: MascotaViewComponent
    },
    {
        path: 'persona',
        component: PersonaViewComponent
    },
];

/**
 * TODO: Description of {@code VeterinariaRoutingModule}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VeterinariaRoutingModule { }

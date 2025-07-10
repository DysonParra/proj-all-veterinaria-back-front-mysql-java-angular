/*
 * @overview        {VeterinariaModule}
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
import { CommonModule } from '@angular/common';

import {
    DxBoxModule,
    DxSelectBoxModule,
    DxFormModule,
    DxButtonModule,
    DxDataGridModule,
    DxSchedulerModule,
    DxCalendarModule,
    DxDrawerModule,
    DxListModule,
    DxContextMenuModule,
    DxDateBoxModule,
    DxRadioGroupModule,
    DxPopupModule,
    DxTextBoxModule,
    DxTemplateModule,
    DxHtmlEditorModule,
    DxDropDownBoxModule,
    DxDropDownButtonModule,
    DxToolbarModule,
    DxCheckBoxModule,
    DxValidatorModule,
    DxScrollViewModule,
    DxLoadPanelModule
} from 'devextreme-angular';

import { ChatFacade } from './facade/chat.facade';
import { ChatService } from './service/chat.service';
import { ChatComponent } from './component/chat/chat.component';
import { ChatContainerComponent } from './container/chat-container/chat-container.component';
import { ChatViewComponent } from './view/chat-view/chat-view.component';

import { ChatDetalleFacade } from './facade/chat-detalle.facade';
import { ChatDetalleService } from './service/chat-detalle.service';
import { ChatDetalleComponent } from './component/chat-detalle/chat-detalle.component';
import { ChatDetalleContainerComponent } from './container/chat-detalle-container/chat-detalle-container.component';
import { ChatDetalleViewComponent } from './view/chat-detalle-view/chat-detalle-view.component';

import { FotoFacade } from './facade/foto.facade';
import { FotoService } from './service/foto.service';
import { FotoComponent } from './component/foto/foto.component';
import { FotoContainerComponent } from './container/foto-container/foto-container.component';
import { FotoViewComponent } from './view/foto-view/foto-view.component';

import { MascotaFacade } from './facade/mascota.facade';
import { MascotaService } from './service/mascota.service';
import { MascotaComponent } from './component/mascota/mascota.component';
import { MascotaContainerComponent } from './container/mascota-container/mascota-container.component';
import { MascotaViewComponent } from './view/mascota-view/mascota-view.component';

import { PersonaFacade } from './facade/persona.facade';
import { PersonaService } from './service/persona.service';
import { PersonaComponent } from './component/persona/persona.component';
import { PersonaContainerComponent } from './container/persona-container/persona-container.component';
import { PersonaViewComponent } from './view/persona-view/persona-view.component';

import { SharedModule } from '@app/module/shared/shared.module';
import { VeterinariaRoutingModule } from '@app/module/veterinaria/veterinaria.routing.module';

/**
 * TODO: Description of {@code VeterinariaModule}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@NgModule({
    declarations: [
        ChatComponent,
        ChatContainerComponent,
        ChatViewComponent,
        ChatDetalleComponent,
        ChatDetalleContainerComponent,
        ChatDetalleViewComponent,
        FotoComponent,
        FotoContainerComponent,
        FotoViewComponent,
        MascotaComponent,
        MascotaContainerComponent,
        MascotaViewComponent,
        PersonaComponent,
        PersonaContainerComponent,
        PersonaViewComponent,
    ],
    imports: [
        // ng modules
        CommonModule,
        DxBoxModule,
        DxButtonModule,
        DxCalendarModule,
        DxCheckBoxModule,
        DxContextMenuModule,
        DxDataGridModule,
        DxDateBoxModule,
        DxDrawerModule,
        DxDropDownBoxModule,
        DxDropDownButtonModule,
        DxFormModule,
        DxHtmlEditorModule,
        DxListModule,
        DxLoadPanelModule,
        DxPopupModule,
        DxRadioGroupModule,
        DxSchedulerModule,
        DxScrollViewModule,
        DxSelectBoxModule,
        DxTemplateModule,
        DxTextBoxModule,
        DxToolbarModule,
        DxValidatorModule,

        // Own modules
        VeterinariaRoutingModule,
        SharedModule
    ],
    exports: [
        ChatViewComponent,
        ChatDetalleViewComponent,
        FotoViewComponent,
        MascotaViewComponent,
        PersonaViewComponent,
    ],
    providers: [
        ChatFacade,
        ChatService,
        ChatDetalleFacade,
        ChatDetalleService,
        FotoFacade,
        FotoService,
        MascotaFacade,
        MascotaService,
        PersonaFacade,
        PersonaService,
    ]
})
export class VeterinariaModule { }

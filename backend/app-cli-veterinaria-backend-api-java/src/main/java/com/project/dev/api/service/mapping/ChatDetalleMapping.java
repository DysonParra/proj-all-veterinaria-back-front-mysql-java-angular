/*
 * @overview        {ChatDetalleMapping}
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
package com.project.dev.api.service.mapping;

import com.project.dev.api.domain.ChatDetalle;
import com.project.dev.api.dto.ChatDetalleDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * TODO: Description of {@code ChatDetalleMapping}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Mapper(componentModel = "spring")
public interface ChatDetalleMapping extends GenericMapping<ChatDetalleDTO, ChatDetalle> {

    /**
     * Obtiene una entidad con base en su DTO usando el campo clave de la base de datos.
     *
     * @param dto es el DTO a convertir en entidad.
     * @return la entidad equivalente al dto.
     */
    @Mapping(source = "intIdChatDetalle", target = "intIdChatDetalle")
    @Override
    public ChatDetalle getEntity(ChatDetalleDTO dto);

    /**
     * Obtiene un DTO con base en su entidad usando el campo clave de la base de datos.
     *
     * @param entity es la entidad a convertir en DTO.
     * @return el DTO equivalente a la entidad.
     */
    @Mapping(source = "intIdChatDetalle", target = "intIdChatDetalle")
    @Override
    public ChatDetalleDTO getDto(ChatDetalle entity);

    /**
     * Obtiene una entidad usando el ID suministrado.
     *
     * @param strId es el id de la entidad.
     * @return la entidad con el ID suministrado.
     */
    public default ChatDetalle withId(String strId) {
        if (strId == null) {
            return null;
        }
        ChatDetalle entity = new ChatDetalle();
        entity.setIntIdChatDetalle(Long.parseLong(strId));
        return entity;
    }
}

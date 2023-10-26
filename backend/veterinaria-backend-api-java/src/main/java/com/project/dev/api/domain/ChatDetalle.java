/*
 * @fileoverview    {ChatDetalle}
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
package com.project.dev.api.domain;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Definición de {@code ChatDetalle}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Entity
@Table(name = "\"ChatDetalle\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class ChatDetalle implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdChatDetalle;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtUltima;
    @Column(length = 2, columnDefinition = "enum")
    private String enmEscribiendo;
    @JoinColumn(name = "intIdPersona", referencedColumnName = "intIdPersona")
    private Long intIdPersona;

}

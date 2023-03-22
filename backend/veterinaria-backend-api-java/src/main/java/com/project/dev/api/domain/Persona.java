/*
 * @fileoverview    {Persona}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementación realizada.
 * @version 2.0     Documentación agregada.
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
 * TODO: Definición de {@code Persona}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Entity
@Table(name = "\"Persona\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Persona implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdPersona;
    @Column(length = 200)
    private String strNombres;
    @Column(length = 30)
    private String strCelular;
    @Column(length = 100)
    private String strEmail;
    @Column(length = 20)
    private String strUsuario;
    @Column(length = 20)
    private String strClave;

}

/*
 * @fileoverview    {Mascota}
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
 * TODO: Definición de {@code Mascota}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Entity
@Table(name = "\"Mascota\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Mascota implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdMascota;
    @Column(length = 100)
    private String strNombre;
    @Column(length = 3)
    private String strEdad;
    @Column(length = 100)
    private String strUbicacion;
    @Column(length = 2000)
    private String strRaza;
    @Column(length = 100)
    private String strTipo;
    @JoinColumn(name = "intIdPersona", referencedColumnName = "intIdPersona")
    private Long intIdPersona;

}

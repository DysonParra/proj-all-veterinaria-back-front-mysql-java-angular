DROP DATABASE IF EXISTS veterinaria;
CREATE DATABASE IF NOT EXISTS veterinaria;
USE veterinaria;

CREATE TABLE IF NOT EXISTS `Chat`(
    `idChat`                            BIGINT              NOT NULL PRIMARY KEY,
    `remitente`                         INT                     NULL DEFAULT NULL,
    `receptor`                          INT                     NULL DEFAULT NULL,
    `mensaje`                           TEXT                    NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT CURRENT_TIMESTAMP(),
    `estado`                            INT(1)                  NULL DEFAULT NULL,
    `idChatDetalle`                     BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `ChatDetalle`(
    `idChatDetalle`                     BIGINT              NOT NULL PRIMARY KEY,
    `idPersona`                         BIGINT                  NULL DEFAULT NULL,
    `ultima`                            TIMESTAMP               NULL DEFAULT CURRENT_TIMESTAMP(),
    `escribiendo`                       ENUM('no', 'si')        NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Foto`(
    `idFoto`                            BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `idMascota`                         BIGINT                  NULL DEFAULT NULL,
    `imagen`                            VARCHAR(8000)           NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Mascota`(
    `idMascota`                         BIGINT              NOT NULL PRIMARY KEY,
    `idPersona`                         BIGINT                  NULL DEFAULT NULL,
    `nombre`                            VARCHAR(100)            NULL DEFAULT NULL,
    `edad`                              VARCHAR(3)              NULL DEFAULT NULL,
    `ubicacion`                         VARCHAR(100)            NULL DEFAULT NULL,
    `raza`                              VARCHAR(2000)           NULL DEFAULT NULL,
    `tipo`                              VARCHAR(100)            NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Persona`(
    `idPersona`                         BIGINT              NOT NULL PRIMARY KEY,
    `nombres`                           VARCHAR(200)            NULL DEFAULT NULL,
    `celular`                           VARCHAR(30)             NULL DEFAULT NULL,
    `email`                             VARCHAR(100)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(20)             NULL DEFAULT NULL,
    `clave`                             VARCHAR(20)             NULL DEFAULT NULL
);

-- ---------------------------- --
-- --------FOREIGN KEYS-------- --
-- ---------------------------- --

ALTER TABLE `Chat`
    ADD INDEX `fkChatIdChatDetalleIdx` (`idChatDetalle` ASC),
    ADD CONSTRAINT `fkChatIdChatDetalle`
        FOREIGN KEY (`idChatDetalle`)
        REFERENCES `ChatDetalle` (`idChatDetalle`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `ChatDetalle`
    ADD INDEX `fkChatDetalleIdPersonaIdx` (`idPersona` ASC),
    ADD CONSTRAINT `fkChatDetalleIdPersona`
        FOREIGN KEY (`idPersona`)
        REFERENCES `Persona` (`idPersona`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `Foto`
    ADD INDEX `fkFotoIdMascotaIdx` (`idMascota` ASC),
    ADD CONSTRAINT `fkFotoIdMascota`
        FOREIGN KEY (`idMascota`)
        REFERENCES `Mascota` (`idMascota`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `Mascota`
    ADD INDEX `fkMascotaIdPersonaIdx` (`idPersona` ASC),
    ADD CONSTRAINT `fkMascotaIdPersona`
        FOREIGN KEY (`idPersona`)
        REFERENCES `Persona` (`idPersona`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

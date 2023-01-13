DROP DATABASE IF EXISTS veterinaria;
CREATE DATABASE IF NOT EXISTS veterinaria;
USE veterinaria;

CREATE TABLE IF NOT EXISTS `Chat`(
    `intIdChat`                         BIGINT              NOT NULL PRIMARY KEY,
    `intRemitente`                      INT                     NULL DEFAULT NULL,
    `intReceptor`                       INT                     NULL DEFAULT NULL,
    `txtMensaje`                        TEXT                    NULL DEFAULT NULL,
    `dtFecha`                           TIMESTAMP               NULL DEFAULT CURRENT_TIMESTAMP(),
    `intEstado`                         INT(1)                  NULL DEFAULT NULL,
    `intIdChatDetalle`                  BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `ChatDetalle`(
    `intIdChatDetalle`                  BIGINT              NOT NULL PRIMARY KEY,
    `intIdPersona`                      BIGINT                  NULL DEFAULT NULL,
    `dtUltima`                          TIMESTAMP               NULL DEFAULT CURRENT_TIMESTAMP(),
    `enmEscribiendo`                    ENUM('no', 'si')        NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Foto`(
    `intIdFoto`                         BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `intIdMascota`                      BIGINT                  NULL DEFAULT NULL,
    `strImagen`                         VARCHAR(8000)           NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Mascota`(
    `intIdMascota`                      BIGINT              NOT NULL PRIMARY KEY,
    `intIdPersona`                      BIGINT                  NULL DEFAULT NULL,
    `strNombre`                         VARCHAR(100)            NULL DEFAULT NULL,
    `strEdad`                           VARCHAR(3)              NULL DEFAULT NULL,
    `strUbicacion`                      VARCHAR(100)            NULL DEFAULT NULL,
    `strRaza`                           VARCHAR(2000)           NULL DEFAULT NULL,
    `strTipo`                           VARCHAR(100)            NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `Persona`(
    `intIdPersona`                      BIGINT              NOT NULL PRIMARY KEY,
    `strNombres`                        VARCHAR(200)            NULL DEFAULT NULL,
    `strCelular`                        VARCHAR(30)             NULL DEFAULT NULL,
    `strEmail`                          VARCHAR(100)            NULL DEFAULT NULL,
    `strUsuario`                        VARCHAR(20)             NULL DEFAULT NULL,
    `strClave`                          VARCHAR(20)             NULL DEFAULT NULL
);

-- ---------------------------- --
-- --------FOREIGN KEYS-------- --
-- ---------------------------- --

ALTER TABLE `Chat`
    ADD INDEX `fkChatIdChatDetalleIdx` (`intIdChatDetalle` ASC),
    ADD CONSTRAINT `fkChatIdChatDetalle`
        FOREIGN KEY (`intIdChatDetalle`)
        REFERENCES `ChatDetalle` (`intIdChatDetalle`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `ChatDetalle`
    ADD INDEX `fkChatDetalleIdPersonaIdx` (`intIdPersona` ASC),
    ADD CONSTRAINT `fkChatDetalleIdPersona`
        FOREIGN KEY (`intIdPersona`)
        REFERENCES `Persona` (`intIdPersona`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `Foto`
    ADD INDEX `fkFotoIdMascotaIdx` (`intIdMascota` ASC),
    ADD CONSTRAINT `fkFotoIdMascota`
        FOREIGN KEY (`intIdMascota`)
        REFERENCES `Mascota` (`intIdMascota`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `Mascota`
    ADD INDEX `fkMascotaIdPersonaIdx` (`intIdPersona` ASC),
    ADD CONSTRAINT `fkMascotaIdPersona`
        FOREIGN KEY (`intIdPersona`)
        REFERENCES `Persona` (`intIdPersona`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

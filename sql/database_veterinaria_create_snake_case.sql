DROP DATABASE IF EXISTS veterinaria;
CREATE DATABASE IF NOT EXISTS veterinaria;
USE veterinaria;

CREATE TABLE IF NOT EXISTS `chat`(
    `id_chat`                           BIGINT              NOT NULL PRIMARY KEY,
    `remitente`                         INT                     NULL DEFAULT NULL,
    `receptor`                          INT                     NULL DEFAULT NULL,
    `mensaje`                           TEXT                    NULL DEFAULT NULL,
    `fecha`                             TIMESTAMP               NULL DEFAULT CURRENT_TIMESTAMP(),
    `estado`                            INT(1)                  NULL DEFAULT NULL,
    `id_chat_detalle`                   BIGINT                  NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `chat_detalle`(
    `id_chat_detalle`                   BIGINT              NOT NULL PRIMARY KEY,
    `id_persona`                        BIGINT                  NULL DEFAULT NULL,
    `ultima`                            TIMESTAMP               NULL DEFAULT CURRENT_TIMESTAMP(),
    `escribiendo`                       ENUM('no', 'si')        NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `foto`(
    `id_foto`                           BIGINT              NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_mascota`                        BIGINT                  NULL DEFAULT NULL,
    `imagen`                            VARCHAR(8000)           NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `mascota`(
    `id_mascota`                        BIGINT              NOT NULL PRIMARY KEY,
    `id_persona`                        BIGINT                  NULL DEFAULT NULL,
    `nombre`                            VARCHAR(100)            NULL DEFAULT NULL,
    `edad`                              VARCHAR(3)              NULL DEFAULT NULL,
    `ubicacion`                         VARCHAR(100)            NULL DEFAULT NULL,
    `raza`                              VARCHAR(2000)           NULL DEFAULT NULL,
    `tipo`                              VARCHAR(100)            NULL DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `persona`(
    `id_persona`                        BIGINT              NOT NULL PRIMARY KEY,
    `nombres`                           VARCHAR(200)            NULL DEFAULT NULL,
    `celular`                           VARCHAR(30)             NULL DEFAULT NULL,
    `email`                             VARCHAR(100)            NULL DEFAULT NULL,
    `usuario`                           VARCHAR(20)             NULL DEFAULT NULL,
    `clave`                             VARCHAR(20)             NULL DEFAULT NULL
);

-- ---------------------------- --
-- --------FOREIGN KEYS-------- --
-- ---------------------------- --

ALTER TABLE `chat`
    ADD INDEX `fk_chat_id_chat_detalle_idx` (`id_chat_detalle` ASC),
    ADD CONSTRAINT `fk_chat_id_chat_detalle`
        FOREIGN KEY (`id_chat_detalle`)
        REFERENCES `chat_detalle` (`id_chat_detalle`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `chat_detalle`
    ADD INDEX `fk_chat_detalle_id_persona_idx` (`id_persona` ASC),
    ADD CONSTRAINT `fk_chat_detalle_id_persona`
        FOREIGN KEY (`id_persona`)
        REFERENCES `persona` (`id_persona`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `foto`
    ADD INDEX `fk_foto_id_mascota_idx` (`id_mascota` ASC),
    ADD CONSTRAINT `fk_foto_id_mascota`
        FOREIGN KEY (`id_mascota`)
        REFERENCES `mascota` (`id_mascota`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `mascota`
    ADD INDEX `fk_mascota_id_persona_idx` (`id_persona` ASC),
    ADD CONSTRAINT `fk_mascota_id_persona`
        FOREIGN KEY (`id_persona`)
        REFERENCES `persona` (`id_persona`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

Feature: Como estudiante quiero ver solamente lo relacionado con mi rol y privilegio.

Scenario: Quiero ir a carga masiva y que no me deje
        Given: El usuario ingresa como estudiante
        When: Se selecciona carga masiva
        Then: No debe de cambiar de página el sistema

Scenario: Quiero ir a cursos aprobados
        Given: El usuario ingresa como estudiante
        When: Se selecciona cursos aprobados
        Then: Debe de cambiar de página el sistema

Feature: Como administrador quiero ver únicamente lo relacionado a la administración de pensum y mi perfil personal.

Scenario: Ir a cargar masiva
        Given: El usuario ingresa como administrador
        When: Se selecciona carga masiva
        Then: Debe de cambiar de página el sistema

Scenario: Ir a cursos aprobados y que no me deje
        Given: El usuario ingresa como administrador
        When: Se selecciona cursos aprobados
        Then: No debe de cambiar de página el sistema
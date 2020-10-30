Feature: Como usuario quiero ver los cursos asignables y crear un horario

Scenario: Deseo consultar los cursos asignables
        Given: He iniciado sesión en mi cuenta
        And: Estoy en la página de creacion de horario
        When Se carga la página
        Then: Se deben mostrar los cursos asignables

Scenario: Agregar un curso al horario
        Given: He iniciado sesión en mi cuenta
        And: Estoy en la página de creación de horario
        When: Hago clic a un curso asignable
        Then: Se abre la página de add-curso
Feature: Como usuario quiero ver y crear notas personales

Scenario: Deseo consultar mis notas
        Given: He iniciado sesión en mi cuenta
        And: Estoy en la página de notas
        When: Se carga la pagina
        Then: Se deben mostrar mis notas

Scenario: Crear nueva nota
        Given: He iniciado sesión en mi cuenta
        And: Estoy en la página de notas
        When: Hago clic en el botón de +
        Then: Se debe mostrar la página de nuevaNota
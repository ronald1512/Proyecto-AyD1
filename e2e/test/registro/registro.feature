Feature: Como un estudiante quiero crear un usuario para acceder a la aplicación

Scenario: Actualizar datos personales
    Given Estoy en 'Registro'
    When el campo 'correo' con mi correo 'prueba@gmail.com'
    And lleno el campo 'contraseña' con mi contraseña '*********'
    And hago click en el botón 'Registrarme'
    Then debería de mostrar un mensaje con el resultado    
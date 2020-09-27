Feature: Como usuario quiero acceder a la aplicación

Scenario: Abro la aplicación
        Given: El usuario ingresa a la url de la aplicación
        When: Se carga la aplicación
        Then: Se debe mostrar la vista de inicio de sesión, el botón de navegación y el párrafo de error debe mostrarse sin errores de error.

Scenario: Navegar hacia la vista de registro
        Given: El usuario se encuentra en la vista login
        When: Presiona el botón 'registro'
        Then: Se debe mostrar la vista de Registro

Scenario: Credenciales invalidas
        Given: El usuario agrega credenciales inválidas a los campos
        When: Presiona el botón 'signin'
        Then: Se debe mostrar el mensaje 'CORREO O CONTRASEÑA INVÁLIDOS'

Scenario: Inicio de sesión exitoso
        Given: El usuario agrega credenciales válidas a los campos
        When: Presiona el botón 'signin'
        Then: Se debe mostrar navegar a vista de carga masiva
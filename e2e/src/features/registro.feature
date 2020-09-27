Feature Como un estudiante quiero crear un usuario para acceder a la aplicación

Scenario: No ingresar datos al formulario
    Given Dado que el usuario no ingresa sus credenciales en el formulario.
    When Cuando hace clic en el botón 'Registrarme'.
    Then Se debe mostrar el mensaje de error.
              
Scenario: Regresar a la pantalla de login
    Given Dado que el usuario prefiere no crear un usuario y regresar a la pantalla de 'login'
    When Cuando hace clic en el botón 'Login'.
    Then Se debe cambiar de página.
              
      
Scenario: Ingresar unicamente el correo en el formulario
    Given Dado que el usuario ingresa solo su correo.
    When Cuando hace clic en el botón 'Registrarme'.
    Then Se debe mostrar el mensaje de error.
              
      
Scenario: Ingresar ambos datos al formulario
    Given Dado que el usuario ingresa sus credenciales en el formulario.
    When Cuando hace clic en el botón 'Registrarme'.
    Then Se debe mostrar la página de 'login'.
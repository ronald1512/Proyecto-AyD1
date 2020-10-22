Feature Como usuario quiero poder recuperar mi contraseña

Scenario: No ingresar datos al formulario
    Given Dado que el usuario no ingresa su correo
    When Cuando hace clic en el botón 'Enviar'.
    Then Se debe mostrar el mensaje de error.
              
Scenario: Regresar a la pantalla de login
    Given Dado que el usuario prefiere no solicitar el cambio de contraseña
    When Cuando hace clic en el botón 'Regresar'.
    Then Se debe cambiar de página.
              
      
Scenario: Ingresar datos al formulario
    Given Dado que el usuario ingresa su correo.
    When Cuando hace clic en el botón 'Enviar'.
    Then Debe enviar un correo y quedarse en esa página.
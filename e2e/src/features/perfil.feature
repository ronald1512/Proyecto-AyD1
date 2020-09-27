Feature: Ver y actualizar mis datos personales
    Esta feature permite ver y actualizar los datos personales

Scenario: Deseo ver mis datos personales
    Given He iniciado sesión en mi cuenta
    And Estoy en la página de perfil
    When Se carga la página
    Then Veo mis datos personales

Scenario: Actualizar mi nombre
    Given He iniciado sesión en mi cuenta
    And Estoy en la página de perfil
    And Ingreso un nombre en la casilla de nombre
    And El nombre contiene por lo menos 1 caracter
    When Hago click en el botón de "GUARDAR CAMBIOS"
    Then Mi nombre es actualizado

Scenario: Actualizar mi correo
    Given He iniciado sesión en mi cuenta
    And Estoy en la página de perfil
    And Ingreso un correo en la casilla de correo
    And El correo tiene el formato correcto
    When Hago click en el botón de "GUARDAR CAMBIOS"
    Then Mi correo es actualizado

Scenario: Actualizar mi nombre y correo
    Given He iniciado sesión en mi cuenta
    And Estoy en la página de perfil
    And Ingreso un nombre en la casilla de nombre
    And Ingreso un correo en la casilla de correo
    And El correo tiene el formato correcto
    When Hago click en el botón de "GUARDAR CAMBIOS"
    Then Mi correo es actualizado
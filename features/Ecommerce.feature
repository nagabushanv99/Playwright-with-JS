Feature: Ecommerce validations
    @Regression
  Scenario: Placing the Order
    Given a login to Ecommerce application with "nagabushanv11@gmail.com" and "Naga@1999"
    When Add "zara coat 3" to Cart
    Then Verify "zara coat 3" is displayed in the Cart
    When Enter valid details and Place the Order
    Then Verify order in present in the OrderHistory


     
  Scenario:  Placing the Order
    Given a login to Ecommerce2 application with "nagabushanv11@gmail.com" and "Naga@1999"
    Then Verify Error message is displayed

    Examples:
    | username            | password    |
    | nagabushanv11@gmail.com | Naga@1999|
    | hello@123.com       | Iamhello@12 |








Feature: Checking homepage functionality

    Background:
        Given User open the demoblaze website

    #TC_01
    @focus
    Scenario: Verify that the all homepage's functionality is available
        Then Check that the home page is displayed
        And Check that the all functionality is available

    
    #TC_02
    @focus
    Scenario: Verify that the 'Previous' and 'Next' button is working properly
        Then Check that the 'Previous' and 'Next' button is available
        And Check that the first page's item is visible
        When Click on the next button
        Then Check that the next page's item is visible
        Then Check that the previuos button is available
        When Click on the previous button
        Then Check that the first page is visible again

    #TC_03
    @focus
    Scenario: Verify that the items are arranged in category-wise
        Then Check that the category lists are available
        When Click on the Mobiles category
        Then Check that all Mobile items are displayed
        When Click on the Laptops category
        Then Check that the Laptop items are displayed
        When Click on the Monitors category
        Then Check that the Monitor items are displayed

    
    #TC_04
    @focus
    Scenario: Verify that the sign up is created successfully
        When Click on the signup option
        When Enter username and password
             | Username  | yelias |
             | Password  |   12345      |
        And Click on the signup button
        Then Check that the popup alert window is displayed

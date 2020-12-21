# Password Generator
🔗 [Terrence's Password Generator](https://terrencejchan.github.io/password-generator/)  
  

This app generates a random password taken from the parameters given by the user. The user can select if they would like their password to include lowercase letters, uppercase letters, symbols, and numbers. The user can specify a password with a length between 8 to 128 characters.  
  
Please note that the deployed page is generated from the "prompt-method" branch. The main branch uses checkboxes instead of prompts to take user-input.

## Logic
When the user loads the page, they are presented with a button. Clicking on the button starts the password generation process.  
  
The user is given a series of prompts that ask about the desired password's parameters. If the user does not select any parameters, the user is given an error alert and must make new selections.

When prompted for the length of the password, error-handling is included to ensure that the user inputs an integer between 8 to 128. Entering a number too low, high, or a non-integer will display an error alert, and ask the user make another input.

Once the parameters are set, the code ensures that the password will have at least one character of each selected character types. Afterwards, it will randomly select characters from the chosen character types until the length of the password is met.

The code will take this array of letters and shuffle it using the Durstenfeld shuffle method, and then create a string based on the shuffled characters.

Finally, the string will be displayed on the page where the user can copy and use the generated password.
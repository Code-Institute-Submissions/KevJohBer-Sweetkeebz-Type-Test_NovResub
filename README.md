# SweetKeebz Typing Test

This website, as the name suggests, is a typing test. It measures how many words per minute (WPM) you type. It also tracks the number of keystrokes that are correct aswell as the number of keystrokes which are incorrect. This website is perfect for anyone who would like to polish up their touchtyping skills or for anyone who just wants to stimulate their hands. 

![Typing test on multiple devices](assets/images/multiple-devices.jpg)

## Features

### Typing area

The first thing you will see on the page is 3 rows of randomly selected words that pops up at the center of the screen. When you type the words out, the characters you type changes color bisque if they are correct and red underlined if they are incorrect. The letter you are currently on is also highlighted with a bisque background to indicate which letter you are supposed to type.

![](assets/images/paragraph.jpg)

### Timer and restart

Below the paragraph, you can see the number 30 aswell as a circular arrow. The number 30 is a timer that counts down to 0 as soon as you begin typing. When the timer reaches 0, the user will be unable to type and the final result of the test will be displayed below. The circular arrow is a restart button. You can either click it or press tab + enter to restart. When restarted, the page will load 3 new rows of text and the timer will wait for you to begin typing again.

![](assets/images/timeandrestart.jpg)

### Results

Below the timer and restart section, you can see three symbols. First to the left is a check mark and represents the number of correct keystrokes that you entered. In the middle is an x symbol. This represents the amount of incorrect keystrokes that you have entered. To the far right, it says WPM, which is an acronym for Words Per Minute. This measures how fast you type. It does this by taking your number of correct keystrokes and dividing it by 5 and normalizing the result to a minute (since the test is 30s).

![](assets/images/resultarea.jpg)

### Caps lock warning

The website checks if caps lock is on and alerts the user as this can interefere with the accuracy of the test if not used properly.

![](assets/images/capslockon.jpg)
## Testing

The website has been tested on Chrome, Safari and Microsoft edge without any issues. 

When the time is up, the main text gets blurred out. This does not work with browsers like Firefox or Opera as it is done using webkit.

The website has been tested on mobile devices aswell without any issues.

### Validator testing
* HTML 
    * The website HTML passed the official W3C validator without any errors
* CSS
    * CSS passed the jigsaw validator without any errors
* JavaScript
    * JS code passed the JShint validator. It does not like the 'let' keyword however.
        * Metrics
        * There are 13 functions in this file.

        * Function with the largest signature take 1 arguments, while the median is 0.

        * Largest function has 25 statements in it, while the median is 3.

        * The most complex function has a cyclomatic complexity value of 5 while the median is 1

## Unfixed bugs

* When the appendRow function is called, the first character on the new row does not get highlighted, which might confuse the user as it is not clear where the user is.

## Deployment

* The website was deployed to Git Hub pages.
    * In the Git Hub repository, navigate to the Settings tab
    * From the source section drop-down menu, select the Master Branch
    * Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here: https://kevjohber.github.io/Sweetkeebz-Type-Test/
## Credits

* The code to make the characters react to keypresses and timer was based on [Typing Speed Test Game in HTML CSS & JavaScript](https://www.youtube.com/watch?v=Hg80AjDNnJk)

* The design was Inspired by [Monkeytype](https://monkeytype.com/)

* Icons in the restart and result area are taken from [Font Awesome](https://fontawesome.com/)
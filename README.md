# _Galactic Calculator_
## _By: Celeste Field_
## Description

_This application will calculate a users age and output an age year from various planets. They will be able to see how many years they have left to live according to a averge life expectancy age for their demographic. The user will be able to see how many years they have to live in comparison to other planets. Lastly, the user will be able to see if they have already surpassed the averge life expectancy for their demographic._

## Setup


* _Clone repository from Github: https://github.com/fieldceleste/galactic-calculator.git_
* _Open the repository folder in the terminal_
* _Enter $ npm install_
* _Open in editor (i.e. Visual Studio Code)_
* _Enter $ npm test in terminal_

## Known Bugs
_No known bugs at this time_

## Technology

* _JavaScript_
* _HTML_
* _CSS_
* _Bootstrap_
* _jQuery_
* _Git_
* _GitHub_
* _npm_
* _Node_
* _Jest_
* _Webpack_
* _Babel_


## Specs

|Behavior|Input|Output|
| :-----|:-----|:-----|
| It will only accept number values| 5 | "5" |√|
| It will be able to create an object called User| object=user| works |√| 
| It will take users age and turn it into earth years.  | 30 | 30 Earth years |√| 
| It will take users age in earth years and display age in Mercury years.(A Mercury year is .24 Earth years.) | 30 | 125 Mercury years | 
| It will take users age in earth years and display age in Venus years. (A Venus year is .62 Earth years.) | 30 | 48.4 Venus years |
| It will take a users age in earth years  and display age in Mars years. (A Mars year is 1.88 Earth years.) | 30 | 15.9 Mars years |
| It will take a users age in earth years and display age in Jupitar years. (A Jupiter year is 11.86 Earth years.) | 30 | 2.53 Jupiter years |
| It will take users life expectancy age for their demographic and will minus it from their current age, to show many years left they have to live. (White female averge age: 81 years) | 30 | 51 Earth years left |
| It will take users life expectancy years left and display their years left on Mercury. | 30 - Current year | 212.5 Mercury years left |
| It will take users life expectancy years left and display their years left on Venus. | 30 - Current year | 82.3 Venus years left |
| It will take users life expectancy years left and display their years left on Mars. | 30 - Current year | 27.1 Mars years left |
| It will take users life expectancy years left and display their years left on Mars. | 30 - Current year  | 4.3 Jupiter years left |
| If the user inputs their age and it's higher than the averge life expectancy, it will return how many years past that they have lived. | 91  | 10 years longer than expected, congrats!|

## Legal

#### MIT License

### Copyright (c) 2020 Celeste Field

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
# Marbacus
A simple HTML CSS and JS Calculator.
The name is a play on Marc and Abacus. (poorly done).

## Mark 1
Uses eval() (semi-safely since all input is restricted to only numbers and operator strings but not entirely: you can Ctrl + V invalid inputs)

Operations availbale:
    1. Add
    2. Subtract
    3. Multiply
    4. Divide

## Mark II
First major change from Mark I is the theme. 
Mark II uses a light blue theme with a glowing cyan display that has two levels.

Level 1 displays the value of the current operation being carried out.
Level 2 displays 0 by default, the current input, and result of a completed operation, valid or invalid with a corresponding error message.

### The Buttons
#### Delete and AC
DEL removes the last character of the bottom display and sets its to zero if the last character is deleted as well.
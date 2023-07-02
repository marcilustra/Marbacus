# Marbacus
A simple HTML CSS and JS Calculator.
The name is a play on Marc and Abacus. (poorly done).

# Navigation
1. [HTML VERSION](#html-version)
    a. [Mark 1](#mark-1)
    b. [Mark II](#mark-ii)
2. [VB Version](#vb-version)
    a. [Mark 1](#mark-ivb)


# HTML Version
## Mark II
First major change from Mark I is the theme. 
Mark II uses a light blue theme with a glowing cyan display that has two levels.

Level 1 displays the value of the current operation being carried out.
Level 2 displays 0 by default, the current input, and result of a completed operation, valid or invalid with a corresponding error message.
![image](https://github.com/marcilustra/Marbacus/assets/111253348/bd06af08-a380-4ec0-9a29-bea3ec5e0aa0)

### The Buttons
#### Delete and AC
DEL removes the last character of the bottom display and sets its to zero if the last character is deleted as well.

#### The Numbers
Append numbers to the bottom text I/O
![image](https://github.com/marcilustra/Marbacus/assets/111253348/299b3ce2-cba5-4dcd-a4a3-4d3c5495777a)

#### The Operators
1. Add
2. Subtract
3. Multiply
4. Divide
5. Exponentiate
6. Square root(disabled)
Before an operation is carried out the calculaot check first if there is a previous one being undertaken and calls for evaluation before the operand is appended to the top label output.

## Mark 1
Uses eval() (semi-safely since all input is restricted to only numbers and operator strings but not entirely: you can Ctrl + V invalid inputs)
![image](https://github.com/marcilustra/Marbacus/assets/111253348/96f3a396-dbea-417e-a43a-4783033bd15b)

Operations availbale:
    1. Add
    2. Subtract
    3. Multiply
    4. Divide

# VB Version
## Mark I(VB)

Borrows directly from Mark II of the HTMl version and is functionally identical to it with one exception. 
Divide by zero is caught by a check and terminates the program after giving the user a message to discourage them from doing it again.
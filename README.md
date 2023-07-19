# Marbacus
A simple HTML CSS and JS Calculator. \
It is slowly becoming a game to see how many languages I can make it in. \
The name is a play on Marc and Abacus. (poorly done).

# Navigation
1. [HTML VERSION](#html-version) \
    a. [Mark 1](#mark-1) \
    b. [Mark II](#mark-ii) \
    c. [Mark III](#mark-iii)
2. [VB Version](#vb-version) \
    a. [Mark 1](#mark-ivb)


# HTML Version
## Mark III
This time we propose a calculator that can perform calculations on Binary numbers and perhaps, more.
Allowing for different themes depending on the user's choice.
![image](https://github.com/marcilustra/Marbacus/assets/111253348/1ccd95fb-b352-40a6-bfb3-3bd35b0760c1)
Background Photo by <a href="https://unsplash.com/es/@pramodtiwari?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pramod Tiwari</a> on <a href="https://unsplash.com/t/3d-renders?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

![image](https://github.com/marcilustra/Marbacus/assets/111253348/b9c15d87-617e-4d6c-8b3d-5bb85c392c20)
Background Photo by <a href="https://unsplash.com/@beingabstrac?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">rishi</a> on <a href="https://unsplash.com/s/photos/red-and-black?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

![image](https://github.com/marcilustra/Marbacus/assets/111253348/33246801-59c0-437d-a063-ac603db665db)
Background Photo by <a href="https://unsplash.com/@emileseguin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">ÉMILE SÉGUIN ✳️✳️✳️</a> on <a href="https://unsplash.com/wallpapers/colors/white?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

## Mark II
First major change from Mark I is the theme. 
Mark II uses a light blue theme with a glowing cyan display that has two levels.

Top label displays the value of the current operation being carried out.
Bottom label displays 0 by default, the current input, and result of a completed operation, valid or invalid with a corresponding error message.
![image](https://github.com/marcilustra/Marbacus/assets/111253348/bd06af08-a380-4ec0-9a29-bea3ec5e0aa0)

### The Buttons
#### Delete and AC
![image](https://github.com/marcilustra/Marbacus/assets/111253348/d0f98c58-6709-496a-b9e6-09f139be72c6)

DEL removes the last character of the bottom display and sets its to zero if the last character is deleted as well.

#### The Numbers
Append numbers to the bottom text I/O
![image](https://github.com/marcilustra/Marbacus/assets/111253348/299b3ce2-cba5-4dcd-a4a3-4d3c5495777a)

#### The Operators
1. Add \
   ![image](https://github.com/marcilustra/Marbacus/assets/111253348/0313cc5d-f7d2-470f-8dde-2c1996c28fa2)

3. Subtract \
   ![image](https://github.com/marcilustra/Marbacus/assets/111253348/57fc57b4-562c-4fd3-a4d4-8e0686ae8c80)

5. Multiply \
   ![image](https://github.com/marcilustra/Marbacus/assets/111253348/1b5cfc69-0f11-443a-8c6e-ccb8b25772ad)

7. Divide \
   ![image](https://github.com/marcilustra/Marbacus/assets/111253348/e65b0b3e-92fa-4c72-9ca5-8537f2a62186)

9. Exponentiate \
    ![image](https://github.com/marcilustra/Marbacus/assets/111253348/15a5699e-6c8a-450c-9baf-1cf48a801cfb)

11. Square root(disabled) \
    ![image](https://github.com/marcilustra/Marbacus/assets/111253348/6a82f2c7-1a0d-49a8-8d38-00ec8f1a6488) \

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

Borrows directly from Mark II of the HTMl version and is functionally identical to it with one exception. \
![image](https://github.com/marcilustra/Marbacus/assets/111253348/ff708bed-bd1b-435c-a2da-8b7cbeed28bb) \
Divide by zero is caught by a check and terminates the program after giving the user a message to discourage them from doing it again. \
![image](https://github.com/marcilustra/Marbacus/assets/111253348/16cff665-841a-4ad0-82a8-c978d9bfeac0) \



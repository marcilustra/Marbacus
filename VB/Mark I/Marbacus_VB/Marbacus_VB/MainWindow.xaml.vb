Imports System.Media
Class MainWindow
    Private output As Double
    Private lefty As Double
    Private answered As Boolean = False
    Private dividedByZero As Boolean = False
    Private Sub clickSound(audioPath As String)
        Dim soundPlayer As New SoundPlayer(audioPath)
        soundPlayer.Play()
    End Sub
    Private Sub clearDisplay()
        lblTopText.Content = ""
        lblBottomText.Content = "0"
    End Sub
    Private Sub wipeVars()
        lefty = 0
        output = 0
    End Sub

    Private Sub delEat()
        Dim labelText As String = lblBottomText.Content
        If labelText.Length = 1 Then
            clearDisplay()
        Else
            lblBottomText.Content = labelText.Substring(0, labelText.Length - 1)
        End If
    End Sub
    Private Sub appendNumber(val As String)
        Dim labelText As String = lblBottomText.Content
        Dim topText As String = lblTopText.Content
        If answered Then
            wipeVars()
            Console.WriteLine(output)
        End If

        If topText = "Ans: " Then
            lblTopText.Content = ""
        End If

        If labelText = "0" Or answered Then
            lblBottomText.Content = val
            answered = False
        Else
            lblBottomText.Content &= val
        End If
    End Sub
    Private Sub clearAll()
        dividedByZero = False
        clearDisplay()
        wipeVars()
    End Sub
    Private Sub dotIT(val As String)
        Dim labelText As String = lblBottomText.Content
        If Not labelText.Contains(".") Then
            lblBottomText.Content &= val
        End If
    End Sub
    Private Sub performOperation(val As String)
        Dim labelText As String = lblBottomText.Content
        Dim topLabelText As String = lblTopText.Content

        If topLabelText = "" Then
            output = Double.Parse(labelText)
        Else
            strictEval()
        End If

        lefty = output
        lblTopText.Content = output & " " & val
        lblBottomText.Content = "0"
    End Sub
    
    Private Sub checkIfZero()
        Try
            Dim divisor As Double = Double.Parse(lblBottomText.Content)
            output = Double.Parse(output) / divisor
        Catch ex As DivideByZeroException
            dividedByZero = True
            MsgBox("Don't do that again!", vbOKOnly)
            clearAll()
            Close()
        End Try
    End Sub
    Private Sub strictEval()
        Dim topString As String = lblTopText.Content
        Dim finalOperand As Char = topString.Last()
        Select Case finalOperand
            Case "+"
                output += Double.Parse(lblBottomText.Content)
            Case "-"
                output = Double.Parse(output) - Double.Parse(lblBottomText.Content)
            Case "X"
                output = Double.Parse(output) * Double.Parse(lblBottomText.Content)
            Case "/"
                checkIfZero()
                Dim divisor As Double = Double.Parse(lblBottomText.Content)
                output = Double.Parse(output) / divisor
            Case "^"
                output = Double.Parse(output) ^ Double.Parse(lblBottomText.Content)
        End Select
    End Sub
    Private Sub updateDisplay()
        lblBottomText.Content = output.ToString()
        lblTopText.Content = "Ans: "
        answered = True
        Console.WriteLine("Answer: " & output)
    End Sub
    Private Sub displayFinal()
        If lblTopText.Content <> "" Then
            strictEval()
            updateDisplay()
        End If
    End Sub
    Private Sub btnAC_Click(sender As Object, e As RoutedEventArgs) Handles btnAC.Click
        clearAll()
    End Sub

    Private Sub btnDEL_Click(sender As Object, e As RoutedEventArgs) Handles btnDEL.Click
        delEat()
    End Sub

    Private Sub btn9_Click(sender As Object, e As RoutedEventArgs) Handles btn9.Click
        appendNumber(btn9.Content)
    End Sub

    Private Sub btn8_Click(sender As Object, e As RoutedEventArgs) Handles btn8.Click
        appendNumber(btn8.Content)
    End Sub

    Private Sub btn1_Click(sender As Object, e As RoutedEventArgs) Handles btn1.Click
        appendNumber(btn1.Content)
    End Sub

    Private Sub btn6_Click(sender As Object, e As RoutedEventArgs) Handles btn6.Click
        appendNumber(btn6.Content)
    End Sub

    Private Sub btn5_Click(sender As Object, e As RoutedEventArgs) Handles btn5.Click
        appendNumber(btn5.Content)
    End Sub

    Private Sub btn4_Click(sender As Object, e As RoutedEventArgs) Handles btn4.Click
        appendNumber(btn4.Content)
    End Sub

    Private Sub btn7_Click(sender As Object, e As RoutedEventArgs) Handles btn7.Click
        appendNumber(btn7.Content)
    End Sub

    Private Sub btn3_Click(sender As Object, e As RoutedEventArgs) Handles btn3.Click
        appendNumber(btn3.Content)
    End Sub

    Private Sub btn2_Click(sender As Object, e As RoutedEventArgs) Handles btn2.Click
        appendNumber(btn2.Content)
    End Sub

    Private Sub btn0_Click(sender As Object, e As RoutedEventArgs) Handles btn0.Click
        appendNumber(btn0.Content)
    End Sub

    Private Sub btnDot_Click(sender As Object, e As RoutedEventArgs) Handles btnDot.Click
        dotIT(btnDot.Content)
    End Sub

    Private Sub btnDivide_Click(sender As Object, e As RoutedEventArgs) Handles btnDivide.Click
        performOperation(btnDivide.Content)
    End Sub

    Private Sub btnMulti_Click(sender As Object, e As RoutedEventArgs) Handles btnMulti.Click
        performOperation(btnMulti.Content)
    End Sub

    Private Sub btnPower_Click(sender As Object, e As RoutedEventArgs) Handles btnPower.Click
        performOperation(btnPower.Content)
    End Sub
    Private Sub btnPlus_Click(sender As Object, e As RoutedEventArgs) Handles btnPlus.Click
        performOperation(btnPlus.Content)
    End Sub

    Private Sub btnMinus_Click(sender As Object, e As RoutedEventArgs) Handles btnMinus.Click
        performOperation(btnMinus.Content)
    End Sub

    Private Sub btnEqual_Click(sender As Object, e As RoutedEventArgs) Handles btnEqual.Click
        displayFinal()
    End Sub

End Class

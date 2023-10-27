function displayMultiplicationTable() {
        const number = parseInt(document.getElementById("numberInput").value);
        if(number<=0) {
            alert('Enter positive non-zero number')
        }
        else{


        // Using for loop
        let forLoopTableHTML = "<table>";
        for (let i = 1; i <= 10; i++) {
            forLoopTableHTML += `<tr><td>${number}</td><td>*</td><td>${i}</td><td>=</td><td>${number * i}</td></tr>`;
        }
        forLoopTableHTML += "</table>";
        document.getElementById("forLoopTable").innerHTML = forLoopTableHTML;
    
        // Using while loop
        let whileLoopTableHTML = "<table>";
        let j = 1;
        while (j <= 10) {
            whileLoopTableHTML += `<tr><td>${number}</td><td>*</td><td>${j}</td><td>=</td><td>${number * j}</td></tr>`;
            j++;
        }
        whileLoopTableHTML += "</table>";
        document.getElementById("whileLoopTable").innerHTML = whileLoopTableHTML;
    
        // Using do-while loop
        let doWhileLoopTableHTML = "<table>";
        let k = 1;
        do {
            doWhileLoopTableHTML += `<tr><td>${number}</td><td>*</td><td>${k}</td><td>=</td><td>${number * k}</td></tr>`;
            k++;
        } while (k <= 10);
        doWhileLoopTableHTML += "</table>";
        document.getElementById("doWhileLoopTable").innerHTML = doWhileLoopTableHTML;
        }
    }
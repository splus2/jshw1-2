//Choice Assignment: #1 or #2

var choice = prompt ('Enter number "1" for HomeWork #1 OR number "2" for HomeWork #2',' ');

switch (choice) {
    case '1':
        //check the entered values - it is the number?
        function isNumeric(n) {
             return !isNaN(parseFloat(n)) && isFinite(n);
        }

        //the constructon of the power
        function power(base, exp) {
            if (base == 0) {
               var result = 0; 
               return result;  
            }

           if ( exp == 0) {
                var result = 1; 
                return result;        
            } 
            
            for (var i = 0; i < exp; i++) {
            result = result * base;
            }   
            return result;  

        }

        //prompted to enter the number
        var base = prompt('Enter the number', ' ');
        
        if (!isNumeric(base)) {
          alert('This is a wrong number!');
          break;
      }

      var exp = prompt('Enter the power of number', ' ');

      if (!isNumeric(exp)) {
          alert('This is a wrong power of number');
          break;
      }

      var resultPow = power(base, exp);
        //console output
        console.log(base, ' to the power of ', exp, ' is equal', resultPow);
        
        //alert output
        alert('The number ' + base + ' to the power of ' + exp + ' = ' + power(base, exp));
        break;

        case '2':
        //array
        var nameArr = []; //create a new array
            //fill an array
            for(var i = 0; i < 5; i++) {
              nameArr[i] = prompt('Enter ' + (i + 1) + ' array item of 5 user names', ' ');
          }
          console.log(nameArr);  
      

        var user = prompt('Enter user name', ' ');
        console.log(user);

        //check if the name in the array
        var permit = 0;

        for (var j = 0; j < nameArr.length; j++) {
        	if (user == nameArr[j]) {
                alert('Hi, '+ user + '! You log in successfully.');
                permit = 1;  //coincidence mark
              break;
          } 
      }

        //no name in array
        if (permit != 1) {
          alert('There is no such user - '+ user);
      }
      break;

      default:
      alert('Wrong choice: ' + choice);
      break;

  }



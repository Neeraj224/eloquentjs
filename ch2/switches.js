function print(anything){
    console.log(anything);
}

function dispatcher(number){
    function evenAction(number){
        if(number % 2 === 0){
            print("VERIFIED");
            print("EVEN");
        }
        else{
            defaultAction()
        } 
    }

    function oddAction(number){
        if((number - 1) % 2 === 0){
            print("VERIFIED");
            print("ODD");
        } 
        else{
            defaultAction()
        }
    }

    function defaultAction(){
        print("That wasn't a number!");
    }

    if(number % 2 === 0){
        evenAction(number);
    }
    else if(number % 2 !== 0){
        oddAction(number);
    }
    else{
        defaultAction();
    }
}

dispatcher(2);
dispatcher(33);
dispatcher("Hello");

// ? instead of doing all those if elses, we can just use a switch-case:
function switchExample(number){
    switch(number % 2){
        case 0:
            print("Even!");
            break;

        case 1:
            print("Odd!");
            break;

        default:
            print("its something else");
            break;
    }
}

switchExample(12);
switchExample(23);
switchExample("hello");

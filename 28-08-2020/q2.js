function validate(){

    if (document.getElementById('firstname').value==''){
        alert('enter user first name');
        return;
    }
    if (document.getElementById('lastname').value==''){
        alert('enter user last name');
        return;

    }
    if (document.getElementById('adline1').value==''){
        alert('enter user address');

        return;
    }
    if (document.getElementById('city').value==''){
        alert('enter city');
        return;

    }
    if (document.getElementById('state').value==''){
        alert('enter state');
        return;

    }
    if (document.getElementById('country').value==''){
        alert('enter country ');
        return;

    }
    if (document.getElementById('zip').value==''){
        alert('enter zipcode');
        return;

    }
    if (document.getElementById('pr_firstname').value==''){
        alert('enter parent first name');
        return;

    }
    if (document.getElementById('pr_lastname').value==''){
        alert('enter parent last name');
        return;

    }
    if (document.getElementById('email').value==''){
        alert('enter parent email');
        return;

    }
    if (document.getElementById('pred').value==''){
        alert('enter parent educational qualification');
        return;

    }
    if (document.getElementById('10th_name').value==''){
        alert('enter 10th school name');
        return;

    }
    if (document.getElementById('10th_num').value==''){
        alert('enter 10th register number');
        return;

    }
    if (document.getElementById('10th_grade').value==''){
        alert('enter 10th grade');
        return;

    }
    if (document.getElementById('12th_name').value==''){
        alert('enter 12th school name');
        return;

    }
    if (document.getElementById('12th_num').value==''){
        alert('enter 12th school reg number');
        return;

    }
    if (document.getElementById('12th_grade').value==''){
        alert('enter 12th school marks');
        return;

    }
    if (document.getElementById('age').value==''){
        alert('enter age');
        return;

    }
    if (document.getElementById('date').value==''){
        alert('enter date of birth');
        return;

    }
    if (document.getElementById('nationality').value==''){
        alert('enter nationality');
        return;

    }
    if (document.getElementById('religion').value==''){
        alert('enter religion');
        return;

    }

    email_regex=[A-Za-z.com]
    if (document.getElementById('email').value!=''){
        s=document.getElementById('email').value.match(email_regex)
        if (s==''){
            alert('invalid email id');
            return;

        } 
    }else{

        alert('invalid email id')
        return;

    }
alert('Form is valid');
    

}
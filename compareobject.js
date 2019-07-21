var person1 = {
    FirstName:"Sachin",
    SecondName:"Tendulkar",
    Profession:"cricketer",
    number:100
};

var person2 = {
    FirstName:"Sachin",
    SecondName:"Tendulkar",
    Profession:"cricketer",                                                               
    number:100
};

var length1 = Object.keys(person1).length;
var length2 = Object.keys(person2).length;

console.log(length2);

function compareObject(){
    if(length1 != length2)
        return false;
    else{
     for(var key=0;key<length1;key++){
        if(person1[key] == person2[key])
            return true;
        else
             return false;    
}
}
}

console.log(compareObject());

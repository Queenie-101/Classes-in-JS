class Student
{
    constructor(name) 
    {
        this.studentname = name;
    }
    static hello()
    {
        return "Hello!";
    }
     static welcome(x)
    {
        return "Welcome " + x.studentname;
    }
    hi()
    {
        return "Hi " + this.studentname;
    }
}
myname = new Student("Macy");
document.getElementById("hello").innerHTML = Student.hello();
document.getElementById("hi").innerHTML = myname.hi();
document.getElementById("welcome").innerHTML = Student.welcome(myname);
class Student{
    constructor(name,year)
    {
        this.name=name;
        this.year=year;
    }
    age()
    {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}
const Student1 = new Student("Belle", 2008);
document.getElementById("demo1").innerHTML = 
"My name is " + Student1.name +
" and I am " + Student1.age() + " years old.";
const Student2 = new Student("Ryan", 2007);
document.getElementById("demo2").innerHTML = 
"My name is " + Student2.name +
" and I am " + Student2.age() + " years old.";
// Module for class creation
var Class = (function () {
    function createClass(properties) {
        var f = function () {
            //This is an addition to enable super (base) class with inheritance
            if (this._superConstructor) {
                this._super = new this._superConstructor(arguments);
            }
            this.init.apply(this, arguments);
        }
        for (var prop in properties) {
            f.prototype[prop] = properties[prop];
        }
        if (!f.prototype.init) {
            f.prototype.init = function () { }
        }
        return f;
    }

    Function.prototype.inherit = function (parent) {
        var oldPrototype = this.prototype;
        this.prototype = new parent();
        this.prototype._superConstructor = parent;
        for (var prop in oldPrototype) {
            this.prototype[prop] = oldPrototype[prop];
        }
    }

    return {
        create: createClass,
    };
}());

// Constructors
var School = Class.create({
    init: function (name, town, studentsArr) {
        this.name = name;
        this.town = town;
        this.studentsArr = studentsArr;
    }
});

var Person = Class.create({
    init: function (fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    },
    introduce: function () {
        return "Name: " + this.fname + " " + this.lname + " Age: " + this.age;
    }
});

var Student = Class.create({
    init: function (fname, lname, age, grade) {
        this._super.init.apply(this, arguments);
        this.grade = grade;
    },
    introduce: function () {
        return "Student - Name: " + this.fname + " " + this.lname + " Age: " + this.age + " Grade: " + this.grade;
    }
});


Student.inherit(Person);

var Teacher = Class.create({
    init: function (fname, lname, age, speciality) {
        this._super.init.apply(this, arguments);
        this.speciality = speciality;
    },
    introduce: function () {
        return "Teacher - Name: " + this.fname + " " + this.lname + " Age: " + this.age + " Speciality: " + this.speciality;
    }
});

Teacher.inherit(Person);

//Tests
var student = new Student("Ivan", "Ivanov", 22, 5);
var teacher = new Teacher("Kiril", "Kirilov", 44, "Informatics");
var school = new School("Kiril Hristov OU", "Sofiq", [student]);

console.log("School - " + school.name + " " + school.town);
console.log(student.introduce());
console.log(teacher.introduce());
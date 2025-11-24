class Person {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this.name);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }
    showBranch() {
        console.log(this.branch);
    }
}

const st = new Student("Abhishek", "CSE");
st.showName();
st.showBranch();

const user = {
    name: "Abhishek",
    showName: () => {
        console.log(this.name);
    }
};

user.showName();

const fixedUser = {
    name: "Abhishek",
    showName: function() {
        console.log(this.name);
    }
};

fixedUser.showName();

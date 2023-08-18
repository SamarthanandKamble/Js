// this keyword with arrow functions.

var user = {
  name: "Samarth",
  getName: function () {
    console.log(this.nameOne);
  },
  userTwo: {
    name: "kamble",
    getName: function () {
      console.log(this.name);
    },
    getNameArr(){
        var getName = () => console.log(this);
        getName();
    }
  },
};

user.userTwo.getNameArr();

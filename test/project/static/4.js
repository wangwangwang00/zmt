var abc = 789;
console.log(98759)
a = 3;
function test(){
    console.log(this.a);
}
test();
test.bind({a:100})()
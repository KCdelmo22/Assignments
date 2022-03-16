var shopper = {
    name: 'kc delmo',
    age: 22,
    
}
function shopper() {
    return this.name + " " + this.age;
  };
  console.log(shopper);

var shopitems = ['apple', 'coffee', 'bread', 'orange', 'tea']
    console.log("wants to buy " + shopitems[4]);
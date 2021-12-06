let myCollection = [
    {
      name: "School of Code mug",
      count: 1,
      whatILike: "It has my cute pixel character on it!"
    },
    {
      name: "School of Code hat",
      count: 2,
      whatILike: "An often overlooked fashion accessory"
    },
    {
      name: "School of Code pillow",
      count: 1,
      whatILike: "Eat. Sleep. Code. Repeat :)"
    }
  ];

  console.log(myCollection);

let nameItem = myCollection[0].name;
let whatILike = myCollection[0].whatILike;


  function describeItem(item){
      console.log(`I have a ${nameItem}. 
      Here's what I like about it:${whatILike} `)



  }
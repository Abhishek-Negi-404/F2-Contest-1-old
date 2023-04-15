/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

// Map Function------------------------------------------------------------------------------------------------------------------------------------------------
function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(printingThroghMap); // Each element is stored in "printingThroghMap" variable

  function printingThroghMap(arrayItem) {
    if (arrayItem.profession === "developer") {
      console.log(arrayItem);
    }
  }
}

// For Each Function-------------------------------------------------------------------------------------------------------------------------------------------
function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(printingThroghForEach); // Each element is stored in "printingThroghForEach" variable

  function printingThroghForEach(arrayItem) {
    if (arrayItem.profession === "developer") {
      console.log(arrayItem);
    }
  }
}

// Add Data Function-------------------------------------------------------------------------------------------------------------------------------------------
function addData() {
  //Write your code here, just console.log
  let newObj = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newObj);
  console.log(arr);
}

// Remove Admin Function---------------------------------------------------------------------------------------------------------------------------------------
function removeAdmin() {
  //Write your code here, just console.log
   let filtered_arr = arr.filter(function (val) {
    //callback function
    if (val.profession !== "admin") {
      //filtering criteria
      return val;
    }
  });
  console.log(filtered_arr);
}

// Concatinate Function----------------------------------------------------------------------------------------------------------------------------------------
function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 5, name: "swapnilC", age: "30", profession: "PROgrammer" },
    { id: 6, name: "akshayG", age: "28", profession: "developer" },
    { id: 7, name: "vidhiJ", age: "21", profession: "Manager" },
  ];

  let concatArray = arr.concat(arr2);
  console.log(concatArray);
}

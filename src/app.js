const buttons = document.querySelectorAll(".task-btn, .final-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const taskName = btn.dataset.task;
    // sirf wahi task run hoga jis py click holga
    switch (taskName) {
      case "task1_1":
        task1_1();
        break;

      case "task1_2":
        task1_2();
        break;

      case "task1_3":
        task1_3();
        break;
      //////////////////////////////////////////////
      case "task2_1":
        task2_1();
        break;

      case "task2_2":
        task2_2();
        break;

      case "task2_3":
        task2_3();
        break;
      /////////////////////////////////////////////
      case "task3_1":
        task3_1();
        break;

      case "task3_2":
        task3_2();
        break;

      case "task3_3":
        task3_3();
        break;
      ////////////////////////////////////////////
      case "final_challenge":
        final_challenge();
        break;

      default:
        console.log("Task not found");
    }
  });
});
// Section 1: Array Advanced Methods (Deep Practice)
/////////////////////////////////////////////////////////////////////////////////////////////////
// Task 1.1 – map vs forEach vs reduce (Behavior Study)
/////////////////////////////////////////////////////////////////////////////////////////////////
function task1_1() {
  // Map, reduce, Higher Order Array Methods
  console.clear();
  console.log("==================== Task 1.1 ====================");
  console.log("========== Using Map ==========");
  // Map hr element par function () => {} apply karta hai aur nayi list return karta hai. map javascript ka builtin function hai array object k liye
  let arr = [25, 45, 65, 85];
  let newMap = arr.map((value, index, array) => {
    // value, index, array is parameter of map() function
    console.log(`Item = ${value}, Index = ${index}, Original Array = ${array}`);
    return value + 10; // return map k function sy bhr value value bhjta hai current value mei plus 10 kr k
  });
  console.log(`New Array = ${newMap}`);
  ////////////////////////////////////////////////////////////////////////////////////////////////
  // Reduce array ke har element par function chalata hai aur ek single final value return karta hai. yeh sirf array par chalta hai. Iska kaam ye hai k ye bohat saari cheezon ko mila kar ek final result bnata hai. Reduce boly tw MCU ka ant-man pym pertical sy chotta hojata hai
  console.log("========== Using Reduce ==========");
  // accumulator boly tw Wo variable jo her iteration ke baad updated result store karta rehta hai.
  // current boly tw Wo element jo abhi process ho raha hota hai.
  let newReduce = arr.reduce((accumulator, current) => {
    console.log(
      `Previous storage value = ${accumulator}, current value = ${current}`,
    );
    // previous stored value + current value = reduce result
    return accumulator + current;
  }, 0);
  console.log(`Reduce result = ${newReduce}`);
  ////////////////////////////////////////////////////////////////////////////////////////////////
  console.log("========== Using ForEach ==========");
  // ForEach array ke hr element par function chala k sirf side-effect (console.log) karta hai, koi nayi array return nahi karta
  arr.forEach((value, index, array) => {
    // simple print hr element ka
    console.log(`Item = ${value}, Index = ${index}, Original Array = ${array}`);
  });
  console.log(
    "ForEach me koi nayi array return nahi hoti, sirf hr km k liye loop chalta hai",
  );
}
/////////////////////////////////////////////////////////////////////////////////////////////////
// Task 1.2 – Filter + Reduce Combination
/////////////////////////////////////////////////////////////////////////////////////////////////
function task1_2() {
  console.clear();
  console.log("==================== Task 1.2 ====================");

  // array object
  let students = [
    { name: "Ammad", marks: 99.9 },
    { name: "Zahir", marks: 89 },
    { name: "Mubeen-ul-Islam", marks: 79 },
    { name: "Moiz khattri", marks: 69 },
  ];

  ///////////////////////// Condition 1 /////////////////////////
  console.log("===== if marks >= 60 =====");
  let passStudent = students.filter((student) => student.marks >= 60);
  console.log("Filtered Array (Passed Students) =", passStudent);

  // Total students k marks by reduce
  let totalMarks = passStudent.reduce((acc, student) => acc + student.marks, 0);
  console.log(`Total marks of passed students = ${totalMarks}`);

  ///////////////////////// Condition change /////////////////////////
  console.log("===== if marks >= 80 =====");
  let topStudents = students.filter((student) => student.marks >= 80);
  console.log("Filtered Array (Top Students) =", topStudents);

  // Reduce: Total marks of top students
  let totalTopMarks = topStudents.reduce(
    (acc, student) => acc + student.marks,
    0,
  );
  console.log(`Total marks of top students = ${totalTopMarks}`);
}
/////////////////////////////////////////////////////////////////////////////////////////////////
// Task 1.3 – Custom Array Method Simulation
/////////////////////////////////////////////////////////////////////////////////////////////////
function task1_3() {
  console.clear();
  console.log("==================== Task 1.3 ====================");

  let arr = ["Fir'aun", "Dajjal", "Iblis", "Namrud", "Asim munir"];
  function villains(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      console.log(`Villian no ${i}, Villains k name = ${array[i]}`);
      result.push(callback(array[i], i, array));
    }
    return result;
  }
  //////////// Custom Array ////////////
  let newArr = villains(arr, (value) => value.toUpperCase());
  console.log("Custom array k baad =", newArr);

  //////////// Print Orignal array ////////////
  let originalArr = arr.map((value) => value.toUpperCase());
  console.log("Original Array =", originalArr);
}
// Section 2: JavaScript Behind the Scenes
/////////////////////////////////////////////////////////////////////////////////////////////////
// Task 2.1 – Hoisting Reality Check
/////////////////////////////////////////////////////////////////////////////////////////////////
function task2_1() {
  console.clear();
  console.log("==================== Task 2.1 ====================");

  //////////// Using before declaration ////////////
  try {
    console.log("var before declaration =", varA);
  } catch (e) {
    console.log("var failed before declaration");
  }

  try {
    console.log("let before declaration =", LetB);
  } catch (e) {
    console.log("let failed send to temporal dead zone TDZ");
  }

  try {
    console.log("const before declaration =", constC);
  } catch (e) {
    console.log("const failed send to temporal dead zone TDZ");
  }

  try {
    sayHello();
  } catch (e) {
    console.log("function call failed");
  }

  var varA = "Var varaible";
  let LetB = "Let variable";
  const constC = "Const variable";

  function sayHello() {
    console.log("Function declaration worked before definition");
  }

  console.log("After declaration var =", varA);
  console.log("After declaration let =", LetB);
  console.log("After declaration const =", constC);
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// Task 2.2 – Call Stack Observation
/////////////////////////////////////////////////////////////////////////////////////////////////
function task2_2() {
  console.clear();
  console.log("==================== Task 2.2 ====================");

  function first() {
    console.log("Enter first()");
    second();
    console.log("Exit first()");
  }

  function second() {
    console.log("Enter second()");
    third();
    console.log("Exit second()");
  }

  function third() {
    console.log("Enter third()");

    // async operation
    setTimeout(() => {
      console.log("Async task completed (setTimeout)");
    }, 0);

    console.log("Exit third()");
  }

  // start execution
  first();
}
/////////////////////////////////////////////////////////////////////////////////////////////////
// Task 2.3 – Closure Proof
/////////////////////////////////////////////////////////////////////////////////////////////////
function task2_3() {
  console.clear();
  console.log("==================== Task 2.3 ====================");

  function outer() {
    let counter = 0; // ye variable inner function use kry ga

    return function inner() {
      console.log(`Current counter value = ${counter}`);
      counter++;
    };
  }

  let closureFn = outer(); // function create hua, counter memory mei lock hogya

  closureFn(); // 0
  closureFn(); // 1

  // outer variable directly access nahi hosakta
  try {
    console.log(counter);
  } catch (e) {
    console.log("Outer variable direct access sy fail hogya");
  }

  closureFn(); // 2
}
/////////////////////////////////////////////////////////////////////////////////////////////////
// Task 3.1 – Destructuring with Defaults
/////////////////////////////////////////////////////////////////////////////////////////////////
function task3_1() {
  console.clear();
  console.log("==================== Task 3.1 ====================");

  // object mei jaan boch k koch properties missing hy
  let user = {
    name: "Ammad",
    role: "Student",
  };

  // destructuring with default values
  const {
    name, // name aur role user k object sy agaye
    role,
    age = 18, // object mei nahi thay is liye default agar property moujod hoo tw default ignore hojata hy
    country = "Pakistan", // default apply hoga
  } = user;

  console.log(
    `Name = ${name}, \n Role = ${role}, \n Age = ${age}, \n Country = ${country}`,
  );
  console.log(user);
}
///////////////////////////////////////////////////////
// Task 3.2 – Rest Operator in Functions
///////////////////////////////////////////////////////
function task3_2() {
  console.clear();
  console.log("==================== Task 3.2 ====================");

  // function ko abhi nhi pata k kitni value aany wali hai
  function totalExpense(...amounts) {
    // rest operator sab values ko ek aray mei collect krta hai
    let total = 0;

    for (let i = 0; i < amounts.length; i++) {
      total += amounts[i]; // total calculation
    }

    return total;
  }

  console.log("Expense 1 =", totalExpense(100));
  console.log("Expense 2 =", totalExpense(100, 200, 300));
  console.log("Expense 3 =", totalExpense(50, 75, 125, 250));
}
/////////////////////////////////////////////////////////////////////////////////////////////////
// Task 3.3 – Spread Operator & References
/////////////////////////////////////////////////////////////////////////////////////////////////
function task3_3() {
  console.clear();
  console.log("==================== Task 3.3 ====================");

  let original = {
    name: "Ammad",
    address: {
      city: "Lahore",
    },
  };

  let directRef = original; // ye same memory ko point kr raha hai

  directRef.address.city = "Karachi";

  console.log("After direct reference change");
  console.log("Original city =", original.address.city);
  console.log("DirectRef city =", directRef.address.city);

  let shallowCopy = { ...original };

  shallowCopy.address.city = "Islamabad"; // nested object same hi hai

  console.log("After shallow copy nested change");
  console.log("Original city =", original.address.city);
  console.log("ShallowCopy city =", shallowCopy.address.city);
}

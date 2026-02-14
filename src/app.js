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
        task2_2();
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
// f
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

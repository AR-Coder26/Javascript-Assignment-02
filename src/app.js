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
                // Task 1.1 – map vs forEach vs reduce (Behavior Study)
/////////////////////////////////////////////////////////////////////////////////////////////////
function task1_1(){

};
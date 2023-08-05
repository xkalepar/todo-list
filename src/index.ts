interface Todo {
  text: string;
}

const root = document.getElementById("root") as HTMLDivElement;
const postForm = document.getElementById("form-1") as HTMLFormElement;
const localElements = window.localStorage;

// postForm.onclick = (e) => {
//   e.preventDefault();
//   console.log("form");
// };
// console.log(root);

const loop = (): string[] => {
  let array: string[] = [];
  for (let i: number = 0; i <= localElements.length; i++) {
    array.push(localElements.key(i) as string);
  }
  return array;
};

const allElements: string[] = loop();

window.onload = () => {
  presentTodos(allElements, "todo-container");
};

accessDom("form-1-input", "form-1-submit");
function accessDom(childId: string, submitId: string): void {
  const input = document.getElementById(childId) as HTMLInputElement;
  const submit = document.getElementById(submitId) as HTMLInputElement;
  let array: string[] = [];
  submit.onclick = (e) => {
    // e.preventDefault();
    window.localStorage.setItem(input.value, input.value);
    array.push(input.value);
    presentTodos(array, "todo-container");
  };
}

const presentTodos = (array: string[], containerId: string): void => {
  for (let i: number = 0; i <= array.length; i++) {
    const div = document.createElement("div");
    div.className =
      "border border-solid border-black rounded-xl text-black px-4 py-1 min-h-[35px] w-full";
    div.innerText = array[i];
    document.getElementById(containerId)?.append(div);
  }
};

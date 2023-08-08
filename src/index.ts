const root = document.getElementById("root") as HTMLDivElement;
const postForm = document.getElementById("form-1") as HTMLFormElement;
const localElements = window.localStorage;

const loop = (): string[] => {
  let array: string[] = [];
  for (let i: number = 0; i < localElements.length; i++) {
    const key = localElements.key(i) as string;
    array.unshift(key);
  }
  const filteredArray = array.filter((todo) => todo.startsWith("todo"));
  console.log(filteredArray);
  return filteredArray;
};

const allElements: string[] = loop();
// console.log(allElements);

window.onload = () => {
  if (allElements.length > 0) {
    presentTodos(allElements, "todo-container");
  }
  return;
};

accessDom("form-1-input", "form-1-submit");
function accessDom(childId: string, submitId: string): void {
  const input = document.getElementById(childId) as HTMLInputElement;
  const submit = document.getElementById(submitId) as HTMLInputElement;
  submit.onclick = (e) => {
    window.localStorage.setItem("todo~" + input.value, input.value);
    loop().unshift("todo~" + input.value);
    presentTodos(loop(), "todo-container");
  };
}

const presentTodos = (array: string[], containerId: string): void => {
  const container = document.getElementById(containerId) as HTMLDivElement;
  container.innerHTML = "";
  for (let i: number = 0; i < array.length; i++) {
    const div = document.createElement("div");
    div.className =
      "border border-solid border-black rounded-xl text-black px-4 py-1 min-h-[35px] w-full mt-2";
    div.innerText = array[i].split("~")[1];
    document.getElementById(containerId)?.append(div);
  }
};

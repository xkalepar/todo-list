"use strict";
const root = document.getElementById("root");
const postForm = document.getElementById("form-1");
const localElements = window.localStorage;
// postForm.onclick = (e) => {
//   e.preventDefault();
//   console.log("form");
// };
// console.log(root);
const loop = () => {
    let array = [];
    for (let i = 0; i <= localElements.length; i++) {
        array.push(localElements.key(i));
    }
    return array;
};
const allElements = loop();
window.onload = () => {
    presentTodos(allElements, "todo-container");
};
accessDom("form-1-input", "form-1-submit");
function accessDom(childId, submitId) {
    const input = document.getElementById(childId);
    const submit = document.getElementById(submitId);
    let array = [];
    submit.onclick = (e) => {
        // e.preventDefault();
        window.localStorage.setItem(input.value, input.value);
        array.push(input.value);
        presentTodos(array, "todo-container");
    };
}
const presentTodos = (array, containerId) => {
    var _a;
    for (let i = 0; i <= array.length; i++) {
        const div = document.createElement("div");
        div.className =
            "border border-solid border-black rounded-xl text-black px-4 py-1 min-h-[35px] w-full";
        div.innerText = array[i];
        (_a = document.getElementById(containerId)) === null || _a === void 0 ? void 0 : _a.append(div);
    }
};

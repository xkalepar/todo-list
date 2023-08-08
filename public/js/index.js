"use strict";
const root = document.getElementById("root");
const postForm = document.getElementById("form-1");
const localElements = window.localStorage;
const loop = () => {
    let array = [];
    for (let i = 0; i < localElements.length; i++) {
        const key = localElements.key(i);
        array.unshift(key);
    }
    const filteredArray = array.filter((todo) => todo.startsWith("todo"));
    console.log(filteredArray);
    return filteredArray;
};
const allElements = loop();
// console.log(allElements);
window.onload = () => {
    if (allElements.length > 0) {
        presentTodos(allElements, "todo-container");
    }
    return;
};
accessDom("form-1-input", "form-1-submit");
function accessDom(childId, submitId) {
    const input = document.getElementById(childId);
    const submit = document.getElementById(submitId);
    submit.onclick = (e) => {
        window.localStorage.setItem("todo~" + input.value, input.value);
        loop().unshift("todo~" + input.value);
        presentTodos(loop(), "todo-container");
    };
}
const presentTodos = (array, containerId) => {
    var _a;
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        const div = document.createElement("div");
        div.className =
            "border border-solid border-black rounded-xl text-black px-4 py-1 min-h-[35px] w-full mt-2";
        div.innerText = array[i].split("~")[1];
        (_a = document.getElementById(containerId)) === null || _a === void 0 ? void 0 : _a.append(div);
    }
};

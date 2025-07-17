// // get elements ... [HTML Collection]
// // them item vao body
// const items = Array(100); // tao mang 100 phan tu rong

// // for i: duyet ca phan tu rong (undefined)
// for (let i = 0; i < items.length; i++) {
//   const item = document.createElement("div");
//   item.innerText = `Item ${i + 1}`;
//   document.body.appendChild(item);
// }

// // forEach: khong duyet phan tu rong
// items.forEach((item, index) => {
//     console.log(item, index); // khong hien vi phan tu empty
// });

// // lay danh sach cac phan tu tu Doc
// const elements = document.getElementsByTagName("div"); // HTML Collection
// console.log(elements.item(15))

// const elementsQ = document.querySelectorAll("div"); // Node List
// console.log(elementsQ)

// -------------------------------------
// input
// tao element input
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter title ...";
input.style.width = "300px";
input.style.height = "30px";
// bat su kien cho input
input.addEventListener("click", () => {
  // arrow function (ES6+) khong co ngữ cảnh (context)
  console.log(this); // tra ve window
});

input.addEventListener("dblclick", function () {
  // function expression: CÓ THỂ GHI NHỚ NƠI KHAI BÁO HÀM
  console.log(this); // tra ve input element
  // dat bien luu tru this
  const _this = this;
  function test() {
    console.log(_this); // tra ve window
  }
  test(); // goi ham test
});

// thay doi title khi nhap input
input.onkeyup = () => {
  document.title = input.value.trim() || "Untitled";
};

// them vao body
document.body.appendChild(input);

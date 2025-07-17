function showCodeInDoc(data, mes = "") {
  document.body.innerHTML += `
        ${mes != "" ? `<h3>${mes}</h3>` : ""}
        <div>${data}</div>
    `;
}

// ------------------------------------------------
// var (ES5)
// VẤN ĐỀ: khi tạo biến, biến bị dịch chuyển vị trí lên cùng của script
for (var index = 0; index < 10; index++) {
  showCodeInDoc(index);
}

showCodeInDoc(index, "Index vẫn còn trong bộ nhớ");

// ---------------------------------------------------
// let, const (ES6+)
// GIẢI THÍCH: let sẽ giới hạn phạm vi của biến
// => chỉ hoạt động trong block code {} gần lệnh khai báo nhất
for (let i = 0; i < 10; i++) {
  showCodeInDoc(i);
}
// showCodeInDoc(i, "Index xóa khỏi bộ nhớ")

// ----------------------------------------------------
// const: hằng số
// Không được chỉnh sửa giá trị (phép gán)
const a = 10;
console.log(a)
// a = 12; // error
const obj = {name: "abc", age: 20};
// obj = {} // error
// Vẫn có thể gán lại giá trị cho thuộc tính
obj.name = "def";
console.log(obj)
// Câu 1:
function giaiPT(a, b) {
    if (a === 0) {
        if (b === 0) {
            return "Phương trình vô số nghiệm";
        } else {
            return "Phương trình vô nghiệm";
        }
    } else {
        return -b / a;
    }
}

document.write("Code câu 1 : " + "Kết quả giải phương trình là : " + giaiPT(5, 8) + "<br>");

// Câu 2:
arr = [1, 2, 3, 4, 5, 6, 1];

function timSo(arr, a) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === a) {
            count++;
        }
    }
    if (count === 0) {
        return "Code câu 2 : " + a + " không có trong mảng";
    } else if (count > 0) {
        return "Code câu 2 : " + " Số " + a + " có trong mảng ," + "số lần xuất hiện là : " + count;
    }
}

document.write(timSo(arr, 1) + "<br>");

//Câu 3
let input = prompt("Nhập ký tự");
let a = input.split("");

function demKiTu(a) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === "a" || a[i] === "u" || a[i] === "e" || a[i] === "o" || a[i] === "i") {
            count++;
        }
    }
    if (count === 0) {
        return "Code câu 3 :" + false;
    } else if (count > 0) {
        return "Code câu 3 : " + " Số kí tự nguyên âm trong chuỗi là : " + count;
    }

}

document.write(demKiTu(a) + "<br>");

//CâU 4
class Animal {
    name;
    weight;

    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    setName(name) {
        this.name = name;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    toString() {
        return "Đối tượng " + this.getName().toString() + " có cân nặng là: " + this.getWeight().toString() + "<br>";
    }
}

let objAnimal1 = new Animal()
objAnimal1.setName("Elephant");
objAnimal1.setWeight(45.6);
document.write(objAnimal1.toString());
let objAnimal2 = new Animal("Cat", 45.6);
objAnimal2.setName("Mouse");
document.write(objAnimal2.toString());
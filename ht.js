class Shape{
    numSides;
    sideLengths;
    constructor(numSides, sideLengths = []){
        this.numSides = numSides;
        this.sideLengths = sideLengths;
    }

    getSides(){
        return this.numSides;
    }

    getLengths(){
        return this.sideLengths;
    }

    getPerimeter(){
    let perimeter = 0;
      for (let number of this.sideLengths) {
        perimeter += number;
      }
    return perimeter;
    }
}

class Triangle extends Shape{
    constructor(numSides, sideLengths = []){
        super(numSides, sideLengths);
    }
    getArea(){
        return ((this.sideLengths[0] * this.sideLengths[2])/2);
    }
}

class Rectangle extends Shape{
    constructor(numSides, sideLengths = []){
        super(numSides, sideLengths);
    }
    getArea(){
        return (this.sideLengths[0] * this.sideLengths[1]);
    }
}

    class Circle extends Shape{
        constructor(numSides, sideLengths = []){
            super(numSides, sideLengths);
        }
        
        getArea(){
            const phi = 3.14;
            return phi * (this.sideLengths[0] ** 2);
        }
    }


const L = new Shape(4, [5,3,2]);
console.log('\n========= SOAL 1 =========')

const triangle = new Triangle(3, [2,2,5]);
console.log('=========Triangle=========')
console.log('Jumlah sisi    : ', triangle.getSides());
console.log('Panjang sisi   : ', triangle.getLengths())
console.log('Luas           : ', triangle.getArea());

const rectangle = new Rectangle(4, [4,5]);
const rectangleLuas = rectangle.getArea;
console.log('=========Rectangle=========')
console.log('Jumlah sisi    : ', rectangle.getSides());
console.log('Panjang sisi   : ', rectangle.getLengths())
console.log('Luas           : ', rectangle.getArea());

const circle = new Circle(1, [9]);
const circleLuas = circle.getArea;
console.log('=========Circle==========')
console.log('Jumlah sisi         : ', circle.getSides());
console.log('Panjang jari-jari   : ', circle.getLengths())
console.log('Luas                : ', circle.getArea());


class Biodata{
    nama;
    nik;
    kelamin;
    constructor(nama,nik,kelamin){
        this.nama = nama;
        this.nik = nik;
        this.kelamin = kelamin;
    }

    getNama(){
        return this.nama;
    }    

    getNik(){
        return this.nik;
    }

    getKelamin(){
        return this.kelamin;
    }
}

class Employee extends Biodata{
    pekerjaan;
    salary;
    constructor(pekerjaan,salary){
        super(pekerjaan,salary);
        this.pekerjaan = pekerjaan;
        this.salary = salary;
    }

    getPekerjaan(){
        return this.pekerjaan;
    }

    getSalary(){
        return this.salary;
    }
}

class Student extends Biodata{
    kampus;
    jurusan;
    constructor(kampus,jurusan){
        super(kampus,jurusan);
        this.kampus = kampus;
        this.jurusan = jurusan;
    }

    getKampus(){
        return this.kampus;
    }

    getJurusan(){
        return this.jurusan;
    }
}

const B = new Biodata('Reza Abdillah Siregar',123456789,'Laki-Laki');

console.log('\n======== SOAL 2 ========')
console.log('Nama       = ', B.getNama());
console.log('NIK        = ', B.getNik());
console.log('Kelamin    = ', B.getKelamin());

const E = new Employee('Mahasiswa','Rp 50.000,- / day');
console.log('Pekerjaan  = ', E.getPekerjaan());
console.log('Salary     = ', E.getSalary());

const S = new Student('Universitas Muhammadiyah Sumatera Utara','Teknologi Informasi');
console.log('Kampus     = ', S.getKampus());
console.log('Jurusan    = ', S.getJurusan());
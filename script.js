const students = [
    { nama: "Andi", jurusan: "Sistem Informasi" },
    { nama: "Budi", jurusan: "Teknik Informatika" },
    { nama: "Citra", jurusan: "Manajemen" },
    { nama: "Dina", jurusan: "Sistem Informasi" },
    { nama: "Eko", jurusan: "Teknik Informatika" },
    { nama: "Fitri", jurusan: "Akuntansi" }
];

const searchInput = document.getElementById("searchInput");
const studentList = document.getElementById("studentList");
const resultInfo = document.getElementById("resultInfo");

function renderStudents(data) {
    studentList.replaceChildren();

    if (data.length === 0) {
        const emptyItem = document.createElement("li");
        emptyItem.textContent = "Data mahasiswa tidak ditemukan.";
        studentList.appendChild(emptyItem);
    } else {
        data.forEach(function (student) {
            const listItem = document.createElement("li");
            const studentName = document.createElement("h3");
            const studentMajor = document.createElement("p");

            studentName.textContent = student.nama;
            studentMajor.textContent = student.jurusan;

            // Menyusun elemen yang sudah dibuat.
            listItem.appendChild(studentName);
            listItem.appendChild(studentMajor);
            studentList.appendChild(listItem);
        });
    }

    resultInfo.textContent = data.length + " mahasiswa ditemukan";
}

searchInput.addEventListener("input", function () {
    const keyword = searchInput.value.toLowerCase().trim();

    const filteredStudents = students.filter(function (student) {
        const nameMatches = student.nama.toLowerCase().includes(keyword);
        const majorMatches = student.jurusan.toLowerCase().includes(keyword);

        return nameMatches || majorMatches;
    });

    renderStudents(filteredStudents);
});

renderStudents(students);

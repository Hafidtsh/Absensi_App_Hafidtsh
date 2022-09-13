let absensi_form = document.getElementById('absensi_form');
let root = document.getElementById('root');

let absensi_data = [];

absensi_form.addEventListener('submit', (event) => {
  event.preventDefault();

  let fullname = event.target.fullname.value;

  // console.log(fullname);
  if (fullname == '') {
    alert('masukan nama anda');
    return;
  }

  absensi_data.push({
    nama_lengkap: fullname,
    waktu: new Date().toLocaleTimeString(),
    tanggal: new Date().toLocaleDateString(),
  });

  // console.log(absensi_data);

  event.target.fullname.value = '';

  renderToHTML();
});

function renderToHTML() {
  root.innerHTML = '';

  absensi_data.forEach((e, i) => {
    root.innerHTML += `
    <div class="card" draggable="true" ondragend="handleDelete(${i})">
      <span>${i + 1}. &nbsp; ${e.nama_lengkap}</span> 
      <span>${e.waktu} ${e.tanggal}</span>
    </div>
    `;
  });
}

function handleDelete(index) {
  // console.log(index);

  absensi_data.splice(index, 1);

  renderToHTML();
}

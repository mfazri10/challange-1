const
    tambah = document.getElementById('tambah'),
    tarik = document.getElementById('tarik'),
    saldo = document.getElementById('saldo'),
    tambahInput = document.getElementById('tambah-input'),
    tarikInput = document.getElementById('tarik-input'),
    tambahBtn = document.getElementById('tambah-btn'),
    tarikBtn = document.getElementById('tarik-btn'),
    submitBtn = document.getElementById('submit-btn');

//Menambahkan dana
tambahBtn.addEventListener('click', () => {
    const value = tambahInput.value;
    const tambahValue = Number(tambah.innerText) + Number(value);
    const saldoValue = Number(saldo.innerText) + Number(value);
    tambah.innerText = tambahValue;
    saldo.innerText = saldoValue;
    tambahInput.value = '';
})

//Tarik dana
tarikBtn.addEventListener('click', () => {
    const value = tarikInput.value;
    if (Number(value) === 0) {
        alert("Masukan jumlah penarikan!!!");
    } else if (Number(value) > Number(saldo.innerText)) {
        alert("Saldo anda tidak Cukup!!!");
    } else {
        const saldoValue = Number(saldo.innerText) - Number(value);
        const tarikValue = Number(tarik.innerText) + Number(value);
        tarik.innerText = tarikValue;
        saldo.innerText = saldoValue;
        tarikInput.value = '';
    }
})

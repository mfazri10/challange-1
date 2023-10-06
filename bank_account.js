class Bank {
    constructor() {
        this.tambah = document.getElementById('tambah');
        this.tarik = document.getElementById('tarik');
        this.saldo = document.getElementById('saldo');
        this.tambahInput = document.getElementById('tambah-input');
        this.tarikInput = document.getElementById('tarik-input');
        this.tambahBtn = document.getElementById('tambah-btn');
        this.tarikBtn = document.getElementById('tarik-btn');
        this.submitBtn = document.getElementById('submit-btn');
    }

    async tambahDana() {
        this.tambahBtn.addEventListener('click', async () => {
            const value = this.tambahInput.value;
            await this.setTimeoutPromise(1000);
            const tambahValue = Number(this.tambah.innerText) + Number(value);
            const saldoValue = Number(this.saldo.innerText) + Number(value);
            this.tambah.innerText = tambahValue;
            this.saldo.innerText = saldoValue;
            this.tambahInput.value = '';
        });
    }

    async tarikDana() {
        this.tarikBtn.addEventListener('click', async () => {
            const value = this.tarikInput.value;
            await this.setTimeoutPromise(1000);
            if (Number(value) === 0) {
                alert("Masukan jumlah penarikan!!!");
            } else if (Number(value) > Number(this.saldo.innerText)) {
                alert("Saldo anda tidak Cukup!!!");
            } else {
                const saldoValue = Number(this.saldo.innerText) - Number(value);
                const tarikValue = Number(this.tarik.innerText) + Number(value);
                this.tarik.innerText = tarikValue;
                this.saldo.innerText = saldoValue;
                this.tarikInput.value = '';
            }
        });
    }

    setTimeoutPromise(delay) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, delay);
        });
    }
}

const bank = new Bank();
bank.tambahDana();
bank.tarikDana();
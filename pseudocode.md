BEGIN
   // Inisialisasi elemen-elemen DOM
   tambah = getElementById('tambah')
   tarik = getElementById('tarik')
   saldo = getElementById('saldo')
   tambahInput = getElementById('tambah-input')
   tarikInput = getElementById('tarik-input')
   tambahBtn = getElementById('tambah-btn')
   tarikBtn = getElementById('tarik-btn')
   submitBtn = getElementById('submit-btn')

   FUNCTION tambahDana()
      EVENTLISTENER 'click' pada tambahBtn
         value = parseFloat(tambahInput.value)
         AWAIT setTimeoutPromise(1000)
         tambahValue = parseFloat(tambah.innerText) + value
         saldoValue = parseFloat(saldo.innerText) + value
         tambah.innerText = tambahValue
         saldo.innerText = saldoValue
         tambahInput.value = ''

   FUNCTION tarikDana()
      EVENTLISTENER 'click' pada tarikBtn
         value = parseFloat(tarikInput.value)
         AWAIT setTimeoutPromise(1000)
         IF value == 0 THEN
            ALERT "Masukan jumlah penarikan!!!"
         ELSE IF value > parseFloat(saldo.innerText) THEN
            ALERT "Saldo anda tidak Cukup!!!"
         ELSE
            saldoValue = parseFloat(saldo.innerText) - value
            tarikValue = parseFloat(tarik.innerText) + value
            tarik.innerText = tarikValue
            saldo.innerText = saldoValue
            tarikInput.value = ''

   FUNCTION setTimeoutPromise(delay)
      RETURN NEW PROMISE(resolve)
         SETTIMEOUT
            CALL resolve()

   // Membuat objek Bank
   bank = NEW Bank()
   bank.tambahDana()
   bank.tarikDana()
END

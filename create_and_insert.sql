-- Data Definition Language (DDL)
CREATE TABLE Nasabah (
    id INT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    Alamat VARCHAR(255) NOT NULL,
		telp VARCHAR(255) NOT NULL,
		email VARCHAR(255) NOT NULL
);

CREATE TABLE Akun (
    id INT PRIMARY KEY,
    id_nasabah INT,
    NomorAkun VARCHAR(20) NOT NULL,
    Saldo DECIMAL(15, 2) DEFAULT 0,
    FOREIGN KEY (id_nasabah) REFERENCES Nasabah(id)
);

CREATE TABLE Transaksi (
    id INT PRIMARY KEY,
    id_akun INT,
    Tanggal DATE NOT NULL,
    Jumlah DECIMAL(15, 2) NOT NULL,
    JenisTransaksi VARCHAR(50) NOT NULL,
    FOREIGN KEY (id_akun) REFERENCES Akun(id)
);

-- Data Manipulation Language (DML)
-- CRUD
INSERT INTO Nasabah (id, nama, Alamat, telp, email) VALUES
(1, 'John Doe', '123 Main St, Anytown', '123-456-7890', 'john.doe@example.com'),
(2, 'Jane Smith', '456 Elm St, Othertown', '987-654-3210', 'jane.smith@example.com'),
(3, 'Alice Johnson', '789 Oak St, Anycity', '555-123-4567', 'alice.johnson@example.com'),
(4, 'Bob Williams', '456 Pine St, Sometown', '333-111-2222', 'bob.williams@example.com'),
(5, 'Eva Davis', '987 Cedar St, Otherville', '777-888-9999', 'eva.davis@example.com');

-- Insert dummy data into Akun table
INSERT INTO Akun (id, id_nasabah, NomorAkun, Saldo) VALUES
(1, 1, '12345', 1000.00),
(2, 1, '67890', 500.50),
(3, 2, '54321', 2000.75),
(4, 2, '98765', 1500.25),
(5, 3, '24680', 300.00);

-- Insert dummy data into Transaksi table
INSERT INTO Transaksi (id, id_akun, Tanggal, Jumlah, JenisTransaksi) VALUES
(1, 1, '2023-10-15', 200.00, 'Debit'),
(2, 2, '2023-10-15', 50.25, 'Kredit'),
(3, 3, '2023-10-14', 300.75, 'Debit'),
(4, 4, '2023-10-14', 100.50, 'Kredit'),
(5, 5, '2023-10-13', 75.25, 'Debit');


--Kueri Update Data
UPDATE transaksi SET "id_akun" = 5, "tanggal" = '2023-10-13', "jumlah" = '80', "jenistransaksi" = 'Debit' WHERE "id" = 5;

--Kueri Delete Data
DELETE FROM transaksi WHERE "id" = 5

-- Add Transaksi Id = 5
INSERT INTO Transaksi (id, id_akun, Tanggal, Jumlah, JenisTransaksi) VALUES
(5, 5, '2023-10-13', 75.25, 'Debit');
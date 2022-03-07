-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 03 Mar 2022 pada 08.11
-- Versi server: 10.4.14-MariaDB
-- Versi PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `simulasi-cat`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admin_user`
--

CREATE TABLE `admin_user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `admin_user`
--

INSERT INTO `admin_user` (`id`, `name`, `username`, `password`) VALUES
(6, 'Graha Taruna Atceh', 'Admin_GTA', '$2y$10$P9dGEcmq9vJfKLLnjefXseUrBV2opd5f7CWdRRuKXvsOVQfP40A5m'),
(7, 'Maulana Imam Muttaqin', 'MaulanaImamMuttaqin', '$2y$10$8BbjjePf0mUFiT.9eiVukuevGgMxDCL9IIXeJUSHBLz9gtOkuwMrq');

-- --------------------------------------------------------

--
-- Struktur dari tabel `test`
--

CREATE TABLE `test` (
  `id` int(11) NOT NULL,
  `test_id` varchar(255) NOT NULL,
  `question_total` int(255) NOT NULL,
  `number_digits` int(20) NOT NULL,
  `duration` int(11) NOT NULL,
  `test_start_at` datetime DEFAULT NULL,
  `test_end_at` datetime DEFAULT NULL,
  `is_open` tinyint(1) NOT NULL,
  `total_participant` int(255) NOT NULL,
  `description` text NOT NULL,
  `auto` tinyint(1) DEFAULT NULL,
  `questions_list` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '[]'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `test`
--

INSERT INTO `test` (`id`, `test_id`, `question_total`, `number_digits`, `duration`, `test_start_at`, `test_end_at`, `is_open`, `total_participant`, `description`, `auto`, `questions_list`) VALUES
(2, '123123123', 2, 5, 15, NULL, NULL, 0, 0, '', 1, '[]'),
(7, '873199419', 4, 4, 4, '2022-02-27 01:01:00', '2022-02-27 01:02:00', 0, 0, '', 1, '[]'),
(19, '549700025', 10, 5, 70, '2022-02-28 20:11:00', '2022-02-28 20:11:00', 0, 0, '', 1, '[]'),
(21, '946314300', 3, 5, 4, '2022-03-02 16:25:00', '2022-03-02 16:25:00', 0, 0, '', 1, '[]'),
(22, '671446500', 3, 5, 15, '2022-03-02 16:40:00', '2022-03-03 16:40:00', 0, 0, '', 1, '[]'),
(43, '563603801', 4, 0, 10, '2022-03-03 08:40:00', '2022-03-04 08:40:00', 0, 0, '', 0, '[\"32541\",\"63547\",\"92014\",\"85746\",\"29380\",\"80192\",\"75843\"]'),
(44, '203293503', 5, 0, 10, '2022-03-03 08:40:00', '2022-03-05 08:40:00', 0, 0, '', 0, '[\"32541\",\"63547\",\"92014\",\"85746\",\"29380\",\"80192\",\"75843\",\"32541\",\"63547\",\"92014\",\"85746\",\"29380\",\"80192\",\"75843\",\"75841\",\"15347\",\"95643\",\"45623\",\"78652\",\"43567\",\"23453\",\"23654\",\"12323\",\"12384\",\"32541\",\"63547\",\"92014\",\"85746\",\"29380\",\"80192\",\"75843\",\"75841\",\"15347\",\"95643\",\"45623\",\"78652\",\"43567\",\"23453\",\"23654\",\"12323\",\"12384\"]');

-- --------------------------------------------------------

--
-- Struktur dari tabel `test_participant`
--

CREATE TABLE `test_participant` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `name` varchar(100) NOT NULL,
  `test_id` varchar(255) NOT NULL,
  `is_start` tinyint(1) NOT NULL,
  `is_finish` tinyint(1) NOT NULL,
  `result` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `test_participant`
--

INSERT INTO `test_participant` (`id`, `user_id`, `name`, `test_id`, `is_start`, `is_finish`, `result`) VALUES
(1, '1804105010004', 'Maulana Imam Muttaqin', '123123123', 1, 1, '{\"overall\":{\"total\":10,\"wrong\":7,\"correct\":3},\"detail\":{\"32501\":{\"total\":3,\"wrong\":2,\"correct\":1},\"83194\":{\"total\":7,\"wrong\":5,\"correct\":2}}}'),
(2, '1804105010013', 'Jurej Alhamdi', '123123123', 1, 1, '{\"overall\":{\"total\":51,\"wrong\":40,\"correct\":11},\"detail\":{\"48953\":{\"total\":38,\"wrong\":31,\"correct\":7},\"69170\":{\"total\":13,\"wrong\":9,\"correct\":4}}}'),
(3, '1804105010004', 'Maulana Imam Muttaqin', '873199419', 1, 1, '{\"overall\":{\"total\":38,\"wrong\":26,\"correct\":12},\"detail\":{\"6374\":{\"total\":26,\"wrong\":16,\"correct\":10},\"9273\":{\"total\":12,\"wrong\":10,\"correct\":2}}}'),
(4, '1804105010013', 'Muhammad Jurej Alhamdi', '873199419', 1, 1, '{\"overall\":{\"total\":18,\"wrong\":10,\"correct\":8},\"detail\":{\"3614\":{\"total\":4,\"wrong\":3,\"correct\":1},\"0159\":{\"total\":1,\"wrong\":0,\"correct\":1},\"0643\":{\"total\":4,\"wrong\":2,\"correct\":2},\"0716\":{\"total\":9,\"wrong\":5,\"correct\":4}}}'),
(5, '1804105010064', 'Mifthahul Fiqri', '873199419', 0, 0, NULL),
(6, '1804105010025', 'Shaquel Rizki Ramadhan na', '873199419', 0, 0, NULL),
(7, '1804105010007', 'Wahyu Pratama', '873199419', 0, 0, NULL),
(23, '1804105010004', 'Maulana Imam Muttaqin', '946314300', 1, 1, '{\"overall\":{\"total\":17,\"wrong\":0,\"correct\":17},\"detail\":{\"86519\":{\"total\":6,\"wrong\":0,\"correct\":6},\"89520\":{\"total\":5,\"wrong\":0,\"correct\":5},\"09453\":{\"total\":6,\"wrong\":0,\"correct\":6}}}'),
(24, '1804105010013', 'Muhammad Jurej Alhamdi', '946314300', 1, 1, '{\"overall\":{\"total\":31,\"wrong\":24,\"correct\":7},\"detail\":{\"62497\":{\"total\":12,\"wrong\":10,\"correct\":2},\"75061\":{\"total\":17,\"wrong\":14,\"correct\":3},\"90273\":{\"total\":2,\"wrong\":0,\"correct\":2}}}'),
(25, '1804105010004', 'Mifthahul Fiqri', '946314300', 0, 0, NULL),
(26, '1804105010025', 'Shaquel Rizki Ramadhan na', '946314300', 0, 0, NULL),
(27, '1804105010007', 'Wahyu Pratama', '946314300', 0, 0, NULL),
(28, '1804105010004', 'Maulana Imam Muttaqin', '671446500', 1, 1, '{\"overall\":{\"total\":22,\"wrong\":10,\"correct\":12},\"detail\":{\"13826\":{\"total\":8,\"wrong\":0,\"correct\":8},\"40359\":{\"total\":3,\"wrong\":1,\"correct\":2},\"91685\":{\"total\":11,\"wrong\":9,\"correct\":2}}}'),
(29, '1804105010013', 'Muhammad Jurej Alhamdi', '671446500', 0, 0, NULL),
(30, '1804105010004', 'Mifthahul Fiqri', '671446500', 0, 0, NULL),
(31, '1804105010025', 'Shaquel Rizki Ramadhan na', '671446500', 0, 0, NULL),
(32, '1804105010007', 'Wahyu Pratama', '671446500', 0, 0, NULL),
(33, '1804105010004', 'Maulana Imam Muttaqin', '436825880', 0, 0, NULL),
(34, '1804105010013', 'Muhammad Jurej Alhamdi', '436825880', 0, 0, NULL),
(35, '1804105010004', 'Mifthahul Fiqri', '436825880', 0, 0, NULL),
(36, '1804105010025', 'Shaquel Rizki Ramadhan na', '436825880', 0, 0, NULL),
(37, '1804105010007', 'Wahyu Pratama', '436825880', 0, 0, NULL),
(38, '1804105010004', 'Maulana Imam Muttaqin', '734454295', 1, 1, '{\"overall\":{\"total\":31,\"wrong\":23,\"correct\":8},\"detail\":{\"32541\":{\"total\":11,\"wrong\":9,\"correct\":2},\"63547\":{\"total\":8,\"wrong\":6,\"correct\":2},\"85746\":{\"total\":9,\"wrong\":6,\"correct\":3},\"92014\":{\"total\":3,\"wrong\":2,\"correct\":1}}}'),
(39, '1804105010013', 'Muhammad Jurej Alhamdi', '734454295', 0, 0, NULL),
(40, '1804105010004', 'Mifthahul Fiqri', '734454295', 0, 0, NULL),
(41, '1804105010026', 'Shaquel Rizki Ramadhan na', '734454295', 0, 0, NULL),
(42, '1804105010007', 'Wahyu Pratama', '734454295', 0, 0, NULL),
(43, '1804105010004', 'Maulana Imam Muttaqin', '684177674', 0, 0, NULL),
(44, '1804105010013', 'Muhammad Jurej Alhamdi', '684177674', 0, 0, NULL),
(45, '1804105010004', 'Mifthahul Fiqri', '684177674', 0, 0, NULL),
(46, '1804105010025', 'Shaquel Rizki Ramadhan na', '684177674', 0, 0, NULL),
(47, '1804105010007', 'Wahyu Pratama', '684177674', 0, 0, NULL),
(48, '1804105010004', 'Maulana Imam Muttaqin', '563603801', 1, 1, '{\"overall\":{\"total\":54,\"wrong\":39,\"correct\":15},\"detail\":{\"29380\":{\"total\":21,\"wrong\":17,\"correct\":4},\"75843\":{\"total\":22,\"wrong\":14,\"correct\":8},\"85746\":{\"total\":11,\"wrong\":8,\"correct\":3}}}'),
(49, '1804105010013', 'Muhammad Jurej Alhamdi', '563603801', 0, 0, NULL),
(50, '1804105010004', 'Mifthahul Fiqri', '563603801', 0, 0, NULL),
(51, '1804105010025', 'Shaquel Rizki Ramadhan na', '563603801', 0, 0, NULL),
(52, '1804105010007', 'Wahyu Pratama', '563603801', 0, 0, NULL),
(53, '1804105010004', 'Maulana Imam Muttaqin', '203293503', 1, 1, '{\"overall\":{\"total\":34,\"wrong\":24,\"correct\":10},\"detail\":{\"12384\":{\"total\":1,\"wrong\":0,\"correct\":1},\"63547\":{\"total\":9,\"wrong\":8,\"correct\":1},\"80192\":{\"total\":5,\"wrong\":0,\"correct\":5},\"92014\":{\"total\":19,\"wrong\":16,\"correct\":3}}}'),
(54, '1804105010013', 'Muhammad Jurej Alhamdi', '203293503', 0, 0, NULL),
(55, '1804105010004', 'Mifthahul Fiqri', '203293503', 0, 0, NULL),
(56, '1804105010025', 'Shaquel Rizki Ramadhan na', '203293503', 0, 0, NULL),
(57, '1804105010007', 'Wahyu Pratama', '203293503', 0, 0, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tes_result`
--

CREATE TABLE `tes_result` (
  `id` int(11) NOT NULL,
  `user_id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `test_id` varchar(100) NOT NULL,
  `result` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admin_user`
--
ALTER TABLE `admin_user`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `test_id` (`test_id`);

--
-- Indeks untuk tabel `test_participant`
--
ALTER TABLE `test_participant`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tes_result`
--
ALTER TABLE `tes_result`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admin_user`
--
ALTER TABLE `admin_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT untuk tabel `test_participant`
--
ALTER TABLE `test_participant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT untuk tabel `tes_result`
--
ALTER TABLE `tes_result`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
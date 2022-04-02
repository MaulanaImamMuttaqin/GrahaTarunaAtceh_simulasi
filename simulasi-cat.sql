-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 02 Apr 2022 pada 10.31
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
(7, 'Maulana Imam Muttaqin', 'MaulanaImamMuttaqin', '$2y$10$8BbjjePf0mUFiT.9eiVukuevGgMxDCL9IIXeJUSHBLz9gtOkuwMrq'),
(8, 'Ananda Putra Sangiang', 'AnandaPutraSangiang', '$2y$10$aMaZBSpuhjvkigWjbNsPOOdqoJ0eXvP7Vg5VNgOLU4MVjrQTnrH2q');

-- --------------------------------------------------------

--
-- Struktur dari tabel `class_list`
--

CREATE TABLE `class_list` (
  `id` int(11) NOT NULL,
  `class_name` varchar(100) NOT NULL,
  `participant_total` int(11) NOT NULL DEFAULT 0,
  `test_total` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `class_list`
--

INSERT INTO `class_list` (`id`, `class_name`, `participant_total`, `test_total`) VALUES
(1, 'Kelas A', 0, 0),
(18, 'Kelas B', 0, 0),
(19, 'Kelas C', 0, 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `participants_lists`
--

CREATE TABLE `participants_lists` (
  `id` int(11) NOT NULL,
  `user_id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `class_id` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `participants_lists`
--

INSERT INTO `participants_lists` (`id`, `user_id`, `name`, `class_id`) VALUES
(1, '1804105010004', 'Maulana Imam Muttaqin', '18'),
(2, '1804105010013', 'Muhammad Jurej Alhamdi', '18'),
(3, '1804105010064', 'Mifthahul Fiqri', '18'),
(4, '1804105010026', 'Shaquel Rizki Ramadhan na', '18'),
(5, '1804105010007', 'Wahyu Pratama', '18'),
(7, '1804105010004', 'Maulana Imam Muttaqin', '19'),
(8, '1804105010013', 'Muhammad Jurej Alhamdi', '19'),
(9, '1804105010064', 'Mifthahul Fiqri', '19'),
(10, '1804105010026', 'Shaquel Rizki Ramadhan na', '19'),
(11, '1804105010007', 'Wahyu Pratama', '19'),
(12, '1804105010011', 'Ricky Eryandi', '19');

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
(60, '621463275', 3, 5, 20, '2022-03-10 19:00:16', '2022-03-13 19:00:00', 0, 0, '', 1, '[]'),
(61, '806287249', 10, 5, 60, '2022-03-11 03:55:00', '2022-03-15 04:55:00', 0, 0, '', 1, '[]'),
(63, '760025785', 5, 0, 15, '2022-03-10 09:37:00', '2022-03-14 09:37:00', 0, 0, '', 0, '[\"32541\",\"63547\",\"92014\",\"85746\",\"29380\",\"80192\",\"75843\",\"75841\",\"15347\",\"95643\",\"45623\",\"78652\",\"43567\",\"23451\",\"23654\",\"12323\",\"12384\"]'),
(65, '980070191', 5, 5, 20, '2022-03-01 17:37:00', '2022-03-30 17:37:00', 0, 0, '', 1, '[]'),
(66, '994339902', 5, 7, 20, '2022-03-13 19:00:00', '2022-03-13 21:00:00', 0, 0, '', 1, '[]'),
(67, '979969586', 2, 5, 10, '2022-03-12 15:08:00', '2022-03-15 15:08:00', 0, 0, '', 1, '[]');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tests_results`
--

CREATE TABLE `tests_results` (
  `id` int(11) NOT NULL,
  `user_id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `class_id` varchar(100) NOT NULL,
  `test_id` varchar(50) DEFAULT NULL,
  `kecermatan` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`kecermatan`)),
  `kecerdasan` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`kecerdasan`)),
  `kepribadian` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`kepribadian`)),
  `score_kecermatan` varchar(50) DEFAULT NULL,
  `score_kecerdasan` varchar(50) DEFAULT NULL,
  `score_kepribadian` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tests_results`
--

INSERT INTO `tests_results` (`id`, `user_id`, `name`, `class_id`, `test_id`, `kecermatan`, `kecerdasan`, `kepribadian`, `score_kecermatan`, `score_kecerdasan`, `score_kepribadian`) VALUES
(60, '8594037162', 'Fiqri', '18', '5068214274', '{\"overall\":{\"total\":65,\"wrong\":23,\"correct\":42,\"tot_diff_total\":4,\"total_ketahanan\":280},\"detail\":[{\"question_number\":\"02593\",\"total\":18,\"wrong\":5,\"correct\":13,\"tot_diff\":null,\"stability\":null},{\"question_number\":\"37168\",\"total\":20,\"wrong\":11,\"correct\":9,\"tot_diff\":-2,\"stability\":90},{\"question_number\":\"35742\",\"total\":6,\"wrong\":0,\"correct\":6,\"tot_diff\":14,\"stability\":30},{\"question_number\":\"90456\",\"total\":7,\"wrong\":0,\"correct\":7,\"tot_diff\":-1,\"stability\":95},{\"question_number\":\"53248\",\"total\":14,\"wrong\":7,\"correct\":7,\"tot_diff\":-7,\"stability\":65}],\"test_final_score\":{\"ketahanan\":70,\"ketelitian\":-15,\"kecepatan\":32.5,\"kecepatan_final\":11.38,\"ketelitian_final\":-5.25,\"ketahanan_final\":21,\"final_result\":27.13}}', NULL, NULL, '27.13', NULL, NULL),
(61, '1804105010004', 'Maulana Imam Muttaqin', '18', '5068214274', '{\"overall\":{\"total\":55,\"wrong\":2,\"correct\":53,\"tot_diff_total\":-1,\"total_ketahanan\":345},\"detail\":[{\"question_number\":\"72034\",\"total\":13,\"wrong\":1,\"correct\":12,\"tot_diff\":null,\"stability\":null},{\"question_number\":\"69857\",\"total\":10,\"wrong\":1,\"correct\":9,\"tot_diff\":3,\"stability\":85},{\"question_number\":\"82794\",\"total\":8,\"wrong\":0,\"correct\":8,\"tot_diff\":2,\"stability\":90},{\"question_number\":\"04758\",\"total\":10,\"wrong\":0,\"correct\":10,\"tot_diff\":-2,\"stability\":90},{\"question_number\":\"23016\",\"total\":14,\"wrong\":0,\"correct\":14,\"tot_diff\":-4,\"stability\":80}],\"test_final_score\":{\"ketahanan\":86.25,\"ketelitian\":90,\"kecepatan\":27.5,\"kecepatan_final\":9.63,\"ketelitian_final\":31.5,\"ketahanan_final\":25.88,\"final_result\":67}}', NULL, NULL, '67', NULL, NULL),
(92, '1804105010004', 'Maulana Imam Muttaqin', '18', '7347119699', NULL, NULL, NULL, NULL, NULL, NULL),
(93, '1804105010013', 'Muhammad Jurej Alhamdi', '18', '7347119699', NULL, NULL, NULL, NULL, NULL, NULL),
(94, '1804105010064', 'Mifthahul Fiqri', '18', '7347119699', NULL, NULL, NULL, NULL, NULL, NULL),
(95, '1804105010026', 'Shaquel Rizki Ramadhan na', '18', '7347119699', NULL, NULL, NULL, NULL, NULL, NULL),
(96, '1804105010007', 'Wahyu Pratama', '18', '7347119699', NULL, NULL, NULL, NULL, NULL, NULL),
(97, '1804105010004', 'Maulana Imam Muttaqin', '18', '7785825967', NULL, NULL, NULL, NULL, NULL, NULL),
(98, '1804105010013', 'Muhammad Jurej Alhamdi', '18', '7785825967', NULL, NULL, NULL, NULL, NULL, NULL),
(99, '1804105010064', 'Mifthahul Fiqri', '18', '7785825967', NULL, NULL, NULL, NULL, NULL, NULL),
(100, '1804105010026', 'Shaquel Rizki Ramadhan na', '18', '7785825967', NULL, NULL, NULL, NULL, NULL, NULL),
(101, '1804105010007', 'Wahyu Pratama', '18', '7785825967', NULL, NULL, NULL, NULL, NULL, NULL),
(102, '1804105010004', 'Maulana Imam Muttaqin', '18', '7030836327', '{\"overall\":{\"total\":24,\"correct\":24,\"wrong\":0,\"tot_diff_total\":-1,\"total_ketahanan\":185},\"detail\":[{\"question_number\":\"56817\",\"total\":7,\"wrong\":0,\"correct\":7,\"tot_diff\":null,\"stability\":null},{\"question_number\":\"85720\",\"total\":9,\"wrong\":0,\"correct\":9,\"tot_diff\":-2,\"stability\":90},{\"question_number\":\"72915\",\"total\":8,\"wrong\":0,\"correct\":8,\"tot_diff\":1,\"stability\":95}],\"test_final_score\":{\"ketahanan\":92.5,\"ketelitian\":100,\"kecepatan\":20,\"kecepatan_final\":7,\"ketelitian_final\":35,\"ketahanan_final\":27.75,\"final_result\":69.75}}', '{\"overall\":{\"total\":3,\"correct\":3,\"wrong\":0},\"detail\":[{\"q_id\":\"215445\",\"options\":[\"<p>asdasd<\\/p>\",\"<p>azxczxc<\\/p>\",\"<p>knpojnp<\\/p>\",\"<p>konpknpiugo<\\/p>\",\"<p>ygoigouig<\\/p>\"],\"question\":\"<p>aqweqe<\\/p>\",\"answer\":\"A\",\"answered\":\"A\",\"correct\":true},{\"q_id\":\"240012\",\"options\":[\"<p>Susilo Bambang Yudoyono<\\/p>\",\"<p>Jokowi Dodo<\\/p>\",\"<p>Megawati<\\/p>\",\"<p>Ir. Soekarno<\\/p>\",\"<p>Moh. Hatta<\\/p>\"],\"question\":\"<p>Siapakah <strong>Presiden<\\/strong> Pertama di <strong>Indonesia<\\/strong><\\/p>\",\"answer\":\"E\",\"answered\":\"E\",\"correct\":true},{\"q_id\":\"713886\",\"options\":[\"<p>asdasdassd<\\/p>\",\"<p>asdasdzxxc<\\/p>\",\"<p>asdad<\\/p>\",\"<p>sdasdasd<\\/p>\",\"<p>asdqweqweasd<\\/p>\"],\"question\":\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648840460_d5550e106e07e99b2a8a.png\\\" width=\\\"400\\\" height=\\\"300\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648840460_d5550e106e07e99b2a8a.png\\\"><br data-mce-bogus=\\\"1\\\"><\\/p>\",\"answer\":\"A\",\"answered\":\"A\",\"correct\":true}],\"final_score\":100}', '{\"overall\":{\"total\":10,\"correct\":3,\"wrong\":7},\"detail\":[{\"question\":\"soal 1\",\"q_id\":\"1\",\"options\":[\"pilihan a soal 1\",\"pilihan b soal 1\",\"pilihan c soal 1\",\"pilihan d soal 1\",\"pilihan e soal 1\"],\"answer\":\"a\",\"answered\":\"A\",\"correct\":true},{\"question\":\"soal 2\",\"q_id\":\"2\",\"options\":[\"pilihan a soal 2\",\"pilihan b soal 2\",\"pilihan c soal 2\",\"pilihan d soal 2\",\"pilihan e soal 2\"],\"answer\":\"b\",\"answered\":\"C\",\"correct\":false},{\"question\":\"soal 3\",\"q_id\":\"3\",\"options\":[\"pilihan a soal 3\",\"pilihan b soal 3\",\"pilihan c soal 3\",\"pilihan d soal 3\",\"pilihan e soal 3\"],\"answer\":\"d\",\"answered\":\"D\",\"correct\":true},{\"question\":\"soal 4\",\"q_id\":\"4\",\"options\":[\"pilihan a soal 4\",\"pilihan b soal 4\",\"pilihan c soal 4\",\"pilihan d soal 4\",\"pilihan e soal 4\"],\"answer\":\"e\",\"answered\":\"B\",\"correct\":false},{\"question\":\"soal 5\",\"q_id\":\"5\",\"options\":[\"pilihan a soal 5\",\"pilihan b soal 5\",\"pilihan c soal 5\",\"pilihan d soal 5\",\"pilihan e soal 5\"],\"answer\":\"b\",\"answered\":\"D\",\"correct\":false},{\"question\":\"soal 6\",\"q_id\":\"6\",\"options\":[\"pilihan a soal 6\",\"pilihan b soal 6\",\"pilihan c soal 6\",\"pilihan d soal 6\",\"pilihan e soal 6\"],\"answer\":\"a\",\"answered\":\"A\",\"correct\":true},{\"question\":\"soal 7\",\"q_id\":\"7\",\"options\":[\"pilihan a soal 7\",\"pilihan b soal 7\",\"pilihan c soal 7\",\"pilihan d soal 7\",\"pilihan e soal 7\"],\"answer\":\"c\",\"answered\":\"E\",\"correct\":false},{\"question\":\"soal 8\",\"q_id\":\"8\",\"options\":[\"pilihan a soal 8\",\"pilihan b soal 8\",\"pilihan c soal 8\",\"pilihan d soal 8\",\"pilihan e soal 8\"],\"answer\":\"d\",\"answered\":\"C\",\"correct\":false},{\"question\":\"soal 9\",\"q_id\":\"9\",\"options\":[\"pilihan a soal 9\",\"pilihan b soal 9\",\"pilihan c soal 9\",\"pilihan d soal 9\",\"pilihan e soal 9\"],\"answer\":\"e\",\"answered\":\"C\",\"correct\":false},{\"question\":\"soal 10\",\"q_id\":\"10\",\"options\":[\"pilihan a soal 10\",\"pilihan b soal 10\",\"pilihan c soal 10\",\"pilihan d soal 10\",\"pilihan e soal 10\"],\"answer\":\"b\",\"answered\":\"\",\"correct\":false}],\"final_score\":30}', '69.75', '100', '30'),
(103, '1804105010013', 'Muhammad Jurej Alhamdi', '18', '7030836327', '{\"overall\":{\"total\":25,\"correct\":23,\"wrong\":2,\"tot_diff_total\":1,\"total_ketahanan\":385},\"detail\":[{\"question_number\":\"65814\",\"total\":5,\"wrong\":0,\"correct\":5,\"tot_diff\":null,\"stability\":null},{\"question_number\":\"35170\",\"total\":6,\"wrong\":1,\"correct\":5,\"tot_diff\":-1,\"stability\":95},{\"question_number\":\"62150\",\"total\":6,\"wrong\":0,\"correct\":6,\"tot_diff\":0,\"stability\":100},{\"question_number\":\"04628\",\"total\":4,\"wrong\":0,\"correct\":4,\"tot_diff\":2,\"stability\":90},{\"question_number\":\"80391\",\"total\":4,\"wrong\":1,\"correct\":3,\"tot_diff\":0,\"stability\":100}],\"test_final_score\":{\"ketahanan\":96.25,\"ketelitian\":90,\"kecepatan\":12.5,\"kecepatan_final\":4.38,\"ketelitian_final\":31.5,\"ketahanan_final\":28.88,\"final_result\":64.75}}', NULL, '{\"overall\":{\"total\":10,\"correct\":1,\"wrong\":9},\"detail\":[{\"question\":\"soal 1\",\"q_id\":\"1\",\"options\":[\"pilihan a soal 1\",\"pilihan b soal 1\",\"pilihan c soal 1\",\"pilihan d soal 1\",\"pilihan e soal 1\"],\"answer\":\"a\",\"answered\":\"B\",\"correct\":false},{\"question\":\"soal 2\",\"q_id\":\"2\",\"options\":[\"pilihan a soal 2\",\"pilihan b soal 2\",\"pilihan c soal 2\",\"pilihan d soal 2\",\"pilihan e soal 2\"],\"answer\":\"b\",\"answered\":\"C\",\"correct\":false},{\"question\":\"soal 3\",\"q_id\":\"3\",\"options\":[\"pilihan a soal 3\",\"pilihan b soal 3\",\"pilihan c soal 3\",\"pilihan d soal 3\",\"pilihan e soal 3\"],\"answer\":\"d\",\"answered\":\"C\",\"correct\":false},{\"question\":\"soal 4\",\"q_id\":\"4\",\"options\":[\"pilihan a soal 4\",\"pilihan b soal 4\",\"pilihan c soal 4\",\"pilihan d soal 4\",\"pilihan e soal 4\"],\"answer\":\"e\",\"answered\":\"A\",\"correct\":false},{\"question\":\"soal 5\",\"q_id\":\"5\",\"options\":[\"pilihan a soal 5\",\"pilihan b soal 5\",\"pilihan c soal 5\",\"pilihan d soal 5\",\"pilihan e soal 5\"],\"answer\":\"b\",\"answered\":\"E\",\"correct\":false},{\"question\":\"soal 6\",\"q_id\":\"6\",\"options\":[\"pilihan a soal 6\",\"pilihan b soal 6\",\"pilihan c soal 6\",\"pilihan d soal 6\",\"pilihan e soal 6\"],\"answer\":\"a\",\"answered\":\"D\",\"correct\":false},{\"question\":\"soal 7\",\"q_id\":\"7\",\"options\":[\"pilihan a soal 7\",\"pilihan b soal 7\",\"pilihan c soal 7\",\"pilihan d soal 7\",\"pilihan e soal 7\"],\"answer\":\"c\",\"answered\":\"B\",\"correct\":false},{\"question\":\"soal 8\",\"q_id\":\"8\",\"options\":[\"pilihan a soal 8\",\"pilihan b soal 8\",\"pilihan c soal 8\",\"pilihan d soal 8\",\"pilihan e soal 8\"],\"answer\":\"d\",\"answered\":\"C\",\"correct\":false},{\"question\":\"soal 9\",\"q_id\":\"9\",\"options\":[\"pilihan a soal 9\",\"pilihan b soal 9\",\"pilihan c soal 9\",\"pilihan d soal 9\",\"pilihan e soal 9\"],\"answer\":\"e\",\"answered\":\"A\",\"correct\":false},{\"question\":\"soal 10\",\"q_id\":\"10\",\"options\":[\"pilihan a soal 10\",\"pilihan b soal 10\",\"pilihan c soal 10\",\"pilihan d soal 10\",\"pilihan e soal 10\"],\"answer\":\"b\",\"answered\":\"B\",\"correct\":true}],\"final_score\":10}', '64.75', NULL, '10'),
(104, '1804105010064', 'Mifthahul Fiqri', '18', '7030836327', NULL, NULL, NULL, NULL, NULL, NULL),
(105, '1804105010026', 'Shaquel Rizki Ramadhan na', '18', '7030836327', NULL, '{\"overall\":{\"total\":4,\"correct\":3,\"wrong\":1},\"detail\":[{\"q_id\":\"215445\",\"options\":[\"<p>asdasd<\\/p>\",\"<p>azxczxc<\\/p>\",\"<p>knpojnp<\\/p>\",\"<p>konpknpiugo<\\/p>\",\"<p>ygoigouig<\\/p>\"],\"question\":\"<p>aqweqe<\\/p>\",\"answer\":\"A\",\"answered\":\"A\",\"correct\":true},{\"q_id\":\"240012\",\"options\":[\"<p>Susilo Bambang Yudoyono<\\/p>\",\"<p>Jokowi Dodo<\\/p>\",\"<p>Megawati<\\/p>\",\"<p>Ir. Soekarno<\\/p>\",\"<p>Moh. Hatta<\\/p>\"],\"question\":\"<p>Siapakah <strong>Presiden<\\/strong> Pertama di <strong>Indonesia<\\/strong><\\/p>\",\"answer\":\"E\",\"answered\":\"D\",\"correct\":false},{\"q_id\":\"713886\",\"options\":[\"<p>asdasdassd<\\/p>\",\"<p>asdasdzxxc<\\/p>\",\"<p>asdad<\\/p>\",\"<p>sdasdasd<\\/p>\",\"<p>asdqweqweasd<\\/p>\"],\"question\":\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648840460_d5550e106e07e99b2a8a.png\\\" width=\\\"400\\\" height=\\\"300\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648840460_d5550e106e07e99b2a8a.png\\\"><br data-mce-bogus=\\\"1\\\"><\\/p>\",\"answer\":\"A\",\"answered\":\"A\",\"correct\":true},{\"q_id\":\"411514\",\"options\":[\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648875354_29fbc47a1a45405c7253.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648875354_29fbc47a1a45405c7253.png\\\"><br data-mce-bogus=\\\"1\\\"><\\/p>\",\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648875362_6e99b2ff7729c237f3fb.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648875362_6e99b2ff7729c237f3fb.png\\\"><br data-mce-bogus=\\\"1\\\"><\\/p>\",\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648875370_34627e689d59a474e81d.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648875370_34627e689d59a474e81d.png\\\"><br data-mce-bogus=\\\"1\\\"><\\/p>\",\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648875377_86bfbd467d6b34da2e3c.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648875377_86bfbd467d6b34da2e3c.png\\\"><br data-mce-bogus=\\\"1\\\"><\\/p>\",\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648875385_ec9f59f27da5b8c59bbd.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648875385_ec9f59f27da5b8c59bbd.png\\\"><br data-mce-bogus=\\\"1\\\"><\\/p>\"],\"question\":\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648875341_b5a3956a746dde7607ad.png\\\" width=\\\"400\\\" height=\\\"300\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648875341_b5a3956a746dde7607ad.png\\\"><br data-mce-bogus=\\\"1\\\"><\\/p>\",\"answer\":\"B\",\"answered\":\"B\",\"correct\":true}],\"final_score\":75}', '{\"overall\":{\"total\":11,\"correct\":2,\"wrong\":9},\"detail\":[{\"question\":\"soal 1\",\"q_id\":\"1\",\"options\":[\"pilihan a soal 1\",\"pilihan b soal 1\",\"pilihan c soal 1\",\"pilihan d soal 1\",\"pilihan e soal 1\"],\"answer\":\"a\",\"answered\":\"C\",\"correct\":false},{\"question\":\"soal 2\",\"q_id\":\"2\",\"options\":[\"pilihan a soal 2\",\"pilihan b soal 2\",\"pilihan c soal 2\",\"pilihan d soal 2\",\"pilihan e soal 2\"],\"answer\":\"b\",\"answered\":\"C\",\"correct\":false},{\"question\":\"soal 3\",\"q_id\":\"3\",\"options\":[\"pilihan a soal 3\",\"pilihan b soal 3\",\"pilihan c soal 3\",\"pilihan d soal 3\",\"pilihan e soal 3\"],\"answer\":\"d\",\"answered\":\"B\",\"correct\":false},{\"question\":\"soal 4\",\"q_id\":\"4\",\"options\":[\"pilihan a soal 4\",\"pilihan b soal 4\",\"pilihan c soal 4\",\"pilihan d soal 4\",\"pilihan e soal 4\"],\"answer\":\"e\",\"answered\":\"D\",\"correct\":false},{\"question\":\"soal 5\",\"q_id\":\"5\",\"options\":[\"pilihan a soal 5\",\"pilihan b soal 5\",\"pilihan c soal 5\",\"pilihan d soal 5\",\"pilihan e soal 5\"],\"answer\":\"b\",\"answered\":\"B\",\"correct\":true},{\"question\":\"soal 6\",\"q_id\":\"6\",\"options\":[\"pilihan a soal 6\",\"pilihan b soal 6\",\"pilihan c soal 6\",\"pilihan d soal 6\",\"pilihan e soal 6\"],\"answer\":\"a\",\"answered\":\"B\",\"correct\":false},{\"question\":\"soal 7\",\"q_id\":\"7\",\"options\":[\"pilihan a soal 7\",\"pilihan b soal 7\",\"pilihan c soal 7\",\"pilihan d soal 7\",\"pilihan e soal 7\"],\"answer\":\"c\",\"answered\":\"A\",\"correct\":false},{\"question\":\"soal 8\",\"q_id\":\"8\",\"options\":[\"pilihan a soal 8\",\"pilihan b soal 8\",\"pilihan c soal 8\",\"pilihan d soal 8\",\"pilihan e soal 8\"],\"answer\":\"d\",\"answered\":\"A\",\"correct\":false},{\"question\":\"soal 9\",\"q_id\":\"9\",\"options\":[\"pilihan a soal 9\",\"pilihan b soal 9\",\"pilihan c soal 9\",\"pilihan d soal 9\",\"pilihan e soal 9\"],\"answer\":\"e\",\"answered\":\"C\",\"correct\":false},{\"question\":\"soal 10\",\"q_id\":\"10\",\"options\":[\"pilihan a soal 10\",\"pilihan b soal 10\",\"pilihan c soal 10\",\"pilihan d soal 10\",\"pilihan e soal 10\"],\"answer\":\"b\",\"answered\":\"E\",\"correct\":false},{\"q_id\":\"491770\",\"options\":[\"<p>jokowi<\\/p>\",\"<p>donald trump<\\/p>\",\"<p>sby<\\/p>\",\"<p>prabowo<\\/p>\",\"<p>ronaldo<\\/p>\"],\"question\":\"<p>siapa presiden&nbsp;<strong>Indonesia&nbsp;<\\/strong>saat ini?<\\/p>\",\"answer\":\"A\",\"answered\":\"A\",\"correct\":true}],\"final_score\":18.18}', NULL, '75', '18.18'),
(106, '1804105010007', 'Wahyu Pratama', '18', '7030836327', NULL, NULL, NULL, NULL, NULL, NULL),
(107, '1804105010004', 'Maulana Imam Muttaqin', '18', '5381865215', NULL, NULL, NULL, NULL, NULL, NULL),
(108, '1804105010013', 'Muhammad Jurej Alhamdi', '18', '5381865215', NULL, NULL, NULL, NULL, NULL, NULL),
(109, '1804105010064', 'Mifthahul Fiqri', '18', '5381865215', NULL, NULL, NULL, NULL, NULL, NULL),
(110, '1804105010026', 'Shaquel Rizki Ramadhan na', '18', '5381865215', NULL, NULL, NULL, NULL, NULL, NULL),
(111, '1804105010007', 'Wahyu Pratama', '18', '5381865215', NULL, NULL, NULL, NULL, NULL, NULL),
(112, '1804105010004', 'Maulana Imam Muttaqin', '18', '2284224094', NULL, NULL, NULL, NULL, NULL, NULL),
(113, '1804105010013', 'Muhammad Jurej Alhamdi', '18', '2284224094', NULL, NULL, NULL, NULL, NULL, NULL),
(114, '1804105010064', 'Mifthahul Fiqri', '18', '2284224094', NULL, NULL, NULL, NULL, NULL, NULL),
(115, '1804105010026', 'Shaquel Rizki Ramadhan na', '18', '2284224094', NULL, NULL, NULL, NULL, NULL, NULL),
(116, '1804105010007', 'Wahyu Pratama', '18', '2284224094', NULL, NULL, NULL, NULL, NULL, NULL),
(117, '1804105010004', 'Maulana Imam Muttaqin', '18', '7388496650', NULL, NULL, NULL, NULL, NULL, NULL),
(118, '1804105010013', 'Muhammad Jurej Alhamdi', '18', '7388496650', NULL, NULL, NULL, NULL, NULL, NULL),
(119, '1804105010064', 'Mifthahul Fiqri', '18', '7388496650', NULL, NULL, NULL, NULL, NULL, NULL),
(120, '1804105010026', 'Shaquel Rizki Ramadhan na', '18', '7388496650', NULL, NULL, NULL, NULL, NULL, NULL),
(121, '1804105010007', 'Wahyu Pratama', '18', '7388496650', NULL, NULL, NULL, NULL, NULL, NULL),
(122, '1804105010004', 'Maulana Imam Muttaqin', '19', '3555883878', '{\"overall\":{\"total\":40,\"correct\":38,\"wrong\":2,\"tot_diff_total\":5,\"total_ketahanan\":355},\"detail\":[{\"question_number\":\"74509\",\"total\":10,\"wrong\":0,\"correct\":10,\"tot_diff\":null,\"stability\":null},{\"question_number\":\"80243\",\"total\":11,\"wrong\":2,\"correct\":9,\"tot_diff\":-1,\"stability\":95},{\"question_number\":\"85219\",\"total\":10,\"wrong\":0,\"correct\":10,\"tot_diff\":1,\"stability\":95},{\"question_number\":\"85216\",\"total\":4,\"wrong\":0,\"correct\":4,\"tot_diff\":6,\"stability\":70},{\"question_number\":\"32751\",\"total\":5,\"wrong\":0,\"correct\":5,\"tot_diff\":-1,\"stability\":95}],\"test_final_score\":{\"ketahanan\":88.75,\"ketelitian\":90,\"kecepatan\":20,\"kecepatan_final\":7,\"ketelitian_final\":31.5,\"ketahanan_final\":26.63,\"final_result\":65.13}}', '{\"overall\":{\"total\":2,\"correct\":1,\"wrong\":1},\"detail\":[{\"q_id\":\"377437\",\"options\":[\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648886686_f870ef4ff60537bca0e6.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648886686_f870ef4ff60537bca0e6.png\\\"><br data-mce-bogus=\\\"1\\\"><\\/p>\",\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648886693_192f9fa16d072058b4e1.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648886693_192f9fa16d072058b4e1.png\\\"><br data-mce-bogus=\\\"1\\\"><\\/p>\",\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648886701_e645d0c455465eb26322.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648886701_e645d0c455465eb26322.png\\\"><br data-mce-bogus=\\\"1\\\"><\\/p>\",\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648886708_1c61e6f3d155c7cebc9b.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648886708_1c61e6f3d155c7cebc9b.png\\\"><br data-mce-bogus=\\\"1\\\"><\\/p>\",\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648886715_c6d3a091fe5cab2ba4f6.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648886715_c6d3a091fe5cab2ba4f6.png\\\"><br data-mce-bogus=\\\"1\\\"><\\/p>\"],\"question\":\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648886676_8b00a388deeb8bd61aa3.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648886676_8b00a388deeb8bd61aa3.png\\\"><br data-mce-bogus=\\\"1\\\"><\\/p>\",\"answer\":\"C\",\"answered\":\"B\",\"correct\":false},{\"q_id\":\"522301\",\"options\":[\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648888113_ee2a0e1642ec1afc2700.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648888113_ee2a0e1642ec1afc2700.png\\\"><\\/p>\",\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648888120_03865e3dcac545c3ac5a.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648888120_03865e3dcac545c3ac5a.png\\\"><\\/p>\",\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648888126_a9cf0e9a211400b0dcd6.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648888126_a9cf0e9a211400b0dcd6.png\\\"><\\/p>\",\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648888133_fd3bc345ffeb8ccd8e6d.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648888133_fd3bc345ffeb8ccd8e6d.png\\\"><\\/p>\",\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648888139_85119101c39721bc3cdc.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648888139_85119101c39721bc3cdc.png\\\"><\\/p>\"],\"question\":\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648888066_a1501489f604c9ea4634.png\\\" width=\\\"400\\\" height=\\\"300\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648888066_a1501489f604c9ea4634.png\\\"><\\/p><p>perhatikan gambar diatas, pilih gambar yang pas untuk kelanjutan dari pola tersebut!<\\/p>\",\"answer\":\"B\",\"answered\":\"B\",\"correct\":true}],\"final_score\":50}', NULL, '65.13', '50', NULL),
(123, '1804105010013', 'Muhammad Jurej Alhamdi', '19', '3555883878', NULL, NULL, NULL, NULL, NULL, NULL),
(124, '1804105010064', 'Mifthahul Fiqri', '19', '3555883878', NULL, NULL, NULL, NULL, NULL, NULL),
(125, '1804105010026', 'Shaquel Rizki Ramadhan na', '19', '3555883878', NULL, NULL, NULL, NULL, NULL, NULL),
(126, '1804105010007', 'Wahyu Pratama', '19', '3555883878', NULL, NULL, NULL, NULL, NULL, NULL),
(127, '1804105010011', 'Ricky Eryandi', '19', '3555883878', NULL, NULL, NULL, NULL, NULL, NULL),
(128, '1804105010004', 'Maulana Imam Muttaqin', '19', '9233635344', NULL, NULL, NULL, NULL, NULL, NULL),
(129, '1804105010013', 'Muhammad Jurej Alhamdi', '19', '9233635344', NULL, NULL, NULL, NULL, NULL, NULL),
(130, '1804105010064', 'Mifthahul Fiqri', '19', '9233635344', NULL, NULL, NULL, NULL, NULL, NULL),
(131, '1804105010026', 'Shaquel Rizki Ramadhan na', '19', '9233635344', NULL, NULL, NULL, NULL, NULL, NULL),
(132, '1804105010007', 'Wahyu Pratama', '19', '9233635344', NULL, NULL, NULL, NULL, NULL, NULL),
(133, '1804105010011', 'Ricky Eryandi', '19', '9233635344', NULL, NULL, NULL, NULL, NULL, NULL),
(134, '1804105010004', 'Maulana Imam Muttaqin', '19', '1087652837', NULL, NULL, NULL, NULL, NULL, NULL),
(135, '1804105010013', 'Muhammad Jurej Alhamdi', '19', '1087652837', NULL, NULL, NULL, NULL, NULL, NULL),
(136, '1804105010064', 'Mifthahul Fiqri', '19', '1087652837', NULL, NULL, NULL, NULL, NULL, NULL),
(137, '1804105010026', 'Shaquel Rizki Ramadhan na', '19', '1087652837', NULL, NULL, NULL, NULL, NULL, NULL),
(138, '1804105010007', 'Wahyu Pratama', '19', '1087652837', NULL, NULL, NULL, NULL, NULL, NULL),
(139, '1804105010011', 'Ricky Eryandi', '19', '1087652837', NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `test_kecerdasan`
--

CREATE TABLE `test_kecerdasan` (
  `id` int(11) NOT NULL,
  `test_id` varchar(255) NOT NULL,
  `class_id` varchar(100) DEFAULT NULL,
  `duration` int(11) NOT NULL,
  `test_start_at` datetime DEFAULT NULL,
  `test_end_at` datetime DEFAULT NULL,
  `questions_list` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '[]'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `test_kecerdasan`
--

INSERT INTO `test_kecerdasan` (`id`, `test_id`, `class_id`, `duration`, `test_start_at`, `test_end_at`, `questions_list`) VALUES
(1, '5068214274', '18', 5400, '2022-03-30 10:53:00', '2022-04-01 10:53:00', '[]'),
(4, '7030836327', '18', 3600, '2022-03-31 11:53:00', '2022-04-03 11:53:00', '[{\"q_id\":\"215445\",\"options\":[\"<p>asdasd<\\/p>\",\"<p>azxczxc<\\/p>\",\"<p>knpojnp<\\/p>\",\"<p>konpknpiugo<\\/p>\",\"<p>ygoigouig<\\/p>\"],\"question\":\"<p>aqweqe<\\/p>\",\"answer\":\"A\"},{\"q_id\":\"240012\",\"options\":[\"<p>Susilo Bambang Yudoyono<\\/p>\",\"<p>Jokowi Dodo<\\/p>\",\"<p>Megawati<\\/p>\",\"<p>Ir. Soekarno<\\/p>\",\"<p>Moh. Hatta<\\/p>\"],\"question\":\"<p>Siapakah <strong>Presiden<\\/strong> Pertama di <strong>Indonesia<\\/strong><\\/p>\",\"answer\":\"E\"},{\"q_id\":\"713886\",\"options\":[\"<p>asdasdassd<\\/p>\",\"<p>asdasdzxxc<\\/p>\",\"<p>asdad<\\/p>\",\"<p>sdasdasd<\\/p>\",\"<p>asdqweqweasd<\\/p>\"],\"question\":\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648840460_d5550e106e07e99b2a8a.png\\\" width=\\\"400\\\" height=\\\"300\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648840460_d5550e106e07e99b2a8a.png\\\"><br data-mce-bogus=\\\"1\\\"><\\/p>\",\"answer\":\"A\"},{\"q_id\":\"411514\",\"options\":[\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648875354_29fbc47a1a45405c7253.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648875354_29fbc47a1a45405c7253.png\\\"><br data-mce-bogus=\\\"1\\\"><\\/p>\",\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648875362_6e99b2ff7729c237f3fb.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648875362_6e99b2ff7729c237f3fb.png\\\"><br data-mce-bogus=\\\"1\\\"><\\/p>\",\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648875370_34627e689d59a474e81d.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648875370_34627e689d59a474e81d.png\\\"><br data-mce-bogus=\\\"1\\\"><\\/p>\",\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648875377_86bfbd467d6b34da2e3c.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648875377_86bfbd467d6b34da2e3c.png\\\"><br data-mce-bogus=\\\"1\\\"><\\/p>\",\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648875385_ec9f59f27da5b8c59bbd.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648875385_ec9f59f27da5b8c59bbd.png\\\"><br data-mce-bogus=\\\"1\\\"><\\/p>\"],\"question\":\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648875341_b5a3956a746dde7607ad.png\\\" width=\\\"400\\\" height=\\\"300\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648875341_b5a3956a746dde7607ad.png\\\"><br data-mce-bogus=\\\"1\\\"><\\/p>\",\"answer\":\"B\"}]'),
(7, '3555883878', '19', 5700, '2022-04-01 15:03:00', '2022-04-03 04:03:00', '[{\"q_id\":\"377437\",\"options\":[\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648886686_f870ef4ff60537bca0e6.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648886686_f870ef4ff60537bca0e6.png\\\"><br data-mce-bogus=\\\"1\\\"><\\/p>\",\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648886693_192f9fa16d072058b4e1.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648886693_192f9fa16d072058b4e1.png\\\"><br data-mce-bogus=\\\"1\\\"><\\/p>\",\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648886701_e645d0c455465eb26322.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648886701_e645d0c455465eb26322.png\\\"><br data-mce-bogus=\\\"1\\\"><\\/p>\",\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648886708_1c61e6f3d155c7cebc9b.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648886708_1c61e6f3d155c7cebc9b.png\\\"><br data-mce-bogus=\\\"1\\\"><\\/p>\",\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648886715_c6d3a091fe5cab2ba4f6.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648886715_c6d3a091fe5cab2ba4f6.png\\\"><br data-mce-bogus=\\\"1\\\"><\\/p>\"],\"question\":\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648886676_8b00a388deeb8bd61aa3.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648886676_8b00a388deeb8bd61aa3.png\\\"><br data-mce-bogus=\\\"1\\\"><\\/p>\",\"answer\":\"C\"},{\"q_id\":\"522301\",\"options\":[\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648888113_ee2a0e1642ec1afc2700.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648888113_ee2a0e1642ec1afc2700.png\\\"><\\/p>\",\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648888120_03865e3dcac545c3ac5a.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648888120_03865e3dcac545c3ac5a.png\\\"><\\/p>\",\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648888126_a9cf0e9a211400b0dcd6.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648888126_a9cf0e9a211400b0dcd6.png\\\"><\\/p>\",\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648888133_fd3bc345ffeb8ccd8e6d.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648888133_fd3bc345ffeb8ccd8e6d.png\\\"><\\/p>\",\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648888139_85119101c39721bc3cdc.png\\\" width=\\\"132\\\" height=\\\"100\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648888139_85119101c39721bc3cdc.png\\\"><\\/p>\"],\"question\":\"<p><img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1648888066_a1501489f604c9ea4634.png\\\" width=\\\"400\\\" height=\\\"300\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1648888066_a1501489f604c9ea4634.png\\\"><\\/p><p>perhatikan gambar diatas, pilih gambar yang pas untuk kelanjutan dari pola tersebut!<\\/p>\",\"answer\":\"B\"}]');

-- --------------------------------------------------------

--
-- Struktur dari tabel `test_kecermatan`
--

CREATE TABLE `test_kecermatan` (
  `id` int(11) NOT NULL,
  `test_id` varchar(255) NOT NULL,
  `class_id` varchar(100) DEFAULT NULL,
  `question_total` int(255) NOT NULL,
  `number_digits` int(20) NOT NULL,
  `duration` int(11) NOT NULL,
  `test_start_at` datetime DEFAULT NULL,
  `test_end_at` datetime DEFAULT NULL,
  `is_open` tinyint(1) NOT NULL,
  `description` text DEFAULT NULL,
  `mode` tinyint(1) DEFAULT NULL,
  `total_participant` int(11) NOT NULL,
  `questions_list` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '[]'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `test_kecermatan`
--

INSERT INTO `test_kecermatan` (`id`, `test_id`, `class_id`, `question_total`, `number_digits`, `duration`, `test_start_at`, `test_end_at`, `is_open`, `description`, `mode`, `total_participant`, `questions_list`) VALUES
(23, '7030836327', '18', 5, 5, 20, '2022-03-24 11:10:00', '2022-04-07 11:10:00', 0, NULL, 1, 0, NULL),
(24, '2284224094', '18', 5, 5, 5, '2022-03-30 20:37:00', '2022-04-01 20:37:00', 0, NULL, 1, 0, NULL),
(25, '3555883878', '19', 5, 5, 20, '2022-04-01 14:44:00', '2022-04-03 14:44:00', 0, NULL, 1, 0, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `test_kepribadian`
--

CREATE TABLE `test_kepribadian` (
  `id` int(11) NOT NULL,
  `test_id` varchar(255) NOT NULL,
  `class_id` varchar(100) DEFAULT NULL,
  `duration` int(11) NOT NULL,
  `test_start_at` datetime DEFAULT NULL,
  `test_end_at` datetime DEFAULT NULL,
  `questions_list` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '[]'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `test_kepribadian`
--

INSERT INTO `test_kepribadian` (`id`, `test_id`, `class_id`, `duration`, `test_start_at`, `test_end_at`, `questions_list`) VALUES
(6, '7030836327', '18', 6600, '2022-03-30 11:16:00', '2022-04-03 11:16:00', '[{\"question\":\"soal 1\",\"q_id\":\"1\",\"options\":[\"pilihan a soal 1\",\"pilihan b soal 1\",\"pilihan c soal 1\",\"pilihan d soal 1\",\"pilihan e soal 1\"],\"answer\":\"a\"},{\"question\":\"soal 2\",\"q_id\":\"2\",\"options\":[\"pilihan a soal 2\",\"pilihan b soal 2\",\"pilihan c soal 2\",\"pilihan d soal 2\",\"pilihan e soal 2\"],\"answer\":\"b\"},{\"question\":\"soal 3\",\"q_id\":\"3\",\"options\":[\"pilihan a soal 3\",\"pilihan b soal 3\",\"pilihan c soal 3\",\"pilihan d soal 3\",\"pilihan e soal 3\"],\"answer\":\"d\"},{\"question\":\"soal 4\",\"q_id\":\"4\",\"options\":[\"pilihan a soal 4\",\"pilihan b soal 4\",\"pilihan c soal 4\",\"pilihan d soal 4\",\"pilihan e soal 4\"],\"answer\":\"e\"},{\"question\":\"soal 5\",\"q_id\":\"5\",\"options\":[\"pilihan a soal 5\",\"pilihan b soal 5\",\"pilihan c soal 5\",\"pilihan d soal 5\",\"pilihan e soal 5\"],\"answer\":\"b\"},{\"question\":\"soal 6\",\"q_id\":\"6\",\"options\":[\"pilihan a soal 6\",\"pilihan b soal 6\",\"pilihan c soal 6\",\"pilihan d soal 6\",\"pilihan e soal 6\"],\"answer\":\"a\"},{\"question\":\"soal 7\",\"q_id\":\"7\",\"options\":[\"pilihan a soal 7\",\"pilihan b soal 7\",\"pilihan c soal 7\",\"pilihan d soal 7\",\"pilihan e soal 7\"],\"answer\":\"c\"},{\"question\":\"soal 8\",\"q_id\":\"8\",\"options\":[\"pilihan a soal 8\",\"pilihan b soal 8\",\"pilihan c soal 8\",\"pilihan d soal 8\",\"pilihan e soal 8\"],\"answer\":\"d\"},{\"question\":\"soal 9\",\"q_id\":\"9\",\"options\":[\"pilihan a soal 9\",\"pilihan b soal 9\",\"pilihan c soal 9\",\"pilihan d soal 9\",\"pilihan e soal 9\"],\"answer\":\"e\"},{\"question\":\"soal 10\",\"q_id\":\"10\",\"options\":[\"pilihan a soal 10\",\"pilihan b soal 10\",\"pilihan c soal 10\",\"pilihan d soal 10\",\"pilihan e soal 10\"],\"answer\":\"b\"},{\"q_id\":\"491770\",\"options\":[\"<p>jokowi<\\/p>\",\"<p>donald trump<\\/p>\",\"<p>sby<\\/p>\",\"<p>prabowo<\\/p>\",\"<p>ronaldo<\\/p>\"],\"question\":\"<p>siapa presiden&nbsp;<strong>Indonesia&nbsp;<\\/strong>saat ini?<\\/p>\",\"answer\":\"A\"}]');

-- --------------------------------------------------------

--
-- Struktur dari tabel `test_list`
--

CREATE TABLE `test_list` (
  `id` int(11) NOT NULL,
  `test_id` varchar(255) NOT NULL,
  `class_id` varchar(100) DEFAULT NULL,
  `test_name` varchar(100) NOT NULL,
  `date_created` date NOT NULL DEFAULT current_timestamp(),
  `kecermatan` tinyint(1) DEFAULT NULL,
  `kecerdasan` tinyint(1) DEFAULT NULL,
  `kepribadian` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `test_list`
--

INSERT INTO `test_list` (`id`, `test_id`, `class_id`, `test_name`, `date_created`, `kecermatan`, `kecerdasan`, `kepribadian`) VALUES
(6, '9400523457', '18', 'Latihan 1', '2022-03-26', 0, 0, 0),
(7, '5068214274', '18', 'Latihan 2', '2022-03-26', 0, 1, 0),
(20, '7030836327', '18', 'assasd', '2022-03-28', 1, 1, 1),
(24, '3555883878', '19', 'Ujian 1', '2022-04-02', 1, 1, NULL);

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
  `result` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `is_passed` varchar(1) DEFAULT '-',
  `score` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `test_participant`
--

INSERT INTO `test_participant` (`id`, `user_id`, `name`, `test_id`, `is_start`, `is_finish`, `result`, `is_passed`, `score`) VALUES
(98, '1804105010004', 'Maulana Imam Muttaqin', '621463275', 1, 1, '{\"overall\":{\"total\":21,\"wrong\":0,\"correct\":21,\"tot_diff_total\":4,\"total_ketahanan\":180},\"detail\":[{\"question_number\":\"85296\",\"total\":9,\"wrong\":0,\"correct\":9,\"tot_diff\":null,\"stability\":null},{\"question_number\":\"73908\",\"total\":7,\"wrong\":0,\"correct\":7,\"tot_diff\":2,\"stability\":90},{\"question_number\":\"02491\",\"total\":5,\"wrong\":0,\"correct\":5,\"tot_diff\":2,\"stability\":90}],\"test_final_score\":{\"ketahanan\":90,\"ketelitian\":100,\"kecepatan\":5.25,\"kecepatan_final\":1.84,\"ketelitian_final\":35,\"ketahanan_final\":27,\"final_result\":63.84}}', '1', 63.84),
(99, '1804105010013', 'Muhammad Jurej Alhamdi', '621463275', 1, 1, '{\"overall\":{\"total\":27,\"wrong\":2,\"correct\":25,\"tot_diff_total\":2,\"total_ketahanan\":190},\"detail\":[{\"question_number\":\"92130\",\"total\":10,\"wrong\":0,\"correct\":10,\"tot_diff\":null,\"stability\":null},{\"question_number\":\"72310\",\"total\":9,\"wrong\":1,\"correct\":8,\"tot_diff\":1,\"stability\":95},{\"question_number\":\"23495\",\"total\":8,\"wrong\":1,\"correct\":7,\"tot_diff\":1,\"stability\":95}],\"test_final_score\":{\"ketahanan\":95,\"ketelitian\":90,\"kecepatan\":6.75,\"kecepatan_final\":2.36,\"ketelitian_final\":31.5,\"ketahanan_final\":28.5,\"final_result\":62.36}}', '1', 62.36),
(100, '1804105010064', 'Mifthahul Fiqri', '621463275', 1, 1, '{\"overall\":{\"total\":24,\"wrong\":2,\"correct\":22,\"tot_diff_total\":1,\"total_ketahanan\":185},\"detail\":[{\"question_number\":\"38972\",\"total\":9,\"wrong\":0,\"correct\":9,\"tot_diff\":null,\"stability\":null},{\"question_number\":\"28470\",\"total\":7,\"wrong\":1,\"correct\":6,\"tot_diff\":2,\"stability\":90},{\"question_number\":\"74128\",\"total\":8,\"wrong\":1,\"correct\":7,\"tot_diff\":-1,\"stability\":95}],\"test_final_score\":{\"ketahanan\":92.5,\"ketelitian\":90,\"kecepatan\":6,\"kecepatan_final\":2.1,\"ketelitian_final\":31.5,\"ketahanan_final\":27.75,\"final_result\":61.35}}', '1', 61.35),
(101, '1804105010026', 'Shaquel Rizki Ramadhan na', '621463275', 1, 1, '{\"overall\":{\"total\":24,\"wrong\":0,\"correct\":24,\"tot_diff_total\":0,\"total_ketahanan\":200},\"detail\":[{\"question_number\":\"58472\",\"total\":8,\"wrong\":0,\"correct\":8,\"tot_diff\":null,\"stability\":null},{\"question_number\":\"06925\",\"total\":8,\"wrong\":0,\"correct\":8,\"tot_diff\":0,\"stability\":100},{\"question_number\":\"29147\",\"total\":8,\"wrong\":0,\"correct\":8,\"tot_diff\":0,\"stability\":100}],\"test_final_score\":{\"ketahanan\":100,\"ketelitian\":100,\"kecepatan\":6,\"kecepatan_final\":2.1,\"ketelitian_final\":35,\"ketahanan_final\":30,\"final_result\":67.1}}', '1', 67.1),
(103, '1804105010004', 'Maulana Imam Muttaqin', '806287249', 1, 1, '{\"overall\":{\"total\":33,\"wrong\":1,\"correct\":32,\"tot_diff_total\":3,\"total_ketahanan\":355},\"detail\":[{\"question_number\":\"97156\",\"total\":8,\"wrong\":0,\"correct\":8,\"tot_diff\":null,\"stability\":null},{\"question_number\":\"79541\",\"total\":7,\"wrong\":0,\"correct\":7,\"tot_diff\":1,\"stability\":95},{\"question_number\":\"59738\",\"total\":5,\"wrong\":0,\"correct\":5,\"tot_diff\":2,\"stability\":90},{\"question_number\":\"67052\",\"total\":8,\"wrong\":0,\"correct\":8,\"tot_diff\":-3,\"stability\":85},{\"question_number\":\"42685\",\"total\":5,\"wrong\":1,\"correct\":4,\"tot_diff\":3,\"stability\":85}],\"test_final_score\":{\"ketahanan\":88.75,\"ketelitian\":95,\"kecepatan\":8.25,\"kecepatan_final\":2.89,\"ketelitian_final\":33.25,\"ketahanan_final\":26.63,\"final_result\":\"62.77\"}}', '1', 62.77),
(104, '1804105010013', 'Muhammad Jurej Alhamdi', '806287249', 1, 1, '{\"overall\":{\"total\":194,\"wrong\":4,\"correct\":190,\"tot_diff_total\":9,\"total_ketahanan\":705},\"detail\":[{\"question_number\":\"30215\",\"total\":31,\"wrong\":0,\"correct\":31,\"tot_diff\":null,\"stability\":null},{\"question_number\":\"76432\",\"total\":23,\"wrong\":2,\"correct\":21,\"tot_diff\":8,\"stability\":60},{\"question_number\":\"64509\",\"total\":14,\"wrong\":0,\"correct\":14,\"tot_diff\":9,\"stability\":55},{\"question_number\":\"93578\",\"total\":12,\"wrong\":1,\"correct\":11,\"tot_diff\":2,\"stability\":90},{\"question_number\":\"07485\",\"total\":19,\"wrong\":0,\"correct\":19,\"tot_diff\":-7,\"stability\":65},{\"question_number\":\"62478\",\"total\":19,\"wrong\":1,\"correct\":18,\"tot_diff\":0,\"stability\":100},{\"question_number\":\"63927\",\"total\":16,\"wrong\":0,\"correct\":16,\"tot_diff\":3,\"stability\":85},{\"question_number\":\"02389\",\"total\":20,\"wrong\":0,\"correct\":20,\"tot_diff\":-4,\"stability\":80},{\"question_number\":\"18620\",\"total\":18,\"wrong\":0,\"correct\":18,\"tot_diff\":2,\"stability\":90},{\"question_number\":\"69013\",\"total\":22,\"wrong\":0,\"correct\":22,\"tot_diff\":-4,\"stability\":80}],\"test_final_score\":{\"ketahanan\":78.33,\"ketelitian\":80,\"kecepatan\":48.5,\"kecepatan_final\":16.98,\"ketelitian_final\":28,\"ketahanan_final\":23.5,\"final_result\":68.48}}', '1', 68.48),
(108, '1804105010004', 'Maulana Imam Muttaqin', '760025785', 1, 1, '{\"overall\":{\"total\":35,\"wrong\":0,\"correct\":35,\"tot_diff_total\":2,\"total_ketahanan\":360},\"detail\":[{\"question_number\":\"78652\",\"total\":8,\"wrong\":0,\"correct\":8,\"tot_diff\":null,\"stability\":null},{\"question_number\":\"23451\",\"total\":10,\"wrong\":0,\"correct\":10,\"tot_diff\":-2,\"stability\":90},{\"question_number\":\"63547\",\"total\":6,\"wrong\":0,\"correct\":6,\"tot_diff\":4,\"stability\":80},{\"question_number\":\"29380\",\"total\":5,\"wrong\":0,\"correct\":5,\"tot_diff\":1,\"stability\":95},{\"question_number\":\"85746\",\"total\":6,\"wrong\":0,\"correct\":6,\"tot_diff\":-1,\"stability\":95}],\"test_final_score\":{\"ketahanan\":90,\"ketelitian\":100,\"kecepatan\":8.75,\"kecepatan_final\":3.06,\"ketelitian_final\":35,\"ketahanan_final\":27,\"final_result\":\"65.06\"}}', '1', 65.06),
(109, '1804105010013', 'Muhammad Jurej Alhamdi', '760025785', 1, 1, '{\"overall\":{\"total\":194,\"wrong\":4,\"correct\":190,\"tot_diff_total\":9,\"total_ketahanan\":705},\"detail\":[{\"question_number\":\"30215\",\"total\":31,\"wrong\":0,\"correct\":31,\"tot_diff\":null,\"stability\":null},{\"question_number\":\"76432\",\"total\":23,\"wrong\":2,\"correct\":21,\"tot_diff\":8,\"stability\":60},{\"question_number\":\"64509\",\"total\":14,\"wrong\":0,\"correct\":14,\"tot_diff\":9,\"stability\":55},{\"question_number\":\"93578\",\"total\":12,\"wrong\":1,\"correct\":11,\"tot_diff\":2,\"stability\":90},{\"question_number\":\"07485\",\"total\":19,\"wrong\":0,\"correct\":19,\"tot_diff\":-7,\"stability\":65},{\"question_number\":\"62478\",\"total\":19,\"wrong\":1,\"correct\":18,\"tot_diff\":0,\"stability\":100},{\"question_number\":\"63927\",\"total\":16,\"wrong\":0,\"correct\":16,\"tot_diff\":3,\"stability\":85},{\"question_number\":\"02389\",\"total\":20,\"wrong\":0,\"correct\":20,\"tot_diff\":-4,\"stability\":80},{\"question_number\":\"18620\",\"total\":18,\"wrong\":0,\"correct\":18,\"tot_diff\":2,\"stability\":90},{\"question_number\":\"69013\",\"total\":22,\"wrong\":0,\"correct\":22,\"tot_diff\":-4,\"stability\":80}],\"test_final_score\":{\"ketahanan\":78.33333333333333,\"ketelitian\":80,\"kecepatan\":48.5,\"kecepatan_final\":16.974999999999998,\"ketelitian_final\":28,\"ketahanan_final\":23.499999999999996,\"final_result\":68.475}}', '1', 68.46),
(110, '1804105010064', 'Mifthahul Fiqri', '760025785', 0, 0, NULL, '-', 0),
(111, '1804105010026', 'Shaquel Rizki Ramadhan na', '760025785', 0, 0, NULL, '-', 0),
(112, '1804105010007', 'Wahyu Pratama', '760025785', 0, 0, NULL, '-', 0),
(123, '1804105010004', 'Maulana Imam Muttaqin', '980070191', 1, 1, '{\"overall\":{\"total\":55,\"wrong\":2,\"correct\":53,\"tot_diff_total\":-1,\"total_ketahanan\":345},\"detail\":[{\"question_number\":\"72034\",\"total\":13,\"wrong\":1,\"correct\":12,\"tot_diff\":null,\"stability\":null},{\"question_number\":\"69857\",\"total\":10,\"wrong\":1,\"correct\":9,\"tot_diff\":3,\"stability\":85},{\"question_number\":\"82794\",\"total\":8,\"wrong\":0,\"correct\":8,\"tot_diff\":2,\"stability\":90},{\"question_number\":\"04758\",\"total\":10,\"wrong\":0,\"correct\":10,\"tot_diff\":-2,\"stability\":90},{\"question_number\":\"23016\",\"total\":14,\"wrong\":0,\"correct\":14,\"tot_diff\":-4,\"stability\":80}],\"test_final_score\":{\"ketahanan\":86.25,\"ketelitian\":90,\"kecepatan\":27.5,\"kecepatan_final\":9.63,\"ketelitian_final\":31.5,\"ketahanan_final\":25.88,\"final_result\":67}}', '1', 67),
(124, '1804105010013', 'Muhammad Jurej Alhamdi', '980070191', 1, 1, '{\"overall\":{\"total\":65,\"wrong\":23,\"correct\":42,\"tot_diff_total\":4,\"total_ketahanan\":280},\"detail\":[{\"question_number\":\"02593\",\"total\":18,\"wrong\":5,\"correct\":13,\"tot_diff\":null,\"stability\":null},{\"question_number\":\"37168\",\"total\":20,\"wrong\":11,\"correct\":9,\"tot_diff\":-2,\"stability\":90},{\"question_number\":\"35742\",\"total\":6,\"wrong\":0,\"correct\":6,\"tot_diff\":14,\"stability\":30},{\"question_number\":\"90456\",\"total\":7,\"wrong\":0,\"correct\":7,\"tot_diff\":-1,\"stability\":95},{\"question_number\":\"53248\",\"total\":14,\"wrong\":7,\"correct\":7,\"tot_diff\":-7,\"stability\":65}],\"test_final_score\":{\"ketahanan\":70,\"ketelitian\":-15,\"kecepatan\":32.5,\"kecepatan_final\":11.38,\"ketelitian_final\":-5.25,\"ketahanan_final\":21,\"final_result\":27.13}}', '0', 27.13),
(125, '1804105010064', 'Mifthahul Fiqri', '980070191', 0, 0, NULL, '-', 0),
(126, '1804105010026', 'Shaquel Rizki Ramadhan na', '980070191', 0, 0, NULL, '-', 0),
(127, '1804105010007', 'Wahyu Pratama', '980070191', 0, 0, NULL, '-', 0),
(129, '1804105010013', 'Muhammad Jurej Alhamdi', '994339902', 0, 0, NULL, '-', 0),
(130, '1804105010064', 'Mifthahul Fiqri', '994339902', 0, 0, NULL, '-', 0),
(131, '1804105010026', 'Shaquel Rizki Ramadhan na', '994339902', 0, 0, NULL, '-', 0),
(132, '1804105010007', 'Wahyu Pratama', '994339902', 0, 0, NULL, '-', 0),
(157, '4783746539', 'Maulana', '979969586', 1, 1, '{\"overall\":{\"total\":21,\"wrong\":9,\"correct\":12,\"tot_diff_total\":11,\"total_ketahanan\":45},\"detail\":[{\"question_number\":\"45083\",\"total\":16,\"wrong\":8,\"correct\":8,\"tot_diff\":null,\"stability\":null},{\"question_number\":\"37469\",\"total\":5,\"wrong\":1,\"correct\":4,\"tot_diff\":11,\"stability\":45}],\"test_final_score\":{\"ketahanan\":45,\"ketelitian\":55,\"kecepatan\":26.25,\"kecepatan_final\":9.19,\"ketelitian_final\":19.25,\"ketahanan_final\":13.5,\"final_result\":41.94}}', '0', 41.94),
(158, '9504837261', 'Imam', '979969586', 0, 0, NULL, '-', 0),
(159, '8594037162', 'Fiqri', '979969586', 1, 1, '{\"overall\":{\"total\":23,\"wrong\":0,\"correct\":23,\"tot_diff_total\":5,\"total_ketahanan\":75},\"detail\":[{\"question_number\":\"05283\",\"total\":14,\"wrong\":0,\"correct\":14,\"tot_diff\":null,\"stability\":null},{\"question_number\":\"40936\",\"total\":9,\"wrong\":0,\"correct\":9,\"tot_diff\":5,\"stability\":75}],\"test_final_score\":{\"ketahanan\":75,\"ketelitian\":100,\"kecepatan\":28.75,\"kecepatan_final\":10.06,\"ketelitian_final\":35,\"ketahanan_final\":22.5,\"final_result\":67.56}}', '1', 67.56),
(160, '7584957936', 'Muttaqin', '979969586', 0, 0, NULL, '-', 0),
(161, '8506958473', 'Ananda', '979969586', 0, 0, NULL, '-', 0),
(162, '8596058473', 'Yes', '979969586', 0, 0, NULL, '-', 0),
(167, '4857493012', 'No', '979969586', 0, 0, NULL, '-', 0),
(168, '9605819203', 'Jurej', '979969586', 0, 0, NULL, '-', 0);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admin_user`
--
ALTER TABLE `admin_user`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `class_list`
--
ALTER TABLE `class_list`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `participants_lists`
--
ALTER TABLE `participants_lists`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `test_id` (`test_id`);

--
-- Indeks untuk tabel `tests_results`
--
ALTER TABLE `tests_results`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `test_kecerdasan`
--
ALTER TABLE `test_kecerdasan`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `test_id` (`test_id`);

--
-- Indeks untuk tabel `test_kecermatan`
--
ALTER TABLE `test_kecermatan`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `test_id` (`test_id`);

--
-- Indeks untuk tabel `test_kepribadian`
--
ALTER TABLE `test_kepribadian`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `test_id` (`test_id`);

--
-- Indeks untuk tabel `test_list`
--
ALTER TABLE `test_list`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `test_id` (`test_id`);

--
-- Indeks untuk tabel `test_participant`
--
ALTER TABLE `test_participant`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admin_user`
--
ALTER TABLE `admin_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `class_list`
--
ALTER TABLE `class_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT untuk tabel `participants_lists`
--
ALTER TABLE `participants_lists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT untuk tabel `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT untuk tabel `tests_results`
--
ALTER TABLE `tests_results`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=140;

--
-- AUTO_INCREMENT untuk tabel `test_kecerdasan`
--
ALTER TABLE `test_kecerdasan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `test_kecermatan`
--
ALTER TABLE `test_kecermatan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT untuk tabel `test_kepribadian`
--
ALTER TABLE `test_kepribadian`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `test_list`
--
ALTER TABLE `test_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT untuk tabel `test_participant`
--
ALTER TABLE `test_participant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=169;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

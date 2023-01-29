-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 18 Apr 2022 pada 02.40
-- Versi server: 10.4.24-MariaDB
-- Versi PHP: 7.4.28

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
(20, 'Kelas A', 0, 0);

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
(13, '1804105010004', 'Maulana Imam Muttaqin', '20'),
(14, '1804105010013', 'Muhammad Jurej Alhamdi', '20'),
(15, '1804105010064', 'Mifthahul Fiqri', '20'),
(16, '1804105010026', 'Shaquel Rizki Ramadhan na', '20'),
(17, '1804105010007', 'Wahyu Pratama', '20'),
(18, '1804105010011', 'Ricky Eryandi', '20'),
(19, '4783746539', 'Maulana', '21'),
(20, '9504837261', 'Imam', '21'),
(21, '8594037162', 'Fiqri', '21'),
(22, '7584957936', 'Muttaqin', '21'),
(23, '8506958473', 'Ananda', '21'),
(24, '8596058473', 'Yes', '21'),
(25, '4857493012', 'No', '21'),
(26, '9605819203', 'Jurej', '21'),
(27, '4783746539', 'Maulana', '22'),
(28, '9504837261', 'Imam', '22'),
(29, '8594037162', 'Fiqri', '22'),
(30, '7584957936', 'Muttaqin', '22'),
(31, '8506958473', 'Ananda', '22'),
(32, '8596058473', 'Yes', '22'),
(33, '4857493012', 'No', '22'),
(34, '9605819203', 'Jurej', '22');

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
  `class_id` int(11) NOT NULL,
  `test_id` varchar(50) DEFAULT NULL,
  `kecermatan` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`kecermatan`)),
  `kecerdasan` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`kecerdasan`)),
  `kepribadian` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`kepribadian`)),
  `score_kecermatan` double DEFAULT NULL,
  `score_kecerdasan` double DEFAULT NULL,
  `score_kepribadian` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tests_results`
--

INSERT INTO `tests_results` (`id`, `user_id`, `name`, `class_id`, `test_id`, `kecermatan`, `kecerdasan`, `kepribadian`, `score_kecermatan`, `score_kecerdasan`, `score_kepribadian`) VALUES
(140, '1804105010004', 'Maulana Imam Muttaqin', 20, '4257339219', '{\"overall\":{\"total\":25,\"correct\":23,\"wrong\":2,\"tot_diff_total\":2,\"total_ketahanan\":190},\"detail\":[{\"question_number\":\"80765\",\"total\":9,\"wrong\":2,\"correct\":7,\"tot_diff\":null,\"stability\":null},{\"question_number\":\"05891\",\"total\":9,\"wrong\":0,\"correct\":9,\"tot_diff\":0,\"stability\":100},{\"question_number\":\"79834\",\"total\":7,\"wrong\":0,\"correct\":7,\"tot_diff\":2,\"stability\":90}],\"test_final_score\":{\"ketahanan\":95,\"ketelitian\":90,\"kecepatan\":20.83,\"kecepatan_final\":7.29,\"ketelitian_final\":31.5,\"ketahanan_final\":28.5,\"final_result\":67.29}}', '{\"overall\":{\"total\":2,\"correct\":2,\"wrong\":0},\"detail\":[{\"q_id\":\"696221\",\"options\":[\"<p><strong>Maulana<\\/strong><\\/p>\",\"<p>Jurej<\\/p>\",\"<p>Wahyu<\\/p>\",\"<p>Fiqri<\\/p>\",\"<p>Shaquel<\\/p>\"],\"question\":\"<p>pertanyaan 1<img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1649669901_bea4304c984b85515b0f.png\\\" width=\\\"520\\\" height=\\\"447\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1649669901_bea4304c984b85515b0f.png\\\"><\\/p><p>gambar&nbsp;<strong>tanda tangan&nbsp;<\\/strong>siapa ini?<\\/p>\",\"answer\":\"A\",\"answered\":\"A\",\"correct\":true},{\"q_id\":\"751962\",\"options\":[\"<p>Gambar apa ini?<\\/p>\",\"<p>Lah kok nanya?<\\/p>\",\"<p>Gak tau<\\/p>\",\"<p>jawaban B<\\/p>\",\"<p>jawaban D<\\/p>\"],\"question\":\"<p>Test pertanyaan dua <img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1649669948_8459cf5911d5d79aba36.jpeg\\\" width=\\\"1366\\\" height=\\\"768\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1649669948_8459cf5911d5d79aba36.jpeg\\\"><\\/p>\",\"answer\":\"A\",\"answered\":\"A\",\"correct\":true}],\"final_score\":100}', '{\"overall\":{\"total\":10,\"correct\":9,\"wrong\":1},\"detail\":[{\"q_id\":\"861510\",\"options\":[\"<p><strong>pilihan a soal 1<\\/strong><\\/p>\",\"pilihan b soal 1\",\"pilihan c soal 1\",\"pilihan d soal 1\",\"pilihan e soal 1\"],\"question\":\"soal 1 \",\"answer\":\"A\",\"answered\":\"B\",\"correct\":false},{\"q_id\":\"668610\",\"options\":[\"pilihan a soal 2\",\"<p><strong>pilihan b soal 2<\\/strong><\\/p>\",\"pilihan c soal 2\",\"pilihan d soal 2\",\"pilihan e soal 2\"],\"question\":\"soal 2\",\"answer\":\"B\",\"answered\":\"B\",\"correct\":true},{\"q_id\":\"917572\",\"options\":[\"pilihan a soal 3\",\"pilihan b soal 3\",\"pilihan c soal 3\",\"<p><strong>pilihan d soal 3<\\/strong><\\/p>\",\"pilihan e soal 3\"],\"question\":\"soal 3\",\"answer\":\"D\",\"answered\":\"D\",\"correct\":true},{\"q_id\":\"844234\",\"options\":[\"pilihan a soal 4\",\"pilihan b soal 4\",\"pilihan c soal 4\",\"pilihan d soal 4\",\"<p><strong>pilihan e soal 4<\\/strong><\\/p>\"],\"question\":\"soal 4\",\"answer\":\"E\",\"answered\":\"E\",\"correct\":true},{\"q_id\":\"262278\",\"options\":[\"pilihan a soal 5\",\"<p><strong>pilihan b soal 5<\\/strong><\\/p>\",\"pilihan c soal 5\",\"pilihan d soal 5\",\"<p>pilihan e soal 5<\\/p>\"],\"question\":\"soal 5\",\"answer\":\"B\",\"answered\":\"B\",\"correct\":true},{\"q_id\":\"839319\",\"options\":[\"<p><strong>pilihan a soal 6<\\/strong><\\/p>\",\"pilihan b soal 6\",\"pilihan c soal 6\",\"pilihan d soal 6\",\"pilihan e soal 6\"],\"question\":\"soal 6\",\"answer\":\"A\",\"answered\":\"A\",\"correct\":true},{\"q_id\":\"297663\",\"options\":[\"pilihan a soal 7\",\"pilihan b soal 7\",\"<p><strong>pilihan c soal 7<\\/strong><\\/p>\",\"pilihan d soal 7\",\"pilihan e soal 7\"],\"question\":\"soal 7\",\"answer\":\"C\",\"answered\":\"C\",\"correct\":true},{\"q_id\":\"292820\",\"options\":[\"pilihan a soal 8\",\"pilihan b soal 8\",\"pilihan c soal 8\",\"<p><strong>pilihan d soal 8<\\/strong><\\/p>\",\"pilihan e soal 8\"],\"question\":\"soal 8\",\"answer\":\"D\",\"answered\":\"D\",\"correct\":true},{\"q_id\":\"846190\",\"options\":[\"pilihan a soal 9\",\"pilihan b soal 9\",\"pilihan c soal 9\",\"pilihan d soal 9\",\"<p><strong>pilihan e soal 9<\\/strong><\\/p>\"],\"question\":\"soal 9\",\"answer\":\"E\",\"answered\":\"E\",\"correct\":true},{\"q_id\":\"445959\",\"options\":[\"pilihan a soal 10\",\"<p><strong>pilihan b soal 10<\\/strong><\\/p>\",\"pilihan c soal 10\",\"pilihan d soal 10\",\"pilihan e soal 10\"],\"question\":\"soal 10\",\"answer\":\"B\",\"answered\":\"B\",\"correct\":true}],\"final_score\":90}', 67.29, 100, 90),
(141, '1804105010013', 'Muhammad Jurej Alhamdi', 20, '4257339219', '{\"overall\":{\"total\":23,\"correct\":21,\"wrong\":2,\"tot_diff_total\":0,\"total_ketahanan\":190},\"detail\":[{\"question_number\":\"90437\",\"total\":8,\"wrong\":0,\"correct\":8,\"tot_diff\":null,\"stability\":null},{\"question_number\":\"36158\",\"total\":7,\"wrong\":0,\"correct\":7,\"tot_diff\":1,\"stability\":95},{\"question_number\":\"13672\",\"total\":8,\"wrong\":2,\"correct\":6,\"tot_diff\":-1,\"stability\":95}],\"test_final_score\":{\"ketahanan\":95,\"ketelitian\":90,\"kecepatan\":19.17,\"kecepatan_final\":6.71,\"ketelitian_final\":31.5,\"ketahanan_final\":28.5,\"final_result\":66.71}}', NULL, '{\"overall\":{\"total\":10,\"correct\":7,\"wrong\":3},\"detail\":[{\"q_id\":\"861510\",\"options\":[\"<p><strong>pilihan a soal 1<\\/strong><\\/p>\",\"pilihan b soal 1\",\"pilihan c soal 1\",\"pilihan d soal 1\",\"pilihan e soal 1\"],\"question\":\"soal 1 \",\"answer\":\"A\",\"answered\":\"A\",\"correct\":true},{\"q_id\":\"668610\",\"options\":[\"pilihan a soal 2\",\"<p><strong>pilihan b soal 2<\\/strong><\\/p>\",\"pilihan c soal 2\",\"pilihan d soal 2\",\"pilihan e soal 2\"],\"question\":\"soal 2\",\"answer\":\"B\",\"answered\":\"C\",\"correct\":false},{\"q_id\":\"917572\",\"options\":[\"pilihan a soal 3\",\"pilihan b soal 3\",\"pilihan c soal 3\",\"<p><strong>pilihan d soal 3<\\/strong><\\/p>\",\"pilihan e soal 3\"],\"question\":\"soal 3\",\"answer\":\"D\",\"answered\":\"D\",\"correct\":true},{\"q_id\":\"844234\",\"options\":[\"pilihan a soal 4\",\"pilihan b soal 4\",\"pilihan c soal 4\",\"pilihan d soal 4\",\"<p><strong>pilihan e soal 4<\\/strong><\\/p>\"],\"question\":\"soal 4\",\"answer\":\"E\",\"answered\":\"C\",\"correct\":false},{\"q_id\":\"262278\",\"options\":[\"pilihan a soal 5\",\"<p><strong>pilihan b soal 5<\\/strong><\\/p>\",\"pilihan c soal 5\",\"pilihan d soal 5\",\"<p>pilihan e soal 5<\\/p>\"],\"question\":\"soal 5\",\"answer\":\"B\",\"answered\":\"B\",\"correct\":true},{\"q_id\":\"839319\",\"options\":[\"<p><strong>pilihan a soal 6<\\/strong><\\/p>\",\"pilihan b soal 6\",\"pilihan c soal 6\",\"pilihan d soal 6\",\"pilihan e soal 6\"],\"question\":\"soal 6\",\"answer\":\"A\",\"answered\":\"A\",\"correct\":true},{\"q_id\":\"297663\",\"options\":[\"pilihan a soal 7\",\"pilihan b soal 7\",\"<p><strong>pilihan c soal 7<\\/strong><\\/p>\",\"pilihan d soal 7\",\"pilihan e soal 7\"],\"question\":\"soal 7\",\"answer\":\"C\",\"answered\":\"B\",\"correct\":false},{\"q_id\":\"292820\",\"options\":[\"pilihan a soal 8\",\"pilihan b soal 8\",\"pilihan c soal 8\",\"<p><strong>pilihan d soal 8<\\/strong><\\/p>\",\"pilihan e soal 8\"],\"question\":\"soal 8\",\"answer\":\"D\",\"answered\":\"D\",\"correct\":true},{\"q_id\":\"846190\",\"options\":[\"pilihan a soal 9\",\"pilihan b soal 9\",\"pilihan c soal 9\",\"pilihan d soal 9\",\"<p><strong>pilihan e soal 9<\\/strong><\\/p>\"],\"question\":\"soal 9\",\"answer\":\"E\",\"answered\":\"E\",\"correct\":true},{\"q_id\":\"445959\",\"options\":[\"pilihan a soal 10\",\"<p><strong>pilihan b soal 10<\\/strong><\\/p>\",\"pilihan c soal 10\",\"pilihan d soal 10\",\"pilihan e soal 10\"],\"question\":\"soal 10\",\"answer\":\"B\",\"answered\":\"B\",\"correct\":true}],\"final_score\":70}', 66.71, NULL, 70),
(142, '1804105010064', 'Mifthahul Fiqri', 20, '4257339219', '{\"overall\":{\"total\":22,\"correct\":21,\"wrong\":1,\"tot_diff_total\":0,\"total_ketahanan\":180},\"detail\":[{\"question_number\":\"30987\",\"total\":8,\"wrong\":0,\"correct\":8,\"tot_diff\":null,\"stability\":null},{\"question_number\":\"85723\",\"total\":6,\"wrong\":1,\"correct\":5,\"tot_diff\":2,\"stability\":90},{\"question_number\":\"51024\",\"total\":8,\"wrong\":0,\"correct\":8,\"tot_diff\":-2,\"stability\":90}],\"test_final_score\":{\"ketahanan\":90,\"ketelitian\":95,\"kecepatan\":18.33,\"kecepatan_final\":6.42,\"ketelitian_final\":33.25,\"ketahanan_final\":27,\"final_result\":66.67}}', '{\"overall\":{\"total\":2,\"correct\":2,\"wrong\":0},\"detail\":[{\"q_id\":\"696221\",\"options\":[\"<p><strong>Maulana<\\/strong><\\/p>\",\"<p>Jurej<\\/p>\",\"<p>Wahyu<\\/p>\",\"<p>Fiqri<\\/p>\",\"<p>Shaquel<\\/p>\"],\"question\":\"<p>pertanyaan 1<img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1649669901_bea4304c984b85515b0f.png\\\" width=\\\"520\\\" height=\\\"447\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1649669901_bea4304c984b85515b0f.png\\\"><\\/p><p>gambar&nbsp;<strong>tanda tangan&nbsp;<\\/strong>siapa ini?<\\/p>\",\"answer\":\"A\",\"answered\":\"A\",\"correct\":true},{\"q_id\":\"751962\",\"options\":[\"<p>Gambar apa ini?<\\/p>\",\"<p>Lah kok nanya?<\\/p>\",\"<p><strong>Gak tau<\\/strong><\\/p>\",\"<p>jawaban B<\\/p>\",\"<p>jawaban D<\\/p>\"],\"question\":\"<p>Test pertanyaan dua <img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1649669948_8459cf5911d5d79aba36.jpeg\\\" width=\\\"1366\\\" height=\\\"768\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1649669948_8459cf5911d5d79aba36.jpeg\\\"><\\/p>\",\"answer\":\"C\",\"answered\":\"C\",\"correct\":true}],\"final_score\":100}', NULL, 66.67, 100, NULL),
(143, '1804105010026', 'Shaquel Rizki Ramadhan na', 20, '4257339219', '{\"overall\":{\"total\":23,\"correct\":21,\"wrong\":2,\"tot_diff_total\":0,\"total_ketahanan\":190},\"detail\":[{\"question_number\":\"90437\",\"total\":8,\"wrong\":0,\"correct\":8,\"tot_diff\":null,\"stability\":null},{\"question_number\":\"36158\",\"total\":7,\"wrong\":0,\"correct\":7,\"tot_diff\":1,\"stability\":95},{\"question_number\":\"13672\",\"total\":8,\"wrong\":2,\"correct\":6,\"tot_diff\":-1,\"stability\":95}],\"test_final_score\":{\"ketahanan\":95,\"ketelitian\":90,\"kecepatan\":19.17,\"kecepatan_final\":6.71,\"ketelitian_final\":31.5,\"ketahanan_final\":28.5,\"final_result\":66.71}}', '{\"overall\":{\"total\":2,\"correct\":1,\"wrong\":1},\"detail\":[{\"q_id\":\"696221\",\"options\":[\"<p><strong>Maulana<\\/strong><\\/p>\",\"<p>Jurej<\\/p>\",\"<p>Wahyu<\\/p>\",\"<p>Fiqri<\\/p>\",\"<p>Shaquel<\\/p>\"],\"question\":\"<p>pertanyaan 1<img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1649669901_bea4304c984b85515b0f.png\\\" width=\\\"520\\\" height=\\\"447\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1649669901_bea4304c984b85515b0f.png\\\"><\\/p><p>gambar&nbsp;<strong>tanda tangan&nbsp;<\\/strong>siapa ini?<\\/p>\",\"answer\":\"A\",\"answered\":\"B\",\"correct\":false},{\"q_id\":\"751962\",\"options\":[\"<p>Gambar apa ini?<\\/p>\",\"<p>Lah kok nanya?<\\/p>\",\"<p>Gak tau<\\/p>\",\"<p>jawaban B<\\/p>\",\"<p>jawaban D<\\/p>\"],\"question\":\"<p>Test pertanyaan dua <img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1649669948_8459cf5911d5d79aba36.jpeg\\\" width=\\\"1366\\\" height=\\\"768\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1649669948_8459cf5911d5d79aba36.jpeg\\\"><\\/p>\",\"answer\":\"A\",\"answered\":\"A\",\"correct\":true}],\"final_score\":50}', '{\"overall\":{\"total\":10,\"correct\":9,\"wrong\":1},\"detail\":[{\"q_id\":\"861510\",\"options\":[\"<p><strong>pilihan a soal 1<\\/strong><\\/p>\",\"pilihan b soal 1\",\"pilihan c soal 1\",\"pilihan d soal 1\",\"pilihan e soal 1\"],\"question\":\"soal 1 \",\"answer\":\"A\",\"answered\":\"B\",\"correct\":false},{\"q_id\":\"668610\",\"options\":[\"pilihan a soal 2\",\"<p><strong>pilihan b soal 2<\\/strong><\\/p>\",\"pilihan c soal 2\",\"pilihan d soal 2\",\"pilihan e soal 2\"],\"question\":\"soal 2\",\"answer\":\"B\",\"answered\":\"B\",\"correct\":true},{\"q_id\":\"917572\",\"options\":[\"pilihan a soal 3\",\"pilihan b soal 3\",\"pilihan c soal 3\",\"<p><strong>pilihan d soal 3<\\/strong><\\/p>\",\"pilihan e soal 3\"],\"question\":\"soal 3\",\"answer\":\"D\",\"answered\":\"D\",\"correct\":true},{\"q_id\":\"844234\",\"options\":[\"pilihan a soal 4\",\"pilihan b soal 4\",\"pilihan c soal 4\",\"pilihan d soal 4\",\"<p><strong>pilihan e soal 4<\\/strong><\\/p>\"],\"question\":\"soal 4\",\"answer\":\"E\",\"answered\":\"E\",\"correct\":true},{\"q_id\":\"262278\",\"options\":[\"pilihan a soal 5\",\"<p><strong>pilihan b soal 5<\\/strong><\\/p>\",\"pilihan c soal 5\",\"pilihan d soal 5\",\"<p>pilihan e soal 5<\\/p>\"],\"question\":\"soal 5\",\"answer\":\"B\",\"answered\":\"B\",\"correct\":true},{\"q_id\":\"839319\",\"options\":[\"<p><strong>pilihan a soal 6<\\/strong><\\/p>\",\"pilihan b soal 6\",\"pilihan c soal 6\",\"pilihan d soal 6\",\"pilihan e soal 6\"],\"question\":\"soal 6\",\"answer\":\"A\",\"answered\":\"A\",\"correct\":true},{\"q_id\":\"297663\",\"options\":[\"pilihan a soal 7\",\"pilihan b soal 7\",\"<p><strong>pilihan c soal 7<\\/strong><\\/p>\",\"pilihan d soal 7\",\"pilihan e soal 7\"],\"question\":\"soal 7\",\"answer\":\"C\",\"answered\":\"C\",\"correct\":true},{\"q_id\":\"292820\",\"options\":[\"pilihan a soal 8\",\"pilihan b soal 8\",\"pilihan c soal 8\",\"<p><strong>pilihan d soal 8<\\/strong><\\/p>\",\"pilihan e soal 8\"],\"question\":\"soal 8\",\"answer\":\"D\",\"answered\":\"D\",\"correct\":true},{\"q_id\":\"846190\",\"options\":[\"pilihan a soal 9\",\"pilihan b soal 9\",\"pilihan c soal 9\",\"pilihan d soal 9\",\"<p><strong>pilihan e soal 9<\\/strong><\\/p>\"],\"question\":\"soal 9\",\"answer\":\"E\",\"answered\":\"E\",\"correct\":true},{\"q_id\":\"445959\",\"options\":[\"pilihan a soal 10\",\"<p><strong>pilihan b soal 10<\\/strong><\\/p>\",\"pilihan c soal 10\",\"pilihan d soal 10\",\"pilihan e soal 10\"],\"question\":\"soal 10\",\"answer\":\"B\",\"answered\":\"B\",\"correct\":true}],\"final_score\":90}', 66.71, 50, 90),
(144, '1804105010007', 'Wahyu Pratama', 20, '4257339219', NULL, '{\"overall\":{\"total\":2,\"correct\":2,\"wrong\":0},\"detail\":[{\"q_id\":\"696221\",\"options\":[\"<p><strong>Maulana<\\/strong><\\/p>\",\"<p>Jurej<\\/p>\",\"<p>Wahyu<\\/p>\",\"<p>Fiqri<\\/p>\",\"<p>Shaquel<\\/p>\"],\"question\":\"<p>pertanyaan 1<img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1649669901_bea4304c984b85515b0f.png\\\" width=\\\"520\\\" height=\\\"447\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1649669901_bea4304c984b85515b0f.png\\\"><\\/p><p>gambar&nbsp;<strong>tanda tangan&nbsp;<\\/strong>siapa ini?<\\/p>\",\"answer\":\"A\",\"answered\":\"A\",\"correct\":true},{\"q_id\":\"751962\",\"options\":[\"<p>Gambar apa ini?<\\/p>\",\"<p>Lah kok nanya?<\\/p>\",\"<p><strong>Gak tau<\\/strong><\\/p>\",\"<p>jawaban B<\\/p>\",\"<p>jawaban D<\\/p>\"],\"question\":\"<p>Test pertanyaan dua <img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1649669948_8459cf5911d5d79aba36.jpeg\\\" width=\\\"1366\\\" height=\\\"768\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1649669948_8459cf5911d5d79aba36.jpeg\\\"><\\/p>\",\"answer\":\"C\",\"answered\":\"C\",\"correct\":true}],\"final_score\":100}', '{\"overall\":{\"total\":10,\"correct\":7,\"wrong\":3},\"detail\":[{\"q_id\":\"861510\",\"options\":[\"<p><strong>pilihan a soal 1<\\/strong><\\/p>\",\"pilihan b soal 1\",\"pilihan c soal 1\",\"pilihan d soal 1\",\"pilihan e soal 1\"],\"question\":\"soal 1 \",\"answer\":\"A\",\"answered\":\"A\",\"correct\":true},{\"q_id\":\"668610\",\"options\":[\"pilihan a soal 2\",\"<p><strong>pilihan b soal 2<\\/strong><\\/p>\",\"pilihan c soal 2\",\"pilihan d soal 2\",\"pilihan e soal 2\"],\"question\":\"soal 2\",\"answer\":\"B\",\"answered\":\"C\",\"correct\":false},{\"q_id\":\"917572\",\"options\":[\"pilihan a soal 3\",\"pilihan b soal 3\",\"pilihan c soal 3\",\"<p><strong>pilihan d soal 3<\\/strong><\\/p>\",\"pilihan e soal 3\"],\"question\":\"soal 3\",\"answer\":\"D\",\"answered\":\"D\",\"correct\":true},{\"q_id\":\"844234\",\"options\":[\"pilihan a soal 4\",\"pilihan b soal 4\",\"pilihan c soal 4\",\"pilihan d soal 4\",\"<p><strong>pilihan e soal 4<\\/strong><\\/p>\"],\"question\":\"soal 4\",\"answer\":\"E\",\"answered\":\"C\",\"correct\":false},{\"q_id\":\"262278\",\"options\":[\"pilihan a soal 5\",\"<p><strong>pilihan b soal 5<\\/strong><\\/p>\",\"pilihan c soal 5\",\"pilihan d soal 5\",\"<p>pilihan e soal 5<\\/p>\"],\"question\":\"soal 5\",\"answer\":\"B\",\"answered\":\"B\",\"correct\":true},{\"q_id\":\"839319\",\"options\":[\"<p><strong>pilihan a soal 6<\\/strong><\\/p>\",\"pilihan b soal 6\",\"pilihan c soal 6\",\"pilihan d soal 6\",\"pilihan e soal 6\"],\"question\":\"soal 6\",\"answer\":\"A\",\"answered\":\"A\",\"correct\":true},{\"q_id\":\"297663\",\"options\":[\"pilihan a soal 7\",\"pilihan b soal 7\",\"<p><strong>pilihan c soal 7<\\/strong><\\/p>\",\"pilihan d soal 7\",\"pilihan e soal 7\"],\"question\":\"soal 7\",\"answer\":\"C\",\"answered\":\"B\",\"correct\":false},{\"q_id\":\"292820\",\"options\":[\"pilihan a soal 8\",\"pilihan b soal 8\",\"pilihan c soal 8\",\"<p><strong>pilihan d soal 8<\\/strong><\\/p>\",\"pilihan e soal 8\"],\"question\":\"soal 8\",\"answer\":\"D\",\"answered\":\"D\",\"correct\":true},{\"q_id\":\"846190\",\"options\":[\"pilihan a soal 9\",\"pilihan b soal 9\",\"pilihan c soal 9\",\"pilihan d soal 9\",\"<p><strong>pilihan e soal 9<\\/strong><\\/p>\"],\"question\":\"soal 9\",\"answer\":\"E\",\"answered\":\"E\",\"correct\":true},{\"q_id\":\"445959\",\"options\":[\"pilihan a soal 10\",\"<p><strong>pilihan b soal 10<\\/strong><\\/p>\",\"pilihan c soal 10\",\"pilihan d soal 10\",\"pilihan e soal 10\"],\"question\":\"soal 10\",\"answer\":\"B\",\"answered\":\"B\",\"correct\":true}],\"final_score\":70}', NULL, 100, 70),
(145, '1804105010011', 'Ricky Eryandi', 20, '4257339219', '{\"overall\":{\"total\":22,\"correct\":21,\"wrong\":1,\"tot_diff_total\":0,\"total_ketahanan\":180},\"detail\":[{\"question_number\":\"30987\",\"total\":8,\"wrong\":0,\"correct\":8,\"tot_diff\":null,\"stability\":null},{\"question_number\":\"85723\",\"total\":6,\"wrong\":1,\"correct\":5,\"tot_diff\":2,\"stability\":90},{\"question_number\":\"51024\",\"total\":8,\"wrong\":0,\"correct\":8,\"tot_diff\":-2,\"stability\":90}],\"test_final_score\":{\"ketahanan\":90,\"ketelitian\":95,\"kecepatan\":18.33,\"kecepatan_final\":6.42,\"ketelitian_final\":33.25,\"ketahanan_final\":27,\"final_result\":66.67}}', '{\"overall\":{\"total\":2,\"correct\":2,\"wrong\":0},\"detail\":[{\"q_id\":\"696221\",\"options\":[\"<p><strong>Maulana<\\/strong><\\/p>\",\"<p>Jurej<\\/p>\",\"<p>Wahyu<\\/p>\",\"<p>Fiqri<\\/p>\",\"<p>Shaquel<\\/p>\"],\"question\":\"<p>pertanyaan 1<img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1649669901_bea4304c984b85515b0f.png\\\" width=\\\"520\\\" height=\\\"447\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1649669901_bea4304c984b85515b0f.png\\\"><\\/p><p>gambar&nbsp;<strong>tanda tangan&nbsp;<\\/strong>siapa ini?<\\/p>\",\"answer\":\"A\",\"answered\":\"A\",\"correct\":true},{\"q_id\":\"751962\",\"options\":[\"<p>Gambar apa ini?<\\/p>\",\"<p>Lah kok nanya?<\\/p>\",\"<p>Gak tau<\\/p>\",\"<p>jawaban B<\\/p>\",\"<p>jawaban D<\\/p>\"],\"question\":\"<p>Test pertanyaan dua <img src=\\\"http:\\/\\/localhost:8080\\/images\\/test_images\\/1649669948_8459cf5911d5d79aba36.jpeg\\\" width=\\\"1366\\\" height=\\\"768\\\" alt=\\\"\\\" data-mce-src=\\\"..\\/..\\/images\\/test_images\\/1649669948_8459cf5911d5d79aba36.jpeg\\\"><\\/p>\",\"answer\":\"A\",\"answered\":\"A\",\"correct\":true}],\"final_score\":100}', '{\"overall\":{\"total\":10,\"correct\":10,\"wrong\":0},\"detail\":[{\"q_id\":\"861510\",\"options\":[\"<p><strong>pilihan a soal 1<\\/strong><\\/p>\",\"pilihan b soal 1\",\"pilihan c soal 1\",\"pilihan d soal 1\",\"pilihan e soal 1\"],\"question\":\"soal 1 \",\"answer\":\"A\",\"answered\":\"A\",\"correct\":true},{\"q_id\":\"668610\",\"options\":[\"pilihan a soal 2\",\"<p><strong>pilihan b soal 2<\\/strong><\\/p>\",\"pilihan c soal 2\",\"pilihan d soal 2\",\"pilihan e soal 2\"],\"question\":\"soal 2\",\"answer\":\"B\",\"answered\":\"B\",\"correct\":true},{\"q_id\":\"917572\",\"options\":[\"pilihan a soal 3\",\"pilihan b soal 3\",\"pilihan c soal 3\",\"<p><strong>pilihan d soal 3<\\/strong><\\/p>\",\"pilihan e soal 3\"],\"question\":\"soal 3\",\"answer\":\"D\",\"answered\":\"D\",\"correct\":true},{\"q_id\":\"844234\",\"options\":[\"pilihan a soal 4\",\"pilihan b soal 4\",\"pilihan c soal 4\",\"pilihan d soal 4\",\"<p><strong>pilihan e soal 4<\\/strong><\\/p>\"],\"question\":\"soal 4\",\"answer\":\"E\",\"answered\":\"E\",\"correct\":true},{\"q_id\":\"262278\",\"options\":[\"pilihan a soal 5\",\"<p><strong>pilihan b soal 5<\\/strong><\\/p>\",\"pilihan c soal 5\",\"pilihan d soal 5\",\"<p>pilihan e soal 5<\\/p>\"],\"question\":\"soal 5\",\"answer\":\"B\",\"answered\":\"B\",\"correct\":true},{\"q_id\":\"839319\",\"options\":[\"<p><strong>pilihan a soal 6<\\/strong><\\/p>\",\"pilihan b soal 6\",\"pilihan c soal 6\",\"pilihan d soal 6\",\"pilihan e soal 6\"],\"question\":\"soal 6\",\"answer\":\"A\",\"answered\":\"A\",\"correct\":true},{\"q_id\":\"297663\",\"options\":[\"pilihan a soal 7\",\"pilihan b soal 7\",\"<p><strong>pilihan c soal 7<\\/strong><\\/p>\",\"pilihan d soal 7\",\"pilihan e soal 7\"],\"question\":\"soal 7\",\"answer\":\"C\",\"answered\":\"C\",\"correct\":true},{\"q_id\":\"292820\",\"options\":[\"pilihan a soal 8\",\"pilihan b soal 8\",\"pilihan c soal 8\",\"<p><strong>pilihan d soal 8<\\/strong><\\/p>\",\"pilihan e soal 8\"],\"question\":\"soal 8\",\"answer\":\"D\",\"answered\":\"D\",\"correct\":true},{\"q_id\":\"846190\",\"options\":[\"pilihan a soal 9\",\"pilihan b soal 9\",\"pilihan c soal 9\",\"pilihan d soal 9\",\"<p><strong>pilihan e soal 9<\\/strong><\\/p>\"],\"question\":\"soal 9\",\"answer\":\"E\",\"answered\":\"E\",\"correct\":true},{\"q_id\":\"445959\",\"options\":[\"pilihan a soal 10\",\"<p><strong>pilihan b soal 10<\\/strong><\\/p>\",\"pilihan c soal 10\",\"pilihan d soal 10\",\"pilihan e soal 10\"],\"question\":\"soal 10\",\"answer\":\"B\",\"answered\":\"B\",\"correct\":true}],\"final_score\":100}', 66.67, 100, 100),
(146, '1804105010004', 'Maulana Imam Muttaqin', 20, '7770108724', NULL, '{\"overall\":{\"total\":3,\"correct\":2,\"wrong\":1},\"detail\":[{\"q_id\":\"220885\",\"options\":[\"<p><strong>sdfasdf<\\/strong><\\/p>\",\"<p>asdasd<\\/p>\",\"<p>asdasd<\\/p>\",\"<p>asdasd<\\/p>\",\"<p>asdasdsd<\\/p>\"],\"question\":\"<p>asdfsadf<\\/p>\",\"answer\":\"A\",\"answered\":\"B\",\"correct\":false},{\"q_id\":\"611889\",\"options\":[\"<p>zczcxzcx<\\/p>\",\"<p>cbvcbb<\\/p>\",\"<p><strong>treret<\\/strong><\\/p>\",\"<p>hjggj<\\/p>\",\"<p>asdasdas<\\/p>\"],\"question\":\"<p>zcxzcxzcxczx<\\/p>\",\"answer\":\"C\",\"answered\":\"C\",\"correct\":true},{\"q_id\":\"829673\",\"options\":[\"<p>zxczxc<\\/p>\",\"<p><strong>zxczxc<\\/strong><\\/p>\",\"<p>dfsdfsddf<\\/p>\",\"<p>eqewer<\\/p>\",\"<p>dsdfsdfsdf<\\/p>\"],\"question\":\"<p>zxczxzxc<\\/p>\",\"answer\":\"B\",\"answered\":\"B\",\"correct\":true}],\"final_score\":66.67}', '{\"overall\":{\"total\":10,\"correct\":6,\"wrong\":4},\"detail\":[{\"question\":\"soal 1 \",\"q_id\":\"888757\",\"options\":[\"pilihan a soal 1\",\"pilihan b soal 1\",\"pilihan c soal 1\",\"pilihan d soal 1\",\"pilihan e soal 1\"],\"answer\":\"a\",\"answered\":\"A\",\"correct\":true},{\"question\":\"soal 2\",\"q_id\":\"379484\",\"options\":[\"pilihan a soal 2\",\"pilihan b soal 2\",\"pilihan c soal 2\",\"pilihan d soal 2\",\"pilihan e soal 2\"],\"answer\":\"b\",\"answered\":\"B\",\"correct\":true},{\"question\":\"soal 3\",\"q_id\":\"894660\",\"options\":[\"pilihan a soal 3\",\"pilihan b soal 3\",\"pilihan c soal 3\",\"pilihan d soal 3\",\"pilihan e soal 3\"],\"answer\":\"d\",\"answered\":\"B\",\"correct\":false},{\"question\":\"soal 4\",\"q_id\":\"685428\",\"options\":[\"pilihan a soal 4\",\"pilihan b soal 4\",\"pilihan c soal 4\",\"pilihan d soal 4\",\"pilihan e soal 4\"],\"answer\":\"e\",\"answered\":\"C\",\"correct\":false},{\"question\":\"soal 5\",\"q_id\":\"351878\",\"options\":[\"pilihan a soal 5\",\"pilihan b soal 5\",\"pilihan c soal 5\",\"pilihan d soal 5\",\"pilihan e soal 5\"],\"answer\":\"b\",\"answered\":\"B\",\"correct\":true},{\"question\":\"soal 6\",\"q_id\":\"212451\",\"options\":[\"pilihan a soal 6\",\"pilihan b soal 6\",\"pilihan c soal 6\",\"pilihan d soal 6\",\"pilihan e soal 6\"],\"answer\":\"a\",\"answered\":\"A\",\"correct\":true},{\"question\":\"soal 7\",\"q_id\":\"974630\",\"options\":[\"pilihan a soal 7\",\"pilihan b soal 7\",\"pilihan c soal 7\",\"pilihan d soal 7\",\"pilihan e soal 7\"],\"answer\":\"c\",\"answered\":\"C\",\"correct\":true},{\"question\":\"soal 8\",\"q_id\":\"770878\",\"options\":[\"pilihan a soal 8\",\"pilihan b soal 8\",\"pilihan c soal 8\",\"pilihan d soal 8\",\"pilihan e soal 8\"],\"answer\":\"d\",\"answered\":\"A\",\"correct\":false},{\"question\":\"soal 9\",\"q_id\":\"349064\",\"options\":[\"pilihan a soal 9\",\"pilihan b soal 9\",\"pilihan c soal 9\",\"pilihan d soal 9\",\"pilihan e soal 9\"],\"answer\":\"e\",\"answered\":\"E\",\"correct\":true},{\"question\":\"soal 10\",\"q_id\":\"968025\",\"options\":[\"pilihan a soal 10\",\"pilihan b soal 10\",\"pilihan c soal 10\",\"pilihan d soal 10\",\"pilihan e soal 10\"],\"answer\":\"b\",\"answered\":\"D\",\"correct\":false}],\"final_score\":60}', NULL, 66.67, 60),
(147, '1804105010013', 'Muhammad Jurej Alhamdi', 20, '7770108724', NULL, NULL, NULL, NULL, NULL, NULL),
(148, '1804105010064', 'Mifthahul Fiqri', 20, '7770108724', NULL, '{\"overall\":{\"total\":3,\"correct\":3,\"wrong\":0},\"detail\":[{\"q_id\":\"220885\",\"options\":[\"<p><strong>sdfasdf<\\/strong><\\/p>\",\"<p>asdasd<\\/p>\",\"<p>asdasd<\\/p>\",\"<p>asdasd<\\/p>\",\"<p>asdasdsd<\\/p>\"],\"question\":\"<p>asdfsadf<\\/p>\",\"answer\":\"A\",\"answered\":\"A\",\"correct\":true},{\"q_id\":\"611889\",\"options\":[\"<p>zczcxzcx<\\/p>\",\"<p>cbvcbb<\\/p>\",\"<p><strong>treret<\\/strong><\\/p>\",\"<p>hjggj<\\/p>\",\"<p>asdasdas<\\/p>\"],\"question\":\"<p>zcxzcxzcxczx<\\/p>\",\"answer\":\"C\",\"answered\":\"C\",\"correct\":true},{\"q_id\":\"829673\",\"options\":[\"<p>zxczxc<\\/p>\",\"<p><strong>zxczxc<\\/strong><\\/p>\",\"<p>dfsdfsddf<\\/p>\",\"<p>eqewer<\\/p>\",\"<p>dsdfsdfsdf<\\/p>\"],\"question\":\"<p>zxczxzxc<\\/p>\",\"answer\":\"B\",\"answered\":\"B\",\"correct\":true}],\"final_score\":100}', NULL, NULL, 100, NULL),
(149, '1804105010026', 'Shaquel Rizki Ramadhan na', 20, '7770108724', NULL, NULL, NULL, NULL, NULL, NULL),
(150, '1804105010007', 'Wahyu Pratama', 20, '7770108724', NULL, NULL, NULL, NULL, NULL, NULL),
(151, '1804105010011', 'Ricky Eryandi', 20, '7770108724', NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `test_kecerdasan`
--

CREATE TABLE `test_kecerdasan` (
  `id` int(11) NOT NULL,
  `test_id` varchar(255) NOT NULL,
  `class_id` int(11) DEFAULT NULL,
  `duration` int(11) NOT NULL,
  `test_start_at` datetime DEFAULT NULL,
  `test_end_at` datetime DEFAULT NULL,
  `questions_list` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '[]',
  `sorted` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `test_kecerdasan`
--

INSERT INTO `test_kecerdasan` (`id`, `test_id`, `class_id`, `duration`, `test_start_at`, `test_end_at`, `questions_list`, `sorted`) VALUES
(8, '4257339219', 20, 3600, '2022-04-10 16:37:00', '2022-04-12 15:35:00', '[{\"q_id\":\"696221\",\"options\":[\"<p><strong>Maulana</strong></p>\",\"<p>Jurej</p>\",\"<p>Wahyu</p>\",\"<p>Fiqri</p>\",\"<p>Shaquel</p>\"],\"question\":\"<p>pertanyaan 1<img src=\\\"http://localhost:8080/images/test_images/1649669901_bea4304c984b85515b0f.png\\\" width=\\\"520\\\" height=\\\"447\\\" alt=\\\"\\\" data-mce-src=\\\"../../images/test_images/1649669901_bea4304c984b85515b0f.png\\\"></p><p>gambar&nbsp;<strong>tanda tangan&nbsp;</strong>siapa ini?</p>\",\"answer\":\"A\"},{\"q_id\":\"751962\",\"options\":[\"<p>Gambar apa ini?</p>\",\"<p>Lah kok nanya?</p>\",\"<p><strong>Gak tau</strong></p>\",\"<p>jawaban B</p>\",\"<p>jawaban D</p>\"],\"question\":\"<p>Test pertanyaan dua <img src=\\\"http://localhost:8080/images/test_images/1649669948_8459cf5911d5d79aba36.jpeg\\\" width=\\\"1366\\\" height=\\\"768\\\" alt=\\\"\\\" data-mce-src=\\\"../../images/test_images/1649669948_8459cf5911d5d79aba36.jpeg\\\"></p>\",\"answer\":\"C\"}]', 1),
(9, '7770108724', 20, 7200, '2022-04-18 00:12:00', '2022-04-18 03:12:00', '[{\"q_id\":\"220885\",\"options\":[\"<p><strong>sdfasdf</strong></p>\",\"<p>asdasd</p>\",\"<p>asdasd</p>\",\"<p>asdasd</p>\",\"<p>asdasdsd</p>\"],\"question\":\"<p>asdfsadf</p>\",\"answer\":\"A\"},{\"q_id\":\"611889\",\"options\":[\"<p>zczcxzcx</p>\",\"<p>cbvcbb</p>\",\"<p><strong>treret</strong></p>\",\"<p>hjggj</p>\",\"<p>asdasdas</p>\"],\"question\":\"<p>zcxzcxzcxczx</p>\",\"answer\":\"C\"},{\"q_id\":\"829673\",\"options\":[\"<p>zxczxc</p>\",\"<p><strong>zxczxc</strong></p>\",\"<p>dfsdfsddf</p>\",\"<p>eqewer</p>\",\"<p>dsdfsdfsdf</p>\"],\"question\":\"<p>zxczxzxc</p>\",\"answer\":\"B\"}]', 1);

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
(26, '4257339219', '20', 3, 5, 15, '2022-04-10 16:34:00', '2022-04-12 16:34:00', 0, NULL, 1, 0, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `test_kepribadian`
--

CREATE TABLE `test_kepribadian` (
  `id` int(11) NOT NULL,
  `test_id` varchar(255) NOT NULL,
  `class_id` int(11) DEFAULT NULL,
  `duration` int(11) NOT NULL,
  `test_start_at` datetime DEFAULT NULL,
  `test_end_at` datetime DEFAULT NULL,
  `questions_list` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '[]',
  `sorted` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `test_kepribadian`
--

INSERT INTO `test_kepribadian` (`id`, `test_id`, `class_id`, `duration`, `test_start_at`, `test_end_at`, `questions_list`, `sorted`) VALUES
(8, '4257339219', 20, 7200, '2022-04-10 16:42:00', '2022-04-12 15:42:00', '[{\"q_id\":\"861510\",\"options\":[\"<p><strong>pilihan a soal 1</strong></p>\",\"pilihan b soal 1\",\"pilihan c soal 1\",\"pilihan d soal 1\",\"pilihan e soal 1\"],\"question\":\"soal 1 \",\"answer\":\"A\"},{\"q_id\":\"668610\",\"options\":[\"pilihan a soal 2\",\"<p><strong>pilihan b soal 2</strong></p>\",\"pilihan c soal 2\",\"pilihan d soal 2\",\"pilihan e soal 2\"],\"question\":\"soal 2\",\"answer\":\"B\"},{\"q_id\":\"917572\",\"options\":[\"pilihan a soal 3\",\"pilihan b soal 3\",\"pilihan c soal 3\",\"<p><strong>pilihan d soal 3</strong></p>\",\"pilihan e soal 3\"],\"question\":\"soal 3\",\"answer\":\"D\"},{\"q_id\":\"844234\",\"options\":[\"pilihan a soal 4\",\"pilihan b soal 4\",\"pilihan c soal 4\",\"pilihan d soal 4\",\"<p><strong>pilihan e soal 4</strong></p>\"],\"question\":\"soal 4\",\"answer\":\"E\"},{\"q_id\":\"262278\",\"options\":[\"pilihan a soal 5\",\"<p><strong>pilihan b soal 5</strong></p>\",\"pilihan c soal 5\",\"pilihan d soal 5\",\"<p>pilihan e soal 5</p>\"],\"question\":\"soal 5\",\"answer\":\"B\"},{\"q_id\":\"839319\",\"options\":[\"<p><strong>pilihan a soal 6</strong></p>\",\"pilihan b soal 6\",\"pilihan c soal 6\",\"pilihan d soal 6\",\"pilihan e soal 6\"],\"question\":\"soal 6\",\"answer\":\"A\"},{\"q_id\":\"297663\",\"options\":[\"pilihan a soal 7\",\"pilihan b soal 7\",\"<p><strong>pilihan c soal 7</strong></p>\",\"pilihan d soal 7\",\"pilihan e soal 7\"],\"question\":\"soal 7\",\"answer\":\"C\"},{\"q_id\":\"292820\",\"options\":[\"pilihan a soal 8\",\"pilihan b soal 8\",\"pilihan c soal 8\",\"<p><strong>pilihan d soal 8</strong></p>\",\"pilihan e soal 8\"],\"question\":\"soal 8\",\"answer\":\"D\"},{\"q_id\":\"846190\",\"options\":[\"pilihan a soal 9\",\"pilihan b soal 9\",\"pilihan c soal 9\",\"pilihan d soal 9\",\"<p><strong>pilihan e soal 9</strong></p>\"],\"question\":\"soal 9\",\"answer\":\"E\"},{\"q_id\":\"445959\",\"options\":[\"pilihan a soal 10\",\"<p><strong>pilihan b soal 10</strong></p>\",\"pilihan c soal 10\",\"pilihan d soal 10\",\"pilihan e soal 10\"],\"question\":\"soal 10\",\"answer\":\"B\"}]', 1),
(9, '7770108724', 20, 9000, '2022-04-17 02:55:00', '2022-04-18 05:56:00', '[{\"question\":\"soal 1 \",\"q_id\":\"888757\",\"options\":[\"pilihan a soal 1\",\"pilihan b soal 1\",\"pilihan c soal 1\",\"pilihan d soal 1\",\"pilihan e soal 1\"],\"answer\":\"a\"},{\"question\":\"soal 2\",\"q_id\":\"379484\",\"options\":[\"pilihan a soal 2\",\"pilihan b soal 2\",\"pilihan c soal 2\",\"pilihan d soal 2\",\"pilihan e soal 2\"],\"answer\":\"b\"},{\"question\":\"soal 3\",\"q_id\":\"894660\",\"options\":[\"pilihan a soal 3\",\"pilihan b soal 3\",\"pilihan c soal 3\",\"pilihan d soal 3\",\"pilihan e soal 3\"],\"answer\":\"d\"},{\"question\":\"soal 4\",\"q_id\":\"685428\",\"options\":[\"pilihan a soal 4\",\"pilihan b soal 4\",\"pilihan c soal 4\",\"pilihan d soal 4\",\"pilihan e soal 4\"],\"answer\":\"e\"},{\"question\":\"soal 5\",\"q_id\":\"351878\",\"options\":[\"pilihan a soal 5\",\"pilihan b soal 5\",\"pilihan c soal 5\",\"pilihan d soal 5\",\"pilihan e soal 5\"],\"answer\":\"b\"},{\"question\":\"soal 6\",\"q_id\":\"212451\",\"options\":[\"pilihan a soal 6\",\"pilihan b soal 6\",\"pilihan c soal 6\",\"pilihan d soal 6\",\"pilihan e soal 6\"],\"answer\":\"a\"},{\"question\":\"soal 7\",\"q_id\":\"974630\",\"options\":[\"pilihan a soal 7\",\"pilihan b soal 7\",\"pilihan c soal 7\",\"pilihan d soal 7\",\"pilihan e soal 7\"],\"answer\":\"c\"},{\"question\":\"soal 8\",\"q_id\":\"770878\",\"options\":[\"pilihan a soal 8\",\"pilihan b soal 8\",\"pilihan c soal 8\",\"pilihan d soal 8\",\"pilihan e soal 8\"],\"answer\":\"d\"},{\"question\":\"soal 9\",\"q_id\":\"349064\",\"options\":[\"pilihan a soal 9\",\"pilihan b soal 9\",\"pilihan c soal 9\",\"pilihan d soal 9\",\"pilihan e soal 9\"],\"answer\":\"e\"},{\"question\":\"soal 10\",\"q_id\":\"968025\",\"options\":[\"pilihan a soal 10\",\"pilihan b soal 10\",\"pilihan c soal 10\",\"pilihan d soal 10\",\"pilihan e soal 10\"],\"answer\":\"b\"}]', 1);

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
(27, '4257339219', '20', 'Latihan 1', '2022-04-11', 1, 1, 1),
(28, '7770108724', '20', 'Latihan 2', '2022-04-12', NULL, 1, 1),
(29, '2605164561', '21', 'Ujian', '2022-04-18', NULL, 1, NULL),
(30, '1502450761', '22', 'Test', '2022-04-18', NULL, NULL, 1);

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
  ADD PRIMARY KEY (`id`),
  ADD KEY `class_id` (`class_id`);

--
-- Indeks untuk tabel `test_kecerdasan`
--
ALTER TABLE `test_kecerdasan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `class_id` (`class_id`);

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
  ADD KEY `class_id` (`class_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT untuk tabel `participants_lists`
--
ALTER TABLE `participants_lists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT untuk tabel `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT untuk tabel `tests_results`
--
ALTER TABLE `tests_results`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=168;

--
-- AUTO_INCREMENT untuk tabel `test_kecerdasan`
--
ALTER TABLE `test_kecerdasan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `test_kecermatan`
--
ALTER TABLE `test_kecermatan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT untuk tabel `test_kepribadian`
--
ALTER TABLE `test_kepribadian`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `test_list`
--
ALTER TABLE `test_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT untuk tabel `test_participant`
--
ALTER TABLE `test_participant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=169;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `tests_results`
--
ALTER TABLE `tests_results`
  ADD CONSTRAINT `tests_results_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `class_list` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `test_kecerdasan`
--
ALTER TABLE `test_kecerdasan`
  ADD CONSTRAINT `test_kecerdasan_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `class_list` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `test_kepribadian`
--
ALTER TABLE `test_kepribadian`
  ADD CONSTRAINT `test_kepribadian_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `class_list` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

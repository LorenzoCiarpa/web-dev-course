-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Nov 22, 2022 alle 15:01
-- Versione del server: 10.4.21-MariaDB
-- Versione PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `java_db`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `auth`
--

CREATE TABLE `auth` (
  `email` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `auth`
--

INSERT INTO `auth` (`email`, `username`, `password`) VALUES
('lorenzo@prova.it', 'lorenzo', 'test'),
('email@email.com', 'a', 'a'),
('emaila@email.com', 'a', 'a'),
('testa@testa.it', 'ciao', 'ciao'),
('prova@prova.it', 'a', 'a'),
('prov@provao.it', 'c', 'cc'),
('prv@provao.it', 'a', 'a'),
('pv@provao.it', 'a', 'a');

-- --------------------------------------------------------

--
-- Struttura della tabella `cars`
--

CREATE TABLE `cars` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `marca` varchar(100) NOT NULL,
  `anno_immatricolazione` int(11) NOT NULL,
  `proprietario` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `cars`
--

INSERT INTO `cars` (`id`, `nome`, `marca`, `anno_immatricolazione`, `proprietario`) VALUES
(2, 'polo', 'volkswagen', 2021, 'lorenzo@prova.it'),
(3, 'prova@prova.it', 'panda', 0, '2000'),
(4, 'panda', 'fiat', 2000, 'prova@prova.it'),
(5, 'cinquecento', 'fiat', 2000, 'prova@prova.it'),
(6, '500', 'fiat', 2000, 'prova@prova.it');

-- --------------------------------------------------------

--
-- Struttura della tabella `people`
--

CREATE TABLE `people` (
  `email` varchar(100) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `cognome` varchar(100) NOT NULL,
  `citta` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `people`
--

INSERT INTO `people` (`email`, `nome`, `cognome`, `citta`) VALUES
('prova@prova.it', 'provaName', 'cognomeProva', 'provaCity'),
('emailTest@test.it', 'Lorenzo', 'ciarpa', 'Rome'),
('emailTest@test.it', 'Lorenzo', 'ciarpa', 'Rome'),
('emailTest@test.it', 'Lorenzo', 'ciarpa', 'Rome'),
('lorenzo@test.it', 'Lorenzo', 'ciarpa', 'Rome'),
('lorenzoTest@test.it', 'Lorenzo', 'ciarpa', 'Rome');

-- --------------------------------------------------------

--
-- Struttura della tabella `produttori`
--

CREATE TABLE `produttori` (
  `produttori_id` int(11) NOT NULL,
  `nome` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `produttori`
--
ALTER TABLE `produttori`
  ADD PRIMARY KEY (`produttori_id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT per la tabella `produttori`
--
ALTER TABLE `produttori`
  MODIFY `produttori_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

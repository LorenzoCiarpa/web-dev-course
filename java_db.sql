-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Nov 23, 2022 alle 16:06
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
('pv@provao.it', 'a', 'a'),
('lorenzo@corso.it', 'lorenzoCorso', '6e6bc4e49dd477ebc98ef4046c067b5f');

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
(6, '500', 'fiat', 2000, 'prova@prova.it'),
(15, 'golf', 'volkswagen', 2020, 'lorenzo@corso.it'),
(16, 'golf', 'volkswagen', 2020, 'lorenzo@corso.it'),
(17, 'golf', 'volkswagen', 2020, 'lorenzo@corso.it'),
(18, 'golf', 'volkswagen', 2020, 'lorenzo@corso.it'),
(19, 'golf', 'volkswagen', 2020, 'lorenzo@corso.it'),
(20, 'golf', 'volkswagen', 2020, 'lorenzo@corso.it'),
(21, 'golf', 'volkswagen', 2020, 'lorenzo@corso.it');

-- --------------------------------------------------------

--
-- Struttura della tabella `corso`
--

CREATE TABLE `corso` (
  `codice` int(11) NOT NULL,
  `titolo` varchar(45) DEFAULT NULL,
  `docente` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `corso`
--

INSERT INTO `corso` (`codice`, `titolo`, `docente`) VALUES
(1, 'Analisi', 'Alfredo'),
(2, 'Chimica', 'Giorgio'),
(3, 'Chimica', 'Giovanni'),
(4, 'Fisica', 'Luca');

-- --------------------------------------------------------

--
-- Struttura della tabella `esame`
--

CREATE TABLE `esame` (
  `studente` varchar(45) DEFAULT NULL,
  `voto` int(11) DEFAULT NULL,
  `corso` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `esame`
--

INSERT INTO `esame` (`studente`, `voto`, `corso`) VALUES
('6554', 30, 1),
('6554', 25, 2),
('8765', 18, 1),
('8765', 22, 2),
('9876', 21, 3),
('7890', 26, 2),
('8901', 28, 3);

-- --------------------------------------------------------

--
-- Struttura della tabella `impiegato`
--

CREATE TABLE `impiegato` (
  `matricola` int(11) NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `eta` int(11) DEFAULT NULL,
  `stipendio` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struttura della tabella `maternita`
--

CREATE TABLE `maternita` (
  `madre` varchar(45) DEFAULT NULL,
  `figlio` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
-- Struttura della tabella `persone`
--

CREATE TABLE `persone` (
  `nome` varchar(45) DEFAULT NULL,
  `eta` int(11) DEFAULT NULL,
  `reddito` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struttura della tabella `produttori`
--

CREATE TABLE `produttori` (
  `produttori_id` int(11) NOT NULL,
  `nome` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struttura della tabella `sessioni`
--

CREATE TABLE `sessioni` (
  `id` int(11) NOT NULL,
  `email` int(11) NOT NULL,
  `access_token` int(11) NOT NULL,
  `scadenza` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struttura della tabella `studente`
--

CREATE TABLE `studente` (
  `matricola` varchar(45) NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `cognome` varchar(45) DEFAULT NULL,
  `dataNascita` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `studente`
--

INSERT INTO `studente` (`matricola`, `nome`, `cognome`, `dataNascita`) VALUES
('1234', 'lorenzo', 'ciarpa', '03/11/1998'),
('6554', 'Rossi', 'mario', '05/12/1978'),
('7890', 'Giallo', 'Paolo', '03/11/1976'),
('8765', 'Neri', 'Neri', '03/11/1976'),
('8901', 'Verdi', 'Marco', '03/11/1978');

-- --------------------------------------------------------

--
-- Struttura della tabella `supervisione`
--

CREATE TABLE `supervisione` (
  `impiegato` int(11) DEFAULT NULL,
  `capo` int(11) DEFAULT NULL
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
-- Indici per le tabelle `corso`
--
ALTER TABLE `corso`
  ADD PRIMARY KEY (`codice`);

--
-- Indici per le tabelle `impiegato`
--
ALTER TABLE `impiegato`
  ADD PRIMARY KEY (`matricola`);

--
-- Indici per le tabelle `produttori`
--
ALTER TABLE `produttori`
  ADD PRIMARY KEY (`produttori_id`);

--
-- Indici per le tabelle `studente`
--
ALTER TABLE `studente`
  ADD PRIMARY KEY (`matricola`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT per la tabella `corso`
--
ALTER TABLE `corso`
  MODIFY `codice` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT per la tabella `produttori`
--
ALTER TABLE `produttori`
  MODIFY `produttori_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

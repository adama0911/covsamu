-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : ven. 08 mai 2020 à 18:20
-- Version du serveur :  10.4.11-MariaDB
-- Version de PHP : 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `samvid19`
--

-- --------------------------------------------------------

--
-- Structure de la table `patient`
--

CREATE TABLE `patient` (
  `id` int(11) NOT NULL,
  `code` varchar(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `sexe` varchar(255) NOT NULL,
  `naissance` date NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `niveaucascontact` varchar(255) NOT NULL,
  `region` varchar(255) NOT NULL,
  `quartier` varchar(255) NOT NULL,
  `district` varchar(255) NOT NULL,
  `matrimanial` varchar(255) NOT NULL,
  `nbrEnfants` varchar(255) NOT NULL,
  `grossesse` varchar(255) NOT NULL,
  `nbrPersChezVous` varchar(255) NOT NULL,
  `nbrPersChambre` int(11) NOT NULL,
  `TravallezVous` varchar(255) NOT NULL,
  `domain` varchar(255) NOT NULL,
  `scolarise` varchar(255) NOT NULL,
  `dateContact` date NOT NULL,
  `lienAvecCove` varchar(255) NOT NULL,
  `dateContactautorite` date NOT NULL,
  `contacter` varchar(255) NOT NULL,
  `lieuxFrenquenter` text NOT NULL,
  `symtom` varchar(255) NOT NULL,
  `autreMaladie` text NOT NULL,
  `medicaments` text NOT NULL,
  `heur` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `patient`
--

INSERT INTO `patient` (`id`, `code`, `nom`, `prenom`, `sexe`, `naissance`, `telephone`, `ville`, `niveaucascontact`, `region`, `quartier`, `district`, `matrimanial`, `nbrEnfants`, `grossesse`, `nbrPersChezVous`, `nbrPersChambre`, `TravallezVous`, `domain`, `scolarise`, `dateContact`, `lienAvecCove`, `dateContactautorite`, `contacter`, `lieuxFrenquenter`, `symtom`, `autreMaladie`, `medicaments`, `heur`) VALUES
(1, '5456465465', 'mbaye', 'moustafa', 'homme', '2016-01-13', '776542312', 'Dakar', 'niveaucascontact', 'Dakar', 'Yoff', 'Foire', 'marié', '2', 'non', '5', 2, 'oui', 'santé', 'oui', '2020-01-16', '', '2020-01-23', 'oui', 'Grand Yoff', 'fievre, toux', 'rhume', 'paracetamole', 'matin'),
(2, '6568768478', 'Modou', 'mbar', 'homme', '2016-01-13', '776326542', 'Dakar', 'niveaucascontact', 'Dakar', 'Yoff', 'Foire', 'marié', '2', 'non', '5', 2, 'oui', 'santé', 'oui', '2020-01-16', '', '2020-01-23', 'oui', 'Grand Yoff', 'fievre, toux', 'rhume', 'paracetamole', 'matin'),
(3, '5456465465', 'mbaye', 'moustafa', 'homme', '2016-01-13', '776542312', 'Dakar', 'niveaucascontact', 'Dakar', 'Yoff', 'Foire', 'marié', '2', 'non', '5', 2, 'oui', 'santé', 'oui', '2020-01-16', '', '2020-01-23', 'oui', 'Grand Yoff', 'fievre, toux', 'rhume', 'paracetamole', 'matin');

-- --------------------------------------------------------

--
-- Structure de la table `symptomes`
--

CREATE TABLE `symptomes` (
  `id` int(11) NOT NULL,
  `id_patient` int(11) NOT NULL,
  `temperature` decimal(10,0) NOT NULL,
  `toux` varchar(255) NOT NULL,
  `difresp` varchar(255) NOT NULL,
  `Malgorge` varchar(255) NOT NULL,
  `conjonctivite` varchar(255) NOT NULL,
  `mauxTete` varchar(255) NOT NULL,
  `nezbouche` varchar(255) NOT NULL,
  `douleurmusculaire` varchar(255) NOT NULL,
  `fatige` varchar(255) NOT NULL,
  `vomi` varchar(255) NOT NULL,
  `diarrhee` varchar(255) NOT NULL,
  `perteOdora` varchar(255) NOT NULL,
  `perteGout` varchar(255) NOT NULL,
  `autreSigne` varchar(255) NOT NULL,
  `syntomesEntourage` varchar(255) NOT NULL,
  `heur` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `symptomes`
--

INSERT INTO `symptomes` (`id`, `id_patient`, `temperature`, `toux`, `difresp`, `Malgorge`, `conjonctivite`, `mauxTete`, `nezbouche`, `douleurmusculaire`, `fatige`, `vomi`, `diarrhee`, `perteOdora`, `perteGout`, `autreSigne`, `syntomesEntourage`, `heur`, `date`) VALUES
(1, 1, '36', 'oui', 'non', 'non', 'non', 'oui', 'non', 'non', 'oui', 'non', 'non', 'non', 'non', 'non', 'oui', 'matin', '2020-05-20 13:34:30'),
(2, 1, '38', 'oui', 'non', 'non', 'non', 'oui', 'non', 'non', 'oui', 'non', 'non', 'non', 'non', 'non', 'oui', 'matin', '2020-05-20 17:34:30'),
(3, 2, '36', 'non', 'non', 'non', 'non', 'non', 'non', 'non', 'non', 'non', 'non', 'non', 'non', 'non', 'non', 'matin', '2020-05-20 13:34:30'),
(4, 1, '36', 'oui', 'non', 'non', 'non', 'non', 'non', 'non', 'non', 'non', 'non', 'non', 'non', 'non', 'non', 'matin', '2020-05-20 17:34:30'),
(5, 1, '36', 'oui', 'non', 'non', 'non', 'non', 'non', 'non', 'non', 'non', 'non', 'non', 'non', 'non', 'non', 'matin', '2020-05-20 13:34:30');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `symptomes`
--
ALTER TABLE `symptomes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `patient`
--
ALTER TABLE `patient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `symptomes`
--
ALTER TABLE `symptomes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.4.13.1deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 04, 2016 at 11:56 AM
-- Server version: 5.6.31-0ubuntu0.15.10.1
-- PHP Version: 5.6.11-1ubuntu3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gwc_handmade`
--

-- --------------------------------------------------------

--
-- Table structure for table `defects`
--

DROP TABLE IF EXISTS `defects`;
CREATE TABLE IF NOT EXISTS `defects` (
  `id` int(11) NOT NULL,
  `code` varchar(5) NOT NULL,
  `text` varchar(200) CHARACTER SET gbk NOT NULL,
  `type` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=280 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `defects`
--

INSERT INTO `defects` (`id`, `code`, `text`, `type`) VALUES
(1, 'A1', '包装体内烟支断残', 'stick cel a'),
(2, 'A2', '包装明显异味', 'stick cel a'),
(3, 'A3', '烟支明显异味', 'stick cel a'),
(4, 'A4', '烟支生霉', 'stick cel a'),
(5, 'A5', '烟支虫蛀', 'stick cel a'),
(6, 'B1', '包装体内烟支短支', 'stick cel b'),
(7, 'B2', '包装物严重变形', 'stick cel b'),
(8, 'B3', '包装物文字、图案不完整', 'stick cel b'),
(9, 'B4', '木片未能包裹烟支、木片散开', 'stick cel b'),
(10, 'B5', '烟支刮破＞3mm', 'stick cel b'),
(11, 'B6', '烟支套/管内无烟支包装物', 'stick cel b'),
(12, 'B7', '烟支套/管变形、凹凸不平', 'stick cel b'),
(13, 'B8', '烟支竹节', 'stick cel b'),
(14, 'C1', '包装体中烟支之间相互粘连', 'stick cel c'),
(15, 'C10', '烟支包装物密封不严', 'stick cel c'),
(16, 'C11', '烟支包装物明显折皱、翘边', 'stick cel c'),
(17, 'C12', '烟支包装物明显色差', 'stick cel c'),
(18, 'C13', '烟支包装物表面不洁', 'stick cel c'),
(19, 'C14', '烟支套折叠不规范', 'stick cel c'),
(20, 'C15', '烟支病斑≥2mm ', 'stick cel c'),
(21, 'C16', '烟支病斑＜2mm多于2处', 'stick cel c'),
(22, 'C17', '烟支空头', 'stick cel c'),
(23, 'C18', '烟支端面触头＞1/3圆周', 'stick cel c'),
(24, 'C19', '烟支竹节', 'stick cel c'),
(25, 'C2', '包装体内烟支切口差＞2mm', 'stick cel c'),
(26, 'C20', '烟支缝口不严合', 'stick cel c'),
(27, 'C21', '烟支表面不洁', 'stick cel c'),
(28, 'C22', '烟支表面明显不洁', 'stick cel c'),
(29, 'C23', '烟支表面明显皱纹', 'stick cel c'),
(30, 'C24', '烟支表面颜色不均匀', 'stick cel c'),
(31, 'C25', '胶水溢出，导致粘连', 'stick cel c'),
(32, 'C26', '茄衣缠绕转数不符', 'stick cel c'),
(33, 'C27', '青烟、黑褐、严重挂灰', 'stick cel c'),
(35, 'C3', '指环位置不符合标准要求', 'stick cel c'),
(36, 'C4', '指环掉落', 'stick cel c'),
(37, 'C5', '指环粘贴不牢固', 'stick cel c'),
(38, 'C6', '烟支＞5mm折痕', 'stick cel c'),
(39, 'C7', '烟支包装物不完整', 'stick cel c'),
(40, 'C8', '烟支包装物不易打开', 'stick cel c'),
(41, 'C9', '烟支包装物不牢固', 'stick cel c'),
(42, 'A1', '包装体内烟支断残', 'stick ring a'),
(43, 'A2', '包装明显异味', 'stick ring a'),
(44, 'A3', '烟支明显异味', 'stick ring a'),
(45, 'A4', '烟支生霉', 'stick ring a'),
(46, 'A5', '烟支虫蛀', 'stick ring a'),
(47, 'B1', '包装体内烟支短支', 'stick ring b'),
(48, 'B2', '包装物严重变形', 'stick ring b'),
(49, 'B3', '包装物文字、图案不完整', 'stick ring b'),
(50, 'B4', '木片未能包裹烟支、木片散开', 'stick ring b'),
(51, 'B5', '烟支刮破＞3mm', 'stick ring b'),
(52, 'B6', '烟支套/管内无烟支包装物', 'stick ring b'),
(53, 'B7', '烟支套/管变形、凹凸不平', 'stick ring b'),
(54, 'B8', '烟支竹节', 'stick ring b'),
(55, 'C1', '包装体中烟支之间相互粘连', 'stick ring c'),
(56, 'C2', '包装体内烟支切口差＞2mm', 'stick ring c'),
(57, 'C3', '指环位置不符合标准要求', 'stick ring c'),
(58, 'C4', '指环掉落', 'stick ring c'),
(59, 'C5', '指环粘贴不牢固', 'stick ring c'),
(60, 'C6', '烟支＞5mm折痕', 'stick ring c'),
(61, 'C7', '烟支包装物不完整', 'stick ring c'),
(62, 'C8', '烟支包装物不易打开', 'stick ring c'),
(63, 'C9', '烟支包装物不牢固', 'stick ring c'),
(64, 'C10', '烟支包装物密封不严', 'stick ring c'),
(65, 'C11', '烟支包装物明显折皱、翘边', 'stick ring c'),
(66, 'C12', '烟支包装物明显色差', 'stick ring c'),
(67, 'C13', '烟支包装物表面不洁', 'stick ring c'),
(68, 'C14', '烟支套折叠不规范', 'stick ring c'),
(69, 'C15', '烟支病斑≥2mm', 'stick ring c'),
(70, 'C16', '烟支病斑＜2mm多于2处', 'stick ring c'),
(71, 'C17', '烟支空头', 'stick ring c'),
(72, 'C18', '烟支端面触头＞1/3圆周', 'stick ring c'),
(73, 'C19', '烟支竹节', 'stick ring c'),
(74, 'C20', '烟支缝口不严合', 'stick ring c'),
(75, 'C21', '烟支表面不洁', 'stick ring c'),
(76, 'C22', '烟支表面明显不洁', 'stick ring c'),
(77, 'C23', '烟支表面明显皱纹', 'stick ring c'),
(78, 'C24', '烟支表面颜色不均匀', 'stick ring c'),
(79, 'C25', '胶水溢出，导致粘连', 'stick ring c'),
(80, 'C26', '茄衣缠绕转数不符', 'stick ring c'),
(81, 'C27', '青烟、黑褐、严重挂灰', 'stick ring c'),
(82, 'A1', '包装体内烟支断残', 'stick set a'),
(83, 'A2', '包装明显异味', 'stick set a'),
(84, 'A3', '烟支明显异味', 'stick set a'),
(85, 'A4', '烟支生霉', 'stick set a'),
(86, 'A5', '烟支虫蛀', 'stick set a'),
(87, 'B1', '包装体内烟支短支', 'stick set b'),
(88, 'B2', '包装物严重变形', 'stick set b'),
(89, 'B3', '包装物文字、图案不完整', 'stick set b'),
(90, 'B4', '木片未能包裹烟支、木片散开', 'stick set b'),
(91, 'B5', '烟支刮破＞3mm', 'stick set b'),
(92, 'B6', '烟支套/管内无烟支包装物', 'stick set b'),
(93, 'B7', '烟支套/管变形、凹凸不平', 'stick set b'),
(94, 'B8', '烟支竹节', 'stick set b'),
(95, 'C1', '包装体中烟支之间相互粘连', 'stick set c'),
(96, 'C2', '包装体内烟支切口差＞2mm', 'stick set c'),
(97, 'C3', '指环位置不符合标准要求', 'stick set c'),
(98, 'C4', '指环掉落', 'stick set c'),
(99, 'C5', '指环粘贴不牢固', 'stick set c'),
(100, 'C6', '烟支＞5mm折痕', 'stick set c'),
(101, 'C7', '烟支包装物不完整', 'stick set c'),
(102, 'C8', '烟支包装物不易打开', 'stick set c'),
(103, 'C9', '烟支包装物不牢固', 'stick set c'),
(104, 'C10', '烟支包装物密封不严', 'stick set c'),
(105, 'C11', '烟支包装物明显折皱、翘边', 'stick set c'),
(106, 'C12', '烟支包装物明显色差', 'stick set c'),
(107, 'C13', '烟支包装物表面不洁', 'stick set c'),
(108, 'C14', '烟支套折叠不规范', 'stick set c'),
(109, 'C15', '烟支病斑≥2mm', 'stick set c'),
(110, 'C16', '烟支病斑＜2mm多于2处', 'stick set c'),
(111, 'C17', '烟支空头', 'stick set c'),
(112, 'C18', '烟支端面触头＞1/3圆周', 'stick set c'),
(113, 'C19', '烟支竹节', 'stick set c'),
(114, 'C20', '烟支缝口不严合', 'stick set c'),
(115, 'C21', '烟支表面不洁', 'stick set c'),
(116, 'C22', '烟支表面明显不洁', 'stick set c'),
(117, 'C23', '烟支表面明显皱纹', 'stick set c'),
(118, 'C24', '烟支表面颜色不均匀', 'stick set c'),
(119, 'C25', '胶水溢出，导致粘连', 'stick set c'),
(120, 'C26', '茄衣缠绕转数不符', 'stick set c'),
(121, 'C27', '青烟、黑褐、严重挂灰', 'stick set c'),
(122, 'A1', '盒内出现倒装', 'pack pack a'),
(123, 'A2', '盒内出现多支', 'pack pack a'),
(124, 'A3', '盒内出现烟嘴脱落', 'pack pack a'),
(125, 'A4', '盒内出现缺支', 'pack pack a'),
(126, 'A5', '盒内出现错装', 'pack pack a'),
(127, 'A6', '盒内有短、断、残烟支', 'pack pack a'),
(128, 'A7', '盒内有虫蛀烟支', 'pack pack a'),
(129, 'A8', '盒装无透明纸', 'pack pack a'),
(130, 'A9', '盒装明显异味', 'pack pack a'),
(131, 'B1', '小盒包装不完整', 'pack pack b'),
(132, 'B2', '小盒揭不开', 'pack pack b'),
(133, 'B3', '小盒无可追溯性标识', 'pack pack b'),
(134, 'B4', '小盒明显压痕', 'pack pack b'),
(135, 'B5', '小盒表面＞2mm破损', 'pack pack b'),
(136, 'B6', '小盒表面因擦花掉色', 'pack pack b'),
(137, 'B7', '小盒被挤压变形', 'pack pack b'),
(138, 'B8', '盒装缺少应有的包装材料', 'pack pack b'),
(139, 'C1', '内衬压线边缘不整齐', 'pack pack c'),
(140, 'C2', '内衬撕不开或撕破', 'pack pack c'),
(141, 'C3', '内衬纸折叠≥5mm', 'pack pack c'),
(142, 'C4', '内衬纸折皱≥15mm', 'pack pack c'),
(143, 'C5', '盒内包装方式不符合', 'pack pack c'),
(144, 'C6', '盒内指环主图案未正对窗口', 'pack pack c'),
(145, 'C7', '盒内指环位置明显不齐', 'pack pack c'),
(146, 'C8', '盒内有杂物', 'pack pack c'),
(147, 'C9', '盒内烟支包装不完整良好', 'pack pack c'),
(148, 'C10', '盒内烟支变形', 'pack pack c'),
(149, 'C11', '盒内烟支外观颜色不一致', 'pack pack c'),
(150, 'C12', '盒装≤3.0mm的叠角损伤多于两处', 'pack pack c'),
(151, 'C13', '盒装≤3.0mm的污渍多于两处', 'pack pack c'),
(152, 'C14', '盒装＞3mm的损伤、折痕', 'pack pack c'),
(153, 'C15', '盒装内衬纸残缺', 'pack pack c'),
(154, 'C16', '盒装商标纸压痕', 'pack pack c'),
(155, 'C17', '盒装封口签歪斜≥2mm', 'pack pack c'),
(156, 'C18', '盒装封口签长短≥2mm', 'pack pack c'),
(157, 'C19', '盒装拉带位置不正确', 'pack pack c'),
(158, 'C20', '盒装拉带后散玻', 'pack pack c'),
(159, 'C21', '盒装拉带头反叠', 'pack pack c'),
(160, 'C22', '盒装拉带拉不开', 'pack pack c'),
(161, 'C23', '盒装拉带拉断', 'pack pack c'),
(162, 'C24', '盒装拉带接头错牙＞2.0mm', 'pack pack c'),
(163, 'C25', '盒装无内衬，或内衬纸残缺', 'pack pack c'),
(164, 'C26', '盒装明显擦花', 'pack pack c'),
(165, 'C27', '盒装有长度＞3mm的污渍', 'pack pack c'),
(166, 'C28', '盒装色差明显', 'pack pack c'),
(167, 'C29', '盒装表面＞2.0mm不洁', 'pack pack c'),
(168, 'C30', '盒装表面破损', 'pack pack c'),
(169, 'C31', '盒装透明纸＞20mm水雾', 'pack pack c'),
(170, 'C32', '盒装透明纸明显变色', 'pack pack c'),
(171, 'C33', '盒装透明纸松散', 'pack pack c'),
(172, 'C34', '盒装透明纸褶皱明显', 'pack pack c'),
(173, 'C35', '盒装透明纸过紧变形', 'pack pack c'),
(174, 'A1', 'A类缺陷代码', 'pack mark a'),
(175, 'A2', 'BA01', 'pack mark a'),
(176, 'A3', 'BA02', 'pack mark a'),
(177, 'A4', 'BA03', 'pack mark a'),
(178, 'A5', 'BA04', 'pack mark a'),
(179, 'A6', 'BA05', 'pack mark a'),
(180, 'A7', 'BA06', 'pack mark a'),
(181, 'A8', 'BA07', 'pack mark a'),
(182, 'A9', 'BA08', 'pack mark a'),
(183, 'A10', 'BA09', 'pack mark a'),
(184, 'A11', 'BA10', 'pack mark a'),
(185, 'A12', 'BA11', 'pack mark a'),
(186, 'A13', 'BA12', 'pack mark a'),
(187, 'B1', 'BB01', 'pack mark b'),
(188, 'B2', 'BB02', 'pack mark b'),
(189, 'B3', 'BB03', 'pack mark b'),
(190, 'B4', 'BB04', 'pack mark b'),
(191, 'B5', 'BB05', 'pack mark b'),
(192, 'B6', 'BB06', 'pack mark b'),
(193, 'B7', 'BB07', 'pack mark b'),
(194, 'B8', 'BB08', 'pack mark b'),
(195, 'B9', 'B类缺陷代码', 'pack mark b'),
(196, 'A1', '明显异味', 'sleeve a'),
(197, 'A2', '条包、条盒出现多装', 'sleeve a'),
(198, 'A3', '条包、条盒出现少装', 'sleeve a'),
(199, 'A4', '条包、条盒出现错装', 'sleeve a'),
(200, 'B1', '反包', 'sleeve b'),
(201, 'B2', '条内小盒倒装', 'sleeve b'),
(202, 'B3', '条内物资受损', 'sleeve b'),
(203, 'B4', '条盒拉带不完整', 'sleeve b'),
(204, 'B5', '条盒无可追溯性标识', 'sleeve b'),
(205, 'B6', '条盒无拉带', 'sleeve b'),
(206, 'B7', '条盒无胶', 'sleeve b'),
(207, 'B8', '条盒无透明纸', 'sleeve b'),
(208, 'B9', '条盒表面≥2mm擦花掉色', 'sleeve b'),
(209, 'B10', '条盒被挤压变形', 'sleeve b'),
(210, 'B11', '条盒透明纸破、漏底', 'sleeve b'),
(211, 'B12', '破损≥3mm', 'sleeve b'),
(212, 'B13', '破损＜3mm但多于两处', 'sleeve b'),
(213, 'C1', '加贴标签多张', 'sleeve c'),
(214, 'C2', '加贴标签粘贴不正', 'sleeve c'),
(215, 'C3', '加贴标签翘边三分之一', 'sleeve c'),
(216, 'C4', '条内有杂物', 'sleeve c'),
(217, 'C5', '条内物资因粘连而破损', 'sleeve c'),
(218, 'C6', '条盒包装歪斜', 'sleeve c'),
(219, 'C7', '条盒拉带位置不正确', 'sleeve c'),
(220, 'C8', '条盒拉带后散玻', 'sleeve c'),
(221, 'C9', '条盒拉带头反叠', 'sleeve c'),
(222, 'C10', '条盒拉带拉不开', 'sleeve c'),
(223, 'C11', '条盒拉带拉断', 'sleeve c'),
(224, 'C12', '条盒拉带接头错牙＞2mm', 'sleeve c'),
(225, 'C13', '条盒有不能展平的折痕', 'sleeve c'),
(226, 'C14', '条盒粘贴不牢，容易散开', 'sleeve c'),
(227, 'C15', '条盒透明纸明显折皱', 'sleeve c'),
(228, 'C16', '条装表面≥3 mm污点', 'sleeve c'),
(229, 'C17', '条装表面污点＜3 mm多于两点', 'sleeve c'),
(230, 'C18', '条透明纸松散', 'sleeve c'),
(231, 'C19', '条透明纸破损', 'sleeve c'),
(232, 'C20', '追溯性标识不完整', 'sleeve c'),
(233, 'C21', '透明纸＞20mm水雾', 'sleeve c'),
(234, 'A1', '箱内明显异味', 'box box a'),
(235, 'A2', '箱内烟条出现多装', 'box box a'),
(236, 'A3', '箱内烟条出现少装', 'box box a'),
(237, 'A4', '箱内烟条出现错装', 'box box a'),
(238, 'B1', '摇盖合拢错位超过15mm', 'box box b'),
(239, 'B2', '无产品质量合格标识', 'box box b'),
(240, 'B3', '箱体内有杂物', 'box box b'),
(241, 'B4', '箱体包装不完整', 'box box b'),
(242, 'B5', '箱体包装不牢固', 'box box b'),
(243, 'B6', '箱体无封箱胶带', 'box box b'),
(244, 'B7', '箱内物料粘连或破损', 'box box b'),
(245, 'B8', '箱装严重触皱', 'box box b'),
(246, 'B9', '箱装破损40㎜', 'box box b'),
(247, 'B10', '箱装破损使箱内物资受损', 'box box b'),
(248, 'B11', '箱装脏污（需更换）', 'box box b'),
(249, 'C1', '封箱胶带破损', 'box box c'),
(250, 'C2', '烟条排列方向不一致', 'box box c'),
(251, 'C3', '箱体摇盖翘边，封口不牢固', 'box box c'),
(252, 'C4', '箱体胶带两侧延长＞90mm', 'box box c'),
(253, 'C5', '箱装不洁', 'box box c'),
(254, 'C6', '胶带有接头', 'box box c'),
(255, 'C7', '胶带有断裂', 'box box c'),
(256, 'C8', '胶带粘贴不平整、居中', 'box box c'),
(257, 'C9', '胶带重贴', 'box box c'),
(258, 'A1', 'A类缺陷代码', 'box code a'),
(259, 'A2', 'BA01', 'box code a'),
(260, 'A3', 'BA02', 'box code a'),
(261, 'A4', 'BA03', 'box code a'),
(262, 'A5', 'BA04', 'box code a'),
(263, 'A6', 'BA05', 'box code a'),
(264, 'A7', 'BA06', 'box code a'),
(265, 'A8', 'BA07', 'box code a'),
(266, 'A9', 'BA08', 'box code a'),
(267, 'A10', 'BA09', 'box code a'),
(268, 'A11', 'BA10', 'box code a'),
(269, 'A12', 'BA11', 'box code a'),
(270, 'A13', 'BA12', 'box code a'),
(271, 'B1', 'BB01', 'box code b'),
(272, 'B2', 'BB02', 'box code b'),
(273, 'B3', 'BB03', 'box code b'),
(274, 'B4', 'BB04', 'box code b'),
(275, 'B5', 'BB05', 'box code b'),
(276, 'B6', 'BB06', 'box code b'),
(277, 'B7', 'BB07', 'box code b'),
(278, 'B8', 'BB08', 'box code b'),
(279, 'B9', 'B类缺陷代码', 'box code b');

-- --------------------------------------------------------

--
-- Table structure for table `formulas`
--

DROP TABLE IF EXISTS `formulas`;
CREATE TABLE IF NOT EXISTS `formulas` (
  `id` int(11) NOT NULL,
  `formula` varchar(1000) CHARACTER SET gbk NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `packing`
--

DROP TABLE IF EXISTS `packing`;
CREATE TABLE IF NOT EXISTS `packing` (
  `id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `product` varchar(20) NOT NULL,
  `sample` varchar(10) NOT NULL,
  `sjob` varchar(10) NOT NULL,
  `srd1` int(3) NOT NULL DEFAULT '0',
  `srd2` int(3) NOT NULL DEFAULT '0',
  `srd3` int(3) NOT NULL DEFAULT '0',
  `srd1_nr` int(11) NOT NULL DEFAULT '0',
  `srd2_nr` int(11) NOT NULL DEFAULT '0',
  `srd3_nr` int(11) NOT NULL DEFAULT '0',
  `scd1` int(11) NOT NULL DEFAULT '0',
  `scd2` int(11) NOT NULL DEFAULT '0',
  `scd3` int(11) NOT NULL DEFAULT '0',
  `scd1_nr` int(11) NOT NULL DEFAULT '0',
  `scd2_nr` int(11) NOT NULL DEFAULT '0',
  `scd3_nr` int(11) NOT NULL DEFAULT '0',
  `ssd1` int(11) NOT NULL DEFAULT '0',
  `ssd2` int(11) NOT NULL DEFAULT '0',
  `ssd3` int(11) NOT NULL DEFAULT '0',
  `ssd1_nr` int(11) NOT NULL DEFAULT '0',
  `ssd2_nr` int(11) NOT NULL DEFAULT '0',
  `ssd3_nr` int(11) NOT NULL DEFAULT '0',
  `spd1` int(11) NOT NULL DEFAULT '0',
  `spd2` int(11) NOT NULL DEFAULT '0',
  `spd3` int(11) NOT NULL DEFAULT '0',
  `spd1_nr` int(11) NOT NULL DEFAULT '0',
  `spd2_nr` int(11) NOT NULL DEFAULT '0',
  `spd3_nr` int(11) NOT NULL DEFAULT '0',
  `sscore` varchar(4) NOT NULL,
  `sjudge` varchar(4) NOT NULL,
  `sremarks` varchar(200) NOT NULL,
  `pjob` varchar(10) NOT NULL,
  `ppd1` int(11) NOT NULL DEFAULT '0',
  `ppd2` int(11) NOT NULL DEFAULT '0',
  `ppd3` int(11) NOT NULL DEFAULT '0',
  `ppd1_nr` int(11) NOT NULL DEFAULT '0',
  `ppd2_nr` int(11) NOT NULL DEFAULT '0',
  `ppd3_nr` int(11) NOT NULL DEFAULT '0',
  `pm1` int(11) NOT NULL DEFAULT '0',
  `pm2` int(11) NOT NULL DEFAULT '0',
  `pm3` int(11) NOT NULL DEFAULT '0',
  `pm1_nr` int(11) NOT NULL DEFAULT '0',
  `pm2_nr` int(11) NOT NULL DEFAULT '0',
  `pm3_nr` int(11) NOT NULL DEFAULT '0',
  `pscore` varchar(4) NOT NULL,
  `pjudge` varchar(4) NOT NULL,
  `premarks` varchar(200) NOT NULL,
  `bjob` varchar(10) NOT NULL,
  `bsd1` int(11) NOT NULL DEFAULT '0',
  `bsd2` int(11) NOT NULL DEFAULT '0',
  `bsd3` int(11) NOT NULL DEFAULT '0',
  `bsd1_nr` int(11) NOT NULL DEFAULT '0',
  `bsd2_nr` int(11) NOT NULL DEFAULT '0',
  `bsd3_nr` int(11) NOT NULL DEFAULT '0',
  `bb1` int(11) NOT NULL DEFAULT '0',
  `bb2` int(11) NOT NULL DEFAULT '0',
  `bb3` int(11) NOT NULL DEFAULT '0',
  `bb1_nr` int(11) NOT NULL DEFAULT '0',
  `bb2_nr` int(11) NOT NULL DEFAULT '0',
  `bb3_nr` int(11) NOT NULL DEFAULT '0',
  `bm1` int(11) NOT NULL DEFAULT '0',
  `bm2` int(11) NOT NULL DEFAULT '0',
  `bm3` int(11) NOT NULL DEFAULT '0',
  `bm1_nr` int(11) NOT NULL DEFAULT '0',
  `bm2_nr` int(11) NOT NULL DEFAULT '0',
  `bm3_nr` int(11) NOT NULL DEFAULT '0',
  `bscore` varchar(4) NOT NULL,
  `bjudge` varchar(4) NOT NULL,
  `bremarks` varchar(200) NOT NULL,
  `inspector` varchar(10) NOT NULL,
  `remarks` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=gbk;

-- --------------------------------------------------------

--
-- Table structure for table `rolling`
--

DROP TABLE IF EXISTS `rolling`;
CREATE TABLE IF NOT EXISTS `rolling` (
  `id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `name` varchar(10) NOT NULL,
  `l1` varchar(4) NOT NULL,
  `l2` varchar(4) NOT NULL,
  `l3` varchar(4) NOT NULL,
  `l4` varchar(4) NOT NULL,
  `l5` varchar(4) NOT NULL,
  `l6` varchar(4) NOT NULL,
  `l7` varchar(4) NOT NULL,
  `l8` varchar(4) NOT NULL,
  `l9` varchar(4) NOT NULL,
  `l10` varchar(4) NOT NULL,
  `d1` varchar(4) NOT NULL,
  `d2` varchar(4) NOT NULL,
  `d3` varchar(4) NOT NULL,
  `d4` varchar(4) NOT NULL,
  `d5` varchar(4) NOT NULL,
  `d6` varchar(4) NOT NULL,
  `d7` varchar(4) NOT NULL,
  `d8` varchar(4) NOT NULL,
  `d9` varchar(4) NOT NULL,
  `d10` varchar(4) NOT NULL,
  `w1` varchar(4) NOT NULL,
  `w2` varchar(4) NOT NULL,
  `w3` varchar(4) NOT NULL,
  `w4` varchar(4) NOT NULL,
  `w5` varchar(4) NOT NULL,
  `w6` varchar(4) NOT NULL,
  `w7` varchar(4) NOT NULL,
  `w8` varchar(4) NOT NULL,
  `w9` varchar(4) NOT NULL,
  `w10` varchar(4) NOT NULL,
  `p1` varchar(4) NOT NULL,
  `p2` varchar(4) NOT NULL,
  `p3` varchar(4) NOT NULL,
  `p4` varchar(4) NOT NULL,
  `p5` varchar(4) NOT NULL,
  `p6` varchar(4) NOT NULL,
  `p7` varchar(4) NOT NULL,
  `p8` varchar(4) NOT NULL,
  `p9` varchar(4) NOT NULL,
  `p10` varchar(4) NOT NULL,
  `surfout` varchar(4) NOT NULL,
  `tightout` varchar(4) NOT NULL,
  `blendacc` varchar(4) NOT NULL,
  `pdacc` varchar(4) NOT NULL,
  `score` varchar(5) NOT NULL,
  `quality` varchar(5) NOT NULL,
  `inspector` varchar(10) NOT NULL,
  `remarks` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=gbk;

-- --------------------------------------------------------

--
-- Table structure for table `specs`
--

DROP TABLE IF EXISTS `specs`;
CREATE TABLE IF NOT EXISTS `specs` (
  `id` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  `name` varchar(20) NOT NULL,
  `nr` varchar(20) NOT NULL,
  `rol_l_min` varchar(4) NOT NULL,
  `rol_l_max` varchar(4) NOT NULL,
  `rol_c_min` varchar(4) NOT NULL,
  `rol_c_max` varchar(4) NOT NULL,
  `rol_w_min` varchar(4) NOT NULL,
  `rol_w_max` varchar(4) NOT NULL,
  `rol_p_min` varchar(4) NOT NULL,
  `rol_p_max` varchar(4) NOT NULL,
  `rol_surfout` varchar(4) NOT NULL,
  `rol_tightout` varchar(4) NOT NULL,
  `rol_blendacc` varchar(4) NOT NULL,
  `rol_pdacc` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=gbk;

-- --------------------------------------------------------

--
-- Table structure for table `storage`
--

DROP TABLE IF EXISTS `storage`;
CREATE TABLE IF NOT EXISTS `storage` (
  `id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `product` varchar(4) NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  `moistmin` varchar(4) NOT NULL,
  `moistmax` varchar(4) NOT NULL,
  `deworm` varchar(4) NOT NULL,
  `dopant` varchar(4) NOT NULL,
  `headend` varchar(4) NOT NULL,
  `empty` varchar(4) NOT NULL,
  `seam` varchar(4) NOT NULL,
  `hole` varchar(4) NOT NULL,
  `break` varchar(4) NOT NULL,
  `m1` varchar(4) NOT NULL,
  `m2` varchar(4) NOT NULL,
  `m3` varchar(4) NOT NULL,
  `m4` varchar(4) NOT NULL,
  `m5` varchar(4) NOT NULL,
  `m6` varchar(4) NOT NULL,
  `m7` varchar(4) NOT NULL,
  `m8` varchar(4) NOT NULL,
  `score` varchar(4) NOT NULL,
  `batchok` varchar(5) NOT NULL,
  `inspector` varchar(10) NOT NULL,
  `incharge` varchar(10) NOT NULL,
  `remarks` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=gbk;

-- --------------------------------------------------------

--
-- Table structure for table `wrapping`
--

DROP TABLE IF EXISTS `wrapping`;
CREATE TABLE IF NOT EXISTS `wrapping` (
  `id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `name` varchar(10) NOT NULL,
  `color` varchar(4) NOT NULL,
  `headend` varchar(4) NOT NULL,
  `wrapok` varchar(4) NOT NULL,
  `incision` varchar(4) NOT NULL,
  `empty` varchar(4) NOT NULL,
  `tightness` varchar(4) NOT NULL,
  `veins` varchar(4) NOT NULL,
  `crease` varchar(4) NOT NULL,
  `spot` varchar(4) NOT NULL,
  `blot` varchar(4) NOT NULL,
  `seam` varchar(4) NOT NULL,
  `hole` varchar(4) NOT NULL,
  `crack` varchar(4) NOT NULL,
  `splice` varchar(4) NOT NULL,
  `score` varchar(4) NOT NULL,
  `quality` varchar(4) NOT NULL,
  `inspector` varchar(4) NOT NULL,
  `remarks` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=gbk;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `defects`
--
ALTER TABLE `defects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type_idx` (`type`);

--
-- Indexes for table `formulas`
--
ALTER TABLE `formulas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `packing`
--
ALTER TABLE `packing`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rolling`
--
ALTER TABLE `rolling`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `specs`
--
ALTER TABLE `specs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `storage`
--
ALTER TABLE `storage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wrapping`
--
ALTER TABLE `wrapping`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `defects`
--
ALTER TABLE `defects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=280;
--
-- AUTO_INCREMENT for table `formulas`
--
ALTER TABLE `formulas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `packing`
--
ALTER TABLE `packing`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `rolling`
--
ALTER TABLE `rolling`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `specs`
--
ALTER TABLE `specs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `storage`
--
ALTER TABLE `storage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `wrapping`
--
ALTER TABLE `wrapping`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 17, 2022 at 10:43 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.0.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ogis`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `admin_username` varchar(30) NOT NULL,
  `admin_password` varchar(30) NOT NULL,
  `admin_fullname` varchar(50) NOT NULL,
  `admin_type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `admin_username`, `admin_password`, `admin_fullname`, `admin_type`) VALUES
(1, 'admin1', 'admin1', 'admin1', 'Registrar'),
(2, 'admin2', 'admin2', 'admin2', 'Vice');

-- --------------------------------------------------------

--
-- Table structure for table `assigned_teachers`
--

CREATE TABLE `assigned_teachers` (
  `assigned_id` int(11) NOT NULL,
  `teacher_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `school_year` varchar(50) NOT NULL,
  `year_level` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `assigned_teachers`
--

INSERT INTO `assigned_teachers` (`assigned_id`, `teacher_id`, `subject_id`, `course_id`, `school_year`, `year_level`) VALUES
(1, 5, 4, 2, '2022-2023', '1'),
(2, 3, 2, 1, '2021-2022', '3'),
(3, 5, 1, 7, '2020-2021', '4');

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `course_id` int(11) NOT NULL,
  `course_name` varchar(100) NOT NULL,
  `course_abbreviation` varchar(30) NOT NULL,
  `dept_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`course_id`, `course_name`, `course_abbreviation`, `dept_id`) VALUES
(1, 'Bachelor of Science in Information Technology', 'BSIT', 5),
(2, 'Bachelor of Science in Business Administration major in Financial Management', 'BSBA-FM', 2),
(3, 'Bachelor of Science in Education major in Science', 'BSED-Science', 3),
(7, 'Bachelor of Science in Computer Science', 'BSSC', 5),
(12, 'Bachelor of Science in Vulcanizing shop', 'BSVS', 5);

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `dept_id` int(11) NOT NULL,
  `dept_username` varchar(30) NOT NULL,
  `dept_password` varchar(30) NOT NULL,
  `dept_name` varchar(30) NOT NULL,
  `dept_abbreviation` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`dept_id`, `dept_username`, `dept_password`, `dept_name`, `dept_abbreviation`) VALUES
(2, 'coc', 'coc1', 'College of Commerce', 'COC'),
(3, 'coe', 'coepass', 'College of Education', 'COE'),
(5, 'ccs1', 'ccs2', 'College of Computer Studies', 'CCS'),
(24, 'ua', 'ua', 'Unassigned', 'UA'),
(33, 'resigned', 'resigned', 'Resigned', 'RE'),
(40, 'admin1', 'admin1', 'College of Criminology', 'COCrim');

-- --------------------------------------------------------

--
-- Table structure for table `grades`
--

CREATE TABLE `grades` (
  `grades_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `grade` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `grades`
--

INSERT INTO `grades` (`grades_id`, `student_id`, `subject_id`, `course_id`, `grade`) VALUES
(7, 110, 12, 1, '1.7'),
(9, 110, 13, 1, '1.8'),
(10, 110, 44, 1, '1.2');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `student_id` int(11) NOT NULL,
  `student_schoolid` varchar(255) NOT NULL,
  `student_firstname` varchar(30) NOT NULL,
  `student_lastname` varchar(30) NOT NULL,
  `student_middlename` varchar(30) NOT NULL,
  `student_deptID` varchar(11) NOT NULL,
  `student_courseID` varchar(11) NOT NULL,
  `year_level` varchar(50) NOT NULL DEFAULT '1st Year',
  `section` varchar(5) NOT NULL DEFAULT 'A',
  `student_startYear` varchar(30) NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`student_id`, `student_schoolid`, `student_firstname`, `student_lastname`, `student_middlename`, `student_deptID`, `student_courseID`, `year_level`, `section`, `student_startYear`) VALUES
(109, '12341234', 'Jogo', 'Varra', 'Gue', '2', '2', '1st Year', 'A', '2022-11-13 18:47:56'),
(110, '1235454545', 'Kyle ', 'Rosales', 'Perino', '5', '1', '1st Year', 'A', '2022-11-13 18:47:56'),
(111, '12321214124', 'Wew', 'Daf', 'Ge', '5', '12', '4th Year', 'A', '2022-11-13 18:47:56'),
(112, '44332211', 'Jusj', 'Ki', 'Wa', '2', '2', '1st Year', 'A', '2022-11-13 18:47:56'),
(113, '20195281050', 'Christian Lawrence ', 'Rosales', 'Perino', '2', '2', '1st Year', 'A', '2022-11-13 18:47:56'),
(114, '202153154234', 'Luke', 'Kelu', 'Kelu', '3', '3', '2nd Year', 'A', '2022-11-13 21:56:24'),
(120, '217382135', 'Juliana', 'Rosales', 'Mae', '2', '2', '2nd Year', 'A', '2022-11-14 14:08:18'),
(122, '1235554214', 'Mark', 'Caguya', 'Renzo', '2', '2', '2nd Year', 'A', '2022-11-14 14:08:18'),
(123, '1234545454', 'Kuki', 'Parda', 'Lois', '2', '2', '3rd Year', 'A', '2022-11-14 14:20:17');

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `subject_id` int(11) NOT NULL,
  `subject_code` varchar(50) NOT NULL,
  `subject_name` varchar(100) NOT NULL,
  `course_id` int(20) NOT NULL,
  `year_level` varchar(20) NOT NULL DEFAULT '1st',
  `semester` varchar(20) NOT NULL DEFAULT '1st Semester'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`subject_id`, `subject_code`, `subject_name`, `course_id`, `year_level`, `semester`) VALUES
(12, 'MMW', 'Mathematics in a Modern Worl', 1, '2nd', '2nd'),
(16, 'CAPSTONE1', 'CAPSTONE', 2, '2nd', '1st'),
(17, 'CC100', 'Introduction to Computing', 1, '1st', '1st'),
(18, 'GE5', 'Purposive Communication', 1, '1st', '1st'),
(19, 'BC 1', 'Mathematical Translation and transformation', 1, '1st', '1st'),
(20, 'CC101', 'Computer Programming 1', 1, '1st', '1st'),
(21, 'GE1O', 'Masining na Pagpapahayag', 1, '1st', '1st'),
(22, 'GE7', 'Science, Technology and Society', 1, '1st', '1st'),
(23, 'PE 1', 'Gymnastics and Physical education', 1, '1st', '1st'),
(24, 'DISCRETE1', 'Discrete Structure', 1, '1st', '2nd'),
(25, 'ACCTGA', 'Fundamentals of Accounting', 1, '1st', '2nd'),
(26, 'GE2', 'Reading in Philippine History', 1, '1st', '2nd'),
(27, 'CC102', 'Computer Programminng 2', 1, '1st', '2nd'),
(28, 'NSTP 1', 'National Service Training Program 1', 1, '1st', '1st'),
(29, 'IS2', 'Advanced Grammar and Composition', 1, '1st', '2nd'),
(30, 'GE3', 'The Contemporary World', 1, '1st', '2nd'),
(31, 'PT1', 'Platform Technologies', 1, '1st', 'Summer'),
(32, 'CC103', 'Data Structures and Algorithm', 1, '1st', 'Summer'),
(33, 'NSTP 2', 'National Service Training Program 2', 1, '1st', '2nd'),
(34, 'PE 2', 'Folk dancing', 1, '1st', '2nd'),
(35, 'DIGITAL 1', 'Digital Logic Design', 1, '2nd', '1st'),
(36, 'GE1', 'Understanding the Self', 1, '1st', 'Summer'),
(37, 'GE9', 'The Life and Work of Rizal', 1, '2nd', '1st'),
(38, 'CC104 A', 'Information Management 1', 1, '2nd', '1st'),
(39, 'IS1', 'Dimensionak Analysis', 1, '2nd', '1st'),
(40, 'GE11', 'Ang Panitikan ng Pilipinas', 1, '2nd', '1st'),
(41, 'GE12', 'Mga Anyo ng Kontemporaryong Panitikang Pilipino', 1, '2nd', '1st'),
(42, 'PE 3', 'Ball Games/ Sports', 1, '2nd', '1st'),
(43, 'OOP1', 'Object-Oriented Programming', 1, '2nd', '2nd'),
(44, 'NET 1', 'Data Communications and Networking 1', 1, '2nd', '2nd'),
(45, 'MATH 1', 'Probability and Statistics', 1, '2nd', '2nd'),
(46, 'GE6', 'Art Appreciation', 1, '2nd', '2nd'),
(47, 'GE13', 'Philippine Litterature', 1, '2nd', '2nd'),
(48, 'GE8', 'Ethics', 1, '2nd', '2nd'),
(49, 'PE4', 'Recreational games', 1, '2nd', '2nd'),
(50, 'RVA1', 'Reading Visual Arts', 1, '2nd', 'Summer'),
(51, 'HCI1', 'Introduction to Human Computer intraction', 1, '2nd', 'Summer'),
(52, 'QM1', 'Quantitative Methods', 1, '3rd', '1st'),
(53, 'OS1', 'Operating Systems', 1, '3rd', '1st'),
(54, 'SAD1', 'System Analysis and Design', 1, '3rd', '1st'),
(55, 'CC104B', 'Information Management 2', 1, '3rd', '1st'),
(56, 'IT ELEC1', 'IT ELECTIVE1', 1, '3rd', '1st'),
(57, 'IS3', 'Gender and Development', 1, '3rd', '1st'),
(58, 'CC105', 'Applications Development and Emerging Technologies', 1, '3rd', '1st'),
(59, 'NET2', 'Data Communication and Networking 2', 1, '3rd', '2nd'),
(60, 'SIA1 ', 'System Interaction and Architecture', 1, '3rd', '2nd'),
(61, 'IT ELEC 2', 'It Elective 2', 1, '3rd ', '2nd'),
(62, 'RESEARCH1', 'Methods of Research in Computing', 1, '3rd', '2nd'),
(63, 'IM3', 'Fundamentals of data warehousing and Data Mining', 1, '3rd', '2nd'),
(64, 'IAS1', 'Information Assurance and Security', 1, '3rd', '2nd'),
(65, 'WEB 1', 'Web Programming', 1, '3rd', '2nd'),
(66, 'IPT1', 'Integrative Programming and Technologies', 1, '3rd', 'Summer'),
(67, 'CAPSTONE 2', 'Capstone Project 2', 1, '4th', '1st'),
(69, 'SA1', 'System Administration and Maintenance', 1, '4th', '1st'),
(70, 'IT ELEC 3', 'IT ELECTIVE 3', 1, '3rd', 'Summer'),
(71, 'IT ELEC 4', 'IT Elective 4', 1, '4th ', '1st'),
(72, 'GE14', 'World Literature', 1, '4th', '1st'),
(73, 'IT REVIEW 1', 'ertification Examination Review', 1, '4th', '1st'),
(74, 'PRAC1', 'Practicum', 1, '4th', '2nd'),
(75, 'SEMTOUR', 'Seminar and Tour', 1, '4th', '2nd'),
(76, 'IS 4', 'Career Development and Work Values', 1, '4th', '1st'),
(77, 'dm', 'HAHAHA1', 2, '1st', '2nd');

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `teacher_id` int(11) NOT NULL,
  `teacher_username` varchar(30) NOT NULL,
  `teacher_password` varchar(30) NOT NULL,
  `teacher_firstname` varchar(30) NOT NULL,
  `teacher_lastname` varchar(30) NOT NULL,
  `teacher_middlename` varchar(30) NOT NULL,
  `dept_id` varchar(30) NOT NULL DEFAULT 'Unassigned'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`teacher_id`, `teacher_username`, `teacher_password`, `teacher_firstname`, `teacher_lastname`, `teacher_middlename`, `dept_id`) VALUES
(3, 'kyle132', 'kyle132', 'Luke', 'Rosales', 'Perinos', '33'),
(5, 'clr123', 'clr11', 'Christian Lawrence', 'Rosales', 'Perino', '3'),
(6, 'asfd', 'asdf', 'Kyle', 'Rosales', 'Perino', '2'),
(7, 'Jessi1', 'jessi1', 'Jessie', 'Ortega', 'Ypil', '2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `assigned_teachers`
--
ALTER TABLE `assigned_teachers`
  ADD PRIMARY KEY (`assigned_id`),
  ADD KEY `teacher_id` (`teacher_id`),
  ADD KEY `subject_id` (`subject_id`),
  ADD KEY `course_id` (`course_id`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`course_id`),
  ADD UNIQUE KEY `course_abbreviation` (`course_abbreviation`),
  ADD UNIQUE KEY `course_name` (`course_name`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`dept_id`),
  ADD UNIQUE KEY `dept_name` (`dept_name`),
  ADD UNIQUE KEY `dept_username` (`dept_username`);

--
-- Indexes for table `grades`
--
ALTER TABLE `grades`
  ADD PRIMARY KEY (`grades_id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `subject_id` (`subject_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`student_id`),
  ADD UNIQUE KEY `student_schoolid` (`student_schoolid`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`subject_id`),
  ADD UNIQUE KEY `subject_code` (`subject_code`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`teacher_id`),
  ADD KEY `dept_id` (`dept_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `assigned_teachers`
--
ALTER TABLE `assigned_teachers`
  MODIFY `assigned_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `dept_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `grades`
--
ALTER TABLE `grades`
  MODIFY `grades_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124;

--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `subject_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `teacher_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `grades`
--
ALTER TABLE `grades`
  ADD CONSTRAINT `grades_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

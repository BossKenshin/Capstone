-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 14, 2022 at 01:30 PM
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
  `school_year` varchar(100) NOT NULL,
  `semester` varchar(50) NOT NULL,
  `grade` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `grades`
--

INSERT INTO `grades` (`grades_id`, `student_id`, `subject_id`, `school_year`, `semester`, `grade`) VALUES
(7, 110, 2, '2020-2021', '1', '1.7'),
(8, 110, 3, '2020-2021', '2', '1.8');

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
  `student_startYear` varchar(30) NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`student_id`, `student_schoolid`, `student_firstname`, `student_lastname`, `student_middlename`, `student_deptID`, `student_courseID`, `year_level`, `student_startYear`) VALUES
(109, '12341234', 'Jogo', 'Varra', 'Gue', '2', '2', '1st Year', '2022-11-13 18:47:56'),
(110, '1235454545', 'Kyle ', 'Rosales', 'Perino', '2', '2', '1st Year', '2022-11-13 18:47:56'),
(111, '12321214124', 'Wew', 'Daf', 'Ge', '5', '12', '4th Year', '2022-11-13 18:47:56'),
(112, '44332211', 'Jusj', 'Ki', 'Wa', '2', '2', '1st Year', '2022-11-13 18:47:56'),
(113, '20195281050', 'Christian Lawrence ', 'Rosales', 'Perino', '2', '2', '1st Year', '2022-11-13 18:47:56'),
(114, '202153154234', 'Luke', 'Kelu', 'Kelu', '3', '3', '2nd Year', '2022-11-13 21:56:24'),
(120, '217382135', 'Juliana', 'Rosales', 'Mae', '2', '2', '2nd Year', '2022-11-14 14:08:18'),
(122, '1235554214', 'Mark', 'Caguya', 'Renzo', '2', '2', '2nd Year', '2022-11-14 14:08:18'),
(123, '1234545454', 'Kuki', 'Parda', 'Lois', '2', '2', '3rd Year', '2022-11-14 14:20:17');

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `subject_id` int(11) NOT NULL,
  `subject_code` varchar(50) NOT NULL,
  `subject_name` varchar(100) NOT NULL,
  `course_id` int(20) NOT NULL,
  `year_level` varchar(20) NOT NULL DEFAULT '1st Year',
  `semester` varchar(20) NOT NULL DEFAULT '1st Semester'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`subject_id`, `subject_code`, `subject_name`, `course_id`, `year_level`, `semester`) VALUES
(12, 'MMW', 'Mathematics in a Modern Worl', 1, '2nd Year', '2nd Semester'),
(13, 'ASDF', 'Laughing my ass out', 1, '3rd Year', 'Summer');

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
  ADD KEY `student_id` (`student_id`);

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
  MODIFY `grades_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124;

--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `subject_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

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

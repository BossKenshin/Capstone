-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 15, 2022 at 07:36 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

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
(33, 'resigned', 'resigned', 'Resigned', 'RE');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `student_id` int(11) NOT NULL,
  `student_schoolid` varchar(50) NOT NULL,
  `student_firstname` varchar(30) NOT NULL,
  `student_lastname` varchar(30) NOT NULL,
  `student_middlename` varchar(30) NOT NULL,
  `student_courseID` int(11) NOT NULL,
  `student_year` varchar(30) NOT NULL,
  `student_startYear` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `subject_id` int(11) NOT NULL,
  `subject_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`subject_id`, `subject_name`) VALUES
(1, 'Agham'),
(4, 'demo1'),
(7, 'fdasdf'),
(2, 'Mathematics');

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
(3, 'kyle132', 'kyle132', 'Kyle', 'Rosales', 'Perino', '5'),
(4, 'demo12', 'demo', 'demo1', 'dmeo', 'demo1', '5'),
(5, 'clr123', 'clr11', 'Christian Lawrence', 'Rosales', 'Perino', '3');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

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
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`student_id`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`subject_id`),
  ADD UNIQUE KEY `subject_name` (`subject_name`);

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
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `dept_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `subject_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `teacher_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

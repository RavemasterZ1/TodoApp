CREATE DATABASE epytodo;

use epytodo;

CREATE TABLE `todo` (
  `id` int NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `due_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_id` int NOT NULL
);

CREATE TABLE `user` (
  `id` int NOT NULL,
  `email` varchar(122) NOT NULL,
  `name` varchar(122) NOT NULL,
  `firstname` varchar(122) NOT NULL,
  `password` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);
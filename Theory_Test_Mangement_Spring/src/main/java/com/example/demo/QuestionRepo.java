package com.example.demo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface QuestionRepo extends JpaRepository<Question, Integer> {
	@Query(value = "SELECT q FROM Question q ORDER BY RAND() LIMIT 1")
    Optional<Question> findRandomQuestion();
}
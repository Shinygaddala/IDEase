package com.dis.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dis.entity.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, String>{
	boolean existsById(String rollNumber);
	
}

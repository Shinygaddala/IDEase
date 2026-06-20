package com.dis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.dis.Repo.StudentRepository;
import com.dis.entity.Student;

@RestController
@RequestMapping("/student")
@CrossOrigin("*")
public class StudentController {

    @Autowired
    StudentRepository repo;

    // Add Student
    @PostMapping("/save")
    public Student saveStudent(@RequestBody Student student) {

        System.out.println(student.getRollNumber());

        if (repo.existsById(student.getRollNumber())) {
            throw new RuntimeException("Student already exists");
        }

        return repo.save(student);
    }
    
    // Get All Students
    @GetMapping("/all")
    public List<Student> getAllStudents(){

        return repo.findAll();
    }
}
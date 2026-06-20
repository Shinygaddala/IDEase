package com.dis.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dis.Repo.PermissionRepository;
import com.dis.Repo.StudentRepository;
import com.dis.entity.PermissionSlip;
import com.dis.entity.Student;

@Service
public class PermissionService {

    @Autowired
    StudentRepository studentRepo;

    @Autowired
    PermissionRepository permissionRepo;

    public PermissionSlip generateSlip(String rollNo) {

        Student student =
        		studentRepo.findById(rollNo)
                .orElseThrow(() ->
                    new RuntimeException("Student not found"));

        PermissionSlip slip =
                new PermissionSlip();

        slip.setRollNumber(student.getRollNumber());
        slip.setStudentName(student.getStudentName());
        slip.setYear(student.getYear());
        slip.setBranch(student.getBranch());

        slip.setIssueDate(LocalDate.now());
        slip.setIssueTime(LocalTime.now());

        slip.setExpiryDate(LocalDate.now());
        slip.setExpiryTime(
                LocalTime.now().plusHours(8));

        return permissionRepo.save(slip);
    }
    public List<PermissionSlip> getAllSlips() {
        return permissionRepo.findAll();
    }
}
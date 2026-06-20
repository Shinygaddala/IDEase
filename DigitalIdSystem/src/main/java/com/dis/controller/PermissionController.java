package com.dis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.dis.Repo.PermissionRepository;
import com.dis.entity.PermissionSlip;
import com.dis.service.PermissionService;

@RestController
@RequestMapping("/permission")
@CrossOrigin("*")
public class PermissionController {

    @Autowired
    PermissionService service;

    // Generate permission slip
    @PostMapping("/{rollNo}")
    public PermissionSlip generateSlip(
            @PathVariable String rollNo){

        return service.generateSlip(rollNo);
    }

    // Get all slips
    @GetMapping("/all")
    public List<PermissionSlip> getAllSlips() {
        return service.getAllSlips();
    }
}

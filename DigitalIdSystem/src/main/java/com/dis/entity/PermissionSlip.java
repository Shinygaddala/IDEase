package com.dis.entity;

import java.time.LocalDate;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Entity;
import java.time.LocalTime;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
@Table(name="PermissionSlip")
public class PermissionSlip {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String rollNumber;
	private String studentName;
	public String getStudentName() {
		return studentName;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	private String branch;
	private int year;
	
	private LocalDate issueDate;
	private LocalTime issueTime;
	
	private LocalDate expiryDate;
	private LocalTime expiryTime;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getRollNumber() {
		return rollNumber;
	}
	public void setRollNumber(String rollNumber) {
		this.rollNumber = rollNumber;
	}
	public String getBranch() {
		return branch;
	}
	public void setBranch(String branch) {
		this.branch = branch;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public LocalDate getIssueDate() {
		return issueDate;
	}
	public void setIssueDate(LocalDate issueDate) {
		this.issueDate = issueDate;
	}
	public LocalTime getIssueTime() {
		return issueTime;
	}
	public void setIssueTime(LocalTime issueTime) {
		this.issueTime = issueTime;
	}
	public LocalDate getExpiryDate() {
		return expiryDate;
	}
	public void setExpiryDate(LocalDate expiryDate) {
		this.expiryDate = expiryDate;
	}
	public LocalTime getExpiryTime() {
		return expiryTime;
	}
	public void setExpiryTime(LocalTime expiryTime) {
		this.expiryTime = expiryTime;
	}

	
		
}


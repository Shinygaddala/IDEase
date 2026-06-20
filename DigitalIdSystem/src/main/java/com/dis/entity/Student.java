package com.dis.entity;

import jakarta.persistence.Table;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
@Table(name="Student")
public class Student {
	
	@Id
	private String rollNumber;
	
	private String studentName;
	
	private String branch;
	
	private int year;

	public String getRollNumber() {
		return rollNumber;
	}

	public void setRollNumber(String rollNumber) {
		this.rollNumber = rollNumber;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
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
	
	

}

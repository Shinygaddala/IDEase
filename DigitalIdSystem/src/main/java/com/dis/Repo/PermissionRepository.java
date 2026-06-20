package com.dis.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dis.entity.PermissionSlip;

public interface PermissionRepository extends JpaRepository<PermissionSlip, Long>{

}

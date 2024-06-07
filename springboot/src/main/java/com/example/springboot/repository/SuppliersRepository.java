package com.example.springboot.repository;

import com.example.springboot.model.SuppliersModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.UUID;

@Repository
public interface SuppliersRepository extends JpaRepository<SuppliersModel, UUID>{
}

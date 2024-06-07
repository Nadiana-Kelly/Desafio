package com.example.springboot.controller;
import com.example.springboot.dto.SuppliersRecordDto;
import com.example.springboot.model.SuppliersModel;
import com.example.springboot.repository.SuppliersRepository;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;


@RestController
public class SuppliersController {

    @Autowired
    SuppliersRepository suppliersRepository;

    @PostMapping("/suppliers")
    public ResponseEntity<SuppliersModel> saveSuppliers(@RequestBody @Valid SuppliersRecordDto suppliersRecordDto){
        var suppliersModel = new SuppliersModel();
        BeanUtils.copyProperties(suppliersRecordDto, suppliersModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(suppliersRepository.save(suppliersModel));
    }

    @GetMapping("/suppliers")
    public ResponseEntity<List<SuppliersModel>> getAllSuppliers(){
        return ResponseEntity.status(HttpStatus.OK).body(suppliersRepository.findAll());
    }




}

package com.example.springboot.controller;
import com.example.springboot.dto.SuppliersRecordDto;
import com.example.springboot.model.SuppliersModel;
import com.example.springboot.repository.SuppliersRepository;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;



@RestController
public class SuppliersController {

    @Autowired
    SuppliersRepository suppliersRepository;

    //register a supplier
    @PostMapping("/suppliers")
    public ResponseEntity<SuppliersModel> saveSuppliers(@RequestBody @Valid SuppliersRecordDto suppliersRecordDto){
        var suppliersModel = new SuppliersModel();
        BeanUtils.copyProperties(suppliersRecordDto, suppliersModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(suppliersRepository.save(suppliersModel));
    }

    //list suppliers
    @GetMapping("/suppliers")
    public ResponseEntity<List<SuppliersModel>> getAllSuppliers(){
        return ResponseEntity.status(HttpStatus.OK).body(suppliersRepository.findAll());
    }

    //view supplier
    @GetMapping("/suppliers/{id}")
    public ResponseEntity<Object> getOneSuppliers(@PathVariable(value="id") Integer id){
        Optional<SuppliersModel> suppliersO = suppliersRepository.findById(id);

        if(suppliersO.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Fornecedor não encontrado.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(suppliersO.get());
    }

    //edit supplier
    @PutMapping("/suppliers/{id}")
    public ResponseEntity<Object> updateSuppliers(@PathVariable(value="id") Integer id, @RequestBody @Valid SuppliersRecordDto suppliersRecordDto){
        Optional<SuppliersModel> suppliersO = suppliersRepository.findById(id);

        if(suppliersO.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Fornecedor não encontrado.");
        }

        var suppliersModel = suppliersO.get();
        BeanUtils.copyProperties(suppliersRecordDto, suppliersModel);
        return ResponseEntity.status(HttpStatus.OK).body(suppliersRepository.save(suppliersModel));
   }

   //delete supplier
   @DeleteMapping("/suppliers/{id}")
   public ResponseEntity<Object> deleteSuppliers(@PathVariable(value="id") Integer id){
        Optional<SuppliersModel> suppliersO = suppliersRepository.findById(id);

        if(suppliersO.isEmpty()){
           return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Fornecedor não encontrado.");
        }

        suppliersRepository.delete(suppliersO.get());
        return ResponseEntity.status(HttpStatus.OK).body("Fornecedor deletado com sucesso.");
   }


}

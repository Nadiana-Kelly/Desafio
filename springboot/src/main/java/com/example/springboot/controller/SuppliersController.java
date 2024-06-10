package com.example.springboot.controller;
import com.example.springboot.dto.SuppliersRecordDto;
import com.example.springboot.model.SuppliersModel;
import com.example.springboot.repository.SuppliersRepository;
import com.example.springboot.service.SuppliersService;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Objects;
import java.util.Optional;


@RestController
public class SuppliersController {

    @Autowired
    SuppliersRepository suppliersRepository;
    private final SuppliersService suppliersService;

    public SuppliersController(SuppliersService suppliersService) {
        this.suppliersService = suppliersService;
    }

    //register a supplier
    @PostMapping("/suppliers")
    public ResponseEntity<Object> saveSuppliers(@RequestBody @Valid SuppliersRecordDto suppliersRecordDto) {
        if(suppliersService.cnpjAlreadyExists(suppliersRecordDto.cnpj()).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("This CNPJ already exists.");
        }

        SuppliersModel savedSupplier = suppliersService.saveSupplier(suppliersRecordDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedSupplier);
    }

    //list suppliers
    @GetMapping("/suppliers")
    public ResponseEntity<List<SuppliersModel>> getAllSuppliers(){
        return ResponseEntity.status(HttpStatus.OK).body(suppliersService.getAllSuppliers());
    }

    //view supplier
    @GetMapping("/suppliers/{id}")
    public ResponseEntity<Object> getOneSuppliers(@PathVariable(value="id") Integer id){
        Optional<SuppliersModel> supplier = suppliersService.getSupplierById(id);

        if(supplier.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body(supplier.get());
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Supplier not founded.");
    }

    //edit supplier
    @PutMapping("/suppliers/{id}")
    public ResponseEntity<Object> updateSuppliers(@PathVariable(value="id") Integer id, @RequestBody @Valid SuppliersRecordDto suppliersRecordDto){
        Optional<SuppliersModel> suppliersO = suppliersRepository.findById(id);

        if(suppliersO.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Supplier not founded.");
        }

        Optional<SuppliersModel> supplier = suppliersService.cnpjAlreadyExists(suppliersRecordDto.cnpj());

        if (supplier.isPresent() && !Objects.equals(supplier.get().getId(), id)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("This CNPJ already exists.");
        }

        var suppliersModel = suppliersO.get();
        BeanUtils.copyProperties(suppliersRecordDto, suppliersModel);
        return ResponseEntity.status(HttpStatus.OK).body(suppliersRepository.save(suppliersModel));
   }

    //delete supplier
    @DeleteMapping("/suppliers/{id}")
    public ResponseEntity<Object> deleteSuppliers(@PathVariable(value = "id") Integer id) {
        if (suppliersService.deleteSupplier(id)) {
            return ResponseEntity.status(HttpStatus.OK).body("Supplier deleted successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Supplier not found.");
        }
    }
}

package com.example.springboot.service;

import com.example.springboot.dto.SuppliersRecordDto;
import com.example.springboot.model.SuppliersModel;
import com.example.springboot.repository.SuppliersRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class SuppliersService {

    private final SuppliersRepository suppliersRepository;

    public SuppliersService(SuppliersRepository suppliersRepository) {
        this.suppliersRepository = suppliersRepository;
    }

    public Optional<SuppliersModel> cnpjAlreadyExists(String cnpj) {
        return suppliersRepository.findByCnpj(cnpj);
    }

    public SuppliersModel saveSupplier(SuppliersRecordDto suppliersRecordDto) {
        SuppliersModel suppliersModel = new SuppliersModel();
        BeanUtils.copyProperties(suppliersRecordDto, suppliersModel);
        return suppliersRepository.save(suppliersModel);
    }

    public List<SuppliersModel> getAllSuppliers() {
        return suppliersRepository.findAll();
    }

    public Optional<SuppliersModel> getSupplierById(Integer id) {
        return suppliersRepository.findById(id);
    }

    public Optional<SuppliersModel> updateSupplier(Integer id, SuppliersRecordDto suppliersRecordDto) {
        Optional<SuppliersModel> suppliersO = suppliersRepository.findById(id);
        if (suppliersO.isPresent()) {
            var suppliersModel = suppliersO.get();
            BeanUtils.copyProperties(suppliersRecordDto, suppliersModel);
            return Optional.of(suppliersRepository.save(suppliersModel));
        }
        return Optional.empty();
    }

    public boolean deleteSupplier(Integer id) {
        Optional<SuppliersModel> suppliersO = suppliersRepository.findById(id);
        if (suppliersO.isPresent()) {
            suppliersRepository.delete(suppliersO.get());
            return true;
        }
        return false;
    }
}

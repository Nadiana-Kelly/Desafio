package com.example.springboot.dto;

import jakarta.validation.constraints.NotBlank;

import java.time.LocalDateTime;

public record SuppliersRecordDto(
        @NotBlank String nome,
        @NotBlank String cnpj,
        @NotBlank String endereco,
        @NotBlank String telefone,
        @NotBlank String email,
        LocalDateTime dataCriacao,
        LocalDateTime dataAtualizacao
) {


}

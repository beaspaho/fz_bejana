package com.example.h2data.repository;

import com.example.h2data.datasource.AccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryAccount extends JpaRepository<AccountEntity, Long> {

}


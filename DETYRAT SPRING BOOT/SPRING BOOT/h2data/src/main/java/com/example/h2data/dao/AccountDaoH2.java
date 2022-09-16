package com.example.h2data.dao;

import com.example.h2data.datasource.AccountEntity;
import com.example.h2data.datasource.entity;

import java.util.List;
import java.util.UUID;

public interface AccountDaoH2 {
    AccountEntity createAccount ( AccountEntity accountEntity);
    AccountEntity updateAccount ( AccountEntity accountEntity);
    List< AccountEntity> getAllAccount();
    AccountEntity getAccounttByID(Long CID);
    void deleteClient(Long cID);
}

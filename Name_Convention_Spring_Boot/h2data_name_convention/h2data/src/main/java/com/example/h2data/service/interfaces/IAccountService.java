package com.example.h2data.service.interfaces;

import com.example.h2data.datasource.AccountEntity;

import java.util.List;

public interface IAccountService {
    AccountEntity createAccount ( AccountEntity accountEntity);
    AccountEntity updateAccount ( AccountEntity accountEntity);
    List< AccountEntity> getAllAccount();
    AccountEntity getAccounttByID(Long Cid);
    void deleteClient(Long Cid);
}

package com.example.h2data.service;

import com.example.h2data.RepositoryC.RepositoryAccount;
import com.example.h2data.RepositoryC.RepositoryClient;
import com.example.h2data.dao.AccountDaoH2;
import com.example.h2data.datasource.AccountEntity;
import com.example.h2data.datasource.entity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
@Service
@Transactional
public class AccountServiceH2 implements AccountDaoH2 {
    @Autowired
    private RepositoryAccount ACCOUNT;

    @Override

    public AccountEntity createAccount(AccountEntity accountEntity) {
        return ACCOUNT.save(accountEntity);
    }

    @Override
    public AccountEntity updateAccount(AccountEntity accountEntity) {
        Optional<AccountEntity> accountdb = this.ACCOUNT.findById(accountEntity.getCid());
        if (accountdb.isPresent()){
            AccountEntity ACCOUNT = accountdb.get();
           //ACCOUNT.setCid(accountEntity.getCid());
            ACCOUNT.setEntity_number(accountEntity.getEntity_number());
            ACCOUNT.setCcy(accountEntity.getCcy());
           ACCOUNT.setNo(accountEntity.getNo());
            ACCOUNT.setSum(accountEntity.getSum());
         //  ACCOUNT.setEntity(accountEntity.getEntity());
            this.ACCOUNT.save(ACCOUNT);
            return ACCOUNT;
        }
        return null;
    }

    @Override
    public List<AccountEntity> getAllAccount() {
        return (List<AccountEntity>) this.ACCOUNT.findAll();
    }

    @Override
    public AccountEntity getAccounttByID(Long CID) {
        Optional<AccountEntity> Accountdb = this.ACCOUNT.findById(CID);
        if (Accountdb.isPresent()){
            return Accountdb.get();
        }
        else {
            throw new ResourceAccessException("REC NOT FOUND");
        }
    }

    @Override
    public void deleteClient(Long cID) {
        Optional<AccountEntity> Accountdb= this.ACCOUNT.findById(cID);
        if (Accountdb.isPresent()){
            this.ACCOUNT.delete(Accountdb.get());
        }
        else {
            throw new ResourceAccessException("REC NOT FOUND");
        }
    }
    }


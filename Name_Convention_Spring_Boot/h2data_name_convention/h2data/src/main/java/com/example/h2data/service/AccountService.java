package com.example.h2data.service;

import com.example.h2data.repository.RepositoryAccount;
import com.example.h2data.datasource.AccountEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class AccountService implements com.example.h2data.service.interfaces.IAccountService {
    @Autowired
    private RepositoryAccount repositoryAccount;

    @Override

    public AccountEntity createAccount(AccountEntity accountEntity) {
        return repositoryAccount.save(accountEntity);
    }

    @Override
    public AccountEntity updateAccount(AccountEntity accountEntity) {
        Optional<AccountEntity> accountdb = this.repositoryAccount.findById(accountEntity.getCid());
        if (accountdb.isPresent()){
            AccountEntity ACCOUNT = accountdb.get();
           //ACCOUNT.setCid(accountEntity.getCid());
            ACCOUNT.setEntity_number(accountEntity.getEntity_number());
            ACCOUNT.setCcy(accountEntity.getCcy());
           ACCOUNT.setNo(accountEntity.getNo());
            ACCOUNT.setSum(accountEntity.getSum());
         //  ACCOUNT.setEntity(accountEntity.getEntity());
            this.repositoryAccount.save(ACCOUNT);
            return ACCOUNT;
        }
        return null;
    }

    @Override
    public List<AccountEntity> getAllAccount() {
        return (List<AccountEntity>) this.repositoryAccount.findAll();
    }

    @Override
    public AccountEntity getAccounttByID(Long Cid) {
        Optional<AccountEntity> Accountdb = this.repositoryAccount.findById(Cid);
        if (Accountdb.isPresent()){
            return Accountdb.get();
        }
        else {
            throw new ResourceAccessException("REC NOT FOUND");
        }
    }

    @Override
    public void deleteClient(Long Cid) {
        Optional<AccountEntity> Accountdb= this.repositoryAccount.findById(Cid);
        if (Accountdb.isPresent()){
            this.repositoryAccount.delete(Accountdb.get());
        }
        else {
            throw new ResourceAccessException("REC NOT FOUND");
        }
    }
    }


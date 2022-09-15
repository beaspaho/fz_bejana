package com.example.h2data.service;

import com.example.h2data.dao.AccountDao;
import com.example.h2data.dao.ClientDao;
import com.example.h2data.model.Account;
import com.example.h2data.model.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class AccountService {
    private  final AccountDao accountDaoDao;
    @Autowired
    public AccountService (@Qualifier("accdataDao") AccountDao accountDaoDao){

        this.accountDaoDao = accountDaoDao;
    }
    public int addAccount(Account account){
        return accountDaoDao.insertAccount(account);
    }
    public List<Account> getAllAccount(){
        return  accountDaoDao.selectAllAccounts();
    }
    public Optional<Account> getAccount(UUID Cid){
        return accountDaoDao.selectAccount(Cid);
    }
    public int deleteAccount(UUID cid){
        return accountDaoDao.deleteAccountById(cid);
    }
    public int updateAccount (UUID Cid, Account nAccount){
        return  accountDaoDao.updateAccountById(Cid,nAccount);
    }
}

package com.example.h2data.dao;

import com.example.h2data.model.Account;
import com.example.h2data.model.Client;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
@Repository("accdataDao")
public class AccountData implements AccountDao{
    private static  List<Account> Db = new ArrayList<>();
    @Override
    public int insertAccount(UUID Cid, Account account) {
        Db.add(new Account(Cid, account.getSum(), account.getNo(), account.getCcy()));
        return 1;
    }

    @Override
    public List<Account> selectAllAccounts() {
        return Db;
    }

    @Override
    public Optional<Account> selectAccount(UUID Cid) {
        return Db.stream().filter(
               account -> account.getCid().equals(Cid)
        ).findFirst();
    }

    @Override
    public int deleteAccountById(UUID Cid) {
        Optional<Account> accountM = selectAccount(Cid);
        if (accountM.isEmpty()){
            return 0;
        }
        Db.remove(accountM.get());
        return 1;
    }

    @Override
    public int updateAccountById(UUID Cid, Account account) {
        return selectAccount(Cid).map( account1  -> {
            int indexOfClientToUpdate = Db.indexOf(account1);
            if(indexOfClientToUpdate >= 0 ) {Db.set(indexOfClientToUpdate, new Account(Cid,account.getSum(),account.getNo(),account.getCcy()));
                return 1;}
            return 0;
        }).orElse(0);
    }
}

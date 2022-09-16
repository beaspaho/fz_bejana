package com.example.h2data.dao;

import com.example.h2data.model.Account;
import com.example.h2data.model.Client;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface AccountDao {
    int insertAccount (UUID Cid, Account account);
    default int insertAccount (Account account){
        UUID Cid = UUID.randomUUID();
        return insertAccount(Cid,account);
    }
    List<Account> selectAllAccounts ();

    Optional<Account> selectAccount (UUID Cid);
    int deleteAccountById (UUID Cid);
    int updateAccountById (UUID Cid, Account account);
}

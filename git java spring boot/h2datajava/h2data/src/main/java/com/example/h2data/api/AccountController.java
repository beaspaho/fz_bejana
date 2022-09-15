package com.example.h2data.api;

import com.example.h2data.model.Account;
import com.example.h2data.model.Client;
import com.example.h2data.service.AccountService;
import com.example.h2data.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;
@RequestMapping("api/v4/sms/client")
@RestController
public class AccountController {
    private final AccountService accountService;
    @Autowired
    public AccountController ( AccountService accountService){
        this.accountService = accountService;
    }
    @PostMapping
    public void addAccount(@RequestBody Account account){
        accountService.addAccount(account);
    }
    @GetMapping
    public List<Account> getAllAccount() {
        return
                accountService.getAllAccount();
    }
    public Account getAccount(UUID Cid){
        return accountService.getAccount(Cid).orElse(null)

                ;}
    @DeleteMapping(path = "{Cid}")
    public  void deleteAccount (@PathVariable("Cid") UUID Cid){
        accountService.deleteAccount(Cid); }

    @PutMapping(path = "{Cid}")
    public  void updateAccount (@PathVariable("Cid") UUID Cid, @RequestBody Account AccountTOUPDATE){
        accountService.updateAccount(Cid,AccountTOUPDATE);
    }
}

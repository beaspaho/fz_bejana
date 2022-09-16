package com.example.h2data.api;

import com.example.h2data.datasource.AccountEntity;
import com.example.h2data.datasource.entity;
import com.example.h2data.service.AccountServiceH2;
import com.example.h2data.service.ClientServiceH2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
public class AccountControllerH2 {
    @Autowired
    private AccountServiceH2 accountServiceH2;
    public AccountControllerH2(AccountServiceH2 accountService) {

        this.accountServiceH2 = accountService;
    }



    @GetMapping("/ACCOUNT")
    public ResponseEntity<List<AccountEntity>> getAllClient(){
        return ResponseEntity.ok().body( this.accountServiceH2.getAllAccount());
    }
    @GetMapping("/ACCOUNT/{Cid}")
    public ResponseEntity<AccountEntity> getAllClientbyID(@PathVariable Long Cid){
        return  ResponseEntity.ok().body( this.accountServiceH2.getAccounttByID((Cid)));
    }
    @PostMapping("/ACCOUNT")
    public ResponseEntity<AccountEntity> createClient(@RequestBody AccountEntity Client){
        return ResponseEntity.ok().body(this.accountServiceH2.createAccount(Client));

    }
    @PutMapping("/ACCOUNT/{Cid}")
    public  ResponseEntity<AccountEntity>  updateClient (@PathVariable Long Cid, @RequestBody  AccountEntity client){
        client.setCid(Cid);
        return ResponseEntity.ok().body(this.accountServiceH2.updateAccount(client));
    }
    @DeleteMapping("/ACCOUNT/{CID}")
    public HttpStatus delete (@PathVariable Long CID){
        this.accountServiceH2.deleteClient(CID);
        return HttpStatus.OK;
    }
}

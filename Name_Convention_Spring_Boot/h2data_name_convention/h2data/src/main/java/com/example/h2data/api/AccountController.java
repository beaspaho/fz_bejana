package com.example.h2data.api;

import com.example.h2data.datasource.AccountEntity;
import com.example.h2data.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AccountController {
    @Autowired
    private AccountService accountService;
    public AccountController(AccountService accountService) {

        this.accountService = accountService;
    }



    @GetMapping("/ACCOUNT")
    public ResponseEntity<List<AccountEntity>> getAllClient(){
        return ResponseEntity.ok().body( this.accountService.getAllAccount());
    }
    @GetMapping("/ACCOUNT/{Cid}")
    public ResponseEntity<AccountEntity> getAllClientbyID(@PathVariable Long Cid){
        return  ResponseEntity.ok().body( this.accountService.getAccounttByID((Cid)));
    }
    @PostMapping("/ACCOUNT")
    public ResponseEntity<AccountEntity> createClient(@RequestBody AccountEntity Client){
        return ResponseEntity.ok().body(this.accountService.createAccount(Client));

    }
    @PutMapping("/ACCOUNT/{Cid}")
    public  ResponseEntity<AccountEntity>  updateClient (@PathVariable Long Cid, @RequestBody  AccountEntity client){
        client.setCid(Cid);
        return ResponseEntity.ok().body(this.accountService.updateAccount(client));
    }
    @DeleteMapping("/ACCOUNT/{Cid}")
    public HttpStatus delete (@PathVariable Long Cid){
        this.accountService.deleteClient(Cid);
        return HttpStatus.OK;
    }
}

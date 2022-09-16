package com.example.h2data.api;
import com.example.h2data.datasource.entity;
import com.example.h2data.service.ClientServiceH2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;


@RestController
public class ClientApiH2 {
    @Autowired
    private ClientServiceH2 clientServiceH2;


    @GetMapping("/CLIENT")
    public ResponseEntity<List<entity>> getAllClient(){
        return ResponseEntity.ok().body( this.clientServiceH2.getAllClient());
    }
    @GetMapping("/CLIENT/{Cid}")
    public ResponseEntity<entity> getAllClientbyID(@PathVariable Long Cid){
        return  ResponseEntity.ok().body( this.clientServiceH2.getClientByID(Cid));
    }
    @PostMapping("/CLIENT")
    public ResponseEntity<entity> createClient(@RequestBody entity Client){
       return ResponseEntity.ok().body(this.clientServiceH2.createClient(Client));

    }
    @PutMapping("/CLIENT/{Cid}")
    public  ResponseEntity<entity>  updateClient (@PathVariable Long Cid, @RequestBody  entity client){
        client.setNumber(Cid);
        return ResponseEntity.ok().body(this.clientServiceH2.updateClient(client));
    }
    @DeleteMapping("/CLIENT/{CID}")
    public HttpStatus delete (@PathVariable Long CID){
        this.clientServiceH2.deleteClient(CID);
        return HttpStatus.OK;
    }
}

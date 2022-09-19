package com.example.h2data.api;
import com.example.h2data.datasource.ClientEntity;
import com.example.h2data.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class ClientController {
    @Autowired
    private ClientService clientService;


    @GetMapping("/CLIENT")
    public ResponseEntity<List<ClientEntity>> getAllClient(){
        return ResponseEntity.ok().body( this.clientService.getAllClient());
    }
    @GetMapping("/CLIENT/{Cid}")
    public ResponseEntity<ClientEntity> getAllClientbyID(@PathVariable Long Cid){
        return  ResponseEntity.ok().body( this.clientService.getClientByID(Cid));
    }
    @PostMapping("/CLIENT")
    public ResponseEntity<ClientEntity> createClient(@RequestBody ClientEntity Client){
       return ResponseEntity.ok().body(this.clientService.createClient(Client));

    }
    @PutMapping("/CLIENT/{Cid}")
    public  ResponseEntity<ClientEntity>  updateClient (@PathVariable Long Cid, @RequestBody ClientEntity client){
        client.setNumber(Cid);
        return ResponseEntity.ok().body(this.clientService.updateClient(client));
    }
    @DeleteMapping("/CLIENT/{Cid}")
    public HttpStatus delete (@PathVariable Long Cid){
        this.clientService.deleteClient(Cid);
        return HttpStatus.OK;
    }
}

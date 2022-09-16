package com.example.h2data.api;

import com.example.h2data.model.Client;
import com.example.h2data.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RequestMapping("api/v3/sms/client")
@RestController
public class ClientController {
    private final ClientService clientService;
    @Autowired
    public ClientController ( ClientService clientService){
        this.clientService = clientService;
    }
    @PostMapping
    public void addClient(@RequestBody Client client){
        clientService.addClient(client);
    }
    @GetMapping
    public List <Client> getAllPeople() {
        return clientService.getAllPeople();
    }
    public Client getClient(UUID Cid){
        return clientService.getClient(Cid).orElse(null)

                ;}
    @DeleteMapping(path = "{Cid}")
    public  void deleteClient (@PathVariable ("Cid") UUID Cid){
        clientService.deleteClient(Cid); }

    @PutMapping(path = "{Cid}")
    public  void updateClient (@PathVariable("Cid") UUID Cid, @RequestBody Client CLIENTTOUPDATE){
        clientService.updateClient(Cid,CLIENTTOUPDATE);
    }
}

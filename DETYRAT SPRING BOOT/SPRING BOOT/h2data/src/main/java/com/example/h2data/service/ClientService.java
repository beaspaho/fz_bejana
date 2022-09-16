package com.example.h2data.service;


import com.example.h2data.dao.ClientDao;
import com.example.h2data.model.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service

public class ClientService {
    private  final ClientDao clientDao;
    @Autowired
    public ClientService (@Qualifier("postgres") ClientDao clientDao){

        this.clientDao = clientDao;
    }
    public int addClient(Client client){
        return clientDao.insertClient(client);
    }
    public List<Client> getAllPeople(){
        return  clientDao.selectAllPeople();
    }
    public Optional<Client> getClient(UUID Cid){
        return clientDao.selectClient(Cid);
    }
    public int deleteClient(UUID cid){
        return clientDao.deleteClientById(cid);
    }
    public int updateClient (UUID Cid, Client nClient){
        return  clientDao.updateClientById(Cid,nClient);
    }
}

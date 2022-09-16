package com.example.h2data.service;

import com.example.h2data.RepositoryC.RepositoryClient;

import com.example.h2data.dao.ClientDaoH2;
import com.example.h2data.datasource.AccountEntity;
import com.example.h2data.datasource.entity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
@Service
@Transactional
public class ClientServiceH2 implements ClientDaoH2 {
@Autowired
private RepositoryClient Client;
    @Override
    public entity createClient(entity client) {

        return Client.save(client);
    }

    @Override
    public entity updateClient(entity client) {
        Optional<entity> Clientdb = this.Client.findById(client.getNo());
        if (Clientdb.isPresent()){
            entity Client = Clientdb.get();
          //  Client.setNumber(client.getNo());
            Client.setName(client.getNAME());
            Client.setNumber(client.getNo());
            Client.setType(client.getTypeC());
            this.Client.save(Client);
            return Client;
        }
        return null;
    }

    @Override
    public List<entity> getAllClient() {
        return (List<entity>) this.Client.findAll();
    }

    @Override
    public entity getClientByID(Long CID) {
        Optional<entity> Clientdb = this.Client.findById(CID);
        if (Clientdb.isPresent()){
            return Clientdb.get();
        }
        else {
            throw new ResourceAccessException("REC NOT FOUND");
        }
    }

    @Override
    public void deleteClient(Long cID) {
        Optional<entity> Clientdb = this.Client.findById(cID);
        if (Clientdb.isPresent()){
            this.Client.delete(Clientdb.get());
        }
        else {
            throw new ResourceAccessException("REC NOT FOUND");
        }
    }
}

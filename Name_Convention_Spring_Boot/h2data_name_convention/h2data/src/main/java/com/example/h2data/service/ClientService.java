package com.example.h2data.service;

import com.example.h2data.repository.RepositoryClient;

import com.example.h2data.datasource.ClientEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ClientService implements com.example.h2data.service.interfaces.IClientService {
@Autowired
private RepositoryClient clientRepository;
    @Override
    public ClientEntity createClient(ClientEntity client) {

        return clientRepository.save(client);
    }

    @Override
    public ClientEntity updateClient(ClientEntity client) {
        Optional<ClientEntity> Clientdb = this.clientRepository.findById(client.getNo());
        if (Clientdb.isPresent()){
            ClientEntity Client = Clientdb.get();
          //  Client.setNumber(client.getNo());
            Client.setName(client.getName());
            Client.setNumber(client.getNo());
            Client.setType(client.getTypeC());
            Client.setAccount(client.getAccountSet());
            this.clientRepository.save(Client);
            return Client;
        }
        return null;
    }

    @Override
    public List<ClientEntity> getAllClient() {
        return (List<ClientEntity>) this.clientRepository.findAll();
    }

    @Override
    public ClientEntity getClientByID(Long Cid) {
        Optional<ClientEntity> Clientdb = this.clientRepository.findById(Cid);
        if (Clientdb.isPresent()){
            return Clientdb.get();
        }
        else {
            throw new ResourceAccessException("REC NOT FOUND");
        }
    }

    @Override
    public void deleteClient(Long Cid) {
        Optional<ClientEntity> Clientdb = this.clientRepository.findById(Cid);
        if (Clientdb.isPresent()){
            this.clientRepository.delete(Clientdb.get());
        }
        else {
            throw new ResourceAccessException("REC NOT FOUND");
        }
    }
}

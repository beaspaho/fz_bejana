package com.example.h2data.dao;

import com.example.h2data.model.Client;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ClientDao {
    int insertClient (UUID Cid, Client client);
    default int insertClient (Client client){
        UUID Cid = UUID.randomUUID();
        return insertClient(Cid,client);
    }
    List<Client> selectAllPeople ();

    Optional<Client> selectClient (UUID Cid);
    int deleteClientById (UUID Cid);
    int updateClientById (UUID Cid, Client client);
}

package com.example.h2data.dao;
import com.example.h2data.model.Client;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
@Repository("postgres")
public class ClientDataAcessService implements ClientDao {
    @Override
    public int insertClient(UUID Cid, Client client) {
        return 0;
    }

    @Override
    public List<Client> selectAllPeople() {
        return List.of(new Client(UUID.randomUUID(), "FROM POSTGRES DB", 1 ,"tt"));
    }

    @Override
    public Optional<Client> selectClient(UUID Cid) {
        return Optional.empty();
    }

    @Override
    public int deleteClientById(UUID Cid) {
        return 0;
    }

    @Override
    public int updateClientById(UUID Cid, Client client) {
        return 0;
    }
}

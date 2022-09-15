package com.example.h2data.dao;
import com.example.h2data.model.Client;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
@Repository("dataDao")
public class ClientData implements ClientDao{
    private static  List<Client> DB = new ArrayList<>();
    @Override
    public int insertClient(UUID Cid, Client client) {
        DB.add(new Client(Cid, client.getNAME(), client.getNo(), client.getTypeC()));
        return 1;
    }

    @Override
    public List<Client> selectAllPeople() {
        return DB;
    }


    @Override
    public Optional<Client> selectClient(UUID Cid) {
        return DB.stream().filter(
                client -> client.getCid().equals(Cid)
        ).findFirst();
    }

    @Override
    public int deleteClientById(UUID Cid) {
        Optional<Client> clientM = selectClient(Cid);
        if (clientM.isEmpty()){
            return 0;
        }
        DB.remove(clientM.get());
        return 1;
    }

    @Override
    public int updateClientById(UUID Cid, Client client) {
        return selectClient(Cid).map( client1 -> {
            int indexOfClientToUpdate = DB.indexOf(client1);
            if(indexOfClientToUpdate >= 0 ) {DB.set(indexOfClientToUpdate, new Client(Cid,client.getNAME(),client.getNo(),client.getTypeC()));
                return 1;}
            return 0;
        }).orElse(0);
    }
}

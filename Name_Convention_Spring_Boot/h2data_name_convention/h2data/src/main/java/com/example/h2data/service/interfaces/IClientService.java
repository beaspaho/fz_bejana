package com.example.h2data.service.interfaces;
import com.example.h2data.datasource.ClientEntity;

import java.util.List;

public interface IClientService {
   ClientEntity createClient (ClientEntity client);
   ClientEntity updateClient (ClientEntity client);
   List<ClientEntity> getAllClient();
   ClientEntity getClientByID(Long Cid);
   void deleteClient(Long Cid);

}

package com.example.h2data.dao;
import com.example.h2data.datasource.entity;

import java.util.List;
import java.util.UUID;

public interface ClientDaoH2 {
   entity createClient ( entity client);
   entity updateClient ( entity client);
   List<entity> getAllClient();
   entity getClientByID(Long CID);
   void deleteClient(Long cID);

}

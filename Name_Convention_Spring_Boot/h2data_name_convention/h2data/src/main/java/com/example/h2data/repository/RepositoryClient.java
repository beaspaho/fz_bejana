package com.example.h2data.repository;
import com.example.h2data.datasource.ClientEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryClient extends JpaRepository<ClientEntity, Long> {
    //entity findByName(String N);
}

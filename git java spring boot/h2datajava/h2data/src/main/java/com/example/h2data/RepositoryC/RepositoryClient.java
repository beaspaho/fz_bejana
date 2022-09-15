package com.example.h2data.RepositoryC;
import com.example.h2data.datasource.entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import javax.swing.text.html.parser.Entity;
import java.util.UUID;

public interface RepositoryClient extends JpaRepository<entity, Long> {
    //entity findByName(String N);
}

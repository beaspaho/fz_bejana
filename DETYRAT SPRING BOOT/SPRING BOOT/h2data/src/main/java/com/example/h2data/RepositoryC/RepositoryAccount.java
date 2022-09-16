package com.example.h2data.RepositoryC;

import com.example.h2data.datasource.AccountEntity;
import com.example.h2data.datasource.entity;
import net.bytebuddy.description.annotation.AnnotationValue;
import org.hibernate.sql.Select;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import java.util.UUID;
import org.springframework.data.domain.Sort;
import java.util.List;
public interface RepositoryAccount extends JpaRepository<AccountEntity, Long> {
  //  @Query("select a from AccountEntity a where a.no= entity.number")

 //  public AccountEntity findAccount(int no);

  // List<AccountEntity> findByEntity(entity entity, Sort sort);
}

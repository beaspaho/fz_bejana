package com.example.h2data.datasource;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;
import java.io.Serializable;
import java.util.Set;
@Entity
@Table(name = "entity")
public class entity  implements Serializable {

    //@Id
    //@GeneratedValue(strategy = GenerationType.AUTO)
    /*@Column (name = "CID")
    private UUID Cid;*/
    @Column (name = "name")
    private String name;
    @Id
    @Column (name = "number")
    private Long number;
    @Column (name = "type")
    private String type;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "entity_number")
   // @JsonIgnoreProperties
    private List<AccountEntity> accountSet;

    public entity() {
    }

    public entity(UUID Cid, String name, Long number,String type, List<AccountEntity> accountSet) {
        //this.Cid = Cid;
        this.name = name;
        this.number = number;
        this.type = type;
        this.accountSet = accountSet;
    }
    /*public UUID getCid() {
        return Cid;
    }*/

    public String getNAME() {
        return name;
    }

    public Long getNo() {
        return number;
    }

    public String getTypeC() {
        return type;
    }
   /* public void setCid(UUID CID)
    {this.Cid = CID;
    }*/
    public void setName(String name){
        this.name=name;
    }
    public void setNumber(Long n){
        this.number=n;
    }
    public void setType(String T){
        this.type= T;
    }

   public List<AccountEntity> getAccountSet() {
       return accountSet;
    }

   public void setAccount(List<AccountEntity> accountSet) {
      //AccountEntity account;
    //  if (account.getNo()==this.number){
      this.accountSet = accountSet;
   }
}

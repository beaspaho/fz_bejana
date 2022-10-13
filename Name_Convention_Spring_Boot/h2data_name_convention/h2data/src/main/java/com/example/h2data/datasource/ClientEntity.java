package com.example.h2data.datasource;


import javax.persistence.*;
import java.util.List;
import java.util.UUID;
import java.io.Serializable;

@Entity
@Table(name = "entity")
public class ClientEntity implements Serializable {

    //@Id
    //@GeneratedValue(strategy = GenerationType.AUTO)
    /*@Column (name = "Cid")
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

    public ClientEntity() {
    }

    public ClientEntity(UUID Cid, String name, Long number, String type, List<AccountEntity> accountSet) {
        //this.Cid = Cid;
        this.name = name;
        this.number = number;
        this.type = type;
        this.accountSet = accountSet;
    }
    /*public UUID getCid() {
        return Cid;
    }*/

    public String getName() {
        return name;
    }

    public Long getNo() {
        return number;
    }

    public String getTypeC() {
        return type;
    }
   /* public void setCid(UUID Cid)
    {this.Cid = Cid;
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

package com.example.h2data.datasource;
import javax.persistence.*;
import java.io.Serializable;
import java.util.UUID;

@Entity
@Table(name = "AccountEntity")
public class AccountEntity implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column (name = "Cid")
    private Long Cid;
    @Column(name = "no")
    private int no;
    @Column(name = "sum")
    private int sum;
    @Column(name = "ccy")
    private String ccy;

    @Column(name = "entity_number")
    private Long entity_number;


    //@ManyToOne
    //@JoinColumn(name = "entity_number")
   // private entity entity ;

    public AccountEntity() {
    }

    public AccountEntity(Long Cid, int no,int sum, String ccy) {
        this.Cid = Cid;
        this.no = no;
        this.sum= sum;
        this.ccy = ccy;
      //  this.entity = entity;
    }

    public Long getCid() {
        return Cid;
    }

    public void setCid(Long cid) {
        Cid = cid;
    }

    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public int getSum() {
        return sum;
    }

    public void setSum(int sum) {
        this.sum = sum;
    }

    public String getCcy() {
        return ccy;
    }

    public void setCcy(String ccy) {
        this.ccy = ccy;
    }

    public Long getEntity_number() {
        return entity_number;
    }

    public void setEntity_number(Long entity_number) {
        this.entity_number = entity_number;
    }
}

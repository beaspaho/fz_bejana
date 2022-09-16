package com.example.h2data.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class Account {
    private final UUID Cid;//cif
    private final int no; // account
    private final int sum;
    private final String ccy;//cust type
    public Account (@JsonProperty("Cid") UUID cid,
                   @JsonProperty("sum") int sum,
                   @JsonProperty("no") int no,
                   @JsonProperty("ccy") String typeC){
        this.Cid = cid;
        this.sum = sum;
        this.no = no;
        this.ccy = typeC;
    }
    public UUID getCid(){return Cid;}
    public int getNo(){return no;}
    public int getSum(){return sum;}
    public String getCcy(){return ccy;}
}

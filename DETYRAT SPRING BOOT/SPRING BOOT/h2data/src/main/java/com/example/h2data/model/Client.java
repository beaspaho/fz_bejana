package com.example.h2data.model;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.deser.std.UUIDDeserializer;

import java.util.UUID;
public class Client {
    private final UUID Cid;//cif
    private final String NAME;//name
    private final int no; // account
    private final String typeC;//cust type
    public Client (@JsonProperty("Cid") UUID cid,
                   @JsonProperty("NAME") String NAME,
                   @JsonProperty("no") int no,
                   @JsonProperty("typeC") String typeC){
        this.Cid = cid;
        this.NAME = NAME;
        this.no = no;
        this.typeC = typeC;
    }

    public UUID getCid() {
        return Cid;
    }

    public String getNAME() {
        return NAME;
    }

    public int getNo() {
        return no;
    }

    public String getTypeC() {
        return typeC;
    }

}

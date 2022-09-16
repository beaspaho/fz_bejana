package com.example.h2data;

import com.example.h2data.RepositoryC.RepositoryAccount;
import com.example.h2data.RepositoryC.RepositoryClient;
import com.example.h2data.datasource.AccountEntity;
import com.example.h2data.datasource.entity;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.UUID;

@SpringBootApplication
public class H2dataApplication {

	public static void main(String[] args) {
		SpringApplication.run(H2dataApplication.class, args);
	}
	//@Bean
	//public CommandLineRunner mappingDemo(RepositoryClient RepositoryClient,
									//	 RepositoryAccount RepositoryAccount) {
	//	return args -> {
		//	String U2 = "236646a2-3415-11ed-a261-0242ac120002";
		//	String U4= "089a9ce2-3429-11ed-a261-0242ac120002";
			// create a new book
		//	entity entity = new entity(UUID.fromString(U2), "John Doe", 1,"bank");
		//	entity entity1 = new entity(UUID.fromString(U4), "John Doe", 2,"bank");
//String U1 = "26836e14-3429-11ed-a261-0242ac120002";
			//String U3 = "315e3bf2-3429-11ed-a261-0242ac120002";
			// save the book
			//RepositoryClient.save(entity);

			// create and save new pages
			//RepositoryAccount.save(new AccountEntity(UUID.fromString(U1), 1, 333,"EUR", entity));
		//	RepositoryAccount.save(new AccountEntity(UUID.fromString(U3), 2, 533,"EUR", entity1));
		//};
	//}
}

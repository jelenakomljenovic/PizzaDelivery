package project.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import project.model.Seller;

@Repository
public interface SellerRepository extends MongoRepository<Seller, String> {

}

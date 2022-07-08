package project.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import project.model.SearchEngine;

public interface SearchEngineRepository extends MongoRepository<SearchEngine, String> {

}

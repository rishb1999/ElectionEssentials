package backend.backendee.repositories;

import backend.backendee.models.Users;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends MongoRepository<Users, String> {
    Users findById(ObjectId id);
    Users findByUserName(String userName);
    Users findByEmail(String email);
    //anything else that is needed?
}
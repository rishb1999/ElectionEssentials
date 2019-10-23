package backend.backendee.repositories;

import backend.backendee.models.Locations;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationsRepository extends MongoRepository<Locations, String> {
    public Locations findBy_id(ObjectId _id);
    //add a way to find by certain location or area
}
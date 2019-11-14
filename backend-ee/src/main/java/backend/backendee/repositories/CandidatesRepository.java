package backend.backendee.repositories;

import backend.backendee.models.Candidates;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CandidatesRepository extends MongoRepository<Candidates, String> {
  public Candidates findBy_id(ObjectId _id);
}
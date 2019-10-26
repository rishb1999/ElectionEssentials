package backend.backendee.controllers;

import backend.backendee.models.Candidates;
import backend.backendee.repositories.CandidatesRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/candidates")
public class CandidatesController {
  @Autowired
  private CandidatesRepository repository;

  @RequestMapping(value = "/view", method = RequestMethod.GET)
  public List<Candidates> getAllCandidates() {
    return repository.findAll();
  }

  @RequestMapping(value = "/{id}", method = RequestMethod.GET)
  public Candidates getCandidateById(@PathVariable("id") ObjectId id) {
    return repository.findBy_id(id);
  }
 
  @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
  public void modifyCandidatesById(@PathVariable("id") ObjectId id, @Valid @RequestBody Candidates candidates) {
    candidates.set_id(id);
    repository.save(candidates);
  }
 
  @RequestMapping(value = "/", method = RequestMethod.POST)
  public Candidates createCandidate(@Valid @RequestBody Candidates candidates) {
    candidates.set_id(ObjectId.get());
    repository.save(candidates);
    return candidates;
  }
 
  @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
  public void deleteCandidates(@PathVariable ObjectId id) {
    repository.delete(repository.findBy_id(id));
  }
}
package backend.backendee.controllers;

import backend.backendee.models.Locations;
import backend.backendee.repositories.LocationsRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;
import java.util.*;

@RestController
@RequestMapping(value = "/locations")
public class LocationsController {
    @Autowired
    private LocationsRepository repository;

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public List<Locations> getAllLocations() { return repository.findAll(); }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public void modifyLocationsById(@PathVariable("id") ObjectId id, @Valid @RequestBody Locations locations) {
        locations.set_id(id);
        repository.save(locations);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Locations createLocation(@Valid @RequestBody Locations locations) {
        locations.set_id(ObjectId.get());
        repository.save(locations);
        return locations;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteLocations(@PathVariable ObjectId id) {
        repository.delete(repository.findBy_id(id));
    }

}
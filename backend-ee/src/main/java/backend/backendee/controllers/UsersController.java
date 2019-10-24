package backend.backendee.controllers;

import backend.backendee.models.Users;
import backend.backendee.repositories.UsersRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/users")
public class UsersController {
    @Autowired
    private UsersRepository repository;

    @RequestMapping(value="/{userName}", method = RequestMethod.GET)
    public Users getUserByUserName(@PathVariable String userName){ return repository.findByUserName(userName); }

    @RequestMapping(value="/{id}", method = RequestMethod.GET)
    public Users getUserById(@PathVariable ObjectId id){ return repository.findById(id); }

    @RequestMapping(value="/", method = RequestMethod.GET)
    public Users getAllUsers() { return repository.findAll(); }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Users createUsers (@Valid @RequestBody Users users) {
        users.set_id(ObjectId.get());
        repository.save(users);
        return users;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteUsers(@PathVariable ObjectId id) {
        repository.delete(repository.findBy_id(id));
    }

}
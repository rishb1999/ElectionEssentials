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
    public List<Users> getAllUsers() { return repository.findAll(); }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public String createUsers (@Valid @RequestBody Users users) {
        String response=verifyNew(users);
        if(response=="Success") {
            users.set_id(ObjectId.get());
            repository.save(users);
        }
        return response;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteUsers(@PathVariable ObjectId id) {
        repository.delete(repository.findById(id));
    }

    @RequestMapping(value = "/{userName}/preferences", method = RequestMethod.POST)
    public void setPreferences(@Valid @RequestBody Map<String, String> issues, String userName){
        Users user = repository.findByUserName(userName);
        user.issues = issues;
    }


    public String verify(String userName, String password){
        String response="";
        Users user = repository.findByUserName(userName);
        if(user==null){
            response = "Invalid. Unknown username";
        } else{
            if(user.password==password){
                response = "Success";
            } else{
                response = "Invalid password";
            }
        }
        return response;
    }

    public String verifyNew(Users user){
        String response="";
        String checkUserName = repository.findByUserName(user.userName);
        String checkEmail = repository.findByEmail(user.email);

        if(user.userName==checkUserName) {
            response = "Invalid. That username is already taken";
        } else if(user.email==checkEmail){
            response = "Invalid. That email is already taken";
        } else if(user.password!=user.confirmPassword){
            response = "Passwords do not match";
        } else{
            response = "Success";
        }
        return response;
    }
}
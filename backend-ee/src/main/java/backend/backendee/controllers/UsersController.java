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
import java.util.HashMap;
import java.util.List;


@RestController
@RequestMapping(value = "/users")
public class UsersController {
    @Autowired
    private UsersRepository repository;

    @RequestMapping(value="/{userName}", method = RequestMethod.GET)
    public Users getUserByUserName(@PathVariable String userName){
        List<Users> collection = repository.findAll();
        for(Users user:collection){
            if(user.getUserName().equals(userName)){
                return user;
            }
        }
        return null;
    }

    @RequestMapping(value="/{id}", method = RequestMethod.GET)
    public Users getUserById(@PathVariable ObjectId id){ return repository.findBy_id(id); }

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
        repository.delete(repository.findBy_id(id));
    }

    @RequestMapping(value = "/{userName}/preferences", method = RequestMethod.POST)
    public void setPreferences(@Valid @RequestBody HashMap<String, String> issues, String userName){
        List<Users> collection = repository.findAll();
        for(Users user:collection){
            if(user.getUserName().equals(userName)){
                //-user.setIssues(issues);
                break;
            }
        }
    }


    public String verify(String userName, String password){
        String response="";
        Users user = null;
        List<Users> collection = repository.findAll();
        for(Users iter:collection){
            if(iter.getUserName().equals(userName)){
                user = iter;
            }
        }
        if(user==null){
            response = "Invalid. Unknown username";
        } else{
            if(user.getPassword()==password){
                response = "Success";
            } else{
                response = "Invalid password";
            }
        }
        return response;
    }

    public String verifyNew(Users user){
        String response="";
        String checkUserName = null;
        String checkEmail = null;

        List<Users> collection = repository.findAll();
        for(Users iter:collection){
            if(iter.getUserName().equals(user.userName)){
                checkUserName = user.getUserName();
            }
        }
        for(Users iter:collection){
            if(iter.getEmail().equals(user.getEmail())){
                checkEmail = user.getEmail();
            }
        }

        if(user.getUserName().equals(checkUserName)) {
            response = "Invalid. That username is already taken";
        } else if(user.getEmail().equals(checkEmail)){
            response = "Invalid. That email is already taken";
        } else if(!user.getPassword().equals(user.getConfirmPassword())){
            response = "Passwords do not match";
        } else{
            response = "Success";
        }
        return response;
    }
}
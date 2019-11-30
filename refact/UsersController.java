package backend.backendee.controllers;

import backend.backendee.models.Users;
import backend.backendee.repositories.UsersRepository;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.*;

import javax.servlet.http.HttpServletResponse;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(value = "/users")
public class UsersController {
    @Autowired
    private UsersRepository repository;

    private Users _user = new Users();

    @RequestMapping(value="/username/{userName}", method = RequestMethod.POST)
    public Users getUserByUserName(@PathVariable("userName") String userName){
        _user.refreshCollection(repository.findAll());
        return _user.findUser(userName);
    }

    @RequestMapping(value="/id/{id}", method = RequestMethod.GET)
    public Users getUserById(@PathVariable("id") ObjectId id){ return repository.findBy_id(id); }

    @RequestMapping(value="/", method = RequestMethod.GET)
    public List<Users> getAllUsers() {
        return  repository.findAll();
    }

    @RequestMapping(value = "/setPreferences/{ans}/{id}", method = RequestMethod.GET)
    public void setPreferences(@PathVariable("ans") String issues, @PathVariable("id") ObjectId id) {
            System.out.println("input: " + issues);
            System.out.println("input: " + id.toString());
            Users user = repository.findBy_id(id);
            System.out.println("username: " + user.getUserName());
            List<String> Issues = Arrays.asList(issues.split(","));
            user.setIssues(Issues);
            repository.save(user);
    }

    @RequestMapping(value = "/getPreferences/{id}", method = RequestMethod.GET)
    public List<String> getPreferences(@PathVariable("id") ObjectId id){
        Users user = repository.findBy_id(id);
        return user.getIssues();
    }

    @RequestMapping(value = "/del/{id}", method = RequestMethod.DELETE)
    public void deleteUsers(@Valid @RequestBody ObjectId id) {
        repository.delete(repository.findBy_id(id));
    }

    @RequestMapping(value = "/create/{ans}", method = RequestMethod.GET)
    public String createUsers (@PathVariable("ans") String information) {
        String [] args = information.split(",");
        Users u = new Users(ObjectId.get(), args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        _user.refreshCollection(repository.findAll());
        String response = _user.verifyNew(u);
        if(response.equals("success")) {
            repository.save(u);
        }
        return response;
    }


    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping(value="/login/{ans}", method = RequestMethod.GET)
    public String verifyUser(@PathVariable("ans") String login, HttpServletResponse resp) {
        String [] loginCred = login.split(",");
        String userName = loginCred[0];
        String passWord = loginCred[1];
        _user.refreshCollection(repository.findAll());
        ArrayList<Object> response = _user.verify(userName, passWord);
        if(response.get(0).equals("success")){
            Users user = (Users) response.get(1);
            return user.getIdString();
        }
        return (String) response.get(0);
    }

}
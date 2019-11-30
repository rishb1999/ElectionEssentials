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

    private List<Users> collection;

    @RequestMapping(value="/username/{userName}", method = RequestMethod.POST)
    public Users getUserByUserName(@PathVariable("userName") String userName){
        return findUser(userName);
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
        //Parsing string now
        //public Users(ObjectId id, String firstName, String lastName, 
        //String email, String timeZone, 
        //String userName, String password, String confirmPassword/*,
        collection = repository.findAll(); // updating local varable
        String [] args = information.split(",");
        Users u = new Users(ObjectId.get(), args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        String response = verifyNew(u);
        if(response.equals("success")) {
            repository.save(u);
        }
        return response;
    }

    private String verifyNew(Users user){
        for(Users iter:collection){
            if(iter.getUserName().equals(user.getUserName())){
                return "Invalid. That username is already taken";
            }
            if(iter.getEmail().equals(user.getEmail())){
                return "Invalid. That email is already taken";
            }
        }
        if(!(user.getPassword().equals(user.getConfirmPassword()))){
            return "Passwords do not match";
        }
        return "success";
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping(value="/login/{ans}", method = RequestMethod.GET)
    public String verifyUser(@PathVariable("ans") String login, HttpServletResponse resp) {
        collection = repository.findAll(); // updating local variable
        String [] loginCred = login.split(",");
        String userName = loginCred[0];
        String passWord = loginCred[1];
        ArrayList<String> reply = verify(userName, passWord); // index 0 holds response, index 1 hold id string if verified
        String response = reply.get(0);
        if(response.equals("success")){
            return reply.get(1);
        }
        return response;
    }

    private ArrayList<String> verify(String userName, String password){
        ArrayList<String> reply = new ArrayList<>(2);
        Users user = findUser(userName);
        if(user==null){
            reply.add("INVALID USERNAME");
        }
        else if(!(user.getPassword().equals(password))){
            reply.add("INVALID PASSWORD");
        }
        else{
            reply.add("success");
            reply.add(user.getIdString());
        }
        return reply;
    }

    private Users findUser(String userName){
        for(Users iter:collection){
            if(iter.getUserName().equals(userName)){
                return iter;
            }
        }
        return null;
    }

}
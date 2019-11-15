package backend.backendee.controllers;

import backend.backendee.models.Users;
import backend.backendee.repositories.UsersRepository;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.*;

import java.net.*;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(value = "/users")
public class UsersController {
    @Autowired
    private UsersRepository repository;

    //private List<Users> collection = repository.findAll();



    @RequestMapping(value="/username/{userName}", method = RequestMethod.POST)
    public Users getUserByUserName(@PathVariable("userName") String userName){
        return findUser(userName);
    }

    @RequestMapping(value="/id/{id}", method = RequestMethod.GET)
    public Users getUserById(@PathVariable("id") ObjectId id){ return repository.findBy_id(id); }

    @RequestMapping(value="/", method = RequestMethod.GET)
    public List<Users> getAllUsers() {
        return  repository.findAll(); //collection;
    }

    @RequestMapping(value = "/setPreferences/{ans}/{id}", method = RequestMethod.GET)
    public void setPreferences(@PathVariable("ans") String issues, @PathVariable("id") ObjectId/*String*/ id) {
            System.out.println("input: " + issues);
            System.out.println("input: " + id.toString());
            Users user = repository.findBy_id(id);//findUserbyId(id);
            System.out.println("username: " + user.getUserName());
            List<String> Issues = Arrays.asList(issues.split(","));
            user.setIssues(Issues);
            repository.save(user);
    }

    @RequestMapping(value = "/getPreferences/{id}", method = RequestMethod.GET)
    public List<String> getPreferences(@PathVariable("id") /*String*/ ObjectId id){
        Users user = repository.findBy_id(id);//findUserbyId(id);
        return user.getIssues();
    }

    @RequestMapping(value = "/del/{id}", method = RequestMethod.DELETE)
    public void deleteUsers(@Valid @RequestBody ObjectId id) {
        repository.delete(repository.findBy_id(id));
    }

    //@RequestMapping(value = "/create", method = RequestMethod.GET)
    @RequestMapping(value = "/create/{ans}", method = RequestMethod.GET)
    public String createUsers (/*@Valid*/ /*@RequestBody Map<String, Object> users*/@PathVariable("ans") String information) {
        //Parsing string now
        //public Users(ObjectId id, String firstName, String lastName, 
        //String email, String timeZone, 
        //String userName, String password, String confirmPassword/*, 
        String [] args = information.split(",");
        Users u = new Users(ObjectId.get(), args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        String response = verifyNew(u);
        if(response.equals("success")) {
            repository.save(u);
        }
        return response;
    }

    public String verifyNew(Users user){
        List<Users> collection = repository.findAll();
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
        String [] loginCred = login.split(",");
        String userName = loginCred[0];
        String passWord = loginCred[1];
        String response = verify(userName, passWord);
        if(response.equals("success")){
            Users user = findUser(userName);
            String id = user.id;
            return id;
        }
        return response;
    }

    public String verify(String userName, String password){
        Users user = findUser(userName);
        if(user==null){
            return "INVALID USERNAME";
        }
        if(!(user.getPassword().equals(password))){
            return "INVALID PASSWORD";
        }
        return "success";
    }

    public Users findUser(String userName){
        List<Users> collection = repository.findAll();
        for(Users iter:collection){
            if(iter.getUserName().equals(userName)){
                return iter;
            }
        }
        return null;
    }

    /*public Users findUserbyId(String id){
        
        System.out.println("=======================================================");
        System.out.println("input id: " + id);
        List<Users>  collection = repository.findAll();
        for(Users iter:collection){
            System.out.println("iter id: " + iter.getIdString());
            if(iter.getIdString().equals(id)){
                return iter;
            }
        }
        return null;
    }*/

}
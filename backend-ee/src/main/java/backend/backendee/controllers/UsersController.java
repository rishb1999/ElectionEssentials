package backend.backendee.controllers;

import backend.backendee.models.Users;
import backend.backendee.repositories.UsersRepository;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
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

    private List<Users> collection = repository.findAll();



    @RequestMapping(value="/username/{userName}", method = RequestMethod.POST)
    public Users getUserByUserName(@PathVariable("userName") String userName){
        return findUser(userName);
    }

    @RequestMapping(value="/id/{id}", method = RequestMethod.GET)
    public Users getUserById(@PathVariable("id") ObjectId id){ return repository.findBy_id(id); }

    @RequestMapping(value="/", method = RequestMethod.GET)
    public List<Users> getAllUsers() { return collection; }

    @RequestMapping(value = "/setPreferences/{ans}", method = RequestMethod.GET)
    public void setPreferences(HttpServletRequest req, @PathVariable("ans") String issues) {
        Cookie[] cookie = req.getCookies();
        if (cookie != null) {
            String userName = cookie[0].getName();
            Users user = findUser(userName);

            List<String> Issues = Arrays.asList(issues.split(","));
            user.setIssues(Issues);
        }
    }

    @RequestMapping(value = "/getPreferences", method = RequestMethod.GET)
    public List<String> getPreferences(HttpServletRequest req){
        Cookie[] cookie = req.getCookies();
        if (cookie != null) {
            String userName = cookie[0].getName();
            Users user = findUser(userName);
            return user.getIssues();
        }
        return null;
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
        if(response.equals("success"){
            Cookie cookie = new Cookie(userName, "username");
            cookie.setHttpOnly(true);
            //cookie.setSecure(true);
            //cookie.setDomain("http://ee461l-election-essentials.appspot.com");
            //cookie.setDomain("http://database-env.tpry6djxqe.us-east-2.elasticbeanstalk.com/users");
            cookie.setPath("/users");
            resp.addCookie(cookie);
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
        for(Users iter:collection){
            if(iter.getUserName().equals(userName)){
                return iter;
            }
        }
        return null;
    }

}
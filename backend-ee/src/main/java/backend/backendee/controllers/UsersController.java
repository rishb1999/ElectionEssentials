package backend.backendee.controllers;

import backend.backendee.models.Users;
import backend.backendee.repositories.UsersRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.*;

@CrossOrigin
@RestController
@RequestMapping(value = "/users")
public class UsersController {
    @Autowired
    private UsersRepository repository;

    private List<Users> collection = repository.findAll();



    @RequestMapping(value="/username/{userName}", method = RequestMethod.POST)
    public Users getUserByUserName(@PathVariable String userName){
        List<Users> collection = repository.findAll();
        for(Users user:collection){
            if(user.getUserName().equals(userName)){
                return user;
            }
        }
        return null;
        return findUser(userName);
    }

    @RequestMapping(value="/id/{id}", method = RequestMethod.GET)
    public Users getUserById(@PathVariable ObjectId id){ return repository.findBy_id(id); }

    @RequestMapping(value="/", method = RequestMethod.GET)
    public List<Users> getAllUsers() { return collection; }

    @RequestMapping(value = "/setPreferences/{ans}", method = RequestMethod.GET)
    public void setPreferences(HttpServletRequest request, @PathVariable("ans") String issues){
        Cookie[] cookie = request.getCookies();
        if (cookies != null) {
            String userName = cookie[0].getName();
            Users user = findUser(userName);

            List<String> Issues = issues.split(",");
            user.setIssues(Issues);
        }
    }

    @RequestMapping(value = "/getPreferences", method = RequestMethod.GET)
    public List<String> getPreferences(HttpServletRequest request){
        Cookie[] cookie = request.getCookies();
        if (cookies != null) {
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
        Users u = new Users(ObjectId.get(), args[0], args[1], args[2],args[3], args[4], args[5], args[6]);
        String response = "";
        if(verify(args[4], args[5]).equals("success")) {
            repository.save(u);
            response = "SUCCESS";
        } else {
            response = "INVALID LOGIN (USER ALREADY EXISTS)";
        }

        return response;
    }

    @RequestMapping(value="/verify", method = RequestMethod.GET)
    public String verifyUser(@Valid @RequestBody Users users) {
        String response = verify(users.userName, users.password, HttpServletResponse response);
        if(response.equals("success"){
            Cookie cookie = new Cookie(users.userName, "username");
            response.add(cookie);
        }
        return response;
    }

    public String verify(String userName, String password){
        if(findUser(userName)==null){
            return "invalid";
        }
        return "success";
    }

    public String verifyNew(Users user){
        String response="";
        Users userr = findUser(user.userName());
        String checkUserName = userr.userName();
        String checkEmail = null;

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

    public Users findUser(String userName){
        for(Users iter:collection){
            if(iter.getUserName().equals(userName)){
                return iter;
            }
        }
        return null;
    }
}
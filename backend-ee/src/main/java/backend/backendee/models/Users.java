package backend.backendee.models;

import java.util.HashMap;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class Users {
    @Id
    public ObjectId _id;

    public String firstName;
    public String lastName;
    public String company;
    public String email;
    public String timeZone;
    public String userName;
    public String password;
    public String confirmPassword;

//    public HashMap<String, Boolean> views;

    public Users(){}

    public Users(ObjectId id, String firstName, String lastName, String company, String email, String timeZone, String userName, Stringd password, String confirmPassword ){
        this._id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.company=company;
        this.timeZone=timeZone;
        this.userName=userName;
        this.password=password;
        this.confirmPassword=confirmPassword;
    }

    public String get_id() { return _id.toHexString(); }
    public void set_id(ObjectId _id) { this._id = _id; }

    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }

    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getTimeZone() { return timeZone; }
    public void setTimeZone(String timeZone) { this.timeZone = timeZone; }

    public String getUserName() { return userName; }
    public void setUserName(String userName) { this.userName = userName; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getConfirmPassword() { return confirmPassword; }
    public void setConfirmPassword(String confirmPassword) { this.confirmPassword = confirmPassword; }

}
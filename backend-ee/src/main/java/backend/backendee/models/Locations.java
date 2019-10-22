package backend.backendee.models;

import java.util.*;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "locations")
public class Locations {
    @Id
    public ObjectId _id;
    public String name;

//    class Coordinates{
//        int latitude;
//        int longitude;
//
//        public Coordinates(int latitude, int longitude){
//            this.latitude = latitude;
//            this.longitude = longitude;
//        }
//
//        public int getLatitude(){ return latitude; }
//        public void setLatitude(int latitude){ this.latitude = latitude}
//
//        public int getLongitude(){ return longitude; }
//        public void setLongitude(int longitude){ this.longitude = longitude; }
//    }

    public int latitude;
    public int longitude;
    //Add a date?

    public Locations() {}

    public Locations(ObjectId _id, String name, int latitude, int longitude) {
        this._id = _id;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    // ObjectId needs to be converted to string
    public String get_id() { return _id.toHexString(); }
    public void set_id(ObjectId _id) { this._id = _id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getLatitude(){ return latitude; }
    public void setLatitude(int latitude){ this.latitude = latitude;}

    public int getLongitude(){ return longitude; }
    public void setLongitude(int longitude){ this.longitude = longitude; }

}